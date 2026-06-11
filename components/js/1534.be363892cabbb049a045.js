/*! For license information please see 1534.be363892cabbb049a045.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1534, 1820, 4201, 4677, 5629, 6582, 7058, 8963, 9439], {
        18512(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: () => i
            });
            var n = t(98283),
                o = t(79555);

            function a(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            const i = function() {
                var e, r, t = (e = (0, n.useState)((0, o.getIsPortraitOrientation)()), r = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, r) {
                        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var n, o, a, i, c = [],
                                u = !0,
                                s = !1;
                            try {
                                if (a = (t = t.call(e)).next, 0 === r) {
                                    if (Object(t) !== t) return;
                                    u = !1
                                } else
                                    for (; !(u = (n = a.call(t)).done) && (c.push(n.value), c.length !== r); u = !0);
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    if (!u && null != t.return && (i = t.return(), Object(i) !== i)) return
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return c
                        }
                    }(e, r) || function(e, r) {
                        if (e) {
                            if ("string" == typeof e) return a(e, r);
                            var t = {}.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0
                        }
                    }(e, r) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = t[0],
                    c = t[1],
                    u = function(e) {
                        c(e.matches)
                    };
                return (0, n.useEffect)(function() {
                    return window.matchMedia("(orientation: portrait)").addEventListener("change", u),
                        function() {
                            return window.matchMedia("(orientation: portrait)").removeEventListener("change", u)
                        }
                }, []), i
            }
        },
        2694(e, r, t) {
            "use strict";
            var n = t(6925);

            function o() {}

            function a() {}
            a.resetWarningCache = o, e.exports = function() {
                function e(e, r, t, o, a, i) {
                    if (i !== n) {
                        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw c.name = "Invariant Violation", c
                    }
                }

                function r() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: r,
                    element: e,
                    elementType: e,
                    instanceOf: r,
                    node: e,
                    objectOf: r,
                    oneOf: r,
                    oneOfType: r,
                    shape: r,
                    exact: r,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return t.PropTypes = t, t
            }
        },
        5556(e, r, t) {
            e.exports = t(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, r, t) {
            "use strict";
            var n = t(98283),
                o = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function s(e, r, t) {
                var n, a = {},
                    s = null,
                    l = null;
                for (n in void 0 !== t && (s = "" + t), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (l = r.ref), r) i.call(r, n) && !u.hasOwnProperty(n) && (a[n] = r[n]);
                if (e && e.defaultProps)
                    for (n in r = e.defaultProps) void 0 === a[n] && (a[n] = r[n]);
                return {
                    $$typeof: o,
                    type: e,
                    key: s,
                    ref: l,
                    props: a,
                    _owner: c.current
                }
            }
            r.Fragment = a, r.jsx = s, r.jsxs = s
        },
        74848(e, r, t) {
            "use strict";
            e.exports = t(21020)
        }
    }
]);