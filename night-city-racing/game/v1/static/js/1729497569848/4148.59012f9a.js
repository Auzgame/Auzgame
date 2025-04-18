"use strict";
(self.webpackChunkcrazygames_gameframe =
  self.webpackChunkcrazygames_gameframe || []).push([
  [4148],
  {
    12871: (n, e, t) => {
      t.d(e, { Z: () => c });
      var o = t(47313),
        i = t(1168),
        r = t(47472),
        s = t(2678),
        l = t(89265),
        a = t(46417);
      const c = o.forwardRef(function (n, e) {
        const { children: t, container: c, disablePortal: d = !1 } = n,
          [u, p] = o.useState(null),
          f = (0, r.Z)(o.isValidElement(t) ? t.ref : null, e);
        return (
          (0, s.Z)(() => {
            d ||
              p(
                (function (n) {
                  return "function" === typeof n ? n() : n;
                })(c) || document.body
              );
          }, [c, d]),
          (0, s.Z)(() => {
            if (u && !d)
              return (
                (0, l.Z)(e, u),
                () => {
                  (0, l.Z)(e, null);
                }
              );
          }, [e, u, d]),
          d
            ? o.isValidElement(t)
              ? o.cloneElement(t, { ref: f })
              : t
            : (0, a.jsx)(o.Fragment, { children: u ? i.createPortal(t, u) : u })
        );
      });
    },
    53637: (n, e, t) => {
      t.d(e, { Z: () => r });
      var o = t(87462),
        i = t(43066);
      function r(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 ? arguments[2] : void 0;
        return (0, i.Z)(n)
          ? e
          : (0, o.Z)({}, e, { ownerState: (0, o.Z)({}, e.ownerState, t) });
      }
    },
    43066: (n, e, t) => {
      t.d(e, { Z: () => o });
      const o = function (n) {
        return "string" === typeof n;
      };
    },
    43107: (n, e, t) => {
      function o(n, e) {
        return "function" === typeof n ? n(e) : n;
      }
      t.d(e, { Z: () => o });
    },
    55229: (n, e, t) => {
      t.d(e, { Z: () => p });
      var o = t(87462),
        i = t(63366),
        r = t(47472),
        s = t(53637),
        l = t(83061);
      function a(n) {
        if (void 0 === n) return {};
        const e = {};
        return (
          Object.keys(n)
            .filter((e) => !(e.match(/^on[A-Z]/) && "function" === typeof n[e]))
            .forEach((t) => {
              e[t] = n[t];
            }),
          e
        );
      }
      function c(n) {
        const {
          getSlotProps: e,
          additionalProps: t,
          externalSlotProps: i,
          externalForwardedProps: r,
          className: s,
        } = n;
        if (!e) {
          const n = (0, l.Z)(
              null == r ? void 0 : r.className,
              null == i ? void 0 : i.className,
              s,
              null == t ? void 0 : t.className
            ),
            e = (0, o.Z)(
              {},
              null == t ? void 0 : t.style,
              null == r ? void 0 : r.style,
              null == i ? void 0 : i.style
            ),
            a = (0, o.Z)({}, t, r, i);
          return (
            n.length > 0 && (a.className = n),
            Object.keys(e).length > 0 && (a.style = e),
            { props: a, internalRef: void 0 }
          );
        }
        const c = (function (n) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            if (void 0 === n) return {};
            const t = {};
            return (
              Object.keys(n)
                .filter(
                  (t) =>
                    t.match(/^on[A-Z]/) &&
                    "function" === typeof n[t] &&
                    !e.includes(t)
                )
                .forEach((e) => {
                  t[e] = n[e];
                }),
              t
            );
          })((0, o.Z)({}, r, i)),
          d = a(i),
          u = a(r),
          p = e(c),
          f = (0, l.Z)(
            null == p ? void 0 : p.className,
            null == t ? void 0 : t.className,
            s,
            null == r ? void 0 : r.className,
            null == i ? void 0 : i.className
          ),
          m = (0, o.Z)(
            {},
            null == p ? void 0 : p.style,
            null == t ? void 0 : t.style,
            null == r ? void 0 : r.style,
            null == i ? void 0 : i.style
          ),
          v = (0, o.Z)({}, p, t, u, d);
        return (
          f.length > 0 && (v.className = f),
          Object.keys(m).length > 0 && (v.style = m),
          { props: v, internalRef: p.ref }
        );
      }
      var d = t(43107);
      const u = ["elementType", "externalSlotProps", "ownerState"];
      function p(n) {
        var e;
        const { elementType: t, externalSlotProps: l, ownerState: a } = n,
          p = (0, i.Z)(n, u),
          f = (0, d.Z)(l, a),
          { props: m, internalRef: v } = c(
            (0, o.Z)({}, p, { externalSlotProps: f })
          ),
          Z = (0, r.Z)(
            v,
            (0, r.Z)(
              null == f ? void 0 : f.ref,
              null == (e = n.additionalProps) ? void 0 : e.ref
            )
          );
        return (0, s.Z)(t, (0, o.Z)({}, m, { ref: Z }), a);
      }
    },
    58921: (n, e, t) => {
      t.d(e, { Z: () => Z });
      var o = t(63366),
        i = t(87462),
        r = t(47313),
        s = t(83061),
        l = t(21921),
        a = t(42379),
        c = t(32772),
        d = t(32410),
        u = t(32298);
      function p(n) {
        return (0, u.Z)("MuiBackdrop", n);
      }
      (0, t(77430).Z)("MuiBackdrop", ["root", "invisible"]);
      var f = t(46417);
      const m = [
          "children",
          "component",
          "components",
          "componentsProps",
          "className",
          "invisible",
          "open",
          "transitionDuration",
          "TransitionComponent",
        ],
        v = (0, a.ZP)("div", {
          name: "MuiBackdrop",
          slot: "Root",
          overridesResolver: (n, e) => {
            const { ownerState: t } = n;
            return [e.root, t.invisible && e.invisible];
          },
        })((n) => {
          let { ownerState: e } = n;
          return (0, i.Z)(
            {
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              right: 0,
              bottom: 0,
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              WebkitTapHighlightColor: "transparent",
            },
            e.invisible && { backgroundColor: "transparent" }
          );
        }),
        Z = r.forwardRef(function (n, e) {
          var t, r;
          const a = (0, c.Z)({ props: n, name: "MuiBackdrop" }),
            {
              children: u,
              component: Z = "div",
              components: y = {},
              componentsProps: g = {},
              className: h,
              invisible: E = !1,
              open: b,
              transitionDuration: x,
              TransitionComponent: k = d.Z,
            } = a,
            S = (0, o.Z)(a, m),
            w = (0, i.Z)({}, a, { component: Z, invisible: E }),
            P = ((n) => {
              const { classes: e, invisible: t } = n,
                o = { root: ["root", t && "invisible"] };
              return (0, l.Z)(o, p, e);
            })(w);
          return (0,
          f.jsx)(k, (0, i.Z)({ in: b, timeout: x }, S, { children: (0, f.jsx)(v, { "aria-hidden": !0, as: null != (t = y.Root) ? t : Z, className: (0, s.Z)(P.root, h), ownerState: (0, i.Z)({}, w, null == (r = g.root) ? void 0 : r.ownerState), classes: P, ref: e, children: u }) }));
        });
    },
    32410: (n, e, t) => {
      t.d(e, { Z: () => f });
      var o = t(87462),
        i = t(63366),
        r = t(47313),
        s = t(60596),
        l = t(62111),
        a = t(68999),
        c = t(2995),
        d = t(46417);
      const u = [
          "addEndListener",
          "appear",
          "children",
          "easing",
          "in",
          "onEnter",
          "onEntered",
          "onEntering",
          "onExit",
          "onExited",
          "onExiting",
          "style",
          "timeout",
          "TransitionComponent",
        ],
        p = { entering: { opacity: 1 }, entered: { opacity: 1 } },
        f = r.forwardRef(function (n, e) {
          const t = (0, l.Z)(),
            f = {
              enter: t.transitions.duration.enteringScreen,
              exit: t.transitions.duration.leavingScreen,
            },
            {
              addEndListener: m,
              appear: v = !0,
              children: Z,
              easing: y,
              in: g,
              onEnter: h,
              onEntered: E,
              onEntering: b,
              onExit: x,
              onExited: k,
              onExiting: S,
              style: w,
              timeout: P = f,
              TransitionComponent: N = s.ZP,
            } = n,
            C = (0, i.Z)(n, u),
            R = r.useRef(null),
            j = (0, c.Z)(Z.ref, e),
            T = (0, c.Z)(R, j),
            B = (n) => (e) => {
              if (n) {
                const t = R.current;
                void 0 === e ? n(t) : n(t, e);
              }
            },
            M = B(b),
            O = B((n, e) => {
              (0, a.n)(n);
              const o = (0, a.C)(
                { style: w, timeout: P, easing: y },
                { mode: "enter" }
              );
              (n.style.webkitTransition = t.transitions.create("opacity", o)),
                (n.style.transition = t.transitions.create("opacity", o)),
                h && h(n, e);
            }),
            L = B(E),
            z = B(S),
            A = B((n) => {
              const e = (0, a.C)(
                { style: w, timeout: P, easing: y },
                { mode: "exit" }
              );
              (n.style.webkitTransition = t.transitions.create("opacity", e)),
                (n.style.transition = t.transitions.create("opacity", e)),
                x && x(n);
            }),
            D = B(k);
          return (0, d.jsx)(
            N,
            (0, o.Z)(
              {
                appear: v,
                in: g,
                nodeRef: R,
                onEnter: O,
                onEntered: L,
                onEntering: M,
                onExit: A,
                onExited: D,
                onExiting: z,
                addEndListener: (n) => {
                  m && m(R.current, n);
                },
                timeout: P,
              },
              C,
              {
                children: (n, e) =>
                  r.cloneElement(
                    Z,
                    (0, o.Z)(
                      {
                        style: (0, o.Z)(
                          {
                            opacity: 0,
                            visibility: "exited" !== n || g ? void 0 : "hidden",
                          },
                          p[n],
                          w,
                          Z.props.style
                        ),
                        ref: T,
                      },
                      e
                    )
                  ),
              }
            )
          );
        });
    },
    33362: (n, e, t) => {
      var o;
      t.d(e, { Z: () => l });
      var i = t(47313);
      let r = 0;
      const s = (o || (o = t.t(i, 2))).useId;
      function l(n) {
        if (void 0 !== s) {
          const e = s();
          return null != n ? n : e;
        }
        return (function (n) {
          const [e, t] = i.useState(n),
            o = n || e;
          return (
            i.useEffect(() => {
              null == e && ((r += 1), t(`mui-${r}`));
            }, [e]),
            o
          );
        })(n);
      }
    },
  },
]);
