"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [2974], {
        1754(e, t, n) {
            n.r(t), n.d(t, {
                default: () => y
            });
            var r = n(98283),
                o = n(38874),
                i = n(5556),
                a = n.n(i),
                c = {
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
                l = n(61101),
                u = n(74848);

            function m(e) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, m(e)
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        b(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function b(e, t, n) {
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
            var f = (0, r.memo)(o.default.div.withConfig({
                    componentId: "sc-1peq7es-0"
                })(["display:inline-block;vertical-align:middle;margin-inline-start:0.5em;"])),
                p = (0, r.memo)(o.default.label.withConfig({
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
                g = (0, r.memo)(o.default.input.withConfig({
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
                    r = e.onChange,
                    o = e.styles,
                    i = e.disabledSwitcher,
                    a = e.testId,
                    c = e.dataGtm,
                    m = e.isLoading;
                return (0, u.jsx)(f, {
                    className: "toggleBtn",
                    style: o.container,
                    "data-testid": "toggle-button",
                    "data-gtm": c || "",
                    children: m ? (0, u.jsx)(l.default, {
                        styles: {
                            container: {
                                fontSize: "0.5em",
                                position: "static"
                            }
                        }
                    }) : (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(g, d(d({
                            checked: n,
                            disabled: i,
                            onChange: r,
                            type: "checkbox",
                            id: t
                        }, o), {}, {
                            "data-testid": a || "toggle-input",
                            "data-gtm": c
                        })), (0, u.jsx)(p, d(d({}, o), {}, {
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
            }, h.propTypes = c;
            const y = (0, r.memo)(h)
        },
        82974(e, t, n) {
            n.r(t), n.d(t, {
                default: () => P
            });
            var r = n(98283),
                o = n(5556),
                i = n.n(o),
                a = n(38874),
                c = n(40194),
                l = n(1754),
                u = n(5052),
                m = n(94206),
                s = n(79555),
                d = n(23904),
                b = n(74848);

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        h(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function h(e, t, n) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != f(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != f(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == f(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = (0, s.getIsMobile)(),
                v = a.default.div.withConfig({
                    componentId: "sc-1m4qkni-0"
                })(["width:100%;"]),
                w = a.default.div.withConfig({
                    componentId: "sc-1m4qkni-1"
                })(["", ";margin-bottom:0.375em;"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "space-between"
                })),
                x = a.default.label.withConfig({
                    componentId: "sc-1m4qkni-2"
                })(["color:rgba(var(--white),0.7);font:0.75em var(--mainFont);letter-spacing:0.24px;"]),
                j = a.default.div.withConfig({
                    componentId: "sc-1m4qkni-3"
                })(["", ";height:", ";background:var(--autobetPopupInputBg,rgba(var(--black),0.16));border:1px solid;border-color:var( --autobetPopupInputBorderColor,rgba(var(--white),0.12) rgba(var(--white),0.2) rgba(var(--white),0.35) );box-shadow:var(--autobetPopupInputBoxShadow,0 0 0.625em 0 rgba(var(--black),0.24) inset);border-radius:var(--autobetPopupInputRadius,0.5em);"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "space-between"
                }), y ? "var(--autobetPopupInputHeightMob, 2.25em)" : "var(--autobetPopupInputHeight, 2.25em)"),
                k = a.default.input.withConfig({
                    componentId: "sc-1m4qkni-4"
                })(["", ";", ";text-align:center;border:none;box-shadow:none;color:rgba(var(--white),0.9);background:transparent;font:0.875em var(--mainFontMedium);&:focus{outline:none;}"], (0, c.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), c.fullSize),
                O = a.default.span.withConfig({
                    componentId: "sc-1m4qkni-5"
                })(["color:rgba(var(--white),0.9);font:0.875em var(--mainFontMedium);flex-grow:1;"]);

            function S(e) {
                var t = e.styles,
                    n = e.name,
                    o = e.title,
                    i = e.hasToggleBtn,
                    a = e.setOptions,
                    c = e.options,
                    f = e.maxTotal,
                    p = e.minBet,
                    S = e.precision,
                    P = e.handleOpenBetKeyboard,
                    C = e.disabled,
                    I = (0, m.useNumberInputV2)({
                        defaultValue: c.number,
                        precision: S,
                        maxValue: f,
                        maxCharLength: 17
                    }),
                    B = I.value,
                    T = I.numberValue,
                    D = I.setValue,
                    E = I.handleChange,
                    F = I.handleInput,
                    N = c.checked,
                    M = p / 2;
                (0, r.useEffect)(function() {
                    D(c.number)
                }, [c.number]), (0, r.useEffect)(function() {
                    a(function(e) {
                        return g(g({}, e), {}, h({}, n, g(g({}, e[n]), {}, {
                            number: T
                        })))
                    })
                }, [T]);
                var q = (0, r.useCallback)(function() {
                        D(function(e) {
                            var t = (0, s.sumWithPrecision)(+(0, s.toNumberString)(e), p, S),
                                n = f && t > f ? f : t;
                            return (0, s.numberToSpacedString)(n, 2)
                        })
                    }, [f, p, S]),
                    z = (0, r.useCallback)(function() {
                        D(function(e) {
                            var t = (0, s.subtractWithPrecision)(+(0, s.toNumberString)(e), p, S),
                                n = t < M ? M : t;
                            return (0, s.numberToSpacedString)(n, 2)
                        })
                    }, [S, p]);
                return (0, b.jsxs)(v, {
                    style: t.item,
                    className: C ? "disabled" : "",
                    children: [(0, b.jsxs)(w, {
                        style: t.labelBlock,
                        children: [(0, b.jsx)(x, {
                            htmlFor: "total_".concat(n),
                            style: t.label,
                            children: o
                        }), i && (0, b.jsx)(l.default, {
                            onChange: function() {
                                a(function(e) {
                                    return g(g({}, e), {}, h({}, n, g(g({}, e[n]), {}, {
                                        checked: !e[n].checked
                                    })))
                                })
                            },
                            checked: c.checked,
                            id: "total_".concat(n),
                            styles: t.toggleButton,
                            dataGtm: o
                        })]
                    }), (0, b.jsxs)(j, {
                        style: t.input,
                        children: [(0, b.jsx)(d.default, {
                            style: t.inputIconBtn,
                            disabled: C || !N,
                            className: C || c.checked && (!T || T <= M) ? "disabled" : "",
                            handleClick: N ? z : function() {},
                            children: (0, b.jsx)(u.Minus, {
                                color: "rgba(var(--white))"
                            })
                        }), y ? (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)("input", {
                                type: "hidden"
                            }), (0, b.jsx)(O, {
                                style: t.inputValue,
                                className: !C && N ? "" : "disabled",
                                onClick: N ? function() {
                                    return P({
                                        title: o,
                                        number: T,
                                        setter: D,
                                        maxBet: f
                                    })
                                } : function() {},
                                children: (0, s.numberToSpacedStringBetValue)({
                                    number: B,
                                    maxPrecision: S
                                })
                            })]
                        }) : (0, b.jsx)(k, {
                            type: "text",
                            onKeyDown: F,
                            onKeyUp: F,
                            onChange: E,
                            disabled: C || !N,
                            "data-bet": T,
                            value: (0, s.numberToSpacedStringBetValue)({
                                number: B,
                                maxPrecision: S
                            })
                        }), (0, b.jsx)(d.default, {
                            style: t.inputIconBtn,
                            disabled: C || !N,
                            className: C || T === f ? "disabled" : "",
                            handleClick: N ? q : function() {},
                            children: (0, b.jsx)(u.Plus, {
                                color: "rgba(var(--white))"
                            })
                        })]
                    })]
                })
            }
            S.defaultProps = {
                styles: {},
                title: "",
                hasToggleBtn: !0
            }, S.propTypes = {
                styles: i().object,
                title: i().string,
                hasToggleBtn: i().bool
            };
            const P = (0, r.memo)(S)
        },
        23904(e, t, n) {
            n.r(t), n.d(t, {
                default: () => v
            });
            var r = n(98283),
                o = n(38874),
                i = n(5556),
                a = n.n(i),
                c = n(40194),
                l = n(74848);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }
            var m = ["children", "className", "handleClick"];

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        b(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function b(e, t, n) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != u(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == u(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var p = o.default.button.withConfig({
                    componentId: "sc-1c1r7i6-0"
                })(["", ";width:2.5em;height:100%;", ";"], (0, c.styledButton)({
                    padding: "var(--autobetPopupInputIconPadding, 0.75em)"
                }), function(e) {
                    return e.disabled && (0, o.css)(["cursor:default;opacity:0.2;"])
                }),
                g = null,
                h = null;

            function y(e) {
                var t, n, o = e.children,
                    i = e.className,
                    a = e.handleClick,
                    c = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    n[r] = e[r]
                                }
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) n = i[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(e, m),
                    u = (t = (0, r.useState)(!1), n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i, a, c = [],
                                l = !0,
                                u = !1;
                            try {
                                if (i = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); l = !0);
                            } catch (e) {
                                u = !0, o = e
                            } finally {
                                try {
                                    if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                } finally {
                                    if (u) throw o
                                }
                            }
                            return c
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return f(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                        }
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    s = u[0],
                    b = u[1],
                    y = function() {
                        return b(!0)
                    },
                    v = function() {
                        return b(!1)
                    };
                return (0, r.useEffect)(function() {
                    return g && clearInterval(g), h && clearTimeout(h), s && (h = setTimeout(function() {
                            g = setInterval(a, 150)
                        }, 300)),
                        function() {
                            clearInterval(g), clearTimeout(h)
                        }
                }, [s]), (0, l.jsx)(p, d(d({
                    type: "button",
                    className: i,
                    onClick: a,
                    onMouseDown: y,
                    onTouchStart: y,
                    onMouseUp: v,
                    onMouseLeave: v,
                    onTouchEnd: v
                }, c), {}, {
                    children: o
                }))
            }
            y.defaultProps = {
                className: "",
                handleClick: function() {},
                children: null
            }, y.propTypes = {
                className: a().string,
                handleClick: a().func,
                children: a().element
            };
            const v = (0, r.memo)(y)
        },
        61101(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var r = n(98283),
                o = n(5556),
                i = n.n(o),
                a = n(38874),
                c = n(79555),
                l = n(74848),
                u = (0, c.getIsMobile)(),
                m = (0, r.memo)(a.default.div.withConfig({
                    componentId: "sc-pzug36-0"
                })(["display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:", ";top:", ";left:0;pointer-events:none;"], u ? "calc(100% - 4.25em)" : "100%", u ? "auto" : 0)),
                s = (0, a.keyframes)(["0%,100%{box-shadow:0 -3em 0 0.2em,2em -2em 0 0em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0;}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 0.2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em;}25%{box-shadow:0 -3em 0 -0.5em,2em -2em 0 0,3em 0 0 0.2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em;}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0em 0 0,2em 2em 0 0.2em,0 3em 0 0em,-2em 2em 0 -1em,-3em 0em 0 -1em,-2em -2em 0 -1em;}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0em,0 3em 0 0.2em,-2em 2em 0 0,-3em 0em 0 -1em,-2em -2em 0 -1em;}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 0.2em,-3em 0 0 0,-2em -2em 0 -1em;}75%{box-shadow:0em -3em 0 -1em,2em -2em 0 -1em,3em 0em 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0em 0 0.2em,-2em -2em 0 0;}87.5%{box-shadow:0em -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0em 0 0,-2em -2em 0 0.2em;}"]),
                d = (0, r.memo)(a.default.span.withConfig({
                    componentId: "sc-pzug36-1"
                })(["color:rgb(var(--white));display:inline-block;font-size:0.35em;width:1em;height:1em;border-radius:50%;position:relative;text-indent:-9999em;animation:", " 1.3s infinite linear;transform:translateZ(0);"], s));

            function b(e) {
                var t = e.styles;
                return (0, l.jsx)(m, {
                    style: t.container,
                    children: (0, l.jsx)(d, {
                        style: t.loader
                    })
                })
            }
            b.defaultProps = {
                styles: {
                    container: {},
                    loader: {}
                }
            }, b.propTypes = {
                styles: i().shape({
                    container: i().object,
                    loader: i().object
                })
            };
            const f = (0, r.memo)(b)
        },
        40194(e, t, n) {
            n.r(t), n.d(t, {
                fullSize: () => i,
                promotionScroll: () => d,
                promotionTitle: () => l,
                styledButton: () => s,
                styledFlex: () => a,
                textGradient: () => m,
                textTruncate: () => u,
                textWhiteUppercase: () => c
            });
            var r = n(38874),
                o = (0, n(79555).getIsMobile)(),
                i = (0, r.css)(["width:100%;height:100%;"]),
                a = function(e) {
                    var t = e.isInlineFlex,
                        n = e.alignItems,
                        r = e.justifyContent,
                        o = e.alignContent,
                        i = e.isWrap,
                        a = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(n && "align-items: ".concat(n), ";\n  ").concat(r && "justify-content: ".concat(r), ";\n  ").concat(o && "align-content: ".concat(o), ";\n  ").concat(i && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                },
                c = (0, r.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                l = (0, r.css)(["color:#c2edff;font:", " var(--mainFontBold);letter-spacing:0.56px;text-transform:uppercase;margin-bottom:", ";"], o ? "1.25em" : "1.75em", function(e) {
                    return o && e.isLandscape ? "1em" : o ? "1.4em" : "0.58em"
                }),
                u = (0, r.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                m = function(e) {
                    var t = e.background;
                    return "\n\tbackground: ".concat(t || "transparent", ";;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n")
                },
                s = function(e) {
                    var t = e.background,
                        n = e.padding,
                        r = e.border,
                        o = e.borderColor,
                        i = e.borderRadius,
                        c = e.transform;
                    return "\n    ".concat(a({
                        alignItems: "center",
                        justifyContent: "center"
                    }), ";\n\t").concat(n && "padding: ".concat(n), ";\n\tbackground: ").concat(t || "transparent", ";\n\tborder: ").concat(r || "0 none", ";\n\t").concat(o && "border-color: ".concat(o), ";\n\t").concat(i && "border-radius: ".concat(i), ";\n\tfont-size: 1em;\n\tcursor: pointer;\n\toutline: 0 none;\n\t").concat(c && "transform: ".concat(c, ";"), ";\n\ttransition: var(--mainTransition);\n\t\n\t&:active {\n\t\ttransform: ").concat(c || "", " var(--mainScale);\n\t}\n")
                },
                d = function(e) {
                    var t = e.trackBg,
                        n = e.thumbBg;
                    return "\n    overflow: auto;\n\t\n\t&::-webkit-scrollbar {\n\t\twidth: 0.125em;\n\t\theight: 0.125em;\n\t}\n\n\t&::-webkit-scrollbar-track-piece {\n\t\tbackground-color: ".concat(t || "rgba(0, 85, 147, 0.4)", ";\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\theight: 0.125em;\n\t\tbackground: ").concat(n || "#0094ff", ";\n\t\tborder-radius: 0.1875em;\n\t}\n")
                }
        }
    }
]);