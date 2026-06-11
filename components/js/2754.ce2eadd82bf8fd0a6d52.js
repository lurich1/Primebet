"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [2754], {
        27749(e, n, t) {
            t.d(n, {
                DS: () => i,
                LI: () => c,
                bS: () => o,
                c_: () => r,
                lR: () => u,
                oN: () => s,
                rV: () => a
            });
            var r = "https://fg-cdn.faaggaass-54rg78cw.com/prd/root",
                o = "https://galaxsys-games.com/fg-launcher-service",
                a = "/gx-launcher-service",
                i = !1,
                c = "https://gsl-cdn.cdn-digi.com/prd",
                s = "/cdn.{domain}/fg-cdn/prd/root",
                u = "/cdn.{domain}/gsl-cdn/prd"
        },
        12754(e, n, t) {
            t.r(n), t.d(n, {
                GalaxsysFrontendApi: () => s,
                sendGalaxsysHome: () => u,
                sendGalaxsysLogin: () => l
            });
            var r = t(27749);

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function a(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function i(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? a(Object(t), !0).forEach(function(n) {
                        c(e, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return e
            }

            function c(e, n, t) {
                return (n = function(e) {
                    var n = function(e) {
                        if ("object" != o(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var t = n.call(e, "string");
                            if ("object" != o(t)) return t;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == o(n) ? n : n + ""
                }(n)) in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function s() {
                var e = {},
                    n = {};
                return window.addEventListener("message", function(t) {
                    var r;
                    null != t && null !== (r = t.data) && void 0 !== r && null !== (r = r.type) && void 0 !== r && r.includes("Galaxsys") && e[t.data.type] && (e[t.data.type](t.data), n[t.data.type] && n[t.data.type](t.data))
                }), [function(t, r) {
                    e[t] ? n[t] = r : e[t] = r
                }, function(e, n) {
                    window.parent !== window ? window.parent.postMessage(i(i({
                        type: e
                    }, n), {}, {
                        isGalaxsys: !0
                    }), "*") : r.DS || console.info("".concat(e, " can't work, you are not in parent frame"))
                }, function(t) {
                    n[t] = null, e[t] = null
                }]
            }

            function u() {
                window.parent !== window ? window.parent.postMessage({
                    type: "GalaxsysHome",
                    value: ""
                }, "*") : r.DS || console.error("GalaxsysHome can't work, you are not in RGS frame")
            }

            function l() {
                window.parent !== window ? window.parent.postMessage({
                    type: "GalaxsysLogin",
                    value: ""
                }, "*") : r.DS || console.error("GalaxsysLogin can't work, you are not in RGS frame")
            }
        }
    }
]);