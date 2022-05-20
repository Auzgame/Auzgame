! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CrazyEventTypeMap = t.CrazyAdTypeMap = t.debug = t.forceDebug = void 0;
    var i, o, a, u = r(n(3)),
        s = r(n(7)),
        c = r(n(8)),
        l = function() {
            function e() {}
            return e.getInstance = function() {
                if (!this.instance) try {
                    var e = window.parent;
                    window.location.origin.endsWith("yandex.net") || "true" === d("useYandexSdk") ? (f("Running with YandexSDK"), this.instance = new c.default) : e.Crazygames && e.Crazygames.load ? (f("Running with CrazySDK"), this.instance = new u.default) : (f("Running with LocalSDK"), i = !0, this.instance = new s.default)
                } catch (e) {
                    f("Falling back to CrazySDK"), this.instance = new u.default
                }
                return this.instance
            }, e.instance = null, e
        }();

    function f(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        void 0 === i && (i = "true" === d("sdk_debug")), i && (t.length > 0 ? console.log("[JS-SDK] " + e, t) : console.log("[JS-SDK] " + e))
    }

    function d(e) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
    }
    t.forceDebug = function(e) {
        i = e
    }, t.debug = f, t.CrazyAdTypeMap = {
        midgame: "midgame",
        rewarded: "rewarded"
    }, t.CrazyEventTypeMap = {
        adStarted: "adStarted",
        adFinished: "adFinished",
        adError: "adError",
        adblockDetectionExecuted: "adblockDetectionExecuted"
    }, window.CrazyGames = {
        CrazySDK: l,
        CrazyAdType: t.CrazyAdTypeMap,
        CrazyEventType: t.CrazyEventTypeMap
    }, o = "\n.crazy-banner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", (a = document.createElement("style")).textContent = o, document.head.append(a), t.default = u.default
}, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        i = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
            }))
        },
        o = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        },
        a = this && this.__spreadArray || function(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e
        },
        u = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.INIT_STATE = void 0;
    var s, c = n(0),
        l = n(4),
        f = u(n(5));
    ! function(e) {
        e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.REQUESTED = 1] = "REQUESTED", e[e.INITIALIZED = 2] = "INITIALIZED"
    }(s = t.INIT_STATE || (t.INIT_STATE = {}));
    var d = [{
            width: 970,
            height: 90
        }, {
            width: 320,
            height: 50
        }, {
            width: 160,
            height: 600
        }, {
            width: 336,
            height: 280
        }, {
            width: 728,
            height: 90
        }, {
            width: 300,
            height: 600
        }, {
            width: 468,
            height: 60
        }, {
            width: 970,
            height: 250
        }, {
            width: 300,
            height: 250
        }, {
            width: 250,
            height: 250
        }, {
            width: 120,
            height: 600
        }],
        h = function() {
            function e() {
                this.initState = s.UNINITIALIZED, this.requestInProgress = !1, this.eventListeners = {}, this.adblockDetectionExecuted = !1, this.hasAdblock = !1, this.gameLink = null, this.disableBannerCheck = !1
            }
            return e.prototype.addEventListener = function(e, t) {
                var n;
                if (this.isValidCrazyEvent(e)) {
                    var i = this.eventListeners[e] || [];
                    this.eventListeners = r(r({}, this.eventListeners), ((n = {})[e] = a(a([], i), [t]), n)), this.callListenersForTriggeredEvents(e, t)
                } else console.error("[CrazySDK] Invalid Event", e)
            }, e.prototype.removeEventListener = function(e, t) {
                var n;
                if (this.isValidCrazyEvent(e)) {
                    var i = this.eventListeners[e] || [];
                    this.eventListeners = r(r({}, this.eventListeners), ((n = {})[e] = i.filter((function(e) {
                        return e !== t
                    })), n))
                } else console.error("[CrazySDK] Invalid Event", e)
            }, e.prototype.callListenersForTriggeredEvents = function(e, t) {
                switch (e) {
                    case "adblockDetectionExecuted":
                        return this.adblockDetectionEventCallback(t);
                    case "initialized":
                        return this.initEventCallback(t)
                }
            }, e.prototype.adblockDetectionEventCallback = function(e) {
                this.adblockDetectionExecuted && e({
                    hasAdblock: this.hasAdblock
                })
            }, e.prototype.inviteLink = function(e) {
                void 0 === e && (e = {}), c.debug("Requesting invite link"), this.ensureInit(!1);
                var t = "utm_source=invite";
                Object.keys(e).forEach((function(n) {
                    var r = n + "=" + e[n];
                    t = t + "&" + r
                }));
                var n = this.gameLink || "https://www.crazygames.com/game/your-game-will-appear-here",
                    r = n.includes("?") ? n + "&" + t : n + "?" + t;
                return c.debug("Invite link is " + r), r
            }, e.prototype.checkBannerContainers = function(e, t) {
                return i(this, void 0, void 0, (function() {
                    var n, r, i, a, u;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e && 0 !== e.length || c.debug("Container id not specified"), n = [], r = 0, i = "string" == typeof e ? [e] : e, o.label = 1;
                            case 1:
                                return r < i.length ? (a = i[r], [4, this.checkVisible(a, t)]) : [3, 4];
                            case 2:
                                (u = o.sent()).isVisible && n.push({
                                    id: a,
                                    width: u.size.width,
                                    height: u.size.height
                                }), o.label = 3;
                            case 3:
                                return r++, [3, 1];
                            case 4:
                                return [2, n]
                        }
                    }))
                }))
            }, e.prototype.checkVisible = function(e, t) {
                return void 0 === t && (t = !1), i(this, void 0, void 0, (function() {
                    var n = this;
                    return o(this, (function(r) {
                        return [2, l.checkContainerVisible(e, (function(t) {
                            n.callListeners("bannerError", {
                                containerId: e,
                                error: t
                            })
                        }), t, this.disableBannerCheck)]
                    }))
                }))
            }, e.prototype.getBannerForContainers = function(e) {
                var t = [];
                return e.forEach((function(e) {
                    var n = f.default(d).find((function(t) {
                        return e.width >= t.width && e.height >= t.height
                    }));
                    n ? t.push({
                        containerId: e.id,
                        size: n.width + "x" + n.height
                    }) : c.debug("No available banner size has been found for container " + e.id)
                })), t
            }, e.prototype.initEventCallback = function(e) {
                this.initState === s.INITIALIZED && e({
                    userInfo: this.userInfo
                })
            }, e.prototype.callListeners = function(e, t) {
                (this.eventListeners[e] || []).forEach((function(e) {
                    return e(t)
                }))
            }, e.prototype.isValidCrazyEvent = function(e) {
                switch (e) {
                    case "adStarted":
                    case "adFinished":
                    case "adError":
                    case "adblockDetectionExecuted":
                    case "bannerRendered":
                    case "bannerError":
                    case "requestBanner":
                    case "initialized":
                        return !0;
                    default:
                        return !1
                }
            }, e.prototype.renderFakeBanner = function(e) {
                var t = e.size.split("x"),
                    n = t[0],
                    r = t[1],
                    i = document.getElementById(e.containerId);
                if (i) {
                    i.innerHTML = "";
                    var o = document.createElement("img");
                    o.setAttribute("src", "https://images.crazygames.com/crazygames-sdk/" + e.size + ".png"), o.setAttribute("width", n + "px"), o.setAttribute("height", r + "px"), i.appendChild(o), i.style.backgroundColor = "rgb(191, 173, 255, 0.25)"
                }
            }, e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
            }))
        },
        i = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadCrazyAdsIfNeeded = t.loadScript = t.requestInGameBanner = void 0;
    var o, a = n(0);

    function u(e) {
        return new Promise((function(t, n) {
            var r = document.createElement("script");
            r.onload = function() {
                return t()
            }, r.onerror = function(e) {
                return n(e)
            }, r.src = e, r.async = !0, document.head.appendChild(r)
        }))
    }
    t.requestInGameBanner = function(e) {
        return r(this, void 0, void 0, (function() {
            var t;
            return i(this, (function(n) {
                return t = window.CrazygamesAds, a.debug("Requesting banner to CrazyAds"), t.requestAds(e.request, e.options), [2]
            }))
        }))
    }, t.loadScript = u, t.loadCrazyAdsIfNeeded = function(e) {
        return window.CrazygamesAds ? Promise.resolve() : function(e) {
            if (o) return o;
            return o = u(e).then((function() {
                window.CrazygamesAds.initAds()
            }))
        }(e)
    }
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        u = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
            return a(t, e), t
        },
        s = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
            }))
        },
        c = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = u(n(1)),
        f = n(2),
        d = n(0),
        h = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.queuedBanners = [], t.initCallbacks = [], t.rafvertizingUrl = "", t.inGameRenderedBannerIds = new Set, t.receiveMessage = function(e) {
                    var n = e.data,
                        r = n.type,
                        i = n.data;
                    r && ("initialized" !== r ? t.isValidCrazyEvent(r) && t.callListeners(r, e.data) : t.initializeReply(i))
                }, t.queuedRequest = null, t.registerDefaultListeners(), t
            }
            return i(t, e), t.prototype.init = function() {
                this.initState === l.INIT_STATE.UNINITIALIZED && (d.debug("Initializing"), this.registerMessageListener(), this.postMessage("init", {
                    version: "1.24.0",
                    sdkType: "js"
                }), this.initState = l.INIT_STATE.REQUESTED)
            }, t.prototype.requestAd = function(e) {
                return void 0 === e && (e = "midgame"), s(this, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return d.debug("Requesting " + e + " ad"), [4, this.ensureInit()];
                            case 1:
                                return t.sent(), this.requestInProgress ? [2] : (this.requestInProgress = !0, this.postMessage("requestAd", {
                                    adType: e
                                }), [2])
                        }
                    }))
                }))
            }, t.prototype.requestBanner = function(e) {
                return s(this, void 0, void 0, (function() {
                    var t, n, r, i, o;
                    return c(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, this.ensureInit(!0)];
                            case 1:
                                a.sent(), d.debug("Requesting banners to gameframe", e), t = [], n = 0, r = e, a.label = 2;
                            case 2:
                                return n < r.length ? (i = r[n], [4, this.checkVisible(i.containerId)]) : [3, 5];
                            case 3:
                                a.sent().isVisible && t.push(i), a.label = 4;
                            case 4:
                                return n++, [3, 2];
                            case 5:
                                return t.length > 0 && (d.debug("Valid banners", e), (o = this.queuedBanners).push.apply(o, t), this.postMessage("requestBanner", t)), [2]
                        }
                    }))
                }))
            }, t.prototype.requestResponsiveBanner = function(e) {
                return s(this, void 0, void 0, (function() {
                    var t, n;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.ensureInit(!0)];
                            case 1:
                                return r.sent(), d.debug("Requesting responsive banner to gameframe", e), [4, this.checkBannerContainers(e, !0)];
                            case 2:
                                return (t = r.sent()).length > 0 && (d.debug("Valid containers", t), (n = this.queuedBanners).push.apply(n, this.getBannerForContainers(t)), this.postMessage("requestResponsiveBanner", t)), [2]
                        }
                    }))
                }))
            }, t.prototype.clearBanner = function(e) {
                var t = document.querySelector("#" + e);
                if (t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    this.inGameRenderedBannerIds.delete(e)
                }
            }, t.prototype.clearAllBanners = function() {
                var e = this;
                Array.from(this.inGameRenderedBannerIds.values()).forEach((function(t) {
                    e.clearBanner(t)
                }))
            }, t.prototype.inviteLink = function(t) {
                void 0 === t && (t = {});
                var n = e.prototype.inviteLink.call(this, t);
                return this.postMessage("inviteUrl", {
                    inviteUrl: n
                }), n
            }, t.prototype.happytime = function() {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return d.debug("Requesting happytime"), [4, this.ensureInit()];
                            case 1:
                                return e.sent(), this.postMessage("happytime", {}), [2]
                        }
                    }))
                }))
            }, t.prototype.gameplayStart = function() {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return d.debug("Requesting gameplay start"), [4, this.ensureInit()];
                            case 1:
                                return e.sent(), this.postMessage("gameplayStart", {}), [2]
                        }
                    }))
                }))
            }, t.prototype.gameplayStop = function() {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return d.debug("Requesting gameplay stop"), [4, this.ensureInit()];
                            case 1:
                                return e.sent(), this.postMessage("gameplayStop", {}), [2]
                        }
                    }))
                }))
            }, t.prototype.registerDefaultListeners = function() {
                var e = this;
                d.debug("Registering default listeners"), this.addEventListener("adFinished", (function() {
                    e.requestInProgress = !1
                })), this.addEventListener("adError", (function() {
                    e.requestInProgress = !1
                })), this.addEventListener("adblockDetectionExecuted", (function(t) {
                    e.adblockDetectionExecuted = !0;
                    var n = t.hasAdblock;
                    e.hasAdblock = !!n
                })), this.addEventListener("bannerError", (function(e) {
                    d.debug(e.error, e.containerId)
                })), this.addEventListener("bannerRendered", (function(t) {
                    e.inGameRenderedBannerIds.add(t.containerId), d.debug("Banner rendered for container " + t.containerId)
                })), this.addEventListener("requestBanner", (function(t) {
                    return s(e, void 0, void 0, (function() {
                        return c(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return d.debug("Banner request answer from gameframe received", t.request), this.buildBannerRequestCallback(t.request), [4, f.requestInGameBanner(t.request)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }))
            }, t.prototype.buildBannerRequestCallback = function(e) {
                var t = this;
                e.options.banner = {
                    callback: function(e) {
                        if (e.empty) {
                            if (t.useTestAds) {
                                var n = t.queuedBanners.find((function(t) {
                                    return t.containerId === e.code
                                }));
                                return void(n && (t.renderFakeBanner(n), t.removeBannerFromQueue(e.code), t.callListeners("bannerRendered", {
                                    containerId: e.code
                                })))
                            }
                            var r = "Sorry, no banner is available for the moment for " + e.code + ", please retry";
                            t.callListeners("bannerError", {
                                containerId: e.code,
                                error: r
                            }), t.removeBannerFromQueue(e.code)
                        } else t.removeBannerFromQueue(e.code), t.callListeners("bannerRendered", {
                            containerId: e.code
                        })
                    }
                }
            }, t.prototype.removeBannerFromQueue = function(e) {
                this.queuedBanners = this.queuedBanners.filter((function(t) {
                    return t.containerId !== e
                }))
            }, t.prototype.registerMessageListener = function() {
                window.addEventListener("message", this.receiveMessage, !1)
            }, t.prototype.initializeReply = function(e) {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return e && void 0 !== e.debug && d.forceDebug(e.debug), d.debug("Initialize reply received from gameframe", e), this.initState === l.INIT_STATE.INITIALIZED || (e && (this.gameLink = e.gameLink, this.rafvertizingUrl = e.rafvertizingUrl, this.useTestAds = e.useTestAds, this.userInfo = e.userInfo, this.disableBannerCheck = e.disableBannerCheck || !1), this.initState = l.INIT_STATE.INITIALIZED, this.initCallbacks.length > 0 && (d.debug("Calling init callbacks"), this.initCallbacks.forEach((function(e) {
                            return e()
                        })), this.initCallbacks = []), this.callListeners("initialized", {
                            userInfo: this.userInfo
                        })), [2]
                    }))
                }))
            }, t.prototype.ensureInit = function(e) {
                return void 0 === e && (e = !1), s(this, void 0, void 0, (function() {
                    var t = this;
                    return c(this, (function(n) {
                        return this.initState === l.INIT_STATE.INITIALIZED ? e ? [2, f.loadCrazyAdsIfNeeded(this.rafvertizingUrl)] : [2, Promise.resolve()] : (this.init(), [2, new Promise((function(n) {
                            t.initCallbacks.push((function() {
                                return s(t, void 0, void 0, (function() {
                                    return c(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return e ? [3, 1] : (n(), [3, 3]);
                                            case 1:
                                                return [4, f.loadCrazyAdsIfNeeded(this.rafvertizingUrl)];
                                            case 2:
                                                t.sent(), n(), t.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }))])
                    }))
                }))
            }, t.prototype.postMessage = function(e, t) {
                this.getCrazySDKWindow().postMessage({
                    type: e,
                    data: t
                }, "*")
            }, t.prototype.getCrazySDKWindow = function() {
                return window.parent
            }, t.prototype.isValidCrazyEvent = function(e) {
                switch (e) {
                    case "adStarted":
                    case "adFinished":
                    case "adError":
                    case "adblockDetectionExecuted":
                    case "bannerRendered":
                    case "bannerError":
                    case "requestBanner":
                    case "initialized":
                        return !0;
                    default:
                        return !1
                }
            }, t
        }(l.default);
    t.default = h
}, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
            }))
        },
        i = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkContainerVisible = void 0;

    function o(e, t) {
        return r(this, void 0, void 0, (function() {
            return i(this, (function(n) {
                return [2, new Promise((function(n) {
                    var r = new IntersectionObserver((function(e) {
                        var i = e[0];
                        n({
                            isVisible: t || i.intersectionRatio > .95,
                            size: {
                                width: Math.ceil(i.boundingClientRect.width),
                                height: Math.ceil(i.boundingClientRect.height)
                            }
                        }), r.disconnect()
                    }));
                    r.observe(e)
                }))]
            }))
        }))
    }
    t.checkContainerVisible = function(e, t, n, a) {
        return r(this, void 0, void 0, (function() {
            var r, u;
            return i(this, (function(i) {
                switch (i.label) {
                    case 0:
                        return (r = document.getElementById(e)) ? [4, o(r, a)] : (t("The container " + e + " is not present on the page"), [2, {
                            isVisible: !1,
                            size: {
                                width: 0,
                                height: 0
                            }
                        }]);
                    case 1:
                        return (u = i.sent()).isVisible ? !n || 0 !== u.size.width && 0 !== u.size.height ? (r.classList.add("crazy-banner-container"), [2, u]) : (t("The container " + e + " must have a non-null width and height to render a responsive banner."), [2, {
                            isVisible: !1,
                            size: {
                                width: 0,
                                height: 0
                            }
                        }]) : (t("The container " + e + " is not entirely visible on the page"), [2, u])
                }
            }))
        }))
    }
}, function(e, t, n) {
    (function(t) {
        var n = "[object Map]",
            r = "[object Set]",
            i = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            u = /^\[object .+?Constructor\]$/,
            s = /^0o[0-7]+$/i,
            c = /^(?:0|[1-9]\d*)$/,
            l = "[\\ud800-\\udfff]",
            f = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
            d = "\\ud83c[\\udffb-\\udfff]",
            h = "[^\\ud800-\\udfff]",
            p = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            y = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            v = "(?:" + f + "|" + d + ")" + "?",
            b = "[\\ufe0e\\ufe0f]?" + v + ("(?:\\u200d(?:" + [h, p, y].join("|") + ")[\\ufe0e\\ufe0f]?" + v + ")*"),
            g = "(?:" + [h + f + "?", f, p, y, l].join("|") + ")",
            w = RegExp(d + "(?=" + d + ")|" + g + b, "g"),
            m = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
            I = parseInt,
            _ = "object" == typeof t && t && t.Object === Object && t,
            E = "object" == typeof self && self && self.Object === Object && self,
            S = _ || E || Function("return this")();

        function k(e, t) {
            return function(e, t) {
                for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                return i
            }(t, (function(t) {
                return e[t]
            }))
        }

        function T(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            })), n
        }

        function x(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        }

        function A(e) {
            return function(e) {
                return m.test(e)
            }(e) ? function(e) {
                return e.match(w) || []
            }(e) : function(e) {
                return e.split("")
            }(e)
        }
        var j, C, O, D = Function.prototype,
            z = Object.prototype,
            q = S["__core-js_shared__"],
            L = (j = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "")) ? "Symbol(src)_1." + j : "",
            P = D.toString,
            B = z.hasOwnProperty,
            M = z.toString,
            R = RegExp("^" + P.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            N = S.Symbol,
            F = N ? N.iterator : void 0,
            K = z.propertyIsEnumerable,
            V = Math.floor,
            G = (C = Object.keys, O = Object, function(e) {
                return C(O(e))
            }),
            U = Math.random,
            Y = ae(S, "DataView"),
            Z = ae(S, "Map"),
            $ = ae(S, "Promise"),
            Q = ae(S, "Set"),
            W = ae(S, "WeakMap"),
            H = ce(Y),
            J = ce(Z),
            X = ce($),
            ee = ce(Q),
            te = ce(W);

        function ne(e, t) {
            var n = fe(e) || function(e) {
                    return function(e) {
                        return ye(e) && de(e)
                    }(e) && B.call(e, "callee") && (!K.call(e, "callee") || "[object Arguments]" == M.call(e))
                }(e) ? function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }(e.length, String) : [],
                r = n.length,
                i = !!r;
            for (var o in e) !t && !B.call(e, o) || i && ("length" == o || se(o, r)) || n.push(o);
            return n
        }

        function re(e) {
            return !(!pe(e) || function(e) {
                return !!L && L in e
            }(e)) && (he(e) || function(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (e) {}
                return t
            }(e) ? R : u).test(ce(e))
        }

        function ie(e) {
            if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || z, t !== r) return G(e);
            var t, n, r, i = [];
            for (var o in Object(e)) B.call(e, o) && "constructor" != o && i.push(o);
            return i
        }

        function oe(e, t) {
            return e + V(U() * (t - e + 1))
        }

        function ae(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return re(n) ? n : void 0
        }
        var ue = function(e) {
            return M.call(e)
        };

        function se(e, t) {
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || c.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function ce(e) {
            if (null != e) {
                try {
                    return P.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function le(e, t, u) {
            var c, l, f, d = -1,
                h = function(e) {
                    if (!e) return [];
                    if (de(e)) return function(e) {
                        return "string" == typeof e || !fe(e) && ye(e) && "[object String]" == M.call(e)
                    }(e) ? A(e) : function(e, t) {
                        var n = -1,
                            r = e.length;
                        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                        return t
                    }(e);
                    if (F && e[F]) return function(e) {
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        return n
                    }(e[F]());
                    var t = ue(e);
                    return (t == n ? T : t == r ? x : ve)(e)
                }(e),
                p = h.length,
                y = p - 1;
            for ((u ? function(e, t, n) {
                    if (!pe(n)) return !1;
                    var r = typeof t;
                    return !!("number" == r ? de(n) && se(t, n.length) : "string" == r && t in n) && function(e, t) {
                        return e === t || e != e && t != t
                    }(n[t], e)
                }(e, t, u) : void 0 === t) ? t = 1 : (c = function(e) {
                    var t = function(e) {
                            return e ? (e = function(e) {
                                if ("number" == typeof e) return e;
                                if (function(e) {
                                        return "symbol" == typeof e || ye(e) && "[object Symbol]" == M.call(e)
                                    }(e)) return NaN;
                                if (pe(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = pe(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(i, "");
                                var n = a.test(e);
                                return n || s.test(e) ? I(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
                            }(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(t), l = 0, f = p, c == c && (void 0 !== f && (c = c <= f ? c : f), void 0 !== l && (c = c >= l ? c : l)), t = c); ++d < t;) {
                var v = oe(d, y),
                    b = h[v];
                h[v] = h[d], h[d] = b
            }
            return h.length = t, h
        }(Y && "[object DataView]" != ue(new Y(new ArrayBuffer(1))) || Z && ue(new Z) != n || $ && "[object Promise]" != ue($.resolve()) || Q && ue(new Q) != r || W && "[object WeakMap]" != ue(new W)) && (ue = function(e) {
            var t = M.call(e),
                i = "[object Object]" == t ? e.constructor : void 0,
                o = i ? ce(i) : void 0;
            if (o) switch (o) {
                case H:
                    return "[object DataView]";
                case J:
                    return n;
                case X:
                    return "[object Promise]";
                case ee:
                    return r;
                case te:
                    return "[object WeakMap]"
            }
            return t
        });
        var fe = Array.isArray;

        function de(e) {
            return null != e && function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }(e.length) && !he(e)
        }

        function he(e) {
            var t = pe(e) ? M.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t
        }

        function pe(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function ye(e) {
            return !!e && "object" == typeof e
        }

        function ve(e) {
            return e ? k(e, function(e) {
                return de(e) ? ne(e) : ie(e)
            }(e)) : []
        }
        e.exports = function(e) {
            return le(e, 4294967295)
        }
    }).call(this, n(6))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        u = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
            return a(t, e), t
        },
        s = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
            }))
        },
        c = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = u(n(1)),
        f = n(0),
        d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.overlay = null, t.adDurationInMs = 5e3, t
            }
            return i(t, e), t.prototype.init = function() {
                this.initState !== l.INIT_STATE.INITIALIZED && (this.initState = l.INIT_STATE.INITIALIZED, this.overlay = document.createElement("div"), this.createOverlayStyle(), document.body.appendChild(this.overlay), f.debug("initializing"))
            }, t.prototype.requestAd = function(e) {
                return void 0 === e && (e = "midgame"), s(this, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.ensureInit()];
                            case 1:
                                return t.sent(), this.requestInProgress ? [2] : (this.renderFakeAd(e), [2])
                        }
                    }))
                }))
            }, t.prototype.happytime = function() {
                f.debug("happy time")
            }, t.prototype.gameplayStart = function() {
                f.debug("gameplay start")
            }, t.prototype.gameplayStop = function() {
                f.debug("gameplay stop")
            }, t.prototype.requestBanner = function(e) {
                return s(this, void 0, void 0, (function() {
                    var t, n, r, i;
                    return c(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                f.debug("Requesting banners to gameframe", e), t = [], n = 0, r = e, o.label = 1;
                            case 1:
                                return n < r.length ? (i = r[n], [4, this.checkVisible(i.containerId)]) : [3, 4];
                            case 2:
                                o.sent().isVisible && t.push(i), o.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return t.length > 0 && (f.debug("Valid banners", t), this.renderFakeBanners(t)), [2]
                        }
                    }))
                }))
            }, t.prototype.requestResponsiveBanner = function(e) {
                return s(this, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return f.debug("Requesting responsive banner", e), [4, this.checkBannerContainers(e, !0)];
                            case 1:
                                return t = n.sent(), this.renderFakeBanners(this.getBannerForContainers(t)), [2]
                        }
                    }))
                }))
            }, t.prototype.ensureInit = function(e) {
                return void 0 === e && (e = !1), s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        return [2]
                    }))
                }))
            }, t.prototype.initEventCallback = function(e) {
                f.debug("Cannot get user info outside of CrazyGames"), this.initState === l.INIT_STATE.INITIALIZED && e({
                    userInfo: {
                        browser: {
                            name: "Chrome",
                            version: "89.0.4389.82"
                        },
                        countryCode: "FR",
                        os: {
                            name: "Windows",
                            version: "10"
                        }
                    }
                })
            }, t.prototype.renderFakeBanners = function(e) {
                var t = this;
                e.forEach((function(e) {
                    t.renderFakeBanner(e)
                }))
            }, t.prototype.renderFakeAd = function(e) {
                var t = this;
                f.debug("requesting " + e + " ad"), this.requestInProgress = !0, this.showOverlay(), this.overlay.innerHTML = "<h1>A " + e + " ad would appear here</h1>", this.callListeners("adStarted", {}), window.setTimeout((function() {
                    t.requestInProgress = !1, t.callListeners("adFinished", {}), t.hideOverlay()
                }), this.adDurationInMs)
            }, t.prototype.showOverlay = function() {
                this.overlay.style.display = "flex"
            }, t.prototype.hideOverlay = function() {
                this.overlay.style.display = "none", this.overlay.innerHTML = ""
            }, t.prototype.createOverlayStyle = function() {
                var e = {
                    position: "fixed",
                    display: "none",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    "align-items": "center",
                    "justify-content": "center",
                    "background-color": "rgba(0,0,0,0.5)",
                    "z-index": "10000"
                };
                for (var t in e) this.overlay.style[t] = e[t]
            }, t.prototype.clearBanner = function(e) {
                f.debug("clearBanner " + e)
            }, t.prototype.clearAllBanners = function() {
                f.debug("clearAllBanners")
            }, t
        }(l.default);
    t.default = d
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        u = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
            return a(t, e), t
        },
        s = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, u)
                }
                s((r = r.apply(e, t || [])).next())
            }))
        },
        c = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = u(n(1)),
        f = n(2),
        d = n(0),
        h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.yandexPromise = null, t
            }
            return i(t, e), t.prototype.init = function() {
                this.installYandex()
            }, t.prototype.requestAd = function(e) {
                return void 0 === e && (e = "midgame"), s(this, void 0, void 0, (function() {
                    return c(this, (function(t) {
                        return d.debug("Requesting " + e + " ad"), this.requestInProgress ? [2] : (this.requestInProgress = !0, "rewarded" === e ? [2, this.requestRewardedAd()] : [2, this.requestMidrollAd()])
                    }))
                }))
            }, t.prototype.requestBanner = function(e) {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        return d.debug("Banner not supported with YandexSDK"), [2]
                    }))
                }))
            }, t.prototype.requestResponsiveBanner = function(e) {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        return d.debug("Responsive banner not supported with YandexSDK"), [2]
                    }))
                }))
            }, t.prototype.inviteLink = function(e) {
                return void 0 === e && (e = {}), d.debug("Invite link not supported with YandexSDK"), ""
            }, t.prototype.happytime = function() {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        return d.debug("Happytime not supported with YandexSDK"), [2]
                    }))
                }))
            }, t.prototype.gameplayStart = function() {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        return d.debug("Gameplay start not supported with YandexSDK"), [2]
                    }))
                }))
            }, t.prototype.gameplayStop = function() {
                return s(this, void 0, void 0, (function() {
                    return c(this, (function(e) {
                        return d.debug("Gameplay stop not supported with YandexSDK"), [2]
                    }))
                }))
            }, t.prototype.ensureInit = function() {
                return s(this, void 0, void 0, (function() {
                    var e;
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return this.yandexSDKObj ? [2, this.yandexSDKObj] : this.initState !== l.INIT_STATE.UNINITIALIZED && this.yandexPromise ? [3, 1] : [2, this.installYandex()];
                            case 1:
                                return e = this, [4, this.yandexPromise];
                            case 2:
                                return e.yandexSDKObj = t.sent(), [2, this.yandexSDKObj]
                        }
                    }))
                }))
            }, t.prototype.installYandex = function() {
                return s(this, void 0, void 0, (function() {
                    var e, t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return d.debug("Initializing"), this.initState = l.INIT_STATE.REQUESTED, [4, f.loadScript("https://yandex.ru/games/sdk/v2")];
                            case 1:
                                return n.sent(), e = window.YaGames.init(), this.yandexPromise = e, [4, Promise.race([e, new Promise((function(e, t) {
                                    setTimeout((function() {
                                        t("Yandex SDK was unable to init within the timeout")
                                    }), 5e3)
                                }))])];
                            case 2:
                                return t = n.sent(), this.yandexSDKObj = t, d.debug("Yandex SDK initialized"), this.initState = l.INIT_STATE.INITIALIZED, this.callListeners("initialized", {
                                    userInfo: void 0,
                                    locale: t.environment.i18n.lang
                                }), [2, t]
                        }
                    }))
                }))
            }, t.prototype.requestMidrollAd = function() {
                return s(this, void 0, void 0, (function() {
                    var e = this;
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.ensureInit()];
                            case 1:
                                return t.sent().adv.showFullscreenAdv({
                                    callbacks: {
                                        onOpen: function() {
                                            e.requestInProgress = !1, e.callListeners("adStarted", {})
                                        },
                                        onClose: function() {
                                            e.requestInProgress = !1, e.callListeners("adFinished", {})
                                        },
                                        onError: function(t) {
                                            e.requestInProgress = !1, e.callListeners("adError", t)
                                        }
                                    }
                                }), [2]
                        }
                    }))
                }))
            }, t.prototype.requestRewardedAd = function() {
                return s(this, void 0, void 0, (function() {
                    var e = this;
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.ensureInit()];
                            case 1:
                                return t.sent().adv.showRewardedVideo({
                                    callbacks: {
                                        onOpen: function() {
                                            e.requestInProgress = !1, e.callListeners("adStarted", {})
                                        },
                                        onRewarded: function() {
                                            e.requestInProgress = !1, e.callListeners("adFinished", {})
                                        },
                                        onClose: function() {
                                            e.requestInProgress = !1, e.callListeners("adFinished", {})
                                        },
                                        onError: function(t) {
                                            e.requestInProgress = !1, e.callListeners("adError", t)
                                        }
                                    }
                                }), [2]
                        }
                    }))
                }))
            }, t.prototype.clearBanner = function(e) {
                d.debug("clearBanner not supported with YandexSDK")
            }, t.prototype.clearAllBanners = function() {
                d.debug("clearAllBanners not supported with YandexSDK")
            }, t
        }(l.default);
    t.default = h
}]);