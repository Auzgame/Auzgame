var Audio = {
  ctx: null,
  timer: null,
  allowed: false,
  paused: false,
  postInit: []
};
Audio.init = function (samples, sampleRate) {
  Audio.samples = samples;
  Audio.sampleRate = sampleRate;
  Audio.bufferingDelay = 0.05;
  Audio.bufferDurationSecs = Audio.samples / Audio.sampleRate;
  Audio.nextPlayTime = 0;
  Audio.numSimultaneouslyQueuedBuffers = 5;
  Audio.paused = false;
  Audio.resume();
};
Audio.deinit = function () {
  Audio.allowed = false;
};
Audio.allow = function () {
  Audio.allowed = true;
  for (let i = 0; i < Audio.postInit.length; i++) {
    Audio.postInit[i]();
  }
  Audio.postInit = [];
  document.removeEventListener('keydown', Audio.userInteracted);
  document.removeEventListener('mousedown', Audio.userInteracted);
  document.removeEventListener('touchend', Audio.userInteracted);
};
Audio.queuedata = function () {
  if (true || true) {
    return;
  }
  for (let i = 0; i < Audio.numSimultaneouslyQueuedBuffers; ++i) {
    const secsUntilNextPlayStart = Audio.nextPlayTime - null.currentTime;
    if (secsUntilNextPlayStart >= Audio.bufferingDelay + Audio.bufferDurationSecs * Audio.numSimultaneouslyQueuedBuffers) {
      return;
    }
    Audio.data = _webaudio_fill();
    Audio.push(Audio.data);
  }
};
Audio.push = function () {
  const curtime = null.currentTime;
  if (curtime > Audio.nextPlayTime && Audio.nextPlayTime != 0) {
    err('warning: Audio callback had starved sending audio by ' + (curtime - Audio.nextPlayTime) + ' seconds.');
  }
  const playtime = Math.max(curtime + Audio.bufferingDelay, Audio.nextPlayTime);
  Audio.nextPlayTime = playtime + Audio.bufferDurationSecs;
  const buffer = null.createBuffer(1, Audio.samples, Audio.sampleRate);
  const bufferData = buffer.getChannelData(0);
  for (let i = 0; i < Audio.samples; i++) {
    bufferData[i] = Module.getValue(Audio.data + 4 * i, 'float');
  }
  const source = null.createBufferSource();
  source.buffer = buffer;
  source.connect(null.destination);
  if (typeof source.start != 'undefined') {
    source.start(playtime);
  } else if (typeof source.noteOn != 'undefined') {
    source.noteOn(playtime);
  }
};
Audio.caller = function () {
  return;
  --Audio.numAudioTimersPending;
  Audio.queuedata();
  if (Audio.numAudioTimersPending < Audio.numSimultaneouslyQueuedBuffers) {
    ++Audio.numAudioTimersPending;
    if (Audio.numAudioTimersPending < Audio.numSimultaneouslyQueuedBuffers) {
      ++Audio.numAudioTimersPending;
      setTimeout(Audio.caller, 1.0);
    }
  }
};
Audio.onRuntimeInitialized = function () {
  document.addEventListener('keydown', Audio.userInteracted);
  document.addEventListener('mousedown', Audio.userInteracted);
  document.addEventListener('touchend', Audio.userInteracted);
};
Audio.userInteracted = function (e) {
  Audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (null.state === 'running') {
    Audio.allow();
  } else {
    null.resume().then(function (state) {
      if (null.state === 'running') {
        Audio.allow();
      }
    });
  }
};
Audio.pause = function () {
  Audio.paused = true;
  clearTimeout(null);
  Audio.numAudioTimersPending = 0;
  Audio.timer = null;
  Audio.nextPlayTime = 0;
};
Audio.resume = function () {
  Audio.paused = false;
  Audio.numAudioTimersPending = 1;
  Audio.timer = setTimeout(Audio.caller, 1.0);
};
var isMobile = false;
var postRunDone = false;
var gameGuid = null;
var stretchMode = false;
var gameStarted = false;
var firebaseApp = null;
var firebaseStorage = null;
var singleGameBlob = null;
var singleGameReadCounts = false;
var singleGameReadLedger = false;
var loadProgressFrac = 0;
var gameDownloadProgressFrac = 0;
var portraitStretch = false;
var pokiInited = false;
window.addEventListener('DOMContentLoaded', domContentLoaded);
window.addEventListener('load', function () {
  console.log("Load event received");
  let guid = getGameGuidString();
  if (guid != "") {
    console.log("Found GUID, starting early download route");
    initFirebaseBasic();
    downloadLinkedGame(guid);
  }
  if (inIframe()) {
    document.addEventListener('click', ev => {
      let canvas = document.getElementById('canvas');
      if (canvas) {
        canvas.focus();
      }
      window.addEventListener("keydown", function (e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
        }
      }, false);
    });
  } else {
    window.addEventListener("keydown", function (e) {
      if (e.ctrlKey && ["KeyS", "KeyR"].indexOf(e.code) > -1) {
        e.preventDefault();
      }
    }, false);
  }
});
function setPokiInited() {
  PokiSDK.gameLoadingStart();
  PokiSDK.enableEventTracking(2);
  pokiInited = true;
}
function initPokiSdk() {
  PokiSDK.init().then(() => {
    setPokiInited();
  }).catch(() => {
    setPokiInited();
  });
}
var pokiStopped = true;
function pokiEnsureStop() {
  if (!pokiStopped) {
    PokiSDK.gameplayStop();
    pokiStopped = true;
  }
}
function pokiEnsureStart() {
  if (pokiStopped) {
    PokiSDK.gameplayStart();
    pokiStopped = false;
  }
}
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
function updateLoadProgress() {
  let guid = getGameGuidString();
  let progressMaxValue = guid == "" ? 100 : 200;
  let progressElement = document.getElementById('progress');
  if (progressElement) {
    progressElement.value = Math.round((loadProgressFrac + gameDownloadProgressFrac) * 100);
    progressElement.max = progressMaxValue;
  }
  if (loadProgressFrac >= 1 && (guid == "" || gameDownloadProgressFrac >= 1)) {
    console.log("Loading done");
    showPlayButton();
  }
}
function downloadLinkedGame(guid) {
  console.log("Downloading linked game " + guid);
  let sref = firebaseStorage.ref(`games/${guid}`);
  const fakeProgress = function () {
    if (gameDownloadProgressFrac < 1) {
      gameDownloadProgressFrac += 0.1;
      if (gameDownloadProgressFrac > 0.95) {
        gameDownloadProgressFrac = 0.95;
      } else {
        setTimeout(fakeProgress, 200);
      }
      updateLoadProgress();
    }
  };
  fakeProgress();
  sref.getDownloadURL().then(url => {
    simpleLogC("Got download url " + url);
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = event => {
      let blob = xhr.response;
      singleGameBlob = blob;
      gameDownloadProgressFrac = 1;
      updateLoadProgress();
    };
    xhr.onerror = function () {
      simpleLogC("Unable to download file, XMLHttpRequest error");
      showLoadError("Unable to load game");
    };
    xhr.open('GET', url);
    xhr.send();
  }).catch(error => {
    showLoadError("Unable to load game");
    simpleLogC("Unable to download file, error: " + error.message);
  });
}
var showPlayButtonAttempts = 0;
function showPlayButton() {
  if (!postRunDone) {
    showPlayButtonAttempts++;
    if (showPlayButtonAttempts == 10) {
      alert("Could not initialize the game. Try to reload the page");
      return;
    }
    setTimeout(showPlayButton, 250);
    console.log("Not ready to show play button yet...");
    return;
  }
  console.log("Showing play button");
  var parent = document.getElementById("progress_or_play");
  parent.style.lineHeight = '1em';
  let accepted = false;
  try {
    accepted = localStorage.getItem('accepted-pp');
  } catch (err) {}
  if (accepted) {
    parent.innerHTML = `
    <a class="overlay_button" id="play_button" href="#" onclick="checkStartGame(); return false;">
    Play
    </a>
    `;
    if (parseUrlArgumentInt("istart")) {
      checkStartGame(true);
    }
  } else {
    parent.innerHTML = `
    <p id="terms_p">
    By playing Fancade you agree to<br/>occasional ads and the <a href="https://www.fancade.com/privacy/" target="_blank" >Privacy Policy</a>
    </p>
    <a class="overlay_button" id="play_button" href="#" onclick="checkStartGame(); return false;">
    OK
    </a>
    `;
  }
}
function domContentLoaded() {
  console.log("DOM content loaded event received");
  initPokiSdk();
  let canvas = document.getElementById('canvas');
  canvas.addEventListener("contextmenu", stopContextMenu);
  if (!postRunDone) {
    resizeCanvas(false);
  }
  let vanityUrl = getMeta("fancade:vanity_url");
  if (vanityUrl.length > 0) {
    history.replaceState({}, '', vanityUrl);
  }
  window.addEventListener('blur', ev => setGameFocus(false));
  window.addEventListener('focus', ev => setGameFocus(true));
  canvas.onpointerdown = beginPointerDrag;
  canvas.onpointerup = endPointerDrag;
}
function beginPointerDrag(e) {
  let canvas = document.getElementById('canvas');
  canvas.setPointerCapture(e.pointerId);
}
function endPointerDrag(e) {
  let canvas = document.getElementById('canvas');
  canvas.releasePointerCapture(e.pointerId);
}
function setGameFocus(f) {
  if (postRunDone) {
    Module.ccall('set_game_focus', 'v', ['number'], [f]);
  }
}
function toggleStretchMode() {
  stretchMode = !stretchMode;
  resizeCanvas(true);
}
function canBeGameGuid(str) {
  return str && str.match('([A-F]|[0-9]){16}');
}
function getGameGuidString() {
  if (gameGuid != null) {
    return gameGuid;
  }
  gameGuid = "";
  let str = window.location.href;
  if (str) {
    for (let i = 0; i <= str.length - 16; i++) {
      let subStr = str.substr(i, 16);
      if (subStr && subStr.match('([A-F]|[0-9]){16}')) {
        gameGuid = subStr;
      }
    }
  }
  if (gameGuid == "") {
    str = getMeta("fancade:guid");
    if (str && str.match('([A-F]|[0-9]){16}')) {
      gameGuid = str;
    }
  }
  if (gameGuid == "") {
    str = parseUrlArgument("override_guid");
    if (str && str.match('([A-F]|[0-9]){16}')) {
      gameGuid = str;
    }
  }
  console.log("Got GUID string '" + gameGuid + "'");
  return gameGuid;
}
function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
}
function deepLinkedGameStarted() {
  hideOverlayGradient();
}
function getCSSRgb(color) {
  return `rgb(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])})`;
}
let lastGradientStyleStr = "";
let lastDeepLinkLoadFraction = 0;
function getGradientStr(frac) {
  let fromColor = [frac * 0x70, frac * 0xe1, frac * 0xfd];
  let toColor = [frac * 0x00, frac * 0xa2, frac * 0xff];
  return `linear-gradient(135deg, ${`rgb(${Math.round(fromColor[0])}, ${Math.round(fromColor[1])}, ${Math.round(fromColor[2])})`}, ${`rgb(${Math.round(toColor[0])}, ${Math.round(toColor[1])}, ${Math.round(toColor[2])})`})`;
}
function setDeepLinkLoadingFraction(frac) {
  let gradient = document.getElementById('gradient');
  let str = getGradientStr(frac);
  if (lastGradientStyleStr != str) {
    lastGradientStyleStr = str;
    gradient.style.backgroundImage = str;
  }
  if (lastDeepLinkLoadFraction < 0.95 && frac >= 0.95) {
    console.log("Showing long time loading message");
    gradient.innerHTML = `
    <div class="middle center">
      <p class="deeplink_message">It is taking longer than expected to load this game...</p>
      <a class="overlay_button" id="play_button" href="https://play.fancade.com" >Go to Fancade</a>  
    </div>
    `;
  } else if (lastDeepLinkLoadFraction < 0.01 && frac >= 0.01) {
    console.log("Showing loading message");
    gradient.innerHTML = `
    <div class="middle center">
      <p class="deeplink_message">Loading...</p>
    </div>
    `;
  }
  lastDeepLinkLoadFraction = frac;
}
function hideOverlayGradient() {
  var gradient = document.getElementById('gradient');
  gradient.style.display = "none";
}
var showedStartGameError = false;
function checkStartGame(ignoreErrors) {
  console.log("Checking if the game should start...");
  try {
    if (pokiInited) {
      console.log("Preroll done, hiding overlay");
      var playContent = document.getElementById('play_content');
      playContent.style.display = "none";
      let guid = getGameGuidString();
      if (guid == "") {
        hideOverlayGradient();
      } else {
        setDeepLinkLoadingFraction(0.0);
      }
      console.log("Registering event listeners");
      window.addEventListener("beforeunload", function (event) {
        Module.ccall('app_terminate_if_necessary', 'v');
      });
      window.addEventListener("unload", function (event) {
        Module.ccall('app_terminate_if_necessary', 'v');
      });
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === 'visible') {
          Module.ccall('app_resume', 'v');
        } else {
          Module.ccall('app_pause', 'v');
        }
      });
      PokiSDK.gameLoadingFinished();
      console.log("Starting game");
      console.log("Confirming accept in app");
      Module.ccall('user_accepted_and_clicked', 'v');
      gameStarted = true;
      setTimeout(updateStretchButton, 3000);
      try {
        localStorage.setItem('accepted-pp', 'yes');
      } catch (err3) {}
    }
  } catch (err) {
    if (ignoreErrors) {
      return;
    }
    if (!showedStartGameError) {
      let foundModuleAsm = false;
      let additionalInfo = "";
      try {
        if (Module.asm) {
          foundModuleAsm = true;
        }
      } catch (err2) {}
      if (!foundModuleAsm) {
        additionalInfo += "Could not find Module.asm";
      }
      alert(`Error when starting game. Try to reload the page. Error message: ${err}. ${additionalInfo}`);
      showedStartGameError = true;
    }
  }
}
function simpleLogC(str) {
  if (postRunDone) {
    Module.ccall('log_simple', 'v', ['string'], [str]);
  } else {
    console.log(str);
  }
}
function appErrorC(code, str) {
  if (postRunDone) {
    Module.ccall('app_error', 'v', ['number', 'string'], [code, str]);
  } else {
    console.error(str, code);
  }
}
function simpleAppErrorC(str) {
  appErrorC(1, str);
}
function parseUrlArgument(name) {
  let result = "";
  let str = window.location.search;
  if (str.length > 0 && str[0] == '?') {
    var arr = str.substr(1).split('&');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith(name + "=")) {
        result = arr[i].substr(name.length + 1);
        break;
      }
    }
  }
  return result;
}
function parseUrlArgumentInt(name) {
  let str = parseUrlArgument(name);
  let parsed = parseInt(str);
  if (isNaN(parsed)) {
    return 0;
  } else {
    return parsed;
  }
}
function getStartInEditMode() {
  return parseUrlArgumentInt("edit");
}
function getStartInstantly() {
  return parseUrlArgumentInt("istart");
}
function getUrlLevelIndex() {
  let path = window.location.pathname.substr(1);
  let slashIndex = path.indexOf("/");
  if (slashIndex >= 0 && path.length > slashIndex + 1) {
    let levelIndexStr = path.substring(slashIndex + 1);
    let slashIndex2 = levelIndexStr.indexOf("/");
    if (slashIndex2 >= 0) {
      levelIndexStr = levelIndexStr.substring(0, slashIndex2);
    }
    let levelIndex = parseInt(levelIndexStr);
    if (!isNaN(levelIndex)) {
      return levelIndex - 1;
    }
  }
  let level = parseUrlArgumentInt("lv");
  if (level > 0) {
    return level - 1;
  } else {
    return -1;
  }
}
function goFullscreen() {
  Module.requestFullscreen(false, true);
}
function resizeCanvas(informC) {
  let fullscreen = !!document.fullscreenElement;
  let iw = window.innerWidth;
  let ih = window.innerHeight;
  let canvas = document.getElementById('canvas');
  let border = document.getElementById('canvas_border');
  let maxW = parseUrlArgumentInt("max_w");
  let maxH = parseUrlArgumentInt("max_h");
  let aspectRatioW = parseUrlArgumentInt("ar_w");
  let aspectRatioH = parseUrlArgumentInt("ar_h");
  let targetW = maxW;
  let targetH = maxH;
  let forceWidth = false;
  let forceHeight = false;
  let forceAr = false;
  if (stretchMode || fullscreen) {
    targetW = iw;
    targetH = ih;
  } else {
    if (targetW <= 0) {
      targetW = 1024;
    } else {
      forceWidth = true;
    }
    if (targetH <= 0) {
      targetH = 768;
    } else {
      forceHeight = true;
    }
    if (aspectRatioW < 0.01) {
      aspectRatioW = 16.0;
    } else {
      forceAr = true;
    }
    if (aspectRatioH < 0.01) {
      aspectRatioH = 9.0;
    } else {
      forceAr = true;
    }
    let ar = aspectRatioH / aspectRatioW;
    let fitWithinLimits = function () {
      targetW = Math.min(targetW, iw);
      if (forceWidth) {
        targetW = Math.min(maxW, targetW);
      }
      targetH = Math.min(targetH, ih);
      if (forceHeight) {
        targetH = Math.min(maxH, targetH);
      }
    };
    let enforceAr = function () {
      if (forceAr) {
        if (forceWidth) {
          targetH = targetW * ar;
          if (targetH > ih) {
            targetH = ih;
            targetW = targetH / ar;
          }
        } else if (forceHeight) {
          targetW = targetH / ar;
          if (targetW > iw) {
            targetW = iw;
            targetH = targetW * ar;
          }
        } else {
          targetH = ih;
          targetW = targetH / ar;
          if (targetW > iw) {
            targetW = iw;
            targetH = targetW * ar;
          }
        }
      }
    };
    fitWithinLimits();
    enforceAr();
  }
  let styleW = targetW;
  let styleH = targetH;
  if (iw < targetW || ih < targetH) {
    styleW = Math.min(iw, targetW);
    styleH = Math.min(ih, targetH);
  }
  let bottom = document.getElementById("bottom_content");
  let bottom_text = document.getElementById("bottom_text");
  let styleMarginTop = 0;
  let spaceLeftW = iw - styleW;
  let spaceLeftH = ih - styleH;
  portraitStretch = false;
  if (!forceAr && !forceHeight && !forceWidth && ih > iw) {
    if (spaceLeftH <= 90) {
      styleH = ih;
      spaceLeftH = 0;
      portraitStretch = true;
    } else if (spaceLeftH > 150) {
      spaceLeftH = 151;
      styleH = ih - spaceLeftH;
    }
  }
  if (spaceLeftH > 90) {
    if (spaceLeftW > 0) {
      styleMarginTop = 10;
    }
    bottom.style.display = "block";
  } else {
    styleMarginTop = 0.5 * spaceLeftH;
    bottom.style.display = "none";
  }
  if (spaceLeftH > 150) {
    bottom_text.style.display = "block";
  } else {
    bottom_text.style.display = "none";
  }
  canvas.width = styleW * window.devicePixelRatio;
  canvas.height = styleH * window.devicePixelRatio;
  border.style.marginTop = styleMarginTop + 'px';
  let gradient = document.getElementById("gradient");
  let webViewContent = document.getElementById("webview_content");
  [gradient, webViewContent].forEach(e => {
    if (e) {
      e.style.left = (iw - styleW) * 0.5 + 'px';
    }
  });
  [canvas, gradient, webViewContent].forEach(e => {
    if (e) {
      e.style.width = styleW + 'px';
      e.style.height = styleH + 'px';
      e.style.borderRadius = (spaceLeftW > 0 && spaceLeftH > 0 ? 20 : 0) + 'px';
    }
  });
  if (gameStarted) {
    updateStretchButton();
  }
  simpleLogC("resizing canvas");
  if (informC) {
    Module.ccall("update_screen_size", "v", ["number", "number", "number"], [canvas.width, canvas.height, window.devicePixelRatio]);
  }
}
function updateStretchButton() {
  let iw = window.innerWidth;
  let ih = window.innerHeight;
  let stretchButton = document.getElementById("stretch_button");
  if (iw > 1024 || ih > 768) {
    if (!stretchButton) {
      stretchButton = document.createElement("a");
      stretchButton.innerHTML = "Stretch";
      stretchButton.setAttribute("id", "stretch_button");
      stretchButton.addEventListener("click", ev => {
        toggleStretchMode();
        ev.preventDefault();
        document.getElementById("stretch_button").innerHTML = stretchMode ? "Unstretch" : "Stretch";
      });
      stretchButton.style.position = 'absolute';
      let border = document.getElementById('canvas_border');
      border.appendChild(stretchButton);
    }
    stretchButton.style.display = "block";
    let canvas = document.getElementById('canvas');
    let styleH = canvas.height / window.devicePixelRatio;
    let spaceLeftH = ih - styleH;
    if (stretchMode || spaceLeftH < 50) {
      stretchButton.style.top = styleH - 25 + 'px';
      stretchButton.className = "stretched";
    } else {
      stretchButton.style.top = styleH + 5 + 'px';
      stretchButton.className = "unstretched";
    }
    if (portraitStretch) {
      stretchButton.style.display = "none";
    }
  } else if (stretchButton) {
    stretchButton.style.display = "none";
  }
}
function stopContextMenu(event) {
  event.preventDefault();
  return false;
}
var Module = {
  locateFile: function (path, prefix) {
    if (prefix == "") {
      return "./webapp/" + path;
    }
    return prefix + path;
  },
  preRun: [function () {
    isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    console.log("preRun() called");
  }],
  postRun: [function () {
    console.log("postRun() called");
    document.onfullscreenchange = function () {
      setTimeout(function () {
        resizeCanvas(true);
        if (document.fullscreenElement) {
          let canvas = document.getElementById('canvas');
          simpleLogC("Canvas size " + canvas.width + " x " + canvas.height);
          Module.ccall("update_screen_size", "v", ["number", "number", "number"], [canvas.width, canvas.height, 1]);
        }
      }, 500);
    };
    window.addEventListener('resize', event => resizeCanvas(true), false);
    resizeCanvas(true);
    console.log("Registering keydown listener");
    window.addEventListener('keydown', e => {
      ccall("keydown_browser", "v", ["string"], [e.key]);
    });
    Audio.onRuntimeInitialized();
    postRunDone = true;
  }],
  print: function () {
    return function (text) {
      if (arguments.length > 1) {
        text = Array.prototype.slice.call(arguments).join(' ');
      }
      console.log(text);
    };
  }(),
  printErr: function (text) {
    if (arguments.length > 1) {
      text = Array.prototype.slice.call(arguments).join(' ');
    }
    console.error(text);
  },
  canvas: function () {
    var canvas = document.getElementById('canvas');
    canvas.addEventListener("webglcontextlost", function (e) {
      console.log("Context lost");
      e.preventDefault();
      Module.ccall("app_set_opengl_context_lost", "v", ["number"], [1]);
    }, false);
    canvas.addEventListener("webglcontextrestored", function (event) {
      console.log("Context restored");
      Module.ccall("opengl_resume", "v");
    }, false);
    return canvas;
  }(),
  setStatus: function (text) {
    if (!Module.setStatus.last) {
      Module.setStatus.last = {
        time: Date.now(),
        text: ''
      };
    }
    if (text === Module.setStatus.last.text) {
      return;
    }
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Module.setStatus.last.time < 30) {
      return;
    }
    Module.setStatus.last.time = now;
    Module.setStatus.last.text = text;
    if (m) {
      text = m[1];
      loadProgressFrac = parseInt(m[2]) / parseInt(m[4]);
    } else {
      loadProgressFrac = 1;
    }
    updateLoadProgress();
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
  },
  postMainLoop: function () {
    Audio.queuedata();
  }
};
function showLoadError(message) {}
function initFirebaseBasic() {
  console.log("Init firebase basic");
  if (firebaseApp != null) {
    console.log("Firebase already inited");
    return;
  }
  let _0x185f9e;
  if (true) {
    const _0x25584c = {
      "apiKey": "AIzaSyCHBBtTP1ujjZB5d20cSQ3tta9gmY_zlPE",
      "authDomain": "fancade-live.firebaseapp.com",
      databaseURL: "https://fancade-live.firebaseio.com",
      "projectId": "fancade-live",
      storageBucket: "fancade-live.appspot.com",
      messagingSenderId: "489167797261",
      "appId": "1:489167797261:web:d70b8b735500ce93262944",
      measurementId: "G-PLPTPCSGS7"
    };
    _0x185f9e = _0x25584c;
  } else {
    const _0x4e0a55 = {
      "apiKey": "AIzaSyCRF7ScBil1XrzqCkDJK04eg9vCCgA0kP0",
      "authDomain": "fancade-test.firebaseapp.com",
      databaseURL: "https://fancade-test.firebaseio.com",
      "projectId": "fancade-test",
      storageBucket: "fancade-test.appspot.com",
      messagingSenderId: "411129660603",
      "appId": "1:411129660603:web:478bcd94429e486f96159e"
    };
    _0x185f9e = _0x4e0a55;
  }
  firebaseApp = firebase.initializeApp(_0x185f9e);
  firebaseStorage = firebase.storage(firebaseApp);
}
var notifications = [];
var webViewIframe = null;
var storedScripts = [];
var webviewDomLoaded = false;
function postStored() {
  for (var i = 0; i < storedScripts.length; i++) {
    webViewIframe.contentWindow.postMessage("eval:" + storedScripts[i], '*');
  }
  storedScripts = [];
}
function onWebviewDomContentLoaded() {
  webviewDomLoaded = true;
  postStored();
}
function webViewPostMessage(message) {
  Module.ccall("app_webview_message", "v", ["string"], [message]);
}
function webViewError(type, message) {
  webViewPostMessage(`error|${type}|${message}`);
}
function webViewClose() {
  try {
    var content = document.getElementById("webview_content");
    content.style.display = 'none';
    if (content.contains(webViewIframe)) {
      webviewDomLoaded = false;
      webViewIframe.contentWindow.removeEventListener('DOMContentLoaded', onWebviewDomContentLoaded);
      content.removeChild(webViewIframe);
    }
    setTimeout(function () {
      Module.ccall("set_game_focus", "v", ["number"], [true]);
    }, 100);
  } catch (err) {
    webViewError("unknown", err);
  }
}
function webViewOpen(path) {
  try {
    let arr = readLocalFile(path);
    let html = new TextDecoder("utf-8").decode(arr);
    let betaStr = window.location.href.endsWith('/beta') ? '_beta' : '';
    html = html.replace("common.js", `./webapp/view_common${betaStr}.js`);
    html = html.replace("common.css", `./webapp/view_common${betaStr}.css`);
    if (webViewIframe == null) {
      window.onmessage = function (e) {
        if (typeof e.data !== 'string') {
          return;
        }
        webViewPostMessage(e.data);
      };
    }
    var content = document.getElementById("webview_content");
    content.style.display = 'block';
    webViewIframe = document.createElement('iframe');
    webViewIframe.classList.add('webview');
    webViewIframe.allowtransparency = true;
    content.appendChild(webViewIframe);
    webViewIframe.contentWindow.document.open();
    webviewDomLoaded = false;
    webViewIframe.contentWindow.addEventListener('DOMContentLoaded', onWebviewDomContentLoaded);
    webViewIframe.contentWindow.document.write(html);
    webViewIframe.contentWindow.document.close();
  } catch (err) {
    webViewError("unknown", err);
  }
}
function webViewExecuteJS(jsString) {
  try {
    if (!webviewDomLoaded) {
      storedScripts.push(jsString);
    } else {
      webViewIframe.contentWindow.postMessage("eval:" + jsString, '*');
    }
  } catch (err) {
    webViewError("unknown", err);
  }
}
function getHostname() {
  let hostname = window.location.hostname.split(':')[0];
  let lengthBytes = lengthBytesUTF8(hostname) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(hostname, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}
function getGameGuidArgument() {
  let guid = getGameGuidString();
  let lengthBytes = lengthBytesUTF8(guid) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(guid, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}
function parseUrlArgumentString(name) {
  let str = parseUrlArgument(name);
  let lengthBytes = lengthBytesUTF8(str) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(str, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}
function writeLocalFile(buffer, pathDevice) {
  let arr = new Uint8Array(buffer);
  let stream = FS.open(pathDevice, 'w');
  FS.write(stream, arr, 0, arr.length, 0);
  FS.close(stream);
}
function readLocalFile(path) {
  let stream = FS.open(path, 'r');
  FS.llseek(stream, 0, 2);
  let fileSize = stream.position;
  FS.llseek(stream, 0, 0);
  let buf = new Uint8Array(fileSize);
  FS.read(stream, buf, 0, fileSize, 0);
  FS.close(stream);
  return buf;
}
function resizeModal(modal, modalContent, maxWidth) {
  let iw = window.innerWidth;
  let ih = window.innerHeight;
  let top = Math.min(0.15 * ih, 100);
  let w = Math.min(iw, maxWidth);
  modal.style.display = "block";
  modalContent.style.width = w + "px";
  modal.style.paddingTop = top + "px";
  return w;
}
function downloadFileInBrowser(path) {
  if (path) {
    let buf = readLocalFile(path);
    let blob = new Blob([buf.buffer], {
      type: "application/octet-stream"
    });
    let fileUrl = URL.createObjectURL(blob);
    var pom = document.createElement('a');
    pom.href = fileUrl;
    let filename = "game";
    let index = path.lastIndexOf("/");
    if (index >= 0) {
      filename = path.substr(index + 1);
    }
    pom.setAttribute('download', filename);
    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }
}
function copyTextFromElement(inputId) {
  var copyText = document.getElementById(inputId);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
function showShareFileModal(path, text, guid) {
  var modal = document.getElementById("modal_parent");
  var modalContent = document.getElementById("modal_content");
  var shareModalContent = document.getElementById("share_file_modal_content");
  var closeButton = document.getElementById("modal_close_button");
  shareModalContent.innerHTML = "";
  shareModalContent.style.display = "block";
  let w = resizeModal(modal, modalContent, 500);
  let img = null;
  if (path) {
    img = document.createElement("img");
    img.width = w - 200;
    img.height = w - 200;
    shareModalContent.appendChild(img);
    setTimeout(() => {
      let buf = readLocalFile(path);
      let blob = new Blob([buf.buffer], {
        type: "image/png"
      });
      let fileUrl = URL.createObjectURL(blob);
      img.src = fileUrl;
    }, 10);
  }
  let url = "https://fancade.com";
  if (guid) {
    url = "https://play.fancade.com/" + guid;
  }
  let urlEncoded = encodeURIComponent(url);
  if (guid) {
    var linkP = document.createElement("p");
    shareModalContent.appendChild(linkP);
    linkP.innerHTML = `<input id="share_url_input" type="url" size="${url.length}" readonly="" value="${url}" ><a class="button" id="copy_button" href="#" onclick="copyTextFromElement('share_url_input'); return false;">Copy</a>`;
    var shareP = document.createElement("p");
    shareModalContent.appendChild(shareP);
    shareP.innerHTML = `<span class='link_image_button'><a href='${`https://twitter.com/intent/tweet?url=${urlEncoded}`}' target='_blank'><img src='./webapp/twitter.png' width='${45}' height='${45}' alt='Tweet on Twitter' /></a></span>
      <span class='link_image_button'><a href='${`https://www.facebook.com/dialog/share?app_id=349793526803234&display=popup&href=${urlEncoded}`}' target='_blank'><img src='/webapp/facebook.png' width='${45}' height='${45}' alt='Share on Facebook' /></a></span>
      <span class='link_image_button'><a href='${"https://discord.gg/P8VHwVq"}' target='_blank'><img src='./webapp/discord.png' width='${45}' height='${45}' alt='Discuss on Discord' /></a></span>`;
  }
  shareFileClickCallback = event => {
    if (event.target == modal || event.target == closeButton) {
      shareModalContent.style.display = "none";
      modal.style.display = "none";
      Module.ccall("share_file_finished", "v", ["number"], [1]);
      window.removeEventListener("click", shareFileClickCallback);
    }
  };
  window.addEventListener("click", shareFileClickCallback);
}
function showStoreLinkModal(text, callbackId, showAppStoreButtons, showExitButtons) {
  let modal = document.getElementById("modal_parent");
  let modalContent = document.getElementById("modal_content");
  let storeModalContent = document.getElementById("store_link_modal_content");
  let w = resizeModal(modal, modalContent, 500);
  let cw = w - 100;
  let as_img_w = cw * 0.46875;
  let ps_img_w = cw * 0.53125;
  let img_h = as_img_w / 3;
  let html = `<p class="store_modal_text">${text}</p>`;
  if (showAppStoreButtons) {
    html += `<p class="store_modal_text">Get the full experience by downloading Fancade from Play Store or App Store!</p>
    <div class='center'><a href='https://apps.apple.com/us/app/fancade/id1280404080' target='_blank'><img src='./webapp/appstore.png' alt='App Store' width='${as_img_w}' height='${img_h}'></a>&nbsp;<a href='https://play.google.com/store/apps/details?id=com.martinmagni.fancade' target='_blank'><img src='./webapp/playstore.png' alt='Play Store' width='${ps_img_w}' height='${img_h}' ></a></div>`;
  }
  if (showExitButtons) {
    html += `<div class='center' ><a class='overlay_button' href='https://play.fancade.com' >Yes</a><a class='overlay_button' href='' onclick='return false;' >No</a></div>`;
  }
  storeModalContent.innerHTML = html;
  storeModalContent.style.display = "block";
  window.addEventListener("click", function (event) {
    storeModalContent.style.display = "none";
    modal.style.display = "none";
    switch (callbackId) {
      case 0:
        Module.ccall('iap_cancelled', 'v');
        break;
    }
  }, {
    once: true
  });
}
function notificationCancelAll() {
  for (let i = 0; i < notifications.length; i++) {
    clearTimeout(notifications[i].timeoutId);
  }
  notifications = [];
}
function notificationCallback(data) {
  Module.ccall('notification_show_inapp', 'v', ["string", "string"], [data.title, data.text]);
  notifications = notifications.filter(d => d.requestCode == data.requestCode);
}
function notificationSchedule(seconds, requestCode, title, text) {
  if (seconds < 0) {
    let data = notifications.find(d => d.requestCode == requestCode);
    if (data) {
      clearTimeout(data.timeoutId);
    }
    notifications = notifications.filter(d => d.requestCode == requestCode);
  } else {
    let data = {
      requestCode: requestCode,
      title: title,
      text: text
    };
    data.timeoutId = setTimeout(notificationCallback, seconds * 1000, data);
    notifications.push(data);
  }
}
function fetchUrl(url, id, useToken) {
  let str = null;
  performRequest(url, useToken, false).then(result => {
    str = result;
  }).finally(() => {
    let str_ptr = Module.stringToNewUTF8(str);
    Module._web_command_fetch_url_done(str_ptr, id);
  });
}
function firebasePause() {}
function firebaseResume() {}
function adInterstitialShow() {
  simpleLogC("adInterstitialShow()");
  PokiSDK.commercialBreak().then(() => {
    setGameFocus(true);
    Module.ccall("ad_interstitial_on_showed", "v", ["number"], [1]);
  });
}
function adRewardedShow() {
  simpleLogC("adRewardedShow()");
  pokiEnsureStop();
  PokiSDK.rewardedBreak().then(success => {
    Module.ccall("ad_rewarded_on_showed", "v", ["number"], [success ? 1 : 0]);
    if (success) {
      Module.ccall("ad_rewarded_on_rewarded", "v");
    }
  });
}
function adInit() {
  simpleLogC("adInit()");
  setTimeout(() => Module.ccall("ad_on_inited", "v"), 100);
}
function firebaseDeinit() {
  firebaseApp.delete().then(result => {
    simpleLogC("Deleted firebase app");
  }, error => {
    simpleLogC("Error when deleting firebase app " + error.message);
  });
}
function firebaseRemoteConfigFetch() {
  firebaseRemoteConfig.fetchAndActivate().then(result => {
    let inGameGet = firebaseRemoteConfig.getString("in_game_get");
    if (inGameGet == "yes") {
      Module.ccall("set_abtest_in_game_get", "v", ["number"], [1]);
    }
    let rcAdTime = firebaseRemoteConfig.getNumber("ad_time");
    let rcAdTimeOffline = firebaseRemoteConfig.getNumber("ad_time_offline");
    if (rcAdTime > 0) {
      Module.ccall("set_ad_freq", "v", ["number"], [rcAdTime]);
    }
    if (rcAdTimeOffline > 0) {
      Module.ccall("set_ad_duration_offline", "v", ["number"], [rcAdTimeOffline]);
    }
    Module.ccall("news_update_started", "v");
    for (let i = 0; i < 10; i++) {
      let formattedNumber = i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      let format = firebaseRemoteConfig.getString("news" + formattedNumber);
      if (format) {
        Module.ccall("news_create", "v", ["string"], [format]);
      }
    }
    Module.ccall("news_update_finished", "v");
  }, error => {
    simpleLogC("firebaseRemoteConfigFetch() error " + error);
  });
}
function getServerTimeSeconds() {
  const xhr = new XMLHttpRequest();
  xhr.onload = event => {
    let timeStr = xhr.getResponseHeader("Date");
    let date = new Date(timeStr);
    let timezoneDiff = new Date(1970, 0, 1).getTime();
    let millis = date.getTime() - timezoneDiff;
    Module.ccall("ntp_set_server_time", "v", ["number"], [millis / 1000]);
  };
  xhr.onerror = function () {
    simpleLogC("Error when fetching server time");
  };
  xhr.open('GET', '/');
  xhr.setRequestHeader("Content-Type", "text/html");
  xhr.send('');
}
function firebaseWriteNick(nick, name) {
  performApiRequest(`/user?n=${nick}&w=1`, true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    Module.ccall("set_user_nick", "v", ["string"], [nick]);
  }, error => {
    appErrorC(1008, error);
  });
}
function updateDailyRewardStatus(gems, force) {
  let seconds = Math.round(Date.now() / 1000);
  if (force || checkedDailyRewardPossibleTime + 600 < seconds) {
    checkedDailyRewardPossibleTime = seconds;
    performApiRequest(`/user?w=1&g=${gems}&r=dr`, true).then(result => {
      if (checkUpdateRequired(result)) {
        dailyRewardPossible = false;
        return;
      }
      dailyRewardPossible = true;
    }, error => {
      dailyRewardPossible = false;
    });
  }
}
function firebaseReadGems() {
  simpleLogC("firebaseReadGems()");
  performApiRequest(`/user`, true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    let gems = result && result.gold ? result.gold : 0;
    Module.ccall("menu_read_gems_finished", "v", ["number"], [gems]);
    updateDailyRewardStatus(gems, false);
  }, error => {
    appErrorC(1030, error);
  });
}
function firebaseWriteGems(gems) {
  simpleLogC(`firebaseWriteGems(${gems})`);
  performApiRequest(`/user?w=1&g=${gems}`, true).then(result => {
    checkUpdateRequired(result);
  }, error => {
    appErrorC(1010, error);
  });
}
function firebaseWriteBuys(guid, timeStr, gems) {
  performApiRequest(`/user?w=1&g=${gems}&guid=${guid}`, true).then(result => {
    checkUpdateRequired(result);
  }, error => {
    appErrorC(1032, error);
  });
}
let dailyRewardInProgress = false;
let dailyRewardGems = 0;
let checkedDailyRewardPossibleTime = 0;
let dailyRewardPossible = false;
function writeReward(gems, type, errorCode) {
  if (!dailyRewardPossible) {
    return;
  }
  dailyRewardGems = gems;
  if (dailyRewardInProgress) {
    return;
  }
  dailyRewardInProgress = true;
  setTimeout(() => {
    dailyRewardInProgress = false;
    performApiRequest(`/user?w=1&g=${dailyRewardGems}&r=${type}`, true).then(result => {
      checkUpdateRequired(result);
    }, error => {
      appErrorC(errorCode, error);
    });
  }, 1000);
}
function writeDailyReward(gems) {
  if (!dailyRewardPossible) {
    return;
  }
  writeReward(gems, 'dr', 1036);
}
function writeDailyStreakReward(gems) {
  writeReward(gems, 'dsr', 1039);
}
function stateMenuDeepLinkStop(guid, version) {
  Module.ccall("state_menu_deeplink_stop", "v", ["string", "number"], [guid, version]);
}
function firebaseUpload(pathImage, pathGame, guid, title, description, seconds, storagePrefix) {
  let path_remote_image = "images" + storagePrefix + "/" + guid + ".webp";
  let path_remote_game = "games" + storagePrefix + "/" + guid;
  performApiRequest("/user?b=1", true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    if (result && result.b) {
      Module.ccall("set_user_banned", "v", ["number"], [1]);
      simpleAppErrorC(result.b);
    } else {
      let buf = readLocalFile(pathImage);
      let metadata = {
        customMetadata: {
          "uid": firebaseAuth.currentUser.uid
        }
      };
      firebaseStorage.ref(path_remote_image).put(buf, metadata).then(result => {
        let buf = readLocalFile(pathGame);
        firebaseStorage.ref(path_remote_game).put(buf, metadata).then(result => {
          Module.ccall("moderation_publish_perform", "v", [], []);
        }, error => {
          simpleLogC("put game request error");
          appErrorC(1021, error.message);
        });
      }, error => {
        simpleLogC("put image request error");
        appErrorC(1020, error.message);
      });
    }
  }, error => {
    simpleLogC("Error when fetching bans");
    appErrorC(1019, error.message);
  });
}
function firebaseReadGame(hi, guid) {
  simpleLogC("firebaseReadGame()");
  performApiRequest(`/games2?g=${guid}&gs=1&u=1&tu=1&p=1`, true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    if (result && !(Object.keys(result).length === 0)) {
      let price = 0;
      if (result.p) {
        price = 1;
      }
      Module.ccall("menu_read_game_finished", "v", ["number", "string", "string", "number", "string", "string"], [hi, guid, result.u, price, result.gs && result.gs.length > 0 ? result.gs[i] : '', result.gs && result.gs.length > 1 ? result.gs[i] : '']);
    } else {
      simpleLogC("Game not found");
      appErrorC(2, null);
    }
  }, error => {
    simpleLogC("Error when getting game " + guid);
    simpleAppErrorC(error);
  });
}
function firebaseReadCounts(hi, guid, incPlay) {
  if (guid == getGameGuidString()) {
    singleGameReadCounts = true;
  }
  performApiRequest(`/games2?g=${guid}&cu=1&cp=1`, true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    let up = result && result.cu ? result.cu : 0;
    let play = result && result.cp ? result.cp : 0;
    Module.ccall("menu_read_counts_finished", "v", ["number", "string", "number", "number"], [hi, guid, up, play]);
    if (incPlay) {
      let inc = Module.ccall('play_counter_falloff', 'number', ['number'], [play]);
      if (inc > 0) {
        performApiRequest(`/games2?g=${guid}&w=1&cp=${inc}`, true).then(result => {
          checkUpdateRequired(result);
          simpleLogC("Done inc play");
        }, error => {
          simpleLogC("Error inc play");
        });
      }
    }
  }, error => {
    appErrorC(1014, error);
  });
}
function firebaseReadLedger(hi, guid) {
  if (guid == getGameGuidString()) {
    singleGameReadLedger = true;
  }
  performApiRequest(`/ledger?k=${`${firebaseAuth.currentUser.uid}.${guid}`}`, true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    let up = result && result.u;
    let down = result && result.d;
    let report = result && result.r;
    Module.ccall("menu_read_ledger_finished", "v", ["number", "string", "number", "number", "number", "number"], [hi, guid, false, up, down, report]);
  }, error => {
    appErrorC(1016, error);
  });
}
function menuWriteLedgerFinished(guid, action, remove) {
  Module.ccall("menu_write_ledger_finished", "v", ["string", "string", "number"], [guid, action, remove]);
}
function firebaseWriteLedger(guid, action, remove, seconds) {
  let apiPath = `/ledger?k=${`${firebaseAuth.currentUser.uid}.${guid}`}&w=1`;
  let removeVal = remove ? "0" : "1";
  switch (action) {
    case "up":
      apiPath += "&u=" + removeVal;
      break;
    case "down":
      apiPath += "&d=" + removeVal;
      break;
    case "report":
      apiPath += "&r=" + removeVal;
      break;
    default:
      menuWriteLedgerFinished(guid, action, remove);
      break;
  }
  performApiRequest(apiPath, true).then(result => {
    checkUpdateRequired(result);
    menuWriteLedgerFinished(guid, action, remove);
  }, error => {
    appErrorC(1017, error);
  });
}
function firebaseSendBugReport(pathLocal, filename) {
  let buf = readLocalFile(pathLocal);
  let pathRemote = "bugs/" + filename;
  let metadata = {
    customMetadata: {
      "uid": firebaseAuth.currentUser.uid
    }
  };
  firebaseStorage.ref(pathRemote).put(buf, metadata).then(result => {
    appErrorC(7, "Thanks!! Bug report received. Please do let me (Martin) know what the bug was, via Discord or email, so I know what to look for! :)");
  }, error => {
    appErrorC(1023, error.message);
  });
}
function firebaseSyncUpload(pathLocal) {
  let buf = readLocalFile(pathLocal);
  let pathRemote = "dbs/" + firebaseAuth.currentUser.uid;
  firebaseStorage.ref(pathRemote).put(buf).then(result => {
    Module.ccall("menu_sync_upload_finished", "v", [], []);
  }, error => {
    appErrorC(1024, error.message);
  });
}
function firebaseSyncDownload(pathLocal) {
  let pathRemote = "dbs/" + firebaseAuth.currentUser.uid;
  let sref = firebaseStorage.ref(pathRemote);
  sref.getDownloadURL().then(url => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = event => {
      let blob = xhr.response;
      blob.arrayBuffer().then(buffer => {
        writeLocalFile(buffer, pathLocal);
        FS.syncfs(false, function (err) {
          if (err) {
            simpleLogC("syncfs error " + err);
          }
          Module.ccall('menu_sync_download_finished', "v", [], []);
        });
      });
    };
    xhr.onerror = function () {
      appErrorC(2001, "Download error");
    };
    xhr.open('GET', url);
    xhr.send();
  }).catch(error => {
    if (error.code == "storage/object-not-found") {
      simpleAppErrorC("You have no saved progress");
    } else {
      appErrorC(1025, error.message);
    }
  });
}
function callReadScoresFinished(params, guid, li) {
  simpleLogC("callReadScoresFinished()");
  Module.ccall("score_set_top_nicks_and_scores", "v", ["string", "string", "string", "string", "string", "number", "number", "number", "number", "number"], [params.nt[0], params.nt[1], params.nt[2], params.nt[3], params.nt[4], params.st[0], params.st[1], params.st[2], params.st[3], params.st[4]]);
  Module.ccall("score_set_above_nicks_and_scores", "v", ["string", "string", "string", "string", "number", "number", "number", "number"], [params.na[0], params.na[1], params.na[2], params.na[3], params.sa[0], params.sa[1], params.sa[2], params.sa[3]]);
  Module.ccall("score_set_below_nicks_and_scores", "v", ["string", "string", "number", "number"], [params.nb[0], params.nb[1], params.sb[0], params.sb[1]]);
  Module.ccall("score_read_finished_em", "v", ["string", "number", "number", "number", "number", "number"], [guid, li, params.c, params.r, params.sy, params.sbo]);
}
function firebaseUpdateScores(guid, li, score, lowerIsBetter) {
  let apiPath = `/scores?g=${guid}&li=${li}&s=${score}`;
  if (lowerIsBetter) {
    apiPath += "&l=1";
  }
  performApiRequest(apiPath, true).then(result => {
    if (checkUpdateRequired(result)) {
      return;
    }
    if (result) {
      callReadScoresFinished(result, guid, li);
    } else {
      simpleLogC("Got no scores result");
    }
  }, error => {
    simpleLogC(error);
  });
}
function firebaseSendPasswordResetEmail(email) {
  firebaseAuth.sendPasswordResetEmail(email).then(result => {
    Module.ccall('menu_on_password_reset_email_sent', 'v');
  }, error => {
    simpleLogC("Reset password fail " + error.message);
    simpleAppErrorC(error.message);
  });
}
function firebaseSignout() {
  firebaseAuth.signOut();
}
function getStringOnWasmHeap(str) {
  if (str == null) {
    return 0;
  }
  var lengthBytes = lengthBytesUTF8(str) + 1;
  var stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(str, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}
function firebaseSignedInEmail() {
  if (firebaseAuth.currentUser.isAnonymous) {
    return 0;
  }
  return getStringOnWasmHeap(firebaseAuth.currentUser.email);
}
function firebaseGetUid() {
  return getStringOnWasmHeap(firebaseAuth.currentUser.uid);
}
function firebaseUserIsAnonymous() {
  return firebaseAuth.currentUser.isAnonymous;
}
function firebaseMerge(email, password, merge) {
  if (merge) {
    simpleLogC("Signing in and merging");
    performApiRequest(`/user?m=${email}`, true).then(result => {
      if (checkUpdateRequired(result)) {
        return;
      }
      firebaseAuth.signInWithEmailAndPassword(email, password).then(result => {}, error => {
        simpleLogC("Sign in with email + pwd fail " + error.message);
        appErrorC(1005, error.message);
      });
    }, error => {
      simpleLogC("Merge fail " + error);
      appErrorC(1004, error);
    });
  } else {
    simpleLogC("Signing in without merging");
    firebaseAuth.currentUser.delete().then(result => {
      firebaseAuth.signInWithEmailAndPassword(email, password).then(result => {}, error => {
        simpleLogC("User sign in after delete user fail " + error.message);
        appErrorC(1007, error.message);
      });
    }, error => {
      simpleLogC("Delete user fail " + error.message);
      appErrorC(1006, error.message);
    });
  }
}
function firebaseDeleteCurrentUser(email, password) {
  simpleLogC("Signing in and deleting");
  firebaseAuth.signInWithEmailAndPassword(email, password).then(result => {
    firebaseAuth.currentUser.delete().then(result => {}, error => {
      simpleLogC("Delete user fail " + error.message);
      appErrorC(1006, error.message);
    });
  }, error => {
    simpleLogC("Sign in fail " + error.message);
    appErrorC(1007, error.message);
  });
}
function objectIsEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function firebaseSignIn(email, pwd) {
  simpleLogC('firebaseSignIn()');
  firebaseAuth.signInWithEmailAndPassword(email, pwd).then(result => {}, error => {
    simpleLogC("Sign in fail " + error.message);
    appErrorC(1007, error.message);
  });
}
function firebaseLinkUser(email, pwd) {
  simpleLogC('firebaseLinkUser()');
  let c = firebase.auth.EmailAuthProvider.credential(email, pwd);
  firebaseAuth.currentUser.linkWithCredential(c).then(result => {}, error => {
    simpleLogC("Link with credential failed");
    if (error.code == "auth/email-already-in-use") {
      simpleLogC("Email in use");
      appErrorC(1003, "An account with this email already exists");
    } else if (error.code == "auth/wrong-password") {
      simpleLogC("Email in use, wrong password");
      appErrorC(1003, "An account with this email already exists");
    } else if (error.code == "auth/weak-password") {
      simpleLogC("Password too weak");
      appErrorC(1003, "Password too weak, please try a stronger password");
    } else {
      simpleLogC("Other error received when linking with credentials " + error.message + " " + error.code);
      appErrorC(1003, error.message + " " + error.code);
    }
  });
}
function firebaseSigninAnonymous() {
  firebaseAuth.signInAnonymously().then(result => {}, error => {
    appErrorC(1001, error.message);
  });
}
function checkTokenExpired(token, uid) {
  if (token) {
    try {
      const [header, claimsB64] = token.split('.');
      const claimsJsonStr = atob(claimsB64);
      const claims = JSON.parse(claimsJsonStr);
      const expirationTime = claims.exp;
      const currentTime = Date.now() * 0.001;
      return currentTime > expirationTime;
    } catch (err) {
      console.error('Error when checking token expired', err);
    }
  }
  return true;
}
async function performRequest(url, useToken, parseJson) {
  url = encodeURI(url);
  simpleLogC(`performRequest(${url}, ${useToken}, ${parseJson})`);
  let idToken = null;
  if (useToken) {
    var user = firebaseAuth.currentUser;
    if (user) {
      idToken = await user.getIdToken(false);
      if (checkTokenExpired(idToken)) {
        idToken = await user.getIdToken(true);
      }
    } else {
      throw "error-no-user";
    }
  }
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status != 200) {
          simpleLogC("performRequest() status error " + xhr.status + ", url: " + url);
          reject("status-" + xhr.status);
        } else {
          if (parseJson) {
            try {
              const json = JSON.parse(xhr.response);
              if (json.error) {
                reject(json.error.message);
              } else {
                resolve(json);
              }
            } catch (err) {
              simpleLogC("performRequest() json parse error " + err + ", response: " + xhr.response + ", url: " + url);
              resolve(null);
            }
          } else {
            resolve(xhr.response);
          }
        }
      }
    };
    xhr.onerror = function () {
      simpleLogC("performRequest() XHR error url: " + url);
      reject("error-xhr");
    };
    xhr.open("GET", url);
    if (useToken) {
      xhr.setRequestHeader("Authorization", `Bearer ${idToken}`);
    }
    xhr.send('');
  });
}
async function performApiRequest(pathQuery, useToken) {
  let appVersion = Module.ccall('get_app_version', 'number');
  let prefix = pathQuery.includes('?') ? '&' : '?';
  pathQuery += `${prefix}av=${appVersion}`;
  return performRequest(`${"https://api.fancade.com"}${pathQuery}`, useToken, true);
}
function checkUpdateRequired(obj) {
  if (obj && obj.error && obj.error.type && obj.error.type == 'update-required') {
    simpleAppErrorC('A newer version of Fancade is available! Please reload the page to access all online features!');
    return true;
  }
  return false;
}
function getUserData() {
  performApiRequest(`/user`, true).then(userData => {
    if (checkUpdateRequired(userData)) {
      return;
    }
    if (userData) {
      simpleLogC("Logged in, getting user data " + JSON.stringify(userData));
      let nick = userData.nick ? userData.nick : null;
      let gems = 0;
      if (userData.gold) {
        gems = userData.gold;
      }
      updateDailyRewardStatus(gems, true);
      let adfreeEnds = 0;
      if (userData.noad) {
        adfreeEnds = userData.noad;
      }
      let userPremiumEnds = Module.ccall("get_user_premium_ends", "number", [], []);
      if (userData.premium) {
        let premiumStarts = userData.premium;
        let premiumEnds = premiumStarts + 2592000;
        if (premiumEnds > userPremiumEnds) {
          userPremiumEnds = premiumEnds;
        }
      }
      if (userData.prem) {
        let premiumEnds = userData.prem;
        if (premiumEnds > userPremiumEnds) {
          userPremiumEnds = premiumEnds;
        }
      }
      let userState = firebaseAuth.currentUser.isAnonymous ? 2 : 3;
      Module.ccall('app_on_signin', 'v', ['number', 'string', 'string', 'number', 'number', 'number'], [userState, firebaseAuth.currentUser.uid, nick, gems, adfreeEnds, userPremiumEnds]);
    } else {
      simpleLogC("Could not get user data");
      Module.ccall('set_user_nick', 'v', ['string'], [null]);
      Module.ccall('set_user_uid', 'v', ['string'], [null]);
      Module.ccall('set_user_state', 'v', ['number'], [1]);
      Module.ccall('app_on_signout', 'v');
    }
  }, err => {
    simpleLogC(err);
  });
}
function firebaseInit() {
  simpleLogC("firebaseInit()");
  initFirebaseBasic();
  firebaseAnalytics = firebase.analytics(firebaseApp);
  firebaseRemoteConfig = firebase.remoteConfig(firebaseApp);
  firebaseAuth = firebase.auth(firebaseApp);
  firebaseAuth.onAuthStateChanged(function (user) {
    simpleLogC("onAuthStateChanged");
    if (user) {
      getUserData();
      let sgGuid = getGameGuidString();
      if (sgGuid != "") {
        if (!singleGameReadCounts) {
          firebaseReadCounts(0, sgGuid, true);
        }
        if (!singleGameReadLedger) {
          firebaseReadLedger(0, sgGuid);
        }
      }
    } else {
      Module.ccall('set_user_state', 'v', ['number'], [1]);
      Module.ccall('app_on_signout', 'v');
    }
  });
}
function writeGameBlob(blob, pathDevice, guid) {
  blob.arrayBuffer().then(buffer => {
    writeLocalFile(buffer, pathDevice);
    FS.syncfs(false, function (err) {
      if (err) {
        simpleLogC("syncfs error " + err);
      }
      Module.ccall('game_download_finished', "v", ["string", "string", "number"], [pathDevice, guid, 1]);
    });
  });
}
function firebaseDownload(pathServer, pathDevice, guid) {
  let sref = firebaseStorage.ref(pathServer);
  if (guid == getGameGuidString() && !pathDevice.endsWith('.webp') && singleGameBlob != null) {
    writeGameBlob(singleGameBlob, pathDevice, guid);
    return;
  }
  simpleLogC(`firebaseDownload('${pathServer}', '${pathDevice}', '${guid}'')`);
  sref.getDownloadURL().then(url => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = event => {
      let blob = xhr.response;
      writeGameBlob(blob, pathDevice, guid);
    };
    xhr.onerror = function () {
      simpleLogC("Unable to download file, XMLHttpRequest error");
      Module.ccall('game_download_finished', "v", ["string", "string", "number"], [pathDevice, guid, 0]);
    };
    xhr.open('GET', url);
    xhr.send();
  }).catch(error => {
    simpleLogC("Unable to download file, error: " + error.message);
    Module.ccall('game_download_finished', "v", ["string", "string", "number"], [pathDevice, guid, 0]);
  });
}
function getVersion(time) {
  return Math.round((time - Math.floor(time)) * 100000);
}
function currentTimeSecondsRound() {
  return Math.round(Date.now() / 1000);
}
var nextIndex = [];
function firebaseQueryGames(hi, heading, limit, next) {
  while (nextIndex.length <= hi) {
    nextIndex.push(0);
  }
  let apiPath = `/list?l=${heading}`;
  if (!next) {
    nextIndex[hi] = 0;
  }
  if (nextIndex[hi]) {
    apiPath += `&i=${nextIndex[hi]}`;
  }
  performApiRequest(apiPath, true).then(doc => {
    if (checkUpdateRequired(doc)) {
      Module.ccall('menu_query_games_finished', 'v');
      return;
    }
    if (doc && doc.g && doc.g.length > 0 && doc.v && doc.v.length == doc.g.length) {
      let gamesFetched = 0;
      for (let i = 0; i < doc.g.length; i++) {
        let guid = doc.g[i];
        let sortOrder = doc.s[i];
        let version = doc.v[i];
        Module.ccall('menu_query_games_add_result', 'v', ["number", "string", "number", "number"], [hi, guid, sortOrder, version]);
        gamesFetched++;
      }
      nextIndex[hi] += gamesFetched;
    }
    Module.ccall('menu_query_games_finished', 'v');
  }, error => {
    simpleAppErrorC(error);
  });
}
var firebaseAnalyticsParams = {};
function firebaseAnalyticsParam(name, value) {
  firebaseAnalyticsParams[name] = value;
}
function firebaseAnalyticsEvent(event_name) {
  firebaseAnalytics.logEvent(event_name, firebaseAnalyticsParams);
  firebaseAnalyticsParams = {};
}