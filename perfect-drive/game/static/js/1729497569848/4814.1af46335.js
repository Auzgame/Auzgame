"use strict";
(self.webpackChunkcrazygames_gameframe = self.webpackChunkcrazygames_gameframe || []).push([
    [4814, 6544], {
        38563: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var s = a(47313),
                n = a(85541),
                r = a(46417);
            const o = s.memo((e => (0, r.jsx)(n.Z, { ...e,
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.40033 4.44945C10.5543 2.43547 13.4458 2.43547 14.5998 4.44945L21.528 16.5411C22.6732 18.5398 21.2493 21.0611 18.9282 21.0611H5.07184C2.75081 21.0611 1.32687 18.5398 2.47213 16.5411L9.40033 4.44945ZM12.8644 5.44375C12.4788 4.7707 11.5213 4.7707 11.1357 5.44375L4.20745 17.5354C3.81311 18.2236 4.31367 19.0611 5.07184 19.0611H18.9282C19.6864 19.0611 20.187 18.2236 19.7926 17.5354L12.8644 5.44375ZM12 8.98477C12.5523 8.98477 13 9.43248 13 9.98477V12C13 12.5523 12.5523 13 12 13C11.4478 13 11 12.5523 11 12V9.98477C11 9.43248 11.4478 8.98477 12 8.98477ZM11 16.0306C11 15.4783 11.4478 15.0306 12 15.0306H12.01C12.5623 15.0306 13.01 15.4783 13.01 16.0306C13.01 16.5829 12.5623 17.0306 12.01 17.0306H12C11.4478 17.0306 11 16.5829 11 16.0306Z"
                })
            })))
        },
        26544: (e, t, a) => {
            a.r(t), a.d(t, {
                GAME_FILES_DOMAIN: () => u,
                default: () => h
            });
            var s = a(47313),
                n = a(95681),
                r = a(23004),
                o = a(90831),
                i = a(25831),
                l = a(6689),
                d = a(71534);
            const u = "game-files.crazygames.com";
            class c extends s.Component {
                constructor(e) {
                    super(e), this.progressTracker = void 0, this.config = void 0, this.iframe = null, this.disableIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = null)
                    }, this.restartGame = () => {
                        window.location.reload()
                    }, this.onIframeLoad = () => {
                        this.onLoad(), this.progressTracker.trackLoadFinished(), this.focusOnIframe()
                    }, this.onLoad = () => {
                        this.props.onLoadFinished()
                    }, this.progressTracker = new n.Z, this.config = (0, o.NI)()
                }
                async componentDidMount() {
                    await this.startLoading()
                }
                componentDidUpdate(e) {
                    e.isFullscreen !== this.props.isFullscreen && this.focusOnIframe(), !e.isGameDisabled && this.props.isGameDisabled ? this.disableIframe() : e.isGameDisabled && !this.props.isGameDisabled && this.restartGame()
                }
                render() {
                    return null
                }
                async startLoading() {
                    try {
                        await l.Z.Instance.waitForAPS()
                    } catch (e) {} finally {
                        this.progressTracker.trackLoadStarted(), this.loadIframe()
                    }
                }
                loadIframe() {
                    if (this.props.isGameDisabled) return;
                    const e = document.createElement("iframe");
                    e.src = this.getIframeUrl(), e.onload = this.onIframeLoad, e.style.border = "0", e.style.backgroundColor = "#fff", e.style.width = "10px", e.style.height = "10px", e.style.minWidth = "100%", e.style.minHeight = "100%", e.setAttribute("allow", `accelerometer; gyroscope; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write 'self' ${this.getIframeUrl()}`), e.setAttribute("webkitallowfullscreen", "true"), e.setAttribute("mozallowfullscreen", "true"), e.setAttribute("msallowfullscreen", "true"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("sandbox", "");
                    e.sandbox.add("allow-forms", "allow-modals", "allow-orientation-lock", "allow-pointer-lock", "allow-popups", "allow-presentation", "allow-scripts", "allow-same-origin", "allow-downloads"), this.iframe = e;
                    (0, r.$7)().appendChild(e)
                }
                getIframeUrl() {
                    const e = this.config.loaderOptions,
                        t = e.swfLocation.slice(0, -".swf".length),
                        a = new URL(`${t}.html`),
                        s = `https://${this.config.gameSlug}.${u}`,
                        n = new URL(`/ruffle${a.pathname}`, s),
                        r = "ruffle";
                    return new URLSearchParams(window.location.search).forEach(((e, t) => {
                        t !== r && n.searchParams.append(t, e)
                    })), e.loaderLocation && n.searchParams.set(r, e.loaderLocation), n.toString()
                }
                focusOnIframe() {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.focus()
                }
            }
            const h = (0, i.Z)((0, d.q)((0, d.T)(c)))
        },
        54814: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => gt
            });
            var s = a(47313),
                n = a(63779),
                r = a(23004),
                o = a(56075),
                i = a(6689),
                l = a(22870),
                d = a(71534),
                u = a(13869),
                c = a(68988),
                h = a(72071),
                m = a(60337);
            const g = e => {
                let {
                    handleGameData: t,
                    handleEmptyGameData: a = (() => {}),
                    handleStateChange: r,
                    handleGetUserGameData: i,
                    forceStop: l = !1,
                    logger: d
                } = e;
                const {
                    gameLoadStatus: u
                } = s.useContext(h.r), {
                    setIsGameDisabled: g
                } = s.useContext(c.F), {
                    hasUserLoaded: p,
                    userId: f
                } = s.useContext(n.NL), v = s.useRef("initial"), w = "NOT_STARTED" !== u, y = s.useCallback(((e, t, a) => {
                    v.current = e, r(e, a, t)
                }), [r]);
                return s.useEffect((() => {
                    l && (v.current = "aborted")
                }), [l]), s.useEffect((() => {
                    const e = async e => {
                        d.debug("has user: ");
                        try {
                            if ((0, m.Dy)({
                                    type: "load",
                                    status: "start"
                                }), o.GX) return;
                            if (o.KQ) return void y("failed");
                            const s = await i();
                            if ("aborted" === s.result || "resolvingGameData" !== v.current) return;
                            if (s.gameData) {
                                if (e) return g(!0), void y("reload-popup");
                                await t(s.gameData)
                            } else a();
                            y("resolvedGameData", null, s)
                        } catch (s) {
                            y("failed", s)
                        }
                    };
                    if (p) switch (v.current) {
                        case "resolvedGameData":
                        case "resolvingGameData":
                        case "failed":
                            break;
                        case "noUser":
                            f && (y("resolvingGameData"), e(w));
                            break;
                        case "initial":
                            f ? (y("resolvingGameData"), e(!1)) : y("noUser")
                    }
                }), [p, f, a, t, w, g, d, y, i]), null
            };
            var p = a(90831),
                f = a(56898),
                v = a(64819),
                w = a(91469),
                y = a(77345);
            let S = !1,
                x = null,
                D = [];
            const j = e => {
                    var t, a;
                    let {
                        type: s,
                        data: n
                    } = e;
                    null === (t = x) || void 0 === t || null === (a = t.contentWindow) || void 0 === a || a.postMessage({
                        type: s,
                        data: n
                    }, "*")
                },
                C = (e, t) => {
                    S ? j({
                        type: e,
                        data: t
                    }) : D.push({
                        type: e,
                        data: t
                    })
                },
                b = async (e, t) => new Promise(((a, s) => {
                    const n = document.createElement("iframe");
                    n.src = (0, o.z6)((0, p.NI)().gameSlug, e, (0, o.VB)(), t), n.style.display = "none", n.onload = () => {
                        S = !0, D.length > 0 && (D.forEach(j), D = []), a()
                    }, n.onerror = e => {
                        s(new f.G("APSInterjector failed to load"))
                    }, document.body.appendChild(n), x = n
                })),
                I = async e => {
                    const t = e.metadata.updatedAt.includes("T") ? "yyyy-MM-dd'T'HH:mm:ss.SSSX" : "yyyy-MM-dd HH:mm:ss",
                        a = (0, y.Z)(e.metadata.updatedAt, t, new Date),
                        s = (0, v.Z)((0, w.Z)(a, -a.getTimezoneOffset()), "T"),
                        n = { ...e,
                            metadata: { ...e.metadata,
                                updatedAtTz: s
                            }
                        };
                    return C("requestGameDataResponse", n), new Promise((e => {
                        const t = a => {
                            const {
                                type: s
                            } = a.data;
                            "loadGame" === s && (window.removeEventListener("message", t), e())
                        };
                        window.addEventListener("message", t)
                    }))
                };
            var T = a(96607);
            const E = class {
                constructor(e) {
                    this.onBroadCastDisable = void 0, this.state = "inactive", this.broadcastChannel = void 0, this.onBroadcastMessage = e => {
                        if ("inactive" === this.state) return;
                        const {
                            key: t
                        } = e.data;
                        if ("joined" === t) this.disableState()
                    }, this.disableState = () => {
                        "disabled" !== this.state && (this.state = "disabled", this.onBroadCastDisable())
                    }, this.onBroadCastDisable = e;
                    const t = `broadcast_channel_gf_${(0,p.NI)().gameSlug}`;
                    this.broadcastChannel = new BroadcastChannel(t), this.broadcastChannel.onmessage = this.onBroadcastMessage
                }
                sendJoinedMessage() {
                    this.state = "enabled";
                    this.broadcastChannel.postMessage({
                        key: "joined",
                        keyData: {}
                    })
                }
            };
            var k = a(42379),
                Z = a(26625),
                G = a(82259),
                R = a(32606),
                P = a(38563);
            const L = (0, k.ZP)("div")({
                    opacity: .9,
                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100vh",
                    width: "100vw",
                    zIndex: 1
                }),
                A = (0, k.ZP)("div")({
                    backgroundColor: R.D.brand[200],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100vh",
                    width: "100vw",
                    zIndex: 3
                }),
                M = (0, k.ZP)("div")((e => {
                    let {
                        theme: {
                            typography: t
                        }
                    } = e;
                    return {
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: R.D.black[70],
                        borderRadius: 20,
                        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: t.fontFamily,
                        justifyContent: "center",
                        padding: 32,
                        position: "relative",
                        maxWidth: "100%",
                        width: 600
                    }
                })),
                F = (0, k.ZP)(Z.Z)({
                    fill: R.D.brand[60],
                    height: 48,
                    width: 48
                }),
                U = (0, k.ZP)(P.Z)({
                    fill: R.D.white[100],
                    height: 64,
                    width: 64
                }),
                N = (0, k.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        color: R.D.white[100],
                        fontSize: 20,
                        fontWeight: 700,
                        textAlign: "center",
                        margin: `${t(2)} 0 ${t()}`
                    }
                })),
                H = (0, k.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        color: R.D.white[60],
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "22px",
                        textAlign: "center",
                        marginBottom: t.spacing(3)
                    }
                })),
                O = (0, k.ZP)("span")({
                    color: R.D.brand[60]
                }),
                q = (0, k.ZP)("span")({
                    fontWeight: 700
                }),
                z = (0, k.ZP)(G.S)((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        fontFamily: t.typography.fontFamily,
                        fontSize: "16px",
                        fontWeight: 800,
                        height: 50,
                        width: "100%"
                    }
                })),
                B = (0, k.ZP)("div")({
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    width: "100%"
                });
            var V = a(77626),
                $ = a(85541),
                _ = a(46417);
            const J = s.memo((e => (0, _.jsxs)($.Z, { ...e,
                    viewBox: "0 0 70 70",
                    children: [(0, _.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M55.4167 17.5001H14.5833C12.9725 17.5001 11.6667 18.8059 11.6667 20.4167V49.5834C11.6667 51.1942 12.9725 52.5001 14.5833 52.5001H55.4167C57.0275 52.5001 58.3333 51.1942 58.3333 49.5834V20.4167C58.3333 18.8059 57.0275 17.5001 55.4167 17.5001ZM14.5833 11.6667C9.75084 11.6667 5.83333 15.5843 5.83333 20.4167V49.5834C5.83333 54.4159 9.75084 58.3334 14.5833 58.3334H55.4167C60.2492 58.3334 64.1667 54.4159 64.1667 49.5834V20.4167C64.1667 15.5843 60.2492 11.6667 55.4167 11.6667H14.5833Z"
                    }), (0, _.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.5 26.2499C17.5 24.6391 18.8058 23.3333 20.4167 23.3333H43.75C45.3608 23.3333 46.6667 24.6391 46.6667 26.2499V29.1666C46.6667 30.7774 45.3608 32.0833 43.75 32.0833H20.4167C18.8058 32.0833 17.5 30.7774 17.5 29.1666V26.2499Z"
                    })]
                }))),
                K = s.memo((e => (0, _.jsx)($.Z, { ...e,
                    viewBox: "0 0 30 30",
                    children: (0, _.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M27.5 8.75C27.5 9.08152 27.3683 9.39946 27.1339 9.63388L22.1339 14.6339C21.6457 15.122 20.8543 15.122 20.3661 14.6339C19.878 14.1457 19.878 13.3543 20.3661 12.8661L23.2322 10L11.25 10C10.5596 10 10 9.44036 10 8.75C10 8.05964 10.5596 7.5 11.25 7.5L23.2322 7.5L20.3661 4.63388C19.878 4.14573 19.878 3.35427 20.3661 2.86612C20.8543 2.37796 21.6457 2.37796 22.1339 2.86612L27.1339 7.86612C27.3683 8.10054 27.5 8.41848 27.5 8.75ZM20 21.25C20 21.9404 19.4404 22.5 18.75 22.5L6.76777 22.5L9.63388 25.3661C10.122 25.8543 10.122 26.6457 9.63388 27.1339C9.14573 27.622 8.35427 27.622 7.86612 27.1339L2.86611 22.1339C2.63169 21.8995 2.5 21.5815 2.5 21.25C2.5 20.9185 2.63169 20.6005 2.86611 20.3661L7.86612 15.3661C8.35427 14.878 9.14573 14.878 9.63388 15.3661C10.122 15.8543 10.122 16.6457 9.63388 17.1339L6.76777 20L18.75 20C19.4404 20 20 20.5596 20 21.25Z"
                    })
                }))),
                Q = e => {
                    let {
                        onReload: t,
                        onHomepage: a
                    } = e;
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(L, {}), (0, _.jsx)(A, {
                            onClick: t,
                            children: (0, _.jsxs)(M, {
                                onClick: e => {
                                    e.stopPropagation(), e.preventDefault()
                                },
                                children: [(0, _.jsxs)("div", {
                                    children: [(0, _.jsx)(J, {
                                        sx: {
                                            width: 70,
                                            height: 70
                                        }
                                    }), (0, _.jsx)(K, {
                                        sx: {
                                            width: 30,
                                            height: 70,
                                            mx: 1.5
                                        }
                                    }), (0, _.jsx)(J, {
                                        sx: {
                                            width: 70,
                                            height: 70
                                        }
                                    })]
                                }), (0, _.jsx)(N, {
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.newTab.title"
                                    })
                                }), (0, _.jsx)(H, {
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.newTab.text",
                                        values: {
                                            secondaryButton: (0, _.jsx)(q, {
                                                children: (0, _.jsx)(V.Z, {
                                                    id: "aps.newTab.secondaryButton"
                                                })
                                            })
                                        }
                                    })
                                }), (0, _.jsxs)(B, {
                                    children: [(0, _.jsx)(z, {
                                        onClick: t,
                                        variant: "outlined",
                                        color: "white",
                                        children: (0, _.jsx)(V.Z, {
                                            id: "aps.newTab.secondaryButton"
                                        })
                                    }), (0, _.jsx)(z, {
                                        onClick: a,
                                        variant: "contained",
                                        color: "purple",
                                        children: (0, _.jsx)(V.Z, {
                                            id: "aps.newTab.primaryButton"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                W = s.createContext({
                    onSaveVersionConflict: () => {}
                }),
                X = W;
            var Y = a(34207),
                ee = a(74821);
            const te = e => {
                let {
                    onReload: t,
                    onEnable: a
                } = e;
                const [n, r] = s.useState(!1);
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(L, {}), (0, _.jsx)(A, {
                        onClick: t,
                        children: (0, _.jsxs)(M, {
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault()
                            },
                            children: [(0, _.jsxs)("div", {
                                children: [(0, _.jsx)(J, {
                                    sx: {
                                        width: 70,
                                        height: 70
                                    }
                                }), (0, _.jsx)(K, {
                                    sx: {
                                        width: 30,
                                        height: 70,
                                        mx: 1.5
                                    }
                                }), (0, _.jsx)(ee.Z, {
                                    sx: {
                                        width: 70,
                                        height: 70
                                    }
                                })]
                            }), (0, _.jsx)(N, {
                                children: (0, _.jsx)(V.Z, {
                                    id: "aps.versionConflict.title"
                                })
                            }), (0, _.jsx)(H, {
                                children: (0, _.jsx)(V.Z, {
                                    id: "aps.versionConflict.text"
                                })
                            }), (0, _.jsxs)(B, {
                                children: [(0, _.jsx)(z, {
                                    onClick: () => {
                                        r(!0), a()
                                    },
                                    variant: "outlined",
                                    color: "white",
                                    children: n ? (0, _.jsx)(Y.Z, {
                                        size: 20,
                                        style: {
                                            color: "white"
                                        },
                                        disableShrink: !0
                                    }) : (0, _.jsx)(V.Z, {
                                        id: "aps.versionConflict.secondaryButton"
                                    })
                                }), (0, _.jsx)(z, {
                                    onClick: t,
                                    variant: "contained",
                                    color: "purple",
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.versionConflict.primaryButton"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            };
            let ae = !1;
            const se = e => {
                let {
                    children: t,
                    onForceSave: a
                } = e;
                const [n, r] = s.useState("normal"), {
                    setIsGameDisabled: o
                } = s.useContext(c.F), i = s.useRef(null), l = s.useRef(), d = s.useCallback((e => {
                    l.current = e, r("error-versionConflict")
                }), []);
                s.useEffect((() => {
                    if (ae) throw new Error("APSBroadcast is sending joined message twice");
                    ae = !0;
                    i.current = new E((() => {
                        o(!0), r("error-newTab")
                    })), i.current.sendJoinedMessage()
                }), [o]);
                const u = () => {
                        window.location.reload()
                    },
                    h = () => {
                        T.Z.redirectToHomepage()
                    },
                    m = async () => {
                        await a(l.current), r("normal")
                    };
                return (0, _.jsx)(W.Provider, {
                    value: {
                        onSaveVersionConflict: d
                    },
                    children: "error-newTab" === n ? (0, _.jsx)(Q, {
                        onReload: u,
                        onHomepage: h
                    }) : "error-versionConflict" === n ? (0, _.jsx)(te, {
                        onReload: u,
                        onEnable: m
                    }) : (0, _.jsx)(_.Fragment, {
                        children: t
                    })
                })
            };
            var ne = a(65064),
                re = a(13741);
            class oe extends Error {}
            class ie {
                constructor() {
                    this.currentExecution = null, this.nextExecution = null
                }
                execute(e) {
                    return new Promise(((t, a) => {
                        this.currentExecution ? (this.nextExecution && this.nextExecution.reject(new oe("Execution discarded due to new request")), this.nextExecution = {
                            fn: e,
                            resolve: t,
                            reject: a
                        }) : this.executeNext(e, t, a)
                    }))
                }
                async executeNext(e, t, a) {
                    this.currentExecution = e();
                    try {
                        if (t(await this.currentExecution), this.nextExecution) {
                            const {
                                fn: e,
                                resolve: t,
                                reject: a
                            } = this.nextExecution;
                            this.nextExecution = null, await this.executeNext(e, t, a)
                        }
                    } catch (s) {
                        a(s)
                    } finally {
                        this.currentExecution = null
                    }
                }
            }
            var le = a(12549);
            class de {
                constructor() {
                    this.throttlers = {}, this.intervalRequestData = {}
                }
                static get Instance() {
                    return this._instance || (this._instance = new this)
                }
                async execute(e) {
                    try {
                        return {
                            status: "ok",
                            result: await this.throttlers[e.key].execute(e.fn)
                        }
                    } catch (t) {
                        return {
                            status: "error",
                            error: t
                        }
                    }
                }
                async throttledExecute(e) {
                    this.throttlers[e.key] || (this.throttlers[e.key] = new ie);
                    const t = (0, le.Z)();
                    let a;
                    this.intervalRequestData[e.key] = t;
                    for (let s = 0; s < 3; s++) {
                        const r = (new Date).getTime(),
                            o = await this.execute(e),
                            i = (new Date).getTime() - r;
                        if ("ok" === o.status) return {
                            status: "ok",
                            result: o.result
                        };
                        if (o.error instanceof oe) return {
                            status: "throttled"
                        };
                        if (e.throwOnError && e.throwOnError(o.error)) return {
                            status: "error",
                            error: o.error
                        };
                        const l = 1e4 - i;
                        if (this.intervalRequestData[e.key] !== t) return re.Z.getInstance().sendEvent({
                            type: "apsIssue",
                            issueType: "runtime-save-fail",
                            loaderName: (0, p.NI)().loader,
                            hasUserLoaded: n.vN,
                            hasScriptLoaded: !1,
                            jsondata: JSON.stringify({
                                attempt: s + 1
                            })
                        }), {
                            status: "error",
                            error: o.error
                        };
                        if (l > 0 && await new Promise((e => setTimeout(e, l))), this.intervalRequestData[e.key] !== t) return re.Z.getInstance().sendEvent({
                            type: "apsIssue",
                            issueType: "runtime-save-fail",
                            loaderName: (0, p.NI)().loader,
                            hasUserLoaded: n.vN,
                            hasScriptLoaded: !1,
                            jsondata: JSON.stringify({
                                attempt: s + 1
                            })
                        }), {
                            status: "error",
                            error: o.error
                        };
                        a = o
                    }
                    return re.Z.getInstance().sendEvent({
                        type: "apsIssue",
                        issueType: "runtime-save-fail",
                        loaderName: (0, p.NI)().loader,
                        hasUserLoaded: n.vN,
                        hasScriptLoaded: !1,
                        jsondata: JSON.stringify({
                            attempt: 3
                        })
                    }), {
                        status: "error",
                        result: a.error
                    }
                }
            }
            de._instance = void 0;
            var ue = a(33155);
            class ce {
                constructor(e, t) {
                    this.key = void 0, this.fn = void 0, this.throwOnError = void 0, this.key = "saveSdkGameData", this.fn = () => ue.n.Instance.saveSdkGameData(e, t), this.throwOnError = e => {
                        var t, a;
                        const s = e instanceof ue.J && (null === (t = e.result) || void 0 === t || null === (a = t.errors) || void 0 === a ? void 0 : a.some((e => {
                            var t;
                            return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                        })));
                        return !!s
                    }
                }
            }
            class he {
                constructor(e, t) {
                    this.key = void 0, this.fn = void 0, this.throwOnError = void 0, this.key = "replaceGameData", this.fn = () => ue.n.Instance.replaceGameData(e, t), this.throwOnError = e => {
                        var t, a;
                        const s = e instanceof ue.J && (null === (t = e.result) || void 0 === t || null === (a = t.errors) || void 0 === a ? void 0 : a.some((e => {
                            var t;
                            return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                        })));
                        return !!s
                    }
                }
            }
            class me {
                constructor(e) {
                    this.key = void 0, this.fn = void 0, this.key = "clearGameData", this.fn = () => ue.n.Instance.clearGameData(e)
                }
            }
            const ge = () => {
                    const {
                        onSaveVersionConflict: e
                    } = s.useContext(X);
                    return s.useEffect((() => {
                        const t = async t => {
                            var a, s;
                            try {
                                const {
                                    type: n
                                } = t.data;
                                switch (n) {
                                    case "replaceGameData":
                                        const n = await de.Instance.throttledExecute(new he(t.data.data));
                                        "error" === n.status && n.error instanceof ue.J && (null === (a = n.error.result) || void 0 === a || null === (s = a.errors) || void 0 === s ? void 0 : s.some((e => {
                                            var t;
                                            return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                                        }))) && e(t.data.data);
                                        break;
                                    case "clearGameData":
                                        await de.Instance.throttledExecute(new me(t.data.data))
                                }
                            } catch (n) {
                                console.error("message error: ", n)
                            }
                        };
                        return window.addEventListener("message", t), () => {
                            window.removeEventListener("message", t)
                        }
                    }), [e]), null
                },
                pe = e => {
                    let {
                        onReload: t
                    } = e;
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(L, {
                            style: {
                                zIndex: 1001
                            }
                        }), (0, _.jsx)(A, {
                            onClick: t,
                            style: {
                                zIndex: 1003
                            },
                            children: (0, _.jsxs)(M, {
                                onClick: e => {
                                    e.stopPropagation(), e.preventDefault()
                                },
                                children: [(0, _.jsx)(F, {}), (0, _.jsx)(N, {
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.reload.title"
                                    })
                                }), (0, _.jsx)(H, {
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.reload.text",
                                        values: {
                                            highlight: (0, _.jsx)(O, {
                                                children: (0, _.jsx)(V.Z, {
                                                    id: "aps.reload.textHighlight"
                                                })
                                            })
                                        }
                                    })
                                }), (0, _.jsx)(z, {
                                    onClick: t,
                                    variant: "contained",
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.reload.title"
                                    })
                                })]
                            })
                        })]
                    })
                };
            var fe = a(80387);
            const ve = e => {
                let {
                    children: t
                } = e;
                const {
                    adState: a
                } = s.useContext(fe.g), [n, r] = s.useState(!0);
                return s.useEffect((() => {
                    "playing" === a.state ? r(!1) : r(!0)
                }), [a]), n ? (0, _.jsx)(_.Fragment, {
                    children: t
                }) : null
            };
            var we = a(69121);

            function ye(e, t, a) {
                return re.Z.getInstance().sendEvent({
                    type: "notificationAction",
                    notificationSource: "userTimeout-popup" === t ? "user-load-failed" : "game-data-load-failed",
                    action: e
                }, a, a)
            }
            const Se = e => {
                    let {
                        onReload: t,
                        onContinue: a,
                        source: n,
                        onShow: r
                    } = e;
                    const o = (0, we.Tb)(),
                        [i, l] = s.useState(!1);
                    return (0, s.useEffect)((() => {
                        ye("shown", n, !1), r(n)
                    }), [n, r]), (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(L, {}), (0, _.jsx)(A, {
                            children: (0, _.jsxs)(M, {
                                onClick: e => {
                                    e.stopPropagation(), e.preventDefault()
                                },
                                children: [(0, _.jsx)(U, {}), (0, _.jsx)(N, {
                                    children: (0, _.jsx)(V.Z, {
                                        id: "aps.notLoaded.title"
                                    })
                                }), (0, _.jsxs)(H, {
                                    children: [(0, _.jsx)(V.Z, {
                                        id: "aps.notLoaded.text"
                                    }), o.isIos && o.isSafari && (0, _.jsx)(V.Z, {
                                        id: "aps.notLoaded.textIosSafari"
                                    })]
                                }), (0, _.jsxs)(B, {
                                    children: [(0, _.jsx)(z, {
                                        onClick: () => {
                                            ye("continue", n, !1), a()
                                        },
                                        variant: "outlined",
                                        color: "white",
                                        disabled: i,
                                        children: (0, _.jsx)(V.Z, {
                                            id: "aps.notLoaded.continue"
                                        })
                                    }), (0, _.jsx)(z, {
                                        onClick: async () => {
                                            i || (l(!0), await ye("reload", n, !0), t())
                                        },
                                        variant: "contained",
                                        color: "purple",
                                        disabled: i,
                                        children: i ? (0, _.jsx)(Y.Z, {
                                            disableShrink: !0,
                                            style: {
                                                color: "white"
                                            }
                                        }) : (0, _.jsx)(V.Z, {
                                            id: "aps.notLoaded.reload"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                xe = e => {
                    let {
                        onStatusChange: t,
                        userStatus: a
                    } = e;
                    const n = s.useRef(),
                        {
                            gameLoadStatus: r
                        } = s.useContext(h.r),
                        o = "NOT_STARTED" !== r,
                        i = s.useCallback((() => {
                            const e = window.setTimeout((() => {
                                t("userTimeoutTriggered")
                            }), 7e3);
                            t("userTimeoutStarted"), n.current = {
                                timeout: "userTimeoutStarted",
                                timeoutId: e
                            }
                        }), [t]),
                        l = s.useCallback((() => {
                            const e = window.setTimeout((() => {
                                t("gameDataTimeoutTriggered")
                            }), 7e3);
                            t("gameDataTimeoutStarted"), n.current = {
                                timeout: "gameDataTimeoutStarted",
                                timeoutId: e
                            }
                        }), [t]),
                        d = s.useCallback((() => {
                            var e;
                            null !== (e = n.current) && void 0 !== e && e.timeoutId && window.clearTimeout(n.current.timeoutId)
                        }), []);
                    return s.useEffect((() => {
                        if (o) switch (a) {
                            case "pending":
                                i();
                                break;
                            case "resolving":
                                d(), l();
                                break;
                            case "none":
                            case "normal":
                            case "failed-unknown":
                            case "reload-popup":
                                d()
                        }
                    }), [a, i, l, d, o]), null
                },
                De = e => {
                    let {
                        onDeleteProgressRequest: t
                    } = e;
                    const {
                        setIsGameDisabled: a
                    } = s.useContext(c.F);
                    return s.useEffect((() => {
                        const e = e => {
                            e.data && "deleteProgressRequest" === e.data.type && (a(!0), t())
                        };
                        return window.addEventListener("message", e), () => {
                            window.removeEventListener("message", e)
                        }
                    })), null
                };
            class je extends s.PureComponent {
                constructor(e) {
                    super(e), this.context = void 0, this.logger = (0, l.fq)((0, o.Qg)()).withPrefix("[APS-Iframe]"), this.processAPSInterjectorGameDataInitMessage = async e => {
                        const {
                            type: t
                        } = e.data;
                        "replaceInitGameData" === t && await de.Instance.throttledExecute(new he(e.data.data))
                    }, this.popupShowing = e => {
                        this.setState({
                            popupCurrentlyShowing: e
                        })
                    }, this.onFailure = () => {
                        var e;
                        (0, o.zg)(), null === (e = i.Z.Instance.getDeferred()) || void 0 === e || e.resolve(), (0, m.Dy)({
                            type: "load",
                            status: "end",
                            success: !1
                        })
                    }, this.onGameDataMissingContinue = () => {
                        this.setState({
                            userStatus: "failed-gameData-missing"
                        }), this.onFailure()
                    }, this.onUserMissingContinue = () => {
                        this.setState({
                            userStatus: "failed-user-missing"
                        }), this.onFailure()
                    }, this.onSelectReload = () => {
                        T.Z.refreshGamePage()
                    }, this.onForceSave = async e => {
                        await de.Instance.throttledExecute(new he(e, !0))
                    }, this.onDeleteProgress = async () => {
                        const e = t => {
                            t.data && "deleteProgressRequestResponse" === t.data.type && (T.Z.deleteProgressRequestResponse(), window.removeEventListener("message", e))
                        };
                        window.addEventListener("message", e), C("deleteProgressRequest")
                    }, this.loadApsInterjector = () => b(this.props.loader), this.handleTimeoutStateChange = e => {
                        if (!this.state.popupCurrentlyShowing) switch (e) {
                            case "userTimeoutTriggered":
                                this.setState({
                                    userStatus: "userTimeout-popup"
                                });
                                break;
                            case "gameDataTimeoutStarted":
                                "userTimeout-popup" === this.state.userStatus && this.setState({
                                    userStatus: "pending"
                                });
                                break;
                            case "gameDataTimeoutTriggered":
                                this.setState({
                                    userStatus: "gameDataTimeout-popup"
                                })
                        }
                    }, this.handleStateChange = (e, t, a) => {
                        var s, n, r;
                        switch (e) {
                            case "resolvingGameData":
                                this.logger.debug("resolving game data: "), this.setState({
                                    userStatus: "resolving"
                                });
                                break;
                            case "noUser":
                                this.logger.debug("has no user: "), this.setState({
                                    userStatus: "none"
                                }), null === (s = i.Z.Instance.getDeferred()) || void 0 === s || s.resolve();
                                break;
                            case "reload-popup":
                                this.setState({
                                    userStatus: "reload-popup"
                                });
                                break;
                            case "resolvedGameData":
                                let e;
                                if (this.setState({
                                        userStatus: "normal"
                                    }), null === (n = i.Z.Instance.getDeferred()) || void 0 === n || n.resolve(), null !== t && void 0 !== t && null !== (r = t.gameData) && void 0 !== r && r.metadata.updatedAt) {
                                    var l, d;
                                    const a = (null === t || void 0 === t || null === (l = t.gameData) || void 0 === l ? void 0 : l.metadata.updatedAt).includes("T") ? "yyyy-MM-dd'T'HH:mm:ss.SSSX" : "yyyy-MM-dd HH:mm:ss",
                                        s = (0, y.Z)(null === t || void 0 === t || null === (d = t.gameData) || void 0 === d ? void 0 : d.metadata.updatedAt, a, new Date);
                                    e = (0, w.Z)(s, -s.getTimezoneOffset())
                                }(0, m.Dy)({
                                    type: "load",
                                    status: "end",
                                    success: !0,
                                    lastSaveAt: e
                                });
                                break;
                            case "failed":
                                (0, o.Ho)(this.state.userStatus, a), this.setState({
                                    userStatus: "failed-unknown"
                                }), this.onFailure()
                        }
                    }, this.handleEmptyGameData = () => {
                        C("requestGameDataResponse")
                    }, this.onPreloadGame = () => {
                        i.Z.Instance.setDeferred((0, r.PQ)())
                    }, this.logger.debug(`enabled version ${o.bs}`), this.state = {
                        userStatus: "pending",
                        popupCurrentlyShowing: void 0
                    }
                }
                componentDidMount() {
                    (0, o.VO)("Loading Iframe loader"), this.onPreloadGame(), window.addEventListener("message", this.processAPSInterjectorGameDataInitMessage), this.loadApsInterjector().catch((e => {
                        (0, o.Ho)(this.state.userStatus, e), this.onFailure()
                    }))
                }
                componentWillUnmount() {
                    window.removeEventListener("message", this.processAPSInterjectorGameDataInitMessage)
                }
                componentDidUpdate() {
                    this.state.userStatus !== i.Z.Instance.getApsUserStatus() && i.Z.Instance.setApsUserStatus(this.state.userStatus)
                }
                render() {
                    const {
                        userStatus: e
                    } = this.state, t = "NOT_STARTED" !== this.props.gameLoadStatus;
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(g, {
                            handleEmptyGameData: this.handleEmptyGameData,
                            handleGameData: I,
                            handleGetUserGameData: o.JQ,
                            handleStateChange: this.handleStateChange,
                            forceStop: "failed-unknown" === e || "failed-user-missing" === e || "failed-gameData-missing" === e,
                            logger: this.logger
                        }), (0, _.jsx)(xe, {
                            onStatusChange: this.handleTimeoutStateChange,
                            userStatus: e
                        }), (0, _.jsx)(De, {
                            onDeleteProgressRequest: this.onDeleteProgress
                        }), "normal" === e && t && (0, _.jsx)(se, {
                            onForceSave: this.onForceSave,
                            children: (0, _.jsx)(ge, {})
                        }), "reload-popup" === e && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(pe, {
                                onReload: this.onSelectReload
                            })
                        }), "userTimeout-popup" === e && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(Se, {
                                source: "userTimeout-popup",
                                onReload: this.onSelectReload,
                                onShow: this.popupShowing,
                                onContinue: this.onUserMissingContinue
                            })
                        }), "gameDataTimeout-popup" === e && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(Se, {
                                source: "gameDataTimeout-popup",
                                onReload: this.onSelectReload,
                                onShow: this.popupShowing,
                                onContinue: this.onGameDataMissingContinue
                            })
                        })]
                    })
                }
            }
            je.contextType = n.NL;
            const Ce = (0, d.T)((0, d.q)((0, u.xf)(je)));
            var be = a(41989),
                Ie = a.n(be),
                Te = a(94845),
                Ee = a(74082),
                ke = a(2022),
                Ze = a(6224),
                Ge = a(63656);
            const Re = new(a(97703).Z)("unityApsReady"),
                Pe = "/idbfs",
                Le = "FILE_DATA";
            let Ae;
            const Me = e => +new Date(e),
                Fe = () => {
                    const {
                        apsSyncTimerMs: e
                    } = (0, p.NI)();
                    return e || 3e4
                },
                Ue = () => window.indexedDB,
                Ne = () => {
                    const e = window.location.origin + window.location.pathname,
                        t = e.substring(0, e.lastIndexOf("/"));
                    return Ie()(t)
                },
                He = () => {
                    const e = Ne(),
                        t = `/idbfs/${e}/PlayerPrefs`;
                    const a = (0, p.NI)().loaderOptions,
                        s = a.unitySaveFileNames ? a.unitySaveFileNames[0] : void 0,
                        n = [`/idbfs/${e}`, t];
                    return s && n.push(`/idbfs/${e}/${s}`), n
                },
                Oe = e => {
                    const t = e.target.result,
                        a = e.target.transaction;
                    let s;
                    s = t.objectStoreNames.contains(Le) ? a.objectStore(Le) : t.createObjectStore(Le), s.indexNames.contains("timestamp") || s.createIndex("timestamp", "timestamp", {
                        unique: !1
                    })
                },
                qe = (e, t) => new Promise(((a, s) => {
                    e.transaction(Le).objectStore(Le).get(t).onsuccess = e => {
                        try {
                            const s = e.target.result;
                            if (!s) return a(null);
                            if (!s.timestamp) return console.error("[APS-U] IDB data incomplete: " + t + s), a(null);
                            const n = new Date(s.timestamp).setMilliseconds(0);
                            a(n)
                        } catch (s) {
                            l.kg.debug("[APS-U] Error:", s)
                        }
                    }
                })),
                ze = () => {
                    const e = Ue().open(Pe, 21);
                    return new Promise(((t, a) => {
                        e.onupgradeneeded = Oe, e.onsuccess = () => {
                            const s = e.result,
                                n = He(),
                                r = s.transaction(Le),
                                o = r.objectStore(Le),
                                i = {};
                            let l;
                            n.forEach((e => {
                                o.get(e).onsuccess = t => {
                                    const s = t.target.result;
                                    if (s) {
                                        var n;
                                        s.timestamp || a("[APS-U] IDB data incomplete: " + e + s);
                                        const t = new Date(s.timestamp);
                                        t.getTime() > ((null === (n = l) || void 0 === n ? void 0 : n.getTime()) || 0) && (l = t);
                                        const o = { ...s,
                                            timestamp: Me(s.timestamp)
                                        };
                                        s.contents && (o.contents = (r = s.contents, (0, Te.hd)(r))), i[e] = o
                                    }
                                    var r
                                }
                            })), r.oncomplete = () => {
                                Object.keys(i).length > 0 ? t({
                                    data: i,
                                    updatedAtTz: Me(l)
                                }) : t({
                                    data: null
                                })
                            }, r.onerror = e => {
                                a(e)
                            }
                        }
                    }))
                },
                Be = e => {
                    const t = Ue().open(Pe, 21);
                    return new Promise(((a, s) => {
                        t.onupgradeneeded = Oe, t.onsuccess = () => {
                            const n = t.result.transaction(Le, "readwrite"),
                                r = Ne();
                            e && Object.entries(e).forEach((t => {
                                let [a, o] = t;
                                const i = a.split("/")[3],
                                    l = `/idbfs/${r}` + (i ? "/" + i : "");
                                o.timestamp || s("[APS-U] API data incomplete: " + e);
                                const d = { ...o,
                                    timestamp: new Date(o.timestamp)
                                };
                                var u;
                                d.contents && (d.contents = (u = d.contents, new Uint8Array((0, Te.fJ)(u)))), n.objectStore(Le).put(d, l)
                            })), n.oncomplete = () => {
                                a(null)
                            }, n.onerror = () => {
                                s(null)
                            }
                        }
                    }))
                },
                Ve = async (e, t) => {
                    try {
                        const a = JSON.parse(e.data);
                        await Qe(a), Ae = t
                    } catch (a) {
                        throw new ke.K("setAPIDataToIDB", a)
                    }
                },
                $e = async (e, t, a) => {
                    if (!e) return null;
                    const {
                        data: s,
                        updatedAtTz: n
                    } = e;
                    if (!s || !(!t || n !== Ae)) return null;
                    Ae = n;
                    const r = Ze.Z.getGameTimeInSec();
                    (e => {
                        const {
                            gameSlug: t
                        } = (0, p.NI)();
                        Ee.m.Instance.setItem(`_czy_${t}_pt`, `${e}`)
                    })(r);
                    return await de.Instance.throttledExecute(new he({
                        store: s,
                        version: (0, le.Z)(),
                        updatedAtTz: n,
                        playedTime: r
                    }, a))
                },
                _e = async (e, t) => {
                    const a = (0, y.Z)(e.metadata.updatedAt, "yyyy-MM-dd HH:mm:ss", new Date),
                        s = parseInt((0, v.Z)((0, w.Z)(a, -a.getTimezoneOffset()), "T"));
                    let n;
                    try {
                        n = await Ke()
                    } catch (r) {
                        null === t || void 0 === t || t.debug("Existing data err: ", r)
                    }
                    if (!n) return null === t || void 0 === t || t.debug("no local"), void await Ve(e, s);
                    if (n === s) return null === t || void 0 === t || t.debug("same"), void(Ae = n);
                    if (n > s && n - s < Fe()) {
                        null === t || void 0 === t || t.debug("choosing LS", n, s);
                        const e = await Je();
                        await $e(e, !1)
                    } else null === t || void 0 === t || t.debug("choosing API"), await Ve(e, s)
                },
                Je = async () => Ge.ZP.getInstance().getExperimentValueAsBoolean(Ge.kb) ? Xe() : ze(),
                Ke = async () => Ge.ZP.getInstance().getExperimentValueAsBoolean(Ge.kb) ? Ye() : (() => {
                    const e = Ue().open(Pe, 21);
                    return new Promise(((t, a) => {
                        e.onupgradeneeded = Oe, e.onsuccess = async () => {
                            const a = e.result;
                            a.objectStoreNames.contains(Le) || a.createObjectStore(Le);
                            const s = He();
                            let n = await qe(a, s[1]);
                            n || (n = await qe(a, s[0])), t(n)
                        }, e.onerror = e => {
                            l.kg.debug("[APS-U] Error:", e), a()
                        }
                    }))
                })(),
                Qe = async e => Ge.ZP.getInstance().getExperimentValueAsBoolean(Ge.kb) ? et(e) : Be(e),
                We = async () => Ge.ZP.getInstance().getExperimentValue(Ge.kb) ? tt() : (() => {
                    const e = Ue().open(Pe, 21);
                    return new Promise(((t, a) => {
                        e.onupgradeneeded = Oe, e.onsuccess = () => {
                            const s = e.result,
                                n = Ne(),
                                r = s.transaction(Le, "readwrite"),
                                o = r.objectStore(Le),
                                i = IDBKeyRange.bound(`/idbfs/${n}`, `/idbfs/${n}\uffff`);
                            o.delete(i).onsuccess = e => {
                                l.kg.debug("Deleted keys with prefix:", `/idbfs/${n}`, e)
                            }, r.oncomplete = () => {
                                l.kg.debug("resolving clearDataForGame"), t()
                            }, r.onerror = e => {
                                l.kg.debug("rejecting clearDataForGame"), a(e)
                            }
                        }
                    }))
                })(),
                Xe = async () => {
                    Re.sendMessage({
                        type: "getExistingIndexedData"
                    });
                    return await Re.receiveMessage("getExistingIndexedDataResult")
                },
                Ye = async () => {
                    Re.sendMessage({
                        type: "getUpdatedAtTz"
                    });
                    return await Re.receiveMessage("getUpdatedAtTzResult")
                },
                et = async e => {
                    Re.sendMessage({
                        type: "installUnityGameData",
                        gameData: e
                    });
                    return await Re.receiveMessage("installUnityGameDataResult")
                },
                tt = async () => {
                    Re.sendMessage({
                        type: "deleteProgressRequest"
                    });
                    return await Re.receiveMessage("deleteProgressRequestResponse")
                },
                at = () => {
                    const {
                        onSaveVersionConflict: e
                    } = s.useContext(X);
                    return s.useEffect((() => {
                        const t = window.setInterval((async () => {
                            try {
                                var t, a;
                                const s = await Je(),
                                    n = await $e(s, !0);
                                if (!n) return;
                                "error" === n.status && n.error instanceof ue.J && null !== (t = n.error.result) && void 0 !== t && null !== (a = t.errors) && void 0 !== a && a.some((e => {
                                    var t;
                                    return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                                })) && e(s)
                            } catch (s) {
                                console.error("[UPGFConnector] syncUnityData err: ", s)
                            }
                        }), Fe());
                        return () => {
                            window.clearInterval(t)
                        }
                    }), [e]), s.useEffect((() => (i.Z.Instance.setCachedSyncUnityData((async () => {
                        var t, a;
                        const s = await Je(),
                            n = await $e(s, !0);
                        n && "error" === n.status && n.error instanceof ue.J && null !== (t = n.error.result) && void 0 !== t && null !== (a = t.errors) && void 0 !== a && a.some((e => {
                            var t;
                            return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                        })) && e(s)
                    })), () => {
                        i.Z.Instance.setCachedSyncUnityData(null)
                    })), [e]), null
                },
                st = e => {
                    let {
                        logger: t
                    } = e;
                    const {
                        onSaveVersionConflict: a
                    } = s.useContext(X), n = s.useRef(!1), r = s.useRef(!1), i = s.useRef(0);
                    return s.useEffect((() => {
                        const e = async () => {
                                var t, s;
                                if (r.current) return void(n.current = !0);
                                r.current = !0, n.current = !1;
                                const l = await Je(),
                                    d = await $e(l, !0);
                                d && "error" === d.status && d.error instanceof ue.J && null !== (t = d.error.result) && void 0 !== t && null !== (s = t.errors) && void 0 !== s && s.some((e => {
                                    var t;
                                    return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                                })) && a(l), i.current = window.setTimeout((() => {
                                    r.current = !1, n.current && e()
                                }), (0, o.VB)())
                            },
                            s = async a => {
                                try {
                                    const {
                                        type: s
                                    } = a.data;
                                    if ("syncUnityGameData" === s) t.debug("syncUnityGameData requested"), e()
                                } catch (s) {
                                    n.current = !1, r.current = !1, t.err(new Error("message err: "), s)
                                }
                            };
                        return window.addEventListener("message", s), () => {
                            window.removeEventListener("message", s), i.current && window.clearTimeout(i.current), n.current = !1, r.current = !1
                        }
                    }), [t, a]), null
                },
                nt = e => {
                    let {
                        logger: t
                    } = e;
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(at, {}), (0, _.jsx)(st, {
                            logger: t
                        })]
                    })
                };
            var rt = a(74007);
            class ot extends s.PureComponent {
                constructor(e) {
                    super(e), this.context = void 0, this.logger = (0, l.fq)((0, o.Qg)()).withPrefix("[APS-Unity]"), this.popupShowing = e => {
                        this.setState({
                            popupCurrentlyShowing: e
                        })
                    }, this.onDeleteProgressRequest = async () => {
                        await We(), T.Z.deleteProgressRequestResponse()
                    }, this.onFailure = () => {
                        var e;
                        (0, o.zg)(), null === (e = i.Z.Instance.getDeferred()) || void 0 === e || e.resolve(), (0, m.Dy)({
                            type: "load",
                            status: "end",
                            success: !1
                        })
                    }, this.onGameDataMissingContinue = () => {
                        this.setState({
                            userStatus: "failed-gameData-missing"
                        }), this.onFailure()
                    }, this.onUserMissingContinue = () => {
                        this.setState({
                            userStatus: "failed-user-missing"
                        }), this.onFailure()
                    }, this.handleTimeoutStateChange = e => {
                        if (!this.state.popupCurrentlyShowing) switch (e) {
                            case "userTimeoutTriggered":
                                this.setState({
                                    userStatus: "userTimeout-popup"
                                });
                                break;
                            case "gameDataTimeoutStarted":
                                "userTimeout-popup" === this.state.userStatus && this.setState({
                                    userStatus: "pending"
                                });
                                break;
                            case "gameDataTimeoutTriggered":
                                this.setState({
                                    userStatus: "gameDataTimeout-popup"
                                })
                        }
                    }, this.onSelectReload = () => {
                        T.Z.refreshGamePage()
                    }, this.onForceSave = async e => {
                        await $e(e, !1, !0)
                    }, this.handleStateChange = (e, t, a) => {
                        var s, n, r;
                        switch (e) {
                            case "resolvingGameData":
                                this.logger.debug("resolving game data: "), this.setState({
                                    userStatus: "resolving"
                                });
                                break;
                            case "noUser":
                                this.setState({
                                    userStatus: "none"
                                }), this.logger.debug("has no user: "), null === (s = i.Z.Instance.getDeferred()) || void 0 === s || s.resolve();
                                break;
                            case "reload-popup":
                                this.setState({
                                    userStatus: "reload-popup"
                                });
                                break;
                            case "resolvedGameData":
                                let e;
                                if (null === (n = i.Z.Instance.getDeferred()) || void 0 === n || n.resolve(), this.setState({
                                        userStatus: "normal"
                                    }), null !== t && void 0 !== t && null !== (r = t.gameData) && void 0 !== r && r.metadata.updatedAt) {
                                    var l, d;
                                    const a = (null === t || void 0 === t || null === (l = t.gameData) || void 0 === l ? void 0 : l.metadata.updatedAt).includes("T") ? "yyyy-MM-dd'T'HH:mm:ss.SSSX" : "yyyy-MM-dd HH:mm:ss",
                                        s = (0, y.Z)(null === t || void 0 === t || null === (d = t.gameData) || void 0 === d ? void 0 : d.metadata.updatedAt, a, new Date);
                                    e = (0, w.Z)(s, -s.getTimezoneOffset())
                                }(0, m.Dy)({
                                    type: "load",
                                    status: "end",
                                    success: !0,
                                    lastSaveAt: e
                                });
                                break;
                            case "failed":
                                (0, o.Ho)(this.state.userStatus, a), this.setState({
                                    userStatus: "failed-unknown"
                                }), this.onFailure()
                        }
                    }, this.handleEmptyGameData = async () => {
                        const e = await Je();
                        await $e(e, !1)
                    }, this.onPreloadGame = () => {
                        i.Z.Instance.setDeferred((0, r.PQ)())
                    }, this.loadApsInterjector = () => {
                        const {
                            loader: e
                        } = (0, p.NI)();
                        if (["5.6.x", "iframed_5.6.x", "unity2017", "unity2018", "unity2019"].includes(e)) return b("unity", (0, rt.z)("unity56"));
                        if (["unity6", "unity2023", "unity2022", "unity2021", "unity2020", "iframed_unity2020"].includes(e)) return b("unity", (0, rt.z)("unity2020"));
                        throw new Error("Not supported unity version")
                    }, this.logger.debug("enabled"), this.state = {
                        userStatus: "pending",
                        popupCurrentlyShowing: void 0
                    }
                }
                componentDidMount() {
                    (0, o.VO)("Loading Unity loader"), this.onPreloadGame(), this.loadApsInterjector().catch((e => {
                        (0, o.Ho)(this.state.userStatus, e), this.onFailure()
                    }))
                }
                componentDidUpdate() {
                    this.state.userStatus !== i.Z.Instance.getApsUserStatus() && i.Z.Instance.setApsUserStatus(this.state.userStatus)
                }
                render() {
                    const {
                        userStatus: e
                    } = this.state, t = "NOT_STARTED" !== this.props.gameLoadStatus;
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(g, {
                            handleEmptyGameData: this.handleEmptyGameData,
                            handleGameData: _e,
                            handleGetUserGameData: o.JQ,
                            handleStateChange: this.handleStateChange,
                            forceStop: "failed-unknown" === e || "failed-user-missing" === e || "failed-gameData-missing" === e,
                            logger: this.logger
                        }), (0, _.jsx)(xe, {
                            onStatusChange: this.handleTimeoutStateChange,
                            userStatus: e
                        }), (0, _.jsx)(De, {
                            onDeleteProgressRequest: this.onDeleteProgressRequest
                        }), "normal" === e && t && (0, _.jsx)(se, {
                            onForceSave: this.onForceSave,
                            children: (0, _.jsx)(nt, {
                                logger: this.logger
                            })
                        }), "reload-popup" === e && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(pe, {
                                onReload: this.onSelectReload
                            })
                        }), "userTimeout-popup" === e && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(Se, {
                                source: "userTimeout-popup",
                                onReload: this.onSelectReload,
                                onShow: this.popupShowing,
                                onContinue: this.onUserMissingContinue
                            })
                        }), "gameDataTimeout-popup" === e && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(Se, {
                                source: "gameDataTimeout-popup",
                                onReload: this.onSelectReload,
                                onShow: this.popupShowing,
                                onContinue: this.onGameDataMissingContinue
                            })
                        })]
                    })
                }
            }
            ot.contextType = n.NL;
            const it = (0, d.T)((0, d.q)((0, u.xf)(ot))),
                lt = () => {
                    const {
                        onSaveVersionConflict: e
                    } = s.useContext(X);
                    return s.useEffect((() => {
                        const t = t => {
                            var a;
                            try {
                                const {
                                    type: s
                                } = t.data;
                                if ("saveSdkGameData" === s)(async t => {
                                    var a, s;
                                    (0, m.Dy)({
                                        type: "save",
                                        status: "start"
                                    });
                                    const n = await de.Instance.throttledExecute(new ce(t));
                                    switch (n.status) {
                                        case "ok":
                                            (0, m.Dy)({
                                                type: "save",
                                                status: "end",
                                                success: !0,
                                                lastSaveAt: new Date
                                            });
                                            break;
                                        case "throttled":
                                            break;
                                        case "error":
                                            n.error instanceof ue.J && null !== (a = n.error.result) && void 0 !== a && null !== (s = a.errors) && void 0 !== s && s.some((e => {
                                                var t;
                                                return (null === e || void 0 === e || null === (t = e.extensions) || void 0 === t ? void 0 : t.code) === ne.Rh
                                            })) && e(t), T.Z.sendSDKError({
                                                errorName: "gf-save-fail",
                                                module: "data",
                                                specificValues: {
                                                    error: n.error,
                                                    message: n.error.message,
                                                    name: n.error.name
                                                }
                                            }), (0, m.Dy)({
                                                type: "save",
                                                status: "end",
                                                success: !1
                                            })
                                    }
                                })(null === (a = t.data) || void 0 === a ? void 0 : a.data)
                            } catch (s) {
                                console.error(s)
                            }
                        };
                        return window.addEventListener("message", t), () => {
                            window.removeEventListener("message", t)
                        }
                    }), [e]), null
                },
                dt = e => {
                    let {
                        onError: t,
                        loader: a,
                        unityRawIDBId: n
                    } = e;
                    return s.useEffect((() => {
                        b(a, n).catch((e => {
                            t(e)
                        }))
                    }), [t, a, n]), null
                };
            var ut = a(76306);
            const ct = (0, l.fq)((0, o.Qg)()).withPrefix("[APS-SDKPS]");

            function ht() {
                const e = (0, p.NI)().loader;
                return p.h4.includes(e) && (0, o.x3)() ? "iframe" : "ruffle" === e && (0, o.o5)() ? "ruffle" : p.Fw.includes(e) && (0, o.v9)() ? "unity" : null
            }
            const mt = () => {
                    const {
                        gameLoadStatus: e
                    } = s.useContext(h.r), [t, a] = s.useState(!1), [n, d] = s.useState("pending"), [u, c] = s.useState(), f = s.useRef({
                        status: "loading"
                    }), v = s.useRef([]), S = s.useRef(), x = "NOT_STARTED" !== e;
                    i.Z.Instance.getDeferred() || i.Z.Instance.setDeferred((0, r.PQ)()), s.useEffect((() => {
                        i.Z.Instance.setApsUserStatus(n)
                    }), [n]), s.useEffect((() => {
                        const e = e => {
                            try {
                                const {
                                    type: t
                                } = e.data;
                                if ("requestSdkGameDataNew" === t) v.current.push(e.source), E()
                            } catch (t) {
                                ct.error("Failed to handle requestSdkGameDataNew", t)
                            }
                        };
                        return window.addEventListener("message", e), () => {
                            window.removeEventListener("message", e)
                        }
                    }), []);
                    const D = e => {
                            var t, a;
                            switch (e) {
                                case "resolvedGameData":
                                case "noUser":
                                    null === (t = S.current) || void 0 === t || t.resolve();
                                    break;
                                case "failed":
                                    null === (a = S.current) || void 0 === a || a.reject(new Error("apsLoad-failed"))
                            }
                        },
                        j = () => {
                            var e;
                            null === (e = S.current) || void 0 === e || e.reject(new Error("apsLoad-failed"))
                        };
                    const C = () => {
                            if ("5.6.x" === (0, p.NI)().loader || "iframed_5.6.x" === (0, p.NI)().loader) return (0, rt.z)("unity56");
                            if (["unity6", "unity2023", "unity2022", "unity2021", "unity2020"].includes((0, p.NI)().loader)) return (0, rt.z)("unity2020");
                            throw new Error("Not supported unity version")
                        },
                        b = () => {
                            T.Z.refreshGamePage()
                        },
                        E = () => {
                            f.current && 0 !== v.current.length && (v.current.forEach((e => {
                                "loaded" !== f.current.status && "failed" !== f.current.status || (e.postMessage({
                                    type: "sdkGameDataResponseNew",
                                    data: f.current
                                }, "*"), ct.debug("Sending game data to SDK", f.current))
                            })), v.current = [])
                        },
                        k = e => e instanceof Error && "forceApsGameDataFail" === e.message ? (T.Z.sendSDKError({
                            errorName: "gf-preload-url-fail",
                            module: "data",
                            specificValues: {
                                error: e,
                                message: e.message,
                                name: e.name
                            }
                        }), void ct.error("Failed to load SDKPS data URL", e)) : e instanceof ut.W ? (T.Z.sendSDKError({
                            errorName: "gf-preload-url-fail",
                            module: "data",
                            specificValues: {
                                error: e,
                                message: e.message,
                                name: e.name,
                                timeoutMs: o.mh
                            }
                        }), void ct.error("Failed to load SDKPS data URL", e)) : e instanceof ue.J ? (T.Z.sendSDKError({
                            errorName: "gf-preload-url-fail",
                            module: "data",
                            specificValues: {
                                error: e,
                                message: e.message,
                                name: e.name
                            }
                        }), void ct.error("Failed to load SDKPS data URL", e)) : void(e instanceof Error && ("fetch-fail" === e.message || "TimeoutError" === e.name) && (T.Z.sendSDKError({
                            errorName: "gf-preload-data-fail",
                            module: "data",
                            specificValues: {
                                error: e,
                                message: e.message,
                                name: e.name,
                                timeoutMs: "TimeoutError" === e.name ? o.mh : void 0
                            }
                        }), ct.error("Failed to load SDKPS data JSON", e))),
                        Z = s.useCallback((e => {
                            if (!u) switch (e) {
                                case "userTimeoutTriggered":
                                    d("userTimeout-popup");
                                    break;
                                case "gameDataTimeoutStarted":
                                    "userTimeout-popup" === n && d("pending");
                                    break;
                                case "gameDataTimeoutTriggered":
                                    d("gameDataTimeout-popup")
                            }
                        }), [n, u]),
                        G = s.useCallback((e => {
                            c(e)
                        }), []),
                        R = () => {
                            var e;
                            f.current.status = "failed", E(), null === (e = i.Z.Instance.getDeferred()) || void 0 === e || e.resolve(), (0, m.Dy)({
                                type: "load",
                                status: "end",
                                success: !1
                            })
                        };
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(xe, {
                            onStatusChange: Z,
                            userStatus: n
                        }), (0, _.jsx)(g, {
                            handleGetUserGameData: o.mT,
                            handleEmptyGameData: async () => {
                                ht() && (a(!0), S.current = (0, r.PQ)(), await S.current.promise), f.current = {
                                    hasData: !1,
                                    status: "loaded"
                                }, E(), (0, m.Dy)({
                                    type: "load",
                                    status: "end",
                                    success: !0
                                })
                            },
                            handleGameData: async e => {
                                f.current = {
                                    data: e.data,
                                    hasData: !0,
                                    status: "loaded"
                                }, E(), (0, m.Dy)({
                                    type: "load",
                                    status: "end",
                                    success: !0,
                                    lastSaveAt: e.updatedAt ? new Date(e.updatedAt) : void 0
                                })
                            },
                            handleStateChange: (e, t, a) => {
                                var s, n, r;
                                switch (e) {
                                    case "resolvingGameData":
                                        l.kg.debug("resolving game data: "), d("resolving");
                                        break;
                                    case "noUser":
                                        l.kg.debug("has no user: "), d("none"), null === (s = i.Z.Instance.getDeferred()) || void 0 === s || s.resolve();
                                        break;
                                    case "reload-popup":
                                        d("reload-popup");
                                        break;
                                    case "resolvedGameData":
                                        let e;
                                        if (l.kg.debug("game data resolved: "), d("normal"), null === (n = i.Z.Instance.getDeferred()) || void 0 === n || n.resolve(), null !== t && void 0 !== t && null !== (r = t.gameData) && void 0 !== r && r.metadata.updatedAt) {
                                            var o, u;
                                            const a = (null === t || void 0 === t || null === (o = t.gameData) || void 0 === o ? void 0 : o.metadata.updatedAt).includes("T") ? "yyyy-MM-dd'T'HH:mm:ss.SSSX" : "yyyy-MM-dd HH:mm:ss",
                                                s = (0, y.Z)(null === t || void 0 === t || null === (u = t.gameData) || void 0 === u ? void 0 : u.metadata.updatedAt, a, new Date);
                                            e = (0, w.Z)(s, -s.getTimezoneOffset())
                                        }(0, m.Dy)({
                                            type: "load",
                                            status: "end",
                                            success: !0,
                                            lastSaveAt: e
                                        });
                                        break;
                                    case "failed":
                                        k(a), d("failed-unknown"), R()
                                }
                            },
                            forceStop: "failed-unknown" === n || "failed-user-missing" === n || "failed-gameData-missing" === n,
                            logger: l.kg
                        }), (0, _.jsx)(De, {
                            onDeleteProgressRequest: async () => {
                                await new ce({
                                    jsonData: "{}"
                                }, !0).fn(), T.Z.deleteProgressRequestResponse()
                            }
                        }), t && function() {
                            switch (ht()) {
                                case "iframe":
                                    return (0, _.jsxs)(_.Fragment, {
                                        children: [(0, _.jsx)(g, {
                                            handleGetUserGameData: o.JQ,
                                            handleGameData: I,
                                            handleStateChange: D,
                                            logger: l.kg
                                        }), (0, _.jsx)(dt, {
                                            onError: j,
                                            loader: "iframe"
                                        })]
                                    });
                                case "ruffle":
                                    return (0, _.jsxs)(_.Fragment, {
                                        children: [(0, _.jsx)(g, {
                                            handleGetUserGameData: o.JQ,
                                            handleGameData: I,
                                            handleStateChange: D,
                                            logger: l.kg
                                        }), (0, _.jsx)(dt, {
                                            onError: j,
                                            loader: "ruffle"
                                        })]
                                    });
                                case "unity":
                                    const e = C();
                                    return (0, _.jsxs)(_.Fragment, {
                                        children: [(0, _.jsx)(g, {
                                            handleGetUserGameData: o.JQ,
                                            handleGameData: _e,
                                            handleStateChange: D,
                                            logger: l.kg
                                        }), (0, _.jsx)(dt, {
                                            onError: j,
                                            loader: "unity",
                                            unityRawIDBId: e
                                        })]
                                    });
                                default:
                                    return null
                            }
                        }(), "normal" === n && x && (0, _.jsx)(se, {
                            onForceSave: async e => {
                                await de.Instance.throttledExecute(new ce(e, !0))
                            },
                            children: (0, _.jsx)(lt, {})
                        }), "reload-popup" === n && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(pe, {
                                onReload: b
                            })
                        }), "userTimeout-popup" === n && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(Se, {
                                source: "userTimeout-popup",
                                onReload: b,
                                onShow: G,
                                onContinue: () => {
                                    d("failed-user-missing"), R()
                                }
                            })
                        }), "gameDataTimeout-popup" === n && (0, _.jsx)(ve, {
                            children: (0, _.jsx)(Se, {
                                source: "gameDataTimeout-popup",
                                onReload: b,
                                onShow: G,
                                onContinue: () => {
                                    d("failed-gameData-missing"), R()
                                }
                            })
                        })]
                    })
                },
                gt = () => {
                    const {
                        progressSyncHandler: e
                    } = s.useContext(m.B4);
                    switch (e) {
                        case "none":
                            return null;
                        case "sdkps":
                            return (0, _.jsx)(mt, {});
                        case "aps-iframe":
                            return (0, _.jsx)(Ce, {
                                loader: "iframe"
                            });
                        case "aps-ruffle":
                            return (0, _.jsx)(Ce, {
                                loader: "ruffle"
                            });
                        case "aps-unity":
                            return (0, _.jsx)(it, {});
                        default:
                            throw new Error(`Unhandled APS handler ${e}`)
                    }
                }
        },
        97703: (e, t, a) => {
            a.d(t, {
                Z: () => n
            });
            var s = a(23004);
            const n = class {
                constructor(e) {
                    this.readyMessage = e, this.windowSource = null, this.queuedMessages = [], this.messageListeners = [], this.sendMessage = e => {
                        this.windowSource ? this.windowSource.postMessage(e, "*") : this.queuedMessages.push(e)
                    }, this.receiveMessage = async e => {
                        const t = (0, s.PQ)();
                        this.messageListeners.push({
                            promise: t,
                            messageType: e
                        });
                        return await t.promise
                    }, this.onMessage = e => {
                        e.data.type === this.readyMessage && (this.windowSource = e.source, this.queuedMessages.forEach((e => {
                            var t;
                            return null === (t = this.windowSource) || void 0 === t ? void 0 : t.postMessage(e, "*")
                        }))), this.messageListeners.forEach((t => {
                            t.messageType === e.data.type && (e.data.isSuccessful ? t.promise.resolve(e.data.result) : t.promise.reject(new Error(`WindowMessenger:${e.data.type} failed`)))
                        }))
                    }, window.addEventListener("message", this.onMessage)
                }
            }
        },
        74007: (e, t, a) => {
            a.d(t, {
                z: () => o
            });
            var s = a(26544),
                n = a(90831);
            const r = window.location.href.includes("localIframeWorker=true");

            function o(e) {
                const t = (0, n.NI)(),
                    a = r ? "http://localhost:5014/local" : `https://${t.gameSlug}.${s.GAME_FILES_DOMAIN}`;
                switch (e) {
                    case "unity2020":
                        return `${a}/unity/unity2020`;
                    case "unity56":
                        return `${a}/unity/unity56`;
                    case "unity54":
                        return `${a}/unity/unity54`
                }
            }
        }
    }
]);