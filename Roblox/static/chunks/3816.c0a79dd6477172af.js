(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3816, 7794], {
        27794: (e, t, l) => {
            "use strict";
            l.r(t), l.d(t, {
                default: () => _
            });
            var o, s = l(65751);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var o in l)({}).hasOwnProperty.call(l, o) && (e[o] = l[o])
                    }
                    return e
                }).apply(null, arguments)
            }
            let _ = function(e) {
                return s.createElement("svg", a({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 12,
                    height: 12,
                    fill: "none"
                }, e), o || (o = s.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M9.182 1.757a.75.75 0 1 1 1.06 1.061l-7.424 7.425a.75.75 0 0 1-1.06-1.061L4.938 6 1.757 2.818a.75.75 0 0 1 1.061-1.06L6 4.938zm1.06 8.486a.75.75 0 0 0 0-1.061L8.476 7.414a.75.75 0 0 0-1.06 1.06l1.767 1.769a.75.75 0 0 0 1.06 0",
                    clipRule: "evenodd"
                })))
            }
        },
        2590: (e, t, l) => {
            "use strict";
            l.d(t, {
                default: () => i
            });
            var o = l(8991),
                s = l(49462),
                a = l(98735),
                _ = l.n(a),
                n = l(65751),
                r = l(29503);

            function i(e) {
                let {
                    className: t
                } = e, {
                    serverStatus: l,
                    updateDowntimeStatus: a
                } = (0, s.k)();
                return (0, n.useEffect)(() => {
                    a()
                }, []), l.announcement ? (0, o.jsx)("div", {
                    className: _()("pointer-events-none absolute left-0 z-40 w-full", t),
                    style: {
                        top: " var(--layout-nav-height)"
                    },
                    children: (0, o.jsx)("div", {
                        className: "relative bg-gray-3 bg-op-90",
                        children: (0, o.jsxs)(r.A, {
                            className: "ws-nowrap text-3.5 c-#fff font-600 lh-11",
                            autoFill: !0,
                            children: [l.announcement, (0, o.jsx)("span", {
                                className: "m-x-10 c-#fff c-op-30",
                                children: "/"
                            })]
                        })
                    })
                }) : (0, o.jsx)(o.Fragment, {})
            }
        },
        29681: (e, t, l) => {
            "use strict";
            l.d(t, {
                Sb: () => d,
                ToastProvider: () => r,
                US: () => i,
                aD: () => u,
                eC: () => c,
                y8: () => p
            });
            var o = l(8991),
                s = l(95266),
                a = l(98735),
                _ = l.n(a),
                n = l(65751);
            let r = s.Kq,
                i = n.forwardRef((e, t) => {
                    let {
                        className: l,
                        ...a
                    } = e;
                    return (0, o.jsx)(s.LM, {
                        ref: t,
                        className: _()("fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 top-0 left-50% -translate-x-50% bottom-auto flex-col md:max-w-420px lt-md:max-w-80vw", l),
                        ...a
                    })
                });
            i.displayName = s.LM.displayName;
            let f = _()("pointer-events-auto relative rd-2 bg-gray-4 flex w-full flex-center p-4 overflow-hidden shadow-lg transition-all", "data-[state=open]:animate-keyframes-slide-in-down data-[state=open]:animate-duration-300", "data-[state=closed]:animate-keyframes-fade-out data-[state=closed]:animate-duration-300"),
                p = n.forwardRef((e, t) => {
                    let {
                        className: l,
                        ...a
                    } = e;
                    return (0, o.jsx)(s.bL, {
                        ref: t,
                        className: _()(f, l),
                        ...a
                    })
                });
            p.displayName = s.bL.displayName, n.forwardRef((e, t) => {
                let {
                    className: l,
                    ...a
                } = e;
                return (0, o.jsx)(s.rc, {
                    ref: t,
                    className: _()("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-3.5 font-500 ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", "exl:h-6.5 exl:px-2 exl:text-3", l),
                    ...a
                })
            }).displayName = s.rc.displayName;
            let c = n.forwardRef((e, t) => {
                let {
                    className: l,
                    ...a
                } = e;
                return (0, o.jsx)(s.bm, {
                    ref: t,
                    className: _()("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", l),
                    "toast-close": "",
                    ...a
                })
            });
            c.displayName = s.bm.displayName;
            let d = n.forwardRef((e, t) => {
                let {
                    className: l,
                    ...a
                } = e;
                return (0, o.jsx)(s.hE, {
                    ref: t,
                    className: _()("text-3.5 lh-1.25em font-600 exl:text-3", l),
                    ...a
                })
            });
            d.displayName = s.hE.displayName;
            let u = n.forwardRef((e, t) => {
                let {
                    className: l,
                    ...a
                } = e;
                return (0, o.jsx)(s.VY, {
                    ref: t,
                    className: _()("text-3.5 lh-1.25em c-#fff c-op-90 font-600 exl:text-3", l),
                    ...a
                })
            });
            u.displayName = s.VY.displayName
        },
        33816: (e, t, l) => {
            "use strict";
            l.r(t), l.d(t, {
                default: () => eD
            });
            var o, s, a, _, n, r = l(8991),
                i = l(29681),
                f = l(54962),
                p = l(83068),
                c = l(62974),
                d = l(32134),
                u = l(8088),
                m = l(41201),
                h = l(98735),
                x = l.n(h),
                v = l(7277),
                g = l(5971),
                w = l(65751),
                b = l(53878),
                y = l(35497),
                j = l(27125);

            function N() {
                let e = (0, v.useAtomValue)(d.tv),
                    {
                        rtc: t
                    } = (0, w.useContext)(f.A),
                    [l, o] = (0, w.useState)(0);
                return (0, w.useEffect)(() => {
                    t.effect(e => {
                        o(e)
                    }, [b.L6.RTT])
                }, [e.gameId]), (0, r.jsxs)("p", {
                    className: "mt-2 flex items-center",
                    children: [(0, r.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 2C7.33435 2 7.64658 2.1671 7.83205 2.4453L11.8321 8.4453C12.1384 8.90483 12.0142 9.5257 11.5547 9.83205C11.0952 10.1384 10.4743 10.0142 10.1679 9.5547L7 4.80278L3.83205 9.5547C3.66587 9.80398 3.39667 9.96561 3.09854 9.99513C2.8004 10.0247 2.50474 9.91895 2.29289 9.70711L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L2.84458 7.43036L6.16795 2.4453C6.35342 2.1671 6.66565 2 7 2Z",
                            fill: "white",
                            fillOpacity: "0.5"
                        })
                    }), (0, r.jsx)("span", {
                        className: "mis-1 whitespace-nowrap text-3.5 c-#fff c-op-50 font-600 lh-3",
                        children: "Ping: ".concat(l > 999 ? "999+" : l, " ms")
                    })]
                })
            }

            function z() {
                let {
                    gameInfo: {
                        details: e
                    }
                } = (0, w.useContext)(p.i);
                return (0, r.jsx)(j.S7, {
                    children: (0, r.jsxs)("div", {
                        className: "max-w-40 flex items-center justify-between",
                        children: [e.icon && (0, r.jsx)(y.default, {
                            width: "40",
                            height: "40",
                            src: e.icon,
                            className: "size-10 rd-2",
                            alt: e.gameName
                        }), (0, r.jsxs)("div", {
                            className: "mis-4 flex-col",
                            children: [(0, r.jsx)("span", {
                                className: "line-clamp-1 max-w-25 text-3.5 c-#fff c-op-90 font-600 lh-3.5",
                                children: e.gameName
                            }), e.gameType !== u.YU.WEBSITE && (0, r.jsx)(N, {})]
                        })]
                    })
                })
            }
            var A = l(10103),
                C = l(19783);

            function S() {
                let e = (0, v.useAtomValue)(A.Bp),
                    [t, l] = (0, C.A)({
                        leftTime: 1e3 * (e || 0)
                    });
                return (0, r.jsxs)("div", {
                    className: "flex items-center rd-2 bg-gray-3 p-2",
                    "lt-md": "text-3.5",
                    md: "text-4 h-10",
                    exl: "text-3.5 h-8",
                    children: [(0, r.jsx)("svg", {
                        className: "size-1em",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8281 9.41422L8.99955 7.58564V5C8.99955 4.44772 8.55183 4 7.99955 4C7.44726 4 6.99955 4.44772 6.99955 5L6.99955 8C6.99955 8.28142 7.11579 8.53568 7.30288 8.7174L9.41391 10.8284C9.80443 11.219 10.4376 11.219 10.8281 10.8284C11.2186 10.4379 11.2186 9.80474 10.8281 9.41422Z",
                            fill: "white",
                            fillOpacity: "0.9"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "mis-1 flex-center flex-shrink-1 ws-nowrap c-green-5 [&_span]:font-[OSP-DIN]",
                        children: [(0, r.jsx)("span", {
                            className: "time size-5 inline-flex justify-center rd-1",
                            p: "x-1 t-1 b-0.5",
                            bg: "gray-2",
                            children: String(l.hours).padStart(2, "0")
                        }), (0, r.jsx)("span", {
                            className: "inline-block w-2.5 text-center c-green-5",
                            children: ":"
                        }), (0, r.jsx)("span", {
                            className: "time min-w-5 inline-flex justify-center rd-1",
                            p: "x-1 t-1 b-0.5",
                            bg: "gray-2",
                            children: String(l.minutes).padStart(2, "0")
                        }), (0, r.jsx)("span", {
                            className: "inline-block w-2.5 text-center c-green-5",
                            children: ":"
                        }), (0, r.jsx)("span", {
                            className: "time min-w-5 inline-flex justify-center rd-1",
                            p: "x-1 t-1 b-0.5",
                            bg: "gray-2",
                            children: String(l.seconds).padStart(2, "0")
                        })]
                    }), !1]
                })
            }
            let E = (0, g.default)(() => l.e(4040).then(l.bind(l, 4040)), {
                    loadableGenerated: {
                        webpack: () => [4040]
                    },
                    ssr: !1
                }),
                R = (0, g.default)(() => l.e(2484).then(l.bind(l, 2484)), {
                    loadableGenerated: {
                        webpack: () => [2484]
                    },
                    ssr: !1
                });

            function O(e) {
                let {
                    active: t,
                    setActive: l
                } = e;
                return (0, r.jsx)("div", {
                    className: x()("control-bar-anchor absolute left-50% top--20px translate-x--50% cursor-pointer c-#fff c-op-20 transition-150 hover:c-op-90", t && "c-op-90"),
                    onClick: () => l(!t),
                    children: (0, r.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 101 20",
                        className: "h-20px w-auto",
                        children: [(0, r.jsx)("path", {
                            className: "fill-gray-2",
                            d: "M9.084 20a12 12 0 0 0 10.733-6.633l3.366-6.734A12 12 0 0 1 33.916 0h33.168a12 12 0 0 1 10.733 6.633l3.366 6.734A12 12 0 0 0 91.916 20h8.584H.5z"
                        }), (0, r.jsx)("path", {
                            fill: "currentColor",
                            className: x()(t && "rotate-180 origin-c"),
                            fillRule: "evenodd",
                            d: "M57.686 11.395a1.25 1.25 0 0 1-1.581.79L50.5 10.319l-5.605 1.868a1.25 1.25 0 0 1-.79-2.372l6-2a1.25 1.25 0 0 1 .79 0l6 2a1.25 1.25 0 0 1 .79 1.581",
                            clipRule: "evenodd"
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    children: t
                } = e, {
                    fullscreen: l
                } = (0, v.useAtomValue)(d.vD), o = (0, w.useRef)(), [s, a] = (0, w.useState)(!1), {
                    isEmbedded: _
                } = (0, c.K)(), n = (0, w.useRef)(null);
                (0, m.A)(() => a(!1), n);
                let i = (0, w.useMemo)(() => _ || l, [_, l]);
                return (0, w.useEffect)(() => {
                    clearTimeout(o.current), i ? (a(!0), o.current = setTimeout(() => a(!1), 3e3)) : a(!1)
                }, [i]), i ? (0, r.jsx)("div", {
                    ref: n,
                    className: x()("absolute w-full bottom-0 transition-transform-300", !s && "translate-y-100%"),
                    children: (0, r.jsxs)("div", {
                        className: "control-bar fullscreen relative flex items-center justify-between gap-6 bg-gray-2 p-6",
                        "lt-md": "p-3 py-4 gap-3",
                        md: "p-5 gap-5",
                        exl: "p-4 gap-4",
                        children: [(0, r.jsx)(O, {
                            active: s,
                            setActive: a
                        }), t]
                    })
                }) : (0, r.jsx)("div", {
                    className: x()("control-bar flex justify-between items-center bg-gray-2 relative w-full"),
                    "lt-md": "p-3 py-4 gap-3",
                    md: "p-5 gap-5",
                    exl: "p-4 gap-4",
                    children: t
                })
            }

            function T() {
                let {
                    keyboardGUI: e
                } = (0, w.useContext)(f.A), {
                    gameInfo: {
                        details: {
                            gameType: t
                        }
                    }
                } = (0, w.useContext)(p.i);
                return (0, r.jsxs)(k, {
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center gap-3",
                        "lt-md": "gap-2",
                        children: [(0, r.jsx)(z, {}), t !== u.YU.WEBSITE && (0, r.jsx)(S, {})]
                    }), e.status === u.ap.EDIT ? (0, r.jsx)(R, {}) : (0, r.jsx)(E, {})]
                })
            }
            var D = l(38223);

            function L() {
                return (L = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var o in l)({}).hasOwnProperty.call(l, o) && (e[o] = l[o])
                    }
                    return e
                }).apply(null, arguments)
            }
            let M = function(e) {
                return w.createElement("svg", L({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 116 24"
                }, e), o || (o = w.createElement("path", {
                    fill: "#fff",
                    fillOpacity: .9,
                    d: "M10.572 19.697H5.476v-5.75h4.705c.534 0 .966-.43.966-.96v-2.16c0-.53-.432-.96-.966-.96H5.476V4.23h5.096c.534 0 .967-.43.967-.96V.96c0-.53-.433-.96-.967-.96H.967A.963.963 0 0 0 0 .96v22.08c0 .53.433.96.967.96h9.605c.534 0 .967-.43.967-.96v-2.383c0-.53-.433-.96-.967-.96M47.731 5.346c0 .53-.433.96-.966.96h-3.27a.963.963 0 0 1-.966-.96v-.56a.7.7 0 0 0-.235-.52.65.65 0 0 0-.508-.223h-2.151a.77.77 0 0 0-.548.223.76.76 0 0 0-.195.52V8.68q0 .297.195.52a.77.77 0 0 0 .548.222h3.52q4.85.075 4.85 4.896v4.786q0 4.896-4.85 4.896H38.54q-4.85 0-4.85-4.896v-1.155c0-.53.432-.96.966-.96h3.269c.534 0 .967.43.967.96v1.34q0 .297.195.52a.77.77 0 0 0 .548.222h2.425a.65.65 0 0 0 .508-.223.7.7 0 0 0 .235-.519v-4.34a.7.7 0 0 0-.235-.52.65.65 0 0 0-.508-.222h-3.52q-4.85 0-4.85-4.896V4.896Q33.69 0 38.54 0h4.341q4.85 0 4.85 4.896zM65.815 1.28A.96.96 0 0 0 64.904 0h-3.075a.97.97 0 0 0-.927.685l-2.805 9.33L55.29.685A.97.97 0 0 0 54.365 0H51.29a.96.96 0 0 0-.911 1.28l4.98 13.966v7.794c0 .53.433.96.966.96h3.543c.534 0 .967-.43.967-.96v-7.794zM74.077 14.578v8.462c0 .53-.433.96-.966.96h-3.543a.963.963 0 0 1-.967-.96V.96c0-.53.433-.96.967-.96h9.488c.534 0 .967.43.967.96v2.568c0 .53-.433.96-.967.96h-4.979v5.75h4.588c.534 0 .966.43.966.96v2.42c0 .53-.432.96-.966.96zM93.233 0a.963.963 0 0 0-.967.96v18.589q0 .296-.235.519a.65.65 0 0 1-.508.223H89.41a.77.77 0 0 1-.548-.223.76.76 0 0 1-.195-.52V.96c0-.53-.433-.96-.967-.96h-3.543a.963.963 0 0 0-.966.96v18.144q0 4.896 4.85 4.896h4.85q4.85 0 4.85-4.896V.96c0-.53-.433-.96-.967-.96zM115.033 24c.534 0 .967-.43.967-.96V4.896Q116 0 111.15 0h-4.85q-4.85 0-4.85 4.896V23.04c0 .53.433.96.966.96h3.543c.534 0 .967-.43.967-.96V4.451q0-.296.195-.519a.77.77 0 0 1 .548-.223h2.112q.313 0 .508.223a.7.7 0 0 1 .235.52V23.04c0 .53.433.96.967.96zM25.66.758A.965.965 0 0 0 24.715 0h-3.997a.965.965 0 0 0-.945.758l-4.78 22.08A.962.962 0 0 0 15.938 24h3.581c.456 0 .85-.316.945-.758l2.253-10.405 2.252 10.405c.096.442.49.758.945.758h3.581a.962.962 0 0 0 .945-1.162z"
                })))
            };
            var I = l(2590),
                q = l(7460);

            function G() {
                async function e() {
                    var e;
                    await (0, q.sz)("https://stpd.cloud/assets/stpdwrapper.js", [{
                        name: "crossorigin",
                        value: "anonymous"
                    }]), ((null === (e = window) || void 0 === e ? void 0 : e.stpdwrapper) || []).push({})
                }
                return (0, w.useEffect)(() => {
                    let t = setTimeout(e, 2e3);
                    return () => clearTimeout(t)
                }, []), (0, r.jsx)("div", {
                    className: "h-600px w-160px flex-center animate-keyframes-fade-in animate-duration-1000 rd-4",
                    "lt-md": "hidden",
                    "lt-lg": "hidden",
                    "lt-xl": "absolute left-0 top-0",
                    children: (0, r.jsx)("ins", {
                        className: "stpdwrapper",
                        "data-tag-id": "7337"
                    })
                })
            }

            function P() {
                async function e() {
                    var e;
                    await (0, q.sz)("https://stpd.cloud/assets/stpdwrapper.js", [{
                        name: "crossorigin",
                        value: "anonymous"
                    }]), ((null === (e = window) || void 0 === e ? void 0 : e.stpdwrapper) || []).push({})
                }
                return (0, w.useEffect)(() => {
                    let t = setTimeout(e, 2e3);
                    return () => clearTimeout(t)
                }, []), (0, r.jsxs)("div", {
                    className: "h-full w-250px flex flex-col",
                    "lt-md": "hidden",
                    "lt-xl": "hidden",
                    children: [(0, r.jsx)("div", {
                        className: "h-250px w-250px flex-center animate-keyframes-fade-in animate-duration-1000 rd-4",
                        "lt-md": "hidden",
                        "lt-xl": "hidden",
                        children: (0, r.jsx)("ins", {
                            className: "stpdwrapper",
                            "data-tag-id": "7396"
                        })
                    }), (0, r.jsx)("div", {
                        className: "h-250px w-250px flex-center animate-keyframes-fade-in animate-duration-1000 rd-4",
                        "lt-md": "hidden",
                        "lt-xl": "hidden",
                        children: (0, r.jsx)("ins", {
                            className: "stpdwrapper",
                            "data-tag-id": "7396"
                        })
                    })]
                })
            }
            var V = l(66976),
                K = l(55991),
                U = l(26599);
            let B = () => {},
                H = new Promise(e => {
                    B = e
                }),
                Y = {
                    "com.moonactive.coinmaster": {},
                    "jp.konami.pesam": {
                        azvor8___wasd: {
                            left: 75.95,
                            top: 638.27,
                            size: 144
                        },
                        ezWMGf___o: {
                            left: 794.79,
                            top: 697.04
                        },
                        Tr5TmY___p: {
                            left: 896.28,
                            top: 651.3
                        },
                        iIiv6L___l: {
                            left: 906.82,
                            top: 842.18
                        },
                        pvu7KX___k: {
                            left: 785.44,
                            top: 860.84
                        }
                    },
                    "com.roblox.client": {
                        uqYqkF___wasd: {
                            left: 16.93,
                            top: 678.41,
                            size: 144
                        },
                        lEr2Tm___space: {
                            left: 880.93,
                            top: 820.04
                        }
                    },
                    "com.kiloo.subwaysurf": {
                        P4SSwB___1: {
                            left: 44.35,
                            top: 624.42
                        },
                        "0Lcirx___2": {
                            left: 33.19,
                            top: 780.01
                        },
                        cfS5R6___wasd: {
                            left: 322.29,
                            top: 410.11,
                            size: 81
                        },
                        sYr7sX___q: {
                            left: 0,
                            top: 14.71
                        }
                    },
                    "com.miHoYo.GenshinImpact": {
                        m77878___wasd: {
                            left: 57,
                            top: 586,
                            size: 150
                        },
                        f7WYxl___j: {
                            left: 23.47,
                            top: 206.79
                        },
                        "7u930G___m": {
                            left: 91.43,
                            top: 105.55
                        },
                        wJGTnZ___c: {
                            left: 940.62,
                            top: 26
                        },
                        UGBqet___b: {
                            left: 881.25,
                            top: 26
                        },
                        H08Xfx___e: {
                            left: 713.34,
                            top: 832.01
                        },
                        E7PlFj___q: {
                            left: 628.86,
                            top: 873.64
                        },
                        SXxfvW___f: {
                            left: 518.25,
                            top: 476.39
                        },
                        otgaM9___r: {
                            left: 680.47,
                            top: 719.44
                        },
                        fsqkCr___escape: {
                            left: 21.84,
                            top: 33.33
                        },
                        oIL8Qp___space: {
                            left: 906.14,
                            top: 637.45
                        },
                        dXh2YN___enter: {
                            left: 26.55,
                            top: 890.28
                        },
                        "9VC4St___shift": {
                            left: 906.99,
                            top: 833.27
                        },
                        Jy5cKQ___1: {
                            left: 939.06,
                            top: 188.9
                        },
                        CHOtHx___2: {
                            left: 939.06,
                            top: 295.77
                        },
                        Ny3OFw___3: {
                            left: 939.06,
                            top: 398.6
                        }
                    },
                    "com.MOBGames.PoppyMobileChap2": {
                        "6oZIwu___wasd": {
                            left: 42.95,
                            top: 610.87,
                            size: 144
                        },
                        kVK5Fo___space: {
                            left: 483.93,
                            top: 805.38
                        },
                        "RCpMl0___`": {
                            left: 66.51,
                            top: 107.77
                        },
                        hq4pJR___q: {
                            left: 599.46,
                            top: 736.3
                        },
                        sYoTHH___e: {
                            left: 816.94,
                            top: 721.88
                        }
                    },
                    "com.supercell.brawlstars": {
                        gOgcjp___wasd: {
                            left: 53.74,
                            top: 603.97,
                            size: 160
                        },
                        GHuwDo___q: {
                            left: 660.53,
                            top: 680.42
                        },
                        R3dqM6___space: {
                            left: 822.74,
                            top: 566.34
                        },
                        Qc7gEJ___r: {
                            left: 760.74,
                            top: 837.51
                        },
                        GNUDHS___shift: {
                            left: 571.48,
                            top: 830.63
                        }
                    },
                    "com.innersloth.spacemafia": {
                        "8QBfgB___wasd": {
                            left: 0,
                            top: 701.26,
                            size: 144
                        },
                        Km0aQJ___e: {
                            left: 898.6,
                            top: 829.84
                        }
                    },
                    "com.robtopx.geometryjump": {},
                    "com.supercell.clashofclans": {
                        Q4hUea___wasd: {
                            left: 434.66,
                            top: 410.15,
                            size: 131
                        },
                        jGeC1e___j: {
                            left: 669.11,
                            top: 569.76
                        }
                    },
                    "com.supercell.hayday": {},
                    "com.tepaylink.kiemhieptinh2mobile": {
                        K5qqGF___wasd: {
                            left: 56.15,
                            top: 642.46,
                            size: 144
                        },
                        w386kI___m: {
                            left: 865.93,
                            top: 199.17
                        },
                        "gTiTYO___`": {
                            left: 15.17,
                            top: 12.45
                        },
                        qSWCVK___4: {
                            left: 710.7,
                            top: 568.49
                        },
                        twj4FJ___f: {
                            left: 798.24,
                            top: 568.46
                        },
                        gYerDE___1: {
                            left: 891.6,
                            top: 551.87
                        },
                        "3sycaB___3": {
                            left: 682.71,
                            top: 682.57
                        },
                        rGI2kJ___r: {
                            left: 770.23,
                            top: 688.8
                        },
                        ciU03W___q: {
                            left: 858.95,
                            top: 690.87
                        },
                        "9TyBuD___2": {
                            left: 749.21,
                            top: 805.01
                        },
                        zKx5xL___e: {
                            left: 829.73,
                            top: 804.94
                        },
                        ZsFv3a___tab: {
                            left: 913.78,
                            top: 792.53
                        },
                        Ts4B2y___z: {
                            left: 721.22,
                            top: 921.16
                        },
                        bLxP8u___x: {
                            left: 794.76,
                            top: 923.24
                        },
                        lzDqSo___c: {
                            left: 857.78,
                            top: 914.9
                        },
                        zUCP6p___v: {
                            left: 932.45,
                            top: 914.94
                        },
                        b7dtT1___ab: {
                            left: 825.09,
                            top: 356.84
                        }
                    },
                    "com.kurogame.wutheringwaves.global": {
                        n2vVD1___wasd: {
                            left: 73.62,
                            top: 605.04,
                            size: 130.6892523364486
                        },
                        FqoGrm___space: {
                            left: 862.42,
                            top: 653.53
                        },
                        GkyM5T___shift: {
                            left: 857.76,
                            top: 815.35
                        },
                        Ng61vp___e: {
                            left: 776.05,
                            top: 748.24
                        },
                        utNgNd___1: {
                            left: 885.75,
                            top: 269.71
                        },
                        FaPyop___i: {
                            left: 155.21,
                            top: 33.2
                        },
                        JpjlXO___v: {
                            left: 13.99,
                            top: 188.8
                        },
                        "8SvkZt___q": {
                            left: 625.52,
                            top: 757.24
                        },
                        zVLdnS___m: {
                            left: 71.19,
                            top: 93.34
                        },
                        UMgAJ2___y: {
                            left: 243.91,
                            top: 877.59
                        },
                        wzSWH0___2: {
                            left: 888.51,
                            top: 396.42
                        },
                        cy9040___f: {
                            left: 689.94,
                            top: 844.32
                        },
                        holndX___r: {
                            left: 685,
                            top: 670.02
                        }
                    },
                    "com.nexon.baram": {
                        UlhEej___wasd: {
                            left: 41.99,
                            top: 592.71,
                            size: 81
                        }
                    },
                    "com.LIFULSE.DOSA": {
                        OVduRy___wasd: {
                            left: 57.31,
                            top: 596.82,
                            size: 144
                        },
                        zozoes___q: {
                            left: 750.4,
                            top: 852.7
                        },
                        JXR0WT___e: {
                            left: 876.44,
                            top: 778.01
                        },
                        Xksjv7___f: {
                            left: 755.07,
                            top: 682.57
                        },
                        yZv8Th___r: {
                            left: 834.43,
                            top: 564.32
                        },
                        bKmbuM___z: {
                            left: 920.79,
                            top: 551.87
                        }
                    },
                    "com.supercell.squad": {
                        "9t2D3s___wasd": {
                            left: 78.32,
                            top: 478.53,
                            size: 192
                        },
                        JF2z4g___p: {
                            left: 805.26,
                            top: 599.56
                        }
                    },
                    "com.YostarJP.BlueArchive": {
                        k5TEqm___q: {
                            left: 673.41,
                            top: 842.28
                        },
                        rbDNpW___w: {
                            left: 758.59,
                            top: 842.3
                        },
                        qO5OWG___e: {
                            left: 842.61,
                            top: 842.29
                        },
                        cMt8zX___x: {
                            left: 917.27,
                            top: 809.13
                        },
                        QwrTiF___z: {
                            left: 925.44,
                            top: 904.56
                        }
                    },
                    "com.ordtw.gpgat": {
                        KsmCQ3___wasd: {
                            left: 89.99,
                            top: 566.08,
                            size: 144
                        },
                        fD2uH1___tab: {
                            left: 87.5,
                            top: 263.88
                        }
                    },
                    "com.ncsoft.lineagem19": {
                        UmNVOG___wasd: {
                            left: 68.96,
                            top: 650.7,
                            size: 144
                        },
                        HzvC2h___1: {
                            left: 358.24,
                            top: 842.29
                        },
                        KpWZSW___2: {
                            left: 411.93,
                            top: 842.3
                        },
                        NEVXQn___3: {
                            left: 471.46,
                            top: 844.4
                        },
                        dpqO54___4: {
                            left: 532.14,
                            top: 844.4
                        },
                        DURxaw___5: {
                            left: 589.32,
                            top: 842.3
                        },
                        IyYCiB___z: {
                            left: 702.55,
                            top: 844.4
                        },
                        ithZYt___x: {
                            left: 765.57,
                            top: 844.4
                        },
                        zJNe3V___c: {
                            left: 821.59,
                            top: 852.7
                        },
                        Doc0w1___v: {
                            left: 875.27,
                            top: 848.55
                        },
                        cjjKMY___space: {
                            left: 833.26,
                            top: 682.48
                        },
                        lV4c5G___r: {
                            left: 802.92,
                            top: 522.81
                        },
                        "8Qcsjf___f": {
                            left: 886.94,
                            top: 545.64
                        },
                        l0a3M1___e: {
                            left: 728.23,
                            top: 672.2
                        },
                        gSUKPA___tab: {
                            left: 36.16,
                            top: 273.86
                        }
                    },
                    "com.gamania.lineagem": {
                        UmNVOG___wasd: {
                            left: 68.96,
                            top: 650.7,
                            size: 144
                        },
                        HzvC2h___1: {
                            left: 358.24,
                            top: 842.29
                        },
                        KpWZSW___2: {
                            left: 411.93,
                            top: 842.3
                        },
                        NEVXQn___3: {
                            left: 471.46,
                            top: 844.4
                        },
                        dpqO54___4: {
                            left: 532.14,
                            top: 844.4
                        },
                        DURxaw___5: {
                            left: 589.32,
                            top: 842.3
                        },
                        IyYCiB___z: {
                            left: 702.55,
                            top: 844.4
                        },
                        ithZYt___x: {
                            left: 765.57,
                            top: 844.4
                        },
                        zJNe3V___c: {
                            left: 821.59,
                            top: 852.7
                        },
                        Doc0w1___v: {
                            left: 875.27,
                            top: 848.55
                        },
                        cjjKMY___space: {
                            left: 833.26,
                            top: 682.48
                        },
                        lV4c5G___r: {
                            left: 802.92,
                            top: 522.81
                        },
                        "8Qcsjf___f": {
                            left: 886.94,
                            top: 545.64
                        },
                        l0a3M1___e: {
                            left: 728.23,
                            top: 672.2
                        },
                        gSUKPA___tab: {
                            left: 36.16,
                            top: 273.86
                        }
                    },
                    "com.estgames.cm.tha": {
                        s8OBnV___wasd: {
                            left: 40.94,
                            top: 592.72,
                            size: 144
                        },
                        FstD3V___h: {
                            left: 297.18,
                            top: 704.64
                        },
                        R2OIU2___1: {
                            left: 242.97,
                            top: 836.07
                        },
                        WEHIu1___2: {
                            left: 302.32,
                            top: 836.07
                        },
                        "4et4bT___3": {
                            left: 364.04,
                            top: 834.72
                        },
                        BVQoRA___4: {
                            left: 426.56,
                            top: 831.94
                        },
                        "798hAr___5": {
                            left: 485.17,
                            top: 833.31
                        },
                        "8ZuTOW___shift": {
                            left: 713.27,
                            top: 701.38
                        },
                        FyRtbf___e: {
                            left: 814.06,
                            top: 649.98
                        },
                        "2Bv6zJ___f": {
                            left: 669.6,
                            top: 572.15
                        },
                        rSzgLg___b: {
                            left: 882.02,
                            top: 477.78
                        },
                        h7VszU___q: {
                            left: 909.11,
                            top: 636.86
                        },
                        ickAmY___6: {
                            left: 544.96,
                            top: 831.9
                        },
                        "5bd9I5___7": {
                            left: 610.36,
                            top: 838.14
                        },
                        ewqFyp___8: {
                            left: 671.04,
                            top: 833.96
                        },
                        MtB8qK___tab: {
                            left: 46.67,
                            top: 344.37
                        }
                    },
                    "com.ea.gp.maddennfl21mobile": {
                        Np4mhO___wasd: {
                            left: 87.65,
                            top: 667.3,
                            size: 144
                        },
                        mxgI2i___space: {
                            left: 805.24,
                            top: 771.76
                        },
                        BXpAC1___r: {
                            left: 898.6,
                            top: 437.75
                        },
                        O3HKL3___f: {
                            left: 899.77,
                            top: 605.72
                        }
                    },
                    "com.olzhas.carparking.multyplayer": {
                        cmluPg___w: {
                            left: 896.27,
                            top: 784.21
                        },
                        RLB6mA___pace: {
                            left: 762.09,
                            top: 873.25
                        },
                        "6FpQ35___a": {
                            left: 81.67,
                            top: 665.97
                        },
                        ZfJu0D___d: {
                            left: 221.71,
                            top: 663.95
                        },
                        krwhAW___f: {
                            left: 766.82,
                            top: 738.72
                        },
                        "6LapyO___r": {
                            left: 589.3,
                            top: 881.68
                        },
                        uMwwxG___e: {
                            left: 186.73,
                            top: 904.53
                        },
                        cR8T02___q: {
                            left: 107.37,
                            top: 902.45
                        },
                        iIueQc___c: {
                            left: 130.71,
                            top: 85.06
                        },
                        MhcUcL___tab: {
                            left: 645.37,
                            top: 871.37
                        }
                    },
                    "com.kakaogames.gdts": {
                        ilKJqo___wasd: {
                            left: 61.99,
                            top: 588.44,
                            size: 144
                        },
                        CUUDvs___e: {
                            left: 720.06,
                            top: 771.78
                        },
                        LJf9DG___space: {
                            left: 881.11,
                            top: 775.93
                        },
                        unCAkm___f: {
                            left: 769.06,
                            top: 593.35
                        },
                        NePmqt___q: {
                            left: 871.77,
                            top: 510.38
                        }
                    },
                    "com.dvloper.granny": {
                        "1s6wmS___f": {
                            left: 882.28,
                            top: 103.73
                        },
                        XcNqQ2___e: {
                            left: 856.61,
                            top: 311.19
                        },
                        ZZpQei___wasd: {
                            left: 83,
                            top: 609.21,
                            size: 144
                        },
                        dAnmSi___c: {
                            left: 68.85,
                            top: 192.95
                        }
                    },
                    "com.ea.gp.fifamobile": {
                        dumZV6___wasd: {
                            left: 80.64,
                            top: 551.17,
                            size: 144
                        },
                        gSn8vY___shift: {
                            left: 857.78,
                            top: 819.48
                        },
                        "5D08mr___e": {
                            left: 864.76,
                            top: 547.71
                        },
                        tOvCtc___f: {
                            left: 744.58,
                            top: 614.11
                        },
                        DfnfhG___r: {
                            left: 706.04,
                            top: 831.92
                        }
                    },
                    "vn.pg1.vltk1m": {
                        RnArKi___wasd: {
                            left: 79.52,
                            top: 669.43,
                            size: 144
                        },
                        rNvpYd___e: {
                            left: 854.27,
                            top: 724.02
                        },
                        nptsei___h: {
                            left: 923.14,
                            top: 556.06
                        },
                        "9FuEQ5___q": {
                            left: 820.42,
                            top: 543.57
                        },
                        "1syZp1___r": {
                            left: 741.05,
                            top: 653.49
                        },
                        hrAYAu___f: {
                            left: 750.37,
                            top: 813.3
                        },
                        gD37ZR___space: {
                            left: 671.04,
                            top: 734.44
                        },
                        Bj9sTd___1: {
                            left: 937.13,
                            top: 823.65
                        }
                    },
                    "com.dts.freefireth": {
                        TGNJGc___wasd: {
                            left: 79.69,
                            top: 602.49,
                            size: 131
                        },
                        "8uqmv9___h": {
                            left: 209.83,
                            top: 858.13
                        },
                        U8ARYr___b: {
                            left: 32.19,
                            top: 860.38
                        },
                        "5faUi6___e": {
                            left: 803.2,
                            top: 645.31
                        },
                        "3HPNrE___q": {
                            left: 930.65,
                            top: 491.96
                        },
                        Q2BfFQ___1: {
                            left: 814.81,
                            top: 173.89
                        },
                        CRwZ7d___space: {
                            left: 931.95,
                            top: 661.32
                        },
                        "1tAMwo___c": {
                            left: 928.07,
                            top: 858.09
                        },
                        RLPAgB___alt: {
                            left: 845.71,
                            top: 860.41
                        },
                        ZBjp6t___v: {
                            left: 714.43,
                            top: 720.79
                        },
                        mzR5dE___g: {
                            left: 653.88,
                            top: 867.24
                        },
                        ZHmG0O___m: {
                            left: 64.36,
                            top: 116.7
                        },
                        IbI2rg___shift: {
                            left: 133.87,
                            top: 425.61
                        }
                    },
                    "com.FDGEntertainment.redball4.gp": {
                        sWcYDm___wasd: {
                            left: 86.11,
                            top: 700.23,
                            size: 131
                        },
                        mchxbA___space: {
                            left: 885.6,
                            top: 791.73
                        }
                    },
                    "com.devsisters.cba": {
                        A91L0U___wasd: {
                            left: 113.31,
                            top: 553.27,
                            size: 130.6892523364486
                        },
                        NNAbQn___k: {
                            left: 840.55,
                            top: 755.15
                        },
                        AECc3T___space: {
                            left: 725.99,
                            top: 780.32
                        },
                        psTMA0___o: {
                            left: 781.34,
                            top: 569.8
                        },
                        DGLSMx___p: {
                            left: 901.04,
                            top: 562.94
                        },
                        NDua6Q___2: {
                            left: 931.91,
                            top: 263.16
                        },
                        "4nnVjO___1": {
                            left: 935.78,
                            top: 148.71
                        },
                        JiCiqB___q: {
                            left: 863.72,
                            top: 256.29
                        },
                        l2RuzE___e: {
                            left: 854.71,
                            top: 148.74
                        },
                        aer3ZS___3: {
                            left: 940.95,
                            top: 373
                        },
                        S3U2MG___f: {
                            left: 867.58,
                            top: 377.57
                        }
                    },
                    "com.com2us.smon.normal.freefull.google.kr.android.common": {
                        VWCKCW___1: {
                            left: 725.99,
                            top: 871.85
                        },
                        "8NxYEl___2": {
                            left: 830.23,
                            top: 874.14
                        },
                        CrarQa___3: {
                            left: 917.78,
                            top: 878.72
                        }
                    },
                    "com.pearlabyss.blackdesertm.gl": {
                        Cvg70D___wasd: {
                            left: 83.54,
                            top: 575.03,
                            size: 131
                        },
                        epeXrw___space: {
                            left: 872.71,
                            top: 759.74
                        },
                        uc9qhO___e: {
                            left: 803.2,
                            top: 858.02
                        },
                        Lm6Rz0___c: {
                            left: 785.2,
                            top: 608.62
                        },
                        "5xdvv8___q": {
                            left: 787.77,
                            top: 711.67
                        },
                        vNGCsC___r: {
                            left: 848.27,
                            top: 622.43
                        },
                        tnTCQz___f: {
                            left: 926.78,
                            top: 636.16
                        },
                        fXE07A___m: {
                            left: 81.09,
                            top: 112.13
                        },
                        FRIyPI___tab: {
                            left: 908.75,
                            top: 199.05
                        },
                        S8wlwt___1: {
                            left: 602.42,
                            top: 871.82
                        },
                        vfYOzc___2: {
                            left: 651.29,
                            top: 876.39
                        },
                        BP822s___3: {
                            left: 698.93,
                            top: 881.01
                        },
                        otxdje___i: {
                            left: 346.26,
                            top: 885.58
                        },
                        vfLHQz___v: {
                            left: 481.39,
                            top: 377.54
                        }
                    },
                    "com.YoStar.AetherGazer": {
                        MEooxT___wasd: {
                            left: 78.4,
                            top: 593.39,
                            size: 131
                        },
                        suePAU___space: {
                            left: 898.44,
                            top: 716.15
                        },
                        gs0Wg4___shift: {
                            left: 755.59,
                            top: 803.21
                        },
                        Qse9FI___q: {
                            left: 906.21,
                            top: 457.66
                        },
                        ZVBsJr___r: {
                            left: 810.9,
                            top: 501.13
                        },
                        Av8hHT___e: {
                            left: 768.43,
                            top: 633.83
                        },
                        "0ZiPRs___f": {
                            left: 701.54,
                            top: 491.97
                        },
                        K8q5pS___1: {
                            left: 926.77,
                            top: 121.28
                        },
                        OrZy9N___2: {
                            left: 926.79,
                            top: 276.89
                        },
                        jMcuaq___c: {
                            left: 684.73,
                            top: 697.87
                        }
                    },
                    "com.garena.game.bc": {
                        "9IgEXe___wasd": {
                            left: 57.8,
                            top: 659.72,
                            size: 131
                        }
                    },
                    "zombie.survival.craft.z": {
                        I7ekKL___wasd: {
                            left: 39.78,
                            top: 629.96,
                            size: 131
                        },
                        Pj34ev___tab: {
                            left: 3.86,
                            top: 890.16
                        },
                        "989Ee4___b": {
                            left: 746.59,
                            top: 878.72
                        },
                        PNapQP___c: {
                            left: 940.94,
                            top: 899.32
                        },
                        ASPpJB___e: {
                            left: 898.48,
                            top: 697.9
                        },
                        g7Lbyl___f: {
                            left: 818.66,
                            top: 846.71
                        },
                        "64hoH9___shift": {
                            left: 697.66,
                            top: 883.32
                        }
                    },
                    "com.mobile.legends": {
                        FWY4Df___wasd: {
                            left: 11.79,
                            top: 598.86,
                            size: 144
                        },
                        BpkK3u___i: {
                            left: 902.12,
                            top: 809.13
                        },
                        s5WnI0___e: {
                            left: 741.03,
                            top: 833.99
                        },
                        tetVVp___r: {
                            left: 799.42,
                            top: 647.3
                        },
                        "6v6Ch9___t": {
                            left: 896.28,
                            top: 541.49
                        }
                    },
                    "com.kitkagames.fallbuddies": {
                        EZoLrg___wasd: {
                            left: 94.6,
                            top: 636.21,
                            size: 144
                        },
                        Om1afa___space: {
                            left: 848.45,
                            top: 726.12
                        }
                    },
                    "com.tencent.ig": {
                        Z2LyTf___e: {
                            left: 827.67,
                            top: 704.81
                        },
                        vMjOn5___c: {
                            left: 818.67,
                            top: 887.89
                        },
                        ieuK0k___alt: {
                            left: 901.05,
                            top: 885.58
                        },
                        uwGKaD___space: {
                            left: 937.1,
                            top: 645.27
                        },
                        yWBGhd___f: {
                            left: 638.44,
                            top: 652.19
                        },
                        QxemGb___wasd: {
                            left: 69.4,
                            top: 595.66,
                            size: 131
                        },
                        "3c0Ed7___b": {
                            left: 47.63,
                            top: 871.85
                        },
                        r2amaC___1: {
                            left: 414.46,
                            top: 858.09
                        },
                        f5y4eb___2: {
                            left: 526.47,
                            top: 860.41
                        },
                        jGcouM___h: {
                            left: 283.19,
                            top: 890.16
                        },
                        b0CvlL___shift: {
                            left: 778.77,
                            top: 176.18
                        },
                        nsbivo___g: {
                            left: 664.2,
                            top: 887.87
                        }
                    },
                    "com.gameloft.android.ANMP.GloftA9HM": {
                        WdRmU5___space: {
                            left: 863.71,
                            top: 807.74
                        },
                        "7zjouV___d": {
                            left: 769.74,
                            top: 542.31
                        },
                        dyNzLO___a: {
                            left: 167.33,
                            top: 533.23
                        },
                        QPJGdP___shift: {
                            left: 87.53,
                            top: 549.2
                        }
                    },
                    "com.ninjamuffin99.funkin": {
                        U0yJAF___w: {
                            left: 816.07,
                            top: 453.09
                        },
                        "0f5o0T___a": {
                            left: 723.35,
                            top: 606.41
                        },
                        q3ni8K___d: {
                            left: 920.31,
                            top: 597.22
                        },
                        P2P4lT___s: {
                            left: 825.06,
                            top: 752.82
                        }
                    },
                    "com.play.rosea": {
                        Nh9PLt___space: {
                            left: 888.15,
                            top: 800.92
                        },
                        QJ5gmx___1: {
                            left: 935.81,
                            top: 681.94
                        },
                        nVuUt6___c: {
                            left: 809.65,
                            top: 890.16
                        },
                        pV9UUq___q: {
                            left: 742.72,
                            top: 860.41
                        },
                        HOjYpG___e: {
                            left: 764.61,
                            top: 716.2
                        },
                        BfnHzw___r: {
                            left: 830.23,
                            top: 604.05
                        },
                        bEksTz___f: {
                            left: 912.61,
                            top: 556.07
                        },
                        pCgh61___b: {
                            left: 868.87,
                            top: 327.24
                        },
                        KRnP3E___wasd: {
                            left: 78.4,
                            top: 645.98,
                            size: 131
                        },
                        NzqfRX___tab: {
                            left: 92.68,
                            top: 283.76
                        }
                    },
                    "com.gravity.romg": {
                        ecyN7v___wasd: {
                            left: 95.11,
                            top: 494.96,
                            size: 131
                        },
                        qBPDsm___space: {
                            left: 611.41,
                            top: 885.56
                        },
                        hU3a6i___q: {
                            left: 677.07,
                            top: 878.67
                        },
                        MVHE4c___e: {
                            left: 741.42,
                            top: 878.68
                        },
                        uUIIeU___r: {
                            left: 810.91,
                            top: 878.71
                        },
                        Qwl4hc___f: {
                            left: 874.03,
                            top: 883.29
                        },
                        XmuGMV___c: {
                            left: 938.36,
                            top: 878.68
                        },
                        le8Ajz___b: {
                            left: 740.13,
                            top: 52.63
                        },
                        "7OfVLH___tab": {
                            left: 853.4,
                            top: 356.94
                        },
                        KTsFu4___v: {
                            left: 939.67,
                            top: 672.74
                        },
                        GpDINw___1: {
                            left: 939.66,
                            top: 762.01
                        }
                    },
                    "com.gameloft.android.ANMP.GloftA8HM": {
                        hFlJET___space: {
                            left: 740.16,
                            top: 796.32
                        },
                        "4jXKhc___a": {
                            left: 113.27,
                            top: 789.47
                        },
                        HzNR7a___d: {
                            left: 256.15,
                            top: 789.47
                        },
                        HSXZ3c___shift: {
                            left: 870.15,
                            top: 787.19
                        }
                    },
                    "com.ea.game.nfs14_row": {
                        "9d30TP___f": {
                            left: 895.91,
                            top: 743.71
                        },
                        Jjf7Jc___d: {
                            left: 877.88,
                            top: 425.59
                        },
                        pGbA07___a: {
                            left: 90.09,
                            top: 414.17
                        }
                    },
                    "com.fingersoft.hillclimb": {
                        tt50PT___space: {
                            left: 82.41,
                            top: 752.88
                        },
                        Vr2bhy___w: {
                            left: 859.84,
                            top: 766.55
                        }
                    },
                    "com.HoYoverse.Nap": {
                        JtwEAj___wasd: {
                            left: 89.99,
                            top: 629.96,
                            size: 130.6892523364486
                        },
                        VdVrhL___q: {
                            left: 858.9,
                            top: 547.7
                        },
                        "9NnMZ0___e": {
                            left: 706.01,
                            top: 846.44
                        },
                        xswabZ___shift: {
                            left: 856.56,
                            top: 842.25
                        },
                        wjaO8s___f: {
                            left: 856.58,
                            top: 690.83
                        },
                        L1xjXj___space: {
                            left: 779.57,
                            top: 761.3
                        }
                    },
                    "com.global.rov": {
                        hwULC0___g: {
                            left: 206.43,
                            top: 655.44
                        },
                        SCXKUK___1: {
                            left: 309.59,
                            top: 738.47
                        },
                        NVerQh___2: {
                            left: 460.86,
                            top: 740.65
                        },
                        qRVcA2___3: {
                            left: 615.9,
                            top: 738.53
                        },
                        hNabug___z: {
                            left: 870.45,
                            top: 663.9
                        },
                        "1ZuhKw___b": {
                            left: 866.76,
                            top: 591.29
                        },
                        Ddi7JF___m: {
                            left: 844.51,
                            top: 51.72
                        },
                        oL2u3I___c: {
                            left: 3.69,
                            top: 60.16
                        },
                        URS6V0___wasd: {
                            left: 399.78,
                            top: 530.31,
                            size: 81
                        }
                    },
                    "com.kurogame.gplay.punishing.grayraven.en": {
                        bRGLzI___wasd: {
                            left: 56,
                            top: 584,
                            size: 178
                        },
                        ePs8nV___space: {
                            left: 904.28,
                            top: 844.18
                        },
                        ikMepb___shift: {
                            left: 799.42,
                            top: 848.51
                        },
                        AnZOgM___r: {
                            left: 694.37,
                            top: 846.47
                        },
                        nlRA2S___1: {
                            left: 927.76,
                            top: 674.2
                        },
                        tWEUZo___2: {
                            left: 837.87,
                            top: 676.24
                        },
                        "1rvgEN___3": {
                            left: 756.19,
                            top: 670.09
                        },
                        fP8Gwf___4: {
                            left: 674.52,
                            top: 674.2
                        },
                        y0EQsN___5: {
                            left: 589.3,
                            top: 676.24
                        },
                        K6mUCh___z: {
                            left: 508.79,
                            top: 674.2
                        },
                        poWmQ8___x: {
                            left: 422.45,
                            top: 670.09
                        },
                        SqNpsw___c: {
                            left: 338.4,
                            top: 674.2
                        },
                        ilq7c8___t: {
                            left: 837.81,
                            top: 491.67
                        },
                        JEp2mG___g: {
                            left: 926.78,
                            top: 462.25
                        },
                        hlrOSy___q: {
                            left: 924.28,
                            top: 192.9
                        },
                        bWFe9r___e: {
                            left: 925.4,
                            top: 327.77
                        }
                    },
                    "com.ld.trssjhw": {
                        r5uUem___wasd: {
                            left: 80.66,
                            top: 582.97,
                            size: 144
                        },
                        GS8tNn___j: {
                            left: 847.26,
                            top: 724.07
                        },
                        Rn46C2___y: {
                            left: 730.56,
                            top: 858.92
                        },
                        "0RAzwl___u": {
                            left: 724.73,
                            top: 724.07
                        },
                        BFIv62___i: {
                            left: 766.74,
                            top: 601.66
                        },
                        IkrhYZ___o: {
                            left: 837.93,
                            top: 518.67
                        },
                        CkezeB___p: {
                            left: 927.79,
                            top: 526.97
                        },
                        BRLLUd___space: {
                            left: 826.26,
                            top: 875.49
                        },
                        diI68D___b: {
                            left: 865.94,
                            top: 273.86
                        },
                        QHPxYo___m: {
                            left: 914.93,
                            top: 85.06
                        },
                        Ku99mw___g: {
                            left: 192.54,
                            top: 163.86
                        },
                        hbiKai___c: {
                            left: 17.48,
                            top: 55.96
                        },
                        TTg8YD___f: {
                            left: 575.32,
                            top: 458.46
                        },
                        "3Z8KEo___k": {
                            left: 654.7,
                            top: 879.6
                        },
                        Ns9SYq___1: {
                            left: 743.36,
                            top: 402.49
                        },
                        FEa6dF___2: {
                            left: 804.07,
                            top: 408.72
                        },
                        ifg7DK___3: {
                            left: 864.73,
                            top: 408.68
                        },
                        "4ZKmuU___l": {
                            left: 575.3,
                            top: 879.61
                        },
                        BQEVgG___e: {
                            left: 703.67,
                            top: 549.73
                        },
                        ZHwPom___r: {
                            left: 650,
                            top: 757.15
                        },
                        "82fVZR___h": {
                            left: 648.87,
                            top: 638.95
                        }
                    },
                    "com.vectorunit.purple.googleplay": {
                        se5nhj___a: {
                            left: 47.62,
                            top: 853.51
                        },
                        KZWkPY___d: {
                            left: 181.51,
                            top: 855.85
                        },
                        d2LqJM___o: {
                            left: 38.59,
                            top: 212.81
                        },
                        IqXbHL___k: {
                            left: 912.59,
                            top: 215.11
                        },
                        cPPo5E___space: {
                            left: 906.19,
                            top: 878.72
                        }
                    },
                    "bevung.roadrash.roadrush": {
                        "2Unmy9___w": {
                            left: 72.06,
                            top: 583.49
                        },
                        oZSThF___a: {
                            left: 778.73,
                            top: 761.98
                        },
                        xyPnzr___d: {
                            left: 884.26,
                            top: 773.43
                        },
                        QPIHLR___k: {
                            left: 772.33,
                            top: 599.54
                        },
                        hp7y6t___o: {
                            left: 876.56,
                            top: 590.39
                        }
                    },
                    "com.studiowildcard.wardrumstudios.ark": {
                        qme6Nc___wasd: {
                            left: 137.7,
                            top: 407.72,
                            size: 148
                        },
                        XYOl2o___space: {
                            left: 530.66,
                            top: 440.38
                        },
                        "2RD7vu___f": {
                            left: 913.63,
                            top: 822.21
                        },
                        GCa2kG___b: {
                            left: 18.15,
                            top: 30.26
                        }
                    },
                    "com.silkroad.mb": {
                        "3fEM0y___wasd": {
                            left: 84.08,
                            top: 568.45,
                            size: 144
                        },
                        Mr2k68___e: {
                            left: 849.61,
                            top: 678.41
                        },
                        sX0hH5___b: {
                            left: 22.17,
                            top: 47.72
                        },
                        ukSTPm___r: {
                            left: 913.76,
                            top: 846.41
                        },
                        G5uEf5___c: {
                            left: 12.84,
                            top: 917.01
                        },
                        "9TckoQ___1": {
                            left: 701.36,
                            top: 804.98
                        },
                        rjiYlG___2: {
                            left: 765.57,
                            top: 807.06
                        },
                        f6BJ9x___3: {
                            left: 821.59,
                            top: 809.11
                        },
                        JRJSb9___4: {
                            left: 883.45,
                            top: 809.13
                        },
                        oKSoOJ___5: {
                            left: 945.25,
                            top: 809.06
                        },
                        du0pNr___6: {
                            left: 699.07,
                            top: 917.02
                        },
                        SR3lRd___7: {
                            left: 764.4,
                            top: 921.13
                        },
                        tzApZo___8: {
                            left: 825.05,
                            top: 919.09
                        },
                        kcWunN___9: {
                            left: 883.4,
                            top: 917
                        },
                        uku2kh___0: {
                            left: 947.63,
                            top: 927.38
                        },
                        "6cZ5O4___q": {
                            left: 926.58,
                            top: 684.63
                        }
                    },
                    "com.netease.idv.googleplay": {
                        DImIsa___wasd: {
                            left: 102.82,
                            top: 605.12,
                            size: 144
                        },
                        dwm42J___e: {
                            left: 883.44,
                            top: 800.83
                        },
                        "7kiQLL___q": {
                            left: 685.05,
                            top: 873.44
                        },
                        Kc4dzb___m: {
                            left: 3.5,
                            top: 101.66
                        },
                        roXU8V___t: {
                            left: 681.53,
                            top: 738.52
                        },
                        qXy6Af___r: {
                            left: 919.58,
                            top: 427.39
                        },
                        BKRjLc___1: {
                            left: 763.24,
                            top: 877.53
                        },
                        "4Wrvit___2": {
                            left: 766.74,
                            top: 728.22
                        },
                        "2RQ7VX___3": {
                            left: 827.41,
                            top: 605.78
                        },
                        "5za3Kc___4": {
                            left: 917.29,
                            top: 578.84
                        },
                        "aiWAvb___`": {
                            left: 933.63,
                            top: 64.32
                        }
                    }
                };
            var J = l(98166);

            function Z() {
                let {
                    control: e
                } = (0, w.useContext)(f.A), [t, l] = (0, w.useState)(e.getStatusInfo().configKeyboard || {
                    interactive: {},
                    logic: {}
                }), o = (0, w.useMemo)(() => t.interactive, [t.interactive]);
                return (0, w.useEffect)(() => {
                    e.effect(e => {
                        let {
                            data: t
                        } = e;
                        l({ ...t
                        })
                    }, [b.Kq.KEYBOARD_DATA_UPDATE])
                }, []), {
                    interactive: o,
                    btnMapPosition: t
                }
            }

            function W(e) {
                let {
                    children: t
                } = e, l = (0, w.useRef)(null), {
                    control: o,
                    info: s
                } = (0, w.useContext)(f.A), {
                    fullscreen: a
                } = (0, v.useAtomValue)(d.vD), _ = (0, w.useMemo)(() => matchMedia("(hover: none)").matches, []), n = (0, w.useMemo)(() => s.isHorizontal || a && (0, b.G8)(), [s.isHorizontal, a]);
                ! function() {
                    let {
                        gameInfo: e
                    } = (0, w.useContext)(p.i), {
                        isLogged: t
                    } = (0, U.bG)(), {
                        userInfo: l
                    } = (0, U.Tx)(), o = (0, v.useAtomValue)(d.tv), s = (0, w.useContext)(f.A), {
                        details: {
                            gameId: a,
                            button: _,
                            screenOrientation: n,
                            packageName: r
                        }
                    } = e, i = async () => {
                        let e;
                        if (t) {
                            let {
                                uid: t,
                                shortToken: o
                            } = l, _ = await (0, J.C4)({
                                uid: t,
                                token: o,
                                gameId: a
                            });
                            if (null == _ ? void 0 : _.length) {
                                let {
                                    configData: t,
                                    buttonId: l
                                } = _[0];
                                e = JSON.parse(t), s.dispatch.setKeyboardGUI({ ...s.keyboardGUI,
                                    buttonId: l
                                })
                            }
                        }
                        if (!e) {
                            let t = JSON.stringify(Y[r]);
                            e = (0, b.i4)(_ || t || "{}", n)
                        }
                        e && s.control.updateStatusInfo(t => ({ ...t,
                            configKeyboard: e,
                            isHorizontal: s.info.isHorizontal
                        }))
                    };
                    (0, w.useEffect)(() => {
                        o.device.id && i()
                    }, [o.device.id, a])
                }(), (0, w.useEffect)(() => {
                    l.current && o.setControlLayerElement(l.current)
                }, [l, o]);
                let i = (0, w.useMemo)(() => _ ? {
                    onTouchStart: o.down,
                    onTouchMove: o.move,
                    onTouchEnd: o.up,
                    onTouchCancel: o.up
                } : {
                    onMouseDown: o.down,
                    onMouseMove: o.move,
                    onMouseUp: o.up
                }, [_, o.down, o.move, o.up]);
                return (0, r.jsx)("section", {
                    className: "absolute left-0 top-0 size-full flex-center",
                    children: (0, r.jsx)("div", {
                        ref: l,
                        className: x()("control-panel relative aspect-ratio-720/1280", n ? "w-full" : "h-full"),
                        ...i,
                        children: t
                    })
                })
            }
            let F = (0, g.default)(() => l.e(448).then(l.bind(l, 10448)), {
                    loadableGenerated: {
                        webpack: () => [10448]
                    },
                    ssr: !1
                }),
                Q = (0, g.default)(() => l.e(3131).then(l.bind(l, 3131)), {
                    loadableGenerated: {
                        webpack: () => [3131]
                    },
                    ssr: !1
                }),
                X = (0, g.default)(() => l.e(4195).then(l.bind(l, 84195)), {
                    loadableGenerated: {
                        webpack: () => [84195]
                    },
                    ssr: !1
                }),
                $ = (0, g.default)(() => l.e(8432).then(l.bind(l, 68432)), {
                    loadableGenerated: {
                        webpack: () => [68432]
                    },
                    ssr: !1
                }),
                ee = (0, g.default)(() => l.e(6631).then(l.bind(l, 36631)), {
                    loadableGenerated: {
                        webpack: () => [36631]
                    },
                    ssr: !1
                });

            function et(e) {
                let {
                    type: t,
                    className: l,
                    children: o,
                    useType: s
                } = e;
                return s === u.ap.ADD ? o : (0, r.jsx)("div", {
                    className: x()("absolute left-50% top-0 size-70% -translate-x-50% flex-center", {
                        "top-50% -translate-y-50%": t === b.ee.COMPASS
                    }, l),
                    children: o
                })
            }

            function el(e) {
                let {
                    type: t,
                    useType: l,
                    className: o
                } = e;
                return (0, r.jsx)(et, {
                    className: o,
                    type: t,
                    useType: l,
                    children: t === b.ee.TOUCH ? (0, r.jsx)(F, {}) : t === b.ee.ZOOM ? (0, r.jsx)(X, {}) : t === b.ee.ROTATION ? (0, r.jsx)(Q, {}) : t === b.ee.COMPASS ? l === u.ap.ADD ? (0, r.jsx)(ee, {}) : (0, r.jsx)($, {}) : void 0
                })
            }

            function eo() {
                return (eo = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var o in l)({}).hasOwnProperty.call(l, o) && (e[o] = l[o])
                    }
                    return e
                }).apply(null, arguments)
            }
            let es = function(e) {
                return w.createElement("svg", eo({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 8 8"
                }, e), s || (s = w.createElement("path", {
                    fill: "#fff",
                    fillOpacity: .9,
                    fillRule: "evenodd",
                    d: "M5.768 1.172a.75.75 0 1 1 1.06 1.06L2.232 6.828a.75.75 0 0 1-1.06-1.06L2.939 4 1.172 2.232a.75.75 0 0 1 1.06-1.06L4 2.939zm1.06 5.656a.75.75 0 0 0 0-1.06l-.53-.53a.75.75 0 0 0-1.06 1.06l.53.53a.75.75 0 0 0 1.06 0",
                    clipRule: "evenodd"
                })))
            };
            var ea = l(24923);
            l(66701);
            let e_ = {
                    bottom: !1,
                    bottomLeft: !0,
                    bottomRight: !0,
                    left: !1,
                    right: !1,
                    top: !1,
                    topLeft: !0,
                    topRight: !0
                },
                en = {
                    topLeft: "left-0! top-0! z-2 size-12%! flex-center -translate-x-50% -translate-y-50%",
                    topRight: "right-0! top-0! z-2 size-12%! flex-center translate-x-50% -translate-y-50%",
                    bottomLeft: "bottom-0! left-0! z-2 size-12%! flex-center translate-y-50% -translate-x-50%",
                    bottomRight: "bottom-0! right-0! z-2 size-12%! flex-center translate-x-50% translate-y-50%"
                },
                er = (0, r.jsx)("i", {
                    className: "size-6px rd-50% bg-green-5"
                }),
                ei = {
                    topLeft: er,
                    topRight: er,
                    bottomLeft: er,
                    bottomRight: er
                };

            function ef(e) {
                let {
                    textElement: t,
                    iconElement: l,
                    x: o,
                    y: s,
                    height: a,
                    width: _,
                    wRatio: n,
                    hRatio: i,
                    hot: f,
                    useType: p,
                    bounds: c,
                    className: d,
                    onDragStop: h,
                    onResizeStop: v,
                    onRemove: g,
                    onDoubleClick: b,
                    onBlur: y
                } = e, [j, N] = (0, w.useState)(!1), [z, A] = (0, w.useState)(!1), C = (0, w.useMemo)(() => p !== u.ap.ADD, [p]), S = (0, w.useRef)(null);
                (0, m.A)(() => {
                    j && (N(!1), y && y())
                }, S);
                let E = (0, w.useMemo)(() => ({
                        x: o * n,
                        y: s * i,
                        width: _ * n,
                        height: a * n
                    }), [n, i, o, s, a, _]),
                    R = (0, w.useMemo)(() => ({
                        borderWidth: "".concat(.033 * E.width, "px")
                    }), [E.width]),
                    O = (0, w.useMemo)(() => ({
                        fontSize: "".concat(E.width * n, "px")
                    }), [E.width, n]);
                return (0, r.jsx)(ea.p, {
                    bounds: c,
                    resizeHandleClasses: en,
                    enableResizing: !!j && e_,
                    lockAspectRatio: !0,
                    default: E,
                    onDragStop: h,
                    onResizeStop: v,
                    resizeHandleComponent: ei,
                    className: x()("group absolute left-0 top-0", {
                        "pointer-events-none!": p === u.ap.SHOW
                    }, d),
                    children: (0, r.jsxs)("div", {
                        ref: S,
                        className: x()("relative size-full cursor-pointer b-2px b-#fff b-op-0 b-dashed", {
                            "b-op-10": j && C
                        }),
                        onClick: () => {
                            C && N(!0)
                        },
                        onDoubleClick: b,
                        children: [(0, r.jsx)("div", {
                            className: x()("relative size-full", {
                                "ctrl-btn-mask": C,
                                "show-mask": j || z
                            }),
                            children: (0, r.jsx)("div", {
                                className: x()("size-full flex-center b-#fff b-op-10 rd-50% b-solid p-6.6% transition-150 group-active:b-green-5 group-hover:b-op-100", {
                                    "b-green-5 b-op-100": j && C || f,
                                    "b-red-5! b-op-100!": z
                                }),
                                style: R,
                                children: (0, r.jsx)("div", {
                                    className: x()("size-full flex-center rd-full bg-#fff bg-op-10", {
                                        "bg-op-40": f
                                    }),
                                    children: (0, r.jsxs)("div", {
                                        className: "size-full flex flex-col items-center justify-end",
                                        style: O,
                                        children: [l, t && t]
                                    })
                                })
                            })
                        }), C && (0, r.jsx)("div", {
                            className: x()("absolute op-0 size-30% flex-center cursor-pointer b-transparent rd-full bg-#fff bg-op-10 transition-colors-150 -right-3.3% -top-3.3% hover:bg-red-5", j ? "op-100" : "group-hover:op-100"),
                            style: R,
                            onMouseOver: () => A(!0),
                            onMouseLeave: () => A(!1),
                            onClick: g,
                            children: (0, r.jsx)(es, {
                                className: "size-50%"
                            })
                        })]
                    })
                })
            }
            l(5845);
            let ep = {
                [b.bB.UP]: {
                    left: "50%",
                    top: 0,
                    transform: "translateX(-50%)"
                },
                [b.bB.DOWN]: {
                    left: "50%",
                    bottom: 0,
                    transform: "translateX(-50%)"
                },
                [b.bB.LEFT]: {
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)"
                },
                [b.bB.RIGHT]: {
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)"
                }
            };

            function ec(e) {
                let {
                    data: t,
                    className: l,
                    onDoubleClick: o,
                    editClassName: s,
                    editDirection: a
                } = e;
                return t.type === b.ee.COMPASS ? (0, r.jsx)("div", {
                    className: x()("absolute left-50% top-50% size-full size-60%! -translate-x-50% -translate-y-50%", l),
                    children: (0, r.jsx)("div", {
                        className: "relative size-full",
                        children: Object.keys(t.name).map(e => (0, r.jsx)("span", {
                            onDoubleClick: () => o(e),
                            className: x()("absolute z-2 mb-0.15em cursor-text p-0.15em text-0.1em c-#fff font-600", l, a === e ? s : ""),
                            style: ep[e],
                            children: t.name[e].toLocaleUpperCase()
                        }, t.name[e]))
                    })
                }) : (0, r.jsx)("span", {
                    onDoubleClick: () => o(void 0),
                    className: x()("z-2 cursor-text p-0.25em text-0.2em c-#fff font-600", l, s),
                    children: String(t.name).toLocaleUpperCase()
                })
            }
            var ed = l(24955),
                eu = l(40636);

            function em() {
                return (em = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var o in l)({}).hasOwnProperty.call(l, o) && (e[o] = l[o])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eh = function(e) {
                return w.createElement("svg", em({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16"
                }, e), a || (a = w.createElement("path", {
                    fill: "#fff",
                    d: "M7 .5a.5.5 0 0 0-.5-.5 5 5 0 0 0-5 5v4.5c0 1.395 0 2.092.138 2.667a5 5 0 0 0 3.695 3.695C5.908 16 6.605 16 8 16s2.092 0 2.667-.138a5 5 0 0 0 3.695-3.695c.138-.575.138-1.272.138-2.667v-.773c0-.211 0-.317-.031-.402a.5.5 0 0 0-.294-.293C14.09 8 13.985 8 13.773 8H12c-.419 0-.628 0-.758.093-.13.092-.223.358-.406.889A3.001 3.001 0 0 1 5 8V6c0-1.055.544-1.982 1.367-2.517.341-.222.512-.333.572-.444C7 2.927 7 2.773 7 2.464z"
                })), _ || (_ = w.createElement("path", {
                    fill: "#fff",
                    d: "M7.03 5.753Q7 5.872 7 6v2a1 1 0 0 0 2 0V6a1 1 0 0 0-1.97-.247"
                })), n || (n = w.createElement("path", {
                    fill: "#CF0",
                    d: "M9.5 0a.5.5 0 0 0-.5.5v1.964c0 .309 0 .463.06.575.061.111.232.222.573.444.554.36.983.9 1.203 1.535.184.531.275.797.406.89.13.092.34.092.758.092h1.954l.082-.001a.5.5 0 0 0 .463-.463l.001-.081V5a5 5 0 0 0-5-5"
                })))
            };

            function ex(e) {
                let {
                    elementX: t,
                    elementY: l
                } = e, o = (0, eu.useTranslations)("RTC"), s = (0, w.useMemo)(() => Number.isNaN(t) ? {} : {
                    left: t + 24,
                    top: l + 20
                }, [t, l]);
                return (0, r.jsxs)("div", {
                    className: "absolute flex-center rd-8px bg-gray-4 p-x-16px p-y-12px font-600",
                    style: s,
                    children: [(0, r.jsx)(eh, {}), (0, r.jsx)("span", {
                        className: "mis-8px whitespace-nowrap font-size-14px c-#fff c-op-90 font-600 lh-1em",
                        children: o("interactionLayerMouseTips")
                    })]
                })
            }
            let ev = [],
                eg = {
                    code: ["KeyW", "KeyA", "KeyS", "KeyD"],
                    name: {
                        [b.bB.UP]: "W",
                        [b.bB.LEFT]: "A",
                        [b.bB.DOWN]: "S",
                        [b.bB.RIGHT]: "D"
                    },
                    zIndex: 1
                },
                ew = (e, t) => e - t / 2;

            function eb(e) {
                let {
                    wRatio: t
                } = e, l = (0, w.useRef)(null), o = (0, eu.useTranslations)("RTC"), {
                    control: s,
                    keyboardGUI: a,
                    info: {
                        isHorizontal: _
                    },
                    dispatch: {
                        setKeyboardGUI: n
                    }
                } = (0, w.useContext)(f.A), i = (0, w.useMemo)(() => _ ? "#rtc-window" : ".control-panel", [_]), p = (0, K.A)(l), c = (0, ed.A)(l.current), d = (0, ed.A)(() => document.querySelector(i));
                (0, m.A)(() => {
                    n({ ...a,
                        isShowAddPanel: {}
                    })
                }, l);
                let {
                    cantAddZoom: h,
                    cantAddRotate: v
                } = function() {
                    let {
                        btnMapPosition: e
                    } = Z(), [t, l] = (0, w.useState)(!1), [o, s] = (0, w.useState)(!1);
                    return (0, w.useEffect)(() => {
                        let t = !1,
                            o = !1;
                        Object.keys(e.interactive).map(t => e.interactive[t]).forEach(e => {
                            e.type === b.ee.ZOOM ? t = !0 : e.type === b.ee.ROTATION && (o = !0)
                        }), l(t), s(o)
                    }, [e]), {
                        cantAddZoom: t,
                        cantAddRotate: o
                    }
                }(), [g, y] = (0, w.useState)([{
                    name: o("presetGameBtnClick") || "Press",
                    action: b.ee.TOUCH
                }, {
                    name: o("presetGameBtnArrow") || "Compass",
                    action: b.ee.COMPASS
                }, {
                    name: o("presetGameBtnRotate") || "Rotate",
                    action: b.ee.ROTATION
                }, {
                    name: o("presetGameBtnZoom") || "Zoom",
                    action: b.ee.ZOOM
                }].map(e => ({ ...e,
                    x: 0,
                    y: 0,
                    w: 60,
                    h: 60,
                    addCount: 0
                }))), j = e => {
                    if (p) {
                        if (c.elementX < 1 || c.elementY < 1 || c.elementX > p.width || c.elementY > p.height) {
                            let l = g[e],
                                {
                                    elementX: o,
                                    elementY: a
                                } = d;
                            if (l.action === b.ee.COMPASS) {
                                let e = 150 * t,
                                    _ = 150 * t;
                                s.addControlArea({ ...eg,
                                    x: ew(o, e),
                                    y: ew(a, _),
                                    width: e,
                                    height: _,
                                    type: l.action
                                })
                            } else {
                                let {
                                    code: e,
                                    name: t
                                } = (ev.length || (ev = "EASYFUN".split("").map(e => ({
                                    name: e,
                                    code: ["Key".concat(e)]
                                }))), ev.shift());
                                s.addControlArea({
                                    x: ew(o, l.w),
                                    y: ew(a, l.h),
                                    width: l.w,
                                    height: l.h,
                                    code: e,
                                    name: t,
                                    type: l.action,
                                    zIndex: 1
                                })
                            }
                        }
                        y(g.map((t, l) => l === e ? Object.assign(t, {
                            x: 0,
                            y: 0,
                            addCount: t.addCount + 1
                        }) : t))
                    }
                };
                return Object.keys(a.isShowAddPanel).length ? (0, r.jsx)("div", {
                    className: "absolute left-0 top-0",
                    w: "auto",
                    h: "auto",
                    ref: l,
                    style: a.isShowAddPanel,
                    children: (0, r.jsx)("div", {
                        className: "grid grid-cols-3 grid-gap-16px rd-12px bg-gray-3 p-24px",
                        children: g.map((e, t) => {
                            let l = {
                                    x: e.x,
                                    y: e.y,
                                    width: e.w,
                                    height: e.h,
                                    wRatio: 1,
                                    hRatio: 1
                                },
                                o = e.action === b.ee.ZOOM && h,
                                s = e.action === b.ee.ROTATION && v;
                            return (0, r.jsxs)("div", {
                                className: "relative h-80px min-w-60px w-60px flex flex-col items-center justify-end",
                                children: [(0, r.jsx)(ef, {
                                    className: x()({
                                        "op-30 pointer-events-none!": o || s
                                    }),
                                    id: "0",
                                    ...l,
                                    hot: !1,
                                    bounds: i,
                                    useType: u.ap.ADD,
                                    onDragStop: () => j(t),
                                    iconElement: (0, r.jsx)(el, {
                                        useType: u.ap.ADD,
                                        className: "size-full",
                                        type: e.action
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "font-size-12px c-#fff c-op-50 font-600",
                                    children: e.name
                                })]
                            }, "".concat(e.name).concat(e.addCount))
                        })
                    })
                }) : (0, r.jsx)(ex, {
                    elementX: d.elementX,
                    elementY: d.elementY
                })
            }

            function ey() {
                let {
                    control: e,
                    keyboardGUI: t
                } = (0, w.useContext)(f.A), [l, o] = (0, w.useState)({
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                }), s = (0, w.useMemo)(() => l.width / 1e3, [l.width]), a = (0, w.useMemo)(() => l.height / 1e3, [l.height]), {
                    interactive: _
                } = Z(), {
                    editId: n,
                    direction: i,
                    hotKeyIdList: p,
                    triggerSetKey: c
                } = function() {
                    let e = (0, w.useRef)(new Set),
                        t = (0, w.useRef)({
                            id: "",
                            direction: void 0
                        }),
                        [l, o] = (0, w.useState)(""),
                        {
                            control: s
                        } = (0, w.useContext)(f.A),
                        [a, _] = (0, w.useState)(void 0),
                        [n, r] = (0, w.useState)(new Set),
                        i = l => {
                            e.current.add(l);
                            let o = [],
                                a = [];
                            e.current.forEach(e => {
                                o.push(JSON.parse(e).code), a.push(JSON.parse(e).name)
                            }), s.setControlArea({
                                code: o,
                                name: a.join("+").toLocaleUpperCase(),
                                direction: t.current.direction
                            }, t.current.id)
                        };
                    return (0, w.useEffect)(() => {
                        s.effect((l, o) => {
                            let {
                                event: s
                            } = l;
                            if (!t.current.id) return;
                            s.stopPropagation();
                            let a = JSON.stringify({
                                code: s.code,
                                name: s.key.trim() || s.code
                            });
                            if (o === b.Kq.KEYBOARD_UP) {
                                e.current.delete(a);
                                return
                            }
                            e.current.size > 2 || i(a)
                        }, [b.Kq.KEYBOARD_DOWN, b.Kq.KEYBOARD_UP], !0), s.effect((e, l) => {
                            t.current.id || e.uiId.map(e => (l === b.Kq.PRESET_KEYBOARD_DOWN ? r(t => new Set(t).add(e)) : r(t => (t.delete(e), new Set(t))), e))
                        }, [b.Kq.PRESET_KEYBOARD_DOWN, b.Kq.PRESET_KEYBOARD_UP], !0)
                    }, []), {
                        editId: l,
                        direction: a,
                        hotKeyIdList: n,
                        triggerSetKey: (e, l) => {
                            t.current = {
                                id: e,
                                direction: l
                            }, o(e), _(l), s.updateStatusInfo(t => ({ ...t,
                                isFreezeControl: !!e
                            }))
                        }
                    }
                }();
                return (0, w.useEffect)(() => {
                    o(e.getVideoRect()), e.effect(e => {
                        o(e)
                    }, [b.Kq.CONTROL_RECT_RESIZE])
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [Object.keys(_).map(l => {
                        let o = _[l],
                            f = p.has(l),
                            d = {
                                id: l,
                                x: o.x,
                                y: o.y,
                                height: o.height,
                                width: o.width,
                                wRatio: s,
                                hRatio: a,
                                hot: f,
                                useType: t.status,
                                bounds: "parent"
                            },
                            m = t.status === u.ap.SHOW && !f;
                        return (0, r.jsx)(ef, { ...d,
                            iconElement: (0, r.jsx)(el, {
                                useType: d.useType,
                                type: o.type,
                                className: x()({
                                    "op-30": m
                                })
                            }),
                            textElement: (0, r.jsx)(ec, {
                                onDoubleClick: e => c(l, e),
                                data: o,
                                editDirection: i,
                                editClassName: n === l ? i ? "bg-#000 bg-op-20 rd-4px c-green-5! edit-cursor-animation absolute!" : "bg-#000 bg-op-20 lh-100% rd-4px c-green-5! edit-cursor-animation" : "",
                                className: x()({
                                    "op-30": m
                                })
                            }),
                            onResizeStop: (t, o, s, a, _) => e.setControlArea({
                                width: s.offsetWidth,
                                height: s.offsetHeight,
                                x: _.x,
                                y: _.y
                            }, l),
                            onDragStop: (t, o) => e.setControlArea({
                                x: o.x,
                                y: o.y
                            }, l),
                            onRemove: () => e.deleteControlArea(l),
                            onBlur: () => c("", void 0)
                        }, "".concat(l, "-").concat(s + a))
                    }), t.status === u.ap.EDIT && (0, r.jsx)(eb, {
                        wRatio: s
                    })]
                })
            }

            function ej() {
                let e = (0, w.useRef)(null),
                    {
                        rtc: {
                            videoUpdateTimeout: t,
                            effect: l
                        }
                    } = (0, w.useContext)(f.A),
                    {
                        show: o,
                        muted: s
                    } = function() {
                        let e = (0, w.useContext)(f.A),
                            {
                                isLogged: t
                            } = (0, U.bG)(),
                            l = (0, v.useSetAtom)(d.vD),
                            o = (0, v.useAtomValue)(d.tv),
                            s = (0, v.useAtomValue)(d.v0),
                            a = (0, v.useAtomValue)(d.vD),
                            {
                                gameInfo: {
                                    details: _
                                },
                                progress: {
                                    done: n
                                }
                            } = (0, w.useContext)(p.i),
                            r = (0, w.useRef)(0);
                        (0, w.useEffect)(() => {
                            a.status === u.fJ.LOADING && (r.current = performance.now())
                        }, [a.status]), (0, w.useEffect)(() => {
                            e.info.isHorizontal && B(void 0)
                        }, [e.info.isHorizontal]);
                        let i = async () => {
                                if (!o.isReconnect) {
                                    let e = _.screenOrientation === b.Si.LANDSCAPE;
                                    e && await H, await (0, q.yy)(e ? 1500 : 2e3)
                                }
                                n(), l(e => ({ ...e,
                                    status: u.fJ.PLAYING
                                })), (0, V.sendGTMEvent)({
                                    event: "game-started",
                                    ping: e.rtc.getLastRtt(),
                                    gameName: _.gameName,
                                    timeConsumed: Math.floor((performance.now() - r.current) / 1e3),
                                    uid: s.uid,
                                    isLogged: Number(t),
                                    videoQuality: e.info.quality
                                })
                            },
                            c = setTimeout(() => {
                                B(!0), clearTimeout(c)
                            }, 5e3);
                        return {
                            show: i,
                            muted: e.info.muted
                        }
                    }();
                return (0, w.useEffect)(() => {
                    l(t => {
                        e.current && t && (e.current.srcObject = t)
                    }, [b.L6.STREAM])
                }, []), (0, r.jsx)("video", {
                    ref: e,
                    className: "size-full",
                    "webkit-playsinline": "true",
                    autoPlay: !0,
                    disablePictureInPicture: !0,
                    playsInline: !0,
                    "x-webkit-airplay": "allow",
                    "x5-video-player-type": "h5",
                    "x5-video-player-fullscreen": "true",
                    "x5-video-orientation": "portraint",
                    muted: s,
                    onLoadedData: o,
                    onTimeUpdate: t
                })
            }

            function eN() {
                let e = (0, K.A)(document.body),
                    [t] = (0, w.useState)(!1),
                    l = (0, w.useRef)(null),
                    o = (0, w.useContext)(f.A),
                    s = (0, w.useMemo)(() => 725 >= ((null == e ? void 0 : e.width) || 1e3), [null == e ? void 0 : e.width]),
                    {
                        fullscreen: a
                    } = (0, v.useAtomValue)(d.vD);
                ! function() {
                    let {
                        gameInfo: e
                    } = (0, w.useContext)(p.i), t = (0, w.useContext)(f.A), l = (0, v.useAtomValue)(d.v0), o = (0, v.useAtomValue)(d.tv), s = (0, v.useAtomValue)(d.vD), a = (0, w.useRef)(), _ = () => {
                        let e = 0;
                        a.current = setInterval(() => {
                            t.wss.send(b.LJ.FORCEI, {}), ((e += 1) >= 10 || s.status === u.fJ.PLAYING) && clearInterval(a.current)
                        }, 1500)
                    }, n = () => {
                        t.wss.effect(async e => {
                            if (0 === e.data.code) {
                                _(), t.rtc.init();
                                let e = await t.rtc.createOffer();
                                t.wss.send(b.LJ.OFFER, {
                                    sdp: e
                                })
                            }
                        }, [b._5.JOIN_RES]), t.wss.effect(e => {
                            let {
                                device: l
                            } = o;
                            l && e.data.sdp && (t.rtc.setRemoteDescription(e.data.sdp, {
                                ip: l.publicIp,
                                port: l.accessPort + 2
                            }), t.wss.send(b.LJ.FORCEI, {}))
                        }, [b._5.ANSWER]), t.wss.effect(e => {
                            t.rtc.addCandidate(e.data.candidate)
                        }, [b.LJ.CANDIDATE])
                    }, r = async (o, s, a, _) => {
                        if (t.wss.setParams({
                                url: o
                            }), await t.wss.connect(), !l) return;
                        let {
                            uid: n,
                            token: r
                        } = l;
                        t.wss.send(b.LJ.JOIN, { ...(0, b.jU)({
                                deviceId: a,
                                uid: n,
                                token: r,
                                phoneId: s,
                                gameInfo: {
                                    minutes: 99999,
                                    gameId: e.details.gameId,
                                    packageName: e.details.packageName
                                },
                                ip: ""
                            }),
                            sys_locale: _
                        })
                    };
                    (0, w.useEffect)(() => {
                        if (s.status !== u.fJ.LOADING) return;
                        let {
                            device: {
                                publicIp: e,
                                phoneId: t,
                                id: l
                            }
                        } = o;
                        e && t && (r(e, t, l, "en-US"), n())
                    }, [o, s.status]), (0, w.useEffect)(() => clearInterval(a.current))
                }();
                let {
                    videoElementStyle: _
                } = function(e) {
                    let t = (0, K.A)(document.querySelector("#fullscreen-element")),
                        l = (0, w.useContext)(f.A),
                        {
                            fullscreen: o
                        } = (0, v.useAtomValue)(d.vD),
                        [s, a] = (0, w.useState)({});
                    return (0, w.useEffect)(() => {
                        if (l.info.isHorizontal) {
                            if (o && (0, b.G8)()) a({}), l.control.updateStatusInfo(e => ({ ...e,
                                isHorizontal: !1
                            }));
                            else {
                                let {
                                    clientWidth: t,
                                    clientHeight: l
                                } = e.current, o = "".concat((t - l) / 2, "px");
                                a({
                                    width: "".concat(l, "px"),
                                    height: "".concat(t, "px"),
                                    transform: "rotate(-90deg) translate(".concat(o, ", ").concat(o, ")")
                                })
                            }
                        } else a({}), l.control.updateStatusInfo(e => ({ ...e,
                            isHorizontal: !1
                        }))
                    }, [o, l.info.isHorizontal, l.control, e, t]), {
                        videoElementStyle: s,
                        isFullScreen: o
                    }
                }(l);
                return (0, r.jsxs)("section", {
                    id: "rtc-window",
                    ref: l,
                    onContextMenu: e => {
                        if (o.keyboardGUI.status === u.ap.EDIT) {
                            e.preventDefault();
                            let t = e.target.getBoundingClientRect(),
                                l = e.clientX - t.left,
                                s = e.clientY - t.top;
                            o.dispatch.setKeyboardGUI({ ...o.keyboardGUI,
                                status: u.ap.EDIT,
                                isShowAddPanel: {
                                    top: s,
                                    left: l
                                }
                            })
                        }
                    },
                    className: x()("relative size-full select-none", {
                        "cursor-none": t
                    }),
                    children: [(0, r.jsxs)("div", {
                        style: _,
                        className: "relative size-full",
                        children: [(0, r.jsx)(ej, {}), (0, r.jsx)(W, {
                            children: j.xl && !o.info.isHorizontal && o.keyboardGUI.status !== u.ap.HIDE && (0, r.jsx)(ey, {})
                        })]
                    }), j.xl && o.info.isHorizontal && o.keyboardGUI.status !== u.ap.HIDE && (0, r.jsx)(ey, {}), s && !a && (0, r.jsx)(M, {
                        className: "pointer-events-none absolute inset-ie-5 bottom-5 w-24 opacity-10"
                    })]
                })
            }
            var ez = l(41381),
                eA = l(53298);

            function eC() {
                let {
                    control: e,
                    info: t
                } = (0, w.useContext)(f.A), l = (0, v.useAtomValue)(d.tv), {
                    fullscreen: o
                } = (0, v.useAtomValue)(d.vD), [s] = (0, w.useState)(!1), [a, _] = (0, w.useState)(!1), {
                    restGameStatus: n,
                    sendMessage: i
                } = (0, c.B)();
                (0, ez.Cp)(() => n(!0), i);
                let {
                    updateWatermark: p
                } = function() {
                    let e = {};
                    async function t(t) {
                        return Object.keys(e).length || (e = new eA.yN({
                            width: 200,
                            height: 150,
                            rotate: 0,
                            fontColor: "#ffffff",
                            fontSize: "36px",
                            fontFamily: "Helvetica, Arial, Bebas Neue, sans-serif",
                            contentType: "multi-line-text",
                            globalAlpha: .01
                        })), e.changeOptions(t, "append")
                    }
                    return (0, w.useEffect)(() => () => {
                        var t;
                        null == e || null === (t = e.destroy) || void 0 === t || t.call(e)
                    }, []), {
                        updateWatermark: t,
                        watermark: e
                    }
                }();
                return (0, w.useEffect)(() => {
                    e.effect(e => {
                        _(e.status)
                    }, [b.Kq.TOGGLE_SCREEN_FOLLOW_SCREEN_STATUS])
                }, [e]), (0, w.useEffect)(() => {
                    l.device.id && p({
                        content: "".concat(l.device.id),
                        parent: document.querySelector("#fullscreen-element")
                    })
                }, [l.device.id]), (0, r.jsx)("div", {
                    className: x()("w-full flex", {
                        "h-[calc(100%-90px)]": s
                    }),
                    children: (0, r.jsxs)("div", {
                        className: x()("relative aspect-ratio-880/496 flex-center w-full", {
                            "aspect-ratio-auto size-full": o && !j.xl,
                            "cursor-none": a,
                            "w-[calc(100%-160px)]": s
                        }),
                        children: [!t.isHorizontal && (0, r.jsx)(G, {}), l.device.id && (0, r.jsx)(eN, {}), !t.isHorizontal && (0, r.jsx)(P, {})]
                    })
                })
            }

            function eS() {
                let {
                    gameInfo: {
                        details: e
                    }
                } = (0, w.useContext)(p.i), t = (0, v.useSetAtom)(d.vD);
                return (0, w.useEffect)(() => () => {
                    t(e => ({ ...e,
                        status: u.fJ.IDLE
                    }))
                }, []), (0, r.jsx)("iframe", {
                    className: "aspect-ratio-880/496 w-full overflow-hidden",
                    src: "".concat(e.playLink, "?utm_source=distrib&utm_medium=easyfun.gg&skip-guard=1&clid=8417195"),
                    frameBorder: "0"
                })
            }

            function eE() {
                let {
                    keyboardGUI: e
                } = (0, w.useContext)(f.A), {
                    gameInfo: {
                        details: {
                            gameType: t
                        }
                    }
                } = (0, w.useContext)(p.i), {
                    fullscreen: l
                } = (0, v.useAtomValue)(d.vD), {
                    isEmbedded: o
                } = (0, c.K)();
                return (0, r.jsxs)("div", {
                    className: x()("video-panel relative aspect-ratio-880/496 flex flex-wrap", {
                        "aspect-ratio-auto size-full": l && !j.xl,
                        "edit-status-cursor": e.status === u.ap.EDIT,
                        "h-full": o
                    }),
                    children: [l && (0, r.jsx)(I.default, {
                        className: "fixed top-0"
                    }), t === u.YU.WEBSITE ? (0, r.jsx)(eS, {}) : (0, r.jsx)(eC, {}), l && (0, r.jsx)(M, {
                        className: "pointer-events-none fixed inset-ie-5% bottom-5% w-50 opacity-10"
                    }), o && (0, r.jsx)(D.A, {
                        className: "pointer-events-none absolute inset-ie-10 top-10 w-65 op-60"
                    })]
                })
            }
            l(26204);
            var eR = l(27794),
                eO = l(32891);

            function ek() {
                let {
                    value: e,
                    setValue: t
                } = (0, eO.MW)("game");

                function l(l) {
                    t({ ...e,
                        visible: null != l ? l : !e.visible
                    })
                }

                function o() {
                    if (e.props.cancelCb) {
                        var t, o;
                        null === (t = (o = e.props).cancelCb) || void 0 === t || t.call(o, l)
                    } else l()
                }
                return e.visible && (0, r.jsxs)("div", {
                    "aria-modal": "true",
                    className: "absolute inset-0 z-30 of-y-auto overscroll-none [&::-webkit-scrollbar]:size-0px",
                    children: [(0, r.jsx)("div", {
                        className: "dialog-mask absolute inset-0 z-0 touch-none bg-transparent op-100 backdrop-blur-sm backdrop-filter"
                    }), (0, r.jsx)("div", {
                        className: "dialog-mask absolute inset-0 z-0 h-[calc(100%+0.5px)] touch-none bg-#0008",
                        onClick: function() {
                            e.props.closeByMask && l()
                        }
                    }), (0, r.jsx)("div", {
                        className: "pointer-events-none absolute inset-0 z-1 flex op-100",
                        children: (0, r.jsx)("div", {
                            className: "flex flex-1 items-center justify-center",
                            children: (0, r.jsx)("div", {
                                className: "dialog-main pointer-events-auto isolate max-h-full touch-pan-x touch-pan-y of-y-auto overscroll-contain shadow-lg",
                                children: (0, r.jsxs)("div", {
                                    className: "relative flex-center flex-col gap-6 rd-3 bg-gray-3 p-10 text-center",
                                    "lt-md": "m-2",
                                    exl: "p-8 gap-5",
                                    children: [e.props.title && (0, r.jsx)("div", {
                                        className: "text-4 c-#fff c-op-90 font-600 exl:text-3.5",
                                        children: e.props.title
                                    }), e.props.desc && (0, r.jsx)("div", {
                                        className: "whitespace-pre-wrap text-4 c-#fff c-op-50 lh-1.25em exl:text-3.5",
                                        dangerouslySetInnerHTML: {
                                            __html: e.props.desc
                                        }
                                    }), (e.props.action || e.props.cancel) && (0, r.jsxs)("div", {
                                        className: "flex-center gap-4",
                                        children: [e.props.cancel && (0, r.jsx)("button", {
                                            className: "min-w-25 px-5 py-3.5 ld-button ld-button-green-outline",
                                            exl: "px-4 py-3",
                                            onClick: o,
                                            children: e.props.cancel
                                        }), e.props.action && (0, r.jsx)("button", {
                                            className: "min-w-25 px-5 py-3.5 ld-button ld-button-green",
                                            exl: "px-4 py-3",
                                            onClick: function() {
                                                if (e.props.actionCb) {
                                                    var t, o;
                                                    null === (t = (o = e.props).actionCb) || void 0 === t || t.call(o, l)
                                                } else l()
                                            },
                                            children: e.props.action
                                        })]
                                    }), (0, r.jsx)(eR.default, {
                                        className: "absolute inset-ie-4 top-4 size-3 cursor-pointer op-30 transition-300 hover:op-90",
                                        onClick: o
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            let eT = (0, l(89951).mg)(d.vD, e => e.fullscreen);

            function eD() {
                let e = (0, v.useAtomValue)(eT),
                    t = (0, w.useMemo)(() => {
                        var t, l;
                        return !((null === (t = document) || void 0 === t ? void 0 : t.fullscreenEnabled) || (null === (l = document) || void 0 === l ? void 0 : l.mozFullscreenEnabled) || document.webkitFullscreenEnabled || document.msFullscreenEnabled) && e
                    }, [e]),
                    {
                        isEmbedded: l
                    } = (0, c.K)(),
                    o = (0, w.useMemo)(() => t ? {
                        width: "".concat(window.innerWidth, "px"),
                        height: "".concat(window.innerHeight, "px")
                    } : {}, [t]),
                    s = (0, w.useRef)(null);
                return (0, r.jsxs)("div", {
                    ref: s,
                    id: "fullscreen-element",
                    className: x()("relative size-full overflow-hidden", {
                        "fixed! fake-fullscreen left-0 top-0 z-999!": t
                    }, {
                        "flex-center": l
                    }),
                    style: o,
                    children: [(0, r.jsx)(eE, {}), (0, r.jsx)(T, {}), e && (0, r.jsx)(i.US, {}), (0, r.jsx)(ek, {})]
                })
            }
        },
        66701: () => {},
        5845: () => {},
        26204: () => {}
    }
]);