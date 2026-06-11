/*! For license information please see 280.js.LICENSE.txt */
(self.webpackChunktowerrush = self.webpackChunktowerrush || []).push([
    [280], {
        1924: (t, e, r) => {
            "use strict";
            var s = r(210),
                i = r(5559),
                n = i(s("String.prototype.indexOf"));
            t.exports = function(t, e) {
                var r = s(t, !!e);
                return "function" == typeof r && n(t, ".prototype.") > -1 ? i(r) : r
            }
        },
        5559: (t, e, r) => {
            "use strict";
            var s = r(8612),
                i = r(210),
                n = r(7771),
                a = i("%TypeError%"),
                o = i("%Function.prototype.apply%"),
                h = i("%Function.prototype.call%"),
                l = i("%Reflect.apply%", !0) || s.call(h, o),
                u = i("%Object.defineProperty%", !0),
                c = i("%Math.max%");
            if (u) try {
                u({}, "a", {
                    value: 1
                })
            } catch (t) {
                u = null
            }
            t.exports = function(t) {
                if ("function" != typeof t) throw new a("a function is required");
                var e = l(s, h, arguments);
                return n(e, 1 + c(0, t.length - (arguments.length - 1)), !0)
            };
            var d = function() {
                return l(s, o, arguments)
            };
            u ? u(t.exports, "apply", {
                value: d
            }) : t.exports.apply = d
        },
        2296: (t, e, r) => {
            "use strict";
            var s = r(1044)(),
                i = r(210),
                n = s && i("%Object.defineProperty%", !0);
            if (n) try {
                n({}, "a", {
                    value: 1
                })
            } catch (t) {
                n = !1
            }
            var a = i("%SyntaxError%"),
                o = i("%TypeError%"),
                h = r(7296);
            t.exports = function(t, e, r) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new o("`obj` must be an object or a function`");
                if ("string" != typeof e && "symbol" != typeof e) throw new o("`property` must be a string or a symbol`");
                if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new o("`nonEnumerable`, if provided, must be a boolean or null");
                if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new o("`nonWritable`, if provided, must be a boolean or null");
                if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new o("`nonConfigurable`, if provided, must be a boolean or null");
                if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new o("`loose`, if provided, must be a boolean");
                var s = arguments.length > 3 ? arguments[3] : null,
                    i = arguments.length > 4 ? arguments[4] : null,
                    l = arguments.length > 5 ? arguments[5] : null,
                    u = arguments.length > 6 && arguments[6],
                    c = !!h && h(t, e);
                if (n) n(t, e, {
                    configurable: null === l && c ? c.configurable : !l,
                    enumerable: null === s && c ? c.enumerable : !s,
                    value: r,
                    writable: null === i && c ? c.writable : !i
                });
                else {
                    if (!u && (s || i || l)) throw new a("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                    t[e] = r
                }
            }
        },
        9187: t => {
            "use strict";

            function e(t, e, s) {
                s = s || 2;
                var n, a, o, h, c, d, p, m = e && e.length,
                    g = m ? e[0] * s : t.length,
                    y = r(t, 0, g, s, !0),
                    _ = [];
                if (!y || y.next === y.prev) return _;
                if (m && (y = function(t, e, s, i) {
                        var n, a, o, h = [];
                        for (n = 0, a = e.length; n < a; n++)(o = r(t, e[n] * i, n < a - 1 ? e[n + 1] * i : t.length, i, !1)) === o.next && (o.steiner = !0), h.push(f(o));
                        for (h.sort(l), n = 0; n < h.length; n++) s = u(h[n], s);
                        return s
                    }(t, e, y, s)), t.length > 80 * s) {
                    n = o = t[0], a = h = t[1];
                    for (var x = s; x < g; x += s)(c = t[x]) < n && (n = c), (d = t[x + 1]) < a && (a = d), c > o && (o = c), d > h && (h = d);
                    p = 0 !== (p = Math.max(o - n, h - a)) ? 32767 / p : 0
                }
                return i(y, _, s, n, a, p, 0), _
            }

            function r(t, e, r, s, i) {
                var n, a;
                if (i === I(t, e, r, s) > 0)
                    for (n = e; n < r; n += s) a = T(n, t[n], t[n + 1], a);
                else
                    for (n = r - s; n >= e; n -= s) a = T(n, t[n], t[n + 1], a);
                return a && y(a, a.next) && (E(a), a = a.next), a
            }

            function s(t, e) {
                if (!t) return t;
                e || (e = t);
                var r, s = t;
                do {
                    if (r = !1, s.steiner || !y(s, s.next) && 0 !== g(s.prev, s, s.next)) s = s.next;
                    else {
                        if (E(s), (s = e = s.prev) === s.next) break;
                        r = !0
                    }
                } while (r || s !== e);
                return e
            }

            function i(t, e, r, l, u, c, f) {
                if (t) {
                    !f && c && function(t, e, r, s) {
                        var i = t;
                        do {
                            0 === i.z && (i.z = d(i.x, i.y, e, r, s)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
                        } while (i !== t);
                        i.prevZ.nextZ = null, i.prevZ = null,
                            function(t) {
                                var e, r, s, i, n, a, o, h, l = 1;
                                do {
                                    for (r = t, t = null, n = null, a = 0; r;) {
                                        for (a++, s = r, o = 0, e = 0; e < l && (o++, s = s.nextZ); e++);
                                        for (h = l; o > 0 || h > 0 && s;) 0 !== o && (0 === h || !s || r.z <= s.z) ? (i = r, r = r.nextZ, o--) : (i = s, s = s.nextZ, h--), n ? n.nextZ = i : t = i, i.prevZ = n, n = i;
                                        r = s
                                    }
                                    n.nextZ = null, l *= 2
                                } while (a > 1)
                            }(i)
                    }(t, l, u, c);
                    for (var p, m, g = t; t.prev !== t.next;)
                        if (p = t.prev, m = t.next, c ? a(t, l, u, c) : n(t)) e.push(p.i / r | 0), e.push(t.i / r | 0), e.push(m.i / r | 0), E(t), t = m.next, g = m.next;
                        else if ((t = m) === g) {
                        f ? 1 === f ? i(t = o(s(t), e, r), e, r, l, u, c, 2) : 2 === f && h(t, e, r, l, u, c) : i(s(t), e, r, l, u, c, 1);
                        break
                    }
                }
            }

            function n(t) {
                var e = t.prev,
                    r = t,
                    s = t.next;
                if (g(e, r, s) >= 0) return !1;
                for (var i = e.x, n = r.x, a = s.x, o = e.y, h = r.y, l = s.y, u = i < n ? i < a ? i : a : n < a ? n : a, c = o < h ? o < l ? o : l : h < l ? h : l, d = i > n ? i > a ? i : a : n > a ? n : a, f = o > h ? o > l ? o : l : h > l ? h : l, m = s.next; m !== e;) {
                    if (m.x >= u && m.x <= d && m.y >= c && m.y <= f && p(i, o, n, h, a, l, m.x, m.y) && g(m.prev, m, m.next) >= 0) return !1;
                    m = m.next
                }
                return !0
            }

            function a(t, e, r, s) {
                var i = t.prev,
                    n = t,
                    a = t.next;
                if (g(i, n, a) >= 0) return !1;
                for (var o = i.x, h = n.x, l = a.x, u = i.y, c = n.y, f = a.y, m = o < h ? o < l ? o : l : h < l ? h : l, y = u < c ? u < f ? u : f : c < f ? c : f, _ = o > h ? o > l ? o : l : h > l ? h : l, x = u > c ? u > f ? u : f : c > f ? c : f, b = d(m, y, e, r, s), v = d(_, x, e, r, s), A = t.prevZ, T = t.nextZ; A && A.z >= b && T && T.z <= v;) {
                    if (A.x >= m && A.x <= _ && A.y >= y && A.y <= x && A !== i && A !== a && p(o, u, h, c, l, f, A.x, A.y) && g(A.prev, A, A.next) >= 0) return !1;
                    if (A = A.prevZ, T.x >= m && T.x <= _ && T.y >= y && T.y <= x && T !== i && T !== a && p(o, u, h, c, l, f, T.x, T.y) && g(T.prev, T, T.next) >= 0) return !1;
                    T = T.nextZ
                }
                for (; A && A.z >= b;) {
                    if (A.x >= m && A.x <= _ && A.y >= y && A.y <= x && A !== i && A !== a && p(o, u, h, c, l, f, A.x, A.y) && g(A.prev, A, A.next) >= 0) return !1;
                    A = A.prevZ
                }
                for (; T && T.z <= v;) {
                    if (T.x >= m && T.x <= _ && T.y >= y && T.y <= x && T !== i && T !== a && p(o, u, h, c, l, f, T.x, T.y) && g(T.prev, T, T.next) >= 0) return !1;
                    T = T.nextZ
                }
                return !0
            }

            function o(t, e, r) {
                var i = t;
                do {
                    var n = i.prev,
                        a = i.next.next;
                    !y(n, a) && _(n, i, i.next, a) && v(n, a) && v(a, n) && (e.push(n.i / r | 0), e.push(i.i / r | 0), e.push(a.i / r | 0), E(i), E(i.next), i = t = a), i = i.next
                } while (i !== t);
                return s(i)
            }

            function h(t, e, r, n, a, o) {
                var h = t;
                do {
                    for (var l = h.next.next; l !== h.prev;) {
                        if (h.i !== l.i && m(h, l)) {
                            var u = A(h, l);
                            return h = s(h, h.next), u = s(u, u.next), i(h, e, r, n, a, o, 0), void i(u, e, r, n, a, o, 0)
                        }
                        l = l.next
                    }
                    h = h.next
                } while (h !== t)
            }

            function l(t, e) {
                return t.x - e.x
            }

            function u(t, e) {
                var r = function(t, e) {
                    var r, s = e,
                        i = t.x,
                        n = t.y,
                        a = -1 / 0;
                    do {
                        if (n <= s.y && n >= s.next.y && s.next.y !== s.y) {
                            var o = s.x + (n - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
                            if (o <= i && o > a && (a = o, r = s.x < s.next.x ? s : s.next, o === i)) return r
                        }
                        s = s.next
                    } while (s !== e);
                    if (!r) return null;
                    var h, l = r,
                        u = r.x,
                        d = r.y,
                        f = 1 / 0;
                    s = r;
                    do {
                        i >= s.x && s.x >= u && i !== s.x && p(n < d ? i : a, n, u, d, n < d ? a : i, n, s.x, s.y) && (h = Math.abs(n - s.y) / (i - s.x), v(s, t) && (h < f || h === f && (s.x > r.x || s.x === r.x && c(r, s))) && (r = s, f = h)), s = s.next
                    } while (s !== l);
                    return r
                }(t, e);
                if (!r) return e;
                var i = A(r, t);
                return s(i, i.next), s(r, r.next)
            }

            function c(t, e) {
                return g(t.prev, t, e.prev) < 0 && g(e.next, t, t.next) < 0
            }

            function d(t, e, r, s, i) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * i | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - s) * i | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }

            function f(t) {
                var e = t,
                    r = t;
                do {
                    (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next
                } while (e !== t);
                return r
            }

            function p(t, e, r, s, i, n, a, o) {
                return (i - a) * (e - o) >= (t - a) * (n - o) && (t - a) * (s - o) >= (r - a) * (e - o) && (r - a) * (n - o) >= (i - a) * (s - o)
            }

            function m(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                    var r = t;
                    do {
                        if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && _(r, r.next, t, e)) return !0;
                        r = r.next
                    } while (r !== t);
                    return !1
                }(t, e) && (v(t, e) && v(e, t) && function(t, e) {
                    var r = t,
                        s = !1,
                        i = (t.x + e.x) / 2,
                        n = (t.y + e.y) / 2;
                    do {
                        r.y > n != r.next.y > n && r.next.y !== r.y && i < (r.next.x - r.x) * (n - r.y) / (r.next.y - r.y) + r.x && (s = !s), r = r.next
                    } while (r !== t);
                    return s
                }(t, e) && (g(t.prev, t, e.prev) || g(t, e.prev, e)) || y(t, e) && g(t.prev, t, t.next) > 0 && g(e.prev, e, e.next) > 0)
            }

            function g(t, e, r) {
                return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
            }

            function y(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function _(t, e, r, s) {
                var i = b(g(t, e, r)),
                    n = b(g(t, e, s)),
                    a = b(g(r, s, t)),
                    o = b(g(r, s, e));
                return i !== n && a !== o || !(0 !== i || !x(t, r, e)) || !(0 !== n || !x(t, s, e)) || !(0 !== a || !x(r, t, s)) || !(0 !== o || !x(r, e, s))
            }

            function x(t, e, r) {
                return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
            }

            function b(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }

            function v(t, e) {
                return g(t.prev, t, t.next) < 0 ? g(t, e, t.next) >= 0 && g(t, t.prev, e) >= 0 : g(t, e, t.prev) < 0 || g(t, t.next, e) < 0
            }

            function A(t, e) {
                var r = new w(t.i, t.x, t.y),
                    s = new w(e.i, e.x, e.y),
                    i = t.next,
                    n = e.prev;
                return t.next = e, e.prev = t, r.next = i, i.prev = r, s.next = r, r.prev = s, n.next = s, s.prev = n, s
            }

            function T(t, e, r, s) {
                var i = new w(t, e, r);
                return s ? (i.next = s.next, i.prev = s, s.next.prev = i, s.next = i) : (i.prev = i, i.next = i), i
            }

            function E(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function w(t, e, r) {
                this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function I(t, e, r, s) {
                for (var i = 0, n = e, a = r - s; n < r; n += s) i += (t[a] - t[n]) * (t[n + 1] + t[a + 1]), a = n;
                return i
            }
            t.exports = e, t.exports.default = e, e.deviation = function(t, e, r, s) {
                var i = e && e.length,
                    n = i ? e[0] * r : t.length,
                    a = Math.abs(I(t, 0, n, r));
                if (i)
                    for (var o = 0, h = e.length; o < h; o++) {
                        var l = e[o] * r,
                            u = o < h - 1 ? e[o + 1] * r : t.length;
                        a -= Math.abs(I(t, l, u, r))
                    }
                var c = 0;
                for (o = 0; o < s.length; o += 3) {
                    var d = s[o] * r,
                        f = s[o + 1] * r,
                        p = s[o + 2] * r;
                    c += Math.abs((t[d] - t[p]) * (t[f + 1] - t[d + 1]) - (t[d] - t[f]) * (t[p + 1] - t[d + 1]))
                }
                return 0 === a && 0 === c ? 0 : Math.abs((c - a) / a)
            }, e.flatten = function(t) {
                for (var e = t[0][0].length, r = {
                        vertices: [],
                        holes: [],
                        dimensions: e
                    }, s = 0, i = 0; i < t.length; i++) {
                    for (var n = 0; n < t[i].length; n++)
                        for (var a = 0; a < e; a++) r.vertices.push(t[i][n][a]);
                    i > 0 && (s += t[i - 1].length, r.holes.push(s))
                }
                return r
            }
        },
        6729: t => {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function s() {}

            function i(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function n(t, e, s, n, a) {
                if ("function" != typeof s) throw new TypeError("The listener must be a function");
                var o = new i(s, n || t, a),
                    h = r ? r + e : e;
                return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], o] : t._events[h].push(o) : (t._events[h] = o, t._eventsCount++), t
            }

            function a(t, e) {
                0 == --t._eventsCount ? t._events = new s : delete t._events[e]
            }

            function o() {
                this._events = new s, this._eventsCount = 0
            }
            Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (r = !1)), o.prototype.eventNames = function() {
                var t, s, i = [];
                if (0 === this._eventsCount) return i;
                for (s in t = this._events) e.call(t, s) && i.push(r ? s.slice(1) : s);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }, o.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    s = this._events[e];
                if (!s) return [];
                if (s.fn) return [s.fn];
                for (var i = 0, n = s.length, a = new Array(n); i < n; i++) a[i] = s[i].fn;
                return a
            }, o.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    s = this._events[e];
                return s ? s.fn ? 1 : s.length : 0
            }, o.prototype.emit = function(t, e, s, i, n, a) {
                var o = r ? r + t : t;
                if (!this._events[o]) return !1;
                var h, l, u = this._events[o],
                    c = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, e), !0;
                        case 3:
                            return u.fn.call(u.context, e, s), !0;
                        case 4:
                            return u.fn.call(u.context, e, s, i), !0;
                        case 5:
                            return u.fn.call(u.context, e, s, i, n), !0;
                        case 6:
                            return u.fn.call(u.context, e, s, i, n, a), !0
                    }
                    for (l = 1, h = new Array(c - 1); l < c; l++) h[l - 1] = arguments[l];
                    u.fn.apply(u.context, h)
                } else {
                    var d, f = u.length;
                    for (l = 0; l < f; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), c) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, e);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, e, s);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, e, s, i);
                            break;
                        default:
                            if (!h)
                                for (d = 1, h = new Array(c - 1); d < c; d++) h[d - 1] = arguments[d];
                            u[l].fn.apply(u[l].context, h)
                    }
                }
                return !0
            }, o.prototype.on = function(t, e, r) {
                return n(this, t, e, r, !1)
            }, o.prototype.once = function(t, e, r) {
                return n(this, t, e, r, !0)
            }, o.prototype.removeListener = function(t, e, s, i) {
                var n = r ? r + t : t;
                if (!this._events[n]) return this;
                if (!e) return a(this, n), this;
                var o = this._events[n];
                if (o.fn) o.fn !== e || i && !o.once || s && o.context !== s || a(this, n);
                else {
                    for (var h = 0, l = [], u = o.length; h < u; h++)(o[h].fn !== e || i && !o[h].once || s && o[h].context !== s) && l.push(o[h]);
                    l.length ? this._events[n] = 1 === l.length ? l[0] : l : a(this, n)
                }
                return this
            }, o.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && a(this, e)) : (this._events = new s, this._eventsCount = 0), this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, t.exports = o
        },
        7648: t => {
            "use strict";
            var e = Object.prototype.toString,
                r = Math.max,
                s = function(t, e) {
                    for (var r = [], s = 0; s < t.length; s += 1) r[s] = t[s];
                    for (var i = 0; i < e.length; i += 1) r[i + t.length] = e[i];
                    return r
                };
            t.exports = function(t) {
                var i = this;
                if ("function" != typeof i || "[object Function]" !== e.apply(i)) throw new TypeError("Function.prototype.bind called on incompatible " + i);
                for (var n, a = function(t, e) {
                        for (var r = [], s = 1, i = 0; s < t.length; s += 1, i += 1) r[i] = t[s];
                        return r
                    }(arguments), o = r(0, i.length - a.length), h = [], l = 0; l < o; l++) h[l] = "$" + l;
                if (n = Function("binder", "return function (" + function(t, e) {
                        for (var r = "", s = 0; s < t.length; s += 1) r += t[s], s + 1 < t.length && (r += ",");
                        return r
                    }(h) + "){ return binder.apply(this,arguments); }")((function() {
                        if (this instanceof n) {
                            var e = i.apply(this, s(a, arguments));
                            return Object(e) === e ? e : this
                        }
                        return i.apply(t, s(a, arguments))
                    })), i.prototype) {
                    var u = function() {};
                    u.prototype = i.prototype, n.prototype = new u, u.prototype = null
                }
                return n
            }
        },
        8612: (t, e, r) => {
            "use strict";
            var s = r(7648);
            t.exports = Function.prototype.bind || s
        },
        210: (t, e, r) => {
            "use strict";
            var s, i = SyntaxError,
                n = Function,
                a = TypeError,
                o = function(t) {
                    try {
                        return n('"use strict"; return (' + t + ").constructor;")()
                    } catch (t) {}
                },
                h = Object.getOwnPropertyDescriptor;
            if (h) try {
                h({}, "")
            } catch (t) {
                h = null
            }
            var l = function() {
                    throw new a
                },
                u = h ? function() {
                    try {
                        return l
                    } catch (t) {
                        try {
                            return h(arguments, "callee").get
                        } catch (t) {
                            return l
                        }
                    }
                }() : l,
                c = r(1405)(),
                d = r(8185)(),
                f = Object.getPrototypeOf || (d ? function(t) {
                    return t.__proto__
                } : null),
                p = {},
                m = "undefined" != typeof Uint8Array && f ? f(Uint8Array) : s,
                g = {
                    "%AggregateError%": "undefined" == typeof AggregateError ? s : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? s : ArrayBuffer,
                    "%ArrayIteratorPrototype%": c && f ? f([][Symbol.iterator]()) : s,
                    "%AsyncFromSyncIteratorPrototype%": s,
                    "%AsyncFunction%": p,
                    "%AsyncGenerator%": p,
                    "%AsyncGeneratorFunction%": p,
                    "%AsyncIteratorPrototype%": p,
                    "%Atomics%": "undefined" == typeof Atomics ? s : Atomics,
                    "%BigInt%": "undefined" == typeof BigInt ? s : BigInt,
                    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? s : BigInt64Array,
                    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? s : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" == typeof DataView ? s : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": "undefined" == typeof Float32Array ? s : Float32Array,
                    "%Float64Array%": "undefined" == typeof Float64Array ? s : Float64Array,
                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? s : FinalizationRegistry,
                    "%Function%": n,
                    "%GeneratorFunction%": p,
                    "%Int8Array%": "undefined" == typeof Int8Array ? s : Int8Array,
                    "%Int16Array%": "undefined" == typeof Int16Array ? s : Int16Array,
                    "%Int32Array%": "undefined" == typeof Int32Array ? s : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": c && f ? f(f([][Symbol.iterator]())) : s,
                    "%JSON%": "object" == typeof JSON ? JSON : s,
                    "%Map%": "undefined" == typeof Map ? s : Map,
                    "%MapIteratorPrototype%": "undefined" != typeof Map && c && f ? f((new Map)[Symbol.iterator]()) : s,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" == typeof Promise ? s : Promise,
                    "%Proxy%": "undefined" == typeof Proxy ? s : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": "undefined" == typeof Reflect ? s : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" == typeof Set ? s : Set,
                    "%SetIteratorPrototype%": "undefined" != typeof Set && c && f ? f((new Set)[Symbol.iterator]()) : s,
                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? s : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": c && f ? f("" [Symbol.iterator]()) : s,
                    "%Symbol%": c ? Symbol : s,
                    "%SyntaxError%": i,
                    "%ThrowTypeError%": u,
                    "%TypedArray%": m,
                    "%TypeError%": a,
                    "%Uint8Array%": "undefined" == typeof Uint8Array ? s : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? s : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" == typeof Uint16Array ? s : Uint16Array,
                    "%Uint32Array%": "undefined" == typeof Uint32Array ? s : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": "undefined" == typeof WeakMap ? s : WeakMap,
                    "%WeakRef%": "undefined" == typeof WeakRef ? s : WeakRef,
                    "%WeakSet%": "undefined" == typeof WeakSet ? s : WeakSet
                };
            if (f) try {
                null.error
            } catch (t) {
                var y = f(f(t));
                g["%Error.prototype%"] = y
            }
            var _ = function t(e) {
                    var r;
                    if ("%AsyncFunction%" === e) r = o("async function () {}");
                    else if ("%GeneratorFunction%" === e) r = o("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === e) r = o("async function* () {}");
                    else if ("%AsyncGenerator%" === e) {
                        var s = t("%AsyncGeneratorFunction%");
                        s && (r = s.prototype)
                    } else if ("%AsyncIteratorPrototype%" === e) {
                        var i = t("%AsyncGenerator%");
                        i && f && (r = f(i.prototype))
                    }
                    return g[e] = r, r
                },
                x = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                b = r(8612),
                v = r(7642),
                A = b.call(Function.call, Array.prototype.concat),
                T = b.call(Function.apply, Array.prototype.splice),
                E = b.call(Function.call, String.prototype.replace),
                w = b.call(Function.call, String.prototype.slice),
                I = b.call(Function.call, RegExp.prototype.exec),
                R = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                S = /\\(\\)?/g,
                C = function(t, e) {
                    var r, s = t;
                    if (v(x, s) && (s = "%" + (r = x[s])[0] + "%"), v(g, s)) {
                        var n = g[s];
                        if (n === p && (n = _(s)), void 0 === n && !e) throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
                        return {
                            alias: r,
                            name: s,
                            value: n
                        }
                    }
                    throw new i("intrinsic " + t + " does not exist!")
                };
            t.exports = function(t, e) {
                if ("string" != typeof t || 0 === t.length) throw new a("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof e) throw new a('"allowMissing" argument must be a boolean');
                if (null === I(/^%?[^%]*%?$/, t)) throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var r = function(t) {
                        var e = w(t, 0, 1),
                            r = w(t, -1);
                        if ("%" === e && "%" !== r) throw new i("invalid intrinsic syntax, expected closing `%`");
                        if ("%" === r && "%" !== e) throw new i("invalid intrinsic syntax, expected opening `%`");
                        var s = [];
                        return E(t, R, (function(t, e, r, i) {
                            s[s.length] = r ? E(i, S, "$1") : e || t
                        })), s
                    }(t),
                    s = r.length > 0 ? r[0] : "",
                    n = C("%" + s + "%", e),
                    o = n.name,
                    l = n.value,
                    u = !1,
                    c = n.alias;
                c && (s = c[0], T(r, A([0, 1], c)));
                for (var d = 1, f = !0; d < r.length; d += 1) {
                    var p = r[d],
                        m = w(p, 0, 1),
                        y = w(p, -1);
                    if (('"' === m || "'" === m || "`" === m || '"' === y || "'" === y || "`" === y) && m !== y) throw new i("property names with quotes must have matching quotes");
                    if ("constructor" !== p && f || (u = !0), v(g, o = "%" + (s += "." + p) + "%")) l = g[o];
                    else if (null != l) {
                        if (!(p in l)) {
                            if (!e) throw new a("base intrinsic for " + t + " exists, but the property is not available.");
                            return
                        }
                        if (h && d + 1 >= r.length) {
                            var _ = h(l, p);
                            l = (f = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : l[p]
                        } else f = v(l, p), l = l[p];
                        f && !u && (g[o] = l)
                    }
                }
                return l
            }
        },
        7296: (t, e, r) => {
            "use strict";
            var s = r(210)("%Object.getOwnPropertyDescriptor%", !0);
            if (s) try {
                s([], "length")
            } catch (t) {
                s = null
            }
            t.exports = s
        },
        1044: (t, e, r) => {
            "use strict";
            var s = r(210)("%Object.defineProperty%", !0),
                i = function() {
                    if (s) try {
                        return s({}, "a", {
                            value: 1
                        }), !0
                    } catch (t) {
                        return !1
                    }
                    return !1
                };
            i.hasArrayLengthDefineBug = function() {
                if (!i()) return null;
                try {
                    return 1 !== s([], "length", {
                        value: 1
                    }).length
                } catch (t) {
                    return !0
                }
            }, t.exports = i
        },
        8185: t => {
            "use strict";
            var e = {
                    foo: {}
                },
                r = Object;
            t.exports = function() {
                return {
                    __proto__: e
                }.foo === e.foo && !({
                        __proto__: null
                    }
                    instanceof r)
            }
        },
        1405: (t, e, r) => {
            "use strict";
            var s = "undefined" != typeof Symbol && Symbol,
                i = r(5419);
            t.exports = function() {
                return "function" == typeof s && "function" == typeof Symbol && "symbol" == typeof s("foo") && "symbol" == typeof Symbol("bar") && i()
            }
        },
        5419: t => {
            "use strict";
            t.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                    e = Symbol("test"),
                    r = Object(e);
                if ("string" == typeof e) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                for (e in t[e] = 42, t) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                var s = Object.getOwnPropertySymbols(t);
                if (1 !== s.length || s[0] !== e) return !1;
                if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var i = Object.getOwnPropertyDescriptor(t, e);
                    if (42 !== i.value || !0 !== i.enumerable) return !1
                }
                return !0
            }
        },
        7642: t => {
            "use strict";
            var e = {}.hasOwnProperty,
                r = Function.prototype.call;
            t.exports = r.bind ? r.bind(e) : function(t, s) {
                return r.call(e, t, s)
            }
        },
        631: (t, e, r) => {
            var s = "function" == typeof Map && Map.prototype,
                i = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                n = s && i && "function" == typeof i.get ? i.get : null,
                a = s && Map.prototype.forEach,
                o = "function" == typeof Set && Set.prototype,
                h = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                l = o && h && "function" == typeof h.get ? h.get : null,
                u = o && Set.prototype.forEach,
                c = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                p = Boolean.prototype.valueOf,
                m = Object.prototype.toString,
                g = Function.prototype.toString,
                y = String.prototype.match,
                _ = String.prototype.slice,
                x = String.prototype.replace,
                b = String.prototype.toUpperCase,
                v = String.prototype.toLowerCase,
                A = RegExp.prototype.test,
                T = Array.prototype.concat,
                E = Array.prototype.join,
                w = Array.prototype.slice,
                I = Math.floor,
                R = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                S = Object.getOwnPropertySymbols,
                C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                P = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                M = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
                N = Object.prototype.propertyIsEnumerable,
                O = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
                    return t.__proto__
                } : null);

            function B(t, e) {
                if (t === 1 / 0 || t === -1 / 0 || t != t || t && t > -1e3 && t < 1e3 || A.call(/e/, e)) return e;
                var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof t) {
                    var s = t < 0 ? -I(-t) : I(t);
                    if (s !== t) {
                        var i = String(s),
                            n = _.call(e, i.length + 1);
                        return x.call(i, r, "$&_") + "." + x.call(x.call(n, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return x.call(e, r, "$&_")
            }
            var F = r(4654),
                D = F.custom,
                L = H(D) ? D : null;

            function U(t, e, r) {
                var s = "double" === (r.quoteStyle || e) ? '"' : "'";
                return s + t + s
            }

            function k(t) {
                return x.call(String(t), /"/g, "&quot;")
            }

            function G(t) {
                return !("[object Array]" !== $(t) || M && "object" == typeof t && M in t)
            }

            function j(t) {
                return !("[object RegExp]" !== $(t) || M && "object" == typeof t && M in t)
            }

            function H(t) {
                if (P) return t && "object" == typeof t && t instanceof Symbol;
                if ("symbol" == typeof t) return !0;
                if (!t || "object" != typeof t || !C) return !1;
                try {
                    return C.call(t), !0
                } catch (t) {}
                return !1
            }
            t.exports = function t(e, s, i, o) {
                var h = s || {};
                if (X(h, "quoteStyle") && "single" !== h.quoteStyle && "double" !== h.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (X(h, "maxStringLength") && ("number" == typeof h.maxStringLength ? h.maxStringLength < 0 && h.maxStringLength !== 1 / 0 : null !== h.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var m = !X(h, "customInspect") || h.customInspect;
                if ("boolean" != typeof m && "symbol" !== m) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (X(h, "indent") && null !== h.indent && "\t" !== h.indent && !(parseInt(h.indent, 10) === h.indent && h.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (X(h, "numericSeparator") && "boolean" != typeof h.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var b = h.numericSeparator;
                if (void 0 === e) return "undefined";
                if (null === e) return "null";
                if ("boolean" == typeof e) return e ? "true" : "false";
                if ("string" == typeof e) return z(e, h);
                if ("number" == typeof e) {
                    if (0 === e) return 1 / 0 / e > 0 ? "0" : "-0";
                    var A = String(e);
                    return b ? B(e, A) : A
                }
                if ("bigint" == typeof e) {
                    var I = String(e) + "n";
                    return b ? B(e, I) : I
                }
                var S = void 0 === h.depth ? 5 : h.depth;
                if (void 0 === i && (i = 0), i >= S && S > 0 && "object" == typeof e) return G(e) ? "[Array]" : "[Object]";
                var D, V = function(t, e) {
                    var r;
                    if ("\t" === t.indent) r = "\t";
                    else {
                        if (!("number" == typeof t.indent && t.indent > 0)) return null;
                        r = E.call(Array(t.indent + 1), " ")
                    }
                    return {
                        base: r,
                        prev: E.call(Array(e + 1), r)
                    }
                }(h, i);
                if (void 0 === o) o = [];
                else if (W(o, e) >= 0) return "[Circular]";

                function Y(e, r, s) {
                    if (r && (o = w.call(o)).push(r), s) {
                        var n = {
                            depth: h.depth
                        };
                        return X(h, "quoteStyle") && (n.quoteStyle = h.quoteStyle), t(e, n, i + 1, o)
                    }
                    return t(e, h, i + 1, o)
                }
                if ("function" == typeof e && !j(e)) {
                    var tt = function(t) {
                            if (t.name) return t.name;
                            var e = y.call(g.call(t), /^function\s*([\w$]+)/);
                            return e ? e[1] : null
                        }(e),
                        et = J(e, Y);
                    return "[Function" + (tt ? ": " + tt : " (anonymous)") + "]" + (et.length > 0 ? " { " + E.call(et, ", ") + " }" : "")
                }
                if (H(e)) {
                    var rt = P ? x.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : C.call(e);
                    return "object" != typeof e || P ? rt : q(rt)
                }
                if ((D = e) && "object" == typeof D && ("undefined" != typeof HTMLElement && D instanceof HTMLElement || "string" == typeof D.nodeName && "function" == typeof D.getAttribute)) {
                    for (var st = "<" + v.call(String(e.nodeName)), it = e.attributes || [], nt = 0; nt < it.length; nt++) st += " " + it[nt].name + "=" + U(k(it[nt].value), "double", h);
                    return st += ">", e.childNodes && e.childNodes.length && (st += "..."), st + "</" + v.call(String(e.nodeName)) + ">"
                }
                if (G(e)) {
                    if (0 === e.length) return "[]";
                    var at = J(e, Y);
                    return V && ! function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (W(t[e], "\n") >= 0) return !1;
                        return !0
                    }(at) ? "[" + Q(at, V) + "]" : "[ " + E.call(at, ", ") + " ]"
                }
                if (function(t) {
                        return !("[object Error]" !== $(t) || M && "object" == typeof t && M in t)
                    }(e)) {
                    var ot = J(e, Y);
                    return "cause" in Error.prototype || !("cause" in e) || N.call(e, "cause") ? 0 === ot.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + E.call(ot, ", ") + " }" : "{ [" + String(e) + "] " + E.call(T.call("[cause]: " + Y(e.cause), ot), ", ") + " }"
                }
                if ("object" == typeof e && m) {
                    if (L && "function" == typeof e[L] && F) return F(e, {
                        depth: S - i
                    });
                    if ("symbol" !== m && "function" == typeof e.inspect) return e.inspect()
                }
                if (function(t) {
                        if (!n || !t || "object" != typeof t) return !1;
                        try {
                            n.call(t);
                            try {
                                l.call(t)
                            } catch (t) {
                                return !0
                            }
                            return t instanceof Map
                        } catch (t) {}
                        return !1
                    }(e)) {
                    var ht = [];
                    return a && a.call(e, (function(t, r) {
                        ht.push(Y(r, e, !0) + " => " + Y(t, e))
                    })), Z("Map", n.call(e), ht, V)
                }
                if (function(t) {
                        if (!l || !t || "object" != typeof t) return !1;
                        try {
                            l.call(t);
                            try {
                                n.call(t)
                            } catch (t) {
                                return !0
                            }
                            return t instanceof Set
                        } catch (t) {}
                        return !1
                    }(e)) {
                    var lt = [];
                    return u && u.call(e, (function(t) {
                        lt.push(Y(t, e))
                    })), Z("Set", l.call(e), lt, V)
                }
                if (function(t) {
                        if (!c || !t || "object" != typeof t) return !1;
                        try {
                            c.call(t, c);
                            try {
                                d.call(t, d)
                            } catch (t) {
                                return !0
                            }
                            return t instanceof WeakMap
                        } catch (t) {}
                        return !1
                    }(e)) return K("WeakMap");
                if (function(t) {
                        if (!d || !t || "object" != typeof t) return !1;
                        try {
                            d.call(t, d);
                            try {
                                c.call(t, c)
                            } catch (t) {
                                return !0
                            }
                            return t instanceof WeakSet
                        } catch (t) {}
                        return !1
                    }(e)) return K("WeakSet");
                if (function(t) {
                        if (!f || !t || "object" != typeof t) return !1;
                        try {
                            return f.call(t), !0
                        } catch (t) {}
                        return !1
                    }(e)) return K("WeakRef");
                if (function(t) {
                        return !("[object Number]" !== $(t) || M && "object" == typeof t && M in t)
                    }(e)) return q(Y(Number(e)));
                if (function(t) {
                        if (!t || "object" != typeof t || !R) return !1;
                        try {
                            return R.call(t), !0
                        } catch (t) {}
                        return !1
                    }(e)) return q(Y(R.call(e)));
                if (function(t) {
                        return !("[object Boolean]" !== $(t) || M && "object" == typeof t && M in t)
                    }(e)) return q(p.call(e));
                if (function(t) {
                        return !("[object String]" !== $(t) || M && "object" == typeof t && M in t)
                    }(e)) return q(Y(String(e)));
                if ("undefined" != typeof window && e === window) return "{ [object Window] }";
                if (e === r.g) return "{ [object globalThis] }";
                if (! function(t) {
                        return !("[object Date]" !== $(t) || M && "object" == typeof t && M in t)
                    }(e) && !j(e)) {
                    var ut = J(e, Y),
                        ct = O ? O(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                        dt = e instanceof Object ? "" : "null prototype",
                        ft = !ct && M && Object(e) === e && M in e ? _.call($(e), 8, -1) : dt ? "Object" : "",
                        pt = (ct || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (ft || dt ? "[" + E.call(T.call([], ft || [], dt || []), ": ") + "] " : "");
                    return 0 === ut.length ? pt + "{}" : V ? pt + "{" + Q(ut, V) + "}" : pt + "{ " + E.call(ut, ", ") + " }"
                }
                return String(e)
            };
            var V = Object.prototype.hasOwnProperty || function(t) {
                return t in this
            };

            function X(t, e) {
                return V.call(t, e)
            }

            function $(t) {
                return m.call(t)
            }

            function W(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var r = 0, s = t.length; r < s; r++)
                    if (t[r] === e) return r;
                return -1
            }

            function z(t, e) {
                if (t.length > e.maxStringLength) {
                    var r = t.length - e.maxStringLength,
                        s = "... " + r + " more character" + (r > 1 ? "s" : "");
                    return z(_.call(t, 0, e.maxStringLength), e) + s
                }
                return U(x.call(x.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y), "single", e)
            }

            function Y(t) {
                var e = t.charCodeAt(0),
                    r = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    }[e];
                return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + b.call(e.toString(16))
            }

            function q(t) {
                return "Object(" + t + ")"
            }

            function K(t) {
                return t + " { ? }"
            }

            function Z(t, e, r, s) {
                return t + " (" + e + ") {" + (s ? Q(r, s) : E.call(r, ", ")) + "}"
            }

            function Q(t, e) {
                if (0 === t.length) return "";
                var r = "\n" + e.prev + e.base;
                return r + E.call(t, "," + r) + "\n" + e.prev
            }

            function J(t, e) {
                var r = G(t),
                    s = [];
                if (r) {
                    s.length = t.length;
                    for (var i = 0; i < t.length; i++) s[i] = X(t, i) ? e(t[i], t) : ""
                }
                var n, a = "function" == typeof S ? S(t) : [];
                if (P) {
                    n = {};
                    for (var o = 0; o < a.length; o++) n["$" + a[o]] = a[o]
                }
                for (var h in t) X(t, h) && (r && String(Number(h)) === h && h < t.length || P && n["$" + h] instanceof Symbol || (A.call(/[^\w$]/, h) ? s.push(e(h, t) + ": " + e(t[h], t)) : s.push(h + ": " + e(t[h], t))));
                if ("function" == typeof S)
                    for (var l = 0; l < a.length; l++) N.call(t, a[l]) && s.push("[" + e(a[l]) + "]: " + e(t[a[l]], t));
                return s
            }
        },
        7771: (t, e, r) => {
            "use strict";
            var s = r(210),
                i = r(2296),
                n = r(1044)(),
                a = r(7296),
                o = s("%TypeError%"),
                h = s("%Math.floor%");
            t.exports = function(t, e) {
                if ("function" != typeof t) throw new o("`fn` is not a function");
                if ("number" != typeof e || e < 0 || e > 4294967295 || h(e) !== e) throw new o("`length` must be a positive 32-bit integer");
                var r = arguments.length > 2 && !!arguments[2],
                    s = !0,
                    l = !0;
                if ("length" in t && a) {
                    var u = a(t, "length");
                    u && !u.configurable && (s = !1), u && !u.writable && (l = !1)
                }
                return (s || l || !r) && (n ? i(t, "length", e, !0, !0) : i(t, "length", e)), t
            }
        },
        7478: (t, e, r) => {
            "use strict";
            var s = r(210),
                i = r(1924),
                n = r(631),
                a = s("%TypeError%"),
                o = s("%WeakMap%", !0),
                h = s("%Map%", !0),
                l = i("WeakMap.prototype.get", !0),
                u = i("WeakMap.prototype.set", !0),
                c = i("WeakMap.prototype.has", !0),
                d = i("Map.prototype.get", !0),
                f = i("Map.prototype.set", !0),
                p = i("Map.prototype.has", !0),
                m = function(t, e) {
                    for (var r, s = t; null !== (r = s.next); s = r)
                        if (r.key === e) return s.next = r.next, r.next = t.next, t.next = r, r
                };
            t.exports = function() {
                var t, e, r, s = {
                    assert: function(t) {
                        if (!s.has(t)) throw new a("Side channel does not contain " + n(t))
                    },
                    get: function(s) {
                        if (o && s && ("object" == typeof s || "function" == typeof s)) {
                            if (t) return l(t, s)
                        } else if (h) {
                            if (e) return d(e, s)
                        } else if (r) return function(t, e) {
                            var r = m(t, e);
                            return r && r.value
                        }(r, s)
                    },
                    has: function(s) {
                        if (o && s && ("object" == typeof s || "function" == typeof s)) {
                            if (t) return c(t, s)
                        } else if (h) {
                            if (e) return p(e, s)
                        } else if (r) return function(t, e) {
                            return !!m(t, e)
                        }(r, s);
                        return !1
                    },
                    set: function(s, i) {
                        o && s && ("object" == typeof s || "function" == typeof s) ? (t || (t = new o), u(t, s, i)) : h ? (e || (e = new h), f(e, s, i)) : (r || (r = {
                            key: {},
                            next: null
                        }), function(t, e, r) {
                            var s = m(t, e);
                            s ? s.value = r : t.next = {
                                key: e,
                                next: t.next,
                                value: r
                            }
                        }(r, s, i))
                    }
                };
                return s
            }
        },
        2511: function(t, e, r) {
            var s;
            t = r.nmd(t),
                function(i) {
                    e && e.nodeType, t && t.nodeType;
                    var n = "object" == typeof r.g && r.g;
                    n.global !== n && n.window !== n && n.self;
                    var a, o = 2147483647,
                        h = 36,
                        l = 26,
                        u = 38,
                        c = 700,
                        d = /^xn--/,
                        f = /[^\x20-\x7E]/,
                        p = /[\x2E\u3002\uFF0E\uFF61]/g,
                        m = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        g = h - 1,
                        y = Math.floor,
                        _ = String.fromCharCode;

                    function x(t) {
                        throw new RangeError(m[t])
                    }

                    function b(t, e) {
                        for (var r = t.length, s = []; r--;) s[r] = e(t[r]);
                        return s
                    }

                    function v(t, e) {
                        var r = t.split("@"),
                            s = "";
                        return r.length > 1 && (s = r[0] + "@", t = r[1]), s + b((t = t.replace(p, ".")).split("."), e).join(".")
                    }

                    function A(t) {
                        for (var e, r, s = [], i = 0, n = t.length; i < n;)(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < n ? 56320 == (64512 & (r = t.charCodeAt(i++))) ? s.push(((1023 & e) << 10) + (1023 & r) + 65536) : (s.push(e), i--) : s.push(e);
                        return s
                    }

                    function T(t) {
                        return b(t, (function(t) {
                            var e = "";
                            return t > 65535 && (e += _((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + _(t)
                        })).join("")
                    }

                    function E(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                    }

                    function w(t, e, r) {
                        var s = 0;
                        for (t = r ? y(t / c) : t >> 1, t += y(t / e); t > g * l >> 1; s += h) t = y(t / g);
                        return y(s + (g + 1) * t / (t + u))
                    }

                    function I(t) {
                        var e, r, s, i, n, a, u, c, d, f, p, m = [],
                            g = t.length,
                            _ = 0,
                            b = 128,
                            v = 72;
                        for ((r = t.lastIndexOf("-")) < 0 && (r = 0), s = 0; s < r; ++s) t.charCodeAt(s) >= 128 && x("not-basic"), m.push(t.charCodeAt(s));
                        for (i = r > 0 ? r + 1 : 0; i < g;) {
                            for (n = _, a = 1, u = h; i >= g && x("invalid-input"), ((c = (p = t.charCodeAt(i++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : h) >= h || c > y((o - _) / a)) && x("overflow"), _ += c * a, !(c < (d = u <= v ? 1 : u >= v + l ? l : u - v)); u += h) a > y(o / (f = h - d)) && x("overflow"), a *= f;
                            v = w(_ - n, e = m.length + 1, 0 == n), y(_ / e) > o - b && x("overflow"), b += y(_ / e), _ %= e, m.splice(_++, 0, b)
                        }
                        return T(m)
                    }

                    function R(t) {
                        var e, r, s, i, n, a, u, c, d, f, p, m, g, b, v, T = [];
                        for (m = (t = A(t)).length, e = 128, r = 0, n = 72, a = 0; a < m; ++a)(p = t[a]) < 128 && T.push(_(p));
                        for (s = i = T.length, i && T.push("-"); s < m;) {
                            for (u = o, a = 0; a < m; ++a)(p = t[a]) >= e && p < u && (u = p);
                            for (u - e > y((o - r) / (g = s + 1)) && x("overflow"), r += (u - e) * g, e = u, a = 0; a < m; ++a)
                                if ((p = t[a]) < e && ++r > o && x("overflow"), p == e) {
                                    for (c = r, d = h; !(c < (f = d <= n ? 1 : d >= n + l ? l : d - n)); d += h) v = c - f, b = h - f, T.push(_(E(f + v % b, 0))), c = y(v / b);
                                    T.push(_(E(c, 0))), n = w(r, g, s == i), r = 0, ++s
                                }++r, ++e
                        }
                        return T.join("")
                    }
                    a = {
                        version: "1.4.1",
                        ucs2: {
                            decode: A,
                            encode: T
                        },
                        decode: I,
                        encode: R,
                        toASCII: function(t) {
                            return v(t, (function(t) {
                                return f.test(t) ? "xn--" + R(t) : t
                            }))
                        },
                        toUnicode: function(t) {
                            return v(t, (function(t) {
                                return d.test(t) ? I(t.slice(4).toLowerCase()) : t
                            }))
                        }
                    }, void 0 === (s = function() {
                        return a
                    }.call(e, r, e, t)) || (t.exports = s)
                }()
        },
        9532: t => {
            "use strict";
            var e = String.prototype.replace,
                r = /%20/g,
                s = "RFC3986";
            t.exports = {
                default: s,
                formatters: {
                    RFC1738: function(t) {
                        return e.call(t, r, "+")
                    },
                    RFC3986: function(t) {
                        return String(t)
                    }
                },
                RFC1738: "RFC1738",
                RFC3986: s
            }
        },
        5984: (t, e, r) => {
            "use strict";
            var s = r(4730),
                i = r(7325),
                n = r(9532);
            t.exports = {
                formats: n,
                parse: i,
                stringify: s
            }
        },
        7325: (t, e, r) => {
            "use strict";
            var s = r(9368),
                i = Object.prototype.hasOwnProperty,
                n = Array.isArray,
                a = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: s.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                o = function(t) {
                    return t.replace(/&#(\d+);/g, (function(t, e) {
                        return String.fromCharCode(parseInt(e, 10))
                    }))
                },
                h = function(t, e) {
                    return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
                },
                l = function(t, e, r, s) {
                    if (t) {
                        var n = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                            a = /(\[[^[\]]*])/g,
                            o = r.depth > 0 && /(\[[^[\]]*])/.exec(n),
                            l = o ? n.slice(0, o.index) : n,
                            u = [];
                        if (l) {
                            if (!r.plainObjects && i.call(Object.prototype, l) && !r.allowPrototypes) return;
                            u.push(l)
                        }
                        for (var c = 0; r.depth > 0 && null !== (o = a.exec(n)) && c < r.depth;) {
                            if (c += 1, !r.plainObjects && i.call(Object.prototype, o[1].slice(1, -1)) && !r.allowPrototypes) return;
                            u.push(o[1])
                        }
                        return o && u.push("[" + n.slice(o.index) + "]"),
                            function(t, e, r, s) {
                                for (var i = s ? e : h(e, r), n = t.length - 1; n >= 0; --n) {
                                    var a, o = t[n];
                                    if ("[]" === o && r.parseArrays) a = [].concat(i);
                                    else {
                                        a = r.plainObjects ? Object.create(null) : {};
                                        var l = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
                                            u = parseInt(l, 10);
                                        r.parseArrays || "" !== l ? !isNaN(u) && o !== l && String(u) === l && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (a = [])[u] = i : "__proto__" !== l && (a[l] = i) : a = {
                                            0: i
                                        }
                                    }
                                    i = a
                                }
                                return i
                            }(u, e, r, s)
                    }
                };
            t.exports = function(t, e) {
                var r = function(t) {
                    if (!t) return a;
                    if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
                    if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var e = void 0 === t.charset ? a.charset : t.charset;
                    return {
                        allowDots: void 0 === t.allowDots ? a.allowDots : !!t.allowDots,
                        allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : a.allowPrototypes,
                        allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : a.allowSparse,
                        arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : a.arrayLimit,
                        charset: e,
                        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : a.charsetSentinel,
                        comma: "boolean" == typeof t.comma ? t.comma : a.comma,
                        decoder: "function" == typeof t.decoder ? t.decoder : a.decoder,
                        delimiter: "string" == typeof t.delimiter || s.isRegExp(t.delimiter) ? t.delimiter : a.delimiter,
                        depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : a.depth,
                        ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : a.interpretNumericEntities,
                        parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : a.parameterLimit,
                        parseArrays: !1 !== t.parseArrays,
                        plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : a.plainObjects,
                        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : a.strictNullHandling
                    }
                }(e);
                if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};
                for (var u = "string" == typeof t ? function(t, e) {
                        var r, l = {
                                __proto__: null
                            },
                            u = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                            c = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                            d = u.split(e.delimiter, c),
                            f = -1,
                            p = e.charset;
                        if (e.charsetSentinel)
                            for (r = 0; r < d.length; ++r) 0 === d[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[r] ? p = "utf-8" : "utf8=%26%2310003%3B" === d[r] && (p = "iso-8859-1"), f = r, r = d.length);
                        for (r = 0; r < d.length; ++r)
                            if (r !== f) {
                                var m, g, y = d[r],
                                    _ = y.indexOf("]="),
                                    x = -1 === _ ? y.indexOf("=") : _ + 1; - 1 === x ? (m = e.decoder(y, a.decoder, p, "key"), g = e.strictNullHandling ? null : "") : (m = e.decoder(y.slice(0, x), a.decoder, p, "key"), g = s.maybeMap(h(y.slice(x + 1), e), (function(t) {
                                    return e.decoder(t, a.decoder, p, "value")
                                }))), g && e.interpretNumericEntities && "iso-8859-1" === p && (g = o(g)), y.indexOf("[]=") > -1 && (g = n(g) ? [g] : g), i.call(l, m) ? l[m] = s.combine(l[m], g) : l[m] = g
                            }
                        return l
                    }(t, r) : t, c = r.plainObjects ? Object.create(null) : {}, d = Object.keys(u), f = 0; f < d.length; ++f) {
                    var p = d[f],
                        m = l(p, u[p], r, "string" == typeof t);
                    c = s.merge(c, m, r)
                }
                return !0 === r.allowSparse ? c : s.compact(c)
            }
        },
        4730: (t, e, r) => {
            "use strict";
            var s = r(7478),
                i = r(9368),
                n = r(9532),
                a = Object.prototype.hasOwnProperty,
                o = {
                    brackets: function(t) {
                        return t + "[]"
                    },
                    comma: "comma",
                    indices: function(t, e) {
                        return t + "[" + e + "]"
                    },
                    repeat: function(t) {
                        return t
                    }
                },
                h = Array.isArray,
                l = Array.prototype.push,
                u = function(t, e) {
                    l.apply(t, h(e) ? e : [e])
                },
                c = Date.prototype.toISOString,
                d = n.default,
                f = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: i.encode,
                    encodeValuesOnly: !1,
                    format: d,
                    formatter: n.formatters[d],
                    indices: !1,
                    serializeDate: function(t) {
                        return c.call(t)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                p = {},
                m = function t(e, r, n, a, o, l, c, d, m, g, y, _, x, b, v, A) {
                    for (var T, E = e, w = A, I = 0, R = !1; void 0 !== (w = w.get(p)) && !R;) {
                        var S = w.get(e);
                        if (I += 1, void 0 !== S) {
                            if (S === I) throw new RangeError("Cyclic object value");
                            R = !0
                        }
                        void 0 === w.get(p) && (I = 0)
                    }
                    if ("function" == typeof d ? E = d(r, E) : E instanceof Date ? E = y(E) : "comma" === n && h(E) && (E = i.maybeMap(E, (function(t) {
                            return t instanceof Date ? y(t) : t
                        }))), null === E) {
                        if (o) return c && !b ? c(r, f.encoder, v, "key", _) : r;
                        E = ""
                    }
                    if ("string" == typeof(T = E) || "number" == typeof T || "boolean" == typeof T || "symbol" == typeof T || "bigint" == typeof T || i.isBuffer(E)) return c ? [x(b ? r : c(r, f.encoder, v, "key", _)) + "=" + x(c(E, f.encoder, v, "value", _))] : [x(r) + "=" + x(String(E))];
                    var C, P = [];
                    if (void 0 === E) return P;
                    if ("comma" === n && h(E)) b && c && (E = i.maybeMap(E, c)), C = [{
                        value: E.length > 0 ? E.join(",") || null : void 0
                    }];
                    else if (h(d)) C = d;
                    else {
                        var M = Object.keys(E);
                        C = m ? M.sort(m) : M
                    }
                    for (var N = a && h(E) && 1 === E.length ? r + "[]" : r, O = 0; O < C.length; ++O) {
                        var B = C[O],
                            F = "object" == typeof B && void 0 !== B.value ? B.value : E[B];
                        if (!l || null !== F) {
                            var D = h(E) ? "function" == typeof n ? n(N, B) : N : N + (g ? "." + B : "[" + B + "]");
                            A.set(e, I);
                            var L = s();
                            L.set(p, A), u(P, t(F, D, n, a, o, l, "comma" === n && b && h(E) ? null : c, d, m, g, y, _, x, b, v, L))
                        }
                    }
                    return P
                };
            t.exports = function(t, e) {
                var r, i = t,
                    l = function(t) {
                        if (!t) return f;
                        if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                        var e = t.charset || f.charset;
                        if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var r = n.default;
                        if (void 0 !== t.format) {
                            if (!a.call(n.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                            r = t.format
                        }
                        var s = n.formatters[r],
                            i = f.filter;
                        return ("function" == typeof t.filter || h(t.filter)) && (i = t.filter), {
                            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : f.addQueryPrefix,
                            allowDots: void 0 === t.allowDots ? f.allowDots : !!t.allowDots,
                            charset: e,
                            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : f.charsetSentinel,
                            delimiter: void 0 === t.delimiter ? f.delimiter : t.delimiter,
                            encode: "boolean" == typeof t.encode ? t.encode : f.encode,
                            encoder: "function" == typeof t.encoder ? t.encoder : f.encoder,
                            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : f.encodeValuesOnly,
                            filter: i,
                            format: r,
                            formatter: s,
                            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : f.serializeDate,
                            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : f.skipNulls,
                            sort: "function" == typeof t.sort ? t.sort : null,
                            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : f.strictNullHandling
                        }
                    }(e);
                "function" == typeof l.filter ? i = (0, l.filter)("", i) : h(l.filter) && (r = l.filter);
                var c, d = [];
                if ("object" != typeof i || null === i) return "";
                c = e && e.arrayFormat in o ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
                var p = o[c];
                if (e && "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                var g = "comma" === p && e && e.commaRoundTrip;
                r || (r = Object.keys(i)), l.sort && r.sort(l.sort);
                for (var y = s(), _ = 0; _ < r.length; ++_) {
                    var x = r[_];
                    l.skipNulls && null === i[x] || u(d, m(i[x], x, p, g, l.strictNullHandling, l.skipNulls, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, y))
                }
                var b = d.join(l.delimiter),
                    v = !0 === l.addQueryPrefix ? "?" : "";
                return l.charsetSentinel && ("iso-8859-1" === l.charset ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), b.length > 0 ? v + b : ""
            }
        },
        9368: (t, e, r) => {
            "use strict";
            var s = r(9532),
                i = Object.prototype.hasOwnProperty,
                n = Array.isArray,
                a = function() {
                    for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
                    return t
                }(),
                o = function(t, e) {
                    for (var r = e && e.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) void 0 !== t[s] && (r[s] = t[s]);
                    return r
                };
            t.exports = {
                arrayToObject: o,
                assign: function(t, e) {
                    return Object.keys(e).reduce((function(t, r) {
                        return t[r] = e[r], t
                    }), t)
                },
                combine: function(t, e) {
                    return [].concat(t, e)
                },
                compact: function(t) {
                    for (var e = [{
                            obj: {
                                o: t
                            },
                            prop: "o"
                        }], r = [], s = 0; s < e.length; ++s)
                        for (var i = e[s], a = i.obj[i.prop], o = Object.keys(a), h = 0; h < o.length; ++h) {
                            var l = o[h],
                                u = a[l];
                            "object" == typeof u && null !== u && -1 === r.indexOf(u) && (e.push({
                                obj: a,
                                prop: l
                            }), r.push(u))
                        }
                    return function(t) {
                        for (; t.length > 1;) {
                            var e = t.pop(),
                                r = e.obj[e.prop];
                            if (n(r)) {
                                for (var s = [], i = 0; i < r.length; ++i) void 0 !== r[i] && s.push(r[i]);
                                e.obj[e.prop] = s
                            }
                        }
                    }(e), t
                },
                decode: function(t, e, r) {
                    var s = t.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return s.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(s)
                    } catch (t) {
                        return s
                    }
                },
                encode: function(t, e, r, i, n) {
                    if (0 === t.length) return t;
                    var o = t;
                    if ("symbol" == typeof t ? o = Symbol.prototype.toString.call(t) : "string" != typeof t && (o = String(t)), "iso-8859-1" === r) return escape(o).replace(/%u[0-9a-f]{4}/gi, (function(t) {
                        return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
                    }));
                    for (var h = "", l = 0; l < o.length; ++l) {
                        var u = o.charCodeAt(l);
                        45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || n === s.RFC1738 && (40 === u || 41 === u) ? h += o.charAt(l) : u < 128 ? h += a[u] : u < 2048 ? h += a[192 | u >> 6] + a[128 | 63 & u] : u < 55296 || u >= 57344 ? h += a[224 | u >> 12] + a[128 | u >> 6 & 63] + a[128 | 63 & u] : (l += 1, u = 65536 + ((1023 & u) << 10 | 1023 & o.charCodeAt(l)), h += a[240 | u >> 18] + a[128 | u >> 12 & 63] + a[128 | u >> 6 & 63] + a[128 | 63 & u])
                    }
                    return h
                },
                isBuffer: function(t) {
                    return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)))
                },
                isRegExp: function(t) {
                    return "[object RegExp]" === Object.prototype.toString.call(t)
                },
                maybeMap: function(t, e) {
                    if (n(t)) {
                        for (var r = [], s = 0; s < t.length; s += 1) r.push(e(t[s]));
                        return r
                    }
                    return e(t)
                },
                merge: function t(e, r, s) {
                    if (!r) return e;
                    if ("object" != typeof r) {
                        if (n(e)) e.push(r);
                        else {
                            if (!e || "object" != typeof e) return [e, r];
                            (s && (s.plainObjects || s.allowPrototypes) || !i.call(Object.prototype, r)) && (e[r] = !0)
                        }
                        return e
                    }
                    if (!e || "object" != typeof e) return [e].concat(r);
                    var a = e;
                    return n(e) && !n(r) && (a = o(e, s)), n(e) && n(r) ? (r.forEach((function(r, n) {
                        if (i.call(e, n)) {
                            var a = e[n];
                            a && "object" == typeof a && r && "object" == typeof r ? e[n] = t(a, r, s) : e.push(r)
                        } else e[n] = r
                    })), e) : Object.keys(r).reduce((function(e, n) {
                        var a = r[n];
                        return i.call(e, n) ? e[n] = t(e[n], a, s) : e[n] = a, e
                    }), a)
                }
            }
        },
        8575: (t, e, r) => {
            "use strict";
            var s = r(2511);

            function i() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            var n = /^([a-z0-9.+-]+:)/i,
                a = /:[0-9]*$/,
                o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
                h = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                l = ["'"].concat(h),
                u = ["%", "/", "?", ";", "#"].concat(l),
                c = ["/", "?", "#"],
                d = /^[+a-z0-9A-Z_-]{0,63}$/,
                f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                p = {
                    javascript: !0,
                    "javascript:": !0
                },
                m = {
                    javascript: !0,
                    "javascript:": !0
                },
                g = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                y = r(5984);

            function _(t, e, r) {
                if (t && "object" == typeof t && t instanceof i) return t;
                var s = new i;
                return s.parse(t, e, r), s
            }
            i.prototype.parse = function(t, e, r) {
                if ("string" != typeof t) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var i = t.indexOf("?"),
                    a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
                    h = t.split(a);
                h[0] = h[0].replace(/\\/g, "/");
                var _ = t = h.join(a);
                if (_ = _.trim(), !r && 1 === t.split("#").length) {
                    var x = o.exec(_);
                    if (x) return this.path = _, this.href = _, this.pathname = x[1], x[2] ? (this.search = x[2], this.query = e ? y.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                }
                var b = n.exec(_);
                if (b) {
                    var v = (b = b[0]).toLowerCase();
                    this.protocol = v, _ = _.substr(b.length)
                }
                if (r || b || _.match(/^\/\/[^@/]+@[^@/]+/)) {
                    var A = "//" === _.substr(0, 2);
                    !A || b && m[b] || (_ = _.substr(2), this.slashes = !0)
                }
                if (!m[b] && (A || b && !g[b])) {
                    for (var T, E, w = -1, I = 0; I < c.length; I++) - 1 !== (R = _.indexOf(c[I])) && (-1 === w || R < w) && (w = R);
                    for (-1 !== (E = -1 === w ? _.lastIndexOf("@") : _.lastIndexOf("@", w)) && (T = _.slice(0, E), _ = _.slice(E + 1), this.auth = decodeURIComponent(T)), w = -1, I = 0; I < u.length; I++) {
                        var R; - 1 !== (R = _.indexOf(u[I])) && (-1 === w || R < w) && (w = R)
                    } - 1 === w && (w = _.length), this.host = _.slice(0, w), _ = _.slice(w), this.parseHost(), this.hostname = this.hostname || "";
                    var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!S)
                        for (var C = this.hostname.split(/\./), P = (I = 0, C.length); I < P; I++) {
                            var M = C[I];
                            if (M && !M.match(d)) {
                                for (var N = "", O = 0, B = M.length; O < B; O++) M.charCodeAt(O) > 127 ? N += "x" : N += M[O];
                                if (!N.match(d)) {
                                    var F = C.slice(0, I),
                                        D = C.slice(I + 1),
                                        L = M.match(f);
                                    L && (F.push(L[1]), D.unshift(L[2])), D.length && (_ = "/" + D.join(".") + _), this.hostname = F.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = s.toASCII(this.hostname));
                    var U = this.port ? ":" + this.port : "",
                        k = this.hostname || "";
                    this.host = k + U, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== _[0] && (_ = "/" + _))
                }
                if (!p[v])
                    for (I = 0, P = l.length; I < P; I++) {
                        var G = l[I];
                        if (-1 !== _.indexOf(G)) {
                            var j = encodeURIComponent(G);
                            j === G && (j = escape(G)), _ = _.split(G).join(j)
                        }
                    }
                var H = _.indexOf("#"); - 1 !== H && (this.hash = _.substr(H), _ = _.slice(0, H));
                var V = _.indexOf("?");
                if (-1 !== V ? (this.search = _.substr(V), this.query = _.substr(V + 1), e && (this.query = y.parse(this.query)), _ = _.slice(0, V)) : e && (this.search = "", this.query = {}), _ && (this.pathname = _), g[v] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    U = this.pathname || "";
                    var X = this.search || "";
                    this.path = U + X
                }
                return this.href = this.format(), this
            }, i.prototype.format = function() {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "",
                    r = this.pathname || "",
                    s = this.hash || "",
                    i = !1,
                    n = "";
                this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (n = y.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: !1
                }));
                var a = this.search || n && "?" + n || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || g[e]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), s && "#" !== s.charAt(0) && (s = "#" + s), a && "?" !== a.charAt(0) && (a = "?" + a), e + i + (r = r.replace(/[?#]/g, (function(t) {
                    return encodeURIComponent(t)
                }))) + (a = a.replace("#", "%23")) + s
            }, i.prototype.resolve = function(t) {
                return this.resolveObject(_(t, !1, !0)).format()
            }, i.prototype.resolveObject = function(t) {
                if ("string" == typeof t) {
                    var e = new i;
                    e.parse(t, !1, !0), t = e
                }
                for (var r = new i, s = Object.keys(this), n = 0; n < s.length; n++) {
                    var a = s[n];
                    r[a] = this[a]
                }
                if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
                if (t.slashes && !t.protocol) {
                    for (var o = Object.keys(t), h = 0; h < o.length; h++) {
                        var l = o[h];
                        "protocol" !== l && (r[l] = t[l])
                    }
                    return g[r.protocol] && r.hostname && !r.pathname && (r.pathname = "/", r.path = r.pathname), r.href = r.format(), r
                }
                if (t.protocol && t.protocol !== r.protocol) {
                    if (!g[t.protocol]) {
                        for (var u = Object.keys(t), c = 0; c < u.length; c++) {
                            var d = u[c];
                            r[d] = t[d]
                        }
                        return r.href = r.format(), r
                    }
                    if (r.protocol = t.protocol, t.host || m[t.protocol]) r.pathname = t.pathname;
                    else {
                        for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), r.pathname = f.join("/")
                    }
                    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                        var p = r.pathname || "",
                            y = r.search || "";
                        r.path = p + y
                    }
                    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
                }
                var _ = r.pathname && "/" === r.pathname.charAt(0),
                    x = t.host || t.pathname && "/" === t.pathname.charAt(0),
                    b = x || _ || r.host && t.pathname,
                    v = b,
                    A = r.pathname && r.pathname.split("/") || [],
                    T = (f = t.pathname && t.pathname.split("/") || [], r.protocol && !g[r.protocol]);
                if (T && (r.hostname = "", r.port = null, r.host && ("" === A[0] ? A[0] = r.host : A.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), b = b && ("" === f[0] || "" === A[0])), x) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, A = f;
                else if (f.length) A || (A = []), A.pop(), A = A.concat(f), r.search = t.search, r.query = t.query;
                else if (null != t.search) return T && (r.host = A.shift(), r.hostname = r.host, (S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = S.shift(), r.hostname = S.shift(), r.host = r.hostname)), r.search = t.search, r.query = t.query, null === r.pathname && null === r.search || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
                if (!A.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                for (var E = A.slice(-1)[0], w = (r.host || t.host || A.length > 1) && ("." === E || ".." === E) || "" === E, I = 0, R = A.length; R >= 0; R--) "." === (E = A[R]) ? A.splice(R, 1) : ".." === E ? (A.splice(R, 1), I++) : I && (A.splice(R, 1), I--);
                if (!b && !v)
                    for (; I--; I) A.unshift("..");
                !b || "" === A[0] || A[0] && "/" === A[0].charAt(0) || A.unshift(""), w && "/" !== A.join("/").substr(-1) && A.push("");
                var S, C = "" === A[0] || A[0] && "/" === A[0].charAt(0);
                return T && (r.hostname = C ? "" : A.length ? A.shift() : "", r.host = r.hostname, (S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = S.shift(), r.hostname = S.shift(), r.host = r.hostname)), (b = b || r.host && A.length) && !C && A.unshift(""), A.length > 0 ? r.pathname = A.join("/") : (r.pathname = null, r.path = null), null === r.pathname && null === r.search || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
            }, i.prototype.parseHost = function() {
                var t = this.host,
                    e = a.exec(t);
                e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }, e.Qc = _, e.DB = function(t, e) {
                return _(t, !1, !0).resolve(e)
            }, e.WU = function(t) {
                return "string" == typeof t && (t = _(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
            }
        },
        961: (t, e, r) => {
            "use strict";
            r.d(e, {
                de: () => H,
                d7: () => j,
                Ct: () => h,
                Q2: () => c,
                FR: () => V,
                VT: () => d,
                gN: () => a,
                Sf: () => o,
                uz: () => et,
                ew: () => k,
                cU: () => C,
                H2: () => $,
                Ut: () => Y,
                ef: () => Q,
                Gv: () => J,
                TG: () => Z,
                vP: () => W,
                qG: () => x,
                Xp: () => l,
                gy: () => N,
                _l: () => f,
                XN: () => B,
                jU: () => O,
                W4: () => p,
                o2: () => L,
                sx: () => v,
                $m: () => tt
            });
            var s = r(1851);
            const i = {
                loader: s.nw.LoadParser,
                resolver: s.nw.ResolveParser,
                cache: s.nw.CacheParser,
                detection: s.nw.DetectionParser
            };
            s.Rw.handle(s.nw.Asset, (t => {
                const e = t.ref;
                Object.entries(i).filter((([t]) => !!e[t])).forEach((([t, r]) => s.Rw.add(Object.assign(e[t], {
                    extension: e[t].extension ? ? r
                }))))
            }), (t => {
                const e = t.ref;
                Object.keys(i).filter((t => !!e[t])).forEach((t => s.Rw.remove(e[t])))
            }));
            class n {
                constructor(t, e = !1) {
                    this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e
                }
                add(t) {
                    t.forEach((t => {
                        this._assetList.push(t)
                    })), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next()
                }
                async _next() {
                    if (this._assetList.length && this._isActive) {
                        this._isLoading = !0;
                        const t = [],
                            e = Math.min(this._assetList.length, this._maxConcurrent);
                        for (let r = 0; r < e; r++) t.push(this._assetList.pop());
                        await this._loader.load(t), this._isLoading = !1, this._next()
                    }
                }
                get active() {
                    return this._isActive
                }
                set active(t) {
                    this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next())
                }
            }

            function a(t, e) {
                const r = t.split("?")[0],
                    i = s.P6.path.extname(r).toLowerCase();
                return Array.isArray(e) ? e.includes(i) : i === e
            }
            const o = (t, e, r = !1) => (Array.isArray(t) || (t = [t]), e ? t.map((t => "string" == typeof t || r ? e(t) : t)) : t),
                h = new class {
                    constructor() {
                        this._parsers = [], this._cache = new Map, this._cacheMap = new Map
                    }
                    reset() {
                        this._cacheMap.clear(), this._cache.clear()
                    }
                    has(t) {
                        return this._cache.has(t)
                    }
                    get(t) {
                        const e = this._cache.get(t);
                        return e || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), e
                    }
                    set(t, e) {
                        const r = o(t);
                        let i;
                        for (let t = 0; t < this.parsers.length; t++) {
                            const s = this.parsers[t];
                            if (s.test(e)) {
                                i = s.getCacheableAssets(r, e);
                                break
                            }
                        }
                        i || (i = {}, r.forEach((t => {
                            i[t] = e
                        })));
                        const n = Object.keys(i),
                            a = {
                                cacheKeys: n,
                                keys: r
                            };
                        if (r.forEach((t => {
                                this._cacheMap.set(t, a)
                            })), n.forEach((t => {
                                this._cache.has(t) && this._cache.get(t) !== e && console.warn("[Cache] already has key:", t), this._cache.set(t, i[t])
                            })), e instanceof s.xE) {
                            const t = e;
                            r.forEach((e => {
                                t.baseTexture !== s.xE.EMPTY.baseTexture && s.VL.addToCache(t.baseTexture, e), s.xE.addToCache(t, e)
                            }))
                        }
                    }
                    remove(t) {
                        if (!this._cacheMap.has(t)) return void console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
                        const e = this._cacheMap.get(t);
                        e.cacheKeys.forEach((t => {
                            this._cache.delete(t)
                        })), e.keys.forEach((t => {
                            this._cacheMap.delete(t)
                        }))
                    }
                    get parsers() {
                        return this._parsers
                    }
                },
                l = t => !Array.isArray(t);
            class u {
                constructor() {
                    this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
                        set: (t, e, r) => (this._parsersValidated = !1, t[e] = r, !0)
                    }), this.promiseCache = {}
                }
                reset() {
                    this._parsersValidated = !1, this.promiseCache = {}
                }
                _getLoadPromiseAndParser(t, e) {
                    const r = {
                        promise: null,
                        parser: null
                    };
                    return r.promise = (async () => {
                        let s = null,
                            i = null;
                        if (e.loadParser && (i = this._parserHash[e.loadParser], i || console.warn(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)), !i) {
                            for (let r = 0; r < this.parsers.length; r++) {
                                const s = this.parsers[r];
                                if (s.load && s.test ? .(t, e, this)) {
                                    i = s;
                                    break
                                }
                            }
                            if (!i) return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null
                        }
                        s = await i.load(t, e, this), r.parser = i;
                        for (let t = 0; t < this.parsers.length; t++) {
                            const i = this.parsers[t];
                            i.parse && i.parse && await (i.testParse ? .(s, e, this)) && (s = await i.parse(s, e, this) || s, r.parser = i)
                        }
                        return s
                    })(), r
                }
                async load(t, e) {
                    this._parsersValidated || this._validateParsers();
                    let r = 0;
                    const i = {},
                        n = l(t),
                        a = o(t, (t => ({
                            alias: [t],
                            src: t
                        }))),
                        h = a.length,
                        u = a.map((async t => {
                            const n = s.P6.path.toAbsolute(t.src);
                            if (!i[t.src]) try {
                                this.promiseCache[n] || (this.promiseCache[n] = this._getLoadPromiseAndParser(n, t)), i[t.src] = await this.promiseCache[n].promise, e && e(++r / h)
                            } catch (e) {
                                throw delete this.promiseCache[n], delete i[t.src], new Error(`[Loader.load] Failed to load ${n}.\n${e}`)
                            }
                        }));
                    return await Promise.all(u), n ? i[a[0].src] : i
                }
                async unload(t) {
                    const e = o(t, (t => ({
                        alias: [t],
                        src: t
                    }))).map((async t => {
                        const e = s.P6.path.toAbsolute(t.src),
                            r = this.promiseCache[e];
                        if (r) {
                            const s = await r.promise;
                            delete this.promiseCache[e], r.parser ? .unload ? .(s, t, this)
                        }
                    }));
                    await Promise.all(e)
                }
                _validateParsers() {
                    this._parsersValidated = !0, this._parserHash = this._parsers.filter((t => t.name)).reduce(((t, e) => (t[e.name] && console.warn(`[Assets] loadParser name conflict "${e.name}"`), { ...t,
                        [e.name]: e
                    })), {})
                }
            }
            var c = (t => (t[t.Low = 0] = "Low", t[t.Normal = 1] = "Normal", t[t.High = 2] = "High", t))(c || {});

            function d(t, e) {
                if (Array.isArray(e)) {
                    for (const r of e)
                        if (t.startsWith(`data:${r}`)) return !0;
                    return !1
                }
                return t.startsWith(`data:${e}`)
            }
            const f = {
                extension: {
                    type: s.nw.LoadParser,
                    priority: c.Low
                },
                name: "loadJson",
                test: t => d(t, "application/json") || a(t, ".json"),
                load: async t => await (await s.Xd.ADAPTER.fetch(t)).json()
            };
            s.Rw.add(f);
            const p = {
                name: "loadTxt",
                extension: {
                    type: s.nw.LoadParser,
                    priority: c.Low
                },
                test: t => d(t, "text/plain") || a(t, ".txt"),
                load: async t => await (await s.Xd.ADAPTER.fetch(t)).text()
            };
            s.Rw.add(p);
            const m = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
                g = [".ttf", ".otf", ".woff", ".woff2"],
                y = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
                _ = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;

            function x(t) {
                const e = s.P6.path.extname(t),
                    r = s.P6.path.basename(t, e).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((t => t.charAt(0).toUpperCase() + t.slice(1)));
                let i = r.length > 0;
                for (const t of r)
                    if (!t.match(_)) {
                        i = !1;
                        break
                    }
                let n = r.join(" ");
                return i || (n = `"${n.replace(/[\\"]/g,"\\$&")}"`), n
            }
            const b = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/,
                v = {
                    extension: {
                        type: s.nw.LoadParser,
                        priority: c.Low
                    },
                    name: "loadWebFont",
                    test: t => d(t, y) || a(t, g),
                    async load(t, e) {
                        const r = s.Xd.ADAPTER.getFontFaceSet();
                        if (r) {
                            const s = [],
                                n = e.data ? .family ? ? x(t),
                                a = e.data ? .weights ? .filter((t => m.includes(t))) ? ? ["normal"],
                                o = e.data ? ? {};
                            for (let e = 0; e < a.length; e++) {
                                const h = a[e],
                                    l = new FontFace(n, `url(${i=t,b.test(i)?i:encodeURI(i)})`, { ...o,
                                        weight: h
                                    });
                                await l.load(), r.add(l), s.push(l)
                            }
                            return 1 === s.length ? s[0] : s
                        }
                        var i;
                        return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null
                    },
                    unload(t) {
                        (Array.isArray(t) ? t : [t]).forEach((t => s.Xd.ADAPTER.getFontFaceSet().delete(t)))
                    }
                };
            s.Rw.add(v);
            let A = null;
            class T extends Worker {
                constructor() {
                    A || (A = URL.createObjectURL(new Blob(['(function() {\n  "use strict";\n  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";\n  async function checkImageBitmap() {\n    try {\n      if (typeof createImageBitmap != "function")\n        return !1;\n      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);\n      return imageBitmap.width === 1 && imageBitmap.height === 1;\n    } catch {\n      return !1;\n    }\n  }\n  checkImageBitmap().then((result) => {\n    self.postMessage(result);\n  });\n})();\n'], {
                        type: "application/javascript"
                    }))), super(A)
                }
            }
            T.revokeObjectURL = function() {
                A && (URL.revokeObjectURL(A), A = null)
            };
            let E = null;
            class w extends Worker {
                constructor() {
                    E || (E = URL.createObjectURL(new Blob(['(function() {\n  "use strict";\n  async function loadImageBitmap(url) {\n    const response = await fetch(url);\n    if (!response.ok)\n      throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);\n    const imageBlob = await response.blob();\n    return await createImageBitmap(imageBlob);\n  }\n  self.onmessage = async (event) => {\n    try {\n      const imageBitmap = await loadImageBitmap(event.data.data[0]);\n      self.postMessage({\n        data: imageBitmap,\n        uuid: event.data.uuid,\n        id: event.data.id\n      }, [imageBitmap]);\n    } catch (e) {\n      self.postMessage({\n        error: e,\n        uuid: event.data.uuid,\n        id: event.data.id\n      });\n    }\n  };\n})();\n'], {
                        type: "application/javascript"
                    }))), super(E)
                }
            }
            w.revokeObjectURL = function() {
                E && (URL.revokeObjectURL(E), E = null)
            };
            let I, R = 0;
            const S = new class {
                constructor() {
                    this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {}
                }
                isImageBitmapSupported() {
                    return void 0 !== this._isImageBitmapSupported || (this._isImageBitmapSupported = new Promise((t => {
                        const e = new T;
                        e.addEventListener("message", (r => {
                            e.terminate(), T.revokeObjectURL(), t(r.data)
                        }))
                    }))), this._isImageBitmapSupported
                }
                loadImageBitmap(t) {
                    return this._run("loadImageBitmap", [t])
                }
                async _initWorkers() {
                    this._initialized || (this._initialized = !0)
                }
                getWorker() {
                    void 0 === I && (I = navigator.hardwareConcurrency || 4);
                    let t = this.workerPool.pop();
                    return !t && this._createdWorkers < I && (this._createdWorkers++, t = new w, t.addEventListener("message", (t => {
                        this.complete(t.data), this.returnWorker(t.target), this.next()
                    }))), t
                }
                returnWorker(t) {
                    this.workerPool.push(t)
                }
                complete(t) {
                    void 0 !== t.error ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null
                }
                async _run(t, e) {
                    await this._initWorkers();
                    const r = new Promise(((r, s) => {
                        this.queue.push({
                            id: t,
                            arguments: e,
                            resolve: r,
                            reject: s
                        })
                    }));
                    return this.next(), r
                }
                next() {
                    if (!this.queue.length) return;
                    const t = this.getWorker();
                    if (!t) return;
                    const e = this.queue.pop(),
                        r = e.id;
                    this.resolveHash[R] = {
                        resolve: e.resolve,
                        reject: e.reject
                    }, t.postMessage({
                        data: e.arguments,
                        uuid: R++,
                        id: r
                    })
                }
            };

            function C(t, e, r) {
                t.resource.internal = !0;
                const i = new s.xE(t),
                    n = () => {
                        delete e.promiseCache[r], h.has(r) && h.remove(r)
                    };
                return i.baseTexture.once("destroyed", (() => {
                    r in e.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."), n())
                })), i.once("destroyed", (() => {
                    t.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), n())
                })), i
            }
            const P = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
                M = ["image/jpeg", "image/png", "image/webp", "image/avif"];
            async function N(t) {
                const e = await s.Xd.ADAPTER.fetch(t);
                if (!e.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);
                const r = await e.blob();
                return await createImageBitmap(r)
            }
            const O = {
                name: "loadTextures",
                extension: {
                    type: s.nw.LoadParser,
                    priority: c.High
                },
                config: {
                    preferWorkers: !0,
                    preferCreateImageBitmap: !0,
                    crossOrigin: "anonymous"
                },
                test: t => d(t, M) || a(t, P),
                async load(t, e, r) {
                    const i = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
                    let n;
                    n = i ? this.config.preferWorkers && await S.isImageBitmapSupported() ? await S.loadImageBitmap(t) : await N(t) : await new Promise(((e, r) => {
                        const s = new Image;
                        s.crossOrigin = this.config.crossOrigin, s.src = t, s.complete ? e(s) : (s.onload = () => e(s), s.onerror = t => r(t))
                    }));
                    const a = { ...e.data
                    };
                    a.resolution ? ? (a.resolution = s.P6.getResolutionOfUrl(t)), i && void 0 === a.resourceOptions ? .ownsImageBitmap && (a.resourceOptions = { ...a.resourceOptions
                    }, a.resourceOptions.ownsImageBitmap = !0);
                    const o = new s.VL(n, a);
                    return o.resource.src = t, C(o, r, t)
                },
                unload(t) {
                    t.destroy(!0)
                }
            };
            s.Rw.add(O);
            const B = {
                extension: {
                    type: s.nw.LoadParser,
                    priority: c.High
                },
                name: "loadSVG",
                test: t => d(t, "image/svg+xml") || a(t, ".svg"),
                testParse: async t => s.pX.test(t),
                async parse(t, e, r) {
                    const i = new s.pX(t, e ? .data ? .resourceOptions);
                    await i.load();
                    const n = new s.VL(i, {
                        resolution: s.P6.getResolutionOfUrl(t),
                        ...e ? .data
                    });
                    return n.resource.src = e.src, C(n, r, e.src)
                },
                load: async (t, e) => (await s.Xd.ADAPTER.fetch(t)).text(),
                unload: O.unload
            };
            s.Rw.add(B);
            const F = [".mp4", ".m4v", ".webm", ".ogv"],
                D = ["video/mp4", "video/webm", "video/ogg"],
                L = {
                    name: "loadVideo",
                    extension: {
                        type: s.nw.LoadParser,
                        priority: c.High
                    },
                    config: {
                        defaultAutoPlay: !0,
                        defaultUpdateFPS: 0,
                        defaultLoop: !1,
                        defaultMuted: !1,
                        defaultPlaysinline: !0
                    },
                    test: t => d(t, D) || a(t, F),
                    async load(t, e, r) {
                        let i;
                        const n = await (await s.Xd.ADAPTER.fetch(t)).blob(),
                            a = URL.createObjectURL(n);
                        try {
                            const n = {
                                    autoPlay: this.config.defaultAutoPlay,
                                    updateFPS: this.config.defaultUpdateFPS,
                                    loop: this.config.defaultLoop,
                                    muted: this.config.defaultMuted,
                                    playsinline: this.config.defaultPlaysinline,
                                    ...e ? .data ? .resourceOptions,
                                    autoLoad : !0
                                },
                                o = new s.eH(a, n);
                            await o.load();
                            const h = new s.VL(o, {
                                alphaMode: await s.P6.detectVideoAlphaMode(),
                                resolution: s.P6.getResolutionOfUrl(t),
                                ...e ? .data
                            });
                            h.resource.src = t, i = C(h, r, t), i.baseTexture.once("destroyed", (() => {
                                URL.revokeObjectURL(a)
                            }))
                        } catch (t) {
                            throw URL.revokeObjectURL(a), t
                        }
                        return i
                    },
                    unload(t) {
                        t.destroy(!0)
                    }
                };

            function U(t, e, r, s, i) {
                const n = e[r];
                for (let a = 0; a < n.length; a++) {
                    const o = n[a];
                    r < e.length - 1 ? U(t.replace(s[r], o), e, r + 1, s, i) : i.push(t.replace(s[r], o))
                }
            }

            function k(t) {
                const e = t.match(/\{(.*?)\}/g),
                    r = [];
                if (e) {
                    const s = [];
                    e.forEach((t => {
                        const e = t.substring(1, t.length - 1).split(",");
                        s.push(e)
                    })), U(t, s, 0, e, r)
                } else r.push(t);
                return r
            }
            s.Rw.add(L);
            class G {
                constructor() {
                    this._defaultBundleIdentifierOptions = {
                        connector: "-",
                        createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
                        extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
                    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {}
                }
                setBundleIdentifier(t) {
                    if (this._bundleIdConnector = t.connector ? ? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ? ? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ? ? this._extractAssetIdFromBundle, "bar" !== this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar"))) throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")
                }
                prefer(...t) {
                    t.forEach((t => {
                        this._preferredOrder.push(t), t.priority || (t.priority = Object.keys(t.params))
                    })), this._resolverHash = {}
                }
                set basePath(t) {
                    this._basePath = t
                }
                get basePath() {
                    return this._basePath
                }
                set rootPath(t) {
                    this._rootPath = t
                }
                get rootPath() {
                    return this._rootPath
                }
                get parsers() {
                    return this._parsers
                }
                reset() {
                    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null
                }
                setDefaultSearchParams(t) {
                    if ("string" == typeof t) this._defaultSearchParams = t;
                    else {
                        const e = t;
                        this._defaultSearchParams = Object.keys(e).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
                    }
                }
                getAlias(t) {
                    const {
                        alias: e,
                        name: r,
                        src: s,
                        srcs: i
                    } = t;
                    return o(e || r || s || i, (t => "string" == typeof t ? t : Array.isArray(t) ? t.map((t => t ? .src ? ? t ? .srcs ? ? t)) : t ? .src || t ? .srcs ? t.src ? ? t.srcs : t), !0)
                }
                addManifest(t) {
                    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((t => {
                        this.addBundle(t.name, t.assets)
                    }))
                }
                addBundle(t, e) {
                    const r = [];
                    Array.isArray(e) ? e.forEach((e => {
                        const s = e.src ? ? e.srcs,
                            i = e.alias ? ? e.name;
                        let n;
                        if ("string" == typeof i) {
                            const e = this._createBundleAssetId(t, i);
                            r.push(e), n = [i, e]
                        } else {
                            const e = i.map((e => this._createBundleAssetId(t, e)));
                            r.push(...e), n = [...i, ...e]
                        }
                        this.add({ ...e,
                            alias: n,
                            src: s
                        })
                    })) : Object.keys(e).forEach((s => {
                        const i = [s, this._createBundleAssetId(t, s)];
                        if ("string" == typeof e[s]) this.add({
                            alias: i,
                            src: e[s]
                        });
                        else if (Array.isArray(e[s])) this.add({
                            alias: i,
                            src: e[s]
                        });
                        else {
                            const t = e[s],
                                r = t.src ? ? t.srcs;
                            this.add({ ...t,
                                alias: i,
                                src: Array.isArray(r) ? r : [r]
                            })
                        }
                        r.push(...i)
                    })), this._bundles[t] = r
                }
                add(t, e, r, i, n) {
                    const a = [];
                    let h;
                    "string" == typeof t || Array.isArray(t) && "string" == typeof t[0] ? (s.P6.deprecation("7.2.0", "Assets.add now uses an object instead of individual parameters.\nPlease use Assets.add({ alias, src, data, format, loadParser }) instead."), a.push({
                        alias: t,
                        src: e,
                        data: r,
                        format: i,
                        loadParser: n
                    })) : Array.isArray(t) ? a.push(...t) : a.push(t), h = t => {
                        this.hasKey(t) && console.warn(`[Resolver] already has key: ${t} overwriting`)
                    }, o(a).forEach((t => {
                        const {
                            src: e,
                            srcs: r
                        } = t;
                        let {
                            data: s,
                            format: i,
                            loadParser: n
                        } = t;
                        const a = o(e || r).map((t => "string" == typeof t ? k(t) : Array.isArray(t) ? t : [t])),
                            l = this.getAlias(t);
                        Array.isArray(l) ? l.forEach(h) : h(l);
                        const u = [];
                        a.forEach((t => {
                            t.forEach((t => {
                                let e = {};
                                if ("object" != typeof t) {
                                    e.src = t;
                                    for (let r = 0; r < this._parsers.length; r++) {
                                        const s = this._parsers[r];
                                        if (s.test(t)) {
                                            e = s.parse(t);
                                            break
                                        }
                                    }
                                } else s = t.data ? ? s, i = t.format ? ? i, n = t.loadParser ? ? n, e = { ...e,
                                    ...t
                                };
                                if (!l) throw new Error(`[Resolver] alias is undefined for this asset: ${e.src}`);
                                e = this.buildResolvedAsset(e, {
                                    aliases: l,
                                    data: s,
                                    format: i,
                                    loadParser: n
                                }), u.push(e)
                            }))
                        })), l.forEach((t => {
                            this._assetMap[t] = u
                        }))
                    }))
                }
                resolveBundle(t) {
                    const e = l(t);
                    t = o(t);
                    const r = {};
                    return t.forEach((t => {
                        const e = this._bundles[t];
                        if (e) {
                            const s = this.resolve(e),
                                i = {};
                            for (const e in s) {
                                const r = s[e];
                                i[this._extractAssetIdFromBundle(t, e)] = r
                            }
                            r[t] = i
                        }
                    })), e ? r[t[0]] : r
                }
                resolveUrl(t) {
                    const e = this.resolve(t);
                    if ("string" != typeof t) {
                        const t = {};
                        for (const r in e) t[r] = e[r].src;
                        return t
                    }
                    return e.src
                }
                resolve(t) {
                    const e = l(t);
                    t = o(t);
                    const r = {};
                    return t.forEach((t => {
                        if (!this._resolverHash[t])
                            if (this._assetMap[t]) {
                                let e = this._assetMap[t];
                                const r = e[0],
                                    s = this._getPreferredOrder(e);
                                s ? .priority.forEach((t => {
                                    s.params[t].forEach((r => {
                                        const s = e.filter((e => !!e[t] && e[t] === r));
                                        s.length && (e = s)
                                    }))
                                })), this._resolverHash[t] = e[0] ? ? r
                            } else this._resolverHash[t] = this.buildResolvedAsset({
                                alias: [t],
                                src: t
                            }, {});
                        r[t] = this._resolverHash[t]
                    })), e ? r[t[0]] : r
                }
                hasKey(t) {
                    return !!this._assetMap[t]
                }
                hasBundle(t) {
                    return !!this._bundles[t]
                }
                _getPreferredOrder(t) {
                    for (let e = 0; e < t.length; e++) {
                        const e = t[0],
                            r = this._preferredOrder.find((t => t.params.format.includes(e.format)));
                        if (r) return r
                    }
                    return this._preferredOrder[0]
                }
                _appendDefaultSearchParams(t) {
                    return this._defaultSearchParams ? `${t}${/\?/.test(t)?"&":"?"}${this._defaultSearchParams}` : t
                }
                buildResolvedAsset(t, e) {
                    const {
                        aliases: r,
                        data: i,
                        loadParser: n,
                        format: a
                    } = e;
                    return (this._basePath || this._rootPath) && (t.src = s.P6.path.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = r ? ? t.alias ? ? [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = { ...i || {},
                        ...t.data
                    }, t.loadParser = n ? ? t.loadParser, t.format = a ? ? s.P6.path.extname(t.src).slice(1), t.srcs = t.src, t.name = t.alias, t
                }
            }
            class j {
                constructor() {
                    this._detections = [], this._initialized = !1, this.resolver = new G, this.loader = new u, this.cache = h, this._backgroundLoader = new n(this.loader), this._backgroundLoader.active = !0, this.reset()
                }
                async init(t = {}) {
                    if (this._initialized) return void console.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
                    if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
                        let e = t.manifest;
                        "string" == typeof e && (e = await this.load(e)), this.resolver.addManifest(e)
                    }
                    const e = t.texturePreference ? .resolution ? ? 1,
                        r = "number" == typeof e ? [e] : e,
                        s = await this._detectFormats({
                            preferredFormats: t.texturePreference ? .format,
                            skipDetections: t.skipDetections,
                            detections: this._detections
                        });
                    this.resolver.prefer({
                        params: {
                            format: s,
                            resolution: r
                        }
                    }), t.preferences && this.setPreferences(t.preferences)
                }
                add(t, e, r, s, i) {
                    this.resolver.add(t, e, r, s, i)
                }
                async load(t, e) {
                    this._initialized || await this.init();
                    const r = l(t),
                        s = o(t).map((t => {
                            if ("string" != typeof t) {
                                const e = this.resolver.getAlias(t);
                                return e.some((t => !this.resolver.hasKey(t))) && this.add(t), Array.isArray(e) ? e[0] : e
                            }
                            return this.resolver.hasKey(t) || this.add({
                                alias: t,
                                src: t
                            }), t
                        })),
                        i = this.resolver.resolve(s),
                        n = await this._mapLoadToResolve(i, e);
                    return r ? n[s[0]] : n
                }
                addBundle(t, e) {
                    this.resolver.addBundle(t, e)
                }
                async loadBundle(t, e) {
                    this._initialized || await this.init();
                    let r = !1;
                    "string" == typeof t && (r = !0, t = [t]);
                    const s = this.resolver.resolveBundle(t),
                        i = {},
                        n = Object.keys(s);
                    let a = 0,
                        o = 0;
                    const h = () => {
                            e ? .(++a / o)
                        },
                        l = n.map((t => {
                            const e = s[t];
                            return o += Object.keys(e).length, this._mapLoadToResolve(e, h).then((e => {
                                i[t] = e
                            }))
                        }));
                    return await Promise.all(l), r ? i[t[0]] : i
                }
                async backgroundLoad(t) {
                    this._initialized || await this.init(), "string" == typeof t && (t = [t]);
                    const e = this.resolver.resolve(t);
                    this._backgroundLoader.add(Object.values(e))
                }
                async backgroundLoadBundle(t) {
                    this._initialized || await this.init(), "string" == typeof t && (t = [t]);
                    const e = this.resolver.resolveBundle(t);
                    Object.values(e).forEach((t => {
                        this._backgroundLoader.add(Object.values(t))
                    }))
                }
                reset() {
                    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1
                }
                get(t) {
                    if ("string" == typeof t) return h.get(t);
                    const e = {};
                    for (let r = 0; r < t.length; r++) e[r] = h.get(t[r]);
                    return e
                }
                async _mapLoadToResolve(t, e) {
                    const r = Object.values(t),
                        s = Object.keys(t);
                    this._backgroundLoader.active = !1;
                    const i = await this.loader.load(r, e);
                    this._backgroundLoader.active = !0;
                    const n = {};
                    return r.forEach(((t, e) => {
                        const r = i[t.src],
                            a = [t.src];
                        t.alias && a.push(...t.alias), n[s[e]] = r, h.set(a, r)
                    })), n
                }
                async unload(t) {
                    this._initialized || await this.init();
                    const e = o(t).map((t => "string" != typeof t ? t.src : t)),
                        r = this.resolver.resolve(e);
                    await this._unloadFromResolved(r)
                }
                async unloadBundle(t) {
                    this._initialized || await this.init(), t = o(t);
                    const e = this.resolver.resolveBundle(t),
                        r = Object.keys(e).map((t => this._unloadFromResolved(e[t])));
                    await Promise.all(r)
                }
                async _unloadFromResolved(t) {
                    const e = Object.values(t);
                    e.forEach((t => {
                        h.remove(t.src)
                    })), await this.loader.unload(e)
                }
                async _detectFormats(t) {
                    let e = [];
                    t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
                    for (const r of t.detections) t.skipDetections || await r.test() ? e = await r.add(e) : t.skipDetections || (e = await r.remove(e));
                    return e = e.filter(((t, r) => e.indexOf(t) === r)), e
                }
                get detections() {
                    return this._detections
                }
                get preferWorkers() {
                    return O.config.preferWorkers
                }
                set preferWorkers(t) {
                    s.P6.deprecation("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({
                        preferWorkers: t
                    })
                }
                setPreferences(t) {
                    this.loader.parsers.forEach((e => {
                        e.config && Object.keys(e.config).filter((e => e in t)).forEach((r => {
                            e.config[r] = t[r]
                        }))
                    }))
                }
            }
            const H = new j;
            s.Rw.handleByList(s.nw.LoadParser, H.loader.parsers).handleByList(s.nw.ResolveParser, H.resolver.parsers).handleByList(s.nw.CacheParser, H.cache.parsers).handleByList(s.nw.DetectionParser, H.detections);
            const V = {
                extension: s.nw.CacheParser,
                test: t => Array.isArray(t) && t.every((t => t instanceof s.xE)),
                getCacheableAssets: (t, e) => {
                    const r = {};
                    return t.forEach((t => {
                        e.forEach(((e, s) => {
                            r[t + (0 === s ? "" : s + 1)] = e
                        }))
                    })), r
                }
            };
            async function X(t) {
                if ("Image" in globalThis) return new Promise((e => {
                    const r = new Image;
                    r.onload = () => {
                        e(!0)
                    }, r.onerror = () => {
                        e(!1)
                    }, r.src = t
                }));
                if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
                    try {
                        const e = await (await fetch(t)).blob();
                        await createImageBitmap(e)
                    } catch {
                        return !1
                    }
                    return !0
                }
                return !1
            }
            s.Rw.add(V);
            const $ = {
                extension: {
                    type: s.nw.DetectionParser,
                    priority: 1
                },
                test: async () => X("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
                add: async t => [...t, "avif"],
                remove: async t => t.filter((t => "avif" !== t))
            };
            s.Rw.add($);
            const W = {
                extension: {
                    type: s.nw.DetectionParser,
                    priority: 0
                },
                test: async () => X("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
                add: async t => [...t, "webp"],
                remove: async t => t.filter((t => "webp" !== t))
            };
            s.Rw.add(W);
            const z = ["png", "jpg", "jpeg"],
                Y = {
                    extension: {
                        type: s.nw.DetectionParser,
                        priority: -1
                    },
                    test: () => Promise.resolve(!0),
                    add: async t => [...t, ...z],
                    remove: async t => t.filter((t => !z.includes(t)))
                };
            s.Rw.add(Y);
            const q = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;

            function K(t) {
                return !q && "" !== document.createElement("video").canPlayType(t)
            }
            const Z = {
                extension: {
                    type: s.nw.DetectionParser,
                    priority: 0
                },
                test: async () => K("video/webm"),
                add: async t => [...t, "webm"],
                remove: async t => t.filter((t => "webm" !== t))
            };
            s.Rw.add(Z);
            const Q = {
                extension: {
                    type: s.nw.DetectionParser,
                    priority: 0
                },
                test: async () => K("video/mp4"),
                add: async t => [...t, "mp4", "m4v"],
                remove: async t => t.filter((t => "mp4" !== t && "m4v" !== t))
            };
            s.Rw.add(Q);
            const J = {
                extension: {
                    type: s.nw.DetectionParser,
                    priority: 0
                },
                test: async () => K("video/ogg"),
                add: async t => [...t, "ogv"],
                remove: async t => t.filter((t => "ogv" !== t))
            };
            s.Rw.add(J);
            const tt = {
                extension: s.nw.ResolveParser,
                test: O.test,
                parse: t => ({
                    resolution: parseFloat(s.Xd.RETINA_PREFIX.exec(t) ? .[1] ? ? "1"),
                    format: s.P6.path.extname(t).slice(1),
                    src: t
                })
            };
            s.Rw.add(tt);
            const et = (t, e) => {
                const r = e.split("?")[1];
                return r && (t += `?${r}`), t
            }
        },
        7110: (t, e, r) => {
            "use strict";
            r.d(e, {
                I: () => M
            });
            var s = {
                    grad: .9,
                    turn: 360,
                    rad: 360 / (2 * Math.PI)
                },
                i = function(t) {
                    return "string" == typeof t ? t.length > 0 : "number" == typeof t
                },
                n = function(t, e, r) {
                    return void 0 === e && (e = 0), void 0 === r && (r = Math.pow(10, e)), Math.round(r * t) / r + 0
                },
                a = function(t, e, r) {
                    return void 0 === e && (e = 0), void 0 === r && (r = 1), t > r ? r : t > e ? t : e
                },
                o = function(t) {
                    return (t = isFinite(t) ? t % 360 : 0) > 0 ? t : t + 360
                },
                h = function(t) {
                    return {
                        r: a(t.r, 0, 255),
                        g: a(t.g, 0, 255),
                        b: a(t.b, 0, 255),
                        a: a(t.a)
                    }
                },
                l = function(t) {
                    return {
                        r: n(t.r),
                        g: n(t.g),
                        b: n(t.b),
                        a: n(t.a, 3)
                    }
                },
                u = /^#([0-9a-f]{3,8})$/i,
                c = function(t) {
                    var e = t.toString(16);
                    return e.length < 2 ? "0" + e : e
                },
                d = function(t) {
                    var e = t.r,
                        r = t.g,
                        s = t.b,
                        i = t.a,
                        n = Math.max(e, r, s),
                        a = n - Math.min(e, r, s),
                        o = a ? n === e ? (r - s) / a : n === r ? 2 + (s - e) / a : 4 + (e - r) / a : 0;
                    return {
                        h: 60 * (o < 0 ? o + 6 : o),
                        s: n ? a / n * 100 : 0,
                        v: n / 255 * 100,
                        a: i
                    }
                },
                f = function(t) {
                    var e = t.h,
                        r = t.s,
                        s = t.v,
                        i = t.a;
                    e = e / 360 * 6, r /= 100, s /= 100;
                    var n = Math.floor(e),
                        a = s * (1 - r),
                        o = s * (1 - (e - n) * r),
                        h = s * (1 - (1 - e + n) * r),
                        l = n % 6;
                    return {
                        r: 255 * [s, o, a, a, h, s][l],
                        g: 255 * [h, s, s, o, a, a][l],
                        b: 255 * [a, a, h, s, s, o][l],
                        a: i
                    }
                },
                p = function(t) {
                    return {
                        h: o(t.h),
                        s: a(t.s, 0, 100),
                        l: a(t.l, 0, 100),
                        a: a(t.a)
                    }
                },
                m = function(t) {
                    return {
                        h: n(t.h),
                        s: n(t.s),
                        l: n(t.l),
                        a: n(t.a, 3)
                    }
                },
                g = function(t) {
                    return f((r = (e = t).s, {
                        h: e.h,
                        s: (r *= ((s = e.l) < 50 ? s : 100 - s) / 100) > 0 ? 2 * r / (s + r) * 100 : 0,
                        v: s + r,
                        a: e.a
                    }));
                    var e, r, s
                },
                y = function(t) {
                    return {
                        h: (e = d(t)).h,
                        s: (i = (200 - (r = e.s)) * (s = e.v) / 100) > 0 && i < 200 ? r * s / 100 / (i <= 100 ? i : 200 - i) * 100 : 0,
                        l: i / 2,
                        a: e.a
                    };
                    var e, r, s, i
                },
                _ = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                x = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                b = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                A = {
                    string: [
                        [function(t) {
                            var e = u.exec(t);
                            return e ? (t = e[1]).length <= 4 ? {
                                r: parseInt(t[0] + t[0], 16),
                                g: parseInt(t[1] + t[1], 16),
                                b: parseInt(t[2] + t[2], 16),
                                a: 4 === t.length ? n(parseInt(t[3] + t[3], 16) / 255, 2) : 1
                            } : 6 === t.length || 8 === t.length ? {
                                r: parseInt(t.substr(0, 2), 16),
                                g: parseInt(t.substr(2, 2), 16),
                                b: parseInt(t.substr(4, 2), 16),
                                a: 8 === t.length ? n(parseInt(t.substr(6, 2), 16) / 255, 2) : 1
                            } : null : null
                        }, "hex"],
                        [function(t) {
                            var e = b.exec(t) || v.exec(t);
                            return e ? e[2] !== e[4] || e[4] !== e[6] ? null : h({
                                r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
                                g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
                                b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
                                a: void 0 === e[7] ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
                            }) : null
                        }, "rgb"],
                        [function(t) {
                            var e = _.exec(t) || x.exec(t);
                            if (!e) return null;
                            var r, i, n = p({
                                h: (r = e[1], i = e[2], void 0 === i && (i = "deg"), Number(r) * (s[i] || 1)),
                                s: Number(e[3]),
                                l: Number(e[4]),
                                a: void 0 === e[5] ? 1 : Number(e[5]) / (e[6] ? 100 : 1)
                            });
                            return g(n)
                        }, "hsl"]
                    ],
                    object: [
                        [function(t) {
                            var e = t.r,
                                r = t.g,
                                s = t.b,
                                n = t.a,
                                a = void 0 === n ? 1 : n;
                            return i(e) && i(r) && i(s) ? h({
                                r: Number(e),
                                g: Number(r),
                                b: Number(s),
                                a: Number(a)
                            }) : null
                        }, "rgb"],
                        [function(t) {
                            var e = t.h,
                                r = t.s,
                                s = t.l,
                                n = t.a,
                                a = void 0 === n ? 1 : n;
                            if (!i(e) || !i(r) || !i(s)) return null;
                            var o = p({
                                h: Number(e),
                                s: Number(r),
                                l: Number(s),
                                a: Number(a)
                            });
                            return g(o)
                        }, "hsl"],
                        [function(t) {
                            var e = t.h,
                                r = t.s,
                                s = t.v,
                                n = t.a,
                                h = void 0 === n ? 1 : n;
                            if (!i(e) || !i(r) || !i(s)) return null;
                            var l = function(t) {
                                return {
                                    h: o(t.h),
                                    s: a(t.s, 0, 100),
                                    v: a(t.v, 0, 100),
                                    a: a(t.a)
                                }
                            }({
                                h: Number(e),
                                s: Number(r),
                                v: Number(s),
                                a: Number(h)
                            });
                            return f(l)
                        }, "hsv"]
                    ]
                },
                T = function(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var s = e[r][0](t);
                        if (s) return [s, e[r][1]]
                    }
                    return [null, void 0]
                },
                E = function(t, e) {
                    var r = y(t);
                    return {
                        h: r.h,
                        s: a(r.s + 100 * e, 0, 100),
                        l: r.l,
                        a: r.a
                    }
                },
                w = function(t) {
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 / 255
                },
                I = function(t, e) {
                    var r = y(t);
                    return {
                        h: r.h,
                        s: r.s,
                        l: a(r.l + 100 * e, 0, 100),
                        a: r.a
                    }
                },
                R = function() {
                    function t(t) {
                        this.parsed = function(t) {
                            return "string" == typeof t ? T(t.trim(), A.string) : "object" == typeof t && null !== t ? T(t, A.object) : [null, void 0]
                        }(t)[0], this.rgba = this.parsed || {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        }
                    }
                    return t.prototype.isValid = function() {
                        return null !== this.parsed
                    }, t.prototype.brightness = function() {
                        return n(w(this.rgba), 2)
                    }, t.prototype.isDark = function() {
                        return w(this.rgba) < .5
                    }, t.prototype.isLight = function() {
                        return w(this.rgba) >= .5
                    }, t.prototype.toHex = function() {
                        return e = (t = l(this.rgba)).r, r = t.g, s = t.b, a = (i = t.a) < 1 ? c(n(255 * i)) : "", "#" + c(e) + c(r) + c(s) + a;
                        var t, e, r, s, i, a
                    }, t.prototype.toRgb = function() {
                        return l(this.rgba)
                    }, t.prototype.toRgbString = function() {
                        return e = (t = l(this.rgba)).r, r = t.g, s = t.b, (i = t.a) < 1 ? "rgba(" + e + ", " + r + ", " + s + ", " + i + ")" : "rgb(" + e + ", " + r + ", " + s + ")";
                        var t, e, r, s, i
                    }, t.prototype.toHsl = function() {
                        return m(y(this.rgba))
                    }, t.prototype.toHslString = function() {
                        return e = (t = m(y(this.rgba))).h, r = t.s, s = t.l, (i = t.a) < 1 ? "hsla(" + e + ", " + r + "%, " + s + "%, " + i + ")" : "hsl(" + e + ", " + r + "%, " + s + "%)";
                        var t, e, r, s, i
                    }, t.prototype.toHsv = function() {
                        return t = d(this.rgba), {
                            h: n(t.h),
                            s: n(t.s),
                            v: n(t.v),
                            a: n(t.a, 3)
                        };
                        var t
                    }, t.prototype.invert = function() {
                        return S({
                            r: 255 - (t = this.rgba).r,
                            g: 255 - t.g,
                            b: 255 - t.b,
                            a: t.a
                        });
                        var t
                    }, t.prototype.saturate = function(t) {
                        return void 0 === t && (t = .1), S(E(this.rgba, t))
                    }, t.prototype.desaturate = function(t) {
                        return void 0 === t && (t = .1), S(E(this.rgba, -t))
                    }, t.prototype.grayscale = function() {
                        return S(E(this.rgba, -1))
                    }, t.prototype.lighten = function(t) {
                        return void 0 === t && (t = .1), S(I(this.rgba, t))
                    }, t.prototype.darken = function(t) {
                        return void 0 === t && (t = .1), S(I(this.rgba, -t))
                    }, t.prototype.rotate = function(t) {
                        return void 0 === t && (t = 15), this.hue(this.hue() + t)
                    }, t.prototype.alpha = function(t) {
                        return "number" == typeof t ? S({
                            r: (e = this.rgba).r,
                            g: e.g,
                            b: e.b,
                            a: t
                        }) : n(this.rgba.a, 3);
                        var e
                    }, t.prototype.hue = function(t) {
                        var e = y(this.rgba);
                        return "number" == typeof t ? S({
                            h: t,
                            s: e.s,
                            l: e.l,
                            a: e.a
                        }) : n(e.h)
                    }, t.prototype.isEqual = function(t) {
                        return this.toHex() === S(t).toHex()
                    }, t
                }(),
                S = function(t) {
                    return t instanceof R ? t : new R(t)
                },
                C = [];
            ! function(t) {
                t.forEach((function(t) {
                    C.indexOf(t) < 0 && (t(R, A), C.push(t))
                }))
            }([function(t, e) {
                var r = {
                        white: "#ffffff",
                        bisque: "#ffe4c4",
                        blue: "#0000ff",
                        cadetblue: "#5f9ea0",
                        chartreuse: "#7fff00",
                        chocolate: "#d2691e",
                        coral: "#ff7f50",
                        antiquewhite: "#faebd7",
                        aqua: "#00ffff",
                        azure: "#f0ffff",
                        whitesmoke: "#f5f5f5",
                        papayawhip: "#ffefd5",
                        plum: "#dda0dd",
                        blanchedalmond: "#ffebcd",
                        black: "#000000",
                        gold: "#ffd700",
                        goldenrod: "#daa520",
                        gainsboro: "#dcdcdc",
                        cornsilk: "#fff8dc",
                        cornflowerblue: "#6495ed",
                        burlywood: "#deb887",
                        aquamarine: "#7fffd4",
                        beige: "#f5f5dc",
                        crimson: "#dc143c",
                        cyan: "#00ffff",
                        darkblue: "#00008b",
                        darkcyan: "#008b8b",
                        darkgoldenrod: "#b8860b",
                        darkkhaki: "#bdb76b",
                        darkgray: "#a9a9a9",
                        darkgreen: "#006400",
                        darkgrey: "#a9a9a9",
                        peachpuff: "#ffdab9",
                        darkmagenta: "#8b008b",
                        darkred: "#8b0000",
                        darkorchid: "#9932cc",
                        darkorange: "#ff8c00",
                        darkslateblue: "#483d8b",
                        gray: "#808080",
                        darkslategray: "#2f4f4f",
                        darkslategrey: "#2f4f4f",
                        deeppink: "#ff1493",
                        deepskyblue: "#00bfff",
                        wheat: "#f5deb3",
                        firebrick: "#b22222",
                        floralwhite: "#fffaf0",
                        ghostwhite: "#f8f8ff",
                        darkviolet: "#9400d3",
                        magenta: "#ff00ff",
                        green: "#008000",
                        dodgerblue: "#1e90ff",
                        grey: "#808080",
                        honeydew: "#f0fff0",
                        hotpink: "#ff69b4",
                        blueviolet: "#8a2be2",
                        forestgreen: "#228b22",
                        lawngreen: "#7cfc00",
                        indianred: "#cd5c5c",
                        indigo: "#4b0082",
                        fuchsia: "#ff00ff",
                        brown: "#a52a2a",
                        maroon: "#800000",
                        mediumblue: "#0000cd",
                        lightcoral: "#f08080",
                        darkturquoise: "#00ced1",
                        lightcyan: "#e0ffff",
                        ivory: "#fffff0",
                        lightyellow: "#ffffe0",
                        lightsalmon: "#ffa07a",
                        lightseagreen: "#20b2aa",
                        linen: "#faf0e6",
                        mediumaquamarine: "#66cdaa",
                        lemonchiffon: "#fffacd",
                        lime: "#00ff00",
                        khaki: "#f0e68c",
                        mediumseagreen: "#3cb371",
                        limegreen: "#32cd32",
                        mediumspringgreen: "#00fa9a",
                        lightskyblue: "#87cefa",
                        lightblue: "#add8e6",
                        midnightblue: "#191970",
                        lightpink: "#ffb6c1",
                        mistyrose: "#ffe4e1",
                        moccasin: "#ffe4b5",
                        mintcream: "#f5fffa",
                        lightslategray: "#778899",
                        lightslategrey: "#778899",
                        navajowhite: "#ffdead",
                        navy: "#000080",
                        mediumvioletred: "#c71585",
                        powderblue: "#b0e0e6",
                        palegoldenrod: "#eee8aa",
                        oldlace: "#fdf5e6",
                        paleturquoise: "#afeeee",
                        mediumturquoise: "#48d1cc",
                        mediumorchid: "#ba55d3",
                        rebeccapurple: "#663399",
                        lightsteelblue: "#b0c4de",
                        mediumslateblue: "#7b68ee",
                        thistle: "#d8bfd8",
                        tan: "#d2b48c",
                        orchid: "#da70d6",
                        mediumpurple: "#9370db",
                        purple: "#800080",
                        pink: "#ffc0cb",
                        skyblue: "#87ceeb",
                        springgreen: "#00ff7f",
                        palegreen: "#98fb98",
                        red: "#ff0000",
                        yellow: "#ffff00",
                        slateblue: "#6a5acd",
                        lavenderblush: "#fff0f5",
                        peru: "#cd853f",
                        palevioletred: "#db7093",
                        violet: "#ee82ee",
                        teal: "#008080",
                        slategray: "#708090",
                        slategrey: "#708090",
                        aliceblue: "#f0f8ff",
                        darkseagreen: "#8fbc8f",
                        darkolivegreen: "#556b2f",
                        greenyellow: "#adff2f",
                        seagreen: "#2e8b57",
                        seashell: "#fff5ee",
                        tomato: "#ff6347",
                        silver: "#c0c0c0",
                        sienna: "#a0522d",
                        lavender: "#e6e6fa",
                        lightgreen: "#90ee90",
                        orange: "#ffa500",
                        orangered: "#ff4500",
                        steelblue: "#4682b4",
                        royalblue: "#4169e1",
                        turquoise: "#40e0d0",
                        yellowgreen: "#9acd32",
                        salmon: "#fa8072",
                        saddlebrown: "#8b4513",
                        sandybrown: "#f4a460",
                        rosybrown: "#bc8f8f",
                        darksalmon: "#e9967a",
                        lightgoldenrodyellow: "#fafad2",
                        snow: "#fffafa",
                        lightgrey: "#d3d3d3",
                        lightgray: "#d3d3d3",
                        dimgray: "#696969",
                        dimgrey: "#696969",
                        olivedrab: "#6b8e23",
                        olive: "#808000"
                    },
                    s = {};
                for (var i in r) s[r[i]] = i;
                var n = {};
                t.prototype.toName = function(e) {
                    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
                    var i, a, o = s[this.toHex()];
                    if (o) return o;
                    if (null == e ? void 0 : e.closest) {
                        var h = this.toRgb(),
                            l = 1 / 0,
                            u = "black";
                        if (!n.length)
                            for (var c in r) n[c] = new t(r[c]).toRgb();
                        for (var d in r) {
                            var f = (i = h, a = n[d], Math.pow(i.r - a.r, 2) + Math.pow(i.g - a.g, 2) + Math.pow(i.b - a.b, 2));
                            f < l && (l = f, u = d)
                        }
                        return u
                    }
                }, e.string.push([function(e) {
                    var s = e.toLowerCase(),
                        i = "transparent" === s ? "#0000" : r[s];
                    return i ? new t(i).toRgb() : null
                }, "name"])
            }]);
            const P = class t {
                constructor(t = 16777215) {
                    this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t
                }
                get red() {
                    return this._components[0]
                }
                get green() {
                    return this._components[1]
                }
                get blue() {
                    return this._components[2]
                }
                get alpha() {
                    return this._components[3]
                }
                setValue(t) {
                    return this.value = t, this
                }
                set value(e) {
                    if (e instanceof t) this._value = this.cloneSource(e._value), this._int = e._int, this._components.set(e._components);
                    else {
                        if (null === e) throw new Error("Cannot set PIXI.Color#value to null");
                        (null === this._value || !this.isSourceEqual(this._value, e)) && (this.normalize(e), this._value = this.cloneSource(e))
                    }
                }
                get value() {
                    return this._value
                }
                cloneSource(t) {
                    return "string" == typeof t || "number" == typeof t || t instanceof Number || null === t ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : "object" == typeof t && null !== t ? { ...t
                    } : t
                }
                isSourceEqual(t, e) {
                    const r = typeof t;
                    if (r !== typeof e) return !1;
                    if ("number" === r || "string" === r || t instanceof Number) return t === e;
                    if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length === e.length && t.every(((t, r) => t === e[r]));
                    if (null !== t && null !== e) {
                        const r = Object.keys(t),
                            s = Object.keys(e);
                        return r.length === s.length && r.every((r => t[r] === e[r]))
                    }
                    return t === e
                }
                toRgba() {
                    const [t, e, r, s] = this._components;
                    return {
                        r: t,
                        g: e,
                        b: r,
                        a: s
                    }
                }
                toRgb() {
                    const [t, e, r] = this._components;
                    return {
                        r: t,
                        g: e,
                        b: r
                    }
                }
                toRgbaString() {
                    const [t, e, r] = this.toUint8RgbArray();
                    return `rgba(${t},${e},${r},${this.alpha})`
                }
                toUint8RgbArray(t) {
                    const [e, r, s] = this._components;
                    return (t = t ? ? [])[0] = Math.round(255 * e), t[1] = Math.round(255 * r), t[2] = Math.round(255 * s), t
                }
                toRgbArray(t) {
                    t = t ? ? [];
                    const [e, r, s] = this._components;
                    return t[0] = e, t[1] = r, t[2] = s, t
                }
                toNumber() {
                    return this._int
                }
                toLittleEndianNumber() {
                    const t = this._int;
                    return (t >> 16) + (65280 & t) + ((255 & t) << 16)
                }
                multiply(e) {
                    const [r, s, i, n] = t.temp.setValue(e)._components;
                    return this._components[0] *= r, this._components[1] *= s, this._components[2] *= i, this._components[3] *= n, this.refreshInt(), this._value = null, this
                }
                premultiply(t, e = !0) {
                    return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this.refreshInt(), this._value = null, this
                }
                toPremultiplied(t, e = !0) {
                    if (1 === t) return (255 << 24) + this._int;
                    if (0 === t) return e ? 0 : this._int;
                    let r = this._int >> 16 & 255,
                        s = this._int >> 8 & 255,
                        i = 255 & this._int;
                    return e && (r = r * t + .5 | 0, s = s * t + .5 | 0, i = i * t + .5 | 0), (255 * t << 24) + (r << 16) + (s << 8) + i
                }
                toHex() {
                    const t = this._int.toString(16);
                    return `#${"000000".substring(0,6-t.length)+t}`
                }
                toHexa() {
                    const t = Math.round(255 * this._components[3]).toString(16);
                    return this.toHex() + "00".substring(0, 2 - t.length) + t
                }
                setAlpha(t) {
                    return this._components[3] = this._clamp(t), this
                }
                round(t) {
                    const [e, r, s] = this._components;
                    return this._components[0] = Math.round(e * t) / t, this._components[1] = Math.round(r * t) / t, this._components[2] = Math.round(s * t) / t, this.refreshInt(), this._value = null, this
                }
                toArray(t) {
                    t = t ? ? [];
                    const [e, r, s, i] = this._components;
                    return t[0] = e, t[1] = r, t[2] = s, t[3] = i, t
                }
                normalize(e) {
                    let r, s, i, n;
                    if (("number" == typeof e || e instanceof Number) && e >= 0 && e <= 16777215) r = (e >> 16 & 255) / 255, s = (e >> 8 & 255) / 255, i = (255 & e) / 255, n = 1;
                    else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) e = this._clamp(e), [r, s, i, n = 1] = e;
                    else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) e = this._clamp(e, 0, 255), [r, s, i, n = 255] = e, r /= 255, s /= 255, i /= 255, n /= 255;
                    else if ("string" == typeof e || "object" == typeof e) {
                        if ("string" == typeof e) {
                            const r = t.HEX_PATTERN.exec(e);
                            r && (e = `#${r[2]}`)
                        }
                        const a = S(e);
                        a.isValid() && (({
                            r,
                            g: s,
                            b: i,
                            a: n
                        } = a.rgba), r /= 255, s /= 255, i /= 255)
                    }
                    if (void 0 === r) throw new Error(`Unable to convert color ${e}`);
                    this._components[0] = r, this._components[1] = s, this._components[2] = i, this._components[3] = n, this.refreshInt()
                }
                refreshInt() {
                    this._clamp(this._components);
                    const [t, e, r] = this._components;
                    this._int = (255 * t << 16) + (255 * e << 8) + (255 * r | 0)
                }
                _clamp(t, e = 0, r = 1) {
                    return "number" == typeof t ? Math.min(Math.max(t, e), r) : (t.forEach(((s, i) => {
                        t[i] = Math.min(Math.max(s, e), r)
                    })), t)
                }
            };
            P.shared = new P, P.temp = new P, P.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
            let M = P
        },
        7361: (t, e, r) => {
            "use strict";
            r.d(e, {
                A7: () => x,
                G5: () => v,
                I2: () => h,
                N3: () => i,
                Nt: () => f,
                T$: () => a,
                UN: () => y,
                V0: () => n,
                V3: () => b,
                Vi: () => s,
                WB: () => p,
                aH: () => d,
                cB: () => _,
                iw: () => m,
                lg: () => o,
                mr: () => A,
                oT: () => c,
                sp: () => l,
                vK: () => u,
                yl: () => g
            });
            var s = (t => (t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2", t))(s || {}),
                i = (t => (t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS", t))(i || {}),
                n = (t => (t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL", t))(n || {}),
                a = (t => (t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR", t))(a || {}),
                o = (t => (t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", t))(o || {}),
                h = (t => (t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", t))(h || {}),
                l = (t => (t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", t))(l || {}),
                u = (t => (t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT", t))(u || {}),
                c = (t => (t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT", t))(c || {}),
                d = (t => (t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR", t))(d || {}),
                f = (t => (t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", t))(f || {}),
                p = (t => (t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL", t))(p || {}),
                m = (t => (t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", t))(m || {}),
                g = (t => (t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT", t))(g || {}),
                y = (t => (t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL", t))(y || {}),
                _ = (t => (t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp", t))(_ || {}),
                x = (t => (t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE", t[t.COLOR = 4] = "COLOR", t))(x || {}),
                b = (t => (t[t.RED = 1] = "RED", t[t.GREEN = 2] = "GREEN", t[t.BLUE = 4] = "BLUE", t[t.ALPHA = 8] = "ALPHA", t))(b || {}),
                v = (t => (t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH", t))(v || {}),
                A = (t => (t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", t))(A || {})
        },
        1851: (t, e, r) => {
            "use strict";
            r.d(e, {
                iw: () => s.iw,
                M4: () => Be,
                $N: () => Fe,
                ah: () => E,
                T$: () => s.T$,
                V0: () => s.V0,
                mr: () => s.mr,
                YP: () => nt,
                bg: () => ct,
                jd: () => ut,
                VL: () => b,
                a$: () => v,
                JZ: () => P,
                Bv: () => rt,
                Zk: () => Q,
                Sj: () => at,
                Ie: () => J,
                ZQ: () => i.ZQ,
                lW: () => T,
                qm: () => y,
                P: () => Pe,
                yl: () => s.yl,
                V3: () => s.V3,
                Y8: () => De,
                Cd: () => M.Cd,
                Il: () => a.I,
                lH: () => ht,
                TA: () => Ue,
                ZX: () => M.ZX,
                lg: () => s.lg,
                Vi: () => s.Vi,
                Pj: () => M.Pj,
                nw: () => o.n,
                I2: () => s.I2,
                wn: () => it,
                jV: () => vt,
                kV: () => Et,
                AI: () => lt,
                WB: () => Rt,
                UN: () => s.UN,
                tT: () => wt,
                Ei: () => Kt,
                fy: () => xe,
                zV: () => $t,
                wG: () => C,
                TO: () => Ct,
                W1: () => qt,
                e_: () => f,
                _w: () => ke,
                PA: () => dt,
                A7: () => s.A7,
                KI: () => s.WB,
                G5: () => s.G5,
                HI: () => Ot,
                zj: () => Bt,
                y3: () => M.y3,
                XR: () => Se,
                bO: () => tt,
                i0: () => Me,
                AB: () => M.AB,
                _b: () => M._b,
                cB: () => s.cB,
                hN: () => jt,
                E9: () => M.E9,
                mg: () => M.mg,
                $r: () => Y,
                NW: () => Ht,
                lD: () => xt,
                ud: () => bt,
                jl: () => M.jl,
                N3: () => s.N3,
                Ae: () => M.Ae,
                TI: () => yt,
                uW: () => _t,
                J$: () => Yt,
                Th: () => Oe,
                _z: () => g,
                c9: () => M.c9,
                RC: () => m,
                oT: () => s.oT,
                aH: () => s.aH,
                HS: () => M.HS,
                pX: () => je,
                id: () => kt,
                ex: () => Z,
                p: () => de,
                z9: () => Nt,
                fD: () => fe,
                ZM: () => d,
                zI: () => me,
                Ld: () => Gt,
                Od: () => ge,
                sp: () => s.sp,
                vK: () => s.vK,
                xE: () => gt,
                wr: () => _e,
                UX: () => Mt,
                CT: () => be,
                aF: () => ft,
                vB: () => Te.vB,
                Sb: () => Te.Sb,
                wx: () => M.wx,
                k7: () => Xe,
                oR: () => ve,
                uF: () => Te.uF,
                oo: () => K,
                q4: () => $e,
                eH: () => Ve,
                ls: () => Ae,
                Rv: () => h,
                Nt: () => s.Nt,
                e6: () => we,
                pb: () => p,
                a7: () => c,
                TF: () => ne,
                Y9: () => Re,
                kP: () => Ie,
                Rw: () => o.R,
                qw: () => ee,
                K0: () => oe,
                Kc: () => U,
                DL: () => ae,
                Lv: () => M.Lv,
                tq: () => i.tq,
                Xd: () => i.Xd,
                sg: () => N,
                O2: () => le,
                P6: () => n
            });
            var s = r(7361),
                i = r(6075),
                n = r(8902),
                a = r(7110),
                o = r(463);
            class h {
                constructor(t) {
                    "number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
                }
                get int8View() {
                    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
                }
                get uint8View() {
                    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
                }
                get int16View() {
                    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
                }
                get uint16View() {
                    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
                }
                get int32View() {
                    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
                }
                view(t) {
                    return this[`${t}View`]
                }
                destroy() {
                    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
                }
                static sizeOf(t) {
                    switch (t) {
                        case "int8":
                        case "uint8":
                            return 1;
                        case "int16":
                        case "uint16":
                            return 2;
                        case "int32":
                        case "uint32":
                        case "float32":
                            return 4;
                        default:
                            throw new Error(`${t} isn't a valid view type`)
                    }
                }
            }
            const l = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

            function u(t) {
                let e = "";
                for (let r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += `if(test == ${r}.0){}`);
                return e
            }

            function c(t, e) {
                if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                const r = e.createShader(e.FRAGMENT_SHADER);
                for (;;) {
                    const s = l.replace(/%forloop%/gi, u(t));
                    if (e.shaderSource(r, s), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
                    t = t / 2 | 0
                }
                return t
            }
            class d {
                constructor() {
                    this.data = 0, this.blendMode = s.T$.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
                }
                get blend() {
                    return !!(1 & this.data)
                }
                set blend(t) {
                    !!(1 & this.data) !== t && (this.data ^= 1)
                }
                get offsets() {
                    return !!(2 & this.data)
                }
                set offsets(t) {
                    !!(2 & this.data) !== t && (this.data ^= 2)
                }
                get culling() {
                    return !!(4 & this.data)
                }
                set culling(t) {
                    !!(4 & this.data) !== t && (this.data ^= 4)
                }
                get depthTest() {
                    return !!(8 & this.data)
                }
                set depthTest(t) {
                    !!(8 & this.data) !== t && (this.data ^= 8)
                }
                get depthMask() {
                    return !!(32 & this.data)
                }
                set depthMask(t) {
                    !!(32 & this.data) !== t && (this.data ^= 32)
                }
                get clockwiseFrontFace() {
                    return !!(16 & this.data)
                }
                set clockwiseFrontFace(t) {
                    !!(16 & this.data) !== t && (this.data ^= 16)
                }
                get blendMode() {
                    return this._blendMode
                }
                set blendMode(t) {
                    this.blend = t !== s.T$.NONE, this._blendMode = t
                }
                get polygonOffset() {
                    return this._polygonOffset
                }
                set polygonOffset(t) {
                    this.offsets = !!t, this._polygonOffset = t
                }
                static for2d() {
                    const t = new d;
                    return t.depthTest = !1, t.blend = !0, t
                }
            }
            d.prototype.toString = function() {
                return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`
            };
            const f = [];

            function p(t, e) {
                if (!t) return null;
                let r = "";
                if ("string" == typeof t) {
                    const e = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
                    e && (r = e[1].toLowerCase())
                }
                for (let s = f.length - 1; s >= 0; --s) {
                    const i = f[s];
                    if (i.test && i.test(t, r)) return new i(t, e)
                }
                throw new Error("Unrecognized source type to auto-detect Resource")
            }
            class m {
                constructor(t) {
                    this.items = [], this._name = t, this._aliasCount = 0
                }
                emit(t, e, r, s, i, n, a, o) {
                    if (arguments.length > 8) throw new Error("max arguments reached");
                    const {
                        name: h,
                        items: l
                    } = this;
                    this._aliasCount++;
                    for (let u = 0, c = l.length; u < c; u++) l[u][h](t, e, r, s, i, n, a, o);
                    return l === this.items && this._aliasCount--, this
                }
                ensureNonAliasedItems() {
                    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
                }
                add(t) {
                    return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
                }
                remove(t) {
                    const e = this.items.indexOf(t);
                    return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
                }
                contains(t) {
                    return this.items.includes(t)
                }
                removeAll() {
                    return this.ensureNonAliasedItems(), this.items.length = 0, this
                }
                destroy() {
                    this.removeAll(), this.items.length = 0, this._name = ""
                }
                get empty() {
                    return 0 === this.items.length
                }
                get name() {
                    return this._name
                }
            }
            Object.defineProperties(m.prototype, {
                dispatch: {
                    value: m.prototype.emit
                },
                run: {
                    value: m.prototype.emit
                }
            });
            class g {
                constructor(t = 0, e = 0) {
                    this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new m("setRealSize"), this.onUpdate = new m("update"), this.onError = new m("onError")
                }
                bind(t) {
                    this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
                }
                unbind(t) {
                    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
                }
                resize(t, e) {
                    (t !== this._width || e !== this._height) && (this._width = t, this._height = e, this.onResize.emit(t, e))
                }
                get valid() {
                    return !!this._width && !!this._height
                }
                update() {
                    this.destroyed || this.onUpdate.emit()
                }
                load() {
                    return Promise.resolve(this)
                }
                get width() {
                    return this._width
                }
                get height() {
                    return this._height
                }
                style(t, e, r) {
                    return !1
                }
                dispose() {}
                destroy() {
                    this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
                }
                static test(t, e) {
                    return !1
                }
            }
            class y extends g {
                constructor(t, e) {
                    const {
                        width: r,
                        height: s
                    } = e || {};
                    if (!r || !s) throw new Error("BufferResource width or height invalid");
                    super(r, s), this.data = t, this.unpackAlignment = e.unpackAlignment ? ? 4
                }
                upload(t, e, r) {
                    const i = t.gl;
                    i.pixelStorei(i.UNPACK_ALIGNMENT, this.unpackAlignment), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === s.iw.UNPACK);
                    const n = e.realWidth,
                        a = e.realHeight;
                    return r.width === n && r.height === a ? i.texSubImage2D(e.target, 0, 0, 0, n, a, e.format, r.type, this.data) : (r.width = n, r.height = a, i.texImage2D(e.target, 0, r.internalFormat, n, a, 0, e.format, r.type, this.data)), !0
                }
                dispose() {
                    this.data = null
                }
                static test(t) {
                    return null === t || t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array
                }
            }
            const _ = {
                    scaleMode: s.aH.NEAREST,
                    alphaMode: s.iw.NPM
                },
                x = class t extends n.EventEmitter {
                    constructor(e = null, r = null) {
                        super(), r = Object.assign({}, t.defaultOptions, r);
                        const {
                            alphaMode: s,
                            mipmap: a,
                            anisotropicLevel: o,
                            scaleMode: h,
                            width: l,
                            height: u,
                            wrapMode: c,
                            format: d,
                            type: f,
                            target: m,
                            resolution: y,
                            resourceOptions: _
                        } = r;
                        e && !(e instanceof g) && ((e = p(e, _)).internal = !0), this.resolution = y || i.Xd.RESOLUTION, this.width = Math.round((l || 0) * this.resolution) / this.resolution, this.height = Math.round((u || 0) * this.resolution) / this.resolution, this._mipmap = a, this.anisotropicLevel = o, this._wrapMode = c, this._scaleMode = h, this.format = d, this.type = f, this.target = m, this.alphaMode = s, this.uid = (0, n.uid)(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = l > 0 && u > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(e)
                    }
                    get realWidth() {
                        return Math.round(this.width * this.resolution)
                    }
                    get realHeight() {
                        return Math.round(this.height * this.resolution)
                    }
                    get mipmap() {
                        return this._mipmap
                    }
                    set mipmap(t) {
                        this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++)
                    }
                    get scaleMode() {
                        return this._scaleMode
                    }
                    set scaleMode(t) {
                        this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++)
                    }
                    get wrapMode() {
                        return this._wrapMode
                    }
                    set wrapMode(t) {
                        this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++)
                    }
                    setStyle(t, e) {
                        let r;
                        return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, r = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this
                    }
                    setSize(t, e, r) {
                        return r = r || this.resolution, this.setRealSize(t * r, e * r, r)
                    }
                    setRealSize(t, e, r) {
                        return this.resolution = r || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this
                    }
                    _refreshPOT() {
                        this.isPowerOfTwo = (0, n.isPow2)(this.realWidth) && (0, n.isPow2)(this.realHeight)
                    }
                    setResolution(t) {
                        const e = this.resolution;
                        return e === t || (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT()), this
                    }
                    setResource(t) {
                        if (this.resource === t) return this;
                        if (this.resource) throw new Error("Resource can be set only once");
                        return t.bind(this), this.resource = t, this
                    }
                    update() {
                        this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
                    }
                    onError(t) {
                        this.emit("error", this, t)
                    }
                    destroy() {
                        this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete n.BaseTextureCache[this.cacheId], delete n.TextureCache[this.cacheId], this.cacheId = null), this.valid = !1, this.dispose(), t.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0, this.emit("destroyed", this), this.removeAllListeners()
                    }
                    dispose() {
                        this.emit("dispose", this)
                    }
                    castToBaseTexture() {
                        return this
                    }
                    static from(e, r, s = i.Xd.STRICT_TEXTURE_CACHE) {
                        const a = "string" == typeof e;
                        let o = null;
                        if (a) o = e;
                        else {
                            if (!e._pixiId) {
                                const t = r ? .pixiIdPrefix || "pixiid";
                                e._pixiId = `${t}_${(0,n.uid)()}`
                            }
                            o = e._pixiId
                        }
                        let h = n.BaseTextureCache[o];
                        if (a && s && !h) throw new Error(`The cacheId "${o}" does not exist in BaseTextureCache.`);
                        return h || (h = new t(e, r), h.cacheId = o, t.addToCache(h, o)), h
                    }
                    static fromBuffer(e, r, i, n) {
                        e = e || new Float32Array(r * i * 4);
                        const a = new y(e, {
                            width: r,
                            height: i,
                            ...n ? .resourceOptions
                        });
                        let o, h;
                        return e instanceof Float32Array ? (o = s.I2.RGBA, h = s.vK.FLOAT) : e instanceof Int32Array ? (o = s.I2.RGBA_INTEGER, h = s.vK.INT) : e instanceof Uint32Array ? (o = s.I2.RGBA_INTEGER, h = s.vK.UNSIGNED_INT) : e instanceof Int16Array ? (o = s.I2.RGBA_INTEGER, h = s.vK.SHORT) : e instanceof Uint16Array ? (o = s.I2.RGBA_INTEGER, h = s.vK.UNSIGNED_SHORT) : e instanceof Int8Array ? (o = s.I2.RGBA, h = s.vK.BYTE) : (o = s.I2.RGBA, h = s.vK.UNSIGNED_BYTE), a.internal = !0, new t(a, Object.assign({}, _, {
                            type: h,
                            format: o
                        }, n))
                    }
                    static addToCache(t, e) {
                        e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), n.BaseTextureCache[e] && n.BaseTextureCache[e] !== t && console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`), n.BaseTextureCache[e] = t)
                    }
                    static removeFromCache(t) {
                        if ("string" == typeof t) {
                            const e = n.BaseTextureCache[t];
                            if (e) {
                                const r = e.textureCacheIds.indexOf(t);
                                return r > -1 && e.textureCacheIds.splice(r, 1), delete n.BaseTextureCache[t], e
                            }
                        } else if (t ? .textureCacheIds) {
                            for (let e = 0; e < t.textureCacheIds.length; ++e) delete n.BaseTextureCache[t.textureCacheIds[e]];
                            return t.textureCacheIds.length = 0, t
                        }
                        return null
                    }
                };
            x.defaultOptions = {
                mipmap: s.WB.POW2,
                anisotropicLevel: 0,
                scaleMode: s.aH.LINEAR,
                wrapMode: s.Nt.CLAMP,
                alphaMode: s.iw.UNPACK,
                target: s.sp.TEXTURE_2D,
                format: s.I2.RGBA,
                type: s.vK.UNSIGNED_BYTE
            }, x._globalBatch = 0;
            let b = x;
            class v {
                constructor() {
                    this.texArray = null, this.blend = 0, this.type = s.lg.TRIANGLES, this.start = 0, this.size = 0, this.data = null
                }
            }
            let A = 0;
            class T {
                constructor(t, e = !0, r = !1) {
                    this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this.static = e, this.id = A++, this.disposeRunner = new m("disposeBuffer")
                }
                update(t) {
                    t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++
                }
                dispose() {
                    this.disposeRunner.emit(this, !1)
                }
                destroy() {
                    this.dispose(), this.data = null
                }
                set index(t) {
                    this.type = t ? s.mr.ELEMENT_ARRAY_BUFFER : s.mr.ARRAY_BUFFER
                }
                get index() {
                    return this.type === s.mr.ELEMENT_ARRAY_BUFFER
                }
                static from(t) {
                    return t instanceof Array && (t = new Float32Array(t)), new T(t)
                }
            }
            class E {
                constructor(t, e = 0, r = !1, i = s.vK.FLOAT, n, a, o, h = 1) {
                    this.buffer = t, this.size = e, this.normalized = r, this.type = i, this.stride = n, this.start = a, this.instance = o, this.divisor = h
                }
                destroy() {
                    this.buffer = null
                }
                static from(t, e, r, s, i) {
                    return new E(t, e, r, s, i)
                }
            }
            const w = {
                    Float32Array,
                    Uint32Array,
                    Int32Array,
                    Uint8Array
                },
                I = {
                    5126: 4,
                    5123: 2,
                    5121: 1
                };
            let R = 0;
            const S = {
                Float32Array,
                Uint32Array,
                Int32Array,
                Uint8Array,
                Uint16Array
            };
            class C {
                constructor(t = [], e = {}) {
                    this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = R++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new m("disposeGeometry"), this.refCount = 0
                }
                addAttribute(t, e, r = 0, s = !1, i, n, a, o = !1) {
                    if (!e) throw new Error("You must pass a buffer when creating an attribute");
                    e instanceof T || (e instanceof Array && (e = new Float32Array(e)), e = new T(e));
                    const h = t.split("|");
                    if (h.length > 1) {
                        for (let t = 0; t < h.length; t++) this.addAttribute(h[t], e, r, s, i);
                        return this
                    }
                    let l = this.buffers.indexOf(e);
                    return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new E(l, r, s, i, n, a, o), this.instanced = this.instanced || o, this
                }
                getAttribute(t) {
                    return this.attributes[t]
                }
                getBuffer(t) {
                    return this.buffers[this.getAttribute(t).buffer]
                }
                addIndex(t) {
                    return t instanceof T || (t instanceof Array && (t = new Uint16Array(t)), t = new T(t)), t.type = s.mr.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this
                }
                getIndex() {
                    return this.indexBuffer
                }
                interleave() {
                    if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
                    const t = [],
                        e = [],
                        r = new T;
                    let s;
                    for (s in this.attributes) {
                        const r = this.attributes[s],
                            i = this.buffers[r.buffer];
                        t.push(i.data), e.push(r.size * I[r.type] / 4), r.buffer = 0
                    }
                    for (r.data = function(t, e) {
                            let r = 0,
                                s = 0;
                            const i = {};
                            for (let i = 0; i < t.length; i++) s += e[i], r += t[i].length;
                            const a = new ArrayBuffer(4 * r);
                            let o = null,
                                h = 0;
                            for (let r = 0; r < t.length; r++) {
                                const l = e[r],
                                    u = t[r],
                                    c = (0, n.getBufferType)(u);
                                i[c] || (i[c] = new w[c](a)), o = i[c];
                                for (let t = 0; t < u.length; t++) o[(t / l | 0) * s + h + t % l] = u[t];
                                h += l
                            }
                            return new Float32Array(a)
                        }(t, e), s = 0; s < this.buffers.length; s++) this.buffers[s] !== this.indexBuffer && this.buffers[s].destroy();
                    return this.buffers = [r], this.indexBuffer && this.buffers.push(this.indexBuffer), this
                }
                getSize() {
                    for (const t in this.attributes) {
                        const e = this.attributes[t];
                        return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
                    }
                    return 0
                }
                dispose() {
                    this.disposeRunner.emit(this, !1)
                }
                destroy() {
                    this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
                }
                clone() {
                    const t = new C;
                    for (let e = 0; e < this.buffers.length; e++) t.buffers[e] = new T(this.buffers[e].data.slice(0));
                    for (const e in this.attributes) {
                        const r = this.attributes[e];
                        t.attributes[e] = new E(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance)
                    }
                    return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = s.mr.ELEMENT_ARRAY_BUFFER), t
                }
                static merge(t) {
                    const e = new C,
                        r = [],
                        i = [],
                        a = [];
                    let o;
                    for (let e = 0; e < t.length; e++) {
                        o = t[e];
                        for (let t = 0; t < o.buffers.length; t++) i[t] = i[t] || 0, i[t] += o.buffers[t].data.length, a[t] = 0
                    }
                    for (let t = 0; t < o.buffers.length; t++) r[t] = new(S[(0, n.getBufferType)(o.buffers[t].data)])(i[t]), e.buffers[t] = new T(r[t]);
                    for (let e = 0; e < t.length; e++) {
                        o = t[e];
                        for (let t = 0; t < o.buffers.length; t++) r[t].set(o.buffers[t].data, a[t]), a[t] += o.buffers[t].data.length
                    }
                    if (e.attributes = o.attributes, o.indexBuffer) {
                        e.indexBuffer = e.buffers[o.buffers.indexOf(o.indexBuffer)], e.indexBuffer.type = s.mr.ELEMENT_ARRAY_BUFFER;
                        let r = 0,
                            i = 0,
                            n = 0,
                            a = 0;
                        for (let t = 0; t < o.buffers.length; t++)
                            if (o.buffers[t] !== o.indexBuffer) {
                                a = t;
                                break
                            }
                        for (const t in o.attributes) {
                            const e = o.attributes[t];
                            (0 | e.buffer) === a && (i += e.size * I[e.type] / 4)
                        }
                        for (let s = 0; s < t.length; s++) {
                            const o = t[s].indexBuffer.data;
                            for (let t = 0; t < o.length; t++) e.indexBuffer.data[t + n] += r;
                            r += t[s].buffers[a].data.length / i, n += o.length
                        }
                    }
                    return e
                }
            }
            class P extends C {
                constructor(t = !1) {
                    super(), this._buffer = new T(null, t, !1), this._indexBuffer = new T(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, s.vK.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, s.vK.FLOAT).addAttribute("aColor", this._buffer, 4, !0, s.vK.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, s.vK.FLOAT).addIndex(this._indexBuffer)
                }
            }
            var M = r(8363);
            const N = [{
                    test: t => "float" === t.type && 1 === t.size && !t.isArray,
                    code: t => `\n            if(uv["${t}"] !== ud["${t}"].value)\n            {\n                ud["${t}"].value = uv["${t}"]\n                gl.uniform1f(ud["${t}"].location, uv["${t}"])\n            }\n            `
                }, {
                    test: (t, e) => !("sampler2D" !== t.type && "samplerCube" !== t.type && "sampler2DArray" !== t.type || 1 !== t.size || t.isArray || null != e && void 0 === e.castToBaseTexture),
                    code: t => `t = syncData.textureCount++;\n\n            renderer.texture.bind(uv["${t}"], t);\n\n            if(ud["${t}"].value !== t)\n            {\n                ud["${t}"].value = t;\n                gl.uniform1i(ud["${t}"].location, t);\n; // eslint-disable-line max-len\n            }`
                }, {
                    test: (t, e) => "mat3" === t.type && 1 === t.size && !t.isArray && void 0 !== e.a,
                    code: t => `\n            gl.uniformMatrix3fv(ud["${t}"].location, false, uv["${t}"].toArray(true));\n            `,
                    codeUbo: t => `\n                var ${t}_matrix = uv.${t}.toArray(true);\n\n                data[offset] = ${t}_matrix[0];\n                data[offset+1] = ${t}_matrix[1];\n                data[offset+2] = ${t}_matrix[2];\n        \n                data[offset + 4] = ${t}_matrix[3];\n                data[offset + 5] = ${t}_matrix[4];\n                data[offset + 6] = ${t}_matrix[5];\n        \n                data[offset + 8] = ${t}_matrix[6];\n                data[offset + 9] = ${t}_matrix[7];\n                data[offset + 10] = ${t}_matrix[8];\n            `
                }, {
                    test: (t, e) => "vec2" === t.type && 1 === t.size && !t.isArray && void 0 !== e.x,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["${t}"].location, v.x, v.y);\n                }`,
                    codeUbo: t => `\n                v = uv.${t};\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            `
                }, {
                    test: t => "vec2" === t.type && 1 === t.size && !t.isArray,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["${t}"].location, v[0], v[1]);\n                }\n            `
                }, {
                    test: (t, e) => "vec4" === t.type && 1 === t.size && !t.isArray && void 0 !== e.width,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["${t}"].location, v.x, v.y, v.width, v.height)\n                }`,
                    codeUbo: t => `\n                    v = uv.${t};\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                `
                }, {
                    test: (t, e) => "vec4" === t.type && 1 === t.size && !t.isArray && void 0 !== e.red,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)\n                {\n                    cv[0] = v.red;\n                    cv[1] = v.green;\n                    cv[2] = v.blue;\n                    cv[3] = v.alpha;\n                    gl.uniform4f(ud["${t}"].location, v.red, v.green, v.blue, v.alpha)\n                }`,
                    codeUbo: t => `\n                    v = uv.${t};\n\n                    data[offset] = v.red;\n                    data[offset+1] = v.green;\n                    data[offset+2] = v.blue;\n                    data[offset+3] = v.alpha;\n                `
                }, {
                    test: (t, e) => "vec3" === t.type && 1 === t.size && !t.isArray && void 0 !== e.red,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)\n                {\n                    cv[0] = v.red;\n                    cv[1] = v.green;\n                    cv[2] = v.blue;\n    \n                    gl.uniform3f(ud["${t}"].location, v.red, v.green, v.blue)\n                }`,
                    codeUbo: t => `\n                    v = uv.${t};\n\n                    data[offset] = v.red;\n                    data[offset+1] = v.green;\n                    data[offset+2] = v.blue;\n                `
                }, {
                    test: t => "vec4" === t.type && 1 === t.size && !t.isArray,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["${t}"].location, v[0], v[1], v[2], v[3])\n                }`
                }],
                O = {
                    float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",
                    vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",
                    vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
                    vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",
                    int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
                    ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
                    ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
                    ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
                    uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",
                    uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",
                    uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",
                    uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",
                    bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",
                    bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
                    bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
                    bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
                    mat2: "gl.uniformMatrix2fv(location, false, v)",
                    mat3: "gl.uniformMatrix3fv(location, false, v)",
                    mat4: "gl.uniformMatrix4fv(location, false, v)",
                    sampler2D: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
                    samplerCube: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
                    sampler2DArray: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }"
                },
                B = {
                    float: "gl.uniform1fv(location, v)",
                    vec2: "gl.uniform2fv(location, v)",
                    vec3: "gl.uniform3fv(location, v)",
                    vec4: "gl.uniform4fv(location, v)",
                    mat4: "gl.uniformMatrix4fv(location, false, v)",
                    mat3: "gl.uniformMatrix3fv(location, false, v)",
                    mat2: "gl.uniformMatrix2fv(location, false, v)",
                    int: "gl.uniform1iv(location, v)",
                    ivec2: "gl.uniform2iv(location, v)",
                    ivec3: "gl.uniform3iv(location, v)",
                    ivec4: "gl.uniform4iv(location, v)",
                    uint: "gl.uniform1uiv(location, v)",
                    uvec2: "gl.uniform2uiv(location, v)",
                    uvec3: "gl.uniform3uiv(location, v)",
                    uvec4: "gl.uniform4uiv(location, v)",
                    bool: "gl.uniform1iv(location, v)",
                    bvec2: "gl.uniform2iv(location, v)",
                    bvec3: "gl.uniform3iv(location, v)",
                    bvec4: "gl.uniform4iv(location, v)",
                    sampler2D: "gl.uniform1iv(location, v)",
                    samplerCube: "gl.uniform1iv(location, v)",
                    sampler2DArray: "gl.uniform1iv(location, v)"
                },
                F = {};
            let D, L = F;

            function U() {
                if (L === F || L ? .isContextLost()) {
                    const t = i.Xd.ADAPTER.createCanvas();
                    let e;
                    i.Xd.PREFER_ENV >= s.Vi.WEBGL2 && (e = t.getContext("webgl2", {})), e || (e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {}), e ? e.getExtension("WEBGL_draw_buffers") : e = null), L = e
                }
                return L
            }
            const k = {
                float: 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                int: 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                uint: 1,
                uvec2: 2,
                uvec3: 3,
                uvec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };

            function G(t) {
                return k[t]
            }
            let j = null;
            const H = {
                FLOAT: "float",
                FLOAT_VEC2: "vec2",
                FLOAT_VEC3: "vec3",
                FLOAT_VEC4: "vec4",
                INT: "int",
                INT_VEC2: "ivec2",
                INT_VEC3: "ivec3",
                INT_VEC4: "ivec4",
                UNSIGNED_INT: "uint",
                UNSIGNED_INT_VEC2: "uvec2",
                UNSIGNED_INT_VEC3: "uvec3",
                UNSIGNED_INT_VEC4: "uvec4",
                BOOL: "bool",
                BOOL_VEC2: "bvec2",
                BOOL_VEC3: "bvec3",
                BOOL_VEC4: "bvec4",
                FLOAT_MAT2: "mat2",
                FLOAT_MAT3: "mat3",
                FLOAT_MAT4: "mat4",
                SAMPLER_2D: "sampler2D",
                INT_SAMPLER_2D: "sampler2D",
                UNSIGNED_INT_SAMPLER_2D: "sampler2D",
                SAMPLER_CUBE: "samplerCube",
                INT_SAMPLER_CUBE: "samplerCube",
                UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
                SAMPLER_2D_ARRAY: "sampler2DArray",
                INT_SAMPLER_2D_ARRAY: "sampler2DArray",
                UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
            };

            function V(t, e) {
                if (!j) {
                    const e = Object.keys(H);
                    j = {};
                    for (let r = 0; r < e.length; ++r) {
                        const s = e[r];
                        j[t[s]] = H[s]
                    }
                }
                return j[e]
            }

            function X(t, e, r) {
                if ("precision" !== t.substring(0, 9)) {
                    let i = e;
                    return e === s.cB.HIGH && r !== s.cB.HIGH && (i = s.cB.MEDIUM), `precision ${i} float;\n${t}`
                }
                return r !== s.cB.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
            }
            let $ = 0;
            const W = {},
                z = class t {
                    constructor(e, r, i = "pixi-shader", n = {}) {
                        this.extra = {}, this.id = $++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = n, "#version" !== this.vertexSrc.substring(0, 8) && (i = i.replace(/\s+/g, "-"), W[i] ? (W[i]++, i += `-${W[i]}`) : W[i] = 1, this.vertexSrc = `#define SHADER_NAME ${i}\n${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${i}\n${this.fragmentSrc}`, this.vertexSrc = X(this.vertexSrc, t.defaultVertexPrecision, s.cB.HIGH), this.fragmentSrc = X(this.fragmentSrc, t.defaultFragmentPrecision, function() {
                            if (!D) {
                                D = s.cB.MEDIUM;
                                const t = U();
                                if (t && t.getShaderPrecisionFormat) {
                                    const e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                                    e && (D = e.precision ? s.cB.HIGH : s.cB.MEDIUM)
                                }
                            }
                            return D
                        }())), this.glPrograms = {}, this.syncUniforms = null
                    }
                    static get defaultVertexSrc() {
                        return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
                    }
                    static get defaultFragmentSrc() {
                        return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
                    }
                    static from(e, r, s) {
                        const i = e + r;
                        let a = n.ProgramCache[i];
                        return a || (n.ProgramCache[i] = a = new t(e, r, s)), a
                    }
                };
            z.defaultVertexPrecision = s.cB.HIGH, z.defaultFragmentPrecision = n.isMobile.apple.device ? s.cB.HIGH : s.cB.MEDIUM;
            let Y = z,
                q = 0;
            class K {
                constructor(t, e, r) {
                    this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = q++, this.static = !!e, this.ubo = !!r, t instanceof T ? (this.buffer = t, this.buffer.type = s.mr.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new T(new Float32Array(1)), this.buffer.type = s.mr.UNIFORM_BUFFER, this.autoManage = !0))
                }
                update() {
                    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
                }
                add(t, e, r) {
                    if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
                    this.uniforms[t] = new K(e, r)
                }
                static from(t, e, r) {
                    return new K(t, e, r)
                }
                static uboFrom(t, e) {
                    return new K(t, e ? ? !0, !0)
                }
            }
            class Z {
                constructor(t, e) {
                    this.uniformBindCount = 0, this.program = t, this.uniformGroup = e ? e instanceof K ? e : new K(e) : new K({}), this.disposeRunner = new m("disposeShader")
                }
                checkUniformExists(t, e) {
                    if (e.uniforms[t]) return !0;
                    for (const r in e.uniforms) {
                        const s = e.uniforms[r];
                        if (!0 === s.group && this.checkUniformExists(t, s)) return !0
                    }
                    return !1
                }
                destroy() {
                    this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy()
                }
                get uniforms() {
                    return this.uniformGroup.uniforms
                }
                static from(t, e, r) {
                    const s = Y.from(t, e);
                    return new Z(s, r)
                }
            }
            class Q {
                constructor(t, e) {
                    if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, !e.includes("%count%")) throw new Error('Fragment template must contain "%count%".');
                    if (!e.includes("%forloop%")) throw new Error('Fragment template must contain "%forloop%".')
                }
                generateShader(t) {
                    if (!this.programCache[t]) {
                        const e = new Int32Array(t);
                        for (let r = 0; r < t; r++) e[r] = r;
                        this.defaultGroupCache[t] = K.from({
                            uSamplers: e
                        }, !0);
                        let r = this.fragTemplate;
                        r = r.replace(/%count%/gi, `${t}`), r = r.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Y(this.vertexSrc, r)
                    }
                    const e = {
                        tint: new Float32Array([1, 1, 1, 1]),
                        translationMatrix: new M.y3,
                        default: this.defaultGroupCache[t]
                    };
                    return new Z(this.programCache[t], e)
                }
                generateSampleSrc(t) {
                    let e = "";
                    e += "\n", e += "\n";
                    for (let r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += `if(vTextureId < ${r}.5)`), e += "\n{", e += `\n\tcolor = texture2D(uSamplers[${r}], vTextureCoord);`, e += "\n}";
                    return e += "\n", e += "\n", e
                }
            }
            class J {
                constructor() {
                    this.elements = [], this.ids = [], this.count = 0
                }
                clear() {
                    for (let t = 0; t < this.count; t++) this.elements[t] = null;
                    this.count = 0
                }
            }
            class tt {
                constructor(t) {
                    this.renderer = t
                }
                flush() {}
                destroy() {
                    this.renderer = null
                }
                start() {}
                stop() {
                    this.flush()
                }
                render(t) {}
            }
            const et = class t extends tt {
                constructor(e) {
                    super(e), this.setShaderGenerator(), this.geometryClass = P, this.vertexSize = 6, this.state = d.for2d(), this.size = 4 * t.defaultBatchSize, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = []
                }
                static get defaultMaxTextures() {
                    return this._defaultMaxTextures = this._defaultMaxTextures ? ? function(t) {
                        let e = !0;
                        const r = i.Xd.ADAPTER.getNavigator();
                        if (i.tq.tablet || i.tq.phone) {
                            if (i.tq.apple.device) {
                                const t = r.userAgent.match(/OS (\d+)_(\d+)?/);
                                t && parseInt(t[1], 10) < 11 && (e = !1)
                            }
                            if (i.tq.android.device) {
                                const t = r.userAgent.match(/Android\s([0-9.]*)/);
                                t && parseInt(t[1], 10) < 7 && (e = !1)
                            }
                        }
                        return e ? 32 : 4
                    }(), this._defaultMaxTextures
                }
                static set defaultMaxTextures(t) {
                    this._defaultMaxTextures = t
                }
                static get canUploadSameBuffer() {
                    return this._canUploadSameBuffer = this._canUploadSameBuffer ? ? !i.tq.apple.device, this._canUploadSameBuffer
                }
                static set canUploadSameBuffer(t) {
                    this._canUploadSameBuffer = t
                }
                get MAX_TEXTURES() {
                    return (0, n.deprecation)("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures
                }
                static get defaultVertexSrc() {
                    return "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n"
                }
                static get defaultFragmentTemplate() {
                    return "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n"
                }
                setShaderGenerator({
                    vertex: e = t.defaultVertexSrc,
                    fragment: r = t.defaultFragmentTemplate
                } = {}) {
                    this.shaderGenerator = new Q(e, r)
                }
                contextChange() {
                    const e = this.renderer.gl;
                    i.Xd.PREFER_ENV === s.Vi.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), t.defaultMaxTextures), this.maxTextures = c(this.maxTextures, e)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
                    for (let t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] = new this.geometryClass;
                    this.initFlushBuffers()
                }
                initFlushBuffers() {
                    const {
                        _drawCallPool: e,
                        _textureArrayPool: r
                    } = t, s = this.size / 4, i = Math.floor(s / this.maxTextures) + 1;
                    for (; e.length < s;) e.push(new v);
                    for (; r.length < i;) r.push(new J);
                    for (let t = 0; t < this.maxTextures; t++) this._tempBoundTextures[t] = null
                }
                onPrerender() {
                    this._flushId = 0
                }
                render(t) {
                    t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
                }
                buildTexturesAndDrawCalls() {
                    const {
                        _bufferedTextures: e,
                        maxTextures: r
                    } = this, s = t._textureArrayPool, i = this.renderer.batch, n = this._tempBoundTextures, a = this.renderer.textureGC.count;
                    let o = ++b._globalBatch,
                        h = 0,
                        l = s[0],
                        u = 0;
                    i.copyBoundTextures(n, r);
                    for (let t = 0; t < this._bufferSize; ++t) {
                        const c = e[t];
                        e[t] = null, c._batchEnabled !== o && (l.count >= r && (i.boundArray(l, n, o, r), this.buildDrawCalls(l, u, t), u = t, l = s[++h], ++o), c._batchEnabled = o, c.touched = a, l.elements[l.count++] = c)
                    }
                    l.count > 0 && (i.boundArray(l, n, o, r), this.buildDrawCalls(l, u, this._bufferSize), ++h, ++o);
                    for (let t = 0; t < n.length; t++) n[t] = null;
                    b._globalBatch = o
                }
                buildDrawCalls(e, r, s) {
                    const {
                        _bufferedElements: i,
                        _attributeBuffer: a,
                        _indexBuffer: o,
                        vertexSize: h
                    } = this, l = t._drawCallPool;
                    let u = this._dcIndex,
                        c = this._aIndex,
                        d = this._iIndex,
                        f = l[u];
                    f.start = this._iIndex, f.texArray = e;
                    for (let t = r; t < s; ++t) {
                        const s = i[t],
                            p = s._texture.baseTexture,
                            m = n.premultiplyBlendMode[p.alphaMode ? 1 : 0][s.blendMode];
                        i[t] = null, r < t && f.blend !== m && (f.size = d - f.start, r = t, f = l[++u], f.texArray = e, f.start = d), this.packInterleavedGeometry(s, a, o, c, d), c += s.vertexData.length / 2 * h, d += s.indices.length, f.blend = m
                    }
                    r < s && (f.size = d - f.start, ++u), this._dcIndex = u, this._aIndex = c, this._iIndex = d
                }
                bindAndClearTexArray(t) {
                    const e = this.renderer.texture;
                    for (let r = 0; r < t.count; r++) e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;
                    t.count = 0
                }
                updateGeometry() {
                    const {
                        _packedGeometries: e,
                        _attributeBuffer: r,
                        _indexBuffer: s
                    } = this;
                    t.canUploadSameBuffer ? (e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(s), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass), e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(s), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
                }
                drawBatches() {
                    const e = this._dcIndex,
                        {
                            gl: r,
                            state: s
                        } = this.renderer,
                        i = t._drawCallPool;
                    let n = null;
                    for (let t = 0; t < e; t++) {
                        const {
                            texArray: e,
                            type: a,
                            size: o,
                            start: h,
                            blend: l
                        } = i[t];
                        n !== e && (n = e, this.bindAndClearTexArray(e)), this.state.blendMode = l, s.set(this.state), r.drawElements(a, o, r.UNSIGNED_SHORT, 2 * h)
                    }
                }
                flush() {
                    0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
                }
                start() {
                    this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), t.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
                }
                stop() {
                    this.flush()
                }
                destroy() {
                    for (let t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] && this._packedGeometries[t].destroy();
                    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy()
                }
                getAttributeBuffer(t) {
                    const e = (0, n.nextPow2)(Math.ceil(t / 8)),
                        r = (0, n.log2)(e),
                        s = 8 * e;
                    this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
                    let i = this._aBuffers[s];
                    return i || (this._aBuffers[s] = i = new h(s * this.vertexSize * 4)), i
                }
                getIndexBuffer(t) {
                    const e = (0, n.nextPow2)(Math.ceil(t / 12)),
                        r = (0, n.log2)(e),
                        s = 12 * e;
                    this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
                    let i = this._iBuffers[r];
                    return i || (this._iBuffers[r] = i = new Uint16Array(s)), i
                }
                packInterleavedGeometry(t, e, r, s, i) {
                    const {
                        uint32View: n,
                        float32View: o
                    } = e, h = s / this.vertexSize, l = t.uvs, u = t.indices, c = t.vertexData, d = t._texture.baseTexture._batchLocation, f = Math.min(t.worldAlpha, 1), p = a.I.shared.setValue(t._tintRGB).toPremultiplied(f, t._texture.baseTexture.alphaMode > 0);
                    for (let t = 0; t < c.length; t += 2) o[s++] = c[t], o[s++] = c[t + 1], o[s++] = l[t], o[s++] = l[t + 1], n[s++] = p, o[s++] = d;
                    for (let t = 0; t < u.length; t++) r[i++] = h + u[t]
                }
            };
            et.defaultBatchSize = 4096, et.extension = {
                name: "batch",
                type: o.n.RendererPlugin
            }, et._drawCallPool = [], et._textureArrayPool = [];
            let rt = et;
            o.R.add(rt);
            const st = class t extends Z {
                constructor(e, r, s) {
                    super(Y.from(e || t.defaultVertexSrc, r || t.defaultFragmentSrc), s), this.padding = 0, this.resolution = t.defaultResolution, this.multisample = t.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new d
                }
                apply(t, e, r, s, i) {
                    t.applyFilter(this, e, r, s)
                }
                get blendMode() {
                    return this.state.blendMode
                }
                set blendMode(t) {
                    this.state.blendMode = t
                }
                get resolution() {
                    return this._resolution
                }
                set resolution(t) {
                    this._resolution = t
                }
                static get defaultVertexSrc() {
                    return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
                }
                static get defaultFragmentSrc() {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
                }
            };
            st.defaultResolution = 1, st.defaultMultisample = s.G5.NONE;
            let it = st;
            class nt {
                constructor() {
                    this.clearBeforeRender = !0, this._backgroundColor = new a.I(0), this.alpha = 1
                }
                init(t) {
                    this.clearBeforeRender = t.clearBeforeRender;
                    const {
                        backgroundColor: e,
                        background: r,
                        backgroundAlpha: s
                    } = t, i = r ? ? e;
                    void 0 !== i && (this.color = i), this.alpha = s
                }
                get color() {
                    return this._backgroundColor.value
                }
                set color(t) {
                    this._backgroundColor.setValue(t)
                }
                get alpha() {
                    return this._backgroundColor.alpha
                }
                set alpha(t) {
                    this._backgroundColor.setAlpha(t)
                }
                get backgroundColor() {
                    return this._backgroundColor
                }
                destroy() {}
            }
            nt.defaultOptions = {
                backgroundAlpha: 1,
                backgroundColor: 0,
                clearBeforeRender: !0
            }, nt.extension = {
                type: [o.n.RendererSystem, o.n.CanvasRendererSystem],
                name: "background"
            }, o.R.add(nt);
            class at {
                constructor(t) {
                    this.renderer = t, this.emptyRenderer = new tt(t), this.currentRenderer = this.emptyRenderer
                }
                setObjectRenderer(t) {
                    this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
                }
                flush() {
                    this.setObjectRenderer(this.emptyRenderer)
                }
                reset() {
                    this.setObjectRenderer(this.emptyRenderer)
                }
                copyBoundTextures(t, e) {
                    const {
                        boundTextures: r
                    } = this.renderer.texture;
                    for (let s = e - 1; s >= 0; --s) t[s] = r[s] || null, t[s] && (t[s]._batchLocation = s)
                }
                boundArray(t, e, r, s) {
                    const {
                        elements: i,
                        ids: n,
                        count: a
                    } = t;
                    let o = 0;
                    for (let t = 0; t < a; t++) {
                        const a = i[t],
                            h = a._batchLocation;
                        if (h >= 0 && h < s && e[h] === a) n[t] = h;
                        else
                            for (; o < s;) {
                                const s = e[o];
                                if (!s || s._batchEnabled !== r || s._batchLocation !== o) {
                                    n[t] = o, a._batchLocation = o, e[o] = a;
                                    break
                                }
                                o++
                            }
                    }
                }
                destroy() {
                    this.renderer = null
                }
            }
            at.extension = {
                type: o.n.RendererSystem,
                name: "batch"
            }, o.R.add(at);
            let ot = 0;
            class ht {
                constructor(t) {
                    this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
                        uint32Indices: !1
                    }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this)
                }
                get isLost() {
                    return !this.gl || this.gl.isContextLost()
                }
                contextChange(t) {
                    this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = ot++
                }
                init(t) {
                    if (t.context) this.initFromContext(t.context);
                    else {
                        const e = this.renderer.background.alpha < 1,
                            r = t.premultipliedAlpha;
                        this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({
                            alpha: e,
                            premultipliedAlpha: r,
                            antialias: t.antialias,
                            stencil: !0,
                            preserveDrawingBuffer: t.preserveDrawingBuffer,
                            powerPreference: t.powerPreference
                        })
                    }
                }
                initFromContext(t) {
                    this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = ot++, this.renderer.runners.contextChange.emit(t);
                    const e = this.renderer.view;
                    void 0 !== e.addEventListener && (e.addEventListener("webglcontextlost", this.handleContextLost, !1), e.addEventListener("webglcontextrestored", this.handleContextRestored, !1))
                }
                initFromOptions(t) {
                    const e = this.createContext(this.renderer.view, t);
                    this.initFromContext(e)
                }
                createContext(t, e) {
                    let r;
                    if (i.Xd.PREFER_ENV >= s.Vi.WEBGL2 && (r = t.getContext("webgl2", e)), r) this.webGLVersion = 2;
                    else if (this.webGLVersion = 1, r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e), !r) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                    return this.gl = r, this.getExtensions(), this.gl
                }
                getExtensions() {
                    const {
                        gl: t
                    } = this, e = {
                        loseContext: t.getExtension("WEBGL_lose_context"),
                        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                        s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                        s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                        etc: t.getExtension("WEBGL_compressed_texture_etc"),
                        etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                        pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                        atc: t.getExtension("WEBGL_compressed_texture_atc"),
                        astc: t.getExtension("WEBGL_compressed_texture_astc"),
                        bptc: t.getExtension("EXT_texture_compression_bptc")
                    };
                    1 === this.webGLVersion ? Object.assign(this.extensions, e, {
                        drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                        depthTexture: t.getExtension("WEBGL_depth_texture"),
                        vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                        uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                        floatTexture: t.getExtension("OES_texture_float"),
                        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                        textureHalfFloat: t.getExtension("OES_texture_half_float"),
                        textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                    }) : 2 === this.webGLVersion && Object.assign(this.extensions, e, {
                        colorBufferFloat: t.getExtension("EXT_color_buffer_float")
                    })
                }
                handleContextLost(t) {
                    t.preventDefault(), setTimeout((() => {
                        this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext()
                    }), 0)
                }
                handleContextRestored() {
                    this.renderer.runners.contextChange.emit(this.gl)
                }
                destroy() {
                    const t = this.renderer.view;
                    this.renderer = null, void 0 !== t.removeEventListener && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
                }
                postrender() {
                    this.renderer.objectRenderer.renderingToScreen && this.gl.flush()
                }
                validateContext(t) {
                    const e = t.getContextAttributes(),
                        r = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
                    r && (this.webGLVersion = 2), e && !e.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
                    const s = r || !!t.getExtension("OES_element_index_uint");
                    this.supports.uint32Indices = s, s || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
                }
            }
            ht.defaultOptions = {
                context: null,
                antialias: !1,
                premultipliedAlpha: !0,
                preserveDrawingBuffer: !1,
                powerPreference: "default"
            }, ht.extension = {
                type: o.n.RendererSystem,
                name: "context"
            }, o.R.add(ht);
            class lt {
                constructor(t, e) {
                    if (this.width = Math.round(t), this.height = Math.round(e), !this.width || !this.height) throw new Error("Framebuffer width or height is zero");
                    this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new m("disposeFramebuffer"), this.multisample = s.G5.NONE
                }
                get colorTexture() {
                    return this.colorTextures[0]
                }
                addColorTexture(t = 0, e) {
                    return this.colorTextures[t] = e || new b(null, {
                        scaleMode: s.aH.NEAREST,
                        resolution: 1,
                        mipmap: s.WB.OFF,
                        width: this.width,
                        height: this.height
                    }), this.dirtyId++, this.dirtyFormat++, this
                }
                addDepthTexture(t) {
                    return this.depthTexture = t || new b(null, {
                        scaleMode: s.aH.NEAREST,
                        resolution: 1,
                        width: this.width,
                        height: this.height,
                        mipmap: s.WB.OFF,
                        format: s.I2.DEPTH_COMPONENT,
                        type: s.vK.UNSIGNED_SHORT
                    }), this.dirtyId++, this.dirtyFormat++, this
                }
                enableDepth() {
                    return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
                }
                enableStencil() {
                    return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
                }
                resize(t, e) {
                    if (t = Math.round(t), e = Math.round(e), !t || !e) throw new Error("Framebuffer width and height must not be zero");
                    if (t !== this.width || e !== this.height) {
                        this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
                        for (let r = 0; r < this.colorTextures.length; r++) {
                            const s = this.colorTextures[r],
                                i = s.resolution;
                            s.setSize(t / i, e / i)
                        }
                        if (this.depthTexture) {
                            const r = this.depthTexture.resolution;
                            this.depthTexture.setSize(t / r, e / r)
                        }
                    }
                }
                dispose() {
                    this.disposeRunner.emit(this, !1)
                }
                destroyDepthTexture() {
                    this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
                }
            }
            class ut extends b {
                constructor(t = {}) {
                    "number" == typeof t && (t = {
                        width: arguments[0],
                        height: arguments[1],
                        scaleMode: arguments[2],
                        resolution: arguments[3]
                    }), t.width = t.width ? ? 100, t.height = t.height ? ? 100, t.multisample ? ? (t.multisample = s.G5.NONE), super(null, t), this.mipmap = s.WB.OFF, this.valid = !0, this._clear = new a.I([0, 0, 0, 0]), this.framebuffer = new lt(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = t.multisample, this.maskStack = [], this.filterStack = [{}]
                }
                set clearColor(t) {
                    this._clear.setValue(t)
                }
                get clearColor() {
                    return this._clear.value
                }
                get clear() {
                    return this._clear
                }
                get multisample() {
                    return this.framebuffer.multisample
                }
                set multisample(t) {
                    this.framebuffer.multisample = t
                }
                resize(t, e) {
                    this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
                }
                dispose() {
                    this.framebuffer.dispose(), super.dispose()
                }
                destroy() {
                    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
                }
            }
            class ct extends g {
                constructor(t) {
                    const e = t;
                    super(e.naturalWidth || e.videoWidth || e.displayWidth || e.width, e.naturalHeight || e.videoHeight || e.displayHeight || e.height), this.source = t, this.noSubImage = !1
                }
                static crossOrigin(t, e, r) {
                    void 0 !== r || e.startsWith("data:") ? !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous") : t.crossOrigin = (0, n.determineCrossOrigin)(e)
                }
                upload(t, e, r, i) {
                    const n = t.gl,
                        a = e.realWidth,
                        o = e.realHeight;
                    if (i = i || this.source, typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) {
                        if (!i.complete || 0 === i.naturalWidth) return !1
                    } else if (typeof HTMLVideoElement < "u" && i instanceof HTMLVideoElement && i.readyState <= 1) return !1;
                    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === s.iw.UNPACK), this.noSubImage || e.target !== n.TEXTURE_2D || r.width !== a || r.height !== o ? (r.width = a, r.height = o, n.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, i)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, i), !0
                }
                update() {
                    if (this.destroyed) return;
                    const t = this.source,
                        e = t.naturalWidth || t.videoWidth || t.width,
                        r = t.naturalHeight || t.videoHeight || t.height;
                    this.resize(e, r), super.update()
                }
                dispose() {
                    this.source = null
                }
            }
            class dt extends ct {
                constructor(t, e) {
                    if (e = e || {}, "string" == typeof t) {
                        const r = new Image;
                        ct.crossOrigin(r, t, e.crossorigin), r.src = t, t = r
                    }
                    super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (e.createBitmap ? ? i.Xd.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = "number" == typeof e.alphaMode ? e.alphaMode : null, this.bitmap = null, this._load = null, !1 !== e.autoLoad && this.load()
                }
                load(t) {
                    return this._load || (void 0 !== t && (this.createBitmap = t), this._load = new Promise(((t, e) => {
                        const r = this.source;
                        this.url = r.src;
                        const s = () => {
                            this.destroyed || (r.onload = null, r.onerror = null, this.update(), this._load = null, this.createBitmap ? t(this.process()) : t(this))
                        };
                        r.complete && r.src ? s() : (r.onload = s, r.onerror = t => {
                            e(t), this.onError.emit(t)
                        })
                    }))), this._load
                }
                process() {
                    const t = this.source;
                    if (null !== this._process) return this._process;
                    if (null !== this.bitmap || !globalThis.createImageBitmap) return Promise.resolve(this);
                    const e = globalThis.createImageBitmap,
                        r = !t.crossOrigin || "anonymous" === t.crossOrigin;
                    return this._process = fetch(t.src, {
                        mode: r ? "cors" : "no-cors"
                    }).then((t => t.blob())).then((r => e(r, 0, 0, t.width, t.height, {
                        premultiplyAlpha: null === this.alphaMode || this.alphaMode === s.iw.UNPACK ? "premultiply" : "none"
                    }))).then((t => this.destroyed ? Promise.reject() : (this.bitmap = t, this.update(), this._process = null, Promise.resolve(this)))), this._process
                }
                upload(t, e, r) {
                    if ("number" == typeof this.alphaMode && (e.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(t, e, r);
                    if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
                    if (super.upload(t, e, r, this.bitmap), !this.preserveBitmap) {
                        let t = !0;
                        const s = e._glTextures;
                        for (const i in s) {
                            const n = s[i];
                            if (n !== r && n.dirtyId !== e.dirtyId) {
                                t = !1;
                                break
                            }
                        }
                        t && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
                    }
                    return !0
                }
                dispose() {
                    this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
                }
                static test(t) {
                    return typeof HTMLImageElement < "u" && ("string" == typeof t || t instanceof HTMLImageElement)
                }
            }
            class ft {
                constructor() {
                    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
                }
                set(t, e, r) {
                    const s = e.width,
                        i = e.height;
                    if (r) {
                        const e = t.width / 2 / s,
                            n = t.height / 2 / i,
                            a = t.x / s + e,
                            o = t.y / i + n;
                        r = M.Lv.add(r, M.Lv.NW), this.x0 = a + e * M.Lv.uX(r), this.y0 = o + n * M.Lv.uY(r), r = M.Lv.add(r, 2), this.x1 = a + e * M.Lv.uX(r), this.y1 = o + n * M.Lv.uY(r), r = M.Lv.add(r, 2), this.x2 = a + e * M.Lv.uX(r), this.y2 = o + n * M.Lv.uY(r), r = M.Lv.add(r, 2), this.x3 = a + e * M.Lv.uX(r), this.y3 = o + n * M.Lv.uY(r)
                    } else this.x0 = t.x / s, this.y0 = t.y / i, this.x1 = (t.x + t.width) / s, this.y1 = t.y / i, this.x2 = (t.x + t.width) / s, this.y2 = (t.y + t.height) / i, this.x3 = t.x / s, this.y3 = (t.y + t.height) / i;
                    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
                }
            }
            ft.prototype.toString = function() {
                return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`
            };
            const pt = new ft;

            function mt(t) {
                t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
            }
            class gt extends n.EventEmitter {
                constructor(t, e, r, s, i, n, a) {
                    if (super(), this.noFrame = !1, e || (this.noFrame = !0, e = new M.Ae(0, 0, 1, 1)), t instanceof gt && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = s, this.valid = !1, this.destroyed = !1, this._uvs = pt, this.uvMatrix = null, this.orig = r || e, this._rotate = Number(i || 0), !0 === i) this._rotate = 2;
                    else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                    this.defaultAnchor = n ? new M.E9(n.x, n.y) : new M.E9(0, 0), this.defaultBorders = a, this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = e : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this)
                }
                update() {
                    this.baseTexture.resource && this.baseTexture.resource.update()
                }
                onBaseTextureUpdated(t) {
                    if (this.noFrame) {
                        if (!this.baseTexture.valid) return;
                        this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
                    } else this.frame = this._frame;
                    this.emit("update", this)
                }
                destroy(t) {
                    if (this.baseTexture) {
                        if (t) {
                            const {
                                resource: t
                            } = this.baseTexture;
                            t ? .url && n.TextureCache[t.url] && gt.removeFromCache(t.url), this.baseTexture.destroy()
                        }
                        this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
                    }
                    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, gt.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0, this.emit("destroyed", this), this.removeAllListeners()
                }
                clone() {
                    const t = this._frame.clone(),
                        e = this._frame === this.orig ? t : this.orig.clone(),
                        r = new gt(this.baseTexture, !this.noFrame && t, e, this.trim ? .clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
                    return this.noFrame && (r._frame = t), r
                }
                updateUvs() {
                    this._uvs === pt && (this._uvs = new ft), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                }
                static from(t, e = {}, r = i.Xd.STRICT_TEXTURE_CACHE) {
                    const s = "string" == typeof t;
                    let a = null;
                    if (s) a = t;
                    else if (t instanceof b) {
                        if (!t.cacheId) {
                            const r = e ? .pixiIdPrefix || "pixiid";
                            t.cacheId = `${r}-${(0,n.uid)()}`, b.addToCache(t, t.cacheId)
                        }
                        a = t.cacheId
                    } else {
                        if (!t._pixiId) {
                            const r = e ? .pixiIdPrefix || "pixiid";
                            t._pixiId = `${r}_${(0,n.uid)()}`
                        }
                        a = t._pixiId
                    }
                    let o = n.TextureCache[a];
                    if (s && r && !o) throw new Error(`The cacheId "${a}" does not exist in TextureCache.`);
                    return o || t instanceof b ? !o && t instanceof b && (o = new gt(t), gt.addToCache(o, a)) : (e.resolution || (e.resolution = (0, n.getResolutionOfUrl)(t)), o = new gt(new b(t, e)), o.baseTexture.cacheId = a, b.addToCache(o.baseTexture, a), gt.addToCache(o, a)), o
                }
                static fromURL(t, e) {
                    const r = Object.assign({
                            autoLoad: !1
                        }, e ? .resourceOptions),
                        s = gt.from(t, Object.assign({
                            resourceOptions: r
                        }, e), !1),
                        i = s.baseTexture.resource;
                    return s.baseTexture.valid ? Promise.resolve(s) : i.load().then((() => Promise.resolve(s)))
                }
                static fromBuffer(t, e, r, s) {
                    return new gt(b.fromBuffer(t, e, r, s))
                }
                static fromLoader(t, e, r, s) {
                    const i = new b(t, Object.assign({
                            scaleMode: b.defaultOptions.scaleMode,
                            resolution: (0, n.getResolutionOfUrl)(e)
                        }, s)),
                        {
                            resource: a
                        } = i;
                    a instanceof dt && (a.url = e);
                    const o = new gt(i);
                    return r || (r = e), b.addToCache(o.baseTexture, r), gt.addToCache(o, r), r !== e && (b.addToCache(o.baseTexture, e), gt.addToCache(o, e)), o.baseTexture.valid ? Promise.resolve(o) : new Promise((t => {
                        o.baseTexture.once("loaded", (() => t(o)))
                    }))
                }
                static addToCache(t, e) {
                    e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), n.TextureCache[e] && n.TextureCache[e] !== t && console.warn(`Texture added to the cache with an id [${e}] that already had an entry`), n.TextureCache[e] = t)
                }
                static removeFromCache(t) {
                    if ("string" == typeof t) {
                        const e = n.TextureCache[t];
                        if (e) {
                            const r = e.textureCacheIds.indexOf(t);
                            return r > -1 && e.textureCacheIds.splice(r, 1), delete n.TextureCache[t], e
                        }
                    } else if (t ? .textureCacheIds) {
                        for (let e = 0; e < t.textureCacheIds.length; ++e) n.TextureCache[t.textureCacheIds[e]] === t && delete n.TextureCache[t.textureCacheIds[e]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }
                get resolution() {
                    return this.baseTexture.resolution
                }
                get frame() {
                    return this._frame
                }
                set frame(t) {
                    this._frame = t, this.noFrame = !1;
                    const {
                        x: e,
                        y: r,
                        width: s,
                        height: i
                    } = t, n = e + s > this.baseTexture.width, a = r + i > this.baseTexture.height;
                    if (n || a) {
                        const t = n && a ? "and" : "or",
                            o = `X: ${e} + ${s} = ${e+s} > ${this.baseTexture.width}`,
                            h = `Y: ${r} + ${i} = ${r+i} > ${this.baseTexture.height}`;
                        throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${o} ${t} ${h}`)
                    }
                    this.valid = s && i && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs()
                }
                get rotate() {
                    return this._rotate
                }
                set rotate(t) {
                    this._rotate = t, this.valid && this.updateUvs()
                }
                get width() {
                    return this.orig.width
                }
                get height() {
                    return this.orig.height
                }
                castToBaseTexture() {
                    return this.baseTexture
                }
                static get EMPTY() {
                    return gt._EMPTY || (gt._EMPTY = new gt(new b), mt(gt._EMPTY), mt(gt._EMPTY.baseTexture)), gt._EMPTY
                }
                static get WHITE() {
                    if (!gt._WHITE) {
                        const t = i.Xd.ADAPTER.createCanvas(16, 16),
                            e = t.getContext("2d");
                        t.width = 16, t.height = 16, e.fillStyle = "white", e.fillRect(0, 0, 16, 16), gt._WHITE = new gt(b.from(t)), mt(gt._WHITE), mt(gt._WHITE.baseTexture)
                    }
                    return gt._WHITE
                }
            }
            class yt extends gt {
                constructor(t, e) {
                    super(t, e), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
                }
                get framebuffer() {
                    return this.baseTexture.framebuffer
                }
                get multisample() {
                    return this.framebuffer.multisample
                }
                set multisample(t) {
                    this.framebuffer.multisample = t
                }
                resize(t, e, r = !0) {
                    const s = this.baseTexture.resolution,
                        i = Math.round(t * s) / s,
                        n = Math.round(e * s) / s;
                    this.valid = i > 0 && n > 0, this._frame.width = this.orig.width = i, this._frame.height = this.orig.height = n, r && this.baseTexture.resize(i, n), this.updateUvs()
                }
                setResolution(t) {
                    const {
                        baseTexture: e
                    } = this;
                    e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
                }
                static create(t) {
                    return new yt(new ut(t))
                }
            }
            class _t {
                constructor(t) {
                    this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
                }
                createTexture(t, e, r = s.G5.NONE) {
                    const i = new ut(Object.assign({
                        width: t,
                        height: e,
                        resolution: 1,
                        multisample: r
                    }, this.textureOptions));
                    return new yt(i)
                }
                getOptimalTexture(t, e, r = 1, i = s.G5.NONE) {
                    let a;
                    t = Math.max(Math.ceil(t * r - 1e-6), 1), e = Math.max(Math.ceil(e * r - 1e-6), 1), this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight ? a = i > 1 ? -i : -1 : (a = ((65535 & (t = (0, n.nextPow2)(t))) << 16 | 65535 & (e = (0, n.nextPow2)(e))) >>> 0, i > 1 && (a += 4294967296 * i)), this.texturePool[a] || (this.texturePool[a] = []);
                    let o = this.texturePool[a].pop();
                    return o || (o = this.createTexture(t, e, i)), o.filterPoolKey = a, o.setResolution(r), o
                }
                getFilterTexture(t, e, r) {
                    const i = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || s.G5.NONE);
                    return i.filterFrame = t.filterFrame, i
                }
                returnTexture(t) {
                    const e = t.filterPoolKey;
                    t.filterFrame = null, this.texturePool[e].push(t)
                }
                returnFilterTexture(t) {
                    this.returnTexture(t)
                }
                clear(t) {
                    if (t = !1 !== t)
                        for (const t in this.texturePool) {
                            const e = this.texturePool[t];
                            if (e)
                                for (let t = 0; t < e.length; t++) e[t].destroy(!0)
                        }
                    this.texturePool = {}
                }
                setScreenSize(t) {
                    if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                        this.enableFullScreen = t.width > 0 && t.height > 0;
                        for (const t in this.texturePool) {
                            if (!(Number(t) < 0)) continue;
                            const e = this.texturePool[t];
                            if (e)
                                for (let t = 0; t < e.length; t++) e[t].destroy(!0);
                            this.texturePool[t] = []
                        }
                        this._pixelsWidth = t.width, this._pixelsHeight = t.height
                    }
                }
            }
            _t.SCREEN_KEY = -1;
            class xt extends C {
                constructor() {
                    super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
                }
            }
            class bt extends C {
                constructor() {
                    super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new T(this.vertices), this.uvBuffer = new T(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
                }
                map(t, e) {
                    let r = 0,
                        s = 0;
                    return this.uvs[0] = r, this.uvs[1] = s, this.uvs[2] = r + e.width / t.width, this.uvs[3] = s, this.uvs[4] = r + e.width / t.width, this.uvs[5] = s + e.height / t.height, this.uvs[6] = r, this.uvs[7] = s + e.height / t.height, r = e.x, s = e.y, this.vertices[0] = r, this.vertices[1] = s, this.vertices[2] = r + e.width, this.vertices[3] = s, this.vertices[4] = r + e.width, this.vertices[5] = s + e.height, this.vertices[6] = r, this.vertices[7] = s + e.height, this.invalidate(), this
                }
                invalidate() {
                    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
                }
            }
            class vt {
                constructor() {
                    this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = s.G5.NONE, this.sourceFrame = new M.Ae, this.destinationFrame = new M.Ae, this.bindingSourceFrame = new M.Ae, this.bindingDestinationFrame = new M.Ae, this.filters = [], this.transform = null
                }
                clear() {
                    this.target = null, this.filters = null, this.renderTexture = null
                }
            }
            const At = [new M.E9, new M.E9, new M.E9, new M.E9],
                Tt = new M.y3;
            class Et {
                constructor(t) {
                    this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new _t, this.statePool = [], this.quad = new xt, this.quadUv = new bt, this.tempRect = new M.Ae, this.activeState = {}, this.globalUniforms = new K({
                        outputFrame: new M.Ae,
                        inputSize: new Float32Array(4),
                        inputPixel: new Float32Array(4),
                        inputClamp: new Float32Array(4),
                        resolution: 1,
                        filterArea: new Float32Array(4),
                        filterClamp: new Float32Array(4)
                    }, !0), this.forceClear = !1, this.useMaxPadding = !1
                }
                init() {
                    this.texturePool.setScreenSize(this.renderer.view)
                }
                push(t, e) {
                    const r = this.renderer,
                        s = this.defaultFilterStack,
                        i = this.statePool.pop() || new vt,
                        n = r.renderTexture;
                    let a, o;
                    if (n.current) {
                        const t = n.current;
                        a = t.resolution, o = t.multisample
                    } else a = r.resolution, o = r.multisample;
                    let h = e[0].resolution || a,
                        l = e[0].multisample ? ? o,
                        u = e[0].padding,
                        c = e[0].autoFit,
                        d = e[0].legacy ? ? !0;
                    for (let t = 1; t < e.length; t++) {
                        const r = e[t];
                        h = Math.min(h, r.resolution || a), l = Math.min(l, r.multisample ? ? o), u = this.useMaxPadding ? Math.max(u, r.padding) : u + r.padding, c = c && r.autoFit, d = d || (r.legacy ? ? !0)
                    }
                    1 === s.length && (this.defaultFilterStack[0].renderTexture = n.current), s.push(i), i.resolution = h, i.multisample = l, i.legacy = d, i.target = t, i.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), i.sourceFrame.pad(u);
                    const f = this.tempRect.copyFrom(n.sourceFrame);
                    r.projection.transform && this.transformAABB(Tt.copyFrom(r.projection.transform).invert(), f), c ? (i.sourceFrame.fit(f), (i.sourceFrame.width <= 0 || i.sourceFrame.height <= 0) && (i.sourceFrame.width = 0, i.sourceFrame.height = 0)) : i.sourceFrame.intersects(f) || (i.sourceFrame.width = 0, i.sourceFrame.height = 0), this.roundFrame(i.sourceFrame, n.current ? n.current.resolution : r.resolution, n.sourceFrame, n.destinationFrame, r.projection.transform), i.renderTexture = this.getOptimalFilterTexture(i.sourceFrame.width, i.sourceFrame.height, h, l), i.filters = e, i.destinationFrame.width = i.renderTexture.width, i.destinationFrame.height = i.renderTexture.height;
                    const p = this.tempRect;
                    p.x = 0, p.y = 0, p.width = i.sourceFrame.width, p.height = i.sourceFrame.height, i.renderTexture.filterFrame = i.sourceFrame, i.bindingSourceFrame.copyFrom(n.sourceFrame), i.bindingDestinationFrame.copyFrom(n.destinationFrame), i.transform = r.projection.transform, r.projection.transform = null, n.bind(i.renderTexture, i.sourceFrame, p), r.framebuffer.clear(0, 0, 0, 0)
                }
                pop() {
                    const t = this.defaultFilterStack,
                        e = t.pop(),
                        r = e.filters;
                    this.activeState = e;
                    const i = this.globalUniforms.uniforms;
                    i.outputFrame = e.sourceFrame, i.resolution = e.resolution;
                    const n = i.inputSize,
                        a = i.inputPixel,
                        o = i.inputClamp;
                    if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], a[0] = Math.round(n[0] * e.resolution), a[1] = Math.round(n[1] * e.resolution), a[2] = 1 / a[0], a[3] = 1 / a[1], o[0] = .5 * a[2], o[1] = .5 * a[3], o[2] = e.sourceFrame.width * n[2] - .5 * a[2], o[3] = e.sourceFrame.height * n[3] - .5 * a[3], e.legacy) {
                        const t = i.filterArea;
                        t[0] = e.destinationFrame.width, t[1] = e.destinationFrame.height, t[2] = e.sourceFrame.x, t[3] = e.sourceFrame.y, i.filterClamp = i.inputClamp
                    }
                    this.globalUniforms.update();
                    const h = t[t.length - 1];
                    if (this.renderer.framebuffer.blit(), 1 === r.length) r[0].apply(this, e.renderTexture, h.renderTexture, s.yl.BLEND, e), this.returnFilterTexture(e.renderTexture);
                    else {
                        let t = e.renderTexture,
                            i = this.getOptimalFilterTexture(t.width, t.height, e.resolution);
                        i.filterFrame = t.filterFrame;
                        let n = 0;
                        for (n = 0; n < r.length - 1; ++n) {
                            1 === n && e.multisample > 1 && (i = this.getOptimalFilterTexture(t.width, t.height, e.resolution), i.filterFrame = t.filterFrame), r[n].apply(this, t, i, s.yl.CLEAR, e);
                            const a = t;
                            t = i, i = a
                        }
                        r[n].apply(this, t, h.renderTexture, s.yl.BLEND, e), n > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(t), this.returnFilterTexture(i)
                    }
                    e.clear(), this.statePool.push(e)
                }
                bindAndClear(t, e = s.yl.CLEAR) {
                    const {
                        renderTexture: r,
                        state: i
                    } = this.renderer;
                    if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t ? .filterFrame) {
                        const e = this.tempRect;
                        e.x = 0, e.y = 0, e.width = t.filterFrame.width, e.height = t.filterFrame.height, r.bind(t, t.filterFrame, e)
                    } else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? r.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                    const n = 1 & i.stateId || this.forceClear;
                    (e === s.yl.CLEAR || e === s.yl.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0)
                }
                applyFilter(t, e, r, i) {
                    const n = this.renderer;
                    n.state.set(t.state), this.bindAndClear(r, i), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(s.lg.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(s.lg.TRIANGLE_STRIP))
                }
                calculateSpriteMatrix(t, e) {
                    const {
                        sourceFrame: r,
                        destinationFrame: s
                    } = this.activeState, {
                        orig: i
                    } = e._texture, n = t.set(s.width, 0, 0, s.height, r.x, r.y), a = e.worldTransform.copyTo(M.y3.TEMP_MATRIX);
                    return a.invert(), n.prepend(a), n.scale(1 / i.width, 1 / i.height), n.translate(e.anchor.x, e.anchor.y), n
                }
                destroy() {
                    this.renderer = null, this.texturePool.clear(!1)
                }
                getOptimalFilterTexture(t, e, r = 1, i = s.G5.NONE) {
                    return this.texturePool.getOptimalTexture(t, e, r, i)
                }
                getFilterTexture(t, e, r) {
                    if ("number" == typeof t) {
                        const r = t;
                        t = e, e = r
                    }
                    t = t || this.activeState.renderTexture;
                    const i = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || s.G5.NONE);
                    return i.filterFrame = t.filterFrame, i
                }
                returnFilterTexture(t) {
                    this.texturePool.returnTexture(t)
                }
                emptyPool() {
                    this.texturePool.clear(!0)
                }
                resize() {
                    this.texturePool.setScreenSize(this.renderer.view)
                }
                transformAABB(t, e) {
                    const r = At[0],
                        s = At[1],
                        i = At[2],
                        n = At[3];
                    r.set(e.left, e.top), s.set(e.left, e.bottom), i.set(e.right, e.top), n.set(e.right, e.bottom), t.apply(r, r), t.apply(s, s), t.apply(i, i), t.apply(n, n);
                    const a = Math.min(r.x, s.x, i.x, n.x),
                        o = Math.min(r.y, s.y, i.y, n.y),
                        h = Math.max(r.x, s.x, i.x, n.x),
                        l = Math.max(r.y, s.y, i.y, n.y);
                    e.x = a, e.y = o, e.width = h - a, e.height = l - o
                }
                roundFrame(t, e, r, s, i) {
                    if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
                        if (i) {
                            const {
                                a: t,
                                b: e,
                                c: r,
                                d: s
                            } = i;
                            if ((Math.abs(e) > 1e-4 || Math.abs(r) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(s) > 1e-4)) return
                        }(i = i ? Tt.copyFrom(i) : Tt.identity()).translate(-r.x, -r.y).scale(s.width / r.width, s.height / r.height).translate(s.x, s.y), this.transformAABB(i, t), t.ceil(e), this.transformAABB(i.invert(), t)
                    }
                }
            }
            Et.extension = {
                type: o.n.RendererSystem,
                name: "filter"
            }, o.R.add(Et);
            class wt {
                constructor(t) {
                    this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = s.G5.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
                }
            }
            const It = new M.Ae;
            class Rt {
                constructor(t) {
                    this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new lt(10, 10), this.msaaSamples = null
                }
                contextChange() {
                    this.disposeAll(!0);
                    const t = this.gl = this.renderer.gl;
                    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new M.Ae, this.hasMRT = !0, this.writeDepthTexture = !0, 1 === this.renderer.context.webGLVersion) {
                        let e = this.renderer.context.extensions.drawBuffers,
                            r = this.renderer.context.extensions.depthTexture;
                        i.Xd.PREFER_ENV === s.Vi.WEBGL_LEGACY && (e = null, r = null), e ? t.drawBuffers = t => e.drawBuffersWEBGL(t) : (this.hasMRT = !1, t.drawBuffers = () => {}), r || (this.writeDepthTexture = !1)
                    } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
                }
                bind(t, e, r = 0) {
                    const {
                        gl: s
                    } = this;
                    if (t) {
                        const i = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                        this.current !== t && (this.current = t, s.bindFramebuffer(s.FRAMEBUFFER, i.framebuffer)), i.mipLevel !== r && (t.dirtyId++, t.dirtyFormat++, i.mipLevel = r), i.dirtyId !== t.dirtyId && (i.dirtyId = t.dirtyId, i.dirtyFormat !== t.dirtyFormat ? (i.dirtyFormat = t.dirtyFormat, i.dirtySize = t.dirtySize, this.updateFramebuffer(t, r)) : i.dirtySize !== t.dirtySize && (i.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                        for (let e = 0; e < t.colorTextures.length; e++) {
                            const r = t.colorTextures[e];
                            this.renderer.texture.unbind(r.parentTextureArray || r)
                        }
                        if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
                            const t = e.width >> r,
                                s = e.height >> r,
                                i = t / e.width;
                            this.setViewport(e.x * i, e.y * i, t, s)
                        } else {
                            const e = t.width >> r,
                                s = t.height >> r;
                            this.setViewport(0, 0, e, s)
                        }
                    } else this.current && (this.current = null, s.bindFramebuffer(s.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
                }
                setViewport(t, e, r, s) {
                    const i = this.viewport;
                    t = Math.round(t), e = Math.round(e), r = Math.round(r), s = Math.round(s), (i.width !== r || i.height !== s || i.x !== t || i.y !== e) && (i.x = t, i.y = e, i.width = r, i.height = s, this.gl.viewport(t, e, r, s))
                }
                get size() {
                    return this.current ? {
                        x: 0,
                        y: 0,
                        width: this.current.width,
                        height: this.current.height
                    } : {
                        x: 0,
                        y: 0,
                        width: this.renderer.width,
                        height: this.renderer.height
                    }
                }
                clear(t, e, r, i, n = s.V0.COLOR | s.V0.DEPTH) {
                    const {
                        gl: a
                    } = this;
                    a.clearColor(t, e, r, i), a.clear(n)
                }
                initFramebuffer(t) {
                    const {
                        gl: e
                    } = this, r = new wt(e.createFramebuffer());
                    return r.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = r, this.managedFramebuffers.push(t), t.disposeRunner.add(this), r
                }
                resizeFramebuffer(t) {
                    const {
                        gl: e
                    } = this, r = t.glFramebuffers[this.CONTEXT_UID];
                    if (r.stencil) {
                        let s;
                        e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), s = 1 === this.renderer.context.webGLVersion ? e.DEPTH_STENCIL : t.depth && t.stencil ? e.DEPTH24_STENCIL8 : t.depth ? e.DEPTH_COMPONENT24 : e.STENCIL_INDEX8, r.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, s, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, s, t.width, t.height)
                    }
                    const s = t.colorTextures;
                    let i = s.length;
                    e.drawBuffers || (i = Math.min(i, 1));
                    for (let n = 0; n < i; n++) {
                        const i = s[n],
                            a = i.parentTextureArray || i;
                        this.renderer.texture.bind(a, 0), 0 === n && r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, a._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height))
                    }
                    t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
                }
                updateFramebuffer(t, e) {
                    const {
                        gl: r
                    } = this, s = t.glFramebuffers[this.CONTEXT_UID], i = t.colorTextures;
                    let n = i.length;
                    r.drawBuffers || (n = Math.min(n, 1)), s.multisample > 1 && this.canMultisampleFramebuffer(t) ? s.msaaBuffer = s.msaaBuffer || r.createRenderbuffer() : s.msaaBuffer && (r.deleteRenderbuffer(s.msaaBuffer), s.msaaBuffer = null, s.blitFramebuffer && (s.blitFramebuffer.dispose(), s.blitFramebuffer = null));
                    const a = [];
                    for (let o = 0; o < n; o++) {
                        const n = i[o],
                            h = n.parentTextureArray || n;
                        this.renderer.texture.bind(h, 0), 0 === o && s.msaaBuffer ? (r.bindRenderbuffer(r.RENDERBUFFER, s.msaaBuffer), r.renderbufferStorageMultisample(r.RENDERBUFFER, s.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, s.msaaBuffer)) : (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + o, n.target, h._glTextures[this.CONTEXT_UID].texture, e), a.push(r.COLOR_ATTACHMENT0 + o))
                    }
                    if (a.length > 1 && r.drawBuffers(a), t.depthTexture && this.writeDepthTexture) {
                        const s = t.depthTexture;
                        this.renderer.texture.bind(s, 0), r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, s._glTextures[this.CONTEXT_UID].texture, e)
                    }
                    if (!t.stencil && !t.depth || t.depthTexture && this.writeDepthTexture) s.stencil && (r.deleteRenderbuffer(s.stencil), s.stencil = null);
                    else {
                        let e, i;
                        s.stencil = s.stencil || r.createRenderbuffer(), 1 === this.renderer.context.webGLVersion ? (e = r.DEPTH_STENCIL_ATTACHMENT, i = r.DEPTH_STENCIL) : t.depth && t.stencil ? (e = r.DEPTH_STENCIL_ATTACHMENT, i = r.DEPTH24_STENCIL8) : t.depth ? (e = r.DEPTH_ATTACHMENT, i = r.DEPTH_COMPONENT24) : (e = r.STENCIL_ATTACHMENT, i = r.STENCIL_INDEX8), r.bindRenderbuffer(r.RENDERBUFFER, s.stencil), s.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, s.multisample, i, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, i, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, e, r.RENDERBUFFER, s.stencil)
                    }
                }
                canMultisampleFramebuffer(t) {
                    return 1 !== this.renderer.context.webGLVersion && t.colorTextures.length <= 1 && !t.depthTexture
                }
                detectSamples(t) {
                    const {
                        msaaSamples: e
                    } = this;
                    let r = s.G5.NONE;
                    if (t <= 1 || null === e) return r;
                    for (let s = 0; s < e.length; s++)
                        if (e[s] <= t) {
                            r = e[s];
                            break
                        }
                    return 1 === r && (r = s.G5.NONE), r
                }
                blit(t, e, r) {
                    const {
                        current: s,
                        renderer: i,
                        gl: n,
                        CONTEXT_UID: a
                    } = this;
                    if (2 !== i.context.webGLVersion || !s) return;
                    const o = s.glFramebuffers[a];
                    if (!o) return;
                    if (!t) {
                        if (!o.msaaBuffer) return;
                        const e = s.colorTextures[0];
                        if (!e) return;
                        o.blitFramebuffer || (o.blitFramebuffer = new lt(s.width, s.height), o.blitFramebuffer.addColorTexture(0, e)), (t = o.blitFramebuffer).colorTextures[0] !== e && (t.colorTextures[0] = e, t.dirtyId++, t.dirtyFormat++), (t.width !== s.width || t.height !== s.height) && (t.width = s.width, t.height = s.height, t.dirtyId++, t.dirtySize++)
                    }
                    e || ((e = It).width = s.width, e.height = s.height), r || (r = e);
                    const h = e.width === r.width && e.height === r.height;
                    this.bind(t), n.bindFramebuffer(n.READ_FRAMEBUFFER, o.framebuffer), n.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, n.COLOR_BUFFER_BIT, h ? n.NEAREST : n.LINEAR), n.bindFramebuffer(n.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer)
                }
                disposeFramebuffer(t, e) {
                    const r = t.glFramebuffers[this.CONTEXT_UID],
                        s = this.gl;
                    if (!r) return;
                    delete t.glFramebuffers[this.CONTEXT_UID];
                    const i = this.managedFramebuffers.indexOf(t);
                    i >= 0 && this.managedFramebuffers.splice(i, 1), t.disposeRunner.remove(this), e || (s.deleteFramebuffer(r.framebuffer), r.msaaBuffer && s.deleteRenderbuffer(r.msaaBuffer), r.stencil && s.deleteRenderbuffer(r.stencil)), r.blitFramebuffer && this.disposeFramebuffer(r.blitFramebuffer, e)
                }
                disposeAll(t) {
                    const e = this.managedFramebuffers;
                    this.managedFramebuffers = [];
                    for (let r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t)
                }
                forceStencil() {
                    const t = this.current;
                    if (!t) return;
                    const e = t.glFramebuffers[this.CONTEXT_UID];
                    if (!e || e.stencil && t.stencil) return;
                    t.stencil = !0;
                    const r = t.width,
                        s = t.height,
                        i = this.gl,
                        n = e.stencil = i.createRenderbuffer();
                    let a, o;
                    i.bindRenderbuffer(i.RENDERBUFFER, n), 1 === this.renderer.context.webGLVersion ? (a = i.DEPTH_STENCIL_ATTACHMENT, o = i.DEPTH_STENCIL) : t.depth ? (a = i.DEPTH_STENCIL_ATTACHMENT, o = i.DEPTH24_STENCIL8) : (a = i.STENCIL_ATTACHMENT, o = i.STENCIL_INDEX8), e.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, e.multisample, o, r, s) : i.renderbufferStorage(i.RENDERBUFFER, o, r, s), i.framebufferRenderbuffer(i.FRAMEBUFFER, a, i.RENDERBUFFER, n)
                }
                reset() {
                    this.current = this.unknownFramebuffer, this.viewport = new M.Ae
                }
                destroy() {
                    this.renderer = null
                }
            }
            Rt.extension = {
                type: o.n.RendererSystem,
                name: "framebuffer"
            }, o.R.add(Rt);
            const St = {
                5126: 4,
                5123: 2,
                5121: 1
            };
            class Ct {
                constructor(t) {
                    this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
                }
                contextChange() {
                    this.disposeAll(!0);
                    const t = this.gl = this.renderer.gl,
                        e = this.renderer.context;
                    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== e.webGLVersion) {
                        let e = this.renderer.context.extensions.vertexArrayObject;
                        i.Xd.PREFER_ENV === s.Vi.WEBGL_LEGACY && (e = null), e ? (t.createVertexArray = () => e.createVertexArrayOES(), t.bindVertexArray = t => e.bindVertexArrayOES(t), t.deleteVertexArray = t => e.deleteVertexArrayOES(t)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null)
                    }
                    if (2 !== e.webGLVersion) {
                        const e = t.getExtension("ANGLE_instanced_arrays");
                        e ? (t.vertexAttribDivisor = (t, r) => e.vertexAttribDivisorANGLE(t, r), t.drawElementsInstanced = (t, r, s, i, n) => e.drawElementsInstancedANGLE(t, r, s, i, n), t.drawArraysInstanced = (t, r, s, i) => e.drawArraysInstancedANGLE(t, r, s, i)) : this.hasInstance = !1
                    }
                    this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
                }
                bind(t, e) {
                    e = e || this.renderer.shader.shader;
                    const {
                        gl: r
                    } = this;
                    let s = t.glVertexArrayObjects[this.CONTEXT_UID],
                        i = !1;
                    s || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = s = {}, i = !0);
                    const n = s[e.program.id] || this.initGeometryVao(t, e, i);
                    this._activeGeometry = t, this._activeVao !== n && (this._activeVao = n, this.hasVao ? r.bindVertexArray(n) : this.activateVao(t, e.program)), this.updateBuffers()
                }
                reset() {
                    this.unbind()
                }
                updateBuffers() {
                    const t = this._activeGeometry,
                        e = this.renderer.buffer;
                    for (let r = 0; r < t.buffers.length; r++) {
                        const s = t.buffers[r];
                        e.update(s)
                    }
                }
                checkCompatibility(t, e) {
                    const r = t.attributes,
                        s = e.attributeData;
                    for (const t in s)
                        if (!r[t]) throw new Error(`shader and geometry incompatible, geometry missing the "${t}" attribute`)
                }
                getSignature(t, e) {
                    const r = t.attributes,
                        s = e.attributeData,
                        i = ["g", t.id];
                    for (const t in r) s[t] && i.push(t, s[t].location);
                    return i.join("-")
                }
                initGeometryVao(t, e, r = !0) {
                    const i = this.gl,
                        n = this.CONTEXT_UID,
                        a = this.renderer.buffer,
                        o = e.program;
                    o.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, o);
                    const h = this.getSignature(t, o),
                        l = t.glVertexArrayObjects[this.CONTEXT_UID];
                    let u = l[h];
                    if (u) return l[o.id] = u, u;
                    const c = t.buffers,
                        d = t.attributes,
                        f = {},
                        p = {};
                    for (const t in c) f[t] = 0, p[t] = 0;
                    for (const t in d) !d[t].size && o.attributeData[t] ? d[t].size = o.attributeData[t].size : d[t].size || console.warn(`PIXI Geometry attribute '${t}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[t].buffer] += d[t].size * St[d[t].type];
                    for (const t in d) {
                        const e = d[t],
                            r = e.size;
                        void 0 === e.stride && (f[e.buffer] === r * St[e.type] ? e.stride = 0 : e.stride = f[e.buffer]), void 0 === e.start && (e.start = p[e.buffer], p[e.buffer] += r * St[e.type])
                    }
                    u = i.createVertexArray(), i.bindVertexArray(u);
                    for (let t = 0; t < c.length; t++) {
                        const e = c[t];
                        a.bind(e), r && e._glBuffers[n].refCount++
                    }
                    return this.activateVao(t, o), l[o.id] = u, l[h] = u, i.bindVertexArray(null), a.unbind(s.mr.ARRAY_BUFFER), u
                }
                disposeGeometry(t, e) {
                    if (!this.managedGeometries[t.id]) return;
                    delete this.managedGeometries[t.id];
                    const r = t.glVertexArrayObjects[this.CONTEXT_UID],
                        s = this.gl,
                        i = t.buffers,
                        n = this.renderer ? .buffer;
                    if (t.disposeRunner.remove(this), r) {
                        if (n)
                            for (let t = 0; t < i.length; t++) {
                                const r = i[t]._glBuffers[this.CONTEXT_UID];
                                r && (r.refCount--, 0 === r.refCount && !e && n.dispose(i[t], e))
                            }
                        if (!e)
                            for (const t in r)
                                if ("g" === t[0]) {
                                    const e = r[t];
                                    this._activeVao === e && this.unbind(), s.deleteVertexArray(e)
                                }
                        delete t.glVertexArrayObjects[this.CONTEXT_UID]
                    }
                }
                disposeAll(t) {
                    const e = Object.keys(this.managedGeometries);
                    for (let r = 0; r < e.length; r++) this.disposeGeometry(this.managedGeometries[e[r]], t)
                }
                activateVao(t, e) {
                    const r = this.gl,
                        s = this.CONTEXT_UID,
                        i = this.renderer.buffer,
                        n = t.buffers,
                        a = t.attributes;
                    t.indexBuffer && i.bind(t.indexBuffer);
                    let o = null;
                    for (const t in a) {
                        const h = a[t],
                            l = n[h.buffer],
                            u = l._glBuffers[s];
                        if (e.attributeData[t]) {
                            o !== u && (i.bind(l), o = u);
                            const s = e.attributeData[t].location;
                            if (r.enableVertexAttribArray(s), r.vertexAttribPointer(s, h.size, h.type || r.FLOAT, h.normalized, h.stride, h.start), h.instance) {
                                if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                                r.vertexAttribDivisor(s, h.divisor)
                            }
                        }
                    }
                }
                draw(t, e, r, s) {
                    const {
                        gl: i
                    } = this, n = this._activeGeometry;
                    if (n.indexBuffer) {
                        const a = n.indexBuffer.data.BYTES_PER_ELEMENT,
                            o = 2 === a ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
                        2 === a || 4 === a && this.canUseUInt32ElementIndex ? n.instanced ? i.drawElementsInstanced(t, e || n.indexBuffer.data.length, o, (r || 0) * a, s || 1) : i.drawElements(t, e || n.indexBuffer.data.length, o, (r || 0) * a) : console.warn("unsupported index buffer type: uint32")
                    } else n.instanced ? i.drawArraysInstanced(t, r, e || n.getSize(), s || 1) : i.drawArrays(t, r, e || n.getSize());
                    return this
                }
                unbind() {
                    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
                }
                destroy() {
                    this.renderer = null
                }
            }
            Ct.extension = {
                type: o.n.RendererSystem,
                name: "geometry"
            }, o.R.add(Ct);
            const Pt = new M.y3;
            class Mt {
                constructor(t, e) {
                    this._texture = t, this.mapCoord = new M.y3, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof e > "u" ? .5 : e, this.isSimple = !1
                }
                get texture() {
                    return this._texture
                }
                set texture(t) {
                    this._texture = t, this._textureID = -1
                }
                multiplyUvs(t, e) {
                    void 0 === e && (e = t);
                    const r = this.mapCoord;
                    for (let s = 0; s < t.length; s += 2) {
                        const i = t[s],
                            n = t[s + 1];
                        e[s] = i * r.a + n * r.c + r.tx, e[s + 1] = i * r.b + n * r.d + r.ty
                    }
                    return e
                }
                update(t) {
                    const e = this._texture;
                    if (!e || !e.valid || !t && this._textureID === e._updateID) return !1;
                    this._textureID = e._updateID, this._updateID++;
                    const r = e._uvs;
                    this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                    const s = e.orig,
                        i = e.trim;
                    i && (Pt.set(s.width / i.width, 0, 0, s.height / i.height, -i.x / i.width, -i.y / i.height), this.mapCoord.append(Pt));
                    const n = e.baseTexture,
                        a = this.uClampFrame,
                        o = this.clampMargin / n.resolution,
                        h = this.clampOffset;
                    return a[0] = (e._frame.x + o + h) / n.width, a[1] = (e._frame.y + o + h) / n.height, a[2] = (e._frame.x + e._frame.width - o + h) / n.width, a[3] = (e._frame.y + e._frame.height - o + h) / n.height, this.uClampOffset[0] = h / n.realWidth, this.uClampOffset[1] = h / n.realHeight, this.isSimple = e._frame.width === n.width && e._frame.height === n.height && 0 === e.rotate, !0
                }
            }
            class Nt extends it {
                constructor(t, e, r) {
                    let s = null;
                    "string" != typeof t && void 0 === e && void 0 === r && (s = t, t = void 0, e = void 0, r = void 0), super(t || "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", e || "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n", r), this.maskSprite = s, this.maskMatrix = new M.y3
                }
                get maskSprite() {
                    return this._maskSprite
                }
                set maskSprite(t) {
                    this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1)
                }
                apply(t, e, r, s) {
                    const i = this._maskSprite,
                        n = i._texture;
                    n.valid && (n.uvMatrix || (n.uvMatrix = new Mt(n, 0)), n.uvMatrix.update(), this.uniforms.npmAlpha = n.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = n, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, i).prepend(n.uvMatrix.mapCoord), this.uniforms.alpha = i.worldAlpha, this.uniforms.maskClamp = n.uvMatrix.uClampFrame, t.applyFilter(this, e, r, s))
                }
            }
            class Ot {
                constructor(t = null) {
                    this.type = s.A7.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = it.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null
                }
                get filter() {
                    return this._filters ? this._filters[0] : null
                }
                set filter(t) {
                    t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null
                }
                reset() {
                    this.pooled && (this.maskObject = null, this.type = s.A7.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null
                }
                copyCountersOrReset(t) {
                    t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
                }
            }
            class Bt {
                constructor(t) {
                    this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
                }
                setMaskStack(t) {
                    this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
                }
                push(t, e) {
                    let r = e;
                    if (!r.isMaskData) {
                        const t = this.maskDataPool.pop() || new Ot;
                        t.pooled = !0, t.maskObject = e, r = t
                    }
                    const i = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null;
                    if (r.copyCountersOrReset(i), r._colorMask = i ? i._colorMask : 15, r.autoDetect && this.detect(r), r._target = t, r.type !== s.A7.SPRITE && this.maskStack.push(r), r.enabled) switch (r.type) {
                        case s.A7.SCISSOR:
                            this.renderer.scissor.push(r);
                            break;
                        case s.A7.STENCIL:
                            this.renderer.stencil.push(r);
                            break;
                        case s.A7.SPRITE:
                            r.copyCountersOrReset(null), this.pushSpriteMask(r);
                            break;
                        case s.A7.COLOR:
                            this.pushColorMask(r)
                    }
                    r.type === s.A7.SPRITE && this.maskStack.push(r)
                }
                pop(t) {
                    const e = this.maskStack.pop();
                    if (e && e._target === t) {
                        if (e.enabled) switch (e.type) {
                            case s.A7.SCISSOR:
                                this.renderer.scissor.pop(e);
                                break;
                            case s.A7.STENCIL:
                                this.renderer.stencil.pop(e.maskObject);
                                break;
                            case s.A7.SPRITE:
                                this.popSpriteMask(e);
                                break;
                            case s.A7.COLOR:
                                this.popColorMask(e)
                        }
                        if (e.reset(), e.pooled && this.maskDataPool.push(e), 0 !== this.maskStack.length) {
                            const t = this.maskStack[this.maskStack.length - 1];
                            t.type === s.A7.SPRITE && t._filters && (t._filters[0].maskSprite = t.maskObject)
                        }
                    }
                }
                detect(t) {
                    const e = t.maskObject;
                    e ? e.isSprite ? t.type = s.A7.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = s.A7.SCISSOR : t.type = s.A7.STENCIL : t.type = s.A7.COLOR
                }
                pushSpriteMask(t) {
                    const {
                        maskObject: e
                    } = t, r = t._target;
                    let s = t._filters;
                    s || (s = this.alphaMaskPool[this.alphaMaskIndex], s || (s = this.alphaMaskPool[this.alphaMaskIndex] = [new Nt])), s[0].resolution = t.resolution, s[0].multisample = t.multisample, s[0].maskSprite = e;
                    const i = r.filterArea;
                    r.filterArea = e.getBounds(!0), this.renderer.filter.push(r, s), r.filterArea = i, t._filters || this.alphaMaskIndex++
                }
                popSpriteMask(t) {
                    this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
                }
                pushColorMask(t) {
                    const e = t._colorMask,
                        r = t._colorMask = e & t.colorMask;
                    r !== e && this.renderer.gl.colorMask(0 != (1 & r), 0 != (2 & r), 0 != (4 & r), 0 != (8 & r))
                }
                popColorMask(t) {
                    const e = t._colorMask,
                        r = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
                    r !== e && this.renderer.gl.colorMask(0 != (1 & r), 0 != (2 & r), 0 != (4 & r), 0 != (8 & r))
                }
                destroy() {
                    this.renderer = null
                }
            }
            Bt.extension = {
                type: o.n.RendererSystem,
                name: "mask"
            }, o.R.add(Bt);
            class Ft {
                constructor(t) {
                    this.renderer = t, this.maskStack = [], this.glConst = 0
                }
                getStackLength() {
                    return this.maskStack.length
                }
                setMaskStack(t) {
                    const {
                        gl: e
                    } = this.renderer, r = this.getStackLength();
                    this.maskStack = t;
                    const s = this.getStackLength();
                    s !== r && (0 === s ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
                }
                _useCurrent() {}
                destroy() {
                    this.renderer = null, this.maskStack = null
                }
            }
            const Dt = new M.y3,
                Lt = [],
                Ut = class t extends Ft {
                    constructor(t) {
                        super(t), this.glConst = i.Xd.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST
                    }
                    getStackLength() {
                        const t = this.maskStack[this.maskStack.length - 1];
                        return t ? t._scissorCounter : 0
                    }
                    calcScissorRect(t) {
                        if (t._scissorRectLocal) return;
                        const e = t._scissorRect,
                            {
                                maskObject: r
                            } = t,
                            {
                                renderer: s
                            } = this,
                            i = s.renderTexture,
                            n = r.getBounds(!0, Lt.pop() ? ? new M.Ae);
                        this.roundFrameToPixels(n, i.current ? i.current.resolution : s.resolution, i.sourceFrame, i.destinationFrame, s.projection.transform), e && n.fit(e), t._scissorRectLocal = n
                    }
                    static isMatrixRotated(t) {
                        if (!t) return !1;
                        const {
                            a: e,
                            b: r,
                            c: s,
                            d: i
                        } = t;
                        return (Math.abs(r) > 1e-4 || Math.abs(s) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(i) > 1e-4)
                    }
                    testScissor(e) {
                        const {
                            maskObject: r
                        } = e;
                        if (!r.isFastRect || !r.isFastRect() || t.isMatrixRotated(r.worldTransform) || t.isMatrixRotated(this.renderer.projection.transform)) return !1;
                        this.calcScissorRect(e);
                        const s = e._scissorRectLocal;
                        return s.width > 0 && s.height > 0
                    }
                    roundFrameToPixels(e, r, s, i, n) {
                        t.isMatrixRotated(n) || ((n = n ? Dt.copyFrom(n) : Dt.identity()).translate(-s.x, -s.y).scale(i.width / s.width, i.height / s.height).translate(i.x, i.y), this.renderer.filter.transformAABB(n, e), e.fit(i), e.x = Math.round(e.x * r), e.y = Math.round(e.y * r), e.width = Math.round(e.width * r), e.height = Math.round(e.height * r))
                    }
                    push(t) {
                        t._scissorRectLocal || this.calcScissorRect(t);
                        const {
                            gl: e
                        } = this.renderer;
                        t._scissorRect || e.enable(e.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = t._scissorRectLocal, this._useCurrent()
                    }
                    pop(t) {
                        const {
                            gl: e
                        } = this.renderer;
                        t && Lt.push(t._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
                    }
                    _useCurrent() {
                        const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
                        let e;
                        e = this.renderer.renderTexture.current ? t.y : this.renderer.height - t.height - t.y, this.renderer.gl.scissor(t.x, e, t.width, t.height)
                    }
                };
            Ut.extension = {
                type: o.n.RendererSystem,
                name: "scissor"
            };
            let kt = Ut;
            o.R.add(kt);
            class Gt extends Ft {
                constructor(t) {
                    super(t), this.glConst = i.Xd.ADAPTER.getWebGLRenderingContext().STENCIL_TEST
                }
                getStackLength() {
                    const t = this.maskStack[this.maskStack.length - 1];
                    return t ? t._stencilCounter : 0
                }
                push(t) {
                    const e = t.maskObject,
                        {
                            gl: r
                        } = this.renderer,
                        s = t._stencilCounter;
                    0 === s && (this.renderer.framebuffer.forceStencil(), r.clearStencil(0), r.clear(r.STENCIL_BUFFER_BIT), r.enable(r.STENCIL_TEST)), t._stencilCounter++;
                    const i = t._colorMask;
                    0 !== i && (t._colorMask = 0, r.colorMask(!1, !1, !1, !1)), r.stencilFunc(r.EQUAL, s, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, 0 !== i && (t._colorMask = i, r.colorMask(0 != (1 & i), 0 != (2 & i), 0 != (4 & i), 0 != (8 & i))), this._useCurrent()
                }
                pop(t) {
                    const e = this.renderer.gl;
                    if (0 === this.getStackLength()) e.disable(e.STENCIL_TEST);
                    else {
                        const r = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null,
                            s = r ? r._colorMask : 15;
                        0 !== s && (r._colorMask = 0, e.colorMask(!1, !1, !1, !1)), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, 0 !== s && (r._colorMask = s, e.colorMask(0 != (1 & s), 0 != (2 & s), 0 != (4 & s), 0 != (8 & s))), this._useCurrent()
                    }
                }
                _useCurrent() {
                    const t = this.renderer.gl;
                    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
                }
            }
            Gt.extension = {
                type: o.n.RendererSystem,
                name: "stencil"
            }, o.R.add(Gt);
            class jt {
                constructor(t) {
                    this.renderer = t, this.plugins = {}, Object.defineProperties(this.plugins, {
                        extract: {
                            enumerable: !1,
                            get: () => ((0, n.deprecation)("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), t.extract)
                        },
                        prepare: {
                            enumerable: !1,
                            get: () => ((0, n.deprecation)("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), t.prepare)
                        },
                        interaction: {
                            enumerable: !1,
                            get: () => ((0, n.deprecation)("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), t.events)
                        }
                    })
                }
                init() {
                    const t = this.rendererPlugins;
                    for (const e in t) this.plugins[e] = new t[e](this.renderer)
                }
                destroy() {
                    for (const t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null
                }
            }
            jt.extension = {
                type: [o.n.RendererSystem, o.n.CanvasRendererSystem],
                name: "_plugin"
            }, o.R.add(jt);
            class Ht {
                constructor(t) {
                    this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new M.y3, this.transform = null
                }
                update(t, e, r, s) {
                    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, s), this.transform && this.projectionMatrix.append(this.transform);
                    const i = this.renderer;
                    i.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, i.globalUniforms.update(), i.shader.shader && i.shader.syncUniformGroup(i.shader.shader.uniforms.globals)
                }
                calculateProjection(t, e, r, s) {
                    const i = this.projectionMatrix,
                        n = s ? -1 : 1;
                    i.identity(), i.a = 1 / e.width * 2, i.d = n * (1 / e.height * 2), i.tx = -1 - e.x * i.a, i.ty = -n - e.y * i.d
                }
                setTransform(t) {}
                destroy() {
                    this.renderer = null
                }
            }
            Ht.extension = {
                type: o.n.RendererSystem,
                name: "projection"
            }, o.R.add(Ht);
            const Vt = new M.wx,
                Xt = new M.Ae;
            class $t {
                constructor(t) {
                    this.renderer = t, this._tempMatrix = new M.y3
                }
                generateTexture(t, e) {
                    const {
                        region: r,
                        ...s
                    } = e || {}, i = r ? .copyTo(Xt) || t.getLocalBounds(Xt, !0), n = s.resolution || this.renderer.resolution;
                    i.width = Math.max(i.width, 1 / n), i.height = Math.max(i.height, 1 / n), s.width = i.width, s.height = i.height, s.resolution = n, s.multisample ? ? (s.multisample = this.renderer.multisample);
                    const a = yt.create(s);
                    this._tempMatrix.tx = -i.x, this._tempMatrix.ty = -i.y;
                    const o = t.transform;
                    return t.transform = Vt, this.renderer.render(t, {
                        renderTexture: a,
                        transform: this._tempMatrix,
                        skipUpdateTransform: !!t.parent,
                        blit: !0
                    }), t.transform = o, a
                }
                destroy() {}
            }
            $t.extension = {
                type: [o.n.RendererSystem, o.n.CanvasRendererSystem],
                name: "textureGenerator"
            }, o.R.add($t);
            const Wt = new M.Ae,
                zt = new M.Ae;
            class Yt {
                constructor(t) {
                    this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new M.Ae, this.destinationFrame = new M.Ae, this.viewportFrame = new M.Ae
                }
                contextChange() {
                    const t = this.renderer ? .gl.getContextAttributes();
                    this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha)
                }
                bind(t = null, e, r) {
                    const s = this.renderer;
                    let i, n, a;
                    this.current = t, t ? (i = t.baseTexture, a = i.resolution, e || (Wt.width = t.frame.width, Wt.height = t.frame.height, e = Wt), r || (zt.x = t.frame.x, zt.y = t.frame.y, zt.width = e.width, zt.height = e.height, r = zt), n = i.framebuffer) : (a = s.resolution, e || (Wt.width = s._view.screen.width, Wt.height = s._view.screen.height, e = Wt), r || ((r = Wt).width = e.width, r.height = e.height));
                    const o = this.viewportFrame;
                    o.x = r.x * a, o.y = r.y * a, o.width = r.width * a, o.height = r.height * a, t || (o.y = s.view.height - (o.y + o.height)), o.ceil(), this.renderer.framebuffer.bind(n, o), this.renderer.projection.update(r, e, a, !n), t ? this.renderer.mask.setMaskStack(i.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(r)
                }
                clear(t, e) {
                    const r = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor,
                        s = a.I.shared.setValue(t || r);
                    (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && s.premultiply(s.alpha);
                    const i = this.destinationFrame,
                        n = this.current ? this.current.baseTexture : this.renderer._view.screen,
                        o = i.width !== n.width || i.height !== n.height;
                    if (o) {
                        let {
                            x: t,
                            y: e,
                            width: r,
                            height: s
                        } = this.viewportFrame;
                        t = Math.round(t), e = Math.round(e), r = Math.round(r), s = Math.round(s), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(t, e, r, s)
                    }
                    this.renderer.framebuffer.clear(s.red, s.green, s.blue, s.alpha, e), o && this.renderer.scissor.pop()
                }
                resize() {
                    this.bind(null)
                }
                reset() {
                    this.bind(null)
                }
                destroy() {
                    this.renderer = null
                }
            }
            Yt.extension = {
                type: o.n.RendererSystem,
                name: "renderTexture"
            }, o.R.add(Yt);
            class qt {}
            class Kt {
                constructor(t, e) {
                    this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
                }
                destroy() {
                    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
                }
            }

            function Zt(t, e, r) {
                const s = t.createShader(e);
                return t.shaderSource(s, r), t.compileShader(s), s
            }

            function Qt(t) {
                const e = new Array(t);
                for (let t = 0; t < e.length; t++) e[t] = !1;
                return e
            }

            function Jt(t, e) {
                switch (t) {
                    case "float":
                    case "int":
                    case "uint":
                    case "sampler2D":
                    case "sampler2DArray":
                        return 0;
                    case "vec2":
                        return new Float32Array(2 * e);
                    case "vec3":
                        return new Float32Array(3 * e);
                    case "vec4":
                        return new Float32Array(4 * e);
                    case "ivec2":
                        return new Int32Array(2 * e);
                    case "ivec3":
                        return new Int32Array(3 * e);
                    case "ivec4":
                        return new Int32Array(4 * e);
                    case "uvec2":
                        return new Uint32Array(2 * e);
                    case "uvec3":
                        return new Uint32Array(3 * e);
                    case "uvec4":
                        return new Uint32Array(4 * e);
                    case "bool":
                        return !1;
                    case "bvec2":
                        return Qt(2 * e);
                    case "bvec3":
                        return Qt(3 * e);
                    case "bvec4":
                        return Qt(4 * e);
                    case "mat2":
                        return new Float32Array([1, 0, 0, 1]);
                    case "mat3":
                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                    case "mat4":
                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
                return null
            }

            function te(t, e) {
                const r = t.getShaderSource(e).split("\n").map(((t, e) => `${e}: ${t}`)),
                    s = t.getShaderInfoLog(e),
                    i = s.split("\n"),
                    n = {},
                    a = i.map((t => parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")))).filter((t => !(!t || n[t] || (n[t] = !0, 0)))),
                    o = [""];
                a.forEach((t => {
                    r[t - 1] = `%c${r[t-1]}%c`, o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
                }));
                const h = r.join("\n");
                o[0] = h, console.error(s), console.groupCollapsed("click to view full shader code"), console.warn(...o), console.groupEnd()
            }

            function ee(t, e) {
                const r = Zt(t, t.VERTEX_SHADER, e.vertexSrc),
                    s = Zt(t, t.FRAGMENT_SHADER, e.fragmentSrc),
                    i = t.createProgram();
                t.attachShader(i, r), t.attachShader(i, s);
                const n = e.extra ? .transformFeedbackVaryings;
                if (n && ("function" != typeof t.transformFeedbackVaryings ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : t.transformFeedbackVaryings(i, n.names, "separate" === n.bufferMode ? t.SEPARATE_ATTRIBS : t.INTERLEAVED_ATTRIBS)), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS) || function(t, e, r, s) {
                        t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || te(t, r), t.getShaderParameter(s, t.COMPILE_STATUS) || te(t, s), console.error("PixiJS Error: Could not initialize shader."), "" !== t.getProgramInfoLog(e) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e)))
                    }(t, i, r, s), e.attributeData = function(t, e) {
                        const r = {},
                            s = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
                        for (let i = 0; i < s; i++) {
                            const s = e.getActiveAttrib(t, i);
                            if (s.name.startsWith("gl_")) continue;
                            const n = V(e, s.type),
                                a = {
                                    type: n,
                                    name: s.name,
                                    size: G(n),
                                    location: e.getAttribLocation(t, s.name)
                                };
                            r[s.name] = a
                        }
                        return r
                    }(i, t), e.uniformData = function(t, e) {
                        const r = {},
                            s = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
                        for (let i = 0; i < s; i++) {
                            const s = e.getActiveUniform(t, i),
                                n = s.name.replace(/\[.*?\]$/, ""),
                                a = !!s.name.match(/\[.*?\]$/),
                                o = V(e, s.type);
                            r[n] = {
                                name: n,
                                index: i,
                                type: o,
                                size: s.size,
                                isArray: a,
                                value: Jt(o, s.size)
                            }
                        }
                        return r
                    }(i, t), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
                    const r = Object.keys(e.attributeData);
                    r.sort(((t, e) => t > e ? 1 : -1));
                    for (let s = 0; s < r.length; s++) e.attributeData[r[s]].location = s, t.bindAttribLocation(i, s, r[s]);
                    t.linkProgram(i)
                }
                t.deleteShader(r), t.deleteShader(s);
                const a = {};
                for (const r in e.uniformData) {
                    const s = e.uniformData[r];
                    a[r] = {
                        location: t.getUniformLocation(i, r),
                        value: Jt(s.type, s.size)
                    }
                }
                return new Kt(i, a)
            }

            function re(t, e, r, s, i) {
                r.buffer.update(i)
            }
            const se = {
                    float: "\n        data[offset] = v;\n    ",
                    vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
                    vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
                    vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
                    mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
                    mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
                    mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
                },
                ie = {
                    float: 4,
                    vec2: 8,
                    vec3: 12,
                    vec4: 16,
                    int: 4,
                    ivec2: 8,
                    ivec3: 12,
                    ivec4: 16,
                    uint: 4,
                    uvec2: 8,
                    uvec3: 12,
                    uvec4: 16,
                    bool: 4,
                    bvec2: 8,
                    bvec3: 12,
                    bvec4: 16,
                    mat2: 32,
                    mat3: 48,
                    mat4: 64
                };

            function ne(t) {
                const e = t.map((t => ({
                    data: t,
                    offset: 0,
                    dataLen: 0,
                    dirty: 0
                })));
                let r = 0,
                    s = 0,
                    i = 0;
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (r = ie[n.data.type], n.data.size > 1 && (r = Math.max(r, 16) * n.data.size), n.dataLen = r, s % r != 0 && s < 16) {
                        const t = s % r % 16;
                        s += t, i += t
                    }
                    s + r > 16 ? (i = 16 * Math.ceil(i / 16), n.offset = i, i += r, s = r) : (n.offset = i, s += r, i += r)
                }
                return i = 16 * Math.ceil(i / 16), {
                    uboElements: e,
                    size: i
                }
            }

            function ae(t, e) {
                const r = [];
                for (const s in t) e[s] && r.push(e[s]);
                return r.sort(((t, e) => t.index - e.index)), r
            }

            function oe(t, e) {
                if (!t.autoManage) return {
                    size: 0,
                    syncFunc: re
                };
                const r = ae(t.uniforms, e),
                    {
                        uboElements: s,
                        size: i
                    } = ne(r),
                    n = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "];
                for (let e = 0; e < s.length; e++) {
                    const r = s[e],
                        i = t.uniforms[r.data.name],
                        a = r.data.name;
                    let o = !1;
                    for (let t = 0; t < N.length; t++) {
                        const e = N[t];
                        if (e.codeUbo && e.test(r.data, i)) {
                            n.push(`offset = ${r.offset/4};`, N[t].codeUbo(r.data.name, i)), o = !0;
                            break
                        }
                    }
                    if (!o)
                        if (r.data.size > 1) {
                            const t = G(r.data.type),
                                e = Math.max(ie[r.data.type] / 16, 1),
                                s = t / e,
                                i = (4 - s % 4) % 4;
                            n.push(`\n                cv = ud.${a}.value;\n                v = uv.${a};\n                offset = ${r.offset/4};\n\n                t = 0;\n\n                for(var i=0; i < ${r.data.size*e}; i++)\n                {\n                    for(var j = 0; j < ${s}; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += ${i};\n                }\n\n                `)
                        } else {
                            const t = se[r.data.type];
                            n.push(`\n                cv = ud.${a}.value;\n                v = uv.${a};\n                offset = ${r.offset/4};\n                ${t};\n                `)
                        }
                }
                return n.push("\n       renderer.buffer.update(buffer);\n    "), {
                    size: i,
                    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join("\n"))
                }
            }
            let he;

            function le() {
                if ("boolean" == typeof he) return he;
                try {
                    he = !0 === new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
                        a: "b"
                    }, "a", "b")
                } catch {
                    he = !1
                }
                return he
            }
            let ue = 0;
            const ce = {
                textureCount: 0,
                uboCount: 0
            };
            class de {
                constructor(t) {
                    this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = ue++
                }
                systemCheck() {
                    if (!le()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
                }
                contextChange(t) {
                    this.gl = t, this.reset()
                }
                bind(t, e) {
                    t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms;
                    const r = t.program,
                        s = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
                    return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(s.program)), e || (ce.textureCount = 0, ce.uboCount = 0, this.syncUniformGroup(t.uniformGroup, ce)), s
                }
                setUniforms(t) {
                    const e = this.shader.program,
                        r = e.glPrograms[this.renderer.CONTEXT_UID];
                    e.syncUniforms(r.uniformData, t, this.renderer)
                }
                syncUniformGroup(t, e) {
                    const r = this.getGlProgram();
                    (!t.static || t.dirtyId !== r.uniformDirtyGroups[t.id]) && (r.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, r, e))
                }
                syncUniforms(t, e, r) {
                    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r)
                }
                createSyncGroups(t) {
                    const e = this.getSignature(t, this.shader.program.uniformData, "u");
                    return this.cache[e] || (this.cache[e] = function(t, e) {
                        const r = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];
                        for (const s in t.uniforms) {
                            const i = e[s];
                            if (!i) {
                                !0 === t.uniforms[s] ? .group && (t.uniforms[s].ubo ? r.push(`\n                        renderer.shader.syncUniformBufferGroup(uv.${s}, '${s}');\n                    `) : r.push(`\n                        renderer.shader.syncUniformGroup(uv.${s}, syncData);\n                    `));
                                continue
                            }
                            const n = t.uniforms[s];
                            let a = !1;
                            for (let t = 0; t < N.length; t++)
                                if (N[t].test(i, n)) {
                                    r.push(N[t].code(s, n)), a = !0;
                                    break
                                }
                            if (!a) {
                                const t = (1 !== i.size || i.isArray ? B : O)[i.type].replace("location", `ud["${s}"].location`);
                                r.push(`\n            cu = ud["${s}"];\n            cv = cu.value;\n            v = uv["${s}"];\n            ${t};`)
                            }
                        }
                        return new Function("ud", "uv", "renderer", "syncData", r.join("\n"))
                    }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
                }
                syncUniformBufferGroup(t, e) {
                    const r = this.getGlProgram();
                    if (!t.static || 0 !== t.dirtyId || !r.uniformGroups[t.id]) {
                        t.dirtyId = 0;
                        const s = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
                        t.buffer.update(), s(r.uniformData, t.uniforms, this.renderer, ce, t.buffer)
                    }
                    this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e])
                }
                createSyncBufferGroup(t, e, r) {
                    const {
                        gl: s
                    } = this.renderer;
                    this.renderer.buffer.bind(t.buffer);
                    const i = this.gl.getUniformBlockIndex(e.program, r);
                    e.uniformBufferBindings[r] = this.shader.uniformBindCount, s.uniformBlockBinding(e.program, i, this.shader.uniformBindCount), this.shader.uniformBindCount++;
                    const n = this.getSignature(t, this.shader.program.uniformData, "ubo");
                    let a = this._uboCache[n];
                    if (a || (a = this._uboCache[n] = oe(t, this.shader.program.uniformData)), t.autoManage) {
                        const e = new Float32Array(a.size / 4);
                        t.buffer.update(e)
                    }
                    return e.uniformGroups[t.id] = a.syncFunc, e.uniformGroups[t.id]
                }
                getSignature(t, e, r) {
                    const s = t.uniforms,
                        i = [`${r}-`];
                    for (const t in s) i.push(t), e[t] && i.push(e[t].type);
                    return i.join("-")
                }
                getGlProgram() {
                    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
                }
                generateProgram(t) {
                    const e = this.gl,
                        r = t.program,
                        s = ee(e, r);
                    return r.glPrograms[this.renderer.CONTEXT_UID] = s, s
                }
                reset() {
                    this.program = null, this.shader = null
                }
                disposeShader(t) {
                    this.shader === t && (this.shader = null)
                }
                destroy() {
                    this.renderer = null, this.destroyed = !0
                }
            }
            de.extension = {
                type: o.n.RendererSystem,
                name: "shader"
            }, o.R.add(de);
            class fe {
                constructor(t) {
                    this.renderer = t
                }
                run(t) {
                    const {
                        renderer: e
                    } = this;
                    e.runners.init.emit(e.options), t.hello && console.log(`PixiJS 7.4.0 - ${e.rendererLogId} - https://pixijs.com`), e.resize(e.screen.width, e.screen.height)
                }
                destroy() {}
            }
            fe.defaultOptions = {
                hello: !1
            }, fe.extension = {
                type: [o.n.RendererSystem, o.n.CanvasRendererSystem],
                name: "startup"
            }, o.R.add(fe);
            const pe = class t {
                constructor() {
                    this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = s.T$.NONE, this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = new d, this.defaultState.blend = !0
                }
                contextChange(t) {
                    this.gl = t, this.blendModes = function(t, e = []) {
                        return e[s.T$.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.ADD] = [t.ONE, t.ONE], e[s.T$.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.NONE] = [0, 0], e[s.T$.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[s.T$.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.T$.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[s.T$.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[s.T$.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[s.T$.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[s.T$.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[s.T$.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[s.T$.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[s.T$.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[s.T$.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
                    }(t), this.set(this.defaultState), this.reset()
                }
                set(t) {
                    if (t = t || this.defaultState, this.stateId !== t.data) {
                        let e = this.stateId ^ t.data,
                            r = 0;
                        for (; e;) 1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;
                        this.stateId = t.data
                    }
                    for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t)
                }
                forceState(t) {
                    t = t || this.defaultState;
                    for (let e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
                    for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
                    this.stateId = t.data
                }
                setBlend(e) {
                    this.updateCheck(t.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND)
                }
                setOffset(e) {
                    this.updateCheck(t.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
                }
                setDepthTest(t) {
                    this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
                }
                setDepthMask(t) {
                    this.gl.depthMask(t)
                }
                setCullFace(t) {
                    this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
                }
                setFrontFace(t) {
                    this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
                }
                setBlendMode(t) {
                    if (t === this.blendMode) return;
                    this.blendMode = t;
                    const e = this.blendModes[t],
                        r = this.gl;
                    2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
                }
                setPolygonOffset(t, e) {
                    this.gl.polygonOffset(t, e)
                }
                reset() {
                    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
                }
                updateCheck(t, e) {
                    const r = this.checks.indexOf(t);
                    e && -1 === r ? this.checks.push(t) : !e && -1 !== r && this.checks.splice(r, 1)
                }
                static checkBlendMode(t, e) {
                    t.setBlendMode(e.blendMode)
                }
                static checkPolygonOffset(t, e) {
                    t.setPolygonOffset(1, e.polygonOffset)
                }
                destroy() {
                    this.gl = null
                }
            };
            pe.extension = {
                type: o.n.RendererSystem,
                name: "state"
            };
            let me = pe;
            o.R.add(me);
            class ge extends n.EventEmitter {
                constructor() {
                    super(...arguments), this.runners = {}, this._systemsHash = {}
                }
                setup(t) {
                    this.addRunners(...t.runners);
                    const e = (t.priority ? ? []).filter((e => t.systems[e])),
                        r = [...e, ...Object.keys(t.systems).filter((t => !e.includes(t)))];
                    for (const e of r) this.addSystem(t.systems[e], e)
                }
                addRunners(...t) {
                    t.forEach((t => {
                        this.runners[t] = new m(t)
                    }))
                }
                addSystem(t, e) {
                    const r = new t(this);
                    if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
                    this[e] = r, this._systemsHash[e] = r;
                    for (const t in this.runners) this.runners[t].add(r);
                    return this
                }
                emitWithCustomOptions(t, e) {
                    const r = Object.keys(this._systemsHash);
                    t.items.forEach((s => {
                        const i = r.find((t => this._systemsHash[t] === s));
                        s[t.name](e[i])
                    }))
                }
                destroy() {
                    Object.values(this.runners).forEach((t => {
                        t.destroy()
                    })), this._systemsHash = {}
                }
            }
            const ye = class t {
                constructor(e) {
                    this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = t.defaultMaxIdle, this.checkCountMax = t.defaultCheckCountMax, this.mode = t.defaultMode
                }
                postrender() {
                    this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== s.UN.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
                }
                run() {
                    const t = this.renderer.texture,
                        e = t.managedTextures;
                    let r = !1;
                    for (let s = 0; s < e.length; s++) {
                        const i = e[s];
                        i.resource && this.count - i.touched > this.maxIdle && (t.destroyTexture(i, !0), e[s] = null, r = !0)
                    }
                    if (r) {
                        let t = 0;
                        for (let r = 0; r < e.length; r++) null !== e[r] && (e[t++] = e[r]);
                        e.length = t
                    }
                }
                unload(t) {
                    const e = this.renderer.texture,
                        r = t._texture;
                    r && !r.framebuffer && e.destroyTexture(r);
                    for (let e = t.children.length - 1; e >= 0; e--) this.unload(t.children[e])
                }
                destroy() {
                    this.renderer = null
                }
            };
            ye.defaultMode = s.UN.AUTO, ye.defaultMaxIdle = 3600, ye.defaultCheckCountMax = 600, ye.extension = {
                type: o.n.RendererSystem,
                name: "textureGC"
            };
            let _e = ye;
            o.R.add(_e);
            class xe {
                constructor(t) {
                    this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = s.vK.UNSIGNED_BYTE, this.internalFormat = s.I2.RGBA, this.samplerType = 0
                }
            }
            class be {
                constructor(t) {
                    this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new b, this.hasIntegerTextures = !1
                }
                contextChange() {
                    const t = this.gl = this.renderer.gl;
                    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = function(t) {
                        let e;
                        return e = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext ? {
                            [s.vK.UNSIGNED_BYTE]: {
                                [s.I2.RGBA]: t.RGBA8,
                                [s.I2.RGB]: t.RGB8,
                                [s.I2.RG]: t.RG8,
                                [s.I2.RED]: t.R8,
                                [s.I2.RGBA_INTEGER]: t.RGBA8UI,
                                [s.I2.RGB_INTEGER]: t.RGB8UI,
                                [s.I2.RG_INTEGER]: t.RG8UI,
                                [s.I2.RED_INTEGER]: t.R8UI,
                                [s.I2.ALPHA]: t.ALPHA,
                                [s.I2.LUMINANCE]: t.LUMINANCE,
                                [s.I2.LUMINANCE_ALPHA]: t.LUMINANCE_ALPHA
                            },
                            [s.vK.BYTE]: {
                                [s.I2.RGBA]: t.RGBA8_SNORM,
                                [s.I2.RGB]: t.RGB8_SNORM,
                                [s.I2.RG]: t.RG8_SNORM,
                                [s.I2.RED]: t.R8_SNORM,
                                [s.I2.RGBA_INTEGER]: t.RGBA8I,
                                [s.I2.RGB_INTEGER]: t.RGB8I,
                                [s.I2.RG_INTEGER]: t.RG8I,
                                [s.I2.RED_INTEGER]: t.R8I
                            },
                            [s.vK.UNSIGNED_SHORT]: {
                                [s.I2.RGBA_INTEGER]: t.RGBA16UI,
                                [s.I2.RGB_INTEGER]: t.RGB16UI,
                                [s.I2.RG_INTEGER]: t.RG16UI,
                                [s.I2.RED_INTEGER]: t.R16UI,
                                [s.I2.DEPTH_COMPONENT]: t.DEPTH_COMPONENT16
                            },
                            [s.vK.SHORT]: {
                                [s.I2.RGBA_INTEGER]: t.RGBA16I,
                                [s.I2.RGB_INTEGER]: t.RGB16I,
                                [s.I2.RG_INTEGER]: t.RG16I,
                                [s.I2.RED_INTEGER]: t.R16I
                            },
                            [s.vK.UNSIGNED_INT]: {
                                [s.I2.RGBA_INTEGER]: t.RGBA32UI,
                                [s.I2.RGB_INTEGER]: t.RGB32UI,
                                [s.I2.RG_INTEGER]: t.RG32UI,
                                [s.I2.RED_INTEGER]: t.R32UI,
                                [s.I2.DEPTH_COMPONENT]: t.DEPTH_COMPONENT24
                            },
                            [s.vK.INT]: {
                                [s.I2.RGBA_INTEGER]: t.RGBA32I,
                                [s.I2.RGB_INTEGER]: t.RGB32I,
                                [s.I2.RG_INTEGER]: t.RG32I,
                                [s.I2.RED_INTEGER]: t.R32I
                            },
                            [s.vK.FLOAT]: {
                                [s.I2.RGBA]: t.RGBA32F,
                                [s.I2.RGB]: t.RGB32F,
                                [s.I2.RG]: t.RG32F,
                                [s.I2.RED]: t.R32F,
                                [s.I2.DEPTH_COMPONENT]: t.DEPTH_COMPONENT32F
                            },
                            [s.vK.HALF_FLOAT]: {
                                [s.I2.RGBA]: t.RGBA16F,
                                [s.I2.RGB]: t.RGB16F,
                                [s.I2.RG]: t.RG16F,
                                [s.I2.RED]: t.R16F
                            },
                            [s.vK.UNSIGNED_SHORT_5_6_5]: {
                                [s.I2.RGB]: t.RGB565
                            },
                            [s.vK.UNSIGNED_SHORT_4_4_4_4]: {
                                [s.I2.RGBA]: t.RGBA4
                            },
                            [s.vK.UNSIGNED_SHORT_5_5_5_1]: {
                                [s.I2.RGBA]: t.RGB5_A1
                            },
                            [s.vK.UNSIGNED_INT_2_10_10_10_REV]: {
                                [s.I2.RGBA]: t.RGB10_A2,
                                [s.I2.RGBA_INTEGER]: t.RGB10_A2UI
                            },
                            [s.vK.UNSIGNED_INT_10F_11F_11F_REV]: {
                                [s.I2.RGB]: t.R11F_G11F_B10F
                            },
                            [s.vK.UNSIGNED_INT_5_9_9_9_REV]: {
                                [s.I2.RGB]: t.RGB9_E5
                            },
                            [s.vK.UNSIGNED_INT_24_8]: {
                                [s.I2.DEPTH_STENCIL]: t.DEPTH24_STENCIL8
                            },
                            [s.vK.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
                                [s.I2.DEPTH_STENCIL]: t.DEPTH32F_STENCIL8
                            }
                        } : {
                            [s.vK.UNSIGNED_BYTE]: {
                                [s.I2.RGBA]: t.RGBA,
                                [s.I2.RGB]: t.RGB,
                                [s.I2.ALPHA]: t.ALPHA,
                                [s.I2.LUMINANCE]: t.LUMINANCE,
                                [s.I2.LUMINANCE_ALPHA]: t.LUMINANCE_ALPHA
                            },
                            [s.vK.UNSIGNED_SHORT_5_6_5]: {
                                [s.I2.RGB]: t.RGB
                            },
                            [s.vK.UNSIGNED_SHORT_4_4_4_4]: {
                                [s.I2.RGBA]: t.RGBA
                            },
                            [s.vK.UNSIGNED_SHORT_5_5_5_1]: {
                                [s.I2.RGBA]: t.RGBA
                            }
                        }, e
                    }(t), this.samplerTypes = function(t) {
                        let e;
                        return e = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext ? {
                            [t.RGB]: s.oT.FLOAT,
                            [t.RGBA]: s.oT.FLOAT,
                            [t.ALPHA]: s.oT.FLOAT,
                            [t.LUMINANCE]: s.oT.FLOAT,
                            [t.LUMINANCE_ALPHA]: s.oT.FLOAT,
                            [t.R8]: s.oT.FLOAT,
                            [t.R8_SNORM]: s.oT.FLOAT,
                            [t.RG8]: s.oT.FLOAT,
                            [t.RG8_SNORM]: s.oT.FLOAT,
                            [t.RGB8]: s.oT.FLOAT,
                            [t.RGB8_SNORM]: s.oT.FLOAT,
                            [t.RGB565]: s.oT.FLOAT,
                            [t.RGBA4]: s.oT.FLOAT,
                            [t.RGB5_A1]: s.oT.FLOAT,
                            [t.RGBA8]: s.oT.FLOAT,
                            [t.RGBA8_SNORM]: s.oT.FLOAT,
                            [t.RGB10_A2]: s.oT.FLOAT,
                            [t.RGB10_A2UI]: s.oT.FLOAT,
                            [t.SRGB8]: s.oT.FLOAT,
                            [t.SRGB8_ALPHA8]: s.oT.FLOAT,
                            [t.R16F]: s.oT.FLOAT,
                            [t.RG16F]: s.oT.FLOAT,
                            [t.RGB16F]: s.oT.FLOAT,
                            [t.RGBA16F]: s.oT.FLOAT,
                            [t.R32F]: s.oT.FLOAT,
                            [t.RG32F]: s.oT.FLOAT,
                            [t.RGB32F]: s.oT.FLOAT,
                            [t.RGBA32F]: s.oT.FLOAT,
                            [t.R11F_G11F_B10F]: s.oT.FLOAT,
                            [t.RGB9_E5]: s.oT.FLOAT,
                            [t.R8I]: s.oT.INT,
                            [t.R8UI]: s.oT.UINT,
                            [t.R16I]: s.oT.INT,
                            [t.R16UI]: s.oT.UINT,
                            [t.R32I]: s.oT.INT,
                            [t.R32UI]: s.oT.UINT,
                            [t.RG8I]: s.oT.INT,
                            [t.RG8UI]: s.oT.UINT,
                            [t.RG16I]: s.oT.INT,
                            [t.RG16UI]: s.oT.UINT,
                            [t.RG32I]: s.oT.INT,
                            [t.RG32UI]: s.oT.UINT,
                            [t.RGB8I]: s.oT.INT,
                            [t.RGB8UI]: s.oT.UINT,
                            [t.RGB16I]: s.oT.INT,
                            [t.RGB16UI]: s.oT.UINT,
                            [t.RGB32I]: s.oT.INT,
                            [t.RGB32UI]: s.oT.UINT,
                            [t.RGBA8I]: s.oT.INT,
                            [t.RGBA8UI]: s.oT.UINT,
                            [t.RGBA16I]: s.oT.INT,
                            [t.RGBA16UI]: s.oT.UINT,
                            [t.RGBA32I]: s.oT.INT,
                            [t.RGBA32UI]: s.oT.UINT,
                            [t.DEPTH_COMPONENT16]: s.oT.FLOAT,
                            [t.DEPTH_COMPONENT24]: s.oT.FLOAT,
                            [t.DEPTH_COMPONENT32F]: s.oT.FLOAT,
                            [t.DEPTH_STENCIL]: s.oT.FLOAT,
                            [t.DEPTH24_STENCIL8]: s.oT.FLOAT,
                            [t.DEPTH32F_STENCIL8]: s.oT.FLOAT
                        } : {
                            [t.RGB]: s.oT.FLOAT,
                            [t.RGBA]: s.oT.FLOAT,
                            [t.ALPHA]: s.oT.FLOAT,
                            [t.LUMINANCE]: s.oT.FLOAT,
                            [t.LUMINANCE_ALPHA]: s.oT.FLOAT,
                            [t.DEPTH_STENCIL]: s.oT.FLOAT
                        }, e
                    }(t);
                    const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                    this.boundTextures.length = e;
                    for (let t = 0; t < e; t++) this.boundTextures[t] = null;
                    this.emptyTextures = {};
                    const r = new xe(t.createTexture());
                    t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new xe(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
                    for (let e = 0; e < 6; e++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
                    for (let t = 0; t < this.boundTextures.length; t++) this.bind(null, t)
                }
                bind(t, e = 0) {
                    const {
                        gl: r
                    } = this;
                    if (t = t ? .castToBaseTexture(), t ? .valid && !t.parentTextureArray) {
                        t.touched = this.renderer.textureGC.count;
                        const s = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                        this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, s.texture)), s.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)) : s.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[e] = t
                    } else this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null
                }
                reset() {
                    this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
                    for (let t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
                }
                unbind(t) {
                    const {
                        gl: e,
                        boundTextures: r
                    } = this;
                    if (this._unknownBoundTextures) {
                        this._unknownBoundTextures = !1;
                        for (let t = 0; t < r.length; t++) r[t] === this.unknownTexture && this.bind(null, t)
                    }
                    for (let s = 0; s < r.length; s++) r[s] === t && (this.currentLocation !== s && (e.activeTexture(e.TEXTURE0 + s), this.currentLocation = s), e.bindTexture(t.target, this.emptyTextures[t.target].texture), r[s] = null)
                }
                ensureSamplerType(t) {
                    const {
                        boundTextures: e,
                        hasIntegerTextures: r,
                        CONTEXT_UID: i
                    } = this;
                    if (r)
                        for (let r = t - 1; r >= 0; --r) {
                            const t = e[r];
                            t && t._glTextures[i].samplerType !== s.oT.FLOAT && this.renderer.texture.unbind(t)
                        }
                }
                initTexture(t) {
                    const e = new xe(this.gl.createTexture());
                    return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
                }
                initTextureType(t, e) {
                    e.internalFormat = this.internalFormats[t.type] ? .[t.format] ? ? t.format, e.samplerType = this.samplerTypes[e.internalFormat] ? ? s.oT.FLOAT, 2 === this.webGLVersion && t.type === s.vK.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
                }
                updateTexture(t) {
                    const e = t._glTextures[this.CONTEXT_UID];
                    if (!e) return;
                    const r = this.renderer;
                    if (this.initTextureType(t, e), t.resource ? .upload(r, t, e)) e.samplerType !== s.oT.FLOAT && (this.hasIntegerTextures = !0);
                    else {
                        const s = t.realWidth,
                            i = t.realHeight,
                            n = r.gl;
                        (e.width !== s || e.height !== i || e.dirtyId < 0) && (e.width = s, e.height = i, n.texImage2D(t.target, 0, e.internalFormat, s, i, 0, t.format, e.type, null))
                    }
                    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
                }
                destroyTexture(t, e) {
                    const {
                        gl: r
                    } = this;
                    if ((t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                        const e = this.managedTextures.indexOf(t); - 1 !== e && (0, n.removeItems)(this.managedTextures, e, 1)
                    }
                }
                updateTextureStyle(t) {
                    const e = t._glTextures[this.CONTEXT_UID];
                    e && (t.mipmap !== s.WB.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = s.Nt.CLAMP, t.resource ? .style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
                }
                setStyle(t, e) {
                    const r = this.gl;
                    if (e.mipmap && t.mipmap !== s.WB.ON_MANUAL && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
                        r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === s.aH.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
                        const e = this.renderer.context.extensions.anisotropicFiltering;
                        if (e && t.anisotropicLevel > 0 && t.scaleMode === s.aH.LINEAR) {
                            const s = Math.min(t.anisotropicLevel, r.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                            r.texParameterf(t.target, e.TEXTURE_MAX_ANISOTROPY_EXT, s)
                        }
                    } else r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === s.aH.LINEAR ? r.LINEAR : r.NEAREST);
                    r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === s.aH.LINEAR ? r.LINEAR : r.NEAREST)
                }
                destroy() {
                    this.renderer = null
                }
            }
            be.extension = {
                type: o.n.RendererSystem,
                name: "texture"
            }, o.R.add(be);
            class ve {
                constructor(t) {
                    this.renderer = t
                }
                contextChange() {
                    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
                }
                bind(t) {
                    const {
                        gl: e,
                        CONTEXT_UID: r
                    } = this, s = t._glTransformFeedbacks[r] || this.createGLTransformFeedback(t);
                    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, s)
                }
                unbind() {
                    const {
                        gl: t
                    } = this;
                    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null)
                }
                beginTransformFeedback(t, e) {
                    const {
                        gl: r,
                        renderer: s
                    } = this;
                    e && s.shader.bind(e), r.beginTransformFeedback(t)
                }
                endTransformFeedback() {
                    const {
                        gl: t
                    } = this;
                    t.endTransformFeedback()
                }
                createGLTransformFeedback(t) {
                    const {
                        gl: e,
                        renderer: r,
                        CONTEXT_UID: s
                    } = this, i = e.createTransformFeedback();
                    t._glTransformFeedbacks[s] = i, e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, i);
                    for (let i = 0; i < t.buffers.length; i++) {
                        const n = t.buffers[i];
                        n && (r.buffer.update(n), n._glBuffers[s].refCount++, e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, i, n._glBuffers[s].buffer || null))
                    }
                    return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), i
                }
                disposeTransformFeedback(t, e) {
                    const r = t._glTransformFeedbacks[this.CONTEXT_UID],
                        s = this.gl;
                    t.disposeRunner.remove(this);
                    const i = this.renderer.buffer;
                    if (i)
                        for (let r = 0; r < t.buffers.length; r++) {
                            const s = t.buffers[r];
                            if (!s) continue;
                            const n = s._glBuffers[this.CONTEXT_UID];
                            n && (n.refCount--, 0 === n.refCount && !e && i.dispose(s, e))
                        }
                    r && (e || s.deleteTransformFeedback(r), delete t._glTransformFeedbacks[this.CONTEXT_UID])
                }
                destroy() {
                    this.renderer = null
                }
            }
            ve.extension = {
                type: o.n.RendererSystem,
                name: "transformFeedback"
            }, o.R.add(ve);
            class Ae {
                constructor(t) {
                    this.renderer = t
                }
                init(t) {
                    this.screen = new M.Ae(0, 0, t.width, t.height), this.element = t.view || i.Xd.ADAPTER.createCanvas(), this.resolution = t.resolution || i.Xd.RESOLUTION, this.autoDensity = !!t.autoDensity
                }
                resizeView(t, e) {
                    this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(e * this.resolution);
                    const r = this.element.width / this.resolution,
                        s = this.element.height / this.resolution;
                    this.screen.width = r, this.screen.height = s, this.autoDensity && (this.element.style.width = `${r}px`, this.element.style.height = `${s}px`), this.renderer.emit("resize", r, s), this.renderer.runners.resize.emit(this.screen.width, this.screen.height)
                }
                destroy(t) {
                    t && this.element.parentNode ? .removeChild(this.element), this.renderer = null, this.element = null, this.screen = null
                }
            }
            Ae.defaultOptions = {
                width: 800,
                height: 600,
                resolution: void 0,
                autoDensity: !1
            }, Ae.extension = {
                type: [o.n.RendererSystem, o.n.CanvasRendererSystem],
                name: "_view"
            }, o.R.add(Ae), i.Xd.PREFER_ENV = s.Vi.WEBGL2, i.Xd.STRICT_TEXTURE_CACHE = !1, i.Xd.RENDER_OPTIONS = { ...ht.defaultOptions,
                ...nt.defaultOptions,
                ...Ae.defaultOptions,
                ...fe.defaultOptions
            }, Object.defineProperties(i.Xd, {
                WRAP_MODE: {
                    get: () => b.defaultOptions.wrapMode,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), b.defaultOptions.wrapMode = t
                    }
                },
                SCALE_MODE: {
                    get: () => b.defaultOptions.scaleMode,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), b.defaultOptions.scaleMode = t
                    }
                },
                MIPMAP_TEXTURES: {
                    get: () => b.defaultOptions.mipmap,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), b.defaultOptions.mipmap = t
                    }
                },
                ANISOTROPIC_LEVEL: {
                    get: () => b.defaultOptions.anisotropicLevel,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), b.defaultOptions.anisotropicLevel = t
                    }
                },
                FILTER_RESOLUTION: {
                    get: () => ((0, n.deprecation)("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), it.defaultResolution),
                    set(t) {
                        it.defaultResolution = t
                    }
                },
                FILTER_MULTISAMPLE: {
                    get: () => ((0, n.deprecation)("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), it.defaultMultisample),
                    set(t) {
                        it.defaultMultisample = t
                    }
                },
                SPRITE_MAX_TEXTURES: {
                    get: () => rt.defaultMaxTextures,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), rt.defaultMaxTextures = t
                    }
                },
                SPRITE_BATCH_SIZE: {
                    get: () => rt.defaultBatchSize,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), rt.defaultBatchSize = t
                    }
                },
                CAN_UPLOAD_SAME_BUFFER: {
                    get: () => rt.canUploadSameBuffer,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), rt.canUploadSameBuffer = t
                    }
                },
                GC_MODE: {
                    get: () => _e.defaultMode,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), _e.defaultMode = t
                    }
                },
                GC_MAX_IDLE: {
                    get: () => _e.defaultMaxIdle,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), _e.defaultMaxIdle = t
                    }
                },
                GC_MAX_CHECK_COUNT: {
                    get: () => _e.defaultCheckCountMax,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), _e.defaultCheckCountMax = t
                    }
                },
                PRECISION_VERTEX: {
                    get: () => Y.defaultVertexPrecision,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), Y.defaultVertexPrecision = t
                    }
                },
                PRECISION_FRAGMENT: {
                    get: () => Y.defaultFragmentPrecision,
                    set(t) {
                        (0, n.deprecation)("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), Y.defaultFragmentPrecision = t
                    }
                }
            });
            var Te = r(4116);
            const Ee = [];

            function we(t) {
                for (const e of Ee)
                    if (e.test(t)) return new e(t);
                throw new Error("Unable to auto-detect a suitable renderer.")
            }
            o.R.handleByList(o.n.Renderer, Ee);
            const Ie = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                Re = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
            class Se {
                constructor(t) {
                    this.renderer = t
                }
                contextChange(t) {
                    let e;
                    if (1 === this.renderer.context.webGLVersion) {
                        const r = t.getParameter(t.FRAMEBUFFER_BINDING);
                        t.bindFramebuffer(t.FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, r)
                    } else {
                        const r = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
                        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, r)
                    }
                    e >= s.G5.HIGH ? this.multisample = s.G5.HIGH : e >= s.G5.MEDIUM ? this.multisample = s.G5.MEDIUM : e >= s.G5.LOW ? this.multisample = s.G5.LOW : this.multisample = s.G5.NONE
                }
                destroy() {}
            }
            Se.extension = {
                type: o.n.RendererSystem,
                name: "_multisample"
            }, o.R.add(Se);
            class Ce {
                constructor(t) {
                    this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
                }
            }
            class Pe {
                constructor(t) {
                    this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {}
                }
                destroy() {
                    this.renderer = null
                }
                contextChange() {
                    this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
                }
                bind(t) {
                    const {
                        gl: e,
                        CONTEXT_UID: r
                    } = this, s = t._glBuffers[r] || this.createGLBuffer(t);
                    e.bindBuffer(t.type, s.buffer)
                }
                unbind(t) {
                    const {
                        gl: e
                    } = this;
                    e.bindBuffer(t, null)
                }
                bindBufferBase(t, e) {
                    const {
                        gl: r,
                        CONTEXT_UID: s
                    } = this;
                    if (this.boundBufferBases[e] !== t) {
                        const i = t._glBuffers[s] || this.createGLBuffer(t);
                        this.boundBufferBases[e] = t, r.bindBufferBase(r.UNIFORM_BUFFER, e, i.buffer)
                    }
                }
                bindBufferRange(t, e, r) {
                    const {
                        gl: s,
                        CONTEXT_UID: i
                    } = this;
                    r = r || 0;
                    const n = t._glBuffers[i] || this.createGLBuffer(t);
                    s.bindBufferRange(s.UNIFORM_BUFFER, e || 0, n.buffer, 256 * r, 256)
                }
                update(t) {
                    const {
                        gl: e,
                        CONTEXT_UID: r
                    } = this, s = t._glBuffers[r] || this.createGLBuffer(t);
                    if (t._updateID !== s.updateID)
                        if (s.updateID = t._updateID, e.bindBuffer(t.type, s.buffer), s.byteLength >= t.data.byteLength) e.bufferSubData(t.type, 0, t.data);
                        else {
                            const r = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                            s.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, r)
                        }
                }
                dispose(t, e) {
                    if (!this.managedBuffers[t.id]) return;
                    delete this.managedBuffers[t.id];
                    const r = t._glBuffers[this.CONTEXT_UID],
                        s = this.gl;
                    t.disposeRunner.remove(this), r && (e || s.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID])
                }
                disposeAll(t) {
                    const e = Object.keys(this.managedBuffers);
                    for (let r = 0; r < e.length; r++) this.dispose(this.managedBuffers[e[r]], t)
                }
                createGLBuffer(t) {
                    const {
                        CONTEXT_UID: e,
                        gl: r
                    } = this;
                    return t._glBuffers[e] = new Ce(r.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e]
                }
            }
            Pe.extension = {
                type: o.n.RendererSystem,
                name: "buffer"
            }, o.R.add(Pe);
            class Me {
                constructor(t) {
                    this.renderer = t
                }
                render(t, e) {
                    const r = this.renderer;
                    let s, i, n, a;
                    if (e && (s = e.renderTexture, i = e.clear, n = e.transform, a = e.skipUpdateTransform), this.renderingToScreen = !s, r.runners.prerender.emit(), r.emit("prerender"), r.projection.transform = n, !r.context.isLost) {
                        if (s || (this.lastObjectRendered = t), !a) {
                            const e = t.enableTempParent();
                            t.updateTransform(), t.disableTempParent(e)
                        }
                        r.renderTexture.bind(s), r.batch.currentRenderer.start(), (i ? ? r.background.clearBeforeRender) && r.renderTexture.clear(), t.render(r), r.batch.currentRenderer.flush(), s && (e.blit && r.framebuffer.blit(), s.baseTexture.update()), r.runners.postrender.emit(), r.projection.transform = null, r.emit("postrender")
                    }
                }
                destroy() {
                    this.renderer = null, this.lastObjectRendered = null
                }
            }
            Me.extension = {
                type: o.n.RendererSystem,
                name: "objectRenderer"
            }, o.R.add(Me);
            const Ne = class t extends ge {
                constructor(e) {
                    super(), this.type = s.N3.WEBGL, e = Object.assign({}, i.Xd.RENDER_OPTIONS, e), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new K({
                        projectionMatrix: new M.y3
                    }, !0);
                    const r = {
                        runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
                        systems: t.__systems,
                        priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
                    };
                    this.setup(r), "useContextAlpha" in e && ((0, n.deprecation)("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), e.premultipliedAlpha = e.useContextAlpha && "notMultiplied" !== e.useContextAlpha, e.backgroundAlpha = !1 === e.useContextAlpha ? 1 : e.backgroundAlpha), this._plugin.rendererPlugins = t.__plugins, this.options = e, this.startup.run(this.options)
                }
                static test(t) {
                    return !t ? .forceCanvas && (0, n.isWebGLSupported)()
                }
                render(t, e) {
                    this.objectRenderer.render(t, e)
                }
                resize(t, e) {
                    this._view.resizeView(t, e)
                }
                reset() {
                    return this.runners.reset.emit(), this
                }
                clear() {
                    this.renderTexture.bind(), this.renderTexture.clear()
                }
                destroy(t = !1) {
                    this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
                        _view: t
                    }), super.destroy()
                }
                get plugins() {
                    return this._plugin.plugins
                }
                get multisample() {
                    return this._multisample.multisample
                }
                get width() {
                    return this._view.element.width
                }
                get height() {
                    return this._view.element.height
                }
                get resolution() {
                    return this._view.resolution
                }
                set resolution(t) {
                    this._view.resolution = t, this.runners.resolutionChange.emit(t)
                }
                get autoDensity() {
                    return this._view.autoDensity
                }
                get view() {
                    return this._view.element
                }
                get screen() {
                    return this._view.screen
                }
                get lastObjectRendered() {
                    return this.objectRenderer.lastObjectRendered
                }
                get renderingToScreen() {
                    return this.objectRenderer.renderingToScreen
                }
                get rendererLogId() {
                    return `WebGL ${this.context.webGLVersion}`
                }
                get clearBeforeRender() {
                    return (0, n.deprecation)("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender
                }
                get useContextAlpha() {
                    return (0, n.deprecation)("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha
                }
                get preserveDrawingBuffer() {
                    return (0, n.deprecation)("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer
                }
                get backgroundColor() {
                    return (0, n.deprecation)("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color
                }
                set backgroundColor(t) {
                    (0, n.deprecation)("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = t
                }
                get backgroundAlpha() {
                    return (0, n.deprecation)("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha
                }
                set backgroundAlpha(t) {
                    (0, n.deprecation)("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = t
                }
                get powerPreference() {
                    return (0, n.deprecation)("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference
                }
                generateTexture(t, e) {
                    return this.textureGenerator.generateTexture(t, e)
                }
            };
            Ne.extension = {
                type: o.n.Renderer,
                priority: 1
            }, Ne.__plugins = {}, Ne.__systems = {};
            let Oe = Ne;
            o.R.handleByMap(o.n.RendererPlugin, Oe.__plugins), o.R.handleByMap(o.n.RendererSystem, Oe.__systems), o.R.add(Oe);
            class Be extends g {
                constructor(t, e) {
                    const {
                        width: r,
                        height: s
                    } = e || {};
                    super(r, s), this.items = [], this.itemDirtyIds = [];
                    for (let e = 0; e < t; e++) {
                        const t = new b;
                        this.items.push(t), this.itemDirtyIds.push(-2)
                    }
                    this.length = t, this._load = null, this.baseTexture = null
                }
                initFromArray(t, e) {
                    for (let r = 0; r < this.length; r++) t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r] instanceof g ? this.addResourceAt(t[r], r) : this.addResourceAt(p(t[r], e), r))
                }
                dispose() {
                    for (let t = 0, e = this.length; t < e; t++) this.items[t].destroy();
                    this.items = null, this.itemDirtyIds = null, this._load = null
                }
                addResourceAt(t, e) {
                    if (!this.items[e]) throw new Error(`Index ${e} is out of bounds`);
                    return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
                }
                bind(t) {
                    if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
                    super.bind(t);
                    for (let e = 0; e < this.length; e++) this.items[e].parentTextureArray = t, this.items[e].on("update", t.update, t)
                }
                unbind(t) {
                    super.unbind(t);
                    for (let e = 0; e < this.length; e++) this.items[e].parentTextureArray = null, this.items[e].off("update", t.update, t)
                }
                load() {
                    if (this._load) return this._load;
                    const t = this.items.map((t => t.resource)).filter((t => t)).map((t => t.load()));
                    return this._load = Promise.all(t).then((() => {
                        const {
                            realWidth: t,
                            realHeight: e
                        } = this.items[0];
                        return this.resize(t, e), this.update(), Promise.resolve(this)
                    })), this._load
                }
            }
            class Fe extends Be {
                constructor(t, e) {
                    const {
                        width: r,
                        height: s
                    } = e || {};
                    let i, n;
                    Array.isArray(t) ? (i = t, n = t.length) : n = t, super(n, {
                        width: r,
                        height: s
                    }), i && this.initFromArray(i, e)
                }
                addBaseTextureAt(t, e) {
                    if (!t.resource) throw new Error("ArrayResource does not support RenderTexture");
                    return this.addResourceAt(t.resource, e), this
                }
                bind(t) {
                    super.bind(t), t.target = s.sp.TEXTURE_2D_ARRAY
                }
                upload(t, e, r) {
                    const {
                        length: s,
                        itemDirtyIds: i,
                        items: n
                    } = this, {
                        gl: a
                    } = t;
                    r.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, s, 0, e.format, r.type, null);
                    for (let t = 0; t < s; t++) {
                        const s = n[t];
                        i[t] < s.dirtyId && (i[t] = s.dirtyId, s.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, t, s.resource.width, s.resource.height, 1, e.format, r.type, s.resource.source))
                    }
                    return !0
                }
            }
            class De extends ct {
                constructor(t) {
                    super(t)
                }
                static test(t) {
                    const {
                        OffscreenCanvas: e
                    } = globalThis;
                    return !!(e && t instanceof e) || globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
                }
            }
            const Le = class t extends Be {
                constructor(e, r) {
                    const {
                        width: i,
                        height: n,
                        autoLoad: a,
                        linkBaseTexture: o
                    } = r || {};
                    if (e && e.length !== t.SIDES) throw new Error(`Invalid length. Got ${e.length}, expected 6`);
                    super(6, {
                        width: i,
                        height: n
                    });
                    for (let e = 0; e < t.SIDES; e++) this.items[e].target = s.sp.TEXTURE_CUBE_MAP_POSITIVE_X + e;
                    this.linkBaseTexture = !1 !== o, e && this.initFromArray(e, r), !1 !== a && this.load()
                }
                bind(t) {
                    super.bind(t), t.target = s.sp.TEXTURE_CUBE_MAP
                }
                addBaseTextureAt(t, e, r) {
                    if (void 0 === r && (r = this.linkBaseTexture), !this.items[e]) throw new Error(`Index ${e} is out of bounds`);
                    if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
                        if (!t.resource) throw new Error("CubeResource does not support copying of renderTexture.");
                        this.addResourceAt(t.resource, e)
                    } else t.target = s.sp.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;
                    return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this
                }
                upload(e, r, s) {
                    const i = this.itemDirtyIds;
                    for (let n = 0; n < t.SIDES; n++) {
                        const t = this.items[n];
                        (i[n] < t.dirtyId || s.dirtyId < r.dirtyId) && (t.valid && t.resource ? (t.resource.upload(e, t, s), i[n] = t.dirtyId) : i[n] < -1 && (e.gl.texImage2D(t.target, 0, s.internalFormat, r.realWidth, r.realHeight, 0, r.format, s.type, null), i[n] = -1))
                    }
                    return !0
                }
                static test(e) {
                    return Array.isArray(e) && e.length === t.SIDES
                }
            };
            Le.SIDES = 6;
            let Ue = Le;
            class ke extends ct {
                constructor(t, e) {
                    let r, s, i;
                    e = e || {}, "string" == typeof t ? (r = ke.EMPTY, s = t, i = !0) : (r = t, s = null, i = !1), super(r), this.url = s, this.crossOrigin = e.crossOrigin ? ? !0, this.alphaMode = "number" == typeof e.alphaMode ? e.alphaMode : null, this.ownsImageBitmap = e.ownsImageBitmap ? ? i, this._load = null, !1 !== e.autoLoad && this.load()
                }
                load() {
                    return this._load || (this._load = new Promise((async (t, e) => {
                        if (null !== this.url) try {
                            const e = await i.Xd.ADAPTER.fetch(this.url, {
                                mode: this.crossOrigin ? "cors" : "no-cors"
                            });
                            if (this.destroyed) return;
                            const r = await e.blob();
                            if (this.destroyed) return;
                            const n = await createImageBitmap(r, {
                                premultiplyAlpha: null === this.alphaMode || this.alphaMode === s.iw.UNPACK ? "premultiply" : "none"
                            });
                            if (this.destroyed) return void n.close();
                            this.source = n, this.update(), t(this)
                        } catch (t) {
                            if (this.destroyed) return;
                            e(t), this.onError.emit(t)
                        } else t(this)
                    }))), this._load
                }
                upload(t, e, r) {
                    return this.source instanceof ImageBitmap ? ("number" == typeof this.alphaMode && (e.alphaMode = this.alphaMode), super.upload(t, e, r)) : (this.load(), !1)
                }
                dispose() {
                    this.ownsImageBitmap && this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null
                }
                static test(t) {
                    return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && ("string" == typeof t || t instanceof ImageBitmap)
                }
                static get EMPTY() {
                    return ke._EMPTY = ke._EMPTY ? ? i.Xd.ADAPTER.createCanvas(0, 0), ke._EMPTY
                }
            }
            const Ge = class t extends ct {
                constructor(t, e) {
                    e = e || {}, super(i.Xd.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = t, this.scale = e.scale || 1, this._overrideWidth = e.width, this._overrideHeight = e.height, this._resolve = null, this._crossorigin = e.crossorigin, this._load = null, !1 !== e.autoLoad && this.load()
                }
                load() {
                    return this._load || (this._load = new Promise((e => {
                        if (this._resolve = () => {
                                this.update(), e(this)
                            }, t.SVG_XML.test(this.svg.trim())) {
                            if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                            this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`
                        }
                        this._loadSvg()
                    }))), this._load
                }
                _loadSvg() {
                    const t = new Image;
                    ct.crossOrigin(t, this.svg, this._crossorigin), t.src = this.svg, t.onerror = e => {
                        this._resolve && (t.onerror = null, this.onError.emit(e))
                    }, t.onload = () => {
                        if (!this._resolve) return;
                        const e = t.width,
                            r = t.height;
                        if (!e || !r) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                        let s = e * this.scale,
                            i = r * this.scale;
                        (this._overrideWidth || this._overrideHeight) && (s = this._overrideWidth || this._overrideHeight / r * e, i = this._overrideHeight || this._overrideWidth / e * r), s = Math.round(s), i = Math.round(i);
                        const a = this.source;
                        a.width = s, a.height = i, a._pixiId = `canvas_${(0,n.uid)()}`, a.getContext("2d").drawImage(t, 0, 0, e, r, 0, 0, s, i), this._resolve(), this._resolve = null
                    }
                }
                static getSize(e) {
                    const r = t.SVG_SIZE.exec(e),
                        s = {};
                    return r && (s[r[1]] = Math.round(parseFloat(r[3])), s[r[5]] = Math.round(parseFloat(r[7]))), s
                }
                dispose() {
                    super.dispose(), this._resolve = null, this._crossorigin = null
                }
                static test(e, r) {
                    return "svg" === r || "string" == typeof e && e.startsWith("data:image/svg+xml") || "string" == typeof e && t.SVG_XML.test(e)
                }
            };
            Ge.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, Ge.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
            let je = Ge;
            const He = class t extends ct {
                constructor(e, r) {
                    if (r = r || {}, !(e instanceof HTMLVideoElement)) {
                        const s = document.createElement("video");
                        !1 !== r.autoLoad && s.setAttribute("preload", "auto"), !1 !== r.playsinline && (s.setAttribute("webkit-playsinline", ""), s.setAttribute("playsinline", "")), !0 === r.muted && (s.setAttribute("muted", ""), s.muted = !0), !0 === r.loop && s.setAttribute("loop", ""), !1 !== r.autoPlay && s.setAttribute("autoplay", ""), "string" == typeof e && (e = [e]);
                        const i = e[0].src || e[0];
                        ct.crossOrigin(s, i, r.crossorigin);
                        for (let r = 0; r < e.length; ++r) {
                            const i = document.createElement("source");
                            let {
                                src: n,
                                mime: a
                            } = e[r];
                            if (n = n || e[r], n.startsWith("data:")) a = n.slice(5, n.indexOf(";"));
                            else if (!n.startsWith("blob:")) {
                                const e = n.split("?").shift().toLowerCase(),
                                    r = e.slice(e.lastIndexOf(".") + 1);
                                a = a || t.MIME_TYPES[r] || `video/${r}`
                            }
                            i.src = n, a && (i.type = a), s.appendChild(i)
                        }
                        e = s
                    }
                    super(e), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = r.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== r.autoPlay, this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), !1 !== r.autoLoad && this.load()
                }
                update(t = 0) {
                    if (!this.destroyed) {
                        if (this._updateFPS) {
                            const t = Te.vB.shared.elapsedMS * this.source.playbackRate;
                            this._msToNextUpdate = Math.floor(this._msToNextUpdate - t)
                        }(!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
                    }
                }
                _videoFrameRequestCallback() {
                    this.update(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback)
                }
                load() {
                    if (this._load) return this._load;
                    const t = this.source;
                    return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._onCanPlay() : (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("error", this._onError, !0)), this._load = new Promise(((e, r) => {
                        this.valid ? e(this) : (this._resolve = e, this._reject = r, t.load())
                    })), this._load
                }
                _onError(t) {
                    this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t), this._reject && (this._reject(t), this._reject = null, this._resolve = null)
                }
                _isSourcePlaying() {
                    const t = this.source;
                    return !t.paused && !t.ended
                }
                _isSourceReady() {
                    return this.source.readyState > 2
                }
                _onPlayStart() {
                    this.valid || this._onCanPlay(), this._configureAutoUpdate()
                }
                _onPlayStop() {
                    this._configureAutoUpdate()
                }
                _onSeeked() {
                    this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0)
                }
                _onCanPlay() {
                    const t = this.source;
                    t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
                    const e = this.valid;
                    this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0, !e && this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
                }
                dispose() {
                    this._configureAutoUpdate();
                    const t = this.source;
                    t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.dispose()
                }
                get autoUpdate() {
                    return this._autoUpdate
                }
                set autoUpdate(t) {
                    t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate())
                }
                get updateFPS() {
                    return this._updateFPS
                }
                set updateFPS(t) {
                    t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate())
                }
                _configureAutoUpdate() {
                    this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (Te.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), null === this._videoFrameRequestCallbackHandle && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (null !== this._videoFrameRequestCallbackHandle && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (Te.vB.shared.add(this.update, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (null !== this._videoFrameRequestCallbackHandle && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (Te.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0))
                }
                static test(e, r) {
                    return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || t.TYPES.includes(r)
                }
            };
            He.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], He.MIME_TYPES = {
                ogv: "video/ogg",
                mov: "video/quicktime",
                m4v: "video/mp4"
            };
            let Ve = He;
            f.push(ke, dt, De, Ve, class extends ct {
                constructor(t) {
                    super(t)
                }
                static test(t) {
                    return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame
                }
            }, je, y, Ue, Fe);
            class Xe {
                constructor() {
                    this._glTransformFeedbacks = {}, this.buffers = [], this.disposeRunner = new m("disposeTransformFeedback")
                }
                bindBuffer(t, e) {
                    this.buffers[t] = e
                }
                destroy() {
                    this.disposeRunner.emit(this, !1)
                }
            }
            const $e = "7.4.0"
        },
        8820: (t, e, r) => {
            "use strict";
            r.d(e, {
                YZ: () => i,
                W2: () => u,
                s$: () => n,
                Ql: () => a
            });
            var s = r(1851);
            class i {
                constructor() {
                    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
                }
                isEmpty() {
                    return this.minX > this.maxX || this.minY > this.maxY
                }
                clear() {
                    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
                }
                getRectangle(t) {
                    return this.minX > this.maxX || this.minY > this.maxY ? s.Ae.EMPTY : ((t = t || new s.Ae(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
                }
                addPoint(t) {
                    this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
                }
                addPointMatrix(t, e) {
                    const {
                        a: r,
                        b: s,
                        c: i,
                        d: n,
                        tx: a,
                        ty: o
                    } = t, h = r * e.x + i * e.y + a, l = s * e.x + n * e.y + o;
                    this.minX = Math.min(this.minX, h), this.maxX = Math.max(this.maxX, h), this.minY = Math.min(this.minY, l), this.maxY = Math.max(this.maxY, l)
                }
                addQuad(t) {
                    let e = this.minX,
                        r = this.minY,
                        s = this.maxX,
                        i = this.maxY,
                        n = t[0],
                        a = t[1];
                    e = n < e ? n : e, r = a < r ? a : r, s = n > s ? n : s, i = a > i ? a : i, n = t[2], a = t[3], e = n < e ? n : e, r = a < r ? a : r, s = n > s ? n : s, i = a > i ? a : i, n = t[4], a = t[5], e = n < e ? n : e, r = a < r ? a : r, s = n > s ? n : s, i = a > i ? a : i, n = t[6], a = t[7], e = n < e ? n : e, r = a < r ? a : r, s = n > s ? n : s, i = a > i ? a : i, this.minX = e, this.minY = r, this.maxX = s, this.maxY = i
                }
                addFrame(t, e, r, s, i) {
                    this.addFrameMatrix(t.worldTransform, e, r, s, i)
                }
                addFrameMatrix(t, e, r, s, i) {
                    const n = t.a,
                        a = t.b,
                        o = t.c,
                        h = t.d,
                        l = t.tx,
                        u = t.ty;
                    let c = this.minX,
                        d = this.minY,
                        f = this.maxX,
                        p = this.maxY,
                        m = n * e + o * r + l,
                        g = a * e + h * r + u;
                    c = m < c ? m : c, d = g < d ? g : d, f = m > f ? m : f, p = g > p ? g : p, m = n * s + o * r + l, g = a * s + h * r + u, c = m < c ? m : c, d = g < d ? g : d, f = m > f ? m : f, p = g > p ? g : p, m = n * e + o * i + l, g = a * e + h * i + u, c = m < c ? m : c, d = g < d ? g : d, f = m > f ? m : f, p = g > p ? g : p, m = n * s + o * i + l, g = a * s + h * i + u, c = m < c ? m : c, d = g < d ? g : d, f = m > f ? m : f, p = g > p ? g : p, this.minX = c, this.minY = d, this.maxX = f, this.maxY = p
                }
                addVertexData(t, e, r) {
                    let s = this.minX,
                        i = this.minY,
                        n = this.maxX,
                        a = this.maxY;
                    for (let o = e; o < r; o += 2) {
                        const e = t[o],
                            r = t[o + 1];
                        s = e < s ? e : s, i = r < i ? r : i, n = e > n ? e : n, a = r > a ? r : a
                    }
                    this.minX = s, this.minY = i, this.maxX = n, this.maxY = a
                }
                addVertices(t, e, r, s) {
                    this.addVerticesMatrix(t.worldTransform, e, r, s)
                }
                addVerticesMatrix(t, e, r, s, i = 0, n = i) {
                    const a = t.a,
                        o = t.b,
                        h = t.c,
                        l = t.d,
                        u = t.tx,
                        c = t.ty;
                    let d = this.minX,
                        f = this.minY,
                        p = this.maxX,
                        m = this.maxY;
                    for (let t = r; t < s; t += 2) {
                        const r = e[t],
                            s = e[t + 1],
                            g = a * r + h * s + u,
                            y = l * s + o * r + c;
                        d = Math.min(d, g - i), p = Math.max(p, g + i), f = Math.min(f, y - n), m = Math.max(m, y + n)
                    }
                    this.minX = d, this.minY = f, this.maxX = p, this.maxY = m
                }
                addBounds(t) {
                    const e = this.minX,
                        r = this.minY,
                        s = this.maxX,
                        i = this.maxY;
                    this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > s ? t.maxX : s, this.maxY = t.maxY > i ? t.maxY : i
                }
                addBoundsMask(t, e) {
                    const r = t.minX > e.minX ? t.minX : e.minX,
                        s = t.minY > e.minY ? t.minY : e.minY,
                        i = t.maxX < e.maxX ? t.maxX : e.maxX,
                        n = t.maxY < e.maxY ? t.maxY : e.maxY;
                    if (r <= i && s <= n) {
                        const t = this.minX,
                            e = this.minY,
                            a = this.maxX,
                            o = this.maxY;
                        this.minX = r < t ? r : t, this.minY = s < e ? s : e, this.maxX = i > a ? i : a, this.maxY = n > o ? n : o
                    }
                }
                addBoundsMatrix(t, e) {
                    this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
                }
                addBoundsArea(t, e) {
                    const r = t.minX > e.x ? t.minX : e.x,
                        s = t.minY > e.y ? t.minY : e.y,
                        i = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                        n = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
                    if (r <= i && s <= n) {
                        const t = this.minX,
                            e = this.minY,
                            a = this.maxX,
                            o = this.maxY;
                        this.minX = r < t ? r : t, this.minY = s < e ? s : e, this.maxX = i > a ? i : a, this.maxY = n > o ? n : o
                    }
                }
                pad(t = 0, e = t) {
                    this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e)
                }
                addFramePad(t, e, r, s, i, n) {
                    t -= i, e -= n, r += i, s += n, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > r ? this.maxX : r, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > s ? this.maxY : s
                }
            }
            class n extends s.P6.EventEmitter {
                constructor() {
                    super(), this.tempDisplayObjectParent = null, this.transform = new s.wx, this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new i, this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1
                }
                static mixin(t) {
                    const e = Object.keys(t);
                    for (let r = 0; r < e.length; ++r) {
                        const s = e[r];
                        Object.defineProperty(n.prototype, s, Object.getOwnPropertyDescriptor(t, s))
                    }
                }
                get destroyed() {
                    return this._destroyed
                }
                _recursivePostUpdateTransform() {
                    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
                }
                updateTransform() {
                    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
                }
                getBounds(t, e) {
                    return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new s.Ae), e = this._boundsRect), this._bounds.getRectangle(e)
                }
                getLocalBounds(t) {
                    t || (this._localBoundsRect || (this._localBoundsRect = new s.Ae), t = this._localBoundsRect), this._localBounds || (this._localBounds = new i);
                    const e = this.transform,
                        r = this.parent;
                    this.parent = null, this._tempDisplayObjectParent.worldAlpha = r ? .worldAlpha ? ? 1, this.transform = this._tempDisplayObjectParent.transform;
                    const n = this._bounds,
                        a = this._boundsID;
                    this._bounds = this._localBounds;
                    const o = this.getBounds(!1, t);
                    return this.parent = r, this.transform = e, this._bounds = n, this._bounds.updateID += this._boundsID - a, o
                }
                toGlobal(t, e, r = !1) {
                    return r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
                }
                toLocal(t, e, r, s) {
                    return e && (t = e.toGlobal(t, r, s)), s || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r)
                }
                setParent(t) {
                    if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                    return t.addChild(this), t
                }
                removeFromParent() {
                    this.parent ? .removeChild(this)
                }
                setTransform(t = 0, e = 0, r = 1, s = 1, i = 0, n = 0, a = 0, o = 0, h = 0) {
                    return this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = s || 1, this.rotation = i, this.skew.x = n, this.skew.y = a, this.pivot.x = o, this.pivot.y = h, this
                }
                destroy(t) {
                    this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.eventMode = "auto", this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners()
                }
                get _tempDisplayObjectParent() {
                    return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new a), this.tempDisplayObjectParent
                }
                enableTempParent() {
                    const t = this.parent;
                    return this.parent = this._tempDisplayObjectParent, t
                }
                disableTempParent(t) {
                    this.parent = t
                }
                get x() {
                    return this.position.x
                }
                set x(t) {
                    this.transform.position.x = t
                }
                get y() {
                    return this.position.y
                }
                set y(t) {
                    this.transform.position.y = t
                }
                get worldTransform() {
                    return this.transform.worldTransform
                }
                get localTransform() {
                    return this.transform.localTransform
                }
                get position() {
                    return this.transform.position
                }
                set position(t) {
                    this.transform.position.copyFrom(t)
                }
                get scale() {
                    return this.transform.scale
                }
                set scale(t) {
                    this.transform.scale.copyFrom(t)
                }
                get pivot() {
                    return this.transform.pivot
                }
                set pivot(t) {
                    this.transform.pivot.copyFrom(t)
                }
                get skew() {
                    return this.transform.skew
                }
                set skew(t) {
                    this.transform.skew.copyFrom(t)
                }
                get rotation() {
                    return this.transform.rotation
                }
                set rotation(t) {
                    this.transform.rotation = t
                }
                get angle() {
                    return this.transform.rotation * s.jl
                }
                set angle(t) {
                    this.transform.rotation = t * s.ZX
                }
                get zIndex() {
                    return this._zIndex
                }
                set zIndex(t) {
                    this._zIndex !== t && (this._zIndex = t, this.parent && (this.parent.sortDirty = !0))
                }
                get worldVisible() {
                    let t = this;
                    do {
                        if (!t.visible) return !1;
                        t = t.parent
                    } while (t);
                    return !0
                }
                get mask() {
                    return this._mask
                }
                set mask(t) {
                    if (this._mask !== t) {
                        if (this._mask) {
                            const t = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                            t && (t._maskRefCount--, 0 === t._maskRefCount && (t.renderable = !0, t.isMask = !1))
                        }
                        if (this._mask = t, this._mask) {
                            const t = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                            t && (0 === t._maskRefCount && (t.renderable = !1, t.isMask = !0), t._maskRefCount++)
                        }
                    }
                }
            }
            class a extends n {
                constructor() {
                    super(...arguments), this.sortDirty = null
                }
            }
            n.prototype.displayObjectUpdateTransform = n.prototype.updateTransform;
            const o = new s.y3;

            function h(t, e) {
                return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
            }
            const l = class t extends n {
                constructor() {
                    super(), this.children = [], this.sortableChildren = t.defaultSortableChildren, this.sortDirty = !1
                }
                onChildrenChange(t) {}
                addChild(...t) {
                    if (t.length > 1)
                        for (let e = 0; e < t.length; e++) this.addChild(t[e]);
                    else {
                        const e = t[0];
                        e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.push(e), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this)
                    }
                    return t[0]
                }
                addChildAt(t, e) {
                    if (e < 0 || e > this.children.length) throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
                    return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
                }
                swapChildren(t, e) {
                    if (t === e) return;
                    const r = this.getChildIndex(t),
                        s = this.getChildIndex(e);
                    this.children[r] = e, this.children[s] = t, this.onChildrenChange(r < s ? r : s)
                }
                getChildIndex(t) {
                    const e = this.children.indexOf(t);
                    if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                    return e
                }
                setChildIndex(t, e) {
                    if (e < 0 || e >= this.children.length) throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
                    const r = this.getChildIndex(t);
                    s.P6.removeItems(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
                }
                getChildAt(t) {
                    if (t < 0 || t >= this.children.length) throw new Error(`getChildAt: Index (${t}) does not exist.`);
                    return this.children[t]
                }
                removeChild(...t) {
                    if (t.length > 1)
                        for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
                    else {
                        const e = t[0],
                            r = this.children.indexOf(e);
                        if (-1 === r) return null;
                        e.parent = null, e.transform._parentID = -1, s.P6.removeItems(this.children, r, 1), this._boundsID++, this.onChildrenChange(r), e.emit("removed", this), this.emit("childRemoved", e, this, r)
                    }
                    return t[0]
                }
                removeChildAt(t) {
                    const e = this.getChildAt(t);
                    return e.parent = null, e.transform._parentID = -1, s.P6.removeItems(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
                }
                removeChildren(t = 0, e = this.children.length) {
                    const r = t,
                        s = e - r;
                    let i;
                    if (s > 0 && s <= e) {
                        i = this.children.splice(r, s);
                        for (let t = 0; t < i.length; ++t) i[t].parent = null, i[t].transform && (i[t].transform._parentID = -1);
                        this._boundsID++, this.onChildrenChange(t);
                        for (let t = 0; t < i.length; ++t) i[t].emit("removed", this), this.emit("childRemoved", i[t], this, t);
                        return i
                    }
                    if (0 === s && 0 === this.children.length) return [];
                    throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
                }
                sortChildren() {
                    let t = !1;
                    for (let e = 0, r = this.children.length; e < r; ++e) {
                        const r = this.children[e];
                        r._lastSortedIndex = e, !t && 0 !== r.zIndex && (t = !0)
                    }
                    t && this.children.length > 1 && this.children.sort(h), this.sortDirty = !1
                }
                updateTransform() {
                    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (let t = 0, e = this.children.length; t < e; ++t) {
                        const e = this.children[t];
                        e.visible && e.updateTransform()
                    }
                }
                calculateBounds() {
                    this._bounds.clear(), this._calculateBounds();
                    for (let t = 0; t < this.children.length; t++) {
                        const e = this.children[t];
                        if (e.visible && e.renderable)
                            if (e.calculateBounds(), e._mask) {
                                const t = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                                t ? (t.calculateBounds(), this._bounds.addBoundsMask(e._bounds, t._bounds)) : this._bounds.addBounds(e._bounds)
                            } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
                    }
                    this._bounds.updateID = this._boundsID
                }
                getLocalBounds(t, e = !1) {
                    const r = super.getLocalBounds(t);
                    if (!e)
                        for (let t = 0, e = this.children.length; t < e; ++t) {
                            const e = this.children[t];
                            e.visible && e.updateTransform()
                        }
                    return r
                }
                _calculateBounds() {}
                _renderWithCulling(e) {
                    const r = e.renderTexture.sourceFrame;
                    if (!(r.width > 0 && r.height > 0)) return;
                    let s, i;
                    this.cullArea ? (s = this.cullArea, i = this.worldTransform) : this._render !== t.prototype._render && (s = this.getBounds(!0));
                    const n = e.projection.transform;
                    if (n && (i ? (i = o.copyFrom(i), i.prepend(n)) : i = n), s && r.intersects(s, i)) this._render(e);
                    else if (this.cullArea) return;
                    for (let t = 0, r = this.children.length; t < r; ++t) {
                        const r = this.children[t],
                            s = r.cullable;
                        r.cullable = s || !this.cullArea, r.render(e), r.cullable = s
                    }
                }
                render(t) {
                    if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                        if (this._mask || this.filters ? .length) this.renderAdvanced(t);
                        else if (this.cullable) this._renderWithCulling(t);
                    else {
                        this._render(t);
                        for (let e = 0, r = this.children.length; e < r; ++e) this.children[e].render(t)
                    }
                }
                renderAdvanced(t) {
                    const e = this.filters,
                        r = this._mask;
                    if (e) {
                        this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                        for (let t = 0; t < e.length; t++) e[t].enabled && this._enabledFilters.push(e[t])
                    }
                    const i = e && this._enabledFilters ? .length || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== s.A7.NONE));
                    if (i && t.batch.flush(), e && this._enabledFilters ? .length && t.filter.push(this, this._enabledFilters), r && t.mask.push(this, this._mask), this.cullable) this._renderWithCulling(t);
                    else {
                        this._render(t);
                        for (let e = 0, r = this.children.length; e < r; ++e) this.children[e].render(t)
                    }
                    i && t.batch.flush(), r && t.mask.pop(this), e && this._enabledFilters ? .length && t.filter.pop()
                }
                _render(t) {}
                destroy(t) {
                    super.destroy(), this.sortDirty = !1;
                    const e = "boolean" == typeof t ? t : t ? .children,
                        r = this.removeChildren(0, this.children.length);
                    if (e)
                        for (let e = 0; e < r.length; ++e) r[e].destroy(t)
                }
                get width() {
                    return this.scale.x * this.getLocalBounds().width
                }
                set width(t) {
                    const e = this.getLocalBounds().width;
                    this.scale.x = 0 !== e ? t / e : 1, this._width = t
                }
                get height() {
                    return this.scale.y * this.getLocalBounds().height
                }
                set height(t) {
                    const e = this.getLocalBounds().height;
                    this.scale.y = 0 !== e ? t / e : 1, this._height = t
                }
            };
            l.defaultSortableChildren = !1;
            let u = l;
            u.prototype.containerUpdateTransform = u.prototype.updateTransform, Object.defineProperties(s.Xd, {
                SORTABLE_CHILDREN: {
                    get: () => u.defaultSortableChildren,
                    set(t) {
                        s.P6.deprecation("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), u.defaultSortableChildren = t
                    }
                }
            })
        },
        463: (t, e, r) => {
            "use strict";
            r.d(e, {
                R: () => a,
                n: () => s
            });
            var s = (t => (t.Renderer = "renderer", t.Application = "application", t.RendererSystem = "renderer-webgl-system", t.RendererPlugin = "renderer-webgl-plugin", t.CanvasRendererSystem = "renderer-canvas-system", t.CanvasRendererPlugin = "renderer-canvas-plugin", t.Asset = "asset", t.LoadParser = "load-parser", t.ResolveParser = "resolve-parser", t.CacheParser = "cache-parser", t.DetectionParser = "detection-parser", t))(s || {});
            const i = t => {
                    if ("function" == typeof t || "object" == typeof t && t.extension) {
                        if (!t.extension) throw new Error("Extension class must have an extension object");
                        t = { ..."object" != typeof t.extension ? {
                                type: t.extension
                            } : t.extension,
                            ref: t
                        }
                    }
                    if ("object" != typeof t) throw new Error("Invalid extension type");
                    return "string" == typeof(t = { ...t
                    }).type && (t.type = [t.type]), t
                },
                n = (t, e) => i(t).priority ? ? e,
                a = {
                    _addHandlers: {},
                    _removeHandlers: {},
                    _queue: {},
                    remove(...t) {
                        return t.map(i).forEach((t => {
                            t.type.forEach((e => this._removeHandlers[e] ? .(t)))
                        })), this
                    },
                    add(...t) {
                        return t.map(i).forEach((t => {
                            t.type.forEach((e => {
                                const r = this._addHandlers,
                                    s = this._queue;
                                r[e] ? r[e] ? .(t) : (s[e] = s[e] || [], s[e] ? .push(t))
                            }))
                        })), this
                    },
                    handle(t, e, r) {
                        const s = this._addHandlers,
                            i = this._removeHandlers;
                        if (s[t] || i[t]) throw new Error(`Extension type ${t} already has a handler`);
                        s[t] = e, i[t] = r;
                        const n = this._queue;
                        return n[t] && (n[t] ? .forEach((t => e(t))), delete n[t]), this
                    },
                    handleByMap(t, e) {
                        return this.handle(t, (t => {
                            t.name && (e[t.name] = t.ref)
                        }), (t => {
                            t.name && delete e[t.name]
                        }))
                    },
                    handleByList(t, e, r = -1) {
                        return this.handle(t, (t => {
                            e.includes(t.ref) || (e.push(t.ref), e.sort(((t, e) => n(e, r) - n(t, r))))
                        }), (t => {
                            const r = e.indexOf(t.ref); - 1 !== r && e.splice(r, 1)
                        }))
                    }
                }
        },
        3879: (t, e, r) => {
            "use strict";
            r.d(e, {
                ft: () => S,
                wA: () => d,
                TC: () => N,
                iM: () => T,
                RB: () => R,
                $o: () => u,
                S: () => l,
                TD: () => C,
                yw: () => c,
                yR: () => O
            });
            var s = r(1851);
            const i = {
                build(t) {
                    const e = t.points;
                    let r, i, n, a, o, h;
                    if (t.type === s.HS.CIRC) {
                        const e = t.shape;
                        r = e.x, i = e.y, o = h = e.radius, n = a = 0
                    } else if (t.type === s.HS.ELIP) {
                        const e = t.shape;
                        r = e.x, i = e.y, o = e.width, h = e.height, n = a = 0
                    } else {
                        const e = t.shape,
                            s = e.width / 2,
                            l = e.height / 2;
                        r = e.x + s, i = e.y + l, o = h = Math.max(0, Math.min(e.radius, Math.min(s, l))), n = s - o, a = l - h
                    }
                    if (!(o >= 0 && h >= 0 && n >= 0 && a >= 0)) return void(e.length = 0);
                    const l = Math.ceil(2.3 * Math.sqrt(o + h)),
                        u = 8 * l + (n ? 4 : 0) + (a ? 4 : 0);
                    if (e.length = u, 0 === u) return;
                    if (0 === l) return e.length = 8, e[0] = e[6] = r + n, e[1] = e[3] = i + a, e[2] = e[4] = r - n, void(e[5] = e[7] = i - a);
                    let c = 0,
                        d = 4 * l + (n ? 2 : 0) + 2,
                        f = d,
                        p = u; {
                        const t = n + o,
                            s = a,
                            h = r + t,
                            l = r - t,
                            u = i + s;
                        if (e[c++] = h, e[c++] = u, e[--d] = u, e[--d] = l, a) {
                            const t = i - s;
                            e[f++] = l, e[f++] = t, e[--p] = t, e[--p] = h
                        }
                    }
                    for (let t = 1; t < l; t++) {
                        const s = Math.PI / 2 * (t / l),
                            u = n + Math.cos(s) * o,
                            m = a + Math.sin(s) * h,
                            g = r + u,
                            y = r - u,
                            _ = i + m,
                            x = i - m;
                        e[c++] = g, e[c++] = _, e[--d] = _, e[--d] = y, e[f++] = y, e[f++] = x, e[--p] = x, e[--p] = g
                    } {
                        const t = a + h,
                            s = r + n,
                            o = r - n,
                            l = i + t,
                            u = i - t;
                        e[c++] = s, e[c++] = l, e[--p] = u, e[--p] = s, n && (e[c++] = o, e[c++] = l, e[--p] = u, e[--p] = o)
                    }
                },
                triangulate(t, e) {
                    const r = t.points,
                        i = e.points,
                        n = e.indices;
                    if (0 === r.length) return;
                    let a = i.length / 2;
                    const o = a;
                    let h, l;
                    if (t.type !== s.HS.RREC) {
                        const e = t.shape;
                        h = e.x, l = e.y
                    } else {
                        const e = t.shape;
                        h = e.x + e.width / 2, l = e.y + e.height / 2
                    }
                    const u = t.matrix;
                    i.push(t.matrix ? u.a * h + u.c * l + u.tx : h, t.matrix ? u.b * h + u.d * l + u.ty : l), a++, i.push(r[0], r[1]);
                    for (let t = 2; t < r.length; t += 2) i.push(r[t], r[t + 1]), n.push(a++, o, a);
                    n.push(o + 1, o, a)
                }
            };

            function n(t, e = !1) {
                const r = t.length;
                if (r < 6) return;
                let s = 0;
                for (let e = 0, i = t[r - 2], n = t[r - 1]; e < r; e += 2) {
                    const r = t[e],
                        a = t[e + 1];
                    s += (r - i) * (a + n), i = r, n = a
                }
                if (!e && s > 0 || e && s <= 0) {
                    const e = r / 2;
                    for (let s = e + e % 2; s < r; s += 2) {
                        const e = r - s - 2,
                            i = r - s - 1,
                            n = s,
                            a = s + 1;
                        [t[e], t[n]] = [t[n], t[e]], [t[i], t[a]] = [t[a], t[i]]
                    }
                }
            }
            const a = {
                    build(t) {
                        t.points = t.shape.points.slice()
                    },
                    triangulate(t, e) {
                        let r = t.points;
                        const i = t.holes,
                            a = e.points,
                            o = e.indices;
                        if (r.length >= 6) {
                            n(r, !1);
                            const t = [];
                            for (let e = 0; e < i.length; e++) {
                                const s = i[e];
                                n(s.points, !0), t.push(r.length / 2), r = r.concat(s.points)
                            }
                            const e = s.P6.earcut(r, t, 2);
                            if (!e) return;
                            const h = a.length / 2;
                            for (let t = 0; t < e.length; t += 3) o.push(e[t] + h), o.push(e[t + 1] + h), o.push(e[t + 2] + h);
                            for (let t = 0; t < r.length; t++) a.push(r[t])
                        }
                    }
                },
                o = {
                    build(t) {
                        const e = t.shape,
                            r = e.x,
                            s = e.y,
                            i = e.width,
                            n = e.height,
                            a = t.points;
                        a.length = 0, i >= 0 && n >= 0 && a.push(r, s, r + i, s, r + i, s + n, r, s + n)
                    },
                    triangulate(t, e) {
                        const r = t.points,
                            s = e.points;
                        if (0 === r.length) return;
                        const i = s.length / 2;
                        s.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]), e.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3)
                    }
                },
                h = {
                    build(t) {
                        i.build(t)
                    },
                    triangulate(t, e) {
                        i.triangulate(t, e)
                    }
                };
            var l = (t => (t.MITER = "miter", t.BEVEL = "bevel", t.ROUND = "round", t))(l || {}),
                u = (t => (t.BUTT = "butt", t.ROUND = "round", t.SQUARE = "square", t))(u || {});
            const c = {
                    adaptive: !0,
                    maxLength: 10,
                    minSegments: 8,
                    maxSegments: 2048,
                    epsilon: 1e-4,
                    _segmentsCount(t, e = 20) {
                        if (!this.adaptive || !t || isNaN(t)) return e;
                        let r = Math.ceil(t / this.maxLength);
                        return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments), r
                    }
                },
                d = c;
            class f {
                static curveTo(t, e, r, s, i, n) {
                    const a = n[n.length - 2],
                        o = n[n.length - 1] - e,
                        h = a - t,
                        l = s - e,
                        u = r - t,
                        c = Math.abs(o * u - h * l);
                    if (c < 1e-8 || 0 === i) return (n[n.length - 2] !== t || n[n.length - 1] !== e) && n.push(t, e), null;
                    const d = o * o + h * h,
                        f = l * l + u * u,
                        p = o * l + h * u,
                        m = i * Math.sqrt(d) / c,
                        g = i * Math.sqrt(f) / c,
                        y = m * p / d,
                        _ = g * p / f,
                        x = m * u + g * h,
                        b = m * l + g * o,
                        v = h * (g + y),
                        A = o * (g + y),
                        T = u * (m + _),
                        E = l * (m + _);
                    return {
                        cx: x + t,
                        cy: b + e,
                        radius: i,
                        startAngle: Math.atan2(A - b, v - x),
                        endAngle: Math.atan2(E - b, T - x),
                        anticlockwise: h * l > u * o
                    }
                }
                static arc(t, e, r, i, n, a, o, h, l) {
                    const u = o - a,
                        d = c._segmentsCount(Math.abs(u) * n, 40 * Math.ceil(Math.abs(u) / s._b)),
                        f = u / (2 * d),
                        p = 2 * f,
                        m = Math.cos(f),
                        g = Math.sin(f),
                        y = d - 1,
                        _ = y % 1 / y;
                    for (let t = 0; t <= y; ++t) {
                        const e = f + a + p * (t + _ * t),
                            s = Math.cos(e),
                            o = -Math.sin(e);
                        l.push((m * s + g * o) * n + r, (m * -o + g * s) * n + i)
                    }
                }
            }
            class p {
                static curveLength(t, e, r, s, i, n, a, o) {
                    let h = 0,
                        l = 0,
                        u = 0,
                        c = 0,
                        d = 0,
                        f = 0,
                        p = 0,
                        m = 0,
                        g = 0,
                        y = 0,
                        _ = 0,
                        x = t,
                        b = e;
                    for (let v = 1; v <= 10; ++v) l = v / 10, u = l * l, c = u * l, d = 1 - l, f = d * d, p = f * d, m = p * t + 3 * f * l * r + 3 * d * u * i + c * a, g = p * e + 3 * f * l * s + 3 * d * u * n + c * o, y = x - m, _ = b - g, x = m, b = g, h += Math.sqrt(y * y + _ * _);
                    return h
                }
                static curveTo(t, e, r, s, i, n, a) {
                    const o = a[a.length - 2],
                        h = a[a.length - 1];
                    a.length -= 2;
                    const l = c._segmentsCount(p.curveLength(o, h, t, e, r, s, i, n));
                    let u = 0,
                        d = 0,
                        f = 0,
                        m = 0,
                        g = 0;
                    a.push(o, h);
                    for (let c = 1, p = 0; c <= l; ++c) p = c / l, u = 1 - p, d = u * u, f = d * u, m = p * p, g = m * p, a.push(f * o + 3 * d * p * t + 3 * u * m * r + g * i, f * h + 3 * d * p * e + 3 * u * m * s + g * n)
                }
            }

            function m(t, e, r, s, i, n, a, o) {
                let h, l;
                a ? (h = s, l = -r) : (h = -s, l = r);
                const u = t - r * i + h,
                    c = e - s * i + l,
                    d = t + r * n + h,
                    f = e + s * n + l;
                return o.push(u, c, d, f), 2
            }

            function g(t, e, r, s, i, n, a, o) {
                const h = r - t,
                    l = s - e;
                let u = Math.atan2(h, l),
                    c = Math.atan2(i - t, n - e);
                o && u < c ? u += 2 * Math.PI : !o && u > c && (c += 2 * Math.PI);
                let d = u;
                const f = c - u,
                    p = Math.abs(f),
                    m = Math.sqrt(h * h + l * l),
                    g = 1 + (15 * p * Math.sqrt(m) / Math.PI >> 0),
                    y = f / g;
                if (d += y, o) {
                    a.push(t, e, r, s);
                    for (let r = 1, s = d; r < g; r++, s += y) a.push(t, e, t + Math.sin(s) * m, e + Math.cos(s) * m);
                    a.push(t, e, i, n)
                } else {
                    a.push(r, s, t, e);
                    for (let r = 1, s = d; r < g; r++, s += y) a.push(t + Math.sin(s) * m, e + Math.cos(s) * m, t, e);
                    a.push(i, n, t, e)
                }
                return 2 * g
            }

            function y(t, e) {
                t.lineStyle.native ? function(t, e) {
                    let r = 0;
                    const i = t.shape,
                        n = t.points || i.points,
                        a = i.type !== s.HS.POLY || i.closeStroke;
                    if (0 === n.length) return;
                    const o = e.points,
                        h = e.indices,
                        l = n.length / 2,
                        u = o.length / 2;
                    let c = u;
                    for (o.push(n[0], n[1]), r = 1; r < l; r++) o.push(n[2 * r], n[2 * r + 1]), h.push(c, c + 1), c++;
                    a && h.push(c, u)
                }(t, e) : function(t, e) {
                    const r = t.shape;
                    let i = t.points || r.points.slice();
                    const n = e.closePointEps;
                    if (0 === i.length) return;
                    const a = t.lineStyle,
                        o = new s.E9(i[0], i[1]),
                        h = new s.E9(i[i.length - 2], i[i.length - 1]),
                        d = r.type !== s.HS.POLY || r.closeStroke,
                        f = Math.abs(o.x - h.x) < n && Math.abs(o.y - h.y) < n;
                    if (d) {
                        i = i.slice(), f && (i.pop(), i.pop(), h.set(i[i.length - 2], i[i.length - 1]));
                        const t = .5 * (o.x + h.x),
                            e = .5 * (h.y + o.y);
                        i.unshift(t, e), i.push(t, e)
                    }
                    const p = e.points,
                        y = i.length / 2;
                    let _ = i.length;
                    const x = p.length / 2,
                        b = a.width / 2,
                        v = b * b,
                        A = a.miterLimit * a.miterLimit;
                    let T = i[0],
                        E = i[1],
                        w = i[2],
                        I = i[3],
                        R = 0,
                        S = 0,
                        C = -(E - I),
                        P = T - w,
                        M = 0,
                        N = 0,
                        O = Math.sqrt(C * C + P * P);
                    C /= O, P /= O, C *= b, P *= b;
                    const B = a.alignment,
                        F = 2 * (1 - B),
                        D = 2 * B;
                    d || (a.cap === u.ROUND ? _ += g(T - C * (F - D) * .5, E - P * (F - D) * .5, T - C * F, E - P * F, T + C * D, E + P * D, p, !0) + 2 : a.cap === u.SQUARE && (_ += m(T, E, C, P, F, D, !0, p))), p.push(T - C * F, E - P * F, T + C * D, E + P * D);
                    for (let t = 1; t < y - 1; ++t) {
                        T = i[2 * (t - 1)], E = i[2 * (t - 1) + 1], w = i[2 * t], I = i[2 * t + 1], R = i[2 * (t + 1)], S = i[2 * (t + 1) + 1], C = -(E - I), P = T - w, O = Math.sqrt(C * C + P * P), C /= O, P /= O, C *= b, P *= b, M = -(I - S), N = w - R, O = Math.sqrt(M * M + N * N), M /= O, N /= O, M *= b, N *= b;
                        const e = w - T,
                            r = E - I,
                            s = w - R,
                            n = S - I,
                            o = e * s + r * n,
                            h = r * s - n * e,
                            u = h < 0;
                        if (Math.abs(h) < .001 * Math.abs(o)) {
                            p.push(w - C * F, I - P * F, w + C * D, I + P * D), o >= 0 && (a.join === l.ROUND ? _ += g(w, I, w - C * F, I - P * F, w - M * F, I - N * F, p, !1) + 4 : _ += 2, p.push(w - M * D, I - N * D, w + M * F, I + N * F));
                            continue
                        }
                        const c = (-C + T) * (-P + I) - (-C + w) * (-P + E),
                            d = (-M + R) * (-N + I) - (-M + w) * (-N + S),
                            f = (e * d - s * c) / h,
                            m = (n * c - r * d) / h,
                            y = (f - w) * (f - w) + (m - I) * (m - I),
                            x = w + (f - w) * F,
                            B = I + (m - I) * F,
                            L = w - (f - w) * D,
                            U = I - (m - I) * D,
                            k = u ? F : D,
                            G = y <= Math.min(e * e + r * r, s * s + n * n) + k * k * v;
                        let j = a.join;
                        if (j === l.MITER && y / v > A && (j = l.BEVEL), G) switch (j) {
                            case l.MITER:
                                p.push(x, B, L, U);
                                break;
                            case l.BEVEL:
                                u ? p.push(x, B, w + C * D, I + P * D, x, B, w + M * D, I + N * D) : p.push(w - C * F, I - P * F, L, U, w - M * F, I - N * F, L, U), _ += 2;
                                break;
                            case l.ROUND:
                                u ? (p.push(x, B, w + C * D, I + P * D), _ += g(w, I, w + C * D, I + P * D, w + M * D, I + N * D, p, !0) + 4, p.push(x, B, w + M * D, I + N * D)) : (p.push(w - C * F, I - P * F, L, U), _ += g(w, I, w - C * F, I - P * F, w - M * F, I - N * F, p, !1) + 4, p.push(w - M * F, I - N * F, L, U))
                        } else {
                            switch (p.push(w - C * F, I - P * F, w + C * D, I + P * D), j) {
                                case l.MITER:
                                    u ? p.push(L, U, L, U) : p.push(x, B, x, B), _ += 2;
                                    break;
                                case l.ROUND:
                                    _ += u ? g(w, I, w + C * D, I + P * D, w + M * D, I + N * D, p, !0) + 2 : g(w, I, w - C * F, I - P * F, w - M * F, I - N * F, p, !1) + 2
                            }
                            p.push(w - M * F, I - N * F, w + M * D, I + N * D), _ += 2
                        }
                    }
                    T = i[2 * (y - 2)], E = i[2 * (y - 2) + 1], w = i[2 * (y - 1)], I = i[2 * (y - 1) + 1], C = -(E - I), P = T - w, O = Math.sqrt(C * C + P * P), C /= O, P /= O, C *= b, P *= b, p.push(w - C * F, I - P * F, w + C * D, I + P * D), d || (a.cap === u.ROUND ? _ += g(w - C * (F - D) * .5, I - P * (F - D) * .5, w - C * F, I - P * F, w + C * D, I + P * D, p, !1) + 2 : a.cap === u.SQUARE && (_ += m(w, I, C, P, F, D, !1, p)));
                    const L = e.indices,
                        U = c.epsilon * c.epsilon;
                    for (let t = x; t < _ + x - 2; ++t) T = p[2 * t], E = p[2 * t + 1], w = p[2 * (t + 1)], I = p[2 * (t + 1) + 1], R = p[2 * (t + 2)], S = p[2 * (t + 2) + 1], !(Math.abs(T * (I - S) + w * (S - E) + R * (E - I)) < U) && L.push(t, t + 1, t + 2)
                }(t, e)
            }
            class _ {
                static curveLength(t, e, r, s, i, n) {
                    const a = t - 2 * r + i,
                        o = e - 2 * s + n,
                        h = 2 * r - 2 * t,
                        l = 2 * s - 2 * e,
                        u = 4 * (a * a + o * o),
                        c = 4 * (a * h + o * l),
                        d = h * h + l * l,
                        f = 2 * Math.sqrt(u + c + d),
                        p = Math.sqrt(u),
                        m = 2 * u * p,
                        g = 2 * Math.sqrt(d),
                        y = c / p;
                    return (m * f + p * c * (f - g) + (4 * d * u - c * c) * Math.log((2 * p + y + f) / (y + g))) / (4 * m)
                }
                static curveTo(t, e, r, s, i) {
                    const n = i[i.length - 2],
                        a = i[i.length - 1],
                        o = c._segmentsCount(_.curveLength(n, a, t, e, r, s));
                    let h = 0,
                        l = 0;
                    for (let u = 1; u <= o; ++u) {
                        const c = u / o;
                        h = n + (t - n) * c, l = a + (e - a) * c, i.push(h + (t + (r - t) * c - h) * c, l + (e + (s - e) * c - l) * c)
                    }
                }
            }
            const x = {
                    [s.HS.POLY]: a,
                    [s.HS.CIRC]: i,
                    [s.HS.ELIP]: i,
                    [s.HS.RECT]: o,
                    [s.HS.RREC]: h
                },
                b = [],
                v = [];
            var A = r(8820);
            class T {
                constructor(t, e = null, r = null, s = null) {
                    this.points = [], this.holes = [], this.shape = t, this.lineStyle = r, this.fillStyle = e, this.matrix = s, this.type = t.type
                }
                clone() {
                    return new T(this.shape, this.fillStyle, this.lineStyle, this.matrix)
                }
                destroy() {
                    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
                }
            }
            class E {
                constructor() {
                    this.reset()
                }
                begin(t, e, r) {
                    this.reset(), this.style = t, this.start = e, this.attribStart = r
                }
                end(t, e) {
                    this.attribSize = e - this.attribStart, this.size = t - this.start
                }
                reset() {
                    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
                }
            }
            const w = new s.E9,
                I = class t extends s.JZ {
                    constructor() {
                        super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = !1, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new A.YZ, this.boundsDirty = -1
                    }
                    get bounds() {
                        return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
                    }
                    invalidate() {
                        this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
                        for (let t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), v.push(this.drawCalls[t]);
                        this.drawCalls.length = 0;
                        for (let t = 0; t < this.batches.length; t++) {
                            const e = this.batches[t];
                            e.reset(), b.push(e)
                        }
                        this.batches.length = 0
                    }
                    clear() {
                        return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
                    }
                    drawShape(t, e = null, r = null, s = null) {
                        const i = new T(t, e, r, s);
                        return this.graphicsData.push(i), this.dirty++, this
                    }
                    drawHole(t, e = null) {
                        if (!this.graphicsData.length) return null;
                        const r = new T(t, null, null, e),
                            s = this.graphicsData[this.graphicsData.length - 1];
                        return r.lineStyle = s.lineStyle, s.holes.push(r), this.dirty++, this
                    }
                    destroy() {
                        super.destroy();
                        for (let t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
                        this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
                    }
                    containsPoint(t) {
                        const e = this.graphicsData;
                        for (let r = 0; r < e.length; ++r) {
                            const s = e[r];
                            if (s.fillStyle.visible && s.shape && (s.matrix ? s.matrix.applyInverse(t, w) : w.copyFrom(t), s.shape.contains(w.x, w.y))) {
                                let t = !1;
                                if (s.holes)
                                    for (let e = 0; e < s.holes.length; e++)
                                        if (s.holes[e].shape.contains(w.x, w.y)) {
                                            t = !0;
                                            break
                                        }
                                if (!t) return !0
                            }
                        }
                        return !1
                    }
                    updateBatches() {
                        if (!this.graphicsData.length) return void(this.batchable = !0);
                        if (!this.validateBatching()) return;
                        this.cacheDirty = this.dirty;
                        const t = this.uvs,
                            e = this.graphicsData;
                        let r = null,
                            i = null;
                        this.batches.length > 0 && (r = this.batches[this.batches.length - 1], i = r.style);
                        for (let n = this.shapeIndex; n < e.length; n++) {
                            this.shapeIndex++;
                            const a = e[n],
                                o = a.fillStyle,
                                h = a.lineStyle;
                            x[a.type].build(a), a.matrix && this.transformPoints(a.points, a.matrix), (o.visible || h.visible) && this.processHoles(a.holes);
                            for (let e = 0; e < 2; e++) {
                                const n = 0 === e ? o : h;
                                if (!n.visible) continue;
                                const l = n.texture.baseTexture,
                                    u = this.indices.length,
                                    c = this.points.length / 2;
                                l.wrapMode = s.Nt.REPEAT, 0 === e ? this.processFill(a) : this.processLine(a);
                                const d = this.points.length / 2 - c;
                                0 !== d && (r && !this._compareStyles(i, n) && (r.end(u, c), r = null), r || (r = b.pop() || new E, r.begin(n, u, c), this.batches.push(r), i = n), this.addUvs(this.points, t, n.texture, c, d, n.matrix))
                            }
                        }
                        const n = this.indices.length,
                            a = this.points.length / 2;
                        if (r && r.end(n, a), 0 === this.batches.length) return void(this.batchable = !0);
                        const o = a > 65535;
                        this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
                    }
                    _compareStyles(t, e) {
                        return !(!t || !e || t.texture.baseTexture !== e.texture.baseTexture || t.color + t.alpha !== e.color + e.alpha || !!t.native != !!e.native)
                    }
                    validateBatching() {
                        if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
                        for (let t = 0, e = this.graphicsData.length; t < e; t++) {
                            const e = this.graphicsData[t],
                                r = e.fillStyle,
                                s = e.lineStyle;
                            if (r && !r.texture.baseTexture.valid || s && !s.texture.baseTexture.valid) return !1
                        }
                        return !0
                    }
                    packBatches() {
                        this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
                        const t = this.batches;
                        for (let e = 0, r = t.length; e < r; e++) {
                            const r = t[e];
                            for (let t = 0; t < r.size; t++) {
                                const e = r.start + t;
                                this.indicesUint16[e] = this.indicesUint16[e] - r.attribStart
                            }
                        }
                    }
                    isBatchable() {
                        if (this.points.length > 131070) return !1;
                        const e = this.batches;
                        for (let t = 0; t < e.length; t++)
                            if (e[t].style.native) return !1;
                        return this.points.length < 2 * t.BATCHABLE_SIZE
                    }
                    buildDrawCalls() {
                        let t = ++s.VL._globalBatch;
                        for (let t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), v.push(this.drawCalls[t]);
                        this.drawCalls.length = 0;
                        const e = this.colors,
                            r = this.textureIds;
                        let i = v.pop();
                        i || (i = new s.a$, i.texArray = new s.Ie), i.texArray.count = 0, i.start = 0, i.size = 0, i.type = s.lg.TRIANGLES;
                        let n = 0,
                            a = null,
                            o = 0,
                            h = !1,
                            l = s.lg.TRIANGLES,
                            u = 0;
                        this.drawCalls.push(i);
                        for (let c = 0; c < this.batches.length; c++) {
                            const d = this.batches[c],
                                f = 8,
                                p = d.style,
                                m = p.texture.baseTexture;
                            h !== !!p.native && (h = !!p.native, l = h ? s.lg.LINES : s.lg.TRIANGLES, a = null, n = f, t++), a !== m && (a = m, m._batchEnabled !== t && (n === f && (t++, n = 0, i.size > 0 && (i = v.pop(), i || (i = new s.a$, i.texArray = new s.Ie), this.drawCalls.push(i)), i.start = u, i.size = 0, i.texArray.count = 0, i.type = l), m.touched = 1, m._batchEnabled = t, m._batchLocation = n, m.wrapMode = s.Nt.REPEAT, i.texArray.elements[i.texArray.count++] = m, n++)), i.size += d.size, u += d.size, o = m._batchLocation, this.addColors(e, p.color, p.alpha, d.attribSize, d.attribStart), this.addTextureIds(r, o, d.attribSize, d.attribStart)
                        }
                        s.VL._globalBatch = t, this.packAttributes()
                    }
                    packAttributes() {
                        const t = this.points,
                            e = this.uvs,
                            r = this.colors,
                            s = this.textureIds,
                            i = new ArrayBuffer(3 * t.length * 4),
                            n = new Float32Array(i),
                            a = new Uint32Array(i);
                        let o = 0;
                        for (let i = 0; i < t.length / 2; i++) n[o++] = t[2 * i], n[o++] = t[2 * i + 1], n[o++] = e[2 * i], n[o++] = e[2 * i + 1], a[o++] = r[i], n[o++] = s[i];
                        this._buffer.update(i), this._indexBuffer.update(this.indicesUint16)
                    }
                    processFill(t) {
                        t.holes.length ? a.triangulate(t, this) : x[t.type].triangulate(t, this)
                    }
                    processLine(t) {
                        y(t, this);
                        for (let e = 0; e < t.holes.length; e++) y(t.holes[e], this)
                    }
                    processHoles(t) {
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            x[r.type].build(r), r.matrix && this.transformPoints(r.points, r.matrix)
                        }
                    }
                    calculateBounds() {
                        const t = this._bounds;
                        t.clear(), t.addVertexData(this.points, 0, this.points.length), t.pad(this.boundsPadding, this.boundsPadding)
                    }
                    transformPoints(t, e) {
                        for (let r = 0; r < t.length / 2; r++) {
                            const s = t[2 * r],
                                i = t[2 * r + 1];
                            t[2 * r] = e.a * s + e.c * i + e.tx, t[2 * r + 1] = e.b * s + e.d * i + e.ty
                        }
                    }
                    addColors(t, e, r, i, n = 0) {
                        const a = s.Il.shared.setValue(e).toLittleEndianNumber(),
                            o = s.Il.shared.setValue(a).toPremultiplied(r);
                        t.length = Math.max(t.length, n + i);
                        for (let e = 0; e < i; e++) t[n + e] = o
                    }
                    addTextureIds(t, e, r, s = 0) {
                        t.length = Math.max(t.length, s + r);
                        for (let i = 0; i < r; i++) t[s + i] = e
                    }
                    addUvs(t, e, r, s, i, n = null) {
                        let a = 0;
                        const o = e.length,
                            h = r.frame;
                        for (; a < i;) {
                            let r = t[2 * (s + a)],
                                i = t[2 * (s + a) + 1];
                            if (n) {
                                const t = n.a * r + n.c * i + n.tx;
                                i = n.b * r + n.d * i + n.ty, r = t
                            }
                            a++, e.push(r / h.width, i / h.height)
                        }
                        const l = r.baseTexture;
                        (h.width < l.width || h.height < l.height) && this.adjustUvs(e, r, o, i)
                    }
                    adjustUvs(t, e, r, s) {
                        const i = e.baseTexture,
                            n = 1e-6,
                            a = r + 2 * s,
                            o = e.frame,
                            h = o.width / i.width,
                            l = o.height / i.height;
                        let u = o.x / o.width,
                            c = o.y / o.height,
                            d = Math.floor(t[r] + n),
                            f = Math.floor(t[r + 1] + n);
                        for (let e = r + 2; e < a; e += 2) d = Math.min(d, Math.floor(t[e] + n)), f = Math.min(f, Math.floor(t[e + 1] + n));
                        u -= d, c -= f;
                        for (let e = r; e < a; e += 2) t[e] = (t[e] + u) * h, t[e + 1] = (t[e + 1] + c) * l
                    }
                };
            I.BATCHABLE_SIZE = 100;
            let R = I;
            class S {
                constructor() {
                    this.color = 16777215, this.alpha = 1, this.texture = s.xE.WHITE, this.matrix = null, this.visible = !1, this.reset()
                }
                clone() {
                    const t = new S;
                    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
                }
                reset() {
                    this.color = 16777215, this.alpha = 1, this.texture = s.xE.WHITE, this.matrix = null, this.visible = !1
                }
                destroy() {
                    this.texture = null, this.matrix = null
                }
            }
            class C extends S {
                constructor() {
                    super(...arguments), this.width = 0, this.alignment = .5, this.native = !1, this.cap = u.BUTT, this.join = l.MITER, this.miterLimit = 10
                }
                clone() {
                    const t = new C;
                    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t
                }
                reset() {
                    super.reset(), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1, this.cap = u.BUTT, this.join = l.MITER, this.miterLimit = 10
                }
            }
            const P = {},
                M = class t extends A.W2 {
                    constructor(t = null) {
                        super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new S, this._lineStyle = new C, this._matrix = null, this._holeMode = !1, this.state = s.ZM.for2d(), this._geometry = t || new R, this._geometry.refCount++, this._transformID = -1, this._tintColor = new s.Il(16777215), this.blendMode = s.T$.NORMAL
                    }
                    get geometry() {
                        return this._geometry
                    }
                    clone() {
                        return this.finishPoly(), new t(this._geometry)
                    }
                    set blendMode(t) {
                        this.state.blendMode = t
                    }
                    get blendMode() {
                        return this.state.blendMode
                    }
                    get tint() {
                        return this._tintColor.value
                    }
                    set tint(t) {
                        this._tintColor.setValue(t)
                    }
                    get fill() {
                        return this._fillStyle
                    }
                    get line() {
                        return this._lineStyle
                    }
                    lineStyle(t = null, e = 0, r, s = .5, i = !1) {
                        return "number" == typeof t && (t = {
                            width: t,
                            color: e,
                            alpha: r,
                            alignment: s,
                            native: i
                        }), this.lineTextureStyle(t)
                    }
                    lineTextureStyle(t) {
                        const e = {
                            width: 0,
                            texture: s.xE.WHITE,
                            color: t ? .texture ? 16777215 : 0,
                            matrix: null,
                            alignment: .5,
                            native: !1,
                            cap: u.BUTT,
                            join: l.MITER,
                            miterLimit: 10
                        };
                        t = Object.assign(e, t), this.normalizeColor(t), this.currentPath && this.startPoly();
                        const r = t.width > 0 && t.alpha > 0;
                        return r ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
                            visible: r
                        }, t)) : this._lineStyle.reset(), this
                    }
                    startPoly() {
                        if (this.currentPath) {
                            const t = this.currentPath.points,
                                e = this.currentPath.points.length;
                            e > 2 && (this.drawShape(this.currentPath), this.currentPath = new s.mg, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
                        } else this.currentPath = new s.mg, this.currentPath.closeStroke = !1
                    }
                    finishPoly() {
                        this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
                    }
                    moveTo(t, e) {
                        return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
                    }
                    lineTo(t, e) {
                        this.currentPath || this.moveTo(0, 0);
                        const r = this.currentPath.points,
                            s = r[r.length - 2],
                            i = r[r.length - 1];
                        return (s !== t || i !== e) && r.push(t, e), this
                    }
                    _initCurve(t = 0, e = 0) {
                        this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
                    }
                    quadraticCurveTo(t, e, r, s) {
                        this._initCurve();
                        const i = this.currentPath.points;
                        return 0 === i.length && this.moveTo(0, 0), _.curveTo(t, e, r, s, i), this
                    }
                    bezierCurveTo(t, e, r, s, i, n) {
                        return this._initCurve(), p.curveTo(t, e, r, s, i, n, this.currentPath.points), this
                    }
                    arcTo(t, e, r, s, i) {
                        this._initCurve(t, e);
                        const n = this.currentPath.points,
                            a = f.curveTo(t, e, r, s, i, n);
                        if (a) {
                            const {
                                cx: t,
                                cy: e,
                                radius: r,
                                startAngle: s,
                                endAngle: i,
                                anticlockwise: n
                            } = a;
                            this.arc(t, e, r, s, i, n)
                        }
                        return this
                    }
                    arc(t, e, r, i, n, a = !1) {
                        if (i === n) return this;
                        if (!a && n <= i ? n += s._b : a && i <= n && (i += s._b), n - i == 0) return this;
                        const o = t + Math.cos(i) * r,
                            h = e + Math.sin(i) * r,
                            l = this._geometry.closePointEps;
                        let u = this.currentPath ? this.currentPath.points : null;
                        if (u) {
                            const t = Math.abs(u[u.length - 2] - o),
                                e = Math.abs(u[u.length - 1] - h);
                            t < l && e < l || u.push(o, h)
                        } else this.moveTo(o, h), u = this.currentPath.points;
                        return f.arc(o, h, t, e, r, i, n, a, u), this
                    }
                    beginFill(t = 0, e) {
                        return this.beginTextureFill({
                            texture: s.xE.WHITE,
                            color: t,
                            alpha: e
                        })
                    }
                    normalizeColor(t) {
                        const e = s.Il.shared.setValue(t.color ? ? 0);
                        t.color = e.toNumber(), t.alpha ? ? (t.alpha = e.alpha)
                    }
                    beginTextureFill(t) {
                        const e = {
                            texture: s.xE.WHITE,
                            color: 16777215,
                            matrix: null
                        };
                        t = Object.assign(e, t), this.normalizeColor(t), this.currentPath && this.startPoly();
                        const r = t.alpha > 0;
                        return r ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
                            visible: r
                        }, t)) : this._fillStyle.reset(), this
                    }
                    endFill() {
                        return this.finishPoly(), this._fillStyle.reset(), this
                    }
                    drawRect(t, e, r, i) {
                        return this.drawShape(new s.Ae(t, e, r, i))
                    }
                    drawRoundedRect(t, e, r, i, n) {
                        return this.drawShape(new s.c9(t, e, r, i, n))
                    }
                    drawCircle(t, e, r) {
                        return this.drawShape(new s.Cd(t, e, r))
                    }
                    drawEllipse(t, e, r, i) {
                        return this.drawShape(new s.Pj(t, e, r, i))
                    }
                    drawPolygon(...t) {
                        let e, r = !0;
                        const i = t[0];
                        i.points ? (r = i.closeStroke, e = i.points) : e = Array.isArray(t[0]) ? t[0] : t;
                        const n = new s.mg(e);
                        return n.closeStroke = r, this.drawShape(n), this
                    }
                    drawShape(t) {
                        return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
                    }
                    clear() {
                        return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this
                    }
                    isFastRect() {
                        const t = this._geometry.graphicsData;
                        return !(1 !== t.length || t[0].shape.type !== s.HS.RECT || t[0].matrix || t[0].holes.length || t[0].lineStyle.visible && t[0].lineStyle.width)
                    }
                    _render(t) {
                        this.finishPoly();
                        const e = this._geometry;
                        e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
                    }
                    _populateBatches() {
                        const t = this._geometry,
                            e = this.blendMode,
                            r = t.batches.length;
                        this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = r, this.vertexData = new Float32Array(t.points);
                        for (let i = 0; i < r; i++) {
                            const r = t.batches[i],
                                n = r.style.color,
                                a = new Float32Array(this.vertexData.buffer, 4 * r.attribStart * 2, 2 * r.attribSize),
                                o = new Float32Array(t.uvsFloat32.buffer, 4 * r.attribStart * 2, 2 * r.attribSize),
                                h = {
                                    vertexData: a,
                                    blendMode: e,
                                    indices: new Uint16Array(t.indicesUint16.buffer, 2 * r.start, r.size),
                                    uvs: o,
                                    _batchRGB: s.Il.shared.setValue(n).toRgbArray(),
                                    _tintRGB: n,
                                    _texture: r.style.texture,
                                    alpha: r.style.alpha,
                                    worldAlpha: 1
                                };
                            this.batches[i] = h
                        }
                    }
                    _renderBatched(t) {
                        if (this.batches.length) {
                            t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                            for (let e = 0, r = this.batches.length; e < r; e++) {
                                const r = this.batches[e];
                                r.worldAlpha = this.worldAlpha * r.alpha, t.plugins[this.pluginName].render(r)
                            }
                        }
                    }
                    _renderDirect(t) {
                        const e = this._resolveDirectShader(t),
                            r = this._geometry,
                            i = this.worldAlpha,
                            n = e.uniforms,
                            a = r.drawCalls;
                        n.translationMatrix = this.transform.worldTransform, s.Il.shared.setValue(this._tintColor).premultiply(i).toArray(n.tint), t.shader.bind(e), t.geometry.bind(r, e), t.state.set(this.state);
                        for (let e = 0, s = a.length; e < s; e++) this._renderDrawCallDirect(t, r.drawCalls[e])
                    }
                    _renderDrawCallDirect(t, e) {
                        const {
                            texArray: r,
                            type: s,
                            size: i,
                            start: n
                        } = e, a = r.count;
                        for (let e = 0; e < a; e++) t.texture.bind(r.elements[e], e);
                        t.geometry.draw(s, i, n)
                    }
                    _resolveDirectShader(t) {
                        let e = this.shader;
                        const r = this.pluginName;
                        if (!e) {
                            if (!P[r]) {
                                const {
                                    maxTextures: e
                                } = t.plugins[r], i = new Int32Array(e);
                                for (let t = 0; t < e; t++) i[t] = t;
                                const n = {
                                        tint: new Float32Array([1, 1, 1, 1]),
                                        translationMatrix: new s.y3,
                                        default: s.oo.from({
                                            uSamplers: i
                                        }, !0)
                                    },
                                    a = t.plugins[r]._shader.program;
                                P[r] = new s.ex(a, n)
                            }
                            e = P[r]
                        }
                        return e
                    }
                    _calculateBounds() {
                        this.finishPoly();
                        const t = this._geometry;
                        if (!t.graphicsData.length) return;
                        const {
                            minX: e,
                            minY: r,
                            maxX: s,
                            maxY: i
                        } = t.bounds;
                        this._bounds.addFrame(this.transform, e, r, s, i)
                    }
                    containsPoint(e) {
                        return this.worldTransform.applyInverse(e, t._TEMP_POINT), this._geometry.containsPoint(t._TEMP_POINT)
                    }
                    calculateTints() {
                        if (this.batchTint !== this.tint) {
                            this.batchTint = this._tintColor.toNumber();
                            for (let t = 0; t < this.batches.length; t++) {
                                const e = this.batches[t];
                                e._tintRGB = s.Il.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber()
                            }
                        }
                    }
                    calculateVertices() {
                        const t = this.transform._worldID;
                        if (this._transformID === t) return;
                        this._transformID = t;
                        const e = this.transform.worldTransform,
                            r = e.a,
                            s = e.b,
                            i = e.c,
                            n = e.d,
                            a = e.tx,
                            o = e.ty,
                            h = this._geometry.points,
                            l = this.vertexData;
                        let u = 0;
                        for (let t = 0; t < h.length; t += 2) {
                            const e = h[t],
                                c = h[t + 1];
                            l[u++] = r * e + i * c + a, l[u++] = n * c + s * e + o
                        }
                    }
                    closePath() {
                        const t = this.currentPath;
                        return t && (t.closeStroke = !0, this.finishPoly()), this
                    }
                    setMatrix(t) {
                        return this._matrix = t, this
                    }
                    beginHole() {
                        return this.finishPoly(), this._holeMode = !0, this
                    }
                    endHole() {
                        return this.finishPoly(), this._holeMode = !1, this
                    }
                    destroy(t) {
                        this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(t)
                    }
                };
            M.curves = c, M._TEMP_POINT = new s.E9;
            let N = M;
            const O = {
                buildPoly: a,
                buildCircle: i,
                buildRectangle: o,
                buildRoundedRectangle: h,
                buildLine: y,
                ArcUtils: f,
                BezierUtils: p,
                QuadraticUtils: _,
                BatchPart: E,
                FILL_COMMANDS: x,
                BATCH_POOL: b,
                DRAW_CALL_POOL: v
            }
        },
        8363: (t, e, r) => {
            "use strict";
            r.d(e, {
                Cd: () => u,
                ZX: () => n,
                Pj: () => c,
                y3: () => p,
                AB: () => T,
                _b: () => s,
                E9: () => o,
                mg: () => d,
                jl: () => i,
                Ae: () => l,
                c9: () => f,
                HS: () => a,
                wx: () => w,
                Lv: () => A
            });
            const s = 2 * Math.PI,
                i = 180 / Math.PI,
                n = Math.PI / 180;
            var a = (t => (t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC", t))(a || {});
            class o {
                constructor(t = 0, e = 0) {
                    this.x = 0, this.y = 0, this.x = t, this.y = e
                }
                clone() {
                    return new o(this.x, this.y)
                }
                copyFrom(t) {
                    return this.set(t.x, t.y), this
                }
                copyTo(t) {
                    return t.set(this.x, this.y), t
                }
                equals(t) {
                    return t.x === this.x && t.y === this.y
                }
                set(t = 0, e = t) {
                    return this.x = t, this.y = e, this
                }
            }
            o.prototype.toString = function() {
                return `[@pixi/math:Point x=${this.x} y=${this.y}]`
            };
            const h = [new o, new o, new o, new o];
            class l {
                constructor(t = 0, e = 0, r = 0, s = 0) {
                    this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(s), this.type = a.RECT
                }
                get left() {
                    return this.x
                }
                get right() {
                    return this.x + this.width
                }
                get top() {
                    return this.y
                }
                get bottom() {
                    return this.y + this.height
                }
                static get EMPTY() {
                    return new l(0, 0, 0, 0)
                }
                clone() {
                    return new l(this.x, this.y, this.width, this.height)
                }
                copyFrom(t) {
                    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                }
                copyTo(t) {
                    return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
                }
                contains(t, e) {
                    return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
                }
                intersects(t, e) {
                    if (!e) {
                        const e = this.x < t.x ? t.x : this.x;
                        if ((this.right > t.right ? t.right : this.right) <= e) return !1;
                        const r = this.y < t.y ? t.y : this.y;
                        return (this.bottom > t.bottom ? t.bottom : this.bottom) > r
                    }
                    const r = this.left,
                        s = this.right,
                        i = this.top,
                        n = this.bottom;
                    if (s <= r || n <= i) return !1;
                    const a = h[0].set(t.left, t.top),
                        o = h[1].set(t.left, t.bottom),
                        l = h[2].set(t.right, t.top),
                        u = h[3].set(t.right, t.bottom);
                    if (l.x <= a.x || o.y <= a.y) return !1;
                    const c = Math.sign(e.a * e.d - e.b * e.c);
                    if (0 === c || (e.apply(a, a), e.apply(o, o), e.apply(l, l), e.apply(u, u), Math.max(a.x, o.x, l.x, u.x) <= r || Math.min(a.x, o.x, l.x, u.x) >= s || Math.max(a.y, o.y, l.y, u.y) <= i || Math.min(a.y, o.y, l.y, u.y) >= n)) return !1;
                    const d = c * (o.y - a.y),
                        f = c * (a.x - o.x),
                        p = d * r + f * i,
                        m = d * s + f * i,
                        g = d * r + f * n,
                        y = d * s + f * n;
                    if (Math.max(p, m, g, y) <= d * a.x + f * a.y || Math.min(p, m, g, y) >= d * u.x + f * u.y) return !1;
                    const _ = c * (a.y - l.y),
                        x = c * (l.x - a.x),
                        b = _ * r + x * i,
                        v = _ * s + x * i,
                        A = _ * r + x * n,
                        T = _ * s + x * n;
                    return !(Math.max(b, v, A, T) <= _ * a.x + x * a.y || Math.min(b, v, A, T) >= _ * u.x + x * u.y)
                }
                pad(t = 0, e = t) {
                    return this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
                }
                fit(t) {
                    const e = Math.max(this.x, t.x),
                        r = Math.min(this.x + this.width, t.x + t.width),
                        s = Math.max(this.y, t.y),
                        i = Math.min(this.y + this.height, t.y + t.height);
                    return this.x = e, this.width = Math.max(r - e, 0), this.y = s, this.height = Math.max(i - s, 0), this
                }
                ceil(t = 1, e = .001) {
                    const r = Math.ceil((this.x + this.width - e) * t) / t,
                        s = Math.ceil((this.y + this.height - e) * t) / t;
                    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = s - this.y, this
                }
                enlarge(t) {
                    const e = Math.min(this.x, t.x),
                        r = Math.max(this.x + this.width, t.x + t.width),
                        s = Math.min(this.y, t.y),
                        i = Math.max(this.y + this.height, t.y + t.height);
                    return this.x = e, this.width = r - e, this.y = s, this.height = i - s, this
                }
            }
            l.prototype.toString = function() {
                return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
            };
            class u {
                constructor(t = 0, e = 0, r = 0) {
                    this.x = t, this.y = e, this.radius = r, this.type = a.CIRC
                }
                clone() {
                    return new u(this.x, this.y, this.radius)
                }
                contains(t, e) {
                    if (this.radius <= 0) return !1;
                    const r = this.radius * this.radius;
                    let s = this.x - t,
                        i = this.y - e;
                    return s *= s, i *= i, s + i <= r
                }
                getBounds() {
                    return new l(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                }
            }
            u.prototype.toString = function() {
                return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
            };
            class c {
                constructor(t = 0, e = 0, r = 0, s = 0) {
                    this.x = t, this.y = e, this.width = r, this.height = s, this.type = a.ELIP
                }
                clone() {
                    return new c(this.x, this.y, this.width, this.height)
                }
                contains(t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    let r = (t - this.x) / this.width,
                        s = (e - this.y) / this.height;
                    return r *= r, s *= s, r + s <= 1
                }
                getBounds() {
                    return new l(this.x - this.width, this.y - this.height, this.width, this.height)
                }
            }
            c.prototype.toString = function() {
                return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
            };
            class d {
                constructor(...t) {
                    let e = Array.isArray(t[0]) ? t[0] : t;
                    if ("number" != typeof e[0]) {
                        const t = [];
                        for (let r = 0, s = e.length; r < s; r++) t.push(e[r].x, e[r].y);
                        e = t
                    }
                    this.points = e, this.type = a.POLY, this.closeStroke = !0
                }
                clone() {
                    const t = this.points.slice(),
                        e = new d(t);
                    return e.closeStroke = this.closeStroke, e
                }
                contains(t, e) {
                    let r = !1;
                    const s = this.points.length / 2;
                    for (let i = 0, n = s - 1; i < s; n = i++) {
                        const s = this.points[2 * i],
                            a = this.points[2 * i + 1],
                            o = this.points[2 * n],
                            h = this.points[2 * n + 1];
                        a > e != h > e && t < (e - a) / (h - a) * (o - s) + s && (r = !r)
                    }
                    return r
                }
            }
            d.prototype.toString = function() {
                return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce(((t,e)=>`${t}, ${e}`),"")}]`
            };
            class f {
                constructor(t = 0, e = 0, r = 0, s = 0, i = 20) {
                    this.x = t, this.y = e, this.width = r, this.height = s, this.radius = i, this.type = a.RREC
                }
                clone() {
                    return new f(this.x, this.y, this.width, this.height, this.radius)
                }
                contains(t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                        const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                        if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r) return !0;
                        let s = t - (this.x + r),
                            i = e - (this.y + r);
                        const n = r * r;
                        if (s * s + i * i <= n || (s = t - (this.x + this.width - r), s * s + i * i <= n) || (i = e - (this.y + this.height - r), s * s + i * i <= n) || (s = t - (this.x + r), s * s + i * i <= n)) return !0
                    }
                    return !1
                }
            }
            f.prototype.toString = function() {
                return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
            };
            class p {
                constructor(t = 1, e = 0, r = 0, s = 1, i = 0, n = 0) {
                    this.array = null, this.a = t, this.b = e, this.c = r, this.d = s, this.tx = i, this.ty = n
                }
                fromArray(t) {
                    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                }
                set(t, e, r, s, i, n) {
                    return this.a = t, this.b = e, this.c = r, this.d = s, this.tx = i, this.ty = n, this
                }
                toArray(t, e) {
                    this.array || (this.array = new Float32Array(9));
                    const r = e || this.array;
                    return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
                }
                apply(t, e) {
                    e = e || new o;
                    const r = t.x,
                        s = t.y;
                    return e.x = this.a * r + this.c * s + this.tx, e.y = this.b * r + this.d * s + this.ty, e
                }
                applyInverse(t, e) {
                    e = e || new o;
                    const r = 1 / (this.a * this.d + this.c * -this.b),
                        s = t.x,
                        i = t.y;
                    return e.x = this.d * r * s + -this.c * r * i + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * i + -this.b * r * s + (-this.ty * this.a + this.tx * this.b) * r, e
                }
                translate(t, e) {
                    return this.tx += t, this.ty += e, this
                }
                scale(t, e) {
                    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                }
                rotate(t) {
                    const e = Math.cos(t),
                        r = Math.sin(t),
                        s = this.a,
                        i = this.c,
                        n = this.tx;
                    return this.a = s * e - this.b * r, this.b = s * r + this.b * e, this.c = i * e - this.d * r, this.d = i * r + this.d * e, this.tx = n * e - this.ty * r, this.ty = n * r + this.ty * e, this
                }
                append(t) {
                    const e = this.a,
                        r = this.b,
                        s = this.c,
                        i = this.d;
                    return this.a = t.a * e + t.b * s, this.b = t.a * r + t.b * i, this.c = t.c * e + t.d * s, this.d = t.c * r + t.d * i, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * r + t.ty * i + this.ty, this
                }
                setTransform(t, e, r, s, i, n, a, o, h) {
                    return this.a = Math.cos(a + h) * i, this.b = Math.sin(a + h) * i, this.c = -Math.sin(a - o) * n, this.d = Math.cos(a - o) * n, this.tx = t - (r * this.a + s * this.c), this.ty = e - (r * this.b + s * this.d), this
                }
                prepend(t) {
                    const e = this.tx;
                    if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                        const e = this.a,
                            r = this.c;
                        this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
                    }
                    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                }
                decompose(t) {
                    const e = this.a,
                        r = this.b,
                        i = this.c,
                        n = this.d,
                        a = t.pivot,
                        o = -Math.atan2(-i, n),
                        h = Math.atan2(r, e),
                        l = Math.abs(o + h);
                    return l < 1e-5 || Math.abs(s - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = h), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx + (a.x * e + a.y * i), t.position.y = this.ty + (a.x * r + a.y * n), t
                }
                invert() {
                    const t = this.a,
                        e = this.b,
                        r = this.c,
                        s = this.d,
                        i = this.tx,
                        n = t * s - e * r;
                    return this.a = s / n, this.b = -e / n, this.c = -r / n, this.d = t / n, this.tx = (r * this.ty - s * i) / n, this.ty = -(t * this.ty - e * i) / n, this
                }
                identity() {
                    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                }
                clone() {
                    const t = new p;
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }
                copyTo(t) {
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }
                copyFrom(t) {
                    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
                }
                static get IDENTITY() {
                    return new p
                }
                static get TEMP_MATRIX() {
                    return new p
                }
            }
            p.prototype.toString = function() {
                return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
            };
            const m = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                g = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                y = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                _ = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                x = [],
                b = [],
                v = Math.sign;
            ! function() {
                for (let t = 0; t < 16; t++) {
                    const e = [];
                    x.push(e);
                    for (let r = 0; r < 16; r++) {
                        const s = v(m[t] * m[r] + y[t] * g[r]),
                            i = v(g[t] * m[r] + _[t] * g[r]),
                            n = v(m[t] * y[r] + y[t] * _[r]),
                            a = v(g[t] * y[r] + _[t] * _[r]);
                        for (let t = 0; t < 16; t++)
                            if (m[t] === s && g[t] === i && y[t] === n && _[t] === a) {
                                e.push(t);
                                break
                            }
                    }
                }
                for (let t = 0; t < 16; t++) {
                    const e = new p;
                    e.set(m[t], g[t], y[t], _[t], 0, 0), b.push(e)
                }
            }();
            const A = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MAIN_DIAGONAL: 10,
                MIRROR_HORIZONTAL: 12,
                REVERSE_DIAGONAL: 14,
                uX: t => m[t],
                uY: t => g[t],
                vX: t => y[t],
                vY: t => _[t],
                inv: t => 8 & t ? 15 & t : 7 & -t,
                add: (t, e) => x[t][e],
                sub: (t, e) => x[t][A.inv(e)],
                rotate180: t => 4 ^ t,
                isVertical: t => 2 == (3 & t),
                byDirection: (t, e) => 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? A.S : A.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? A.E : A.W : e > 0 ? t > 0 ? A.SE : A.SW : t > 0 ? A.NE : A.NW,
                matrixAppendRotationInv: (t, e, r = 0, s = 0) => {
                    const i = b[A.inv(e)];
                    i.tx = r, i.ty = s, t.append(i)
                }
            };
            class T {
                constructor(t, e, r = 0, s = 0) {
                    this._x = r, this._y = s, this.cb = t, this.scope = e
                }
                clone(t = this.cb, e = this.scope) {
                    return new T(t, e, this._x, this._y)
                }
                set(t = 0, e = t) {
                    return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this.cb.call(this.scope)), this
                }
                copyFrom(t) {
                    return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
                }
                copyTo(t) {
                    return t.set(this._x, this._y), t
                }
                equals(t) {
                    return t.x === this._x && t.y === this._y
                }
                get x() {
                    return this._x
                }
                set x(t) {
                    this._x !== t && (this._x = t, this.cb.call(this.scope))
                }
                get y() {
                    return this._y
                }
                set y(t) {
                    this._y !== t && (this._y = t, this.cb.call(this.scope))
                }
            }
            T.prototype.toString = function() {
                return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`
            };
            const E = class {
                constructor() {
                    this.worldTransform = new p, this.localTransform = new p, this.position = new T(this.onChange, this, 0, 0), this.scale = new T(this.onChange, this, 1, 1), this.pivot = new T(this.onChange, this, 0, 0), this.skew = new T(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
                }
                onChange() {
                    this._localID++
                }
                updateSkew() {
                    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
                }
                updateLocalTransform() {
                    const t = this.localTransform;
                    this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
                }
                updateTransform(t) {
                    const e = this.localTransform;
                    if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                        const r = t.worldTransform,
                            s = this.worldTransform;
                        s.a = e.a * r.a + e.b * r.c, s.b = e.a * r.b + e.b * r.d, s.c = e.c * r.a + e.d * r.c, s.d = e.c * r.b + e.d * r.d, s.tx = e.tx * r.a + e.ty * r.c + r.tx, s.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
                    }
                }
                setFromMatrix(t) {
                    t.decompose(this), this._localID++
                }
                get rotation() {
                    return this._rotation
                }
                set rotation(t) {
                    this._rotation !== t && (this._rotation = t, this.updateSkew())
                }
            };
            E.IDENTITY = new E;
            let w = E;
            w.prototype.toString = function() {
                return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`
            }
        },
        5638: (t, e, r) => {
            "use strict";
            r.d(e, {
                ZT: () => h,
                _1: () => i,
                Au: () => n,
                AL: () => l,
                VJ: () => o,
                IE: () => u
            });
            var s = r(6723);
            class i extends s.xc {
                constructor(t = 100, e = 100, r = 10, s = 10) {
                    super(), this.segWidth = r, this.segHeight = s, this.width = t, this.height = e, this.build()
                }
                build() {
                    const t = this.segWidth * this.segHeight,
                        e = [],
                        r = [],
                        s = [],
                        i = this.segWidth - 1,
                        n = this.segHeight - 1,
                        a = this.width / i,
                        o = this.height / n;
                    for (let s = 0; s < t; s++) {
                        const t = s % this.segWidth,
                            h = s / this.segWidth | 0;
                        e.push(t * a, h * o), r.push(t / i, h / n)
                    }
                    const h = i * n;
                    for (let t = 0; t < h; t++) {
                        const e = t % i,
                            r = t / i | 0,
                            n = r * this.segWidth + e,
                            a = r * this.segWidth + e + 1,
                            o = (r + 1) * this.segWidth + e,
                            h = (r + 1) * this.segWidth + e + 1;
                        s.push(n, a, o, a, h, o)
                    }
                    this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(s), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
                }
            }
            class n extends s.xc {
                constructor(t = 200, e, r = 0) {
                    super(new Float32Array(4 * e.length), new Float32Array(4 * e.length), new Uint16Array(6 * (e.length - 1))), this.points = e, this._width = t, this.textureScale = r, this.build()
                }
                get width() {
                    return this._width
                }
                build() {
                    const t = this.points;
                    if (!t) return;
                    const e = this.getBuffer("aVertexPosition"),
                        r = this.getBuffer("aTextureCoord"),
                        s = this.getIndex();
                    if (t.length < 1) return;
                    e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), r.data = new Float32Array(4 * t.length), s.data = new Uint16Array(6 * (t.length - 1)));
                    const i = r.data,
                        n = s.data;
                    i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 1;
                    let a = 0,
                        o = t[0];
                    const h = this._width * this.textureScale,
                        l = t.length;
                    for (let e = 0; e < l; e++) {
                        const r = 4 * e;
                        if (this.textureScale > 0) {
                            const r = o.x - t[e].x,
                                s = o.y - t[e].y,
                                i = Math.sqrt(r * r + s * s);
                            o = t[e], a += i / h
                        } else a = e / (l - 1);
                        i[r] = a, i[r + 1] = 0, i[r + 2] = a, i[r + 3] = 1
                    }
                    let u = 0;
                    for (let t = 0; t < l - 1; t++) {
                        const e = 2 * t;
                        n[u++] = e, n[u++] = e + 1, n[u++] = e + 2, n[u++] = e + 2, n[u++] = e + 1, n[u++] = e + 3
                    }
                    r.update(), s.update(), this.updateVertices()
                }
                updateVertices() {
                    const t = this.points;
                    if (t.length < 1) return;
                    let e, r = t[0],
                        s = 0,
                        i = 0;
                    const n = this.buffers[0].data,
                        a = t.length,
                        o = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                    for (let h = 0; h < a; h++) {
                        const l = t[h],
                            u = 4 * h;
                        e = h < t.length - 1 ? t[h + 1] : l, i = -(e.x - r.x), s = e.y - r.y;
                        let c = 10 * (1 - h / (a - 1));
                        c > 1 && (c = 1);
                        const d = Math.sqrt(s * s + i * i);
                        d < 1e-6 ? (s = 0, i = 0) : (s /= d, i /= d, s *= o, i *= o), n[u] = l.x + s, n[u + 1] = l.y + i, n[u + 2] = l.x - s, n[u + 3] = l.y - i, r = l
                    }
                    this.buffers[0].update()
                }
                update() {
                    this.textureScale > 0 ? this.build() : this.updateVertices()
                }
            }
            var a = r(1851);
            class o extends s.Kj {
                constructor(t, e, r) {
                    super(new i(t.width, t.height, e, r), new s.rY(a.xE.WHITE)), this.texture = t, this.autoResize = !0
                }
                textureUpdated() {
                    this._textureID = this.shader.texture._updateID;
                    const t = this.geometry,
                        {
                            width: e,
                            height: r
                        } = this.shader.texture;
                    this.autoResize && (t.width !== e || t.height !== r) && (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build())
                }
                set texture(t) {
                    this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
                }
                get texture() {
                    return this.shader.texture
                }
                _render(t) {
                    this._textureID !== this.shader.texture._updateID && this.textureUpdated(), super._render(t)
                }
                destroy(t) {
                    this.shader.texture.off("update", this.textureUpdated, this), super.destroy(t)
                }
            }
            class h extends o {
                constructor(t, e, r, s, i) {
                    super(a.xE.WHITE, 4, 4), this._origWidth = t.orig.width, this._origHeight = t.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = e ? ? t.defaultBorders ? .left ? ? 10, this._rightWidth = s ? ? t.defaultBorders ? .right ? ? 10, this._topHeight = r ? ? t.defaultBorders ? .top ? ? 10, this._bottomHeight = i ? ? t.defaultBorders ? .bottom ? ? 10, this.texture = t
                }
                textureUpdated() {
                    this._textureID = this.shader.texture._updateID, this._refresh()
                }
                get vertices() {
                    return this.geometry.getBuffer("aVertexPosition").data
                }
                set vertices(t) {
                    this.geometry.getBuffer("aVertexPosition").data = t
                }
                updateHorizontalVertices() {
                    const t = this.vertices,
                        e = this._getMinScale();
                    t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height
                }
                updateVerticalVertices() {
                    const t = this.vertices,
                        e = this._getMinScale();
                    t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width
                }
                _getMinScale() {
                    const t = this._leftWidth + this._rightWidth,
                        e = this._width > t ? 1 : this._width / t,
                        r = this._topHeight + this._bottomHeight,
                        s = this._height > r ? 1 : this._height / r;
                    return Math.min(e, s)
                }
                get width() {
                    return this._width
                }
                set width(t) {
                    this._width = t, this._refresh()
                }
                get height() {
                    return this._height
                }
                set height(t) {
                    this._height = t, this._refresh()
                }
                get leftWidth() {
                    return this._leftWidth
                }
                set leftWidth(t) {
                    this._leftWidth = t, this._refresh()
                }
                get rightWidth() {
                    return this._rightWidth
                }
                set rightWidth(t) {
                    this._rightWidth = t, this._refresh()
                }
                get topHeight() {
                    return this._topHeight
                }
                set topHeight(t) {
                    this._topHeight = t, this._refresh()
                }
                get bottomHeight() {
                    return this._bottomHeight
                }
                set bottomHeight(t) {
                    this._bottomHeight = t, this._refresh()
                }
                _refresh() {
                    const t = this.texture,
                        e = this.geometry.buffers[1].data;
                    this._origWidth = t.orig.width, this._origHeight = t.orig.height;
                    const r = 1 / this._origWidth,
                        s = 1 / this._origHeight;
                    e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = s * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - s * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
                }
            }
            class l extends s.Kj {
                constructor(t = a.xE.EMPTY, e, r, i, n) {
                    const o = new s.xc(e, r, i);
                    o.getBuffer("aVertexPosition").static = !1, super(o, new s.rY(t), null, n), this.autoUpdate = !0
                }
                get vertices() {
                    return this.geometry.getBuffer("aVertexPosition").data
                }
                set vertices(t) {
                    this.geometry.getBuffer("aVertexPosition").data = t
                }
                _render(t) {
                    this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), super._render(t)
                }
            }
            class u extends s.Kj {
                constructor(t, e, r = 0) {
                    const i = new n(t.height, e, r),
                        o = new s.rY(t);
                    r > 0 && (t.baseTexture.wrapMode = a.Nt.REPEAT), super(i, o), this.autoUpdate = !0
                }
                _render(t) {
                    const e = this.geometry;
                    (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height, e.update()), super._render(t)
                }
            }
        },
        6723: (t, e, r) => {
            "use strict";
            r.d(e, {
                Kj: () => l,
                wQ: () => n,
                xc: () => u,
                rY: () => c
            });
            var s = r(1851),
                i = r(8820);
            class n {
                constructor(t, e) {
                    this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
                }
                update(t) {
                    if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) return;
                    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
                    const e = this.uvBuffer.data;
                    (!this.data || this.data.length !== e.length) && (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
                }
            }
            const a = new s.E9,
                o = new s.mg,
                h = class t extends i.W2 {
                    constructor(t, e, r, i = s.lg.TRIANGLES) {
                        super(), this.geometry = t, this.shader = e, this.state = r || s.ZM.for2d(), this.drawMode = i, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = s.Xd.ROUND_PIXELS, this.batchUvs = null
                    }
                    get geometry() {
                        return this._geometry
                    }
                    set geometry(t) {
                        this._geometry !== t && (this._geometry && (this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose()), this._geometry = t, this._geometry && this._geometry.refCount++, this.vertexDirty = -1)
                    }
                    get uvBuffer() {
                        return this.geometry.buffers[1]
                    }
                    get verticesBuffer() {
                        return this.geometry.buffers[0]
                    }
                    set material(t) {
                        this.shader = t
                    }
                    get material() {
                        return this.shader
                    }
                    set blendMode(t) {
                        this.state.blendMode = t
                    }
                    get blendMode() {
                        return this.state.blendMode
                    }
                    set roundPixels(t) {
                        this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                    }
                    get roundPixels() {
                        return this._roundPixels
                    }
                    get tint() {
                        return "tint" in this.shader ? this.shader.tint : null
                    }
                    set tint(t) {
                        this.shader.tint = t
                    }
                    get tintValue() {
                        return this.shader.tintValue
                    }
                    get texture() {
                        return "texture" in this.shader ? this.shader.texture : null
                    }
                    set texture(t) {
                        this.shader.texture = t
                    }
                    _render(e) {
                        const r = this.geometry.buffers[0].data;
                        this.shader.batchable && this.drawMode === s.lg.TRIANGLES && r.length < 2 * t.BATCHABLE_SIZE ? this._renderToBatch(e) : this._renderDefault(e)
                    }
                    _renderDefault(t) {
                        const e = this.shader;
                        e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
                    }
                    _renderToBatch(t) {
                        const e = this.geometry,
                            r = this.shader;
                        r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = r._tintRGB, this._texture = r.texture;
                        const s = this.material.pluginName;
                        t.batch.setObjectRenderer(t.plugins[s]), t.plugins[s].render(this)
                    }
                    calculateVertices() {
                        const t = this.geometry.buffers[0],
                            e = t.data,
                            r = t._updateID;
                        if (r === this.vertexDirty && this._transformID === this.transform._worldID) return;
                        this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                        const i = this.transform.worldTransform,
                            n = i.a,
                            a = i.b,
                            o = i.c,
                            h = i.d,
                            l = i.tx,
                            u = i.ty,
                            c = this.vertexData;
                        for (let t = 0; t < c.length / 2; t++) {
                            const r = e[2 * t],
                                s = e[2 * t + 1];
                            c[2 * t] = n * r + o * s + l, c[2 * t + 1] = a * r + h * s + u
                        }
                        if (this._roundPixels) {
                            const t = s.Xd.RESOLUTION;
                            for (let e = 0; e < c.length; ++e) c[e] = Math.round(c[e] * t) / t
                        }
                        this.vertexDirty = r
                    }
                    calculateUvs() {
                        const t = this.geometry.buffers[1],
                            e = this.shader;
                        e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new n(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
                    }
                    _calculateBounds() {
                        this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
                    }
                    containsPoint(t) {
                        if (!this.getBounds().contains(t.x, t.y)) return !1;
                        this.worldTransform.applyInverse(t, a);
                        const e = this.geometry.getBuffer("aVertexPosition").data,
                            r = o.points,
                            s = this.geometry.getIndex().data,
                            i = s.length,
                            n = 4 === this.drawMode ? 3 : 1;
                        for (let t = 0; t + 2 < i; t += n) {
                            const i = 2 * s[t],
                                n = 2 * s[t + 1],
                                h = 2 * s[t + 2];
                            if (r[0] = e[i], r[1] = e[i + 1], r[2] = e[n], r[3] = e[n + 1], r[4] = e[h], r[5] = e[h + 1], o.contains(a.x, a.y)) return !0
                        }
                        return !1
                    }
                    destroy(t) {
                        super.destroy(t), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
                    }
                };
            h.BATCHABLE_SIZE = 100;
            let l = h;
            class u extends s.wG {
                constructor(t, e, r) {
                    super();
                    const i = new s.lW(t),
                        n = new s.lW(e, !0),
                        a = new s.lW(r, !0, !0);
                    this.addAttribute("aVertexPosition", i, 2, !1, s.vK.FLOAT).addAttribute("aTextureCoord", n, 2, !1, s.vK.FLOAT).addIndex(a), this._updateId = -1
                }
                get vertexDirtyId() {
                    return this.buffers[0]._updateID
                }
            }
            class c extends s.ex {
                constructor(t, e) {
                    const r = {
                        uSampler: t,
                        alpha: 1,
                        uTextureMatrix: s.y3.IDENTITY,
                        uColor: new Float32Array([1, 1, 1, 1])
                    };
                    (e = Object.assign({
                        tint: 16777215,
                        alpha: 1,
                        pluginName: "batch"
                    }, e)).uniforms && Object.assign(r, e.uniforms), super(e.program || s.$r.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), r), this._colorDirty = !1, this.uvMatrix = new s.UX(t), this.batchable = void 0 === e.program, this.pluginName = e.pluginName, this._tintColor = new s.Il(e.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0, this.alpha = e.alpha
                }
                get texture() {
                    return this.uniforms.uSampler
                }
                set texture(t) {
                    this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t)
                }
                set alpha(t) {
                    t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
                }
                get alpha() {
                    return this._alpha
                }
                set tint(t) {
                    t !== this.tint && (this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0)
                }
                get tint() {
                    return this._tintColor.value
                }
                get tintValue() {
                    return this._tintColor.toNumber()
                }
                update() {
                    if (this._colorDirty) {
                        this._colorDirty = !1;
                        const t = this.texture.baseTexture.alphaMode;
                        s.Il.shared.setValue(this._tintColor).premultiply(this._alpha, t).toArray(this.uniforms.uColor)
                    }
                    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
                }
            }
        },
        6075: (t, e, r) => {
            "use strict";
            r.d(e, {
                ZQ: () => s,
                tq: () => A,
                Xd: () => i
            });
            const s = {
                    createCanvas: (t, e) => {
                        const r = document.createElement("canvas");
                        return r.width = t, r.height = e, r
                    },
                    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
                    getWebGLRenderingContext: () => WebGLRenderingContext,
                    getNavigator: () => navigator,
                    getBaseUrl: () => document.baseURI ? ? window.location.href,
                    getFontFaceSet: () => document.fonts,
                    fetch: (t, e) => fetch(t, e),
                    parseXML: t => (new DOMParser).parseFromString(t, "text/xml")
                },
                i = {
                    ADAPTER: s,
                    RESOLUTION: 1,
                    CREATE_IMAGE_BITMAP: !1,
                    ROUND_PIXELS: !1
                };
            var n = /iPhone/i,
                a = /iPod/i,
                o = /iPad/i,
                h = /\biOS-universal(?:.+)Mac\b/i,
                l = /\bAndroid(?:.+)Mobile\b/i,
                u = /Android/i,
                c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
                d = /Silk/i,
                f = /Windows Phone/i,
                p = /\bWindows(?:.+)ARM\b/i,
                m = /BlackBerry/i,
                g = /BB10/i,
                y = /Opera Mini/i,
                _ = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                x = /Mobile(?:.+)Firefox\b/i,
                b = function(t) {
                    return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
                };

            function v(t) {
                var e = {
                    userAgent: "",
                    platform: "",
                    maxTouchPoints: 0
                };
                t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
                    userAgent: t.userAgent,
                    platform: t.platform,
                    maxTouchPoints: t.maxTouchPoints || 0
                }) : e = {
                    userAgent: navigator.userAgent,
                    platform: navigator.platform,
                    maxTouchPoints: navigator.maxTouchPoints || 0
                };
                var r = e.userAgent,
                    s = r.split("[FBAN");
                void 0 !== s[1] && (r = s[0]), void 0 !== (s = r.split("Twitter"))[1] && (r = s[0]);
                var i = function(t) {
                        return function(e) {
                            return e.test(t)
                        }
                    }(r),
                    v = {
                        apple: {
                            phone: i(n) && !i(f),
                            ipod: i(a),
                            tablet: !i(n) && (i(o) || b(e)) && !i(f),
                            universal: i(h),
                            device: (i(n) || i(a) || i(o) || i(h) || b(e)) && !i(f)
                        },
                        amazon: {
                            phone: i(c),
                            tablet: !i(c) && i(d),
                            device: i(c) || i(d)
                        },
                        android: {
                            phone: !i(f) && i(c) || !i(f) && i(l),
                            tablet: !i(f) && !i(c) && !i(l) && (i(d) || i(u)),
                            device: !i(f) && (i(c) || i(d) || i(l) || i(u)) || i(/\bokhttp\b/i)
                        },
                        windows: {
                            phone: i(f),
                            tablet: i(p),
                            device: i(f) || i(p)
                        },
                        other: {
                            blackberry: i(m),
                            blackberry10: i(g),
                            opera: i(y),
                            firefox: i(x),
                            chrome: i(_),
                            device: i(m) || i(g) || i(y) || i(x) || i(_)
                        },
                        any: !1,
                        phone: !1,
                        tablet: !1
                    };
                return v.any = v.apple.device || v.android.device || v.windows.device || v.other.device, v.phone = v.apple.phone || v.android.phone || v.windows.phone, v.tablet = v.apple.tablet || v.android.tablet || v.windows.tablet, v
            }
            const A = (v.default ? ? v)(globalThis.navigator)
        },
        540: (t, e, r) => {
            "use strict";
            r.d(e, {
                j: () => o
            });
            var s = r(1851),
                i = r(8820);
            const n = new s.E9,
                a = new Uint16Array([0, 1, 2, 0, 2, 3]);
            class o extends i.W2 {
                constructor(t) {
                    super(), this._anchor = new s.AB(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new s.Il(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = s.T$.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || s.xE.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = a, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = s.Xd.ROUND_PIXELS
                }
                _onTextureUpdate() {
                    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = s.P6.sign(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = s.P6.sign(this.scale.y) * this._height / this._texture.orig.height)
                }
                _onAnchorUpdate() {
                    this._transformID = -1, this._transformTrimmedID = -1
                }
                calculateVertices() {
                    const t = this._texture;
                    if (this._transformID === this.transform._worldID && this._textureID === t._updateID) return;
                    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
                    const e = this.transform.worldTransform,
                        r = e.a,
                        i = e.b,
                        n = e.c,
                        a = e.d,
                        o = e.tx,
                        h = e.ty,
                        l = this.vertexData,
                        u = t.trim,
                        c = t.orig,
                        d = this._anchor;
                    let f = 0,
                        p = 0,
                        m = 0,
                        g = 0;
                    if (u ? (p = u.x - d._x * c.width, f = p + u.width, g = u.y - d._y * c.height, m = g + u.height) : (p = -d._x * c.width, f = p + c.width, g = -d._y * c.height, m = g + c.height), l[0] = r * p + n * g + o, l[1] = a * g + i * p + h, l[2] = r * f + n * g + o, l[3] = a * g + i * f + h, l[4] = r * f + n * m + o, l[5] = a * m + i * f + h, l[6] = r * p + n * m + o, l[7] = a * m + i * p + h, this._roundPixels) {
                        const t = s.Xd.RESOLUTION;
                        for (let e = 0; e < l.length; ++e) l[e] = Math.round(l[e] * t) / t
                    }
                }
                calculateTrimmedVertices() {
                    if (this.vertexTrimmedData) {
                        if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                    } else this.vertexTrimmedData = new Float32Array(8);
                    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                    const t = this._texture,
                        e = this.vertexTrimmedData,
                        r = t.orig,
                        i = this._anchor,
                        n = this.transform.worldTransform,
                        a = n.a,
                        o = n.b,
                        h = n.c,
                        l = n.d,
                        u = n.tx,
                        c = n.ty,
                        d = -i._x * r.width,
                        f = d + r.width,
                        p = -i._y * r.height,
                        m = p + r.height;
                    if (e[0] = a * d + h * p + u, e[1] = l * p + o * d + c, e[2] = a * f + h * p + u, e[3] = l * p + o * f + c, e[4] = a * f + h * m + u, e[5] = l * m + o * f + c, e[6] = a * d + h * m + u, e[7] = l * m + o * d + c, this._roundPixels) {
                        const t = s.Xd.RESOLUTION;
                        for (let r = 0; r < e.length; ++r) e[r] = Math.round(e[r] * t) / t
                    }
                }
                _render(t) {
                    this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
                }
                _calculateBounds() {
                    const t = this._texture.trim,
                        e = this._texture.orig;
                    !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                }
                getLocalBounds(t) {
                    return 0 === this.children.length ? (this._localBounds || (this._localBounds = new i.YZ), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new s.Ae), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
                }
                containsPoint(t) {
                    this.worldTransform.applyInverse(t, n);
                    const e = this._texture.orig.width,
                        r = this._texture.orig.height,
                        s = -e * this.anchor.x;
                    let i = 0;
                    return n.x >= s && n.x < s + e && (i = -r * this.anchor.y, n.y >= i && n.y < i + r)
                }
                destroy(t) {
                    if (super.destroy(t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof t ? t : t ? .texture) {
                        const e = "boolean" == typeof t ? t : t ? .baseTexture;
                        this._texture.destroy(!!e)
                    }
                    this._texture = null
                }
                static from(t, e) {
                    const r = t instanceof s.xE ? t : s.xE.from(t, e);
                    return new o(r)
                }
                set roundPixels(t) {
                    this._roundPixels !== t && (this._transformID = -1, this._transformTrimmedID = -1), this._roundPixels = t
                }
                get roundPixels() {
                    return this._roundPixels
                }
                get width() {
                    return Math.abs(this.scale.x) * this._texture.orig.width
                }
                set width(t) {
                    const e = s.P6.sign(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }
                get height() {
                    return Math.abs(this.scale.y) * this._texture.orig.height
                }
                set height(t) {
                    const e = s.P6.sign(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }
                get anchor() {
                    return this._anchor
                }
                set anchor(t) {
                    this._anchor.copyFrom(t)
                }
                get tint() {
                    return this._tintColor.value
                }
                set tint(t) {
                    this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber()
                }
                get tintValue() {
                    return this._tintColor.toNumber()
                }
                get texture() {
                    return this._texture
                }
                set texture(t) {
                    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || s.xE.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                }
            }
        },
        4116: (t, e, r) => {
            "use strict";
            r.d(e, {
                vB: () => h,
                Sb: () => u,
                uF: () => n
            });
            var s = r(6075),
                i = r(8902),
                n = (t => (t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY", t))(n || {});
            class a {
                constructor(t, e = null, r = 0, s = !1) {
                    this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = r, this.once = s
                }
                match(t, e = null) {
                    return this.fn === t && this.context === e
                }
                emit(t) {
                    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                    const e = this.next;
                    return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
                }
                connect(t) {
                    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
                }
                destroy(t = !1) {
                    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                    const e = this.next;
                    return this.next = t ? null : e, this.previous = null, e
                }
            }
            const o = class t {
                constructor() {
                    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new a(null, null, 1 / 0), this.deltaMS = 1 / t.targetFPMS, this.elapsedMS = 1 / t.targetFPMS, this._tick = t => {
                        this._requestId = null, this.started && (this.update(t), this.started && null === this._requestId && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
                    }
                }
                _requestIfNeeded() {
                    null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
                }
                _cancelIfNeeded() {
                    null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                }
                _startIfPossible() {
                    this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                }
                add(t, e, r = n.NORMAL) {
                    return this._addListener(new a(t, e, r))
                }
                addOnce(t, e, r = n.NORMAL) {
                    return this._addListener(new a(t, e, r, !0))
                }
                _addListener(t) {
                    let e = this._head.next,
                        r = this._head;
                    if (e) {
                        for (; e;) {
                            if (t.priority > e.priority) {
                                t.connect(r);
                                break
                            }
                            r = e, e = e.next
                        }
                        t.previous || t.connect(r)
                    } else t.connect(r);
                    return this._startIfPossible(), this
                }
                remove(t, e) {
                    let r = this._head.next;
                    for (; r;) r = r.match(t, e) ? r.destroy() : r.next;
                    return this._head.next || this._cancelIfNeeded(), this
                }
                get count() {
                    if (!this._head) return 0;
                    let t = 0,
                        e = this._head;
                    for (; e = e.next;) t++;
                    return t
                }
                start() {
                    this.started || (this.started = !0, this._requestIfNeeded())
                }
                stop() {
                    this.started && (this.started = !1, this._cancelIfNeeded())
                }
                destroy() {
                    if (!this._protected) {
                        this.stop();
                        let t = this._head.next;
                        for (; t;) t = t.destroy(!0);
                        this._head.destroy(), this._head = null
                    }
                }
                update(e = performance.now()) {
                    let r;
                    if (e > this.lastTime) {
                        if (r = this.elapsedMS = e - this.lastTime, r > this._maxElapsedMS && (r = this._maxElapsedMS), r *= this.speed, this._minElapsedMS) {
                            const t = e - this._lastFrame | 0;
                            if (t < this._minElapsedMS) return;
                            this._lastFrame = e - t % this._minElapsedMS
                        }
                        this.deltaMS = r, this.deltaTime = this.deltaMS * t.targetFPMS;
                        const s = this._head;
                        let i = s.next;
                        for (; i;) i = i.emit(this.deltaTime);
                        s.next || this._cancelIfNeeded()
                    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                    this.lastTime = e
                }
                get FPS() {
                    return 1e3 / this.elapsedMS
                }
                get minFPS() {
                    return 1e3 / this._maxElapsedMS
                }
                set minFPS(e) {
                    const r = Math.min(this.maxFPS, e),
                        s = Math.min(Math.max(0, r) / 1e3, t.targetFPMS);
                    this._maxElapsedMS = 1 / s
                }
                get maxFPS() {
                    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
                }
                set maxFPS(t) {
                    if (0 === t) this._minElapsedMS = 0;
                    else {
                        const e = Math.max(this.minFPS, t);
                        this._minElapsedMS = 1 / (e / 1e3)
                    }
                }
                static get shared() {
                    if (!t._shared) {
                        const e = t._shared = new t;
                        e.autoStart = !0, e._protected = !0
                    }
                    return t._shared
                }
                static get system() {
                    if (!t._system) {
                        const e = t._system = new t;
                        e.autoStart = !0, e._protected = !0
                    }
                    return t._system
                }
            };
            o.targetFPMS = .06;
            let h = o;
            Object.defineProperties(s.Xd, {
                TARGET_FPMS: {
                    get: () => h.targetFPMS,
                    set(t) {
                        (0, i.deprecation)("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), h.targetFPMS = t
                    }
                }
            });
            var l = r(463);
            class u {
                static init(t) {
                    t = Object.assign({
                        autoStart: !0,
                        sharedTicker: !1
                    }, t), Object.defineProperty(this, "ticker", {
                        set(t) {
                            this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, n.LOW)
                        },
                        get() {
                            return this._ticker
                        }
                    }), this.stop = () => {
                        this._ticker.stop()
                    }, this.start = () => {
                        this._ticker.start()
                    }, this._ticker = null, this.ticker = t.sharedTicker ? h.shared : new h, t.autoStart && this.start()
                }
                static destroy() {
                    if (this._ticker) {
                        const t = this._ticker;
                        this.ticker = null, t.destroy()
                    }
                }
            }
            u.extension = l.n.Application, l.R.add(u)
        },
        8902: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                BaseTextureCache: () => W,
                BoundingBox: () => V,
                CanvasRenderTarget: () => q,
                DATA_URI: () => P,
                EventEmitter: () => i,
                ProgramCache: () => X,
                TextureCache: () => $,
                clearTextureCache: () => Y,
                correctBlendMode: () => I,
                createIndicesForQuads: () => M,
                decomposeDataUri: () => tt,
                deprecation: () => h,
                destroyTextureCache: () => z,
                detectVideoAlphaMode: () => g,
                determineCrossOrigin: () => et,
                earcut: () => n,
                getBufferType: () => N,
                getCanvasBoundingBox: () => Q,
                getResolutionOfUrl: () => rt,
                hex2rgb: () => v,
                hex2string: () => A,
                interleaveTypedArrays: () => B,
                isMobile: () => s.tq,
                isPow2: () => D,
                isWebGLSupported: () => x,
                log2: () => L,
                nextPow2: () => F,
                path: () => d,
                premultiplyBlendMode: () => w,
                premultiplyRgba: () => R,
                premultiplyTint: () => S,
                premultiplyTintToRgba: () => C,
                removeItems: () => U,
                rgb2hex: () => E,
                sayHello: () => _,
                sign: () => k,
                skipHello: () => y,
                string2hex: () => T,
                trimCanvas: () => J,
                uid: () => j,
                url: () => l
            });
            var s = r(6075);
            s.Xd.RETINA_PREFIX = /@([0-9\.]+)x/, s.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
            var i = r(6729),
                n = r(9187),
                a = r(8575);
            const o = {};

            function h(t, e, r = 3) {
                if (o[e]) return;
                let s = (new Error).stack;
                typeof s > "u" ? console.warn("PixiJS Deprecation Warning: ", `${e}\nDeprecated since v${t}`) : (s = s.split("\n").splice(r).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${e}\nDeprecated since v${t}`), console.warn(s), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${e}\nDeprecated since v${t}`), console.warn(s))), o[e] = !0
            }
            const l = {
                get parse() {
                    return h("7.3.0", "utils.url.parse is deprecated, use native URL API instead."), a.Qc
                },
                get format() {
                    return h("7.3.0", "utils.url.format is deprecated, use native URL API instead."), a.WU
                },
                get resolve() {
                    return h("7.3.0", "utils.url.resolve is deprecated, use native URL API instead."), a.DB
                }
            };

            function u(t) {
                if ("string" != typeof t) throw new TypeError(`Path must be a string. Received ${JSON.stringify(t)}`)
            }

            function c(t) {
                return t.split("?")[0].split("#")[0]
            }
            const d = {
                toPosix: t => ("\\", "/", t.replace(new RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "/")),
                isUrl(t) {
                    return /^https?:/.test(this.toPosix(t))
                },
                isDataUrl: t => /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t),
                isBlobUrl: t => t.startsWith("blob:"),
                hasProtocol(t) {
                    return /^[^/:]+:/.test(this.toPosix(t))
                },
                getProtocol(t) {
                    u(t), t = this.toPosix(t);
                    const e = /^file:\/\/\//.exec(t);
                    if (e) return e[0];
                    const r = /^[^/:]+:\/{0,2}/.exec(t);
                    return r ? r[0] : ""
                },
                toAbsolute(t, e, r) {
                    if (u(t), this.isDataUrl(t) || this.isBlobUrl(t)) return t;
                    const i = c(this.toPosix(e ? ? s.Xd.ADAPTER.getBaseUrl())),
                        n = c(this.toPosix(r ? ? this.rootname(i)));
                    return (t = this.toPosix(t)).startsWith("/") ? d.join(n, t.slice(1)) : this.isAbsolute(t) ? t : this.join(i, t)
                },
                normalize(t) {
                    if (u(t), 0 === t.length) return ".";
                    if (this.isDataUrl(t) || this.isBlobUrl(t)) return t;
                    let e = "";
                    const r = (t = this.toPosix(t)).startsWith("/");
                    this.hasProtocol(t) && (e = this.rootname(t), t = t.slice(e.length));
                    const s = t.endsWith("/");
                    return (t = function(t, e) {
                        let r = "",
                            s = 0,
                            i = -1,
                            n = 0,
                            a = -1;
                        for (let e = 0; e <= t.length; ++e) {
                            if (e < t.length) a = t.charCodeAt(e);
                            else {
                                if (47 === a) break;
                                a = 47
                            }
                            if (47 === a) {
                                if (i !== e - 1 && 1 !== n)
                                    if (i !== e - 1 && 2 === n) {
                                        if (r.length < 2 || 2 !== s || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2))
                                            if (r.length > 2) {
                                                const t = r.lastIndexOf("/");
                                                if (t !== r.length - 1) {
                                                    -1 === t ? (r = "", s = 0) : (r = r.slice(0, t), s = r.length - 1 - r.lastIndexOf("/")), i = e, n = 0;
                                                    continue
                                                }
                                            } else if (2 === r.length || 1 === r.length) {
                                            r = "", s = 0, i = e, n = 0;
                                            continue
                                        }
                                    } else r.length > 0 ? r += `/${t.slice(i+1,e)}` : r = t.slice(i + 1, e), s = e - i - 1;
                                i = e, n = 0
                            } else 46 === a && -1 !== n ? ++n : n = -1
                        }
                        return r
                    }(t)).length > 0 && s && (t += "/"), r ? `/${t}` : e + t
                },
                isAbsolute(t) {
                    return u(t), t = this.toPosix(t), !!this.hasProtocol(t) || t.startsWith("/")
                },
                join(...t) {
                    if (0 === t.length) return ".";
                    let e;
                    for (let r = 0; r < t.length; ++r) {
                        const s = t[r];
                        if (u(s), s.length > 0)
                            if (void 0 === e) e = s;
                            else {
                                const i = t[r - 1] ? ? "";
                                this.joinExtensions.includes(this.extname(i).toLowerCase()) ? e += `/../${s}` : e += `/${s}`
                            }
                    }
                    return void 0 === e ? "." : this.normalize(e)
                },
                dirname(t) {
                    if (u(t), 0 === t.length) return ".";
                    let e = (t = this.toPosix(t)).charCodeAt(0);
                    const r = 47 === e;
                    let s = -1,
                        i = !0;
                    const n = this.getProtocol(t),
                        a = t;
                    for (let r = (t = t.slice(n.length)).length - 1; r >= 1; --r)
                        if (e = t.charCodeAt(r), 47 === e) {
                            if (!i) {
                                s = r;
                                break
                            }
                        } else i = !1;
                    return -1 === s ? r ? "/" : this.isUrl(a) ? n + t : n : r && 1 === s ? "//" : n + t.slice(0, s)
                },
                rootname(t) {
                    u(t);
                    let e = "";
                    if (e = (t = this.toPosix(t)).startsWith("/") ? "/" : this.getProtocol(t), this.isUrl(t)) {
                        const r = t.indexOf("/", e.length);
                        e = -1 !== r ? t.slice(0, r) : t, e.endsWith("/") || (e += "/")
                    }
                    return e
                },
                basename(t, e) {
                    u(t), e && u(e), t = c(this.toPosix(t));
                    let r, s = 0,
                        i = -1,
                        n = !0;
                    if (void 0 !== e && e.length > 0 && e.length <= t.length) {
                        if (e.length === t.length && e === t) return "";
                        let a = e.length - 1,
                            o = -1;
                        for (r = t.length - 1; r >= 0; --r) {
                            const h = t.charCodeAt(r);
                            if (47 === h) {
                                if (!n) {
                                    s = r + 1;
                                    break
                                }
                            } else -1 === o && (n = !1, o = r + 1), a >= 0 && (h === e.charCodeAt(a) ? -1 == --a && (i = r) : (a = -1, i = o))
                        }
                        return s === i ? i = o : -1 === i && (i = t.length), t.slice(s, i)
                    }
                    for (r = t.length - 1; r >= 0; --r)
                        if (47 === t.charCodeAt(r)) {
                            if (!n) {
                                s = r + 1;
                                break
                            }
                        } else -1 === i && (n = !1, i = r + 1);
                    return -1 === i ? "" : t.slice(s, i)
                },
                extname(t) {
                    u(t);
                    let e = -1,
                        r = 0,
                        s = -1,
                        i = !0,
                        n = 0;
                    for (let a = (t = c(this.toPosix(t))).length - 1; a >= 0; --a) {
                        const o = t.charCodeAt(a);
                        if (47 !== o) - 1 === s && (i = !1, s = a + 1), 46 === o ? -1 === e ? e = a : 1 !== n && (n = 1) : -1 !== e && (n = -1);
                        else if (!i) {
                            r = a + 1;
                            break
                        }
                    }
                    return -1 === e || -1 === s || 0 === n || 1 === n && e === s - 1 && e === r + 1 ? "" : t.slice(e, s)
                },
                parse(t) {
                    u(t);
                    const e = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === t.length) return e;
                    let r = (t = c(this.toPosix(t))).charCodeAt(0);
                    const s = this.isAbsolute(t);
                    let i;
                    e.root = this.rootname(t), i = s || this.hasProtocol(t) ? 1 : 0;
                    let n = -1,
                        a = 0,
                        o = -1,
                        h = !0,
                        l = t.length - 1,
                        d = 0;
                    for (; l >= i; --l)
                        if (r = t.charCodeAt(l), 47 !== r) - 1 === o && (h = !1, o = l + 1), 46 === r ? -1 === n ? n = l : 1 !== d && (d = 1) : -1 !== n && (d = -1);
                        else if (!h) {
                        a = l + 1;
                        break
                    }
                    return -1 === n || -1 === o || 0 === d || 1 === d && n === o - 1 && n === a + 1 ? -1 !== o && (e.base = e.name = 0 === a && s ? t.slice(1, o) : t.slice(a, o)) : (0 === a && s ? (e.name = t.slice(1, n), e.base = t.slice(1, o)) : (e.name = t.slice(a, n), e.base = t.slice(a, o)), e.ext = t.slice(n, o)), e.dir = this.dirname(t), e
                },
                sep: "/",
                delimiter: ":",
                joinExtensions: [".html"]
            };
            var f = r(7361);
            let p, m;
            async function g() {
                return p ? ? (p = (async () => {
                    const t = document.createElement("canvas").getContext("webgl");
                    if (!t) return f.iw.UNPACK;
                    const e = await new Promise((t => {
                        const e = document.createElement("video");
                        e.onloadeddata = () => t(e), e.onerror = () => t(null), e.autoplay = !1, e.crossOrigin = "anonymous", e.preload = "auto", e.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", e.load()
                    }));
                    if (!e) return f.iw.UNPACK;
                    const r = t.createTexture();
                    t.bindTexture(t.TEXTURE_2D, r);
                    const s = t.createFramebuffer();
                    t.bindFramebuffer(t.FRAMEBUFFER, s), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
                    const i = new Uint8Array(4);
                    return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, i), t.deleteFramebuffer(s), t.deleteTexture(r), t.getExtension("WEBGL_lose_context") ? .loseContext(), i[0] <= i[3] ? f.iw.PMA : f.iw.UNPACK
                })()), p
            }

            function y() {
                h("7.0.0", "skipHello is deprecated, please use settings.RENDER_OPTIONS.hello")
            }

            function _() {
                h("7.0.0", 'sayHello is deprecated, please use Renderer\'s "hello" option')
            }

            function x() {
                return typeof m > "u" && (m = function() {
                    const t = {
                        stencil: !0,
                        failIfMajorPerformanceCaveat: s.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                    };
                    try {
                        if (!s.Xd.ADAPTER.getWebGLRenderingContext()) return !1;
                        const e = s.Xd.ADAPTER.createCanvas();
                        let r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                        const i = !!r ? .getContextAttributes() ? .stencil;
                        if (r) {
                            const t = r.getExtension("WEBGL_lose_context");
                            t && t.loseContext()
                        }
                        return r = null, i
                    } catch {
                        return !1
                    }
                }()), m
            }
            var b = r(7110);

            function v(t, e = []) {
                return h("7.2.0", "utils.hex2rgb is deprecated, use Color#toRgbArray instead"), b.I.shared.setValue(t).toRgbArray(e)
            }

            function A(t) {
                return h("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"), b.I.shared.setValue(t).toHex()
            }

            function T(t) {
                return h("7.2.0", "utils.string2hex is deprecated, use Color#toNumber instead"), b.I.shared.setValue(t).toNumber()
            }

            function E(t) {
                return h("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"), b.I.shared.setValue(t).toNumber()
            }
            const w = function() {
                const t = [],
                    e = [];
                for (let r = 0; r < 32; r++) t[r] = r, e[r] = r;
                t[f.T$.NORMAL_NPM] = f.T$.NORMAL, t[f.T$.ADD_NPM] = f.T$.ADD, t[f.T$.SCREEN_NPM] = f.T$.SCREEN, e[f.T$.NORMAL] = f.T$.NORMAL_NPM, e[f.T$.ADD] = f.T$.ADD_NPM, e[f.T$.SCREEN] = f.T$.SCREEN_NPM;
                const r = [];
                return r.push(e), r.push(t), r
            }();

            function I(t, e) {
                return w[e ? 1 : 0][t]
            }

            function R(t, e, r, s = !0) {
                return h("7.2.0", "utils.premultiplyRgba has moved to Color.premultiply"), b.I.shared.setValue(t).premultiply(e, s).toArray(r ? ? new Float32Array(4))
            }

            function S(t, e) {
                return h("7.2.0", "utils.premultiplyTint has moved to Color.toPremultiplied"), b.I.shared.setValue(t).toPremultiplied(e)
            }

            function C(t, e, r, s = !0) {
                return h("7.2.0", "utils.premultiplyTintToRgba has moved to Color.premultiply"), b.I.shared.setValue(t).premultiply(e, s).toArray(r ? ? new Float32Array(4))
            }
            const P = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

            function M(t, e = null) {
                const r = 6 * t;
                if ((e = e || new Uint16Array(r)).length !== r) throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${r}`);
                for (let t = 0, s = 0; t < r; t += 6, s += 4) e[t + 0] = s + 0, e[t + 1] = s + 1, e[t + 2] = s + 2, e[t + 3] = s + 0, e[t + 4] = s + 2, e[t + 5] = s + 3;
                return e
            }

            function N(t) {
                if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
                if (2 === t.BYTES_PER_ELEMENT) {
                    if (t instanceof Uint16Array) return "Uint16Array"
                } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
                return null
            }
            const O = {
                Float32Array,
                Uint32Array,
                Int32Array,
                Uint8Array
            };

            function B(t, e) {
                let r = 0,
                    s = 0;
                const i = {};
                for (let i = 0; i < t.length; i++) s += e[i], r += t[i].length;
                const n = new ArrayBuffer(4 * r);
                let a = null,
                    o = 0;
                for (let r = 0; r < t.length; r++) {
                    const h = e[r],
                        l = t[r],
                        u = N(l);
                    i[u] || (i[u] = new O[u](n)), a = i[u];
                    for (let t = 0; t < l.length; t++) a[(t / h | 0) * s + o + t % h] = l[t];
                    o += h
                }
                return new Float32Array(n)
            }

            function F(t) {
                return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 1 + (t |= t >>> 16)
            }

            function D(t) {
                return !(t & t - 1 || !t)
            }

            function L(t) {
                let e = (t > 65535 ? 1 : 0) << 4,
                    r = ((t >>>= e) > 255 ? 1 : 0) << 3;
                return e |= r, r = ((t >>>= r) > 15 ? 1 : 0) << 2, e |= r, r = ((t >>>= r) > 3 ? 1 : 0) << 1, e |= r, e | (t >>>= r) >> 1
            }

            function U(t, e, r) {
                const s = t.length;
                let i;
                if (e >= s || 0 === r) return;
                const n = s - (r = e + r > s ? s - e : r);
                for (i = e; i < n; ++i) t[i] = t[i + r];
                t.length = n
            }

            function k(t) {
                return 0 === t ? 0 : t < 0 ? -1 : 1
            }
            let G = 0;

            function j() {
                return ++G
            }
            const H = class {
                constructor(t, e, r, s) {
                    this.left = t, this.top = e, this.right = r, this.bottom = s
                }
                get width() {
                    return this.right - this.left
                }
                get height() {
                    return this.bottom - this.top
                }
                isEmpty() {
                    return this.left === this.right || this.top === this.bottom
                }
            };
            H.EMPTY = new H(0, 0, 0, 0);
            let V = H;
            const X = {},
                $ = Object.create(null),
                W = Object.create(null);

            function z() {
                let t;
                for (t in $) $[t].destroy();
                for (t in W) W[t].destroy()
            }

            function Y() {
                let t;
                for (t in $) delete $[t];
                for (t in W) delete W[t]
            }
            class q {
                constructor(t, e, r) {
                    this._canvas = s.Xd.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = r || s.Xd.RESOLUTION, this.resize(t, e)
                }
                clear() {
                    this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
                }
                resize(t, e) {
                    this._checkDestroyed(), this._canvas.width = Math.round(t * this.resolution), this._canvas.height = Math.round(e * this.resolution)
                }
                destroy() {
                    this._context = null, this._canvas = null
                }
                get width() {
                    return this._checkDestroyed(), this._canvas.width
                }
                set width(t) {
                    this._checkDestroyed(), this._canvas.width = Math.round(t)
                }
                get height() {
                    return this._checkDestroyed(), this._canvas.height
                }
                set height(t) {
                    this._checkDestroyed(), this._canvas.height = Math.round(t)
                }
                get canvas() {
                    return this._checkDestroyed(), this._canvas
                }
                get context() {
                    return this._checkDestroyed(), this._context
                }
                _checkDestroyed() {
                    if (null === this._canvas) throw new TypeError("The CanvasRenderTarget has already been destroyed")
                }
            }

            function K(t, e, r) {
                for (let s = 0, i = 4 * r * e; s < e; ++s, i += 4)
                    if (0 !== t[i + 3]) return !1;
                return !0
            }

            function Z(t, e, r, s, i) {
                const n = 4 * e;
                for (let e = s, a = s * n + 4 * r; e <= i; ++e, a += n)
                    if (0 !== t[a + 3]) return !1;
                return !0
            }

            function Q(t) {
                const {
                    width: e,
                    height: r
                } = t, s = t.getContext("2d", {
                    willReadFrequently: !0
                });
                if (null === s) throw new TypeError("Failed to get canvas 2D context");
                const i = s.getImageData(0, 0, e, r).data;
                let n = 0,
                    a = 0,
                    o = e - 1,
                    h = r - 1;
                for (; a < r && K(i, e, a);) ++a;
                if (a === r) return V.EMPTY;
                for (; K(i, e, h);) --h;
                for (; Z(i, e, n, a, h);) ++n;
                for (; Z(i, e, o, a, h);) --o;
                return ++o, ++h, new V(n, a, o, h)
            }

            function J(t) {
                const e = Q(t),
                    {
                        width: r,
                        height: s
                    } = e;
                let i = null;
                if (!e.isEmpty()) {
                    const n = t.getContext("2d");
                    if (null === n) throw new TypeError("Failed to get canvas 2D context");
                    i = n.getImageData(e.left, e.top, r, s)
                }
                return {
                    width: r,
                    height: s,
                    data: i
                }
            }

            function tt(t) {
                const e = P.exec(t);
                if (e) return {
                    mediaType: e[1] ? e[1].toLowerCase() : void 0,
                    subType: e[2] ? e[2].toLowerCase() : void 0,
                    charset: e[3] ? e[3].toLowerCase() : void 0,
                    encoding: e[4] ? e[4].toLowerCase() : void 0,
                    data: e[5]
                }
            }

            function et(t, e = globalThis.location) {
                if (t.startsWith("data:")) return "";
                e = e || globalThis.location;
                const r = new URL(t, document.baseURI);
                return r.hostname !== e.hostname || r.port !== e.port || r.protocol !== e.protocol ? "anonymous" : ""
            }

            function rt(t, e = 1) {
                const r = s.Xd.RETINA_PREFIX ? .exec(t);
                return r ? parseFloat(r[1]) : e
            }
        }
    }
]);