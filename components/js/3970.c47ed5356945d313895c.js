/*! For license information please see 3970.c47ed5356945d313895c.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1820, 2005, 2462, 3523, 3970, 4201, 4378, 4677, 4765, 5629, 6570, 6582, 7058, 8963, 9439], {
        55103(e, t, r) {
            "use strict";
            r.d(t, {
                Au: () => s,
                Dj: () => i,
                K: () => y,
                PH: () => o,
                PV: () => b,
                Pi: () => p,
                QX: () => u,
                SC: () => a,
                Uf: () => g,
                VY: () => m,
                YF: () => l,
                _7: () => d,
                bD: () => c,
                xD: () => f,
                xK: () => h
            });
            var n = r(38874),
                o = (0, n.css)(["width:100%;height:100%;"]),
                i = function(e) {
                    var t = e.isInlineFlex,
                        r = e.alignItems,
                        n = e.justifyContent,
                        o = e.alignContent,
                        i = e.isWrap,
                        a = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(r && "align-items: ".concat(r), ";\n  ").concat(n && "justify-content: ".concat(n), ";\n  ").concat(o && "align-content: ".concat(o), ";\n  ").concat(i && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                },
                a = (0, n.css)(["border:1px solid;border-color:var(--mainLayoutBorderColor);"]),
                s = (0, n.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                l = (0, n.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                c = function(e) {
                    var t = e.isFixed;
                    return "\n\tposition: ".concat(t ? "fixed" : "absolute", ";\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n")
                },
                u = (0, n.css)(["position:relative;margin-top:0.5em;overflow-y:auto;scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.1875em;height:0.1875em;margin-right:-1em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{height:0.1875em;background:rgba(var(--white),0.2);border-radius:0.1875em;margin-right:0;}"]),
                d = (0, n.css)(["position:relative;scrollbar-color:transparent transparent;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{width:0.25em;height:0.25em;background-color:transparent;display:none;}&::-webkit-scrollbar-track-piece{background-color:transparent;}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:transparent;border-radius:0.25em;}&::-webkit-scrollbar-thumb:horizontal{width:0;height:0;background:transparent;}"]),
                b = ((0, n.css)(["", ";width:1.5em;height:1.5em;cursor:pointer;position:absolute;right:0;"], i({
                    alignItems: "center",
                    justifyContent: "center"
                })), function(e) {
                    var t = e.isSm,
                        r = e.hasTopSpacing,
                        n = void 0 !== r && r,
                        o = e.hasOpacity,
                        i = void 0 !== o && o;
                    return "\n\tposition: absolute;\n\tcursor: pointer;\n\tright: 1em;\n\t".concat(n && "top: 1em", ";\n\t").concat(i && "opacity: 0.8", ";\n\tz-index: 2;\n\n\tsvg {\n\t\theight: ").concat(t ? "1.5em" : "1.75em", ";\n\t\twidth: ").concat(t ? "1.5em" : "1.75em", ";\n\t}\n")
                }),
                f = (0, n.css)(["&:hover{opacity:0.9;}"]),
                p = (0, n.css)(["@-moz-document url-prefix(){&{background:#272727;}}"]),
                m = (0, n.css)(["", ";", ";background:rgba(var(--black),0.12);backdrop-filter:blur(100px);-webkit-backdrop-filter:blur(100px);position:fixed;z-index:4;top:0;left:0;"], o, p),
                y = (0, n.css)(["position:relative;padding:2.5em 0.75em 1em;"]),
                g = (0, n.css)(["width:1.5em;height:1.5em;cursor:pointer;display:flex;position:absolute;right:1.5em;top:1.625em;"]),
                h = (0, n.css)(["", ";font:0.875em/1.2 var(--mainFont);text-align:center;letter-spacing:0.96px;margin:0;text-shadow:0 0 8px rgba(var(--black),0.4);"], s)
        },
        23451(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => g
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(79555),
                s = r(30792),
                l = r(74848),
                c = ["key"],
                u = ["key"];

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (-1 !== t.indexOf(n)) continue;
                            r[n] = e[n]
                        }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach(function(t) {
                        m(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function m(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != d(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != d(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == d(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function y(e) {
                var t = e.headers,
                    r = e.body,
                    o = e.type,
                    i = e.winBy,
                    d = e.styles,
                    f = e.selectedIndex,
                    m = e.notWinStrs,
                    y = e.selectedRow,
                    g = p(p({}, d.row), d.winRow),
                    h = (0, n.useMemo)(function() {
                        var e = [];
                        return Array.isArray(r) && ("MultiRow" === o ? r.forEach(function(t) {
                            t.forEach(function(r, n) {
                                var o = [];
                                if (void 0 !== r.key) {
                                    var s = r.key,
                                        l = b(r, c);
                                    (o = Object.values(l)).key = s
                                } else o = Object.values(r);
                                o.styles = d.row, o.direction = 0 === n ? "top" : n === t.length - 1 ? "bottom" : "center", !r[i] || Number.isNaN(+(0, a.toNumberString)(r.win)) && m.includes(r.win) || (o.styles = g, o.win = +(0, a.toNumberString)(r.win)), 1 === t.length && (o.direction = ""), e.push(o)
                            })
                        }) : e = r.map(function(e) {
                            var t = [];
                            if (void 0 !== e.key) {
                                var r = e.key,
                                    n = b(e, u);
                                (t = Object.values(n)).key = r
                            } else t = Object.values(e);
                            if (t.styles = d.row, "totalWin" === i) {
                                var o = +(0, a.toNumberString)(e.totalWin);
                                !Number.isNaN(o) && o > 0 && (t.styles = g, t.win = o)
                            } else "bet" === i && !Number.isNaN(+(0, a.toNumberString)(e.win)) && +(0, a.toNumberString)(e.win) >= +(0, a.toNumberString)(e.bet) && (t.styles = g, t.win = +(0, a.toNumberString)(e.win)), !e[i] || "bet" === i || Number.isNaN(+(0, a.toNumberString)(e.win)) && m.includes(e.win) || (t.styles = g, t.win = +(0, a.toNumberString)(e.win));
                            return t
                        })), e
                    }, [r, o, i]),
                    w = (0, n.useMemo)(function() {
                        return t.map(function(e, t) {
                            if (e) {
                                var r = n ? e : t,
                                    n = "string" == typeof e;
                                return (0, l.jsx)(s.TableHeaderCell, {
                                    styles: d.headerCell,
                                    type: o,
                                    children: e
                                }, r)
                            }
                            return ""
                        })
                    }, [t, o]),
                    v = (0, n.useMemo)(function() {
                        return (null == h ? void 0 : h.map(function(e, t) {
                            var r = "".concat(e.key, "_").concat(t),
                                n = e.styles,
                                a = t === f,
                                c = i && e.win;
                            return a && Object.assign(n, y), (0, l.jsx)(s.TableRow, {
                                selected: a,
                                styles: n,
                                win: c,
                                direction: e.direction,
                                children: e.map(function(e, t) {
                                    return (0, l.jsx)(s.TableRowCell, {
                                        type: o,
                                        styles: d.cell,
                                        children: e
                                    }, t)
                                })
                            }, r)
                        })) || null
                    }, [h, f, i]),
                    x = (0, n.useDeferredValue)(w),
                    j = (0, n.useDeferredValue)(v);
                return (0, l.jsxs)(s.TableContainer, {
                    styles: d.container,
                    children: [(0, l.jsx)(s.TableHeader, {
                        styles: d.header,
                        children: x
                    }), (0, l.jsx)(s.TableBody, {
                        styles: d.body,
                        children: j
                    })]
                })
            }
            y.defaultProps = {
                headers: [],
                body: [],
                winBy: "",
                type: "",
                notWinStrs: ["-", "Canceled"],
                selectedIndex: -1,
                selectedRow: {},
                styles: {
                    container: {},
                    header: {},
                    headerCell: {},
                    body: {},
                    row: {},
                    selectedRow: {},
                    winRow: {},
                    cell: {}
                }
            }, y.propTypes = {
                headers: i().array,
                notWinStrs: i().array,
                body: i().array,
                winBy: i().string,
                selectedRow: i().object,
                type: i().string,
                selectedIndex: i().number,
                styles: i().shape({
                    container: i().object,
                    header: i().object,
                    headerCell: i().object,
                    body: i().object,
                    row: i().object,
                    selectedRow: i().object,
                    winRow: i().object,
                    cell: i().object
                })
            };
            const g = (0, n.memo)(y)
        },
        83523(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => b
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(38874),
                s = r(79555),
                l = r(74848),
                c = (0, s.getIsMobile)(),
                u = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1suiepi-0"
                })(["height:", ";padding-right:", ";overflow-y:", ";scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.1875em;height:0.1875em;margin-right:-1em;}&::-webkit-scrollbar-track-piece{background-color:var(--scrollbarTrackBg,rgba(var(--white),0.1));}&::-webkit-scrollbar-thumb:vertical{height:0.1875em;background:var(--scrollbarThumbBg,rgba(var(--white),0.2));border-radius:0.1875em;margin-right:0;}"], c ? "100%" : "calc(100% - 4.75em)", c ? 0 : "0.5em", c ? "visible" : "auto"));

            function d(e) {
                var t = e.children,
                    r = e.styles,
                    n = e.forwardedRef;
                return (0, l.jsx)(u, {
                    className: "Table_body",
                    style: r,
                    ref: n,
                    children: t
                })
            }
            d.defaultProps = {
                styles: {},
                children: null,
                forwardedRef: null
            }, d.propTypes = {
                styles: i().object,
                children: i().element,
                forwardedRef: i().shape({
                    current: i().instanceOf(Element)
                })
            };
            const b = (0, n.memo)(d)
        },
        52462(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => b
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(38874),
                s = r(79555),
                l = r(74848),
                c = (0, s.getIsMobile)(),
                u = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1fstdu5-0"
                })(["flex:0 0 100%;user-select:none;height:", ";padding:", ";", ""], c ? "auto" : "100%", c ? "0 0.5em 0.5em" : 0, function(e) {
                    return e.active && (0, a.css)(["display:block;"])
                }));

            function d(e) {
                var t = e.children,
                    r = e.styles;
                return (0, l.jsx)(u, {
                    style: r,
                    children: t
                })
            }
            d.defaultProps = {
                styles: {},
                children: null
            }, d.propTypes = {
                styles: i().object,
                children: i().element
            };
            const b = (0, n.memo)(d)
        },
        44378(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => b
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(38874),
                s = r(79555),
                l = r(74848),
                c = (0, s.getIsMobile)(),
                u = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1c6xgrq-0"
                })(["display:flex;justify-content:space-between;height:2.5em;padding:", ";"], c ? 0 : "0 0.5em 0 0"));

            function d(e) {
                var t = e.children,
                    r = e.styles;
                return (0, l.jsx)(u, {
                    style: r,
                    children: t
                })
            }
            d.defaultProps = {
                styles: {},
                children: null
            }, d.propTypes = {
                styles: i().object,
                children: i().element
            };
            const b = (0, n.memo)(d)
        },
        6570(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => f
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(38874),
                s = r(79555),
                l = r(55103),
                c = r(74848),
                u = (0, s.getIsMobile)(),
                d = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-6y2ve5-0"
                })(["", ";flex:1 1 100%;text-align:center;color:", ";font-size:", ";padding:0.5em;&:first-child{text-align:left;justify-content:flex-start;", "}&:last-child{text-align:right;justify-content:flex-end;}"], (0, l.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), u ? "rgba(var(--white), 0.6)" : "rgba(var(--white), 0.8)", "0.625em", function(e) {
                    return "slotGlobalHistory" === e.type && (0, a.css)(["max-width:12.5em;flex:0 0 12.5em;"])
                }));

            function b(e) {
                var t = e.children,
                    r = e.styles,
                    n = e.type;
                return (0, c.jsx)(d, {
                    type: n,
                    style: r,
                    children: t
                })
            }
            b.defaultProps = {
                styles: {},
                children: null,
                type: ""
            }, b.propTypes = {
                styles: i().object,
                children: i().element,
                type: i().string
            };
            const f = (0, n.memo)(b)
        },
        24765(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => u
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(38874),
                s = r(74848),
                l = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-16xi4wl-0"
                })(["display:flex;justify-content:space-between;align-items:center;height:2.875em;min-height:2.875em;background:var(--tableRowBg,rgba(var(--white),0.1));color:rgb(var(--white));margin-bottom:0.25em;border:1px solid;border-color:var(--tableRowBorderColor,rgba(var(--white),0.05) rgba(var(--white),0.1) rgba(var(--white),0.19));border-radius:0.5em;user-select:none;", " ", " ", " ", " ", " ", " ", " ", ""], function(e) {
                    return e.selected && (0, a.css)(["background:var(--selectedRowBg,rgba(var(--white),0.32));border-color:var( --selectedRowBorderColor,rgba(var(--white),0.1) rgba(var(--white),0.3) rgba(var(--white),0.656) );"])
                }, function(e) {
                    return "top" === e.direction && (0, a.css)(["border-radius:0.5em 0.5em 0 0;margin-bottom:-1px;border-color:rgba(var(--white),0.24) rgba(var(--white),0.15) rgba(var(--white),0.08);"])
                }, function(e) {
                    return "center" === e.direction && (0, a.css)(["border-radius:0;margin-bottom:0;"])
                }, function(e) {
                    return "bottom" === e.direction && (0, a.css)(["border-radius:0 0 0.5em 0.5em;"])
                }, function(e) {
                    return e.win > 0 && (0, a.css)(["background:var(--winRowBg,rgba(0,183,62,0.42));border-color:var(--winRowBorderColor,rgba(56,255,175,0.6) rgba(56,255,175,0.8) rgb(56,255,175));"])
                }, function(e) {
                    return "top" === e.direction && e.win > 0 && (0, a.css)(["background:var(--winRowBg,rgba(0,183,62,0.42));border-color:var(--winRowBorderColor,rgb(56,255,175) rgba(56,255,175,0.8) rgba(56,255,175,0.6));"])
                }, function(e) {
                    return "center" === e.direction && e.win > 0 && (0, a.css)(["background:var(--winRowBg,rgba(0,183,62,0.42));border-color:var(--winRowBorderColor,rgba(56,255,175,0.6));"])
                }, function(e) {
                    return "bottom" === e.direction && e.win > 0 && (0, a.css)(["background:var(--winRowBg,rgba(0,183,62,0.42));border-color:var(--winRowBorderColor,rgba(56,255,175,0.6) rgba(56,255,175,0.8) rgb(56,255,175));"])
                }));

            function c(e) {
                var t = e.styles,
                    r = e.children,
                    n = e.selected,
                    o = e.win,
                    i = e.direction,
                    a = e.isLastItem;
                return (0, s.jsx)(l, {
                    className: "Table_tableRow",
                    style: t,
                    selected: n,
                    win: o,
                    direction: i,
                    isLastItem: a,
                    children: r
                })
            }
            c.defaultProps = {
                styles: {},
                children: null,
                selected: !1,
                win: 0,
                isLastItem: !1,
                direction: ""
            }, c.propTypes = {
                styles: i().object,
                children: i().element,
                selected: i().bool,
                win: i().number,
                isLastItem: i().bool,
                direction: i().string
            };
            const u = (0, n.memo)(c)
        },
        22005(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: () => d
            });
            var n = r(98283),
                o = r(5556),
                i = r.n(o),
                a = r(38874),
                s = r(55103),
                l = r(74848),
                c = (0, n.memo)(a.default.div.withConfig({
                    componentId: "sc-1hlfngx-0"
                })(["", ";flex:1 1 100%;text-align:center;padding:0.5em;font-size:0.75em;", " &:first-child{text-align:left;justify-content:flex-start;", " ", "}&:last-child{text-align:right;justify-content:flex-end;", "}"], (0, s.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), function(e) {
                    return "KenoStatisticsTable" === e.type && (0, a.css)(["flex:1 1;justify-content:flex-start;"])
                }, function(e) {
                    return "KenoStatisticsTable" === e.type && (0, a.css)(["flex:0 0 auto;"])
                }, function(e) {
                    return "slotGlobalHistory" === e.type && (0, a.css)(["max-width:12.5em;flex:0 0 12.5em;"])
                }, function(e) {
                    return "KenoStatisticsTable" === e.type && (0, a.css)(["flex:0 0 auto;"])
                }));

            function u(e) {
                var t = e.children,
                    r = e.styles,
                    n = e.type;
                return (0, l.jsx)(c, {
                    type: n,
                    style: r,
                    children: t
                })
            }
            u.defaultProps = {
                styles: {},
                children: null,
                type: ""
            }, u.propTypes = {
                styles: i().object,
                children: i().element,
                type: i().string
            };
            const d = (0, n.memo)(u)
        },
        30792(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Table: () => c.default,
                TableBody: () => s.default,
                TableContainer: () => o.default,
                TableHeader: () => a.default,
                TableHeaderCell: () => n.default,
                TableRow: () => l.default,
                TableRowCell: () => i.default
            });
            var n = r(6570),
                o = r(52462),
                i = r(22005),
                a = r(44378),
                s = r(83523),
                l = r(24765),
                c = r(23451)
        },
        2694(e, t, r) {
            "use strict";
            var n = r(6925);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, r, o, i, a) {
                    if (a !== n) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
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
                    resetWarningCache: o
                };
                return r.PropTypes = r, r
            }
        },
        5556(e, t, r) {
            e.exports = r(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, t, r) {
            "use strict";
            var n = r(98283),
                o = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                a = Object.prototype.hasOwnProperty,
                s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, r) {
                var n, i = {},
                    c = null,
                    u = null;
                for (n in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) a.call(t, n) && !l.hasOwnProperty(n) && (i[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
                return {
                    $$typeof: o,
                    type: e,
                    key: c,
                    ref: u,
                    props: i,
                    _owner: s.current
                }
            }
            t.Fragment = i, t.jsx = c, t.jsxs = c
        },
        74848(e, t, r) {
            "use strict";
            e.exports = r(21020)
        }
    }
]);