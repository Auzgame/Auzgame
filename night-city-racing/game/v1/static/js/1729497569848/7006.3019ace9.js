"use strict";
(self.webpackChunkcrazygames_gameframe =
  self.webpackChunkcrazygames_gameframe || []).push([
  [7006],
  {
    92386: (e, t, i) => {
      i.r(t), i.d(t, { default: () => O });
      var o = i(47313),
        n = i(63779),
        s = i(90831),
        r = i(77626),
        a = i(42379),
        l = i(32606),
        d = i(85541),
        c = i(46417);
      const h = o.memo((e) =>
          (0, c.jsx)(d.Z, {
            ...e,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            children: (0, c.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10.0001 6C8.52833 6 7.47159 6.70623 7.13224 7.4263C6.89681 7.92589 6.30095 8.14002 5.80136 7.90458C5.30178 7.66914 5.08764 7.07329 5.32308 6.5737C6.08197 4.96338 7.98852 4 10.0001 4C11.3001 4 12.5155 4.39395 13.4285 5.07868C14.3418 5.76364 15.0001 6.78625 15.0001 8C15.0001 10.0693 13.166 11.5082 11.1827 11.8887C11.11 11.9026 11.0522 11.9386 11.0206 11.972C11.0064 11.9871 11.0014 11.9974 11.0002 12.0001C11.0002 12.0003 11.0001 12.0004 11.0001 12.0005C10.9998 12.5526 10.5522 13 10.0001 13C9.44777 13 9.00005 12.5523 9.00005 12C9.00005 10.8579 9.90969 10.0964 10.8059 9.92451C12.2788 9.64194 13.0001 8.72954 13.0001 8C13.0001 7.5569 12.7629 7.0795 12.2285 6.67868C11.6937 6.27763 10.9092 6 10.0001 6ZM9 15C9 14.4477 9.44771 14 10 14H10.01C10.5623 14 11.01 14.4477 11.01 15C11.01 15.5523 10.5623 16 10.01 16H10C9.44771 16 9 15.5523 9 15Z",
            }),
          })
        ),
        p = (0, a.ZP)("div")((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: 20,
            [t.breakpoints.down(360)]: { marginBottom: 0 },
          };
        }),
        u = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontFamily: "Nunito",
          zIndex: 3,
          width: "100%",
          position: "absolute",
          fontSize: 12,
          padding: 7,
        },
        x = (0, a.ZP)("div")((e) => {
          let {
            theme: { breakpoints: t },
          } = e;
          return {
            ...u,
            color: l.D.white[80],
            fontSize: 14,
            padding: "8px 12px",
            [t.down(360)]: { fontSize: 12 },
          };
        }),
        g = (0, a.ZP)("div")((e) => {
          let {
            theme: { breakpoints: t },
          } = e;
          return {
            ...u,
            background: "rgba(104, 66, 255, 0.70)",
            backdropFilter: "blur(15px)",
            color: l.D.white[100],
            cursor: "pointer",
            "& span": {
              background: l.D.white[100],
              color: l.D.brand[100],
              fontWeight: 900,
              border: 0,
              padding: "2px 12px",
            },
            [t.down(360)]: { padding: 6, "& span": { padding: "2px 6px" } },
            "&:hover": {
              background: "rgba(104, 66, 255, 0.85)",
              "& span": { background: l.D.white[80], color: l.D.brand[100] },
            },
          };
        }),
        j = (0, a.ZP)("div")((e) => {
          let {
            theme: { spacing: t, breakpoints: i },
          } = e;
          return {
            ...u,
            fontSize: 12,
            fontWeight: 700,
            background: "rgba(104, 66, 255, 0.70)",
            backdropFilter: "blur(15px)",
            color: l.D.white[100],
            width: "100vw",
            padding: t(1),
            transition: "opacity 0.3s ease-out",
            "& button": { color: l.D.brand[100], fontSize: 14 },
            "& svg": { fill: "#fff", width: 20, height: 20 },
            [i.down(360)]: {
              fontSize: 12,
              "& button": { fontSize: 13 },
              "& svg": { width: 17, height: 17 },
            },
          };
        }),
        m = (0, a.ZP)("span")({
          borderRadius: 30,
          border: "1px solid rgba(255, 255, 255, 0.30)",
          padding: "4px 12px",
          marginLeft: "8px",
        }),
        b = (0, a.ZP)("div", {
          shouldForwardProp: (e) => "isBottomPadded" !== e,
        })((e) => {
          let { isBottomPadded: t } = e;
          return {
            ...u,
            cursor: "pointer",
            background: "rgba(89, 32, 42, 0.70)",
            backdropbackdropFilter: "blur(15px)",
            color: l.D.alert[40],
            ...(t && { marginBottom: 50 }),
            "& span": {
              background: l.D.alert[100],
              color: l.D.white[100],
              border: 0,
              padding: "2px 12px",
            },
            "&:hover": {
              background: "rgba(51, 14, 27, 0.70)",
              "& span": { background: l.D.alert[80] },
            },
          };
        }),
        f = (0, a.ZP)(h)({
          width: 16,
          marginLeft: 6,
          color: l.D.white[100],
          "&:hover": { cursor: "pointer", color: l.D.white[60] },
          "&:active": { color: l.D.white[20] },
        });
      var C = i(72071),
        w = i(8226),
        k = i(58684),
        v = i(82259);
      const y = (e) => {
          let { title: t, body: i, action: o } = e;
          return (0, c.jsx)(k.u_, {
            children: (0, c.jsxs)(k.hz, {
              sx: {
                backgroundColor: l.D.black[70],
                width: "min(600px, 70vw)",
                pb: 2.5,
              },
              children: [
                (0, c.jsx)(k.FK, {
                  onClick: () => o(!1),
                  children: (0, c.jsx)(w.Z, {
                    sx: { height: 20, width: 20, mt: "5px" },
                  }),
                }),
                (0, c.jsx)("h2", {
                  style: {
                    marginBlock: 0,
                    fontSize: 24,
                    fontWeight: 800,
                    marginBottom: 16,
                    marginTop: 20,
                    paddingLeft: 10,
                    lineHeight: "130%",
                  },
                  children: t,
                }),
                (0, c.jsx)("p", {
                  style: {
                    marginBlock: 0,
                    fontSize: 14,
                    fontWeight: 400,
                    color: l.D.white[60],
                  },
                  children: i,
                }),
                (0, c.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 15,
                  },
                  children: (0, c.jsx)(v.S, {
                    variant: "contained",
                    color: "purple",
                    height: 40,
                    style: { minWidth: 150, fontSize: 14 },
                    onClick: () => o(!1),
                    children: (0, c.jsx)(r.Z, { id: "aps.tooltip.button" }),
                  }),
                }),
              ],
            }),
          });
        },
        Z = () => {
          const { userId: e } = (0, o.useContext)(n.NL),
            { gameLoadStatus: t } = (0, o.useContext)(C.r),
            [i, s] = o.useState(!1);
          return e && "NOT_STARTED" === t
            ? i
              ? (0, c.jsx)(y, {
                  title: (0, c.jsx)(r.Z, {
                    id: "aps.tooltip.crazyAccount.title",
                  }),
                  body: (0, c.jsx)(r.Z, {
                    id: "aps.tooltip.crazyAccount.body",
                  }),
                  action: s,
                })
              : (0, c.jsx)(p, {
                  children: (0, c.jsxs)(x, {
                    sx: { "& svg": { color: l.D.success[100] } },
                    children: [
                      (0, c.jsx)("div", {
                        children: (0, c.jsx)(r.Z, {
                          id: "aps.info.base",
                          values: {
                            highlight: (0, c.jsx)("span", {
                              style: { color: l.D.success[100] },
                              children: (0, c.jsx)(r.Z, {
                                id: "aps.info.base.enabled",
                              }),
                            }),
                          },
                        }),
                      }),
                      (0, c.jsx)(f, { onClick: () => s(!0) }),
                    ],
                  }),
                })
            : null;
        };
      var D = i(16157),
        S = i(18104),
        T = i(38459),
        z = i(49889),
        L = i(87308),
        P = i(74082),
        E = i(13869),
        B = i(13741);
      const I = "apsnotice_hidden_day";
      function R(e) {
        B.Z.getInstance().sendEvent({
          type: "notificationAction",
          notificationSource: "dont-lose-progress",
          action: e,
        });
      }
      const W = () => {
          const [e, t] = o.useState(!1),
            { gameLoadStatus: i } = (0, o.useContext)(C.r),
            { gfInit: n } = (0, o.useContext)(E.R4),
            s = (0, L.uo)(),
            a = o.useRef(null),
            [d, h] = o.useState(!1),
            [p, u] = o.useState(!1),
            x = P.m.Instance.getItem(I),
            f = x ? Date.now() - Number(x) : null,
            y = "GAME_LOADED" === i && !d && !(!!f && f < 864e5),
            Z = () => {
              h(!0);
              const e = Date.now();
              P.m.Instance.setItem(I, `${e}`);
            };
          o.useEffect(() => {
            e && R("shown");
          }, [e]),
            o.useEffect(() => {
              let e, t;
              if (!s) return;
              const i = new IntersectionObserver((i) => {
                let [o] = i;
                o.isIntersecting &&
                  !p &&
                  (e ||
                    (e = window.setTimeout(() => {
                      u(!0),
                        t ||
                          (t = window.setTimeout(() => {
                            u(!1), h(!0);
                          }, 7e3));
                    }, 2e3)));
              });
              return (
                a && a.current && i.observe(a.current),
                function () {
                  i.disconnect(),
                    e && window.clearTimeout(e),
                    t && window.clearTimeout(t);
                }
              );
            }, [s, a, i]),
            o.useEffect(() => {
              var e;
              n &&
                null !== (e = n.data) &&
                void 0 !== e &&
                e.wasUserLoggedIn &&
                t(!0);
            }, [n]);
          const B = () => {
            (0, z.A)();
          };
          return "GAME_LOADED" !== i || s
            ? e && "NOT_STARTED" === i && !s
              ? (0, c.jsx)(k.u_, {
                  hideBackdrop: !0,
                  children: (0, c.jsxs)(k.hz, {
                    sx: { backgroundColor: l.D.black[70], width: 250, pb: 2.5 },
                    children: [
                      (0, c.jsx)(D.Z, {
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
                            backgroundColor: l.D.black[80],
                          },
                          "&:active": { backgroundColor: l.D.black[70] },
                        },
                        onClick: () => {
                          R("closed"), t(!1);
                        },
                        children: (0, c.jsx)(w.Z, {
                          sx: { height: 20, width: 20, mt: "5px" },
                        }),
                      }),
                      (0, c.jsx)("div", {
                        style: {
                          marginTop: 12,
                          marginBottom: 10,
                          height: 121,
                          width: "100%",
                        },
                        children: (0, c.jsx)("img", {
                          src: (0, T.Z)("/gameframe/astronaut.svg"),
                          alt: "Don't lose your progress!",
                        }),
                      }),
                      (0, c.jsx)("h2", {
                        style: {
                          marginBlock: 0,
                          fontSize: 16,
                          fontWeight: 700,
                          marginBottom: 4,
                          marginTop: 10,
                        },
                        children: (0, c.jsx)(r.Z, {
                          id: "aps.userWasLogged.title",
                        }),
                      }),
                      (0, c.jsx)("p", {
                        style: {
                          marginBlock: 0,
                          fontSize: 14,
                          fontWeight: 400,
                          color: l.D.white[60],
                        },
                        children: (0, c.jsx)(r.Z, {
                          id: "aps.userWasLogged.text",
                        }),
                      }),
                      (0, c.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: 15,
                        },
                        children: [
                          (0, c.jsx)(v.S, {
                            variant: "outlined",
                            color: "white",
                            height: 34,
                            style: { minWidth: 100, fontSize: 14 },
                            onClick: () => {
                              t(!1), R("ignored");
                            },
                            children: (0, c.jsx)(r.Z, {
                              id: "aps.userWasLogged.ignore",
                            }),
                          }),
                          (0, c.jsx)(v.S, {
                            variant: "contained",
                            height: 34,
                            style: { minWidth: 100, fontSize: 14 },
                            onClick: () => {
                              B(), R("login");
                            },
                            children: (0, c.jsx)(r.Z, {
                              id: "aps.userWasLogged.login",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : "NOT_STARTED" === i
              ? (0, c.jsx)(g, {
                  onClick: B,
                  children: (0, c.jsxs)("div", {
                    children: [
                      (0, c.jsx)(r.Z, { id: "aps.info.loginPrompt" }),
                      (0, c.jsx)(m, {
                        children: (0, c.jsx)(r.Z, {
                          id: "aps.info.loginPrompt.cta",
                        }),
                      }),
                    ],
                  }),
                })
              : "POST_PREROLL" === i
              ? (0, c.jsx)(b, {
                  isBottomPadded: s,
                  onClick: B,
                  children: (0, c.jsxs)("div", {
                    children: [
                      (0, c.jsx)(r.Z, { id: "aps.splash.loginPrompt" }),
                      (0, c.jsx)(m, {
                        children: (0, c.jsx)(r.Z, {
                          id: "aps.splash.loginPrompt.cta",
                        }),
                      }),
                    ],
                  }),
                })
              : y
              ? (0, c.jsxs)(j, {
                  style: {
                    opacity: p ? 1 : 0,
                    pointerEvents: p ? void 0 : "none",
                  },
                  ref: a,
                  children: [
                    (0, c.jsxs)("div", {
                      style: { display: "flex" },
                      children: [
                        (0, c.jsx)(r.Z, { id: "aps.info.loginPrompt" }),
                        (0, c.jsx)(v.S, {
                          variant: "contained",
                          color: "white",
                          height: 20,
                          onClick: B,
                          sx: { ml: 1 },
                          children: (0, c.jsx)(r.Z, {
                            id: "aps.info.loginPrompt.cta",
                          }),
                        }),
                      ],
                    }),
                    (0, c.jsx)(S.Z, {
                      onClick: Z,
                      disableRipple: !0,
                      sx: { position: "absolute", right: 0 },
                      children: (0, c.jsx)(w.Z, {}),
                    }),
                  ],
                })
              : null
            : null;
        },
        _ = () => {
          const { gameLoadStatus: e } = (0, o.useContext)(C.r),
            t = (0, L.uo)(),
            [i, n] = o.useState(!1);
          return "NOT_STARTED" !== e || t
            ? null
            : i
            ? (0, c.jsx)(y, {
                title: (0, c.jsx)(r.Z, { id: "aps.tooltip.account.title" }),
                body: (0, c.jsx)(r.Z, { id: "aps.tooltip.account.body" }),
                action: n,
              })
            : (0, c.jsx)(p, {
                children: (0, c.jsxs)(x, {
                  children: [
                    (0, c.jsx)("div", {
                      children: (0, c.jsx)(r.Z, {
                        id: "aps.info.ingame",
                        values: {
                          highlight: (0, c.jsx)("span", {
                            style: { color: l.D.warning[100] },
                            children: (0, c.jsx)(r.Z, {
                              id: "aps.info.ingame.highlight",
                            }),
                          }),
                        },
                      }),
                    }),
                    (0, c.jsx)(f, { onClick: () => n(!0) }),
                  ],
                }),
              });
        },
        A = () => {
          const { gameLoadStatus: e } = (0, o.useContext)(C.r),
            [t, i] = o.useState(!1);
          return "NOT_STARTED" !== e
            ? null
            : t
            ? (0, c.jsx)(y, {
                title: (0, c.jsx)(r.Z, { id: "aps.tooltip.locally.title" }),
                body: (0, c.jsx)(r.Z, { id: "aps.tooltip.locally.body" }),
                action: i,
              })
            : (0, c.jsx)(p, {
                children: (0, c.jsxs)(x, {
                  children: [
                    (0, c.jsx)("div", {
                      children: (0, c.jsx)(r.Z, {
                        id: "aps.info.base",
                        values: {
                          highlight: (0, c.jsx)("span", {
                            style: { color: l.D.warning[100] },
                            children: (0, c.jsx)(r.Z, {
                              id: "aps.info.base.local",
                            }),
                          }),
                        },
                      }),
                    }),
                    (0, c.jsx)(f, { onClick: () => i(!0) }),
                  ],
                }),
              });
        };
      var N = i(56075);
      const O = () => {
        const { userId: e, hasUserLoaded: t } = (0, o.useContext)(n.NL),
          i = (0, N.J5)(),
          r = (0, N.E4)();
        return "ingame" === i
          ? (0, c.jsx)(_, {})
          : "local" === i
          ? (0, c.jsx)(A, {})
          : "cloud" === i &&
            t &&
            ("aps" !== r ||
              (() => {
                const e = (0, s.NI)().loader;
                return (
                  !!(0, N.$9)() &&
                  (s.h4.includes(e)
                    ? (0, N.x3)()
                    : "ruffle" === e
                    ? (0, N.o5)()
                    : !!s.Fw.includes(e) && (0, N.v9)())
                );
              })())
          ? e
            ? (0, c.jsx)(Z, {})
            : (0, c.jsx)(W, {})
          : null;
      };
    },
  },
]);
