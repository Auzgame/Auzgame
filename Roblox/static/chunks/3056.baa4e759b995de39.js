"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3056], {
        3056: (e, s, t) => {
            t.r(s), t.d(s, {
                default: () => p
            });
            var o = t(8991),
                l = t(83068),
                a = t(26599),
                c = t(8088),
                n = t(40636),
                r = t(5971),
                i = t(59641),
                d = t.n(i),
                m = t(65751);
            let u = (0, r.default)(() => t.e(7501).then(t.bind(t, 67501)), {
                loadableGenerated: {
                    webpack: () => [67501]
                },
                ssr: !1
            });

            function p() {
                let {
                    gameInfo: e
                } = (0, m.useContext)(l.i), {
                    isLogged: s
                } = (0, a.bG)(), {
                    setShowPersonalState: t
                } = (0, a.K6)(), r = (0, n.useTranslations)("gameDetail"), i = (0, m.useMemo)(() => ({
                    "jp.co.ponos.battlecatsen": "https://docs.google.com/document/d/1mJb5Zs8CbqV6eA1LyscgydnNRbjz4mD0kW0ulf-UwjY/edit",
                    "air.com.lunime.gachaclub": "https://docs.google.com/document/d/1EcG7HmlVOpSx_YP8b_2y04jGoPDtWBliTsw-pUHHfPA/edit"
                })[e.details.packageName] || "https://docs.google.com/document/u/0/d/1DGeuKKTgFKACw0mShE_aLWTc-2DDCPqDjEQGMncvqQc/", [e.details.packageName]), p = (0, m.useMemo)(() => "https://docs.google.com/document/u/0/d/1DGeuKKTgFKACw0mShE_aLWTc-2DDCPqDjEQGMncvqQc/" === i ? "Do Not Play as a Guest" : "How to save your game process", [i]);
                return (0, o.jsxs)("section", {
                    className: "flex flex-col items-center",
                    md: "absolute bottom-10",
                    exl: "bottom-8",
                    children: [i && (0, o.jsxs)("div", {
                        className: "relative mt-2 flex-center cursor-pointer items-center rd-2",
                        children: [(0, o.jsxs)(d(), {
                            prefetch: !1,
                            href: i,
                            className: "relative z-2 flex-center p-1.5 text-3.5 c-#fff c-op-50 transition-colors exl:text-3 hover:c-op-90",
                            target: "_blank",
                            children: [(0, o.jsx)("span", {
                                className: "mie-1",
                                children: p
                            }), (0, o.jsx)(u, {
                                className: "size-1.5em"
                            })]
                        }), (0, o.jsx)("div", {
                            className: "absolute inset-0 size-full rd-2 bg-gray-1 bg-op-30 backdrop-blur-20px"
                        })]
                    }), !s && (0, o.jsxs)("div", {
                        className: "relative mt-2 text-3.5",
                        exl: "text-3",
                        children: [(0, o.jsxs)("div", {
                            className: "relative z-2 flex-center p-1.5",
                            children: [(0, o.jsx)("span", {
                                className: "mie-1.5 c-#fff c-op-50",
                                children: r("signInTips")
                            }), (0, o.jsxs)("button", {
                                type: "button",
                                className: "h-6 rd-1 pie-0.5 pis-1.5 text-3 ld-button ld-button-green-outline",
                                onClick: () => t({
                                    show: !0,
                                    source: c.Pf.GAME_PANEL_TIPS_BAR_BTN
                                }),
                                children: [(0, o.jsx)("span", {
                                    children: r("loginBtn")
                                }), (0, o.jsx)("svg", {
                                    className: "size-1.5em",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, o.jsx)("path", {
                                        d: "M5 3L7 6L5 9",
                                        stroke: "current",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: "absolute inset-0 size-full rd-2 bg-gray-1 bg-op-30 backdrop-blur-20px"
                        })]
                    })]
                })
            }
        }
    }
]);