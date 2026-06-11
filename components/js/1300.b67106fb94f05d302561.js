"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1300], {
        55103(e, t, n) {
            n.d(t, {
                Au: () => s,
                Dj: () => i,
                K: () => g,
                PH: () => r,
                PV: () => m,
                Pi: () => b,
                QX: () => d,
                SC: () => a,
                Uf: () => h,
                VY: () => p,
                YF: () => c,
                _7: () => u,
                bD: () => l,
                xD: () => f,
                xK: () => y
            });
            var o = n(38874),
                r = (0, o.css)(["width:100%;height:100%;"]),
                i = function(e) {
                    var t = e.isInlineFlex,
                        n = e.alignItems,
                        o = e.justifyContent,
                        r = e.alignContent,
                        i = e.isWrap,
                        a = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(n && "align-items: ".concat(n), ";\n  ").concat(o && "justify-content: ".concat(o), ";\n  ").concat(r && "align-content: ".concat(r), ";\n  ").concat(i && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                },
                a = (0, o.css)(["border:1px solid;border-color:var(--mainLayoutBorderColor);"]),
                s = (0, o.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                c = (0, o.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                l = function(e) {
                    var t = e.isFixed;
                    return "\n\tposition: ".concat(t ? "fixed" : "absolute", ";\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n")
                },
                d = (0, o.css)(["position:relative;margin-top:0.5em;overflow-y:auto;scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.1875em;height:0.1875em;margin-right:-1em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{height:0.1875em;background:rgba(var(--white),0.2);border-radius:0.1875em;margin-right:0;}"]),
                u = (0, o.css)(["position:relative;scrollbar-color:transparent transparent;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{width:0.25em;height:0.25em;background-color:transparent;display:none;}&::-webkit-scrollbar-track-piece{background-color:transparent;}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:transparent;border-radius:0.25em;}&::-webkit-scrollbar-thumb:horizontal{width:0;height:0;background:transparent;}"]),
                m = ((0, o.css)(["", ";width:1.5em;height:1.5em;cursor:pointer;position:absolute;right:0;"], i({
                    alignItems: "center",
                    justifyContent: "center"
                })), function(e) {
                    var t = e.isSm,
                        n = e.hasTopSpacing,
                        o = void 0 !== n && n,
                        r = e.hasOpacity,
                        i = void 0 !== r && r;
                    return "\n\tposition: absolute;\n\tcursor: pointer;\n\tright: 1em;\n\t".concat(o && "top: 1em", ";\n\t").concat(i && "opacity: 0.8", ";\n\tz-index: 2;\n\n\tsvg {\n\t\theight: ").concat(t ? "1.5em" : "1.75em", ";\n\t\twidth: ").concat(t ? "1.5em" : "1.75em", ";\n\t}\n")
                }),
                f = (0, o.css)(["&:hover{opacity:0.9;}"]),
                b = (0, o.css)(["@-moz-document url-prefix(){&{background:#272727;}}"]),
                p = (0, o.css)(["", ";", ";background:rgba(var(--black),0.12);backdrop-filter:blur(100px);-webkit-backdrop-filter:blur(100px);position:fixed;z-index:4;top:0;left:0;"], r, b),
                g = (0, o.css)(["position:relative;padding:2.5em 0.75em 1em;"]),
                h = (0, o.css)(["width:1.5em;height:1.5em;cursor:pointer;display:flex;position:absolute;right:1.5em;top:1.625em;"]),
                y = (0, o.css)(["", ";font:0.875em/1.2 var(--mainFont);text-align:center;letter-spacing:0.96px;margin:0;text-shadow:0 0 8px rgba(var(--black),0.4);"], s)
        },
        37793(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(91836),
                c = n(91290),
                l = n(40194),
                d = n(74848),
                u = (0, i.memo)(a.default.button.withConfig({
                    componentId: "sc-hkfin8-0"
                })(["", ";", ";width:1.75em;height:1.75em;flex:0 0 1.75em;border-color:rgba(var(--white),0.1) rgba(var(--white),0.2) rgba(var(--white),0.336);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);cursor:pointer;z-index:1;"], l.styledFlex, (0, l.styledButton)({
                    padding: "0.375em",
                    border: "1px solid",
                    borderRadius: "50%",
                    background: "rgba(var(--white), 0.08)"
                })));

            function m(e) {
                var t = e.isAnimate,
                    n = e.toggleAnimationHandler,
                    o = e.styles,
                    r = e.color;
                return (0, d.jsx)(u, {
                    type: "button",
                    style: o.container,
                    onClick: n,
                    children: t ? (0, d.jsx)(s.default, {
                        color: r
                    }) : (0, d.jsx)(c.default, {
                        color: r
                    })
                })
            }
            m.defaultProps = {
                toggleAnimationHandler: null,
                isAnimate: !1,
                styles: {},
                color: "#fff"
            }, m.propTypes = {
                toggleAnimationHandler: r().func,
                isAnimate: r().bool,
                styles: r().object,
                color: r().string
            };
            const f = (0, i.memo)(m)
        },
        35340(e, t, n) {
            n.r(t), n.d(t, {
                default: () => O
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(94206),
                c = n(24659),
                l = n(21006),
                d = n(90358),
                u = n(79555),
                m = n(55103),
                f = n(74848),
                b = (0, u.getIsMobile)(),
                p = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-jlsabs-0"
                })(["", ";font:1em var(--mainFont);"], (0, m.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center"
                }))),
                g = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-jlsabs-1"
                })(["", ";padding:1px;background:var(--bonusButtonLayer1,linear-gradient(0deg,#38ffaf 30.96%,#50a927));border-radius:0.375em;height:1.5em;cursor:pointer;", ";"], (0, m.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center"
                }), function(e) {
                    return e.isLandscape && (0, a.css)(["margin-right:0.5em;"])
                })),
                h = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-jlsabs-2"
                })(["", ";background:var( --bonusButtonLayer2,linear-gradient(129.07deg,rgba(140,195,24,0.8) -30.86%,rgba(21,145,56,0.8) 77.6%) );border-radius:0.375em;height:100%;width:100%;padding:0 0.375em;"], (0, m.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center"
                }))),
                y = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-jlsabs-3"
                })(["width:1.25em;height:1.25em;display:inline-flex;vertical-align:middle;cursor:pointer;font-size:1em;position:relative;"])),
                v = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-jlsabs-4"
                })(["width:1.5em;height:1.5em;display:inline-flex;vertical-align:middle;cursor:pointer;font-size:1em;position:relative;margin:0;"])),
                x = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-jlsabs-5"
                })(["", ";min-width:1em;height:1em;line-height:1em;border-radius:50%;background:linear-gradient(129.07deg,#e22424 -30.86%,#ac0000 77.6%) padding-box,linear-gradient(211.29deg,#ac0000 23.55%,rgba(255,94,94,0.8) 98.7%) border-box;text-align:center;position:absolute;top:-0.375em;right:-0.375em;border:1px solid transparent;"], (0, m.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                C = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-jlsabs-6"
                })(["font-size:0.5em;color:rgb(var(--white));line-height:1;"])),
                w = (0, o.memo)(a.default.p.withConfig({
                    componentId: "sc-jlsabs-7"
                })(["font:0.5em var(--mainFont);letter-spacing:0.04em;color:rgba(var(--white),0.7);margin:0;"])),
                k = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-jlsabs-8"
                })(["", ';text-align:left;color:rgba(var(--white),0.8);padding-left:0.25em;margin-left:0.25em;position:relative;&:before{content:"";display:block;background:rgba(var(--white),0.4);border-radius:0.5em;width:1px;height:0.375em;position:absolute;left:0;top:0;bottom:0;margin:auto;}'], (0, m.Dj)({
                    justifyContent: "flex-start",
                    flexDirection: "column"
                }))),
                j = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-jlsabs-9"
                })(["color:rgb(var(--white));font:0.625em var(--mainFontMedium);letter-spacing:0.02em;margin:0 0.2em;"])),
                I = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-jlsabs-10"
                })(["", ";"], (0, m.Dj)({
                    alignItems: "center"
                }))),
                B = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-jlsabs-11"
                })(["color:rgba(var(--white),0.5);letter-spacing:0.02em;font:0.5em var(--mainFont);"]));

            function S(e) {
                var t, n = e.selectedBonus,
                    o = e.currencyId,
                    r = e.bonuses,
                    i = e.onClick,
                    a = e.resources,
                    u = e.styles,
                    m = e.parentId,
                    S = b && !(0, s.useOrientationChange)(),
                    O = a.strFreeBet,
                    _ = a.strFreeAmount,
                    P = n || {},
                    H = P.bet,
                    T = P.remainingBet,
                    L = P.remainingCount,
                    F = "";
                switch (P.type) {
                    case c.BonusTypes.FreeBet:
                        F = (0, f.jsxs)(k, {
                            style: u.selectedBonusText,
                            "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt"),
                            children: [(0, f.jsx)(w, {
                                style: u.bonusName,
                                "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt_bonus-name"),
                                children: O || "_Free Bet"
                            }), (0, f.jsxs)(I, {
                                style: u.countAndCurrency,
                                children: [(0, f.jsxs)(j, {
                                    style: u.remainingCount,
                                    "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt_remaining-count"),
                                    children: ["x", L, " /", H]
                                }), (0, f.jsx)(B, {
                                    style: u.currencyId,
                                    "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt_currency-id"),
                                    children: o
                                })]
                            })]
                        });
                        break;
                    case c.BonusTypes.FreeAmount:
                        F = (0, f.jsxs)(k, {
                            style: u.selectedBonusText,
                            "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt"),
                            children: [(0, f.jsx)(w, {
                                style: u.bonusName,
                                "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt_bonus-name"),
                                children: _ || "_Free Amount"
                            }), (0, f.jsxs)(I, {
                                style: u.countAndCurrency,
                                children: [(0, f.jsx)(j, {
                                    style: u.remainingCount,
                                    "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt_remaining-count"),
                                    children: T
                                }), (0, f.jsx)(B, {
                                    style: u.currencyId,
                                    "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_sel-bonus-txt_currency-id"),
                                    children: o
                                })]
                            })]
                        })
                }
                return !(null == r || null === (t = r.list) || void 0 === t || !t.length) && (0, f.jsx)(p, {
                    style: u.container,
                    "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button"),
                    children: r.selected ? (0, f.jsx)(g, {
                        onClick: i,
                        isLandscape: S,
                        "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box"),
                        children: (0, f.jsxs)(h, {
                            "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_inner"),
                            children: [(0, f.jsx)(y, {
                                style: u.icon,
                                "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-bonus-box_inner_icon"),
                                children: (0, f.jsx)(l.default, {
                                    color: "#fff"
                                })
                            }), F]
                        })
                    }) : (0, f.jsxs)(v, {
                        style: u.icon,
                        isLandscape: S,
                        onClick: i,
                        "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-icon"),
                        children: [(0, f.jsx)(d.default, {
                            color: "#fff"
                        }), (0, f.jsx)(x, {
                            style: u.badge,
                            children: (0, f.jsx)(C, {
                                "data-testid": "".concat(m ? "".concat(m, "_") : "", "global-bonus-button_active-icon_badge-text"),
                                children: r.list.length
                            })
                        })]
                    })
                })
            }
            S.defaultProps = {
                selectedBonus: null,
                currencyId: "",
                onClick: function() {},
                bonuses: {
                    list: [],
                    selected: null,
                    enabled: null
                },
                resources: {},
                styles: {},
                parentId: ""
            }, S.propTypes = {
                selectedBonus: i().oneOfType([i().object, i().bool]),
                currencyId: i().string,
                onClick: i().func,
                bonuses: i().object,
                resources: i().object,
                styles: i().object,
                parentId: i().string
            };
            const O = S
        },
        47144(e, t, n) {
            n.r(t), n.d(t, {
                default: () => v
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(32680),
                c = n(79555),
                l = n(34269),
                d = n(40194),
                u = n(74848);

            function m(e) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, m(e)
            }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        p(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
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
            var g = (0, c.getIsMobile)(),
                h = a.default.button.withConfig({
                    componentId: "sc-1dob0yp-0"
                })(["", ";", ";position:relative;width:", ";height:", ";flex:0 0 ", ";", ";", ";"], (0, d.styledFlex)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), d.styledButton, g ? "1.25em" : "1.875em", g ? "1.25em" : "1.875em", g ? "1.25em" : "1.875em", !g && (0, a.css)(["", ";border-radius:50%;background:rgba(var(--white),0.08);"], l.SC), function(e) {
                    return e.isLandscape && (0, a.css)(["width:1.5em;height:1.5em;flex:0 0 1.5em;"])
                });

            function y(e) {
                var t = e.styles,
                    n = e.openMenu,
                    o = e.isLandscape;
                return (0, u.jsx)(h, {
                    style: b(b({}, t.iconBtn), t.menuBtn),
                    onClick: n,
                    "data-gtm": "Game Menu",
                    isLandscape: o,
                    children: (0, u.jsx)(s.default, {
                        color: t.iconColor || "rgb(var(--white))"
                    })
                })
            }
            y.defaultProps = {
                styles: {},
                openMenu: function() {},
                isLandscape: !1
            }, y.propTypes = {
                styles: r().object,
                openMenu: r().func,
                isLandscape: r().bool
            };
            const v = (0, i.memo)(y)
        },
        29213(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(40194),
                c = n(74848),
                l = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-m2u29z-0"
                })(["", ";", ";border-radius:0.5em;text-transform:uppercase;position:relative;font:inherit;outline:none;&:hover{opacity:0.9;}& span{position:relative;z-index:1;vertical-align:middle;}", ";", ";"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), s.fullSize, function(e) {
                    return e.primary && (0, a.css)(["background:#fdae32;color:#000000;"])
                }, function(e) {
                    return e.secondary && (0, a.css)(["background:#ccc;color:white;"])
                })),
                d = (0, a.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),
                u = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-m2u29z-1"
                })(["border:2px solid transparent;border-radius:50%;border-top:2px solid #fff;width:1.5em;height:1.5em;animation:", " 2s linear infinite;display:block;margin:auto;"], d));

            function m(e) {
                var t = e.children,
                    n = e.onClick,
                    r = e.className,
                    i = e.styles,
                    a = (0, o.useCallback)(function(e) {
                        t && n(e)
                    }, [n]);
                return (0, c.jsx)(l, {
                    style: i.container,
                    className: r,
                    onClick: a,
                    children: t || (0, c.jsx)(u, {})
                })
            }
            m.defaultProps = {
                className: "",
                children: null,
                styles: {
                    container: {}
                },
                onClick: function() {}
            }, m.propTypes = {
                className: i().any,
                children: i().any,
                styles: i().shape({
                    container: i().object
                }),
                onClick: i().func
            };
            const f = (0, o.memo)(m)
        },
        66710(e, t, n) {
            n.r(t), n.d(t, {
                default: () => k
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(26517),
                c = n(58100),
                l = n(55103),
                d = n(74848),
                u = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-j7jak-0"
                })(["width:1.125em;height:calc(100% - 0.5em);position:absolute;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:flex-end;border-radius:0.5em;"])),
                m = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-j7jak-1"
                })(["background:linear-gradient(#feffcd,#feffcd),linear-gradient(#ffee85,#ffee85);width:100%;transition:height 0.2s linear;height:", ";"], function(e) {
                    var t = e.percent;
                    return "".concat(t, "%")
                })),
                f = function(e) {
                    var t = e.percent,
                        n = e.styles;
                    return (0, d.jsx)(u, {
                        style: n.container,
                        children: (0, d.jsx)(m, {
                            style: n.progress,
                            percent: t
                        })
                    })
                };
            f.defaultProps = {
                percent: 0,
                styles: {}
            }, f.propTypes = {
                percent: i().number,
                styles: i().object
            };
            const b = (0, o.memo)(f);
            var p = n(24659),
                g = "".concat(p.CDN_URL, "/images/cashback/shadow.webp"),
                h = (0, a.keyframes)(["0%{transform:scale(1);}50%{transform:scale(1.875);}100%{transform:scale(1);}"]),
                y = (0, a.keyframes)(["from{opacity:0.6;}to{opacity:0;}"]),
                v = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-1sggkf5-0"
                })(["", ";width:1.5em;height:1.5em;cursor:pointer;position:relative;z-index:1;"], (0, l.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                x = a.default.span.withConfig({
                    componentId: "sc-1sggkf5-1"
                })(["", ";width:1.5em;height:1.5em;pointer-events:none;position:absolute;z-index:2;-webkit-transform:translate3d(0,0,0);& > svg{-webkit-transform:translate3d(0,0,0);}"], l.Dj),
                C = a.default.div.withConfig({
                    componentId: "sc-1sggkf5-2"
                })(["width:100%;height:100%;background:url(", ") no-repeat center / contain;position:absolute;z-index:2;left:0;top:0;opacity:0.6;pointer-events:none;", ""], g, function(e) {
                    return e.glowView ? (0, a.css)(["animation:", " 1s linear infinite;"], h) : (0, a.css)(["animation:", " 0.6s linear forwards;"], y)
                }),
                w = function(e) {
                    var t = e.styles,
                        n = e.onClick,
                        o = e.isGlow,
                        r = e.percent;
                    return (0, d.jsxs)(v, {
                        style: t.container,
                        onClick: n,
                        children: [(0, d.jsx)(C, {
                            style: t.glow,
                            glowView: o
                        }), (0, d.jsx)(x, {
                            style: t.icon,
                            children: (0, d.jsx)(s.default, {})
                        }), (0, d.jsx)(b, {
                            styles: t.progress,
                            percent: r
                        }), 100 === r ? (0, d.jsx)(c.default, {
                            isAnimated: !0
                        }) : null]
                    })
                };
            w.defaultProps = {
                onClick: function() {},
                isGlow: !1,
                percent: 0,
                styles: {}
            }, w.propTypes = {
                percent: i().number,
                styles: i().object,
                onClick: i().func,
                isGlow: i().bool
            };
            const k = w
        },
        47573(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(5052),
                c = n(40194),
                l = n(74848),
                d = (0, i.memo)(a.default.button.withConfig({
                    componentId: "sc-2n75kv-0"
                })(["", ";", ";flex:0 0 1.75em;width:1.75em;height:1.75em;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-color:rgba(var(--white),0.1) rgba(var(--white),0.2) rgba(var(--white),0.336);position:absolute;z-index:1;"], c.styledFlex, (0, c.styledButton)({
                    padding: "0.375em",
                    border: "1px solid",
                    borderRadius: "50%",
                    background: "rgba(var(--white), 0.08)"
                }))),
                u = (0, i.memo)(a.default.span.withConfig({
                    componentId: "sc-2n75kv-1"
                })(["display:inline-block;position:absolute;height:0.5em;width:0.5em;top:0;right:0;background-color:#f04242;border-radius:50%;"]));

            function m(e) {
                var t = e.styles,
                    n = e.color,
                    o = e.stroke,
                    r = e.onClick,
                    i = e.badgeIsActive;
                return (0, l.jsxs)(d, {
                    type: "button",
                    style: t.container,
                    onClick: r,
                    children: [(0, l.jsx)(s.Chat, {
                        color: n || "#fff",
                        stroke: o
                    }), i && (0, l.jsx)(u, {
                        style: t.badge
                    })]
                })
            }
            m.defaultProps = {
                styles: {},
                onClick: function() {},
                color: "",
                stroke: "",
                badgeIsActive: !1
            }, m.propTypes = {
                styles: r().object,
                onClick: r().func,
                color: r().string,
                stroke: r().string,
                badgeIsActive: r().bool
            };
            const f = (0, i.memo)(m)
        },
        42305(e, t, n) {
            n.r(t), n.d(t, {
                default: () => m
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(5623),
                c = n(40194),
                l = n(74848),
                d = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-1i6w6aj-0"
                })(["", ";", ";flex:0 0 1.75em;height:1.75em;width:1.75em;"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), (0, c.styledButton)({
                    padding: "0.25em",
                    border: "1px solid rgba(var(--white), 0.32)",
                    borderRadius: "50%",
                    background: "rgba(var(--white), 0.16)"
                }))),
                u = function(e) {
                    var t = e.onClick,
                        n = e.color,
                        o = e.styles;
                    return (0, l.jsx)(d, {
                        "data-gtm": "Hash Code",
                        type: "button",
                        style: o.checkIcon,
                        onClick: t,
                        children: (0, l.jsx)(s.default, {
                            color: n || "#fff"
                        })
                    })
                };
            u.defaultProps = {
                color: "",
                styles: {
                    checkIcon: {}
                },
                onClick: function() {}
            }, u.propTypes = {
                color: i().string,
                styles: i().shape({
                    checkIcon: i().object
                }),
                onClick: i().func
            };
            const m = (0, o.memo)(u)
        },
        48736(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(92226),
                c = n(50611),
                l = n(74848);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var u = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-dx403m-0"
                })(["", ""], c.HistoryButton)),
                m = function(e) {
                    var t, n, r = e.color,
                        i = e.styles,
                        a = e.url,
                        c = (t = (0, o.useState)(!0), n = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var o, r, i, a, s = [],
                                    c = !0,
                                    l = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        c = !1
                                    } else
                                        for (; !(c = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); c = !0);
                                } catch (e) {
                                    l = !0, r = e
                                } finally {
                                    try {
                                        if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (l) throw r
                                    }
                                }
                                return s
                            }
                        }(t, n) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return d(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                            }
                        }(t, n) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        m = c[0],
                        f = c[1];
                    return (0, o.useEffect)(function() {
                        if (!m) {
                            var e = setTimeout(function() {
                                f(!0)
                            }, 1500);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }, [m]), (0, l.jsx)(u, {
                        "data-gtm": "Hash Code",
                        type: "button",
                        style: i.historyButton,
                        onClick: function() {
                            if (a) {
                                var e = document.createElement("textarea");
                                e.innerText = a, document.body.appendChild(e), e.select(), document.execCommand("copy"), e.remove()
                            }
                            f(!1)
                        },
                        children: m ? (0, l.jsx)(s.Copy, {
                            color: r || "#fff"
                        }) : (0, l.jsx)(s.Check, {
                            color: r || "#fff"
                        })
                    })
                };
            m.defaultProps = {
                color: "#fff",
                styles: {},
                url: ""
            }, m.propTypes = {
                color: i().string,
                styles: i().object,
                url: i().string
            };
            const f = (0, o.memo)(m)
        },
        69894(e, t, n) {
            n.r(t), n.d(t, {
                default: () => m
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(85002),
                c = n(50611),
                l = n(74848),
                d = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-kbecu3-0"
                })(["", ""], c.HistoryButton)),
                u = function(e) {
                    var t = e.color,
                        n = e.styles,
                        r = e.onClick,
                        i = (0, o.useRef)();
                    return (0, l.jsx)(d, {
                        ref: i,
                        "data-gtm": "Hash Code",
                        type: "button",
                        style: n.historyButton,
                        onClick: function() {
                            var e, t;
                            r(), null != i && i.current && (null === (e = i.current) || void 0 === e || null === (t = e.blur) || void 0 === t || t.call(e))
                        },
                        children: (0, l.jsx)(s.default, {
                            color: t || "#fff"
                        })
                    })
                };
            u.defaultProps = {
                color: "#fff",
                styles: {},
                onClick: function() {}
            }, u.propTypes = {
                color: i().string,
                styles: i().object,
                onClick: i().func
            };
            const m = (0, o.memo)(u)
        },
        94588(e, t, n) {
            n.r(t), n.d(t, {
                default: () => b
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(48076),
                c = n(79555),
                l = n(50611),
                d = n(74848),
                u = (0, c.getIsMobile)(),
                m = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-l0jm1n-0"
                })(["", ";margin-right:", ";"], l.HistoryButton, u ? "1.5em" : 0)),
                f = function(e) {
                    var t = e.color,
                        n = e.styles,
                        o = e.onClick;
                    return (0, d.jsx)(m, {
                        "data-gtm": "Hash Code",
                        type: "button",
                        style: n.historyButton,
                        onClick: o,
                        children: (0, d.jsx)(s.default, {
                            color: t || "#fff"
                        })
                    })
                };
            f.defaultProps = {
                color: "#fff",
                styles: {},
                onClick: function() {}
            }, f.propTypes = {
                color: i().string,
                styles: i().object,
                onClick: i().func
            };
            const b = (0, o.memo)(f)
        },
        50611(e, t, n) {
            n.r(t), n.d(t, {
                HistoryButton: () => s
            });
            var o = n(38874),
                r = n(79555),
                i = n(40194),
                a = (0, r.getIsMobile)(),
                s = (0, o.css)(["", ";", ";flex:0 0 1.5em;height:1.5em;width:1.5em;font-size:", ";"], (0, i.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), i.styledButton, a ? "1em" : "1.34em")
        },
        67085(e, t, n) {
            n.r(t), n.d(t, {
                default: () => h
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(55103),
                c = n(24659),
                l = n(74848),
                d = "".concat(c.CDN_URL, "/images/jackpot/sprite.webp"),
                u = (0, a.keyframes)(["from{background-position-x:0;}to{background-position-x:-21.875em;}"]),
                m = (0, a.keyframes)(["from{background-position-y:0;}to{background-position-y:-10.5em;}"]),
                f = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-nqjfbj-0"
                })(["", ";width:3.125em;height:1.5em;padding:1px;background:linear-gradient(181deg,#e4a93f 2.43%,#e7c58c 99.55%);border-radius:0.375em;border:0 none;font-size:1em;cursor:pointer;z-index:1;"], (0, s.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                b = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-nqjfbj-1"
                })(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:0.375em;background:linear-gradient(102deg,#ffba3c 7.9%,#ae7009 99.82%);"])),
                p = a.default.span.withConfig({
                    componentId: "sc-nqjfbj-2"
                })(["width:100%;height:100%;background:url(", ") no-repeat 0 0/21.875em 10.5em;animation:", " 0.3s steps(7) infinite,", " 2.1s steps(7) infinite;"], d, u, m);

            function g(e) {
                var t = e.styles,
                    n = e.handleClick,
                    o = e.isLandscape;
                return (0, l.jsx)(f, {
                    style: t.container,
                    onClick: n,
                    isLandscape: o,
                    children: (0, l.jsx)(b, {
                        style: t.containerInner,
                        children: (0, l.jsx)(p, {})
                    })
                })
            }
            g.defaultProps = {
                styles: {},
                handleClick: function() {},
                isLandscape: !1
            }, g.propTypes = {
                styles: i().object,
                handleClick: i().func,
                isLandscape: i().bool
            };
            const h = g
        },
        23824(e, t, n) {
            n.r(t), n.d(t, {
                default: () => m
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(77192),
                c = n(40194),
                l = n(74848),
                d = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-1g3u17a-0"
                })(["", " flex:0 0 1.5em;width:1.5em;height:1.5em;"], (0, c.styledButton)({
                    background: "linear-gradient(180deg, #ff7e00 0%, #f03c27 99.38%)",
                    border: "1px solid",
                    borderColor: "rgba(var(--white), 0.3) rgba(255, 171, 124, 0.7) rgb(255, 171, 124)",
                    borderRadius: "0.375em"
                })));

            function u(e) {
                var t = e.styles,
                    n = e.openPopup,
                    o = e.isLandscape;
                return (0, l.jsx)(d, {
                    onClick: n,
                    style: t.container,
                    isLandscape: o,
                    children: (0, l.jsx)(s.default, {})
                })
            }
            u.defaultProps = {
                openPopup: function() {},
                styles: {},
                isLandscape: !1
            }, u.propTypes = {
                openPopup: i().func,
                styles: i().object,
                isLandscape: i().bool
            };
            const m = u
        },
        71568(e, t, n) {
            n.r(t), n.d(t, {
                default: () => b
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(79555),
                c = n(40194),
                l = n(74848),
                d = (0, s.getIsMobile)(),
                u = (0, o.memo)(a.default.button.withConfig({
                    componentId: "sc-691kmx-0"
                })(["", ";", ";height:", ";width:", ";flex:0 0 ", ";"], (0, c.styledButton)({
                    padding: "0.375em",
                    border: "1px solid transparent",
                    borderRadius: "50%",
                    background: "linear-gradient(#ffbf5a, #885406) padding-box, linear-gradient(#90652375, #ffbf5a) border-box"
                }), (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), d ? "1.5em" : "1.125em", d ? "1.5em" : "1.125em", d ? "1.5em" : "1.125em")),
                m = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-691kmx-1"
                })(["color:rgba(var(--white));font-size:0.875em;"]));

            function f(e) {
                var t = e.onClick,
                    n = e.styles;
                return (0, l.jsx)(u, {
                    type: "button",
                    style: n.checkIcon,
                    onClick: t,
                    children: (0, l.jsx)(m, {
                        children: "i"
                    })
                })
            }
            f.defaultProps = {
                styles: {
                    checkIcon: {}
                },
                onClick: function() {}
            }, f.propTypes = {
                styles: i().shape({
                    checkIcon: i().object
                }),
                onClick: i().func
            };
            const b = (0, o.memo)(f)
        },
        23692(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(41783),
                c = n(37625),
                l = n(96637),
                d = n(74848),
                u = (0, i.memo)(a.default.button.withConfig({
                    componentId: "sc-pvsgdj-0"
                })(["display:flex;align-items:center;cursor:pointer;border:0 none;background:transparent;font-size:1em;height:1.5em;width:1.5em;flex:0 0 1.5em;"]));

            function m(e) {
                var t = e.music,
                    n = e.setMusic,
                    o = e.styles,
                    r = e.color,
                    a = e.stroke,
                    m = (0, i.useCallback)(function() {
                        var e = !(null != t && t.isOn);
                        n(e), null === s.default || void 0 === s.default || s.default.setItem("isMusicOn", e)
                    }, [t]);
                return (0, d.jsx)(u, {
                    onClick: m,
                    "data-gtm": "Sound",
                    style: o.container,
                    children: t.isOn ? (0, d.jsx)(c.default, {
                        color: r || "#fff",
                        stroke: a
                    }) : (0, d.jsx)(l.default, {
                        color: r || "#fff",
                        stroke: a
                    })
                })
            }
            m.defaultProps = {
                music: {},
                setMusic: function() {},
                styles: {},
                color: "#fff",
                stroke: ""
            }, m.propTypes = {
                music: r().object,
                setMusic: r().func,
                styles: r().object,
                color: r().string,
                stroke: r().string
            };
            const f = (0, i.memo)(m)
        },
        4126(e, t, n) {
            n.r(t), n.d(t, {
                default: () => m
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(37625),
                c = n(96637),
                l = n(74848),
                d = (0, i.memo)(a.default.button.withConfig({
                    componentId: "sc-1t4krr-0"
                })(["display:flex;flex:0 0 1.5em;height:1.5em;width:1.5em;font-size:1em;outline:0 none;border:0 none;padding:0;background:transparent;cursor:pointer;"]));

            function u(e) {
                var t = e.isSoundOn,
                    n = e.toggleSoundHandler,
                    o = e.styles,
                    r = e.color,
                    i = e.stroke;
                return (0, l.jsx)(d, {
                    type: "button",
                    "data-gtm": "Sound",
                    onClick: n,
                    style: o.container,
                    children: t ? (0, l.jsx)(s.default, {
                        color: r || "#fff",
                        stroke: i
                    }) : (0, l.jsx)(c.default, {
                        color: r || "#fff",
                        stroke: i
                    })
                })
            }
            u.defaultProps = {
                isSoundOn: !1,
                toggleSoundHandler: null,
                styles: {},
                color: "#fff",
                stroke: ""
            }, u.propTypes = {
                isSoundOn: r().bool,
                toggleSoundHandler: null,
                styles: r().object,
                color: r().string,
                stroke: r().string
            };
            const m = (0, i.memo)(u)
        },
        24562(e, t, n) {
            n.r(t), n.d(t, {
                default: () => b
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(41783),
                c = n(76653),
                l = n(37625),
                d = n(96637),
                u = n(74848),
                m = (0, i.memo)(a.default.button.withConfig({
                    componentId: "sc-8knxuw-0"
                })(["display:flex;flex:0 0 1.5em;height:1.5em;width:1.5em;font-size:1em;outline:0 none;border:0 none;padding:0;background:transparent;cursor:pointer;"]));

            function f(e) {
                var t = e.sound,
                    n = e.music,
                    o = e.setSound,
                    r = e.setMusic,
                    a = e.styles,
                    f = e.color,
                    b = e.stroke,
                    p = e.callback,
                    g = (0, c.useDispatch)(),
                    h = (0, i.useCallback)(function() {
                        "function" == typeof p && p(g);
                        var e = !(null != t && t.isOn || null != n && n.isOn);
                        o(e), r(e), null === s.default || void 0 === s.default || s.default.setItem("isSoundOn", e), null === s.default || void 0 === s.default || s.default.setItem("isMusicOn", e)
                    }, [t, n]);
                return (0, u.jsx)(m, {
                    type: "button",
                    "data-gtm": "Sound",
                    onClick: h,
                    style: a.container,
                    children: t.isOn || n.isOn ? (0, u.jsx)(l.default, {
                        color: f || "#fff",
                        stroke: b
                    }) : (0, u.jsx)(d.default, {
                        color: f || "#fff",
                        stroke: b
                    })
                })
            }
            f.defaultProps = {
                sound: {},
                setSound: function() {},
                music: {},
                setMusic: function() {},
                styles: {},
                color: "#fff",
                stroke: ""
            }, f.propTypes = {
                sound: r().object,
                setSound: r().func,
                music: r().object,
                setMusic: r().func,
                styles: r().object,
                color: r().string,
                stroke: r().string
            };
            const b = (0, i.memo)(f)
        },
        90732(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(5556),
                r = n.n(o),
                i = n(98283),
                a = n(38874),
                s = n(41783),
                c = n(65305),
                l = n(31197),
                d = n(74848),
                u = (0, i.memo)(a.default.button.withConfig({
                    componentId: "sc-sdqquu-0"
                })(["display:flex;align-items:center;justify-content:center;height:1.5em;width:1.5em;flex:0 0 1.5em;border:0 none;background:transparent;cursor:pointer;font-size:1em;"]));

            function m(e) {
                var t = e.sound,
                    n = e.setSound,
                    o = e.styles,
                    r = e.color,
                    a = e.stroke,
                    m = (0, i.useCallback)(function() {
                        var e = !(null != t && t.isOn);
                        n(e), null === s.default || void 0 === s.default || s.default.setItem("isSoundOn", e)
                    }, [t]);
                return (0, d.jsx)(u, {
                    onClick: m,
                    style: o.container,
                    children: t.isOn ? (0, d.jsx)(c.default, {
                        color: r || "#fff",
                        stroke: a
                    }) : (0, d.jsx)(l.default, {
                        color: r || "#fff",
                        stroke: a
                    })
                })
            }
            m.defaultProps = {
                sound: {},
                setSound: function() {},
                styles: {},
                color: "#fff",
                stroke: ""
            }, m.propTypes = {
                sound: r().object,
                setSound: r().func,
                styles: r().object,
                color: r().string,
                stroke: r().string
            };
            const f = (0, i.memo)(m)
        },
        39804(e, t, n) {
            n.r(t), n.d(t, {
                default: () => p
            });
            var o = n(98283),
                r = n(38874),
                i = n(55103),
                a = n(5556),
                s = n.n(a),
                c = {
                    className: s().string,
                    handleClick: s().func,
                    children: s().element
                },
                l = n(74848);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var u = (0, o.memo)(r.default.button.withConfig({
                    componentId: "sc-10yfeqi-0"
                })(["", ";flex:0 0 2.875em;height:100%;padding:1em;color:rgba(var(--white),0.7);line-height:2.875em;text-align:center;border:0 none;font-size:1em;background:transparent;cursor:pointer;"], (0, i.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                m = null,
                f = null;

            function b(e) {
                var t, n, r = e.children,
                    i = e.className,
                    a = e.handleClick,
                    s = (t = (0, o.useState)(!1), n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var o, r, i, a, s = [],
                                c = !0,
                                l = !1;
                            try {
                                if (i = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    c = !1
                                } else
                                    for (; !(c = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); c = !0);
                            } catch (e) {
                                l = !0, r = e
                            } finally {
                                try {
                                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                                } finally {
                                    if (l) throw r
                                }
                            }
                            return s
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return d(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                        }
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    c = s[0],
                    b = s[1],
                    p = function() {
                        return b(!0)
                    },
                    g = function() {
                        return b(!1)
                    };
                return (0, o.useEffect)(function() {
                    return m && clearInterval(m), f && clearTimeout(f), c && (f = setTimeout(function() {
                            m = setInterval(a, 150)
                        }, 300)),
                        function() {
                            clearInterval(m), clearTimeout(f)
                        }
                }, [c]), (0, l.jsx)(u, {
                    type: "button",
                    className: i,
                    onClick: a,
                    onMouseDown: p,
                    onTouchStart: p,
                    onMouseUp: g,
                    onMouseLeave: g,
                    onTouchEnd: g,
                    children: r
                })
            }
            b.defaultProps = {
                className: "",
                handleClick: function() {},
                children: null
            }, b.propTypes = c;
            const p = (0, o.memo)(b)
        },
        1754(e, t, n) {
            n.r(t), n.d(t, {
                default: () => y
            });
            var o = n(98283),
                r = n(38874),
                i = n(5556),
                a = n.n(i),
                s = {
                    dataGtm: a().string,
                    isLoading: a().bool,
                    checked: a().bool,
                    disabledSwitcher: a().bool,
                    onChange: a().func,
                    styles: a().shape({
                        container: a().object,
                        width: a().string,
                        height: a().string,
                        circleWidth: a().string,
                        circleHeight: a().string,
                        circleBackground: a().string,
                        activeCircleBackground: a().string
                    }),
                    id: a().string,
                    testId: a().string
                },
                c = n(61101),
                l = n(74848);

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        f(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function f(e, t, n) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != d(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != d(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == d(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var b = (0, o.memo)(r.default.div.withConfig({
                    componentId: "sc-1peq7es-0"
                })(["display:inline-block;vertical-align:middle;margin-inline-start:0.5em;"])),
                p = (0, o.memo)(r.default.label.withConfig({
                    componentId: "sc-1peq7es-1"
                })(["display:flex;align-items:center;outline:0 none;text-indent:-9999px;padding:2px;width:", ";height:", ";background:", ";border:", ";border-color:", ';border-radius:2em;box-shadow:inset 0 0 10px rgba(var(--black),0.24);position:relative;transition:all 0.3s ease;user-select:none;cursor:pointer;&:after{content:"";display:block;box-sizing:border-box;border:', ";border-color:", ";flex:0 0 ", ";width:", ";height:", ";border-radius:2em;background:", ";transition:left 0.3s cubic-bezier(0.175,0.885,0.32,1.275),padding 0.3s ease,margin 0.3s ease;position:relative;left:0;}"], function(e) {
                    return e.width || "2.125em"
                }, function(e) {
                    return e.height || "1.125em"
                }, function(e) {
                    return e.labelBackground || "linear-gradient(90deg, rgba(var(--white), 0.05) 4.92%, rgba(var(--white), 0.1) 100%)"
                }, function(e) {
                    return e.labelBorderWidth || "1px solid"
                }, function(e) {
                    return e.labelBorder || "rgba(var(--white), 0.0672) rgba(var(--white), 0.2) rgba(var(--white), 0.378)"
                }, function(e) {
                    return e.circleBorder || "1px solid"
                }, function(e) {
                    return e.circleBorderColor || "rgba(var(--white), 0.2)  rgba(214, 214, 214, 0.4) rgba(214, 214, 214, 0.2)"
                }, function(e) {
                    return e.circleWidth || "0.875em"
                }, function(e) {
                    return e.circleWidth || "0.875em"
                }, function(e) {
                    return e.circleHeight || "0.875em"
                }, function(e) {
                    return e.circleBackground || "linear-gradient(129.07deg, rgba(var(--white), 0.6) -30.86%, rgba(var(--white), 0.2) 77.6%)"
                })),
                g = (0, o.memo)(r.default.input.withConfig({
                    componentId: "sc-1peq7es-2"
                })(['&[type="checkbox"]{height:0;width:0;visibility:hidden;position:absolute;}&:checked{& + label{border-color:', ";background:", ";&:after{margin-inline-start:50%;border-color:", ";background:", ";}&:active:after{margin-inline-start:0;padding-inline-end:-0.75em;}}}& + label:active:after{padding-inline-end:0.875em;}"], function(e) {
                    return e.activeLabelBorder || "rgba(1, 255, 55, 0.3) #00FF37"
                }, function(e) {
                    return e.activeLabelBackground || "linear-gradient(90deg, #24D349 4.92%, #187834 100%)"
                }, function(e) {
                    return e.activeCircleBorderColor || "rgba(var(--white) 255, 0.6) #d6d6d6"
                }, function(e) {
                    return e.activeCircleBackground || "linear-gradient(129.07deg, rgb(var(--white)) -30.86%, rgba(var(--white), 0.8) 77.6%)"
                }));

            function h(e) {
                var t = e.id,
                    n = e.checked,
                    o = e.onChange,
                    r = e.styles,
                    i = e.disabledSwitcher,
                    a = e.testId,
                    s = e.dataGtm,
                    d = e.isLoading;
                return (0, l.jsx)(b, {
                    className: "toggleBtn",
                    style: r.container,
                    "data-testid": "toggle-button",
                    "data-gtm": s || "",
                    children: d ? (0, l.jsx)(c.default, {
                        styles: {
                            container: {
                                fontSize: "0.5em",
                                position: "static"
                            }
                        }
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(g, m(m({
                            checked: n,
                            disabled: i,
                            onChange: o,
                            type: "checkbox",
                            id: t
                        }, r), {}, {
                            "data-testid": a || "toggle-input",
                            "data-gtm": s
                        })), (0, l.jsx)(p, m(m({}, r), {}, {
                            htmlFor: t,
                            "data-testid": "toggle-label"
                        }))]
                    })
                })
            }
            h.defaultProps = {
                isLoading: !1,
                dataGtm: "",
                checked: !1,
                disabledSwitcher: !1,
                onChange: function() {},
                styles: {
                    container: {}
                },
                id: "",
                testId: ""
            }, h.propTypes = s;
            const y = (0, o.memo)(h)
        },
        91300(e, t, n) {
            n.r(t), n.d(t, {
                AnimationOnOff: () => b.default,
                BonusButton: () => l.default,
                BurgerButton: () => d.default,
                Button: () => o.default,
                CashbackButton: () => p.default,
                ChatBtn: () => r.default,
                CheckBtn: () => i.default,
                CopyButton: () => y.default,
                JackpotButton: () => h.default,
                LeadBoardHeaderButton: () => v.default,
                LeaderBoardBtn: () => g.default,
                MusicToggle: () => c.default,
                NewSoundOnOff: () => m.default,
                ReplayButton: () => C.default,
                ShareButton: () => x.default,
                SoundOnOff: () => a.default,
                SoundToggle: () => s.default,
                SpinnerButtons: () => f.default,
                ToggleButton: () => u.default
            });
            var o = n(29213),
                r = n(47573),
                i = n(42305),
                a = n(24562),
                s = n(90732),
                c = n(23692),
                l = n(35340),
                d = n(47144),
                u = n(1754),
                m = n(4126),
                f = n(39804),
                b = n(37793),
                p = n(66710),
                g = n(71568),
                h = n(67085),
                y = n(48736),
                v = n(23824),
                x = n(94588),
                C = n(69894)
        },
        58100(e, t, n) {
            n.r(t), n.d(t, {
                default: () => d
            });
            var o = n(98283),
                r = n(5556),
                i = n(38874),
                a = n(74848),
                s = (0, i.keyframes)(["0%{transform:translate(50%,-50%) scale(1);}50%{transform:translate(50%,-50%) scale(1.5);}100%{transform:translate(50%,-50%) scale(1);}"]),
                c = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-u46en-0"
                })(["width:0.5em;height:0.5em;border:1px solid #eb0000;background:linear-gradient(212.74deg,#e40c0c 11.14%,#710505 86.41%);border-radius:50%;position:absolute;top:0;right:0;transform:translate(50%,-50%) scale(1);z-index:2;", ";"], function(e) {
                    return e.isAnimated && (0, i.css)(["animation:", " 1.5s linear infinite;"], s)
                }));

            function l(e) {
                var t = e.isAnimated;
                return (0, a.jsx)(c, {
                    isAnimated: t
                })
            }
            l.defaultProps = {
                isAnimated: !1
            }, l.propTypes = {
                isAnimated: r.PropTypes.bool
            };
            const d = (0, o.memo)(l)
        },
        61101(e, t, n) {
            n.r(t), n.d(t, {
                default: () => b
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(38874),
                s = n(79555),
                c = n(74848),
                l = (0, s.getIsMobile)(),
                d = (0, o.memo)(a.default.div.withConfig({
                    componentId: "sc-pzug36-0"
                })(["display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:", ";top:", ";left:0;pointer-events:none;"], l ? "calc(100% - 4.25em)" : "100%", l ? "auto" : 0)),
                u = (0, a.keyframes)(["0%,100%{box-shadow:0 -3em 0 0.2em,2em -2em 0 0em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0;}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 0.2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em;}25%{box-shadow:0 -3em 0 -0.5em,2em -2em 0 0,3em 0 0 0.2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em;}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0em 0 0,2em 2em 0 0.2em,0 3em 0 0em,-2em 2em 0 -1em,-3em 0em 0 -1em,-2em -2em 0 -1em;}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0em,0 3em 0 0.2em,-2em 2em 0 0,-3em 0em 0 -1em,-2em -2em 0 -1em;}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 0.2em,-3em 0 0 0,-2em -2em 0 -1em;}75%{box-shadow:0em -3em 0 -1em,2em -2em 0 -1em,3em 0em 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0em 0 0.2em,-2em -2em 0 0;}87.5%{box-shadow:0em -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0em 0 0,-2em -2em 0 0.2em;}"]),
                m = (0, o.memo)(a.default.span.withConfig({
                    componentId: "sc-pzug36-1"
                })(["color:rgb(var(--white));display:inline-block;font-size:0.35em;width:1em;height:1em;border-radius:50%;position:relative;text-indent:-9999em;animation:", " 1.3s infinite linear;transform:translateZ(0);"], u));

            function f(e) {
                var t = e.styles;
                return (0, c.jsx)(d, {
                    style: t.container,
                    children: (0, c.jsx)(m, {
                        style: t.loader
                    })
                })
            }
            f.defaultProps = {
                styles: {
                    container: {},
                    loader: {}
                }
            }, f.propTypes = {
                styles: i().shape({
                    container: i().object,
                    loader: i().object
                })
            };
            const b = (0, o.memo)(f)
        },
        40194(e, t, n) {
            n.r(t), n.d(t, {
                fullSize: () => i,
                promotionScroll: () => m,
                promotionTitle: () => c,
                styledButton: () => u,
                styledFlex: () => a,
                textGradient: () => d,
                textTruncate: () => l,
                textWhiteUppercase: () => s
            });
            var o = n(38874),
                r = (0, n(79555).getIsMobile)(),
                i = (0, o.css)(["width:100%;height:100%;"]),
                a = function(e) {
                    var t = e.isInlineFlex,
                        n = e.alignItems,
                        o = e.justifyContent,
                        r = e.alignContent,
                        i = e.isWrap,
                        a = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(n && "align-items: ".concat(n), ";\n  ").concat(o && "justify-content: ".concat(o), ";\n  ").concat(r && "align-content: ".concat(r), ";\n  ").concat(i && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                },
                s = (0, o.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                c = (0, o.css)(["color:#c2edff;font:", " var(--mainFontBold);letter-spacing:0.56px;text-transform:uppercase;margin-bottom:", ";"], r ? "1.25em" : "1.75em", function(e) {
                    return r && e.isLandscape ? "1em" : r ? "1.4em" : "0.58em"
                }),
                l = (0, o.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                d = function(e) {
                    var t = e.background;
                    return "\n\tbackground: ".concat(t || "transparent", ";;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n")
                },
                u = function(e) {
                    var t = e.background,
                        n = e.padding,
                        o = e.border,
                        r = e.borderColor,
                        i = e.borderRadius,
                        s = e.transform;
                    return "\n    ".concat(a({
                        alignItems: "center",
                        justifyContent: "center"
                    }), ";\n\t").concat(n && "padding: ".concat(n), ";\n\tbackground: ").concat(t || "transparent", ";\n\tborder: ").concat(o || "0 none", ";\n\t").concat(r && "border-color: ".concat(r), ";\n\t").concat(i && "border-radius: ".concat(i), ";\n\tfont-size: 1em;\n\tcursor: pointer;\n\toutline: 0 none;\n\t").concat(s && "transform: ".concat(s, ";"), ";\n\ttransition: var(--mainTransition);\n\t\n\t&:active {\n\t\ttransform: ").concat(s || "", " var(--mainScale);\n\t}\n")
                },
                m = function(e) {
                    var t = e.trackBg,
                        n = e.thumbBg;
                    return "\n    overflow: auto;\n\t\n\t&::-webkit-scrollbar {\n\t\twidth: 0.125em;\n\t\theight: 0.125em;\n\t}\n\n\t&::-webkit-scrollbar-track-piece {\n\t\tbackground-color: ".concat(t || "rgba(0, 85, 147, 0.4)", ";\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\theight: 0.125em;\n\t\tbackground: ").concat(n || "#0094ff", ";\n\t\tborder-radius: 0.1875em;\n\t}\n")
                }
        },
        34269(e, t, n) {
            n.d(t, {
                Dj: () => r,
                SC: () => i,
                wJ: () => a
            });
            var o = n(38874),
                r = ((0, o.css)(["width:100%;height:100%;"]), function(e) {
                    var t = e.isInlineFlex,
                        n = e.alignItems,
                        o = e.justifyContent,
                        r = e.alignContent,
                        i = e.isWrap,
                        a = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(n && "align-items: ".concat(n), ";\n  ").concat(o && "justify-content: ".concat(o), ";\n  ").concat(r && "align-content: ".concat(r), ";\n  ").concat(i && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                }),
                i = (0, o.css)(["border:1px solid;border-color:var(--mainLayoutBorderColor);"]),
                a = ((0, o.css)(["color:rgb(var(--white));text-transform:uppercase;"]), (0, o.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]), (0, o.css)(["&::-webkit-scrollbar{width:0.18em;height:0.18em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:rgba(var(--white),0.5);border-radius:0.25em;}"]), (0, o.css)(["&::-webkit-scrollbar{width:0.25em;height:0.25em;background-color:transparent;display:none;}&::-webkit-scrollbar-track-piece{background-color:transparent;}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:transparent;border-radius:0.25em;}&::-webkit-scrollbar-thumb:horizontal{width:0;height:0;background:transparent;}"]), (0, o.css)(["font-size:1em;text-align:center;width:100%;position:relative;transition:opacity 0.3s linear;border:0 none;outline:0 none;cursor:pointer;&:active{transform:scale(0.98);}"]), (0, o.css)(["", ";width:1.875em;height:1.875em;cursor:pointer;position:relative;border-radius:50%;"], r({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                })))
        },
        21006(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsxs)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: [(0, a.jsx)("g", {
                        filter: "url(#filter0_b_1318_973)",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.5966 6.6272C15.7849 5.82374 15.5504 5.47275 15.4957 5.39742C14.9827 4.69194 13.3475 4.96024 12.5146 5.9291C12.4089 5.82918 12.2617 5.76717 12.0988 5.76717H11.8408C11.6911 5.76717 11.5545 5.81954 11.4514 5.90563C10.6519 5.00697 9.12925 4.71725 8.62945 5.39722C8.38021 5.73633 8.43472 6.24935 8.52683 6.62976C8.57604 6.83329 8.77143 6.97769 8.99656 6.97769H11.74H12.1997H15.1262C15.3523 6.97779 15.5486 6.83196 15.5966 6.6272ZM11.2651 10.3024V7.61928H6.94565C6.4234 7.61928 6 7.99026 6 8.44794V9.50247C6 9.94427 6.38647 10.3024 6.86316 10.3024H11.2651ZM14.2019 7.61938H17.0543C17.5766 7.61938 17.9999 7.99037 18 8.44815V9.50268C18 9.94448 17.6136 10.3027 17.1369 10.3027H14.2019H13.4534H12.7081V7.61938H13.4534H14.2019ZM13.238 10.8989H12.5825V18H13.238H14.0257H16.2523C16.8081 18 17.2587 17.6051 17.2587 17.118V10.8989H14.0257H13.238ZM7.7487 18.0001C7.19294 18.0001 6.74234 17.6052 6.74234 17.1181V10.8989H11.4424V18.0001H7.7487Z",
                            fill: "white"
                        })
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsxs)("filter", {
                            id: "filter0_b_1318_973",
                            x: "-36",
                            y: "-37",
                            width: "96",
                            height: "97",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, a.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, a.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                                stdDeviation: "21"
                            }), (0, a.jsx)("feComposite", {
                                in2: "SourceAlpha",
                                operator: "in",
                                result: "effect1_backgroundBlur_1318_973"
                            }), (0, a.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_backgroundBlur_1318_973",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
            s.defaultProps = {
                color: "black"
            }, s.propTypes = {
                color: i().string
            };
            const c = (0, o.memo)(s)
        },
        32680(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(74848);

            function s(e) {
                var t = e.color,
                    n = e.testId;
                return (0, a.jsx)("svg", {
                    fill: t,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    "data-testid": n,
                    children: (0, a.jsx)("path", {
                        d: "M5.87268 17C5.62821 17 5.42164 16.9151 5.25298 16.7453C5.08433 16.5756 5 16.3676 5 16.1215C5 15.8754 5.08433 15.6685 5.25298 15.5009C5.42164 15.3333 5.62821 15.2495 5.87268 15.2495H18.1273C18.3718 15.2495 18.5784 15.3344 18.747 15.5042C18.9157 15.674 19 15.8819 19 16.128C19 16.3741 18.9157 16.581 18.747 16.7486C18.5784 16.9162 18.3718 17 18.1273 17H5.87268ZM5.87268 12.8845C5.62821 12.8845 5.42164 12.7997 5.25298 12.6299C5.08433 12.4601 5 12.2522 5 12.0061C5 11.7599 5.08433 11.5531 5.25298 11.3855C5.42164 11.2179 5.62821 11.1341 5.87268 11.1341H18.1273C18.3718 11.1341 18.5784 11.219 18.747 11.3887C18.9157 11.5585 19 11.7665 19 12.0126C19 12.2587 18.9157 12.4655 18.747 12.6331C18.5784 12.8007 18.3718 12.8845 18.1273 12.8845H5.87268ZM5.87268 8.76909C5.62821 8.76909 5.42164 8.6842 5.25298 8.51443C5.08433 8.34465 5 8.1367 5 7.8906C5 7.64448 5.08433 7.43451 5.25298 7.26071C5.42164 7.0869 5.62821 7 5.87268 7H18.1273C18.3718 7 18.5784 7.08799 18.747 7.26397C18.9157 7.43996 19 7.65101 19 7.89711C19 8.14323 18.9157 8.35009 18.747 8.51769C18.5784 8.68529 18.3718 8.76909 18.1273 8.76909H5.87268Z"
                    })
                })
            }
            s.defaultProps = {
                color: "black",
                testId: ""
            }, s.propTypes = {
                color: i().string,
                testId: i().string
            };
            const c = (0, o.memo)(s)
        },
        93269(e, t, n) {
            n.d(t, {
                A: () => c
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 20 20",
                    fill: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M8.83276 11.1666C8.95312 11.3271 9.01155 11.5256 8.99733 11.7257C8.98311 11.9257 8.89719 12.114 8.75535 12.2558C8.61351 12.3977 8.42526 12.4836 8.22517 12.4978C8.02508 12.512 7.82657 12.4536 7.66609 12.3332C7.2675 11.9592 6.94982 11.5074 6.73265 11.0057C6.51548 10.5041 6.40344 9.96322 6.40344 9.41658C6.40344 8.86994 6.51548 8.32911 6.73265 7.82746C6.94982 7.32581 7.2675 6.874 7.66609 6.49992L10.5828 3.49992C11.3757 2.73117 12.4367 2.30127 13.5411 2.30127C14.6455 2.30127 15.7065 2.73117 16.4994 3.49992C17.2682 4.29283 17.6981 5.35385 17.6981 6.45825C17.6981 7.56264 17.2682 8.62367 16.4994 9.41658L15.2494 10.6666C15.2672 9.98473 15.1541 9.3058 14.9161 8.66658L15.3328 8.24992C15.7778 7.75931 16.0243 7.12063 16.0243 6.45825C16.0243 5.79586 15.7778 5.15719 15.3328 4.66658C14.8422 4.22154 14.2035 3.97502 13.5411 3.97502C12.8787 3.97502 12.24 4.22154 11.7494 4.66658L8.83276 7.66658C8.59576 7.89229 8.40708 8.16379 8.27816 8.46461C8.14924 8.76543 8.08276 9.0893 8.08276 9.41658C8.08276 9.74386 8.14924 10.0677 8.27816 10.3686C8.40708 10.6694 8.59576 10.9409 8.83276 11.1666ZM19.1661 14.9999V16.6666H16.6661V19.1666H14.9994V16.6666H12.4994V14.9999H14.9994V12.4999H16.6661V14.9999M13.4994 11.4166C13.6439 10.744 13.6124 10.0454 13.408 9.38855C13.2036 8.73164 12.8333 8.13855 12.3328 7.66658C12.1723 7.54622 11.9738 7.48779 11.7737 7.50201C11.5736 7.51623 11.3853 7.60215 11.2435 7.74399C11.1017 7.88584 11.0157 8.07408 11.0015 8.27417C10.9873 8.47427 11.0457 8.67277 11.1661 8.83325C11.4031 9.05896 11.5918 9.33046 11.7207 9.63128C11.8496 9.9321 11.9161 10.256 11.9161 10.5832C11.9161 10.9105 11.8496 11.2344 11.7207 11.5352C11.5918 11.836 11.4031 12.1075 11.1661 12.3332L8.24943 15.3332C7.75882 15.7783 7.12015 16.0248 6.45776 16.0248C5.79538 16.0248 5.1567 15.7783 4.66609 15.3332C4.22105 14.8426 3.97453 14.204 3.97453 13.5416C3.97453 12.8792 4.22105 12.2405 4.66609 11.7499L5.08276 11.4166C4.85115 10.7469 4.73835 10.0418 4.74943 9.33325L3.49943 10.5832C2.73068 11.3762 2.30078 12.4372 2.30078 13.5416C2.30078 14.646 2.73068 15.707 3.49943 16.4999C4.29234 17.2687 5.35337 17.6986 6.45776 17.6986C7.56215 17.6986 8.62318 17.2687 9.41609 16.4999L10.9161 14.9999C11.0435 14.2447 11.3427 13.5288 11.7906 12.9075C12.2385 12.2862 12.8231 11.7761 13.4994 11.4166Z"
                    })
                })
            }
            s.defaultProps = {
                color: "rgb(var(--white))"
            }, s.propTypes = {
                color: i().string
            };
            const c = (0, o.memo)(s)
        },
        92226(e, t, n) {
            n.r(t), n.d(t, {
                Check: () => d,
                Copy: () => c,
                Link: () => u.A
            });
            var o = n(98283),
                r = n(5556),
                i = n.n(r),
                a = n(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M12 8.5V4H8.5C8.10218 4 7.72064 4.15804 7.43934 4.43934C7.15804 4.72064 7 5.10218 7 5.5V16.5C7 16.8978 7.15804 17.2794 7.43934 17.5607C7.72064 17.842 8.10218 18 8.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V10H13.5C13.1022 10 12.7206 9.84196 12.4393 9.56066C12.158 9.27936 12 8.89782 12 8.5ZM13 8.5V4.25L17.75 9H13.5C13.3674 9 13.2402 8.94732 13.1464 8.85355C13.0527 8.75979 13 8.63261 13 8.5ZM5 7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6V16.5C6 17.163 6.26339 17.7989 6.73223 18.2678C7.20107 18.7366 7.83696 19 8.5 19H16C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H8.548C7.60701 20 6.70456 19.6262 6.03919 18.9608C5.37381 18.2954 5 17.393 5 16.452V7Z"
                    })
                })
            }
            s.defaultProps = {
                color: "rgb(var(--white))"
            }, s.propTypes = {
                color: i().string
            };
            const c = (0, o.memo)(s);

            function l(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M9.00006 16.2003L5.50006 12.7003C5.40853 12.6076 5.29953 12.5341 5.17937 12.4839C5.05921 12.4337 4.93028 12.4078 4.80006 12.4078C4.66983 12.4078 4.5409 12.4337 4.42074 12.4839C4.30058 12.5341 4.19158 12.6076 4.10006 12.7003C4.00742 12.7918 3.93387 12.9008 3.88367 13.0209C3.83347 13.1411 3.80762 13.27 3.80762 13.4003C3.80762 13.5305 3.83347 13.6594 3.88367 13.7796C3.93387 13.8997 4.00742 14.0087 4.10006 14.1003L8.29006 18.2903C8.68006 18.6803 9.31006 18.6803 9.70006 18.2903L20.3001 7.70025C20.3927 7.60873 20.4662 7.49973 20.5164 7.37957C20.5666 7.25941 20.5925 7.13048 20.5925 7.00025C20.5925 6.87003 20.5666 6.7411 20.5164 6.62094C20.4662 6.50078 20.3927 6.39177 20.3001 6.30025C20.2085 6.20761 20.0995 6.13406 19.9794 6.08386C19.8592 6.03366 19.7303 6.00781 19.6001 6.00781C19.4698 6.00781 19.3409 6.03366 19.2207 6.08386C19.1006 6.13406 18.9916 6.20761 18.9001 6.30025L9.00006 16.2003Z"
                    })
                })
            }
            l.defaultProps = {
                color: "rgb(var(--white))"
            }, l.propTypes = {
                color: i().string
            };
            const d = (0, o.memo)(l);
            var u = n(93269)
        }
    }
]);