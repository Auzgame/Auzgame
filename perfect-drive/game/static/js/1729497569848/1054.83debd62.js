"use strict";
(self.webpackChunkcrazygames_gameframe = self.webpackChunkcrazygames_gameframe || []).push([
    [1054], {
        1054: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => Be
            });
            var n = s(47313),
                o = s(82937),
                i = s(94085),
                r = s(46604),
                l = s(90831),
                d = s(62111),
                a = s(40484),
                c = s(85541),
                h = s(46417);
            const u = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                children: (0, h.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.50002 3.3352C6.11931 3.3352 5.00002 4.45577 5.00002 5.83806C5.00002 7.22036 6.11931 8.34092 7.50002 8.34092C8.88073 8.34092 10 7.22036 10 5.83806C10 4.45577 8.88073 3.3352 7.50002 3.3352ZM3.33335 5.83806C3.33335 3.53424 5.19883 1.66663 7.50002 1.66663C8.43805 1.66663 9.30369 1.97695 10.0001 2.50065C10.6962 1.97737 11.5626 1.66663 12.5 1.66663C14.8012 1.66663 16.6667 3.53424 16.6667 5.83806C16.6667 8.14188 14.8012 10.0095 12.5 10.0095C11.5625 10.0095 10.6962 9.69871 10.0001 9.17547C9.30369 9.69917 8.43806 10.0095 7.50002 10.0095C5.19883 10.0095 3.33335 8.14188 3.33335 5.83806ZM11.1115 7.91986C11.5088 8.18617 11.9859 8.34092 12.5 8.34092C13.8807 8.34092 15 7.22036 15 5.83806C15 4.45577 13.8807 3.3352 12.5 3.3352C11.9857 3.3352 11.5088 3.48999 11.1115 3.75628C11.4646 4.36895 11.6667 5.07988 11.6667 5.83806C11.6667 6.59624 11.4646 7.30718 11.1115 7.91986ZM7.50002 12.5124C5.19097 12.5124 3.33335 14.3413 3.33335 16.6583V16.6647H11.6667V16.6583C11.6667 14.3413 9.80907 12.5124 7.50002 12.5124ZM13.3334 16.6647H16.6667V16.6583C16.6667 14.3413 14.8091 12.5124 12.5 12.5124C12.2088 12.5124 11.931 12.5335 11.6676 12.5765C12.6973 13.6198 13.3334 15.0548 13.3334 16.6583V16.6647ZM9.94889 11.3741C9.20367 11.033 8.37381 10.8438 7.50002 10.8438C4.28622 10.8438 1.66669 13.4041 1.66669 16.6583V17.499C1.66669 17.9598 2.03978 18.3333 2.50002 18.3333H17.5C17.9603 18.3333 18.3334 17.9598 18.3334 17.499V16.6583C18.3334 13.4041 15.7138 10.8438 12.5 10.8438C11.6187 10.8438 10.746 10.9961 9.94889 11.3741Z",
                    fill: "white"
                })
            })));
            var C = s(82259),
                x = s(77626),
                m = s(86480);
            const p = () => {
                    const {
                        spacing: e
                    } = (0, d.Z)(), {
                        showInviteButton: t,
                        onInviteButtonClick: s
                    } = n.useContext(m.V);
                    return (0, h.jsx)(h.Fragment, {
                        children: t && (0, h.jsx)(a.Z, {
                            title: (0, h.jsx)(x.Z, {
                                id: "inviteFriends.footer.buttonTooltip"
                            }),
                            placement: "top",
                            children: (0, h.jsxs)(C.S, {
                                variant: "contained",
                                color: "purple",
                                size: "small",
                                height: 30,
                                sx: {
                                    "@keyframes horizontalShaking": {
                                        "10%, 90%": {
                                            transform: "translate3d(-1px, 0, 0)"
                                        },
                                        "20%, 80% ": {
                                            transform: "translate3d(3px, 0, 0)"
                                        },
                                        "30%, 50%, 70%": {
                                            transform: "translate3d(-5px, 0, 0)"
                                        },
                                        "40%, 60%": {
                                            transform: "translate3d(5px, 0, 0)"
                                        }
                                    },
                                    marginRight: e(1),
                                    animationName: t ? "horizontalShaking" : void 0,
                                    animationIterationCount: 2,
                                    animationTimingFunction: "ease-out",
                                    animationDuration: "1s",
                                    willChange: "transform"
                                },
                                onClick: s,
                                children: [(0, h.jsx)(u, {
                                    sx: {
                                        height: 20
                                    }
                                }), " ", (0, h.jsx)(x.Z, {
                                    id: "inviteFriends.footer.button"
                                })]
                            })
                        })
                    })
                },
                g = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: (0, h.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.57484 4C8.17921 4 7.82522 4.22056 7.65455 4.55747L4.10855 11.5575C3.78161 12.2029 4.24657 13 5.02885 13H11.8817C12.434 13 12.8817 13.4477 12.8817 14C12.8817 14.5523 12.434 15 11.8817 15H10.8554V19C10.8554 19.54 11.3025 20 11.8817 20H11.8958C11.9142 19.1188 12.187 18.2613 12.6818 17.5288L15.9474 12.6939V4.78324L12.8972 4.03059C12.815 4.01029 12.7304 4 12.6454 4H8.57484ZM17.9474 5V13H18.9737C19.5528 13 19.9999 12.54 19.9999 12V6C19.9999 5.45998 19.5528 5 18.9737 5H17.9474ZM16.8033 15L14.3391 18.6482C14.0489 19.078 13.8948 19.5815 13.8948 20.0955C13.8948 21.1596 13.0245 22 11.9784 22H11.8817C10.2226 22 8.85538 20.6691 8.85538 19V15H5.02885C2.79852 15 1.30407 12.6679 2.32441 10.6537L5.87041 3.65368C6.38621 2.63545 7.43548 2 8.57484 2H12.6454C12.8917 2 13.1372 2.02982 13.3764 2.08884L17.0689 3H18.9737C20.6327 3 21.9999 4.33087 21.9999 6V12C21.9999 13.6691 20.6327 15 18.9737 15H16.8033Z"
                    })
                })));
            var v = s(91815),
                j = s(7136),
                f = s(74082),
                b = s(96607),
                Z = s(37888),
                w = s(32606),
                L = s(8226),
                V = s(73914),
                y = s(20503);
            const k = e => {
                let {
                    enabled: t,
                    onExit: s
                } = e;
                const {
                    disableFullscreen: o,
                    isFullscreen: i
                } = n.useContext(V.s), [r, l] = n.useState(!1);
                return n.useEffect((() => {
                    l(t)
                }), [t]), r && t ? (0, h.jsxs)("div", {
                    style: {
                        width: 300,
                        height: 96,
                        position: "absolute",
                        top: -101,
                        left: -122,
                        background: w.D.black[60],
                        textAlign: "center",
                        padding: "16px",
                        borderRadius: "20px"
                    },
                    children: [(0, h.jsx)(L.Z, {
                        sx: {
                            position: "absolute",
                            right: 10,
                            top: 10
                        },
                        onClick: function() {
                            s(), (0, y.Vn)()
                        }
                    }), (0, h.jsx)(x.Z, {
                        id: "dislikeFeedback.title"
                    }), (0, h.jsx)(C.S, {
                        variant: "contained",
                        sx: {
                            width: "100%",
                            mt: 1
                        },
                        onClick: function() {
                            i && o(), b.Z.feedback("dislike"), s()
                        },
                        children: (0, h.jsx)(x.Z, {
                            id: "dislikeFeedback.action"
                        })
                    })]
                }) : null
            };
            let M = function(e) {
                return e[e.CANCEL = 0] = "CANCEL", e[e.POSITIVE = 1] = "POSITIVE", e[e.NEGATIVE = -1] = "NEGATIVE", e
            }({});

            function E(e) {
                return `vote-${e}`
            }
            const H = e => {
                let {
                    gameSlug: t,
                    initialRating: s
                } = e;
                const [r, l] = n.useState(s), [d, c] = n.useState(), [u, C] = n.useState(!1);
                n.useEffect((() => {
                    const e = (() => {
                        const e = E(t),
                            s = f.m.Instance.getItem(e);
                        if (!s) return M.CANCEL;
                        try {
                            const e = parseInt(s, 10);
                            switch (e) {
                                case M.CANCEL:
                                case M.POSITIVE:
                                case M.NEGATIVE:
                                    return e;
                                default:
                                    return M.CANCEL
                            }
                        } catch (n) {
                            return M.CANCEL
                        }
                    })();
                    e !== M.CANCEL && c(e)
                }), [t]);
                const m = e => {
                        switch (p(e), c(e), e) {
                            case M.NEGATIVE:
                                b.Z.dislike(), l({
                                    upVotes: s.upVotes,
                                    downVotes: s.downVotes + 1
                                }), C(!0);
                                break;
                            case M.POSITIVE:
                                b.Z.like(), l({
                                    upVotes: s.upVotes + 1,
                                    downVotes: s.downVotes
                                }), C(!1);
                                break;
                            case M.CANCEL:
                                b.Z.neutral(), l({
                                    upVotes: s.upVotes,
                                    downVotes: s.downVotes
                                }), C(!1)
                        }
                    },
                    p = e => {
                        const s = f.m.Instance,
                            n = E(t);
                        e === M.CANCEL ? s.removeItem(n) : s.setItem(n, `${e}`)
                    };
                return (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsx)(a.Z, {
                        title: (0, h.jsx)(x.Z, {
                            id: "tooltip.like"
                        }),
                        placement: "top",
                        children: (0, h.jsx)(i.lp, {
                            item: !0,
                            withImage: !0,
                            sx: {
                                mr: 2
                            },
                            children: (0, h.jsx)(Z.Z, {
                                onClick: () => {
                                    d === M.POSITIVE ? m(M.CANCEL) : m(M.POSITIVE), (0, y.Vn)()
                                },
                                clicked: d === M.POSITIVE,
                                children: (0, h.jsxs)(o.ZP, {
                                    container: !0,
                                    alignItems: "center",
                                    children: [(0, h.jsx)(o.ZP, {
                                        item: !0,
                                        children: (0, h.jsx)(v.Z, {})
                                    }), (0, h.jsx)(o.ZP, {
                                        item: !0,
                                        children: (0, h.jsx)(i.w1, {
                                            className: "ratingLabel",
                                            children: isNaN(r.upVotes) ? null : j.ag.number(r.upVotes, {
                                                notation: "compact"
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    }), (0, h.jsxs)(i.lp, {
                        item: !0,
                        withImage: !0,
                        sx: {
                            mr: 1.5,
                            position: "relative"
                        },
                        children: [(0, h.jsx)(k, {
                            enabled: u,
                            onExit: () => {
                                C(!1)
                            }
                        }), (0, h.jsx)(a.Z, {
                            title: (0, h.jsx)(x.Z, {
                                id: "tooltip.dislike"
                            }),
                            placement: "top",
                            children: (0, h.jsx)("div", {
                                children: (0, h.jsx)(Z.Z, {
                                    onClick: async () => {
                                        d === M.NEGATIVE ? m(M.CANCEL) : m(M.NEGATIVE), (0, y.Vn)()
                                    },
                                    clicked: d === M.NEGATIVE,
                                    customVariant: "dislike",
                                    children: (0, h.jsxs)(o.ZP, {
                                        container: !0,
                                        alignItems: "center",
                                        children: [(0, h.jsx)(o.ZP, {
                                            item: !0,
                                            children: (0, h.jsx)(g, {})
                                        }), (0, h.jsx)(o.ZP, {
                                            item: !0,
                                            children: (0, h.jsx)(i.w1, {
                                                className: "ratingLabel",
                                                children: isNaN(r.downVotes) ? null : j.ag.number(r.downVotes, {
                                                    notation: "compact"
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })]
                })
            };
            var S = s(19314),
                I = s(63779);
            const P = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                    viewBox: "0 0 24 24",
                    children: (0, h.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.04445 3C6.66359 3 5.53468 3.29654 4.63432 3.82463C3.73186 4.35395 3.11419 5.08371 2.70912 5.86217C1.91829 7.38195 1.92575 9.0998 2.11858 10.0865C2.62052 12.655 4.41942 15.3472 6.3037 17.3581C7.25773 18.3762 8.27078 19.26 9.21577 19.8976C10.1115 20.502 11.1112 21 12 21C12.8888 21 13.8885 20.502 14.7842 19.8976C15.7292 19.26 16.7423 18.3762 17.6963 17.3581C19.5806 15.3472 21.3795 12.655 21.8814 10.0865C22.0743 9.0998 22.0817 7.38195 21.2909 5.86217C20.8858 5.08371 20.2682 4.35395 19.3657 3.82463C18.4653 3.29654 17.3364 3 15.9556 3C14.8581 3 13.9104 3.49559 13.1784 4.11305C12.7259 4.49473 12.3303 4.94327 12 5.40732C11.6697 4.94327 11.2741 4.49473 10.8216 4.11305C10.0896 3.49559 9.14193 3 8.04445 3Z"
                    })
                }))),
                F = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                    viewBox: "0 0 24 24",
                    children: (0, h.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.47368 6.78578C3.94666 7.79745 3.9392 9.02672 4.07146 9.70273C4.46989 11.7393 5.98381 14.0997 7.75719 15.9902C8.63197 16.9227 9.53387 17.7018 10.3315 18.2394C11.1783 18.8102 11.749 19 12 19C12.251 19 12.8217 18.8102 13.6685 18.2394C14.4661 17.7018 15.368 16.9227 16.2428 15.9902C18.0162 14.0997 19.5301 11.7393 19.9286 9.70273C20.0608 9.02672 20.0534 7.79745 19.5263 6.78578C19.2725 6.29849 18.9017 5.86627 18.3619 5.55002C17.82 5.23252 17.0529 5 15.96 5C14.7111 5 13.7204 5.56856 13.2125 6.32446C12.8891 6.80569 12.3638 6.94309 12 6.94309C11.6362 6.94309 11.1109 6.80569 10.7876 6.32446C10.2796 5.56856 9.28887 5 8.04003 5C6.94711 5 6.18001 5.23252 5.63809 5.55002C5.09831 5.86627 4.72752 6.29849 4.47368 6.78578ZM4.62707 3.82438C5.52816 3.29645 6.65797 3 8.04003 3C9.61785 3 11.0464 3.61724 12 4.64452C12.9536 3.61724 14.3822 3 15.96 3C17.342 3 18.4719 3.29645 19.3729 3.82438C20.2762 4.35357 20.8945 5.08322 21.3001 5.86176C22.0919 7.38172 22.0844 9.09982 21.8913 10.0867C21.3888 12.6555 19.5878 15.3476 17.7015 17.3585C16.7464 18.3766 15.7323 19.2603 14.7863 19.8979C13.8895 20.5023 12.8891 21 12 21C11.1109 21 10.1105 20.5023 9.21371 19.8979C8.26775 19.2603 7.25361 18.3766 6.29853 17.3585C4.41221 15.3476 2.61121 12.6555 2.10867 10.0867C1.91558 9.09982 1.90812 7.38172 2.69993 5.86176C3.1055 5.08322 3.72383 4.35357 4.62707 3.82438Z"
                    })
                })));
            var R = s(30686),
                T = s(42379);
            const A = R.F4 `
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`,
                N = (0, T.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        color: "white",
                        backgroundColor: t.palette.primary.main,
                        padding: `${t.spacing(1)} ${t.spacing(2)}`,
                        borderRadius: t.shape.borderRadius,
                        position: "relative",
                        boxShadow: t.shadows[1],
                        fontSize: 12
                    }
                })),
                K = (0, T.ZP)("div")((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        margin: "auto",
                        bottom: "-8px",
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: `8px solid ${t.palette.primary.main}`,
                        transform: "scale(1.5, 1)"
                    }
                })),
                D = (0, T.ZP)("div")((e => {
                    let {
                        theme: t,
                        duration: s
                    } = e;
                    return {
                        position: "absolute",
                        left: 0,
                        width: "100%",
                        top: 0,
                        height: 4,
                        backgroundColor: "#ba63ff",
                        borderRadius: t.shape.borderRadius,
                        animation: `${A} ${s}s 1 linear`
                    }
                }));
            var z = s(80859);
            const B = e => {
                    let {
                        anchorElement: t,
                        open: s,
                        onAutoClose: o,
                        children: i,
                        duration: r
                    } = e;
                    const [l, d] = (0, n.useState)(s), a = r || 3;
                    return (0, n.useEffect)((() => {
                        if (d(s), s) {
                            let e = setTimeout((() => {
                                d(!1), o && o()
                            }), 1e3 * a);
                            return () => {
                                window.clearTimeout(e)
                            }
                        }
                        return () => {}
                    }), [s, o, a]), (0, h.jsx)(z.Z, {
                        style: {
                            zIndex: 2
                        },
                        open: l,
                        anchorEl: t,
                        children: (0, h.jsxs)(N, {
                            children: [(0, h.jsx)(D, {
                                duration: a
                            }), i, (0, h.jsx)(K, {})]
                        })
                    })
                },
                O = () => {
                    const [e, t] = (0, n.useState)(!0), [s, r] = (0, n.useState)(!1), {
                        isFullscreen: l
                    } = (0, n.useContext)(V.s), {
                        userId: d,
                        isFavouriteGame: c,
                        removeFromFavourite: u,
                        addToFavourite: C
                    } = (0, n.useContext)(I.NL), m = (0, n.useRef)(null);
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(B, {
                            anchorElement: m.current,
                            open: s,
                            duration: 2,
                            onAutoClose: () => {
                                r(!1)
                            },
                            children: (0, h.jsx)(x.Z, {
                                id: "popper.signInToFavourite"
                            })
                        }), (0, h.jsx)(a.Z, {
                            title: (0, h.jsx)(x.Z, {
                                id: c ? "tooltip.removeFromFavorite" : "tooltip.addToFavorite"
                            }),
                            placement: "top",
                            children: (0, h.jsx)(i.lp, {
                                item: !0,
                                sx: {
                                    overflow: "visible"
                                },
                                children: (0, h.jsx)(Z.Z, {
                                    onClick: () => {
                                        if (t(!1), !d && l) return r(!0), void(0, y.Vn)();
                                        c ? u() : C(), d && (0, y.Vn)()
                                    },
                                    ref: m,
                                    clicked: !!c,
                                    customVariant: "favourite",
                                    children: (0, h.jsx)(o.ZP, {
                                        container: !0,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: (0, h.jsx)(o.ZP, {
                                            item: !0,
                                            children: (0, h.jsx)(i.SU, {
                                                isStaticFavourite: e,
                                                isClicked: !!c,
                                                children: (0, h.jsx)("span", {
                                                    children: c ? (0, h.jsx)(P, {}) : (0, h.jsx)(F, {})
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                };
            var W = s(37921),
                G = s(22690),
                q = s(58921);
            const _ = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.2 2H9.8C8.14315 2 6.8 3.34314 6.8 5V6.8H5C3.34314 6.8 2 8.14315 2 9.8V14.2C2 15.8569 3.34314 17.2 5 17.2H6.8V19C6.8 20.6569 8.14315 22 9.8 22H14.2C15.8569 22 17.2 20.6569 17.2 19V17.2H19C20.6569 17.2 22 15.8569 22 14.2V9.8C22 8.14315 20.6569 6.8 19 6.8H17.2V5C17.2 3.34314 15.8569 2 14.2 2ZM15.2 5C15.2 4.44772 14.7523 4 14.2 4H9.8C9.24772 4 8.8 4.44771 8.8 5V7.8C8.8 8.35228 8.35229 8.8 7.8 8.8H5C4.44772 8.8 4 9.24772 4 9.8V14.2C4 14.7523 4.44771 15.2 5 15.2H7.8C8.35228 15.2 8.8 15.6477 8.8 16.2V19C8.8 19.5523 9.24772 20 9.8 20H14.2C14.7523 20 15.2 19.5523 15.2 19V16.2C15.2 15.6477 15.6477 15.2 16.2 15.2H19C19.5523 15.2 20 14.7523 20 14.2V9.8C20 9.24772 19.5523 8.8 19 8.8H16.2C15.6477 8.8 15.2 8.35229 15.2 7.8V5ZM10.6465 7.41422C10.4512 7.21896 10.4512 6.90238 10.6465 6.70712L11 6.35356C11.5858 5.76777 12.5356 5.76777 13.1213 6.35356L13.4749 6.70712C13.6702 6.90238 13.6702 7.21896 13.4749 7.41422C13.2796 7.60948 12.9631 7.60948 12.7678 7.41422L12.4142 7.06066C12.219 6.8654 11.9024 6.8654 11.7071 7.06066L11.3536 7.41422C11.1583 7.60948 10.8417 7.60948 10.6465 7.41422ZM7.47486 13.4748C7.2796 13.6701 6.96302 13.6701 6.76775 13.4748L6.41419 13.1213C5.82841 12.5355 5.82841 11.5857 6.41419 10.9999L6.76775 10.6464C6.96302 10.4511 7.2796 10.4511 7.47486 10.6464C7.67012 10.8416 7.67012 11.1582 7.47486 11.3535L7.1213 11.707C6.92604 11.9023 6.92604 12.2189 7.1213 12.4141L7.47486 12.7677C7.67012 12.963 7.67012 13.2796 7.47486 13.4748ZM13.4749 17.4142C13.6701 17.219 13.6701 16.9024 13.4749 16.7071C13.2796 16.5119 12.963 16.5119 12.7678 16.7071L12.4142 17.0607C12.2189 17.2559 11.9024 17.2559 11.7071 17.0607L11.3535 16.7071C11.1583 16.5119 10.8417 16.5119 10.6464 16.7071C10.4512 16.9024 10.4512 17.219 10.6464 17.4142L11 17.7678C11.5858 18.3536 12.5355 18.3536 13.1213 17.7678L13.4749 17.4142ZM16.7297 10.6409C16.928 10.4488 17.2446 10.4538 17.4367 10.6522L17.7846 11.0113C18.361 11.6064 18.3458 12.556 17.7508 13.1324L17.3916 13.4803C17.1933 13.6724 16.8768 13.6673 16.6846 13.469C16.4925 13.2706 16.4975 12.9541 16.6959 12.762L17.055 12.4141C17.2534 12.222 17.2584 11.9054 17.0663 11.7071L16.7184 11.3479C16.5263 11.1496 16.5313 10.833 16.7297 10.6409Z"
                })
            })));
            var U = s(52797),
                $ = s(47472),
                Y = s(42780),
                X = s(49081);

            function Q(e) {
                return e.substring(2).toLowerCase()
            }
            const J = function(e) {
                const {
                    children: t,
                    disableReactTree: s = !1,
                    mouseEvent: o = "onClick",
                    onClickAway: i,
                    touchEvent: r = "onTouchEnd"
                } = e, l = n.useRef(!1), d = n.useRef(null), a = n.useRef(!1), c = n.useRef(!1);
                n.useEffect((() => (setTimeout((() => {
                    a.current = !0
                }), 0), () => {
                    a.current = !1
                })), []);
                const u = (0, $.Z)(t.ref, d),
                    C = (0, Y.Z)((e => {
                        const t = c.current;
                        c.current = !1;
                        const n = (0, X.Z)(d.current);
                        if (!a.current || !d.current || "clientX" in e && function(e, t) {
                                return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
                            }(e, n)) return;
                        if (l.current) return void(l.current = !1);
                        let o;
                        o = e.composedPath ? e.composedPath().indexOf(d.current) > -1 : !n.documentElement.contains(e.target) || d.current.contains(e.target), o || !s && t || i(e)
                    })),
                    x = e => s => {
                        c.current = !0;
                        const n = t.props[e];
                        n && n(s)
                    },
                    m = {
                        ref: u
                    };
                return !1 !== r && (m[r] = x(r)), n.useEffect((() => {
                    if (!1 !== r) {
                        const e = Q(r),
                            t = (0, X.Z)(d.current),
                            s = () => {
                                l.current = !0
                            };
                        return t.addEventListener(e, C), t.addEventListener("touchmove", s), () => {
                            t.removeEventListener(e, C), t.removeEventListener("touchmove", s)
                        }
                    }
                }), [C, r]), !1 !== o && (m[o] = x(o)), n.useEffect((() => {
                    if (!1 !== o) {
                        const e = Q(o),
                            t = (0, X.Z)(d.current);
                        return t.addEventListener(e, C), () => {
                            t.removeEventListener(e, C)
                        }
                    }
                }), [C, o]), (0, h.jsx)(n.Fragment, {
                    children: n.cloneElement(t, m)
                })
            };
            var ee = s(18104),
                te = s(32415),
                se = s(94891),
                ne = s(18088);
            const oe = 30,
                ie = (0, T.ZP)("div", {
                    shouldForwardProp: e => "hasMouse" !== e
                })((e => {
                    let {
                        hasMouse: t
                    } = e;
                    return {
                        height: "calc(100% - 15px)",
                        overflow: "hidden",
                        ...t && {
                            height: "calc(60% - 15px)",
                            marginTop: 15
                        }
                    }
                })),
                re = (0, T.ZP)("div")((e => {
                    let {
                        theme: {
                            spacing: t
                        }
                    } = e;
                    return {
                        height: `calc(100% - ${t(4)})`,
                        overflowY: "auto",
                        overflowX: "hidden",
                        marginTop: t(4),
                        padding: t(),
                        borderRadius: t(),
                        backgroundColor: w.D.black[70],
                        textAlign: "left",
                        paddingLeft: t(2),
                        color: w.D.white[60],
                        fontSize: 16,
                        fontWeight: 400,
                        "& h2": {
                            color: w.D.white[100],
                            fontWeight: 800,
                            textAlign: "center",
                            marginBlockStart: 0
                        },
                        "& h3": {
                            fontSize: 24,
                            color: w.D.white[100],
                            fontWeight: 800,
                            textAlign: "center",
                            marginBlockStart: 0
                        },
                        "&::-webkit-scrollbar": {
                            width: 7,
                            background: "rgb(29, 24, 40)"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: w.D.black[10]
                        }
                    }
                })),
                le = (0, T.ZP)("div")({
                    background: w.D.black[60],
                    padding: 0,
                    overflow: "-moz-scrollbars-vertical",
                    msOverflowY: "scroll",
                    overflowY: "scroll",
                    height: "calc(100% - 30px)",
                    alignItems: "baseline",
                    color: w.D.white[100],
                    fontSize: "0.8em",
                    "&::-webkit-scrollbar": {
                        width: 7,
                        background: "rgb(29, 24, 40)"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: w.D.black[10]
                    }
                }),
                de = (0, T.ZP)("div", {
                    shouldForwardProp: e => "activeKey" !== e
                })((e => {
                    let {
                        theme: {
                            palette: t
                        },
                        activeKey: s
                    } = e;
                    return {
                        display: "inline-block",
                        padding: "5px 10px",
                        border: "0.5px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: 4,
                        fontSize: "0.8em",
                        minWidth: 30,
                        textAlign: "center",
                        marginRight: 5,
                        marginTop: 3,
                        color: w.D.white[100],
                        "&:hover": {
                            background: s ? "rgba(104, 214, 243, 0.22)" : void 0
                        }
                    }
                })),
                ae = (0, T.ZP)("div")((() => ({
                    fontSize: "0.8em",
                    height: 58,
                    width: 93,
                    position: "relative",
                    margin: "auto",
                    "& div": {
                        position: "absolute",
                        bottom: 0,
                        height: 26,
                        width: 31
                    },
                    "& div:nth-child(1)": {
                        top: 0,
                        left: 34,
                        paddingLeft: 9
                    },
                    "& div:nth-child(2)": {
                        left: 0,
                        "&.arrow-key": {
                            paddingTop: 3,
                            paddingLeft: 9
                        }
                    },
                    "& div:nth-child(3)": {
                        left: 34,
                        paddingLeft: 9
                    },
                    "& div:nth-child(4)": {
                        left: 68
                    }
                }))),
                ce = (0, T.ZP)("div", {
                    shouldForwardProp: e => "isOdd" !== e
                })((e => {
                    let {
                        isOdd: t
                    } = e;
                    return {
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                            cursor: "default",
                            "& .keyboardLabel": {
                                color: w.D.white[100]
                            },
                            "& .control-keyboard-key": {
                                background: w.D.black[20]
                            }
                        },
                        ...t && {
                            background: w.D.black[70]
                        }
                    }
                })),
                he = (0, T.ZP)("div", {
                    shouldForwardProp: e => "isLabel" !== e && "active" !== e
                })((e => {
                    let {
                        isLabel: t,
                        active: s,
                        theme: n
                    } = e;
                    return {
                        alignItems: "center",
                        flex: 1,
                        padding: "3px 11px 6px 11px",
                        textAlign: "center",
                        "&:first-child": {
                            width: "60%"
                        },
                        "&:last-child": {
                            width: "40%",
                            paddingRight: 17
                        },
                        ...t && {
                            color: w.D.white[60],
                            fontWeight: 700,
                            fontSize: "1em"
                        },
                        ...s && {
                            color: w.D.white[100]
                        }
                    }
                })),
                ue = (0, T.ZP)("div")((() => ({
                    fontSize: "0.9em",
                    height: oe,
                    textTransform: "uppercase",
                    color: w.D.white[100]
                }))),
                Ce = (0, T.ZP)("path", {
                    shouldForwardProp: e => "active" !== e
                })((e => {
                    let {
                        active: t
                    } = e;
                    return {
                        fill: w.D.white[20],
                        "&:hover": { ...t && {
                                fill: w.D.white[50],
                                cursor: "default"
                            }
                        }
                    }
                })),
                xe = (0, T.ZP)("g", {
                    shouldForwardProp: e => "active" !== e
                })((e => {
                    let {
                        active: t
                    } = e;
                    return {
                        fill: w.D.white[20],
                        ...t && {
                            "&:hover": {
                                fill: w.D.white[50],
                                cursor: "default"
                            }
                        }
                    }
                })),
                me = e => {
                    let {
                        type: t,
                        pressedKey: s
                    } = e;
                    if ("arrows" !== t && "wasd" !== t) return null;
                    const n = "arrows" === t ? [{
                            key: "&#9650;",
                            pressedKey: "arrowup"
                        }, {
                            key: "&#9664;",
                            pressedKey: "arrowleft"
                        }, {
                            key: "&#9660;",
                            pressedKey: "arrowdown"
                        }, {
                            key: "&#9654;",
                            pressedKey: "arrowright"
                        }] : [{
                            key: "W",
                            pressedKey: "w"
                        }, {
                            key: "A",
                            pressedKey: "a"
                        }, {
                            key: "S",
                            pressedKey: "s"
                        }, {
                            key: "D",
                            pressedKey: "d"
                        }],
                        o = ("arrows" === t ? "arrow-key" : "") + " control-keyboard-key";
                    return (0, h.jsx)("div", {
                        children: (0, h.jsx)(ae, {
                            children: n.map(((e, t) => (0, h.jsx)(de, {
                                activeKey: s === e.pressedKey,
                                className: o,
                                dangerouslySetInnerHTML: {
                                    __html: e.key
                                }
                            }, t)))
                        })
                    })
                };
            class pe extends n.Component {
                constructor(e) {
                    super(e), this.handleKeyboardEvent = e => {
                        this.setState({
                            pressedKey: e && "keydown" === e.type ? e.key.toLowerCase() : null
                        })
                    }, this.checkPressedKey = e => null !== this.state.pressedKey && (this.state.pressedKey === e || this.state.pressedKey.includes("arrow") && e.includes("arrow")), this.checkedPressedKeys = e => e.some((e => this.checkPressedKey(e.toLowerCase()))), this.convertLabelToSymbol = e => {
                        if (e.toLowerCase().includes("arrow")) switch (e.toLowerCase()) {
                            case "arrowup":
                                return "&#9650;";
                            case "arrowdown":
                                return "&#9660;";
                            case "arrowleft":
                                return "&#9664;";
                            case "arrowright":
                                return "&#9654;";
                            default:
                                return e
                        }
                        return e
                    }, this.state = {
                        pressedKey: null
                    }
                }
                componentDidMount() {
                    this.props.detectPressedKeys && (document.addEventListener("keydown", this.handleKeyboardEvent, !1), document.addEventListener("keyup", this.handleKeyboardEvent, !1))
                }
                componentWillUnmount() {
                    this.props.detectPressedKeys && (document.removeEventListener("keydown", this.handleKeyboardEvent, !1), document.removeEventListener("keyup", this.handleKeyboardEvent, !1))
                }
                render() {
                    const {
                        controls: e,
                        hasMouse: t,
                        locale: s
                    } = this.props;
                    return (0, h.jsxs)(ie, {
                        hasMouse: t,
                        children: [(0, h.jsxs)(o.ZP, {
                            container: !0,
                            children: [(0, h.jsx)(o.ZP, {
                                item: !0,
                                xs: 4,
                                children: (0, h.jsx)(ue, {
                                    children: (0, h.jsx)(x.Z, {
                                        id: "gameControls.keyboard"
                                    })
                                })
                            }), (0, h.jsx)(o.ZP, {
                                item: !0,
                                xs: 7,
                                children: (0, h.jsx)("hr", {
                                    style: {
                                        border: "0.5px solid rgba(255, 255, 255, 0.07)"
                                    }
                                })
                            })]
                        }), (0, h.jsx)(le, {
                            children: e.map(((e, t) => {
                                const n = s || ne.ZW,
                                    o = e.label[n] || e.label[ne.ZW] || "";
                                return (0, h.jsxs)(ce, {
                                    isOdd: !!(t % 2),
                                    children: [(0, h.jsx)(he, {
                                        children: e.keys.map(((e, t) => "wasd" === e.toLowerCase() || "arrows" === e.toLowerCase() ? (0, h.jsx)(me, {
                                            type: e.toLowerCase(),
                                            pressedKey: this.state.pressedKey
                                        }, t) : (0, h.jsx)(de, {
                                            activeKey: !(!this.state.pressedKey || !this.checkPressedKey(e.toLowerCase())),
                                            className: "control-keyboard-key",
                                            dangerouslySetInnerHTML: {
                                                __html: this.convertLabelToSymbol(e)
                                            }
                                        }, t)))
                                    }), (0, h.jsx)(he, {
                                        className: "keyboardLabel",
                                        isLabel: !0,
                                        active: e.keys.some((e => this.checkPressedKey(e.toLowerCase()))),
                                        children: o
                                    })]
                                }, t)
                            }))
                        })]
                    })
                }
            }
            const ge = pe,
                ve = e => (0, h.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "80",
                    height: e.height,
                    viewBox: "0 0 80 116",
                    children: [(0, h.jsx)("path", {
                        id: "MouseSvgBorder",
                        fill: w.D.white[20],
                        d: "M76 53.438v23.46c0 19.356-16.2 35.192-36 35.192S4 96.254 4 76.899V39.1C4 20.44 19.062 5.054 37.889 3.977c.699-.04 1.402-.067 2.11-.067.635 0 1.264.017 1.89.049 18.93.969 34.11 16.406 34.11 35.142v14.337zM40 0c-.708 0-1.412.02-2.111.055C16.81 1.132-.001 18.234-.001 39.101v37.797c0 9.616 3.57 18.43 9.48 25.248 7.343 8.47 18.3 13.854 30.52 13.854 22.057 0 40-17.54 40-39.101V39.1C80 18.16 63.072 1.015 41.89.047A41.248 41.248 0 0 0 39.999 0z"
                    }), (0, h.jsx)(Ce, {
                        id: "MouseSvgRightButton",
                        opacity: e.hasRight ? 1 : .5,
                        active: e.hasRight,
                        d: "M41 8v23.156c4.56.87 8.008 4.733 8.008 9.355V54H72V39.524C72 22.735 58.263 8.969 41 8",
                        onMouseEnter: e.hasRight ? () => e.mouseEnter("right") : void 0,
                        onMouseLeave: e.hasRight ? () => e.mouseLeave() : void 0
                    }), (0, h.jsx)(Ce, {
                        id: "MouseSvgLeftButton",
                        opacity: e.hasLeft ? 1 : .5,
                        active: e.hasLeft,
                        d: "M37 8C20.832 9.078 8 22.798 8 39.519V54h21.67V40.506c0-4.546 3.141-8.354 7.33-9.308V8z",
                        onMouseEnter: e.hasLeft ? () => e.mouseEnter("left") : void 0,
                        onMouseLeave: e.hasLeft ? () => e.mouseLeave() : void 0
                    }), (0, h.jsxs)(xe, {
                        fillRule: "evenodd",
                        id: "MouseSvgMiddleButton",
                        opacity: e.hasMiddle ? 1 : .5,
                        active: e.hasMiddle,
                        onMouseEnter: e.hasMiddle ? () => e.mouseEnter("middle") : void 0,
                        onMouseLeave: e.hasMiddle ? () => e.mouseLeave() : void 0,
                        children: [(0, h.jsx)("path", {
                            d: "M39.5 35c-3.033 0-5.5 2.04-5.5 4.547V53.453C34 55.96 36.467 58 39.5 58s5.5-2.04 5.5-4.547V39.547C45 37.04 42.533 35 39.5 35"
                        }), (0, h.jsx)("path", {
                            stroke: "#716591",
                            strokeLinecap: "square",
                            d: "M40 68V51.5"
                        })]
                    }), e.hasLeft && (0, h.jsx)("text", {
                        fill: "#FFF",
                        style: {
                            fontSize: 13,
                            fontWeight: "bold",
                            pointerEvents: "none"
                        },
                        children: (0, h.jsx)("tspan", {
                            x: "21.322",
                            y: "32",
                            children: "1"
                        })
                    }), e.hasRight && (0, h.jsx)("text", {
                        fill: "#FFF",
                        style: {
                            fontSize: 13,
                            fontWeight: "bold",
                            pointerEvents: "none"
                        },
                        children: (0, h.jsx)("tspan", {
                            x: "51.6",
                            y: "32",
                            children: "2"
                        })
                    }), e.hasMiddle && (0, h.jsx)("text", {
                        fill: "#FFF",
                        style: {
                            fontSize: 13,
                            fontWeight: "bold",
                            pointerEvents: "none"
                        },
                        children: (0, h.jsx)("tspan", {
                            x: "36.873",
                            y: "83",
                            children: "3"
                        })
                    })]
                });
            class je extends n.Component {
                constructor(e) {
                    super(e), this.mouseEnterMouseControls = e => {
                        this.setState({
                            hoveredButton: e
                        })
                    }, this.mouseLeaveMouseControls = () => {
                        this.setState({
                            hoveredButton: null
                        })
                    }, this.mouseEnterLabelControls = e => {
                        this.setState({
                            hoveredLabel: e
                        })
                    }, this.mouseLeaveLabelControls = () => {
                        this.setState({
                            hoveredLabel: null
                        })
                    }, this.state = {
                        hoveredButton: null,
                        hoveredLabel: null
                    }
                }
                render() {
                    const {
                        controls: e,
                        locale: t
                    } = this.props;
                    return (0, h.jsxs)("div", {
                        style: {
                            height: "40%"
                        },
                        children: [(0, h.jsxs)(o.ZP, {
                            container: !0,
                            children: [(0, h.jsx)(o.ZP, {
                                item: !0,
                                xs: 3,
                                children: (0, h.jsx)(ue, {
                                    children: (0, h.jsx)(x.Z, {
                                        id: "gameControls.mouse"
                                    })
                                })
                            }), (0, h.jsx)(o.ZP, {
                                item: !0,
                                xs: 7,
                                children: (0, h.jsx)("hr", {
                                    style: {
                                        border: "0.5px solid rgba(255, 255, 255, 0.07)"
                                    }
                                })
                            })]
                        }), (0, h.jsxs)(o.ZP, {
                            container: !0,
                            alignItems: "center",
                            justifyContent: "center",
                            sx: {
                                backgroundColor: w.D.black[70],
                                color: "#fff",
                                fontSize: "0.8em",
                                height: "calc(100% - 30px)"
                            },
                            children: [(0, h.jsx)(o.ZP, {
                                item: !0,
                                xs: 6,
                                sx: {
                                    textAlign: "center",
                                    height: "100%",
                                    padding: "10px 0"
                                },
                                children: (0, h.jsx)(ve, {
                                    height: "100%",
                                    active: this.state.hoveredLabel,
                                    hasLeft: !!e.left,
                                    hasRight: !!e.right,
                                    hasMiddle: !!e.middle,
                                    mouseEnter: this.mouseEnterMouseControls,
                                    mouseLeave: this.mouseLeaveMouseControls
                                })
                            }), (0, h.jsx)(o.ZP, {
                                item: !0,
                                xs: 6,
                                children: Object.keys(e).map((s => {
                                    const n = t || ne.ZW,
                                        i = e[s],
                                        r = i[n] || i[ne.ZW] || "",
                                        l = this.state.hoveredButton === s;
                                    return (0, h.jsxs)(o.ZP, {
                                        container: !0,
                                        onMouseEnter: () => this.mouseEnterLabelControls(s),
                                        onMouseLeave: this.mouseLeaveLabelControls,
                                        sx: {
                                            marginBottom: "10px",
                                            "&:hover": {
                                                cursor: l ? "default" : void 0,
                                                color: l ? "secondary.light" : void 0
                                            }
                                        },
                                        children: [(0, h.jsx)(o.ZP, {
                                            item: !0,
                                            xs: 4,
                                            children: this.convertLabelToNumber(s)
                                        }), (0, h.jsx)(o.ZP, {
                                            item: !0,
                                            xs: 4,
                                            children: r
                                        })]
                                    }, s)
                                }))
                            })]
                        })]
                    })
                }
                convertLabelToNumber(e) {
                    switch (e) {
                        case "right":
                            return 2;
                        case "middle":
                            return 3;
                        default:
                            return 1
                    }
                }
            }
            const fe = je;
            var be = s(71917);
            const Ze = (0, T.ZP)("div")((() => ({
                    zIndex: 0,
                    overflow: "hidden",
                    margin: 20,
                    maxHeight: "65vh",
                    height: "min(65vh, 350px)",
                    position: "absolute",
                    right: 0,
                    bottom: be.ut.footerHeight,
                    maxWidth: "min(38%, 600px)",
                    minWidth: 491,
                    borderRadius: 20
                }))),
                we = e => {
                    let {
                        controls: t
                    } = e;
                    const s = se.Z.getLocale();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [t.mouse && (0, h.jsx)(fe, {
                            controls: t.mouse,
                            locale: s
                        }), t.keyboard && (0, h.jsx)(ge, {
                            controls: t.keyboard,
                            detectPressedKeys: !1,
                            hasMouse: !!t.mouse,
                            locale: s
                        })]
                    })
                },
                Le = n.forwardRef(((e, t) => {
                    let {
                        controls: s,
                        close: n,
                        showControlsEntered: o,
                        customStyles: i
                    } = e;
                    const r = () => void 0 !== s.mouse || void 0 !== s.keyboard,
                        l = () => !r() && !!s.text;
                    return (0, h.jsx)(J, {
                        onClickAway: e => {
                            const t = e;
                            t.path && t.path.some((e => "game-controls-toggle-button" === e.id)) || n && n()
                        },
                        children: (0, h.jsxs)(Ze, {
                            ref: t,
                            id: "game-controls",
                            style: o ? { ...i,
                                zIndex: 3
                            } : i,
                            children: [n && (0, h.jsx)(ee.Z, {
                                onClick: n,
                                disableRipple: !0,
                                sx: {
                                    position: "absolute",
                                    right: 12,
                                    top: l() ? 12 : void 0,
                                    "&:hover": {
                                        cursor: "pointer",
                                        opacity: .75
                                    }
                                },
                                children: (0, h.jsx)(L.Z, {
                                    style: {
                                        color: w.D.white[10],
                                        width: 24,
                                        height: 24
                                    }
                                })
                            }), (0, h.jsxs)(te.Z, {
                                sx: {
                                    background: "none",
                                    backgroundColor: w.D.black[70],
                                    padding: "15px",
                                    height: "100%"
                                },
                                children: [r() && (0, h.jsx)(we, {
                                    controls: s
                                }), l() && (0, h.jsx)(re, {
                                    children: (0, h.jsx)("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: s.text
                                        }
                                    })
                                })]
                            })]
                        })
                    })
                })),
                Ve = n.memo((() => {
                    const [e, t] = n.useState(!1), [s, o] = n.useState(!1), r = (0, l.NI)();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(() => {
                            const {
                                controls: n
                            } = r;
                            return (0, h.jsxs)(h.Fragment, {
                                children: [(0, h.jsx)(G.Z, { in: e,
                                    onEntered: () => {
                                        o(!0)
                                    },
                                    mountOnEnter: !0,
                                    unmountOnExit: !0,
                                    direction: "up",
                                    children: (0, h.jsx)(Le, {
                                        close: () => {
                                            t(!1), o(!1), (0, y.Vn)()
                                        },
                                        controls: n,
                                        showControlsEntered: s
                                    })
                                }), s && (0, h.jsx)(q.Z, {
                                    open: !0,
                                    invisible: !0,
                                    style: {
                                        zIndex: 2
                                    }
                                })]
                            })
                        })(), (0, h.jsx)(a.Z, {
                            title: (0, h.jsx)(x.Z, {
                                id: "tooltip.gameControls"
                            }),
                            placement: "top",
                            children: (0, h.jsx)(i.lp, {
                                withImage: !0,
                                item: !0,
                                id: "game-controls-toggle-button",
                                active: e,
                                children: (0, h.jsx)(Z.Z, {
                                    onClick: () => {
                                        e || U.GA.Instance.trackGameControlsOpened(), t(!e)
                                    },
                                    children: (0, h.jsx)(_, {})
                                })
                            })
                        })]
                    })
                })),
                ye = n.memo((e => (0, h.jsxs)(c.Z, { ...e,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: [(0, h.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V16C22 17.6569 20.6569 19 19 19H8.55397C8.37272 19 8.19489 19.0493 8.03947 19.1425L3.5145 21.8575C3.20556 22.0429 2.82081 22.0477 2.5073 21.8702C2.19379 21.6927 2 21.3603 2 21V5ZM5 4C4.44772 4 4 4.44772 4 5V19.2338L7.01048 17.4275C7.47673 17.1478 8.01024 17 8.55397 17H19C19.5523 17 20 16.5523 20 16V5C20 4.44772 19.5523 4 19 4H5Z"
                    }), (0, h.jsx)("path", {
                        d: "M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V7Z"
                    }), (0, h.jsx)("path", {
                        d: "M11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
                    })]
                }))),
                ke = n.memo((() => {
                    const {
                        isFullscreen: e,
                        disableFullscreen: t
                    } = n.useContext(V.s);
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(a.Z, {
                            title: (0, h.jsx)(x.Z, {
                                id: "tooltip.feedback"
                            }),
                            placement: "top",
                            children: (0, h.jsx)(i.lp, {
                                item: !0,
                                withImage: !0,
                                children: (0, h.jsx)(Z.Z, {
                                    onClick: () => {
                                        e && t(), b.Z.feedback("feedbackButton")
                                    },
                                    children: (0, h.jsx)(ye, {})
                                })
                            })
                        }), (0, h.jsx)(i.Gd, {})]
                    })
                })),
                Me = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: (0, h.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM6 8C6 6.89543 6.89543 6 8 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V8ZM16 18C17.1046 18 18 17.1046 18 16V13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16H13C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H16Z"
                    })
                }))),
                Ee = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                    viewBox: "0 0 24 24",
                    children: (0, h.jsx)("path", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17 18.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.4142 17L21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15L17 15C15.8954 15 15 15.8954 15 17L15 21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21L17 18.4142ZM7 5.58578V3C7 2.44772 7.44772 2 8 2C8.55229 2 9 2.44772 9 3V7C9 8.10457 8.10457 9 7 9H3C2.44772 9 2 8.55229 2 8C2 7.44772 2.44772 7 3 7H5.58579L2.2929 3.70711C1.90237 3.31658 1.90237 2.68342 2.2929 2.29289C2.68342 1.90237 3.31659 1.90237 3.70711 2.29289L7 5.58578ZM21 9C21.5523 9 22 8.55229 22 8C22 7.44772 21.5523 7 21 7L18.4142 7L21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.2929C21.3166 1.90237 20.6834 1.90237 20.2929 2.2929L17 5.58579L17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3L15 7C15 8.10457 15.8954 9 17 9L21 9ZM3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H5.58579L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L7 18.4142V21C7 21.5523 7.44772 22 8 22C8.55229 22 9 21.5523 9 21V17C9 15.8954 8.10457 15 7 15H3Z"
                    })
                }))),
                He = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: (0, h.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 2C2.89543 2 2 2.89543 2 4V8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8V5.41421L7.79289 9.20711C8.18342 9.59763 8.81658 9.59763 9.20711 9.20711C9.59763 8.81658 9.59763 8.18342 9.20711 7.79289L5.41421 4H8C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2H4ZM16 2C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4H18.5858L14.7929 7.79289C14.4024 8.18342 14.4024 8.81658 14.7929 9.20711C15.1834 9.59763 15.8166 9.59763 16.2071 9.20711L20 5.41421V8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8V4C22 2.89543 21.1046 2 20 2H16ZM16 20L18.5858 20L14.7929 16.2071C14.4024 15.8166 14.4024 15.1834 14.7929 14.7929C15.1834 14.4024 15.8166 14.4024 16.2071 14.7929L20 18.5858V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V20C22 21.1046 21.1046 22 20 22L16 22C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20ZM4 18.5858L7.79289 14.7929C8.18342 14.4024 8.81658 14.4024 9.20711 14.7929C9.59763 15.1834 9.59763 15.8166 9.20711 16.2071L5.41421 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H4C2.89543 22 2 21.1046 2 20V16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16L4 18.5858Z"
                    })
                })));
            var Se = s(72071),
                Ie = s(57985);
            const Pe = n.memo((() => {
                const {
                    isFullscreen: e,
                    disableFullscreen: t,
                    requestFullscreen: s
                } = n.useContext(V.s), {
                    theatreModeAvailable: o
                } = n.useContext(Ie.y), {
                    gameLoadStatus: d
                } = n.useContext(Se.r), c = r.Z.isEmbeddedExternally(), u = (0, l.NI)(), C = (0, W.v)(u.source), m = () => !e && o, p = () => {
                    const {
                        fullscreen: e
                    } = u;
                    return e && "NOT_SUPPORTED" !== e
                };
                return m() || p() ? (0, h.jsxs)(h.Fragment, {
                    children: [!(0, S.U)() && !c && !C && (0, h.jsx)(i.Gd, {}), m() && (0, h.jsx)(a.Z, {
                        title: (0, h.jsx)(x.Z, {
                            id: "tooltip.theatreMode"
                        }),
                        placement: "top",
                        children: (0, h.jsx)(i.lp, {
                            item: !0,
                            withImage: !0,
                            children: (0, h.jsx)(Z.Z, {
                                onClick: () => {
                                    b.Z.toggleTheatreMode()
                                },
                                children: (0, h.jsx)(Me, {})
                            })
                        })
                    }), p() ? (0, h.jsx)(a.Z, {
                        title: (0, h.jsx)(x.Z, {
                            id: e ? "tooltip.exitFullScreen" : "tooltip.fullScreen"
                        }),
                        placement: "top",
                        children: (0, h.jsx)(i.lp, {
                            item: !0,
                            withImage: !0,
                            children: (0, h.jsx)(Z.Z, {
                                disabled: "GAME_LOADED" !== d,
                                onClick: () => e ? t() : s(),
                                children: e ? (0, h.jsx)(Ee, {}) : (0, h.jsx)(He, {})
                            })
                        })
                    }) : null]
                }) : null
            }));
            var Fe = s(46307);
            const Re = n.memo((e => (0, h.jsx)(c.Z, { ...e,
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 9V4H9V9H4ZM2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10V3ZM6 6H7V7H6V6ZM6 17H7V18H6V17ZM20 16V13H22V16V17V18H18V20V22H16H15H13V20V18H15V20H16V18V16V13H18V16H20ZM15 13H13V15H15V13ZM17 6H18V7H17V6ZM22 20H20V22H22V20ZM4 15V20H9V15H4ZM3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM15 9V4H20V9H15ZM13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3Z",
                    fill: "white"
                })
            })));
            var Te = s(50009),
                Ae = s(45675);
            const Ne = n.lazy((() => Promise.all([s.e(6316), s.e(6515)]).then(s.bind(s, 56515)))),
                Ke = n.forwardRef(((e, t) => {
                    let {
                        close: s,
                        slideEntered: o
                    } = e;
                    const [i, d] = n.useState(null), a = (0, l.NI)();
                    n.useEffect((() => {
                        const e = r.Z.crazygamesLocalizedGameUrl(a.locale || ne.ZW, (0, Te.Z)()),
                            t = new URL(e);
                        t.searchParams.set("utm_source", "mobile-qr-code"), d(t.toString())
                    }), []);
                    return (0, h.jsx)(J, {
                        onClickAway: e => {
                            const t = e;
                            t.path && t.path.some((e => "qr-modal-toggle-button" === e.id)) || s && s()
                        },
                        children: (0, h.jsxs)(Ze, {
                            ref: t,
                            style: o ? {
                                zIndex: 3
                            } : void 0,
                            children: [s && (0, h.jsx)(ee.Z, {
                                onClick: s,
                                disableRipple: !0,
                                sx: {
                                    position: "absolute",
                                    right: 12,
                                    top: 12,
                                    "&:hover": {
                                        cursor: "pointer",
                                        opacity: .75
                                    }
                                },
                                children: (0, h.jsx)(L.Z, {
                                    style: {
                                        color: w.D.white[10],
                                        width: 24,
                                        height: 24
                                    }
                                })
                            }), (0, h.jsxs)("div", {
                                style: {
                                    background: "none",
                                    backgroundColor: w.D.black[70],
                                    padding: 25,
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                },
                                children: [i && (0, h.jsx)(Ne, {
                                    link: i
                                }), (0, h.jsx)("div", {
                                    style: {
                                        fontSize: 24,
                                        fontWeight: 700,
                                        textAlign: "center",
                                        lineHeight: "135%",
                                        marginBottom: 10
                                    },
                                    children: (0, h.jsx)(Ae.cC, {
                                        id: "qrMobileModal.title"
                                    })
                                }), (0, h.jsxs)("div", {
                                    style: {
                                        fontSize: 16,
                                        color: w.D.white[60],
                                        textAlign: "center",
                                        lineHeight: "135%"
                                    },
                                    children: [(0, h.jsx)(Ae.cC, {
                                        id: "qrMobileModal.subtitle",
                                        values: {
                                            gameTitle: (0, h.jsx)("span", {
                                                style: {
                                                    fontWeight: 700
                                                },
                                                children: a.gameName
                                            })
                                        }
                                    }), " ", a.iosFriendly && a.androidFriendly ? (0, h.jsx)(Ae.cC, {
                                        id: "qrMobileModal.availableAll"
                                    }) : a.iosFriendly ? (0, h.jsx)(Ae.cC, {
                                        id: "qrMobileModal.availableIOS"
                                    }) : a.androidFriendly ? (0, h.jsx)(Ae.cC, {
                                        id: "qrMobileModal.availableAndroid"
                                    }) : null]
                                })]
                            })]
                        })
                    })
                })),
                De = n.memo((() => {
                    const [e, t] = n.useState(!1), [s, o] = n.useState(!1);
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsxs)(h.Fragment, {
                            children: [(0, h.jsx)(G.Z, { in: e,
                                onEntered: () => {
                                    o(!0)
                                },
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                direction: "up",
                                children: (0, h.jsx)(Ke, {
                                    close: () => {
                                        t(!1), o(!1), (0, y.Vn)()
                                    },
                                    slideEntered: s
                                })
                            }), s && (0, h.jsx)(q.Z, {
                                open: !0,
                                invisible: !0,
                                style: {
                                    zIndex: 2
                                }
                            })]
                        }), (0, h.jsx)(a.Z, {
                            title: (0, h.jsx)(x.Z, {
                                id: "tooltip.QRPlayOnMobile"
                            }),
                            placement: "top",
                            children: (0, h.jsx)(i.lp, {
                                withImage: !0,
                                item: !0,
                                id: "qr-modal-toggle-button",
                                children: (0, h.jsx)(Z.Z, {
                                    onClick: () => {
                                        t(!e)
                                    },
                                    children: (0, h.jsx)(Re, {})
                                })
                            })
                        })]
                    })
                }));
            var ze = s(87308);
            const Be = n.memo((e => {
                let {
                    initialRating: t
                } = e;
                const s = r.Z.isEmbeddedExternally(),
                    n = (0, l.NI)(),
                    d = (0, W.v)(n.source),
                    a = () => "standalone-qa" !== n.source && "qa" !== n.source && (!(0, S.U)() && !s);
                return (0, h.jsxs)(o.ZP, {
                    item: !0,
                    container: !0,
                    justifyContent: "space-around",
                    alignItems: "center",
                    wrap: "nowrap",
                    children: [(0, h.jsx)(p, {}), a() && (0, h.jsx)(H, {
                        initialRating: t,
                        gameSlug: n.gameSlug
                    }), a() && (0, h.jsx)(O, {}), !s && !d && (0, h.jsx)(i.Gd, {}), (0, h.jsx)(Fe.Z, {}), !(0, S.U)() && !s && "en_US" === n.locale && (0, h.jsx)(ke, {}), !(0, S.U)() && n.controls && Object.keys(n.controls).length > 0 && (0, h.jsx)(Ve, {}), !(0, ze.uo)() && (n.androidFriendly || n.iosFriendly) && (0, h.jsx)(De, {}), (0, h.jsx)(Pe, {})]
                })
            }))
        }
    }
]);