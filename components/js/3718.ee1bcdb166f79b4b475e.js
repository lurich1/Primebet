"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [3718, 4115], {
        17710(e, t, n) {
            n.r(t), n.d(t, {
                default: () => y
            });
            var r = n(98283),
                o = n(5556),
                i = n.n(o),
                a = n(79555),
                c = n(38874),
                l = n(55103),
                s = n(74848),
                u = c.default.div.withConfig({
                    componentId: "sc-jhq0oh-0"
                })(["display:inline-block;", ";"], function(e) {
                    return e.isInSlot && (0, c.css)(["", ";max-width:100%;font-size:0.875em;", "{white-space:nowrap;}", "{white-space:nowrap;}"], (0, l.Dj)({
                        isInlineFlex: !0,
                        alignItems: "center"
                    }), f, d)
                }),
                f = c.default.span.withConfig({
                    componentId: "sc-jhq0oh-1"
                })(["direction:ltr;display:inline-flex;"]),
                d = c.default.b.withConfig({
                    componentId: "sc-jhq0oh-2"
                })(["text-transform:uppercase;font-weight:normal;padding:0 0.25em;margin-inline-start:0.25em;"]);

            function m(e) {
                var t = e.currencyId,
                    n = e.culture,
                    r = e.text,
                    o = e.styles,
                    i = e.isVisibleCurrency,
                    c = e.parentId,
                    l = e.isInSlot,
                    m = e.amountRef;
                return (0, s.jsxs)(u, {
                    ref: m,
                    style: (0, a.addRtlToStyles)(o.container, n),
                    "data-testid": "".concat(c ? "".concat(c, "_") : "", "amount-box"),
                    isInSlot: l,
                    children: [(0, s.jsx)(f, {
                        style: o.amount,
                        "data-testid": "amount-box_amount",
                        isInSlot: l,
                        children: r
                    }), i ? (0, s.jsx)(d, {
                        style: o.currency,
                        "data-testid": "".concat(c ? "".concat(c, "_") : "", "amount-box_currency"),
                        isInSlot: l,
                        children: t
                    }) : null]
                })
            }
            m.defaultProps = {
                currencyId: "",
                culture: "",
                text: "",
                amountRef: {},
                styles: {},
                isVisibleCurrency: !0,
                parentId: "",
                isInSlot: !1
            }, m.propTypes = {
                currencyId: i().oneOfType([i().string, i().number]),
                culture: i().string,
                text: i().oneOfType([i().string, i().number]),
                amountRef: i().object,
                styles: i().object,
                isVisibleCurrency: i().bool,
                parentId: i().string,
                isInSlot: i().bool
            };
            const y = (0, r.memo)(m)
        },
        16496(e, t, n) {
            n.r(t), n.d(t, {
                default: () => P
            });
            var r = n(98283),
                o = n(5556),
                i = n.n(o),
                a = n(38874),
                c = n(79555),
                l = n(17710),
                s = n(40194),
                u = n(2907),
                f = n(63047),
                d = n(74848);

            function m(e) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, m(e)
            }

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach(function(t) {
                        p(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function p(e, t, n) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != m(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != m(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == m(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var h = (0, c.getIsMobile)(),
                j = a.default.div.withConfig({
                    componentId: "sc-1xvbkw4-0"
                })(["", ";color:rgb(var(--white));", ";", ";", ";", ";"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: h ? "flex-end" : "flex-start"
                }), function(e) {
                    return e.isLandscape && (0, a.css)(["flex-direction:row;align-items:center;"])
                }, function(e) {
                    return e.isInSlot && (0, a.css)(["flex-direction:column;align-items:flex-start;justify-content:flex-start;", ";", ";"], h && "flex: 0 0 calc(50% - 3em)", h && "width: calc(50% - 3em)")
                }, function(e) {
                    return e.isInSlot && e.isLandscape && (0, a.css)(["flex-direction:row;align-items:center;flex:1 1 auto;width:auto;"])
                }, function(e) {
                    return e.isSlotPortrait && (0, a.css)(["flex-direction:column;align-items:flex-start;justify-content:flex-end;", " width:calc((100% - 4.5em) / 2);"], h && "flex: 0 0 calc((100% - 4.5em) / 2)")
                }),
                v = a.default.p.withConfig({
                    componentId: "sc-1xvbkw4-1"
                })(["text-transform:uppercase;color:rgba(var(--white),0.6);font:0.625em var(--mainFont);margin-right:0.25em;", ";", ";"], function(e) {
                    return e.isInSlot && (0, a.css)(["font:", " var(--mainFont);"], h ? "0.625em" : "0.875em")
                }, function(e) {
                    return e.isInSlot && e.isLandscape && (0, a.css)(["font:0.625em var(--mainFont);margin-right:0.375em;"])
                }),
                x = a.default.button.withConfig({
                    componentId: "sc-1xvbkw4-2"
                })(["", ";", ";width:1.5em;height:1.5em;margin-right:0.125em;"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), (0, s.styledButton)({
                    padding: 0
                })),
                I = a.default.span.withConfig({
                    componentId: "sc-1xvbkw4-3"
                })(["", ";", ";cursor:pointer;"], (0, s.styledFlex)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), s.fullSize),
                w = {
                    container: {
                        whiteSpace: "nowrap",
                        display: "flex"
                    },
                    amount: {
                        color: "rgba(var(--white), 0.9)",
                        font: h ? "0.75em var(--mainFontMedium)" : "0.875em var(--mainFontMedium)",
                        marginLeft: 0
                    },
                    currency: {
                        color: "rgba(var(--white), 0.5)",
                        font: h ? "0.75em var(--mainFont)" : "0.875em var(--mainFont)",
                        padding: 0
                    }
                },
                S = {
                    amount: {
                        color: "rgba(var(--white), 0.9)",
                        font: h ? "0.875em var(--mainFontMedium)" : "1.25em var(--mainFontMedium)",
                        marginLeft: 0
                    },
                    currency: {
                        color: "rgba(var(--white), 0.9)",
                        font: h ? "0.875em var(--mainFontMedium)" : "1.25em var(--mainFontMedium)",
                        padding: 0
                    }
                };

            function O(e) {
                var t, n, o = e.styles,
                    i = e.currencyId,
                    a = e.culture,
                    c = e.balance,
                    s = e.isToggleBalance,
                    m = e.isLandscape,
                    y = e.isInSlot,
                    p = e.strBalance,
                    h = e.balanceContainerRef,
                    O = e.amountRef,
                    P = (t = (0, r.useState)(!0), n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i, a, c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (i = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); l = !0);
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return c
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return g(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                        }
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    C = P[0],
                    B = P[1];
                return (0, d.jsxs)(j, {
                    ref: h,
                    "data-testid": "balance-box",
                    style: o.container,
                    isLandscape: m,
                    isInSlot: y,
                    isSlotPortrait: !m && y,
                    children: [s && (0, d.jsx)(x, {
                        "data-gtm": "Balance Hidden",
                        style: o.hideSeeBtn,
                        onClick: function() {
                            return B(!C)
                        },
                        children: (0, d.jsx)(I, {
                            style: o.iconBtn,
                            children: C ? (0, d.jsx)(f.default, {
                                color: o.color || "rgb(var(--white))"
                            }) : (0, d.jsx)(u.default, {
                                color: o.color || "rgb(var(--white))"
                            })
                        })
                    }), m || y ? (0, d.jsx)(v, {
                        style: o.text,
                        isInSlot: y,
                        isLandscape: m,
                        children: p || "Balance"
                    }) : null, (0, d.jsx)(l.default, {
                        amountRef: O,
                        currencyId: i,
                        culture: a,
                        text: C ? c : "****",
                        styles: b(b({}, o.amountBox), y ? S : w),
                        isInSlot: !m && y
                    })]
                })
            }
            O.defaultProps = {
                isToggleBalance: !1,
                isLandscape: !1,
                isInSlot: !1,
                balanceContainerRef: {},
                amountRef: {},
                currencyId: "",
                culture: "",
                balance: "",
                strBalance: "",
                styles: {
                    container: {},
                    hideSeeBtn: {},
                    iconBtn: {},
                    text: {},
                    color: "",
                    amountBox: {
                        container: {},
                        amount: {},
                        currency: {}
                    }
                }
            }, O.propTypes = {
                isToggleBalance: i().bool,
                isLandscape: i().bool,
                isInSlot: i().bool,
                amountRef: i().object,
                balanceContainerRef: i().object,
                currencyId: i().oneOfType([i().string, i().number]),
                culture: i().string,
                strBalance: i().string,
                balance: i().oneOfType([i().string, i().number]),
                styles: i().shape({
                    container: i().object,
                    hideSeeBtn: i().object,
                    iconBtn: i().object,
                    text: i().object,
                    color: i().string,
                    amountBox: i().shape({
                        container: i().object,
                        amount: i().object,
                        currency: i().object
                    })
                })
            };
            const P = (0, r.memo)(O)
        },
        43718(e, t, n) {
            n.r(t), n.d(t, {
                default: () => O
            });
            var r = n(98283),
                o = n(38874),
                i = n(1733),
                a = n(16496),
                c = n(79555),
                l = n(73883),
                s = n(55103),
                u = n(5556),
                f = n.n(u),
                d = {
                    demo: f().bool,
                    ping: f().number,
                    styles: f().object,
                    gameId: f().number,
                    culture: f().string,
                    hidePing: f().bool,
                    openMenu: f().func,
                    hideBalance: f().bool,
                    resources: f().object,
                    currencyId: f().string,
                    isToggleBalance: f().bool,
                    balance: f().oneOfType([f().string, f().number]),
                    netPosition: f().number
                },
                m = n(74848);

            function y(e) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, y(e)
            }

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach(function(t) {
                        g(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function g(e, t, n) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != y(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != y(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == y(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = (0, c.getIsMobile)(),
                j = (0, r.memo)(o.default.div.withConfig({
                    componentId: "sc-1v9eaxx-0"
                })(["", ";", ";", ";"], function(e) {
                    return e.isInGameHeader ? (0, o.css)(["", ";"], (0, s.Dj)({
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    })) : (0, o.css)(["", ";position:fixed;top:0;left:0;z-index:3;width:100%;height:1.5em;padding:0 calc(env(safe-area-inset-right) + 1.3125em) 0 calc(env(safe-area-inset-left) + 1.3125em);"], (0, s.Dj)({
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }))
                }, !h && "\n\t\t\talign-items: flex-start;\n\t\t", function(e) {
                    return e.isInFullScreenGames && !h && (0, o.css)(["align-items:flex-end;"])
                })),
                v = (0, r.memo)(o.default.div.withConfig({
                    componentId: "sc-1v9eaxx-1"
                })(["", ";position:relative;", ""], (0, s.Dj)({
                    alignItems: "center"
                }), function(e) {
                    return e.ml0 && (0, o.css)(["margin:0;"])
                })),
                x = o.default.p.withConfig({
                    componentId: "sc-1v9eaxx-2"
                })(["", ";"], h ? "\n\t\t\tfont: 0.625em var(--mainFont);\n\t\t\tcolor: rgba(var(--white), 0.6);\n\t" : "\n\t\t\tfont: 0.875em var(--mainFont);\n\t\t\tcolor: rgba(var(--white), 0.4);\n\t\t"),
                I = (0, r.memo)(o.default.span.withConfig({
                    componentId: "sc-1v9eaxx-3"
                })(["margin-inline-end:0.25em;"])),
                w = (0, r.memo)(o.default.div.withConfig({
                    componentId: "sc-1v9eaxx-4"
                })(["", ";"], (0, s.Dj)({
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                })));

            function S(e) {
                var t = e.demo,
                    n = e.ping,
                    r = e.gameId,
                    o = e.culture,
                    c = e.balance,
                    s = e.styles,
                    u = e.resources,
                    f = e.currencyId,
                    d = e.hideBalance,
                    y = e.hidePing,
                    b = e.isLandscape,
                    g = e.isToggleBalance,
                    S = e.isInGameHeader,
                    O = e.isInFullScreenGames,
                    P = e.netPosition,
                    C = null != r;
                return (0, m.jsxs)(j, {
                    style: s.idBalanceBlock,
                    isInGameHeader: S,
                    isInFullScreenGames: O,
                    children: [(0, m.jsxs)(v, {
                        style: s.item,
                        children: [!y && !t && h && (0, m.jsx)(v, {
                            style: s.item,
                            children: (0, m.jsx)(i.default, {
                                styles: s.ping,
                                data: n,
                                resources: u
                            })
                        }), C && (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsxs)(x, {
                                style: p(p({}, s.text), s.idText),
                                children: [u.strId || "ID", " ", (0, m.jsx)(I, {
                                    children: ": "
                                })]
                            }), (0, m.jsx)(x, {
                                mr0: !0,
                                style: s.idText,
                                children: r
                            })]
                        })]
                    }), (0, m.jsxs)(w, {
                        style: s.flexBlock,
                        children: [!d && (0, m.jsx)(v, {
                            style: s.item,
                            ml0: !g,
                            children: (0, m.jsx)(a.default, {
                                currencyId: f,
                                culture: o,
                                balance: c,
                                isToggleBalance: g,
                                styles: s.balanceBox,
                                strBalance: u.strBalance,
                                isLandscape: b
                            })
                        }), (0, m.jsx)(l.default, {
                            currencyId: f,
                            styles: s.netPosition,
                            netPosition: P,
                            resources: u
                        })]
                    })]
                })
            }
            S.defaultProps = {
                culture: "",
                currencyId: "",
                styles: {},
                resources: {},
                ping: 0,
                gameId: void 0,
                balance: 0,
                demo: !1,
                hidePing: !1,
                hideBalance: !1,
                isToggleBalance: !1,
                netPosition: null
            }, S.propTypes = d;
            const O = (0, r.memo)(S)
        },
        73883(e, t, n) {
            n.r(t), n.d(t, {
                default: () => b
            });
            var r = n(98283),
                o = n(5556),
                i = n.n(o),
                a = n(38874),
                c = n(40194),
                l = n(79555),
                s = n(74848),
                u = (0, l.getIsMobile)(),
                f = a.default.p.withConfig({
                    componentId: "sc-1j7vnjc-0"
                })(["", ";font:", " / 1 var(--mainFont);color:rgba(var(--white),0.5);", ";"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "flex-start"
                }), u ? "0.5em" : "0.625em", function(e) {
                    return e.justifyEnd && (0, a.css)(["justify-content:flex-end;"])
                }),
                d = a.default.p.withConfig({
                    componentId: "sc-1j7vnjc-1"
                })(["color:rgb(var(--white));margin:0 0.375em;"]),
                m = a.default.p.withConfig({
                    componentId: "sc-1j7vnjc-2"
                })(["font-family:var(--mainFontMedium);"]);

            function y(e) {
                var t = e.styles,
                    n = e.netPosition,
                    r = e.resources,
                    o = e.isJustifyEnd,
                    i = e.currencyId;
                return "number" == typeof n && (0, s.jsxs)(f, {
                    style: t.idText,
                    justifyEnd: o,
                    children: [r.strNetPosition || "_Net Position", ":", (0, s.jsx)(d, {
                        children: n > 0 ? "+".concat(n) : n
                    }), (0, s.jsx)(m, {
                        children: i
                    })]
                })
            }
            y.defaultProps = {
                styles: {},
                netPosition: null,
                resources: {},
                isJustifyEnd: !1,
                currencyId: "FUN"
            }, y.propTypes = {
                styles: i().shape({}),
                netPosition: i().number,
                resources: i().object,
                isJustifyEnd: i().bool,
                currencyId: i().string
            };
            const b = (0, r.memo)(y)
        },
        1733(e, t, n) {
            n.r(t), n.d(t, {
                default: () => x
            });
            var r = n(98283),
                o = n(5556),
                i = n.n(o),
                a = n(38874),
                c = n(55103),
                l = n(79555),
                s = n(74848);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var f = (0, r.lazy)(function() {
                    return n.e(7101).then(n.bind(n, 47101))
                }),
                d = (0, r.lazy)(function() {
                    return n.e(5093).then(n.bind(n, 85093))
                }),
                m = (0, r.lazy)(function() {
                    return n.e(4369).then(n.bind(n, 4369))
                }),
                y = (0, r.lazy)(function() {
                    return n.e(824).then(n.bind(n, 80824))
                }),
                b = (0, l.getIsMobile)(),
                p = (0, r.memo)(a.default.div.withConfig({
                    componentId: "sc-n47hbs-0"
                })(["", ";padding-right:0;color:rgb(var(--white));position:relative;"], (0, c.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center"
                }))),
                g = (0, r.memo)(a.default.div.withConfig({
                    componentId: "sc-n47hbs-1"
                })(["position:absolute;top:1.78em;padding:0.25em 0.5em;background-color:rgba(255,0,0,0.5);border-radius:0.25em;font-size:0.75em;white-space:nowrap;"])),
                h = (0, r.memo)(a.default.div.withConfig({
                    componentId: "sc-n47hbs-2"
                })(["position:relative;border-radius:0.25em;font-size:1em;width:", ";height:", ";display:inline-flex;"], b ? "1em" : "1.25em", b ? "1em" : "1.25em")),
                j = null;

            function v(e) {
                var t, n, o = e.data,
                    i = e.resources,
                    a = e.styles,
                    c = i.strSlowConnection,
                    l = (t = (0, r.useState)(), n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i, a, c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (i = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); l = !0);
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return c
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                        }
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    b = l[0],
                    v = l[1];
                return j = o < 50 ? f : o < 180 ? d : o < 300 ? m : y, (0, r.useEffect)(function() {
                    v(function(e, t) {
                        return e < 180 || e < 300 ? null : t
                    }(o, c))
                }, [o]), (0, s.jsxs)(p, {
                    style: a.container,
                    children: [(0, s.jsx)(h, {
                        style: a.iconContainer,
                        children: (0, s.jsx)(r.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(j, {})
                        })
                    }), b && (0, s.jsx)(g, {
                        style: a.content,
                        children: b
                    })]
                })
            }
            v.defaultProps = {
                resources: {},
                data: 0,
                styles: {
                    container: {},
                    iconContainer: {},
                    content: {}
                }
            }, v.propTypes = {
                resources: i().object,
                data: i().number,
                styles: i().shape({
                    container: i().object,
                    iconContainer: i().object,
                    content: i().object
                })
            };
            const x = (0, r.memo)(v)
        }
    }
]);