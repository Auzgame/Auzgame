function createUnityInstance(t, r, d) {
  function i(e, t) {
    if (!i.aborted && r.showBanner)
      return "error" == t && (i.aborted = !0), r.showBanner(e, t);
    switch (t) {
      case "error":
        console.error(e);
        break;
      case "warning":
        console.warn(e);
        break;
      default:
        console.log(e);
    }
  }
  function n(e) {
    var t = e.reason || e.error,
      r = t ? t.toString() : e.message || e.reason || "",
      n = t && t.stack ? t.stack.toString() : "";
    (r += "\n" + (n = n.startsWith(r) ? n.substring(r.length) : n).trim()) &&
      c.stackTraceRegExp &&
      c.stackTraceRegExp.test(r) &&
      C(
        r,
        e.filename || (t && (t.fileName || t.sourceURL)) || "",
        e.lineno || (t && (t.lineNumber || t.line)) || 0
      );
  }
  function e(e, t, r) {
    var n = e[t];
    (void 0 !== n && n) ||
      (console.warn(
        'Config option "' +
          t +
          '" is missing or empty. Falling back to default value: "' +
          r +
          '". Consider updating your WebGL template to include the missing config option.'
      ),
      (e[t] = r));
  }
  d = d || function () {};
  var o,
    c = {
      canvas: t,
      webglContextAttributes: { preserveDrawingBuffer: !1, powerPreference: 2 },
      cacheControl: function (e) {
        return e == c.dataUrl ? "must-revalidate" : "no-store";
      },
      streamingAssetsUrl: "StreamingAssets",
      downloadProgress: {},
      deinitializers: [],
      intervals: {},
      setInterval: function (e, t) {
        e = window.setInterval(e, t);
        return (this.intervals[e] = !0), e;
      },
      clearInterval: function (e) {
        delete this.intervals[e], window.clearInterval(e);
      },
      preRun: [],
      postRun: [],
      print: function (e) {
        console.log(e);
      },
      printErr: function (e) {
        console.error(e),
          "string" == typeof e &&
            -1 != e.indexOf("wasm streaming compile failed") &&
            (-1 != e.toLowerCase().indexOf("mime")
              ? i(
                  'HTTP Response Header "Content-Type" configured incorrectly on the server for file ' +
                    c.codeUrl +
                    ' , should be "application/wasm". Startup time performance will suffer.',
                  "warning"
                )
              : i(
                  'WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file ' +
                    c.codeUrl +
                    ", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.",
                  "warning"
                ));
      },
      locateFile: function (e) {
        return "build.wasm" == e ? this.codeUrl : e;
      },
      disabledCanvasEvents: ["contextmenu", "dragstart"],
    };
  for (o in (e(r, "companyName", "Unity"),
  e(r, "productName", "WebGL Player"),
  e(r, "productVersion", "1.0"),
  r))
    c[o] = r[o];
  c.streamingAssetsUrl = new URL(c.streamingAssetsUrl, document.URL).href;
  var a = c.disabledCanvasEvents.slice();
  function s(e) {
    e.preventDefault();
  }
  a.forEach(function (e) {
    t.addEventListener(e, s);
  }),
    window.addEventListener("error", n),
    window.addEventListener("unhandledrejection", n),
    c.deinitializers.push(function () {
      for (var e in (c.disableAccessToMediaDevices(),
      a.forEach(function (e) {
        t.removeEventListener(e, s);
      }),
      window.removeEventListener("error", n),
      window.removeEventListener("unhandledrejection", n),
      c.intervals))
        window.clearInterval(e);
      c.intervals = {};
    }),
    (c.QuitCleanup = function () {
      for (var e = 0; e < c.deinitializers.length; e++) c.deinitializers[e]();
      (c.deinitializers = []), "function" == typeof c.onQuit && c.onQuit();
    });
  var l,
    u,
    h,
    f,
    p,
    g,
    m,
    b,
    y = "",
    v = "",
    w =
      (document.addEventListener("webkitfullscreenchange", function (e) {
        document.webkitCurrentFullScreenElement === t
          ? t.style.width &&
            ((y = t.style.width),
            (v = t.style.height),
            (t.style.width = "100%"),
            (t.style.height = "100%"))
          : y && ((t.style.width = y), (t.style.height = v), (v = y = ""));
      }),
      {
        Module: c,
        SetFullscreen: function () {
          if (c.SetFullscreen) return c.SetFullscreen.apply(c, arguments);
          c.print("Failed to set Fullscreen mode: Player not loaded yet.");
        },
        SendMessage: function () {
          if (c.SendMessage) return c.SendMessage.apply(c, arguments);
          c.print("Failed to execute SendMessage: Player not loaded yet.");
        },
        Quit: function () {
          return new Promise(function (e, t) {
            (c.shouldQuit = !0), (c.onQuit = e);
          });
        },
      });
  function C(e, t, r) {
    -1 == e.indexOf("fullscreen error") &&
      (c.startupErrorHandler
        ? c.startupErrorHandler(e, t, r)
        : (c.errorHandler && c.errorHandler(e, t, r)) ||
          (console.log("Invoking error handler due to\n" + e),
          "function" == typeof dump &&
            dump("Invoking error handler due to\n" + e),
          C.didShowErrorMessage ||
            (-1 !=
            (e =
              "An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n" +
              e).indexOf("DISABLE_EXCEPTION_CATCHING")
              ? (e =
                  "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.")
              : -1 != e.indexOf("Cannot enlarge memory arrays")
              ? (e =
                  "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.")
              : (-1 == e.indexOf("Invalid array buffer length") &&
                  -1 == e.indexOf("Invalid typed array length") &&
                  -1 == e.indexOf("out of memory") &&
                  -1 == e.indexOf("could not allocate memory")) ||
                (e =
                  "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),
            alert(e),
            (C.didShowErrorMessage = !0))));
  }
  function x(e, t) {
    if ("symbolsUrl" != e) {
      var r = c.downloadProgress[e],
        n =
          ((r =
            r ||
            (c.downloadProgress[e] = {
              started: !1,
              finished: !1,
              lengthComputable: !1,
              total: 0,
              loaded: 0,
            })),
          "object" != typeof t ||
            ("progress" != t.type && "load" != t.type) ||
            (r.started ||
              ((r.started = !0), (r.lengthComputable = t.lengthComputable)),
            (r.total = t.total),
            (r.loaded = t.loaded),
            "load" == t.type && (r.finished = !0)),
          0),
        o = 0,
        a = 0,
        s = 0,
        i = 0;
      for (e in c.downloadProgress) {
        if (!(r = c.downloadProgress[e]).started) return;
        a++,
          r.lengthComputable
            ? ((n += r.loaded), (o += r.total), s++)
            : r.finished || i++;
      }
      d(0.9 * (a ? (a - i - (o ? (s * (o - n)) / o : 0)) / a : 0));
    }
  }
  function S() {
    var o = this;
    o.isConnected = new Promise(function (t, r) {
      try {
        function n() {
          o.openDBTimeout &&
            (clearTimeout(o.openDBTimeout), (o.openDBTimeout = null));
        }
        o.openDBTimeout = setTimeout(function () {
          void 0 === o.database &&
            r(new Error("Could not connect to database: Timeout."));
        }, 2e3);
        var e = f.open(l.name, l.version);
        (e.onupgradeneeded = function (e) {
          var t;
          (e = (e = e).target.result).objectStoreNames.contains(h.name) ||
            e.createObjectStore(h.name),
            e.objectStoreNames.contains(u.name) ||
              ((t = e.createObjectStore(u.name, { keyPath: "url" })),
              [
                "version",
                "company",
                "product",
                "updated",
                "revalidated",
                "accessed",
              ].forEach(function (e) {
                t.createIndex(e, e);
              }));
        }),
          (e.onsuccess = function (e) {
            n(), (o.database = e.target.result), t();
          }),
          (e.onerror = function (e) {
            n(),
              (o.database = null),
              r(new Error("Could not connect to database."));
          });
      } catch (e) {
        n(),
          (o.database = null),
          r(new Error("Could not connect to database."));
      }
    });
  }
  function T(e) {
    console.log("[UnityCache] " + e);
  }
  function E(e) {
    return (
      (E.link = E.link || document.createElement("a")),
      (E.link.href = e),
      E.link.href
    );
  }
  function k(t) {
    (t = t || {}),
      (this.headers = new Headers()),
      Object.keys(t.headers).forEach(
        function (e) {
          this.headers.set(e, t.headers[e]);
        }.bind(this)
      ),
      (this.redirected = t.redirected),
      (this.status = t.status),
      (this.statusText = t.statusText),
      (this.type = t.type),
      (this.url = t.url),
      (this.parsedBody = t.parsedBody),
      Object.defineProperty(this, "ok", {
        get: function () {
          return 200 <= this.status && this.status <= 299;
        }.bind(this),
      });
  }
  function P(e, t, r, n, o) {
    var a = {
      url: e,
      version: m.version,
      company: t,
      product: r,
      updated: n,
      revalidated: n,
      accessed: n,
      response: { headers: {} },
    };
    return (
      o &&
        (o.headers.forEach(function (e, t) {
          a.response.headers[t] = e;
        }),
        ["redirected", "status", "statusText", "type", "url"].forEach(function (
          e
        ) {
          a.response[e] = o[e];
        }),
        (a.response.parsedBody = o.parsedBody)),
      a
    );
  }
  function U() {
    new Promise(function (a, e) {
      var s = document.createElement("script");
      (s.src = c.frameworkUrl),
        (s.onload = function () {
          if ("undefined" == typeof unityFramework || !unityFramework) {
            var e,
              t = [
                ["br", "br"],
                ["gz", "gzip"],
              ];
            for (e in t) {
              var r,
                n = t[e];
              if (c.frameworkUrl.endsWith("." + n[0]))
                return (
                  (r = "Unable to parse " + c.frameworkUrl + "!"),
                  "file:" == location.protocol
                    ? void i(
                        r +
                          " Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.",
                        "error"
                      )
                    : ((r +=
                        ' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: ' +
                        n[1] +
                        '" present. Check browser Console and Devtools Network tab to debug.'),
                      "br" == n[0] &&
                        "http:" == location.protocol &&
                        ((n =
                          -1 !=
                          ["localhost", "127.0.0.1"].indexOf(location.hostname)
                            ? ""
                            : "Migrate your server to use HTTPS."),
                        (r = /Firefox/.test(navigator.userAgent)
                          ? "Unable to parse " +
                            c.frameworkUrl +
                            '!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. ' +
                            n +
                            ' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.'
                          : "Unable to parse " +
                            c.frameworkUrl +
                            '!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.')),
                      void i(r, "error"))
                );
            }
            i(
              "Unable to parse " +
                c.frameworkUrl +
                "! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)",
              "error"
            );
          }
          var o = unityFramework;
          (unityFramework = null), (s.onload = null), a(o);
        }),
        (s.onerror = function (e) {
          i(
            "Unable to load file " +
              c.frameworkUrl +
              "! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)",
            "error"
          );
        }),
        document.body.appendChild(s),
        c.deinitializers.push(function () {
          document.body.removeChild(s);
        });
    }).then(function (e) {
      e(c);
    });
    x((r = "dataUrl")),
      (e = c.cacheControl(c[r])),
      (t =
        c.companyName && c.productName ? c.cachedFetch : c.fetchWithProgress),
      (n = c[r]),
      (n = /file:\/\//.exec(n) ? "same-origin" : void 0);
    var r,
      e,
      t,
      n,
      o = t(c[r], {
        method: "GET",
        companyName: c.companyName,
        productName: c.productName,
        control: e,
        mode: n,
        onProgress: function (e) {
          x(r, e);
        },
      })
        .then(function (e) {
          return e.parsedBody;
        })
        .catch(function (e) {
          var t = "Failed to download file " + c[r];
          "file:" == location.protocol
            ? i(
                t +
                  ". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.",
                "error"
              )
            : console.error(t);
        });
    c.preRun.push(function () {
      c.addRunDependency("dataUrl"),
        o.then(function (e) {
          var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
            r = 0,
            n = "UnityWebData1.0\0";
          if (
            !String.fromCharCode.apply(null, e.subarray(r, r + n.length)) == n
          )
            throw "unknown data format";
          var o = t.getUint32((r += n.length), !0);
          for (r += 4; r < o; ) {
            var a = t.getUint32(r, !0),
              s = ((r += 4), t.getUint32(r, !0)),
              i = ((r += 4), t.getUint32(r, !0)),
              d =
                ((r += 4),
                String.fromCharCode.apply(null, e.subarray(r, r + i)));
            r += i;
            for (
              var l = 0, u = d.indexOf("/", l) + 1;
              0 < u;
              l = u, u = d.indexOf("/", l) + 1
            )
              c.FS_createPath(d.substring(0, l), d.substring(l, u - 1), !0, !0);
            c.FS_createDataFile(d, null, e.subarray(a, a + s), !0, !0, !0);
          }
          c.removeRunDependency("dataUrl");
        });
    });
  }
  return (
    (c.SystemInfo = (function () {
      var e,
        t,
        r,
        n,
        o = navigator.userAgent + " ",
        a = [
          ["Firefox", "Firefox"],
          ["OPR", "Opera"],
          ["Edg", "Edge"],
          ["SamsungBrowser", "Samsung Browser"],
          ["Trident", "Internet Explorer"],
          ["MSIE", "Internet Explorer"],
          ["Chrome", "Chrome"],
          ["CriOS", "Chrome on iOS Safari"],
          ["FxiOS", "Firefox on iOS Safari"],
          ["Safari", "Safari"],
        ];
      function s(e, t, r) {
        return (e = RegExp(e, "i").exec(t)) && e[r];
      }
      for (var i = 0; i < a.length; ++i)
        if ((t = s(a[i][0] + "[/ ](.*?)[ \\)]", o, 1))) {
          e = a[i][1];
          break;
        }
      "Safari" == e && (t = s("Version/(.*?) ", o, 1)),
        "Internet Explorer" == e && (t = s("rv:(.*?)\\)? ", o, 1) || t);
      for (
        var d = [
            ["Windows (.*?)[;)]", "Windows"],
            ["Android ([0-9_.]+)", "Android"],
            ["iPhone OS ([0-9_.]+)", "iPhoneOS"],
            ["iPad.*? OS ([0-9_.]+)", "iPadOS"],
            ["FreeBSD( )", "FreeBSD"],
            ["OpenBSD( )", "OpenBSD"],
            ["Linux|X11()", "Linux"],
            ["Mac OS X ([0-9_.]+)", "MacOS"],
            ["bot|google|baidu|bing|msn|teoma|slurp|yandex", "Search Bot"],
          ],
          l = 0;
        l < d.length;
        ++l
      )
        if ((u = s(d[l][0], o, 1))) {
          (r = d[l][1]), (u = u.replace(/_/g, "."));
          break;
        }
      var u =
          {
            "NT 5.0": "2000",
            "NT 5.1": "XP",
            "NT 5.2": "Server 2003",
            "NT 6.0": "Vista",
            "NT 6.1": "7",
            "NT 6.2": "8",
            "NT 6.3": "8.1",
            "NT 10.0": "10",
          }[u] || u,
        c =
          ((c = document.createElement("canvas")) &&
            ((gl = c.getContext("webgl2")),
            (glVersion = gl ? 2 : 0),
            gl || ((gl = c && c.getContext("webgl")) && (glVersion = 1)),
            gl &&
              (n =
                (gl.getExtension("WEBGL_debug_renderer_info") &&
                  gl.getParameter(37446)) ||
                gl.getParameter(7937))),
          "undefined" != typeof SharedArrayBuffer),
        h =
          "object" == typeof WebAssembly &&
          "function" == typeof WebAssembly.compile;
      return {
        width: screen.width,
        height: screen.height,
        userAgent: o.trim(),
        browser: e || "Unknown browser",
        browserVersion: t || "Unknown version",
        mobile: /Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),
        os: r || "Unknown OS",
        osVersion: u || "Unknown OS Version",
        gpu: n || "Unknown GPU",
        language: navigator.userLanguage || navigator.language,
        hasWebGL: glVersion,
        hasCursorLock: !!document.body.requestPointerLock,
        hasFullscreen:
          !!document.body.requestFullscreen ||
          !!document.body.webkitRequestFullscreen,
        hasThreads: c,
        hasWasm: h,
        hasWasmThreads: !1,
      };
    })()),
    (c.abortHandler = function (e) {
      return C(e, "", 0), !0;
    }),
    (Error.stackTraceLimit = Math.max(Error.stackTraceLimit || 0, 50)),
    (c.readBodyWithProgress = function (a, s, i) {
      var e = a.body ? a.body.getReader() : void 0,
        d = void 0 !== a.headers.get("Content-Length"),
        l = (function (e, t) {
          if (!t) return 0;
          var t = e.headers.get("Content-Encoding"),
            r = parseInt(e.headers.get("Content-Length"));
          switch (t) {
            case "br":
              return Math.round(5 * r);
            case "gzip":
              return Math.round(4 * r);
            default:
              return r;
          }
        })(a, d),
        u = new Uint8Array(l),
        c = [],
        h = 0,
        f = 0;
      return (
        d ||
          console.warn(
            "[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."
          ),
        (function o() {
          return void 0 === e
            ? a.arrayBuffer().then(function (e) {
                var t = new Uint8Array(e);
                return (
                  s({
                    type: "progress",
                    response: a,
                    total: e.length,
                    loaded: 0,
                    lengthComputable: d,
                    chunk: i ? t : null,
                  }),
                  t
                );
              })
            : e.read().then(function (e) {
                if (e.done) {
                  if (h === l) return u;
                  if (h < l) return u.slice(0, h);
                  for (
                    var t = new Uint8Array(h), r = (t.set(u, 0), f), n = 0;
                    n < c.length;
                    ++n
                  )
                    t.set(c[n], r), (r += c[n].length);
                  return t;
                }
                return (
                  h + e.value.length <= u.length
                    ? (u.set(e.value, h), (f = h + e.value.length))
                    : c.push(e.value),
                  (h += e.value.length),
                  s({
                    type: "progress",
                    response: a,
                    total: Math.max(l, h),
                    loaded: h,
                    lengthComputable: d,
                    chunk: i ? e.value : null,
                  }),
                  o()
                );
              });
        })().then(function (e) {
          return (
            s({
              type: "load",
              response: a,
              total: e.length,
              loaded: e.length,
              lengthComputable: d,
              chunk: null,
            }),
            (a.parsedBody = e),
            a
          );
        })
      );
    }),
    (c.fetchWithProgress = function (e, t) {
      var r = function () {};
      return (
        t && t.onProgress && (r = t.onProgress),
        fetch(e, t).then(function (e) {
          return c.readBodyWithProgress(e, r, t.enableStreamingDownload);
        })
      );
    }),
    (c.UnityCache =
      ((l = { name: "UnityCache", version: 3 }),
      (u = { name: "RequestStore", version: 1 }),
      (h = { name: "WebAssembly", version: 1 }),
      (f =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB),
      (S.UnityCacheDatabase = l),
      (S.RequestStore = u),
      (S.WebAssemblyStore = h),
      (p = null),
      (S.getInstance = function () {
        return (p = p || new S());
      }),
      (S.destroyInstance = function () {
        return p
          ? p.close().then(function () {
              p = null;
            })
          : Promise.resolve();
      }),
      (S.clearCache = function () {
        return S.destroyInstance().then(function () {
          return new Promise(function (e, t) {
            var r = f.deleteDatabase(l.name);
            (r.onsuccess = function () {
              e();
            }),
              (r.onerror = function () {
                t(new Error("Could not delete database."));
              }),
              (r.onblocked = function () {
                t(new Error("Database blocked."));
              });
          });
        });
      }),
      (S.prototype.execute = function (a, s, i) {
        return this.isConnected.then(
          function () {
            return new Promise(
              function (t, r) {
                try {
                  var e, n, o;
                  null === this.database
                    ? r(new Error("indexedDB access denied"))
                    : ((e =
                        -1 != ["put", "delete", "clear"].indexOf(s)
                          ? "readwrite"
                          : "readonly"),
                      (n = this.database.transaction([a], e).objectStore(a)),
                      "openKeyCursor" == s &&
                        ((n = n.index(i[0])), (i = i.slice(1))),
                      ((o = n[s].apply(n, i)).onsuccess = function (e) {
                        t(e.target.result);
                      }),
                      (o.onerror = function (e) {
                        r(e);
                      }));
                } catch (e) {
                  r(e);
                }
              }.bind(this)
            );
          }.bind(this)
        );
      }),
      (S.prototype.loadRequest = function (e) {
        return this.execute(u.name, "get", [e]);
      }),
      (S.prototype.storeRequest = function (e) {
        return this.execute(u.name, "put", [e]);
      }),
      (S.prototype.close = function () {
        return this.isConnected.then(
          function () {
            this.database && (this.database.close(), (this.database = null));
          }.bind(this)
        );
      }),
      S)),
    (c.cachedFetch =
      ((g = c.UnityCache),
      (m = g.RequestStore),
      (b = c.fetchWithProgress),
      (k.prototype.arrayBuffer = function () {
        return Promise.resolve(this.parsedBody.buffer);
      }),
      (k.prototype.blob = function () {
        return this.arrayBuffer().then(function (e) {
          return new Blob([e]);
        });
      }),
      (k.prototype.json = function () {
        return this.text().then(function (e) {
          return JSON.parse(e);
        });
      }),
      (k.prototype.text = function () {
        var e = new TextDecoder();
        return Promise.resolve(e.decode(this.parsedBody));
      }),
      function (n, o) {
        var e,
          t,
          a = g.getInstance(),
          r = E("string" == typeof n ? n : n.url),
          s = {
            enabled:
              ((e = r),
              (!(t = o) || !t.method || "GET" === t.method) &&
                (!t ||
                  -1 != ["must-revalidate", "immutable"].indexOf(t.control)) &&
                !!e.match("^https?://")),
          };
        function i(e, t) {
          return b(e, t).then(function (e) {
            if (s.enabled && !s.revalidated) {
              if (304 === e.status)
                return (
                  (s.result.revalidated = s.result.accessed),
                  (s.revalidated = !0),
                  a
                    .storeRequest(s.result)
                    .then(function () {
                      T(
                        "'" +
                          s.result.url +
                          "' successfully revalidated and served from the indexedDB cache"
                      );
                    })
                    .catch(function (e) {
                      T(
                        "'" +
                          s.result.url +
                          "' successfully revalidated but not stored in the indexedDB cache due to the error: " +
                          e
                      );
                    }),
                  new k(s.result.response)
                );
              200 == e.status
                ? ((s.result = P(e.url, s.company, s.product, s.accessed, e)),
                  (s.revalidated = !0),
                  a
                    .storeRequest(s.result)
                    .then(function () {
                      T(
                        "'" +
                          s.result.url +
                          "' successfully downloaded and stored in the indexedDB cache"
                      );
                    })
                    .catch(function (e) {
                      T(
                        "'" +
                          s.result.url +
                          "' successfully downloaded but not stored in the indexedDB cache due to the error: " +
                          e
                      );
                    }))
                : T(
                    "'" +
                      s.result.url +
                      "' request failed with status: " +
                      e.status +
                      " " +
                      e.statusText
                  );
            }
            return e;
          });
        }
        function d(e) {
          o &&
            o.onProgress &&
            (o.onProgress({
              type: "progress",
              total: e.parsedBody.length,
              loaded: e.parsedBody.length,
              lengthComputable: !0,
            }),
            o.onProgress({
              type: "load",
              total: e.parsedBody.length,
              loaded: e.parsedBody.length,
              lengthComputable: !0,
            }));
        }
        return (
          o &&
            ((s.control = o.control),
            (s.company = o.company),
            (s.product = o.product)),
          (s.result = P(r, s.company, s.product, Date.now())),
          (s.revalidated = !1),
          s.enabled
            ? a
                .loadRequest(s.result.url)
                .then(function (e) {
                  if (!e || e.version !== m.version) return i(n, o);
                  (s.result = e), (s.result.accessed = Date.now());
                  var t,
                    r = new k(s.result.response);
                  return "immutable" == s.control
                    ? ((s.revalidated = !0),
                      a.storeRequest(s.result),
                      T(
                        "'" +
                          s.result.url +
                          "' served from the indexedDB cache without revalidation"
                      ),
                      d(r),
                      r)
                    : ((e = s.result.url),
                      ((t = window.location.href.match(/^[a-z]+:\/\/[^\/]+/)) &&
                        !e.lastIndexOf(t[0], 0)) ||
                      (!r.headers.get("Last-Modified") &&
                        !r.headers.get("ETag"))
                        ? ((e = (o = o || {}).headers || {}),
                          (o.headers = e),
                          r.headers.get("Last-Modified")
                            ? ((e["If-Modified-Since"] =
                                r.headers.get("Last-Modified")),
                              (e["Cache-Control"] = "no-cache"))
                            : r.headers.get("ETag") &&
                              ((e["If-None-Match"] = r.headers.get("ETag")),
                              (e["Cache-Control"] = "no-cache")),
                          i(n, o))
                        : fetch(s.result.url, { method: "HEAD" }).then(
                            function (t) {
                              return (
                                (s.revalidated = [
                                  "Last-Modified",
                                  "ETag",
                                ].every(function (e) {
                                  return (
                                    !r.headers.get(e) ||
                                    r.headers.get(e) == t.headers.get(e)
                                  );
                                })),
                                s.revalidated
                                  ? ((s.result.revalidated = s.result.accessed),
                                    a.storeRequest(s.result),
                                    T(
                                      "'" +
                                        s.result.url +
                                        "' successfully revalidated and served from the indexedDB cache"
                                    ),
                                    d(r),
                                    r)
                                  : i(n, o)
                              );
                            }
                          ));
                })
                .catch(function (e) {
                  return (
                    T(
                      "Failed to load '" +
                        s.result.url +
                        "' from indexedDB cache due to the error: " +
                        e
                    ),
                    b(n, o)
                  );
                })
            : b(n, o)
        );
      })),
    new Promise(function (e, t) {
      c.SystemInfo.hasWebGL
        ? c.SystemInfo.hasWasm
          ? (1 == c.SystemInfo.hasWebGL &&
              c.print(
                'Warning: Your browser does not support "WebGL 2" Graphics API, switching to "WebGL 1"'
              ),
            (c.startupErrorHandler = t),
            d(0),
            c.postRun.push(function () {
              d(1), delete c.startupErrorHandler, e(w);
            }),
            U())
          : t("Your browser does not support WebAssembly.")
        : t("Your browser does not support WebGL.");
    })
  );
}
