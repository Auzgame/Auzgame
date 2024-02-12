async function checkAdBlock() {
  while (window.unityInstance === undefined) {
    await sleep(500);
  }
  window.setTimeout(function () {
    let adBlockEnabled = "false";
    if (window.moneyMakerOnline === undefined) {
      adBlockEnabled = "true";
    }
    window.unityInstance.SendMessage(
      "PersistantObjects",
      "SendAdblockData",
      adBlockEnabled
    );
  }, 1000);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
