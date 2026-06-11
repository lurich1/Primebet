/*! For license information please see 4271.6956df1bc5aeb7d0e21f.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1820, 4201, 4271, 4622, 4677, 5629, 6582, 7058, 8963, 9439], {
        64271(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: () => y
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                s = o(38874),
                a = o(84622),
                c = o(79555),
                l = o(74848),
                p = (0, c.getIsMobile)(),
                f = (0, n.memo)(s.default.div.withConfig({
                    componentId: "sc-lhhx9t-0"
                })(["position:", ";top:0;left:0;color:#fff;text-align:center;display:flex;align-items:center;justify-content:center;background:rgba(var(--black),0.7);min-height:15em;height:100%;width:100%;"], p ? "fixed" : "absolute")),
                u = (0, n.memo)(s.default.div.withConfig({
                    componentId: "sc-lhhx9t-1"
                })(["color:#fff;text-align:center;padding:1em;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:1em var(--mainFont);"])),
                d = (0, n.memo)(s.default.span.withConfig({
                    componentId: "sc-lhhx9t-2"
                })(["height:5.5em;width:5.5em;margin:0 auto 1em;display:block;cursor:pointer;"])),
                m = (0, n.memo)(s.default.p.withConfig({
                    componentId: "sc-lhhx9t-3"
                })(["margin-bottom:0.5em;font:0.875em var(--mainFontMedium);"]));

            function h(e) {
                var t = e.text,
                    o = e.styles;
                return (0, l.jsx)(f, {
                    style: o.container,
                    children: (0, l.jsxs)(u, {
                        style: o.content,
                        children: [(0, l.jsx)(d, {
                            style: o.icon,
                            children: (0, l.jsx)(a.default, {
                                color: "red"
                            })
                        }), (0, l.jsx)(m, {
                            style: o.text,
                            children: t
                        })]
                    })
                })
            }
            h.defaultProps = {
                text: "",
                styles: {
                    container: {},
                    content: {},
                    text: {},
                    icon: {},
                    iconColor: ""
                }
            }, h.propTypes = {
                text: i().string,
                styles: i().shape({
                    container: i().object,
                    content: i().object,
                    text: i().object,
                    icon: i().object,
                    iconColor: i().string
                })
            };
            const y = (0, n.memo)(h)
        },
        84622(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: () => c
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                s = o(74848);

            function a(e) {
                var t = e.color;
                return (0, s.jsx)("svg", {
                    fill: t,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 48 48",
                    children: (0, s.jsx)("path", {
                        d: "M36.232,29.3a13.461,13.461,0,0,0,.968-5A13.3,13.3,0,0,0,24,10.923a12.959,12.959,0,0,0-4.928.982l3.564,3.614A9.12,9.12,0,0,1,24,15.385a8.86,8.86,0,0,1,8.8,8.923,10.08,10.08,0,0,1-.11,1.405ZM24,6.462A17.817,17.817,0,0,1,39.51,32.651l3.234,3.279A22.323,22.323,0,0,0,24,2,21.854,21.854,0,0,0,12.538,5.279L15.75,8.536A17.491,17.491,0,0,1,24,6.462ZM4.794,3.115,2,5.948l4.62,4.685A22.485,22.485,0,0,0,12.978,43.6l2.2-3.859a17.955,17.955,0,0,1-5.412-25.9l3.146,3.212A13.47,13.47,0,0,0,17.4,35.885L19.6,32a8.868,8.868,0,0,1-3.432-11.689l3.476,3.525-.044.468A4.444,4.444,0,0,0,24,28.769l.462-.045.022.022L41.006,45.5,43.8,42.667,6.994,5.346Z"
                    })
                })
            }
            a.defaultProps = {
                color: "black"
            }, a.propTypes = {
                color: i().string
            };
            const c = (0, n.memo)(a)
        },
        2694(e, t, o) {
            "use strict";
            var n = o(6925);

            function r() {}

            function i() {}
            i.resetWarningCache = r, e.exports = function() {
                function e(e, t, o, r, i, s) {
                    if (s !== n) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var o = {
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
                    checkPropTypes: i,
                    resetWarningCache: r
                };
                return o.PropTypes = o, o
            }
        },
        5556(e, t, o) {
            e.exports = o(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, t, o) {
            "use strict";
            var n = o(98283),
                r = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function l(e, t, o) {
                var n, i = {},
                    l = null,
                    p = null;
                for (n in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (p = t.ref), t) s.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
                return {
                    $$typeof: r,
                    type: e,
                    key: l,
                    ref: p,
                    props: i,
                    _owner: a.current
                }
            }
            t.Fragment = i, t.jsx = l, t.jsxs = l
        },
        74848(e, t, o) {
            "use strict";
            e.exports = o(21020)
        }
    }
]);