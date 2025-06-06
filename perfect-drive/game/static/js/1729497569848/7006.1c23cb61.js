"use strict";
(self.webpackChunkcrazygames_gameframe = self.webpackChunkcrazygames_gameframe || []).push([
    [7006], {
        92386: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => O
            });
            var o = i(47313),
                n = i(63779),
                s = i(90831),
                r = i(77626),
                a = i(42379),
                l = i(32606),
                d = i(85541),
                c = i(46417);
            const p = o.memo((e => (0, c.jsx)(d.Z, { ...e,
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10.0001 6C8.52833 6 7.47159 6.70623 7.13224 7.4263C6.89681 7.92589 6.30095 8.14002 5.80136 7.90458C5.30178 7.66914 5.08764 7.07329 5.32308 6.5737C6.08197 4.96338 7.98852 4 10.0001 4C11.3001 4 12.5155 4.39395 13.4285 5.07868C14.3418 5.76364 15.0001 6.78625 15.0001 8C15.0001 10.0693 13.166 11.5082 11.1827 11.8887C11.11 11.9026 11.0522 11.9386 11.0206 11.972C11.0064 11.9871 11.0014 11.9974 11.0002 12.0001C11.0002 12.0003 11.0001 12.0004 11.0001 12.0005C10.9998 12.5526 10.5522 13 10.0001 13C9.44777 13 9.00005 12.5523 9.00005 12C9.00005 10.8579 9.90969 10.0964 10.8059 9.92451C12.2788 9.64194 13.0001 8.72954 13.0001 8C13.0001 7.5569 12.7629 7.0795 12.2285 6.67868C11.6937 6.27763 10.9092 6 10.0001 6ZM9 15C9 14.4477 9.44771 14 10 14H10.01C10.5623 14 11.01 14.4477 11.01 15C11.01 15.5523 10.5623 16 10.01 16H10C9.44771 16 9 15.5523 9 15Z"
                    })
                }))),
                h = (0, a.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        marginBottom: 20,
                        [t.breakpoints.down(360)]: {
                            marginBottom: 0
                        }
                    }
                })),
                x = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontFamily: "Nunito",
                    zIndex: 3,
                    width: "100%",
                    position: "absolute",
                    fontSize: 12,
                    padding: 7
                },
                g = (0, a.ZP)("div")((e => {
                    let {
                        theme: {
                            breakpoints: t
                        }
                    } = e;
                    return { ...x,
                        color: l.D.white[80],
                        fontSize: 14,
                        padding: "8px 12px",
                        [t.down(360)]: {
                            fontSize: 12
                        }
                    }
                })),
                u = (0, a.ZP)("div")((e => {
                    let {
                        theme: {
                            breakpoints: t
                        }
                    } = e;
                    return { ...x,
                        background: "rgba(104, 66, 255, 0.70)",
                        backdropFilter: "blur(15px)",
                        color: l.D.white[100],
                        cursor: "pointer",
                        "& span": {
                            background: l.D.white[100],
                            color: l.D.brand[100],
                            fontWeight: 900,
                            border: 0,
                            padding: "2px 12px"
                        },
                        [t.down(360)]: {
                            padding: 6,
                            "& span": {
                                padding: "2px 6px"
                            }
                        },
                        "&:hover": {
                            background: "rgba(104, 66, 255, 0.85)",
                            "& span": {
                                background: l.D.white[80],
                                color: l.D.brand[100]
                            }
                        }
                    }
                })),
                j = (0, a.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t,
                            breakpoints: i
                        }
                    } = e;
                    return { ...x,
                        fontSize: 12,
                        fontWeight: 700,
                        background: "rgba(104, 66, 255, 0.70)",
                        backdropFilter: "blur(15px)",
                        color: l.D.white[100],
                        width: "100vw",
                        padding: t(1),
                        transition: "opacity 0.3s ease-out",
                        "& button": {
                            color: l.D.brand[100],
                            fontSize: 14
                        },
                        "& svg": {
                            fill: "#fff",
                            width: 20,
                            height: 20
                        },
                        [i.down(360)]: {
                            fontSize: 12,
                            "& button": {
                                fontSize: 13
                            },
                            "& svg": {
                                width: 17,
                                height: 17
                            }
                        }
                    }
                })),
                f = (0, a.ZP)("span")({
                    borderRadius: 30,
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    padding: "4px 12px",
                    marginLeft: "8px"
                }),
                m = (0, a.ZP)("div", {
                    shouldForwardProp: e => "isBottomPadded" !== e
                })((e => {
                    let {
                        isBottomPadded: t
                    } = e;
                    return { ...x,
                        cursor: "pointer",
                        background: "rgba(89, 32, 42, 0.70)",
                        backdropbackdropFilter: "blur(15px)",
                        color: l.D.alert[40],
                        ...t && {
                            marginBottom: 50
                        },
                        "& span": {
                            background: l.D.alert[100],
                            color: l.D.white[100],
                            border: 0,
                            padding: "2px 12px"
                        },
                        "&:hover": {
                            background: "rgba(51, 14, 27, 0.70)",
                            "& span": {
                                background: l.D.alert[80]
                            }
                        }
                    }
                })),
                b = (0, a.ZP)(p)({
                    width: 16,
                    marginLeft: 6,
                    color: l.D.white[100],
                    "&:hover": {
                        cursor: "pointer",
                        color: l.D.white[60]
                    },
                    "&:active": {
                        color: l.D.white[20]
                    }
                });
            var v = i(72071),
                C = i(8226),
                w = i(58684),
                k = i(82259);
            const y = e => {
                    let {
                        title: t,
                        body: i,
                        action: o
                    } = e;
                    return (0, c.jsx)(w.u_, {
                        children: (0, c.jsxs)(w.hz, {
                            sx: {
                                backgroundColor: l.D.black[70],
                                width: "min(600px, 70vw)",
                                pb: 2.5
                            },
                            children: [(0, c.jsx)(w.FK, {
                                onClick: () => o(!1),
                                children: (0, c.jsx)(C.Z, {
                                    sx: {
                                        height: 20,
                                        width: 20,
                                        mt: "5px"
                                    }
                                })
                            }), (0, c.jsx)("h2", {
                                style: {
                                    marginBlock: 0,
                                    fontSize: 24,
                                    fontWeight: 800,
                                    marginBottom: 16,
                                    marginTop: 20,
                                    paddingLeft: 10,
                                    lineHeight: "130%"
                                },
                                children: t
                            }), (0, c.jsx)("p", {
                                style: {
                                    marginBlock: 0,
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: l.D.white[60]
                                },
                                children: i
                            }), (0, c.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: 15
                                },
                                children: (0, c.jsx)(k.S, {
                                    variant: "contained",
                                    color: "purple",
                                    height: 40,
                                    style: {
                                        minWidth: 150,
                                        fontSize: 14
                                    },
                                    onClick: () => o(!1),
                                    children: (0, c.jsx)(r.Z, {
                                        id: "aps.tooltip.button"
                                    })
                                })
                            })]
                        })
                    })
                },
                Z = () => {
                    const {
                        userId: e
                    } = (0, o.useContext)(n.NL), {
                        gameLoadStatus: t
                    } = (0, o.useContext)(v.r), [i, s] = o.useState(!1);
                    return e && "NOT_STARTED" === t ? i ? (0, c.jsx)(y, {
                        title: (0, c.jsx)(r.Z, {
                            id: "aps.tooltip.crazyAccount.title"
                        }),
                        body: (0, c.jsx)(r.Z, {
                            id: "aps.tooltip.crazyAccount.body"
                        }),
                        action: s
                    }) : (0, c.jsx)(h, {
                        children: (0, c.jsxs)(g, {
                            sx: {
                                "& svg": {
                                    color: l.D.success[100]
                                }
                            },
                            children: [(0, c.jsx)("div", {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.base",
                                    values: {
                                        highlight: (0, c.jsx)("span", {
                                            style: {
                                                color: l.D.success[100]
                                            },
                                            children: (0, c.jsx)(r.Z, {
                                                id: "aps.info.base.enabled"
                                            })
                                        })
                                    }
                                })
                            }), (0, c.jsx)(b, {
                                onClick: () => s(!0)
                            })]
                        })
                    }) : null
                };
            var D = i(16157),
                S = i(18104),
                T = i(38459),
                L = i(49889),
                P = i(87308),
                z = i(74082),
                I = i(13869),
                E = i(13741);
            const B = "apsnotice_hidden_day";

            function _(e) {
                E.Z.getInstance().sendEvent({
                    type: "notificationAction",
                    notificationSource: "dont-lose-progress",
                    action: e
                })
            }
            const A = () => {
                    var e, t;
                    const [i, n] = o.useState(!1), {
                        gameLoadStatus: a
                    } = (0, o.useContext)(v.r), {
                        gfInit: d
                    } = (0, o.useContext)(I.R4), p = (0, s.NI)(), h = (0, P.uo)(), x = o.useRef(null), [g, b] = o.useState(!1), [y, Z] = o.useState(!1), E = z.m.Instance.getItem(B), A = E ? Date.now() - Number(E) : null, R = "GAME_LOADED" === a && !g && !(!!A && A < 864e5), W = s.j9.includes(p.loader) && ["aps", "sdk"].includes(p.apsStorageType), N = new Date("2024-09-30").toLocaleDateString(null !== (e = null === (t = p.locale) || void 0 === t ? void 0 : t.replace("_", "-")) && void 0 !== e ? e : "en-US", {
                        month: "long",
                        day: "2-digit"
                    }), O = () => {
                        b(!0);
                        const e = Date.now();
                        z.m.Instance.setItem(B, `${e}`)
                    };
                    o.useEffect((() => {
                        i && _("shown")
                    }), [i]), o.useEffect((() => {
                        let e, t;
                        if (!h) return;
                        const i = new IntersectionObserver((i => {
                            let [o] = i;
                            o.isIntersecting && !y && (e || (e = window.setTimeout((() => {
                                Z(!0), t || (t = window.setTimeout((() => {
                                    Z(!1), b(!0)
                                }), 7e3))
                            }), 2e3)))
                        }));
                        return x && x.current && i.observe(x.current),
                            function() {
                                i.disconnect(), e && window.clearTimeout(e), t && window.clearTimeout(t)
                            }
                    }), [h, x, a]), o.useEffect((() => {
                        var e;
                        d && null !== (e = d.data) && void 0 !== e && e.wasUserLoggedIn && n(!0)
                    }), [d]);
                    const F = () => {
                        (0, L.A)()
                    };
                    return "GAME_LOADED" !== a || h ? i && "NOT_STARTED" === a && !h ? (0, c.jsx)(w.u_, {
                        hideBackdrop: !0,
                        children: (0, c.jsxs)(w.hz, {
                            sx: {
                                backgroundColor: l.D.black[70],
                                width: 250,
                                pb: 2.5
                            },
                            children: [(0, c.jsx)(D.Z, {
                                sx: {
                                    position: "absolute",
                                    width: "30px",
                                    height: "30px",
                                    right: "8px",
                                    top: "8px",
                                    backgroundColor: l.D.black[90],
                                    borderRadius: "28px",
                                    "&:hover": {
                                        cursor: "pointer",
                                        backgroundColor: l.D.black[80]
                                    },
                                    "&:active": {
                                        backgroundColor: l.D.black[70]
                                    }
                                },
                                onClick: () => {
                                    _("closed"), n(!1)
                                },
                                children: (0, c.jsx)(C.Z, {
                                    sx: {
                                        height: 20,
                                        width: 20,
                                        mt: "5px"
                                    }
                                })
                            }), (0, c.jsx)("div", {
                                style: {
                                    marginTop: 12,
                                    marginBottom: 10,
                                    height: 121,
                                    width: "100%"
                                },
                                children: (0, c.jsx)("img", {
                                    src: (0, T.Z)("/gameframe/astronaut.svg"),
                                    alt: "Don't lose your progress!"
                                })
                            }), (0, c.jsx)("h2", {
                                style: {
                                    marginBlock: 0,
                                    fontSize: 16,
                                    fontWeight: 700,
                                    marginBottom: 4,
                                    marginTop: 10
                                },
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.userWasLogged.title"
                                })
                            }), (0, c.jsx)("p", {
                                style: {
                                    marginBlock: 0,
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: l.D.white[60]
                                },
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.userWasLogged.text"
                                })
                            }), (0, c.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: 15
                                },
                                children: [(0, c.jsx)(k.S, {
                                    variant: "outlined",
                                    color: "white",
                                    height: 34,
                                    style: {
                                        minWidth: 100,
                                        fontSize: 14
                                    },
                                    onClick: () => {
                                        n(!1), _("ignored")
                                    },
                                    children: (0, c.jsx)(r.Z, {
                                        id: "aps.userWasLogged.ignore"
                                    })
                                }), (0, c.jsx)(k.S, {
                                    variant: "contained",
                                    height: 34,
                                    style: {
                                        minWidth: 100,
                                        fontSize: 14
                                    },
                                    onClick: () => {
                                        F(), _("login")
                                    },
                                    children: (0, c.jsx)(r.Z, {
                                        id: "aps.userWasLogged.login"
                                    })
                                })]
                            })]
                        })
                    }) : "NOT_STARTED" === a ? W ? (0, c.jsx)(m, {
                        onClick: F,
                        children: (0, c.jsxs)("div", {
                            children: [(0, c.jsx)(r.Z, {
                                id: "aps.info.unityUpgradedLoginInfo",
                                values: {
                                    date: N
                                }
                            }), (0, c.jsx)(f, {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.loginPrompt.cta"
                                })
                            })]
                        })
                    }) : (0, c.jsx)(u, {
                        onClick: F,
                        children: (0, c.jsxs)("div", {
                            children: [(0, c.jsx)(r.Z, {
                                id: "aps.info.loginPrompt"
                            }), (0, c.jsx)(f, {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.loginPrompt.cta"
                                })
                            })]
                        })
                    }) : "POST_PREROLL" === a ? W ? (0, c.jsx)(m, {
                        onClick: F,
                        children: (0, c.jsxs)("div", {
                            children: [(0, c.jsx)(r.Z, {
                                id: "aps.info.unityUpgradedLoginInfo",
                                values: {
                                    date: N
                                }
                            }), (0, c.jsx)(f, {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.loginPrompt.cta"
                                })
                            })]
                        })
                    }) : (0, c.jsx)(m, {
                        isBottomPadded: h,
                        onClick: F,
                        children: (0, c.jsxs)("div", {
                            children: [(0, c.jsx)(r.Z, {
                                id: "aps.splash.loginPrompt"
                            }), (0, c.jsx)(f, {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.splash.loginPrompt.cta"
                                })
                            })]
                        })
                    }) : R ? W ? (0, c.jsxs)(m, {
                        isBottomPadded: h,
                        style: {
                            opacity: y ? 1 : 0,
                            position: "relative",
                            flexDirection: "column",
                            pointerEvents: y ? void 0 : "none"
                        },
                        onClick: F,
                        ref: x,
                        children: [(0, c.jsx)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: (0, c.jsx)(r.Z, {
                                id: "aps.info.unityUpgradedLoginInfo",
                                values: {
                                    date: N
                                }
                            })
                        }), (0, c.jsx)(f, {
                            sx: {
                                mt: 1
                            },
                            children: (0, c.jsx)(r.Z, {
                                id: "aps.info.loginPrompt.cta"
                            })
                        })]
                    }) : (0, c.jsxs)(j, {
                        style: {
                            opacity: y ? 1 : 0,
                            pointerEvents: y ? void 0 : "none"
                        },
                        ref: x,
                        children: [(0, c.jsxs)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [(0, c.jsx)(r.Z, {
                                id: "aps.info.loginPrompt"
                            }), (0, c.jsx)(k.S, {
                                variant: "contained",
                                color: "white",
                                height: 20,
                                onClick: F,
                                sx: {
                                    ml: 1
                                },
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.loginPrompt.cta"
                                })
                            })]
                        }), (0, c.jsx)(S.Z, {
                            onClick: O,
                            disableRipple: !0,
                            sx: {
                                position: "absolute",
                                right: 0
                            },
                            children: (0, c.jsx)(C.Z, {})
                        })]
                    }) : null : null
                },
                R = () => {
                    const {
                        gameLoadStatus: e
                    } = (0, o.useContext)(v.r), t = (0, P.uo)(), [i, n] = o.useState(!1);
                    return "NOT_STARTED" !== e || t ? null : i ? (0, c.jsx)(y, {
                        title: (0, c.jsx)(r.Z, {
                            id: "aps.tooltip.account.title"
                        }),
                        body: (0, c.jsx)(r.Z, {
                            id: "aps.tooltip.account.body"
                        }),
                        action: n
                    }) : (0, c.jsx)(h, {
                        children: (0, c.jsxs)(g, {
                            children: [(0, c.jsx)("div", {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.ingame",
                                    values: {
                                        highlight: (0, c.jsx)("span", {
                                            style: {
                                                color: l.D.warning[100]
                                            },
                                            children: (0, c.jsx)(r.Z, {
                                                id: "aps.info.ingame.highlight"
                                            })
                                        })
                                    }
                                })
                            }), (0, c.jsx)(b, {
                                onClick: () => n(!0)
                            })]
                        })
                    })
                },
                W = () => {
                    const {
                        gameLoadStatus: e
                    } = (0, o.useContext)(v.r), [t, i] = o.useState(!1);
                    return "NOT_STARTED" !== e ? null : t ? (0, c.jsx)(y, {
                        title: (0, c.jsx)(r.Z, {
                            id: "aps.tooltip.locally.title"
                        }),
                        body: (0, c.jsx)(r.Z, {
                            id: "aps.tooltip.locally.body"
                        }),
                        action: i
                    }) : (0, c.jsx)(h, {
                        children: (0, c.jsxs)(g, {
                            children: [(0, c.jsx)("div", {
                                children: (0, c.jsx)(r.Z, {
                                    id: "aps.info.base",
                                    values: {
                                        highlight: (0, c.jsx)("span", {
                                            style: {
                                                color: l.D.warning[100]
                                            },
                                            children: (0, c.jsx)(r.Z, {
                                                id: "aps.info.base.local"
                                            })
                                        })
                                    }
                                })
                            }), (0, c.jsx)(b, {
                                onClick: () => i(!0)
                            })]
                        })
                    })
                };
            var N = i(56075);
            const O = () => {
                const {
                    userId: e,
                    hasUserLoaded: t
                } = (0, o.useContext)(n.NL), i = (0, N.J5)(), r = (0, N.E4)();
                return "ingame" === i ? (0, c.jsx)(R, {}) : "local" === i ? (0, c.jsx)(W, {}) : "cloud" === i && t && ("aps" !== r || (() => {
                    const e = (0, s.NI)().loader;
                    return !!(0, N.$9)() && (s.h4.includes(e) ? (0, N.x3)() : "ruffle" === e ? (0, N.o5)() : !!s.Fw.includes(e) && (0, N.v9)())
                })()) ? e ? (0, c.jsx)(Z, {}) : (0, c.jsx)(A, {}) : null
            }
        }
    }
]);