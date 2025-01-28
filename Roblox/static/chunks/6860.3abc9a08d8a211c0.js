"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6860, 7794], {
        27794: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => s
            });
            var a, l = n(65751);

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            let s = function(e) {
                return l.createElement("svg", r({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 12,
                    height: 12,
                    fill: "none"
                }, e), a || (a = l.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M9.182 1.757a.75.75 0 1 1 1.06 1.061l-7.424 7.425a.75.75 0 0 1-1.06-1.061L4.938 6 1.757 2.818a.75.75 0 0 1 1.061-1.06L6 4.938zm1.06 8.486a.75.75 0 0 0 0-1.061L8.476 7.414a.75.75 0 0 0-1.06 1.06l1.767 1.769a.75.75 0 0 0 1.06 0",
                    clipRule: "evenodd"
                })))
            }
        },
        48115: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a, l = n(65751);

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            let s = function(e) {
                return l.createElement("svg", r({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20"
                }, e), a || (a = l.createElement("path", {
                    fill: "currentColor",
                    d: "M11.82 1.086a2 2 0 0 0-3.253.627l-.67 1.56a2 2 0 0 1-.943 1.002L1.606 6.949a2 2 0 0 0-.52 3.203l8.804 8.804a2 2 0 0 0 3.203-.52l2.674-5.348a2 2 0 0 1 1-.944l1.562-.67a2 2 0 0 0 .627-3.252zM4.074 15.968a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414"
                })))
            }
        },
        19783: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var a = n(31677),
                l = n(5955),
                r = n.n(l),
                s = n(65751),
                o = n(9305),
                i = n(21516),
                c = function(e) {
                    if (!e) return 0;
                    var t = r()(e).valueOf() - Date.now();
                    return t < 0 ? 0 : t
                };
            let u = function(e) {
                void 0 === e && (e = {});
                var t = e || {},
                    n = t.leftTime,
                    l = t.targetDate,
                    r = t.interval,
                    u = void 0 === r ? 1e3 : r,
                    d = t.onEnd,
                    f = (0, s.useMemo)(function() {
                        return (0, i.Et)(n) && n > 0 ? Date.now() + n : void 0
                    }, [n]),
                    v = "leftTime" in e ? f : l,
                    p = (0, a.__read)((0, s.useState)(function() {
                        return c(v)
                    }), 2),
                    m = p[0],
                    h = p[1],
                    x = (0, o.A)(d);
                (0, s.useEffect)(function() {
                    if (!v) {
                        h(0);
                        return
                    }
                    h(c(v));
                    var e = setInterval(function() {
                        var t, n = c(v);
                        h(n), 0 === n && (clearInterval(e), null === (t = x.current) || void 0 === t || t.call(x))
                    }, u);
                    return function() {
                        return clearInterval(e)
                    }
                }, [v, u]);
                var g = (0, s.useMemo)(function() {
                    return {
                        days: Math.floor(m / 864e5),
                        hours: Math.floor(m / 36e5) % 24,
                        minutes: Math.floor(m / 6e4) % 60,
                        seconds: Math.floor(m / 1e3) % 60,
                        milliseconds: Math.floor(m) % 1e3
                    }
                }, [m]);
                return [m, g]
            }
        },
        66860: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => b
            });
            var a, l, r, s = n(8991),
                o = n(27794),
                i = n(48115),
                c = n(65751);

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            let d = function(e) {
                return c.createElement("svg", u({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 80 80"
                }, e), a || (a = c.createElement("path", {
                    fill: "#CF0",
                    d: "M0 32c0-11.201 0-16.802 2.18-21.08a20 20 0 0 1 8.74-8.74C15.198 0 20.8 0 32 0h16c11.201 0 16.802 0 21.08 2.18a20 20 0 0 1 8.74 8.74C80 15.198 80 20.8 80 32v16c0 11.201 0 16.802-2.18 21.08a20 20 0 0 1-8.74 8.74C64.802 80 59.2 80 48 80H32c-11.201 0-16.802 0-21.08-2.18a20 20 0 0 1-8.74-8.74C0 64.802 0 59.2 0 48z"
                })), l || (l = c.createElement("path", {
                    fill: "#121212",
                    d: "M58.676 14.187c2.151-.574 3.227-.861 4.076-.609.744.221 1.38.71 1.785 1.372.463.755.463 1.868.463 4.095v1.377c0 1.383 0 2.075-.24 2.653-.211.51-.553.955-.992 1.291-.496.38-1.165.559-2.5.915l-13.515 3.604c-2.152.574-3.228.86-4.077.608a3.14 3.14 0 0 1-1.785-1.371c-.462-.756-.462-1.869-.462-4.096V22.65c0-1.383 0-2.074.24-2.652.21-.51.553-.956.991-1.292.497-.38 1.165-.558 2.502-.915zM27.678 21.929c1.868-.496 2.855-.729 3.646-.494.744.221 1.38.71 1.785 1.372.462.755.462 1.869.462 4.095v1.377c0 1.384 0 2.075-.24 2.653-.21.51-.553.956-.991 1.291-.497.38-1.165.559-2.501.915l-2.16.576v2.03c0 1.383 0 2.074-.24 2.652-.212.51-.554.956-.992 1.291-.497.381-1.165.56-2.501.916l-1.729.46c-2.151.574-3.227.861-4.076.609a3.14 3.14 0 0 1-1.786-1.372c-.415-.677-.457-1.643-.462-3.443-1.868.496-2.855.728-3.645.493a3.14 3.14 0 0 1-1.785-1.371C10 35.224 10 34.11 10 31.883v-1.377c0-1.383 0-2.074.24-2.652.211-.51.553-.956.992-1.292.496-.38 1.165-.558 2.5-.915l2.16-.576v-2.03c0-1.382 0-2.074.24-2.652.212-.51.554-.955.993-1.29.496-.381 1.165-.56 2.5-.916l1.73-.46c2.151-.575 3.227-.861 4.076-.61.744.222 1.38.71 1.785 1.372.415.678.458 1.644.462 3.444M64.962 42.575c-.077-1.373-.116-2.06-.594-2.774-.369-.55-1.139-1.105-1.777-1.28-.828-.229-1.642-.008-3.27.434L23.47 48.678c-1.626.44-2.439.661-3.038 1.277-.462.473-.846 1.341-.886 2.002-.053.857.26 1.468.885 2.69 3.902 7.63 11.84 12.853 21 12.853C54.446 67.5 65 56.947 65 43.929q0-.682-.038-1.354"
                })), r || (r = c.createElement("path", {
                    fill: "#fff",
                    d: "M43.205 63.493a.728.728 0 0 1-.79-.84c1.194-7.496 7.687-13.224 15.519-13.224q.713 0 1.409.062c.477.042.78.52.62.971-2.504 7.104-8.978 12.335-16.758 13.03"
                })))
            };
            var f = n(64795),
                v = n(66976),
                p = n(19783),
                m = n(7277),
                h = n(40636),
                x = n(35497),
                g = n(27125),
                w = n(74710);

            function b(e) {
                let {
                    value: t
                } = e, n = t.details, a = (0, h.useTranslations)(), l = (0, m.useAtomValue)(f.SZ), [r] = (0, p.A)({
                    targetDate: l.hideInstallPromptDeadline
                }), [u, b] = (0, c.useState)(!1);
                (0, c.useEffect)(() => {
                    b(!1);
                    let e = setTimeout(() => {
                        window.deferredPrompt ? (b(!0), (0, v.sendGTMEvent)({
                            event: "desktop-toast-exposure",
                            seo: n.seo
                        })) : (console.warn("desktop-toast-exposure-error"), (0, v.sendGTMEvent)({
                            event: "desktop-toast-exposure-error",
                            seo: n.seo
                        }))
                    }, 6e5);
                    return () => clearTimeout(e)
                }, [n.seo]);
                let j = (0, c.useMemo)(() => !l.isPWAInstalled && !r && u, [l, r, u]);
                return (0, w.createPortal)((0, s.jsx)(g.S7, {
                    children: j && (0, s.jsx)("div", {
                        className: "fixed inset-be-40px inset-ie-40px z-40",
                        "lt-md": "hidden",
                        children: (0, s.jsxs)("div", {
                            className: "dialog-main relative rd-4 bg-gray-4 p-40px",
                            children: [(0, s.jsx)(o.default, {
                                className: "absolute inset-ie-4 top-4 size-3 cursor-pointer op-30 transition-300 hover-op-90",
                                onClick: l.cancelInstall
                            }), (0, s.jsx)("div", {
                                className: "absolute left-50% translate-x--50% -top-10",
                                children: n.icon ? (0, s.jsx)(x.default, {
                                    width: "80",
                                    height: "80",
                                    src: n.icon,
                                    className: "size-20 rd-4",
                                    alt: n.gameName
                                }) : (0, s.jsx)(d, {
                                    className: "size-20"
                                })
                            }), (0, s.jsxs)("div", {
                                children: [(0, s.jsx)("p", {
                                    className: "mt-6 text-center text-4 c-#fff c-op-90 font-700",
                                    children: a("gameDetail.addToDesktop")
                                }), (0, s.jsxs)("div", {
                                    className: "mt-10 flex gap-5",
                                    children: [(0, s.jsx)("button", {
                                        type: "button",
                                        className: "h-11 min-w-37 px-4 c-#fff c-op-90 ld-button",
                                        bg: "op-5 #fff hover:op-10",
                                        onClick: l.cancelInstall,
                                        children: a("desktop.later")
                                    }), (0, s.jsxs)("button", {
                                        type: "button",
                                        className: "h-11 min-w-37 px-4 ld-button ld-button-green",
                                        onClick: function() {
                                            l.install(), (0, v.sendGTMEvent)({
                                                event: "desktop-toast-download",
                                                seo: n.seo
                                            })
                                        },
                                        children: [(0, s.jsx)(i.A, {
                                            className: "mie-2 size-4",
                                            viewBox: "0 0 20 20"
                                        }), a("desktop.add")]
                                    })]
                                })]
                            })]
                        })
                    })
                }), document.body)
            }
        }
    }
]);