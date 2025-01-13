window.useGamePack = true;
if (window.gamePreloads == undefined) window.gamePreloads = [];
if (window.useGamePack) {
    window.gamePreloads.push("js/jspack.js");
} else {
    window.gamePreloads.push("js/game_js.js");
    window.gamePreloads.push("js/pixi-sound.js");
    window.gamePreloads.push("js/pixi.js");
    window.gamePreloads.push("js/js_functions.js");
}

(function() {
    window.createLoadingTextP = function(text) {
        var loadingText = document.createElement("P");
        loadingText.style.position = "absolute";
        loadingText.style.left = "50%";
        loadingText.style.top = "50%";
        loadingText.style.transform = "translate(-50%, -50%)";
        loadingText.innerText = text;
        loadingText.style.fontFamily = "Arial, sans-serif";
        loadingText.style.fontSize = "1.5em";
        loadingText.style.color = "#e0e0e0";
        loadingText.style.margin = "0";
        document.body.appendChild(loadingText);
        return loadingText;
    }
    
    window.removeLoadingTextP = function(loadingTextP) {
        document.body.removeChild(loadingTextP);
    }

    /* Preload the following:
    <script src="js/js_functions.js"></script>
    <script src="js/pixi.js"></script>
    <script src="js/pixi-sound.js"></script>
    <script src="js/game_js.js"></script> */

    function loadJS(filename, then) {
        var scriptelem = document.createElement('script');
        scriptelem.setAttribute("src", filename);
        document.getElementsByTagName('head')[0].appendChild(scriptelem);
        scriptelem.onload = then;
    }

    var loadingText = createLoadingTextP("Loading...");

    function loadAdditionals() {
        if (gamePreloads.length == 0) {
            removeLoadingTextP(loadingText);
        } else {
            var nextAdditionalPreload = window.gamePreloads.pop();
            loadJS(nextAdditionalPreload, loadAdditionals);
        }
    }

    loadAdditionals();
})();