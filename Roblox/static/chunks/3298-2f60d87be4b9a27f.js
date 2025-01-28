"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3298], {
        53298: (t, e, i) => {
            i.d(e, {
                    yN: () => S
                }),
                function(t, e) {
                    void 0 === e && (e = {});
                    var i = e.insertAt;
                    if ("undefined" != typeof document) {
                        var n = document.head || document.getElementsByTagName("head")[0],
                            a = document.createElement("style");
                        a.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
                    }
                }("@keyframes watermark{0%{background-position:0 0}25%{background-position:100% 100%}50%{background-position:0 0}75%{background-position:100% -100%}to{background-position:0 0}}");
            var n = function(t, e) {
                    return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    })(t, e)
                },
                a = function() {
                    return (a = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var a in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                        return t
                    }).apply(this, arguments)
                };

            function o(t, e, i, n) {
                return new(i || (i = Promise))(function(a, o) {
                    function r(t) {
                        try {
                            l(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(t) {
                        try {
                            l(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(r, s)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            }

            function r(t, e) {
                var i, n, a, o, r = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(s) {
                    return function(l) {
                        return function(s) {
                            if (i) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (r = 0)), r;) try {
                                if (i = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        return r.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = r.ops.pop(), r.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            r.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && r.label < a[1]) {
                                            r.label = a[1], a = s;
                                            break
                                        }
                                        if (a && r.label < a[2]) {
                                            r.label = a[2], r.ops.push(s);
                                            break
                                        }
                                        a[2] && r.ops.pop(), r.trys.pop();
                                        continue
                                }
                                s = e.call(t, r)
                            } catch (t) {
                                s = [6, t], n = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, l])
                    }
                }
            }
            var s = function(t) {
                    return t.toDataURL("image/png", 1)
                },
                l = function(t) {
                    return "function" == typeof t
                },
                d = function(t) {
                    return void 0 === t
                },
                c = function(t, e, i) {
                    void 0 === e && (e = {}), void 0 === i && (i = "http://www.w3.org/2000/svg");
                    var n = document.createElementNS(i, t);
                    for (var a in e) n.setAttribute(a, e[a]);
                    return n
                },
                h = function(t, e, i) {
                    for (var n = [], a = "", o = "", r = 0, s = e.length; r < s; r++) {
                        if ("\n" === (o = e.charAt(r))) {
                            n.push(a), a = "";
                            continue
                        }
                        a += o, t.measureText(a).width > i && (n.push(a.substring(0, a.length - 1)), a = "", r--)
                    }
                    return n.push(a), n
                },
                u = function(t) {
                    var e = t.outerHTML.replace(/<(img|br|input|hr|embed)(.*?)>/g, "<$1$2/>").replace(/\n/g, "").replace(/\t/g, "").replace(/#/g, "%23");
                    return "data:image/svg+xml;charset=utf-8,".concat(e)
                },
                v = function(t, e) {
                    return d(t) ? e : t
                },
                p = function(t, e, i) {
                    void 0 === e && (e = void 0), void 0 === i && (i = void 0);
                    var n = new Image;
                    return n.setAttribute("crossOrigin", "Anonymous"), d(e) || (n.width = e), d(i) || (n.height = i), n.src = t, new Promise(function(t) {
                        n.onload = function() {
                            t(n)
                        }
                    })
                },
                m = {
                    width: 300,
                    height: 300,
                    rotate: 45,
                    layout: "default",
                    auxiliaryLine: !1,
                    translatePlacement: "middle",
                    contentType: "text",
                    content: "hello watermark-js-plus",
                    textType: "fill",
                    imageWidth: 0,
                    imageHeight: 0,
                    lineHeight: 30,
                    zIndex: 0x7fffffff,
                    backgroundPosition: "0 0",
                    backgroundRepeat: "repeat",
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontStyle: "",
                    fontVariant: "",
                    fontColor: "#000",
                    fontWeight: "normal",
                    filter: "none",
                    letterSpacing: "0px",
                    wordSpacing: "0px",
                    globalAlpha: .5,
                    mode: "default",
                    mutationObserve: !0,
                    monitorProtection: !1,
                    movable: !1,
                    parent: "body",
                    onSuccess: function() {},
                    onBeforeDestroy: function() {},
                    onDestroyed: function() {},
                    onObserveError: function() {}
                },
                y = function(t, e, i) {
                    var n = t.getContext("2d");
                    if (null === n) throw Error("get context error");
                    n.font = "".concat(e.fontStyle, " ").concat(e.fontVariant, " ").concat(e.fontWeight, " ").concat(e.fontSize, " ").concat(e.fontFamily), n.filter = e.filter, n.letterSpacing = e.letterSpacing, n.wordSpacing = e.wordSpacing, (null == e ? void 0 : e.rotate) && (e.rotate = (360 - e.rotate % 360) * (Math.PI / 180)), d(i.textRowMaxWidth) && (e.textRowMaxWidth = e.width);
                    var a = {
                        image: {
                            rect: {
                                width: e.imageWidth,
                                height: e.imageHeight
                            },
                            position: {
                                x: 0,
                                y: 0
                            }
                        },
                        textLine: {
                            data: [],
                            yOffsetValue: 0
                        },
                        advancedStyleParams: {
                            linear: {
                                x0: 0,
                                x1: 0
                            },
                            radial: {
                                x0: 0,
                                y0: 0,
                                r0: 0,
                                x1: 0,
                                y1: 0,
                                r1: 0
                            },
                            conic: {
                                x: 0,
                                y: 0,
                                startAngle: 0
                            },
                            pattern: {}
                        }
                    };
                    switch (e.contentType) {
                        case "text":
                            a.textLine.data = [e.content];
                            break;
                        case "multi-line-text":
                            a.textLine.data = h(n, e.content, e.textRowMaxWidth)
                    }
                    var o = e.width / 2,
                        r = e.height / 2,
                        s = "middle",
                        l = "center";
                    switch (d(null == i ? void 0 : i.translateX) || d(null == i ? void 0 : i.translateY) ? (a.advancedStyleParams.linear.x0 = -e.width / 2, a.advancedStyleParams.linear.x1 = e.width / 2, a.advancedStyleParams.radial.r0 = 0, a.advancedStyleParams.radial.r1 = e.width / 2) : (o = null == i ? void 0 : i.translateX, r = null == i ? void 0 : i.translateY, s = "top", l = "left"), i.translatePlacement) {
                        case "top":
                            o = e.width / 2, r = 0, s = "top", a.advancedStyleParams.linear.x0 = -e.width / 2, a.advancedStyleParams.linear.x1 = e.width / 2, a.advancedStyleParams.radial.y0 = a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.radial.y1 = a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.conic.y = a.textLine.data.length * e.lineHeight / 2;
                            break;
                        case "top-start":
                            o = 0, r = 0, s = "top", l = "start", a.advancedStyleParams.linear.x0 = 0, a.advancedStyleParams.linear.x1 = e.width, a.advancedStyleParams.radial.x0 = e.width / 2, a.advancedStyleParams.radial.y0 = a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.radial.x1 = e.width / 2, a.advancedStyleParams.radial.y1 = a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.conic.x = e.width / 2, a.advancedStyleParams.conic.y = a.textLine.data.length * e.lineHeight / 2;
                            break;
                        case "top-end":
                            o = e.width, r = 0, s = "top", l = "end", a.advancedStyleParams.linear.x0 = 0, a.advancedStyleParams.linear.x1 = -e.width, a.advancedStyleParams.radial.x0 = -e.width / 2, a.advancedStyleParams.radial.y0 = a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.radial.x1 = -e.width / 2, a.advancedStyleParams.radial.y1 = a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.conic.x = -e.width / 2, a.advancedStyleParams.conic.y = a.textLine.data.length * e.lineHeight / 2;
                            break;
                        case "bottom":
                            o = e.width / 2, r = e.height, s = "bottom", a.advancedStyleParams.linear.x0 = -e.width / 2, a.advancedStyleParams.linear.x1 = e.width / 2, a.advancedStyleParams.radial.y0 = -a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.radial.y1 = -a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.conic.x = 0, a.advancedStyleParams.conic.y = -a.textLine.data.length * e.lineHeight / 2;
                            break;
                        case "bottom-start":
                            o = 0, r = e.height, s = "bottom", l = "start", a.advancedStyleParams.linear.x0 = 0, a.advancedStyleParams.linear.x1 = e.width, a.advancedStyleParams.radial.x0 = e.width / 2, a.advancedStyleParams.radial.y0 = -a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.radial.x1 = e.width / 2, a.advancedStyleParams.radial.y1 = -a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.conic.x = e.width / 2, a.advancedStyleParams.conic.y = -a.textLine.data.length * e.lineHeight / 2;
                            break;
                        case "bottom-end":
                            o = e.width, r = e.height, s = "bottom", l = "end", a.advancedStyleParams.linear.x0 = 0, a.advancedStyleParams.linear.x1 = -e.width, a.advancedStyleParams.radial.x0 = -e.width / 2, a.advancedStyleParams.radial.y0 = -a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.radial.x1 = -e.width / 2, a.advancedStyleParams.radial.y1 = -a.textLine.data.length * e.lineHeight / 2, a.advancedStyleParams.conic.x = -e.width / 2, a.advancedStyleParams.conic.y = -a.textLine.data.length * e.lineHeight / 2;
                            break;
                        case "left":
                            o = 0, r = e.height / 2, l = "start", a.advancedStyleParams.linear.x0 = 0, a.advancedStyleParams.linear.x1 = e.width, a.advancedStyleParams.radial.x0 = e.width / 2, a.advancedStyleParams.radial.x1 = e.width / 2, a.advancedStyleParams.conic.x = e.width / 2, a.advancedStyleParams.conic.y = 0;
                            break;
                        case "right":
                            o = e.width, r = e.height / 2, l = "end", a.advancedStyleParams.linear.x0 = 0, a.advancedStyleParams.linear.x1 = -e.width, a.advancedStyleParams.radial.x0 = -e.width / 2, a.advancedStyleParams.radial.x1 = -e.width / 2, a.advancedStyleParams.conic.x = -e.width / 2, a.advancedStyleParams.conic.y = 0
                    }
                    if (e.translateX = o, e.translateY = r, d(null == i ? void 0 : i.textBaseline) && (e.textBaseline = s), d(null == i ? void 0 : i.textAlign) && (e.textAlign = l), ["text", "multi-line-text"].includes(e.contentType)) switch (e.textBaseline) {
                        case "middle":
                            a.textLine.yOffsetValue = (a.textLine.data.length - 1) * e.lineHeight / 2;
                            break;
                        case "bottom":
                        case "alphabetic":
                        case "ideographic":
                            a.textLine.yOffsetValue = (a.textLine.data.length - 1) * e.lineHeight + (e.lineHeight - parseInt(e.fontSize)) / 2;
                            break;
                        case "top":
                        case "hanging":
                            a.textLine.yOffsetValue = -e.lineHeight / 2 + parseInt(e.fontSize) / 2
                    }
                    return a
                },
                g = function(t) {
                    "undefined" != typeof window && t && (Object.defineProperty(window, "MutationObserver", {
                        writable: !1,
                        configurable: !1
                    }), Object.defineProperty(window, "requestAnimationFrame", {
                        writable: !1,
                        configurable: !1
                    }))
                },
                f = function() {
                    function t(e, i) {
                        this.props = e, this.options = i, this.canvas = t.createCanvas(this.options.width, this.options.height), this.recommendOptions = y(this.canvas, this.options, this.props)
                    }
                    return t.createCanvas = function(t, e) {
                        var i, n = window.devicePixelRatio || 1,
                            a = document.createElement("canvas");
                        return a.width = t * n, a.height = e * n, a.style.width = "".concat(t, "px"), a.style.height = "".concat(e, "px"), null === (i = a.getContext("2d")) || void 0 === i || i.setTransform(n, 0, 0, n, 0, 0), a
                    }, t.clearCanvas = function(t) {
                        var e = t.getContext("2d");
                        if (null === e) throw Error("get context error");
                        e.restore(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height);
                        var i = window.devicePixelRatio || 1;
                        e.setTransform(i, 0, 0, i, 0, 0)
                    }, t.prototype.getCanvas = function() {
                        return this.canvas
                    }, t.prototype.clear = function() {
                        t.clearCanvas(this.canvas)
                    }, t.prototype.draw = function() {
                        var t = this,
                            e = this.canvas.getContext("2d");
                        if (null === e) throw Error("get context error");
                        return this.options.auxiliaryLine && (e.beginPath(), e.rect(0, 0, this.options.width, this.options.height), e.lineWidth = 1, e.strokeStyle = "#000", e.stroke(), e.closePath(), e.beginPath(), e.rect(this.options.translateX, this.options.translateY, 1, 1), e.lineWidth = 1, e.strokeStyle = "#f00", e.stroke(), e.closePath()), this.setStyle(e), e.save(), e.translate(this.options.translateX, this.options.translateY), e.rotate(this.options.rotate), new Promise(function(i) {
                            switch (t.options.contentType) {
                                case "text":
                                    t.drawText(e, i);
                                    break;
                                case "image":
                                    t.drawImage(e, i);
                                    break;
                                case "multi-line-text":
                                    t.drawMultiLineText(e, i);
                                    break;
                                case "rich-text":
                                    t.drawRichText(e, i)
                            }
                        })
                    }, t.prototype.setStyle = function(t) {
                        var e, i = "fillStyle";
                        "stroke" === this.options.textType && (i = "strokeStyle");
                        var n = this.options.fontColor;
                        if (null === (e = this.options) || void 0 === e ? void 0 : e.advancedStyle) switch (this.options.advancedStyle.type) {
                            case "linear":
                                n = this.createLinearGradient(t);
                                break;
                            case "radial":
                                n = this.createRadialGradient(t);
                                break;
                            case "conic":
                                n = this.createConicGradient(t);
                                break;
                            case "pattern":
                                n = this.createPattern(t)
                        }
                        t[i] && n && (t[i] = n), this.options.textAlign && (t.textAlign = this.options.textAlign), this.options.textBaseline && (t.textBaseline = this.options.textBaseline), t.globalAlpha = this.options.globalAlpha, this.options.shadowStyle && (t.shadowBlur = v(this.options.shadowStyle.shadowBlur, 0), t.shadowColor = v(this.options.shadowStyle.shadowColor, "#00000000"), t.shadowOffsetX = v(this.options.shadowStyle.shadowOffsetX, 0), t.shadowOffsetY = v(this.options.shadowStyle.shadowOffsetY, 0)), l(this.options.extraDrawFunc) && this.options.extraDrawFunc(t)
                    }, t.prototype.createLinearGradient = function(t) {
                        var e, i, n, a, o, r, s, l, d, c, h, u, p, m, y, g = t.createLinearGradient(v(null === (n = null === (i = null === (e = this.options.advancedStyle) || void 0 === e ? void 0 : e.params) || void 0 === i ? void 0 : i.linear) || void 0 === n ? void 0 : n.x0, this.recommendOptions.advancedStyleParams.linear.x0), v(null === (r = null === (o = null === (a = this.options.advancedStyle) || void 0 === a ? void 0 : a.params) || void 0 === o ? void 0 : o.linear) || void 0 === r ? void 0 : r.y0, 0), v(null === (d = null === (l = null === (s = this.options.advancedStyle) || void 0 === s ? void 0 : s.params) || void 0 === l ? void 0 : l.linear) || void 0 === d ? void 0 : d.x1, this.recommendOptions.advancedStyleParams.linear.x1), v(null === (u = null === (h = null === (c = this.options.advancedStyle) || void 0 === c ? void 0 : c.params) || void 0 === h ? void 0 : h.linear) || void 0 === u ? void 0 : u.y1, 0));
                        return null === (y = null === (m = null === (p = this.options) || void 0 === p ? void 0 : p.advancedStyle) || void 0 === m ? void 0 : m.colorStops) || void 0 === y || y.forEach(function(t) {
                            g.addColorStop(t.offset, t.color)
                        }), g
                    }, t.prototype.createConicGradient = function(t) {
                        var e, i, n, a, o, r, s, l, d, c, h, u, p, m, y, g = t.createConicGradient(v(null === (a = null === (n = null === (i = null === (e = this.options) || void 0 === e ? void 0 : e.advancedStyle) || void 0 === i ? void 0 : i.params) || void 0 === n ? void 0 : n.conic) || void 0 === a ? void 0 : a.startAngle, 0), v(null === (l = null === (s = null === (r = null === (o = this.options) || void 0 === o ? void 0 : o.advancedStyle) || void 0 === r ? void 0 : r.params) || void 0 === s ? void 0 : s.conic) || void 0 === l ? void 0 : l.x, this.recommendOptions.advancedStyleParams.conic.x), v(null === (u = null === (h = null === (c = null === (d = this.options) || void 0 === d ? void 0 : d.advancedStyle) || void 0 === c ? void 0 : c.params) || void 0 === h ? void 0 : h.conic) || void 0 === u ? void 0 : u.y, this.recommendOptions.advancedStyleParams.conic.y));
                        return null === (y = null === (m = null === (p = this.options) || void 0 === p ? void 0 : p.advancedStyle) || void 0 === m ? void 0 : m.colorStops) || void 0 === y || y.forEach(function(t) {
                            g.addColorStop(t.offset, t.color)
                        }), g
                    }, t.prototype.createRadialGradient = function(t) {
                        var e, i, n, a, o, r, s, l, d, c, h, u, p, m, y, g, f, w, x, b, S, k, P, C, O, E, L, T = t.createRadialGradient(v(null === (a = null === (n = null === (i = null === (e = this.options) || void 0 === e ? void 0 : e.advancedStyle) || void 0 === i ? void 0 : i.params) || void 0 === n ? void 0 : n.radial) || void 0 === a ? void 0 : a.x0, this.recommendOptions.advancedStyleParams.radial.x0), v(null === (l = null === (s = null === (r = null === (o = this.options) || void 0 === o ? void 0 : o.advancedStyle) || void 0 === r ? void 0 : r.params) || void 0 === s ? void 0 : s.radial) || void 0 === l ? void 0 : l.y0, this.recommendOptions.advancedStyleParams.radial.y0), v(null === (u = null === (h = null === (c = null === (d = this.options) || void 0 === d ? void 0 : d.advancedStyle) || void 0 === c ? void 0 : c.params) || void 0 === h ? void 0 : h.radial) || void 0 === u ? void 0 : u.r0, this.recommendOptions.advancedStyleParams.radial.r0), v(null === (g = null === (y = null === (m = null === (p = this.options) || void 0 === p ? void 0 : p.advancedStyle) || void 0 === m ? void 0 : m.params) || void 0 === y ? void 0 : y.radial) || void 0 === g ? void 0 : g.x1, this.recommendOptions.advancedStyleParams.radial.x1), v(null === (b = null === (x = null === (w = null === (f = this.options) || void 0 === f ? void 0 : f.advancedStyle) || void 0 === w ? void 0 : w.params) || void 0 === x ? void 0 : x.radial) || void 0 === b ? void 0 : b.y1, this.recommendOptions.advancedStyleParams.radial.y1), v(null === (C = null === (P = null === (k = null === (S = this.options) || void 0 === S ? void 0 : S.advancedStyle) || void 0 === k ? void 0 : k.params) || void 0 === P ? void 0 : P.radial) || void 0 === C ? void 0 : C.r1, this.recommendOptions.advancedStyleParams.radial.r1));
                        return null === (L = null === (E = null === (O = this.options) || void 0 === O ? void 0 : O.advancedStyle) || void 0 === E ? void 0 : E.colorStops) || void 0 === L || L.forEach(function(t) {
                            T.addColorStop(t.offset, t.color)
                        }), T
                    }, t.prototype.createPattern = function(t) {
                        var e, i, n, a, o, r, s, l;
                        return t.createPattern(null === (a = null === (n = null === (i = null === (e = this.options) || void 0 === e ? void 0 : e.advancedStyle) || void 0 === i ? void 0 : i.params) || void 0 === n ? void 0 : n.pattern) || void 0 === a ? void 0 : a.image, (null === (l = null === (s = null === (r = null === (o = this.options) || void 0 === o ? void 0 : o.advancedStyle) || void 0 === r ? void 0 : r.params) || void 0 === s ? void 0 : s.pattern) || void 0 === l ? void 0 : l.repetition) || "")
                    }, t.prototype.setText = function(t, e) {
                        var i = "fillText";
                        "stroke" === this.options.textType && (i = "strokeText"), t[i] && t[i](e.text, e.x, e.y, e.maxWidth)
                    }, t.prototype.drawText = function(t, e) {
                        this.setText(t, {
                            text: this.options.content,
                            x: 0,
                            y: 0 - this.recommendOptions.textLine.yOffsetValue,
                            maxWidth: this.options.textRowMaxWidth || this.options.width
                        }), e(t.canvas)
                    }, t.prototype.drawImage = function(t, e) {
                        var i = this;
                        p(this.options.image).then(function(n) {
                            var a = i.getImageRect(n),
                                o = a.width,
                                r = a.height,
                                s = i.getDrawImagePosition(o, r);
                            t.drawImage(n, s.x, s.y, o, r), e(t.canvas)
                        })
                    }, t.prototype.drawMultiLineText = function(t, e) {
                        var i = this,
                            n = this.recommendOptions.textLine.data,
                            a = this.recommendOptions.textLine.yOffsetValue;
                        n.forEach(function(e, n) {
                            i.setText(t, {
                                text: e,
                                x: 0,
                                y: i.options.lineHeight * n - a,
                                maxWidth: i.options.textRowMaxWidth || i.options.width
                            })
                        }), e(t.canvas)
                    }, t.prototype.drawRichText = function(t, e) {
                        return o(this, void 0, void 0, function() {
                            var i, n = this;
                            return r(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        var s;
                                        return [4, (s = this.options, o(void 0, void 0, void 0, function() {
                                            var e, i, n, a, l, d, h, u, v;
                                            return r(this, function(p) {
                                                switch (p.label) {
                                                    case 0:
                                                        return e = c("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg"
                                                        }), (i = document.createElement("div")).setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), i.style.cssText = "\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font: ".concat(t.font, ";\n  color: ").concat(s.fontColor, ";\n"), i.innerHTML = "<div class='rich-text-content'>".concat(s.content, "</div>"), document.body.appendChild(i), [4, function(t) {
                                                            return o(this, void 0, void 0, function() {
                                                                var e, i, n, a, o;
                                                                return r(this, function(s) {
                                                                    switch (s.label) {
                                                                        case 0:
                                                                            e = t.querySelectorAll("img"), i = function(t) {
                                                                                var e, i, n, a;
                                                                                return r(this, function(o) {
                                                                                    switch (o.label) {
                                                                                        case 0:
                                                                                            if (!(e = t.getAttribute("src"))) return [3, 6];
                                                                                            o.label = 1;
                                                                                        case 1:
                                                                                            return o.trys.push([1, 5, , 6]), [4, fetch(e)];
                                                                                        case 2:
                                                                                            return [4, o.sent().blob()];
                                                                                        case 3:
                                                                                            return i = o.sent(), [4, new Promise(function(t, e) {
                                                                                                var n = new FileReader;
                                                                                                n.onloadend = function() {
                                                                                                    return t(n.result)
                                                                                                }, n.onerror = e, n.readAsDataURL(i)
                                                                                            })];
                                                                                        case 4:
                                                                                            return "string" == typeof(n = o.sent()) && t.setAttribute("src", n), [3, 6];
                                                                                        case 5:
                                                                                            return a = o.sent(), console.error("Error converting ".concat(e, " to base64:"), a), [3, 6];
                                                                                        case 6:
                                                                                            return [2]
                                                                                    }
                                                                                })
                                                                            }, n = 0, a = Array.from(e), s.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return o = a[n], [5, i(o)];
                                                                        case 2:
                                                                            s.sent(), s.label = 3;
                                                                        case 3:
                                                                            return n++, [3, 1];
                                                                        case 4:
                                                                            return [2]
                                                                    }
                                                                })
                                                            })
                                                        }(i)];
                                                    case 1:
                                                        return p.sent(), a = null == (n = null === (v = i.querySelector(".rich-text-content")) || void 0 === v ? void 0 : v.getBoundingClientRect()) ? void 0 : n.width, l = null == n ? void 0 : n.height, document.body.removeChild(i), d = s.richTextWidth || a || s.width, h = s.richTextHeight || l || s.height, e.setAttribute("width", d.toString()), e.setAttribute("height", h.toString()), (u = c("foreignObject", {
                                                            width: d.toString(),
                                                            height: h.toString()
                                                        })).appendChild(i), e.appendChild(u), [2, {
                                                            element: e,
                                                            width: d,
                                                            height: h
                                                        }]
                                                }
                                            })
                                        }))];
                                    case 1:
                                        return p(u((i = a.sent()).element), i.width, i.height).then(function(i) {
                                            var a = n.getDrawImagePosition(i.width, i.height);
                                            t.drawImage(i, a.x, a.y, i.width, i.height), e(t.canvas)
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.getImageRect = function(t) {
                        var e = {
                            width: this.options.imageWidth || 0,
                            height: this.options.imageHeight || 0
                        };
                        switch (!0) {
                            case 0 !== e.width && 0 === e.height:
                                e.height = e.width * t.height / t.width;
                                break;
                            case 0 === e.width && 0 !== e.height:
                                e.width = e.height * t.width / t.height;
                                break;
                            case 0 === e.width && 0 === e.height:
                                e.width = t.width, e.height = t.height
                        }
                        return e
                    }, t.prototype.getDrawImagePosition = function(t, e) {
                        var i, n, a = {
                            x: -t / 2,
                            y: -e / 2
                        };
                        switch (this.options.translatePlacement) {
                            case "top":
                                a.x = -t / 2, a.y = 0;
                                break;
                            case "top-start":
                                a.x = 0, a.y = 0;
                                break;
                            case "top-end":
                                a.x = -t, a.y = 0;
                                break;
                            case "bottom":
                                a.x = -t / 2, a.y = -e;
                                break;
                            case "bottom-start":
                                a.x = 0, a.y = -e;
                                break;
                            case "bottom-end":
                                a.x = -t, a.y = -e;
                                break;
                            case "left":
                                a.x = 0, a.y = -e / 2;
                                break;
                            case "right":
                                a.x = -t, a.y = -e / 2
                        }
                        return d(null === (i = this.props) || void 0 === i ? void 0 : i.translateX) || (a.x = 0), d(null === (n = this.props) || void 0 === n ? void 0 : n.translateY) || (a.y = 0), a
                    }, t
                }(),
                w = function() {
                    function t(t, e) {
                        var i, n, a, o, r, s;
                        this.options = t, this.partialWidth = this.options.width, this.partialHeight = this.options.height, this.rows = (null === (i = this.options.gridLayoutOptions) || void 0 === i ? void 0 : i.rows) || 1, this.cols = (null === (n = this.options.gridLayoutOptions) || void 0 === n ? void 0 : n.cols) || 1, this.matrix = (null === (a = this.options.gridLayoutOptions) || void 0 === a ? void 0 : a.matrix) || (r = this.rows, s = this.cols, Array.from({
                            length: r
                        }, function() {
                            return Array(s).fill(1)
                        })), this.gap = (null === (o = this.options.gridLayoutOptions) || void 0 === o ? void 0 : o.gap) || [0, 0], this.partialCanvas = e
                    }
                    return t.prototype.draw = function() {
                        var t, e, i, n, a, o, r, s, l = f.createCanvas((null === (t = this.options.gridLayoutOptions) || void 0 === t ? void 0 : t.width) || this.partialWidth * this.cols + this.gap[0] * this.cols, (null === (e = this.options.gridLayoutOptions) || void 0 === e ? void 0 : e.height) || this.partialHeight * this.rows + this.gap[1] * this.rows),
                            d = l.getContext("2d");
                        (null === (i = this.options.gridLayoutOptions) || void 0 === i ? void 0 : i.backgroundImage) && (null == d || d.drawImage(null === (n = this.options.gridLayoutOptions) || void 0 === n ? void 0 : n.backgroundImage, 0, 0, null === (a = this.options.gridLayoutOptions) || void 0 === a ? void 0 : a.width, null === (o = this.options.gridLayoutOptions) || void 0 === o ? void 0 : o.height));
                        for (var c = 0; c < this.rows; c++)
                            for (var h = 0; h < this.cols; h++)(null === (s = null === (r = this.matrix) || void 0 === r ? void 0 : r[c]) || void 0 === s ? void 0 : s[h]) && (null == d || d.drawImage(this.partialCanvas, this.partialWidth * h + this.gap[0] * h, this.partialHeight * c + this.gap[1] * c, this.partialWidth, this.partialHeight));
                        return l
                    }, t
                }(),
                x = function(t, e) {
                    return "grid" === t.layout ? new w(t, e).draw() : e
                },
                b = function(t) {
                    var e, i, n;
                    if ("grid" === t.layout) {
                        var a = (null === (e = t.gridLayoutOptions) || void 0 === e ? void 0 : e.cols) || 1,
                            o = (null === (i = t.gridLayoutOptions) || void 0 === i ? void 0 : i.rows) || 1,
                            r = (null === (n = t.gridLayoutOptions) || void 0 === n ? void 0 : n.gap) || [0, 0];
                        return [t.width * a + r[0] * a, t.height * o + r[1] * o]
                    }
                    return [t.width, t.height]
                },
                S = function(t) {
                    function e(e) {
                        return void 0 === e && (e = {}), t.call(this, a(a({}, e), {
                            globalAlpha: .005,
                            mode: "blind"
                        })) || this
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function i() {
                            this.constructor = t
                        }
                        n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                    }(e, t), e.decode = function(t) {
                        var e = t.url,
                            i = void 0 === e ? "" : e,
                            n = t.fillColor,
                            a = void 0 === n ? "#000" : n,
                            o = t.compositeOperation,
                            r = void 0 === o ? "color-burn" : o,
                            d = t.mode,
                            c = t.compositeTimes,
                            h = void 0 === c ? 3 : c,
                            u = t.onSuccess;
                        if (i && "canvas" === (void 0 === d ? "canvas" : d)) {
                            var v = new Image;
                            v.src = i, v.addEventListener("load", function() {
                                var t = v.width,
                                    e = v.height,
                                    i = f.createCanvas(t, e),
                                    n = i.getContext("2d");
                                if (!n) throw Error("get context error");
                                n.drawImage(v, 0, 0, t, e), n.globalCompositeOperation = r, n.fillStyle = a;
                                for (var o = 0; o < h; o++) n.fillRect(0, 0, t, e);
                                var d = s(i);
                                l(u) && (null == u || u(d))
                            })
                        }
                    }, e
                }(function() {
                    function t(t) {
                        void 0 === t && (t = {}), this.parentElement = document.body, this.isCreating = !1, this.props = t, this.options = a(a({}, m), t), this.changeParentElement(this.options.parent), this.watermarkCanvas = new f(this.props, this.options), g(this.options.monitorProtection)
                    }
                    return t.prototype.changeOptions = function() {
                        return o(this, arguments, void 0, function(t, e, i) {
                            return void 0 === t && (t = {}), void 0 === e && (e = "overwrite"), void 0 === i && (i = !0), r(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.initConfigData(t, e), g(this.options.monitorProtection), !i) return [3, 2];
                                        return this.remove(), [4, this.create()];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.create = function() {
                        return o(this, void 0, void 0, function() {
                            var t, e, i, n, a, o, l, c, h, u, v, p;
                            return r(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.isCreating) return [2];
                                        if (this.isCreating = !0, !this.validateUnique() || !this.validateContent()) return this.isCreating = !1, [2];
                                        return t = d(this.watermarkDom), [4, null === (o = this.watermarkCanvas) || void 0 === o ? void 0 : o.draw()];
                                    case 1:
                                        if (r.sent(), this.layoutCanvas = x(this.options, null === (l = this.watermarkCanvas) || void 0 === l ? void 0 : l.getCanvas()), e = s(this.layoutCanvas), null === (c = this.watermarkCanvas) || void 0 === c || c.clear(), this.watermarkDom = document.createElement("div"), i = document.createElement("div"), this.watermarkDom.__WATERMARK__ = "watermark", this.watermarkDom.__WATERMARK__INSTANCE__ = this, n = this.checkParentElementType(), this.watermarkDom.style.cssText = "\n      z-index:".concat(this.options.zIndex, "!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;\n      ").concat("custom" === n ? "top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;" : "position:relative!important;", "\n    "), a = b(this.options), i.style.cssText = "\n      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;\n      position:".concat("root" === n ? "fixed" : "absolute", "!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;\n      z-index:").concat(this.options.zIndex, "!important;background-image:url(").concat(e, ")!important;background-repeat:").concat(this.options.backgroundRepeat, "!important;\n      background-size:").concat(a[0], "px ").concat(a[1], "px!important;background-position:").concat(this.options.backgroundPosition, ";\n      ").concat(this.options.movable ? "animation: 200s ease 0s infinite normal none running watermark !important;" : "", "\n    "), this.watermarkDom.appendChild(i), this.parentElement.appendChild(this.watermarkDom), this.options.mutationObserve) try {
                                            this.bindMutationObserve()
                                        } catch (t) {
                                            null === (u = (h = this.options).onObserveError) || void 0 === u || u.call(h)
                                        }
                                        return t && (null === (p = (v = this.options).onSuccess) || void 0 === p || p.call(v)), this.isCreating = !1, [2]
                                }
                            })
                        })
                    }, t.prototype.destroy = function() {
                        this.remove(), this.watermarkDom = void 0
                    }, t.prototype.check = function() {
                        return o(this, void 0, void 0, function() {
                            return r(this, function(t) {
                                return [2, this.parentElement.contains(this.watermarkDom)]
                            })
                        })
                    }, t.prototype.remove = function() {
                        var t, e, i, n, a, o, r, s;
                        null === (e = (t = this.options).onBeforeDestroy) || void 0 === e || e.call(t), null === (i = this.observer) || void 0 === i || i.disconnect(), null === (n = this.parentObserve) || void 0 === n || n.disconnect(), this.unbindCheckWatermarkElementEvent(), null === (o = null === (a = this.watermarkDom) || void 0 === a ? void 0 : a.parentNode) || void 0 === o || o.removeChild(this.watermarkDom), null === (s = (r = this.options).onDestroyed) || void 0 === s || s.call(r)
                    }, t.prototype.initConfigData = function(t, e) {
                        var i = this;
                        void 0 === e && (e = "overwrite"), "append" === e ? Object.keys(t).forEach(function(e) {
                            i.props && (i.props[e] = t[e])
                        }) : this.props = t, this.options = a(a({}, m), this.props), this.changeParentElement(this.options.parent), this.watermarkCanvas = new f(this.props, this.options)
                    }, t.prototype.changeParentElement = function(t) {
                        if ("string" == typeof t) {
                            var e = document.querySelector(t);
                            e && (this.parentElement = e)
                        } else this.parentElement = t;
                        this.parentElement || console.error("[WatermarkJsPlus]: please pass a valid parent element.")
                    }, t.prototype.validateUnique = function() {
                        var t = !0;
                        return Array.from(this.parentElement.childNodes).forEach(function(e) {
                            t && Object.hasOwnProperty.call(e, "__WATERMARK__") && (t = !1)
                        }), t
                    }, t.prototype.validateContent = function() {
                        switch (this.options.contentType) {
                            case "image":
                                return Object.hasOwnProperty.call(this.options, "image");
                            case "multi-line-text":
                            case "rich-text":
                            case "text":
                                return this.options.content.length > 0
                        }
                    }, t.prototype.checkParentElementType = function() {
                        return ["html", "body"].includes(this.parentElement.tagName.toLocaleLowerCase()) ? "root" : "custom"
                    }, t.prototype.checkWatermarkElement = function() {
                        return o(this, void 0, void 0, function() {
                            return r(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.parentElement.contains(this.watermarkDom)) return [3, 2];
                                        return this.remove(), [4, this.create()];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return this.bindCheckWatermarkElementEvent(), [2]
                                }
                            })
                        })
                    }, t.prototype.bindMutationObserve = function() {
                        var t = this;
                        this.watermarkDom && (this.bindCheckWatermarkElementEvent(), this.observer = new MutationObserver(function(e) {
                            return o(t, void 0, void 0, function() {
                                return r(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!(e.length > 0)) return [3, 2];
                                            return this.remove(), [4, this.create()];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }), this.observer.observe(this.watermarkDom, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        }), this.parentObserve = new MutationObserver(function(e) {
                            return o(t, void 0, void 0, function() {
                                var t, i, n, a;
                                return r(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            t = 0, i = e, o.label = 1;
                                        case 1:
                                            if (!(t < i.length)) return [3, 4];
                                            if (!((null == (n = i[t]) ? void 0 : n.target) === this.watermarkDom || (null === (a = null == n ? void 0 : n.removedNodes) || void 0 === a ? void 0 : a[0]) === this.watermarkDom || "childList" === n.type && n.target === this.parentElement && n.target.lastChild !== this.watermarkDom)) return [3, 3];
                                            return this.remove(), [4, this.create()];
                                        case 2:
                                            o.sent(), o.label = 3;
                                        case 3:
                                            return t++, [3, 1];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }), this.parentObserve.observe(this.parentElement, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        }))
                    }, t.prototype.bindCheckWatermarkElementEvent = function() {
                        this.unbindCheckWatermarkElementEvent(), this.checkWatermarkElementRequestID = requestAnimationFrame(this.checkWatermarkElement.bind(this))
                    }, t.prototype.unbindCheckWatermarkElementEvent = function() {
                        d(this.checkWatermarkElementRequestID) || cancelAnimationFrame(this.checkWatermarkElementRequestID)
                    }, t
                }());
            ! function() {
                function t(t) {
                    var e;
                    void 0 === t && (t = {}), this.drew = !1, this.props = t, this.options = a(a({}, m), t), this.watermarkCanvas = new f(this.props, this.options), this.originalSrc = null === (e = this.props.dom) || void 0 === e ? void 0 : e.src, this.backgroundImage = this.getBackgroundImage()
                }
                t.prototype.create = function() {
                    return o(this, void 0, void 0, function() {
                        var t, e, i, n, o;
                        return r(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (this.drew) return [2];
                                    return [4, null === (t = this.watermarkCanvas) || void 0 === t ? void 0 : t.draw()];
                                case 1:
                                    return r.sent(), this.options.layout = "grid", this.options.gridLayoutOptions = a(a({}, this.options.gridLayoutOptions), {
                                        width: null === (e = this.backgroundImage) || void 0 === e ? void 0 : e.width,
                                        height: null === (i = this.backgroundImage) || void 0 === i ? void 0 : i.height,
                                        backgroundImage: this.backgroundImage
                                    }), this.layoutCanvas = x(this.options, null === (n = this.watermarkCanvas) || void 0 === n ? void 0 : n.getCanvas()), this.options.dom.src = s(this.layoutCanvas), null === (o = this.watermarkCanvas) || void 0 === o || o.clear(), this.drew = !0, [2]
                            }
                        })
                    })
                }, t.prototype.destroy = function() {
                    this.options.dom.src = this.originalSrc, this.drew = !1
                }, t.prototype.getBackgroundImage = function() {
                    if (this.options.dom) return this.options.dom
                }
            }()
        }
    }
]);