(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4345], {
            22860: (e, s, t) => {
                Promise.resolve().then(t.t.bind(t, 59641, 23)),
                Promise.resolve().then(t.t.bind(t, 37286, 23)),
                Promise.resolve().then(t.bind(t, 87646)),
                Promise.resolve().then(t.bind(t, 27244))
            },
            3209: (e, s, t) => {
                "use strict";
                function r(e) {
                    return e.replace(/=\w\d{1,4}(-\w\d{1,4})?-rw$/, "")
                }
                function a(e) {
                    let {
                        src: s,
                        width: t,
                        quality: a
                    } = e,
                    n = "format_key";
                    if ([/.*\.googleusercontent\.com/].some(e => e.test(s)))
                        return "".concat(r(s), "=w").concat(t);
                    if ([/.*\.ldrescdn\.com/, /.*\.ldplayer\.net/, /.*\.ldmnq\.com/].some(e => e.test(s))) {
                        let e = new URL(s);
                        return e.searchParams.set("image_process", n),
                        e.searchParams.set("x-oss-process", "image/resize,w_".concat(t, "/quality,Q_").concat(a || 75)),
                        e.href.replace(n, "format,webp")
                    }
                    if (s.startsWith("/"))
                        try {
                            let e = new URL(s, "https://res.ldrescdn.com/easyfun");
                            return e.searchParams.set("image_process", n),
                            e.searchParams.set("x-oss-process", "image/resize,w_".concat(t, "/quality,Q_").concat(a || 75)),
                            e.href.replace(n, "format,webp")
                        } catch (e) {
                            return "".concat(s, "?w=").concat(t)
                        }
                    else {
						console.log(s);
                        let e = new URL(s);
                        return e.searchParams.set("w", t),
                        e.href
                    }
                }
                t.r(s),
                t.d(s, {
                default:
                    () => a,
                    narrowGoogleImage: () => r
                })
            },
            27244: (e, s, t) => {
                "use strict";
                t.d(s, {
                default:
                    () => a
                });
                var r = t(8991);
                function a() {
                    return (0, r.jsxs)("div", {
                        className: "h-11 px-6 ld-button ld-button-green",
                        onClick: () => void window.location.reload(),
                        children: [(0, r.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, r.jsx)("path", {
                                    d: "M7.99139 1.5C6.33044 1.50194 4.6701 2.13654 3.40283 3.40381C0.864427 5.94221 0.864427 10.0578 3.40283 12.5962C5.94124 15.1346 10.0568 15.1346 12.5952 12.5962C15.1336 10.0578 15.1336 5.94221 12.5952 3.40381L10.8275 5.17157",
                                    stroke: "#121212",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            }), (0, r.jsx)("span", {
                                className: "mis-2 text-3.5",
                                children: "Refresh"
                            })]
                    })
                }
            },
            87646: (e, s, t) => {
                "use strict";
                t.r(s),
                t.d(s, {
                default:
                    () => r
                });
                let r = {
                    src: "https://res.ldrescdn.com/easyfun/_next/static/media/oops.ae89904a.png",
                    height: 760,
                    width: 840,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAY1BMVEVMaXGo1R2TxS+Xxy/U+zRvlTHZ+ULa/ie3tj9TZhnM9CqXvhxddBau4iCp1iSdxiWOsSaLribM/ymTuhnH7yre/y9vwGyD00E69/057/knzdwbfJ4Rtcou2uig4kwg3/Gz2yLiX37XAAAAIHRSTlMA4TAdqCss/gn+1mrrP9GxxrVW+3JGXpfZYuIl65Sf9SOuYfwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8SURBVHicBcEFAsAgDACxQ1uYMHf7/yuXAKB67xCjzc+70YoPZr0OeuNw83KidvD5m4AiklIDhG6sK/gBTBkCV05KV8MAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 7
                }
            }
        }, e => {
            var s = s => e(e.s = s);
            e.O(0, [9641, 7286, 7801, 3733, 7358], () => s(22860)),
            _N_E = e.O()
        }
    ]);
