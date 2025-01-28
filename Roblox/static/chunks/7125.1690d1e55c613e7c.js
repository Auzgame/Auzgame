(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7125], {
        27125: (i, e, o) => {
            "use strict";
            var r = o(65751),
                a = function(i) {
                    return i && "object" == typeof i && "default" in i ? i.default : i
                }(r),
                n = o(48679),
                t = new n,
                s = t.getBrowser(),
                b = t.getCPU(),
                w = t.getDevice(),
                l = t.getEngine(),
                d = t.getOS(),
                u = t.getUA();

            function c(i, e) {
                if (null == i) return {};
                var o, r, a = function(i, e) {
                    if (null == i) return {};
                    var o, r, a = {},
                        n = Object.keys(i);
                    for (r = 0; r < n.length; r++) o = n[r], e.indexOf(o) >= 0 || (a[o] = i[o]);
                    return a
                }(i, e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(i);
                    for (r = 0; r < n.length; r++) o = n[r], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(i, o) && (a[o] = i[o])
                }
                return a
            }
            var m = {
                    Mobile: "mobile",
                    Tablet: "tablet",
                    SmartTv: "smarttv",
                    Console: "console",
                    Wearable: "wearable",
                    Embedded: "embedded",
                    Browser: void 0
                },
                p = {
                    Chrome: "Chrome",
                    Firefox: "Firefox",
                    Opera: "Opera",
                    Yandex: "Yandex",
                    Safari: "Safari",
                    InternetExplorer: "Internet Explorer",
                    Edge: "Edge",
                    Chromium: "Chromium",
                    Ie: "IE",
                    MobileSafari: "Mobile Safari",
                    MIUI: "MIUI Browser",
                    SamsungBrowser: "Samsung Browser"
                },
                f = {
                    IOS: "iOS",
                    Android: "Android",
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MAC_OS: "Mac OS"
                },
                h = function(i) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return i || e
                },
                v = function() {
                    return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
                },
                g = function(i) {
                    var e = v();
                    return e && e.platform && (-1 !== e.platform.indexOf(i) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream)
                },
                x = function(i) {
                    return i.type === m.Browser
                },
                k = function(i) {
                    return i.name === p.Edge
                },
                y = function(i) {
                    return "string" == typeof i && -1 !== i.indexOf("Edg/")
                },
                S = function() {
                    return g("iPad")
                };
            w.type, m.SmartTv, w.type, m.Console, w.type, m.Wearable, w.type, m.Embedded, s.name === p.MobileSafari || S(), s.name, p.Chromium;
            var _ = function(i) {
                    var e = i.type;
                    return e === m.Mobile || e === m.Tablet
                }(w) || S(),
                O = (w.type, m.Mobile, w.type === m.Tablet || S(), x(w)),
                T = x(w);
            d.name, f.Android, d.name, f.WindowsPhone, d.name === f.IOS || S(), s.name, p.Chrome, s.name, p.Firefox,
                function(i) {
                    var e = i.name;
                    e === p.Safari || p.MobileSafari
                }(s), s.name, p.Opera,
                function(i) {
                    var e = i.name;
                    e === p.InternetExplorer || p.Ie
                }(s), h(d.version), h(d.name), h(s.version), h(s.major), h(s.name), h(w.vendor), h(w.model), h(l.name), h(l.version), h(u), k(s) || y(u), s.name, p.Yandex, h(w.type, "browser"),
                function() {
                    var i = v();
                    i && (/iPad|iPhone|iPod/.test(i.platform) || "MacIntel" === i.platform && i.maxTouchPoints > 1) && !window.MSStream
                }(), S(), g("iPhone"), g("iPod"),
                function() {
                    var i = v(),
                        e = i && i.userAgent && i.userAgent.toLowerCase();
                    "string" == typeof e && /electron/.test(e)
                }(), y(u), k(s) && y(u), d.name, f.Windows, d.name, f.MAC_OS, s.name, p.MIUI, s.name, p.SamsungBrowser, e.S7 = function(i) {
                    var e = i.renderWithFragment,
                        o = i.children,
                        n = c(i, ["renderWithFragment", "children"]);
                    return O ? e ? a.createElement(r.Fragment, null, o) : a.createElement("div", n, o) : null
                }, e.IM = function(i) {
                    var e = i.renderWithFragment,
                        o = i.children,
                        n = c(i, ["renderWithFragment", "children"]);
                    return _ ? e ? a.createElement(r.Fragment, null, o) : a.createElement("div", n, o) : null
                }, e.xl = T
        },
        48679: function(i, e, o) {
            var r;
            ! function(a, n) {
                "use strict";
                var t = "function",
                    s = "undefined",
                    b = "object",
                    w = "string",
                    l = "major",
                    d = "model",
                    u = "name",
                    c = "type",
                    m = "vendor",
                    p = "version",
                    f = "architecture",
                    h = "console",
                    v = "mobile",
                    g = "tablet",
                    x = "smarttv",
                    k = "wearable",
                    y = "embedded",
                    S = "Amazon",
                    _ = "Apple",
                    O = "ASUS",
                    T = "BlackBerry",
                    E = "Browser",
                    C = "Chrome",
                    M = "Firefox",
                    A = "Google",
                    P = "Huawei",
                    q = "Microsoft",
                    z = "Motorola",
                    I = "Opera",
                    N = "Samsung",
                    U = "Sharp",
                    j = "Sony",
                    B = "Xiaomi",
                    W = "Zebra",
                    F = "Facebook",
                    R = "Chromium OS",
                    D = "Mac OS",
                    L = " Browser",
                    V = function(i, e) {
                        var o = {};
                        for (var r in i) e[r] && e[r].length % 2 == 0 ? o[r] = e[r].concat(i[r]) : o[r] = i[r];
                        return o
                    },
                    G = function(i) {
                        for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] = i[o];
                        return e
                    },
                    H = function(i, e) {
                        return typeof i === w && -1 !== Z(e).indexOf(Z(i))
                    },
                    Z = function(i) {
                        return i.toLowerCase()
                    },
                    $ = function(i, e) {
                        if (typeof i === w) return i = i.replace(/^\s\s*/, ""), typeof e === s ? i : i.substring(0, 500)
                    },
                    X = function(i, e) {
                        for (var o, r, a, s, w, l, d = 0; d < e.length && !w;) {
                            var u = e[d],
                                c = e[d + 1];
                            for (o = r = 0; o < u.length && !w && u[o];)
                                if (w = u[o++].exec(i))
                                    for (a = 0; a < c.length; a++) l = w[++r], typeof(s = c[a]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == t ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== t || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : void 0 : this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0 : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : void 0) : this[s] = l || n;
                            d += 2
                        }
                    },
                    Y = function(i, e) {
                        for (var o in e)
                            if (typeof e[o] === b && e[o].length > 0) {
                                for (var r = 0; r < e[o].length; r++)
                                    if (H(e[o][r], i)) return "?" === o ? n : o
                            } else if (H(e[o], i)) return "?" === o ? n : o;
                        return e.hasOwnProperty("*") ? e["*"] : i
                    },
                    K = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    Q = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [p, [u, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [p, [u, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [u, p],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [p, [u, I + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [p, [u, I + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [p, [u, I]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [p, [u, "Baidu"]],
                            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                            [p, [u, "Maxthon"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [u, p],
                            [/quark(?:pc)?\/([-\w\.]+)/i],
                            [p, [u, "Quark"]],
                            [/\bddg\/([\w\.]+)/i],
                            [p, [u, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [p, [u, "UC" + E]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [p, [u, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [p, [u, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [p, [u, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [p, [u, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [p, [u, "Smart Lenovo " + E]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1 Secure " + E], p
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [p, [u, M + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [p, [u, I + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [p, [u, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [p, [u, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [p, [u, I + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [p, [u, "MIUI" + L]],
                            [/fxios\/([\w\.-]+)/i],
                            [p, [u, M]],
                            [/\bqihoobrowser\/?([\w\.]*)/i],
                            [p, [u, "360"]],
                            [/\b(qq)\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1Browser"], p
                            ],
                            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1" + L], p
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [p, [u, N + " Internet"]],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [p, [u, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [u, "Sogou Mobile"], p
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                            [u, p],
                            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                            [u],
                            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                            [p, u],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [u, F], p
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [u, p],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [p, [u, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [p, [u, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [p, [u, C + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [u, C + " WebView"], p
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [p, [u, "Android " + E]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [u, p],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [p, [u, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [p, u],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [u, [p, Y, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [u, p],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [u, "Netscape"], p
                            ],
                            [/(wolvic|librewolf)\/([\w\.]+)/i],
                            [u, p],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [p, [u, M + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [u, [p, /_/g, "."]],
                            [/(cobalt)\/([\w\.]+)/i],
                            [u, [p, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [f, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [f, Z]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [f, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [f, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [f, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [f, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [f, /ower/, "", Z]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [f, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [f, Z]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [m, N],
                                [c, g]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [m, N],
                                [c, v]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [m, _],
                                [c, v]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [m, _],
                                [c, g]
                            ],
                            [/(macintosh);/i],
                            [d, [m, _]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [m, U],
                                [c, v]
                            ],
                            [/(?:honor)([-\w ]+)[;\)]/i],
                            [d, [m, "Honor"],
                                [c, v]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [m, P],
                                [c, g]
                            ],
                            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [m, P],
                                [c, v]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [m, B],
                                [c, v]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [m, B],
                                [c, g]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [m, "OPPO"],
                                [c, v]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [d, [m, "OPPO"],
                                [c, g]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [m, "Vivo"],
                                [c, v]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [m, "Realme"],
                                [c, v]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [m, z],
                                [c, v]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [m, z],
                                [c, g]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [m, "LG"],
                                [c, g]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [m, "LG"],
                                [c, v]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [m, "Lenovo"],
                                [c, g]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [m, "Nokia"],
                                [c, v]
                            ],
                            [/(pixel c)\b/i],
                            [d, [m, A],
                                [c, g]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [m, A],
                                [c, v]
                            ],
                            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [m, j],
                                [c, v]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [m, j],
                                [c, g]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [m, "OnePlus"],
                                [c, v]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [m, S],
                                [c, g]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [m, S],
                                [c, v]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, m, [c, g]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [m, T],
                                [c, v]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [m, O],
                                [c, g]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [m, O],
                                [c, v]
                            ],
                            [/(nexus 9)/i],
                            [d, [m, "HTC"],
                                [c, g]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [m, [d, /_/g, " "],
                                [c, v]
                            ],
                            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                            [d, [m, "TCL"],
                                [c, g]
                            ],
                            [/(itel) ((\w+))/i],
                            [
                                [m, Z], d, [c, Y, {
                                    tablet: ["p10001l", "w7001"],
                                    "*": "mobile"
                                }]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [m, "Acer"],
                                [c, g]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [m, "Meizu"],
                                [c, v]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [m, "Ulefone"],
                                [c, v]
                            ],
                            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                            [d, [m, "Energizer"],
                                [c, v]
                            ],
                            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                            [d, [m, "Cat"],
                                [c, v]
                            ],
                            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                            [d, [m, "Smartfren"],
                                [c, v]
                            ],
                            [/droid.+; (a(?:015|06[35]|142p?))/i],
                            [d, [m, "Nothing"],
                                [c, v]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [m, d, [c, v]],
                            [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [m, d, [c, g]],
                            [/(surface duo)/i],
                            [d, [m, q],
                                [c, g]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [m, "Fairphone"],
                                [c, v]
                            ],
                            [/(u304aa)/i],
                            [d, [m, "AT&T"],
                                [c, v]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [m, "Siemens"],
                                [c, v]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [m, "RCA"],
                                [c, g]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [m, "Dell"],
                                [c, g]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [m, "Verizon"],
                                [c, g]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [m, "Barnes & Noble"],
                                [c, g]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [m, "NuVision"],
                                [c, g]
                            ],
                            [/\b(k88) b/i],
                            [d, [m, "ZTE"],
                                [c, g]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [m, "ZTE"],
                                [c, v]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [m, "Swiss"],
                                [c, v]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [m, "Swiss"],
                                [c, g]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [m, "Zeki"],
                                [c, g]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [m, "Dragon Touch"], d, [c, g]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [m, "Insignia"],
                                [c, g]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [m, "NextBook"],
                                [c, g]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [m, "Voice"], d, [c, v]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [m, "LvTel"], d, [c, v]
                            ],
                            [/\b(ph-1) /i],
                            [d, [m, "Essential"],
                                [c, v]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [m, "Envizen"],
                                [c, g]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [m, "MachSpeed"],
                                [c, g]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [m, "Rotor"],
                                [c, g]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [m, "Nvidia"],
                                [c, g]
                            ],
                            [/(sprint) (\w+)/i],
                            [m, d, [c, v]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [m, q],
                                [c, v]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [m, W],
                                [c, g]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [m, W],
                                [c, v]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [m, [c, x]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [m, N],
                                [c, x]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [m, "LG"],
                                [c, x]
                            ],
                            [/(apple) ?tv/i],
                            [m, [d, _ + " TV"],
                                [c, x]
                            ],
                            [/crkey/i],
                            [
                                [d, C + "cast"],
                                [m, A],
                                [c, x]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [m, S],
                                [c, x]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [m, U],
                                [c, x]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [m, j],
                                [c, x]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [m, B],
                                [c, x]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [m, d, [c, x]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [m, $],
                                [d, $],
                                [c, x]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [c, x]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [m, d, [c, h]],
                            [/droid.+; (shield) bui/i],
                            [d, [m, "Nvidia"],
                                [c, h]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [m, j],
                                [c, h]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [m, q],
                                [c, h]
                            ],
                            [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                            [d, [m, N],
                                [c, k]
                            ],
                            [/((pebble))app/i],
                            [m, d, [c, k]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [m, _],
                                [c, k]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [m, A],
                                [c, k]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [m, W],
                                [c, k]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [m, A],
                                [c, k]
                            ],
                            [/(pico) (4|neo3(?: link|pro)?)/i],
                            [m, d, [c, k]],
                            [/; (quest( \d| pro)?)/i],
                            [d, [m, F],
                                [c, k]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [m, [c, y]],
                            [/(aeobc)\b/i],
                            [d, [m, S],
                                [c, y]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [c, v]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [c, g]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [c, g]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [c, v]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [m, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [p, [u, "EdgeHTML"]],
                            [/(arkweb)\/([\w\.]+)/i],
                            [u, p],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [p, [u, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [u, p],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [p, u]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [u, p],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [u, [p, Y, K]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [p, Y, K],
                                [u, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [p, /_/g, "."],
                                [u, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [u, D],
                                [p, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [p, u],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [u, p],
                            [/\(bb(10);/i],
                            [p, [u, T]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [p, [u, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [p, [u, M + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [p, [u, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [p, [u, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [p, [u, C + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [u, R], p
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [u, p],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [u, "Solaris"], p
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [u, p]
                        ]
                    },
                    J = function(i, e) {
                        if (typeof i === b && (e = i, i = n), !(this instanceof J)) return new J(i, e).getResult();
                        var o = typeof a !== s && a.navigator ? a.navigator : n,
                            r = i || (o && o.userAgent ? o.userAgent : ""),
                            h = o && o.userAgentData ? o.userAgentData : n,
                            x = e ? V(Q, e) : Q,
                            k = o && o.userAgent == r;
                        return this.getBrowser = function() {
                            var i, e = {};
                            return e[u] = n, e[p] = n, X.call(e, r, x.browser), e[l] = typeof(i = e[p]) === w ? i.replace(/[^\d\.]/g, "").split(".")[0] : n, k && o && o.brave && typeof o.brave.isBrave == t && (e[u] = "Brave"), e
                        }, this.getCPU = function() {
                            var i = {};
                            return i[f] = n, X.call(i, r, x.cpu), i
                        }, this.getDevice = function() {
                            var i = {};
                            return i[m] = n, i[d] = n, i[c] = n, X.call(i, r, x.device), k && !i[c] && h && h.mobile && (i[c] = v), k && "Macintosh" == i[d] && o && typeof o.standalone !== s && o.maxTouchPoints && o.maxTouchPoints > 2 && (i[d] = "iPad", i[c] = g), i
                        }, this.getEngine = function() {
                            var i = {};
                            return i[u] = n, i[p] = n, X.call(i, r, x.engine), i
                        }, this.getOS = function() {
                            var i = {};
                            return i[u] = n, i[p] = n, X.call(i, r, x.os), k && !i[u] && h && h.platform && "Unknown" != h.platform && (i[u] = h.platform.replace(/chrome os/i, R).replace(/macos/i, D)), i
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(i) {
                            return r = typeof i === w && i.length > 500 ? $(i, 500) : i, this
                        }, this.setUA(r), this
                    };
                J.VERSION = "1.0.40", J.BROWSER = G([u, p, l]), J.CPU = G([f]), J.DEVICE = G([d, m, c, h, v, x, g, k, y]), J.ENGINE = J.OS = G([u, p]), typeof e !== s ? (i.exports && (e = i.exports = J), e.UAParser = J) : o.amdO ? n !== (r = (function() {
                    return J
                }).call(e, o, e, i)) && (i.exports = r) : typeof a !== s && (a.UAParser = J);
                var ii = typeof a !== s && (a.jQuery || a.Zepto);
                if (ii && !ii.ua) {
                    var ie = new J;
                    ii.ua = ie.getResult(), ii.ua.get = function() {
                        return ie.getUA()
                    }, ii.ua.set = function(i) {
                        ie.setUA(i);
                        var e = ie.getResult();
                        for (var o in e) ii.ua[o] = e[o]
                    }
                }
            }("object" == typeof window ? window : this)
        }
    }
]);