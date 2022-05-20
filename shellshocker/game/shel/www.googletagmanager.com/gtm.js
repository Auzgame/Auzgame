// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "41",

            "macros": [{
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "is_incognito"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "_ga"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieFlags", "value", "samesite=none;secure"]],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 7]]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-105800112-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__ctv"
            }, {
                "function": "__dbg"
            }, {
                "function": "__cid"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 1
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 2
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 3
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "1519513",
                "tag_id": 5
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 6
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 7
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 8
            }, {
                "function": "__paused",
                "vtp_originalTagType": "opt",
                "tag_id": 10
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "662950613",
                "vtp_conversionLabel": "u82gCJTLqdcBENWlj7wC",
                "vtp_rdp": false,
                "vtp_url": ["macro", 3],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 32
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 33
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 34
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 37
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "cookie_flags", "value", "samesite=none;secure"]],
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-79NWRZXYCB",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "vtp_enableSendFirstPartyUserDataForSgtm": true,
                "tag_id": 38
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 40
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 42
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 44
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 46
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 48
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 50
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 52
            }, {
                "function": "__cl",
                "tag_id": 53
            }, {
                "function": "__cl",
                "tag_id": 54
            }, {
                "function": "__cl",
                "tag_id": 55
            }, {
                "function": "__cl",
                "tag_id": 56
            }, {
                "function": "__cl",
                "tag_id": 57
            }, {
                "function": "__cl",
                "tag_id": 58
            }, {
                "function": "__cl",
                "tag_id": 59
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "90,99",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "12812352_26",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 60
            }, {
                "function": "__cl",
                "tag_id": 61
            }, {
                "function": "__cl",
                "tag_id": 62
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": false,
                "vtp_elementSelector": "div.vip-club-cta",
                "vtp_firingFrequency": "MANY_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "90",
                "vtp_uniqueTriggerId": "12812352_43",
                "tag_id": 63
            }, {
                "function": "__cl",
                "tag_id": 64
            }, {
                "function": "__cl",
                "tag_id": 65
            }, {
                "function": "__cl",
                "tag_id": 66
            }, {
                "function": "__cl",
                "tag_id": 67
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"446896919250308\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=446896919250308\u0026amp;ev=PageView\n\n\u0026amp;noscript=1\"\u003E\n\n\u003C\/noscript\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 4
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "Buy It!"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.load"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "ss_button btn_green bevel_green btn_sm"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Play"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "fa fa-play"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "PLAY"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "fa fa-play fa-sm"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "paper-doll--click-container"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "detected_incognito"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "Join VIP"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "https:\/\/shellshock.io\/img\/mobile\/shell-mobile-cta-min.png"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "(^$|((^|,)12812352_43($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "Hurry"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "PLAY"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "ss_button btn_big btn_green bevel_green fullwidth"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "https:\/\/shellshock.io\/img\/kotc\/new-game-mode-king-of-coop.png"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "SHOP"
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 0]
                ],
                [
                    ["if", 2],
                    ["add", 1, 7, 8, 9, 12, 3, 10, 35, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34]
                ],
                [
                    ["if", 3],
                    ["add", 2, 27]
                ],
                [
                    ["if", 1, 4, 5],
                    ["add", 4]
                ],
                [
                    ["if", 1, 6],
                    ["add", 4]
                ],
                [
                    ["if", 1, 7],
                    ["add", 5]
                ],
                [
                    ["if", 1, 8],
                    ["add", 5]
                ],
                [
                    ["if", 1, 9],
                    ["add", 6]
                ],
                [
                    ["if", 10, 11],
                    ["add", 11]
                ],
                [
                    ["if", 1, 12],
                    ["add", 13]
                ],
                [
                    ["if", 1, 13],
                    ["add", 14]
                ],
                [
                    ["if", 14, 15],
                    ["add", 15]
                ],
                [
                    ["if", 1, 16],
                    ["add", 16]
                ],
                [
                    ["if", 1, 17, 18],
                    ["add", 17]
                ],
                [
                    ["if", 1, 19],
                    ["add", 18]
                ],
                [
                    ["if", 1, 20],
                    ["add", 19]
                ]
            ]
        },
        "runtime": [
            [50, "__hjtc", [46, "a"],
                [52, "b", ["require", "createArgumentsQueue"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "setInWindow"]],
                ["b", "hj", "hj.q"],
                [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                ["f", "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"]],
                ["d", [0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]], ".js?sv=7"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"]
                ]
            ]
        ],
        "permissions": {
            "__hjtc": {
                "access_globals": {
                    "keys": [{
                        "key": "hj",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "hj.q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_hjSettings",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.hotjar.com\/c\/hotjar-*"]
                }
            }
        }

        ,
        "security_groups": {
            "nonGoogleScripts": ["__hjtc"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = function(a) {
            return a.raw = a
        },
        ea = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ca(a)
            }
        },
        fa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ha,
        ma = function(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Zk = b.prototype
        },
        na = this || self,
        oa = function(a) {
            return a
        };
    var pa = function(a, b) {
        this.g = a;
        this.o = b
    };
    var qa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        ra = function() {
            this.D = {};
            this.B = !1;
            this.I = {}
        },
        sa = function(a, b) {
            var c = [],
                d;
            for (d in a.D)
                if (a.D.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    ra.prototype.get = function(a) {
        return this.D["dust." + a]
    };
    ra.prototype.set = function(a, b) {
        this.B || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.D[a] = b))
    };
    ra.prototype.has = function(a) {
        return this.D.hasOwnProperty("dust." + a)
    };
    var ta = function(a, b) {
        b = "dust." + b;
        a.B || a.I.hasOwnProperty(b) || delete a.D[b]
    };
    ra.prototype.Nb = function() {
        this.B = !0
    };
    var va = function(a) {
        this.o = new ra;
        this.g = [];
        this.B = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (qa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = va.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof va ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    l.set = function(a, b) {
        if (!this.B)
            if ("length" === a) {
                if (!qa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else qa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    l.get = function(a) {
        return "length" === a ? this.length() : qa(a) ? this.g[Number(a)] : this.o.get(a)
    };
    l.length = function() {
        return this.g.length
    };
    l.Mb = function() {
        for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new va(a)
    };
    var wa = function(a, b) {
        qa(b) ? delete a.g[Number(b)] : ta(a.o, b)
    };
    l = va.prototype;
    l.pop = function() {
        return this.g.pop()
    };
    l.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.shift = function() {
        return this.g.shift()
    };
    l.splice = function(a, b, c) {
        return new va(this.g.splice.apply(this.g, arguments))
    };
    l.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.has = function(a) {
        return qa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    };
    l.Nb = function() {
        this.B = !0;
        Object.freeze(this.g);
        this.o.Nb()
    };
    var za = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].oe + g > b[f].max) throw Error("Quota exceeded");
                b[f].oe += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                Zj: function(f) {
                    c = f
                },
                ph: function() {
                    c && a(c, 1)
                },
                bk: function(f) {
                    d = f
                },
                Qb: function(f) {
                    d && a(d, f)
                },
                Bk: function(f, g) {
                    b[f] = b[f] || {
                        oe: 0
                    };
                    b[f].max = g
                },
                zj: function(f) {
                    return b[f] && b[f].oe || 0
                },
                reset: function() {
                    b = {}
                },
                lj: a
            };
        e.onFnConsume = e.Zj;
        e.consumeFn = e.ph;
        e.onStorageConsume = e.bk;
        e.consumeStorage = e.Qb;
        e.setMax = e.Bk;
        e.getConsumed = e.zj;
        e.reset = e.reset;
        e.consume = e.lj;
        return e
    };
    var Aa = function(a, b) {
        this.B = a;
        this.R = function(c, d, e) {
            return c.apply(d, e)
        };
        this.D = b;
        this.o = new ra;
        this.g = this.I = void 0
    };
    Aa.prototype.add = function(a, b) {
        Ba(this, a, b, !1)
    };
    var Ba = function(a, b, c, d) {
        if (!a.o.B)
            if (a.B.Qb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.o;
                e.set(b, c);
                e.I["dust." + b] = !0
            } else a.o.set(b, c)
    };
    Aa.prototype.set = function(a, b) {
        this.o.B || (!this.o.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : (this.B.Qb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
    };
    Aa.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.D ? this.D.get(a) : void 0
    };
    Aa.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.D || !this.D.has(a))
    };
    var Ca = function(a) {
        var b = new Aa(a.B, a);
        a.I && (b.I = a.I);
        b.R = a.R;
        b.g = a.g;
        return b
    };
    var Da = function() {},
        Ea = function(a) {
            return "function" === typeof a
        },
        m = function(a) {
            return "string" === typeof a
        },
        Fa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ga = Array.isArray,
        Ha = function(a, b) {
            if (a && Ga(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ia = function(a, b) {
            if (!Fa(a) || !Fa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        La = function(a, b) {
            for (var c = new Ka, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Ma = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Na = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Oa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Pa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Qa = function(a) {
            var b = [];
            if (Ga(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ra = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ta = function() {
            return Sa().getTime()
        },
        Ka = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ka.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ka.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Xa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ya = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Za = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        $a = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        ab = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        bb = /^\w{1,9}$/,
        cb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ma(a, function(d, e) {
                bb.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        db = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var eb = function(a, b) {
        ra.call(this);
        this.R = a;
        this.cb = b
    };
    ma(eb, ra);
    eb.prototype.toString = function() {
        return this.R
    };
    eb.prototype.Mb = function() {
        return new va(sa(this, 1))
    };
    eb.prototype.g = function(a, b) {
        a.B.ph();
        return this.cb.apply(new fb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    eb.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var hb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = gb(a, b[d]), c instanceof pa); d++);
            return c
        },
        gb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof eb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.I;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        fb = function(a, b) {
            this.o = a;
            this.g = b
        },
        G = function(a, b) {
            return Ga(b) ? gb(a.g, b) : b
        },
        H = function(a) {
            return a.o.R
        };
    var ib = function() {
        ra.call(this)
    };
    ma(ib, ra);
    ib.prototype.Mb = function() {
        return new va(sa(this, 1))
    };
    var jb = {
        control: function(a, b) {
            return new pa(a, G(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof va)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.B.Qb(a.length + f.length);
            return new eb(a, function() {
                return function(g) {
                    var h = Ca(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = G(this, k[n]), k[n] instanceof pa) return k[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new va(k));
                    var r = hb(h, f);
                    if (r instanceof pa) return "return" === r.g ? r.o : r
                }
            }())
        },
        list: function(a) {
            var b = this.g.B;
            b.Qb(arguments.length);
            for (var c = new va, d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.Qb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.B, c = new ib, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Qb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var kb = function() {
            this.B = za();
            this.g = new Aa(this.B)
        },
        lb = function(a, b, c) {
            var d = new eb(b, c);
            d.Nb();
            a.g.set(b, d)
        },
        mb = function(a, b, c) {
            jb.hasOwnProperty(b) && lb(a, c || b, jb[b])
        };
    kb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    };
    kb.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = gb(this.g, arguments[c]);
        return b
    };
    kb.prototype.D = function(a, b) {
        var c = Ca(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = gb(c, arguments[e]);
        return d
    };
    var nb, ob = function() {
        if (void 0 === nb) {
            var a = null,
                b = na.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (c) {
                    na.console && na.console.error(c.message)
                }
                nb = a
            } else nb = a
        }
        return nb
    };
    var qb = function(a, b) {
        this.g = b === pb ? a : ""
    };
    qb.prototype.toString = function() {
        return this.g + ""
    };
    var rb = function(a) {
            return a instanceof qb && a.constructor === qb ? a.g : "type_error:TrustedResourceUrl"
        },
        pb = {},
        sb = function(a) {
            var b = ob(),
                c = b ? b.createScriptURL(a) : a;
            return new qb(c, pb)
        };
    var tb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function ub() {
        var a = na.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function vb(a) {
        return -1 != ub().indexOf(a)
    };
    var wb = {},
        xb = function(a, b, c) {
            this.g = c === wb ? a : ""
        };
    xb.prototype.toString = function() {
        return this.g.toString()
    };
    var yb = function(a) {
            return a instanceof xb && a.constructor === xb ? a.g : "type_error:SafeHtml"
        },
        zb = function(a) {
            var b = ob(),
                c = b ? b.createHTML(a) : a;
            return new xb(c, null, wb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Ab = {};
    var Bb = function() {},
        Cb = function(a) {
            this.g = a
        };
    ma(Cb, Bb);
    Cb.prototype.toString = function() {
        return this.g
    };

    function Db(a, b) {
        var c = [new Cb(Eb[0].toLowerCase(), Ab)];
        if (0 === c.length) throw Error("No prefixes are provided");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Cb) g = f.g;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function Fb(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var z = window,
        I = document,
        Gb = navigator,
        Hb = I.currentScript && I.currentScript.src,
        Ib = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Jb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Kb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Lb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Mb(a, b, c) {
        b && Ma(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Nb = function(a, b, c, d) {
            var e = I.createElement("script");
            Mb(e, d, Kb);
            e.type = "text/javascript";
            e.async = !0;
            var f = sb(a);
            e.src = rb(f);
            var g, h, k, n = null == (k = (h = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : k.call(h, "script[nonce]");
            (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
            Jb(e, b);
            c && (e.onerror = c);
            var p = I.getElementsByTagName("script")[0] || I.body || I.head;
            p.parentNode.insertBefore(e, p);
            return e
        },
        Ob = function() {
            if (Hb) {
                var a = Hb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Pb = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = I.createElement("iframe"), g = !0);
            Mb(f, c, Lb);
            d && Ma(d, function(k, n) {
                f.dataset[k] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var h = I.body && I.body.lastChild || I.body || I.head;
                h.parentNode.insertBefore(f, h)
            }
            Jb(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        Qb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror =
                function() {
                    d.onerror = null;
                    c && c()
                };
            d.src = a;
            return d
        },
        Rb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Sb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        K = function(a) {
            z.setTimeout(a, 0)
        },
        Tb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Ub = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b &&
                (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Vb = function(a) {
            var b = I.createElement("div"),
                c = b,
                d = zb("A<div>" + a + "</div>");
            void 0 !== c.tagName && Fb(c);
            c.innerHTML = d instanceof xb ? yb(d) : yb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Wb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Xb = function(a) {
            var b;
            try {
                b = Gb.sendBeacon &&
                    Gb.sendBeacon(a)
            } catch (c) {}
            b || Qb(a)
        },
        $b = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var ac = function(a, b) {
            return G(this, a) && G(this, b)
        },
        bc = function(a, b) {
            return G(this, a) === G(this, b)
        },
        cc = function(a, b) {
            return G(this, a) || G(this, b)
        },
        dc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        ec = function(a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b
        },
        fc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof ib && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var hc = function() {
        this.g = new kb;
        gc(this)
    };
    hc.prototype.execute = function(a) {
        return this.g.o(a)
    };
    var gc = function(a) {
        mb(a.g, "map");
        var b = function(c, d) {
            lb(a.g, c, d)
        };
        b("and", ac);
        b("contains", dc);
        b("equals", bc);
        b("or", cc);
        b("startsWith", ec);
        b("variable", fc)
    };
    var ic = function(a) {
        if (a instanceof ic) return a;
        this.kb = a
    };
    ic.prototype.toString = function() {
        return String(this.kb)
    };
    var kc = function(a) {
        ra.call(this);
        this.g = a;
        this.set("then", jc(this));
        this.set("catch", jc(this, !0));
        this.set("finally", jc(this, !1, !0))
    };
    ma(kc, ib);
    var jc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new eb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof eb || (d = void 0);
            e instanceof eb || (e = void 0);
            var f = Ca(this.g),
                g = function(k) {
                    return function(n) {
                        return c ? (k.g(f), a.g) : k.g(f, n)
                    }
                },
                h = a.g.then(d && g(d), e && g(e));
            return new kc(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var lc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        mc = function(a) {
            if (null == a) return String(a);
            var b = lc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        nc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        oc = function(a) {
            if (!a || "object" != mc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !nc(a, "constructor") && !nc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || nc(a, b)
        },
        pc = function(a, b) {
            var c = b || ("array" == mc(a) ? [] : {}),
                d;
            for (d in a)
                if (nc(a, d)) {
                    var e = a[d];
                    "array" == mc(e) ? ("array" != mc(c[d]) && (c[d] = []), c[d] = pc(e, c[d])) : oc(e) ? (oc(c[d]) || (c[d] = {}), c[d] = pc(e, c[d])) : c[d] = e
                }
            return c
        };
    var rc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n = sa(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof va) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Mb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof kc) return h.g;
                    if (h instanceof ib) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if (h instanceof eb) {
                        var t = function() {
                            for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++) v[x] = qc(v[x],
                                b, c);
                            var y = b ? b.B : za(),
                                w = new Aa(y);
                            b && (w.g = b.g);
                            return g(h.g.apply(h, [w].concat(v)))
                        };
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    var u = !1;
                    switch (c) {
                        case 1:
                            u = !0;
                            break;
                        case 2:
                            u = !1;
                            break;
                        case 3:
                            u = !1;
                            break;
                        default:
                    }
                    if (h instanceof ic && u) return h.kb;
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        qc = function(a,
            b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (Ga(h) || Na(h)) {
                        var n = new va([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (oc(h)) {
                        var q = new ib;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var r = new eb("", function(w) {
                            for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = rc(G(this, A[B]), b, c);
                            return g((0, this.g.R)(h, h, A))
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var x = typeof h;
                    if (null === h || "string" === x || "number" === x || "boolean" === x) return h;
                    var y = !1;
                    switch (c) {
                        case 1:
                            y = !0;
                            break;
                        case 2:
                            y = !1;
                            break;
                        default:
                    }
                    if (void 0 !== h && y) return new ic(h)
                };
            return g(a)
        };
    var sc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        tc = function(a) {
            if (void 0 === a || Ga(a) || oc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var uc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof va)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new va(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new va(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new va(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = sc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new va(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = sc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var vc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        wc = new pa("break"),
        xc = new pa("continue"),
        yc = function(a, b) {
            return G(this, a) + G(this, b)
        },
        zc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        Ac = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof va)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = rc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= vc.indexOf(b)) {
                    var f = rc(c);
                    return qc(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof va) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof eb) {
                        var h = sc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= uc.supportedMethods.indexOf(b)) {
                    var k = sc(c);
                    k.unshift(this.g);
                    return uc[b].apply(a, k)
                }
            }
            if (a instanceof eb || a instanceof ib) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof eb) {
                        var p = sc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof eb ? a.R : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, sc(c))
            }
            if (a instanceof ic && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Bc = function(a, b) {
            a = G(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        },
        Cc = function(a) {
            var b = Ca(this.g),
                c = hb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof pa) return c
        },
        Dc = function() {
            return wc
        },
        Ec = function(a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof pa) return d
            }
        },
        Gc = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    Ba(b, d, e, !0)
                }
            }
        },
        Hc = function() {
            return xc
        },
        Ic = function(a, b, c) {
            var d = new va;
            b = G(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f))
        },
        Jc = function(a, b) {
            return G(this, a) / G(this, b)
        },
        Kc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof ic,
                d = b instanceof ic;
            return c || d ? c && d ? a.kb == b.kb : !1 : a ==
                b
        },
        Lc = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
            return b
        };

    function Mc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = hb(f, d);
            if (g instanceof pa) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function Nc(a, b, c) {
        if ("string" === typeof b) return Mc(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof ib || b instanceof va || b instanceof eb) {
            var d = b.Mb(),
                e = d.length();
            return Mc(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Oc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Pc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        },
        Qc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                var f = Ca(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Sc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Tc =
        function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        },
        Uc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                var f = Ca(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Rc(a, b, c) {
        if ("string" === typeof b) return Mc(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof va) return Mc(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var Vc = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = G(this, a);
            if (!(f instanceof va)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = G(this, d);
            var h = Ca(g);
            for (e(g, h); gb(h, b);) {
                var k = hb(h, d);
                if (k instanceof pa) {
                    if ("break" === k.g) break;
                    if ("return" === k.g) return k
                }
                var n = Ca(g);
                e(h, n);
                gb(n, c);
                h = n
            }
        },
        Wc = function(a) {
            a = G(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Xc = function(a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof ib || a instanceof va || a instanceof eb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : qa(b) && (c = a[b]);
            else if (a instanceof ic) return;
            return c
        },
        Yc = function(a, b) {
            return G(this, a) > G(this,
                b)
        },
        Zc = function(a, b) {
            return G(this, a) >= G(this, b)
        },
        $c = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof ic && (a = a.kb);
            b instanceof ic && (b = b.kb);
            return a === b
        },
        ad = function(a, b) {
            return !$c.call(this, a, b)
        },
        bd = function(a, b, c) {
            var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c));
            var e = hb(this.g, d);
            if (e instanceof pa) return e
        },
        cd = function(a, b) {
            return G(this, a) < G(this, b)
        },
        dd = function(a, b) {
            return G(this, a) <= G(this, b)
        },
        ed = function(a, b) {
            return G(this, a) % G(this, b)
        },
        hd = function(a, b) {
            return G(this, a) * G(this, b)
        },
        id = function(a) {
            return -G(this,
                a)
        },
        jd = function(a) {
            return !G(this, a)
        },
        kd = function(a, b) {
            return !Kc.call(this, a, b)
        },
        ld = function() {
            return null
        },
        md = function(a, b) {
            return G(this, a) || G(this, b)
        },
        nd = function(a, b) {
            var c = G(this, a);
            G(this, b);
            return c
        },
        od = function(a) {
            return G(this, a)
        },
        pd = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        qd = function(a) {
            return new pa("return", G(this, a))
        },
        rd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof eb || a instanceof va || a instanceof ib) && a.set(b, c);
            return c
        },
        sd = function(a, b) {
            return G(this, a) - G(this, b)
        },
        td = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!Ga(d) || !Ga(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]), f instanceof pa) {
                        var k = f.g;
                        if ("break" === k) return;
                        if ("return" === k || "continue" === k) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]), f instanceof pa && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        ud = function(a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c)
        },
        vd = function(a) {
            a = G(this, a);
            return a instanceof eb ? "function" : typeof a
        },
        wd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        xd = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = hb(this.g, e);
                if (f instanceof pa) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f
                }
            }
            for (; G(this, a);) {
                var g = hb(this.g, e);
                if (g instanceof pa) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g
                }
                G(this,
                    b)
            }
        },
        yd = function(a) {
            return ~Number(G(this, a))
        },
        zd = function(a, b) {
            return Number(G(this, a)) << Number(G(this, b))
        },
        Ad = function(a, b) {
            return Number(G(this, a)) >> Number(G(this, b))
        },
        Bd = function(a, b) {
            return Number(G(this, a)) >>> Number(G(this, b))
        },
        Ed = function(a, b) {
            return Number(G(this, a)) & Number(G(this, b))
        },
        Fd = function(a, b) {
            return Number(G(this, a)) ^ Number(G(this, b))
        },
        Gd = function(a, b) {
            return Number(G(this, a)) | Number(G(this, b))
        };
    var Id = function() {
        this.g = new kb;
        Hd(this)
    };
    Id.prototype.execute = function(a) {
        return Jd(this.g.o(a))
    };
    var Kd = function(a, b, c) {
            return Jd(a.g.D(b, c))
        },
        Hd = function(a) {
            var b = function(d, e) {
                mb(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                lb(a.g, String(d), e)
            };
            c(0, yc);
            c(1, zc);
            c(2, Ac);
            c(3, Bc);
            c(53, Cc);
            c(4, Dc);
            c(5, Ec);
            c(52, Gc);
            c(6, Hc);
            c(9, Ec);
            c(50, Ic);
            c(10, Jc);
            c(12, Kc);
            c(13, Lc);
            c(47, Oc);
            c(54, Pc);
            c(55, Qc);
            c(63, Vc);
            c(64, Sc);
            c(65, Tc);
            c(66, Uc);
            c(15, Wc);
            c(16, Xc);
            c(17, Xc);
            c(18, Yc);
            c(19, Zc);
            c(20, $c);
            c(21, ad);
            c(22, bd);
            c(23, cd);
            c(24, dd);
            c(25, ed);
            c(26, hd);
            c(27,
                id);
            c(28, jd);
            c(29, kd);
            c(45, ld);
            c(30, md);
            c(32, nd);
            c(33, nd);
            c(34, od);
            c(35, od);
            c(46, pd);
            c(36, qd);
            c(43, rd);
            c(37, sd);
            c(38, td);
            c(39, ud);
            c(40, vd);
            c(41, wd);
            c(42, xd);
            c(58, yd);
            c(57, zd);
            c(60, Ad);
            c(61, Bd);
            c(56, Ed);
            c(62, Fd);
            c(59, Gd)
        };

    function Jd(a) {
        if (a instanceof pa || a instanceof eb || a instanceof va || a instanceof ib || a instanceof ic || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var Ld = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            fi: a("consent"),
            Fe: a("consent_always_fire"),
            jg: a("convert_case_to"),
            kg: a("convert_false_to"),
            lg: a("convert_null_to"),
            mg: a("convert_true_to"),
            ng: a("convert_undefined_to"),
            Lk: a("debug_mode_metadata"),
            Lb: a("function"),
            pf: a("instance_name"),
            Si: a("live_only"),
            Ti: a("malware_disabled"),
            Ui: a("metadata"),
            Zi: a("original_activity_id"),
            Qk: a("original_vendor_template_id"),
            Pk: a("once_on_load"),
            Yi: a("once_per_event"),
            Vg: a("once_per_load"),
            Rk: a("priority_override"),
            Sk: a("respected_consent_types"),
            ah: a("setup_tags"),
            dh: a("tag_id"),
            eh: a("teardown_tags")
        }
    }();
    var ge;
    var he = [],
        ie = [],
        je = [],
        ke = [],
        le = [],
        me = {},
        ne, oe, pe, qe = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        re = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = me[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.oh && d.oh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Ld.Fe.toString() && a[g]) {}
            e && d && d.nh && (f.vtp_gtmCachedValues = d.nh);
            if (b) {
                if (null == b.name) {
                    var h;
                    a: {
                        var k = b.index;
                        if (null == k) h = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = he[k];
                                    break;
                                case 1:
                                    n = ke[k];
                                    break;
                                default:
                                    h = "";
                                    break a
                            }
                            var p = n && n[Ld.pf];
                            h = p ? String(p) : ""
                        }
                    }
                    b.name = h
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : ge(c, f, b)
        },
        te = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = se(a[e], b, c));
            return d
        },
        se = function(a,
            b, c) {
            if (Ga(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(se(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = he[f];
                        if (!g || b.Lf(g)) return;
                        c[f] = !0;
                        var h = String(g[Ld.pf]);
                        try {
                            var k = te(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
                            d = re(k, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            pe && (d = pe.mj(d, k))
                        } catch (w) {
                            b.Hh && b.Hh(w, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[se(a[n],
                            b, c)] = se(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = se(a[q], b, c);
                            oe && (p = p || r === oe.$d);
                            d.push(r)
                        }
                        return oe && p ? oe.pj(d) : d.join("");
                    case "escape":
                        d = se(a[1], b, c);
                        if (oe && Ga(a[1]) && "macro" === a[1][0] && oe.Lj(a)) return oe.hk(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Md[a[t]] && (d = Md[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!ke[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            xh: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] =
                            a[1];
                        var x = ve(v, b, c),
                            y = !!a[4];
                        return y || 2 !== x ? y !== (1 === x) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ve = function(a, b, c) {
            try {
                return ne(te(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var we = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    ma(we, Error);

    function xe(a, b) {
        if (Ga(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) xe(a[c], b[c])
        }
    };
    var ye = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.ck = a;
        this.o = b;
        this.g = []
    };
    ma(ye, Error);
    var Ae = function() {
        return function(a, b) {
            a instanceof ye || (a = new ye(a, ze));
            b && a.g.push(b);
            throw a;
        }
    };

    function ze(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Fa(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var De = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Be(a), f = 0; f < ie.length; f++) {
                var g = ie[f],
                    h = Ce(g, e);
                if (h) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < ke.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Ce = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Be = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ve(je[c], a));
                return b[c]
            }
        };
    var Ee = {
        mj: function(a, b) {
            b[Ld.jg] && "string" === typeof a && (a = 1 == b[Ld.jg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ld.lg) && null === a && (a = b[Ld.lg]);
            b.hasOwnProperty(Ld.ng) && void 0 === a && (a = b[Ld.ng]);
            b.hasOwnProperty(Ld.mg) && !0 === a && (a = b[Ld.mg]);
            b.hasOwnProperty(Ld.kg) && !1 === a && (a = b[Ld.kg]);
            return a
        }
    };
    var Fe = function() {
        this.g = {}
    };

    function Ge(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new we(c, d, g);
            }
    }

    function He(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ge(e, b, d, g);
                    Ge(f, b, d, g)
                }
            }
        }
    };
    var Le = function() {
            var a = data.permissions || {},
                b = Ie.J,
                c = this;
            this.o = new Fe;
            this.g = {};
            var d = {},
                e = He(this.o, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            Ma(a, function(f, g) {
                var h = {};
                Ma(g, function(k, n) {
                    var p = Je(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.aa)
                });
                c.g[f] = function(k, n) {
                    var p = h[k];
                    if (!p) throw Ke(k, {}, "The requested permission " + k + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        Ne = function(a) {
            return Me.g[a] || function() {}
        };

    function Je(a, b) {
        var c = qe(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ke;
        try {
            return re(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new we(e, {}, "Permission " + e + " is unknown.");
                },
                aa: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Ke(a, b, c) {
        return new we(a, b, c)
    };
    var Oe = !1;
    var Pe = {};
    Pe.Kk = Pa('');
    Pe.sj = Pa('');
    var Qe = Oe,
        Re = Pe.sj,
        Se = Pe.Kk;
    var hf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        jf = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            hf(b, "/*") && (b = b.slice(0, -2));
            hf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        kf = /^[a-z0-9-]+$/i,
        lf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        nf = function(a, b) {
            var c;
            if (!(c = !mf(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!kf.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var k = a,
                    n = b[g];
                if (!lf.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var t = k.hostname,
                    u = q;
                if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
                else {
                    u = u.slice(2);
                    var v = t.toLowerCase().indexOf(u.toLowerCase());
                    r = -1 === v ? !1 : t.length === u.length ?
                        !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
                }
                if (r) {
                    var x = p.slice(p.indexOf("/"));
                    h = jf(k.pathname + k.search, x) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        mf = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var of = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i, pf = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }, M = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = of .exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = "!" === e[2],
                h = e[3],
                k = c[d];
            if (null == k) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof k;
                k instanceof eb ? n = "Fn" : k instanceof va ? n = "List" : k instanceof ib ? n = "DustMap" : k instanceof ic && (n = "OpaqueValue");
                if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (pf[n] || n) + ", which does not match required type " + (pf[h] || h) + ".");
            }
        }
    };

    function qf(a) {
        return "" + a
    }

    function rf(a, b) {
        var c = [];
        return c
    };
    var sf = function(a, b) {
            var c = new eb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = G(this, d[e]);
                return b.apply(this, d)
            });
            c.Nb();
            return c
        },
        tf = function(a, b) {
            var c = new ib,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ea(e) ? c.set(d, sf(a + "_" + d, e)) : (Fa(e) || m(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Nb();
            return c
        };
    var uf = function(a, b) {
        M(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new ib;
        return d = tf("AssertApiSubject", c)
    };
    var vf = function(a, b) {
        M(H(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof kc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new ib;
        return d = tf("AssertThatSubject", c)
    };

    function wf(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(rc(arguments[d], c));
            return qc(a.apply(null, b))
        }
    }
    var yf = function() {
        for (var a = Math, b = xf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = wf(a[e].bind(a)))
        }
        return c
    };
    var zf = function(a) {
        var b;
        return b
    };
    var Af = function(a) {
        var b;
        return b
    };
    var Bf = function(a) {
        return encodeURI(a)
    };
    var Cf = function(a) {
        return encodeURIComponent(a)
    };
    var Df = function(a) {
        M(H(this), ["message:?string"], arguments);
    };
    var If = function(a, b) {
        M(H(this), ["min:!number", "max:!number"], arguments);
        return Ia(a, b)
    };
    var P = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.gj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Jf = function() {
        P(this, "read_container_data");
        var a = new ib;
        a.set("containerId", 'GTM-K5MSJHJ');
        a.set("version", '41');
        a.set("environmentName", '');
        a.set("debugMode", Qe);
        a.set("previewMode", Se);
        a.set("environmentMode", Re);
        a.Nb();
        return a
    };
    var Kf = {};
    Kf.enable1pScripts = !0;
    Kf.enableGlobalEventDeveloperIds = !1;
    Kf.enableGa4OnoRemarketing = !1;
    Kf.omitAuidIfWbraidPresent = !1;
    Kf.reconcileCampaignFields = !1;
    Kf.reconcileCampaignFields = !0;
    Kf.enableEmFormCcd = !1;
    Kf.enableEmFormCcd = !0;
    Kf.enableEmFormCcdPart2 = !1;
    Kf.enableUrlPassthrough = !0;
    Kf.enableLandingPageDeduplication = !0;
    Kf.enableGtagDestinationFps = !0;
    Kf.enableFloodlightPrerenderingBypass = !1;
    Kf.enableTranslateUAParamsToClassic = !0;
    Kf.analyticsPrivateParamsExcluded = !1;
    Kf.ipOverrideExperiment = !1;
    Kf.ipOverrideExperiment = !0;
    Kf.enableAdsConsentedConversionsOnly = !1;
    Kf.enableAdsConsentedConversionsOnly = !0;
    Kf.enableFlConsentedConversionsOnly = !1;
    Kf.enableFlConsentedConversionsOnly = !0;
    Kf.enableEmptyDestLists = !1;
    Kf.enableAdsHistoryChangeEvents = !1;
    Kf.enableAdsHistoryChangeEvents = !0;
    Kf.requireGtagUserDataTos = !0;
    Kf.sendBeaconEnableExperimentPercentage = Number('0') || 0;

    function Lf() {
        return qc(Kf)
    };
    var Mf = function() {
        return (new Date).getTime()
    };
    var Nf = function(a) {
        if (null === a) return "null";
        if (a instanceof va) return "array";
        if (a instanceof eb) return "function";
        if (a instanceof ic) {
            a = a.kb;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Of = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Qe || Se) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return qc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(rc(c))
            })
        }
    };
    var Pf = function(a) {
        return Oa(rc(a, this.g))
    };
    var Qf = function(a) {
        return Number(rc(a, this.g))
    };
    var Rf = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Sf = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var xf = "floor ceil round max min abs pow sqrt".split(" ");
    var Tf = function() {
            var a = {};
            return {
                Bj: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Ck: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Uf = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return eb.prototype.g.apply(a, c)
            }
        },
        Vf = function(a, b) {
            M(H(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Wf = {};
    Wf.keys = function(a) {
        return new va
    };
    Wf.values = function(a) {
        return new va
    };
    Wf.entries = function(a) {
        return new va
    };
    Wf.freeze = function(a) {
        return a
    };
    Wf.delete = function(a, b) {
        return !1
    };
    var Yf = function() {
        this.g = {};
        this.o = {};
    };
    Yf.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    Yf.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ea(b) ? sf(a, b) : tf(a, b)
    };
    var $f = function(a, b, c) {
        if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ea(c) ? sf(b, c) : tf(b, c)
    };

    function Zf(a, b) {
        var c = void 0;
        return c
    };

    function ag() {
        var a = {};
        return a
    };
    var Q = {
        Kb: "_ee",
        xc: "_syn_or_mod",
        Db: "_def",
        Tk: "_uei",
        Uk: "_upi",
        sc: "_eu",
        Rg: "_is_passthrough_cid",
        Qg: "_is_linker_valid",
        sf: "_ntg",
        ae: "_nge",
        wc: "_ipe",
        mc: "event_callback",
        Qd: "event_timeout",
        Ia: "gtag.config",
        Pa: "gtag.get",
        Ga: "purchase",
        hc: "refund",
        Eb: "begin_checkout",
        bc: "add_to_cart",
        cc: "remove_from_cart",
        oi: "view_cart",
        pg: "add_to_wishlist",
        Ha: "view_item",
        fc: "view_promotion",
        Ke: "select_promotion",
        Je: "select_item",
        Fb: "view_item_list",
        og: "add_payment_info",
        ni: "add_shipping_info",
        Ra: "value_key",
        fb: "value_callback",
        ba: "allow_ad_personalization_signals",
        ad: "restricted_data_processing",
        Pc: "allow_google_signals",
        za: "cookie_expires",
        Hb: "cookie_update",
        bd: "session_duration",
        Wd: "session_engaged_time",
        Od: "engagement_time_msec",
        Ta: "user_properties",
        ca: "transport_url",
        ia: "ads_data_redaction",
        Aa: "user_data",
        Xc: "first_party_collection",
        H: "ad_storage",
        U: "analytics_storage",
        Ge: "region",
        ig: "wait_for_update",
        ra: "conversion_linker",
        Ja: "conversion_cookie_prefix",
        oa: "value",
        na: "currency",
        Lg: "trip_type",
        da: "items",
        Dg: "passengers",
        Md: "allow_custom_scripts",
        vb: "session_id",
        cf: "quantity",
        ib: "transaction_id",
        hb: "language",
        jc: "country",
        Nd: "allow_enhanced_conversions",
        Re: "aw_merchant_id",
        Pe: "aw_feed_country",
        Qe: "aw_feed_language",
        Oe: "discount",
        V: "developer_id",
        Ag: "global_developer_id_string",
        yg: "event_developer_id_string",
        Xd: "delivery_postal_code",
        Xe: "estimated_delivery_date",
        Ve: "shipping",
        af: "new_customer",
        Se: "customer_lifetime_value",
        We: "enhanced_conversions",
        Oc: "page_view",
        va: "linker",
        W: "domains",
        oc: "decorate_forms",
        xg: "enhanced_conversions_automatic_settings",
        yi: "auto_detection_enabled",
        Ze: "ga_temp_client_id",
        Le: "user_engagement",
        ii: "app_remove",
        ji: "app_store_refund",
        ki: "app_store_subscription_cancel",
        li: "app_store_subscription_convert",
        mi: "app_store_subscription_renew",
        ri: "first_open",
        si: "first_visit",
        ui: "in_app_purchase",
        vi: "session_start",
        wi: "allow_display_features",
        eb: "campaign",
        Qc: "campaign_content",
        Rc: "campaign_id",
        Sc: "campaign_medium",
        Tc: "campaign_name",
        Uc: "campaign_source",
        Vc: "campaign_term",
        ya: "client_id",
        sa: "cookie_domain",
        ic: "cookie_name",
        qb: "cookie_path",
        Qa: "cookie_flags",
        kc: "custom_map",
        Td: "groups",
        Cg: "non_interaction",
        tb: "page_location",
        bf: "page_path",
        ub: "page_referrer",
        Ud: "page_title",
        La: "send_page_view",
        Jb: "send_to",
        cd: "session_engaged",
        Wc: "euid_logged_in_state",
        dd: "session_number",
        Mi: "tracking_id",
        jb: "url_passthrough",
        nc: "accept_incoming",
        $c: "url_position",
        Gg: "phone_conversion_number",
        Eg: "phone_conversion_callback",
        Fg: "phone_conversion_css_class",
        Hg: "phone_conversion_options",
        Hi: "phone_conversion_ids",
        Gi: "phone_conversion_country_code",
        Gb: "aw_remarketing",
        Ne: "aw_remarketing_only",
        Me: "gclid",
        xi: "auid",
        Bi: "affiliation",
        wg: "tax",
        Ue: "list_name",
        vg: "checkout_step",
        ug: "checkout_option",
        Ci: "coupon",
        Di: "promotions",
        Sa: "user_id",
        Ki: "retoken",
        Ka: "cookie_prefix",
        qg: "disable_merchant_reported_purchases",
        sg: "dc_natural_search",
        rg: "dc_custom_params",
        Bg: "method",
        Li: "search_term",
        Ai: "content_type",
        Fi: "optimize_id",
        Ei: "experiments",
        sb: "google_signals"
    };
    Q.Sd = "google_tld";
    Q.Zd = "update";
    Q.Ye = "firebase_id";
    Q.Yc = "ga_restrict_domain";
    Q.Pd = "event_settings";
    Q.Te = "dynamic_event_settings";
    Q.qc = "user_data_settings";
    Q.Jg = "screen_name";
    Q.ef = "screen_resolution";
    Q.Ib = "_x_19";
    Q.rb = "enhanced_client_id";
    Q.Rd = "_x_20";
    Q.$e = "internal_traffic_results";
    Q.Yd = "traffic_type";
    Q.Vd = "referral_exclusion_definition";
    Q.Zc = "ignore_referrer";
    Q.zi = "content_group";
    Q.xa = "allow_interest_groups";
    Q.df = "redact_device_info", Q.zg = "geo_granularity";
    var dg = {};
    Q.Og = Object.freeze((dg[Q.og] = 1, dg[Q.ni] = 1, dg[Q.bc] = 1, dg[Q.cc] = 1, dg[Q.oi] = 1, dg[Q.Eb] = 1, dg[Q.Je] = 1, dg[Q.Fb] = 1, dg[Q.Ke] = 1, dg[Q.fc] = 1, dg[Q.Ga] = 1, dg[Q.hc] = 1, dg[Q.Ha] = 1, dg[Q.pg] = 1, dg));
    Q.hf = Object.freeze([Q.ba, Q.Pc, Q.Hb]);
    Q.Wi = Object.freeze([].concat(Q.hf));
    Q.jf = Object.freeze([Q.za, Q.Qd, Q.bd, Q.Wd, Q.Od]);
    Q.Xi = Object.freeze([].concat(Q.jf));
    var eg = {};
    Q.He = (eg[Q.H] = "1", eg[Q.U] = "2", eg);
    var fg = {};
    Q.hg = Object.freeze((fg[Q.ba] = 1, fg[Q.Nd] = 1, fg[Q.xa] = 1, fg[Q.Gb] = 1, fg[Q.Ne] = 1, fg[Q.Oe] = 1, fg[Q.Pe] = 1, fg[Q.Qe] = 1, fg[Q.da] = 1, fg[Q.Re] = 1, fg[Q.Ja] = 1, fg[Q.ra] = 1, fg[Q.sa] = 1, fg[Q.za] = 1, fg[Q.Qa] = 1, fg[Q.Ka] = 1, fg[Q.na] = 1, fg[Q.Se] = 1, fg[Q.V] = 1, fg[Q.qg] = 1, fg[Q.We] = 1, fg[Q.Xe] = 1, fg[Q.Ye] = 1, fg[Q.Xc] = 1, fg[Q.hb] = 1, fg[Q.af] = 1, fg[Q.tb] = 1, fg[Q.ub] = 1, fg[Q.Eg] = 1, fg[Q.Fg] = 1, fg[Q.Gg] = 1, fg[Q.Hg] = 1, fg[Q.ad] = 1, fg[Q.La] = 1, fg[Q.Jb] = 1, fg[Q.Xd] = 1, fg[Q.ib] = 1, fg[Q.ca] = 1, fg[Q.Zd] = 1, fg[Q.jb] = 1, fg[Q.Aa] = 1, fg[Q.Sa] = 1, fg[Q.oa] = 1,
        fg));
    var gg = {
        sh: "US",
        Ph: "US-NJ"
    };
    var hg = {},
        ig = function(a, b) {
            hg[a] = hg[a] || [];
            hg[a][b] = !0
        },
        jg = function(a) {
            for (var b = [], c = hg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        kg = function() {
            for (var a = [], b = hg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var S = function(a) {
        ig("GTM", a)
    };
    var lg = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ng = function() {
        var a = mg,
            b = "Jf";
        if (a.Jf && a.hasOwnProperty(b)) return a.Jf;
        var c = new a;
        a.Jf = c;
        a.hasOwnProperty(b);
        return c
    };
    var mg = function() {
        var a = {};
        this.g = function() {
            var b = lg.g,
                c = lg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[lg.g] = !0
        }
    };
    var og = [];

    function pg() {
        var a = Ib("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: qg,
            update: rg,
            addListener: sg,
            notifyListeners: tg,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function qg(a, b, c, d, e, f) {
        var g = pg();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== k.initial) h[a] = r;
                q && z.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, ug(a), tg(), ig("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function rg(a, b) {
        var c = pg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = vg(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = vg(c, a);
            f.quiet ? (f.quiet = !1, ug(a)) : g !== d && ug(a)
        }
    }

    function sg(a, b) {
        og.push({
            Af: a,
            wj: b
        })
    }

    function ug(a) {
        for (var b = 0; b < og.length; ++b) {
            var c = og[b];
            Ga(c.Af) && -1 !== c.Af.indexOf(a) && (c.Lh = !0)
        }
    }

    function tg(a, b) {
        for (var c = 0; c < og.length; ++c) {
            var d = og[c];
            if (d.Lh) {
                d.Lh = !1;
                try {
                    d.wj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function vg(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var wg = function(a) {
            var b = pg();
            b.accessedAny = !0;
            return vg(b, a)
        },
        xg = function(a) {
            var b = pg();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        yg = function(a) {
            var b = pg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        zg = function() {
            if (!ng().g()) return !1;
            var a = pg();
            a.accessedAny = !0;
            return a.active
        },
        Ag = function() {
            var a = pg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Bg = function(a, b) {
            pg().addListener(a, b)
        },
        Cg = function(a, b) {
            pg().notifyListeners(a, b)
        },
        Dg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!yg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Bg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Eg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === wg(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length && Bg(d, function(f) {
                var g = c();
                0 < g.length && (f.Af = g, a(f))
            })
        };

    function Fg() {}

    function Gg() {};

    function Hg(a) {
        for (var b = [], c = 0; c < Ig.length; c++) {
            var d = a(Ig[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Ig = [Q.H, Q.U],
        Jg = function(a) {
            var b = a[Q.Ge];
            b && S(40);
            var c = a[Q.ig];
            c && S(41);
            for (var d = Ga(b) ? b : [b], e = {
                    Ic: 0
                }; e.Ic < d.length; e = {
                    Ic: e.Ic
                }, ++e.Ic) Ma(a, function(f) {
                return function(g, h) {
                    if (g !== Q.Ge && g !== Q.ig) {
                        var k = d[f.Ic],
                            n = gg.sh,
                            p = gg.Ph;
                        pg().set(g, h, k, n, p, c)
                    }
                }
            }(e))
        },
        Kg = 0,
        Lg = function(a, b) {
            Ma(a, function(e, f) {
                pg().update(e, f)
            });
            Cg(b.eventId, b.priorityId);
            var c = Ta(),
                d = c - Kg;
            Kg && 0 <= d && 1E3 > d && S(66);
            Kg = c
        },
        Mg = function(a) {
            var b = wg(a);
            return void 0 != b ? b : !0
        },
        Ng = function() {
            return "G1" + Hg(wg)
        },
        Og = function(a, b) {
            Bg(a,
                b)
        },
        Pg = function(a, b) {
            Eg(a, b)
        },
        Qg = function(a, b) {
            Dg(a, b)
        };
    var Sg = function(a) {
            return Rg ? I.querySelectorAll(a) : null
        },
        Tg = function(a, b) {
            if (!Rg) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ug = !1;
    if (I.querySelectorAll) try {
        var Vg = I.querySelectorAll(":root");
        Vg && 1 == Vg.length && Vg[0] == I.documentElement && (Ug = !0)
    } catch (a) {}
    var Rg = Ug;
    var Wg = function(a) {
            return null == a ? "" : m(a) ? Ra(String(a)) : "e0"
        },
        Yg = function(a) {
            return a.replace(Xg, "")
        },
        $g = function(a) {
            return Zg(a.replace(/\s/g, ""))
        },
        Zg = function(a) {
            return Ra(a.replace(ah, "").toLowerCase())
        },
        ch = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return bh.test(a) ? a : "e0"
        },
        eh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (dh.test(c)) return c
            }
            return "e0"
        },
        hh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== fh.indexOf(c.name) ? gh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        gh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) try {
                var b = ih(a);
                return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return z.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        ih = function(a) {
            var b;
            if (z.TextEncoder) b = (new z.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        ah = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        dh = /^\S+@\S+\.\S+$/,
        bh = /^\+\d{10,15}$/,
        Xg = /[.~]/g,
        jh = {},
        kh = (jh.email = "em", jh.phone_number = "pn", jh.first_name = "fn", jh.last_name = "ln", jh.street = "sa", jh.city = "ct", jh.region = "rg", jh.country = "co", jh.postal_code = "pc", jh.error_code = "ec", jh),
        lh = function(a, b) {
            function c(n, p, q) {
                var r = n[p];
                Ga(r) || (r = [r]);
                for (var t = 0; t < r.length; ++t) {
                    var u = Wg(r[t]);
                    "" !== u && f.push({
                        name: p,
                        value: q(u),
                        index: void 0
                    })
                }
            }

            function d(n, p, q, r) {
                var t = Wg(n[p]);
                "" !== t && f.push({
                    name: p,
                    value: q(t),
                    index: r
                })
            }

            function e(n) {
                return function(p) {
                    S(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === z.location.protocol) {
                c(a, "email", eh);
                c(a, "phone_number", ch);
                c(a, "first_name", e($g));
                c(a, "last_name", e($g));
                var g = a.home_address || {};
                c(g, "street", e(Zg));
                c(g, "city", e(Zg));
                c(g, "postal_code", e(Yg));
                c(g, "region", e(Zg));
                c(g, "country", e(Yg));
                var h = a.address || {};
                Ga(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", $g, k), d(h[k], "last_name", $g, k), d(h[k], "street", Zg, k), d(h[k], "city", Zg, k), d(h[k], "postal_code", Yg, k), d(h[k], "region",
                    Zg, k), d(h[k], "country", Yg, k);
                hh(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        mh = function(a, b) {
            lh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        k = c[f].index,
                        n = kh[g];
                    n && h && (-1 === fh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        nh = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    mh(a, function(c,
                        d) {
                        b({
                            Fc: c,
                            Yk: d
                        })
                    })
                })
            } catch (b) {}
        },
        fh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var oh = {},
        T = z.google_tag_manager = z.google_tag_manager || {},
        ph = Math.random();
    oh.ee = "5g0";
    oh.fa = "dataLayer";
    oh.hi = "ChEI8LKSlAYQuenS+/6clojyARIkAM7DgGP7kJ8T3j6+fmzlkZghl2pH4Q/LlV8/CGZhJ065kvquGgKlcQ\x3d\x3d";
    var qh = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        rh = {
            __paused: !0,
            __tg: !0
        },
        sh;
    for (sh in qh) qh.hasOwnProperty(sh) && (rh[sh] = !0);
    oh.Nc = "www.googletagmanager.com";
    var th, uh = oh.Nc + "/gtm.js";
    th = uh;
    var vh = Pa(""),
        wh = null,
        xh = null,
        yh = {},
        zh = {},
        Ah = function() {
            var a = T.sequence || 1;
            T.sequence = a + 1;
            return a
        };
    oh.gi = "";
    var Bh = "";
    oh.fe = Bh;
    var Ch = new Ka,
        Dh = {},
        Eh = {},
        Hh = {
            name: oh.fa,
            set: function(a, b) {
                pc(ab(a, b), Dh);
                Fh()
            },
            get: function(a) {
                return Gh(a, 2)
            },
            reset: function() {
                Ch = new Ka;
                Dh = {};
                Fh()
            }
        },
        Gh = function(a, b) {
            return 2 != b ? Ch.get(a) : Ih(a)
        },
        Ih = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Dh, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Jh = function(a, b) {
            Eh.hasOwnProperty(a) || (Ch.set(a, b), pc(ab(a, b), Dh), Fh())
        },
        Th = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Gh(c, 1);
                if (Ga(d) || oc(d)) d = pc(d);
                Eh[c] = d
            }
        },
        Fh = function(a) {
            Ma(Eh, function(b, c) {
                Ch.set(b, c);
                pc(ab(b), Dh);
                pc(ab(b, c), Dh);
                a && delete Eh[b]
            })
        },
        Uh = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ih(a) : Ch.get(a);
            "array" === mc(d) || "object" === mc(d) ? c = pc(d) : c = d;
            return c
        };
    var Vh, Wh = !1;

    function Xh() {
        Wh = !0;
        Vh = Vh || {}
    }
    var Yh = function(a) {
        Wh || Xh();
        return Vh[a]
    };
    var Zh = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d,
                null))
        }
        return !1
    };
    var $h = function() {
            var a = I.body,
                b = I.documentElement || a && a.parentElement,
                c, d;
            if (I.compatMode && "BackCompat" !== I.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                S(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        ai = function(a) {
            var b = $h(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var bi = [],
        ci = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
        di = function(a, b, c) {
            for (var d = new z.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < bi.length; f++)
                if (!bi[f]) return bi[f] = d, f;
            return bi.push(d) - 1
        },
        ei = function(a, b, c) {
            function d(h, k) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: h.getBoundingClientRect(),
                        intersectionRatio: k,
                        intersectionRect: n,
                        isIntersecting: 0 < k,
                        rootBounds: n,
                        target: h,
                        time: Ta()
                    };
                K(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(h, k) {
                return h - k
            });
            return function() {
                for (var h = 0; h < b.length; h++) {
                    var k = ai(b[h]);
                    if (k > e[h])
                        for (; f[h] < c.length - 1 && k >= c[f[h] + 1];) d(b[h], k), f[h]++;
                    else if (k < e[h])
                        for (; 0 <= f[h] && k <= c[f[h]];) d(b[h], k), f[h]--;
                    e[h] = k
                }
            }
        },
        fi = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (ci) {
                var e = !1;
                K(function() {
                    e ||
                        ei(a, b, c)()
                });
                return di(function(f) {
                    e = !0;
                    for (var g = {
                            Hc: 0
                        }; g.Hc < f.length; g = {
                            Hc: g.Hc
                        }, g.Hc++) K(function(h) {
                        return function() {
                            return a(f[h.Hc])
                        }
                    }(g))
                }, b, c)
            }
            return z.setInterval(ei(a, b, c), 1E3)
        },
        gi = function(a) {
            ci ? 0 <= a && a < bi.length && bi[a] && (bi[a].disconnect(), bi[a] = void 0) : z.clearInterval(a)
        };
    var hi = /:[0-9]+$/,
        ii = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var k = h.slice(1).join("=");
                    if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        li = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = ji(a.protocol) || ji(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(hi, "").toLowerCase());
            return ki(a, b, c, d, e)
        },
        ki = function(a, b, c, d, e) {
            var f, g = ji(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = mi(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(hi, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ===
                        g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || ig("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ii(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        ji = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        mi = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        ni = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || ig("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(hi, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        oi = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !==
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = ni(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var pi = {};
    var ri = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        $a: a.$a,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = qi(d));
                c && (e.isVisible = !Zh(d));
                return e
            }
        },
        ui = function(a) {
            if (0 != a.length) {
                var b;
                b = si(a, function(c) {
                    return !ti.test(c.$a)
                });
                b = si(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = si(b, function(c) {
                    return !Zh(c.element)
                });
                return b[0]
            }
        },
        si = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        qi = function(a) {
            var b;
            if (a === I.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = qi(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        vi = !0,
        wi = !1;
    pi.di = "true";
    var xi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        yi = new RegExp(/@(gmail|googlemail)\./i),
        ti = new RegExp(/support|noreply/i),
        zi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
        Ai = ["BR"],
        Bi = {},
        Ci = function(a) {
            a = a || {
                Dc: !0,
                Ec: !0
            };
            a.zb = a.zb || {
                email: !0,
                phone: !0,
                kh: !0
            };
            var b, c = a,
                d = !!c.Dc + "." + !!c.Ec;
            c && c.ld && c.ld.length && (d += "." + c.ld.join("."));
            c && c.zb && (d += "." + c.zb.email + "." + c.zb.phone + "." + c.zb.kh);
            b = d;
            var e = Bi[b];
            if (e && 200 > Ta() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var k =
                        h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= zi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= Ai.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < k.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var t = f,
                u = t.status,
                v = [],
                x;
            if (a.zb && a.zb.email) {
                for (var y = t.elements, w = [], A = 0; A < y.length; A++) {
                    var B = y[A],
                        F = B.textContent;
                    "INPUT" === B.tagName.toUpperCase() &&
                        B.value && (F = B.value);
                    if (F) {
                        var C = F.match(xi);
                        if (C) {
                            var E = C[0],
                                D;
                            if (z.location) {
                                var O = ki(z.location, "host", !0);
                                D = 0 <= E.toLowerCase().indexOf(O)
                            } else D = !1;
                            D || w.push({
                                element: B,
                                $a: E
                            })
                        }
                    }
                }
                var J = a && a.ld;
                if (J && 0 !== J.length) {
                    for (var N = [], V = 0; V < w.length; V++) {
                        for (var R = !0, L = 0; L < J.length; L++) {
                            var aa = J[L];
                            if (aa && Tg(w[V].element, aa)) {
                                R = !1;
                                break
                            }
                        }
                        R && N.push(w[V])
                    }
                    v = N
                } else v = w;
                x = ui(v);
                10 < w.length && (u = "3")
            }
            var ba = [];
            !a.vk && x && (v = [x]);
            for (var W = 0; W < v.length; W++) ba.push(ri(v[W], a.Dc, a.Ec));
            var xa = {
                elements: ba.slice(0,
                    10),
                gk: ri(x, a.Dc, a.Ec),
                status: u
            };
            Bi[b] = {
                timestamp: Ta(),
                result: xa
            };
            return xa
        },
        Di = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.$a.length + ":" + yi.test(a.$a)
        };
    var Ei = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var k = g[h].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = Gh(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = z[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && Rg) {
                    var q = Sg(e);
                    if (q && 0 < q.length) {
                        f = [];
                        for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Ub(q[r]) ||
                            Ra(q[r].value));
                        f = 1 === f.length ? f[0] : f
                    }
                }
                f && (a[b] = f)
            }
        },
        Fi = function(a) {
            if (a) {
                var b = {};
                Ei(b, "email", a.email);
                Ei(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Ei(e, "first_name", c[d].first_name);
                    Ei(e, "last_name", c[d].last_name);
                    Ei(e, "street", c[d].street);
                    Ei(e, "city", c[d].city);
                    Ei(e, "region", c[d].region);
                    Ei(e, "country", c[d].country);
                    Ei(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Gi = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Fi(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Ci({
                                Dc: !1,
                                Ec: !1,
                                ld: c.exclude_element_selectors,
                                zb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    kh: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.$a;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Hi = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : z.enhanced_conversion_data;
                case "automatic":
                    return Fi(a[Q.xg])
            }
        };
    var Ii = {},
        Ji = function(a, b) {
            if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a)) return z._gtmexpgrp[a];
            void 0 === Ii[a] && (Ii[a] = Math.floor(Math.random() * b));
            return Ii[a]
        };
    var Ki = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Li = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };
    var Mi = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ni = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Oi(a) {
        return "null" !== a.origin
    };
    var Ri = function(a, b, c, d) {
            return Pi(d) ? Li(a, String(b || Qi()), c) : []
        },
        Ui = function(a, b, c, d, e) {
            if (Pi(e)) {
                var f = Si(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ti(f, function(g) {
                        return g.qe
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Ti(f, function(g) {
                        return g.xd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Vi(a, b, c, d) {
        var e = Qi(),
            f = window;
        Oi(f) && (f.document.cookie = a);
        var g = Qi();
        return e != g || void 0 != c && 0 <= Ri(b, g, !1, d).indexOf(c)
    }
    var Zi = function(a, b, c, d) {
            function e(x, y, w) {
                if (null == w) return delete h[y], x;
                h[y] = w;
                return x + "; " + y + "=" + w
            }

            function f(x, y) {
                if (null == y) return delete h[y], x;
                h[y] = !0;
                return x + "; " + y
            }
            if (!Pi(c.nb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Wi(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.Wj);
            g = e(g, "samesite",
                c.sk);
            c.uk && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Xi(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (x) {
                        q = x;
                        continue
                    }
                    r = !0;
                    if (!Yi(u, c.path) && Vi(v, a, b, c.nb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Yi(n, c.path) ? 1 : Vi(g, a, b, c.nb) ? 0 : 1
        },
        $i = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Zi(a,
                b, c)
        };

    function Ti(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Si(a, b, c) {
        for (var d = [], e = Ri(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    qe: 1 * k[0] || 1,
                    xd: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var Wi = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        aj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        bj = /(^|\.)doubleclick\.net$/i,
        Yi = function(a, b) {
            return bj.test(window.document.location.hostname) || "/" === b && aj.test(a)
        },
        Qi = function() {
            return Oi(window) ? window.document.cookie : ""
        },
        Xi = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            bj.test(e) || aj.test(e) || a.push("none");
            return a
        },
        Pi = function(a) {
            if (!ng().g() || !a || !zg()) return !0;
            if (!yg(a)) return !1;
            var b = wg(a);
            return null == b ? !0 : !!b
        };
    var cj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Ki(a) & 2147483647) : String(b)
        },
        dj = function(a) {
            return [cj(a), Math.round(Ta() / 1E3)].join(".")
        },
        gj = function(a, b, c, d, e) {
            var f = ej(b);
            return Ui(a, f, fj(c), d, e)
        },
        hj = function(a, b, c, d) {
            var e = "" + ej(c),
                f = fj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        ej = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        fj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function ij(a, b, c) {
        var d, e = Number(null != a.Ab ? a.Ab : void 0);
        0 !== e && (d = new Date((b || Ta()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var jj = ["1"],
        kj = {},
        lj = {},
        nj = function(a) {
            return kj[mj(a)]
        },
        qj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = mj(a.prefix);
            if (!kj[c] && !oj(c, a.path, a.domain) && b) {
                var d = mj(a.prefix),
                    e = dj();
                if (0 === pj(d, e, a)) {
                    var f = Ib("google_tag_data", {});
                    f._gcl_au ? ig("GTM", 57) : f._gcl_au = e
                }
                oj(c, a.path, a.domain)
            }
        };

    function pj(a, b, c, d) {
        var e = hj(b, "1", c.domain, c.path),
            f = ij(c, d);
        f.nb = "ad_storage";
        return $i(a, e, f)
    }

    function oj(a, b, c) {
        var d = gj(a, b, c, jj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (kj[a] = e.slice(0, 2).join("."), lj[a] = {
            id: e.slice(2, 4).join("."),
            Gh: Number(e[4]) || 0
        }) : 3 === e.length ? lj[a] = {
            id: e.slice(0, 2).join("."),
            Gh: Number(e[2]) || 0
        } : kj[a] = d;
        return !0
    }

    function mj(a) {
        return (a || "_gcl") + "_au"
    };
    var rj = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                eg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function sj(a, b) {
        var c = rj(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].eg] || (d[c[e].eg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Ma: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].eg].push(g)
            }
        }
        return d
    };

    function tj() {
        for (var a = uj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function vj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var uj, wj;

    function xj(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = wj[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        uj = uj || vj();
        wj = wj || tj();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var yj;
    var Cj = function() {
            var a = zj,
                b = Aj,
                c = Bj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Rb(I, "mousedown", d);
                Rb(I, "keyup", d);
                Rb(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Dj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Bj().decorators.push(f)
        },
        Ej = function(a, b, c) {
            for (var d = Bj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== I.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q] instanceof RegExp) {
                                if (k[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Xa(e, g.callback())
                }
            }
            return e
        };

    function Bj() {
        var a = Ib("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Fj = /(.*?)\*(.*?)\*(.*)/,
        Gj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Hj = /^(?:www\.|m\.|amp\.)+/,
        Ij = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Jj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Lj = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, h = String(d);
                    uj = uj || vj();
                    wj = wj || tj();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length,
                            q = n + 2 < h.length,
                            r = h.charCodeAt(n),
                            t = p ? h.charCodeAt(n + 1) : 0,
                            u = q ? h.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            x = (r & 3) << 4 | t >> 4,
                            y = (t & 15) << 2 | u >> 6,
                            w = u & 63;
                        q || (w = 64, p || (y = 64));
                        k.push(uj[v], uj[x], uj[y], uj[w])
                    }
                    g = k.join("");
                    f.call(e, g)
                }
            }
        var A = b.join("*");
        return ["1", Kj(A),
            A
        ].join("*")
    };

    function Kj(a, b) {
        var c = [z.navigator.userAgent, (new Date).getTimezoneOffset(), Gb.userLanguage || Gb.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = yj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        yj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ yj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }

    function Mj() {
        return function(a) {
            var b = ni(z.location.href),
                c = b.search.replace("?", ""),
                d = ii(c, "_gl", !1, !0) || "";
            a.query = Nj(d) || {};
            var e = li(b, "fragment").match(Jj("_gl"));
            a.fragment = Nj(e && e[3] || "") || {}
        }
    }

    function Oj(a, b) {
        var c = Jj(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Pj = function(a, b) {
            b || (b = "_gl");
            var c = Ij.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Oj(b, (c[2] || "").slice(1)),
                f = Oj(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Qj = function(a) {
            var b = Mj(),
                c = Bj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Xa(d, e.query), a && Xa(d, e.fragment));
            return d
        },
        Nj = function(a) {
            try {
                var b = Rj(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = xj(d[e + 1]);
                        c[f] = g
                    }
                    ig("TAGGING", 6);
                    return c
                }
            } catch (h) {
                ig("TAGGING",
                    8)
            }
        };

    function Rj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Fj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    k;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Kj(h, p)) {
                            k = !0;
                            break a
                        }
                    k = !1
                }
                if (k) return h;
                ig("TAGGING", 7)
            }
        }
    }

    function Sj(a, b, c, d) {
        function e(p) {
            p = Oj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Ij.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }

    function Tj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Ej(b, 1, c),
            e = Ej(b, 2, c),
            f = Ej(b, 3, c);
        if (Ya(d)) {
            var g = Lj(d);
            c ? Uj("_gl", g, a) : Vj("_gl", g, a, !1)
        }
        if (!c && Ya(e)) {
            var h = Lj(e);
            Vj("_gl", h, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k)) a: {
                var n = k,
                    p = f[k],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Vj(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Uj(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Sj(n, p, q)
            }
    }

    function Vj(a, b, c, d) {
        if (c.href) {
            var e = Sj(a, b, c.href, void 0 === d ? !1 : d);
            tb.test(e) && (c.href = e)
        }
    }

    function Uj(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = I.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Sj(a, b, c.action);
                tb.test(n) && (c.action = n)
            }
        }
    }

    function zj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Tj(e, e.hostname)
            }
        } catch (g) {}
    }

    function Aj(a) {
        try {
            if (a.action) {
                var b = li(ni(a.action), "host");
                Tj(a, b)
            }
        } catch (c) {}
    }
    var Wj = function(a, b, c, d) {
            Cj();
            Dj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Xj = function(a, b) {
            Cj();
            Dj(a, [ki(z.location, "host", !0)], b, !0, !0)
        },
        Yj = function() {
            var a = I.location.hostname,
                b = Gj.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Hj, ""),
                k = e.replace(Hj, ""),
                n;
            if (!(n = h === k)) {
                var p = "." + k;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        Zj = function(a, b) {
            return !1 === a ? !1 : a || b || Yj()
        };
    var ak = {};
    var bk = /^\w+$/,
        ck = /^[\w-]+$/,
        dk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        ek = function() {
            if (!ng().g() || !zg()) return !0;
            var a = wg("ad_storage");
            return null == a ? !0 : !!a
        },
        fk = function(a, b) {
            yg("ad_storage") ? ek() ? a() : Eg(a, "ad_storage") : b ? ig("TAGGING", 3) : Dg(function() {
                fk(a, !0)
            }, ["ad_storage"])
        },
        hk = function(a) {
            return gk(a).map(function(b) {
                return b.Ma
            })
        },
        gk = function(a) {
            var b = [];
            if (!Oi(z) || !I.cookie) return b;
            var c = Ri(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Id: d.Id
                }, e++) {
                var f = ik(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Id = g.Ma;
                    var k = g.timestamp,
                        n = g.labels,
                        p = Ha(b, function(q) {
                            return function(r) {
                                return r.Ma === q.Id
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = jk(p.labels, n || [])) : b.push({
                        version: h,
                        Ma: d.Id,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return kk(b)
        };

    function jk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function lk(a) {
        return a && "string" == typeof a && a.match(bk) ? a : "_gcl"
    }
    var nk = function() {
            var a = ni(z.location.href),
                b = li(a, "query", !1, void 0, "gclid"),
                c = li(a, "query", !1, void 0, "gclsrc"),
                d = li(a, "query", !1, void 0, "wbraid"),
                e = li(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || ii(f, "gclid", !1);
                c = c || ii(f, "gclsrc", !1);
                d = d || ii(f, "wbraid", !1)
            }
            return mk(b, c, e, d)
        },
        mk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && ck.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(ck)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        pk = function(a) {
            var b = nk();
            fk(function() {
                ok(b, !1, a)
            })
        };

    function ok(a, b, c, d, e) {
        function f(x, y) {
            var w = qk(x, g);
            w && ($i(w, y, h), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = lk(c.prefix);
        d = d || Ta();
        var h = ij(c, d, !0);
        h.nb = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var y = ["GCL", n, x];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == ak.enable_gbraid_cookie_write ? 0 : ak.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0],
                r = qk("gb",
                    g),
                t = !1;
            if (!b)
                for (var u = gk(r), v = 0; v < u.length; v++) u[v].Ma === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var sk = function(a, b) {
            var c = Qj(!0);
            fk(function() {
                for (var d = lk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== dk[f]) {
                        var g = qk(f, d),
                            h = c[g];
                        if (h) {
                            var k = Math.min(rk(h), Ta()),
                                n;
                            b: {
                                var p = k;
                                if (Oi(z))
                                    for (var q = Ri(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (rk(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = ij(b, k, !0);
                                t.nb = "ad_storage";
                                $i(g, h, t)
                            }
                        }
                    }
                }
                ok(mk(c.gclid, c.gclsrc), !1, b)
            })
        },
        qk = function(a, b) {
            var c = dk[a];
            if (void 0 !== c) return b + c
        },
        rk = function(a) {
            return 0 !== tk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ik(a) {
        var b = tk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Ma: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function tk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ck.test(a[2]) ? [] : a
    }
    var uk = function(a, b, c, d, e) {
            if (Ga(b) && Oi(z)) {
                var f = lk(e),
                    g = function() {
                        for (var h = {}, k = 0; k < a.length; ++k) {
                            var n = qk(a[k], f);
                            if (n) {
                                var p = Ri(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                fk(function() {
                    Wj(g, b, c, d)
                })
            }
        },
        kk = function(a) {
            return a.filter(function(b) {
                return ck.test(b.Ma)
            })
        },
        vk = function(a, b) {
            if (Oi(z)) {
                for (var c = lk(b.prefix), d = {}, e = 0; e < a.length; e++) dk[a[e]] && (d[a[e]] = dk[a[e]]);
                fk(function() {
                    Ma(d, function(f, g) {
                        var h = Ri(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(t,
                            u) {
                            return rk(u) - rk(t)
                        });
                        if (h.length) {
                            var k = h[0],
                                n = rk(k),
                                p = 0 !== tk(k.split(".")).length ? k.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== tk(k.split(".")).length ? k.split(".")[2] : void 0;
                            q[f] = [r];
                            ok(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function wk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var xk = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (zg()) {
            var c = nk();
            if (wk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Xj(function() {
                    return d
                }, 3);
                Xj(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function yk(a, b) {
        var c = lk(b),
            d = qk(a, c);
        if (!d) return 0;
        for (var e = gk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function zk(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Ak = function(a) {
            var b = [];
            Ma(a, function(c, d) {
                d = kk(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Ma);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Ck = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Bk("gcl" + a);
                if (d) return d.split(".")
            }
            var e = lk(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !Mg(Q.H) && c,
                    g;
                g = nk()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = qk(a, e);
            return h ? hk(h) : []
        },
        Bk = function(a) {
            var b = ni(z.location.href),
                c = li(b, "host", !1);
            if (c && c.match(Dk)) {
                var d = li(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        Ek = function(a, b) {
            yg(Q.H) ? Mg(Q.H) ? a() : Eg(a, Q.H) : b ? S(42) : Qg(function() {
                Ek(a, !0)
            }, [Q.H])
        },
        Dk = /^\d+\.fls\.doubleclick\.net$/,
        Fk = !1;
    var Gk = function(a, b) {
            return Ck("aw", a, b)
        },
        Hk = function(a, b) {
            return Ck("dc", a, b)
        },
        Ik = function(a) {
            var b = Bk("gac");
            return b ? !Mg(Q.H) && a ? "0" : decodeURIComponent(b) : Ak(ek() ? sj() : {})
        },
        Jk = function(a) {
            var b = Bk("gacgb");
            return b ?
                !Mg(Q.H) && a ? "0" : decodeURIComponent(b) : Ak(ek() ? sj("_gac_gb", !0) : {})
        },
        Kk = function(a) {
            var b = nk(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                Ma: d,
                Gf: f
            });
            e && c.push({
                Ma: e,
                Gf: "ds"
            });
            if (!Fk) {}
            Ek(function() {
                qj(a);
                var g = nj(a.prefix);
                if (g && 0 < c.length)
                    for (var h = T.joined_auid = T.joined_auid || {}, k = 0; k < c.length; k++) {
                        var n =
                            c[k],
                            p = n.Ma,
                            q = n.Gf,
                            r = (a.prefix || "_gcl") + "." + q + "." + p;
                        if (!h[r]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t = "gb" === q ? t + "?gbraid=" + p + "&auid=" + g : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
                            Xb(t);
                            h[r] = !0
                        }
                    }
            })
        },
        Lk = function(a) {
            var b;
            if (Bk("gclaw") || Bk("gac") || 0 < (nk().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (nk().gb || []).length) c = !0;
                else {
                    var d = Math.max(yk("aw", a), zk(ek() ? sj() : {}));
                    c = Math.max(yk("gb", a), zk(ek() ? sj("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var Mk = function(a) {
        var b = Gb && Gb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var Ok = function(a) {
            var b = a ? Hi(a) : z.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? Nk(a) ? "a" : "m" : "c";
            if (z.Promise) try {
                return b ? nh(b).then(function(e) {
                    e.wh = d;
                    return e
                }) : Promise.resolve({
                    Fc: "",
                    wh: void 0
                })
            } catch (e) {}
        },
        Nk = function(a) {
            var b = a && a[Q.xg];
            return b && b[Q.yi]
        },
        Pk = function(a) {
            if (Mg(Q.H)) return a;
            a = a.replace(/&url=([^&#]+)/,
                function(b, c) {
                    var d = oi(decodeURIComponent(c));
                    return "&url=" + encodeURIComponent(d)
                });
            return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = oi(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            })
        },
        Qk = function() {
            if (vh || !0 !== z._gtmdgs && !Mk("11")) return -1;
            var a = Oa('1');
            return Ji(1, 100) < a ? Ji(2, 2) : -1
        },
        Rk = function() {
            return -1 !== Gb.userAgent.toLowerCase().indexOf("firefox")
        },
        Sk = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
                }
                return b.join(",")
            }
        };
    var Tk = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Uk = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Vk = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Wk = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Xk = function() {
            var a = !1;
            return a
        },
        Zk = function(a) {
            var b = Gh("gtm.allowlist") || Gh("gtm.whitelist");
            b && S(9);
            Xk() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Za(Qa(b), Uk),
                d = Gh("gtm.blocklist") ||
                Gh("gtm.blacklist");
            d || (d = Gh("tagTypeBlacklist")) && S(3);
            d ? S(8) : d = [];
            Yk() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Qa(d).indexOf("google") && S(2);
            var e = d && Za(Qa(d), Vk),
                f = {};
            return function(g) {
                var h = g && g[Ld.Lb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = zh[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) {
                                    if (0 > c.indexOf(k[q])) {
                                        S(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= e.indexOf(h);
                    if (t) r = t;
                    else {
                        var u = La(e, k || []);
                        u && S(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = La(e, Wk));
                return f[h] = v
            }
        },
        Yk = function() {
            return Tk.test(z.location && z.location.hostname)
        };
    var Ie = {
            J: "GTM-K5MSJHJ",
            Mc: ""
        },
        $k = {
            Jh: "GTM-K5MSJHJ",
            Kh: "GTM-K5MSJHJ"
        },
        al = function() {
            var a = [Ie.J];
            return a
        },
        bl = function() {
            var a = [Ie.J];
            return a
        },
        cl = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        el = function(a) {
            return dl().container.hasOwnProperty(a)
        };

    function dl() {
        var a = T.tidr;
        a || (a = new cl, T.tidr = a);
        return a
    }
    var hl = function(a) {},
        ll = function(a) {},
        ml =
        function() {
            return "&tc=" + ke.filter(function(a) {
                return a
            }).length
        },
        pl = function() {
            2022 <= nl().length && ol()
        },
        ql = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        sl = function() {
            rl || (rl = z.setTimeout(ol, 500))
        },
        ol = function() {
            rl && (z.clearTimeout(rl), rl = void 0);
            if (void 0 !== tl && (!ul[tl] || vl || wl))
                if (xl[tl] || yl.Nj() || 0 >= zl--) S(1), xl[tl] = !0;
                else {
                    yl.mk();
                    var a = nl(!0);
                    Qb(a);
                    ul[tl] = !0;
                    Bl = Al = Dl = Yl = Zl = wl = vl = "";
                    Cl = []
                }
        },
        nl = function(a) {
            var b = tl;
            if (void 0 === b) return "";
            var c = jg("GTM"),
                d = jg("TAGGING");
            return [$l, ul[b] ? "" : "&es=1", am[b], hl(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", ml(), vl, wl, Zl, Yl, ll(a), Dl, Al, Bl ? "&dl=" + encodeURIComponent(Bl) : "", 0 < Cl.length ? "&tdp=" + Cl.join(".") : "", "&z=0"].join("")
        },
        cm = function() {
            $l = bm()
        },
        bm = function() {
            return [dm, "&v=3&t=t", "&pid=" +
                Ia(), "&rv=" + oh.ee
            ].join("")
        },
        kl = ["L", "S", "Y"],
        gl = ["S", "E"],
        em = {
            sampleRate: "0.005000",
            ai: "",
            $h: Number("5")
        },
        fm = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        gm;
    if (!(gm = fm)) {
        var hm = Math.random(),
            im = em.sampleRate;
        gm = hm < im
    }
    var jm =
        gm,
        dm = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=41",
        km = {
            label: Ie.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        $l = bm(),
        ul = {},
        vl = "",
        wl = "",
        Dl = "",
        Yl = "",
        Al = "",
        Cl = [],
        Bl = "",
        jl = {},
        il = !1,
        fl = {},
        lm = {},
        Zl = "",
        tl = void 0,
        am = {},
        xl = {},
        rl = void 0,
        mm = 5;
    0 < em.$h && (mm = em.$h);
    var yl = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Nj: function() {
                    return c < a ? !1 : Ta() - d[c % a] < b
                },
                mk: function() {
                    var f = c++ % a;
                    d[f] = Ta()
                }
            }
        }(mm, 1E3),
        zl = 1E3,
        om = function(a, b) {
            if (jm && !xl[a] && tl !== a) {
                ol();
                tl =
                    a;
                Dl = vl = "";
                am[a] = "&e=" + ql(b) + "&eid=" + a;
                sl();
            }
        },
        pm = function(a, b, c, d) {
            if (jm && b) {
                var e, f = String(b[Ld.Lb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!xl[a]) {
                    a !== tl && (ol(), tl = a);
                    vl = vl ? vl + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var k = (me[h] ? "1" : "2") + e;
                    Dl = Dl ? Dl + "." + k : "&ti=" + k;
                    sl();
                    pl()
                }
            }
        };
    var wm = function(a, b, c) {
            if (jm && !xl[a]) {
                a !== tl && (ol(), tl = a);
                var d = c + b;
                wl = wl ? wl + "." + d : "&epr=" + d;
                sl();
                pl()
            }
        },
        xm = function(a, b, c) {};
    var ym = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        zm = {},
        Am = Object.freeze((zm[Q.Kb] = !0, zm[Q.xc] = !0, zm)),
        Bm = {},
        Cm = Object.freeze((Bm[Q.La] = !0, Bm)),
        Dm = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        Fm = function(a, b, c) {};

    function Gm(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Em(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Cm[q] : t
            },
            f;
        for (f in Gm(a, b))
            if (!Am[f]) {
                var g = (d ? d + "." : "") + f,
                    h = e(f, a),
                    k = e(f, b),
                    n = "object" === mc(h) || "array" === mc(h),
                    p = "object" === mc(k) || "array" === mc(k);
                if (n && p) Em(h, k, c, g);
                else if (n || p || h !== k) c[g] = !0
            }
        return Object.keys(c)
    };
    var Hm = !1,
        Im = 0,
        Jm = [];

    function Km(a) {
        if (!Hm) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Hm = !0;
                for (var e = 0; e < Jm.length; e++) K(Jm[e])
            }
            Jm.push = function() {
                for (var f = 0; f < arguments.length; f++) K(arguments[f]);
                return 0
            }
        }
    }

    function Lm() {
        if (!Hm && 140 > Im) {
            Im++;
            try {
                I.documentElement.doScroll("left"), Km()
            } catch (a) {
                z.setTimeout(Lm, 50)
            }
        }
    }
    var Mm = function(a) {
        Hm ? a() : Jm.push(a)
    };
    var Om = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ie.J
        }
    };
    var Qm = function(a, b) {
            this.g = !1;
            this.D = [];
            this.I = {
                tags: []
            };
            this.R = !1;
            this.o = this.B = 0;
            Pm(this, a, b)
        },
        Rm = function(a, b, c, d) {
            if (rh.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            oc(d) && (e = pc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        Sm = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Tm = function(a) {
            if (!a.g) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.D.length = 0
            }
        },
        Pm = function(a, b, c) {
            void 0 !== b && a.je(b);
            c && z.setTimeout(function() {
                return Tm(a)
            }, Number(c))
        };
    Qm.prototype.je = function(a) {
        var b = this,
            c = Va(function() {
                return K(function() {
                    a(Ie.J, b.I)
                })
            });
        this.g ? c() : this.D.push(c)
    };
    var Um = function(a) {
            a.B++;
            return Va(function() {
                a.o++;
                a.R && a.o >= a.B && Tm(a)
            })
        },
        Vm = function(a) {
            a.R = !0;
            a.o >= a.B && Tm(a)
        };
    var Wm = function() {
            function a(d) {
                return !Fa(d) || 0 > d ? 0 : d
            }
            if (!T._li && z.performance && z.performance.timing) {
                var b = z.performance.timing.navigationStart,
                    c = Fa(Hh.get("gtm.start")) ? Hh.get("gtm.start") : 0;
                T._li = {
                    cst: a(c - b),
                    cbt: a(xh - b)
                }
            }
        },
        Xm = function(a) {
            z.performance && z.performance.mark(Ie.J + "_" + a + "_start")
        },
        Ym = function(a) {
            if (z.performance) {
                var b = Ie.J + "_" + a + "_start",
                    c = Ie.J + "_" + a + "_duration";
                z.performance.measure(c, b);
                var d = z.performance.getEntriesByName(c)[0];
                z.performance.clearMarks(b);
                z.performance.clearMeasures(c);
                var e = T._p || {};
                void 0 === e[a] && (e[a] = d.duration, T._p = e);
                return d.duration
            }
        },
        Zm = function() {
            if (z.performance && z.performance.now) {
                var a = T._p || {};
                a.PAGEVIEW = z.performance.now();
                T._p = a
            }
        };
    var $m = {},
        an = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        bn = !1;

    function en() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var fn = function(a) {},
        gn = function(a, b) {
            return function() {
                var c = an(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function mn(a, b, c, d) {
        var e = ke[a],
            f = nn(a, b, c, d);
        if (!f) return null;
        var g = se(e[Ld.ah], c, []);
        if (g && g.length) {
            var h = g[0];
            f = mn(h.index, {
                onSuccess: f,
                onFailure: 1 === h.xh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function nn(a, b, c, d) {
        function e() {
            if (f[Ld.Ti]) h();
            else {
                var x = te(f, c, []);
                var y = x[Ld.fi];
                if (null != y)
                    for (var w = 0; w < y.length; w++)
                        if (!Mg(y[w])) {
                            h();
                            return
                        }
                var A = Rm(c.xb, String(f[Ld.Lb]), Number(f[Ld.dh]), x[Ld.Ui]),
                    B = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = Ta() - C;
                        pm(c.id, ke[a], "5", E);
                        Sm(c.xb, A, "success",
                            E);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = Ta() - C;
                        pm(c.id, ke[a], "6", E);
                        Sm(c.xb, A, "failure", E);
                        h()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                pm(c.id, f, "1");
                var F = function() {
                    var E = Ta() - C;
                    pm(c.id, f, "7", E);
                    Sm(c.xb, A, "exception",
                        E);
                    B || (B = !0, h())
                };
                var C = Ta();
                try {
                    re(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    F(E)
                }
            }
        }
        var f = ke[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.Lf(f)) return null;
        var n = se(f[Ld.eh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = mn(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: k
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.xh ? k : q
        }
        if (f[Ld.Vg] || f[Ld.Yi]) {
            var r = f[Ld.Vg] ? le : c.Dk,
                t = g,
                u = h;
            if (!r[a]) {
                e = Va(e);
                var v = on(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function on(a, b, c) {
        var d = [],
            e = [];
        b[a] = pn(d, e, c);
        return {
            onSuccess: function() {
                b[a] = qn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = rn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function pn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function qn(a) {
        a()
    }

    function rn(a, b) {
        b()
    };

    function sn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return ni("" + c + b).href
        }
    }

    function tn(a, b) {
        return un() ? sn(a, b) : void 0
    }

    function un() {
        var a = !1;
        return a
    }

    function vn() {
        return !!oh.fe && "SGTM_TOKEN" !== oh.fe.split("@@").join("")
    };
    var wn = function() {
        var a = !1;
        return a
    };
    var yn = function(a, b, c, d) {
            return (2 === xn() || d || "http:" != z.location.protocol ? a : b) + c
        },
        xn = function() {
            var a = Ob(),
                b;
            if (1 === a) a: {
                var c = th;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var zn = !1;
    var Bn = function(a, b, c) {
            if (!An() && !el(a)) {
                var d = c ? "/gtag/js" : "/gtm.js",
                    e = "?id=" + encodeURIComponent(a) + "&l=" + oh.fa,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                var g = vn();
                g && (e += "&sign=" + oh.fe);
                var h = tn(b, d + e);
                if (!h) {
                    var k = oh.Nc + d;
                    g && Hb && f && (k = Hb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    h = yn("https://", "http://", k + e)
                }
                dl().container[a] = !0;
                Nb(h)
            }
        },
        Cn = function(a, b) {
            if (zn) {
                var c;
                if (c = !An()) c = !dl().destination.hasOwnProperty(a);
                if (c) {
                    var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + oh.fa + "&cx=c";
                    vn() && (d += "&sign=" + oh.fe);
                    var e = tn(b, d);
                    e || (e = yn("https://", "http://", oh.Nc + d));
                    dl().destination[a] = !0;
                    Nb(e)
                }
            } else Bn(a, b, !0)
        };

    function An() {
        if (wn()) {
            return !0
        }
        return !1
    }
    var Dn = [];
    Dn[1] = !0;

    var En = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.dataLayerConfig = {};
            this.remoteConfig = {};
            this.eventMetadata = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.priorityId = this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Fn = function(a) {
            var b = new En;
            b.eventModel = a;
            return b
        },
        Gn = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Hn = function(a, b) {
            a.containerConfig = b;
            return a
        },
        In = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Jn = function(a, b) {
            a.dataLayerConfig = b;
            return a
        },
        Kn = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        Ln = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        Mn = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Nn = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        On = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Pn = function(a, b) {
            a.onFailure = b;
            return a
        };
    l = En.prototype;
    l.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        Qn(this, this.globalConfig[a], this.dataLayerConfig[a]) && (S(71), S(79));
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    l.getTopLevelKeys = function() {
        function a(f) {
            for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
                S(71);
                S(80);
                break
            }
        }
        return Object.keys(b)
    };
    l.getMergedValues = function(a, b) {
        function c(h) {
            oc(h) && Ma(h, function(k, n) {
                e = !0;
                d[k] = n
            })
        }
        var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e,
            g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        if (e !== f || Qn(this, d, g)) S(71), S(81);
        e = f;
        d = g;
        return e ? d : void 0
    };
    l.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(g) {
                for (var h = 0; h < a.length; h++) void 0 !== g[a[h]] && (b[a[h]] = g[a[h]], c = !0);
                return c
            };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
        d(this.globalConfig);
        var e = b,
            f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        Qn(this, b, e) && (S(71), S(82));
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b
    };
    l.getEventModelKeys = function() {
        var a = [],
            b;
        for (b in this.eventModel) b !== Q.Kb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
        return a
    };
    var Qn = function(a, b, c) {
        try {
            if (b === c) return !1;
            var d = mc(b);
            if (d !== mc(c) || !(oc(b) && oc(c) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++)
                    if (Qn(a, b[e], c[e])) return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f)) return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Qn(a, b[g], c[g])) return !0
            }
        } catch (h) {
            S(72)
        }
        return !1
    };
    var Rn = function() {
        T.dedupe_gclid || (T.dedupe_gclid = "" + dj());
        return T.dedupe_gclid
    };
    var Sn;
    if (3 === oh.ee.length) Sn = "g";
    else {
        var Tn = "G";
        Sn = Tn
    }
    var Un = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Sn,
            OPT: "o"
        },
        Vn = function(a) {
            var b = Ie.J.split("-"),
                c = b[0].toUpperCase(),
                d = Un[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === oh.ee.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + oh.ee + e
        };

    function Wn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Xn = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Yn() {
        return vb("iPhone") && !vb("iPod") && !vb("iPad")
    };
    vb("Opera");
    vb("Trident") || vb("MSIE");
    vb("Edge");
    !vb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !vb("Edge") || vb("Trident") || vb("MSIE") || vb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !vb("Edge") && vb("Mobile");
    vb("Macintosh");
    vb("Windows");
    vb("Linux") || vb("CrOS");
    var Zn = na.navigator || null;
    Zn && (Zn.appVersion || "").indexOf("X11");
    vb("Android");
    Yn();
    vb("iPad");
    vb("iPod");
    Yn() || vb("iPad") || vb("iPod");
    ub().toLowerCase().indexOf("kaios");
    var $n = function(a) {
        if (!a || !I.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var ao = function() {};
    var bo = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        co = function(a, b) {
            this.o = a;
            this.g = null;
            this.D = {};
            this.R = 0;
            this.I = void 0 === b ? 500 : b;
            this.B = null
        };
    ma(co, ao);
    co.prototype.addEventListener = function(a) {
        var b = {},
            c = Ni(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = bo(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            eo(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    co.prototype.removeEventListener = function(a) {
        a && a.listenerId && eo(this, "removeEventListener", null, a.listenerId)
    };
    var go = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = fo(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && fo(a.purpose.consents, b)
                } else k = !0;
            else k = 1 === h ? a.purpose && a.vendor ? fo(a.purpose.legitimateInterests,
                b) && fo(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        fo = function(a, b) {
            return !(!a || !a[b])
        },
        eo = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (ho(a)) {
                io(a);
                var f = ++a.R;
                a.D[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        ho = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.g = b;
            return a.g
        },
        io = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Xn(a.o, a.B))
        };
    var jo = !0;
    jo = !1;
    var ko = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        lo = Wn("", 550),
        mo = Wn("", 500);

    function no() {
        var a = T.tcf || {};
        return T.tcf = a
    }
    var so = function() {
        var a = no(),
            b = new co(z, jo ? 3E3 : -1);
        if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.o.__tcfapi || null != ho(b))) {
            a.active = !0;
            a.Ad = {};
            oo();
            var c = null;
            jo ? c = z.setTimeout(function() {
                po(a);
                qo(a);
                c = null
            }, mo) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) po(a), qo(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = ro(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in ko)
                                if (ko.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d,
                                            k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = bo(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                                            !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : go(h, "1", 0) : !1
                                    } else f[g] = go(d, g, ko[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.Ad = e, qo(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), po(a), qo(a)
            }
        }
    };

    function po(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        jo && (a.Ad = ro())
    }

    function oo() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = lo, a);
        Jg(b)
    }

    function ro() {
        var a = {},
            b;
        for (b in ko) ko.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function qo(a) {
        var b = {},
            c = (b.ad_storage = a.Ad["1"] ? "granted" : "denied", b);
        Lg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: to()
        })
    }
    var to = function() {
            var a = no();
            return a.active ? a.tcString || "" : ""
        },
        uo = function() {
            var a = no();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        vo = function(a) {
            if (!ko.hasOwnProperty(String(a))) return !0;
            var b = no();
            return b.active && b.Ad ? !!b.Ad[String(a)] : !0
        };
    var wo = function(a, b) {
            var c = a && !Mg(Q.H);
            return b && c ? "0" : b
        },
        Ao = function(a) {
            function b(u) {
                var v;
                T.reported_gclid || (T.reported_gclid = {});
                v = T.reported_gclid;
                var x, y = g;
                x = !g || zg() && !Mg(Q.H) ? k + (u ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
                if (!v[x]) {
                    v[x] = !0;
                    var w = [],
                        A = {},
                        B = function(N, V) {
                            V && (w.push(N + "=" + encodeURIComponent(V)), A[N] = !0)
                        },
                        F = "https://www.google.com";
                    if (zg()) {
                        var C = Mg(Q.H);
                        B("gcs", Ng());
                        u && B("gcu", "1");
                        Ag() && B("gcd", "G1" + Hg(xg));
                        B("rnd", Rn());
                        if ((!k || n && "aw.ds" !== n) && Mg(Q.H)) {
                            var E = hk("_gcl_aw");
                            B("gclaw", E.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", wo(d, p));
                        var D = !1;
                        D = !0;
                        C || !d && !D || (F = "https://pagead2.googlesyndication.com")
                    }
                    B("gdpr_consent", to());
                    B("gdpr", uo());
                    "1" === Qj(!1)._up && B("gtm_up", "1");
                    B("gclid", wo(d, k));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", wo(d, q)), A.gbraid && yo && (y = !1), !A.gbraid && zg() && Mg(Q.H))) {
                        var O = hk("_gcl_gb");
                        0 < O.length && (B("gclgb", O.join(".")), yo && (y = !1))
                    }
                    B("gtm", Vn(!e));
                    g && Mg(Q.H) && (qj(f || {}), y && B("auid", nj(f.prefix) || ""));
                    zo || a.pe && B("did", a.pe), a.Ub && B("gdid", a.Ub), a.Sb && B("edid", a.Sb);
                    var J = F + "/pagead/landing?" + w.join("&");
                    Xb(J)
                }
            }
            var c = !!a.ne,
                d = !!a.Ya,
                e = a.T,
                f = void 0 ===
                a.yb ? {} : a.yb,
                g = void 0 === a.vd ? !0 : a.vd,
                h = nk(),
                k = h.gclid || "",
                n = h.gclsrc,
                p = h.dclid || "",
                q = h.gbraid || "",
                r = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || q),
                t = zg();
            if (r || t) t ? Qg(function() {
                b();
                Mg(Q.H) || Pg(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, Q.H)
            }, [Q.H]) : b()
        },
        xo = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = oh.hi || z._CONSENT_MODE_SALT;
            return a ? c ? String(Ki(b + a + c)) : "0" : ""
        },
        zo = !1;
    var yo = !1;
    var Bo = function(a) {
        if (!zg() || wg(Q.H)) {
            a = a || {};
            qj(a, !1);
            var b = lj[mj(lk(a.prefix))];
            if (b && !(18E5 < Ta() - 1E3 * b.Gh)) {
                var c = b.id,
                    d = c.split(".");
                if (2 === d.length && !(864E5 < Ta() - 1E3 * (Number(d[1]) || 0))) return c
            }
        }
    };
    var Co = !1;
    var Do = function() {
            this.g = {}
        },
        Eo = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        Fo = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        Ho = function(a, b, c, d, e) {
            if (!zg()) {
                Go(a, b, c, d, e);
                return
            }
            Qg(function() {
                Mg(Q.H) ? Go(a, b, c, d, e) : d && d()
            }, [Q.H]);
        };

    var Io = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return Ck("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Jk(c)
                    },
                    gclaw: function() {
                        return Gk(b, c).join(".")
                    },
                    gac: function() {
                        return Ik(c)
                    }
                },
                e = Lk(b);
            Co && (e = !1);
            var f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                h = d[g],
                k = (0, d[f])(),
                n = "_gcl" !== b ? "" : h();
            k && Eo(a, f, k);
            n && Eo(a, g, n)
        },
        Go = function(a, b, c, d, e) {
            c = c || {};
            var f = c.yb || {},
                g = new Do;
            mh(b, function(h, k) {
                Eo(g, "em", h);
                Eo(g, "gtm", Vn());
                zg() && (Eo(g, "gcs", Ng()), Eo(g, "gcd", "G1" + Hg(xg)));
                Io(g, lk(f.prefix), c.Ya);
                Eo(g, "auid", nj(f.prefix));
                e && e.ve && Eo(g, "gdid", e.ve);
                e && e.se && Eo(g, "edid", e.se);
                var A = Fo(g);
                Xb("https://google.com/pagead/form-data/" + a + "?" + A);
                d && d()
            })
        };
    var Jo = /[A-Z]+/,
        Ko = /\s/,
        Lo = function(a) {
            if (m(a)) {
                a = Ra(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Jo.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Ko.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            P: d
                        }
                    }
                }
            }
        },
        No = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Lo(a[c]);
                d && (b[d.id] = d)
            }
            Mo(b);
            var e = [];
            Ma(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Mo(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.P[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Po = function(a, b, c) {
            if (z[a.functionName]) return b.Uf && K(b.Uf), z[a.functionName];
            var d = Oo();
            z[a.functionName] = d;
            if (a.ke)
                for (var e = 0; e < a.ke.length; e++) z[a.ke[e]] = z[a.ke[e]] || Oo();
            a.xe && void 0 === z[a.xe] && (z[a.xe] = c);
            Nb(yn("https://", "http://", a.cg), b.Uf, b.$j);
            return d
        },
        Oo = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Qo = {
            functionName: "_googWcmImpl",
            xe: "_googWcmAk",
            cg: "www.gstatic.com/wcm/loader.js"
        },
        Ro = {
            functionName: "_gaPhoneImpl",
            xe: "ga_wpid",
            cg: "www.gstatic.com/gaphone/loader.js"
        },
        So = {
            ei: "",
            $i: "5"
        },
        To = {
            functionName: "_googCallTrackingImpl",
            ke: [Ro.functionName, Qo.functionName],
            cg: "www.gstatic.com/call-tracking/call-tracking_" + (So.ei || So.$i) + ".js"
        },
        Uo = {},
        Vo = function(a, b, c, d) {
            S(22);
            if (c) {
                d = d || {};
                var e = Po(Qo, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.lb && (f.autoreplace = c);
                e(2, d.lb, f, c, 0, Sa(), d.options)
            }
        },
        Wo = function(a, b, c, d) {
            S(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Sa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Uo[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length ? (e.adData = {
                            ak: g.P[0],
                            cl: g.P[1]
                        }, Uo[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, Uo[g.id] = !0))
                }(e.gaData || e.adData) && Po(To, d)(d.lb, e, d.options)
            }
        },
        Xo = function() {
            var a = !1;
            return a
        },
        Yo = function(a, b) {
            if (a)
                if (wn()) {} else {
                    if (m(a)) {
                        var c =
                            Lo(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(Q.Hi);
                    if (f && Ga(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = Lo(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.containerId && a.containerId === h.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(Q.Gg),
                            n;
                        if (k) {
                            Ga(k) ? n = k : n = [k];
                            var p = b.getWithConfig(Q.Eg),
                                q = b.getWithConfig(Q.Fg),
                                r = b.getWithConfig(Q.Hg),
                                t = b.getWithConfig(Q.Gi),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) Wo(d, n[x], t, {
                                        lb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix &&
                                a.P[1]) Xo() ? Wo([a], n[x], t || "US", {
                                lb: u,
                                options: r
                            }) : Vo(a.P[0], a.P[1], n[x], {
                                lb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (Xo()) Wo([a], n[x], t || "US", {
                                    lb: u
                                });
                                else {
                                    var y = a.containerId,
                                        w = n[x],
                                        A = {
                                            lb: u
                                        };
                                    S(23);
                                    if (w) {
                                        A = A || {};
                                        var B = Po(Ro, A, y),
                                            F = {};
                                        void 0 !== A.lb ? F.receiver = A.lb : F.replace = w;
                                        F.ga_wpid = y;
                                        F.destination = w;
                                        B(2, Sa(), F)
                                    }
                                }
                        }
                    }
                }
        };
    var $o = function() {
            var a = T.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Ta() - b) return Promise.resolve(c)
            }
            try {
                return Promise.race([I.interestCohort().then(function(d) {
                    T.floc = {
                        ts: Ta(),
                        floc: d
                    };
                    return d
                }), new Promise(function(d) {
                    z.setTimeout(function() {
                        return d()
                    }, Zo)
                })]).catch(function() {})
            } catch (d) {}
        },
        bp = function() {
            if (!z.Promise) return !1;
            Ea(I.interestCohort) || ap || (ap = !0, $n('A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'));
            return Ea(I.interestCohort)
        },
        Zo = Number("200"),
        ap = !1;
    var dp = function(a, b) {
            var c = a.Qf,
                d = a.fg;
            a.kd && (Zj(c[Q.nc], !!c[Q.W]) && sk(cp, b), pk(b), vk(cp, b), Kk(b));
            c[Q.W] && uk(cp, c[Q.W], c[Q.$c], !!c[Q.oc], b.prefix);
            d && xk(["aw", "dc", "gb"])
        },
        ep = function(a, b, c, d) {
            var e = a.gg,
                f = a.callback,
                g = a.Sf;
            if ("function" === typeof f)
                if (e === Q.Me && void 0 === g) {
                    var h = d(b.prefix, c);
                    0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
                } else e === Q.xi ? (S(65), qj(b, !1), f(nj(b.prefix))) : f(g)
        },
        cp = ["aw", "dc", "gb"];
    var fp = !1;

    function gp() {
        if (Ea(Gb.joinAdInterestGroup)) return !0;
        fp || ($n('A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), fp = !0);
        return Ea(Gb.joinAdInterestGroup)
    }

    function hp(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                ig("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                ig("TAGGING", 10);
                return
            }
        } catch (e) {}
        Pb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    };
    var ip = function(a, b, c, d, e) {
            var f;
            if (f = !b && !a.g) {
                var g;
                if (g = !a.isGtmEvent) {
                    var h = a.B.remoteConfig[Q.qc];
                    g = h ? "auto_detect" === h.mode || "selectors" === h.mode || "code" === h.mode : !1
                }
                f = g
            }
            if (f) {
                var k = a.K(Q.Aa);
                if (null !== k) {
                    var n;
                    k && oc(k) ? n = k : n = Gi(a.getRemoteConfig(Q.qc));
                    n && Ho(a.I, n, {
                        yb: e,
                        Ya: c
                    }, void 0, d)
                }
            }
        },
        jp = function(a, b) {},
        kp = function(a, b) {
            a.Ba("google_gtm_url_processor", function(c) {
                b && (c = Pk(c));
                var d = c;
                return c = d
            })
        },
        lp = function(a, b) {
            a.Pb("gdpr_consent",
                to());
            a.Pb("gdpr", uo());
            zg() && a.g && (a.Z("gcs", Ng()), Ag() && a.Z("gcd", "G1" + Hg(xg)), b && a.Z("gcu", "1"))
        },
        np = function(a, b) {
            var c;
            if (!(c = b))
                if ("false" !== pi.di && vi)
                    if (wi) c = !0;
                    else {
                        var d = Yh("AW-" + a.I);
                        c = !!d && !!d.preAutoPii
                    }
            else c = !1;
            if (c) {
                var e = Ta(),
                    f = Ci({
                        Dc: !0,
                        Ec: !0,
                        vk: mp
                    });
                if (0 !== f.elements.length) {
                    var g = [];
                    for (var h = 0; h < f.elements.length; ++h) {
                        var k = f.elements[h];
                        g.push(k.querySelector + "*" + Di(k) + "*" + k.type)
                    }
                    a.Z("ec_m", g.join("~"));
                    var n = f.gk;
                    n && (a.Z("ec_sel", n.querySelector), a.Z("ec_meta", Di(n)));
                    a.Z("ec_lat", String(Ta() - e));
                    a.Z("ec_s", f.status)
                }
            }
        },
        op = function(a) {
            if (!a.g) a.K(Q.da) && a.Ba("google_gtag_event_data", {
                items: a.K(Q.da)
            });
            else if (a.eventName == Q.Ga) {
                a.fd({
                    google_conversion_merchant_id: a.K(Q.Re),
                    google_basket_feed_country: a.K(Q.Pe),
                    google_basket_feed_language: a.K(Q.Qe),
                    google_basket_discount: a.K(Q.Oe),
                    google_basket_transaction_type: a.eventName,
                    google_disable_merchant_reported_conversions: !0 === a.K(Q.qg)
                });
                wn() && a.Ba("google_disable_merchant_reported_conversions", !0);
                var b;
                var c = a.K(Q.da);
                if (c) {
                    for (var d = [], e = 0; e < c.length; ++e) {
                        var f = c[e];
                        f && d.push({
                            item_id: f.id,
                            quantity: f.quantity,
                            value: f.price,
                            start_date: f.start_date,
                            end_date: f.end_date
                        })
                    }
                    b = d
                } else b = void 0;
                var g = b;
                g && a.Ba("google_conversion_items", g)
            }
        },
        pp = function(a) {
            var b;
            var c = {};
            a.isGtmEvent ? !a.g && a.eventName && (c.event = a.eventName) : c.event = a.eventName;
            var d = a.B.eventModel;
            if (d) {
                pc(d, c);
                for (var e in c) c.hasOwnProperty(e) && Q.hg[e.split(".")[0]] && delete c[e];
                b = c
            } else b = null;
            var f = b;
            f && a.Ba("google_custom_params",
                f)
        },
        qp = function(a) {
            wn() && (a.Ba("opt_image_generator", function() {
                return new Image
            }), a.Ba("google_enable_display_cookie_match", !1))
        },
        rp = function(a) {
            var b, c = !1;
            c = !0 === z._gtmpcm ? !0 : Mk("14.1.1");
            (b = c) && a.Bc("apcm");
            if (!b) {
                a.Bc("capi");
                a.Bc("capiorig");
            }
            if (!a.isGtmEvent) {
                var d = Qk();
                0 === d ? a.Pb("dg", "c") : 1 === d && a.Pb("dg", "e")
            }
        },
        sp = function(a, b) {
            var c = tn(a, "/pagead/conversion_async.js");
            if (c) return c;
            var d = yn("https://", "http://", "www.googleadservices.com"),
                e = !b.isGtmEvent && 1 === Qk();
            if (Rk() || e) d = "https://www.google.com";
            return d + "/pagead/conversion_async.js"
        },
        tp = !1,
        up = !1;
    var vp = !1;
    var wp = !1;
    var mp = !1;
    mp = !0;
    var xp = [],
        yp = function(a) {
            var b = z.google_trackConversion,
                c = a.o.gtm_onFailure;
            "function" == typeof b ? b(a.o) || c() : c()
        },
        zp = function() {
            for (; 0 < xp.length;) yp(xp.shift())
        },
        Ap = function(a, b) {
            var c = tp;
            up && (c = b.getContainerTypeLoaded("AW"));
            if (!c) {
                tp = !0;
                Wm();
                var d = function() {
                    up && b.setContainerTypeLoaded("AW", !0);
                    zp();
                    xp = {
                        push: yp
                    }
                };
                wn() ? d() : Nb(a, d, function() {
                    zp();
                    tp = !1;
                    up && b.setContainerTypeLoaded("AW", !1)
                })
            }
        },
        Bp = function(a, b, c) {
            var d = Lo(a);
            !d && c.isGtmEvent && (d = this.fk(a));
            this.T = a;
            this.I = d.P[0] || "";
            this.R = d.containerId === d.id;
            this.D = d.P[1];
            this.g = void 0 !== this.D;
            this.eventName = b;
            this.isGtmEvent =
                c.isGtmEvent;
            this.B = c;
            this.o = {
                google_conversion_id: this.I,
                google_conversion_label: this.D,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_gtm: Vn()
            }
        };
    l = Bp.prototype;
    l.fk = function(a) {
        var b = a.indexOf("/"),
            c = 3 <= b,
            d = a.substring(3, c ? b : a.length);
        return {
            id: a,
            prefix: "AW",
            containerId: "AW-" + d,
            P: [d, c ? a.substring(b + 1) : void 0]
        }
    };
    l.Ba = function(a, b) {
        this.o[a] = b
    };
    l.qk = function() {
        delete this.o.google_transport_url
    };
    l.fd = function(a) {
        for (var b in a) a.hasOwnProperty(b) &&
            (this.o[b] = a[b])
    };
    l.Z = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b)
    };
    l.Pb = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] = b)
    };
    l.Bc = function(a) {
        this.o.google_gtm_experiments = this.o.google_gtm_experiments || {};
        this.o.google_gtm_experiments[a] = !0
    };
    l.K = function(a) {
        return this.B.getWithConfig(a)
    };
    l.getRemoteConfig = function(a) {
        return this.B.remoteConfig[a]
    };
    var Ep = function(a, b, c, d) {
        function e(D, O) {
            function J() {
                xp.push(D);
                up && d.getContainerTypeLoaded("AW") && zp()
            }
            var N = [];
            if (O) {
                k && (Dn[3] && !Dn[4] ? (qj(A, D.g), D.Pb("auid", nj(n))) : D.g && (qj(A), D.Z("auid", nj(n))));
                var L = (g(Q.We) || {})[D.D];
                np(D, Nk(L));
                var aa = !0 === g(Q.Nd) || L;
                if (D.g && aa && (!wp || !Lk())) {
                    var ba = Ok(L);
                    ba && N.push(ba.then(function(W) {
                        D.Z("em", W.Fc);
                        D.Z("ec_mode", W.wh)
                    }))
                }
            }
            if (N.length) try {
                Promise.all(N).then(function() {
                    J()
                });
                return
            } catch (W) {}
            J()
        }
        var f = new Bp(a, b, d),
            g = function(D) {
                return d.getWithConfig(D)
            },
            h = void 0 != g(Q.ia) &&
            !1 !== g(Q.ia),
            k = !1 !== g(Q.ra),
            n = g(Q.Ja) || g(Q.Ka),
            p = g(Q.sa),
            q = g(Q.za),
            r = g(Q.Qa),
            t = {};
        if (!vp) {
            var u = d.getMergedValues(Q.V);
            t.vh = cb(oc(u) ? u : {})
        }
        var v = d.getMergedValues(Q.V, 1),
            x = d.getMergedValues(Q.V, 2);
        t.ve = cb(oc(v) ? v : {}, ".");
        t.se = cb(oc(x) ? x : {}, ".");
        var y = g(Q.ca),
            w = sp(y, f);
        Ap(w, d);
        var A = {
                prefix: n,
                domain: p,
                Ab: q,
                flags: r
            },
            B = b == Q.Ia;
        var E = !1 === g(Q.Gb) || !1 === g(Q.La);
        if (!B || !f.g && !E)
            if (!0 === g(Q.Ne) && (f.g = !1), !1 !== g(Q.ba) || f.g) {
                f.fd({
                    google_remarketing_only: !f.g,
                    google_conversion_language: f.K(Q.hb),
                    google_conversion_value: f.K(Q.oa),
                    google_conversion_currency: f.K(Q.na),
                    google_conversion_order_id: f.K(Q.ib),
                    google_user_id: f.K(Q.Sa),
                    google_conversion_page_url: f.K(Q.tb),
                    google_conversion_referrer_url: f.K(Q.ub)
                });
                f.fd({
                    onload_callback: f.B.onSuccess,
                    gtm_onFailure: f.B.onFailure
                });
                Dn[2] && f.g && f.B.eventModel[Q.wc] && f.Z("gtm_ee", "1");
                delete f.B.eventModel[Q.wc];
                rp(f);
                f.g && f.Ba("google_transport_url", sn(f.K(Q.ca), "/"));
                f.Ba("google_restricted_data_processing", f.K(Q.ad));
                qp(f);
                !1 === f.K(Q.ba) && f.Ba("google_allow_ad_personalization_signals", !1);
                k ? f.fd({
                    google_gcl_cookie_prefix: A.prefix,
                    google_gcl_cookie_domain: A.domain,
                    google_gcl_cookie_max_age_seconds: A.Ab,
                    google_gcl_cookie_flags: A.flags
                }) : f.Ba("google_read_gcl_cookie_opt_out", !0);
                pp(f);
                op(f);
                "1" === Qj(!1)._up && f.Z("gtm_up", "1");
                f.g && (f.Z("vdnc", f.K(Q.af)), f.Z("vdltv", f.K(Q.Se)));
                lp(f);
                f.g && (f.Z("delopc", f.K(Q.Xd)), f.Z("oedeld", f.K(Q.Xe)), f.Z("delc", f.K(Q.jc)), f.Z("shf", f.K(Q.Ve)), f.Z("iedeld", Sk(f.K(Q.da))));
                vp || f.Z("did", t.vh), f.Z("gdid", t.ve), f.Z("edid", t.se);
                kp(f, h);
                jp(f, A);
                ip(f, B, h, t, A);
                zg() ? Qg(function() {
                    lp(f);
                    var D = Mg(Q.H);
                    if (f.g) {
                        var O = !1;
                        O = !0;
                        D || y || !h && !O || f.Ba("google_transport_url", "https://pagead2.googlesyndication.com/");
                        e(f, D)
                    } else if (D) {
                        e(f, D);
                        return
                    }
                    D || Pg(function() {
                        var J = new Bp(a, f.eventName, d);
                        J.g = f.g;
                        J.fd(pc(f.o));
                        kp(J, h);
                        !y && J.o.google_transport_url && J.qk();
                        lp(J, !0);
                        e(J, !0)
                    }, Q.H)
                }, [Q.H]) : e(f, !0)
            }
    };
    var Fp = function(a, b, c) {
            this.Da = a;
            this.eventName = b;
            this.s = c;
            this.F = {};
            this.metadata = pc(c.eventMetadata || {});
            this.la = !1
        },
        Gp = function(a, b, c) {
            var d = a.s.getWithConfig(b);
            void 0 !== d ? a.F[b] = d : void 0 !== c && (a.F[b] = c)
        },
        Hp = function(a, b, c) {
            var d = Yh(a.Da);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Ip(a) {
        return {
            getDestinationId: function() {
                return a.Da
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.F[b]
            },
            setHitData: function(b, c) {
                return void(a.F[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.F[b] && (a.F[b] = c)
            },
            copyToHitData: function(b, c) {
                Gp(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.la = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    };
    var xq = function() {
            var a = !0;
            vo(7) && vo(9) && vo(10) || (a = !1);
            return a
        },
        yq = function() {
            var a = !0;
            vo(3) && vo(4) || (a = !1);
            return a
        };
    var rr = null,
        sr = !1;

    function tr(a) {
        return sr && !a ? rr = rr || new ur : T.gcq = T.gcq || new ur
    }
    var vr = function(a, b, c) {
            tr().register(a, b, c)
        },
        wr = function(a, b, c, d) {
            tr().push("event", [b, a], c, d)
        },
        xr = function(a, b, c, d) {
            tr().insert("event", [b, a], c, d)
        },
        yr = function(a, b, c) {
            tr().push("config", [a], b, c)
        },
        zr = function(a, b, c, d) {
            tr().push("get", [a, b], c, d)
        },
        Ar = function(a) {
            return tr().getRemoteConfig(a)
        },
        Br = function() {
            var a = Q.ca;
            return tr().getGlobalConfigValue && tr().getGlobalConfigValue(a)
        },
        Cr = {},
        Dr = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.B = null;
            this.claimed = this.g = !1
        },
        Er = function(a, b, c, d, e) {
            this.type = a;
            this.o = b;
            this.T = c || "";
            this.g = d;
            this.messageContext = e
        },
        ur = function() {
            this.o = {};
            this.B = {};
            this.g = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        Fr = function(a, b) {
            var c = Lo(b);
            return a.o[c.containerId] = a.o[c.containerId] || new Dr
        },
        Gr = function(a, b, c, d) {
            if (b) {
                var e = Lo(b);
                if (e && 1 === Fr(a, b).status) {
                    Fr(a, b).status = 2;
                    var f = {};
                    jm && (f.timeoutId = z.setTimeout(function() {
                        S(38);
                        sl()
                    }, 3E3));
                    a.push("require", [f], e.containerId, {});
                    Cr[e.containerId] = Ta();
                    if (wn()) {} else 2 === d ? Cn(e.containerId, c) : Bn(e.containerId, c, !0)
                }
            }
        },
        Hr = function(a, b, c, d) {
            if (d.T) {
                var e = Fr(a, d.T),
                    f = e.B;
                if (f) {
                    var g = pc(c),
                        h = pc(e.targetConfig[d.T]),
                        k = pc(e.containerConfig),
                        n = pc(e.remoteConfig),
                        p = pc(a.B),
                        q = {};
                    try {
                        q = pc(Dh)
                    } catch (x) {
                        S(72)
                    }
                    var r = Gh("gtm.uniqueEventId"),
                        t = Lo(d.T).prefix,
                        u = function(x) {
                            wm(r, t, x);
                            var y = g[Q.mc];
                            y && K(y)
                        },
                        v = On(Nn(Pn(Mn(Ln(Jn(In(Kn(Hn(Gn(Fn(g), h), k), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("2")
                            }
                        }), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("3")
                            }
                        }), function(x, y) {
                            a.D[x] = y
                        }), function(x) {
                            return a.D[x]
                        });
                    void 0 === v.eventId && (v.eventId = d.messageContext.eventId);
                    void 0 === v.priorityId && (v.priorityId = d.messageContext.priorityId);
                    try {
                        wm(r, t, "1"), Fm(d.type, d.T, v);
                        f(d.T, b, d.o, v)
                    } catch (x) {
                        wm(r, t, "4");
                    }
                }
            }
        };
    l = ur.prototype;
    l.register = function(a, b, c) {
        var d = Fr(this, a);
        if (3 !== d.status) {
            d.B = b;
            d.status = 3;
            c && (pc(d.remoteConfig, c), d.remoteConfig = c);
            var e = Lo(a),
                f = Cr[e.containerId];
            if (void 0 !== f) {
                var g = T[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                T[e.containerId]._spx && (h = h.toLowerCase());
                var k = Gh("gtm.uniqueEventId"),
                    n = h,
                    p = Ta() - g;
                if (jm && !xl[k]) {
                    k !== tl && (ol(), tl = k);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Yl = Yl ? Yl + "," + q : "&cl=" + q
                }
                delete Cr[e.containerId]
            }
            this.flush()
        }
    };
    l.notifyContainerLoaded = function(a, b) {
        var c = this,
            d = function(f) {
                if (Lo(f)) {
                    var g = Fr(c, f);
                    g.status = 3;
                    g.claimed = !0
                }
            };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush()
    };
    l.push = function(a, b, c, d) {
        null == d ? d = {} : "boolean" === typeof d && (d = {
            deferrable: d
        });
        if (void 0 !== c) {
            if (!Lo(c)) return;
            Gr(this, c, b[0][Q.ca] || this.B[Q.ca], "event" === a ? 2 : 1);
            Fr(this, c).g && (d.deferrable = !1)
        }
        this.g.push(new Er(a, Math.floor(Ta() / 1E3), c, b, d));
        d.deferrable || this.flush()
    };
    l.insert = function(a, b, c, d) {
        null == d && (d = {});
        var e = Math.floor(Ta() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Er(a, e, c, b, d)) : this.g.push(new Er(a, e, c, b, d))
    };
    l.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.messageContext.deferrable) !f.T || Fr(this, f.T).g ? (f.messageContext.deferrable = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Fr(this, f.T);
                        if (3 !== g.status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        jm && z.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Ma(f.g[0], function(r, t) {
                            pc(ab(r, t), b.B)
                        });
                        break;
                    case "config":
                        g = Fr(this, f.T);
                        if (g.claimed) break;
                        e.ab = {};
                        Ma(f.g[0], function(r) {
                            return function(t,
                                u) {
                                pc(ab(t, u), r.ab)
                            }
                        }(e));
                        var h = !!e.ab[Q.Zd];
                        delete e.ab[Q.Zd];
                        var k = Lo(f.T),
                            n = k.containerId === k.id;
                        h || (n ? g.containerConfig = {} : g.targetConfig[f.T] = {});
                        g.g && h || Hr(this, Q.Ia, e.ab, f);
                        g.g = !0;
                        delete e.ab[Q.Kb];
                        n ? pc(e.ab, g.containerConfig) : (pc(e.ab, g.targetConfig[f.T]), S(70));
                        d = !0;
                        break;
                    case "event":
                        g = Fr(this, f.T);
                        if (g.claimed) break;
                        e.Hd = {};
                        Ma(f.g[0], function(r) {
                            return function(t, u) {
                                pc(ab(t, u), r.Hd)
                            }
                        }(e));
                        Hr(this, f.g[1], e.Hd, f);
                        break;
                    case "get":
                        if (g = Fr(this, f.T), !g.claimed) {
                            var p = {},
                                q = (p[Q.Ra] = f.g[0], p[Q.fb] =
                                    f.g[1], p);
                            Hr(this, Q.Pa, q, f)
                        }
                }
                this.g.shift();
                Ir(this, f)
            }
            e = {
                ab: e.ab,
                Hd: e.Hd
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var Ir = function(a, b) {
        if ("require" !== b.type)
            if (b.T)
                for (var c = a.getCommandListeners(b.T)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    ur.prototype.getRemoteConfig = function(a) {
        return Fr(this, a).remoteConfig
    };
    ur.prototype.getCommandListeners = function(a) {
        return Fr(this, a).o
    };
    ur.prototype.getGlobalConfigValue = function(a) {
        return this.B[a]
    };
    var Jr = [Q.Db, Q.sc, Q.ae],
        Lr = function(a, b) {
            return 1 === arguments.length ? Kr("set", a) : Kr("set", a, b)
        },
        Mr = function(a, b) {
            return 1 === arguments.length ? Kr("config", a) : Kr("config", a, b)
        },
        Nr = function(a, b, c) {
            c = c || {};
            c[Q.Jb] = a;
            if ("G" === a.split("-")[0])
                for (var d in c) "_" === d[0] && -1 === Jr.indexOf(d) && delete c[d];
            return Kr("event", b, c)
        };

    function Kr(a) {
        return arguments
    }
    var Pr = function(a) {
        if (Or(a)) return a;
        this.g = a
    };
    Pr.prototype.getUntrustedMessageValue = function() {
        return this.g
    };
    var Or = function(a) {
            return !a || "object" !== mc(a) || oc(a) ? !1 : "getUntrustedMessageValue" in a
        },
        Qr = function(a) {
            if (Or(a)) return a.getUntrustedMessageValue()
        };
    Pr.prototype.getUntrustedMessageValue = Pr.prototype.getUntrustedMessageValue;
    var Rr = function() {
        this.g = [];
        this.o = []
    };
    Rr.prototype.push = function(a, b, c) {
        var d = this.g.length + 1;
        Or(a) && (a = Qr(a) || a);
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        a = new Pr(a);
        var e = {
            debugContext: c,
            message: a,
            notBeforeEventId: b,
            priorityId: d
        };
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++) try {
            this.o[f](e)
        } catch (g) {}
    };
    Rr.prototype.enqueue = function(a, b, c) {
        var d = this.g.length + 1;
        Or(a) && (a = Qr(a) || a);
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        a = new Pr(a);
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.fromMessageBus = !0;
        c.priorityId = d;
        var e = {
            debugContext: c.originatingEntity || {},
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++) try {
            this.o[f](e)
        } catch (g) {}
    };
    Rr.prototype.listen = function(a) {
        this.o.push(a)
    };
    Rr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    var Tr = function(a, b, c) {
            Sr().enqueue(a, b, c)
        },
        Vr = function() {
            var a = Ur;
            Sr().listen(a)
        },
        Wr = function(a, b) {
            return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
        };

    function Sr() {
        var a = T.mb;
        a || (a = new Rr, T.mb = a);
        return a
    }
    var Xr = !1;
    var Yr = !1;
    var Zr = function(a, b) {
        T.addDestinationToContainer ? T.addDestinationToContainer(a, b) : (T.pendingDestinationIds = T.pendingDestinationIds || [], T.pendingDestinationIds.push([a, b]))
    };
    var qs = function(a) {
            var b = T.zones;
            return b ? b.getIsAllowedFn(al(), a) : function() {
                return !0
            }
        },
        rs = function(a) {
            var b = T.zones;
            return b ? b.isActive(al(), a) : !0
        };
    var us = function(a, b) {
        for (var c = [], d = 0; d < ke.length; d++)
            if (a[d]) {
                var e = ke[d];
                var f = Um(b.xb);
                try {
                    var g = mn(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            k = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = me[p];
                        k.call(h, {
                            Vh: n,
                            Mh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else ss(d, b), f()
                } catch (t) {
                    f()
                }
            }
        c.sort(ts);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 <
            c.length
    };

    function ts(a, b) {
        var c, d = b.Mh,
            e = a.Mh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Vh,
                h = b.Vh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function ss(a, b) {
        if (!jm) return;
        var c = function(d) {
            var e = b.Lf(ke[d]) ? "3" : "4",
                f = se(ke[d][Ld.ah], b, []);
            f && f.length && c(f[0].index);
            pm(b.id, ke[d], e);
            var g = se(ke[d][Ld.eh], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var xs = !1,
        vs;
    var Ds = function(a) {
        var b = Ta(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (xs) return !1;
            xs = !0;
        }
        var h, k = !1;
        if (rs(c)) h = qs(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            k = !0;
            h = qs(Number.MAX_SAFE_INTEGER)
        }
        om(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = {
                id: c,
                priorityId: d,
                name: e,
                Lf: Zk(h),
                Dk: [],
                Hh: function() {
                    S(6)
                },
                nh: zs(),
                oh: As(c),
                xb: new Qm(q, p)
            },
            t = De(r);
        k && (t = Bs(t));
        var u = us(t, r),
            v = !1;
        Vm(r.xb);
        "gtm.js" !== e && "gtm.sync" !== e || fn(Ie.J);
        return Cs(t, u) || v
    };

    function As(a) {
        return function(b) {
            jm && (tc(b) || xm(a, "input", b))
        }
    }

    function zs() {
        var a = {};
        a.event = Uh("event", 1);
        a.ecommerce = Uh("ecommerce", 1);
        a.gtm = Uh("gtm");
        a.eventModel = Uh("eventModel");
        return a
    }

    function Bs(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && (qh[String(ke[c][Ld.Lb])] && (b[c] = !0), void 0 !== ke[c][Ld.Zi] && (b[c] = !0));
        return b
    }

    function Cs(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ke[c] && !rh[String(ke[c][Ld.Lb])]) return !0;
        return !1
    }
    var Me;
    var Es = !1;
    var Fs = "HA GF G UA AW DC".split(" "),
        Gs = !1,
        Hs = !1,
        Is = 0;

    function Js(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ah()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }

    function Ks(a) {
        delete a[Q.ae];
        delete a[Q.Db]
    }

    function Ls() {
        return Gs
    }
    var Ms = {
            config: function(a, b) {
                Js(a, b);
            },
            consent: function(a,
                b) {
                if (3 === a.length) {
                    S(39);
                    var c = Js(a, b),
                        d = a[1];
                    "default" === d ? Jg(a[2]) : "update" === d && Lg(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && m(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!oc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = pc(e), e[Q.mc] && (g.eventCallback = e[Q.mc]), e[Q.Qd] && (g.eventTimeout = e[Q.Qd]));
                    d && (d[Q.ae] && 0 === Ie.J.indexOf("GTM") && (b.noGtmEvent = !0), d[Q.Db] && (b.deferrable = !0), Ks(g.eventModel));
                    var h = Js(a, b),
                        k = h.priorityId;
                    g["gtm.uniqueEventId"] =
                        h.eventId;
                    k && (g["gtm.priorityId"] = k);
                    return b.noGtmEvent ? void 0 : g
                }
            },
            get: function(a, b) {},
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Hs = !0;
                    Ls();
                    var c = Js(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && m(a[1]) && Ea(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = Me.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c];
                    if (S(74), "all" === a[1]) {
                        S(75);
                        var e = !1;
                        try {
                            e = a[2](Ie.J, "unknown", {})
                        } catch (f) {}
                        e || S(76)
                    }
                } else {
                    S(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && oc(a[1]) ? c = pc(a[1]) : 3 == a.length && m(a[1]) && (c = {}, oc(a[2]) || Ga(a[2]) ? c[a[1]] = pc(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Js(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    c._clear = !0;
                    return c
                }
            }
        },
        Ns = {
            policy: !0
        };
    var Os = function(a) {
            var b = z[oh.fa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Ps = function(a) {
            var b = z[oh.fa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Qs = !1,
        Rs = [];

    function Ss() {
        if (!Qs) {
            Qs = !0;
            for (var a = 0; a < Rs.length; a++) K(Rs[a])
        }
    }
    var Ts = function(a) {
        Qs ? K(a) : Rs.push(a)
    };
    var it = 0,
        jt = {},
        kt = [],
        lt = [],
        mt = !1,
        nt = !1,
        ot = function(a) {
            return z[oh.fa].push(a)
        },
        pt = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return ot(a)
        },
        qt = function(a, b) {
            var c = T[oh.fa],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function rt(a) {
        var b = a._clear;
        Ma(a, function(d, e) {
            "_clear" !== d && (b && Jh(d), Jh(d, e))
        });
        wh || (wh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof c && (c = Ah(), a["gtm.uniqueEventId"] = c, Jh("gtm.uniqueEventId", c));
        return Ds(a)
    }

    function st(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Na(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }
    var tt = [];

    function ut() {
        if (tt.length) return tt.shift();
        var a, b;
        if (lt.length) {
            var c = lt.shift();
            a = c.message;
            c.messageContext ? b = c.messageContext : b = {
                eventId: c.notBeforeEventId,
                priorityId: c.priorityId,
                originatingEntity: c.debugContext,
                fromContainerExecution: !0,
                fromMessageBus: !0
            }
        } else if (kt.length) a = kt.shift(), b = {};
        else return;
        Or(a) && (a = Qr(a), b.fromContainerExecution = !0);
        if (!mt && st(a)) {
            var d = {},
                e = (d.event = "gtm.init_consent", d),
                f = {},
                g = (f.event = "gtm.init", f),
                h = a["gtm.uniqueEventId"];
            Dn[8] && "number" !== typeof h && (h = a["gtm.uniqueEventId"] =
                Ah());
            "number" === typeof h && (e["gtm.uniqueEventId"] = h - 2, g["gtm.uniqueEventId"] = h - 1);
            tt.unshift({
                message: g,
                messageContext: {}
            }, {
                message: a,
                messageContext: b
            });
            a = e;
            b = {};
            mt = !0;
        }
        return {
            message: a,
            messageContext: b
        }
    }

    function vt() {
        for (var a = !1, b; !nt && (b = ut());) {
            nt = !0;
            delete Dh.eventModel;
            Fh();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null != d) {
                e.fromContainerExecution && Th();
                try {
                    if (Ea(d)) try {
                        d.call(Hh)
                    } catch (r) {} else if (Ga(d)) {
                        var f = d;
                        if (m(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                k = f.slice(1),
                                n = Gh(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, k)
                            } catch (r) {}
                        }
                    } else {
                        if (Na(d)) {
                            a: {
                                if (d.length && m(d[0])) {
                                    var p =
                                        Ms[d[0]];
                                    if (p && (!e.fromContainerExecution || !Ns[d[0]])) {
                                        d = p(d, e);
                                        break a
                                    }
                                }
                                d = void 0
                            }
                            if (!d) {
                                nt = !1;
                                continue
                            }
                        }
                        a = rt(d) || a;
                        if (st(d)) {
                            var q = d["gtm.uniqueEventId"];
                            void 0 !== q && (wt(q), it = q)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Fh(!0)
                }
            }
            nt = !1
        }
        return !a
    }

    function Yt() {
        var b = vt();
        try {
            Os(Ie.J)
        } catch (c) {}
        return b
    }

    function Ur(a) {
        var b = a.notBeforeEventId;
        it < b ? (jt[String(b)] = jt[String(b)] || [], jt[String(b)].push(a)) : (lt.push(a), lt.sort(Wr), K(function() {
            nt || vt()
        }))
    }

    function wt(a) {
        for (var b = jt[String(a)] || [], c = 0; c < b.length; c++) lt.push(b[c]);
        b.length && lt.sort(Wr);
        delete jt[String(a)]
    }
    var $t = function() {
            var a = Ib(oh.fa, []),
                b = Ib("google_tag_manager", {});
            jt = Sr().get();
            wt(0);
            Vr();
            b = b[oh.fa] = b[oh.fa] || {};
            Mm(function() {
                if (!b.gtmDom) {
                    b.gtmDom = !0;
                    var e = {};
                    a.push((e.event = "gtm.dom", e))
                }
            });
            Ts(function() {
                if (!b.gtmLoad) {
                    b.gtmLoad = !0;
                    var e = {};
                    a.push((e.event = "gtm.load", e))
                }
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < T.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new Pr(arguments[f])
                } else e = [].slice.call(arguments, 0);
                kt.push.apply(kt,
                    e);
                var g = c.apply(a, e);
                if (300 < this.length)
                    for (S(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return vt() && h
            };
            var d = a.slice(0);
            kt.push.apply(kt, d);
            if (Zt()) {
                K(Yt)
            }
        },
        Zt = function() {
            var a = !0;
            return a
        };

    function au(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3E5 && b > c - 9E5
    };
    var bu = {};
    bu.$d = new String("undefined");
    var cu = function(a) {
        this.g = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === bu.$d ? b : a[d]);
            return c.join("")
        }
    };
    cu.prototype.toString = function() {
        return this.g("undefined")
    };
    cu.prototype.valueOf = cu.prototype.toString;
    bu.aj = cu;
    bu.tf = {};
    bu.pj = function(a) {
        return new cu(a)
    };
    var du = {};
    bu.nk = function(a, b) {
        var c = Ah();
        du[c] = [a, b];
        return c
    };
    bu.th = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = du[c];
            if (d && "function" === typeof d[b]) d[b]();
            du[c] = void 0
        }
    };
    bu.Lj = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    bu.hk = function(a) {
        if (a === bu.$d) return a;
        var b = Ah();
        bu.tf[b] = a;
        return 'google_tag_manager["' + Ie.J + '"].macro(' + b + ")"
    };
    bu.Xj = function(a, b, c) {
        a instanceof bu.aj && (a = a.g(bu.nk(b, c)), b = Da);
        return {
            Ij: a,
            onSuccess: b
        }
    };
    var eu = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": $b(a, "className"),
                "gtm.elementId": a["for"] || Tb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || $b(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || $b(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        fu = function(a) {
            T.hasOwnProperty("autoEventsSettings") || (T.autoEventsSettings = {});
            var b = T.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        gu = function(a, b, c) {
            fu(a)[b] = c
        },
        hu = function(a, b, c, d) {
            var e = fu(a),
                f = Ua(e, b, d);
            e[b] = c(f)
        },
        iu = function(a, b, c) {
            var d = fu(a);
            return Ua(d, b, c)
        },
        ju = function(a) {
            return "string" === typeof a ? a : String(Ah())
        };
    var pu = !!z.MutationObserver,
        qu = void 0,
        ru = function(a) {
            if (!qu) {
                var b = function() {
                    var c = I.body;
                    if (c)
                        if (pu)(new MutationObserver(function() {
                            for (var e = 0; e < qu.length; e++) K(qu[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Rb(c, "DOMNodeInserted", function() {
                                d || (d = !0, K(function() {
                                    d = !1;
                                    for (var e = 0; e < qu.length; e++) K(qu[e])
                                }))
                            })
                        }
                };
                qu = [];
                I.body ? b() : K(b)
            }
            qu.push(a)
        };
    var Du = z.clearTimeout,
        Eu = z.setTimeout,
        U = function(a, b, c, d) {
            if (wn()) {
                b && K(b)
            } else return Nb(a, b, c, d)
        },
        Fu = function() {
            return new Date
        },
        Gu = function() {
            return z.location.href
        },
        Hu = function(a) {
            return li(ni(a), "fragment")
        },
        Iu = function(a) {
            return mi(ni(a))
        },
        Ju = function(a, b) {
            return Gh(a, b || 2)
        },
        Ku = function(a, b, c) {
            return b ? pt(a, b, c) : ot(a)
        },
        Lu = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Mu = function(a, b, c) {
            return Ri(a, b, void 0 === c ? !0 : !!c)
        },
        Nu = function(a, b, c) {
            return 0 === $i(a, b, c)
        },
        Ou = function(a, b) {
            if (wn()) {
                b && K(b)
            } else Pb(a, b)
        },
        Pu = function(a) {
            return !!iu(a, "init", !1)
        },
        Qu = function(a) {
            gu(a, "init", !0)
        },
        Ru = function(a, b, c) {
            jm && (tc(a) || xm(c, b, a))
        };

    var Su = bu.Xj;
    var ov = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function pv(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var qv = new Ka;

    function rv(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = qv.get(e);
            f || (f = new RegExp(b, d), qv.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function sv(a, b) {
        function c(g) {
            var h = ni(g),
                k = li(h, "protocol"),
                n = li(h, "host", !0),
                p = li(h, "port"),
                q = li(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
            return [k, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function tv(a) {
        return uv(a) ? 1 : 0
    }

    function uv(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = pc(a, {});
                pc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (tv(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < ov.length; g++) {
                            var h = ov[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (k) {}
                    f = !1
                }
                return f;
            case "_ew":
                return pv(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return rv(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return sv(b, c)
        }
        return !1
    };

    function vv(a, b) {
        var c = this;
    }
    vv.N = "addConsentListener";
    var wv;
    var xv = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (wv) try {
                a[b]()
            } catch (c) {
                S(77)
            } else a[b]()
    };

    function yv(a, b, c) {
        var d = this,
            e;
        return e
    }
    yv.M = "internal.addDataLayerEventListener";

    function zv(a, b, c) {}
    zv.N = "addDocumentEventListener";

    function Av(a, b, c, d) {}
    Av.N = "addElementEventListener";

    function Bv(a) {}
    Bv.N = "addEventCallback";

    function Fv(a) {}
    Fv.M = "internal.addFormAbandonmentListener";
    var Gv = {},
        Hv = [],
        Iv = {},
        Jv = 0,
        Kv = 0;

    function Rv(a, b) {}
    Rv.M = "internal.addFormInteractionListener";

    function Yv(a, b) {}
    Yv.M = "internal.addFormSubmitListener";

    function cw(a) {}
    cw.M = "internal.addGaSendListener";
    var dw = {},
        ew = [];
    var lw = function(a, b) {};
    lw.M = "internal.addHistoryChangeListener";

    function mw(a, b, c) {}
    mw.N = "addWindowEventListener";

    function nw(a, b) {
        return !0
    }
    nw.N = "aliasInWindow";

    function ow(a, b, c) {}
    ow.M = "internal.appendRemoteConfigParameter";

    function pw() {
        var a = 2;
        return a
    };

    function qw(a, b) {
        var c;
        return c
    }
    qw.N = "callInWindow";

    function rw(a) {}
    rw.N = "callLater";

    function sw(a) {}
    sw.M = "callOnDomReady";

    function tw(a) {
        M(H(this), ["listener:!Fn"], arguments);
        P(this, "process_dom_events", "window", "load");
        Ts(rc(a))
    }
    tw.M = "callOnWindowLoad";

    function uw(a) {
        var b;
        return b
    }
    uw.M = "internal.computeGtmParameter";

    function vw(a, b) {
        var c;
        var d = qc(c, this.g, pw());
        void 0 === d && void 0 !== c && S(45);
        return d
    }
    vw.N = "copyFromDataLayer";

    function ww(a) {
        var b;
        return b
    }
    ww.N = "copyFromWindow";

    function xw(a, b) {
        var c;
        return c
    }
    xw.M = "internal.copyPreHit";

    function yw(a, b) {
        var c = null,
            d = pw();
        M(H(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        P(this, "access_globals", "readwrite", a);
        P(this, "access_globals", "readwrite", b);
        var e = [z, I],
            f = a.split("."),
            g = $a(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var k = g[h];
        if (k && !Ea(k)) return null;
        if (k) return qc(k, this.g, d);
        var n;
        k = function() {
            if (!Ea(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = k;
        var p = b.split("."),
            q = $a(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0))
        };
        return qc(c, this.g, d)
    }
    yw.N = "createArgumentsQueue";

    function zw(a) {
        var b;
        return qc(b, this.g,
            pw())
    }
    zw.N = "createQueue";
    var Aw = {},
        Bw = [],
        Cw = {},
        Dw = 0,
        Ew = 0;

    function Kw(a, b) {
        var c = this;
        return b
    }
    Kw.M = "internal.enableAutoEventOnFormInteraction";

    function Pw(a, b) {
        var c = this;
        return b
    }
    Pw.M = "internal.enableAutoEventOnFormSubmit";

    function Uw() {
        var a = this;
    }
    Uw.M = "internal.enableAutoEventOnGaSend";
    var Vw = {},
        Ww = [];

    function cx(a, b) {
        var c = this;
        return b
    }
    cx.M = "internal.enableAutoEventOnHistoryChange";

    function gx(a, b) {
        var c = this;
        return b
    }
    gx.M = "internal.enableAutoEventOnLinkClick";
    var hx, ix;

    function rx(a, b) {
        var c = this;
        return b
    }
    rx.M = "internal.enableAutoEventOnScroll";
    var Eb = da(["data-gtm-yt-inspected-"]),
        sx = ["www.youtube.com", "www.youtube-nocookie.com"],
        tx, ux = !1;

    function Ex(a, b) {
        var c = this;
        return b
    }
    Ex.M = "internal.enableAutoEventOnYouTubeActivity";

    function Fx(a) {
        return !1
    }
    Fx.M = "internal.evaluateFilteringRules";
    var Gx;

    function Hx(a) {
        var b = !1;
        return b
    }
    Hx.M = "internal.evaluateMatchingRules";

    function Nx(a, b) {
        var c = !1;
        return c
    }
    Nx.M = "internal.evaluatePredicates";
    var Ox = function(a) {
        var b;
        return b
    };

    function Px(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    Px.N = "getCookieValues";

    function Qx() {
        return gg.sh
    }
    Qx.M = "internal.getCountryCode";

    function Rx() {
        var a = [];
        return qc(a)
    }
    Rx.M = "internal.getDestinationIds";

    function Sx(a) {
        var b = null;
        return b
    }
    Sx.N = "getElementById";

    function Tx(a, b) {
        var c;
        return c
    }
    Tx.M = "internal.getProductSettingsParameter";

    function Ux(a, b) {
        var c;
        return c
    }
    Ux.N = "getQueryParameters";

    function Vx(a, b) {
        var c;
        return c
    }
    Vx.N = "getReferrerQueryParameters";

    function Wx(a) {
        var b = "";
        return b
    }
    Wx.N = "getReferrerUrl";

    function Xx() {
        return gg.Ph
    }
    Xx.M = "internal.getRegionCode";

    function Yx(a, b) {
        var c;
        return c
    }
    Yx.M = "internal.getRemoteConfigParameter";

    function Zx(a) {
        var b = "";
        return b
    }
    Zx.N = "getUrl";

    function $x() {
        P(this, "get_user_agent");
        return z.navigator.userAgent
    }
    $x.N = "getUserAgent";

    function ay(a) {
        if (!a) return {};
        var b = a.vj,
            c = {};
        c.originatingEntity = Om(b.type, b.index, b.name);
        return c
    };

    function cy(a, b) {}
    cy.N = "gtagSet";

    function dy(a, b) {}
    dy.N = "injectHiddenIframe";
    var ey = {};
    var fy = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Nb(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) K(g[h]);
            g.push = function(k) {
                K(k);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) K(g[h]);
            e[f] = null
        }, b)) : Nb(a, c, d, b)
    };

    function gy(a, b, c, d) {
        if (!wn()) {
            M(H(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            P(this, "inject_script", a);
            var e = this.g;
            fy(a, void 0, function() {
                b && b.o(e)
            }, function() {
                c && c.o(e)
            }, ey, d)
        }
    }
    var hy = Object.freeze({
            dl: 1,
            id: 1
        }),
        iy = {};

    function jy(a, b, c, d) {}
    gy.N = "injectScript";
    jy.M = "internal.injectScript";

    function ky(a) {
        var b = !0;
        return b
    }
    ky.N = "isConsentGranted";
    var ly = function() {
        var a = Of(function(b) {
            this.g.g.log("error", b)
        });
        a.N = "JSON";
        return a
    };
    var my = function() {
            return !1
        },
        ny = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var oy = ["textContent", "value", "tagName", "children", "childElementCount"];

    function py(a) {
        var b;
        return b
    }
    py.M = "internal.locateUserData";

    function qy() {}
    qy.N = "logToConsole";

    function ry(a, b) {
        var c;
        return c
    }
    ry.M = "internal.newInWindow";

    function sy(a) {
        var b = void 0;
        return b
    }
    sy.N = "parseUrl";

    function ty(a) {}
    ty.M = "internal.processAsNewEvent";

    function uy(a, b) {
        var c = !1;
        return c
    }
    uy.N = "queryPermission";

    function vy() {
        var a = "";
        return a
    }
    vy.N = "readCharacterSet";

    function wy() {
        var a = "";
        return a
    }
    wy.N = "readTitle";

    function xy(a, b) {
        var c = this;
    }
    xy.M = "internal.registerCcdCallback";
    var yy = Object.freeze(["config", "event", "get", "set"]);

    function zy(a, b, c) {}
    zy.M = "internal.registerGtagCommandListener";

    function Ay(a, b) {
        var c = !1;
        return c
    }
    Ay.M = "internal.removeDataLayerEventListener";

    function By() {}
    By.N = "resetDataLayer";
    var Cy = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    var Dy = !1;
    Dy = !0;

    function Ey(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    }
    Ey.M = "internal.sendGtagEvent";

    function Fy(a, b, c) {}
    Fy.N = "sendPixel";

    function Gy(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    Gy.N = "setCookie";
    var Hy = !1;
    Hy = !0;

    function Iy(a) {
        M(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Mb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== Q.Ge && P(this, "access_consent", e, "write")
        }
        var f = this.g.g,
            g = f.eventId,
            h = ay(f);
        if (Hy) {
            var k = Kr("consent", "default", rc(a));
            Tr(k, g, h)
        } else Jg(rc(a))
    }
    Iy.N = "setDefaultConsentState";

    function Jy(a, b, c) {
        M(H(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        P(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = $a(d, [z, I]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = rc(b, this.g, pw()), !0;
        return !1
    }
    Jy.N = "setInWindow";

    function Ky(a, b, c) {}
    Ky.M = "internal.setProductSettingsParameter";

    function Ly(a, b, c) {}
    Ly.M = "internal.setRemoteConfigParameter";
    var My = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function Ny(a, b, c, d) {
        var e = this;
    }
    Ny.N = "sha256";

    function Oy(a, b, c) {}
    Oy.M = "internal.sortRemoteConfigParameters";
    var Py = {},
        Qy = {};
    Py.N = "templateStorage";
    Py.getItem = function(a) {
        var b = null;
        return b
    };
    Py.setItem = function(a, b) {};
    Py.removeItem = function(a) {};
    Py.clear = function() {};
    var Ry = function(a) {
        var b;
        return b
    };
    var Sy = !1;
    Sy = !0;

    function Ty(a) {
        M(H(this), ["consentSettings:!DustMap"], arguments);
        var b = rc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && P(this, "access_consent", c, "write");
        var d = this.g.g,
            e = d.eventId,
            f = ay(d);
        Sy ? Tr(Kr("consent", "update", b), e, f) : Lg(b, {
            eventId: e
        })
    }
    Ty.N = "updateConsentState";
    var Uy = function() {
        var a = new Yf,
            b = function(d) {
                return $f(a, d.M, d)
            },
            c = function(d) {
                return a.add(d.N, d)
            };
        c(vv);
        c(Bv);
        c(nw);
        c(qw);
        c(rw);
        c(vw);
        c(ww);
        c(yw);
        c(ly());
        c(zw);
        c(Px);
        c(Ux);
        c(Vx);
        c(Wx);
        c(Zx);
        c(dy);
        c(gy);
        c(ky);
        c(qy);
        c(sy);
        c(uy);
        c(vy);
        c(wy);
        c(Fy);
        c(Gy);
        c(Iy);
        c(Jy);
        c(Ny);
        c(Py);
        c(Ty);
        a.add("Math", yf());
        a.add("Object", Wf);
        a.add("TestHelper", ag());
        a.add("assertApi", uf);
        a.add("assertThat", vf);
        a.add("decodeUri", zf);
        a.add("decodeUriComponent", Af);
        a.add("encodeUri", Bf);
        a.add("encodeUriComponent", Cf);
        a.add("fail",
            Df);
        a.add("generateRandom", If);
        a.add("getContainerVersion", Jf);
        a.add("getTimestamp", Mf);
        a.add("getTimestampMillis", Mf);
        a.add("getType", Nf);
        a.add("makeInteger", Pf);
        a.add("makeNumber", Qf);
        a.add("makeString", Rf);
        a.add("makeTableMap", Sf);
        a.add("mock", Vf);
        a.add("fromBase64", Ox, !("atob" in z));
        a.add("localStorage", ny, !my());
        a.add("toBase64", Ry, !("btoa" in z));
        b(Rv);
        b(Yv);
        b(cw);
        b(lw);
        b(tw);
        b(Fx);
        b(Hx);
        b(Rx);
        b(jy);
        b(py);
        b(zy);
        b(Ey);
        $f(a, "internal.getFlags", Lf);
        c(cy);
        b(Pw);
        b(Kw);
        b(cx);
        b(yv);
        b(Ex);
        b(Ay);
        b(Uw);
        b(gx);
        b(rx);
        b(Qx);
        b(Xx);
        return function(d) {
            var e;
            if (a.g.hasOwnProperty(d)) e = a.get(d, this);
            else {
                var f;
                if (f = a.o.hasOwnProperty(d)) {
                    var g = !1,
                        h = this.g.g;
                    if (h) {
                        var k = h.pd();
                        if (k) {
                            0 !== k.indexOf("__cvt_") && (g = !0);
                        }
                    }
                    f = g
                }
                if (f) {
                    var n = a.o.hasOwnProperty(d) ? a.o[d] : void 0;
                    e = n
                } else throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var Vy = function() {
            return !1
        },
        Wy = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var Xy;

    function Yy() {
        var a = Xy;
        return function(b, c, d) {
            var e = d && d.event;
            Zy(c);
            var f = new ib;
            Ma(c, function(q, r) {
                var t = qc(r);
                void 0 === t && void 0 !== r && S(44);
                f.set(q, t)
            });
            a.g.g.I = Ae();
            var g = {
                gj: Ne(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                je: void 0 !== e ? function(q) {
                    return e.xb.je(q)
                } : void 0,
                pd: function() {
                    return b
                },
                log: function() {},
                vj: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (Vy()) {
                var h = Wy(),
                    k = void 0,
                    n = void 0;
                g.Wa = {
                    dg: [],
                    gd: {},
                    Xa: function(q, r, t) {
                        1 === r && (k = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    Rf: Tf()
                };
                g.log = function(q, r) {
                    if (k) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = Kd(a, g, [b, f]);
            a.g.g.I = void 0;
            p instanceof pa && "return" === p.g && (p = p.o);
            return rc(p)
        }
    }

    function Zy(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ea(b) && (a.gtmOnSuccess = function() {
            K(b)
        });
        Ea(c) && (a.gtmOnFailure = function() {
            K(c)
        })
    }

    function $y() {
        Xy.g.g.R = function(a, b, c) {
            T.SANDBOXED_JS_SEMAPHORE = T.SANDBOXED_JS_SEMAPHORE || 0;
            T.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                T.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function az(a) {
        void 0 !== a && Ma(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                zh[e] = zh[e] || [];
                zh[e].push(b)
            }
        })
    };
    var bz = encodeURI,
        Y = encodeURIComponent,
        cz = Qb;
    var dz = function(a, b) {
            if (!a) return !1;
            var c = li(ni(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        ez = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };

    function DA() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var EA = function() {
            var a = DA();
            a.hid = a.hid || Ia();
            return a.hid
        },
        FA = function(a, b) {
            var c = DA();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var lB = function() {
        if (Ea(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var TB = window,
        UB = document,
        VB = function(a) {
            var b = TB._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === TB["ga-disable-" + a]) return !0;
            try {
                var c = TB.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Li("AMP_TOKEN", String(UB.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return UB.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var WB = {};

    function dC(a) {
        delete a.eventModel[Q.Kb];
        kC(a.eventModel)
    }
    var kC = function(a) {
        Ma(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[Q.Ta] || {};
        Ma(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var wC = function(a, b, c) {
            wr(b, c, a, {})
        },
        xC = function(a, b, c) {
            wr(b, c, a, {
                deferrable: !0
            })
        },
        zC = function(a, b) {};

    function yC(a, b) {}
    var Z = {
        h: {}
    };
    Z.h.gaawc = ["google"],
        function() {
            var a = !1;
            (function(b) {
                Z.__gaawc = b;
                Z.__gaawc.m = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10
            })(function(b) {
                var c = String(b.vtp_measurementId);
                if (m(c) && 0 === c.indexOf("G-")) {
                    var d = ez(b.vtp_fieldsToSet, "name", "value") || {};
                    if (d.hasOwnProperty(Q.Ta) || b.vtp_userProperties) {
                        var e = d[Q.Ta] || {};
                        pc(ez(b.vtp_userProperties,
                            "name", "value"), e);
                        d[Q.Ta] = e
                    }
                    b.vtp_enableSendToServerContainer && b.vtp_serverContainerUrl && (d[Q.ca] = b.vtp_serverContainerUrl, d[Q.Xc] = !0);
                    var f = b.vtp_userDataVariable;
                    f && (d[Q.Aa] = f);
                    Cy(d, Q.hf, function(h) {
                        return Pa(h)
                    });
                    Cy(d, Q.jf, function(h) {
                        return Number(h)
                    });
                    d.send_page_view = b.vtp_sendPageView;
                    if (a) {
                        var g = d[Q.ca] || Ju(Q.ca, 2);
                        Bn(c, g, !0);
                        d[Q.sf] = !0;
                        Tr(Mr(c, d), b.vtp_gtmEventId, {
                            noTargetGroup: !0,
                            originatingEntity: Om(1, b.vtp_gtmEntityIndex, b.vtp_gtmEntityName)
                        })
                    } else yr(d, c, {});
                    K(b.vtp_gtmOnSuccess)
                } else K(b.vtp_gtmOnFailure)
            });
        }();

    Z.h.ctv = ["google"],
        function() {
            (function(a) {
                Z.__ctv = a;
                Z.__ctv.m = "ctv";
                Z.__ctv.isVendorTemplate = !0;
                Z.__ctv.priorityOverride = 0
            })(function() {
                return "41"
            })
        }();
    Z.h.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(k("horiz.pix")).length || Object.keys(k("horiz.pct")).length || Object.keys(k("vert.pix")).length || Object.keys(k("vert.pct")).length)
            }

            function b(w) {
                for (var A = [], B = w.split(","), F = 0; F < B.length; F++) {
                    var C = Number(B[F]);
                    if (isNaN(C)) return [];
                    p.test(B[F]) || A.push(C)
                }
                return A
            }

            function c() {
                var w = 0,
                    A = 0;
                return function() {
                    var B = $h(),
                        F = B.height;
                    w = Math.max(v.scrollLeft + B.width, w);
                    A = Math.max(v.scrollTop + F, A);
                    return {
                        Cf: w,
                        Df: A
                    }
                }
            }

            function d() {
                t = X("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                y = c()
            }

            function e(w, A, B, F) {
                var C = k(A),
                    E = {},
                    D;
                for (D in C) {
                    E.ac = D;
                    if (C.hasOwnProperty(E.ac)) {
                        var O = Number(E.ac);
                        w < O || (Ku({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": O,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": F,
                            "gtm.triggers": C[E.ac].join(",")
                        }), hu("sdl", A, function(J) {
                            return function(N) {
                                delete N[J.ac];
                                return N
                            }
                        }(E), {}))
                    }
                    E = {
                        ac: E.ac
                    }
                }
            }

            function f() {
                var w = y(),
                    A = w.Cf,
                    B = w.Df,
                    F = A / v.scrollWidth * 100,
                    C = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.ce, r.Pg);
                e(F, "horiz.pct", q.be, r.Pg);
                e(B, "vert.pix", q.ce, r.hh);
                e(C, "vert.pct", q.be, r.hh);
                gu("sdl", "pending", !1)
            }

            function g() {
                var w = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (w = 50, A = !0);
                var B = 0,
                    F = !1,
                    C = function() {
                        F ? B = Eu(C, w) : (B = 0, f(), Pu("sdl") && !a() && (Sb(t, "scroll", E), Sb(t, "resize", E), gu("sdl", "init", !1)));
                        F = !1
                    },
                    E = function() {
                        A && y();
                        B ? F = !0 : (B = Eu(C, w), gu("sdl", "pending", !0))
                    };
                return E
            }

            function h(w, A, B) {
                if (A) {
                    var F = b(String(w));
                    hu("sdl", B, function(C) {
                        for (var E = 0; E < F.length; E++) {
                            var D =
                                String(F[E]);
                            C.hasOwnProperty(D) || (C[D] = []);
                            C[D].push(A)
                        }
                        return C
                    }, {})
                }
            }

            function k(w) {
                return iu("sdl", w, {})
            }

            function n(w) {
                K(w.vtp_gtmOnSuccess);
                var A = w.vtp_uniqueTriggerId,
                    B = w.vtp_horizontalThresholdsPixels,
                    F = w.vtp_horizontalThresholdsPercent,
                    C = w.vtp_verticalThresholdUnits,
                    E = w.vtp_verticalThresholdsPixels,
                    D = w.vtp_verticalThresholdsPercent;
                switch (w.vtp_horizontalThresholdUnits) {
                    case q.ce:
                        h(B, A, "horiz.pix");
                        break;
                    case q.be:
                        h(F, A, "horiz.pct")
                }
                switch (C) {
                    case q.ce:
                        h(E, A, "vert.pix");
                        break;
                    case q.be:
                        h(D,
                            A, "vert.pct")
                }
                Pu("sdl") ? iu("sdl", "pending") || (x || (d(), x = !0), K(function() {
                    return f()
                })) : (d(), x = !0, v && (Qu("sdl"), gu("sdl", "pending", !0), K(function() {
                    f();
                    if (a()) {
                        var O = g();
                        Rb(t, "scroll", O);
                        Rb(t, "resize", O)
                    } else gu("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    be: "PERCENT",
                    ce: "PIXELS"
                },
                r = {
                    hh: "vertical",
                    Pg: "horizontal"
                },
                t, u, v, x = !1,
                y;
            (function(w) {
                Z.__sdl = w;
                Z.__sdl.m = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0
            })(function(w) {
                w.vtp_triggerStartOption ? n(w) : Ts(function() {
                    n(w)
                })
            })
        }();


    Z.h.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.h.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Ju("gtm.referrer", 1) || I.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? li(ni(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Iu(String(b)) : String(b)
            })
        }();
    Z.h.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = eu(c, "gtm.click");
                    Ku(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.m = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0
            })(function(b) {
                if (!Pu("cl")) {
                    var c = X("document");
                    Rb(c, "click", a, !0);
                    Qu("cl")
                }
                K(b.vtp_gtmOnSuccess)
            })
        }();
    Z.h.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.m = "k";
                Z.__k.isVendorTemplate = !0;
                Z.__k.priorityOverride = 0
            })(function(a) {
                return Mu(a.vtp_name, Ju("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();

    Z.h.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.m = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError,
                        e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var k = c[h],
                        n = k.key;
                    k.read && e.push(n);
                    k.write && f.push(n);
                    k.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!m(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " +
                            q + " on global variable: " + r + ".");
                    },
                    aa: a
                }
            })
        }();
    Z.h.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ju("gtm.url", 1)) || Gu();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Iu(String(c));
                var e = ni(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ga(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = li(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!k || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = li(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.h.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.m = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Ju(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Ru(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.h.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.m = "inject_script";
                Z.__inject_script.isVendorTemplate = !0;
                Z.__inject_script.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!m(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (nf(ni(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    aa: a
                }
            })
        }();

    Z.h.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.m = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return Ie.J
            })
        }();


    Z.h.aev = ["google"],
        function() {
            function a(r, t, u, v, x) {
                x || (x = "element");
                var y = t + "." + u,
                    w;
                if (n.hasOwnProperty(y)) w = n[y];
                else {
                    var A = r[x];
                    if (A && (w = v(A), n[y] = w, p.push(y), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return w
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Gu());
                Ga(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], x = 0; x < t.length; x++) {
                    var y = t[x];
                    if (y.hasOwnProperty("is_regex"))
                        if (y.is_regex) try {
                            y = new RegExp(y.domain)
                        } catch (B) {
                            continue
                        } else y =
                            y.domain;
                    var w = d(r);
                    if (y instanceof RegExp) {
                        if (y.test(w)) return !1
                    } else {
                        var A = y;
                        if (0 != A.length) {
                            if (0 <= w.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !dz(r, v)
            }

            function d(r) {
                k.test(r) || (r = "http://" + r);
                return li(ni(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var x = a(t, u, "FORM." + r, g);
                        return void 0 === x ? v : x;
                    case "INTERACTED_FIELD_ID":
                        return h(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = t.interactedFormFieldPosition;
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var w = t.interactSequenceNumber;
                        return void 0 === w ? v : w;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Tb(r, "value");
                    case "button":
                        return Ub(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) mu(r.elements[u]) && t++;
                    return t
                }
            }

            function h(r, t, u) {
                var v = r.interactedFormField;
                return v && Tb(v, t) || u
            }
            var k = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.m = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    x = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var y = x.element;
                        return y && y.tagName || u;
                    case "TEXT":
                        return a(x, t, v, Ub) || u;
                    case "URL":
                        var w;
                        a: {
                            var A = String(x.elementUrl || u || ""),
                                B = ni(A),
                                F = String(r.vtp_component || "URL");
                            switch (F) {
                                case "URL":
                                    w = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    w = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    w = li(B, F, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return w;
                    case "ATTRIBUTE":
                        var C;
                        if (void 0 === r.vtp_attribute) C = b(x, v, u);
                        else {
                            var E = x.element;
                            C = E && Tb(E, r.vtp_attribute) ||
                                u || ""
                        }
                        return C;
                    case "MD":
                        var D = r.vtp_mdValue,
                            O = a(x, t, "MD", yu);
                        return D && O ? Bu(O, D) || u : O || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), x, t, u);
                    default:
                        var J = b(x, v, u);
                        Ru(J, "aev", r.vtp_gtmEventId);
                        return J
                }
            })
        }();
    Z.h.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.m = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = pc(a),
                    c = b;
                c[Ld.Lb] = null;
                c[Ld.pf] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    Z.h.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? Ju(g) : b[f]
                }
            }(function(b) {
                Z.__awct = b;
                Z.__awct.m = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = ez(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[Q.oa] = b.vtp_conversionValue || 0, f[Q.na] = b.vtp_currencyCode, f[Q.ib] =
                        b.vtp_orderId, f[Q.Ja] = b.vtp_conversionCookiePrefix, f[Q.ra] = c, f[Q.Nd] = d, f[Q.ia] = Ju(Q.ia), f);
                b.vtp_rdp && (g[Q.ad] = !0);
                if (b.vtp_enableCustomParams)
                    for (var h in e) Q.hg.hasOwnProperty(h) || (g[h] = e[h]);
                if (b.vtp_enableProductReporting) {
                    var k = a(b, g, b.vtp_productReportingDataSource);
                    k(Q.Re, "vtp_awMerchantId", "aw_merchant_id");
                    k(Q.Pe, "vtp_awFeedCountry", "aw_feed_country");
                    k(Q.Qe, "vtp_awFeedLanguage", "aw_feed_language");
                    k(Q.Oe, "vtp_discount", "discount");
                    k(Q.da, "vtp_items", "items")
                }
                g[Q.V] = Ju("developer_id");
                b.vtp_enableShippingData && (g[Q.Xd] = b.vtp_deliveryPostalCode, g[Q.Xe] = b.vtp_estimatedDeliveryDate, g[Q.jc] = b.vtp_deliveryCountry, g[Q.Ve] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[Q.ca] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(Q.af, "vtp_awNewCustomer", "new_customer");
                    n(Q.Se, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var t = {};
                    g[Q.We] = (t[b.vtp_conversionLabel] = r, t)
                }
                var u = Pn(Mn(Fn(g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure);
                u.isGtmEvent = !0;
                Ep("AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel,
                    Q.Ga, Date.now(), u)
            })
        }();



    Z.h.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.m = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0
            })(function(a) {
                K(a.vtp_gtmOnFailure)
            })
        }();

    Z.h.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                k = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = I.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, Jb(n, k));
                                d.insertBefore(n, null);
                                p || k()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, k, g)()
                            } else d.insertBefore(h, null), k()
                        } else f()
                    } catch (r) {
                        K(g)
                    }
                }
            }

            function b(d) {
                if (I.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Su(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Ij,
                        h = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(I.body, Vb(g), h, e)()
                } else Eu(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.m =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0
        }();

    Z.h.dbg = ["google"],
        function() {
            (function(a) {
                Z.__dbg = a;
                Z.__dbg.m = "dbg";
                Z.__dbg.isVendorTemplate = !0;
                Z.__dbg.priorityOverride = 0
            })(function() {
                return !1
            })
        }();






    Z.h.evl = ["google"],
        function() {
            function a() {
                var f = Number(Ju("gtm.start")) || 0;
                return Fu().getTime() - f
            }

            function b(f, g, h, k) {
                function n() {
                    if (!Zh(f.target)) {
                        g.has(d.de) || g.set(d.de, "" + a());
                        g.has(d.ff) || g.set(d.ff, "" + a());
                        var q = 0;
                        g.has(d.he) && (q = Number(g.get(d.he)));
                        q += 100;
                        g.set(d.he, "" + q);
                        if (q >= h) {
                            var r = eu(f.target, "gtm.elementVisibility", [g.g]),
                                t = ai(f.target);
                            r["gtm.visibleRatio"] = Math.round(1E3 * t) / 10;
                            r["gtm.visibleTime"] = h;
                            r["gtm.visibleFirstTime"] = Number(g.get(d.ff));
                            r["gtm.visibleLastTime"] = Number(g.get(d.de));
                            Ku(r);
                            k()
                        }
                    }
                }
                if (!g.has(d.ed) && (0 == h && n(), !g.has(d.vc))) {
                    var p = X("self").setInterval(n, 100);
                    g.set(d.ed, p)
                }
            }

            function c(f) {
                f.has(d.ed) && (X("self").clearInterval(Number(f.get(d.ed))), f.o(d.ed))
            }
            var d = {
                    ed: "polling-id-",
                    ff: "first-on-screen-",
                    de: "recent-on-screen-",
                    he: "total-visible-time-",
                    vc: "has-fired-"
                },
                e = function(f, g) {
                    this.element = f;
                    this.g = g
                };
            e.prototype.has = function(f) {
                return !!this.element.getAttribute("data-gtm-vis-" + f + this.g)
            };
            e.prototype.get = function(f) {
                return this.element.getAttribute("data-gtm-vis-" +
                    f + this.g)
            };
            e.prototype.set = function(f, g) {
                this.element.setAttribute("data-gtm-vis-" + f + this.g, g)
            };
            e.prototype.o = function(f) {
                this.element.removeAttribute("data-gtm-vis-" + f + this.g)
            };
            (function(f) {
                Z.__evl = f;
                Z.__evl.m = "evl";
                Z.__evl.isVendorTemplate = !0;
                Z.__evl.priorityOverride = 0
            })(function(f) {
                function g() {
                    var y = !1,
                        w = null;
                    if ("CSS" === k) {
                        try {
                            w = Sg(n)
                        } catch (E) {
                            S(46)
                        }
                        y = !!w && v.length != w.length
                    } else if ("ID" === k) {
                        var A = I.getElementById(n);
                        A && (w = [A], y = 1 != v.length || v[0] !== A)
                    }
                    w || (w = [], y = 0 < v.length);
                    if (y) {
                        for (var B = 0; B <
                            v.length; B++) {
                            var F = new e(v[B], t);
                            c(F)
                        }
                        v = [];
                        for (var C = 0; C < w.length; C++) v.push(w[C]);
                        0 <= x && gi(x);
                        0 < v.length && (x = fi(h, v, [r]))
                    }
                }

                function h(y) {
                    var w = new e(y.target, t);
                    y.intersectionRatio >= r ? w.has(d.vc) || b(y, w, q, "ONCE" === u ? function() {
                        for (var A = 0; A < v.length; A++) {
                            var B = new e(v[A], t);
                            B.set(d.vc, "1");
                            c(B)
                        }
                        gi(x);
                        if (p && qu)
                            for (var F = 0; F < qu.length; F++) qu[F] === g && qu.splice(F, 1)
                    } : function() {
                        w.set(d.vc, "1");
                        c(w)
                    }) : (c(w), "MANY_PER_ELEMENT" === u && w.has(d.vc) && (w.o(d.vc), w.o(d.he)), w.o(d.de))
                }
                var k = f.vtp_selectorType,
                    n;
                "ID" === k ? n = String(f.vtp_elementId) : "CSS" === k && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    q = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    r = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    t = f.vtp_uniqueTriggerId,
                    u = f.vtp_firingFrequency,
                    v = [],
                    x = -1;
                g();
                p && ru(g);
                K(f.vtp_gtmOnSuccess)
            })
        }();

    var AC = {};
    AC.macro = function(a) {
        if (bu.tf.hasOwnProperty(a)) return bu.tf[a]
    }, AC.onHtmlSuccess = bu.th(!0), AC.onHtmlFailure = bu.th(!1);
    AC.dataLayer = Hh;
    AC.callback = function(a) {
        yh.hasOwnProperty(a) && Ea(yh[a]) && yh[a]();
        delete yh[a]
    };
    AC.bootstrap = 0;
    AC._spx = !1;
    (function(a) {
        if (!z["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = ni(I.referrer);
                b = "cct.google" === ki(c, "host")
            }
            if (!b) {
                var d = Ri("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (z["__TAGGY_INSTALLED"] = !0, Nb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var r = "GTM",
                    t = "GTM";
                var u = z["google.tagmanager.debugui2.queue"];
                u || (u = [], z["google.tagmanager.debugui2.queue"] = u, Nb("https://" + oh.Nc + "/debug/bootstrap?id=" + Ie.J + "&src=" + t + "&cond=" + q + "&gtm=" + Vn()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Hb,
                        containerProduct: r,
                        debug: !1,
                        id: Ie.J
                    }
                };
                v.data.resume = function() {
                    a()
                };
                oh.gi && (v.data.initialPublish = !0);
                u.push(v)
            },
            g = void 0,
            h = li(z.location, "query", !1, void 0, "gtm_debug");
        au(h) && (g = 2);
        if (!g && I.referrer) {
            var k = ni(I.referrer);
            "tagassistant.google.com" === ki(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Ri("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            au(p) && (g = 5)
        }
        g && Hb ? f(g) : a()
    })(function() {
        var a = !1;
        a && Xm("INIT");
        ng().o();
        so();
        ak.enable_gbraid_cookie_write = !0;
        var b = !!T[Ie.J];
        if (b) {
            var c = T.zones;
            c && c.unregisterChild(al());
        } else {
            for (var d = bl(), e = 0; e < d.length; e++) Zr(d[e], Ie.J);
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) he.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++) ke.push(k[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++) je.push(p[q]);
            for (var r = f.rules || [], t = 0; t < r.length; t++) {
                for (var u = r[t], v = {}, x = 0; x < u.length; x++) v[u[x][0]] = Array.prototype.slice.call(u[x], 1);
                ie.push(v)
            }
            me = Z;
            ne = tv;
            Me = new Le;
            var y = data.sandboxed_scripts,
                w = data.security_groups,
                A = data.runtime || [],
                B = data.runtime_lines;
            Xy = new Id;
            $y();
            ge = Yy();
            var F = Xy,
                C = Uy();
            lb(F.g, "require", C);
            for (var E = 0; E < A.length; E++) {
                var D = A[E];
                if (!Ga(D) || 3 > D.length) {
                    if (0 === D.length) continue;
                    break
                }
                B && B[E] && B[E].length && xe(D, B[E]);
                Xy.execute(D)
            }
            if (void 0 !== y)
                for (var O = ["sandboxedScripts"], J = 0; J < y.length; J++) {
                    var N = y[J].replace(/^_*/, "");
                    zh[N] = O
                }
            az(w);
            T[Ie.J] = AC;
            for (var V = dl(), R = al(), L = 0; L < R.length; L++) V.container[R[L]] = !0;
            for (var aa = bl(), ba = 0; ba < aa.length; ba++) V.destination[aa[ba]] = !0;
            V.canonical[Ie.Mc] = !0;
            Xa(zh, Z.h);
            oe = oe || bu;
            pe = Ee;
            $t();
            Hm = !1;
            Im = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) Km();
            else {
                Rb(I, "DOMContentLoaded", Km);
                Rb(I, "readystatechange", Km);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var W = !0;
                    try {
                        W = !z.frameElement
                    } catch (Wa) {}
                    W &&
                        Lm()
                }
                Rb(z, "load", Km)
            }
            Qs = !1;
            "complete" === I.readyState ? Ss() : Rb(z, "load", Ss);
            jm && z.setInterval(cm, 864E5);
            xh = Ta();
            if (a) {
                var Ja = Ym("INIT");
            }
        }
    });

})()