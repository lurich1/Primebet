/*! For license information please see 1101.8c080a5650aa5550a43c.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1101, 1344, 1820, 4201, 4677, 5629, 6582, 7058, 8963, 9439], {
        61101(e, m, t) {
            "use strict";
            t.r(m), t.d(m, {
                default: () => d
            });
            var o = t(98283),
                r = t(5556),
                n = t.n(r),
                s = t(38874),
                a = t(79555),
                i = t(74848),
                p = (0, a.getIsMobile)(),
                c = (0, o.memo)(s.default.div.withConfig({
                    componentId: "sc-pzug36-0"
                })(["display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:", ";top:", ";left:0;pointer-events:none;"], p ? "calc(100% - 4.25em)" : "100%", p ? "auto" : 0)),
                l = (0, s.keyframes)(["0%,100%{box-shadow:0 -3em 0 0.2em,2em -2em 0 0em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0;}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 0.2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em;}25%{box-shadow:0 -3em 0 -0.5em,2em -2em 0 0,3em 0 0 0.2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em;}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0em 0 0,2em 2em 0 0.2em,0 3em 0 0em,-2em 2em 0 -1em,-3em 0em 0 -1em,-2em -2em 0 -1em;}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0em,0 3em 0 0.2em,-2em 2em 0 0,-3em 0em 0 -1em,-2em -2em 0 -1em;}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 0.2em,-3em 0 0 0,-2em -2em 0 -1em;}75%{box-shadow:0em -3em 0 -1em,2em -2em 0 -1em,3em 0em 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0em 0 0.2em,-2em -2em 0 0;}87.5%{box-shadow:0em -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0em 0 0,-2em -2em 0 0.2em;}"]),
                f = (0, o.memo)(s.default.span.withConfig({
                    componentId: "sc-pzug36-1"
                })(["color:rgb(var(--white));display:inline-block;font-size:0.35em;width:1em;height:1em;border-radius:50%;position:relative;text-indent:-9999em;animation:", " 1.3s infinite linear;transform:translateZ(0);"], l));

            function u(e) {
                var m = e.styles;
                return (0, i.jsx)(c, {
                    style: m.container,
                    children: (0, i.jsx)(f, {
                        style: m.loader
                    })
                })
            }
            u.defaultProps = {
                styles: {
                    container: {},
                    loader: {}
                }
            }, u.propTypes = {
                styles: n().shape({
                    container: n().object,
                    loader: n().object
                })
            };
            const d = (0, o.memo)(u)
        },
        2694(e, m, t) {
            "use strict";
            var o = t(6925);

            function r() {}

            function n() {}
            n.resetWarningCache = r, e.exports = function() {
                function e(e, m, t, r, n, s) {
                    if (s !== o) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function m() {
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
                    arrayOf: m,
                    element: e,
                    elementType: e,
                    instanceOf: m,
                    node: e,
                    objectOf: m,
                    oneOf: m,
                    oneOfType: m,
                    shape: m,
                    exact: m,
                    checkPropTypes: n,
                    resetWarningCache: r
                };
                return t.PropTypes = t, t
            }
        },
        5556(e, m, t) {
            e.exports = t(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, m, t) {
            "use strict";
            var o = t(98283),
                r = Symbol.for("react.element"),
                n = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                i = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function p(e, m, t) {
                var o, n = {},
                    p = null,
                    c = null;
                for (o in void 0 !== t && (p = "" + t), void 0 !== m.key && (p = "" + m.key), void 0 !== m.ref && (c = m.ref), m) s.call(m, o) && !i.hasOwnProperty(o) && (n[o] = m[o]);
                if (e && e.defaultProps)
                    for (o in m = e.defaultProps) void 0 === n[o] && (n[o] = m[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: p,
                    ref: c,
                    props: n,
                    _owner: a.current
                }
            }
            m.Fragment = n, m.jsx = p, m.jsxs = p
        },
        74848(e, m, t) {
            "use strict";
            e.exports = t(21020)
        }
    }
]);