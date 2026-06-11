/*! For license information please see 2222.d5f9c2d3b8368b1e29be.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1820, 2222, 4201, 4677, 5629, 6582, 7058, 8963, 9439], {
        92222(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: () => b
            });
            var r = n(98283),
                i = n(38874),
                o = n(5556),
                s = n.n(o),
                a = {
                    culture: s().string,
                    notificationList: s().arrayOf((0, o.shape)({
                        guid: s().number || s().string,
                        message: s().string,
                        status: s().oneOf(["info", "success", "bonus", "error"])
                    })).isRequired,
                    isMobile: s().bool,
                    isSmall: s().bool,
                    style: s().object,
                    removeNotification: s().func.isRequired,
                    closeTime: s().number,
                    parentId: s().string
                },
                c = n(74848),
                l = (0, r.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(1543)]).then(n.bind(n, 33924))
                }),
                u = (0, r.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(8019)]).then(n.bind(n, 80400))
                }),
                f = (0, r.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(6879)]).then(n.bind(n, 59260))
                }),
                p = (0, r.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(1855)]).then(n.bind(n, 1855))
                }),
                d = (0, r.memo)(i.default.div.withConfig({
                    componentId: "sc-la5e2j-0"
                })(["position:absolute;right:0;top:0;z-index:15;overflow:hidden;height:", ";width:", ";"], function(e) {
                    return e.isMobile ? "2.875em" : "var(--notificationContainerHeight, 6.875em)"
                }, function(e) {
                    return e.isMobile ? "var(--notificationContainerWidthMob, 100%)" : "var(--notificationContainerWidth, 21.5em)"
                })),
                m = (0, r.memo)(i.default.div.withConfig({
                    componentId: "sc-la5e2j-1"
                })(["position:static;flex:0 0 auto;width:18.9375em;max-width:19.4375em;align-self:center;margin-bottom:0.5em;overflow:hidden;"]));

            function y(e) {
                var t = e.notificationList,
                    n = e.removeNotification,
                    i = e.style,
                    o = e.closeTime,
                    s = e.isMobile,
                    a = e.isLandscape,
                    y = e.culture,
                    b = e.parentId,
                    h = e.isSmall,
                    g = a ? u : s ? l : h ? p : f,
                    v = h && !s ? m : d,
                    _ = (0, r.useRef)(null);
                (0, r.useEffect)(function() {
                    return w(), window.addEventListener("scroll", w),
                        function() {
                            window.removeEventListener("scroll", w)
                        }
                }, [t]);
                var w = (0, r.useCallback)(function() {
                        requestAnimationFrame(function() {
                            _.current && (_.current.style.transform = "translateY(".concat(window.pageYOffset, "px)"))
                        })
                    }, []),
                    O = (0, r.useCallback)(function(e) {
                        n(e)
                    }, [n]);
                return (0, c.jsx)(v, {
                    isMobile: s,
                    style: i.container,
                    ref: _,
                    "data-testid": "".concat(b ? "".concat(b, "_") : "", "notification-container"),
                    children: (0, c.jsx)(r.Suspense, {
                        fallback: null,
                        children: t.map(function(e, t) {
                            var n = e.guid,
                                r = e.message,
                                s = e.status;
                            return (0, c.jsx)(g, {
                                culture: y,
                                status: s,
                                message: r,
                                onClose: function() {
                                    return O(n)
                                },
                                closeTime: o,
                                styles: i.notification,
                                testIdIndex: t,
                                parentId: b
                            }, n || t)
                        })
                    })
                })
            }
            y.defaultProps = {
                culture: "en",
                isMobile: !1,
                style: {},
                closeTime: 1.7,
                parentId: "",
                isSmall: !1
            }, y.propTypes = a;
            const b = (0, r.memo)(y)
        },
        2694(e, t, n) {
            "use strict";
            var r = n(6925);

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, o, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        5556(e, t, n) {
            e.exports = n(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, t, n) {
            "use strict";
            var r = n(98283),
                i = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function l(e, t, n) {
                var r, o = {},
                    l = null,
                    u = null;
                for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                return {
                    $$typeof: i,
                    type: e,
                    key: l,
                    ref: u,
                    props: o,
                    _owner: a.current
                }
            }
            t.Fragment = o, t.jsx = l, t.jsxs = l
        },
        74848(e, t, n) {
            "use strict";
            e.exports = n(21020)
        }
    }
]);