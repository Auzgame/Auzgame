window.gameScriptLoaded = true;

function showGame() {
  const buildUrl = getBuildUrl();
  const config = {
    dataUrl: buildUrl + "/WebGL.data.unityweb",
    frameworkUrl: buildUrl + "/WebGL.framework.js.unityweb",
    codeUrl: buildUrl + "/WebGL.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "JustPlay.LOL",
    productName: "1v1.LOL",
    productVersion: "4.0",
  };

  const canvas = document.getElementById("gameContainer");

  createUnityInstance(canvas, config, UnityProgress)
    .then((instance) => (window.unityInstance = instance))
    .catch((error) => {
      console.error(error);
      location.reload();
    });

  if (typeof showAds === "function") {
    showAds();
  }
}

function UnityProgress(progress) {
  const loader = document.querySelector("#loader");

  if (!window.progressBar) {
    const progress = document.querySelector("#loader .progress");
    progress.style.display = "block";
    window.progressBar = progress.querySelector(".full");
    loader.querySelector(".spinner").style.display = "none";
  }

  window.gameStartLoading = true;
  window.progressBar.style.transform = `scaleX(${progress})`;

  if (progress === 1) {
    loader.style.display = "none";
    window.gameLoaded = true;
  }
}
