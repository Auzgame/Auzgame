//init the interstitial
window.adsLoaded = true;
window.isWatchingRV = false;
window.didInitInter = false;
let iAd; //Inter Ads
let rAd; //RV Ads

async function initAds() {
  while (window.cpmstarAPI === undefined) {
    await sleep(500);
  }

  let isCOPPAEnabled = window.localStorage.getItem("isCOPPAEnabled");

  if (isCOPPAEnabled === null) {
    setCOPPAFlag(true);
  } else {
    isCOPPAEnabled = convertCoppaFlag(isCOPPAEnabled);
    setCOPPAFlag(isCOPPAEnabled);
    await initInterAds();
  }
}

window.OnAgeGateDataReceived = async (isCOPPAEnabled) => {
  isCOPPAEnabled = convertCoppaFlag(isCOPPAEnabled);
  setCOPPAFlag(isCOPPAEnabled);
  if (!window.didInitInter) {
    await initInterAds();
  }
};

window.setCOPPAFlag = (isEnabled) => {
  window.cpmstarAPI({ kind: "coppa", value: isEnabled });
  window.localStorage.setItem("isCOPPAEnabled", isEnabled);
};

function convertCoppaFlag(coppaFlag) {
  if (coppaFlag !== null) {
    if (
      coppaFlag === "true" ||
      coppaFlag === "1" ||
      coppaFlag === 1 ||
      coppaFlag === true
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

async function initInterAds() {
  window.cpmstarAPI(async function (api) {
    iAd = new api.game.InterstitialView("interstitial");
    iAd.addEventListener("ad_opened", function (e) {
      iAdPause(); //Pause the game when ad is open
    });

    iAd.addEventListener("ad_closed", function (e) {
      setTimeout(function () {
        iAdUnpause(); //Unpause when ad closed.
      }, 700);
      iAd.load(); //Preload another ad.
    });

    iAd.addEventListener("load_failed", function (e) {
      //console.warn("Inter Ad failed to load:" + JSON.stringify(e));
      onAdLoadFailed();
    });

    iAd.addEventListener("loaded", function () {
      console.warn("Inter Ad loaded");
    });

    await sleep(1000);
    iAd.load();
    window.didInitInter = true;
  });

  function iAdPause() {
    unityAdStartedCallback();
  }
  function iAdUnpause() {
    unityAdFinishedCallback("true");
  }
}

window.requestNewAd = () => {
  if (iAd && !iAd.isLoaded()) {
    console.warn("No inter ad available");
  }
  if (iAd && iAd.isLoaded()) {
    iAd.show(); //Show loaded ad
  } else {
    if (iAd) iAd.load(); //If no ad available, load another
    unityAdFinishedCallback("false");
  }
};

// This function calls Unity to tell the ad started
function unityAdStartedCallback() {
  try {
    if (window.unityInstance) {
      window.unityInstance.SendMessage(
        "PersistantObjects",
        "OnWebInterstitialStarted"
      );
    }
  } catch (error) {
    console.log(error);
  }
}

// This function calls Unity to tell the ad finished
function unityAdFinishedCallback(state) {
  try {
    if (window.unityInstance) {
      window.unityInstance.SendMessage(
        "PersistantObjects",
        "OnWebInterstitialEnded",
        state
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.initWebRVAd = () => {
  window.cpmstarAPI(function (api) {
    rAd = new api.game.RewardedVideoView("rewardedvideo");
    rAd.load();

    function rvStarted() {
      window.unityInstance.SendMessage("PersistantObjects", "OnWebRVStarted");
      window.isWatchingRV = true;
    }
    function rvEnded() {
      window.unityInstance.SendMessage("PersistantObjects", "OnWebRVEnded");
      window.isWatchingRV = false;
    }

    rAd.addEventListener("ad_opened", function (e) {
      rvStarted();
    });

    rAd.addEventListener("ad_closed", function (e) {
      setTimeout(function () {
        rvEnded();
      }, 700);
      rAd.load();
    });

    rAd.addEventListener("loaded", function (e) {
      window.unityInstance.SendMessage("PersistantObjects", "OnWebRVReady");
    });

    rAd.addEventListener("load_failed", function (e) {
      console.warn("RV Ad failed to load:" + e);
    });
  });
};

window.showWebRVAd = () => {
  if (rAd && rAd.isLoaded()) {
    rAd.show(); //Show loaded ad
  } else {
    unityAdFinishedCallback("false");
  }
};

async function onAdLoadFailed() {
  await sleep(10000);
  iAd.load();
}
