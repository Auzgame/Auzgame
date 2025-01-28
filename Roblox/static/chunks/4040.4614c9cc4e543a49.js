(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2860, 4040], {
        48115: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var l, r = n(65751);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let s = function(e) {
                return r.createElement("svg", a({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), l || (l = r.createElement("path", {
                    fill: "currentColor",
                    d: "M11.82 1.086a2 2 0 0 0-3.253.627l-.67 1.56a2 2 0 0 1-.943 1.002L1.606 6.949a2 2 0 0 0-.52 3.203l8.804 8.804a2 2 0 0 0 3.203-.52l2.674-5.348a2 2 0 0 1 1-.944l1.562-.67a2 2 0 0 0 .627-3.252zM4.074 15.968a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414"
                })))
            }
        },
        43052: e => {
            ! function() {
                "use strict";
                var t = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
                    n = e.exports,
                    l = function() {
                        for (var e, n = [
                                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                            ], l = 0, r = n.length, a = {}; l < r; l++)
                            if ((e = n[l]) && e[1] in t) {
                                for (l = 0; l < e.length; l++) a[n[0][l]] = e[l];
                                return a
                            }
                        return !1
                    }(),
                    r = {
                        change: l.fullscreenchange,
                        error: l.fullscreenerror
                    },
                    a = {
                        request: function(e, n) {
                            return new Promise((function(r, a) {
                                var s = (function() {
                                    this.off("change", s), r()
                                }).bind(this);
                                this.on("change", s);
                                var i = (e = e || t.documentElement)[l.requestFullscreen](n);
                                i instanceof Promise && i.then(s).catch(a)
                            }).bind(this))
                        },
                        exit: function() {
                            return new Promise((function(e, n) {
                                if (!this.isFullscreen) {
                                    e();
                                    return
                                }
                                var r = (function() {
                                    this.off("change", r), e()
                                }).bind(this);
                                this.on("change", r);
                                var a = t[l.exitFullscreen]();
                                a instanceof Promise && a.then(r).catch(n)
                            }).bind(this))
                        },
                        toggle: function(e, t) {
                            return this.isFullscreen ? this.exit() : this.request(e, t)
                        },
                        onchange: function(e) {
                            this.on("change", e)
                        },
                        onerror: function(e) {
                            this.on("error", e)
                        },
                        on: function(e, n) {
                            var l = r[e];
                            l && t.addEventListener(l, n, !1)
                        },
                        off: function(e, n) {
                            var l = r[e];
                            l && t.removeEventListener(l, n, !1)
                        },
                        raw: l
                    };
                if (!l) {
                    n ? e.exports = {
                        isEnabled: !1
                    } : window.screenfull = {
                        isEnabled: !1
                    };
                    return
                }
                Object.defineProperties(a, {
                    isFullscreen: {
                        get: function() {
                            return !!t[l.fullscreenElement]
                        }
                    },
                    element: {
                        enumerable: !0,
                        get: function() {
                            return t[l.fullscreenElement]
                        }
                    },
                    isEnabled: {
                        enumerable: !0,
                        get: function() {
                            return !!t[l.fullscreenEnabled]
                        }
                    }
                }), n ? e.exports = a : window.screenfull = a
            }()
        },
        87162: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var l = n(8991),
                r = n(98735),
                a = n.n(r),
                s = n(16199);

            function i(e, t) {
                let {
                    className: n,
                    children: r,
                    options: i,
                    selected: c,
                    selectIndex: o,
                    fieldKey: u,
                    valueKey: d,
                    tapOption: f,
                    ...m
                } = e;
                return (0, l.jsxs)("div", {
                    ref: t,
                    className: a()("z-3 flex flex-col relative w-full flex flex-col items-center overflow-y-auto rd-2 bg-gray-2 p-3 text-3.5 c-#fff c-op-90", n),
                    ...m,
                    children: [!!r && (0, l.jsx)(l.Fragment, {
                        children: r
                    }), null == i ? void 0 : i.map((e, t) => (0, l.jsx)(s.A, {
                        selected: (u ? e[u] : e) === c || o === t,
                        onClick: () => null == f ? void 0 : f(u ? e[u] : e, t, e),
                        children: d ? e[d] : e
                    }, u ? e[u] : e))]
                })
            }
        },
        16199: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var l = n(8991),
                r = n(98735),
                a = n.n(r);

            function s(e, t) {
                let {
                    className: n,
                    children: r,
                    selected: s,
                    ...i
                } = e;
                return (0, l.jsxs)("div", {
                    ref: t,
                    ...i,
                    className: a()("lang-block group/item min-h-9 w-full flex cursor-pointer items-center justify-between rd-1 px-3 transition-300 hover:bg-gray-3", s && "c-green-5", n),
                    children: [(0, l.jsx)("span", {
                        className: "mie-3 truncate ws-nowrap text-3.5 font-600 lh-1.25em exl:text-3",
                        children: r
                    }), (0, l.jsx)("svg", {
                        className: a()("transition-300 size-4", s ? "c-green-5 c-op-100 op-100" : "op-0 group-hover/item:op-100 c-#fff c-op-90"),
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            d: "M4.81803 6.85363C4.4275 6.46311 3.79434 6.46311 3.40381 6.85363C3.01329 7.24416 3.01329 7.87732 3.40381 8.26785L6.23224 11.0963C6.62277 11.4868 7.25593 11.4868 7.64646 11.0963L12.5962 6.14652C12.9867 5.756 12.9867 5.12284 12.5962 4.73231C12.2057 4.34179 11.5725 4.34179 11.182 4.73231L6.93935 8.97495L4.81803 6.85363Z",
                            fill: "currentColor"
                        })
                    })]
                })
            }
        },
        72860: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => s
            });
            var l = n(8991),
                r = n(98735),
                a = n.n(r);

            function s(e) {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, l.jsx)("div", {
                    className: a()("tooltip pointer-events-none absolute top-0 opacity-0 transition-opacity-250", n),
                    "group-hover": "pointer-events-auto op-100",
                    children: t
                })
            }
        },
        4040: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => ek
            });
            var l, r, a, s, i, c, o, u, d, f, m, g, h, v, p = n(8991),
                x = n(83068),
                b = n(8088),
                w = n(65751),
                j = n(27125);

            function y() {
                return (y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let A = function(e) {
                return w.createElement("svg", y({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), l || (l = w.createElement("path", {
                    fill: "currentColor",
                    d: "M13 12h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1z"
                })), r || (r = w.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M3 1a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm0 6a1 1 0 0 1 2 0v2h2V7a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0v-2H5v2a1 1 0 1 1-2 0zm9-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z",
                    clipRule: "evenodd"
                })))
            };
            var N = n(87162),
                E = n(16199),
                C = n(54962),
                z = n(40636);
            let k = (0, n(5971).default)(() => Promise.resolve().then(n.bind(n, 72860)), {
                loadableGenerated: {
                    webpack: () => [72860]
                },
                ssr: !1
            });

            function F() {
                let e = (0, z.useTranslations)("gameDetail"),
                    {
                        dispatch: t,
                        info: n
                    } = (0, w.useContext)(C.A),
                    [l] = (0, w.useState)(Array.from({
                        length: 4
                    }).map((t, n) => e("gameQuality".concat(n + 1))).reverse()),
                    r = e => l.length - e - 1;
                return (0, p.jsxs)("div", {
                    className: "group clarity relative",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        children: (0, p.jsx)(A, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsxs)(k, {
                        className: "left-50% translate-x--50% translate-y--100%",
                        children: [(0, p.jsx)(N.A, {
                            selected: n.quality,
                            className: "w-auto bg-gray-3",
                            children: l.map((e, l) => (0, p.jsx)(E.A, {
                                className: "hover:bg-gray-4",
                                selected: r(n.quality) === l,
                                onClick: () => t.setQuality(Math.abs(r(l))),
                                children: e
                            }, e))
                        }), (0, p.jsx)("div", {
                            className: "h-3 w-full"
                        })]
                    })]
                })
            }

            function M() {
                return (M = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let O = function(e) {
                return w.createElement("svg", M({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16"
                }, e), a || (a = w.createElement("circle", {
                    cx: 8,
                    cy: 8,
                    r: 8,
                    fill: "#FFFFFF80"
                })), s || (s = w.createElement("path", {
                    fill: "#121212",
                    d: "M6.232 7.854a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414 0l3.536-3.536a1 1 0 0 0-1.414-1.414L6.939 8.561z"
                })))
            };
            var L = n(48115),
                R = n(72860),
                B = n(64795),
                S = n(7277),
                P = n(35497);

            function T() {
                let e = (0, z.useTranslations)("gameDetail"),
                    {
                        gameInfo: {
                            details: t
                        }
                    } = (0, w.useContext)(x.i),
                    n = (0, S.useAtomValue)(B.SZ);
                return (0, p.jsxs)("div", {
                    className: "group desktop relative lt-md:hidden",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        children: (0, p.jsx)(L.A, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsxs)(R.default, {
                        className: "left-50% translate-x--50% translate-y--100%",
                        children: [(0, p.jsxs)("div", {
                            className: "relative z-3 flex-center flex-col gap-6 rd-2 bg-gray-4 p-6 -translate-x-8",
                            children: [(0, p.jsxs)("div", {
                                className: "w-full flex-center flex-col gap-3 rd-2 bg-gray-5 p-6",
                                children: [t.icon && (0, p.jsx)(P.default, {
                                    width: "60",
                                    height: "60",
                                    src: t.icon,
                                    className: "size-15 rd-3",
                                    alt: t.gameName
                                }), (0, p.jsx)("span", {
                                    className: "line-clamp-1 text-3.5 c-#fff c-op-90 font-600 lh-5",
                                    children: t.gameName
                                })]
                            }), n.isPWAInstalled ? (0, p.jsxs)("button", {
                                type: "button",
                                className: "h-11 min-w-50 gap-2 bg-gray-3 c-#fff c-op-50 ld-button",
                                children: [(0, p.jsx)(O, {
                                    className: "size-4"
                                }), (0, p.jsx)("span", {
                                    children: e("addedToDesktop")
                                })]
                            }) : (0, p.jsxs)("button", {
                                type: "button",
                                className: "h-11 min-w-50 gap-2 ld-button ld-button-green",
                                onClick: n.install,
                                children: [(0, p.jsx)(L.A, {
                                    className: "size-4"
                                }), (0, p.jsx)("span", {
                                    children: e("addToDesktop")
                                })]
                            })]
                        }), (0, p.jsx)("div", {
                            className: "h-3 w-full"
                        })]
                    })]
                })
            }

            function I() {
                return (I = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let V = function(e) {
                return w.createElement("svg", I({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), i || (i = w.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M19.732 15.447c-1.377 1.694-3.231 2.775-5.235 3.053h-.562a.8.8 0 0 1-.38-.08.9.9 0 0 1-.318-.25l-.105-.157c-.315-.471-.047-1.103.491-1.282q.441-.146.824-.337a1 1 0 1 0-.894-1.788c-.805.402-2.129.644-3.553.644s-2.748-.242-3.553-.644a1 1 0 1 0-.894 1.788q.36.18.77.319c.535.182.806.816.499 1.29l-.067.103c-.128.162-.295.28-.479.338a.9.9 0 0 1-.562-.007 7.96 7.96 0 0 1-3.289-1.102 7.5 7.5 0 0 1-2.22-1.982A1.17 1.17 0 0 1 0 14.676c.107-3.796.37-7.505 2-10.81a1.5 1.5 0 0 1 .26-.33A9.7 9.7 0 0 1 4.466 2.15a7.8 7.8 0 0 1 2.124-.63.72.72 0 0 1 .561.092.9.9 0 0 1 .371.491l.096.22a.4.4 0 0 0 .145.16c.06.037.13.052.198.045h.712a38 38 0 0 1 3.01 0h.343a.33.33 0 0 0 .199-.054.4.4 0 0 0 .143-.166l.192-.362a.84.84 0 0 1 .309-.34.7.7 0 0 1 .417-.1q.564.05 1.11.22a9.4 9.4 0 0 1 3.33 1.809q.152.14.274.315c1.579 3.29 1.868 6.96 1.992 10.715.012.1.05.5-.26.881M7 7.5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1",
                    clipRule: "evenodd"
                })))
            };

            function D(e) {
                let {
                    text: t
                } = e;
                return (0, p.jsxs)(R.default, {
                    className: "left-50% translate-x--50% translate-y--100%",
                    children: [(0, p.jsx)("div", {
                        className: "relative flex-center rd-2 bg-gray-4 px-4 py-3",
                        children: (0, p.jsx)("span", {
                            className: "ws-nowrap text-3.5 c-#fff c-op-90 font-600 lh-3",
                            children: t
                        })
                    }), (0, p.jsx)("div", {
                        className: "h-3 w-full"
                    })]
                })
            }

            function H() {
                let e = (0, z.useTranslations)("gameDetail");
                return (0, p.jsxs)("div", {
                    className: "group discord relative lt-md:hidden",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        onClick: () => window.open("https://discord.gg/SWHpPdHnm2"),
                        children: (0, p.jsx)(V, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsx)(D, {
                        text: e("controlBarFeedback") || "Feedback"
                    })]
                })
            }

            function q() {
                return (q = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let G = function(e) {
                return w.createElement("svg", q({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), c || (c = w.createElement("path", {
                    fill: "currentColor",
                    fillOpacity: .9,
                    fillRule: "evenodd",
                    d: "M12 1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM8.572 6c-.47 0-.74-.53-.457-.9l1.428-1.875c.229-.3.686-.3.914 0L11.885 5.1c.282.37.014.9-.457.9zM1 13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm5 3.428c0 .47-.53.74-.9.457l-1.875-1.428a.576.576 0 0 1 0-.914L5.1 13.115c.37-.282.9-.014.9.457z",
                    clipRule: "evenodd"
                })), o || (o = w.createElement("path", {
                    fill: "currentColor",
                    fillOpacity: .9,
                    d: "M14.5 9.902a2 2 0 1 1 3.464 2l-3.197 5.538a2 2 0 0 1-.846.793l-1.344.665a1 1 0 0 1-1.441-.833l-.097-1.497a2 2 0 0 1 .264-1.128zM17 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
                })))
            };

            function U() {
                let e = (0, z.useTranslations)(),
                    {
                        keyboardGUI: t,
                        dispatch: n
                    } = (0, w.useContext)(C.A);
                return (0, p.jsxs)("div", {
                    className: "group show-preset-key relative lt-md:hidden",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        children: (0, p.jsx)("div", {
                            className: "btn-icon size-full flex-center flex-col cursor-pointer",
                            onClick: () => n.setKeyboardGUI({ ...t,
                                status: b.ap.EDIT
                            }),
                            children: (0, p.jsx)(G, {
                                className: "size-1.5em"
                            })
                        })
                    }), (0, p.jsx)(D, {
                        text: e("gameDetail.controlBarConfigKey") || "Edit keys"
                    })]
                })
            }

            function K() {
                return (K = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let _ = function(e) {
                return w.createElement("svg", K({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), u || (u = w.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M2.624 2.624C4.372.874 6.897 0 10 0s5.628.875 7.377 2.624C19.125 4.372 20 6.897 20 10s-.875 5.628-2.623 7.377C15.627 19.125 13.103 20 10 20s-5.628-.875-7.376-2.623C.874 15.627 0 13.103 0 10s.875-5.628 2.624-7.376M9 4a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm-2.255.86a1 1 0 0 1-.078 1.413 5 5 0 1 0 6.666 0 1 1 0 1 1 1.334-1.49 7 7 0 1 1-9.334 0 1 1 0 0 1 1.412.078",
                    clipRule: "evenodd"
                })))
            };
            var Z = n(32891);

            function W() {
                let e = (0, z.useTranslations)("gameDetail"),
                    {
                        alert: t
                    } = (0, Z.MW)("game"),
                    {
                        resetDevice: n
                    } = (0, w.useContext)(C.A);
                return (0, p.jsxs)("div", {
                    className: "group exit relative",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        onClick: function() {
                            t({
                                title: e("alert9Title"),
                                desc: e("alert9Content"),
                                action: e("alert9Btn"),
                                actionCb: e => {
                                    n(), e()
                                }
                            })
                        },
                        children: (0, p.jsx)(_, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsx)(D, {
                        text: e("alert9Title") || "exit"
                    })]
                })
            }
            let J = {
                src: "https://res.ldrescdn.com/easyfun/_next/static/media/ad-fullscreen.8837aad6.png",
                height: 80,
                width: 138,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEVMaXFPUVJOTk54eHh5eXlqamdQUFIhISFhYWP///+GhoaamqesrKWsrKoxMS+nqFvDyiqIiIxUVTMiIiJzc25vclqsrK7CGlnBAAAAFXRSTlMAxoKy/kr8DN5Trft10Vz4/eb+QmFezCxMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nBXGtREAIAAAscfdZf9ROVIFnMklEqDadBVgxmnaO9h69vPDsl5IwgMdJQFJ2v6aXAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 5
            };

            function X() {
                return (X = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let Q = function(e) {
                return w.createElement("svg", X({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), d || (d = w.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M3 1.5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-11a3 3 0 0 0-3-3zm-.995 2.898A1 1 0 0 0 2 4.5v2a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2H3a1 1 0 0 0-.995.898m0 11.204A1 1 0 0 1 2 15.5v-2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-.995-.898M18 4.5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0zm-.005 11.102A1 1 0 0 0 18 15.5v-2a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 .995-.898",
                    clipRule: "evenodd"
                })))
            };
            var Y = n(7460),
                $ = n(42052),
                ee = n(26599),
                et = n(32134),
                en = n(66976),
                el = n(31677),
                er = n(43052),
                ea = n.n(er),
                es = n(9305),
                ei = n(14113),
                ec = n(7337),
                eo = n(21516);
            let eu = function(e, t) {
                var n = t || {},
                    l = n.onExit,
                    r = n.onEnter,
                    a = n.pageFullscreen,
                    s = void 0 !== a && a,
                    i = (0, eo.Lm)(s) || !s ? {} : s,
                    c = i.className,
                    o = void 0 === c ? "ahooks-page-fullscreen" : c,
                    u = i.zIndex,
                    d = void 0 === u ? 999999 : u,
                    f = (0, es.A)(l),
                    m = (0, es.A)(r),
                    g = (0, el.__read)((0, w.useState)(x), 2),
                    h = g[0],
                    v = g[1],
                    p = (0, w.useRef)(x());

                function x() {
                    return ea().isEnabled && !!ea().element && ea().element === (0, ec.e)(e)
                }
                var b = function(e) {
                        var t, n;
                        e ? null === (t = m.current) || void 0 === t || t.call(m) : null === (n = f.current) || void 0 === n || n.call(f)
                    },
                    j = function(e) {
                        p.current !== e && (b(e), v(e), p.current = e)
                    },
                    y = function() {
                        j(x())
                    },
                    A = function(t) {
                        var n = (0, ec.e)(e);
                        if (n) {
                            var l = document.getElementById(o);
                            t ? (n.classList.add(o), l || ((l = document.createElement("style")).setAttribute("id", o), l.textContent = "\n          .".concat(o, " {\n            position: fixed; left: 0; top: 0; right: 0; bottom: 0;\n            width: 100% !important; height: 100% !important;\n            z-index: ").concat(d, ";\n          }"), n.appendChild(l))) : (n.classList.remove(o), l && l.remove()), j(t)
                        }
                    },
                    N = function() {
                        var t = (0, ec.e)(e);
                        if (t) {
                            if (s) {
                                A(!0);
                                return
                            }
                            if (ea().isEnabled) try {
                                ea().request(t)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    },
                    E = function() {
                        var t = (0, ec.e)(e);
                        if (t) {
                            if (s) {
                                A(!1);
                                return
                            }
                            ea().isEnabled && ea().element === t && ea().exit()
                        }
                    };
                return (0, w.useEffect)(function() {
                    if (ea().isEnabled && !s) return ea().on("change", y),
                        function() {
                            ea().off("change", y)
                        }
                }, []), [h, {
                    enterFullscreen: (0, ei.A)(N),
                    exitFullscreen: (0, ei.A)(E),
                    toggleFullscreen: (0, ei.A)(function() {
                        h ? E() : N()
                    }),
                    isEnabled: ea().isEnabled
                }]
            };

            function ed() {
                let {
                    gameInfo: {
                        details: {
                            gameId: e,
                            gameName: t
                        }
                    }
                } = (0, w.useContext)(x.i), n = (0, z.useTranslations)("gameDetail"), [l, r] = (0, S.useAtom)(et.vD), {
                    isLogged: a
                } = (0, ee.bG)(), s = (0, S.useAtomValue)(et.v0), [i, {
                    toggleFullscreen: c,
                    enterFullscreen: o,
                    exitFullscreen: u
                }] = eu(() => document.getElementById("fullscreen-element")), {
                    preViewAdsTime: d,
                    updateIntervalTime: f
                } = function(e) {
                    let [t, n] = (0, $.A)("MwU92MD4slarNjdgil3boe", {
                        defaultValue: {}
                    });
                    return {
                        preViewAdsTime: (0, w.useMemo)(() => (null == t ? void 0 : t[e]) || 0, [t, e]),
                        updateIntervalTime: function() {
                            let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 18e5;
                            n({ ...t,
                                [e]: Date.now() + l
                            })
                        }
                    }
                }(e), {
                    initAds: m,
                    startLoadAds: g,
                    loadingAds: h
                } = function(e, t, n) {
                    let l = (0, w.useRef)(!1),
                        [r, a] = (0, w.useState)(!1);

                    function s(e) {
                        a(!1), l.current = !1, e.makeRewardedVisible()
                    }

                    function i() {
                        null == t || t()
                    }

                    function c(e) {
                        (window.googletag || {}).destroySlots([e.rewardedSlot])
                    }

                    function o(e) {
                        setTimeout(() => {
                            l.current || (a(!1), null == n || n())
                        }, e)
                    }
                    return {
                        initAds: async function() {
                            try {
                                await (0, Y.sz)("https://securepubads.g.doubleclick.net/tag/js/gpt.js"), window.stpd = window.stpd || {
                                    que: []
                                }
                            } catch (e) {}
                        },
                        startLoadAds: function() {
                            if (a(!0), l.current = !1, window.googletag) {
                                o(3e3);
                                let t = window.googletag || {};
                                t.cmd = t.cmd || [], t.cmd.push(() => {
                                    let n = t.defineOutOfPageSlot(e, t.enums.OutOfPageFormat.REWARDED);
                                    n && n.addService(t.pubads()), t.enableServices(), t.pubads().addEventListener("rewardedSlotReady", s), t.pubads().addEventListener("rewardedSlotClosed", c), t.pubads().addEventListener("rewardedSlotGranted", i), t.display(n)
                                })
                            } else o(2e3)
                        },
                        loadingAds: r
                    }
                }("/22857857566/easyfun.gg_rewarded", f, () => {
                    f(6e4), o()
                });

                function v() {
                    +new Date >= d ? g() : c(), (0, en.sendGTMEvent)({
                        event: "tap-fullscreen",
                        gameName: t,
                        uid: s.uid,
                        isLogged: Number(a)
                    })
                }
                return (0, w.useEffect)(() => {
                    if (l.status === b.fJ.PLAYING) {
                        let e = setTimeout(() => {
                            m(), clearTimeout(e)
                        }, 3e3)
                    } else l.status === b.fJ.IDLE && i && u()
                }, [l.status]), (0, w.useEffect)(() => {
                    r(e => ({ ...e,
                        fullscreen: i
                    }))
                }, [i]), (0, p.jsxs)("div", {
                    className: "group fullscreen relative",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        onClick: v,
                        children: (0, p.jsx)(Q, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsx)(R.default, {
                        className: "left-50% translate-x--50% translate-y--100%",
                        children: +new Date >= d ? (0, p.jsxs)("div", {
                            className: "flex flex-col justify-end",
                            children: [(0, p.jsxs)("div", {
                                className: "relative flex flex-center flex-col flex-col rd-3 bg-gray-4 p-6 -translate-x-100px",
                                children: [(0, p.jsx)("div", {
                                    className: "absolute top--10 h-20 w-34.5",
                                    children: (0, p.jsx)(P.default, {
                                        width: "138",
                                        height: "80",
                                        src: J,
                                        loading: "lazy",
                                        alt: ""
                                    })
                                }), (0, p.jsx)("span", {
                                    className: "mb-6 mt-9 text-3.5 c-#fff c-op-90 font-600",
                                    children: n("controlBarFullscreenAdTips") || "View ad to full screen"
                                }), (0, p.jsxs)("button", {
                                    className: "h-11 w-50 flex-center ld-button ld-button-green",
                                    type: "button",
                                    onClick: v,
                                    children: [h ? (0, p.jsx)("svg", {
                                        className: "mie-8px size-1em",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        children: (0, p.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z",
                                            children: (0, p.jsx)("animateTransform", {
                                                attributeName: "transform",
                                                dur: "0.6s",
                                                repeatCount: "indefinite",
                                                type: "rotate",
                                                values: "0 12 12;360 12 12"
                                            })
                                        })
                                    }) : (0, p.jsx)("svg", {
                                        className: "mie-8px size-1em",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, p.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M2.52494 0.037404C1.09383 0.265089 0 1.50481 0 3L4.5 3L2.52494 0.037404ZM4.5 0L6.5 3H9.5L7.5 0H4.5ZM9.5 0L11.5 3H14C14 1.34315 12.6569 0 11 0H9.5ZM14 5H0V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V5ZM5.25 8.26619C5.25 7.4889 6.09797 7.00878 6.7645 7.4087L8.82084 8.64251C9.46818 9.03091 9.46818 9.96909 8.82084 10.3575L6.7645 11.5913C6.09797 11.9912 5.25 11.5111 5.25 10.7338V8.26619Z",
                                            fill: "#121212"
                                        })
                                    }), n("controlBarFullscreen") || "Fullscreen"]
                                })]
                            }), (0, p.jsxs)("svg", {
                                width: "24",
                                height: "6",
                                viewBox: "0 0 24 6",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "mb-10px translate-x-110px",
                                children: [(0, p.jsx)("g", {
                                    clipPath: "url(#clip0_92_1612)",
                                    children: (0, p.jsx)("path", {
                                        d: "M13.2 5.1L17.8667 1.6C19.2514 0.561423 20.9357 -1.33945e-07 22.6667 -5.82818e-08L1.33333 -9.90791e-07C3.06429 -9.15129e-07 4.74856 0.561422 6.13333 1.6L10.8 5.1C11.5111 5.63333 12.4889 5.63333 13.2 5.1Z",
                                        fill: "#333333"
                                    })
                                }), (0, p.jsx)("defs", {
                                    children: (0, p.jsx)("clipPath", {
                                        id: "clip0_92_1612",
                                        children: (0, p.jsx)("rect", {
                                            width: "24",
                                            height: "6",
                                            fill: "white"
                                        })
                                    })
                                })]
                            })]
                        }) : (0, p.jsx)("div", {
                            className: "relative flex-center rd-2 bg-gray-4 px-4 py-3",
                            children: (0, p.jsx)("span", {
                                className: "ws-nowrap text-3.5 c-#fff c-op-90 font-600 lh-3",
                                children: n("controlBarFullscreen") || "Fullscreen"
                            })
                        })
                    })]
                })
            }

            function ef() {
                return (ef = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let em = function(e) {
                return w.createElement("svg", ef({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), f || (f = w.createElement("path", {
                    fill: "currentColor",
                    d: "M1.414 2C.524 2 .077 3.077.707 3.707l4.586 4.586c.63.63 1.707.184 1.707-.707V6.5a.5.5 0 0 1 .5-.5H12a4 4 0 0 1 0 8H5.236a2 2 0 0 0-1.789 1.106l-.723 1.447A1 1 0 0 0 3.618 18H12a8 8 0 1 0 0-16z"
                })))
            };
            var eg = n(53878);

            function eh() {
                let e = (0, z.useTranslations)("gameDetail"),
                    {
                        control: t
                    } = (0, w.useContext)(C.A);
                return (0, p.jsxs)("div", {
                    className: "group return relative",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        onClick: () => t.triggerSystemKey(eg.je.BACK),
                        children: (0, p.jsx)(em, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsx)(D, {
                        text: e("controlBarReturn") || "Return"
                    })]
                })
            }

            function ev() {
                return (ev = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let ep = function(e) {
                return w.createElement("svg", ev({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 18 8"
                }, e), m || (m = w.createElement("path", {
                    fill: "#fff",
                    fillOpacity: .9,
                    fillRule: "evenodd",
                    d: "M0 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5 3.428c0 .47-.53.74-.9.457L2.225 4.457a.576.576 0 0 1 0-.914L4.1 2.115c.37-.282.9-.013.9.457zM10 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm3 3.428c0 .47.53.74.9.457l1.875-1.428c.3-.229.3-.685 0-.914L13.9 2.115a.562.562 0 0 0-.9.457z",
                    clipRule: "evenodd"
                })))
            };
            var ex = n(98735),
                eb = n.n(ex);

            function ew() {
                let {
                    gameInfo: e
                } = (0, w.useContext)(x.i), {
                    keyboardGUI: t,
                    dispatch: n
                } = (0, w.useContext)(C.A);
                return (0, p.jsx)("div", {
                    className: "show-preset-key group relative lt-md:hidden",
                    children: (0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        children: (0, p.jsxs)("div", {
                            className: "btn-icon size-full flex-center flex-col cursor-pointer",
                            onClick: function() {
                                let l = t.isShowPresetKeyGUI;
                                n.setKeyboardGUI({ ...t,
                                    isShowPresetKeyGUI: !l,
                                    status: l ? b.ap.HIDE : b.ap.SHOW
                                }), (0, en.sendGTMEvent)({
                                    event: "toggle-keyboard-tips",
                                    isShow: Number(!l),
                                    gameName: e.details.gameName
                                })
                            },
                            children: [(0, p.jsx)(ep, {
                                className: "aspect-ratio-9/4 w-1.5em"
                            }), (0, p.jsx)("i", {
                                className: eb()("toggle-dot relative mt-0.25em aspect-ratio-9/4 w-1.5em rd-2em", t.isShowPresetKeyGUI ? "show" : "hide")
                            })]
                        })
                    })
                })
            }

            function ej() {
                return (ej = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let ey = function(e) {
                return w.createElement("svg", ej({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), g || (g = w.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M0 7a3 3 0 0 1 3-3h.734a1 1 0 0 0 .497-.132l4.525-2.586A1.5 1.5 0 0 1 11 2.585v14.83a1.5 1.5 0 0 1-2.244 1.303L4.23 16.132A1 1 0 0 0 3.734 16H3a3 3 0 0 1-3-3zm13.293-.207a1 1 0 0 1 1.414 0L16.5 8.586l1.793-1.793a1 1 0 1 1 1.414 1.414L17.914 10l1.793 1.793a1 1 0 0 1-1.414 1.414L16.5 11.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L15.086 10l-1.793-1.793a1 1 0 0 1 0-1.414",
                    clipRule: "evenodd"
                })))
            };

            function eA() {
                return (eA = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var l in n)({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eN = function(e) {
                return w.createElement("svg", eA({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), h || (h = w.createElement("path", {
                    fill: "currentColor",
                    d: "M0 7a3 3 0 0 1 3-3h.734a1 1 0 0 0 .497-.132l4.525-2.585A1.5 1.5 0 0 1 11 2.585v14.83a1.5 1.5 0 0 1-2.244 1.303L4.23 16.132A1 1 0 0 0 3.734 16H3a3 3 0 0 1-3-3zM13.255 7.097a1 1 0 0 1 1.412-.078A4 4 0 0 1 16 10c0 1.185-.516 2.25-1.333 2.981a1 1 0 1 1-1.334-1.49c.41-.368.667-.899.667-1.49 0-.593-.256-1.124-.667-1.492a1 1 0 0 1-.078-1.412"
                })), v || (v = w.createElement("path", {
                    fill: "currentColor",
                    d: "M15.43 2.77a1 1 0 0 0-.859 1.807A6 6 0 0 1 18.001 10a6 6 0 0 1-3.43 5.423 1 1 0 0 0 .858 1.807 8 8 0 0 0 0-14.46"
                })))
            };

            function eE() {
                let e = (0, z.useTranslations)("gameDetail"),
                    {
                        dispatch: t,
                        info: n
                    } = (0, w.useContext)(C.A),
                    l = (0, S.useAtomValue)(et.v0),
                    {
                        isLogged: r
                    } = (0, ee.bG)(),
                    {
                        gameInfo: {
                            details: a
                        }
                    } = (0, w.useContext)(x.i);
                return (0, p.jsxs)("div", {
                    className: "group volume relative",
                    children: [(0, p.jsx)("button", {
                        type: "button",
                        className: "b-gray-3 bg-gray-3 c-op-90 ld-button ld-button-black hover:c-green-5 hover:c-op-100",
                        "lt-md": "size-8",
                        md: "size-10",
                        onClick: function() {
                            t.setMuted(!n.muted), (0, en.sendGTMEvent)({
                                event: "click-volume",
                                muted: Number(!n.muted),
                                gameName: a.gameName,
                                uid: l.uid,
                                isLogged: Number(r)
                            })
                        },
                        children: n.muted ? (0, p.jsx)(eN, {
                            className: "size-1.5em"
                        }) : (0, p.jsx)(ey, {
                            className: "size-1.5em"
                        })
                    }), (0, p.jsx)(D, {
                        text: e("controlBarVolume") || "Toggle Volume"
                    })]
                })
            }

            function eC() {
                return (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(eh, {}), (0, p.jsx)(eE, {}), (0, p.jsx)(F, {}), (0, p.jsx)(ew, {}), (0, p.jsx)(U, {})]
                })
            }

            function ez() {
                return (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(T, {}), (0, p.jsx)(H, {}), (0, p.jsx)(ed, {})]
                })
            }

            function ek() {
                let {
                    gameInfo: {
                        details: {
                            gameType: e
                        }
                    }
                } = (0, w.useContext)(x.i);
                return (0, p.jsxs)("div", {
                    className: "flex gap-4",
                    "lt-md": "gap-3 flex-wrap",
                    exl: "gap-3",
                    children: [e === b.YU.CLOUD && (0, p.jsx)(eC, {}), (0, p.jsx)(ez, {}), (0, p.jsx)(j.IM, {
                        children: (0, p.jsx)(W, {})
                    })]
                })
            }
        }
    }
]);