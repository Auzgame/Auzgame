"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8069], {
            3209: (e, o, t) => {
                function n(e) {
                    return e.replace(/=\w\d{1,4}(-\w\d{1,4})?-rw$/, "")
                }
                function l(e) {
                    let {
                        src: o,
                        width: t,
                        quality: l
                    } = e,
                    a = "format_key";
                    if ([/.*\.googleusercontent\.com/].some(e => e.test(o)))
                        return "".concat(n(o), "=w").concat(t);
                    if ([/.*\.ldrescdn\.com/, /.*\.ldplayer\.net/, /.*\.ldmnq\.com/].some(e => e.test(o))) {
                        let e = new URL(o);
                        return e.searchParams.set("image_process", a),
                        e.searchParams.set("x-oss-process", "image/resize,w_".concat(t, "/quality,Q_").concat(l || 75)),
                        e.href.replace(a, "format,webp")
                    }
                    if (o.startsWith("/"))
                        try {
                            let e = new URL(o, "https://res.ldrescdn.com/easyfun");
                            return e.searchParams.set("image_process", a),
                            e.searchParams.set("x-oss-process", "image/resize,w_".concat(t, "/quality,Q_").concat(l || 75)),
                            e.href.replace(a, "format,webp")
                        } catch (e) {
                            return "".concat(o, "?w=").concat(t)
                        }
                    else {
						console.log(window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + o);
                        let e = new URL(o);
                        return e.searchParams.set("w", t),
                        e.href
                    }
                }
                t.r(o),
                t.d(o, {
                default:
                    () => l,
                    narrowGoogleImage: () => n
                })
            },
            49462: (e, o, t) => {
                t.d(o, {
                    k: () => i
                });
                var n = t(64795),
                l = t(92294),
                a = t(7277);
                function i() {
                    let [e, o] = (0, a.useAtom)(n.H5);
                    async function t() {
                        let e = await(await fetch("https://res.ldrescdn.com/easyfun/instances-change-event/hosts.json")).json(), {
                            announcement: t,
                            sill: n
                        } = e,
                        l = e.sill > 0;
                        return o({
                            announcement: t,
                            waitDowntimeMin: n,
                            isInDowntime: l
                        }), {
                            isInDowntime: l,
                            isMaintain: e.sill > 5
                        }
                    }
                    let {
                        run: i
                    } = (0, l.A)(t, {
                        wait: 2e3
                    });
                    return {
                        serverStatus: e,
                        updateDowntimeStatus: i,
                        forceUpdateDowntimeStatus: t
                    }
                }
            },
            47231: (e, o, t) => {
                t.d(o, {
                    F: () => r,
                    S: () => i
                });
                let n = ["roblox", "brawl-stars", "free-fire", "stumble-guys-cloud-online", "ea-sports-fc-uefa-euro-2024", "genshin-impact", "pubg-mobile-cloud-online", "pokemon-tcg-pocket-cloud-online", "honkai-star-rail", "clash-of-clans", "efootball%E2%84%A2-2024", "clash-royale-cloud-online", "blox-fruits", "car-parking-multiplayer", "zenless-zone-zero-cloud-online", "among-us", "jujutsu-kaisen-phantom-parade-cloud-online", "extreme-car-driving-simulator-cloud-online", "ash-echoes-global-cloud-online", "starseed-asnia-trigger-cloud-online", "football-master-2-soccer-star-cloud-online", "capybara-go-cloud-online", "tft-teamfight-tactics-cloud-online", "league-of-legends-wild-rift-cloud-online", "tsm-cloud-online", "fallout-shelter-cloud-online", "fallout-shelter-online-cloud-online", "chai-chat-ai-platform-cloud-online", "plants-vs-zombies-heroes-cloud-online", "raven-2-kr", "haikyu-touch-the-dream-cloud-online", "honkai-impact-3rd-cloud-online", "infinity-nikki-cloud-online", "girls-frontline-2-exilium-cloud-online", "hearthstone-cloud-online", "journey-of-monarch-cloud-online", "mini-empire-hero-never-cry-cloud-online", "heroic-alliance-cloud-online", "maiden-academy-idle-rpg-cloud-online", "merge-designer-decor-story-cloud-online", "magic-forest-dragon-quest-cloud-online", "pojavlauncher-cloud-online", "fortnite-battle-royale-cloud-online", "roblox-vng-cloud-online", "monopoly-go-cloud-online", "fc-online-m-by-ea-sports-cloud-online", "whiteout-survival-cloud-online", "candy-crush-soda-saga-cloud-online", "guardian-tales", "counterside-cloud-online", "meow-bakery-cloud-online", "moth-lake-a-horror-story-cloud-online", "blue-archive", "cookierun-kingdom-cloud-online", "wuthering-waves", "love-and-deepspace-cloud-online", "talkie-ai-character-chat", "identity-v-cloud-online", "adopt-me-", "punishing-gray-raven-cloud-online", "pk-xd-fun-friends-games-cloud-online", "ragnarok-x-next-generation-cloud-online", "black-desert-mobile-cloud-online", "football-pro-vtc-vn", "maplestory-m-fantasy-mmorpg-cloud-online", "welcome-to-bloxburg", "girls-frontline-cloud-online", "fortress-saga-afk-rpg-cloud-online", "hai-kyu-fly-high-tw", "summoners-war-cloud-online", "aether-gazer-cloud-online", "com-heavenburnsred-cloud-online", "tears-of-themis-cloud-online", "block-blast-cloud-online", "super-gun-tps-3d-online-cloud-online", "racing-king-car-race-cloud-online", "fps-online-strike-pvp-shooter-cloud-online", "squad-busters", "hill-climb-racing-cloud-online", "carx-drift-racing-2-cloud-online", "spongebob-adventures-in-a-jam-cloud-online", "ea-sports-fc-tactical", "dead-by-daylight-mobile-cloud-online", "honkai-star-rail", "clash-of-clans", "clash-royale-cloud-online", "jujutsu-kaisen-phantom-parade-cloud-online", "extreme-car-driving-simulator-cloud-online", "granny", "roblox-vng-cloud-online", "monopoly-go-cloud-online", "fc-online-m-by-ea-sports-cloud-online", "endless-nightmare-5-curse-cloud-online", "royal-match-cloud-online", "whiteout-survival-cloud-online", "candy-crush-soda-saga-cloud-online", "guardian-tales", "afk-journey-cloud-online"];
                var l = t(8088);
                function a(e, o) {
                    let {
                        gameType: t,
                        seo: a
                    } = e,
                    i = t === l.YU.CLOUD ? "games" : "html5-games",
                    r = "".concat(a, ".html");
                    return n.includes(a) && (i = "cloud-games"),
                    "/".concat(i, "/").concat(r).concat(o ? "?start=1" : "")
                }
                function i() {
                    return {
                        toIndex: () => "/",
                        toAbouts: () => "/abouts.html",
                        toCookiePolicy: () => "/cookie-policy.html",
                        toFaq: () => "/faq.html",
                        toPrivacyPolicy: () => "/privacy-policy.html",
                        toTermsOfUse: () => "/terms-of-use.html",
                        toTag: function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all";
                            return "/tags/".concat(e, ".html")
                        },
                        toSearch: e => "/search.html?s=".concat(e),
                        toGameDetail: a
                    }
                }
                function r() {
                    return {
                        toIndex: () => "/",
                        toAbouts: () => "/abouts.html",
                        toCookiePolicy: () => "/cookie-policy.html",
                        toFaq: () => "/faq.html",
                        toPrivacyPolicy: () => "/privacy-policy.html",
                        toTermsOfUse: () => "/terms-of-use.html",
                        toTag: function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all";
                            return "/tags/".concat(e, ".html")
                        },
                        toSearch: e => "/search.html?s=".concat(e),
                        toGameDetail: a
                    }
                }
            },
            26599: (e, o, t) => {
                t.d(o, {
                    K6: () => h,
                    Tx: () => m,
                    bG: () => E,
                    mg: () => d,
                    uj: () => f
                });
                var n = t(64795),
                l = t(10103),
                a = t(8088),
                i = t(7460),
                r = t(7277),
                c = t(31573),
                s = t(65751);
                let u = (0, c.$)((e, o) => {
                    if (e(l.Ef)) {
                        let a = e(l.SL);
                        if ("hasData" === a.state) {
                            if (o(l.GZ, +new Date), !a.data.email) {
                                var t,
                                n;
                                a.data.email = null === (n = a.data) || void 0 === n ? void 0 : null === (t = n.thirdUserInfos[0]) || void 0 === t ? void 0 : t.thirdEmail
                            }
                            o(l.XM, {
                                ...e(l.XM),
                                ...a.data
                            })
                        }
                    }
                });
                function d(e) {
                    let {
                        id: o,
                        oneTap: t
                    } = e,
                    n = (0, r.useAtomValue)(l.Sp),
                    a = (0, r.useAtomValue)(l.Kz);
                    (0, s.useEffect)(() => {
                        if (a) {
                            var e,
                            l,
                            i,
                            r;
                            o && (null === (l = window) || void 0 === l || null === (e = l.google) || void 0 === e || e.accounts.id.renderButton(document.getElementById(o), {
                                    theme: "outline",
                                    size: "medium",
                                    type: "icon"
                                })),
                            t && !n && (null === (r = window) || void 0 === r || null === (i = r.google) || void 0 === i || i.accounts.id.prompt())
                        }
                    }, [a])
                }
                function m() {
                    (0, r.useAtom)(l.AP),
                    (0, r.useAtom)(u);
                    let [e, o] = (0, r.useAtom)(l.O1),
                    [t, n] = (0, r.useAtom)(l.XM);
                    return {
                        userIp: e,
                        setUserIp: o,
                        userInfo: t,
                        setUserInfo: n,
                        cleanUserInfo: function () {
                            n({}),
                            o(void 0)
                        }
                    }
                }
                function E() {
                    let {
                        cleanUserInfo: e
                    } = m();
                    return {
                        isLogged: (0, r.useAtomValue)(l.Sp),
                        logout: e
                    }
                }
                function h() {
                    let [e, o] = (0, r.useAtom)(n.h8),
                    t = (0, s.useMemo)(() => e.personal, [e.personal]),
                    [i, c] = (0, r.useAtom)(l.gA);
                    return (0, s.useEffect)(() => {
                        e.personal || c(a.Pf.UNKNOWN)
                    }, [e.personal]), {
                        isShowPersonal: t,
                        setShowPersonalState: e => {
                            var t;
                            o(o => ({
                                    ...o,
                                    personal: e.show
                                })),
                            c(null !== (t = e.source) && void 0 !== t ? t : a.Pf.UNKNOWN)
                        }
                    }
                }
                function f() {
                    return {
                        getFingerprint: async function () {
                            try {
                                let e = localStorage.getItem("EASYFUN_FINGER_PRINT");
                                if (e)
                                    return e;
                                let o = await(0, i.GD)();
                                return localStorage.setItem("EASYFUN_FINGER_PRINT", o),
                                o
                            } catch (e) {}
                        }
                    }
                }
            },
            65998: (e, o, t) => {
                t.d(o, {
                    dj: () => d
                });
                var n = t(65751);
                let l = 0,
                a = new Map;
                function i(e) {
                    if (a.has(e))
                        return;
                    let o = setTimeout(() => {
                        a.delete(e),
                        s({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 2e3);
                    a.set(e, o)
                }
                let r = [],
                c = {
                    toasts: []
                };
                function s(e) {
                    c = function (e, o) {
                        switch (o.type) {
                        case "ADD_TOAST":
                            return {
                                ...e,
                                toasts: [o.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return {
                                ...e,
                                toasts: e.toasts.map(e => e.id === o.toast.id ? {
                                    ...e,
                                    ...o.toast
                                }
                                     : e)
                            };
                        case "DISMISS_TOAST": {
                                let {
                                    toastId: t
                                } = o;
                                return t ? i(t) : e.toasts.forEach(e => {
                                    i(e.id)
                                }), {
                                    ...e,
                                    toasts: e.toasts.map(e => e.id === t || void 0 === t ? {
                                        ...e,
                                        open: !1
                                    }
                                         : e)
                                }
                            }
                        case "REMOVE_TOAST":
                            if (void 0 === o.toastId)
                                return {
                                    ...e,
                                    toasts: []
                                };
                            return {
                                ...e,
                                toasts: e.toasts.filter(e => e.id !== o.toastId)
                            }
                        }
                    }
                    (c, e),
                    r.forEach(e => {
                        e(c)
                    })
                }
                function u(e) {
                    let {
                        ...o
                    } = e,
                    t = (l = (l + 1) % Number.MAX_SAFE_INTEGER).toString(),
                    n = () => s({
                        type: "DISMISS_TOAST",
                        toastId: t
                    });
                    return s({
                        type: "ADD_TOAST",
                        toast: {
                            ...o,
                            id: t,
                            open: !0,
                            onOpenChange: e => {
                                e || n()
                            }
                        }
                    }), {
                        id: t,
                        dismiss: n,
                        update: e => s({
                            type: "UPDATE_TOAST",
                            toast: {
                                ...e,
                                id: t
                            }
                        })
                    }
                }
                function d() {
                    let [e, o] = n.useState(c);
                    return n.useEffect(() => (r.push(o), () => {
                            let e = r.indexOf(o);
                            e > -1 && r.splice(e, 1)
                        }), [e]), {
                        ...e,
                        toast: u,
                        dismiss: e => s({
                            type: "DISMISS_TOAST",
                            toastId: e
                        })
                    }
                }
            },
            98166: (e, o, t) => {
                async function n(e, o) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    ((null == o ? void 0 : o.query) || (null == o ? void 0 : o.params)) && (e = "".concat(e, "?").concat(new URLSearchParams((null == o ? void 0 : o.query) || (null == o ? void 0 : o.params)).toString()));
                    let n = await fetch("".concat("https://api.easyfun.gg").concat(e), {
                        ...o,
                        body: (null == o ? void 0 : o.body) ? JSON.stringify(o.body) : null,
                        headers: Object.assign((null == o ? void 0 : o.method) === "POST" ? {
                            "Content-Type": "application/json"
                        }
                             : {}, (null == o ? void 0 : o.headers) || {}),
                        next: null == o ? void 0 : o.next,
                        cache: (null == o ? void 0 : o.next) ? "force-cache" : "no-store"
                    }),
                    l = await n.json();
                    return t ? l : 200 === l.code ? l.data : void(401 === l.code && (localStorage.removeItem("EASYFUN_USERINFO"), window.location.reload()))
                }
                t.d(o, {
                    ju: () => r,
                    C4: () => h,
                    ue: () => c,
                    WO: () => a,
                    zL: () => E,
                    mk: () => s,
                    WC: () => i,
                    wF: () => d,
                    n3: () => u,
                    UL: () => m,
                    Jy: () => l
                });
                let l = e => n("/tourists/".concat(e), {
                    method: "POST",
                    headers: {
                        "Content-Type": ""
                    }
                }),
                a = e => n("/auth/raiseAlert", {
                    method: "POST",
                    body: {
                        msg: e
                    }
                }),
                i = e => n("/official/search", {
                    query: e
                }),
                r = e => n("/official/category/games", {
                    query: {
                        category: e
                    },
                    next: {
                        revalidate: 600
                    }
                }),
                c = e => n("/auth/socket", {
                    method: "POST",
                    body: {
                        ...e
                    }
                }, !0),
                s = e => n("/auth/button", {
                    method: "POST",
                    body: e
                }),
                u = () => n("/auth/ip"),
                d = e => n("/auth/history", {
                    params: e
                }),
                m = e => n("/auth/getRemainingTime", {
                    params: e
                }),
                E = e => n("/auth/binding-user-button", {
                    method: "POST",
                    body: e
                }),
                h = e => {
                    let {
                        uid: o,
                        gameId: t,
                        token: l
                    } = e;
                    return n("/auth/user-game-button?uid=".concat(o, "&gameId=").concat(t, "&token=").concat(l))
                }
            },
            32134: (e, o, t) => {
                t.d(o, {
                    RT: () => r,
                    Zm: () => u,
                    tv: () => s,
                    v0: () => c,
                    vD: () => i
                });
                var n = t(8088),
                l = t(20289),
                a = t(89951);
                let i = (0, l.eU)({
                    status: n.fJ.IDLE,
                    fullscreen: !1
                }),
                r = (0, a.tG)("EASYFUN_GAME_HISTORY", []),
                c = (0, l.eU)({
                    token: "",
                    uid: "",
                    fingerprint: ""
                }),
                s = (0, l.eU)({
                    gameId: "",
                    businessWssLink: "",
                    device: {},
                    isReconnect: !1
                }),
                u = (0, l.eU)(!1)
            },
            64795: (e, o, t) => {
                t.d(o, {
                    FS: () => r,
                    H5: () => c,
                    SZ: () => s,
                    T$: () => i,
                    h8: () => a
                });
                var n = t(20289),
                l = t(89951);
                let a = (0, n.eU)({
                    search: !1,
                    history: !1,
                    personal: !1,
                    fixed: !1
                }),
                i = (0, n.eU)(e => {
                    let {
                        search: o,
                        history: t,
                        personal: n
                    } = e(a);
                    return o || t || n
                }),
                r = (0, n.eU)(e => e(a).fixed);
                (0, n.eU)(!1);
                let c = (0, n.eU)({
                    announcement: "",
                    isInDowntime: !1,
                    waitDowntimeMin: 0
                }),
                s = (0, l.tG)("EASYFUN_PWA", {
                    isPWAInstalled: !1,
                    hideInstallPromptDeadline: 0,
                    install: () => Promise.resolve(void 0),
                    cancelInstall: () => {}
                }, void 0, {
                    getOnInit: !0
                })
            },
            10103: (e, o, t) => {
                t.d(o, {
                    AP: () => c,
                    Bp: () => f,
                    Ef: () => p,
                    GZ: () => g,
                    Kz: () => _,
                    O1: () => h,
                    SL: () => u,
                    Sp: () => I,
                    XM: () => m,
                    gA: () => E
                });
                var n = t(8088),
                l = t(20289),
                a = t(89951),
                i = t(1457);
                let r = (0, l.eU)(() => (0, i.Dh)({
                        region: "oversea",
                        appId: "6666",
                        extAppId: "666600005",
                        languageCode: "en",
                        develop: !Number("1"),
                        code: "",
                        robotCheck: !1
                    })),
                c = (0, a.Rq)(r),
                s = (0, l.eU)(() => i.Jz.createLogin().auto()),
                u = (0, a.Rq)(s),
                d = (0, l.eU)(async() => {
                    let e = (await t.e(2367).then(t.bind(t, 82367))).load;
                    return (await e()).get()
                });
                (0, a.Rq)(d);
                let m = (0, a.tG)("EASYFUN_USERINFO", {}, void 0, {
                    getOnInit: !0
                }),
                E = (0, a.tG)("EASYFUN_LOGIN_SOURCE", n.Pf.UNKNOWN, void 0, {
                    getOnInit: !0
                }),
                h = (0, l.eU)(void 0),
                f = (0, l.eU)(void 0),
                g = (0, a.tG)("EASYFUN_LAST_UPDATE_TOKEN", 0, void 0, {
                    getOnInit: !0
                }),
                I = (0, a.mg)(m, e => !!(null == e ? void 0 : e.token)),
                p = (0, l.eU)(e => +new Date - e(g) >= 432e5 && e(I)),
                _ = (0, l.eU)(!1)
            },
            8088: (e, o, t) => {
                t.d(o, {
                    Pf: () => c,
                    Vk: () => n,
                    YU: () => l,
                    ap: () => u,
                    e6: () => r,
                    fA: () => s,
                    fJ: () => d,
                    gg: () => i,
                    xT: () => a
                });
                var n = function (e) {
                    return e[e.LOGIN = 0] = "LOGIN",
                    e[e.SIGNUP = 1] = "SIGNUP",
                    e[e.RESET = 2] = "RESET",
                    e
                }
                ({}),
                l = function (e) {
                    return e[e.CLOUD = 1] = "CLOUD",
                    e[e.WEBSITE = 2] = "WEBSITE",
                    e
                }
                ({}),
                a = function (e) {
                    return e.SUCCESS = "success",
                    e.ERROR = "error",
                    e.INFO = "info",
                    e
                }
                ({}),
                i = function (e) {
                    return e[e.TRIAL = 1] = "TRIAL",
                    e[e.LOGIN = 2] = "LOGIN",
                    e
                }
                ({}),
                r = function (e) {
                    return e[e.REGISTER = 1] = "REGISTER",
                    e[e.EMAIL = 2] = "EMAIL",
                    e[e.GOOGLE = 3] = "GOOGLE",
                    e[e.GOOGLE_ONE_TAP = 4] = "GOOGLE_ONE_TAP",
                    e
                }
                ({}),
                c = function (e) {
                    return e[e.UNKNOWN = 0] = "UNKNOWN",
                    e[e.GAME_DETAIL_VISITOR_PLAY_BTN = 1] = "GAME_DETAIL_VISITOR_PLAY_BTN",
                    e[e.GOOGLE_ONE_TAP = 2] = "GOOGLE_ONE_TAP",
                    e[e.NAV_ICON = 3] = "NAV_ICON",
                    e[e.GAME_PANEL_TIPS_BAR_BTN = 4] = "GAME_PANEL_TIPS_BAR_BTN",
                    e[e.QUEUE_POPUP_BTN = 5] = "QUEUE_POPUP_BTN",
                    e[e.TIME_EXPIRED_POPUP = 6] = "TIME_EXPIRED_POPUP",
                    e
                }
                ({}),
                s = function (e) {
                    return e[e.CLOSE_ALERT = 0] = "CLOSE_ALERT",
                    e[e.SERVER_LOCATION_TIPS = 1] = "SERVER_LOCATION_TIPS",
                    e[e.LONG_TIME_NO_ACTIVE = 2] = "LONG_TIME_NO_ACTIVE",
                    e[e.DUPLICATE_CONNECTION = 3] = "DUPLICATE_CONNECTION",
                    e[e.QUEUE_INFO = 4] = "QUEUE_INFO",
                    e[e.FREE_GAME_TIME_EXPIRED = 5] = "FREE_GAME_TIME_EXPIRED",
                    e[e.TOTAL_GAME_TIME_EXPIRED = 6] = "TOTAL_GAME_TIME_EXPIRED",
                    e[e.REMINDER_CHANGE_BROWSER = 7] = "REMINDER_CHANGE_BROWSER",
                    e[e.SERVER_IN_DOWNTIME = 8] = "SERVER_IN_DOWNTIME",
                    e[e.CHECK_EXIT = 9] = "CHECK_EXIT",
                    e
                }
                ({}),
                u = function (e) {
                    return e[e.EDIT = 0] = "EDIT",
                    e[e.ADD = 1] = "ADD",
                    e[e.HIDE = 2] = "HIDE",
                    e[e.SHOW = 3] = "SHOW",
                    e
                }
                ({}),
                d = function (e) {
                    return e[e.IDLE = 0] = "IDLE",
                    e[e.LOADING = 1] = "LOADING",
                    e[e.QUEUE = 2] = "QUEUE",
                    e[e.PLAYING = 3] = "PLAYING",
                    e
                }
                ({})
            },
            7460: (e, o, t) => {
                function n(e, o) {
                    return new Promise((t, n) => {
                        let l = document.createElement("script");
                        null == o || o.map(e => l.setAttribute(e.name, e.value)),
                        l.src = e,
                        l.onload = t,
                        l.onerror = n,
                        document.head.appendChild(l)
                    })
                }
                function l(e) {
                    return new Promise(o => {
                        let t = setTimeout(() => {
                            o(!0),
                            clearTimeout(t)
                        }, e)
                    })
                }
                t.d(o, {
                    GD: () => i,
                    sz: () => n,
                    yy: () => l
                });
                let a = null;
                async function i() {
                    a || (a = (await t.e(2367).then(t.bind(t, 82367))).load());
                    let e = await a;
                    return (await e.get()).visitorId
                }
            }
        }
    ]);
