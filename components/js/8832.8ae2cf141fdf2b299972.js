/*! For license information please see 8832.8ae2cf141fdf2b299972.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1783, 2754, 8693, 8832], {
        27749(e, t, r) {
            "use strict";
            r.d(t, {
                DS: () => i,
                LI: () => s,
                bS: () => o,
                c_: () => n,
                lR: () => u,
                oN: () => c,
                rV: () => a
            });
            var n = "https://fg-cdn.faaggaass-54rg78cw.com/prd/root",
                o = "https://galaxsys-games.com/fg-launcher-service",
                a = "/gx-launcher-service",
                i = !1,
                s = "https://gsl-cdn.cdn-digi.com/prd",
                c = "/cdn.{domain}/fg-cdn/prd/root",
                u = "/cdn.{domain}/gsl-cdn/prd"
        },
        83339(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => d
            });
            var n = r(5556),
                o = r.n(n),
                a = r(98283),
                i = r(38874),
                s = r(74848),
                c = (0, a.memo)(i.default.span.withConfig({
                    componentId: "sc-w0koce-0"
                })(["display:flex;align-items:center;justify-content:center;flex:1 0 3.25em;max-width:fit-content;color:rgb(var(--white));text-align:center;border-radius:0.25em;background:var(--resultItemBg);margin:0 0.125em;", ";&.low{color:var(--resultLow);}&.mid{color:var(--resultMid);}&.high{color:var(--resultHigh);}&.extraHigh{color:var(--resultExtraHigh);}"], function(e) {
                    return e.isMobile ? (0, i.css)(["flex:1 0 1.5em;padding:0.125em 0.25em;"]) : (0, i.css)(["flex:1 0 3.25em;padding:0.25em 0.5em;"])
                })),
                u = (0, a.memo)(i.default.span.withConfig({
                    componentId: "sc-w0koce-1"
                })(["", ";"], function(e) {
                    return e.isMobile ? (0, i.css)(["font:0.625em/ 1.2 var(--mainFontMedium);"]) : (0, i.css)(["font:0.875em/ 1.2 var(--mainFontMedium);"])
                }));

            function l(e) {
                var t, r, n = e.className,
                    o = e.styles,
                    a = e.key,
                    i = e.item,
                    l = e.isMobile;
                return (0, s.jsx)(c, {
                    className: n,
                    style: null === (t = o.resultRowContainer) || void 0 === t ? void 0 : t.resultItem,
                    isMobile: l,
                    children: (0, s.jsx)(u, {
                        style: null === (r = o.resultRowContainer) || void 0 === r ? void 0 : r.resultItemtxt,
                        isMobile: l,
                        children: i
                    })
                }, a)
            }
            l.propTypes = {
                className: o().object,
                styles: o().object,
                key: o().string,
                item: o().any,
                isMobile: o().bool
            }, l.defaultProps = {
                className: {},
                key: "",
                styles: {},
                item: "",
                isMobile: !1
            };
            const d = (0, a.memo)(l)
        },
        12754(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GalaxsysFrontendApi: () => c,
                sendGalaxsysHome: () => u,
                sendGalaxsysLogin: () => l
            });
            var n = r(27749);

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        s(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != o(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != o(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == o(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c() {
                var e = {},
                    t = {};
                return window.addEventListener("message", function(r) {
                    var n;
                    null != r && null !== (n = r.data) && void 0 !== n && null !== (n = n.type) && void 0 !== n && n.includes("Galaxsys") && e[r.data.type] && (e[r.data.type](r.data), t[r.data.type] && t[r.data.type](r.data))
                }), [function(r, n) {
                    e[r] ? t[r] = n : e[r] = n
                }, function(e, t) {
                    window.parent !== window ? window.parent.postMessage(i(i({
                        type: e
                    }, t), {}, {
                        isGalaxsys: !0
                    }), "*") : n.DS || console.info("".concat(e, " can't work, you are not in parent frame"))
                }, function(r) {
                    t[r] = null, e[r] = null
                }]
            }

            function u() {
                window.parent !== window ? window.parent.postMessage({
                    type: "GalaxsysHome",
                    value: ""
                }, "*") : n.DS || console.error("GalaxsysHome can't work, you are not in RGS frame")
            }

            function l() {
                window.parent !== window ? window.parent.postMessage({
                    type: "GalaxsysLogin",
                    value: ""
                }, "*") : n.DS || console.error("GalaxsysLogin can't work, you are not in RGS frame")
            }
        },
        79555(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                addRtlToStyles: () => addRtlToStyles,
                addToClipboard: () => addToClipboard,
                calculateFontSize: () => calculateFontSize,
                dateConverter: () => dateConverter,
                deepEqual: () => deepEqual,
                disabledSimilarGames: () => disabledSimilarGames,
                fakePlayerId: () => fakePlayerId,
                fetchMemoizationAssets: () => fetchMemoizationAssets,
                formatNumberByPrecision: () => formatNumberByPrecision,
                generateId: () => generateId,
                getAPIHeaders: () => getAPIHeaders,
                getCookie: () => getCookie,
                getDeviceInfo: () => getDeviceInfo,
                getFormattedDateTime: () => getFormattedDateTime,
                getFormattedDateTimeWithSeconds: () => getFormattedDateTimeWithSeconds,
                getFormattedTime: () => getFormattedTime,
                getIsAPIAvailable: () => getIsAPIAvailable,
                getIsMobile: () => getIsMobile,
                getIsMobileChrome: () => getIsMobileChrome,
                getIsPortraitOrientation: () => getIsPortraitOrientation,
                getIsTablet: () => getIsTablet,
                getNotificationById: () => getNotificationById,
                getObjValueByStringSelector: () => getObjValueByStringSelector,
                getParamsFromUrl: () => getParamsFromUrl,
                getTypedParamsFromURL: () => getTypedParamsFromURL,
                isFakeOrEmptyToken: () => isFakeOrEmptyToken,
                isIOSChrome: () => isIOSChrome,
                isInViewport: () => isInViewport,
                isIpad: () => isIpad,
                isValidInputForNumberInput: () => isValidInputForNumberInput,
                mapWinnersForUI: () => mapWinnersForUI,
                multiplyWithPrecision: () => multiplyWithPrecision,
                numberToDown: () => numberToDown,
                numberToSpacedString: () => numberToSpacedString,
                numberToSpacedStringBetValue: () => numberToSpacedStringBetValue,
                numberToSpacedStringLocal: () => numberToSpacedStringLocal,
                preLoadDataWithLinks: () => preLoadDataWithLinks,
                protect: () => protect,
                redirectToHomeGalaxsys: () => redirectToHomeGalaxsys,
                redirectToLobbyGalaxsys: () => redirectToLobbyGalaxsys,
                redirectToLoginPage: () => redirectToLoginPage,
                redirectToRealGameGalaxsys: () => redirectToRealGameGalaxsys,
                redirectToSimilarGame: () => redirectToSimilarGame,
                refreshPlayerToken: () => refreshPlayerToken,
                replaceIsMobileQueryAndAssignLocation: () => replaceIsMobileQueryAndAssignLocation,
                resolveImageUrl: () => resolveImageUrl,
                rtlLanguages: () => rtlLanguages,
                sendLoginToParentPage: () => sendLoginToParentPage,
                sendPixelEvent: () => sendPixelEvent,
                setAttributeDataItemsInRoot: () => setAttributeDataItemsInRoot,
                setCSSOMVariables: () => setCSSOMVariables,
                setHubName: () => setHubName,
                setNumberToKMB: () => setNumberToKMB,
                setResultRowColors: () => setResultRowColors,
                subtractWithPrecision: () => subtractWithPrecision,
                sumWithPrecision: () => sumWithPrecision,
                toNumberString: () => toNumberString,
                validInputWithEveryCase: () => validInputWithEveryCase
            });
            var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95093),
                moment__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),
                mobile_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41179),
                mobile_detect__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_1__),
                axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71083),
                _services_EngineSharedDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8693),
                _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12754),
                _components_Shared_Global_ResultItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83339),
                _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41783),
                _services_HttpRequestServiceInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25584),
                _env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27749),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74848);

            function _typeof(e) {
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, _typeof(e)
            }

            function _regenerator() {
                var e, t, r = "function" == typeof Symbol ? Symbol : {},
                    n = r.iterator || "@@iterator",
                    o = r.toStringTag || "@@toStringTag";

                function a(r, n, o, a) {
                    var c = n && n.prototype instanceof s ? n : s,
                        u = Object.create(c.prototype);
                    return _regeneratorDefine2(u, "_invoke", function(r, n, o) {
                        var a, s, c, u = 0,
                            l = o || [],
                            d = !1,
                            f = {
                                p: 0,
                                n: 0,
                                v: e,
                                a: m,
                                f: m.bind(e, 4),
                                d: function(t, r) {
                                    return a = t, s = 0, c = e, f.n = r, i
                                }
                            };

                        function m(r, n) {
                            for (s = r, c = n, t = 0; !d && u && !o && t < l.length; t++) {
                                var o, a = l[t],
                                    m = f.p,
                                    g = a[2];
                                r > 3 ? (o = g === n) && (c = a[(s = a[4]) ? 5 : (s = 3, 3)], a[4] = a[5] = e) : a[0] <= m && ((o = r < 2 && m < a[1]) ? (s = 0, f.v = n, f.n = a[1]) : m < g && (o = r < 3 || a[0] > n || n > g) && (a[4] = r, a[5] = n, f.n = g, s = 0))
                            }
                            if (o || r > 1) return i;
                            throw d = !0, n
                        }
                        return function(o, l, g) {
                            if (u > 1) throw TypeError("Generator is already running");
                            for (d && 1 === l && m(l, g), s = l, c = g;
                                (t = s < 2 ? e : c) || !d;) {
                                a || (s ? s < 3 ? (s > 1 && (f.n = -1), m(s, c)) : f.n = c : f.v = c);
                                try {
                                    if (u = 2, a) {
                                        if (s || (o = "next"), t = a[o]) {
                                            if (!(t = t.call(a, c))) throw TypeError("iterator result is not an object");
                                            if (!t.done) return t;
                                            c = t.value, s < 2 && (s = 0)
                                        } else 1 === s && (t = a.return) && t.call(a), s < 2 && (c = TypeError("The iterator does not provide a '" + o + "' method"), s = 1);
                                        a = e
                                    } else if ((t = (d = f.n < 0) ? c : r.call(n, f)) !== i) break
                                } catch (t) {
                                    a = e, s = 1, c = t
                                } finally {
                                    u = 1
                                }
                            }
                            return {
                                value: t,
                                done: d
                            }
                        }
                    }(r, o, a), !0), u
                }
                var i = {};

                function s() {}

                function c() {}

                function u() {}
                t = Object.getPrototypeOf;
                var l = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
                        return this
                    }), t),
                    d = u.prototype = s.prototype = Object.create(l);

                function f(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(d), e
                }
                return c.prototype = u, _regeneratorDefine2(d, "constructor", u), _regeneratorDefine2(u, "constructor", c), c.displayName = "GeneratorFunction", _regeneratorDefine2(u, o, "GeneratorFunction"), _regeneratorDefine2(d), _regeneratorDefine2(d, o, "Generator"), _regeneratorDefine2(d, n, function() {
                    return this
                }), _regeneratorDefine2(d, "toString", function() {
                    return "[object Generator]"
                }), (_regenerator = function() {
                    return {
                        w: a,
                        m: f
                    }
                })()
            }

            function _regeneratorDefine2(e, t, r, n) {
                var o = Object.defineProperty;
                try {
                    o({}, "", {})
                } catch (e) {
                    o = 0
                }
                _regeneratorDefine2 = function(e, t, r, n) {
                    if (t) o ? o(e, t, {
                        value: r,
                        enumerable: !n,
                        configurable: !n,
                        writable: !n
                    }) : e[t] = r;
                    else {
                        var a = function(t, r) {
                            _regeneratorDefine2(e, t, function(e) {
                                return this._invoke(t, r, e)
                            })
                        };
                        a("next", 0), a("throw", 1), a("return", 2)
                    }
                }, _regeneratorDefine2(e, t, r, n)
            }

            function asyncGeneratorStep(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function _asyncToGenerator(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            asyncGeneratorStep(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            asyncGeneratorStep(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }

            function _slicedToArray(e, t) {
                return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
            }

            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function _unsupportedIterableToArray(e, t) {
                if (e) {
                    if ("string" == typeof e) return _arrayLikeToArray(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
                }
            }

            function _arrayLikeToArray(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function _iterableToArrayLimit(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a, i, s = [],
                        c = !0,
                        u = !1;
                    try {
                        if (a = (r = r.call(e)).next, 0 === t) {
                            if (Object(r) !== r) return;
                            c = !1
                        } else
                            for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                    } catch (e) {
                        u = !0, o = e
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                        } finally {
                            if (u) throw o
                        }
                    }
                    return s
                }
            }

            function _arrayWithHoles(e) {
                if (Array.isArray(e)) return e
            }

            function ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                        _defineProperty(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function _defineProperty(e, t, r) {
                return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function _toPropertyKey(e) {
                var t = _toPrimitive(e, "string");
                return "symbol" == _typeof(t) ? t : t + ""
            }

            function _toPrimitive(e, t) {
                if ("object" != _typeof(e) || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" != _typeof(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            var BASE_FONT_SIZE = 16,
                rtlLanguages = ["fa", "ar", "he", "ku"];
            String.prototype.replaceAtIndex = function(e, t) {
                return this.substr(0, e) + t + this.substr(e + t.length)
            };
            var windowObj = "undefined" != typeof window ? window : {};

            function getRequest(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                axios__WEBPACK_IMPORTED_MODULE_2__.A.get(e + t, {
                    params: _objectSpread({}, r)
                }).then(function(e) {
                    n(e)
                }).catch(function(e) {
                    o(e)
                })
            }

            function formatNumberByPrecision(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    r = e;
                if ("string" == typeof e) {
                    if ("." === e[e.length - 1]) return e;
                    r = e.replaceAll(" ", "")
                }
                return r = Number(r), Number.isNaN(r) ? e : (r = formatNumber(r, t), Number(r).toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: t
                }).replaceAll(",", " "))
            }

            function numberToSpacedStringLocal(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = _services_EngineSharedDataService__WEBPACK_IMPORTED_MODULE_3__.default.get("precision"),
                    o = "number" == typeof t ? t : n || 2;
                return "" === e ? "" : parseFloat("".concat(e).replace(/,/g, "")).toLocaleString("en-US", {
                    minimumFractionDigits: r,
                    maximumFractionDigits: o
                }).replaceAll(",", " ")
            }

            function getParamsFromUrl() {
                var e, t = (null === (e = windowObj.location) || void 0 === e ? void 0 : e.search) || "",
                    r = {};
                return t.replace(/([^?=&]+)(=([^&]*))?/g, function(e, t, n, o) {
                    r[t] = o
                }), r
            }

            function getTypedParamsFromURL() {
                var e, t = (null === (e = windowObj.location) || void 0 === e ? void 0 : e.search) || "",
                    r = {};
                return t.replace(/([^?=&]+)(=([^&]*))?/g, function(e, t, n, o) {
                    var a, i;
                    "true" === (null === (a = o.toLowerCase) || void 0 === a ? void 0 : a.call(o)) || "false" === (null === (i = o.toLowerCase) || void 0 === i ? void 0 : i.call(o)) ? r[t] = "true" === o: r[t] = o
                }), r
            }

            function fakePlayerId(e) {
                return e ? e.replaceAtIndex(2, "***") : ""
            }

            function isFakeOrEmptyToken() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return 34 === (null == e ? void 0 : e.length) && (null == e ? void 0 : e.endsWith("fk")) || "" === e
            }

            function mapWinnersForUI(e, t, r) {
                var n = function(e) {
                        return e.map(function(e) {
                            return {
                                playerId: fakePlayerId(e.playerNickName),
                                x: "x".concat(e.coefficent),
                                win: (e.winCoin * t).toFixed(r)
                            }
                        })
                    },
                    o = e.dailyMaxWinners,
                    a = e.monthlyMaxWinners,
                    i = e.currentWinners;
                return {
                    daily: n(o),
                    monthly: n(a),
                    current: n(i)
                }
            }

            function getFormattedDateTime(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    if (!e) return;
                    var n = r.withoutTime,
                        o = r.format,
                        a = -1 !== (t ? new Date(e).toUTCString() : new Date(e).toISOString()).indexOf("Z"),
                        i = new Date(e + (a ? "" : "Z")).toLocaleDateString("ru-RU", _objectSpread({
                            year: "numeric",
                            month: "numeric",
                            day: "numeric"
                        }, n ? {} : {
                            hour: "2-digit",
                            minute: "2-digit"
                        })).replace(",", "");
                    return o ? moment__WEBPACK_IMPORTED_MODULE_0___default()(i, o).format(o) : i
                } catch (e) {
                    console.log(e)
                }
            }

            function getFormattedDateTimeWithSeconds(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                try {
                    if (!e) return;
                    var r = -1 !== (t ? new Date(e).toUTCString() : new Date(e).toISOString()).indexOf("Z");
                    return new Date(e + (r ? "" : "Z")).toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                    }).replace(",", "")
                } catch (e) {
                    console.log(e)
                }
            }

            function getFormattedTime(e, t) {
                if (e) {
                    var r = -1 !== (t ? new Date(e).toUTCString() : new Date(e).toISOString()).indexOf("Z");
                    return new Date(e + (t && !r ? "Z" : "")).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                }
            }

            function getIsMobile() {
                var e = getParamsFromUrl().isMobile;
                return "true" === (null == e ? void 0 : e.toLowerCase())
            }
            var redirectToRealGameGalaxsys = function(e) {
                    var t = e.playerId,
                        r = e.partnerId,
                        n = e.gameKindName,
                        o = (e.gameTypeName, e.referer),
                        a = e.hostName,
                        i = getIsMobile();
                    if (0 !== +t) window.location.href = window.location.href.replace("isDemo=true", "isDemo=false");
                    else if (i) {
                        var s = a.split(".");
                        redirectToLoginPage([s[1], s[2]].join("."), +r, n, o)
                    } else(0, _api__WEBPACK_IMPORTED_MODULE_4__.sendGalaxsysLogin)()
                },
                redirectToLobbyGalaxsys = function(e) {
                    var t = e.partnerId,
                        r = e.token,
                        n = e.culture,
                        o = e.gameTypeName,
                        a = e.referer,
                        i = e.mode,
                        s = e.backUrl,
                        c = e.isMobile;
                    window.location.href = "".concat(window.location.origin, "/lobby/?PartnerId=").concat(t, "&token=").concat(r, "&culture=").concat(n, "&gameKind=").concat(o, "&referer=").concat(a, "&mode=").concat(i, "&backUrl=").concat(s, "&isMobile=").concat(c)
                },
                redirectToHomeGalaxsys = function() {
                    (0, _api__WEBPACK_IMPORTED_MODULE_4__.sendGalaxsysHome)()
                };

            function redirectToLoginPage() {
                (0, _api__WEBPACK_IMPORTED_MODULE_4__.sendGalaxsysLogin)()
            }

            function sendLoginToParentPage() {
                window.parent.postMessage("GalaxsysLogin", "*")
            }

            function validInputWithEveryCase(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12,
                    o = e.target,
                    a = (r = "", windowObj.getSelection ? r = windowObj.getSelection() : document.getSelection ? r = document.getSelection() : document.selection && (r = document.selection.createRange().text), r).toString();
                if (8 !== e.keyCode && 46 !== e.keyCode)
                    if (110 !== e.keyCode && 190 !== e.keyCode || "" !== o.value) {
                        if ("" !== a && (e.shiftKey || e.keyCode >= 48 || e.keyCode <= 57) && (e.keyCode >= 96 || e.keyCode <= 105)) {
                            var i = o.value,
                                s = a.length,
                                c = o.value.indexOf(a),
                                u = o.value.substr(0, c),
                                l = o.value.substr(c + s, i.length);
                            return (110 === e.keyCode || 190 === e.keyCode) && o.value === a || (48 === e.keyCode || e.keyCode, 0) || (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode), u + l
                        }
                        if (8 === e.keyCode || 46 === e.keyCode || 110 === e.keyCode || 190 === e.keyCode || e.keyCode >= 37 && e.keyCode <= 40 || !(e.shiftKey || e.keyCode < 48 || e.keyCode > 57) || !(e.keyCode < 96 || e.keyCode > 105)) {
                            if ("0" === o.value && 8 !== e.keyCode && 46 !== e.keyCode && 110 !== e.keyCode && 190 !== e.keyCode && !(e.keyCode >= 37 && e.keyCode <= 40)) return e.preventDefault(), e.key;
                            if (48 === e.keyCode || e.keyCode, 110 === e.keyCode || 190 === e.keyCode) {
                                if (o.value.split(".").length > 1 || !t) return void e.preventDefault()
                            } else if (-1 !== o.value.indexOf(".") && o.value.indexOf(".") < o.value.length - t && (!(e.shiftKey || e.keyCode < 48 || e.keyCode > 57) || !(e.keyCode < 96 || e.keyCode > 105))) return void e.preventDefault();
                            if (!(46 === e.keyCode || 8 === e.keyCode || 27 === e.keyCode || 9 === e.keyCode || 13 === e.keyCode || 65 === e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || e.keyCode >= 35 && e.keyCode <= 40))
                                if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && 190 !== e.keyCode && 110 !== e.keyCode) e.preventDefault();
                                else {
                                    var d = o.value.replaceAll(" ", "").length;
                                    d !== n && (d !== n - 1 || 190 !== e.keyCode && 110 !== e.keyCode) || e.preventDefault()
                                }
                        } else e.preventDefault()
                    } else e.preventDefault()
            }

            function isValidInputForNumberInput(e) {
                return e >= 48 && e <= 57 || e >= 96 && e <= 107 || 110 === e || 190 === e || 8 === e || 46 === e || e >= 37 && e <= 40
            }

            function toNumberString() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().split(" ").join("")
            }

            function numberToSpacedString(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    r = e;
                return "" === r ? "" : "string" == typeof e && -1 !== e.indexOf(".") || "number" == typeof e && e % 1 != 0 ? toNumberString(e) : (Number.isNaN(Number(e)) && (r = toNumberString(e)), parseFloat("".concat(r).replace(/,/g, "")).toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: t
                }).replaceAll(",", " "))
            }

            function numberToSpacedStringBetValue(e) {
                var t = e.number,
                    r = e.maxPrecision,
                    n = void 0 === r ? 2 : r,
                    o = getIsMobile(),
                    a = function(e) {
                        return parseFloat("".concat(e).replace(/,/g, "")).toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: n
                        }).replaceAll(",", " ")
                    },
                    i = t;
                if ("" === i) return "";
                if ("string" == typeof t && -1 !== t.indexOf(".") || "number" == typeof t && t % 1 != 0) {
                    if (o || "number" == typeof t) {
                        var s = _slicedToArray(t.toString().split("."), 2),
                            c = s[0],
                            u = s[1];
                        return "".concat(a(c), ".").concat(u)
                    }
                    return t
                }
                return Number.isNaN(Number(t)) && (i = toNumberString(t)), a(i)
            }
            var getIsTablet = function() {
                var e = windowObj.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                return navigator.userAgent.match(/(iPad)/) || 768 === e && "MacIntel" === navigator.platform || 1024 === e && "MacIntel" === navigator.platform || 834 === e && "MacIntel" === navigator.platform
            };

            function isIpad() {
                var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                return !!(navigator.userAgent.match(/(iPad)/) || 768 === e && "MacIntel" === navigator.platform || 1024 === e && "MacIntel" === navigator.platform || 834 === e && "MacIntel" === navigator.platform)
            }
            var setNumberToKMB = function(e) {
                var t = 0;
                if (Number.isNaN(+e)) return -1;
                var r = (t = (e = Math.round(100 * e) / 100) >= 1e9 ? "".concat(e / 1e9, "B") : e >= 1e6 ? "".concat(e / 1e6, "M") : e >= 1e3 ? "".concat(e / 1e3, "K") : e).toString(),
                    n = r.split(".");
                if (-1 !== r.indexOf(".") && n[1].length > 3) {
                    var o = r[r.length - 1];
                    t = "".concat(n[0] + o, "+")
                }
                return t
            };

            function calculateFontSize(e) {
                var t = e.width,
                    r = e.baseWidth,
                    n = e.baseFontSize;
                return t / r * (void 0 === n ? BASE_FONT_SIZE : n)
            }
            var RESOLUTIONS_FOR_DEVICES_WITH_HOME_INDICATOR = [2436, 2688, 1792];

            function getDeviceInfo() {
                var e = new(mobile_detect__WEBPACK_IMPORTED_MODULE_1___default())(window.navigator.userAgent),
                    t = e.os(),
                    r = "iOS" === t;
                return {
                    isMobile: Boolean(e.mobile()),
                    isAndroid: "AndroidOS" === t,
                    isIOS: r,
                    isIOSWithHomeIndicator: r && RESOLUTIONS_FOR_DEVICES_WITH_HOME_INDICATOR.includes(window.screen.height * window.devicePixelRatio)
                }
            }
            var setHubName = function(e) {
                    return "".concat(e.toLowerCase(), "lobby")
                },
                refreshPlayerToken = function(e, t, r) {
                    getRequest(e, "/api/lobby/refreshPlayerToken", {
                        Token: t
                    }, function(e) {
                        e.data ? (console.log("RefreshToken Failed"), r(e.data)) : console.log("RefreshToken Succeeded!!!")
                    })
                };

            function generateId() {
                return "_".concat(Math.random().toString(36).substr(2, 9))
            }
            var addRtlToStyles = function(e, t) {
                return _objectSpread(_objectSpread({}, e), {}, {
                    direction: rtlLanguages.includes(t) ? "rtl" : "ltr"
                })
            };

            function numberToDown(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)
            }

            function formatNumber(e, t) {
                var r = Math.pow(10, t);
                return Math.floor((e * r).toFixed(t)) / r
            }

            function multiplyWithPrecision(e, t) {
                return formatNumber(e * t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2)
            }

            function subtractWithPrecision(e, t) {
                return formatNumber(e - t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2)
            }

            function sumWithPrecision(e, t) {
                return formatNumber(+e + +t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2)
            }

            function disabledSimilarGames(e) {
                return [82, 79].includes(e)
            }
            var addToClipboard = function(e) {
                var t = document.createElement("textarea");
                t.value = e, t.style.position = "fixed", t.style.left = "-999999px", t.style.top = "-999999px", document.body.appendChild(t), t.focus(), t.select(), document.execCommand("copy"), t.remove()
            };

            function getNotificationById(e, t, r) {
                var n = {};
                switch (t) {
                    case 0:
                        n.message = "".concat(e.strNotifBetPlaced), n.status = "success";
                        break;
                    case 1:
                        n.message = "".concat(e.strNotifMaxCountIs, " ").concat(r), n.status = "error";
                        break;
                    case 2:
                        n.message = "".concat(e.strNotifMinBetIs, " ").concat(r), n.status = "error";
                        break;
                    case 3:
                        n.message = "".concat(e.strNotifInvalidStake || e.strNotifTransactionError || "Transaction Error", " Error: ").concat(t), n.status = "error";
                        break;
                    case 4:
                        n.message = "".concat(e.strNotifNotEnoughFunds), n.status = "error";
                        break;
                    case 5:
                        n.message = "".concat(e.strNotifTransactionError || "Transaction Error"), n.status = "error";
                        break;
                    case 6:
                        n.message = "".concat(e.strNotifUnauthorisedPlayer || e.strSessionExpired), n.status = "error";
                        break;
                    case 7:
                        n.message = "".concat(e.strNotifInvalidBetTime), n.status = "error";
                        break;
                    case 9:
                        n.message = "".concat(e.strNotifInvalidBetCount || e.strNotifTransactionError || "Transaction Error"), n.status = "error";
                        break;
                    case 10:
                        n.message = "".concat(e.strNotifInvalidGameId || e.strNotifPlaceBetForTheNextRound), n.status = "error";
                        break;
                    case 11:
                        n.message = r ? "".concat(e.strNotifAutoCashout).replace("1.01", r) : "".concat(e.strNotifAutoCashout), n.status = "error";
                        break;
                    case 12:
                        n.message = "".concat(e.strNotifMaxBetIs, " ").concat(r), n.status = "error";
                        break;
                    case 14:
                        n.message = "".concat(e.strNotifPleaseSelectCombination), n.status = "error";
                        break;
                    case 15:
                        n.message = "".concat(e.strNotifInvalidFreebet, " Error: ").concat(t), n.status = "error";
                        break;
                    case 17:
                        n.message = "".concat(e.strInccuficiantFunds), n.status = "error";
                        break;
                    case 18:
                        n.message = "".concat(e.strSessionExpired), n.status = "error";
                        break;
                    case 19:
                        n.message = "".concat(e.strSpendingBudgetExceeded || "Spending budget Exceeded"), n.status = "error";
                        break;
                    case 21:
                        n.message = "".concat(e.strNotifAccountBlocked || "Server error. Please contact support"), n.status = "error";
                        break;
                    case 22:
                        n.message = "".concat(e.strNotifBetRequestDeclined || "Spending budget Exceeded"), n.status = "error";
                        break;
                    case 26:
                        n.message = "".concat(e.strNotifGameNotFound || "Something went wrong."), n.status = "error";
                        break;
                    case 27:
                        n.message = "".concat(e.strMaxStarsCount || "Max stars count"), n.status = "error";
                        break;
                    case 28:
                        n.message = "".concat(e.strNotifDamagedGame || "Damaged game"), n.status = "error";
                        break;
                    case 29:
                        n.message = "".concat(e.strNotifIncorrectVersion || "Incorrect Version"), n.status = "error";
                        break;
                    case 30:
                        n.message = "".concat(e.strNotifInvalidToken || "Invalid Token"), n.status = "error";
                        break;
                    case 31:
                        n.message = "".concat(e.strNotifInvalidTickets || "Invalid Tickets"), n.status = "error";
                        break;
                    case 32:
                        n.message = "".concat(e.strNotifInvalidTransaction || "Invalid Transaction"), n.status = "error";
                        break;
                    case 33:
                        n.message = "".concat(e.strNotifInvalidActionTime || "Invalid Action Time"), n.status = "error";
                        break;
                    case 34:
                        n.message = "".concat(e.strNotifInvalidPlayerInfo || "Invalid Player Info"), n.status = "error";
                        break;
                    case 35:
                        n.message = "".concat(e.strNotifInvalidStakeId || "Invalid Stake Id"), n.status = "error";
                        break;
                    case 36:
                        n.message = "".concat(e.strNotifInvalidCycleId || "Invalid Cycle Id"), n.status = "error";
                        break;
                    case 37:
                        n.message = "".concat(e.strNotifInvalidPendingGame || "Invalid Pending Game"), n.status = "error";
                        break;
                    case 38:
                        n.message = "".concat(e.strNotifInvalidConfiguration || "Invalid Configuration"), n.status = "error";
                        break;
                    case 39:
                        n.message = "".concat(e.strNotifInvalidBonus || "Invalid Bonus"), n.status = "error";
                        break;
                    case 40:
                        n.message = "".concat(e.strNotifInvalidGameMode || "Invalid Game Mode"), n.status = "error";
                        break;
                    case 41:
                        n.message = "".concat(e.strNotifInvalidPartnerConfiguration || "Invalid Partner Configuration"), n.status = "error";
                        break;
                    case 42:
                        n.message = "".concat(e.strNotifInvalidLimitaions || "Invalid Limitaions"), n.status = "error";
                        break;
                    case 43:
                        n.message = "".concat(e.strPleaseSelectCorrectCombination || "Please select the correct combination"), n.status = "error";
                        break;
                    case 48:
                        n.message = "".concat(e.strBetBlockNotif || "Game cannot be continued due to a pending transaction. Please, reload the page."), n.status = "error";
                        break;
                    case 100:
                        n.message = e.strNotifCancelSucceed, n.status = "success";
                        break;
                    case 105:
                        n.message = e.strNotifKeyCopied, n.status = "success";
                        break;
                    case 106:
                        n.message = e.strNotifSaltCopied, n.status = "success";
                        break;
                    case 107:
                        n.message = e.strNotifHashCopied, n.status = "success";
                        break;
                    case 108:
                        n.message = "".concat(e.strNotifAutoCashout), n.status = "error";
                        break;
                    case 109:
                        n.message = e.strNotifKeyPasted, n.status = "success";
                        break;
                    case 110:
                        n.message = e.strNotifSaltPasted, n.status = "success";
                        break;
                    case 111:
                        n.message = e.strNotifHashPasted, n.status = "success";
                        break;
                    case 112:
                        n.message = e.strRepeatHistory, n.status = "success";
                        break;
                    case 113:
                        n.message = "".concat(e.strPlaceYourChips), n.status = "error";
                        break;
                    case 114:
                        n.message = e.strAccountSaved || "_Account settings changed", n.status = "success";
                        break;
                    case 115:
                        n.message = "".concat(e.strAutoBetLossLimit || "Autobet is stopped (loss limit is exceeded)"), n.status = "error";
                        break;
                    case 116:
                        n.message = (null == e ? void 0 : e.strRulesChanged) || "Game rules changed! Check them out!", n.status = "info";
                        break;
                    case 998:
                        n.message = "".concat(e.strNotifMaxWinLimit), n.status = "error";
                        break;
                    default:
                        n.message = "".concat(e.strNotifWentWrong || "Something went wrong.", " ").concat(t ? "Error: ".concat(t) : ""), n.status = "error"
                }
                return n
            }

            function isIOSChrome() {
                return /CriOS/.test(navigator.userAgent)
            }
            var dateConverter = function(e, t) {
                    return moment__WEBPACK_IMPORTED_MODULE_0___default().utc(e).local().format(t)
                },
                getIsMobileChrome = function() {
                    return getIsMobile() && (/CriOS/.test(navigator.userAgent) || /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor))
                },
                fetchMemoizationAssets = (assets = {}, progressLoads = {}, function(e) {
                    var t = e.urls,
                        r = e.assetKey || "default";
                    if (assets[r]) return assets[r];
                    if (progressLoads[r]) return progressLoads[r];
                    var n = Promise.all(null == t ? void 0 : t.map(function(e) {
                        return fetch(e).catch(function(e) {
                            throw new Error(e)
                        })
                    })).then(function() {
                        var e = _asyncToGenerator(_regenerator().m(function e(t) {
                            var n;
                            return _regenerator().w(function(e) {
                                for (;;) switch (e.n) {
                                    case 0:
                                        return e.n = 1, Promise.all(t.map(function(e) {
                                            return e.blob()
                                        }));
                                    case 1:
                                        return n = e.v, assets[r] = n.map(function(e) {
                                            return e && URL.createObjectURL(e)
                                        }), delete progressLoads[r], e.a(2, assets[r])
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()).catch(function(e) {
                        return [e]
                    });
                    return progressLoads[r] = n, n
                }),
                assets, progressLoads;

            function deepEqual(e, t) {
                if (e === t) return !0;
                if ("object" !== _typeof(e) || "object" !== _typeof(t) || null === e || null === t) return !1;
                var r = Object.keys(e),
                    n = Object.keys(t);
                return r.length === n.length && r.every(function(r) {
                    return deepEqual(e[r], t[r])
                })
            }

            function isInViewport(e, t) {
                if (e) {
                    var r = e.getBoundingClientRect();
                    if (t) {
                        var n = t.getBoundingClientRect();
                        return r.top >= n.top && r.bottom <= n.bottom
                    }
                    return r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth)
                }
            }

            function getObjValueByStringSelector(e, t) {
                if (t.includes(".")) return t.split(".").reduce(function(e, t) {
                    return e ? e[t] : void 0
                }, e)
            }
            var setResultRowColors = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 2 ? arguments[2] : void 0,
                        r = getTypedParamsFromURL().isMobile,
                        n = e.filter(function(e) {
                            return e.coefficient && !Number.isNaN(e.coefficient)
                        }).map(function(e) {
                            var n = e.coefficient,
                                o = "extraHigh";
                            return n <= 2 ? o = "low" : n <= 5 ? o = "mid" : n <= 10 && (o = "high"), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Shared_Global_ResultItem__WEBPACK_IMPORTED_MODULE_5__.default, {
                                className: o,
                                item: "".concat(Number(e.coefficient).toFixed(2), "x"),
                                isMobile: r,
                                styles: t
                            }, e.gameId)
                        });
                    return r ? n.slice(0, 30) : n
                },
                preLoadDataWithLinks = function(e) {
                    var t = e.paths,
                        r = void 0 === t ? [] : t,
                        n = e.dataType,
                        o = void 0 === n ? "image" : n,
                        a = e.relType,
                        i = void 0 === a ? "preload" : a,
                        s = e.options,
                        c = void 0 === s ? {} : s,
                        u = 0,
                        l = [];
                    return new Promise(function(e) {
                        r.forEach(function(t) {
                            var n = document.createElement("link");
                            n.rel = i, n.as = o, n.href = t, Object.entries(c).forEach(function(e) {
                                var t = _slicedToArray(e, 2),
                                    r = t[0],
                                    o = t[1];
                                n[r] = o
                            }), n.onload = function() {
                                ++u === r.length && e({
                                    unloadedPaths: l
                                })
                            }, n.onerror = function() {
                                ++u, l.push(t), u === r.length && e({
                                    unloadedPaths: l
                                })
                            }, document.head.appendChild(n)
                        })
                    })
                },
                getCookie = function(e) {
                    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                    return t ? decodeURIComponent(t[1]) : void 0
                },
                sendPixelEvent = function sendPixelEvent() {
                    var _ref0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        PartnerPixelId = _ref0.PartnerPixelId,
                        event = _ref0.event,
                        _getTypedParamsFromUR2 = getTypedParamsFromURL(),
                        partnerPlayerId = _getTypedParamsFromUR2.partnerPlayerId;
                    if (partnerPlayerId && PartnerPixelId) {
                        var now = (new Date).getTime(),
                            storedPixelTime = _storage__WEBPACK_IMPORTED_MODULE_6__.default.getItem("pixelTimeStamp"),
                            setupPixelTimeStamp = function() {
                                _storage__WEBPACK_IMPORTED_MODULE_6__.default.setItem("pixelTimeStamp", now), console.log("Pixel stamp stored")
                            };
                        if (storedPixelTime) {
                            var timeDifference = now - storedPixelTime,
                                hoursDifference = timeDifference / 36e5;
                            if (!(hoursDifference >= 24)) return void console.log("Pixel stamp not past");
                            setupPixelTimeStamp()
                        } else setupPixelTimeStamp();
                        fetch("https://pixel-us.follow-new-insights.com/pixel/js?auth=".concat(PartnerPixelId, "&event=").concat(event || "other", "&uid=").concat(partnerPlayerId)).then(function(e) {
                            return e.text()
                        }).then(function(res) {
                            eval(res)
                        })
                    }
                },
                getIsPortraitOrientation = function() {
                    return window.innerHeight > window.innerWidth
                },
                setAttributeDataItemsInRoot = {
                    add: function(e) {
                        var t = document.getElementById("root");
                        t && (t.dataset.items = e)
                    },
                    remove: function() {
                        var e = document.getElementById("root");
                        e && delete e.dataset.items
                    }
                };

            function resolveImageUrl(e) {
                return _resolveImageUrl.apply(this, arguments)
            }

            function _resolveImageUrl() {
                return _resolveImageUrl = _asyncToGenerator(_regenerator().m(function e(t) {
                    var r, n, o, a, i, s, c;
                    return _regenerator().w(function(e) {
                        for (;;) switch (e.n) {
                            case 0:
                                if (r = t.defaultUrl, n = t.keyForChange, o = void 0 === n ? "/default" : n, a = t.skinningName, i = void 0 === a ? "" : a, s = function() {
                                        var e = _asyncToGenerator(_regenerator().m(function e(t) {
                                            var r;
                                            return _regenerator().w(function(e) {
                                                for (;;) switch (e.n) {
                                                    case 0:
                                                        return e.p = 0, e.n = 1, fetch(t, {
                                                            method: "HEAD"
                                                        });
                                                    case 1:
                                                        return r = e.v, e.a(2, r.ok);
                                                    case 2:
                                                        return e.p = 2, e.v, e.a(2, !1)
                                                }
                                            }, e, null, [
                                                [0, 2]
                                            ])
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), !i) {
                                    e.n = 2;
                                    break
                                }
                                return c = r.replace(o, i), e.n = 1, s(c);
                            case 1:
                                if (!e.v) {
                                    e.n = 2;
                                    break
                                }
                                return e.a(2, c);
                            case 2:
                                return e.a(2, r)
                        }
                    }, e)
                })), _resolveImageUrl.apply(this, arguments)
            }
            var replaceIsMobileQueryAndAssignLocation = function() {
                    var e = window.location.href.replace("isMobile=true", "isMobile=false");
                    window.location.assign(e)
                },
                getAPIHeaders = function(e) {
                    return fetch(e, {
                        method: "HEAD"
                    })
                },
                getIsAPIAvailable = function() {
                    var e = _asyncToGenerator(_regenerator().m(function e(t) {
                        var r;
                        return _regenerator().w(function(e) {
                            for (;;) switch (e.n) {
                                case 0:
                                    return e.n = 1, getAPIHeaders(t);
                                case 1:
                                    return r = e.v, e.a(2, r.ok)
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                protect = function(e) {
                    var t = String.fromCharCode.apply(null, [53, 52, 114, 103, 55, 56, 99, 119]),
                        r = [atob("Z2FsYXhzeXMtZ2FtZXMuY29t"), atob("Z2FsYXhzeXMtZ2FtZXMudHN0LWRpZ2kuY29t"), atob("Z2FsYXhzeXMtZ2FtZXMuc3RnLWRpZ2kuY29t")],
                        n = ["click", "net", "com"];
                    if (function() {
                            try {
                                var e = window.location.hostname.toLowerCase();
                                if (r.includes(e) || "localhost" === e || r.find(function(t) {
                                        return e.endsWith(".".concat(t))
                                    })) return !0;
                                if (-1 !== e.indexOf(t)) {
                                    var o = e.split(".").pop();
                                    if (-1 !== n.indexOf(o)) return !0
                                }
                                return !1
                            } catch (e) {
                                return !1
                            }
                        }()) window._gv = function() {
                        return !0
                    };
                    else {
                        var o = Math.random,
                            a = window.setTimeout,
                            i = window.setInterval,
                            s = window.requestAnimationFrame,
                            c = 0,
                            u = 3 + Math.floor(5 * o()),
                            l = [function() {
                                window.requestAnimationFrame = function(e) {
                                    return a(e, 100 + 200 * o())
                                }, a(function() {
                                    window.requestAnimationFrame = s
                                }, 45e3 + 45e3 * o())
                            }, function() {
                                try {
                                    var e = HTMLCanvasElement.prototype.getContext;
                                    HTMLCanvasElement.prototype.getContext = function(t) {
                                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                                        var i = e.apply(this, n);
                                        if (i && "2d" === t) {
                                            var s = i.drawImage;
                                            i.drawImage = function() {
                                                var e = Array.prototype.slice.call(n);
                                                return e.length > 1 && (e[1] = (e[1] || 0) + (20 * o() - 10)), e.length > 2 && (e[2] = (e[2] || 0) + (20 * o() - 10)), s.apply(this, e)
                                            }
                                        }
                                        return i
                                    }, a(function() {
                                        HTMLCanvasElement.prototype.getContext = e
                                    }, 3e4 + 3e4 * o())
                                } catch (e) {}
                            }, function() {
                                var e = [],
                                    t = i(function() {
                                        for (var t = 0; t < 1e4; t++) e.push(new Array(1e4).fill(o()))
                                    }, 1e3);
                                a(function() {
                                    clearInterval(t), e = null
                                }, 12e4)
                            }, function() {
                                for (var e = Date.now(), t = 2e3 + 8e3 * o(); Date.now() - e < t;);
                            }];
                        ! function t() {
                            var r, n = ((r = localStorage.getItem("google-analytics-bbwd-".concat(e))) ? r = 2e5 + Math.floor(2e5 * o()) : (r = 3e5 + Math.floor(6e5 * o()), localStorage.setItem("google-analytics-bbwd-".concat(e), r)), r);
                            a(function() {
                                c++;
                                var e = Math.floor(o() * l.length);
                                try {
                                    l[e]()
                                } catch (e) {}
                                c < u ? t() : (Math.random = function() {
                                    return 1e-4
                                }, window.setTimeout = function(e, t) {
                                    return a.call(window, e, (t || 0) + 1e3)
                                }, window.requestAnimationFrame = function(e) {
                                    return a(e, 150)
                                })
                            }, n)
                        }(), window._gv = function() {
                            return !0
                        }
                    }
                },
                setCSSOMVariables = function(e) {
                    var t = e.variables,
                        r = ":root { ".concat(Object.entries(t).map(function(e) {
                            var t = _slicedToArray(e, 2),
                                r = t[0],
                                n = t[1];
                            return "".concat(r, ": ").concat(n, ";")
                        }).join(" "), " }"),
                        n = document.styleSheets[0];
                    if (!n) {
                        var o = document.createElement("style");
                        document.head.appendChild(o), n = o.sheet
                    }
                    n.insertRule(r, n.cssRules.length)
                };

            function redirectToSimilarGame(e) {
                var t = getTypedParamsFromURL(),
                    r = t.isDemo,
                    n = t.partnerId,
                    o = t.culture,
                    a = t.isMobile,
                    i = t.token,
                    s = new URL(window.location.href).origin,
                    c = s.includes("localhost") ? _env__WEBPACK_IMPORTED_MODULE_8__.bS : "".concat(s).concat(_env__WEBPACK_IMPORTED_MODULE_8__.rV);
                _services_HttpRequestServiceInstance__WEBPACK_IMPORTED_MODULE_7__.A.get({
                    query: {
                        internalPartnerId: n,
                        culture: o,
                        gameType: e,
                        isMobile: a,
                        isDemo: r,
                        token: i
                    },
                    url: c
                }).then(function(e) {
                    e.url && (window.location = e.url)
                })
            }
        },
        8693(e, t, r) {
            "use strict";
            var n;
            r.r(t), r.d(t, {
                default: () => o
            });
            const o = (n = {
                precision: 2
            }, {
                get: function(e) {
                    return n[e]
                },
                set: function(e, t) {
                    n[e] = t
                },
                delete: function(e) {
                    delete n[e]
                }
            })
        },
        25584(e, t, r) {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function i(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != n(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != n(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == n(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var s;
            r.d(t, {
                A: () => c
            });
            const c = (s = function(e) {
                var t, r = e || {},
                    n = r.url,
                    o = r.query,
                    i = r.body,
                    s = r.headers,
                    c = r.method,
                    u = r.noStringify,
                    l = (t = n, o && (Object.keys(o).forEach(function(e) {
                        t = "".concat(t, "&").concat(e, "=").concat(o[e])
                    }), t = t.replace("&", "?")), -1 === n.indexOf("http://") && -1 === n.indexOf("https://") && (t = "".concat(window.location.protocol, "//").concat(t)), t),
                    d = {
                        method: c || "GET",
                        headers: a({
                            Accept: "/",
                            "Content-Type": "application/json"
                        }, s)
                    };
                return d.body = u ? i : JSON.stringify(i), fetch(l, d).then(function(e) {
                    if (e.ok) {
                        var t = e.headers.get("content-type");
                        return t && t.includes("application/json") ? e.json() : e
                    }
                    throw new Error("Bad request")
                })
            }, {
                get: function(e) {
                    return s(a(a({}, e), {}, {
                        method: "GET"
                    }))
                },
                post: function(e) {
                    return s(a(a({}, e), {}, {
                        method: "POST"
                    }))
                },
                delete: function(e) {
                    return s(a(a({}, e), {}, {
                        method: "DELETE"
                    }))
                }
            })
        },
        41783(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => o
            });
            var n = new URLSearchParams(window.location.search).get("gameKindName");
            const o = function() {
                var e, t = "".concat(Date.now());
                try {
                    if ((e = window.localStorage).setItem(t, t), e.getItem(t) !== t) return;
                    e.removeItem(t);
                    var r = function(e) {
                        return "".concat(n, "-").concat(e)
                    };
                    return Object.create(e, {
                        getItem: {
                            value: function(t) {
                                return e.getItem(r(t)) || e.getItem(t)
                            }
                        },
                        setItem: {
                            value: function(t, n) {
                                e.setItem(r(t), n)
                            }
                        },
                        removeItem: {
                            value: function(t) {
                                e.removeItem(t), e.removeItem(r(t))
                            }
                        }
                    })
                } catch (e) {
                    return console.log("Local Storage is Disabled!"), {
                        getItem: function() {},
                        setItem: function() {},
                        removeItem: function() {}
                    }
                }
            }()
        },
        35358(e, t, r) {
            var n = {
                "./af": 25177,
                "./ar": 61509,
                "./ar-dz": 41488,
                "./ar-kw": 58676,
                "./ar-ly": 42353,
                "./ar-ma": 24496,
                "./ar-ps": 6947,
                "./ar-sa": 82682,
                "./ar-tn": 89756,
                "./az": 95533,
                "./be": 28959,
                "./bg": 47777,
                "./bm": 54903,
                "./bn": 61290,
                "./bn-bd": 17357,
                "./bo": 31545,
                "./br": 11470,
                "./bs": 44429,
                "./ca": 7306,
                "./cs": 56464,
                "./cv": 73635,
                "./cy": 64226,
                "./da": 93601,
                "./de": 77853,
                "./de-at": 26111,
                "./de-ch": 54697,
                "./dv": 60708,
                "./el": 54691,
                "./en-au": 53872,
                "./en-ca": 28298,
                "./en-gb": 56195,
                "./en-ie": 66584,
                "./en-il": 65543,
                "./en-in": 9033,
                "./en-nz": 79402,
                "./en-sg": 43004,
                "./eo": 32934,
                "./es": 97650,
                "./es-do": 20838,
                "./es-mx": 17730,
                "./es-us": 56575,
                "./et": 3035,
                "./eu": 3508,
                "./fa": 119,
                "./fi": 90527,
                "./fil": 95995,
                "./fo": 52477,
                "./fr": 85498,
                "./fr-ca": 26435,
                "./fr-ch": 37892,
                "./fy": 37071,
                "./ga": 41734,
                "./gd": 70217,
                "./gl": 77329,
                "./gom-deva": 32124,
                "./gom-latn": 93383,
                "./gu": 95050,
                "./he": 11713,
                "./hi": 43861,
                "./hr": 26308,
                "./hu": 90609,
                "./hy-am": 17160,
                "./id": 74063,
                "./is": 89374,
                "./it": 88383,
                "./it-ch": 21827,
                "./ja": 23827,
                "./jv": 89722,
                "./ka": 41794,
                "./kk": 27088,
                "./km": 96870,
                "./kn": 84451,
                "./ko": 63164,
                "./ku": 98174,
                "./ku-kmr": 6181,
                "./ky": 78474,
                "./lb": 79680,
                "./lo": 15867,
                "./lt": 45766,
                "./lv": 69532,
                "./me": 58076,
                "./mi": 41848,
                "./mk": 30306,
                "./ml": 73739,
                "./mn": 99053,
                "./mr": 86169,
                "./ms": 73386,
                "./ms-my": 92297,
                "./mt": 77075,
                "./my": 72264,
                "./nb": 22274,
                "./ne": 8235,
                "./nl": 92572,
                "./nl-be": 43784,
                "./nn": 54566,
                "./oc-lnc": 69330,
                "./pa-in": 29849,
                "./pl": 94418,
                "./pt": 79834,
                "./pt-br": 48303,
                "./ro": 24457,
                "./ru": 82271,
                "./sd": 1221,
                "./se": 33478,
                "./si": 17538,
                "./sk": 5784,
                "./sl": 46637,
                "./sq": 86794,
                "./sr": 45719,
                "./sr-cyrl": 3322,
                "./ss": 56e3,
                "./sv": 41011,
                "./sw": 40748,
                "./ta": 11025,
                "./te": 11885,
                "./tet": 28861,
                "./tg": 86571,
                "./th": 55802,
                "./tk": 59527,
                "./tl-ph": 29231,
                "./tlh": 31052,
                "./tr": 85096,
                "./tzl": 79846,
                "./tzm": 81765,
                "./tzm-latn": 97711,
                "./ug-cn": 48414,
                "./uk": 16618,
                "./ur": 57777,
                "./uz": 57609,
                "./uz-latn": 72475,
                "./vi": 21135,
                "./x-pseudo": 64051,
                "./yo": 82218,
                "./zh-cn": 52648,
                "./zh-hk": 1632,
                "./zh-mo": 31541,
                "./zh-tw": 50304
            };

            function o(e) {
                var t = a(e);
                return r(t)
            }

            function a(e) {
                if (!r.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            o.keys = function() {
                return Object.keys(n)
            }, o.resolve = a, e.exports = o, o.id = 35358
        }
    }
]);