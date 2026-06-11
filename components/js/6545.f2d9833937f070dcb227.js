"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [312, 5767, 6159, 6545, 8430, 9296], {
        55103(e, t, o) {
            o.d(t, {
                Au: () => s,
                Dj: () => i,
                K: () => g,
                PH: () => r,
                PV: () => m,
                Pi: () => p,
                QX: () => d,
                SC: () => a,
                Uf: () => h,
                VY: () => b,
                YF: () => l,
                _7: () => u,
                bD: () => c,
                xD: () => f,
                xK: () => y
            });
            var n = o(38874),
                r = (0, n.css)(["width:100%;height:100%;"]),
                i = function(e) {
                    var t = e.isInlineFlex,
                        o = e.alignItems,
                        n = e.justifyContent,
                        r = e.alignContent,
                        i = e.isWrap,
                        a = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(o && "align-items: ".concat(o), ";\n  ").concat(n && "justify-content: ".concat(n), ";\n  ").concat(r && "align-content: ".concat(r), ";\n  ").concat(i && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                },
                a = (0, n.css)(["border:1px solid;border-color:var(--mainLayoutBorderColor);"]),
                s = (0, n.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                l = (0, n.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                c = function(e) {
                    var t = e.isFixed;
                    return "\n\tposition: ".concat(t ? "fixed" : "absolute", ";\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n")
                },
                d = (0, n.css)(["position:relative;margin-top:0.5em;overflow-y:auto;scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.1875em;height:0.1875em;margin-right:-1em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{height:0.1875em;background:rgba(var(--white),0.2);border-radius:0.1875em;margin-right:0;}"]),
                u = (0, n.css)(["position:relative;scrollbar-color:transparent transparent;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{width:0.25em;height:0.25em;background-color:transparent;display:none;}&::-webkit-scrollbar-track-piece{background-color:transparent;}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:transparent;border-radius:0.25em;}&::-webkit-scrollbar-thumb:horizontal{width:0;height:0;background:transparent;}"]),
                m = ((0, n.css)(["", ";width:1.5em;height:1.5em;cursor:pointer;position:absolute;right:0;"], i({
                    alignItems: "center",
                    justifyContent: "center"
                })), function(e) {
                    var t = e.isSm,
                        o = e.hasTopSpacing,
                        n = void 0 !== o && o,
                        r = e.hasOpacity,
                        i = void 0 !== r && r;
                    return "\n\tposition: absolute;\n\tcursor: pointer;\n\tright: 1em;\n\t".concat(n && "top: 1em", ";\n\t").concat(i && "opacity: 0.8", ";\n\tz-index: 2;\n\n\tsvg {\n\t\theight: ").concat(t ? "1.5em" : "1.75em", ";\n\t\twidth: ").concat(t ? "1.5em" : "1.75em", ";\n\t}\n")
                }),
                f = (0, n.css)(["&:hover{opacity:0.9;}"]),
                p = (0, n.css)(["@-moz-document url-prefix(){&{background:#272727;}}"]),
                b = (0, n.css)(["", ";", ";background:rgba(var(--black),0.12);backdrop-filter:blur(100px);-webkit-backdrop-filter:blur(100px);position:fixed;z-index:4;top:0;left:0;"], r, p),
                g = (0, n.css)(["position:relative;padding:2.5em 0.75em 1em;"]),
                h = (0, n.css)(["width:1.5em;height:1.5em;cursor:pointer;display:flex;position:absolute;right:1.5em;top:1.625em;"]),
                y = (0, n.css)(["", ";font:0.875em/1.2 var(--mainFont);text-align:center;letter-spacing:0.96px;margin:0;text-shadow:0 0 8px rgba(var(--black),0.4);"], s)
        },
        47212(e, t, o) {
            o.r(t), o.d(t, {
                default: () => x
            });
            var n = o(98283),
                r = o(38874),
                i = o(79555),
                a = o(5052),
                s = o(5556),
                l = o.n(s),
                c = {
                    theme: l().string,
                    onClose: l().func,
                    resources: l().shape({
                        strName: l().string,
                        strAboutHashCode: l().string,
                        strContent: l().string
                    }),
                    culture: l().string,
                    styles: l().shape({
                        container: l().object,
                        header: l().object,
                        title: l().object,
                        lineHashCode: l().object,
                        body: l().object,
                        text: l().object,
                        closeBtn: l().object,
                        iconColor: l().string
                    })
                },
                d = o(74848),
                u = (0, i.getIsMobile)(),
                m = (0, i.getIsTablet)(),
                f = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-2wm4c6-0"
                })(["width:", ";height:", ";background:rgba(var(--white),0.16);backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px);position:", ";left:", ";top:", ";transform:", ";z-index:", ";margin:0;color:rgb(var(--white));border-radius:", ";padding:", ";border:", ";border-color:var(--mainLayoutBorderColor);", ";@-moz-document url-prefix(){&{background:linear-gradient( 224.69deg,rgba(113,113,113,0.65) 2.74%,rgba(var(--black),0.2015) 55.14%,rgba(35,11,52,0.1105) 100% ),linear-gradient(0deg,rgba(103,103,103,0.9),rgba(103,103,103,0.9));}}", ";"], u ? "100%" : "35.25em", u ? "auto" : "37.625em", u ? "relative" : "absolute", u ? "auto" : "50%", u ? "auto" : "50%", u ? "none" : "translate(-50%, -50%)", u ? 5 : 4, u ? 0 : "1.5em", u ? "5.25em 1em 1em" : "3.25em 1em 0", u ? "0 none" : "1px solid", function(e) {
                    return "ornament" === e.theme.name && (0, r.css)(["z-index:3;"])
                }, function(e) {
                    return e.isMobile && (0, r.css)(["top:0;left:0;bottom:0;position:fixed;"])
                })),
                p = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-2wm4c6-1"
                })(["width:100%;padding:0 1em 1em;"])),
                b = (0, n.memo)(r.default.h4.withConfig({
                    componentId: "sc-2wm4c6-2"
                })(["text-transform:uppercase;font:", " var(--mainFont);letter-spacing:0.96px;color:rgb(var(--white));text-align:center;margin:0;"], u ? "0.875em" : "1em")),
                g = (0, n.memo)(r.default.span.withConfig({
                    componentId: "sc-2wm4c6-3"
                })(["position:absolute;height:", ";width:", ";right:", ";top:", ";cursor:pointer;opacity:0.8;&:hover{opacity:1;}"], u ? "1.5em" : "1.625em", u ? "1.5em" : "1.625em", u ? "1.125em" : "1.375em", u ? "1.625em" : "1.375em")),
                h = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-2wm4c6-4"
                })(["padding:0.5em 1em;word-break:break-all;"])),
                y = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-2wm4c6-5"
                })(["height:calc(100% - 6em);width:100%;padding:", ";font-size:", ";line-height:1.5;overflow:auto;letter-spacing:0.32px;color:rgba(var(--white),0.8);scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.18em;height:0.18em;margin-right:0.5em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:rgba(var(--white),0.5);border-radius:0.25em;}& > div{white-space:pre-line;word-break:break-word;}"], u ? "0 0.65em 1em 0" : "0 1.5em", u ? "0.75em" : "0.875em"));

            function v(e) {
                var t = e.theme,
                    o = e.onClose,
                    n = e.resources,
                    s = e.styles,
                    l = e.culture,
                    c = e.aboutHashCodeRef,
                    v = n.strAboutHashCode,
                    x = n.strAboutHashCodeContent,
                    w = x ? x.split("[hashCode]") : "";
                return (0, d.jsx)(r.ThemeProvider, {
                    theme: {
                        name: t
                    },
                    children: (0, d.jsxs)(f, {
                        isMobile: u,
                        className: m ? "allowClick" : "",
                        style: s.container,
                        ref: c,
                        children: [(0, d.jsxs)(p, {
                            style: s.header,
                            children: [(0, d.jsx)(b, {
                                style: s.title,
                                children: v
                            }), (0, d.jsx)(g, {
                                className: "allowClick",
                                style: s.closeBtn,
                                onClick: o,
                                "data-testid": "close-button",
                                children: (0, d.jsx)(a.Close, {
                                    color: s.iconColor || "#fff"
                                })
                            })]
                        }), (0, d.jsxs)(y, {
                            style: (0, i.addRtlToStyles)(s.body, l),
                            children: [(0, d.jsx)("div", {
                                style: s.text,
                                children: w[0] || ""
                            }), (0, d.jsx)(h, {
                                style: s.lineHashCode,
                                children: "726DFDC763C7F0C586EEEF50EF339E71551340E6C5B99C1617010C97F05171B07FB0C9AB7B897A5F961DC0FBB0D28CD718345C6332A8065781496ECE09552863:"
                            }), (0, d.jsx)("div", {
                                style: s.text,
                                children: w[1] || ""
                            }), (0, d.jsx)(h, {
                                style: s.lineHashCode,
                                children: "726DFDC763C7F0C586EEEF50EF339E71551340E6C5B99C1617010C97F05171B07FB0C9AB7B897A5F961DC0FBB0D28CD718345C6332A8065781496ECE09552863"
                            }), (0, d.jsx)("div", {
                                style: s.text,
                                children: w[2] || ""
                            })]
                        })]
                    })
                })
            }
            v.defaultProps = {
                theme: "",
                onClose: function() {},
                resources: {},
                culture: "en",
                styles: {
                    container: {},
                    header: {},
                    title: {},
                    lineHashCode: {},
                    body: {},
                    text: {},
                    closeBtn: {},
                    iconColor: ""
                }
            }, v.propTypes = c;
            const x = (0, n.memo)(v)
        },
        39483(e, t, o) {
            o.r(t), o.d(t, {
                default: () => h
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(40194),
                l = o(79555),
                c = o(74848),
                d = (0, l.getIsMobile)(),
                u = a.default.div.withConfig({
                    componentId: "sc-1iw9ivj-0"
                })(["width:100%;text-align:start;"]),
                m = a.default.p.withConfig({
                    componentId: "sc-1iw9ivj-1"
                })(["color:var(--totalAmountCommitedAmountColor,#fee19c);font:", " var(--mainFontMedium);"], d ? "var(--totalAmountCommitedAmountSizeMob, 1em)" : "var(--totalAmountCommitedAmountSizeWeb, 1em)"),
                f = a.default.span.withConfig({
                    componentId: "sc-1iw9ivj-2"
                })(["color:var(--totalAmountCommitedTextColor,rgba(var(--white),0.7));font:var(--totalAmountCommitedTextSize,0.75em) var(--mainFont);letter-spacing:0.24px;"]),
                p = a.default.span.withConfig({
                    componentId: "sc-1iw9ivj-3"
                })(["color:rgba(var(--white),0.4);font:0.75em var(--mainFont);"]),
                b = a.default.span.withConfig({
                    componentId: "sc-1iw9ivj-4"
                })(["", ";margin-top:", ";gap:0.5em;"], (0, s.styledFlex)({
                    alignItems: "center"
                }), d ? "0.25em" : "0.5em");

            function g(e) {
                var t = e.styles,
                    o = e.strTotalAmountCommitted,
                    n = e.options,
                    r = e.currencyId,
                    i = e.strPerSpin,
                    a = e.strRounds,
                    s = n.betAmount,
                    d = n.autoBetCount;
                return (0, c.jsxs)(u, {
                    style: t.totalAmountCommitedBlock,
                    children: [(0, c.jsx)(f, {
                        style: t.totalAmountCommitedText,
                        children: o
                    }), (0, c.jsxs)(b, {
                        style: t.totalAmountCommitedData,
                        children: [(0, c.jsxs)(m, {
                            style: t.totalAmountCommitedAmount,
                            children: [r, " ", (0, l.multiplyWithPrecision)(d, null == s ? void 0 : s.number)]
                        }), (0, c.jsx)(p, {
                            style: t.totalAmountCommitedAmountText,
                            children: "(".concat(d, " ").concat(a.toLowerCase(), " x ").concat(r, " ").concat(null == s ? void 0 : s.number, " ").concat(i.toLowerCase(), ")")
                        })]
                    })]
                })
            }
            g.defaultProps = {
                styles: {},
                strPerSpin: "_per spin",
                strRounds: "_rounds",
                strTotalAmountCommitted: "_Total Amount Committed",
                currencyId: "FUN",
                options: {}
            }, g.propTypes = {
                styles: i().object,
                strPerSpin: i().string,
                strRounds: i().string,
                strTotalAmountCommitted: i().string,
                currencyId: i().string,
                options: i().object
            };
            const h = (0, n.memo)(g)
        },
        83317(e, t, o) {
            o.r(t), o.d(t, {
                default: () => v
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(40194),
                l = o(79555),
                c = o(74848);

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function u(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(o), !0).forEach(function(t) {
                        f(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function f(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != d(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != d(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == d(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var p = (0, l.getIsMobile)(),
                b = a.default.div.withConfig({
                    componentId: "sc-1pugdrr-0"
                })(["", ";gap:0.625em;padding-right:0.5em;"], (0, s.styledFlex)({
                    alignItems: 'var(--autobetPopupActionsAlignItems, "center")',
                    justifyContent: "center"
                })),
                g = a.default.div.withConfig({
                    componentId: "sc-1pugdrr-1"
                })(["color:rgba(var(--white),0.8);font:", " var(--mainFontMedium);text-transform:uppercase;"], p ? "var(--autobetPopupActionTxtFontSizeMob, 0.875em)" : "var(--autobetPopupActionTxtFontSize, 0.875em)"),
                h = a.default.button.withConfig({
                    componentId: "sc-1pugdrr-2"
                })(["", ";", ";flex:0 1 var(--autobetPopupActionWidth,100%);", ";", ";"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), (0, s.styledButton)({
                    border: "1px solid",
                    borderColor: "var(--autobetPopupActionBorderColor, rgba(var(--white), 0.28) rgba(var(--white), 0.4) rgba(var(--white), 0.5))",
                    padding: "".concat(p ? "var(--autobetPopupActionPaddingMob" : "var(--autobetPopupActionPadding", ", 0.75em)"),
                    borderRadius: "var(--autobetPopupActionBorderRadius, 0.5em)"
                }), function(e) {
                    return e.strokeButton && (0, a.css)(["padding:", ";border-color:var( --autobetPopupActionStrokeBorderColor,rgba(var(--white),0.28) rgba(var(--white),0.4) rgba(var(--white),0.5) );background:var(--autobetPopupActionStrokeBg,transparent);box-shadow:var(--autobetPopupActionStrokeBoxShadow,none);"], p ? "var(--autobetPopupActionStrokePaddingMob, var(--autobetPopupActionPaddingMob, 0.75em))" : "var(--autobetPopupActionStrokePadding, var(--autobetPopupActionPadding, 0.75em))")
                }, function(e) {
                    return e.fillButton && (0, a.css)(["padding:", ";border-color:var( --autobetPopupActionFillBorderColor,var(--autobetPopupActionBorderColor,#50aa29 #43d872 #39feae) );background:var(--autobetPopupActionFillBg,linear-gradient(129deg,#8cc318 -30.86%,#159138 77.6%));box-shadow:", ";", "{transform:translateY(var(--autobetPopupActionFillTranslateY,0));}"], p ? "var(--autobetPopupActionFillPaddingMob, var(--autobetPopupActionPaddingMob, 0.75em))" : "var(--autobetPopupActionFillPadding, var(--autobetPopupActionPadding, 0.75em))", p ? "var(--autobetPopupActionFillBoxShadowMob, none)" : "var(--autobetPopupActionFillBoxShadow, none)", g)
                });

            function y(e) {
                var t = e.styles,
                    o = e.strokeBtnTxt,
                    n = e.fillBtnTxt,
                    r = e.setAutoBet,
                    i = e.resetAutoBet,
                    a = e.disabled;
                return (0, c.jsxs)(b, {
                    style: t.actions,
                    children: [(0, c.jsx)(h, {
                        onClick: i,
                        strokeButton: !0,
                        style: m(m({}, t.action), t.actionStroke),
                        children: (0, c.jsx)(g, {
                            style: t.actionTxt,
                            children: o
                        })
                    }), (0, c.jsx)(h, {
                        disabled: a,
                        className: a && "disabled",
                        onClick: r,
                        fillButton: !0,
                        style: m(m({}, t.action), t.actionFill),
                        children: (0, c.jsx)(g, {
                            style: t.actionTxt,
                            children: n
                        })
                    })]
                })
            }
            y.defaultProps = {
                styles: {},
                strokeBtnTxt: "_Reset",
                fillBtnTxt: "_Apply"
            }, y.propTypes = {
                styles: i().object,
                strokeBtnTxt: i().string,
                fillBtnTxt: i().string
            };
            const v = (0, n.memo)(y)
        },
        13025(e, t, o) {
            o.r(t), o.d(t, {
                default: () => C
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(40194),
                l = o(79555),
                c = o(74848);

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function u(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(o), !0).forEach(function(t) {
                        f(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function f(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != d(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != d(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == d(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var p = (0, l.getIsMobile)(),
                b = a.default.div.withConfig({
                    componentId: "sc-1yg8owe-0"
                })(["position:relative;"]),
                g = a.default.div.withConfig({
                    componentId: "sc-1yg8owe-1"
                })(["", ";margin-bottom:0.375em;"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: "space-between"
                })),
                h = a.default.label.withConfig({
                    componentId: "sc-1yg8owe-2"
                })(["color:rgba(var(--white),0.7);font:0.75em var(--mainFont);letter-spacing:0.24px;"]),
                y = a.default.div.withConfig({
                    componentId: "sc-1yg8owe-3"
                })(["", ";gap:0.375em;"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                })),
                v = a.default.button.withConfig({
                    componentId: "sc-1yg8owe-4"
                })(["", ";", ";box-shadow:var(--autobetQuickBetBtnBoxShadow,0 0 0.625em 0 rgba(var(--black),0.24) inset);flex:0 1 100%;", ";"], (0, s.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), (0, s.styledButton)({
                    background: "var(--autobetQuickBetBtnBg, rgba(var(--black), 0.16))",
                    padding: "".concat(p ? "var(--autobetQuickBetBtnPaddingMob" : "var(--autobetQuickBetBtnPadding", ", 0.5em)"),
                    border: "1px solid",
                    borderColor: "var(--autobetQuickBetBtnBorderColor, rgba(var(--white), 0.12) rgba(var(--white), 0.2) rgba(var(--white), 0.35))",
                    borderRadius: "var(--autobetQuickBetBtnBorderRadius, 0.5em)"
                }), function(e) {
                    return e.selected && (0, a.css)(["border-color:var(--autobetQuickBetBtnSelectedBorderColor,#e7c171 #f3d287 #ffe29d);background:var(--autobetQuickBetBtnSelectedBg,linear-gradient(129deg,#eac472 -30.86%,#775228 77.6%));"])
                }),
                x = a.default.span.withConfig({
                    componentId: "sc-1yg8owe-5"
                })(["color:rgba(var(--white),0.9);font:0.875em var(--mainFontMedium);"]);

            function w(e) {
                var t = e.setOptions,
                    o = e.styles,
                    n = e.strNumberOfRounds,
                    r = e.autoBetCounts,
                    i = e.autoBetCount,
                    a = e.showLabel;
                return (0, c.jsxs)(b, {
                    style: o.item,
                    children: [a && (0, c.jsx)(g, {
                        style: o.labelBlock,
                        children: (0, c.jsx)(h, {
                            style: o.label,
                            children: n
                        })
                    }), (0, c.jsx)(y, {
                        style: o.quickBetBtns,
                        children: r.map(function(e) {
                            return (0, c.jsx)(v, {
                                onClick: function() {
                                    return o = e, void t(function(e) {
                                        return m(m({}, e), {}, {
                                            autoBetCount: o
                                        })
                                    });
                                    var o
                                },
                                selected: i === e,
                                style: o.quickBetBtn,
                                type: "button",
                                children: (0, c.jsx)(x, {
                                    style: o.quickBetBtnTxt,
                                    children: e
                                })
                            }, e)
                        })
                    })]
                })
            }
            w.defaultProps = {
                styles: {}
            }, w.propTypes = {
                styles: i().object,
                strNumberOfRounds: i().string.isRequired,
                autoBetCount: i().number.isRequired,
                setOptions: i().func.isRequired,
                autoBetCounts: i().array.isRequired,
                showLabel: i().bool.isRequired
            };
            const C = (0, n.memo)(w)
        },
        13102(e, t, o) {
            o.r(t), o.d(t, {
                default: () => M
            });
            var n = o(98283),
                r = o(38874),
                i = o(79555),
                a = o(42136),
                s = o(40194),
                l = o(55103),
                c = o(5052),
                d = o(82974),
                u = o(83317),
                m = o(39483),
                f = o(13025),
                p = o(5556),
                b = o.n(p),
                g = {
                    styles: b().shape({}),
                    hasInputFields: b().bool,
                    hasMobileBackdrop: b().bool,
                    showAutoBetTotalAmount: b().bool,
                    titleTxt: b().string,
                    strokeBtnTxt: b().string,
                    fillBtnTxt: b().string,
                    closePopup: b().func.isRequired,
                    onSubmit: b().func.isRequired,
                    handleOpenBetKeyboard: b().func.isRequired,
                    disabled: b().bool,
                    hasHalfCashout: b().bool,
                    autoBetCounts: b().array
                },
                h = o(70780),
                y = o(74848);

            function v(e) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, v(e)
            }

            function x(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(o), !0).forEach(function(t) {
                        C(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : x(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function C(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != v(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != v(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == v(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
                return n
            }
            var k = (0, i.getIsMobile)(),
                I = r.default.div.withConfig({
                    componentId: "sc-70eeyt-0"
                })(["", ";position:absolute;left:", ";top:", ";", ";width:", ";", ";", ";padding:", ";text-align:center;", ";background:var( --autobetPopupBg,linear-gradient(109deg,rgba(var(--white),0.24) 0%,rgba(var(--white),0.12) 98.5%) );backdrop-filter:var(--autobetPopupBackdropFilter,blur(3.125em));-webkit-backdrop-filter:var(--autobetPopupBackdropFilter,blur(3.125em));z-index:2;"], (0, s.styledFlex)({
                    flexDirection: "column"
                }), k ? 0 : "50%", k ? 0 : "4.5em", !k && "transform: translateX(-50%)", k ? "100%" : "var(--autobetPopupWidth, 36.625em)", k && "height: 100%", !k && "border-radius: var(--autobetPopupBorderRadius, 1.5em)", k ? "var(--autobetPopupPaddingMob, 2em 1.5em 2em 2em)" : "var(--autobetPopupPaddingTop, 2em) 5.875em var(--autobetPopupPaddingBottom, 2.625em) 6.375em", !k && (0, r.css)(["border:1px solid;border-color:var( --autobetPopupBorderColor,rgba(var(--white),0.02) rgba(var(--white),0.4) rgba(var(--white),0.8) );"])),
                B = r.default.button.withConfig({
                    componentId: "sc-70eeyt-1"
                })(["", ";position:absolute;top:", ";right:", ";height:", ";width:", ";"], (0, s.styledButton)({
                    padding: k ? "0.125em" : "0.25em"
                }), k ? "var(--autobetPopupCloseBtnTopMob, 0.75em)" : "var(--autobetPopupCloseBtnTop, 1em)", k ? "var(--autobetPopupCloseBtnRightMob, 0.75em)" : "var(--autobetPopupCloseBtnRight, 1em)", k ? "1.75em" : "2.25em", k ? "1.75em" : "2.25em"),
                P = r.default.div.withConfig({
                    componentId: "sc-70eeyt-2"
                })(["", ";position:fixed;top:0;left:0;z-index:", ";", ";"], s.fullSize, k ? "var(--autobetPopupZIndexMob, 3)" : "var(--autobetPopupZIndex, 4)", function(e) {
                    return !e.hasInputFields && (0, r.css)(["", "{padding-right:0;}", "{background:var( --autobetPopupBgSm,var(--autobetPopupBg,linear-gradient(109deg,rgba(var(--white),0.24) 0%,rgba(var(--white),0.12) 98.5%)) );top:16em;padding:var(--autobetPopupPaddingTop,2em) 4.5em var(--autobetPopupPaddingBottom,2.625em);", "}", "{", "}"], S, I, k && (0, r.css)(["padding:var(--autobetPopupPaddingMob,1em);width:21.5em;height:auto;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:1em;border:1px solid;border-color:var( --autobetPopupBorderColor,rgba(var(--white),0.02) rgba(var(--white),0.4) rgba(var(--white),0.8) );"]), B, k && (0, r.css)(["top:var(--autobetPopupCloseBtnTopMobImg,var(--autobetPopupCloseBtnTopMob,0.75em));right:var(--autobetPopupCloseBtnRightMobImg,var(--autobetPopupCloseBtnRightMob,0.75em));"]))
                }),
                O = r.default.h3.withConfig({
                    componentId: "sc-70eeyt-3"
                })(["color:rgb(var(--white));font:1em var(--mainFontMedium);text-transform:uppercase;"]),
                S = r.default.div.withConfig({
                    componentId: "sc-70eeyt-4"
                })(["", ";", ";", ";", ";margin:", ";text-align:center;gap:", ";padding-right:0.5em;"], (0, s.styledFlex)({
                    flexDirection: "column"
                }), l.QX, k && "flex: 1 1 100%", !k && "max-height: 33em", k ? "1.5em 0" : "1.5em 0 2.125em", k ? "1em" : "1.5em"),
                T = {
                    container: {
                        zIndex: 1,
                        background: "rgba(var(--black), 0.7)",
                        backdropFilter: "var(--autobetPopupBackdropFilterValue, none)"
                    }
                },
                F = {
                    betAmount: {
                        number: 0,
                        checked: !0
                    },
                    totalLose: {
                        number: 0,
                        checked: !1
                    },
                    totalWin: {
                        number: 0,
                        checked: !1
                    },
                    singleWin: {
                        number: 0,
                        checked: !1
                    },
                    autoBetCount: 10
                };

            function A(e) {
                var t, o, r = e.styles,
                    s = e.hasInputFields,
                    l = e.showAutoBetTotalAmount,
                    p = e.showAutoBetPopupOptions,
                    b = e.hasMobileBackdrop,
                    g = e.titleTxt,
                    v = e.strokeBtnTxt,
                    x = e.fillBtnTxt,
                    C = e.closePopup,
                    A = e.onSubmit,
                    M = e.bet,
                    L = e.disabled,
                    D = e.handleOpenBetKeyboard,
                    R = e.hasHalfCashout,
                    _ = e.autoBetCounts,
                    z = e.disabledBetAmount,
                    E = (0, h.Em)(h.DR),
                    N = E.strApply,
                    W = E.strReset,
                    H = E.strBetAmount,
                    U = E.strAutoPlayOptions,
                    q = E.strNumberOfRounds,
                    V = E.strStopTotalLoss,
                    K = E.strStopTotalWin,
                    G = E.strStopSingleWin,
                    Y = E.strTotalAmountCommitted,
                    Q = E.strRounds,
                    Z = E.strPerSpin,
                    X = E.currencyId,
                    $ = E.maxWin,
                    J = E.maxBet,
                    ee = E.minBet,
                    te = E.precision,
                    oe = (t = (0, n.useState)(w(w({}, F), {}, {
                        autoBetCount: _[0],
                        betAmount: {
                            number: +(0, i.toNumberString)(M),
                            checked: !0
                        }
                    })), o = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var n, r, i, a, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (o = o.call(e)).next, 0 === t) {
                                    if (Object(o) !== o) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = i.call(o)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    if (!l && null != o.return && (a = o.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return s
                        }
                    }(t, o) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return j(e, t);
                            var o = {}.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? j(e, t) : void 0
                        }
                    }(t, o) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    ne = oe[0],
                    re = oe[1],
                    ie = ne.betAmount.number,
                    ae = s || p,
                    se = (0, n.useMemo)(function() {
                        return L || function(e) {
                            var t = e.options,
                                o = e.maxWin,
                                n = e.hasHalfCashout,
                                r = t.totalLose,
                                i = t.totalWin,
                                a = t.singleWin,
                                s = t.betAmount,
                                l = n ? s.number / 2 : s.number,
                                c = !1;
                            return r.checked && r.number < l && (c = !0), i.checked && i.number <= 0 && (c = !0), a.checked && (a.number <= 0 || a.number > o) && (c = !0), c
                        }({
                            options: ne,
                            maxWin: $,
                            hasHalfCashout: R
                        })
                    }, [ne, L]);
                return (0, y.jsxs)(P, {
                    style: r.container,
                    hasInputFields: ae,
                    children: [(!k || k && b) && (0, y.jsx)(a.Backdrop, {
                        onClick: C,
                        styles: w(w({}, T), r.backdrop)
                    }), (0, y.jsxs)(I, {
                        style: r.content,
                        children: [(0, y.jsx)(B, {
                            onClick: C,
                            type: "button",
                            style: r.closeBtn,
                            children: (0, y.jsx)(c.Close, {
                                color: r.iconColor || "#fff"
                            })
                        }), (0, y.jsx)(O, {
                            style: r.title,
                            children: g || U
                        }), (0, y.jsxs)(S, {
                            style: r.body,
                            children: [(0, y.jsx)(f.default, {
                                setOptions: re,
                                styles: r,
                                strNumberOfRounds: q,
                                showLabel: ae,
                                autoBetCounts: _,
                                autoBetCount: ne.autoBetCount
                            }), ae && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsx)(d.default, {
                                    styles: r,
                                    title: H,
                                    hasToggleBtn: !1,
                                    name: "betAmount",
                                    setOptions: re,
                                    options: ne.betAmount,
                                    maxTotal: J,
                                    minBet: ee,
                                    precision: te,
                                    handleOpenBetKeyboard: D,
                                    disabled: z
                                }), (0, y.jsx)(d.default, {
                                    styles: r,
                                    title: V,
                                    name: "totalLose",
                                    setOptions: re,
                                    options: ne.totalLose,
                                    maxTotal: 99999999999,
                                    minBet: ie,
                                    precision: te,
                                    handleOpenBetKeyboard: D
                                }), (0, y.jsx)(d.default, {
                                    styles: r,
                                    title: K,
                                    name: "totalWin",
                                    setOptions: re,
                                    options: ne.totalWin,
                                    maxTotal: 99999999999,
                                    minBet: ie,
                                    precision: te,
                                    handleOpenBetKeyboard: D
                                }), (0, y.jsx)(d.default, {
                                    styles: r,
                                    title: G,
                                    name: "singleWin",
                                    setOptions: re,
                                    options: ne.singleWin,
                                    maxTotal: $,
                                    minBet: ie,
                                    precision: te,
                                    handleOpenBetKeyboard: D
                                })]
                            }), l && (0, y.jsx)(m.default, {
                                styles: r,
                                strTotalAmountCommitted: Y,
                                strRounds: Q,
                                strPerSpin: Z,
                                currencyId: X,
                                options: ne
                            })]
                        }), (0, y.jsx)(u.default, {
                            styles: r,
                            strokeBtnTxt: v || W,
                            fillBtnTxt: x || N,
                            setAutoBet: function() {
                                se || (ee > ie ? re(function(e) {
                                    return w(w({}, e), {}, {
                                        betAmount: {
                                            number: ee,
                                            checked: !0
                                        }
                                    })
                                }) : (A(ne), C()))
                            },
                            resetAutoBet: p ? function() {
                                re(w(w({}, F), {}, {
                                    betAmount: {
                                        number: +(0, i.toNumberString)(M),
                                        checked: !0
                                    }
                                }))
                            } : C,
                            disabled: se
                        })]
                    })]
                })
            }
            A.defaultProps = {
                styles: {},
                hasInputFields: !1,
                showAutoBetTotalAmount: !1,
                hasMobileBackdrop: !1,
                titleTxt: "",
                strokeBtnTxt: "",
                fillBtnTxt: "",
                bet: 0,
                disabled: !1,
                hasHalfCashout: !1,
                autoBetCounts: [10, 25, 50, 75, 100]
            }, A.propTypes = g;
            const M = (0, n.memo)(A)
        },
        312(e, t, o) {
            o.r(t), o.d(t, {
                default: () => m
            });
            var n = o(98283),
                r = o(38874),
                i = (o(94206), o(5556)),
                a = o.n(i),
                s = o(79555),
                l = o(74848),
                c = (0, s.getIsMobile)(),
                d = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-dfqosm-0"
                })(["display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";cursor:pointer;background:linear-gradient(180deg,rgba(var(--white),0.09) 0%,rgba(var(--white),0.36) 100%);", ";"], c ? "1.5em" : "2.25em", c ? "1.5em" : "2.25em", c ? "1.5em" : "2.25em", function(e) {
                    return e.isSmall && (0, r.css)(["width:", ";height:", ";"], c ? "1.5em" : "1.875em", c ? "1.5em" : "1.875em")
                })),
                u = (0, n.memo)(r.default.img.withConfig({
                    componentId: "sc-dfqosm-1"
                })(["width:calc(100% - 0.125em);height:calc(100% - 0.125em);border-radius:inherit;object-fit:cover;"]));

            function m(e) {
                var t = e.styles,
                    o = e.onClick,
                    n = e.avatarUrl,
                    r = e.isSmall;
                return (0, l.jsx)(d, {
                    style: t.container,
                    onClick: o,
                    isSmall: r,
                    children: (0, l.jsx)(u, {
                        style: t.img,
                        alt: "Avatar",
                        src: n
                    })
                })
            }
            m.defaultProps = {
                styles: {},
                onClick: function() {},
                avatarUrl: "",
                isSmall: !1
            }, m.propTypes = {
                styles: a().object,
                onClick: a().func,
                avatarUrl: a().string,
                isSmall: a().bool
            }
        },
        67956(e, t, o) {
            o.r(t), o.d(t, {
                default: () => f
            });
            var n = o(98283),
                r = o(38874),
                i = o(79555),
                a = o(5556),
                s = o.n(a),
                l = {
                    onClick: s().func,
                    styles: s().shape({
                        container: s().object
                    }),
                    parentId: s().string
                },
                c = o(74848),
                d = (0, i.getIsMobile)(),
                u = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16owrht-0"
                })(["width:100%;height:100%;background:rgba(var(--black),0.5);backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);position:fixed;left:0;top:0;bottom:0;z-index:", ";"], d ? 2 : 4));

            function m(e) {
                var t = e.styles,
                    o = e.onClick,
                    n = e.parentId;
                return (0, c.jsx)(u, {
                    onClick: o,
                    style: t.container,
                    "data-testid": "".concat(n ? "".concat(n, "_") : "", "glass-backdrop")
                })
            }
            m.defaultProps = {
                onClick: function() {},
                styles: {
                    container: {}
                },
                parentId: ""
            }, m.propTypes = l;
            const f = (0, n.memo)(m)
        },
        84873(e, t, o) {
            o.r(t), o.d(t, {
                default: () => w
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(79555),
                l = o(17710),
                c = o(40194),
                d = o(74848);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }

            function m(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(o), !0).forEach(function(t) {
                        p(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function p(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != u(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != u(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == u(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var b = (0, s.getIsMobile)(),
                g = a.default.div.withConfig({
                    componentId: "sc-1bypvde-0"
                })(["", ";color:rgb(var(--white));margin-bottom:", ";", ";", ";", ";"], (0, c.styledFlex)({
                    alignItems: b ? "flex-end" : "flex-start",
                    justifyContent: b ? "flex-end" : "flex-start",
                    flexDirection: "column"
                }), b ? 0 : "0.5em", function(e) {
                    return e.isInSlot && (0, a.css)(["flex:0 0 calc((100% - 6em) / 2);text-align:", ";margin-bottom:", ";"], b ? "right" : "left", b ? 0 : "0.25em")
                }, function(e) {
                    return e.isLandscape && (0, a.css)(["flex-direction:row;align-items:center;justify-content:flex-start;flex:1 1 auto;"])
                }, function(e) {
                    return e.isHistory && (0, a.css)(["margin-bottom:3em;"])
                }),
                h = a.default.p.withConfig({
                    componentId: "sc-1bypvde-1"
                })(["text-transform:uppercase;color:rgba(var(--white),0.6);font:0.75em var(--mainFont);margin:0 0.333em 0.167em;", ";", ";"], function(e) {
                    return e.isInSlot && (0, a.css)(["font:", " var(--mainFont);margin:0;"], b ? "0.625em" : "0.875em")
                }, function(e) {
                    return e.isInSlot && e.isLandscape && (0, a.css)(["font:0.625em var(--mainFont);margin-right:0.375em;"])
                }),
                y = {
                    currency: {
                        color: "rgba(var(--white), 0.5)",
                        fontFamily: "var(--mainFont)",
                        padding: 0
                    }
                },
                v = {
                    amount: {
                        color: "rgba(var(--white), 0.9)",
                        font: b ? "0.875em var(--mainFontMedium)" : "1.25em var(--mainFontMedium)",
                        marginLeft: 0
                    },
                    currency: {
                        color: "rgba(var(--white), 0.9)",
                        font: b ? "0.875em var(--mainFontMedium)" : "1.25em var(--mainFontMedium)",
                        padding: 0
                    }
                };

            function x(e) {
                var t = e.styles,
                    o = e.currencyId,
                    n = e.culture,
                    r = e.bet,
                    i = e.isLandscape,
                    a = e.isInSlot,
                    s = e.strBet,
                    c = e.isHistory,
                    u = e.idRef;
                return (0, d.jsxs)(g, {
                    style: t.container,
                    isLandscape: i,
                    isInSlot: a,
                    isHistory: !b && c,
                    children: [(0, d.jsx)(h, {
                        style: t.text,
                        isLandscape: i,
                        isInSlot: a,
                        children: s || "Bet"
                    }), (0, d.jsx)(l.default, {
                        amountRef: u,
                        currencyId: o,
                        culture: n,
                        text: r,
                        styles: f(f({}, t.amountBox), a ? v : y),
                        isInSlot: !i && a
                    })]
                })
            }
            x.defaultProps = {
                isLandscape: !1,
                isInSlot: !1,
                idRef: {},
                currencyId: "",
                culture: "",
                bet: "",
                strBet: "",
                isHistory: "",
                styles: {
                    container: {},
                    text: {},
                    amountBox: {
                        container: {},
                        amount: {},
                        currency: {}
                    }
                }
            }, x.propTypes = {
                isLandscape: i().bool,
                isInSlot: i().bool,
                idRef: i().object,
                currencyId: i().oneOfType([i().string, i().number]),
                culture: i().string,
                strBet: i().string,
                bet: i().oneOfType([i().string, i().number]),
                isHistory: i().string,
                styles: i().shape({
                    container: i().object,
                    text: i().object,
                    amountBox: i().shape({
                        container: i().object,
                        amount: i().object,
                        currency: i().object
                    })
                })
            };
            const w = (0, n.memo)(x)
        },
        85473(e, t, o) {
            o.r(t), o.d(t, {
                default: () => L
            });
            var n = o(98283),
                r = o(38874),
                i = o(79555),
                a = o(24659),
                s = o(94206),
                l = o(17710),
                c = o(40194),
                d = o(5556),
                u = o.n(d),
                m = {
                    resources: u().object,
                    styles: u().shape({
                        container: u().object
                    })
                },
                f = o(74848);

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function b(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(o), !0).forEach(function(t) {
                        h(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : b(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function h(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != p(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != p(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == p(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var y = (0, i.getIsMobile)(),
                v = "".concat(a.CDN_URL, "/images/BetOnGames/bonus/").concat(y ? "mobile" : "desktop", "/bonusWin.webp"),
                x = {
                    font: y ? "2.625em/1 var(--mainFontBold)" : "4em/1 var(--mainFontBold)",
                    color: "rgb(var(--white))",
                    background: "linear-gradient(180deg, #FFF 12.5%, #909090 88.02%)",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    letterSpacing: y ? "0.42px" : "0.64px"
                },
                w = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-1h0jxe6-0"
                })(["", ";", ";background:rgba(var(--black),0.8);margin:auto;position:fixed;left:0;top:0;z-index:10;cursor:pointer;"], (0, c.styledFlex)({
                    alignItems: "flex-start",
                    justifyContent: "center"
                }), c.fullSize)),
                C = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-1h0jxe6-1"
                })(["", ";", ";z-index:1;text-align:center;", ";", ";"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "column"
                }), c.fullSize, y ? (0, r.css)(["position:fixed;top:8.75em;"]) : (0, r.css)(["position:absolute;top:8.875em;"]), function(e) {
                    return e.isLandscape && (0, r.css)(["top:0;padding:calc(env(safe-area-inset-top) + 2em) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);"])
                })),
                j = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-1h0jxe6-2"
                })(["", ";", ";"], y ? (0, r.css)(["width:100%;height:13em;"]) : (0, r.css)(["width:38.75em;height:16.875em;"]), function(e) {
                    return e.isLandscape && (0, r.css)(["width:22.5em;height:9em;"])
                })),
                k = (0, n.memo)(r.default.img.withConfig({
                    componentId: "sc-1h0jxe6-3"
                })(["max-width:100%;width:auto;height:100%;position:relative;pointer-events:none;"])),
                I = (0, n.memo)(r.default.h3.withConfig({
                    componentId: "sc-1h0jxe6-4"
                })(["text-transform:uppercase;color:#facc0c;", ";", ";"], y ? (0, r.css)(["font:1.5em var(--mainFontMedium);letter-spacing:1.2px;"]) : (0, r.css)(["font:3em var(--mainFontMedium);letter-spacing:0.96px;"]), function(e) {
                    return e.isLandscape && (0, r.css)(["font:1.75em var(--mainFontMedium);letter-spacing:1.12px;text-shadow:0 1.75px 3.5px rgba(var(--black),0.24);"])
                })),
                B = (0, n.memo)(r.default.p.withConfig({
                    componentId: "sc-1h0jxe6-5"
                })(["color:#bcbcbc;font:", " var(--mainFont);text-align:center;"], y ? "0.875em" : "1.5em")),
                P = (0, n.memo)(r.default.p.withConfig({
                    componentId: "sc-1h0jxe6-6"
                })(["color:rgba(var(--white),0.6);", ";", ";"], y ? (0, r.css)(["font:0.75em var(--mainFont);margin-top:5em;"]) : (0, r.css)(["font:1em var(--mainFont);margin-top:3.375em;"]), function(e) {
                    return e.isLandscape && (0, r.css)(["font:0.75em var(--mainFont);margin-top:1.333em;"])
                })),
                O = (0, r.css)(["text-align:center;", ";", ";"], y ? (0, r.css)(["font:2em var(--mainFontBold);letter-spacing:-0.64px;"]) : (0, r.css)(["font:3em var(--mainFontBold);letter-spacing:-0.96px;"]), function(e) {
                    return e.isLandscape && (0, r.css)(["font:1.625em var(--mainFontBold);letter-spacing:-0.52px;"])
                }),
                S = (0, n.memo)(r.default.p.withConfig({
                    componentId: "sc-1h0jxe6-7"
                })(["", ";color:rgb(var(--white));text-shadow:0 1px 2px #4b3704;text-transform:uppercase;position:relative;z-index:2;"], O)),
                T = (0, n.memo)(r.default.p.withConfig({
                    componentId: "sc-1h0jxe6-8"
                })(["", ";color:#f1af27;-webkit-text-stroke-width:1;-webkit-text-stroke-color:#ffc940;text-transform:uppercase;position:absolute;top:0;filter:blur(16px);z-index:1;"], O)),
                F = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-1h0jxe6-9"
                })(["position:relative;z-index:1;"])),
                A = {
                    container: {
                        margin: y ? "1.125em 0" : "1em 0",
                        position: "relative",
                        zIndex: 2
                    },
                    amount: g(g({}, x), {}, {
                        margin: "0 0.14em"
                    }),
                    currency: g(g({}, x), {}, {
                        padding: "0 0.14em",
                        display: "inline-flex"
                    })
                };

            function M(e) {
                var t = e.styles,
                    o = e.resources,
                    n = e.finishedBonus,
                    r = e.culture,
                    c = e.onClick,
                    d = n.totalWin,
                    u = n.currencyId,
                    m = n.id,
                    p = n.initialValue,
                    b = n.type,
                    g = o.strCongratulations,
                    h = o.strBonusFreeBetWinPopupText,
                    x = o.strBonusFreeAmountWinPopupText,
                    O = o.strPressAnywhereToClose,
                    M = o.strYouWin,
                    L = y && !(0, s.useOrientationChange)(),
                    D = b === a.BonusTypes.FreeBet ? h : x,
                    R = D ? D.replace("[bonusCount]", p) : "_The total number of FreeBonus is ".concat(p || 0);
                return (0, f.jsx)(w, {
                    style: t.container,
                    onClick: function() {
                        return c(m)
                    },
                    children: (0, f.jsxs)(C, {
                        style: t.content,
                        isLandscape: L,
                        children: [(0, f.jsx)(I, {
                            style: t.title,
                            isLandscape: L,
                            children: g || "_CONGRATULATIONS!"
                        }), (0, f.jsx)(j, {
                            style: t.imageWrapper,
                            isLandscape: L,
                            children: (0, f.jsx)(k, {
                                src: v,
                                style: t.logo,
                                alt: "Bonus Win"
                            })
                        }), (0, f.jsxs)(F, {
                            style: t.youWinWrapper,
                            children: [(0, f.jsx)(S, {
                                style: t.youWin,
                                isLandscape: L,
                                children: M || "_You Win"
                            }), (0, f.jsx)(T, {
                                style: t.youWin2,
                                isLandscape: L,
                                children: M || "_You Win"
                            })]
                        }), (0, f.jsx)(l.default, {
                            currencyId: u || "_USD",
                            culture: r,
                            text: d ? (0, i.numberToSpacedString)(d) : 0,
                            styles: A
                        }), (0, f.jsx)(B, {
                            style: t.text,
                            isLandscape: L,
                            children: R
                        }), (0, f.jsx)(P, {
                            style: t.textInfo,
                            isLandscape: L,
                            children: O || "_Press anywhere to close"
                        })]
                    })
                })
            }
            M.defaultProps = {
                resources: {},
                styles: {
                    container: {}
                }
            }, M.propTypes = m;
            const L = (0, n.memo)(M)
        },
        25767(e, t, o) {
            o.r(t), o.d(t, {
                default: () => B
            });
            var n = o(98283),
                r = o(38874),
                i = o(79555),
                a = o(94206),
                s = o(5556),
                l = o.n(s),
                c = {
                    headers: l().array,
                    body: l().array,
                    type: l().string,
                    winBy: l().string,
                    notWinStrs: l().array,
                    styles: l().shape({
                        container: l().object,
                        header: l().object,
                        headerCell: l().object,
                        body: l().object,
                        row: l().object,
                        selectedRow: l().object,
                        winRow: l().object,
                        cell: l().object,
                        cellBlock: l().object,
                        bodyCell: l().object,
                        hr: l().object
                    }),
                    parentId: l().string
                },
                d = o(74848);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }
            var m = ["key"],
                f = ["key"];

            function p(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(o), !0).forEach(function(t) {
                        g(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function g(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != u(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != u(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == u(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function h(e, t) {
                if (null == e) return {};
                var o, n, r = function(e, t) {
                    if (null == e) return {};
                    var o = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (-1 !== t.indexOf(n)) continue;
                            o[n] = e[n]
                        }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) o = i[n], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
                }
                return r
            }
            var y = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16gyqi1-0"
                })(["padding:0 0.5em 1em 0.5em;height:calc(100% - 5.5em);color:rgb(var(--white));overflow:auto;overflow-x:hidden;scrollbar-color:rgba(var(--white),0.1);", ";&::-webkit-scrollbar{width:0.125em;height:0.125em;margin-right:-0.5em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{height:0.3125em;background:rgba(var(--white),0.2);border-radius:0.1875em;}"], function(e) {
                    return e.isLandscape && (0, r.css)(["display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;padding:0 calc(env(safe-area-inset-right) + 2em) 1em calc(env(safe-area-inset-left) + 2em);"])
                })),
                v = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16gyqi1-1"
                })(["display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-content:flex-start;align-items:center;padding:0.75em 1em;width:100%;margin-bottom:0.5em;background:var(--boxTableRowBg,rgba(var(--white),0.08));border-radius:0.5em;border:1px solid;border-color:var( --boxTableRowBorderColor,rgba(var(--white),0.1) rgba(var(--white),0.15) rgba(var(--white),0.192) );", " ", " ", " ", ";"], function(e) {
                    return e.win > 0 && (0, r.css)(["background:var(--winRowBg,rgba(0,183,62,0.42));border-color:var(--winRowBorderColor,rgba(38,199,127,0.1) rgba(56,255,175,0.5) rgb(56,255,175));"])
                }, function(e) {
                    return e.selected && (0, r.css)(["background:rgba(54,172,94,0.42);border-color:rgba(38,199,127,0.1) rgba(56,255,175,0.5) rgb(56,255,175);"])
                }, function(e) {
                    return e.lose && (0, r.css)(["border:1px solid #f14100;"])
                }, function(e) {
                    return e.isLandscape && (0, r.css)(["width:calc(50% - 0.125em);margin-bottom:0.25em;"])
                })),
                x = r.default.span.withConfig({
                    componentId: "sc-16gyqi1-2"
                })(["height:1px;width:100%;display:block;background:linear-gradient( 270deg,rgba(var(--white),0) 0%,rgba(var(--white),0.3) 52.08%,rgba(var(--white),0) 100% );position:absolute;bottom:0;left:0;"]),
                w = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16gyqi1-3"
                })(["display:flex;padding:0.5em 0;width:100%;position:relative;&:last-of-type > ", "{display:none;}"], x)),
                C = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16gyqi1-4"
                })(["display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;flex:0 0 50%;width:50%;padding:0 0.5em;"])),
                j = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16gyqi1-5"
                })(["text-transform:capitalize;font:0.625em/1.185 var(--mainFont);letter-spacing:0.64px;color:rgba(var(--white),0.6);margin-bottom:0.2em;width:100%;"])),
                k = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-16gyqi1-6"
                })(["font:0.75em/1.185 var(--mainFont);letter-spacing:0.32px;color:rgb(var(--white));width:100%;", ""], function(e) {
                    return e.isLandscape && (0, r.css)(["word-break:break-word;"])
                }));

            function I(e) {
                var t = e.headers,
                    o = e.body,
                    n = e.winBy,
                    r = e.styles,
                    s = e.type,
                    l = e.notWinStrs,
                    c = e.parentId,
                    u = !(0, a.useOrientationChange)(),
                    p = [];
                "MultiRow" === s ? o.forEach(function(e) {
                    e.forEach(function(t, o) {
                        var r = [];
                        if (void 0 !== t.key) {
                            var a = t.key,
                                s = h(t, m);
                            (r = Object.values(s)).key = a
                        } else r = Object.values(t);
                        r.direction = 0 === o ? "top" : o === e.length - 1 ? "bottom" : "center", r.win = t.win, !t[n] || Number.isNaN(+(0, i.toNumberString)(t.win)) && l.includes(t.win) || (r.win = +(0, i.toNumberString)(t.win)), 1 === e.length && (r.direction = ""), p.push(r)
                    })
                }) : p = o.map(function(e) {
                    var t = [];
                    if (void 0 !== e.key) {
                        var o = e.key,
                            r = h(e, f);
                        (t = Object.values(r)).key = o
                    } else t = Object.values(e);
                    if ("totalWin" === n) {
                        var a = +(0, i.toNumberString)(e.totalWin);
                        !Number.isNaN(a) && a > 0 && (t.win = a)
                    } else "bet" === n && !Number.isNaN(+(0, i.toNumberString)(e.win)) && +(0, i.toNumberString)(e.win) >= +(0, i.toNumberString)(e.bet) && (t.win = !0), !e[n] || "bet" === n || Number.isNaN((0, i.toNumberString)(e.win)) && l.includes(e.win) || (t.win = +(0, i.toNumberString)(e.win));
                    return t
                });
                for (var g = [], I = 0; I < p.length; I++) {
                    for (var B = p[I], P = b(b({}, r.row), B.win ? r.winRow : {}), O = [], S = 0; S < B.length; S += 2) O.push((0, d.jsxs)(w, {
                        style: r.cellBlock,
                        "data-testid": "".concat(c ? "".concat(c, "_") : "", "glass-box-table_row-").concat(I, "_cell-block-").concat(S),
                        children: [(0, d.jsxs)(C, {
                            className: "cell",
                            style: r.cell,
                            "data-testid": "".concat(c ? "".concat(c, "_") : "", "glass-box-table_row-").concat(I, "_cell-block-").concat(S, "_cell-1"),
                            children: [(0, d.jsx)(j, {
                                style: r.headerCell,
                                children: t[S]
                            }), (0, d.jsx)(k, {
                                style: r.bodyCell,
                                isLandscape: u,
                                children: B[S]
                            })]
                        }, S), (0, d.jsxs)(C, {
                            className: "cell",
                            style: r.cell,
                            "data-testid": "".concat(c ? "".concat(c, "_") : "", "glass-box-table_row-").concat(I, "_cell-block-").concat(S, "_cell-2"),
                            children: [(0, d.jsx)(j, {
                                style: r.headerCell,
                                children: t[S + 1]
                            }), (0, d.jsx)(k, {
                                style: r.bodyCell,
                                isLandscape: u,
                                children: B[S + 1]
                            })]
                        }, S + 1), (0, d.jsx)(x, {
                            style: r.hr
                        })]
                    }));
                    g.push((0, d.jsx)(v, {
                        className: "row",
                        isLandscape: u,
                        style: P,
                        win: B.win,
                        "data-testid": "".concat(c ? "".concat(c, "_") : "", "glass-box-table_row-").concat(I),
                        children: O
                    }, B.key || I))
                }
                return (0, d.jsx)(y, {
                    style: r.container,
                    isLandscape: u,
                    "data-testid": "".concat(c ? "".concat(c, "_") : "", "glass-box-table"),
                    children: g
                })
            }
            I.defaultProps = {
                headers: [],
                body: [],
                winBy: "",
                type: "",
                notWinStrs: ["-", "Canceled"],
                styles: {
                    container: {},
                    header: {},
                    headerCell: {},
                    body: {},
                    row: {},
                    selectedRow: {},
                    winRow: {},
                    cell: {},
                    cellBlock: {},
                    bodyCell: {},
                    hr: {}
                },
                parentId: ""
            }, I.propTypes = c;
            const B = (0, n.memo)(I)
        },
        16049(e, t, o) {
            o.r(t), o.d(t, {
                default: () => f
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(79555),
                s = o(51936),
                l = o(38874),
                c = o(74848);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
                return n
            }
            var u = (0, n.memo)(l.default.div.withConfig({
                componentId: "sc-1h73l7l-0"
            })(["width:1em;height:1em;padding-right:0;color:rgb(var(--white));position:relative;margin-right:0.25em;"]));

            function m(e) {
                var t, o, r = e.isIcon,
                    i = e.styles,
                    l = (t = (0, n.useState)((0, a.getFormattedTime)(new Date)), o = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var n, r, i, a, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (o = o.call(e)).next, 0 === t) {
                                    if (Object(o) !== o) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = i.call(o)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    if (!l && null != o.return && (a = o.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return s
                        }
                    }(t, o) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return d(e, t);
                            var o = {}.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? d(e, t) : void 0
                        }
                    }(t, o) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    m = l[0],
                    f = l[1];
                return (0, n.useEffect)(function() {
                    var e = setInterval(function() {
                        var e = (0, a.getFormattedTime)(new Date);
                        f(e)
                    }, 5e3);
                    return function() {
                        return clearInterval(e)
                    }
                }, []), (0, c.jsxs)(c.Fragment, {
                    children: [r ? (0, c.jsx)(u, {
                        style: i.timeIcon,
                        children: (0, c.jsx)(s.default, {
                            color: "rgba(var(--white), 0.48)"
                        })
                    }) : null, (0, c.jsx)("span", {
                        children: m
                    })]
                })
            }
            m.defaultProps = {
                isIcon: !1,
                styles: {}
            }, m.propTypes = {
                isIcon: i().bool,
                styles: i().shape({
                    timeIcon: i().object
                })
            };
            const f = (0, n.memo)(m)
        },
        14513(e, t, o) {
            o.r(t), o.d(t, {
                default: () => O
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(79555),
                l = o(5052),
                c = {
                    en: "In order to place a bet, you need to verify the mobile phone number specified during registration and an identity document (passport/ID card).",
                    ru: "Для того, чтобы сделать ставку, необходимо верифицировать указанный при регистрации номер мобильного телефона и документ, удостоверяющий личность (паспорт/ID-карта).",
                    hy: "Խաղադրույք կատարելու համար անհրաժեշտ է նույնականացնել գրանցման ընթացքում նշված բջջային հեռախոսահամարը և անձը հաստատող փաստաթուղթը (անձնագիր/ID քարտ):"
                },
                d = {
                    en: "In order to place a bet, you need to verify an identity document (passport/ID card).",
                    ru: "Для того, чтобы сделать ставку, необходимо верифицировать документ, удостоверяющий личность  (паспорт/ID-карта).",
                    hy: "Խաղադրույք կատարելու համար անհրաժեշտ է նույնականացնել անձը հաստատող փաստաթուղթը (անձնագիր/ID քարտ):"
                },
                u = {
                    en: "In order to place a bet, you need to verify the mobile phone number specified during registration.",
                    ru: "Для того, чтобы сделать ставку, необходимо верифицировать указанный при регистрации номер мобильного телефона.",
                    hy: "Խաղադրույք կատարելու համար անհրաժեշտ է նույնականացնել գրանցման ընթացքում նշված բջջային հեռախոսահամարը:"
                },
                m = {
                    en: "Verification",
                    ru: "Верификация",
                    hy: "Նույնականացում"
                },
                f = {
                    en: "Verify",
                    ru: "Верифицировать",
                    hy: "Նույնականացնել"
                },
                p = o(74848),
                b = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1jsiwac-0"
                })(["position:absolute;height:100%;left:0;z-index:11;right:0;"])),
                g = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1jsiwac-1"
                })(["width:95%;max-width:35.375em;background:#fff;z-index:1;position:absolute;border-radius:4px;left:50%;top:50%;transform:translate(-50%,-50%);box-shadow:0 3px 8px rgba(var(--black),0.5);"])),
                h = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1jsiwac-2"
                })(["width:100%;padding:1.375em 1.5em 0 1.5em;"])),
                y = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-1jsiwac-3"
                })(["color:#000000;text-transform:capitalize;font-size:1em;"])),
                v = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-1jsiwac-4"
                })(["position:absolute;width:1.25em;height:1.25em;right:1.3125em;top:1.5625em;cursor:pointer;opacity:0.6;display:flex;align-items:center;justify-content:center;"])),
                x = (0, n.memo)(a.default.button.withConfig({
                    componentId: "sc-1jsiwac-5"
                })(["border:0 none;border-radius:0.25em;background:#197b30;color:#ffffff;padding:0.75em;margin-top:1.5em;width:100%;cursor:pointer;text-transform:uppercase;transition:transform 0.1s linear,opacity 0.2s linear;span{font-size:0.875em;}&:hover{opacity:0.95;}&:focus{outline:none;}&:active{border:0 none;-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);-o-transform:scale(0.95);transform:scale(0.95);}"])),
                w = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1jsiwac-6"
                })(["width:100%;padding:1.5em;color:#999999;line-height:1.5;& > div{white-space:pre-line;color:rgba(var(--black),0.6);font-size:0.875em;}"])),
                C = (0, s.getParamsFromUrl)(),
                j = C.PartnerId,
                k = C.partnerId,
                I = j || k,
                B = (0, s.getIsMobile)();

            function P(e) {
                var t = e.isDocumentVerified,
                    o = e.isMobileVerified,
                    n = e.culture,
                    r = e.onClose,
                    i = e.styles,
                    a = "";
                return t || o ? t ? o || (a = u[n]) : a = d[n] : a = c[n], (0, p.jsx)(b, {
                    style: i.container,
                    children: (0, p.jsxs)(g, {
                        style: i.content,
                        children: [(0, p.jsxs)(h, {
                            style: i.header,
                            children: [(0, p.jsx)(y, {
                                style: i.title,
                                children: m[n]
                            }), (0, p.jsx)(v, {
                                style: i.closeBtn,
                                onClick: r,
                                children: (0, p.jsx)(l.Close, {
                                    style: i.close,
                                    color: "#000"
                                })
                            })]
                        }), (0, p.jsxs)(w, {
                            style: i.body,
                            children: [(0, p.jsx)("div", {
                                style: i.text,
                                children: a
                            }), (0, p.jsx)(x, {
                                style: i.button,
                                onClick: function() {
                                    if (1 === +I) {
                                        var e = B ? "https://playin.totogaming.am/?documentsUpload=1" : "https://playin.totogaming.am/Account/DocumentsUpload";
                                        window.open(e, B ? "_self" : "_blank")
                                    } else window.location.reload()
                                },
                                children: (0, p.jsx)("span", {
                                    style: i.buttonTxt,
                                    children: f[n]
                                })
                            })]
                        })]
                    })
                })
            }
            P.defaultProps = {
                onClose: function() {},
                culture: "en",
                isDocumentVerified: !1,
                isMobileVerified: !1,
                styles: {
                    container: {},
                    content: {},
                    header: {},
                    title: {},
                    body: {},
                    text: {},
                    button: {},
                    iconColor: "",
                    buttonTxt: {},
                    closeBtn: {},
                    close: {}
                }
            }, P.propTypes = {
                onClose: i().func,
                culture: i().string,
                isDocumentVerified: i().bool,
                isMobileVerified: i().bool,
                styles: i().shape({
                    container: i().object,
                    content: i().object,
                    header: i().object,
                    title: i().object,
                    body: i().object,
                    text: i().object,
                    button: i().object,
                    iconColor: i().string,
                    buttonTxt: i().object,
                    closeBtn: i().object,
                    close: i().object
                })
            };
            const O = (0, n.memo)(P)
        },
        46915(e, t, o) {
            o.r(t), o.d(t, {
                default: () => p
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(55794),
                s = o.n(a),
                l = o(74848);

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function d(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(o), !0).forEach(function(t) {
                        m(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function m(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != c(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != c(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == c(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function f(e) {
                var t = e.styles,
                    o = e.children;
                return (0, l.jsx)(s(), {
                    axis: "both",
                    handle: ".draggable",
                    scale: 1,
                    cancel: ".allowClick > *",
                    children: (0, l.jsx)("div", {
                        className: "draggable",
                        style: u({
                            position: "absolute",
                            width: "auto",
                            height: "auto"
                        }, t),
                        children: o
                    })
                })
            }
            f.defaultProps = {
                styles: {},
                children: null
            }, f.propTypes = {
                styles: i().object,
                children: i().element
            };
            const p = (0, n.memo)(f)
        },
        7363(e, t, o) {
            o.r(t), o.d(t, {
                backgroundErrorCodes: () => j,
                default: () => I
            });
            var n = o(98283),
                r = o(38874),
                i = o(55221),
                a = o(40194),
                s = o(5556),
                l = o.n(s),
                c = {
                    strReload: l().string,
                    code: l().number,
                    title: l().string,
                    description: l().string,
                    styles: l().object,
                    hasReloadButton: l().bool
                },
                d = o(24659),
                u = o(74848),
                m = "".concat(d.CDN_URL, "/images/playlink/errorpage/[deviceType]/code[code].webp"),
                f = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-5t2r85-0"
                })(["", ";", " background:#101224;left:0;top:0;z-index:3;", " ", ";"], (0, a.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), a.fullSize, function(e) {
                    return e.isMobile ? "\n\t\t\tposition: fixed;\n\t\t" : "\n\t\t\tposition: absolute;\n\t\t\tborder-radius: 1em;\n\t\t\tborder: 1px solid rgba(var(--white), 0.24);\n\t\t"
                }, function(e) {
                    return e.code && (0, r.css)(["background:url(", ") no-repeat ", " #101224;"], m.replace("[code]", e.code).replace("[deviceType]", e.isMobile ? "mobile" : "desktop"), e.isMobile ? "center 7.75em/contain" : "center 3em/45.5em 28.375em")
                })),
                p = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-5t2r85-1"
                })(["", ";"], (0, a.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }))),
                b = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-5t2r85-2"
                })(["", ";margin-bottom:", ";"], (0, a.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }), function(e) {
                    return e.isMobile ? "3.25em" : "4.75em"
                })),
                g = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-5t2r85-3"
                })(["", ";width:", ";height:", ";margin-bottom:", ";"], (0, a.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), function(e) {
                    return e.isMobile ? "4.25em" : "7em"
                }, function(e) {
                    return e.isMobile ? "4.25em" : "5.875em"
                }, function(e) {
                    return e.isMobile ? "0.5em" : "1em"
                })),
                h = (0, n.memo)(r.default.span.withConfig({
                    componentId: "sc-5t2r85-4"
                })(["color:#ff0004;text-align:center;font:", " var(--mainFontBold);letter-spacing:", ";text-transform:uppercase;"], function(e) {
                    return e.isMobile ? "1em" : "1.5em"
                }, function(e) {
                    return e.isMobile ? "3.2px" : "4.8px"
                })),
                y = (0, n.memo)(r.default.h3.withConfig({
                    componentId: "sc-5t2r85-5"
                })(["color:rgb(var(--white));text-align:center;font:", " var(--mainFontBold);text-transform:uppercase;margin-bottom:", ";"], function(e) {
                    return e.isMobile ? "1.5em" : "2em"
                }, function(e) {
                    return e.isMobile ? "0.333em" : "0.25em"
                })),
                v = (0, n.memo)(r.default.p.withConfig({
                    componentId: "sc-5t2r85-6"
                })(["color:rgba(var(--white),0.7);font:", " var(--mainFontLight);text-align:center;"], function(e) {
                    return e.isMobile ? "1em" : "1.5em"
                })),
                x = (0, n.memo)(r.default.button.withConfig({
                    componentId: "sc-5t2r85-7"
                })(["", ";", ";margin-top:", ";min-width:", ";height:2.5em;backdrop-filter:blur(21px);"], (0, a.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), (0, a.styledButton)({
                    padding: "1px",
                    borderRadius: "0.25em",
                    background: "linear-gradient(0deg, #38ffaf 30.96%, #50a927 100%)"
                }), function(e) {
                    return e.isMobile ? "1.5em" : "2em"
                }, function(e) {
                    return e.isMobile ? "11.625em" : "14.625em"
                })),
                w = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-5t2r85-8"
                })(["", ";", ";background:linear-gradient(129deg,#8cc318 -30.86%,#159138 77.6%);border-radius:0.25em;padding:0.625em;text-align:center;"], (0, a.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), a.fullSize)),
                C = (0, n.memo)(r.default.span.withConfig({
                    componentId: "sc-5t2r85-9"
                })(["color:rgb(var(--white));font:", " var(--mainFontMedium);text-align:center;letter-spacing:", ";text-transform:uppercase;"], function(e) {
                    return e.isMobile ? "0.875em" : "1em"
                }, function(e) {
                    return e.isMobile ? "0.035em" : "0.04em"
                })),
                j = [2, 3, 4, 5, 6, 7, 8, 999, 999999];

            function k(e) {
                var t = e.strReload,
                    o = e.styles,
                    n = e.codeText,
                    r = e.code,
                    a = e.title,
                    s = e.description,
                    l = e.hasReloadButton,
                    c = e.isMobile;
                return (0, u.jsx)(f, {
                    style: o.container,
                    code: j.includes(r) ? r : "2",
                    isMobile: c,
                    children: (0, u.jsxs)(p, {
                        children: [(0, u.jsxs)(b, {
                            style: o.iconBox,
                            isMobile: c,
                            children: [(0, u.jsx)(g, {
                                style: o.icon,
                                isMobile: c,
                                children: (0, u.jsx)(i.default, {
                                    color: o.color || "rgb(var(--white))",
                                    isMobile: c
                                })
                            }), (0, u.jsx)(h, {
                                style: o.codeTxt,
                                isMobile: c,
                                children: n || (r ? "Code ".concat(r) : "")
                            })]
                        }), (0, u.jsx)(y, {
                            style: o.title,
                            isMobile: c,
                            children: a
                        }), s && (0, u.jsx)(v, {
                            style: o.description,
                            isMobile: c,
                            children: s
                        }), l && (0, u.jsx)(x, {
                            style: o.button,
                            isMobile: c,
                            onClick: function() {
                                window.location.reload()
                            },
                            children: (0, u.jsx)(w, {
                                style: o.buttonInner,
                                children: (0, u.jsx)(C, {
                                    style: o.buttonTxt,
                                    isMobile: c,
                                    children: t || "Reload"
                                })
                            })
                        })]
                    })
                })
            }
            k.defaultProps = {
                strReload: "",
                code: 0,
                title: "",
                description: "",
                styles: {},
                hasReloadButton: !1
            }, k.propTypes = c;
            const I = (0, n.memo)(k)
        },
        29772(e, t, o) {
            o.r(t), o.d(t, {
                default: () => b
            });
            var n = o(5556),
                r = o.n(n),
                i = o(38874),
                a = o(74848);

            function s(e) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s(e)
            }
            var l = ["duration", "delay", "children"];

            function c(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(o), !0).forEach(function(t) {
                        u(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function u(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != s(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != s(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == s(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var m = (0, i.keyframes)(["from{opacity:0;}to{opacity:1;}"]),
                f = i.default.div.withConfig({
                    componentId: "sc-qrkuoo-0"
                })(["@media (prefers-reduced-motion:no-preference){animation-name:", ";animation-fill-mode:backwards;}"], m),
                p = function(e) {
                    var t = e.duration,
                        o = void 0 === t ? 300 : t,
                        n = e.delay,
                        r = void 0 === n ? 0 : n,
                        i = e.children,
                        s = function(e, t) {
                            if (null == e) return {};
                            var o, n, r = function(e, t) {
                                if (null == e) return {};
                                var o = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        o[n] = e[n]
                                    }
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) o = i[n], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
                            }
                            return r
                        }(e, l);
                    return (0, a.jsx)(f, d(d({}, s), {}, {
                        style: d(d({}, s.style || {}), {}, {
                            animationDuration: "".concat(o, "ms"),
                            animationDelay: "".concat(r, "ms")
                        }),
                        children: i
                    }))
                };
            p.defaultProps = {
                duration: 300,
                delay: 0,
                children: null
            }, p.propTypes = {
                duration: r().number,
                delay: r().number,
                children: r().element
            };
            const b = p
        },
        73267(e, t, o) {
            o.r(t), o.d(t, {
                default: () => y
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(79555),
                l = o(70221),
                c = o(40194),
                d = o(74848),
                u = (0, s.getIsMobile)(),
                m = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-69d91d-0"
                })(["", ";width:100%;height:100%;position:absolute;z-index:1;", ";"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }), u ? "\n\t\ttop: 0;\n\t\tleft: 0;\n\t" : "\n\t\tleft: 50%;\n\t\ttop: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\t")),
                f = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-69d91d-1"
                })(["", ";width:", ";height:", ";flex:0 0 ", ";margin-bottom:0.5em;"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), u ? "2.5em" : "3em", u ? "2.5em" : "3em", u ? "2.5em" : "3em")),
                p = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-69d91d-2"
                })(["", ";margin-bottom:0.125em;"], (0, c.styledFlex)({
                    alignItems: "center"
                }))),
                b = (0, n.memo)(a.default.p.withConfig({
                    componentId: "sc-69d91d-3"
                })(["font:", " var(--mainFont);text-transform:capitalize;color:rgb(var(--white));margin-right:", ";"], u ? "0.875em" : "1.125em", u ? "0.57em" : "0.445em")),
                g = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-69d91d-4"
                })(["font:", " RobotoBold;color:rgb(226,156,46);"], u ? "1.25em" : "1.5em"));

            function h(e) {
                var t = e.styles,
                    o = e.resources,
                    n = e.minWinCoeff,
                    r = e.minCoeff,
                    i = e.coeffIncFr,
                    a = e.maxWinCoeff,
                    s = e.additionalInfoTxt,
                    c = e.isMaxWinUnlimited,
                    u = o.strIntroMinWinCoeffTxt,
                    h = o.strIntroMinCoeffTxt,
                    y = o.strIntroCoeffIncFrTxt,
                    v = o.strIntroMaxWinCoeffTxt,
                    x = o.strUnlimited;
                return (0, d.jsxs)(m, {
                    style: t.container,
                    children: [(0, d.jsx)(f, {
                        style: t.iconBox,
                        children: (0, d.jsx)(l.default, {})
                    }), r && (0, d.jsxs)(p, {
                        style: t.textBlock,
                        children: [(0, d.jsxs)(b, {
                            style: t.text,
                            children: [h || "_Minimum Coefficient", ":"]
                        }), (0, d.jsxs)(g, {
                            style: t.coeff,
                            children: ["x", r]
                        })]
                    }), n && (0, d.jsxs)(p, {
                        style: t.textBlock,
                        children: [(0, d.jsxs)(b, {
                            style: t.text,
                            children: [u || "_Minimum Winning Coefficient", ":"]
                        }), (0, d.jsxs)(g, {
                            style: t.coeff,
                            children: ["x", n]
                        })]
                    }), i && (0, d.jsxs)(p, {
                        style: t.textBlock,
                        children: [(0, d.jsxs)(b, {
                            style: t.text,
                            children: [y || "_Coefficient Increasing Frequency", ": "]
                        }), (0, d.jsx)(g, {
                            style: t.coeff,
                            children: i
                        })]
                    }), s && (0, d.jsx)(p, {
                        style: t.textBlock,
                        children: (0, d.jsx)(b, {
                            style: t.text,
                            children: s
                        })
                    }), (a || c) && (0, d.jsxs)(p, {
                        style: t.textBlock,
                        children: [(0, d.jsxs)(b, {
                            style: t.text,
                            children: [v || "_Maximum Winning Coefficient", ": "]
                        }), (0, d.jsx)(g, {
                            style: t.coeff,
                            children: c ? x || "_Unlimited" : "x".concat(a)
                        })]
                    })]
                })
            }
            h.defaultProps = {
                styles: {
                    container: {},
                    iconBox: {},
                    textBlock: {},
                    text: {},
                    coeff: {}
                },
                resources: {},
                minWinCoeff: null,
                minCoeff: null,
                coeffIncFr: null,
                maxWinCoeff: null,
                additionalInfoTxt: null,
                isMaxWinUnlimited: !1
            }, h.propTypes = {
                styles: i().shape({
                    container: i().object,
                    iconBox: i().object,
                    textBlock: i().object,
                    text: i().object,
                    coeff: i().object
                }),
                resources: i().object,
                minWinCoeff: i().oneOfType(i().number, i().string),
                minCoeff: i().oneOfType(i().number, i().string),
                coeffIncFr: i().oneOfType(i().number, i().string),
                maxWinCoeff: i().oneOfType(i().number, i().string),
                additionalInfoTxt: i().string,
                isMaxWinUnlimited: i().bool
            };
            const y = (0, n.memo)(h)
        },
        62330(e, t, o) {
            o.r(t), o.d(t, {
                default: () => w
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(79555),
                l = o(72269),
                c = o(37878),
                d = o(70562),
                u = o(40194),
                m = o(74848),
                f = (0, s.getIsMobile)(),
                p = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1y8jy4y-0"
                })(["", ";gap:1em;position:absolute;bottom:0.5em;right:", ";", ";z-index:2;"], (0, u.styledFlex)({
                    alignItems: "center"
                }), f ? "50%" : "1.5em", f && "transform: translateX(50%)")),
                b = function(e) {
                    var t = e.btnBg,
                        o = e.btnBorderColor;
                    return "\n\t\t".concat((0, u.styledFlex)({
                        alignItems: "center",
                        justifyContent: "center"
                    }), ";\n\t\t").concat((0, u.styledButton)({
                        background: t,
                        padding: f ? "0.25em" : "0.3125em",
                        border: "1px solid ".concat(o),
                        borderRadius: "50%"
                    }), ";\n\t\theight: ").concat(f ? "1.5em" : "2em", ";\n\t\twidth: ").concat(f ? "1.5em" : "2em", ";\n")
                },
                g = (0, n.memo)(a.default.button.withConfig({
                    componentId: "sc-1y8jy4y-1"
                })(["", ";"], b({
                    btnBg: "rgba(var(--white), 0.15)",
                    btnBorderColor: "rgba(var(--white), 0.3)"
                }))),
                h = (0, n.memo)(a.default.button.withConfig({
                    componentId: "sc-1y8jy4y-2"
                })(["", ";box-shadow:0 0 0.25em 0 #22c748;backdrop-filter:blur(20px);"], b({
                    btnBg: "linear-gradient(180deg, #22CA49 0%, #145732 78.13%)",
                    btnBorderColor: "#2BE46C"
                }))),
                y = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1y8jy4y-3"
                })(["", ";gap:0.5em;"], (0, u.styledFlex)({
                    alignItems: "center"
                }))),
                v = (0, n.memo)(a.default.button.withConfig({
                    componentId: "sc-1y8jy4y-4"
                })(["height:", ";width:", ";", ";cursor:auto;", ""], f ? "0.375em" : "0.5em", f ? "0.375em" : "0.5em", (0, u.styledButton)({
                    background: "rgba(var(--white), 0.15)",
                    border: "1px solid rgba(var(--white), 0.3)",
                    borderRadius: "50%"
                }), function(e) {
                    return e.active && (0, a.css)(["background-color:#d9d9d9;"])
                }));

            function x(e) {
                var t, o = e.styles,
                    n = e.allPointsCount,
                    r = e.currentPoint,
                    i = e.onChangePoint,
                    a = e.onClose,
                    s = (t = n) < 1 ? [] : Array.from({
                        length: t
                    }, function(e, t) {
                        return t + 1
                    });
                return (0, m.jsxs)(p, {
                    style: o.paginationBlock,
                    children: [(0, m.jsx)(g, {
                        onClick: function(e) {
                            e.stopPropagation(), 1 !== r && i(r - 1)
                        },
                        style: o.prevButton,
                        children: (0, m.jsx)(l.default, {
                            style: o.icon
                        })
                    }), (0, m.jsx)(y, {
                        style: o.dots,
                        children: s.map(function(e) {
                            return (0, m.jsx)(v, {
                                style: o.dot,
                                active: e === r
                            }, e)
                        })
                    }), (0, m.jsx)(h, {
                        onClick: r === n ? a : function(e) {
                            e.stopPropagation(), i(r + 1)
                        },
                        style: o.nextButton,
                        children: r === n ? (0, m.jsx)(d.default, {
                            style: o.icon
                        }) : (0, m.jsx)(c.default, {
                            style: o.icon
                        })
                    })]
                })
            }
            x.defaultProps = {
                allPointsCount: 2,
                currentPoint: 1,
                onChangePoint: function() {},
                onClose: function() {},
                styles: {
                    paginationBlock: {},
                    prevButton: {},
                    dots: {},
                    dot: {},
                    nextButton: {},
                    icon: {}
                }
            }, x.propTypes = {
                currentPoint: i().number,
                allPointsCount: i().number,
                onChangePoint: i().func,
                onClose: i().func,
                styles: i().shape({
                    paginationBlock: i().object,
                    prevButton: i().object,
                    dots: i().object,
                    dot: i().object,
                    nextButton: i().object,
                    icon: i().object
                })
            };
            const w = (0, n.memo)(x)
        },
        78115(e, t, o) {
            o.r(t), o.d(t, {
                default: () => c
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848),
                s = (0, n.lazy)(function() {
                    return Promise.all([o.e(5794), o.e(9205), o.e(9296)]).then(o.bind(o, 46915))
                });

            function l(e) {
                var t = e.children,
                    o = e.isMobile,
                    n = e.dragStyle;
                return o ? t : (0, a.jsx)(s, {
                    styles: n,
                    children: t
                })
            }
            l.defaultProps = {
                isMobile: !1,
                dragStyle: {}
            }, l.propTypes = {
                children: i().element.isRequired,
                isMobile: i().bool,
                dragStyle: i().object
            };
            const c = l
        },
        76373(e, t, o) {
            o.r(t), o.d(t, {
                default: () => F
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(79555),
                l = o(12754),
                c = o(24659),
                d = "".concat(c.CDN_URL, "/images/loaderGS.svg"),
                u = "".concat(c.CDN_URL, "/gifs/ninjaLoader.gif"),
                m = o(40194),
                f = o(74848);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
                return n
            }
            var b, g = (function(e) {
                    if (Array.isArray(e)) return e
                }(b = (0, l.GalaxsysFrontendApi)()) || function(e) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var o, n, r, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = (t = t.call(e)).next, !2; !(s = (o = r.call(t)).done) && (a.push(o.value), 2 !== a.length); s = !0);
                        } catch (e) {
                            l = !0, n = e
                        } finally {
                            try {
                                if (!s && null != t.return && (i = t.return(), Object(i) !== i)) return
                            } finally {
                                if (l) throw n
                            }
                        }
                        return a
                    }
                }(b) || function(e) {
                    if (e) {
                        if ("string" == typeof e) return p(e, 2);
                        var t = {}.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? p(e, 2) : void 0
                    }
                }(b) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[1],
                h = (0, s.getIsMobile)(),
                y = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-zh9k1g-0"
                })(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgb(var(--white));width:100%;height:100%;background:rgb(var(--black));border-radius:", ";border:", ";border-color:", ";position:", ";top:0;left:0;z-index:99;", ""], h ? 0 : "1em", h ? "0 none" : "1px solid", h ? "transparent" : "var(--mainLayoutBorderColor)", h ? "fixed" : "absolute", function(e) {
                    return e.fixed && (0, a.css)(["position:fixed;bottom:0;"])
                })),
                v = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-zh9k1g-1"
                })(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:", ";height:", ";margin-bottom:2em;"], h ? "9.6875em" : "14.375em", h ? "9.6875em" : "14.375em")),
                x = (0, a.keyframes)(["to{transform:rotate(360deg);}"]),
                w = a.default.div.withConfig({
                    componentId: "sc-zh9k1g-2"
                })(["", ";", ";position:absolute;left:0;top:0;gap:2em;border-radius:50%;animation:", " 1.2s infinite steps(25);"], (0, m.styledFlex)({
                    alignItems: "center"
                }), m.fullSize, x),
                C = a.default.span.withConfig({
                    componentId: "sc-zh9k1g-3"
                })(["width:", ";height:", ";border-radius:50%;position:absolute;", ";", ";transform:translate(-50%,-50%);", ";&:last-of-type{height:", ";width:", ";", ";background-color:rgb(var(--white));}"], h ? "0.375em" : "0.75em", h ? "0.375em" : "0.75em", function(e) {
                    var t = e.itemY;
                    return "top: calc(50% + ".concat(t, "em)")
                }, function(e) {
                    var t = e.itemX;
                    return "left: calc(50% + ".concat(t, "em)")
                }, function(e) {
                    return e.itemId && (0, a.css)(["background-color:rgba(var(--white),", ");"], 14 * e.itemId / 100)
                }, h ? "1.375em" : "2.25em", h ? "1.375em" : "2.25em", function(e) {
                    var t = e.itemX;
                    return "left: calc(45% + ".concat(t, "em)")
                }),
                j = (0, n.memo)(a.default.img.withConfig({
                    componentId: "sc-zh9k1g-4"
                })(["", ";display:block;max-width:100%;position:relative;z-index:1;pointer-events:none;"], m.fullSize)),
                k = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-zh9k1g-5"
                })(["width:", ";height:", ";margin-bottom:1em;"], h ? "9.125em" : "8.75em", h ? "1.875em" : "2.5em")),
                I = (0, n.memo)(a.default.img.withConfig({
                    componentId: "sc-zh9k1g-6"
                })(["display:block;max-width:100%;width:100%;height:100%;position:relative;z-index:1;pointer-events:none;"])),
                B = (0, n.memo)(a.default.p.withConfig({
                    componentId: "sc-zh9k1g-7"
                })(["color:rgba(var(--white),0.7);font:", " var(--mainFontLight);text-transform:uppercase;position:absolute;bottom:", ";text-align:center;width:100%;margin:0;", ""], h ? "1em/1.18" : "1.5em/1.08", h ? "2.5em" : "3.5em", function(e) {
                    return e.textTransformNone && (0, a.css)(["text-transform:none;"])
                })),
                P = (0, n.memo)(a.default.p.withConfig({
                    componentId: "sc-zh9k1g-8"
                })(["position:static;text-align:center;width:100%;margin:0;font:0.875em var(--mainFont);color:rgba(var(--white),0.78);"])),
                O = "undefined" != typeof document ? document : null,
                S = function() {
                    for (var e = [], t = h ? 4.84375 : 7.1875, o = Math.PI / 180 * 15, n = 0; n < 7; n++) {
                        var r = n * o,
                            i = parseFloat(Math.cos(r).toFixed(10)),
                            a = Math.sin(r);
                        e.push({
                            x: t * i,
                            y: t * a
                        })
                    }
                    return e
                }();

            function T(e) {
                var t = e.isPartnerLogo,
                    o = e.setContentLoaded,
                    r = e.styles,
                    i = e.isNinjaLoader,
                    a = function(e) {
                        "complete" === e.target.readyState && (o(!0), g("GalaxsysLoad", {
                            progress: 100
                        }))
                    };
                (0, n.useEffect)(function() {
                    return null == O || O.addEventListener("readystatechange", a), g("GalaxsysLoad", {
                            progress: 0
                        }),
                        function() {
                            null == O || O.removeEventListener("readystatechange", a)
                        }
                }, []), (0, n.useEffect)(function() {
                    "complete" === (null == O ? void 0 : O.readyState) && (o(!0), g("GalaxsysLoad", {
                        progress: 100
                    }))
                }, [null == O ? void 0 : O.readyState]);
                var s = c.IS_HIDDEN_GLAXSYS_LOADER ? "" : "Galaxsys",
                    l = c.IS_HIDDEN_GLAXSYS_LOADER ? "" : "Powered by Galaxsys",
                    m = c.IS_HIDDEN_GLAXSYS_LOADER ? "" : "Powered by The FashionTV Gaming Group",
                    p = !c.IS_HIDDEN_GLAXSYS_LOADER || i,
                    b = i ? u : d,
                    h = !i;
                return (0, f.jsxs)(y, {
                    style: r.container,
                    children: [(0, f.jsxs)(v, {
                        style: r.box,
                        children: [h && (0, f.jsx)(w, {
                            style: r.items,
                            children: S.map(function(e, t) {
                                return (0, f.jsx)(C, {
                                    style: r.item,
                                    itemX: e.x,
                                    itemY: e.y,
                                    itemId: t + 1
                                }, t)
                            })
                        }), p && (0, f.jsx)(j, {
                            src: b,
                            style: r.logo,
                            alt: "Loader"
                        })]
                    }), t ? (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(k, {
                            style: r.partnerLogoBlock,
                            children: (0, f.jsx)(I, {
                                src: r.partnerLogoUrl,
                                style: r.logo,
                                alt: "Loader"
                            })
                        }), (0, f.jsx)(P, {
                            style: r.partnerText,
                            children: l
                        })]
                    }) : "cashshow" === (null === c.gameKindName || void 0 === c.gameKindName ? void 0 : c.gameKindName.toLowerCase()) || "cashshow" === (null === c.gameKind || void 0 === c.gameKind ? void 0 : c.gameKind.toLowerCase()) ? (0, f.jsx)(B, {
                        textTransformNone: !0,
                        style: r.text,
                        children: m
                    }) : (0, f.jsx)(B, {
                        style: r.text,
                        children: s
                    })]
                })
            }
            T.defaultProps = {
                setContentLoaded: function() {},
                isPartnerLogo: !1,
                isNinjaLoader: !1,
                styles: {
                    container: {},
                    box: {},
                    items: {},
                    item: {},
                    text: {},
                    logo: {},
                    partnerLogoBlock: {},
                    partnerText: {},
                    partnerLogoUrl: ""
                }
            }, T.propTypes = {
                setContentLoaded: i().func,
                isPartnerLogo: i().bool,
                isNinjaLoader: i().bool,
                styles: i().shape({
                    container: i().object,
                    box: i().object,
                    items: i().object,
                    item: i().object,
                    text: i().object,
                    logo: i().object,
                    partnerLogoBlock: i().object,
                    partnerText: i().object,
                    partnerLogoUrl: i().string
                })
            };
            const F = (0, n.memo)(T)
        },
        25682(e, t, o) {
            o.r(t), o.d(t, {
                default: () => m
            });
            var n = o(98283),
                r = o(38874),
                i = o(5556),
                a = o.n(i),
                s = {
                    logoImg: a().string,
                    gameKindName: a().string,
                    theme: a().string,
                    styles: a().shape({
                        logoContainer: a().object,
                        logo: a().object
                    })
                },
                l = o(74848),
                c = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-1f0oqm5-0"
                })(["display:flex;align-items:center;justify-content:center;flex:0 0 6.875em;height:6.875em;padding:0;border-radius:1em;background:var(--logoContainerBg,var(--mainLayoutBg,rgba(var(--white),0.08)));border:1px solid;border-color:var(--logoContainerBorderColor,var(--mainLayoutBorderColor));margin-bottom:0.5em;", ";"], function(e) {
                    return "ornament" === e.theme.name && (0, r.css)(["border:0 none;flex:0 0 100%;background:var(--mainBackground);"])
                })),
                d = (0, r.default)("img").withConfig({
                    componentId: "sc-1f0oqm5-1"
                })(["max-width:100%;width:100%;height:100%;pointer-events:none;border-radius:1em;"]);

            function u(e) {
                var t = e.logoImg,
                    o = e.gameKindName,
                    n = e.styles,
                    i = e.theme;
                return (0, l.jsx)(r.ThemeProvider, {
                    theme: {
                        name: i
                    },
                    children: (0, l.jsx)(c, {
                        style: n.logoContainer,
                        children: (0, l.jsx)(d, {
                            style: n.logo,
                            src: t,
                            alt: o
                        })
                    })
                })
            }
            u.defaultProps = {
                logoImg: "",
                gameKindName: "",
                theme: "glass",
                styles: {
                    logoContainer: {},
                    logo: {}
                }
            }, u.propTypes = s;
            const m = (0, n.memo)(u)
        },
        64271(e, t, o) {
            o.r(t), o.d(t, {
                default: () => g
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(84622),
                l = o(79555),
                c = o(74848),
                d = (0, l.getIsMobile)(),
                u = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-lhhx9t-0"
                })(["position:", ";top:0;left:0;color:#fff;text-align:center;display:flex;align-items:center;justify-content:center;background:rgba(var(--black),0.7);min-height:15em;height:100%;width:100%;"], d ? "fixed" : "absolute")),
                m = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-lhhx9t-1"
                })(["color:#fff;text-align:center;padding:1em;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:1em var(--mainFont);"])),
                f = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-lhhx9t-2"
                })(["height:5.5em;width:5.5em;margin:0 auto 1em;display:block;cursor:pointer;"])),
                p = (0, n.memo)(a.default.p.withConfig({
                    componentId: "sc-lhhx9t-3"
                })(["margin-bottom:0.5em;font:0.875em var(--mainFontMedium);"]));

            function b(e) {
                var t = e.text,
                    o = e.styles;
                return (0, c.jsx)(u, {
                    style: o.container,
                    children: (0, c.jsxs)(m, {
                        style: o.content,
                        children: [(0, c.jsx)(f, {
                            style: o.icon,
                            children: (0, c.jsx)(s.default, {
                                color: "red"
                            })
                        }), (0, c.jsx)(p, {
                            style: o.text,
                            children: t
                        })]
                    })
                })
            }
            b.defaultProps = {
                text: "",
                styles: {
                    container: {},
                    content: {},
                    text: {},
                    icon: {},
                    iconColor: ""
                }
            }, b.propTypes = {
                text: i().string,
                styles: i().shape({
                    container: i().object,
                    content: i().object,
                    text: i().object,
                    icon: i().object,
                    iconColor: i().string
                })
            };
            const g = (0, n.memo)(b)
        },
        92222(e, t, o) {
            o.r(t), o.d(t, {
                default: () => g
            });
            var n = o(98283),
                r = o(38874),
                i = o(5556),
                a = o.n(i),
                s = {
                    culture: a().string,
                    notificationList: a().arrayOf((0, i.shape)({
                        guid: a().number || a().string,
                        message: a().string,
                        status: a().oneOf(["info", "success", "bonus", "error"])
                    })).isRequired,
                    isMobile: a().bool,
                    isSmall: a().bool,
                    style: a().object,
                    removeNotification: a().func.isRequired,
                    closeTime: a().number,
                    parentId: a().string
                },
                l = o(74848),
                c = (0, n.lazy)(function() {
                    return Promise.all([o.e(1193), o.e(8832), o.e(2207), o.e(5052), o.e(1543)]).then(o.bind(o, 33924))
                }),
                d = (0, n.lazy)(function() {
                    return Promise.all([o.e(1193), o.e(8832), o.e(2207), o.e(5052), o.e(8019)]).then(o.bind(o, 80400))
                }),
                u = (0, n.lazy)(function() {
                    return Promise.all([o.e(1193), o.e(8832), o.e(2207), o.e(5052), o.e(6879)]).then(o.bind(o, 59260))
                }),
                m = (0, n.lazy)(function() {
                    return Promise.all([o.e(1193), o.e(8832), o.e(2207), o.e(5052), o.e(1855)]).then(o.bind(o, 1855))
                }),
                f = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-la5e2j-0"
                })(["position:absolute;right:0;top:0;z-index:15;overflow:hidden;height:", ";width:", ";"], function(e) {
                    return e.isMobile ? "2.875em" : "var(--notificationContainerHeight, 6.875em)"
                }, function(e) {
                    return e.isMobile ? "var(--notificationContainerWidthMob, 100%)" : "var(--notificationContainerWidth, 21.5em)"
                })),
                p = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-la5e2j-1"
                })(["position:static;flex:0 0 auto;width:18.9375em;max-width:19.4375em;align-self:center;margin-bottom:0.5em;overflow:hidden;"]));

            function b(e) {
                var t = e.notificationList,
                    o = e.removeNotification,
                    r = e.style,
                    i = e.closeTime,
                    a = e.isMobile,
                    s = e.isLandscape,
                    b = e.culture,
                    g = e.parentId,
                    h = e.isSmall,
                    y = s ? d : a ? c : h ? m : u,
                    v = h && !a ? p : f,
                    x = (0, n.useRef)(null);
                (0, n.useEffect)(function() {
                    return w(), window.addEventListener("scroll", w),
                        function() {
                            window.removeEventListener("scroll", w)
                        }
                }, [t]);
                var w = (0, n.useCallback)(function() {
                        requestAnimationFrame(function() {
                            x.current && (x.current.style.transform = "translateY(".concat(window.pageYOffset, "px)"))
                        })
                    }, []),
                    C = (0, n.useCallback)(function(e) {
                        o(e)
                    }, [o]);
                return (0, l.jsx)(v, {
                    isMobile: a,
                    style: r.container,
                    ref: x,
                    "data-testid": "".concat(g ? "".concat(g, "_") : "", "notification-container"),
                    children: (0, l.jsx)(n.Suspense, {
                        fallback: null,
                        children: t.map(function(e, t) {
                            var o = e.guid,
                                n = e.message,
                                a = e.status;
                            return (0, l.jsx)(y, {
                                culture: b,
                                status: a,
                                message: n,
                                onClose: function() {
                                    return C(o)
                                },
                                closeTime: i,
                                styles: r.notification,
                                testIdIndex: t,
                                parentId: g
                            }, o || t)
                        })
                    })
                })
            }
            b.defaultProps = {
                culture: "en",
                isMobile: !1,
                style: {},
                closeTime: 1.7,
                parentId: "",
                isSmall: !1
            }, b.propTypes = s;
            const g = (0, n.memo)(b)
        },
        6317(e, t, o) {
            o.r(t), o.d(t, {
                default: () => u
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(74848),
                l = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1vda6rq-0"
                })(["top:0;left:0;width:100%;height:100%;position:fixed;z-index:100;background:#1e1e1e;-webkit-overflow-scrolling:auto;display:none;", ""], function(e) {
                    return (0, a.css)(["@media screen and (orientation:", "){display:block !important;}"], e.orientation)
                })),
                c = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1vda6rq-1"
                })(["background:no-repeat center/100% 100%;width:100px;height:100px;margin:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);", ";"], function(e) {
                    return e.img && (0, a.css)(["background-image:url(", ");"], e.img)
                }));

            function d(e) {
                var t = e.img,
                    o = e.styles,
                    n = e.orientation;
                return (0, s.jsx)(l, {
                    style: o.container,
                    orientation: n,
                    children: (0, s.jsx)(c, {
                        img: t,
                        style: o.content
                    })
                })
            }
            d.defaultProps = {
                img: "",
                orientation: "landscape",
                styles: {
                    container: {},
                    content: {}
                }
            }, d.propTypes = {
                img: i().string,
                orientation: i().string,
                styles: i().shape({
                    container: i().object,
                    content: i().object
                })
            };
            const u = (0, n.memo)(d)
        },
        74034(e, t, o) {
            o.r(t), o.d(t, {
                default: () => x
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(79555),
                l = o(43624),
                c = o(67956),
                d = o(74848),
                u = (0, s.getIsMobile)(),
                m = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1m5wa0b-0"
                })(["display:flex;align-items:center;flex-direction:column;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border:1px solid rgba(var(--white),0.16);border-radius:1em;background:#28292c;z-index:5;", ";"], u ? (0, a.css)(["width:calc(100% - 2em);padding:1em;"]) : (0, a.css)(["width:43em;padding:2em;"]))),
                f = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1m5wa0b-1"
                })(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;margin-bottom:1.5em;"])),
                p = (0, n.memo)(a.default.p.withConfig({
                    componentId: "sc-1m5wa0b-2"
                })(["color:rgba(var(--white),0.8);", ""], u ? (0, a.css)(["font:0.875em/1.375 var(--mainFont);letter-spacing:0.28px;"]) : (0, a.css)(["font:1em/1.5 var(--mainFont);letter-spacing:0.32px;"]))),
                b = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1m5wa0b-3"
                })(["display:flex;align-items:center;justify-content:space-between;gap:0.625em;width:100%;height:100%;", ";"], u ? (0, a.css)(["flex-direction:column;"]) : (0, a.css)(["flex-direction:row;"]))),
                g = (0, n.memo)(a.default.button.withConfig({
                    componentId: "sc-1m5wa0b-4"
                })(["display:flex;align-items:center;justify-content:center;flex:0 1 100%;gap:0.25em;padding:", "em;width:100%;height:", "em;font-size:1em;background:transparent;border:1px solid rgba(var(--white),0.8);border-radius:0.5em;cursor:pointer;"], u ? "0.625" : "0.75", u ? "2.75" : "3")),
                h = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-1m5wa0b-5"
                })(["font:1em/1.5 var(--mainFont);color:rgb(var(--white));"])),
                y = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-1m5wa0b-6"
                })(["width:1.5em;height:1.5em;"]));

            function v(e) {
                var t = e.styles,
                    o = e.resources,
                    n = e.partnerMessage,
                    r = e.buttons,
                    i = o.strPartnerMessageText,
                    a = o.strContinue,
                    s = o.strHistory,
                    u = o.strQuite;
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(c.default, {}), (0, d.jsxs)(m, {
                        style: t.main,
                        children: [(0, d.jsx)(f, {
                            style: t.textBlock,
                            children: (0, d.jsx)(p, {
                                style: t.text,
                                children: n || i || "Partner Message Text"
                            })
                        }), (0, d.jsxs)(b, {
                            style: t.buttonsBlock,
                            children: [(null == r ? void 0 : r.continue) && (0, d.jsxs)(g, {
                                onClick: function() {
                                    return r.continue.action()
                                },
                                children: [(0, d.jsx)(y, {
                                    children: (0, d.jsx)(l.Continue, {
                                        color: t.iconColor || "rgb(var(--white))"
                                    })
                                }), (0, d.jsx)(h, {
                                    children: a || "Continue"
                                })]
                            }), (null == r ? void 0 : r.history) && (0, d.jsxs)(g, {
                                onClick: function() {
                                    return r.history.action()
                                },
                                children: [(0, d.jsx)(y, {
                                    children: (0, d.jsx)(l.History, {
                                        color: t.iconColor || "rgb(var(--white))"
                                    })
                                }), (0, d.jsx)(h, {
                                    children: s || "History"
                                })]
                            }), (null == r ? void 0 : r.void) && (0, d.jsxs)(g, {
                                onClick: function() {
                                    var e;
                                    return r.void.action(null == r || null === (e = r.void) || void 0 === e ? void 0 : e.data)
                                },
                                children: [(0, d.jsx)(y, {
                                    children: (0, d.jsx)(l.Quite, {
                                        color: t.iconColor || "rgb(var(--white))"
                                    })
                                }), (0, d.jsx)(h, {
                                    children: u || "Quit"
                                })]
                            })]
                        })]
                    })]
                })
            }
            v.defaultProps = {
                styles: {},
                resources: {},
                partnerMessage: "",
                buttons: {}
            }, v.propTypes = {
                styles: i().object,
                resources: i().object,
                partnerMessage: i().string,
                buttons: i().object
            };
            const x = (0, n.memo)(v)
        },
        21704(e, t, o) {
            o.r(t), o.d(t, {
                default: () => j
            });
            var n = o(98283),
                r = o(38874),
                i = o(5052),
                a = o(79555),
                s = o(94206),
                l = o(40194),
                c = o(63139),
                d = o(5556),
                u = o.n(d),
                m = {
                    onClose: u().func,
                    goToBack: u().oneOfType([u().func, null]),
                    promotionsRef: u().object,
                    styles: u().shape({
                        container: u().object,
                        header: u().object,
                        icon: u().object,
                        iconColor: u().string,
                        title: u().object,
                        promotionItem: u().object
                    }),
                    strPromotions: u().string,
                    layerBgImg: u().string,
                    layerBgColor: u().string
                },
                f = o(24659),
                p = o(74848),
                b = (0, a.getIsMobile)(),
                g = "".concat(f.CDN_URL, "/images/promotions/promotionBg.webp"),
                h = r.default.div.withConfig({
                    componentId: "sc-1mgndmv-0"
                })(["", ";width:100%;", ";padding:", ";min-height:", ";"], (0, l.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), b && "background: transparent", b ? "0.625em 1em" : "2.375em", b ? "calc(1.5em + (2 * 0.625em))" : "calc(2.5em + (2 * 2.375em))"),
                y = r.default.h2.withConfig({
                    componentId: "sc-1mgndmv-1"
                })(["color:rgb(var(--white));font:", " var(--mainFont);text-align:center;text-transform:capitalize;"], b ? "0.875em" : "1.375em"),
                v = r.default.span.withConfig({
                    componentId: "sc-1mgndmv-2"
                })(["display:inline-flex;cursor:pointer;width:", ";height:", ";position:absolute;top:", ";left:", ";", ""], b ? "1.25em" : "2em", b ? "1.25em" : "2em", b ? "0.75em" : "2.75em", b ? "1em" : "2.75em", function(e) {
                    return e.iconClose && (0, r.css)(["left:auto;right:", ";"], b ? "1em" : "1.625em")
                }),
                x = r.default.div.withConfig({
                    componentId: "sc-1mgndmv-3"
                })(["", ";height:", ";"], (0, l.styledFlex)({
                    isWrap: !0
                }), b ? "calc(100% - 2.75em)" : "calc(100% - 7.25em)"),
                w = r.default.div.withConfig({
                    componentId: "sc-1mgndmv-4"
                })(["background:url(", ") no-repeat top left/cover,", ";", ";border-color:rgba(var(--white),0.4);", ";height:", ";width:", ";", ";position:absolute;top:0;left:0;z-index:", ";", ";"], function(e) {
                    return e.layerBgImg || g
                }, function(e) {
                    return e.layerBgColor || "rgb(var(--black))"
                }, !b && "border: 1px solid", !b && "border-radius: 1em", b ? "100dvh" : "100%", b ? "100%" : "66.5em", !b && "margin-right: 1em", b ? 4 : 5, function(e) {
                    return e.isLandscape && (0, r.css)(["padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);", "{font-size:0.9375em;}", "{padding:0.375em 1em;min-height:calc(1.25em + (2 * 0.375em));}", "{top:0.375em;}", "{height:calc(100% - 2em);}"], y, h, v, x)
                });

            function C(e) {
                var t = e.children,
                    o = e.onClose,
                    n = e.promotionsRef,
                    r = e.styles,
                    a = e.strPromotions,
                    l = e.goToBack,
                    d = e.layerBgImg,
                    u = e.layerBgColor,
                    m = b && !(0, s.useOrientationChange)();
                return (0, p.jsxs)(w, {
                    style: r.container,
                    ref: n,
                    isLandscape: m,
                    layerBgImg: d,
                    layerBgColor: u,
                    children: [(0, p.jsxs)(h, {
                        style: r.header,
                        children: [l && (0, p.jsx)(v, {
                            onClick: l,
                            style: r.icon,
                            children: (0, p.jsx)(c.ArrowBack, {
                                color: r.iconColor || "rgba(var(--white))"
                            })
                        }), (0, p.jsx)(y, {
                            style: r.title,
                            children: a || "__Promotions"
                        }), b && (0, p.jsx)(v, {
                            onClick: o,
                            style: r.icon,
                            iconClose: !0,
                            children: (0, p.jsx)(i.Close, {
                                color: r.iconColor || "rgba(var(--white))"
                            })
                        })]
                    }), (0, p.jsx)(x, {
                        style: r.content,
                        children: t
                    })]
                })
            }
            C.defaultProps = {
                onClose: function() {},
                goToBack: null,
                activeType: "",
                promotionsRef: null,
                styles: {
                    container: {},
                    header: {},
                    icon: {},
                    iconColor: "",
                    title: {},
                    promotionItem: {}
                },
                strPromotions: "",
                layerBgImg: "",
                layerBgColor: ""
            }, C.propTypes = m;
            const j = (0, n.memo)(C)
        },
        17412(e, t, o) {
            o.r(t), o.d(t, {
                default: () => M
            });
            var n = o(98283),
                r = o(38874),
                i = o(79555),
                a = o(67956),
                s = o(5052),
                l = o(55103),
                c = o(5556),
                d = o.n(c),
                u = {
                    data: d().object,
                    resources: d().shape({
                        strRebet: d().string,
                        strCancel: d().string,
                        strRebetContent: d().string,
                        strDontShow: d().string
                    }),
                    onClose: d().func,
                    rebetAllTickets: d().func,
                    rebetTicket: d().func,
                    selected: d().bool,
                    handleChangeSelected: d().func,
                    culture: d().string,
                    styles: d().shape({
                        backdrop: d().shape({
                            container: d().object
                        }),
                        container: d().object,
                        title: d().object,
                        content: d().object,
                        closeBtn: d().object,
                        text: d().object,
                        btnContainer: d().object,
                        iconColor: d().string,
                        button: d().string,
                        buttonTxt: d().string,
                        labelContainer: d().string,
                        checkboxContainer: d().string,
                        checkbox: d().string,
                        checkmark: d().string
                    })
                },
                m = o(74848);

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function p(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(o), !0).forEach(function(t) {
                        g(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function g(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != f(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != f(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == f(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var h = (0, i.getIsMobile)(),
                y = r.default.div.withConfig({
                    componentId: "sc-rvoj65-0"
                })(["", ";"], (0, l.PV)({
                    hasTopSpacing: !0,
                    hasOpacity: !0
                })),
                v = r.default.p.withConfig({
                    componentId: "sc-rvoj65-1"
                })(["font:", " var(--mainFont);margin:", ";text-align:center;color:rgba(var(--white),0.7);"], h ? "0.875em" : "1em", h ? 0 : "0 0 2em 0"),
                x = r.default.div.withConfig({
                    componentId: "sc-rvoj65-2"
                })(["position:relative;"]),
                w = r.default.h4.withConfig({
                    componentId: "sc-rvoj65-3"
                })(["font:var(", ",1em) / 1.25 var(", ",var(--mainFont));letter-spacing:0.0625em;margin:", ";white-space:pre-line;text-transform:uppercase;"], h ? "--rebetPopupTitleFontSizeMob" : "--rebetPopupTitleFontSize", h ? "rebetPopupTitleFontFamilyMob" : "--rebetPopupTitleFontFamily", h ? "0 0 0.5em" : "0 0 1em"),
                C = r.default.div.withConfig({
                    componentId: "sc-rvoj65-4"
                })(["", ";margin-top:1.5em;height:1.5em;"], (0, l.Dj)({
                    alignItems: "center",
                    justifyContent: "var(--labelContainerJustifyContent, flex-start)"
                })),
                j = r.default.div.withConfig({
                    componentId: "sc-rvoj65-5"
                })(["", ";margin:2em auto 0;gap:", ";"], (0, l.Dj)({
                    alignItems: "center"
                }), h ? "0.5em" : "1em"),
                k = r.default.button.withConfig({
                    componentId: "sc-rvoj65-6"
                })(["", ";", ";border:1px solid transparent;backdrop-filter:blur(42px);-webkit-backdrop-filter:blur(42px);font:1em var(--mainFontMedium);border-radius:var(--rebetPopupBtnBorderRadius,0.5em);width:100%;padding:", ";cursor:pointer;transition:opacity 0.3s linear,transform 0.3s linear;&:active{transform:scale(0.98);}", ";", ";"], (0, l.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }), l.xD, h ? "0.75em" : "1.125em", function(e) {
                    return e.rebetBtn && (0, r.css)(["background:var(--rebetPopupRebetBtnLayer1,linear-gradient(95.31deg,#66ac1f 4.92%,#127c30 100%)) padding-box,var(--rebetPopupRebetBtnLayer2,linear-gradient(180deg,#379129 0%,#38ffaf 100%)) border-box;border-color:var(--rebetPopupRebetBtnBorderColor,var(--rebetPopupBtnBorderColor,transparent));"])
                }, function(e) {
                    return e.cancelBtn && (0, r.css)(["background:var(--rebetPopupCancelBtnLayer1,linear-gradient(180deg,#484448 0%,#484448 100%)) padding-box,var(--rebetPopupCancelBtnLayer2,linear-gradient(180deg,#585558 0%,#a09ea0 100%)) border-box;border-color:var(--rebetPopupCancelBtnBorderColor,var(--rebetPopupBtnBorderColor,transparent));"])
                }),
                I = r.default.div.withConfig({
                    componentId: "sc-rvoj65-7"
                })(["", ";"], l.Au),
                B = r.default.div.withConfig({
                    componentId: "sc-rvoj65-8"
                })(["", ";", ";", ";z-index:", ";width:", ";background:var( --rebetPopupBg,linear-gradient(109.32deg,rgba(170,170,170,0.28) 0%,rgba(170,170,170,0.14) 98.5%) );backdrop-filter:blur(50px);-webkit-backdrop-filter:blur(50px);border-radius:var(--rebetPopupBorderRadius,", ");padding:var(--rebetPopupPadding,4em 2em 1.5em);text-align:center;border:1px solid;border-color:var( --rebetPopupBorderColor,rgba(var(--white),0.15) rgba(var(--white),0.35) rgba(var(--white),0.55) );", ";"], (0, l.Dj)({
                    flexDirection: "column"
                }), l.bD, l.Pi, h ? 11 : 6, h ? "var(--rebetPopupContentWidthMob, calc(100% - 3em))" : "35em", h ? "1em" : "1.5em", h && (0, r.css)(["position:fixed;", "{flex-direction:column-reverse;}"], j)),
                P = r.default.label.withConfig({
                    componentId: "sc-rvoj65-9"
                })(["display:block;position:relative;padding-left:2.25em;height:1.25em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]),
                O = r.default.span.withConfig({
                    componentId: "sc-rvoj65-10"
                })(['position:absolute;top:0;left:0;height:1.5em;width:1.5em;background:var(--rebetPopupCheckmarkBg,rgba(var(--black),0.01));box-shadow:inset 0 0 1em rgba(var(--black),0.4);border:1px solid;border-color:var( --rebetPopupCheckmarkBorderColor,rgba(var(--white),0.1) rgba(var(--white),0.4) rgba(var(--white),0.8) );border-radius:0.375em;&:after{content:"";position:absolute;display:none;left:0.5em;top:0.2em;width:0.25em;height:0.625em;border:solid #37fdad;border-width:0 0.125em 0.125em 0;transform:rotate(45deg);}']),
                S = r.default.input.withConfig({
                    componentId: "sc-rvoj65-11"
                })(["position:absolute;opacity:0;cursor:pointer;height:0;width:0;&:checked ~ span{&:after{display:block;}}"]),
                T = r.default.label.withConfig({
                    componentId: "sc-rvoj65-12"
                })(["cursor:pointer;font-size:0.875em;color:var(--rebetPopupLabelColor,rgb(var(--white)));letter-spacing:0.64px;vertical-align:middle;"]),
                F = {
                    container: {
                        zIndex: h ? 10 : 5,
                        backdropFilter: "blur(var(--rebetPopupBackdropFilterValue, 9px))"
                    }
                };

            function A(e) {
                var t = e.data,
                    o = e.onClose,
                    n = e.rebetAllTickets,
                    r = e.rebetTicket,
                    l = e.culture,
                    c = e.resources,
                    d = e.styles,
                    u = e.selected,
                    f = e.handleChangeSelected,
                    p = c.strRebet,
                    g = c.strReBet,
                    h = c.strCancel,
                    A = c.strRebetContent,
                    M = c.strDontShow,
                    L = "dontShow".concat((0, i.generateId)());
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(a.default, {
                        styles: b(b({}, F), d.backdrop)
                    }), (0, m.jsxs)(B, {
                        style: d.container,
                        children: [(0, m.jsx)(y, {
                            onClick: o,
                            style: d.closeBtn,
                            children: (0, m.jsx)(s.Close, {
                                color: d.iconColor || "#fff"
                            })
                        }), (0, m.jsxs)(x, {
                            style: d.content,
                            children: [(0, m.jsx)(w, {
                                style: (0, i.addRtlToStyles)(d.title, l),
                                children: A
                            }), (0, m.jsxs)(v, {
                                style: d.text,
                                children: [t.name, " ", (0, m.jsx)("span", {
                                    children: t.id
                                })]
                            }), (0, m.jsxs)(j, {
                                style: d.btnContainer,
                                children: [(0, m.jsx)(k, {
                                    style: b(b({}, d.button), d.cancelBtn),
                                    cancelBtn: !0,
                                    onClick: o,
                                    children: (0, m.jsx)(I, {
                                        style: d.buttonTxt,
                                        children: h || "Cancel"
                                    })
                                }), (0, m.jsx)(k, {
                                    style: b(b({}, d.button), d.rebetBtn),
                                    rebetBtn: !0,
                                    onClick: function() {
                                        switch (null == t ? void 0 : t.callbackType) {
                                            case "rebetAllTickets":
                                                n(t.id, t);
                                                break;
                                            case "rebetTicket":
                                                r(t.id, t);
                                                break;
                                            default:
                                                null == t || t.callback()
                                        }
                                        o()
                                    },
                                    children: (0, m.jsx)(I, {
                                        style: d.buttonTxt,
                                        children: p || g || "Rebet"
                                    })
                                })]
                            }), (0, m.jsxs)(C, {
                                style: d.labelContainer,
                                children: [(0, m.jsxs)(P, {
                                    style: d.checkboxContainer,
                                    children: [(0, m.jsx)(S, {
                                        id: L,
                                        type: "checkbox",
                                        style: d.checkbox,
                                        value: u,
                                        onChange: function() {
                                            return f(function(e) {
                                                return !e
                                            })
                                        }
                                    }), (0, m.jsx)(O, {
                                        style: d.checkmark
                                    })]
                                }), (0, m.jsx)(T, {
                                    htmlFor: L,
                                    children: M
                                })]
                            })]
                        })]
                    })]
                })
            }
            A.defaultProps = {
                data: {},
                culture: "",
                onClose: function() {},
                rebetAllTickets: function() {},
                rebetTicket: function() {},
                resources: {},
                selected: !1,
                handleChangeSelected: function() {},
                styles: {
                    container: {},
                    title: {},
                    closeBtn: {},
                    iconColor: "",
                    content: {},
                    text: {},
                    btnContainer: {},
                    button: {},
                    buttonTxt: {},
                    labelContainer: {},
                    checkboxContainer: {},
                    checkbox: {},
                    checkmark: {},
                    backdrop: {}
                }
            }, A.propTypes = u;
            const M = (0, n.memo)(A)
        },
        86159(e, t, o) {
            o.r(t), o.d(t, {
                default: () => j
            });
            var n = o(5556),
                r = o.n(n),
                i = o(98283),
                a = o(44412),
                s = o(94206),
                l = o(38874),
                c = o(79555),
                d = o(55103),
                u = o(74848);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
                return n
            }
            var f = (0, c.getIsMobile)(),
                p = (0, i.memo)(l.default.div.withConfig({
                    componentId: "sc-dlmccf-0"
                })(["display:flex;align-items:center;position:relative;z-index:2;width:100%;height:", ";font:1em var(--mainFont);padding:", ";background:var(--resultRowBg);"], f ? "1.1875em" : "2.375em", f ? "0.1875em 3.5em 0.1875em 0.75em" : "0.5em 4.5em 0.5em 0.5em")),
                b = (0, i.memo)(l.default.div.withConfig({
                    componentId: "sc-dlmccf-1"
                })(["display:flex;align-items:center;flex:1 1 auto;overflow:hidden;"])),
                g = (0, i.memo)(l.default.button.withConfig({
                    componentId: "sc-dlmccf-2"
                })(["display:flex;align-items:center;justify-content:center;border:0 none;outline:0 none;background:rgba(var(--white),0.2);padding:0.1875em;font-size:1em;color:rgb(var(--white));text-align:center;cursor:pointer;position:absolute;width:3em;z-index:3;", " ", ";"], f ? (0, l.css)(["right:0;bottom:0;height:100%;border-radius:0.5em 0 0.5em 0.5em;"]) : (0, l.css)(["right:1.125em;bottom:0.5em;height:1.375em;border-radius:0.25em;"]), function(e) {
                    return "top" === e.theme.name && (0, l.css)(["bottom:auto;"])
                })),
                h = (0, i.memo)(l.default.span.withConfig({
                    componentId: "sc-dlmccf-3"
                })(["", ";width:1em;height:1em;", ";"], (0, d.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), function(e) {
                    return e.iconHistory && (0, l.css)(["margin-right:0.25em;"])
                })),
                y = (0, i.memo)(l.default.div.withConfig({
                    componentId: "sc-dlmccf-4"
                })(["display:flex;align-items:center;flex-wrap:wrap;width:100%;font:1em var(--mainFont);background:var(--resultPopupBg);border-top:1px solid var(--resultPopupBorderColor,rgba(var(--white),0.1));position:absolute;left:0;z-index:2;", " ", ";", ";"], f ? (0, l.css)(["padding-bottom:1.1875em;border-radius:0.5em;"]) : (0, l.css)(["padding-bottom:2.375em;border-radius:0.75em;"]), function(e) {
                    return "top" === e.theme.name && (0, l.css)(["top:0;padding-bottom:0;"])
                }, function(e) {
                    return "bottom" === e.theme.name && (0, l.css)(["bottom:0;"])
                })),
                v = (0, i.memo)(l.default.div.withConfig({
                    componentId: "sc-dlmccf-5"
                })(["border-radius:0.1875em 0.1875em 0 0;background:var(--resultHeaderBg);flex:1 1 100%;line-height:1;width:100%;", " ", ";"], f ? (0, l.css)(["padding:0.125em 0 0.125em 0.75em;height:1.1875em;"]) : (0, l.css)(["padding:0.75em 1em;height:2.375em;"]), function(e) {
                    return "bottom" === e.theme.name && (0, l.css)(["position:absolute;bottom:0;"])
                })),
                x = (0, i.memo)(l.default.h3.withConfig({
                    componentId: "sc-dlmccf-6"
                })(["display:flex;align-items:center;flex:1 0;color:rgb(var(--white));margin-right:0.5em;font:0.75em var(--mainFont);text-transform:capitalize;"])),
                w = (0, i.memo)(l.default.div.withConfig({
                    componentId: "sc-dlmccf-7"
                })(["display:flex;align-items:center;flex-wrap:wrap;flex:1 1 auto;", " & > span{margin:0.125em;}"], f ? (0, l.css)(["padding:0.4375em;"]) : (0, l.css)(["padding:1em;"])));

            function C(e) {
                var t, o, n = e.styles,
                    r = e.isInTop,
                    c = e.titleText,
                    d = e.results,
                    f = e.theme,
                    C = (0, i.useRef)(null),
                    j = (t = (0, i.useState)(!1), o = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var n, r, i, a, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (o = o.call(e)).next, 0 === t) {
                                    if (Object(o) !== o) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = i.call(o)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    if (!l && null != o.return && (a = o.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return s
                        }
                    }(t, o) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return m(e, t);
                            var o = {}.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? m(e, t) : void 0
                        }
                    }(t, o) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    k = j[0],
                    I = j[1],
                    B = (0, i.useCallback)(function() {
                        I(!1)
                    }, [k]);
                return (0, s.useOutsideClick)(B, C), (0, u.jsx)(l.ThemeProvider, {
                    theme: {
                        name: f
                    },
                    children: (0, u.jsxs)(p, {
                        style: n.container,
                        ref: C,
                        children: [(0, u.jsx)(b, {
                            style: n.row,
                            children: d
                        }), (0, u.jsxs)(g, {
                            "data-gtm": "Results bar",
                            "aria-label": "Results bar",
                            onClick: function() {
                                return I(function(e) {
                                    return !e
                                })
                            },
                            style: n.toggleBtn,
                            children: [(0, u.jsx)(h, {
                                style: n.icon,
                                iconHistory: !0,
                                children: (0, u.jsx)(a.History, {
                                    color: "white"
                                })
                            }), (0, u.jsx)(h, {
                                style: n.icon,
                                children: r ? k ? (0, u.jsx)(a.CaretUp, {
                                    color: "white"
                                }) : (0, u.jsx)(a.CaretDown, {
                                    color: "white"
                                }) : k ? (0, u.jsx)(a.CaretDown, {
                                    color: "white"
                                }) : (0, u.jsx)(a.CaretUp, {
                                    color: "white"
                                })
                            })]
                        }), k && (0, u.jsxs)(y, {
                            style: n.popup,
                            open: k,
                            children: [(0, u.jsx)(v, {
                                style: n.popupHeader,
                                children: (0, u.jsx)(x, {
                                    style: n.popupTitle,
                                    children: c
                                })
                            }), (0, u.jsx)(w, {
                                style: n.popupBody,
                                children: d
                            })]
                        })]
                    })
                })
            }
            C.propTypes = {
                theme: r().string,
                styles: r().object,
                isInTop: r().bool,
                results: r().array,
                titleText: r().string
            }, C.defaultProps = {
                styles: {},
                isInTop: !1,
                results: [],
                titleText: "",
                theme: "bottom"
            };
            const j = (0, i.memo)(C)
        },
        94225(e, t, o) {
            o.r(t), o.d(t, {
                default: () => g
            });
            var n = o(98283),
                r = o(38874),
                i = o(5556),
                a = o.n(i),
                s = o(28030),
                l = o(74848);

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function d(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), o.push.apply(o, n)
                }
                return o
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(o), !0).forEach(function(t) {
                        m(e, t, o[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return e
            }

            function m(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != c(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != c(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == c(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
                return n
            }
            var p = r.default.div.withConfig({
                componentId: "sc-1bqqep-0"
            })(["transition:all 0.3s ease-out;", ""], function(e) {
                return e.show ? (0, r.css)(["overflow-y:", ";height:", "em;opacity:1;"], e.count * e.optionHeight < 12.5 ? "hidden" : "auto", e.count * e.optionHeight) : (0, r.css)(["height:0;overflow-y:", ";opacity:0.5;"], e.count * e.optionHeight < 12.5 ? "hidden" : "auto")
            });

            function b(e) {
                var t, o, r = e.onSelect,
                    i = e.list,
                    a = e.placeholder,
                    c = e.optionHeight,
                    d = e.styles,
                    m = e.selectedIndex,
                    b = e.disabled,
                    g = (t = (0, n.useState)(!1), o = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var n, r, i, a, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (o = o.call(e)).next, 0 === t) {
                                    if (Object(o) !== o) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = i.call(o)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    if (!l && null != o.return && (a = o.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return s
                        }
                    }(t, o) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return f(e, t);
                            var o = {}.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? f(e, t) : void 0
                        }
                    }(t, o) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    h = g[0],
                    y = g[1],
                    v = (0, n.useCallback)(function() {
                        y(!h)
                    }, [h]),
                    x = (0, n.useCallback)(function(e) {
                        r(e.target.id), v()
                    }, [r, v]),
                    w = (0, n.useCallback)(function(e) {
                        var t = e.currentTarget,
                            o = e.relatedTarget;
                        !t.contains(o) && h && v()
                    }, [h, v]);
                return (0, l.jsxs)("div", {
                    onBlur: w,
                    style: null == d ? void 0 : d.container,
                    children: [(0, l.jsxs)("div", {
                        style: h ? u(u({}, null == d ? void 0 : d.selected), null == d ? void 0 : d.selectedOpened) : null == d ? void 0 : d.selected,
                        onClick: b ? void 0 : v,
                        children: [(0, l.jsx)("span", {
                            children: i[m] || a
                        }), (0, l.jsx)("i", {
                            style: h ? u(u({}, null == d ? void 0 : d.icon), null == d ? void 0 : d.iconOpened) : null == d ? void 0 : d.icon,
                            children: (0, l.jsx)(s.default, {
                                style: null == d ? void 0 : d.svg,
                                color: d.iconColor
                            })
                        })]
                    }), (0, l.jsx)(p, {
                        count: i.length - 1,
                        optionHeight: c || 1,
                        show: h,
                        style: null == d ? void 0 : d.listContainer,
                        children: i.map(function(e, t) {
                            return +m !== t && (0, l.jsx)("span", {
                                id: t,
                                style: null == d ? void 0 : d.item,
                                onClick: x,
                                children: e
                            }, t)
                        })
                    })]
                })
            }
            b.defaultProps = {
                onSelect: function() {},
                list: [],
                placeholder: "",
                optionHeight: 1,
                styles: {
                    container: {},
                    listContainer: {},
                    item: {},
                    selected: {},
                    selectedOpened: {},
                    icon: {},
                    iconOpened: {},
                    svg: {},
                    iconColor: {}
                },
                selectedIndex: 0,
                disabled: !1
            }, b.propTypes = {
                onSelect: a().func,
                list: a().array,
                placeholder: a().string,
                optionHeight: a().number,
                styles: a().shape({
                    container: a().object,
                    listContainer: a().object,
                    selected: a().object,
                    item: a().object,
                    selectedOpened: a().object,
                    icon: a().object,
                    iconOpened: a().object,
                    svg: a().object,
                    iconColor: a().object
                }),
                selectedIndex: a().number,
                disabled: a().bool
            };
            const g = (0, n.memo)(b)
        },
        42185(e, t, o) {
            o.r(t), o.d(t, {
                default: () => g
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(99120),
                l = o(79555),
                c = o(74848),
                d = (0, l.getIsMobile)(),
                u = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-19hh702-0"
                })(["position:", ";top:0;left:0;color:#fff;text-align:center;display:flex;align-items:center;justify-content:center;background:rgba(var(--black),0.7);min-height:15em;height:100%;width:100%;"], d ? "fixed" : "absolute")),
                m = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-19hh702-1"
                })(["text-align:center;"])),
                f = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-19hh702-2"
                })(["height:5.5em;width:5.5em;margin:0 auto 1em;display:block;cursor:pointer;"])),
                p = (0, n.memo)(a.default.p.withConfig({
                    componentId: "sc-19hh702-3"
                })(["margin-bottom:0.5em;font:0.875em var(--mainFontMedium);"]));

            function b(e) {
                var t = e.text,
                    o = e.styles,
                    r = (0, n.useCallback)(function() {
                        return window.location.reload()
                    }, []);
                return (0, c.jsx)(u, {
                    style: o.container,
                    children: (0, c.jsxs)(m, {
                        style: o.content,
                        children: [(0, c.jsx)(f, {
                            style: o.icon,
                            onClick: r,
                            children: (0, c.jsx)(s.default, {
                                color: "#fff"
                            })
                        }), (0, c.jsx)(p, {
                            style: o.text,
                            children: t
                        })]
                    })
                })
            }
            const g = (0, n.memo)(b);
            b.defaultProps = {
                text: "",
                styles: {
                    container: {},
                    content: {},
                    text: {},
                    icon: {},
                    iconColor: ""
                }
            }, b.propTypes = {
                text: i().string,
                styles: i().shape({
                    container: i().object,
                    content: i().object,
                    text: i().object,
                    icon: i().object,
                    iconColor: i().string
                })
            }
        },
        33462(e, t, o) {
            o.r(t), o.d(t, {
                default: () => u
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(74848),
                l = (0, a.keyframes)(["to{background-position-x:-20%;}"]),
                c = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-10tckot-0"
                })(["background:linear-gradient( 100deg,rgba(var(--white),0) 40%,rgba(127,114,102,0.32) 50%,rgba(var(--white),0) 60% ),var(--skeletonBg,rgba(77,65,54,0.3));background-size:200% 100%;background-position-x:180%;margin-bottom:", ";height:", ";width:100%;border-radius:0.5em;animation:1.2s ", " ease-in-out infinite;user-select:none;"], function(e) {
                    return "".concat(e.marginB, "em") || 0
                }, function(e) {
                    return "".concat(e.height, "em") || 0
                }, l));

            function d(e) {
                var t = e.styles,
                    o = e.height,
                    n = e.marginB;
                return (0, s.jsx)(c, {
                    style: t.container,
                    height: o,
                    marginB: n
                })
            }
            d.defaultProps = {
                styles: {
                    container: {}
                },
                height: void 0,
                marginB: void 0
            }, d.propTypes = {
                styles: i().shape({
                    container: i().object
                }),
                height: i().number,
                marginB: i().number
            };
            const u = (0, n.memo)(d)
        },
        18447(e, t, o) {
            o.r(t), o.d(t, {
                default: () => v
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(38874),
                s = o(83177),
                l = o(79555),
                c = o(55103),
                d = o(74848),
                u = (0, l.getIsMobile)(),
                m = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-n567xh-0"
                })(["display:flex;width:100%;"])),
                f = (0, n.memo)(a.default.label.withConfig({
                    componentId: "sc-n567xh-1"
                })(["", ";cursor:pointer;"], (0, c.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center"
                }))),
                p = a.default.span.withConfig({
                    componentId: "sc-n567xh-2"
                })(["", ";width:", ";height:", ";border-radius:", ";margin-right:", ";"], (0, c.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), u ? "1em" : "1.5em", u ? "1em" : "1.5em", u ? "0.25em" : "0.375em", u ? "0.5em" : "0.625em"),
                b = a.default.span.withConfig({
                    componentId: "sc-n567xh-3"
                })(["width:100%;height:100%;display:none;padding:", ";"], u ? "0.125em" : "0.25em"),
                g = (0, n.memo)(a.default.input.withConfig({
                    componentId: "sc-n567xh-4"
                })(["height:0;width:0;visibility:hidden;&:checked ~ ", "{box-shadow:0 0 1em 0 rgba(var(--black),0.4) inset;}&:checked ~ ", " > ", "{", ";}"], p, p, b, (0, c.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                h = (0, n.memo)(a.default.span.withConfig({
                    componentId: "sc-n567xh-5"
                })(["color:rgba(var(--white),0.8);font:", " var(--mainFontMedium);"], u ? "0.75em" : "0.875em"));

            function y(e) {
                var t = e.classNames,
                    o = e.strTurbo,
                    n = e.isTurboMode,
                    r = e.isDisabled,
                    i = e.handleChangeTurboMode;
                return (0, d.jsx)(m, {
                    className: "".concat(t.autoBet__popup__checkbox__row, " ").concat(r ? "disabled" : ""),
                    children: (0, d.jsxs)(f, {
                        htmlFor: "autobetTurbo",
                        className: t.autoBet__popup__checkbox,
                        children: [(0, d.jsx)(g, {
                            id: "autobetTurbo",
                            type: "checkbox",
                            checked: n,
                            onChange: i
                        }), (0, d.jsx)(p, {
                            className: t.autoBet__popup__checkIcon__block,
                            children: (0, d.jsx)(b, {
                                className: t.autoBet__popup__checkIcon,
                                children: (0, d.jsx)(s.default, {})
                            })
                        }), (0, d.jsx)(h, {
                            className: t.autoBet__popup__checkbox__text,
                            children: o || "_Turbo"
                        })]
                    })
                })
            }
            y.defaultProps = {
                classNames: {},
                strTurbo: void 0,
                isTurboMode: void 0,
                isDisabled: void 0,
                handleChangeTurboMode: function() {}
            }, y.propTypes = {
                classNames: i().object,
                strTurbo: i().string,
                isTurboMode: i().bool,
                isDisabled: i().bool,
                handleChangeTurboMode: i().func
            };
            const v = (0, n.memo)(y)
        },
        38985(e, t, o) {
            o.r(t), o.d(t, {
                default: () => b
            });
            var n = o(98283),
                r = o(38874),
                i = o(10899),
                a = o(5556),
                s = o.n(a),
                l = {
                    url: s().string,
                    text: s().string,
                    uCImgUrl: s().string,
                    startTime: s().any,
                    endTime: s().any,
                    resources: s().string,
                    styles: s().shape({
                        container: s().object,
                        underConstructionImg: s().object,
                        label: s().object,
                        title: s().object,
                        labelBlock: s().shape({
                            container: s().object,
                            text: s().object
                        })
                    })
                },
                c = o(74848),
                d = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-801o06-0"
                })(["position:relative;width:100%;height:100%;background:", ";border-radius:1em;border:1px solid;border-color:rgba(var(--white),0.1) rgba(var(--white),0.2) rgba(var(--white),0.336);padding:1em 1em 5em;display:flex;align-items:flex-end;"], function(e) {
                    return 'url("'.concat(e.url, '") no-repeat center/contain rgba(var(--white), 0.14);\n    ')
                })),
                u = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-801o06-1"
                })(["margin-top:1em;width:100%;"])),
                m = (0, n.memo)(r.default.h3.withConfig({
                    componentId: "sc-801o06-2"
                })(["color:rgb(var(--white));text-transform:uppercase;font:3.3125em var(--mainFont);margin:0;text-align:center;letter-spacing:0.64px;font-weight:400;"])),
                f = (0, n.memo)(r.default.img.withConfig({
                    componentId: "sc-801o06-3"
                })(["max-width:100%;"]));

            function p(e) {
                var t = e.url,
                    o = e.uCImgUrl,
                    n = e.startTime,
                    r = e.endTime,
                    a = e.styles,
                    s = e.resources || {},
                    l = s.strAttention,
                    p = s.strUnderMaintenanceCheckShortly,
                    b = s.strUnderMaintenanceCheckBack,
                    g = r ? b : p;
                return (0, c.jsxs)(d, {
                    url: t,
                    style: a.container,
                    children: [(0, c.jsx)(f, {
                        src: o,
                        style: a.underConstructionImg
                    }), n ? (0, c.jsxs)(u, {
                        style: a.label,
                        children: [(0, c.jsx)(m, {
                            style: a.title,
                            children: l
                        }), (0, c.jsx)(i.default, {
                            text: g,
                            endTime: r,
                            styles: a.labelBlock
                        })]
                    }) : null]
                })
            }
            p.defaultProps = {
                url: "",
                text: "",
                uCImgUrl: "",
                startTime: null,
                endTime: null,
                resources: "",
                styles: {
                    container: {},
                    label: {},
                    underConstructionImg: {},
                    labelBlock: {
                        container: {},
                        label: {},
                        title: {},
                        labelBlock: {
                            container: {},
                            text: {}
                        }
                    }
                }
            }, p.propTypes = l;
            const b = (0, n.memo)(p)
        },
        10899(e, t, o) {
            o.r(t), o.d(t, {
                default: () => u
            });
            var n = o(98283),
                r = o(38874),
                i = o(5556),
                a = o.n(i),
                s = {
                    text: a().string,
                    startTime: a().string,
                    endTime: a().string,
                    styles: a().shape({
                        container: a().object,
                        text: a().object
                    })
                },
                l = o(74848),
                c = (0, n.memo)(r.default.div.withConfig({
                    componentId: "sc-153glhw-0"
                })(["font-size:0.875em;line-height:1.5;color:rgba(var(--white),0.7);text-align:center;margin-top:1em;"]));

            function d(e) {
                var t = e.text,
                    o = e.endTime,
                    n = e.styles;
                return (0, l.jsxs)(c, {
                    style: n.container || {},
                    children: [(0, l.jsxs)("span", {
                        style: n.text,
                        children: [t, " "]
                    }), (0, l.jsx)("span", {
                        style: n.text,
                        children: o
                    })]
                })
            }
            const u = (0, n.memo)(d);
            d.defaultProps = {
                text: "",
                startTime: "",
                endTime: "",
                styles: {
                    container: {},
                    text: {}
                }
            }, d.propTypes = s
        },
        42136(e, t, o) {
            o.r(t), o.d(t, {
                AboutHashCode: () => B.default,
                AmountBox: () => p.default,
                AutoBetPopup: () => x.default,
                Avatar: () => c.default,
                Backdrop: () => G.default,
                BalanceBox: () => g.default,
                BetBox: () => u.default,
                BonusWinPopup: () => w.default,
                BoxTable: () => m.default,
                Clock: () => i.default,
                DocumentAndMobileVerified: () => M.default,
                Drag: () => r.default,
                ErrorPage: () => b.default,
                FadeIn: () => d.default,
                IdBalanceBlock: () => C.default,
                IntroCoeffBlock: () => j.default,
                IntroPaginationBlock: () => Q.default,
                IsDrag: () => l.default,
                Loader: () => a.default,
                LogoContainer: () => I.default,
                NoConnectionPartial: () => T.default,
                NotificationContainer: () => F.default,
                Orientationchange: () => Y.default,
                PartnerMessagePopup: () => K.default,
                Ping: () => n.default,
                Promotions: () => h.default,
                RebetPopup: () => y.default,
                ResultItem: () => v.default,
                ResultRowContainer: () => V.default,
                RoundedSlidingItem: () => q,
                Select: () => s.default,
                SessionEndModal: () => P.default,
                Skeleton: () => f.default,
                SkewedSlidingItem: () => W,
                SpinnerLoader: () => k.default,
                TurboModeSwitcher: () => S.default,
                UnderConstruction: () => O.default,
                UnderConstructionLabel: () => A.default
            });
            var n = o(1733),
                r = o(46915),
                i = o(16049),
                a = o(76373),
                s = o(94225),
                l = o(78115),
                c = o(312),
                d = o(29772),
                u = o(84873),
                m = o(25767),
                f = o(33462),
                p = o(17710),
                b = o(7363),
                g = o(16496),
                h = o(21704),
                y = o(17412),
                v = o(83339),
                x = o(13102),
                w = o(85473),
                C = o(43718),
                j = o(73267),
                k = o(61101),
                I = o(25682),
                B = o(47212),
                P = o(42185),
                O = o(38985),
                S = o(18447),
                T = o(64271),
                F = o(92222),
                A = o(10899),
                M = o(14513),
                L = o(98283),
                D = o(5556),
                R = o.n(D),
                _ = o(38874),
                z = o(74848),
                E = (0, L.memo)(_.default.div.withConfig({
                    componentId: "sc-9hmsck-0"
                })(["width:100%;height:100%;transform:skew(", "deg);background-color:", ";"], function(e) {
                    return e.degree
                }, function(e) {
                    return e.color
                }));

            function N(e) {
                var t = e.color,
                    o = e.degree;
                return (0, z.jsx)(E, {
                    color: t,
                    degree: o
                })
            }
            N.defaultProps = {
                color: "black",
                degree: -30
            }, N.propTypes = {
                color: R().string,
                degree: R().number
            };
            const W = (0, L.memo)(N);
            var H = (0, L.memo)(_.default.div.withConfig({
                componentId: "sc-1ji679q-0"
            })(["width:100%;height:100%;border-radius:", "px;background-color:", ";"], function(e) {
                return e.radius
            }, function(e) {
                return e.color
            }));

            function U(e) {
                var t = e.color,
                    o = e.radius;
                return (0, z.jsx)(H, {
                    color: t,
                    radius: o
                })
            }
            U.defaultProps = {
                color: "grey",
                radius: 24
            }, U.propTypes = {
                color: R().string,
                radius: R().number
            };
            const q = (0, L.memo)(U);
            var V = o(86159),
                K = o(74034),
                G = o(67956),
                Y = o(6317),
                Q = o(62330)
        },
        70562(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M15.207 3.0189C12.7855 6.31311 10.3131 9.56515 7.79692 12.7731C6.75704 11.6153 5.68526 10.4931 4.57145 9.41589C3.3276 8.21138 1.70264 10.398 2.94489 11.597C4.29028 12.8995 5.58788 14.2569 6.81903 15.6884C7.3906 16.351 8.26682 16.4966 8.8602 15.7469C11.7028 12.1498 14.4876 8.49963 17.2094 4.79561C18.2476 3.38242 16.2494 1.60295 15.207 3.0189Z",
                        fill: t
                    })
                })
            }
            s.defaultProps = {
                color: "rgb(var(--white))"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        72269(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M12.4964 17.4785L5 9.98926L12.4964 2.5",
                        stroke: t,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
            s.defaultProps = {
                color: "rgba(var(--white))"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        37878(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M7.50365 2.52149L15.0001 10.0107L7.50365 17.5",
                        stroke: t,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
            s.defaultProps = {
                color: "rgba(var(--white))"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        83177(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 11 8",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M3.60677 6.26641L1.54079 4.20043C1.31058 3.97023 0.944613 3.97023 0.714404 4.20043C0.484196 4.43064 0.484196 4.79661 0.714404 5.02682L3.18767 7.50009C3.41788 7.7303 3.78975 7.7303 4.01996 7.50009L10.2769 1.24904C10.5071 1.01884 10.5071 0.652865 10.2769 0.422656C10.0467 0.192448 9.68072 0.192448 9.45052 0.422656L3.60677 6.26641Z",
                        fill: t
                    })
                })
            }
            s.defaultProps = {
                color: "#37FDAD"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        38316(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: (0, a.jsx)("path", {
                        d: "M9.15 18.2C8.9 18.3667 8.64583 18.375 8.3875 18.225C8.12917 18.075 8 17.85 8 17.55V6.3C8 6 8.12917 5.775 8.3875 5.625C8.64583 5.475 8.9 5.48333 9.15 5.65L18 11.3C18.2333 11.45 18.35 11.6583 18.35 11.925C18.35 12.1917 18.2333 12.4 18 12.55L9.15 18.2ZM9.5 16.2L16.225 11.925L9.5 7.65V16.2Z"
                    })
                })
            }
            s.defaultProps = {
                color: "black"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        81491(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: (0, a.jsx)("path", {
                        d: "M3.48405 12.1519H3.63405V12.0019C3.63405 6.47251 8.08845 2.00078 13.5177 2.15382C18.519 2.29588 22.7074 6.58344 22.8463 11.7172C22.9958 17.2906 18.6266 21.85 13.2401 21.85C11.0103 21.85 8.97285 21.0739 7.35076 19.7616L7.34902 19.7602C6.91376 19.4185 6.88041 18.7342 7.27703 18.3277C7.61278 17.9836 8.13278 17.9545 8.50681 18.2512C9.81149 19.3048 11.4595 19.9282 13.2401 19.9282C17.555 19.9282 21.0334 16.3125 20.9782 11.889V11.8889C20.923 7.67843 17.4677 4.13239 13.3506 4.07568L13.3505 4.07568C9.01406 4.019 5.50206 7.58939 5.50206 12.0019V12.1519H5.65206H7.59244C7.94125 12.1519 8.12304 12.5876 7.87533 12.8414L7.87514 12.8416L4.85094 15.9519C4.85088 15.952 4.85082 15.9521 4.85075 15.9521C4.69287 16.1137 4.45408 16.1137 4.2962 15.9521C4.29613 15.9521 4.29607 15.952 4.29601 15.9519L1.27181 12.8416L1.27183 12.8416L1.26995 12.8398C1.01426 12.5859 1.19513 12.1519 1.54367 12.1519H3.48405ZM13.6321 12.1575V12.2418L13.7042 12.2856L16.8255 14.1849C16.8256 14.1849 16.8257 14.185 16.8258 14.1851C17.1342 14.3749 17.2439 14.7951 17.056 15.1263C16.8698 15.4435 16.4641 15.551 16.1468 15.3617C16.1467 15.3616 16.1465 15.3615 16.1464 15.3614L12.7659 13.3072C12.7658 13.3072 12.7657 13.3071 12.7656 13.3071C12.4851 13.1345 12.3061 12.8165 12.3061 12.4796V8.39153C12.3061 8.01542 12.611 7.70835 12.9691 7.70835C13.3286 7.70835 13.6321 8.01673 13.6321 8.38042V12.1575Z"
                    })
                })
            }
            s.defaultProps = {
                color: "black"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        27225(e, t, o) {
            o.r(t), o.d(t, {
                default: () => l
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: (0, a.jsx)("path", {
                        d: "M16.125 15.825C15.975 15.675 15.9 15.4938 15.9 15.2812C15.9 15.0688 15.975 14.8917 16.125 14.75L18.125 12.75H10.125C9.9125 12.75 9.73438 12.6777 9.59063 12.5331C9.44688 12.3885 9.375 12.2094 9.375 11.9956C9.375 11.7819 9.44688 11.6042 9.59063 11.4625C9.73438 11.3208 9.9125 11.25 10.125 11.25H18.075L16.05 9.225C15.9167 9.09167 15.85 8.92128 15.85 8.71383C15.85 8.50636 15.9268 8.32719 16.0803 8.17633C16.2211 8.02544 16.3971 7.95 16.6083 7.95C16.8194 7.95 17 8.025 17.15 8.175L20.475 11.5C20.5583 11.5833 20.6167 11.6678 20.65 11.7533C20.6833 11.8389 20.7 11.9306 20.7 12.0283C20.7 12.1261 20.6833 12.2167 20.65 12.3C20.6167 12.3833 20.5583 12.4667 20.475 12.55L17.175 15.85C17.0417 15.9833 16.8708 16.05 16.6625 16.05C16.4542 16.05 16.275 15.975 16.125 15.825ZM4.5 21C4.1 21 3.75 20.85 3.45 20.55C3.15 20.25 3 19.9 3 19.5V4.5C3 4.1 3.15 3.75 3.45 3.45C3.75 3.15 4.1 3 4.5 3H11.025C11.2375 3 11.4156 3.07229 11.5594 3.21688C11.7031 3.36148 11.775 3.54064 11.775 3.75438C11.775 3.96813 11.7031 4.14583 11.5594 4.2875C11.4156 4.42917 11.2375 4.5 11.025 4.5H4.5V19.5H11.025C11.2375 19.5 11.4156 19.5723 11.5594 19.7169C11.7031 19.8615 11.775 20.0406 11.775 20.2544C11.775 20.4681 11.7031 20.6458 11.5594 20.7875C11.4156 20.9292 11.2375 21 11.025 21H4.5Z"
                    })
                })
            }
            s.defaultProps = {
                color: "black"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s)
        },
        43624(e, t, o) {
            o.r(t), o.d(t, {
                Continue: () => n.default,
                History: () => r.default,
                Quite: () => i.default
            });
            var n = o(38316),
                r = o(81491),
                i = o(27225)
        },
        44412(e, t, o) {
            o.r(t), o.d(t, {
                CaretDown: () => l,
                CaretUp: () => d,
                History: () => m
            });
            var n = o(98283),
                r = o(5556),
                i = o.n(r),
                a = o(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    fill: t,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M13.3538 6.35375L8.35375 11.3538C8.30732 11.4002 8.25217 11.4371 8.19147 11.4623C8.13077 11.4874 8.06571 11.5004 8 11.5004C7.9343 11.5004 7.86923 11.4874 7.80853 11.4623C7.74783 11.4371 7.69269 11.4002 7.64625 11.3538L2.64625 6.35375C2.55243 6.25993 2.49973 6.13269 2.49973 6C2.49973 5.86732 2.55243 5.74007 2.64625 5.64625C2.74007 5.55243 2.86732 5.49973 3 5.49973C3.13269 5.49973 3.25993 5.55243 3.35375 5.64625L8 10.2931L12.6463 5.64625C12.6927 5.5998 12.7479 5.56295 12.8086 5.53781C12.8693 5.51267 12.9343 5.49973 13 5.49973C13.0657 5.49973 13.1308 5.51267 13.1915 5.53781C13.2521 5.56295 13.3073 5.5998 13.3538 5.64625C13.4002 5.69271 13.4371 5.74786 13.4622 5.80856C13.4873 5.86925 13.5003 5.93431 13.5003 6C13.5003 6.0657 13.4873 6.13076 13.4622 6.19145C13.4371 6.25215 13.4002 6.3073 13.3538 6.35375Z"
                    })
                })
            }
            s.defaultProps = {
                color: "rgba(235, 235, 245, 0.6)"
            }, s.propTypes = {
                color: i().string
            };
            const l = (0, n.memo)(s);

            function c(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    fill: t,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M13.3538 9.64625L8.35375 4.64625C8.30732 4.59976 8.25217 4.56288 8.19147 4.53772C8.13077 4.51255 8.06571 4.4996 8 4.4996C7.9343 4.4996 7.86923 4.51255 7.80853 4.53772C7.74783 4.56288 7.69269 4.59976 7.64625 4.64625L2.64625 9.64625C2.55243 9.74007 2.49973 9.86731 2.49973 10C2.49973 10.1327 2.55243 10.2599 2.64625 10.3537C2.74007 10.4476 2.86732 10.5003 3 10.5003C3.13269 10.5003 3.25993 10.4476 3.35375 10.3537L8 5.70687L12.6463 10.3537C12.6927 10.4002 12.7479 10.4371 12.8086 10.4622C12.8693 10.4873 12.9343 10.5003 13 10.5003C13.0657 10.5003 13.1308 10.4873 13.1915 10.4622C13.2521 10.4371 13.3073 10.4002 13.3538 10.3537C13.4002 10.3073 13.4371 10.2521 13.4622 10.1914C13.4873 10.1307 13.5003 10.0657 13.5003 10C13.5003 9.9343 13.4873 9.86924 13.4622 9.80855C13.4371 9.74785 13.4002 9.6927 13.3538 9.64625Z"
                    })
                })
            }
            c.defaultProps = {
                color: "rgba(235, 235, 245, 0.6)"
            }, c.propTypes = {
                color: i().string
            };
            const d = (0, n.memo)(c);

            function u(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    fill: t,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M8.5 4.99999V7.71686L10.7575 9.07124C10.8712 9.13953 10.9531 9.2502 10.9853 9.3789C11.0174 9.50759 10.997 9.64378 10.9288 9.75749C10.8605 9.8712 10.7498 9.95313 10.6211 9.98524C10.4924 10.0174 10.3562 9.99703 10.2425 9.92874L7.7425 8.42874C7.66851 8.38428 7.60729 8.32143 7.56479 8.2463C7.52229 8.17116 7.49997 8.08631 7.5 7.99999V4.99999C7.5 4.86738 7.55268 4.7402 7.64645 4.64644C7.74022 4.55267 7.86739 4.49999 8 4.49999C8.13261 4.49999 8.25979 4.55267 8.35355 4.64644C8.44732 4.7402 8.5 4.86738 8.5 4.99999ZM8 1.99999C7.21125 1.99802 6.42994 2.15251 5.70128 2.4545C4.97263 2.7565 4.31111 3.20001 3.755 3.75936C3.30063 4.21936 2.89688 4.66186 2.5 5.12499V3.99999C2.5 3.86738 2.44732 3.7402 2.35355 3.64643C2.25979 3.55267 2.13261 3.49999 2 3.49999C1.86739 3.49999 1.74021 3.55267 1.64645 3.64643C1.55268 3.7402 1.5 3.86738 1.5 3.99999V6.49999C1.5 6.6326 1.55268 6.75977 1.64645 6.85354C1.74021 6.94731 1.86739 6.99999 2 6.99999H4.5C4.63261 6.99999 4.75979 6.94731 4.85355 6.85354C4.94732 6.75977 5 6.6326 5 6.49999C5 6.36738 4.94732 6.2402 4.85355 6.14644C4.75979 6.05267 4.63261 5.99999 4.5 5.99999H3.0625C3.50938 5.47374 3.95438 4.97811 4.46188 4.46436C5.15678 3.76946 6.04107 3.29474 7.00423 3.09954C7.96739 2.90433 8.96673 2.99729 9.87736 3.36679C10.788 3.7363 11.5696 4.36597 12.1244 5.17712C12.6792 5.98827 12.9827 6.94494 12.9969 7.92758C13.0111 8.91023 12.7354 9.87527 12.2043 10.7021C11.6732 11.529 10.9102 12.181 10.0106 12.5767C9.11103 12.9724 8.1148 13.0942 7.1464 12.927C6.17799 12.7597 5.28034 12.3108 4.56563 11.6362C4.51786 11.5911 4.46167 11.5558 4.40026 11.5324C4.33885 11.509 4.27343 11.4979 4.20773 11.4997C4.14204 11.5016 4.07735 11.5163 4.01736 11.5432C3.95738 11.5701 3.90327 11.6085 3.85813 11.6562C3.81298 11.704 3.77769 11.7602 3.75427 11.8216C3.73084 11.883 3.71974 11.9484 3.7216 12.0141C3.72345 12.0798 3.73823 12.1445 3.76509 12.2045C3.79195 12.2645 3.83036 12.3186 3.87813 12.3637C4.59028 13.0358 5.45609 13.5233 6.4 13.7838C7.34391 14.0443 8.33722 14.0698 9.29326 13.8581C10.2493 13.6464 11.139 13.2039 11.8847 12.5693C12.6304 11.9347 13.2095 11.1272 13.5713 10.2174C13.9332 9.3075 14.0669 8.3229 13.9607 7.34948C13.8546 6.37606 13.5118 5.44342 12.9623 4.63295C12.4128 3.82247 11.6733 3.1588 10.8083 2.69985C9.94334 2.2409 8.97919 2.00063 8 1.99999Z"
                    })
                })
            }
            u.defaultProps = {
                color: "rgba(235, 235, 245, 0.6)"
            }, u.propTypes = {
                color: i().string
            };
            const m = (0, n.memo)(u)
        },
        70780(e, t, o) {
            o.d(t, {
                DR: () => s,
                Em: () => a,
                z4: () => l
            });
            var n = o(76653);

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function i(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != r(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != r(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == r(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var a = function(e) {
                    return (0, n.useSelector)(e, n.shallowEqual)
                },
                s = function(e) {
                    var t = e.resources;
                    return {
                        strApply: t.strApply,
                        strReset: t.strReset,
                        strBetAmount: t.strBetAmount || "_Bet Amount",
                        strAutoPlayOptions: t.strAutoPlayOptions || "_Auto Play Options",
                        strNumberOfRounds: t.strNumberOfRounds || "_Number of Rounds",
                        strStopTotalLoss: t.strStopTotalLoss || "_Stop if total loss equals to",
                        strStopTotalWin: t.strStopTotalWin || "_Stop if total win equals to",
                        strStopSingleWin: t.strStopSingleWin || "_Stop if single win exceeds",
                        strTotalAmountCommitted: t.strTotalAmountCommitted,
                        strRounds: t.strRounds,
                        strPerSpin: t.strPerSpin,
                        currencyId: e.partnerInfo.currencyId,
                        autoBetCounts: e.autoBetCounts,
                        maxWin: e.partnerInfo.maxWin,
                        maxBet: e.partnerInfo.maxBet,
                        minBet: e.partnerInfo.minBet,
                        precision: e.partnerInfo.precision
                    }
                },
                l = function(e) {
                    var t, o = e.resources,
                        n = o.strPlayers,
                        r = o.strHistory,
                        a = o.strTop,
                        s = o.strLeaderboard,
                        l = o.strDaily,
                        c = o.strMonthly,
                        d = o.strCurrentBets,
                        u = o.strLeaders,
                        m = o.strResults,
                        f = o.strStatistics,
                        p = o.strMyBets,
                        b = o.strAllBets;
                    return i(i(i(i(i(i(i(i(i(i(t = {}, n, "Players"), r, "History"), a, "Top"), s, "Leaderboard"), l, "Daily"), c, "Monthly"), f, "Statistics"), m, "Results"), d, "Current Bets"), u, "Leaders"), i(i(t, p, "My Bets"), b, "All Bets")
                }
        }
    }
]);