(() => {
    var e, t, r, n, o, a, i = {
            354: (e, t, r) => {
                Promise.all([r.e(416), r.e(51), r.e(439), r.e(201)]).then(r.bind(r, 9201))
            },
            2196: e => {
                "use strict";
                e.exports = new Promise((e => {
                    const t = document.createElement("script");
                    t.src = ("/gx-engine-client", (new URL(window.location.href).origin.includes("localhost") ? "undefined" : new URL(window.location.href).origin) + "/gx-engine-client/remoteEntry.js"), t.onload = () => {
                        e({
                            get: e => window.engine.get(e),
                            init: e => {
                                try {
                                    return window.engine.init(e)
                                } catch (e) {
                                    console.log("remote container already initialized")
                                }
                            }
                        })
                    }, document.head.appendChild(t)
                }))
            },
            771: e => {
                "use strict";
                e.exports = new Promise((e => {
                    const t = document.createElement("script");
                    t.src = ("/gx-launcher-client", (new URL(window.location.href).origin.includes("localhost") ? "undefined" : new URL(window.location.href).origin) + "/gx-launcher-client/remoteEntry.js"), t.onload = () => {
                        e({
                            get: e => window.launcher.get(e),
                            init: e => {
                                try {
                                    return window.launcher.init(e)
                                } catch (e) {
                                    console.log("remote container already initialized")
                                }
                            }
                        })
                    }, document.head.appendChild(t)
                }))
            }
        },
        l = {};

    function u(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return i[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
    }
    u.m = i, u.c = l, u.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return u.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, u.t = function(r, n) {
        if (1 & n && (r = this(r)), 8 & n) return r;
        if ("object" == typeof r && r) {
            if (4 & n && r.__esModule) return r;
            if (16 & n && "function" == typeof r.then) return r
        }
        var o = Object.create(null);
        u.r(o);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var i = 2 & n && r;
            "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((e => a[e] = () => r[e]));
        return a.default = () => r, u.d(o, a), o
    }, u.d = (e, t) => {
        for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "v102/" + e + ".js", u.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r = {}, n = "towerrush:", u.l = (e, t, o, a) => {
        if (r[e]) r[e].push(t);
        else {
            var i, l;
            if (void 0 !== o)
                for (var s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) {
                    var c = s[d];
                    if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == n + o) {
                        i = c;
                        break
                    }
                }
            i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", n + o), i.src = e), r[e] = [t];
            var f = (t, n) => {
                    i.onerror = i.onload = null, clearTimeout(h);
                    var o = r[e];
                    if (delete r[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
                },
                h = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), l && document.head.appendChild(i)
        }
    }, u.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
        8: [1008],
        201: [223, 248, 433, 701, 1100, 1277, 1350, 2351, 3562, 3953, 4364, 6345, 6606, 7608, 8148, 8699, 9234, 9786],
        303: [1303],
        334: [4334]
    }, a = {
        223: ["default", "./icons", 2196],
        248: ["default", "./requestModelsV2", 771],
        433: ["default", "./LauncherGlassApp", 771],
        701: ["default", "./services/settingsService", 771],
        1008: ["default", "./GetInitialStateMaxWinnersWrapper", 771],
        1100: ["default", "./storage", 2196],
        1277: ["default", "./launcherSlice", 771],
        1303: ["default", "./GetInitialStateHistoryWrapper", 771],
        1350: ["default", "./Shared/Global", 2196],
        2351: ["default", "./Shared/TableWrapper", 2196],
        3562: ["default", "./api", 2196],
        3953: ["default", "./services/connectionService", 771],
        4334: ["default", "./LeaderBoardRightPane", 771],
        4364: ["default", "./Glass/Global", 2196],
        6345: ["default", "./constants", 2196],
        6606: ["default", "./helpers", 2196],
        7608: ["default", "./hooks", 2196],
        8148: ["default", "./services/errorBoundary", 771],
        8699: ["default", "./Shared/Buttons", 2196],
        9234: ["default", "./hooks", 771],
        9786: ["default", "./initialState", 771]
    }, u.f.remotes = (e, t) => {
        u.o(o, e) && o[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var n = a[e];
            if (!(r.indexOf(n) >= 0)) {
                if (r.push(n), n.p) return t.push(n.p);
                var o = t => {
                        t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                            throw t
                        }, n.p = 0
                    },
                    i = (e, r, a, i, l, u) => {
                        try {
                            var s = e(r, a);
                            if (!s || !s.then) return l(s, i, u);
                            var d = s.then((e => l(e, i)), o);
                            if (!u) return d;
                            t.push(n.p = d)
                        } catch (e) {
                            o(e)
                        }
                    },
                    l = (e, t, o) => i(t.get, n[1], r, 0, s, o),
                    s = t => {
                        n.p = 1, u.m[e] = e => {
                            e.exports = t()
                        }
                    };
                i(u, n[2], 0, 0, ((e, t, r) => e ? i(u.I, n[0], 0, e, l, r) : o()), 1)
            }
        }))
    }, (() => {
        u.S = {};
        var e = {},
            t = {};
        u.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
                if (n.push(o), e[r]) return e[r];
                u.o(u.S, r) || (u.S[r] = {});
                var a = u.S[r],
                    i = "towerrush",
                    l = (e, t, r, n) => {
                        var o = a[e] = a[e] || {},
                            l = o[t];
                        (!l || !l.loaded && (!n != !l.eager ? n : i > l.from)) && (o[t] = {
                            get: r,
                            from: i,
                            eager: !!n
                        })
                    },
                    s = e => {
                        var t = e => {
                            return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                            var t
                        };
                        try {
                            var o = u(e);
                            if (!o) return;
                            var a = e => e && e.init && e.init(u.S[r], n);
                            if (o.then) return d.push(o.then(a, t));
                            var i = a(o);
                            if (i && i.then) return d.push(i.catch(t))
                        } catch (e) {
                            t(e)
                        }
                    },
                    d = [];
                return "default" === r && (l("@pixi/react", "7.1.0", (() => Promise.all([u.e(280), u.e(300), u.e(208), u.e(416), u.e(439), u.e(654)]).then((() => () => u(7208))))), l("@reduxjs/toolkit", "2.6.1", (() => u.e(816).then((() => () => u(9816))))), l("@sentry/react", "8.55.0", (() => Promise.all([u.e(693), u.e(416)]).then((() => () => u(3693))))), l("matter-js", "0.18.0", (() => u.e(842).then((() => () => u(9842))))), l("pixi-spine", "4.0.4", (() => Promise.all([u.e(280), u.e(808), u.e(678)]).then((() => () => u(5808))))), l("pixi.js", "7.4.0", (() => Promise.all([u.e(280), u.e(300), u.e(424), u.e(118)]).then((() => () => u(7424))))), l("prop-types", "15.8.1", (() => u.e(697).then((() => () => u(5697))))), l("react-dom", "18.2.0", (() => Promise.all([u.e(935), u.e(416)]).then((() => () => u(3935))))), l("react-redux", "8.1.3", (() => Promise.all([u.e(113), u.e(416), u.e(51)]).then((() => () => u(6113))))), l("react", "18.2.0", (() => u.e(294).then((() => () => u(7294))))), s(2196), s(771)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
        }
    })(), (() => {
        var e;
        u.g.importScripts && (e = u.g.location + "");
        var t = u.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
                for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e + "../"
    })(), (() => {
        var e = e => {
                var t = e => e.split(".").map((e => +e == e ? +e : e)),
                    r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                    n = r[1] ? t(r[1]) : [];
                return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                    if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                    var o = t[n],
                        a = (typeof o)[0];
                    if (n >= r.length) return "u" == a;
                    var i = r[n],
                        l = (typeof i)[0];
                    if (a != l) return "o" == a && "n" == l || "s" == l || "u" == a;
                    if ("o" != a && "u" != a && o != i) return o < i;
                    n++
                }
            },
            r = e => {
                var t = e[0],
                    n = "";
                if (1 === e.length) return "*";
                if (t + .5) {
                    n += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                    for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(l = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, l);
                    return n
                }
                var i = [];
                for (a = 1; a < e.length; a++) {
                    var l = e[a];
                    i.push(0 === l ? "not(" + u() + ")" : 1 === l ? "(" + u() + " || " + u() + ")" : 2 === l ? i.pop() + " " + i.pop() : r(l))
                }
                return u();

                function u() {
                    return i.pop().replace(/^\((.+)\)$/, "$1")
                }
            },
            n = (t, r) => {
                if (0 in t) {
                    r = e(r);
                    var o = t[0],
                        a = o < 0;
                    a && (o = -o - 1);
                    for (var i = 0, l = 1, u = !0;; l++, i++) {
                        var s, d, c = l < t.length ? (typeof t[l])[0] : "";
                        if (i >= r.length || "o" == (d = (typeof(s = r[i]))[0])) return !u || ("u" == c ? l > o && !a : "" == c != a);
                        if ("u" == d) {
                            if (!u || "u" != c) return !1
                        } else if (u)
                            if (c == d)
                                if (l <= o) {
                                    if (s != t[l]) return !1
                                } else {
                                    if (a ? s > t[l] : s < t[l]) return !1;
                                    s != t[l] && (u = !1)
                                }
                        else if ("s" != c && "n" != c) {
                            if (a || l <= o) return !1;
                            u = !1, l--
                        } else {
                            if (l <= o || d < c != a) return !1;
                            u = !1
                        } else "s" != c && "n" != c && (u = !1, l--)
                    }
                }
                var f = [],
                    h = f.pop.bind(f);
                for (i = 1; i < t.length; i++) {
                    var p = t[i];
                    f.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? n(p, r) : !h())
                }
                return !!h()
            },
            o = (e, o, l, u) => {
                var s = ((e, r) => {
                    var n = e[r];
                    return Object.keys(n).reduce(((e, r) => !e || !n[e].loaded && t(e, r) ? r : e), 0)
                })(e, l);
                return n(u, s) || a(((e, t, n, o) => "Unsatisfied version " + n + " from " + (n && e[t][n].from) + " of shared singleton module " + t + " (required " + r(o) + ")")(e, l, s, u)), i(e[l][s])
            },
            a = e => {
                "undefined" != typeof console && console.warn && console.warn(e)
            },
            i = e => (e.loaded = 1, e.get()),
            l = e => function(t, r, n, o) {
                var a = u.I(t);
                return a && a.then ? a.then(e.bind(e, t, u.S[t], r, n, o)) : e(t, u.S[t], r, n, o)
            },
            s = l(((e, t, r, n, a) => t && u.o(t, r) ? o(t, 0, r, n) : a())),
            d = l(((e, r, o, a, l) => {
                var s = r && u.o(r, o) && ((e, r, o) => {
                    var a = e[r];
                    return (r = Object.keys(a).reduce(((e, r) => !n(o, r) || e && !t(e, r) ? e : r), 0)) && a[r]
                })(r, o, a);
                return s ? i(s) : l()
            })),
            c = {},
            f = {
                8416: () => s("default", "react", [1, 18, 2, 0], (() => u.e(294).then((() => () => u(7294))))),
                1051: () => s("default", "react-dom", [1, 18, 2, 0], (() => u.e(935).then((() => () => u(3935))))),
                5439: () => d("default", "prop-types", [1, 15, 8, 1], (() => u.e(697).then((() => () => u(5697))))),
                1458: () => d("default", "@pixi/react", [4, 7, 1, 0], (() => Promise.all([u.e(280), u.e(300), u.e(208), u.e(242)]).then((() => () => u(7208))))),
                2413: () => s("default", "@reduxjs/toolkit", [1, 2, 5, 1], (() => u.e(816).then((() => () => u(9816))))),
                2480: () => d("default", "@sentry/react", [1, 8, 50, 0], (() => u.e(693).then((() => () => u(3693))))),
                5500: () => d("default", "pixi.js", [4, 7, 4, 0], (() => Promise.all([u.e(280), u.e(300), u.e(424), u.e(118)]).then((() => () => u(7424))))),
                5694: () => d("default", "react-redux", [1, 8, 0, 2], (() => u.e(113).then((() => () => u(6113))))),
                6499: () => d("default", "pixi-spine", [4, 4, 0, 4], (() => Promise.all([u.e(280), u.e(808), u.e(678)]).then((() => () => u(5808))))),
                8442: () => d("default", "matter-js", [2, 0, 18, 0], (() => u.e(842).then((() => () => u(9842)))))
            },
            h = {
                51: [1051],
                201: [1458, 2413, 2480, 5500, 5694, 6499, 8442],
                416: [8416],
                439: [5439]
            };
        u.f.consumes = (e, t) => {
            u.o(h, e) && h[e].forEach((e => {
                if (u.o(c, e)) return t.push(c[e]);
                var r = t => {
                        c[e] = 0, u.m[e] = r => {
                            delete u.c[e], r.exports = t()
                        }
                    },
                    n = t => {
                        delete c[e], u.m[e] = r => {
                            throw delete u.c[e], t
                        }
                    };
                try {
                    var o = f[e]();
                    o.then ? t.push(c[e] = o.then(r).catch(n)) : r(o)
                } catch (e) {
                    n(e)
                }
            }))
        }
    })(), (() => {
        var e = {
            179: 0
        };
        u.f.j = (t, r) => {
            var n = u.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n) r.push(n[2]);
                else if (/^(303|334|416|439|51|8)$/.test(t)) e[t] = 0;
            else {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = u.p + u.u(t),
                    i = new Error;
                u.l(a, (r => {
                    if (u.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var o = r && ("load" === r.type ? "missing" : r.type),
                            a = r && r.target && r.target.src;
                        i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = (t, r) => {
                var n, o, [a, i, l] = r,
                    s = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                    l && l(u)
                }
                for (t && t(r); s < a.length; s++) o = a[s], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunktowerrush = self.webpackChunktowerrush || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), u.nc = void 0, u(354)
})();