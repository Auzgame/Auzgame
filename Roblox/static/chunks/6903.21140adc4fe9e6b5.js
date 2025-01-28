(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6903], {
        24955: (t, e, i) => {
            "use strict";
            i.d(e, {
                A: () => h
            });
            var n = i(31677),
                o = i(88004),
                r = i(75444),
                s = i(7337),
                a = {
                    screenX: NaN,
                    screenY: NaN,
                    clientX: NaN,
                    clientY: NaN,
                    pageX: NaN,
                    pageY: NaN,
                    elementX: NaN,
                    elementY: NaN,
                    elementH: NaN,
                    elementW: NaN,
                    elementPosX: NaN,
                    elementPosY: NaN
                };

            function h(t) {
                var e = (0, n.__read)((0, o.A)(a), 2),
                    i = e[0],
                    h = e[1];
                return (0, r.A)("mousemove", function(e) {
                    var i = e.screenX,
                        n = e.screenY,
                        o = e.clientX,
                        r = e.clientY,
                        a = e.pageX,
                        l = e.pageY,
                        p = {
                            screenX: i,
                            screenY: n,
                            clientX: o,
                            clientY: r,
                            pageX: a,
                            pageY: l,
                            elementX: NaN,
                            elementY: NaN,
                            elementH: NaN,
                            elementW: NaN,
                            elementPosX: NaN,
                            elementPosY: NaN
                        },
                        u = (0, s.e)(t);
                    if (u) {
                        var d = u.getBoundingClientRect(),
                            c = d.left,
                            f = d.top,
                            g = d.width,
                            m = d.height;
                        p.elementPosX = c + window.pageXOffset, p.elementPosY = f + window.pageYOffset, p.elementX = a - p.elementPosX, p.elementY = l - p.elementPosY, p.elementW = g, p.elementH = m
                    }
                    h(p)
                }, {
                    target: function() {
                        return document
                    }
                }), i
            }
        },
        88004: (t, e, i) => {
            "use strict";
            i.d(e, {
                A: () => s
            });
            var n = i(31677),
                o = i(65751),
                r = i(59640);
            let s = function(t) {
                var e = (0, o.useRef)(0),
                    i = (0, n.__read)((0, o.useState)(t), 2),
                    s = i[0],
                    a = i[1],
                    h = (0, o.useCallback)(function(t) {
                        cancelAnimationFrame(e.current), e.current = requestAnimationFrame(function() {
                            a(t)
                        })
                    }, []);
                return (0, r.A)(function() {
                    cancelAnimationFrame(e.current)
                }), [s, h]
            }
        },
        55991: (t, e, i) => {
            "use strict";
            i.d(e, {
                A: () => N
            });
            var n = i(31677),
                o = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var i = -1;
                        return t.some(function(t, n) {
                            return t[0] === e && (i = n, !0)
                        }), i
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var i = t(this.__entries__, e),
                                n = this.__entries__[i];
                            return n && n[1]
                        }, e.prototype.set = function(e, i) {
                            var n = t(this.__entries__, e);
                            ~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i])
                        }, e.prototype.delete = function(e) {
                            var i = this.__entries__,
                                n = t(i, e);
                            ~n && i.splice(n, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var i = 0, n = this.__entries__; i < n.length; i++) {
                                var o = n[i];
                                t.call(e, o[1], o[0])
                            }
                        }, e
                    }()
                }(),
                r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                s = void 0 !== i.g && i.g.Math === Math ? i.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                a = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(s) : function(t) {
                    return setTimeout(function() {
                        return t(Date.now())
                    }, 1e3 / 60)
                },
                h = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                p = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var i = !1,
                                n = !1,
                                o = 0;

                            function r() {
                                i && (i = !1, t()), n && h()
                            }

                            function s() {
                                a(r)
                            }

                            function h() {
                                var t = Date.now();
                                if (i) {
                                    if (t - o < 2) return;
                                    n = !0
                                } else i = !0, n = !1, setTimeout(s, 20);
                                o = t
                            }
                            return h
                        }(this.refresh.bind(this), 0)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            i = e.indexOf(t);
                        ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter(function(t) {
                            return t.gatherActive(), t.hasActive()
                        });
                        return t.forEach(function(t) {
                            return t.broadcastActive()
                        }), t.length > 0
                    }, t.prototype.connect_ = function() {
                        r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            i = void 0 === e ? "" : e;
                        h.some(function(t) {
                            return !!~i.indexOf(t)
                        }) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                u = function(t, e) {
                    for (var i = 0, n = Object.keys(e); i < n.length; i++) {
                        var o = n[i];
                        Object.defineProperty(t, o, {
                            value: e[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                d = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || s
                },
                c = b(0, 0, 0, 0);

            function f(t) {
                return parseFloat(t) || 0
            }

            function g(t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                return e.reduce(function(e, i) {
                    return e + f(t["border-" + i + "-width"])
                }, 0)
            }
            var m = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof d(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof d(t).SVGElement && "function" == typeof t.getBBox
            };

            function b(t, e, i, n) {
                return {
                    x: t,
                    y: e,
                    width: i,
                    height: n
                }
            }
            var v = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = function(t) {
                            if (!r) return c;
                            if (m(t)) {
                                var e;
                                return b(0, 0, (e = t.getBBox()).width, e.height)
                            }
                            return function(t) {
                                var e = t.clientWidth,
                                    i = t.clientHeight;
                                if (!e && !i) return c;
                                var n = d(t).getComputedStyle(t),
                                    o = function(t) {
                                        for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                                            var o = n[i],
                                                r = t["padding-" + o];
                                            e[o] = f(r)
                                        }
                                        return e
                                    }(n),
                                    r = o.left + o.right,
                                    s = o.top + o.bottom,
                                    a = f(n.width),
                                    h = f(n.height);
                                if ("border-box" === n.boxSizing && (Math.round(a + r) !== e && (a -= g(n, "left", "right") + r), Math.round(h + s) !== i && (h -= g(n, "top", "bottom") + s)), t !== d(t).document.documentElement) {
                                    var l = Math.round(a + r) - e,
                                        p = Math.round(h + s) - i;
                                    1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(p) && (h -= p)
                                }
                                return b(o.left, o.top, a, h)
                            }(t)
                        }(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                y = function(t, e) {
                    var i, n, o, r, s, a = (i = e.x, n = e.y, o = e.width, r = e.height, u(s = Object.create(("undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype), {
                        x: i,
                        y: n,
                        width: o,
                        height: r,
                        top: n,
                        right: i + o,
                        bottom: r + n,
                        left: i
                    }), s);
                    u(this, {
                        target: t,
                        contentRect: a
                    })
                },
                w = function() {
                    function t(t, e, i) {
                        if (this.activeObservations_ = [], this.observations_ = new o, "function" != typeof t) throw TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof d(t).Element)) throw TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new v(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof d(t).Element)) throw TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach(function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        })
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map(function(t) {
                                    return new y(t.target, t.broadcastRect())
                                });
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                S = "undefined" != typeof WeakMap ? new WeakMap : new o,
                x = function t(e) {
                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                    var i = new w(e, p.getInstance(), this);
                    S.set(this, i)
                };
            ["observe", "unobserve", "disconnect"].forEach(function(t) {
                x.prototype[t] = function() {
                    var e;
                    return (e = S.get(this))[t].apply(e, arguments)
                }
            });
            var z = void 0 !== s.ResizeObserver ? s.ResizeObserver : x,
                D = i(88004),
                _ = i(7337),
                E = i(35192),
                P = i(40643),
                O = i(65751),
                R = (0, i(82170).A)(O.useLayoutEffect),
                M = E.A ? R : P.A;
            let N = function(t) {
                var e = (0, n.__read)((0, D.A)(function() {
                        var e = (0, _.e)(t);
                        return e ? {
                            width: e.clientWidth,
                            height: e.clientHeight
                        } : void 0
                    }), 2),
                    i = e[0],
                    o = e[1];
                return M(function() {
                    var e = (0, _.e)(t);
                    if (e) {
                        var i = new z(function(t) {
                            t.forEach(function(t) {
                                var e = t.target;
                                o({
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                })
                            })
                        });
                        return i.observe(e),
                            function() {
                                i.disconnect()
                            }
                    }
                }, [], t), i
            }
        },
        79223: (t, e, i) => {
            "use strict";

            function n() {
                for (var t, e, i = 0, n = ""; i < arguments.length;)(t = arguments[i++]) && (e = function t(e) {
                    var i, n, o = "";
                    if ("string" == typeof e || "number" == typeof e) o += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (i = 0; i < e.length; i++) e[i] && (n = t(e[i])) && (o && (o += " "), o += n);
                        else
                            for (i in e) e[i] && (o && (o += " "), o += i)
                    }
                    return o
                }(t)) && (n && (n += " "), n += e);
                return n
            }
            i.r(e), i.d(e, {
                clsx: () => n,
                default: () => o
            });
            let o = n
        },
        74658: (t, e, i) => {
            "use strict";
            var n = i(32477);

            function o() {}

            function r() {}
            r.resetWarningCache = o, t.exports = function() {
                function t(t, e, i, o, r, s) {
                    if (s !== n) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var i = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: r,
                    resetWarningCache: o
                };
                return i.PropTypes = i, i
            }
        },
        8022: (t, e, i) => {
            t.exports = i(74658)()
        },
        32477: t => {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        78429: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "DraggableCore", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), e.default = void 0;
            var n = function(t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var i = c(void 0);
                    if (i && i.has(t)) return i.get(t);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in t)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
                            var s = o ? Object.getOwnPropertyDescriptor(t, r) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, r, s) : n[r] = t[r]
                        }
                    return n.default = t, i && i.set(t, n), n
                }(i(65751)),
                o = d(i(8022)),
                r = d(i(74710)),
                s = d(i(79223)),
                a = i(96353),
                h = i(63332),
                l = i(22402),
                p = d(i(13018)),
                u = d(i(95470));

            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    i = new WeakMap;
                return (c = function(t) {
                    return t ? i : e
                })(t)
            }

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function g(t, e, i) {
                var n;
                return (e = "symbol" == typeof(n = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string")) ? n : String(n)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            class m extends n.Component {
                static getDerivedStateFromProps(t, e) {
                    let {
                        position: i
                    } = t, {
                        prevPropsPosition: n
                    } = e;
                    return i && (!n || i.x !== n.x || i.y !== n.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", {
                        position: i,
                        prevPropsPosition: n
                    }), {
                        x: i.x,
                        y: i.y,
                        prevPropsPosition: { ...i
                        }
                    }) : null
                }
                constructor(t) {
                    super(t), g(this, "onDragStart", (t, e) => {
                        if ((0, u.default)("Draggable: onDragStart: %j", e), !1 === this.props.onStart(t, (0, h.createDraggableData)(this, e))) return !1;
                        this.setState({
                            dragging: !0,
                            dragged: !0
                        })
                    }), g(this, "onDrag", (t, e) => {
                        if (!this.state.dragging) return !1;
                        (0, u.default)("Draggable: onDrag: %j", e);
                        let i = (0, h.createDraggableData)(this, e),
                            n = {
                                x: i.x,
                                y: i.y,
                                slackX: 0,
                                slackY: 0
                            };
                        if (this.props.bounds) {
                            let {
                                x: t,
                                y: e
                            } = n;
                            n.x += this.state.slackX, n.y += this.state.slackY;
                            let [o, r] = (0, h.getBoundPosition)(this, n.x, n.y);
                            n.x = o, n.y = r, n.slackX = this.state.slackX + (t - n.x), n.slackY = this.state.slackY + (e - n.y), i.x = n.x, i.y = n.y, i.deltaX = n.x - this.state.x, i.deltaY = n.y - this.state.y
                        }
                        if (!1 === this.props.onDrag(t, i)) return !1;
                        this.setState(n)
                    }), g(this, "onDragStop", (t, e) => {
                        if (!this.state.dragging || !1 === this.props.onStop(t, (0, h.createDraggableData)(this, e))) return !1;
                        (0, u.default)("Draggable: onDragStop: %j", e);
                        let i = {
                            dragging: !1,
                            slackX: 0,
                            slackY: 0
                        };
                        if (this.props.position) {
                            let {
                                x: t,
                                y: e
                            } = this.props.position;
                            i.x = t, i.y = e
                        }
                        this.setState(i)
                    }), this.state = {
                        dragging: !1,
                        dragged: !1,
                        x: t.position ? t.position.x : t.defaultPosition.x,
                        y: t.position ? t.position.y : t.defaultPosition.y,
                        prevPropsPosition: { ...t.position
                        },
                        slackX: 0,
                        slackY: 0,
                        isElementSVG: !1
                    }, t.position && !(t.onDrag || t.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")
                }
                componentDidMount() {
                    void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
                        isElementSVG: !0
                    })
                }
                componentWillUnmount() {
                    this.setState({
                        dragging: !1
                    })
                }
                findDOMNode() {
                    var t, e;
                    return null !== (t = null === (e = this.props) || void 0 === e || null === (e = e.nodeRef) || void 0 === e ? void 0 : e.current) && void 0 !== t ? t : r.default.findDOMNode(this)
                }
                render() {
                    let {
                        axis: t,
                        bounds: e,
                        children: i,
                        defaultPosition: o,
                        defaultClassName: r,
                        defaultClassNameDragging: l,
                        defaultClassNameDragged: u,
                        position: d,
                        positionOffset: c,
                        scale: g,
                        ...m
                    } = this.props, b = {}, v = null, y = !d || this.state.dragging, w = d || o, S = {
                        x: (0, h.canDragX)(this) && y ? this.state.x : w.x,
                        y: (0, h.canDragY)(this) && y ? this.state.y : w.y
                    };
                    this.state.isElementSVG ? v = (0, a.createSVGTransform)(S, c) : b = (0, a.createCSSTransform)(S, c);
                    let x = (0, s.default)(i.props.className || "", r, {
                        [l]: this.state.dragging,
                        [u]: this.state.dragged
                    });
                    return n.createElement(p.default, f({}, m, {
                        onStart: this.onDragStart,
                        onDrag: this.onDrag,
                        onStop: this.onDragStop
                    }), n.cloneElement(n.Children.only(i), {
                        className: x,
                        style: { ...i.props.style,
                            ...b
                        },
                        transform: v
                    }))
                }
            }
            e.default = m, g(m, "displayName", "Draggable"), g(m, "propTypes", { ...p.default.propTypes,
                axis: o.default.oneOf(["both", "x", "y", "none"]),
                bounds: o.default.oneOfType([o.default.shape({
                    left: o.default.number,
                    right: o.default.number,
                    top: o.default.number,
                    bottom: o.default.number
                }), o.default.string, o.default.oneOf([!1])]),
                defaultClassName: o.default.string,
                defaultClassNameDragging: o.default.string,
                defaultClassNameDragged: o.default.string,
                defaultPosition: o.default.shape({
                    x: o.default.number,
                    y: o.default.number
                }),
                positionOffset: o.default.shape({
                    x: o.default.oneOfType([o.default.number, o.default.string]),
                    y: o.default.oneOfType([o.default.number, o.default.string])
                }),
                position: o.default.shape({
                    x: o.default.number,
                    y: o.default.number
                }),
                className: l.dontSetMe,
                style: l.dontSetMe,
                transform: l.dontSetMe
            }), g(m, "defaultProps", { ...p.default.defaultProps,
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: {
                    x: 0,
                    y: 0
                },
                scale: 1
            })
        },
        13018: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var i = u(void 0);
                    if (i && i.has(t)) return i.get(t);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in t)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
                            var s = o ? Object.getOwnPropertyDescriptor(t, r) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, r, s) : n[r] = t[r]
                        }
                    return n.default = t, i && i.set(t, n), n
                }(i(65751)),
                o = p(i(8022)),
                r = p(i(74710)),
                s = i(96353),
                a = i(63332),
                h = i(22402),
                l = p(i(95470));

            function p(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    i = new WeakMap;
                return (u = function(t) {
                    return t ? i : e
                })(t)
            }

            function d(t, e, i) {
                var n;
                return (e = "symbol" == typeof(n = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string")) ? n : String(n)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            let c = {
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        stop: "touchend"
                    },
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        stop: "mouseup"
                    }
                },
                f = c.mouse;
            class g extends n.Component {
                constructor() {
                    super(...arguments), d(this, "dragging", !1), d(this, "lastX", NaN), d(this, "lastY", NaN), d(this, "touchIdentifier", null), d(this, "mounted", !1), d(this, "handleDragStart", t => {
                        if (this.props.onMouseDown(t), !this.props.allowAnyClick && "number" == typeof t.button && 0 !== t.button) return !1;
                        let e = this.findDOMNode();
                        if (!e || !e.ownerDocument || !e.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
                        let {
                            ownerDocument: i
                        } = e;
                        if (this.props.disabled || !(t.target instanceof i.defaultView.Node) || this.props.handle && !(0, s.matchesSelectorAndParentsTo)(t.target, this.props.handle, e) || this.props.cancel && (0, s.matchesSelectorAndParentsTo)(t.target, this.props.cancel, e)) return;
                        "touchstart" === t.type && t.preventDefault();
                        let n = (0, s.getTouchIdentifier)(t);
                        this.touchIdentifier = n;
                        let o = (0, a.getControlPosition)(t, n, this);
                        if (null == o) return;
                        let {
                            x: r,
                            y: h
                        } = o, p = (0, a.createCoreData)(this, r, h);
                        (0, l.default)("DraggableCore: handleDragStart: %j", p), (0, l.default)("calling", this.props.onStart), !1 !== this.props.onStart(t, p) && !1 !== this.mounted && (this.props.enableUserSelectHack && (0, s.addUserSelectStyles)(i), this.dragging = !0, this.lastX = r, this.lastY = h, (0, s.addEvent)(i, f.move, this.handleDrag), (0, s.addEvent)(i, f.stop, this.handleDragStop))
                    }), d(this, "handleDrag", t => {
                        let e = (0, a.getControlPosition)(t, this.touchIdentifier, this);
                        if (null == e) return;
                        let {
                            x: i,
                            y: n
                        } = e;
                        if (Array.isArray(this.props.grid)) {
                            let t = i - this.lastX,
                                e = n - this.lastY;
                            if ([t, e] = (0, a.snapToGrid)(this.props.grid, t, e), !t && !e) return;
                            i = this.lastX + t, n = this.lastY + e
                        }
                        let o = (0, a.createCoreData)(this, i, n);
                        if ((0, l.default)("DraggableCore: handleDrag: %j", o), !1 === this.props.onDrag(t, o) || !1 === this.mounted) {
                            try {
                                this.handleDragStop(new MouseEvent("mouseup"))
                            } catch (e) {
                                let t = document.createEvent("MouseEvents");
                                t.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(t)
                            }
                            return
                        }
                        this.lastX = i, this.lastY = n
                    }), d(this, "handleDragStop", t => {
                        if (!this.dragging) return;
                        let e = (0, a.getControlPosition)(t, this.touchIdentifier, this);
                        if (null == e) return;
                        let {
                            x: i,
                            y: n
                        } = e;
                        if (Array.isArray(this.props.grid)) {
                            let t = i - this.lastX || 0,
                                e = n - this.lastY || 0;
                            [t, e] = (0, a.snapToGrid)(this.props.grid, t, e), i = this.lastX + t, n = this.lastY + e
                        }
                        let o = (0, a.createCoreData)(this, i, n);
                        if (!1 === this.props.onStop(t, o) || !1 === this.mounted) return !1;
                        let r = this.findDOMNode();
                        r && this.props.enableUserSelectHack && (0, s.removeUserSelectStyles)(r.ownerDocument), (0, l.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, r && ((0, l.default)("DraggableCore: Removing handlers"), (0, s.removeEvent)(r.ownerDocument, f.move, this.handleDrag), (0, s.removeEvent)(r.ownerDocument, f.stop, this.handleDragStop))
                    }), d(this, "onMouseDown", t => (f = c.mouse, this.handleDragStart(t))), d(this, "onMouseUp", t => (f = c.mouse, this.handleDragStop(t))), d(this, "onTouchStart", t => (f = c.touch, this.handleDragStart(t))), d(this, "onTouchEnd", t => (f = c.touch, this.handleDragStop(t)))
                }
                componentDidMount() {
                    this.mounted = !0;
                    let t = this.findDOMNode();
                    t && (0, s.addEvent)(t, c.touch.start, this.onTouchStart, {
                        passive: !1
                    })
                }
                componentWillUnmount() {
                    this.mounted = !1;
                    let t = this.findDOMNode();
                    if (t) {
                        let {
                            ownerDocument: e
                        } = t;
                        (0, s.removeEvent)(e, c.mouse.move, this.handleDrag), (0, s.removeEvent)(e, c.touch.move, this.handleDrag), (0, s.removeEvent)(e, c.mouse.stop, this.handleDragStop), (0, s.removeEvent)(e, c.touch.stop, this.handleDragStop), (0, s.removeEvent)(t, c.touch.start, this.onTouchStart, {
                            passive: !1
                        }), this.props.enableUserSelectHack && (0, s.removeUserSelectStyles)(e)
                    }
                }
                findDOMNode() {
                    var t, e;
                    return null !== (t = this.props) && void 0 !== t && t.nodeRef ? null === (e = this.props) || void 0 === e || null === (e = e.nodeRef) || void 0 === e ? void 0 : e.current : r.default.findDOMNode(this)
                }
                render() {
                    return n.cloneElement(n.Children.only(this.props.children), {
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd
                    })
                }
            }
            e.default = g, d(g, "displayName", "DraggableCore"), d(g, "propTypes", {
                allowAnyClick: o.default.bool,
                children: o.default.node.isRequired,
                disabled: o.default.bool,
                enableUserSelectHack: o.default.bool,
                offsetParent: function(t, e) {
                    if (t[e] && 1 !== t[e].nodeType) throw Error("Draggable's offsetParent must be a DOM Node.")
                },
                grid: o.default.arrayOf(o.default.number),
                handle: o.default.string,
                cancel: o.default.string,
                nodeRef: o.default.object,
                onStart: o.default.func,
                onDrag: o.default.func,
                onStop: o.default.func,
                onMouseDown: o.default.func,
                scale: o.default.number,
                className: h.dontSetMe,
                style: h.dontSetMe,
                transform: h.dontSetMe
            }), d(g, "defaultProps", {
                allowAnyClick: !1,
                disabled: !1,
                enableUserSelectHack: !0,
                onStart: function() {},
                onDrag: function() {},
                onStop: function() {},
                onMouseDown: function() {},
                scale: 1
            })
        },
        91660: (t, e, i) => {
            "use strict";
            let {
                default: n,
                DraggableCore: o
            } = i(78429);
            t.exports = n, t.exports.default = n, t.exports.DraggableCore = o
        },
        96353: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.addClassName = l, e.addEvent = function(t, e, i, n) {
                if (!t) return;
                let o = {
                    capture: !0,
                    ...n
                };
                t.addEventListener ? t.addEventListener(e, i, o) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }, e.addUserSelectStyles = function(t) {
                if (!t) return;
                let e = t.getElementById("react-draggable-style-el");
                e || ((e = t.createElement("style")).type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", t.getElementsByTagName("head")[0].appendChild(e)), t.body && l(t.body, "react-draggable-transparent-selection")
            }, e.createCSSTransform = function(t, e) {
                let i = h(t, e, "px");
                return {
                    [(0, o.browserPrefixToKey)("transform", o.default)]: i
                }
            }, e.createSVGTransform = function(t, e) {
                return h(t, e, "")
            }, e.getTouch = function(t, e) {
                return t.targetTouches && (0, n.findInArray)(t.targetTouches, t => e === t.identifier) || t.changedTouches && (0, n.findInArray)(t.changedTouches, t => e === t.identifier)
            }, e.getTouchIdentifier = function(t) {
                return t.targetTouches && t.targetTouches[0] ? t.targetTouches[0].identifier : t.changedTouches && t.changedTouches[0] ? t.changedTouches[0].identifier : void 0
            }, e.getTranslation = h, e.innerHeight = function(t) {
                let e = t.clientHeight,
                    i = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, n.int)(i.paddingTop), e -= (0, n.int)(i.paddingBottom)
            }, e.innerWidth = function(t) {
                let e = t.clientWidth,
                    i = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, n.int)(i.paddingLeft), e -= (0, n.int)(i.paddingRight)
            }, e.matchesSelector = a, e.matchesSelectorAndParentsTo = function(t, e, i) {
                let n = t;
                do {
                    if (a(n, e)) return !0;
                    if (n === i) break;
                    n = n.parentNode
                } while (n);
                return !1
            }, e.offsetXYFromParent = function(t, e, i) {
                let n = e === e.ownerDocument.body ? {
                    left: 0,
                    top: 0
                } : e.getBoundingClientRect();
                return {
                    x: (t.clientX + e.scrollLeft - n.left) / i,
                    y: (t.clientY + e.scrollTop - n.top) / i
                }
            }, e.outerHeight = function(t) {
                let e = t.clientHeight,
                    i = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, n.int)(i.borderTopWidth), e += (0, n.int)(i.borderBottomWidth)
            }, e.outerWidth = function(t) {
                let e = t.clientWidth,
                    i = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, n.int)(i.borderLeftWidth), e += (0, n.int)(i.borderRightWidth)
            }, e.removeClassName = p, e.removeEvent = function(t, e, i, n) {
                if (!t) return;
                let o = {
                    capture: !0,
                    ...n
                };
                t.removeEventListener ? t.removeEventListener(e, i, o) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = null
            }, e.removeUserSelectStyles = function(t) {
                if (t) try {
                    if (t.body && p(t.body, "react-draggable-transparent-selection"), t.selection) t.selection.empty();
                    else {
                        let e = (t.defaultView || window).getSelection();
                        e && "Caret" !== e.type && e.removeAllRanges()
                    }
                } catch (t) {}
            };
            var n = i(22402),
                o = function(t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var i = r(void 0);
                    if (i && i.has(t)) return i.get(t);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var a = o ? Object.getOwnPropertyDescriptor(t, s) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s]
                        }
                    return n.default = t, i && i.set(t, n), n
                }(i(16348));

            function r(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    i = new WeakMap;
                return (r = function(t) {
                    return t ? i : e
                })(t)
            }
            let s = "";

            function a(t, e) {
                return s || (s = (0, n.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(e) {
                    return (0, n.isFunction)(t[e])
                })), !!(0, n.isFunction)(t[s]) && t[s](e)
            }

            function h(t, e, i) {
                let {
                    x: n,
                    y: o
                } = t, r = "translate(".concat(n).concat(i, ",").concat(o).concat(i, ")");
                if (e) {
                    let t = "".concat("string" == typeof e.x ? e.x : e.x + i),
                        n = "".concat("string" == typeof e.y ? e.y : e.y + i);
                    r = "translate(".concat(t, ", ").concat(n, ")") + r
                }
                return r
            }

            function l(t, e) {
                t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e))
            }

            function p(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "")
            }
        },
        16348: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.browserPrefixToKey = o, e.browserPrefixToStyle = function(t, e) {
                return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t
            }, e.default = void 0, e.getPrefix = n;
            let i = ["Moz", "Webkit", "O", "ms"];

            function n() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" == typeof window) return "";
                let n = null === (t = window.document) || void 0 === t || null === (t = t.documentElement) || void 0 === t ? void 0 : t.style;
                if (!n || e in n) return "";
                for (let t = 0; t < i.length; t++)
                    if (o(e, i[t]) in n) return i[t];
                return ""
            }

            function o(t, e) {
                return e ? "".concat(e).concat(function(t) {
                    let e = "",
                        i = !0;
                    for (let n = 0; n < t.length; n++) i ? (e += t[n].toUpperCase(), i = !1) : "-" === t[n] ? i = !0 : e += t[n];
                    return e
                }(t)) : t
            }
            e.default = n()
        },
        95470: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {}
        },
        63332: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.canDragX = function(t) {
                return "both" === t.props.axis || "x" === t.props.axis
            }, e.canDragY = function(t) {
                return "both" === t.props.axis || "y" === t.props.axis
            }, e.createCoreData = function(t, e, i) {
                let o = !(0, n.isNum)(t.lastX),
                    s = r(t);
                return o ? {
                    node: s,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: e,
                    lastY: i,
                    x: e,
                    y: i
                } : {
                    node: s,
                    deltaX: e - t.lastX,
                    deltaY: i - t.lastY,
                    lastX: t.lastX,
                    lastY: t.lastY,
                    x: e,
                    y: i
                }
            }, e.createDraggableData = function(t, e) {
                let i = t.props.scale;
                return {
                    node: e.node,
                    x: t.state.x + e.deltaX / i,
                    y: t.state.y + e.deltaY / i,
                    deltaX: e.deltaX / i,
                    deltaY: e.deltaY / i,
                    lastX: t.state.x,
                    lastY: t.state.y
                }
            }, e.getBoundPosition = function(t, e, i) {
                var s;
                if (!t.props.bounds) return [e, i];
                let {
                    bounds: a
                } = t.props;
                a = "string" == typeof a ? a : {
                    left: (s = a).left,
                    top: s.top,
                    right: s.right,
                    bottom: s.bottom
                };
                let h = r(t);
                if ("string" == typeof a) {
                    let t;
                    let {
                        ownerDocument: e
                    } = h, i = e.defaultView;
                    if (!((t = "parent" === a ? h.parentNode : e.querySelector(a)) instanceof i.HTMLElement)) throw Error('Bounds selector "' + a + '" could not find an element.');
                    let r = i.getComputedStyle(h),
                        s = i.getComputedStyle(t);
                    a = {
                        left: -h.offsetLeft + (0, n.int)(s.paddingLeft) + (0, n.int)(r.marginLeft),
                        top: -h.offsetTop + (0, n.int)(s.paddingTop) + (0, n.int)(r.marginTop),
                        right: (0, o.innerWidth)(t) - (0, o.outerWidth)(h) - h.offsetLeft + (0, n.int)(s.paddingRight) - (0, n.int)(r.marginRight),
                        bottom: (0, o.innerHeight)(t) - (0, o.outerHeight)(h) - h.offsetTop + (0, n.int)(s.paddingBottom) - (0, n.int)(r.marginBottom)
                    }
                }
                return (0, n.isNum)(a.right) && (e = Math.min(e, a.right)), (0, n.isNum)(a.bottom) && (i = Math.min(i, a.bottom)), (0, n.isNum)(a.left) && (e = Math.max(e, a.left)), (0, n.isNum)(a.top) && (i = Math.max(i, a.top)), [e, i]
            }, e.getControlPosition = function(t, e, i) {
                let n = "number" == typeof e ? (0, o.getTouch)(t, e) : null;
                if ("number" == typeof e && !n) return null;
                let s = r(i),
                    a = i.props.offsetParent || s.offsetParent || s.ownerDocument.body;
                return (0, o.offsetXYFromParent)(n || t, a, i.props.scale)
            }, e.snapToGrid = function(t, e, i) {
                return [Math.round(e / t[0]) * t[0], Math.round(i / t[1]) * t[1]]
            };
            var n = i(22402),
                o = i(96353);

            function r(t) {
                let e = t.findDOMNode();
                if (!e) throw Error("<DraggableCore>: Unmounted during event!");
                return e
            }
        },
        22402: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.dontSetMe = function(t, e, i) {
                if (t[e]) return Error("Invalid prop ".concat(e, " passed to ").concat(i, " - do not set this, set it on the child."))
            }, e.findInArray = function(t, e) {
                for (let i = 0, n = t.length; i < n; i++)
                    if (e.apply(e, [t[i], i, t])) return t[i]
            }, e.int = function(t) {
                return parseInt(t, 10)
            }, e.isFunction = function(t) {
                return "function" == typeof t || "[object Function]" === Object.prototype.toString.call(t)
            }, e.isNum = function(t) {
                return "number" == typeof t && !isNaN(t)
            }
        },
        24923: (t, e, i) => {
            "use strict";
            i.d(e, {
                p: () => M
            });
            var n = i(65751),
                o = i(91660),
                r = i.n(o),
                s = i(74710),
                a = function() {
                    var t = function(e, i) {
                        return (t = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                        })(e, i)
                    };
                    return function(e, i) {
                        function n() {
                            this.constructor = e
                        }
                        t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                    }
                }(),
                h = function() {
                    return (h = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                l = {
                    width: "100%",
                    height: "10px",
                    top: "0px",
                    left: "0px",
                    cursor: "row-resize"
                },
                p = {
                    width: "10px",
                    height: "100%",
                    top: "0px",
                    left: "0px",
                    cursor: "col-resize"
                },
                u = {
                    width: "20px",
                    height: "20px",
                    position: "absolute"
                },
                d = {
                    top: h(h({}, l), {
                        top: "-5px"
                    }),
                    right: h(h({}, p), {
                        left: void 0,
                        right: "-5px"
                    }),
                    bottom: h(h({}, l), {
                        top: void 0,
                        bottom: "-5px"
                    }),
                    left: h(h({}, p), {
                        left: "-5px"
                    }),
                    topRight: h(h({}, u), {
                        right: "-10px",
                        top: "-10px",
                        cursor: "ne-resize"
                    }),
                    bottomRight: h(h({}, u), {
                        right: "-10px",
                        bottom: "-10px",
                        cursor: "se-resize"
                    }),
                    bottomLeft: h(h({}, u), {
                        left: "-10px",
                        bottom: "-10px",
                        cursor: "sw-resize"
                    }),
                    topLeft: h(h({}, u), {
                        left: "-10px",
                        top: "-10px",
                        cursor: "nw-resize"
                    })
                },
                c = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.onMouseDown = function(t) {
                            e.props.onResizeStart(t, e.props.direction)
                        }, e.onTouchStart = function(t) {
                            e.props.onResizeStart(t, e.props.direction)
                        }, e
                    }
                    return a(e, t), e.prototype.render = function() {
                        return n.createElement("div", {
                            className: this.props.className || "",
                            style: h(h({
                                position: "absolute",
                                userSelect: "none"
                            }, d[this.props.direction]), this.props.replaceStyles || {}),
                            onMouseDown: this.onMouseDown,
                            onTouchStart: this.onTouchStart
                        }, this.props.children)
                    }, e
                }(n.PureComponent),
                f = function() {
                    var t = function(e, i) {
                        return (t = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                        })(e, i)
                    };
                    return function(e, i) {
                        function n() {
                            this.constructor = e
                        }
                        t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                    }
                }(),
                g = function() {
                    return (g = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                m = {
                    width: "auto",
                    height: "auto"
                },
                b = function(t, e, i) {
                    return Math.max(Math.min(t, i), e)
                },
                v = function(t, e, i) {
                    var n = Math.round(t / e);
                    return n * e + i * (n - 1)
                },
                y = function(t, e) {
                    return RegExp(t, "i").test(e)
                },
                w = function(t) {
                    return !!(t.touches && t.touches.length)
                },
                S = function(t, e, i) {
                    void 0 === i && (i = 0);
                    var n = e.reduce(function(i, n, o) {
                            return Math.abs(n - t) < Math.abs(e[i] - t) ? o : i
                        }, 0),
                        o = Math.abs(e[n] - t);
                    return 0 === i || o < i ? e[n] : t
                },
                x = function(t) {
                    return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : t + "px"
                },
                z = function(t, e, i, n) {
                    if (t && "string" == typeof t) {
                        if (t.endsWith("px")) return Number(t.replace("px", ""));
                        if (t.endsWith("%")) {
                            var o = Number(t.replace("%", "")) / 100;
                            return e * o
                        }
                        if (t.endsWith("vw")) {
                            var o = Number(t.replace("vw", "")) / 100;
                            return i * o
                        }
                        if (t.endsWith("vh")) {
                            var o = Number(t.replace("vh", "")) / 100;
                            return n * o
                        }
                    }
                    return t
                },
                D = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
                _ = "__resizable_base__",
                E = function(t) {
                    function e(e) {
                        var i, n, o, r, s = t.call(this, e) || this;
                        return s.ratio = 1, s.resizable = null, s.parentLeft = 0, s.parentTop = 0, s.resizableLeft = 0, s.resizableRight = 0, s.resizableTop = 0, s.resizableBottom = 0, s.targetLeft = 0, s.targetTop = 0, s.appendBase = function() {
                            if (!s.resizable || !s.window) return null;
                            var t = s.parentNode;
                            if (!t) return null;
                            var e = s.window.document.createElement("div");
                            return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(_) : e.className += _, t.appendChild(e), e
                        }, s.removeBase = function(t) {
                            var e = s.parentNode;
                            e && e.removeChild(t)
                        }, s.state = {
                            isResizing: !1,
                            width: null !== (n = null === (i = s.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : "auto",
                            height: null !== (r = null === (o = s.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== r ? r : "auto",
                            direction: "right",
                            original: {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            },
                            backgroundStyle: {
                                height: "100%",
                                width: "100%",
                                backgroundColor: "rgba(0,0,0,0)",
                                cursor: "auto",
                                opacity: 0,
                                position: "fixed",
                                zIndex: 9999,
                                top: "0",
                                left: "0",
                                bottom: "0",
                                right: "0"
                            },
                            flexBasis: void 0
                        }, s.onResizeStart = s.onResizeStart.bind(s), s.onMouseMove = s.onMouseMove.bind(s), s.onMouseUp = s.onMouseUp.bind(s), s
                    }
                    return f(e, t), Object.defineProperty(e.prototype, "parentNode", {
                        get: function() {
                            return this.resizable ? this.resizable.parentNode : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "window", {
                        get: function() {
                            return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "propsSize", {
                        get: function() {
                            return this.props.size || this.props.defaultSize || m
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            var t = 0,
                                e = 0;
                            if (this.resizable && this.window) {
                                var i = this.resizable.offsetWidth,
                                    n = this.resizable.offsetHeight,
                                    o = this.resizable.style.position;
                                "relative" !== o && (this.resizable.style.position = "relative"), t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : n, this.resizable.style.position = o
                            }
                            return {
                                width: t,
                                height: e
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "sizeStyle", {
                        get: function() {
                            var t = this,
                                e = this.props.size,
                                i = function(e) {
                                    var i;
                                    if (void 0 === t.state[e] || "auto" === t.state[e]) return "auto";
                                    if (t.propsSize && t.propsSize[e] && (null === (i = t.propsSize[e]) || void 0 === i ? void 0 : i.toString().endsWith("%"))) {
                                        if (t.state[e].toString().endsWith("%")) return t.state[e].toString();
                                        var n = t.getParentSize();
                                        return Number(t.state[e].toString().replace("px", "")) / n[e] * 100 + "%"
                                    }
                                    return x(t.state[e])
                                };
                            return {
                                width: e && void 0 !== e.width && !this.state.isResizing ? x(e.width) : i("width"),
                                height: e && void 0 !== e.height && !this.state.isResizing ? x(e.height) : i("height")
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.getParentSize = function() {
                        if (!this.parentNode) return this.window ? {
                            width: this.window.innerWidth,
                            height: this.window.innerHeight
                        } : {
                            width: 0,
                            height: 0
                        };
                        var t = this.appendBase();
                        if (!t) return {
                            width: 0,
                            height: 0
                        };
                        var e = !1,
                            i = this.parentNode.style.flexWrap;
                        "wrap" !== i && (e = !0, this.parentNode.style.flexWrap = "wrap"), t.style.position = "relative", t.style.minWidth = "100%", t.style.minHeight = "100%";
                        var n = {
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        };
                        return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), n
                    }, e.prototype.bindEvents = function() {
                        this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
                            capture: !0,
                            passive: !1
                        }), this.window.addEventListener("touchend", this.onMouseUp))
                    }, e.prototype.unbindEvents = function() {
                        this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
                    }, e.prototype.componentDidMount = function() {
                        if (this.resizable && this.window) {
                            var t = this.window.getComputedStyle(this.resizable);
                            this.setState({
                                width: this.state.width || this.size.width,
                                height: this.state.height || this.size.height,
                                flexBasis: "auto" !== t.flexBasis ? t.flexBasis : void 0
                            })
                        }
                    }, e.prototype.componentWillUnmount = function() {
                        this.window && this.unbindEvents()
                    }, e.prototype.createSizeForCssProperty = function(t, e) {
                        var i = this.propsSize && this.propsSize[e];
                        return "auto" === this.state[e] && this.state.original[e] === t && (void 0 === i || "auto" === i) ? "auto" : t
                    }, e.prototype.calculateNewMaxFromBoundary = function(t, e) {
                        var i, n, o = this.props.boundsByDirection,
                            r = this.state.direction,
                            s = o && y("left", r),
                            a = o && y("top", r);
                        if ("parent" === this.props.bounds) {
                            var h = this.parentNode;
                            h && (i = s ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft), n = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop))
                        } else "window" === this.props.bounds ? this.window && (i = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft, n = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), n = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
                        return i && Number.isFinite(i) && (t = t && t < i ? t : i), n && Number.isFinite(n) && (e = e && e < n ? e : n), {
                            maxWidth: t,
                            maxHeight: e
                        }
                    }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
                        var i, n = this.props.scale || 1,
                            o = Array.isArray(i = this.props.resizeRatio || 1) ? i : [i, i],
                            r = o[0],
                            s = o[1],
                            a = this.state,
                            h = a.direction,
                            l = a.original,
                            p = this.props,
                            u = p.lockAspectRatio,
                            d = p.lockAspectRatioExtraHeight,
                            c = p.lockAspectRatioExtraWidth,
                            f = l.width,
                            g = l.height,
                            m = d || 0,
                            b = c || 0;
                        return y("right", h) && (f = l.width + (t - l.x) * r / n, u && (g = (f - b) / this.ratio + m)), y("left", h) && (f = l.width - (t - l.x) * r / n, u && (g = (f - b) / this.ratio + m)), y("bottom", h) && (g = l.height + (e - l.y) * s / n, u && (f = (g - m) * this.ratio + b)), y("top", h) && (g = l.height - (e - l.y) * s / n, u && (f = (g - m) * this.ratio + b)), {
                            newWidth: f,
                            newHeight: g
                        }
                    }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, n) {
                        var o = this.props,
                            r = o.lockAspectRatio,
                            s = o.lockAspectRatioExtraHeight,
                            a = o.lockAspectRatioExtraWidth,
                            h = void 0 === n.width ? 10 : n.width,
                            l = void 0 === i.width || i.width < 0 ? t : i.width,
                            p = void 0 === n.height ? 10 : n.height,
                            u = void 0 === i.height || i.height < 0 ? e : i.height,
                            d = s || 0,
                            c = a || 0;
                        if (r) {
                            var f = (p - d) * this.ratio + c,
                                g = (u - d) * this.ratio + c,
                                m = (h - c) / this.ratio + d,
                                v = (l - c) / this.ratio + d,
                                y = Math.max(p, m),
                                w = Math.min(u, v);
                            t = b(t, Math.max(h, f), Math.min(l, g)), e = b(e, y, w)
                        } else t = b(t, h, l), e = b(e, p, u);
                        return {
                            newWidth: t,
                            newHeight: e
                        }
                    }, e.prototype.setBoundingClientRect = function() {
                        var t = 1 / (this.props.scale || 1);
                        if ("parent" === this.props.bounds) {
                            var e = this.parentNode;
                            if (e) {
                                var i = e.getBoundingClientRect();
                                this.parentLeft = i.left * t, this.parentTop = i.top * t
                            }
                        }
                        if (this.props.bounds && "string" != typeof this.props.bounds) {
                            var n = this.props.bounds.getBoundingClientRect();
                            this.targetLeft = n.left * t, this.targetTop = n.top * t
                        }
                        if (this.resizable) {
                            var o = this.resizable.getBoundingClientRect(),
                                r = o.left,
                                s = o.top,
                                a = o.right,
                                h = o.bottom;
                            this.resizableLeft = r * t, this.resizableRight = a * t, this.resizableTop = s * t, this.resizableBottom = h * t
                        }
                    }, e.prototype.onResizeStart = function(t, e) {
                        if (this.resizable && this.window) {
                            var i, n, o = 0,
                                r = 0;
                            if (t.nativeEvent && ((i = t.nativeEvent).clientX || 0 === i.clientX) && (i.clientY || 0 === i.clientY) ? (o = t.nativeEvent.clientX, r = t.nativeEvent.clientY) : t.nativeEvent && w(t.nativeEvent) && (o = t.nativeEvent.touches[0].clientX, r = t.nativeEvent.touches[0].clientY), !this.props.onResizeStart || !this.resizable || !1 !== this.props.onResizeStart(t, e, this.resizable)) {
                                this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                                    height: this.props.size.height
                                }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                                    width: this.props.size.width
                                })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
                                var s = this.window.getComputedStyle(this.resizable);
                                if ("auto" !== s.flexBasis) {
                                    var a = this.parentNode;
                                    if (a) {
                                        var h = this.window.getComputedStyle(a).flexDirection;
                                        this.flexDir = h.startsWith("row") ? "row" : "column", n = s.flexBasis
                                    }
                                }
                                this.setBoundingClientRect(), this.bindEvents();
                                var l = {
                                    original: {
                                        x: o,
                                        y: r,
                                        width: this.size.width,
                                        height: this.size.height
                                    },
                                    isResizing: !0,
                                    backgroundStyle: g(g({}, this.state.backgroundStyle), {
                                        cursor: this.window.getComputedStyle(t.target).cursor || "auto"
                                    }),
                                    direction: e,
                                    flexBasis: n
                                };
                                this.setState(l)
                            }
                        }
                    }, e.prototype.onMouseMove = function(t) {
                        var e, i, n, o, r, a, h = this;
                        if (this.state.isResizing && this.resizable && this.window) {
                            if (this.window.TouchEvent && w(t)) try {
                                t.preventDefault(), t.stopPropagation()
                            } catch (t) {}
                            var l = this.props,
                                p = l.maxWidth,
                                u = l.maxHeight,
                                d = l.minWidth,
                                c = l.minHeight,
                                f = w(t) ? t.touches[0].clientX : t.clientX,
                                g = w(t) ? t.touches[0].clientY : t.clientY,
                                m = this.state,
                                b = m.direction,
                                y = m.original,
                                x = m.width,
                                D = m.height,
                                _ = this.getParentSize(),
                                E = (e = this.window.innerWidth, i = this.window.innerHeight, n = p, o = u, r = d, a = c, n = z(n, _.width, e, i), o = z(o, _.height, e, i), r = z(r, _.width, e, i), a = z(a, _.height, e, i), {
                                    maxWidth: void 0 === n ? void 0 : Number(n),
                                    maxHeight: void 0 === o ? void 0 : Number(o),
                                    minWidth: void 0 === r ? void 0 : Number(r),
                                    minHeight: void 0 === a ? void 0 : Number(a)
                                });
                            p = E.maxWidth, u = E.maxHeight, d = E.minWidth, c = E.minHeight;
                            var P = this.calculateNewSizeFromDirection(f, g),
                                O = P.newHeight,
                                R = P.newWidth,
                                M = this.calculateNewMaxFromBoundary(p, u);
                            this.props.snap && this.props.snap.x && (R = S(R, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (O = S(O, this.props.snap.y, this.props.snapGap));
                            var N = this.calculateNewSizeFromAspectRatio(R, O, {
                                width: M.maxWidth,
                                height: M.maxHeight
                            }, {
                                width: d,
                                height: c
                            });
                            if (R = N.newWidth, O = N.newHeight, this.props.grid) {
                                var W = v(R, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                                    T = v(O, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                                    C = this.props.snapGap || 0,
                                    H = 0 === C || Math.abs(W - R) <= C ? W : R,
                                    A = 0 === C || Math.abs(T - O) <= C ? T : O;
                                R = H, O = A
                            }
                            var k = {
                                width: R - y.width,
                                height: O - y.height
                            };
                            if (x && "string" == typeof x) {
                                if (x.endsWith("%")) {
                                    var j = R / _.width * 100;
                                    R = j + "%"
                                } else if (x.endsWith("vw")) {
                                    var L = R / this.window.innerWidth * 100;
                                    R = L + "vw"
                                } else if (x.endsWith("vh")) {
                                    var X = R / this.window.innerHeight * 100;
                                    R = X + "vh"
                                }
                            }
                            if (D && "string" == typeof D) {
                                if (D.endsWith("%")) {
                                    var j = O / _.height * 100;
                                    O = j + "%"
                                } else if (D.endsWith("vw")) {
                                    var L = O / this.window.innerWidth * 100;
                                    O = L + "vw"
                                } else if (D.endsWith("vh")) {
                                    var X = O / this.window.innerHeight * 100;
                                    O = X + "vh"
                                }
                            }
                            var B = {
                                width: this.createSizeForCssProperty(R, "width"),
                                height: this.createSizeForCssProperty(O, "height")
                            };
                            "row" === this.flexDir ? B.flexBasis = B.width : "column" === this.flexDir && (B.flexBasis = B.height);
                            var Y = this.state.width !== B.width,
                                F = this.state.height !== B.height,
                                U = this.state.flexBasis !== B.flexBasis,
                                G = Y || F || U;
                            G && (0, s.flushSync)(function() {
                                h.setState(B)
                            }), this.props.onResize && G && this.props.onResize(t, b, this.resizable, k)
                        }
                    }, e.prototype.onMouseUp = function(t) {
                        var e, i, n = this.state,
                            o = n.isResizing,
                            r = n.direction,
                            s = n.original;
                        if (o && this.resizable) {
                            var a = {
                                width: this.size.width - s.width,
                                height: this.size.height - s.height
                            };
                            this.props.onResizeStop && this.props.onResizeStop(t, r, this.resizable, a), this.props.size && this.setState({
                                width: null !== (e = this.props.size.width) && void 0 !== e ? e : "auto",
                                height: null !== (i = this.props.size.height) && void 0 !== i ? i : "auto"
                            }), this.unbindEvents(), this.setState({
                                isResizing: !1,
                                backgroundStyle: g(g({}, this.state.backgroundStyle), {
                                    cursor: "auto"
                                })
                            })
                        }
                    }, e.prototype.updateSize = function(t) {
                        var e, i;
                        this.setState({
                            width: null !== (e = t.width) && void 0 !== e ? e : "auto",
                            height: null !== (i = t.height) && void 0 !== i ? i : "auto"
                        })
                    }, e.prototype.renderResizer = function() {
                        var t = this,
                            e = this.props,
                            i = e.enable,
                            o = e.handleStyles,
                            r = e.handleClasses,
                            s = e.handleWrapperStyle,
                            a = e.handleWrapperClass,
                            h = e.handleComponent;
                        if (!i) return null;
                        var l = Object.keys(i).map(function(e) {
                            return !1 !== i[e] ? n.createElement(c, {
                                key: e,
                                direction: e,
                                onResizeStart: t.onResizeStart,
                                replaceStyles: o && o[e],
                                className: r && r[e]
                            }, h && h[e] ? h[e] : null) : null
                        });
                        return n.createElement("div", {
                            className: a,
                            style: s
                        }, l)
                    }, e.prototype.render = function() {
                        var t = this,
                            e = Object.keys(this.props).reduce(function(e, i) {
                                return -1 !== D.indexOf(i) || (e[i] = t.props[i]), e
                            }, {}),
                            i = g(g(g({
                                position: "relative",
                                userSelect: this.state.isResizing ? "none" : "auto"
                            }, this.props.style), this.sizeStyle), {
                                maxWidth: this.props.maxWidth,
                                maxHeight: this.props.maxHeight,
                                minWidth: this.props.minWidth,
                                minHeight: this.props.minHeight,
                                boxSizing: "border-box",
                                flexShrink: 0
                            });
                        this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
                        var o = this.props.as || "div";
                        return n.createElement(o, g({
                            style: i,
                            className: this.props.className
                        }, e, {
                            ref: function(e) {
                                e && (t.resizable = e)
                            }
                        }), this.state.isResizing && n.createElement("div", {
                            style: this.state.backgroundStyle
                        }), this.props.children, this.renderResizer())
                    }, e.defaultProps = {
                        as: "div",
                        onResizeStart: function() {},
                        onResize: function() {},
                        onResizeStop: function() {},
                        enable: {
                            top: !0,
                            right: !0,
                            bottom: !0,
                            left: !0,
                            topRight: !0,
                            bottomRight: !0,
                            bottomLeft: !0,
                            topLeft: !0
                        },
                        style: {},
                        grid: [1, 1],
                        gridGap: [0, 0],
                        lockAspectRatio: !1,
                        lockAspectRatioExtraWidth: 0,
                        lockAspectRatioExtraHeight: 0,
                        scale: 1,
                        resizeRatio: 1,
                        snapGap: 0
                    }, e
                }(n.PureComponent),
                P = function(t, e) {
                    return (P = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
                },
                O = function() {
                    return (O = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                R = {
                    width: "auto",
                    height: "auto",
                    display: "inline-block",
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                M = function(t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        return i.resizingPosition = {
                            x: 0,
                            y: 0
                        }, i.offsetFromParent = {
                            left: 0,
                            top: 0
                        }, i.resizableElement = {
                            current: null
                        }, i.originalPosition = {
                            x: 0,
                            y: 0
                        }, i.state = {
                            resizing: !1,
                            bounds: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            maxWidth: e.maxWidth,
                            maxHeight: e.maxHeight
                        }, i.onResizeStart = i.onResizeStart.bind(i), i.onResize = i.onResize.bind(i), i.onResizeStop = i.onResizeStop.bind(i), i.onDragStart = i.onDragStart.bind(i), i.onDrag = i.onDrag.bind(i), i.onDragStop = i.onDragStop.bind(i), i.getMaxSizesFromProps = i.getMaxSizesFromProps.bind(i), i
                    }
                    return ! function(t, e) {
                        function i() {
                            this.constructor = t
                        }
                        P(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                    }(e, t), e.prototype.componentDidMount = function() {
                        this.updateOffsetFromParent();
                        var t = this.offsetFromParent,
                            e = t.left,
                            i = t.top,
                            n = this.getDraggablePosition(),
                            o = n.x,
                            r = n.y;
                        this.draggable.setState({
                            x: o - e,
                            y: r - i
                        }), this.forceUpdate()
                    }, e.prototype.getDraggablePosition = function() {
                        var t = this.draggable.state;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }, e.prototype.getParent = function() {
                        return this.resizable && this.resizable.parentNode
                    }, e.prototype.getParentSize = function() {
                        return this.resizable.getParentSize()
                    }, e.prototype.getMaxSizesFromProps = function() {
                        return {
                            maxWidth: void 0 === this.props.maxWidth ? Number.MAX_SAFE_INTEGER : this.props.maxWidth,
                            maxHeight: void 0 === this.props.maxHeight ? Number.MAX_SAFE_INTEGER : this.props.maxHeight
                        }
                    }, e.prototype.getSelfElement = function() {
                        return this.resizable && this.resizable.resizable
                    }, e.prototype.getOffsetHeight = function(t) {
                        var e = this.props.scale;
                        switch (this.props.bounds) {
                            case "window":
                                return window.innerHeight / e;
                            case "body":
                                return document.body.offsetHeight / e;
                            default:
                                return t.offsetHeight
                        }
                    }, e.prototype.getOffsetWidth = function(t) {
                        var e = this.props.scale;
                        switch (this.props.bounds) {
                            case "window":
                                return window.innerWidth / e;
                            case "body":
                                return document.body.offsetWidth / e;
                            default:
                                return t.offsetWidth
                        }
                    }, e.prototype.onDragStart = function(t, e) {
                        this.props.onDragStart && this.props.onDragStart(t, e);
                        var i, n = this.getDraggablePosition();
                        if (this.originalPosition = n, this.props.bounds) {
                            var o = this.getParent(),
                                r = this.props.scale;
                            if ("parent" === this.props.bounds) i = o;
                            else if ("body" === this.props.bounds) {
                                var s = o.getBoundingClientRect(),
                                    a = s.left,
                                    h = s.top,
                                    l = document.body.getBoundingClientRect(),
                                    p = -(a - o.offsetLeft * r - l.left) / r,
                                    u = -(h - o.offsetTop * r - l.top) / r,
                                    d = (document.body.offsetWidth - this.resizable.size.width * r) / r + p,
                                    c = (document.body.offsetHeight - this.resizable.size.height * r) / r + u;
                                return this.setState({
                                    bounds: {
                                        top: u,
                                        right: d,
                                        bottom: c,
                                        left: p
                                    }
                                })
                            } else if ("window" === this.props.bounds) {
                                if (!this.resizable) return;
                                var f = o.getBoundingClientRect(),
                                    g = f.left,
                                    m = f.top,
                                    b = -(g - o.offsetLeft * r) / r,
                                    v = -(m - o.offsetTop * r) / r,
                                    d = (window.innerWidth - this.resizable.size.width * r) / r + b,
                                    c = (window.innerHeight - this.resizable.size.height * r) / r + v;
                                return this.setState({
                                    bounds: {
                                        top: v,
                                        right: d,
                                        bottom: c,
                                        left: b
                                    }
                                })
                            } else "string" == typeof this.props.bounds ? i = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (i = this.props.bounds);
                            if (i instanceof HTMLElement && o instanceof HTMLElement) {
                                var y = i.getBoundingClientRect(),
                                    w = y.left,
                                    S = y.top,
                                    x = o.getBoundingClientRect(),
                                    z = x.left,
                                    D = x.top,
                                    _ = (w - z) / r,
                                    E = S - D;
                                if (this.resizable) {
                                    this.updateOffsetFromParent();
                                    var P = this.offsetFromParent;
                                    this.setState({
                                        bounds: {
                                            top: E - P.top,
                                            right: _ + (i.offsetWidth - this.resizable.size.width) - P.left / r,
                                            bottom: E + (i.offsetHeight - this.resizable.size.height) - P.top,
                                            left: _ - P.left / r
                                        }
                                    })
                                }
                            }
                        }
                    }, e.prototype.onDrag = function(t, e) {
                        if (this.props.onDrag) {
                            var i = this.offsetFromParent,
                                n = i.left,
                                o = i.top;
                            if (!this.props.dragAxis || "both" === this.props.dragAxis) return this.props.onDrag(t, O(O({}, e), {
                                x: e.x + n,
                                y: e.y + o
                            }));
                            if ("x" === this.props.dragAxis) return this.props.onDrag(t, O(O({}, e), {
                                x: e.x + n,
                                y: this.originalPosition.y + o,
                                deltaY: 0
                            }));
                            if ("y" === this.props.dragAxis) return this.props.onDrag(t, O(O({}, e), {
                                x: this.originalPosition.x + n,
                                y: e.y + o,
                                deltaX: 0
                            }))
                        }
                    }, e.prototype.onDragStop = function(t, e) {
                        if (this.props.onDragStop) {
                            var i = this.offsetFromParent,
                                n = i.left,
                                o = i.top;
                            if (!this.props.dragAxis || "both" === this.props.dragAxis) return this.props.onDragStop(t, O(O({}, e), {
                                x: e.x + n,
                                y: e.y + o
                            }));
                            if ("x" === this.props.dragAxis) return this.props.onDragStop(t, O(O({}, e), {
                                x: e.x + n,
                                y: this.originalPosition.y + o,
                                deltaY: 0
                            }));
                            if ("y" === this.props.dragAxis) return this.props.onDragStop(t, O(O({}, e), {
                                x: this.originalPosition.x + n,
                                y: e.y + o,
                                deltaX: 0
                            }))
                        }
                    }, e.prototype.onResizeStart = function(t, e, i) {
                        t.stopPropagation(), this.setState({
                            resizing: !0
                        });
                        var n = this.props.scale,
                            o = this.offsetFromParent,
                            r = this.getDraggablePosition();
                        if (this.resizingPosition = {
                                x: r.x + o.left,
                                y: r.y + o.top
                            }, this.originalPosition = r, this.props.bounds) {
                            var s = this.getParent(),
                                a = void 0;
                            "parent" === this.props.bounds ? a = s : "body" === this.props.bounds ? a = document.body : "window" === this.props.bounds ? a = window : "string" == typeof this.props.bounds ? a = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
                            var h = this.getSelfElement();
                            if (h instanceof Element && (a instanceof HTMLElement || a === window) && s instanceof HTMLElement) {
                                var l = this.getMaxSizesFromProps(),
                                    p = l.maxWidth,
                                    u = l.maxHeight,
                                    d = this.getParentSize();
                                if (p && "string" == typeof p) {
                                    if (p.endsWith("%")) {
                                        var c = Number(p.replace("%", "")) / 100;
                                        p = d.width * c
                                    } else p.endsWith("px") && (p = Number(p.replace("px", "")))
                                }
                                if (u && "string" == typeof u) {
                                    if (u.endsWith("%")) {
                                        var c = Number(u.replace("%", "")) / 100;
                                        u = d.height * c
                                    } else u.endsWith("px") && (u = Number(u.replace("px", "")))
                                }
                                var f = h.getBoundingClientRect(),
                                    g = f.left,
                                    m = f.top,
                                    b = "window" === this.props.bounds ? {
                                        left: 0,
                                        top: 0
                                    } : a.getBoundingClientRect(),
                                    v = b.left,
                                    y = b.top,
                                    w = this.getOffsetWidth(a),
                                    S = this.getOffsetHeight(a),
                                    x = e.toLowerCase().endsWith("left"),
                                    z = e.toLowerCase().endsWith("right"),
                                    D = e.startsWith("top"),
                                    _ = e.startsWith("bottom");
                                if ((x || D) && this.resizable) {
                                    var E = (g - v) / n + this.resizable.size.width;
                                    this.setState({
                                        maxWidth: E > Number(p) ? p : E
                                    })
                                }
                                if (z || this.props.lockAspectRatio && !x && !D) {
                                    var E = w + (v - g) / n;
                                    this.setState({
                                        maxWidth: E > Number(p) ? p : E
                                    })
                                }
                                if ((D || x) && this.resizable) {
                                    var E = (m - y) / n + this.resizable.size.height;
                                    this.setState({
                                        maxHeight: E > Number(u) ? u : E
                                    })
                                }
                                if (_ || this.props.lockAspectRatio && !D && !x) {
                                    var E = S + (y - m) / n;
                                    this.setState({
                                        maxHeight: E > Number(u) ? u : E
                                    })
                                }
                            }
                        } else this.setState({
                            maxWidth: this.props.maxWidth,
                            maxHeight: this.props.maxHeight
                        });
                        this.props.onResizeStart && this.props.onResizeStart(t, e, i)
                    }, e.prototype.onResize = function(t, e, i, n) {
                        var o = this,
                            r = {
                                x: this.originalPosition.x,
                                y: this.originalPosition.y
                            },
                            a = -n.width,
                            h = -n.height;
                        ["top", "left", "topLeft", "bottomLeft", "topRight"].includes(e) && ("bottomLeft" === e ? r.x += a : ("topRight" === e || (r.x += a), r.y += h));
                        var l = this.draggable.state;
                        (r.x !== l.x || r.y !== l.y) && (0, s.flushSync)(function() {
                            o.draggable.setState(r)
                        }), this.updateOffsetFromParent();
                        var p = this.offsetFromParent,
                            u = this.getDraggablePosition().x + p.left,
                            d = this.getDraggablePosition().y + p.top;
                        this.resizingPosition = {
                            x: u,
                            y: d
                        }, this.props.onResize && this.props.onResize(t, e, i, n, {
                            x: u,
                            y: d
                        })
                    }, e.prototype.onResizeStop = function(t, e, i, n) {
                        this.setState({
                            resizing: !1
                        });
                        var o = this.getMaxSizesFromProps(),
                            r = o.maxWidth,
                            s = o.maxHeight;
                        this.setState({
                            maxWidth: r,
                            maxHeight: s
                        }), this.props.onResizeStop && this.props.onResizeStop(t, e, i, n, this.resizingPosition)
                    }, e.prototype.updateSize = function(t) {
                        this.resizable && this.resizable.updateSize({
                            width: t.width,
                            height: t.height
                        })
                    }, e.prototype.updatePosition = function(t) {
                        this.draggable.setState(t)
                    }, e.prototype.updateOffsetFromParent = function() {
                        var t = this.props.scale,
                            e = this.getParent(),
                            i = this.getSelfElement();
                        if (!e || null === i) return {
                            top: 0,
                            left: 0
                        };
                        var n = e.getBoundingClientRect(),
                            o = n.left,
                            r = n.top,
                            s = i.getBoundingClientRect(),
                            a = this.getDraggablePosition(),
                            h = e.scrollLeft,
                            l = e.scrollTop;
                        this.offsetFromParent = {
                            left: s.left - o + h - a.x * t,
                            top: s.top - r + l - a.y * t
                        }
                    }, e.prototype.render = function() {
                        var t, e = this,
                            i = this.props,
                            o = i.disableDragging,
                            s = i.style,
                            a = i.dragHandleClassName,
                            h = i.position,
                            l = i.onMouseDown,
                            p = i.onMouseUp,
                            u = i.dragAxis,
                            d = i.dragGrid,
                            c = i.bounds,
                            f = i.enableUserSelectHack,
                            g = i.cancel,
                            m = i.children,
                            b = (i.onResizeStart, i.onResize, i.onResizeStop, i.onDragStart, i.onDrag, i.onDragStop, i.resizeHandleStyles),
                            v = i.resizeHandleClasses,
                            y = i.resizeHandleComponent,
                            w = i.enableResizing,
                            S = i.resizeGrid,
                            x = i.resizeHandleWrapperClass,
                            z = i.resizeHandleWrapperStyle,
                            D = i.scale,
                            _ = i.allowAnyClick,
                            P = function(t, e) {
                                var i = {};
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (i[n] = t[n]);
                                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (i[n[o]] = t[n[o]]);
                                return i
                            }(i, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]),
                            M = this.props.default ? O({}, this.props.default) : void 0;
                        delete P.default;
                        var N = O(O(O({}, R), o || a ? {
                                cursor: "auto"
                            } : {
                                cursor: "move"
                            }), s),
                            W = this.offsetFromParent,
                            T = W.left,
                            C = W.top;
                        h && (t = {
                            x: h.x - T,
                            y: h.y - C
                        });
                        var H = this.state.resizing ? void 0 : t,
                            A = this.state.resizing ? "both" : u;
                        return (0, n.createElement)(r(), {
                            ref: function(t) {
                                t && (e.draggable = t)
                            },
                            handle: a ? ".".concat(a) : void 0,
                            defaultPosition: M,
                            onMouseDown: l,
                            onMouseUp: p,
                            onStart: this.onDragStart,
                            onDrag: this.onDrag,
                            onStop: this.onDragStop,
                            axis: A,
                            disabled: o,
                            grid: d,
                            bounds: c ? this.state.bounds : void 0,
                            position: H,
                            enableUserSelectHack: f,
                            cancel: g,
                            scale: D,
                            allowAnyClick: _,
                            nodeRef: this.resizableElement
                        }, (0, n.createElement)(E, O({}, P, {
                            ref: function(t) {
                                t && (e.resizable = t, e.resizableElement.current = t.resizable)
                            },
                            defaultSize: M,
                            size: this.props.size,
                            enable: "boolean" == typeof w ? {
                                bottom: w,
                                bottomLeft: w,
                                bottomRight: w,
                                left: w,
                                right: w,
                                top: w,
                                topLeft: w,
                                topRight: w
                            } : w,
                            onResizeStart: this.onResizeStart,
                            onResize: this.onResize,
                            onResizeStop: this.onResizeStop,
                            style: N,
                            minWidth: this.props.minWidth,
                            minHeight: this.props.minHeight,
                            maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth,
                            maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight,
                            grid: S,
                            handleWrapperClass: x,
                            handleWrapperStyle: z,
                            lockAspectRatio: this.props.lockAspectRatio,
                            lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
                            lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
                            handleStyles: b,
                            handleClasses: v,
                            handleComponent: y,
                            scale: this.props.scale
                        }), m))
                    }, e.defaultProps = {
                        maxWidth: Number.MAX_SAFE_INTEGER,
                        maxHeight: Number.MAX_SAFE_INTEGER,
                        scale: 1,
                        onResizeStart: function() {},
                        onResize: function() {},
                        onResizeStop: function() {},
                        onDragStart: function() {},
                        onDrag: function() {},
                        onDragStop: function() {}
                    }, e
                }(n.PureComponent)
        }
    }
]);