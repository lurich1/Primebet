/*! For license information please see 5682.1e49d61e52d85c31e966.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1820, 4201, 4677, 5629, 5682, 6582, 7058, 8963, 9439], {
        25682(e, r, o) {
            "use strict";
            o.r(r), o.d(r, {
                default: () => g
            });
            var t = o(98283),
                n = o(38874),
                a = o(5556),
                s = o.n(a),
                i = {
                    logoImg: s().string,
                    gameKindName: s().string,
                    theme: s().string,
                    styles: s().shape({
                        logoContainer: s().object,
                        logo: s().object
                    })
                },
                l = o(74848),
                c = (0, t.memo)(n.default.div.withConfig({
                    componentId: "sc-1f0oqm5-0"
                })(["display:flex;align-items:center;justify-content:center;flex:0 0 6.875em;height:6.875em;padding:0;border-radius:1em;background:var(--logoContainerBg,var(--mainLayoutBg,rgba(var(--white),0.08)));border:1px solid;border-color:var(--logoContainerBorderColor,var(--mainLayoutBorderColor));margin-bottom:0.5em;", ";"], function(e) {
                    return "ornament" === e.theme.name && (0, n.css)(["border:0 none;flex:0 0 100%;background:var(--mainBackground);"])
                })),
                m = (0, n.default)("img").withConfig({
                    componentId: "sc-1f0oqm5-1"
                })(["max-width:100%;width:100%;height:100%;pointer-events:none;border-radius:1em;"]);

            function p(e) {
                var r = e.logoImg,
                    o = e.gameKindName,
                    t = e.styles,
                    a = e.theme;
                return (0, l.jsx)(n.ThemeProvider, {
                    theme: {
                        name: a
                    },
                    children: (0, l.jsx)(c, {
                        style: t.logoContainer,
                        children: (0, l.jsx)(m, {
                            style: t.logo,
                            src: r,
                            alt: o
                        })
                    })
                })
            }
            p.defaultProps = {
                logoImg: "",
                gameKindName: "",
                theme: "glass",
                styles: {
                    logoContainer: {},
                    logo: {}
                }
            }, p.propTypes = i;
            const g = (0, t.memo)(p)
        },
        2694(e, r, o) {
            "use strict";
            var t = o(6925);

            function n() {}

            function a() {}
            a.resetWarningCache = n, e.exports = function() {
                function e(e, r, o, n, a, s) {
                    if (s !== t) {
                        var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw i.name = "Invariant Violation", i
                    }
                }

                function r() {
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
                    resetWarningCache: n
                };
                return o.PropTypes = o, o
            }
        },
        5556(e, r, o) {
            e.exports = o(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, r, o) {
            "use strict";
            var t = o(98283),
                n = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, r, o) {
                var t, a = {},
                    c = null,
                    m = null;
                for (t in void 0 !== o && (c = "" + o), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (m = r.ref), r) s.call(r, t) && !l.hasOwnProperty(t) && (a[t] = r[t]);
                if (e && e.defaultProps)
                    for (t in r = e.defaultProps) void 0 === a[t] && (a[t] = r[t]);
                return {
                    $$typeof: n,
                    type: e,
                    key: c,
                    ref: m,
                    props: a,
                    _owner: i.current
                }
            }
            r.Fragment = a, r.jsx = c, r.jsxs = c
        },
        74848(e, r, o) {
            "use strict";
            e.exports = o(21020)
        }
    }
]);