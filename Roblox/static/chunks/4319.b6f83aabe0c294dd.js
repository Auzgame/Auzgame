(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4319], {
        21776: e => {
            var t = "undefined" != typeof Element,
                r = "function" == typeof Map,
                n = "function" == typeof Set,
                a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, l) {
                try {
                    return function e(l, s) {
                        if (l === s) return !0;
                        if (l && s && "object" == typeof l && "object" == typeof s) {
                            var i, o, c, f;
                            if (l.constructor !== s.constructor) return !1;
                            if (Array.isArray(l)) {
                                if ((i = l.length) != s.length) return !1;
                                for (o = i; 0 != o--;)
                                    if (!e(l[o], s[o])) return !1;
                                return !0
                            }
                            if (r && l instanceof Map && s instanceof Map) {
                                if (l.size !== s.size) return !1;
                                for (f = l.entries(); !(o = f.next()).done;)
                                    if (!s.has(o.value[0])) return !1;
                                for (f = l.entries(); !(o = f.next()).done;)
                                    if (!e(o.value[1], s.get(o.value[0]))) return !1;
                                return !0
                            }
                            if (n && l instanceof Set && s instanceof Set) {
                                if (l.size !== s.size) return !1;
                                for (f = l.entries(); !(o = f.next()).done;)
                                    if (!s.has(o.value[0])) return !1;
                                return !0
                            }
                            if (a && ArrayBuffer.isView(l) && ArrayBuffer.isView(s)) {
                                if ((i = l.length) != s.length) return !1;
                                for (o = i; 0 != o--;)
                                    if (l[o] !== s[o]) return !1;
                                return !0
                            }
                            if (l.constructor === RegExp) return l.source === s.source && l.flags === s.flags;
                            if (l.valueOf !== Object.prototype.valueOf && "function" == typeof l.valueOf && "function" == typeof s.valueOf) return l.valueOf() === s.valueOf();
                            if (l.toString !== Object.prototype.toString && "function" == typeof l.toString && "function" == typeof s.toString) return l.toString() === s.toString();
                            if ((i = (c = Object.keys(l)).length) !== Object.keys(s).length) return !1;
                            for (o = i; 0 != o--;)
                                if (!Object.prototype.hasOwnProperty.call(s, c[o])) return !1;
                            if (t && l instanceof Element) return !1;
                            for (o = i; 0 != o--;)
                                if (("_owner" !== c[o] && "__v" !== c[o] && "__o" !== c[o] || !l.$$typeof) && !e(l[c[o]], s[c[o]])) return !1;
                            return !0
                        }
                        return l != l && s != s
                    }(e, l)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        34319: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => L
            });
            var n = r(8991),
                a = r(26599),
                l = r(10103),
                s = r(7277),
                i = r(98166),
                o = r(64795),
                c = r(31677),
                f = r(9305),
                u = r(21516),
                d = r(7337),
                p = r(65751),
                m = r(40643),
                x = r(21776),
                h = r.n(x);
            let v = function(e, t, r) {
                var n, a, l = (0, p.useRef)(),
                    s = (0, p.useRef)(0);
                n = t, a = l.current, void 0 === n && (n = []), void 0 === a && (a = []), h()(n, a) || (s.current += 1), l.current = t, (0, m.A)(e, [s.current], r)
            };
            var g = {
                    0: 48,
                    1: 49,
                    2: 50,
                    3: 51,
                    4: 52,
                    5: 53,
                    6: 54,
                    7: 55,
                    8: 56,
                    9: 57,
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    ctrl: 17,
                    alt: 18,
                    pausebreak: 19,
                    capslock: 20,
                    esc: 27,
                    space: 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    leftarrow: 37,
                    uparrow: 38,
                    rightarrow: 39,
                    downarrow: 40,
                    insert: 45,
                    delete: 46,
                    a: 65,
                    b: 66,
                    c: 67,
                    d: 68,
                    e: 69,
                    f: 70,
                    g: 71,
                    h: 72,
                    i: 73,
                    j: 74,
                    k: 75,
                    l: 76,
                    m: 77,
                    n: 78,
                    o: 79,
                    p: 80,
                    q: 81,
                    r: 82,
                    s: 83,
                    t: 84,
                    u: 85,
                    v: 86,
                    w: 87,
                    x: 88,
                    y: 89,
                    z: 90,
                    leftwindowkey: 91,
                    rightwindowkey: 92,
                    meta: /(mac|iphone|ipod|ipad)/i.test("undefined" != typeof navigator ? null == navigator ? void 0 : navigator.platform : "") ? [91, 93] : [91, 92],
                    selectkey: 93,
                    numpad0: 96,
                    numpad1: 97,
                    numpad2: 98,
                    numpad3: 99,
                    numpad4: 100,
                    numpad5: 101,
                    numpad6: 102,
                    numpad7: 103,
                    numpad8: 104,
                    numpad9: 105,
                    multiply: 106,
                    add: 107,
                    subtract: 109,
                    decimalpoint: 110,
                    divide: 111,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123,
                    numlock: 144,
                    scrolllock: 145,
                    semicolon: 186,
                    equalsign: 187,
                    comma: 188,
                    dash: 189,
                    period: 190,
                    forwardslash: 191,
                    graveaccent: 192,
                    openbracket: 219,
                    backslash: 220,
                    closebracket: 221,
                    singlequote: 222
                },
                y = {
                    ctrl: function(e) {
                        return e.ctrlKey
                    },
                    shift: function(e) {
                        return e.shiftKey
                    },
                    alt: function(e) {
                        return e.altKey
                    },
                    meta: function(e) {
                        return "keyup" === e.type ? g.meta.includes(e.keyCode) : e.metaKey
                    }
                };

            function w(e) {
                return (0, u.Kg)(e) || (0, u.Et)(e)
            }

            function j(e, t, r) {
                if (!e.key) return !1;
                if ((0, u.Et)(t)) return e.keyCode === t && t;
                var n, a, l, s = t.split("."),
                    i = 0;
                try {
                    for (var o = (0, c.__values)(s), f = o.next(); !f.done; f = o.next()) {
                        var d = f.value,
                            p = y[d],
                            m = g[d.toLowerCase()];
                        (p && p(e) || m && m === e.keyCode) && i++
                    }
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        f && !f.done && (l = o.return) && l.call(o)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return r ? i === s.length && (n = Object.keys(y).reduce(function(t, r) {
                    return y[r](e) ? t + 1 : t
                }, 0), ([16, 17, 18, 91, 92].includes(e.keyCode) ? n : n + 1) === s.length) && t : i === s.length && t
            }
            var b = ["keydown"];
            let k = function(e, t, r) {
                var n = r || {},
                    a = n.events,
                    l = void 0 === a ? b : a,
                    s = n.target,
                    i = n.exactMatch,
                    o = void 0 !== i && i,
                    p = n.useCapture,
                    m = void 0 !== p && p,
                    x = (0, f.A)(t),
                    h = (0, f.A)(e);
                v(function() {
                    var e, t, r, n = (0, d.e)(s, window);
                    if (n) {
                        var a = function(e) {
                            var t, r, n = (t = h.current, (0, u.Tn)(t) ? t : w(t) ? function(e) {
                                    return j(e, t, o)
                                } : Array.isArray(t) ? function(e) {
                                    return t.find(function(t) {
                                        return j(e, t, o)
                                    })
                                } : function() {
                                    return !!t
                                })(e),
                                a = w(n) ? n : e.key;
                            if (n) return null === (r = x.current) || void 0 === r ? void 0 : r.call(x, e, a)
                        };
                        try {
                            for (var i = (0, c.__values)(l), f = i.next(); !f.done; f = i.next()) {
                                var p = f.value;
                                null === (r = null == n ? void 0 : n.addEventListener) || void 0 === r || r.call(n, p, a, m)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                f && !f.done && (t = i.return) && t.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return function() {
                            try {
                                for (var e, t, r, s = (0, c.__values)(l), i = s.next(); !i.done; i = s.next()) {
                                    var o = i.value;
                                    null === (r = null == n ? void 0 : n.removeEventListener) || void 0 === r || r.call(n, o, a, m)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (t = s.return) && t.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                        }
                    }
                }, [l], s)
            };
            var N = r(98735),
                S = r.n(N),
                C = r(1457),
                z = r(40636),
                A = r(5971),
                O = r(35497),
                _ = r(40353);
            let M = (0, A.default)(() => r.e(6152).then(r.bind(r, 56152)), {
                    loadableGenerated: {
                        webpack: () => [56152]
                    },
                    ssr: !1
                }),
                T = (0, A.default)(() => r.e(4404).then(r.bind(r, 14404)), {
                    loadableGenerated: {
                        webpack: () => [14404]
                    },
                    ssr: !1
                }),
                E = (0, A.default)(() => r.e(2403).then(r.bind(r, 92403)), {
                    loadableGenerated: {
                        webpack: () => [92403]
                    },
                    ssr: !1
                });

            function P() {
                let e = (0, z.useTranslations)("userCenter"),
                    t = (0, s.useAtomValue)(o.T$),
                    [r, c] = (0, s.useAtom)(o.h8),
                    f = e => c(t => ({ ...t,
                        personal: null != e ? e : !r.personal
                    })),
                    {
                        userInfo: u,
                        setUserInfo: d,
                        userIp: m,
                        setUserIp: x,
                        cleanUserInfo: h
                    } = (0, a.Tx)(),
                    [v, g] = (0, s.useAtom)(l.Bp),
                    [y, w] = (0, p.useState)(["**", "**", "**"]);
                (0, p.useEffect)(() => {
                    void 0 === v ? w(["**", "**", "**"]) : w([String(Math.floor(v / 60 / 60)).padStart(2, "0"), String(Math.floor(v / 60) % 60).padStart(2, "0"), String(Math.floor(v % 3600 % 60)).padStart(2, "0")])
                }, [v]);
                let [j, b] = (0, p.useState)("*");
                (0, p.useEffect)(() => {
                    b((null == m ? void 0 : m.secondsUntilTomorrowMidnight) ? String(Math.floor(m.secondsUntilTomorrowMidnight / 60 / 60)) : "*")
                }, [null == m ? void 0 : m.secondsUntilTomorrowMidnight]);
                let N = (0, p.useRef)(null),
                    [A, P] = (0, p.useState)(!1),
                    [B, L] = (0, p.useState)((null == u ? void 0 : u.nickname) || "");

                function U() {
                    var e;
                    P(!0), null === (e = N.current) || void 0 === e || e.focus()
                }
                async function I() {
                    var e;
                    B !== (null === (e = u.value) || void 0 === e ? void 0 : e.nickname) && (await C.Jz.updateUserBasicInfo({
                        nickname: B,
                        headPortraitUrl: u.headPortraitUrl
                    }), d({ ...u,
                        nickname: B
                    })), P(!1)
                }
                async function V() {
                    let {
                        shortToken: e,
                        uid: t
                    } = u, [r, n] = await Promise.all([(0, i.n3)(), (0, i.UL)({
                        token: e,
                        uid: t
                    })]);
                    x(r), g(n)
                }
                return k(["enter"], () => A && I()), (0, p.useEffect)(() => {
                    r.personal && V()
                }, [r.personal]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: S()("nav-lord ld-button size-36px b-none transition-300 ld-button-black rd-full relative cursor-pointer flex-shrink-0", t && "bg-gray-4"),
                        "lt-lg": S()(r.search && "hidden"),
                        mis: "12px md:24px",
                        "aria-label": "user",
                        onClick: () => f(),
                        children: [(0, n.jsx)("div", {
                            className: "absolute size-full rd-full",
                            border: "2 solid #fff op-90"
                        }), (0, n.jsx)(O.default, {
                            width: "36",
                            height: "36",
                            src: u.headPortraitUrl,
                            alt: "avatar",
                            priority: !0,
                            className: "size-full rd-full"
                        })]
                    }), (0, n.jsx)(_.A, {
                        visible: r.personal,
                        setVisible: f,
                        children: (0, n.jsxs)("div", {
                            "lt-md": "relative w-100vw",
                            children: [(0, n.jsx)("div", {
                                className: "absolute left-0 hidden h-0.25 w-full bg-gray-3 -bottom-0.25",
                                "lt-md": "block"
                            }), (0, n.jsxs)("div", {
                                className: "relative z-10 flex flex-col bg-gray-3",
                                "lt-md": "w-full rd-t-3 py-6 px-5",
                                md: "rd-4 w-115 p-10",
                                exl: "w-95 p-8",
                                children: [(0, n.jsxs)("section", {
                                    className: "w-full flex items-center justify-between",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, n.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, n.jsx)("div", {
                                                className: "absolute size-full rd-full",
                                                border: "3 solid #fff op-90"
                                            }), (0, n.jsx)(O.default, {
                                                width: "52",
                                                height: "52",
                                                src: u.headPortraitUrl,
                                                alt: "avatar",
                                                className: "size-13 rd-full exl:size-10"
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "mis-4",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, n.jsxs)("div", {
                                                    className: "mie-3 flex-center gap-2 rd-2 bg-gray-4 p-2 text-3.5 c-#fff c-op-90 exl:gap-1 lt-md:py-1.5 exl:text-3 md:text-4",
                                                    children: [(0, n.jsx)(M, {
                                                        className: "size-1em"
                                                    }), (0, n.jsx)("span", {
                                                        className: "font-600",
                                                        children: (null == m ? void 0 : m.countryCode) || "**"
                                                    })]
                                                }), A ? (0, n.jsx)("div", {
                                                    className: "flex items-center",
                                                    children: (0, n.jsx)("input", {
                                                        ref: N,
                                                        value: B,
                                                        autoFocus: !0,
                                                        type: "text",
                                                        className: "max-w-35 flex-center rd-1.5 bg-gray-4 px-2 text-4 c-#fff c-op-90 font-600 lh-1em lh-8 font-unset caret-green-5 -mis-2",
                                                        exl: "text-3.5 max-w-29 lh-7",
                                                        onChange: e => L(e.target.value),
                                                        onBlur: () => I()
                                                    })
                                                }) : (0, n.jsxs)("div", {
                                                    className: "flex items-center",
                                                    onDoubleClick: () => U(),
                                                    children: [(0, n.jsx)("span", {
                                                        className: "max-w-35 truncate text-4 c-#fff c-op-90 font-600",
                                                        exl: "text-3.5 max-w-29 lh-7",
                                                        children: u.nickname
                                                    }), (0, n.jsx)(T, {
                                                        className: "mis-2 cursor-pointer",
                                                        onClick: () => U()
                                                    })]
                                                })]
                                            }), (0, n.jsx)("p", {
                                                className: "mt-1.5 text-3.5 c-#fff c-op-50 lh-3 exl:text-3",
                                                md: "text-3 mt-1.5",
                                                children: u.email
                                            })]
                                        })]
                                    }), (0, n.jsx)("button", {
                                        type: "button",
                                        className: "size-8 cursor-pointer rd-2 bg-gray-4 transition-300 exl:size-7 hover:bg-gray-5",
                                        onClick: () => h(),
                                        children: (0, n.jsx)(E, {
                                            className: "size-16px v-bottom"
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "mt-10 exl:mt-8",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, n.jsx)("p", {
                                            className: "text-6 c-#fff c-op-90 font-[OSP-DIN] exl:text-5",
                                            children: e("playTimeTitle")
                                        }), (0, n.jsx)("p", {
                                            className: "text-3.5 c-#fff c-op-50 lh-4 exl:text-3 md:text-3",
                                            dangerouslySetInnerHTML: {
                                                __html: e("playTimeResetTips", {
                                                    hour: '<span class="mx-0.5 c-#fff c-op-90 font-600">'.concat(j, "</span>")
                                                })
                                            }
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "mt-6 flex-center rd-3 bg-gray-4 p-5",
                                        exl: "mt-5 p-4",
                                        children: [(0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("span", {
                                                className: "text-8 c-green-5 font-[OSP-DIN]",
                                                children: y[0]
                                            }), (0, n.jsx)("span", {
                                                className: "mis-1 v-top text-2.5 c-#fff c-op-90 font-700",
                                                children: "H"
                                            })]
                                        }), (0, n.jsx)("svg", {
                                            className: "mx-4 c-#fff c-op-30",
                                            width: "4",
                                            height: "8",
                                            viewBox: "0 0 4 8",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, n.jsx)("path", {
                                                d: "M2.34302 0.502337C2.43641 0.203483 2.71319 0 3.02629 0C3.50924 0 3.85362 0.468419 3.70957 0.929383L1.65698 7.49766C1.56359 7.79652 1.28681 8 0.973706 8C0.490758 8 0.146381 7.53158 0.290432 7.07062L2.34302 0.502337Z",
                                                fill: "currentColor"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("span", {
                                                className: "text-8 c-green-5 font-[OSP-DIN]",
                                                children: y[1]
                                            }), (0, n.jsx)("span", {
                                                className: "mis-1 v-top text-2.5 c-#fff c-op-90 font-700",
                                                children: "M"
                                            })]
                                        }), (0, n.jsx)("svg", {
                                            className: "mx-4 c-#fff c-op-30",
                                            width: "4",
                                            height: "8",
                                            viewBox: "0 0 4 8",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, n.jsx)("path", {
                                                d: "M2.34302 0.502337C2.43641 0.203483 2.71319 0 3.02629 0C3.50924 0 3.85362 0.468419 3.70957 0.929383L1.65698 7.49766C1.56359 7.79652 1.28681 8 0.973706 8C0.490758 8 0.146381 7.53158 0.290432 7.07062L2.34302 0.502337Z",
                                                fill: "currentColor"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("span", {
                                                className: "text-8 c-green-5 font-[OSP-DIN]",
                                                children: y[2]
                                            }), (0, n.jsx)("span", {
                                                className: "mis-1 v-top text-2.5 c-#fff c-op-90 font-700",
                                                children: "S"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
            var B = r(95418);

            function L() {
                let e = (0, s.useAtomValue)(l.Sp);
                return (0, a.mg)({
                    oneTap: !0
                }), (0, n.jsx)(n.Fragment, {
                    children: e ? (0, n.jsx)(P, {}) : (0, n.jsx)(B.A, {})
                })
            }
        }
    }
]);