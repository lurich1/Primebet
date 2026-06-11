"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [8725], {
        19309(t, e, r) {
            r.r(e), r.d(e, {
                default: () => T
            });
            var n = r(98283),
                o = r(38874),
                i = r(5556),
                a = r.n(i),
                s = r(79555),
                l = r(59447),
                c = r(17710),
                u = r(55103),
                d = r(74848);

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var f = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-14i2af5-0"
                })(["", ";width:100%;padding:1em 0.5em 0.5em;border-radius:0.5em;border:1px solid;border-color:rgba(var(--white),0.2);background:rgba(var(--white),0.06);margin:0 0 0.5em 0;"], (0, u.Dj)({
                    alignItems: "center",
                    flexDirection: "column"
                }))),
                y = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-14i2af5-1"
                })(["", ";width:100%;padding:0.125em 0.25em;"], (0, u.Dj)({
                    justifyContent: "space-between"
                }))),
                p = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-14i2af5-2"
                })(["", ";align-items:", ";gap:0.125em;"], (0, u.Dj)({
                    flexDirection: "column"
                }), function(t) {
                    return t.alignItems || "center"
                })),
                b = (0, n.memo)(o.default.span.withConfig({
                    componentId: "sc-14i2af5-3"
                })(["font:0.75em var(--mainFont);color:rgba(var(--white),", ");"], function(t) {
                    return t.opacity || 1
                })),
                h = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-14i2af5-4"
                })(["width:100%;height:1px;margin:0.875em 0 0.5em;background:rgba(var(--white),0.16);"])),
                g = (0, n.memo)(o.default.button.withConfig({
                    componentId: "sc-14i2af5-5"
                })(["", ";width:calc(100% - 0.7em);height:2.125em;margin-bottom:0.5em;font:1em var(--mainFont);border:none;border-radius:0.5em;background:radial-gradient(100.02% 100% at 49.41% 0%,#6524a6 0%,#3a1164 63.02%,#51128f 100%);box-shadow:0 -2px 0 0 rgba(176,139,255,0.32) inset;cursor:pointer;text-wrap:nowrap;color:rgb(var(--white));"], (0, u.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                v = (0, n.memo)(o.default.button.withConfig({
                    componentId: "sc-14i2af5-6"
                })(["", ';width:100%;height:2.5em;font:1em var(--mainFont);border:1px solid;border-color:rgba(var(--white),0.2);border-radius:0.25em;background:rgba(var(--white),0.16);cursor:pointer;text-wrap:nowrap;color:rgb(var(--white));&::before{content:"";display:inline-block;width:0.375em;height:0.375em;border:solid;border-radius:0.1em;border-color:rgb(var(--white));border-width:0.15em 0 0 0.15em;margin:0 0.625em;transform:translateY(0.1em) rotate(225deg);transform-origin:center;}', ""], (0, u.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }), function(t) {
                    return t.isTicketsShow && (0, o.css)(["&::before{transform:translateY(0.1em) rotate(45deg);}"])
                })),
                w = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-14i2af5-7"
                })([""])),
                x = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-14i2af5-8"
                })(["display:flex;width:1.2em;height:1.4em;margin:0 0.5em;"]));

            function I(t) {
                var e, r, o = t.styles,
                    i = t.resources,
                    a = t.currencyId,
                    s = t.onClick,
                    u = t.stakes,
                    I = t.totalWin,
                    j = t.totalBet,
                    S = t.gameId,
                    k = (e = (0, n.useState)(!1), r = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != r) {
                            var n, o, i, a, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (r = r.call(t)).next, 0 === e) {
                                    if (Object(r) !== r) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return s
                        }
                    }(e, r) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return m(t, e);
                            var r = {}.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(t, e) : void 0
                        }
                    }(e, r) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    C = k[0],
                    T = k[1],
                    B = i.strRound,
                    O = i.strTotalBet,
                    P = i.strTotalWin,
                    A = i.strRepeatAllBets,
                    R = i.strHideTickets,
                    D = i.strViewTickets;
                return (0, d.jsxs)(f, {
                    style: o.container,
                    children: [(0, d.jsxs)(y, {
                        style: o.titleSection,
                        children: [(0, d.jsxs)(p, {
                            style: o.title,
                            alignItems: "start",
                            children: [(0, d.jsx)(b, {
                                style: o.text,
                                opacity: .6,
                                children: B
                            }), (0, d.jsx)(b, {
                                style: o.text,
                                opacity: .8,
                                children: S
                            })]
                        }), (0, d.jsxs)(p, {
                            style: o.title,
                            children: [(0, d.jsx)(b, {
                                style: o.text,
                                opacity: .6,
                                children: O
                            }), (0, d.jsx)(b, {
                                style: o.text,
                                children: (0, d.jsx)(c.default, {
                                    currencyId: a,
                                    culture: "en",
                                    text: j,
                                    styles: o.amountBox
                                })
                            })]
                        }), (0, d.jsxs)(p, {
                            style: o.title,
                            alignItems: "end",
                            children: [(0, d.jsx)(b, {
                                style: o.text,
                                opacity: .6,
                                children: P
                            }), (0, d.jsx)(b, {
                                style: o.text,
                                children: (0, d.jsx)(c.default, {
                                    currencyId: a,
                                    culture: "en",
                                    text: I,
                                    styles: o.amountBox
                                })
                            })]
                        })]
                    }), (0, d.jsx)(h, {
                        style: o.divider
                    }), (0, d.jsxs)(g, {
                        style: o.rebetButton,
                        onClick: s,
                        children: [(0, d.jsx)(b, {
                            style: o.text,
                            children: A
                        }), (0, d.jsx)(x, {
                            style: o.rebetIcon,
                            children: (0, d.jsx)(l.default, {
                                color: "rgb(var(--white))"
                            })
                        })]
                    }), C && (0, d.jsx)(v, {
                        style: o.ticketShowButton,
                        onClick: function() {
                            return T(function(t) {
                                return !t
                            })
                        },
                        isTicketsShow: C,
                        children: (0, d.jsx)(b, {
                            children: C ? R : D
                        })
                    }), (0, d.jsx)(w, {
                        style: o.ticketSection,
                        children: C && u
                    }), (0, d.jsx)(v, {
                        style: o.ticketShowButton,
                        onClick: function() {
                            return T(function(t) {
                                return !t
                            })
                        },
                        isTicketsShow: C,
                        children: (0, d.jsx)(b, {
                            children: C ? R : D
                        })
                    })]
                })
            }
            I.defaultProps = {
                styles: {},
                resources: {},
                currencyId: "",
                onClick: function() {},
                stakes: [],
                totalWin: 0,
                totalBet: 0,
                gameId: 0
            }, I.propTypes = {
                styles: a().object,
                resources: a().object,
                currencyId: a().string,
                onClick: a().func,
                stakes: a().array,
                totalWin: a().oneOfType([a().string, a().number]),
                totalBet: a().oneOfType([a().string, a().number]),
                gameId: a().number
            };
            const j = (0, n.memo)(I);
            var S = (0, s.getIsMobile)(),
                k = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-1pd4vnf-0"
                })(["height:", ";overflow-y:scroll;margin:", ";padding:0 0.375em 0 0;scrollbar-width:0.1875em;scrollbar-color:var(--scrollBarTrackBg,#fff);&::-webkit-scrollbar{width:0.1875em;}&::-webkit-scrollbar-track{background:var(--scrollBarTrackBg,#fff);}&::-webkit-scrollbar-thumb{background:var(--scrollBarThumbBg,#fff);}"], S ? "calc(100% - 3em)" : "37em", S ? "0.5em 0 0" : "1em 0 0"));

            function C(t) {
                var e = t.styles,
                    r = t.resources,
                    n = t.currencyId,
                    o = t.body;
                return (0, d.jsx)(k, {
                    styles: null == e ? void 0 : e.main,
                    children: null == o ? void 0 : o.map(function(t, o) {
                        var i = t.gameId,
                            a = t.totalBet,
                            s = t.totalWin,
                            l = t.onClick,
                            c = t.stakes;
                        return (0, d.jsx)(j, {
                            resources: r,
                            currencyId: n,
                            onClick: l,
                            stakes: c,
                            totalWin: s,
                            totalBet: a,
                            gameId: i,
                            styles: e || {}
                        }, o)
                    })
                })
            }
            C.defaultProps = {
                styles: {},
                resources: {},
                currencyId: "",
                body: []
            }, C.propTypes = {
                styles: a().object,
                resources: a().object,
                currencyId: a().string,
                body: a().array
            };
            const T = (0, n.memo)(C)
        },
        31292(t, e, r) {
            r.r(e), r.d(e, {
                default: () => k
            });
            var n = r(98283),
                o = r(38874),
                i = r(70780),
                a = r(94206),
                s = r(79555),
                l = r(55103),
                c = r(5556),
                u = r.n(c),
                d = {
                    tabList: u().array.isRequired,
                    styles: u().object,
                    activeIndex: u().number.isRequired,
                    handleClick: u().func.isRequired,
                    animationSecond: u().number,
                    switcherItem: u().element
                },
                m = r(74848);

            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function y(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(r), !0).forEach(function(e) {
                        b(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function b(t, e, r) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != f(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var r = e.call(t, "string");
                            if ("object" != f(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == f(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var h = (0, s.getIsMobile)(),
                g = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-1oeihoy-0"
                })(["", ";height:", ";width:", ";overflow-x:", ";scrollbar-color:transparent transparent;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"], l._7, h ? "2.5em" : "2.375em", h ? "100%" : "calc(100% - 0.5em)", h ? "auto" : "visible")),
                v = (0, n.memo)(o.default.ul.withConfig({
                    componentId: "sc-1oeihoy-1"
                })(["", ";width:", ";height:", ";list-style-type:none;padding-left:0;margin:0;user-select:none;position:relative;background:", ";border:", ";border-color:", ";border-radius:", ";", ""], (0, l.Dj)({
                    alignItems: "center"
                }), h ? "150%" : "100%", h ? "2.375em" : "100%", h ? "transparent" : "rgba(var(--white), 0.05)", h ? "0 none" : "1px solid", h ? "transparent" : "var(--mainLayoutBorderColor)", h ? 0 : "2em", function(t) {
                    return t.noBorderList && (0, o.css)(["border:0 none;background:transparent;"])
                })),
                w = (0, n.memo)(o.default.li.withConfig({
                    componentId: "sc-1oeihoy-2"
                })(["", ";flex:1;height:100%;padding:0.875em 0.375em;color:rgba(var(--white),0.6);font:0.75em var(--mainFont);position:relative;z-index:1;text-align:center;text-transform:capitalize;cursor:pointer;overflow:hidden;transition:color 0.5s;", " ", " ", ""], (0, l.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), function(t) {
                    return t.SwitchItem && (0, o.css)(["transition:all ", "s,color ", "s,transform ", "s;position:absolute;height:100%;left:0;top:0;pointer-events:none;flex:1;z-index:0;padding:0;"], t.animationSecond, t.animationSecond, t.animationSecond)
                }, function(t) {
                    return t.oneItem && (0, o.css)(["cursor:default;"])
                }, function(t) {
                    return t.activeTab && (0, o.css)(["color:rgb(var(--white));font:0.75em var(--mainFontMedium);"])
                })),
                x = (0, n.memo)(o.default.span.withConfig({
                    componentId: "sc-1oeihoy-3"
                })(["", ";"], l.YF)),
                I = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-1oeihoy-4"
                })(["", ";background:var(--primaryButtonLayer1);display:block;padding:1px;border-radius:3em;"], l.PH)),
                j = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-1oeihoy-5"
                })(["", ";background:var(--primaryButtonLayer2);display:block;border-radius:3em;"], l.PH));

            function S(t) {
                var e = t.tabList,
                    r = t.styles,
                    o = t.activeIndex,
                    s = t.handleClick,
                    l = t.animationSecond,
                    c = t.switcherItem,
                    u = (0, i.Em)(i.z4),
                    d = (0, n.useRef)(e.map(function() {
                        return (0, n.createRef)()
                    }));
                return (0, a.useDidUpdate)(function() {
                    var t;
                    s(0, null == d || null === (t = d.current) || void 0 === t ? void 0 : t[0])
                }, [e.length, null == d ? void 0 : d.current]), (0, m.jsx)(g, {
                    className: "headerWrapper",
                    style: r.header,
                    children: (0, m.jsxs)(v, {
                        style: r.list,
                        noBorderList: 1 === e.length,
                        children: [e.map(function(t, n) {
                            var i, a, l = (null === (i = r.tab) || void 0 === i ? void 0 : i.active) || {},
                                c = p(p({}, (null === (a = r.tab) || void 0 === a ? void 0 : a.default) || {}), o === n && l),
                                f = d.current[n];
                            return (0, m.jsx)(w, {
                                oneItem: 1 === e.length,
                                "data-gtm": u[t],
                                ref: f,
                                style: c,
                                activeTab: o === n,
                                onClick: function() {
                                    return s(n, f)
                                },
                                "data-testid": "slider-tabs-glass_tab-list_tab-".concat(n),
                                children: (0, m.jsx)(x, {
                                    style: r.text,
                                    children: t
                                })
                            }, n)
                        }), e.length > 1 && (0, m.jsx)(w, {
                            SwitchItem: !0,
                            animationSecond: l,
                            style: {
                                width: "".concat(100 / e.length, "%"),
                                transform: "translateX(".concat(100 * o, "%)")
                            },
                            "data-testid": "slider-tabs-glass_tab-list_switcher-tab",
                            className: "SliderTabsGlass_switcherTab",
                            children: c || (0, m.jsx)(I, {
                                style: r.switcher,
                                "data-testid": "slider-tabs-glass_tab-list_switcher-tab_switcher-item",
                                children: (0, m.jsx)(j, {
                                    style: r.switcherInner
                                })
                            })
                        })]
                    })
                })
            }
            S.defaultProps = {
                styles: {},
                animationSecond: .4,
                switcherItem: null
            }, S.propTypes = d;
            const k = (0, n.memo)(S)
        },
        2293(t, e, r) {
            r.r(e), r.d(e, {
                default: () => f
            });
            var n = r(98283),
                o = r(38874),
                i = r(5556),
                a = r.n(i),
                s = {
                    className: a().string,
                    handleClick: a().func,
                    children: a().element
                },
                l = r(74848);

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var u = (0, n.memo)(o.default.button.withConfig({
                    componentId: "sc-5qi4x3-0"
                })(["display:inline-flex;align-items:center;justify-content:center;flex:0 0 2.875em;height:100%;padding:1em;color:rgba(var(--white),0.7);line-height:2.875em;text-align:center;border:0 none;font-size:1em;background:transparent;cursor:pointer;"])),
                d = null;

            function m(t) {
                var e, r, o = t.children,
                    i = t.className,
                    a = t.handleClick,
                    s = (e = (0, n.useState)(!1), r = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != r) {
                            var n, o, i, a, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (r = r.call(t)).next, 0 === e) {
                                    if (Object(r) !== r) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return s
                        }
                    }(e, r) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return c(t, e);
                            var r = {}.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0
                        }
                    }(e, r) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    m = s[0],
                    f = s[1],
                    y = function() {
                        return f(!0)
                    },
                    p = function() {
                        return f(!1)
                    };
                return (0, n.useEffect)(function() {
                    return d && clearInterval(d), m && (d = setInterval(a, 150)),
                        function() {
                            return clearInterval(d)
                        }
                }, [m]), (0, l.jsx)(u, {
                    type: "button",
                    className: i,
                    onClick: a,
                    onMouseDown: y,
                    onTouchStart: y,
                    onMouseUp: p,
                    onMouseLeave: p,
                    onTouchEnd: p,
                    children: o
                })
            }
            m.defaultProps = {
                className: "",
                handleClick: function() {},
                children: null
            }, m.propTypes = s;
            const f = (0, n.memo)(m)
        },
        18725(t, e, r) {
            r.r(e), r.d(e, {
                CheckHashCode: () => i.default,
                HistoryTicketTable: () => a.default,
                SliderTabs: () => n.default,
                SpinnerButtons: () => o.default
            });
            var n = r(31292),
                o = r(2293),
                i = r(98792),
                a = r(19309)
        },
        17710(t, e, r) {
            r.r(e), r.d(e, {
                default: () => y
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(79555),
                s = r(38874),
                l = r(55103),
                c = r(74848),
                u = s.default.div.withConfig({
                    componentId: "sc-jhq0oh-0"
                })(["display:inline-block;", ";"], function(t) {
                    return t.isInSlot && (0, s.css)(["", ";max-width:100%;font-size:0.875em;", "{white-space:nowrap;}", "{white-space:nowrap;}"], (0, l.Dj)({
                        isInlineFlex: !0,
                        alignItems: "center"
                    }), d, m)
                }),
                d = s.default.span.withConfig({
                    componentId: "sc-jhq0oh-1"
                })(["direction:ltr;display:inline-flex;"]),
                m = s.default.b.withConfig({
                    componentId: "sc-jhq0oh-2"
                })(["text-transform:uppercase;font-weight:normal;padding:0 0.25em;margin-inline-start:0.25em;"]);

            function f(t) {
                var e = t.currencyId,
                    r = t.culture,
                    n = t.text,
                    o = t.styles,
                    i = t.isVisibleCurrency,
                    s = t.parentId,
                    l = t.isInSlot,
                    f = t.amountRef;
                return (0, c.jsxs)(u, {
                    ref: f,
                    style: (0, a.addRtlToStyles)(o.container, r),
                    "data-testid": "".concat(s ? "".concat(s, "_") : "", "amount-box"),
                    isInSlot: l,
                    children: [(0, c.jsx)(d, {
                        style: o.amount,
                        "data-testid": "amount-box_amount",
                        isInSlot: l,
                        children: n
                    }), i ? (0, c.jsx)(m, {
                        style: o.currency,
                        "data-testid": "".concat(s ? "".concat(s, "_") : "", "amount-box_currency"),
                        isInSlot: l,
                        children: e
                    }) : null]
                })
            }
            f.defaultProps = {
                currencyId: "",
                culture: "",
                text: "",
                amountRef: {},
                styles: {},
                isVisibleCurrency: !0,
                parentId: "",
                isInSlot: !1
            }, f.propTypes = {
                currencyId: i().oneOfType([i().string, i().number]),
                culture: i().string,
                text: i().oneOfType([i().string, i().number]),
                amountRef: i().object,
                styles: i().object,
                isVisibleCurrency: i().bool,
                parentId: i().string,
                isInSlot: i().bool
            };
            const y = (0, n.memo)(f)
        },
        70780(t, e, r) {
            r.d(e, {
                DR: () => s,
                Em: () => a,
                z4: () => l
            });
            var n = r(76653);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, e, r) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != o(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var r = e.call(t, "string");
                            if ("object" != o(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == o(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var a = function(t) {
                    return (0, n.useSelector)(t, n.shallowEqual)
                },
                s = function(t) {
                    var e = t.resources;
                    return {
                        strApply: e.strApply,
                        strReset: e.strReset,
                        strBetAmount: e.strBetAmount || "_Bet Amount",
                        strAutoPlayOptions: e.strAutoPlayOptions || "_Auto Play Options",
                        strNumberOfRounds: e.strNumberOfRounds || "_Number of Rounds",
                        strStopTotalLoss: e.strStopTotalLoss || "_Stop if total loss equals to",
                        strStopTotalWin: e.strStopTotalWin || "_Stop if total win equals to",
                        strStopSingleWin: e.strStopSingleWin || "_Stop if single win exceeds",
                        strTotalAmountCommitted: e.strTotalAmountCommitted,
                        strRounds: e.strRounds,
                        strPerSpin: e.strPerSpin,
                        currencyId: t.partnerInfo.currencyId,
                        autoBetCounts: t.autoBetCounts,
                        maxWin: t.partnerInfo.maxWin,
                        maxBet: t.partnerInfo.maxBet,
                        minBet: t.partnerInfo.minBet,
                        precision: t.partnerInfo.precision
                    }
                },
                l = function(t) {
                    var e, r = t.resources,
                        n = r.strPlayers,
                        o = r.strHistory,
                        a = r.strTop,
                        s = r.strLeaderboard,
                        l = r.strDaily,
                        c = r.strMonthly,
                        u = r.strCurrentBets,
                        d = r.strLeaders,
                        m = r.strResults,
                        f = r.strStatistics,
                        y = r.strMyBets,
                        p = r.strAllBets;
                    return i(i(i(i(i(i(i(i(i(i(e = {}, n, "Players"), o, "History"), a, "Top"), s, "Leaderboard"), l, "Daily"), c, "Monthly"), f, "Statistics"), m, "Results"), u, "Current Bets"), d, "Leaders"), i(i(e, y, "My Bets"), p, "All Bets")
                }
        }
    }
]);