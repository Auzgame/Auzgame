window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1519513,
    "r": 0.04839334107626791,
    "rec_value": 1.0,
    "state_change_listen_mode": "automatic",
    "record": false,
    "continuous_capture_enabled": false,
    "recording_capture_keystrokes": true,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": true
        }
    },
    "features": ["heatmap.continuous_capture", "settings.billing_v2", "recordings.page_content_ws", "feedback.widgetV2", "retire_http", "feedback.widget_telemetry", "survey.impressions"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 337)
}({
    337: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o, i = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                a = new RegExp(i, "i"),
                r = window.navigator || {
                    userAgent: "unknown"
                },
                s = r.userAgent ? r.userAgent : "unknown";
            if (a.test(s)) console.warn("Hotjar not launching due to suspicious userAgent:", s);
            else {
                var d = (null === (o = window.hjSiteSettings.features) || void 0 === o ? void 0 : o.indexOf("retire_http")) >= 0,
                    l = "http:" === window.location.protocol,
                    p = Boolean(window._hjSettings.preview);
                if (d && l && !p) console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");
                else {
                    var _ = function(e, t, n) {
                        window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                    };
                    _(0, 0, n);
                    var c, u, h, j, f = window.document,
                        m = f.head || f.getElementsByTagName("head")[0];
                    f.addEventListener && (hj.scriptDomain = e, (c = f.createElement("script")).async = 1, c.src = hj.scriptDomain + t, c.charset = "utf-8", m.appendChild(c), j = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (u = f.createElement("style")).type = "text/css", u.styleSheet ? u.styleSheet.cssText = j.join("") : u.appendChild(f.createTextNode(j.join(""))), m.appendChild(u), (h = f.createElement("iframe")).style.cssText = j[1], h.name = "_hjRemoteVarsFrame", h.title = "_hjRemoteVarsFrame", h.id = "_hjRemoteVarsFrame", h.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-960463a57b3f52829a72c264e060823d.html", h.onload = function() {
                        _.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                    }, _.varsJar = h, "interactive" === f.readyState || "complete" === f.readyState || "loaded" === f.readyState ? w() : f.addEventListener("DOMContentLoaded", w), _.revision = "f9d3723b0f3d", window.hjBootstrap = _)
                }
            }

            function w() {
                setTimeout(function() {
                    f.body.appendChild(h)
                }, 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.461979a9e1f93282b2c3.js", "1519513"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.0ee7ae89d1f55dcc5c5f.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.75ef97a19f3a64f56fa2.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.e4fb1da9cd67ca66b9be.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.5400d6b1f7a5fdaf32b2.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.9511fb9bbb48aea184fd.js"
            },
            HEATMAP_DYNAMIC_VIEW: {
                js: "heatmap-dynamic-view.93f66b60ec55843036f5.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.7e2120e3d5ad147a29b2.js"
            },
            NOTIFICATION: {
                js: "notification.6f3715e1ef5492217fbe.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.5649dacbe6a18e44355c.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.6490b54debb94b917469.js"
            },
            SENTRY: {
                js: "sentry.e62c1b9a48d0bed1a00e.js"
            }
        }
    }
});