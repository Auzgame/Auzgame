window.xsollaPurchase = (token, isSandbox, id, onPurchaseComplete) => {
  let sandboxState = isSandbox > 0;
  if (sandboxState) {
    activateDevXsolla(id, token, onPurchaseComplete);
  } else {
    activateProdXsolla(token, onPurchaseComplete);
  }
};

async function activateDevXsolla(id, token, onPurchaseComplete) {
  let options = {
    project_id: "206545",
    item_type: "virtual_item",
    sku: id,
    user: {
      auth: token,
    },
    widget_ui: {
      target_element: "#widget-example-element",
    },
    api_settings: {
      sandbox: true,
    },
  };

  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.paymentStatus = "false";
  s.isComplete = false;
  s.src = "https://cdn.xsolla.net/embed/buy-button/3.1.6/widget.min.js";
  s.addEventListener(
    "load",
    function (e) {
      let widgetInstance = XBuyButtonWidget.create(options);
      widgetInstance.on("status-done", function (event, data) {
        s.paymentStatus = "true";
      });
      widgetInstance.on("status-troubled", function (event, data) {
        if (s.isComplete) return;

        onPurchaseComplete("false");
        s.isComplete = true;
      });
      widgetInstance.on("close", function (event, data) {
        if (s.isComplete) return;

        onPurchaseComplete(s.paymentStatus);
        s.isComplete = true;
      });
    },
    false
  );

  let head = document.getElementsByTagName("head")[0];
  head.appendChild(s);
  await sleep(2500);
  let but = document.querySelector(".x-buy-button-widget-payment-button");
  while (but === null) {
    await sleep(500);
    but = document.querySelector(".x-buy-button-widget-payment-button");
  }

  but.click();
}

function activateProdXsolla(token, onPurchaseComplete) {
  let options = {
    access_token: token,
    sandbox: false,
  };

  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.paymentStatus = "false";
  s.isComplete = false;
  s.src = "https://cdn.xsolla.net/embed/paystation/1.2.3/widget.min.js";
  s.addEventListener(
    "load",
    function (e) {
      XPayStationWidget.init(options);
      XPayStationWidget.on(
        XPayStationWidget.eventTypes.STATUS_DONE,
        function (event, data) {
          s.paymentStatus = "true";
        }
      );
      XPayStationWidget.on(
        XPayStationWidget.eventTypes.STATUS_TROUBLED,
        function (event, data) {
          if (s.isComplete) return;

          onPurchaseComplete("false");
          s.isComplete = true;
        }
      );
      XPayStationWidget.on(
        XPayStationWidget.eventTypes.CLOSE,
        function (event, data) {
          if (s.isComplete) return;

          onPurchaseComplete(s.paymentStatus);
          s.isComplete = true;
        }
      );

      XPayStationWidget.open();
    },
    false
  );
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(s);
}
