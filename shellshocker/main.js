window.addEventListener('load',(e) => {
  frame = document.createElement("iframe");
  frame.src = "https://Web-Proxy.auzziescibelli.repl.co";
  frame.width = 800;
  frame.height = 600;
  document.getElementById("center").appendChild(frame);
  frame.contentWindow.postMessage("https://shellshock.io", "*");
});
