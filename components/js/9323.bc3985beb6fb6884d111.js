"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [9323], {
        21704(t, n, e) {
            e.r(n), e.d(n, {
                default: () => k
            });
            var o = e(98283),
                r = e(38874),
                c = e(5052),
                a = e(79555),
                i = e(94206),
                l = e(40194),
                s = e(63139),
                m = e(5556),
                d = e.n(m),
                g = {
                    onClose: d().func,
                    goToBack: d().oneOfType([d().func, null]),
                    promotionsRef: d().object,
                    styles: d().shape({
                        container: d().object,
                        header: d().object,
                        icon: d().object,
                        iconColor: d().string,
                        title: d().object,
                        promotionItem: d().object
                    }),
                    strPromotions: d().string,
                    layerBgImg: d().string,
                    layerBgColor: d().string
                },
                u = e(24659),
                f = e(74848),
                p = (0, a.getIsMobile)(),
                h = "".concat(u.CDN_URL, "/images/promotions/promotionBg.webp"),
                b = r.default.div.withConfig({
                    componentId: "sc-1mgndmv-0"
                })(["", ";width:100%;", ";padding:", ";min-height:", ";"], (0, l.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), p && "background: transparent", p ? "0.625em 1em" : "2.375em", p ? "calc(1.5em + (2 * 0.625em))" : "calc(2.5em + (2 * 2.375em))"),
                v = r.default.h2.withConfig({
                    componentId: "sc-1mgndmv-1"
                })(["color:rgb(var(--white));font:", " var(--mainFont);text-align:center;text-transform:capitalize;"], p ? "0.875em" : "1.375em"),
                x = r.default.span.withConfig({
                    componentId: "sc-1mgndmv-2"
                })(["display:inline-flex;cursor:pointer;width:", ";height:", ";position:absolute;top:", ";left:", ";", ""], p ? "1.25em" : "2em", p ? "1.25em" : "2em", p ? "0.75em" : "2.75em", p ? "1em" : "2.75em", function(t) {
                    return t.iconClose && (0, r.css)(["left:auto;right:", ";"], p ? "1em" : "1.625em")
                }),
                y = r.default.div.withConfig({
                    componentId: "sc-1mgndmv-3"
                })(["", ";height:", ";"], (0, l.styledFlex)({
                    isWrap: !0
                }), p ? "calc(100% - 2.75em)" : "calc(100% - 7.25em)"),
                w = r.default.div.withConfig({
                    componentId: "sc-1mgndmv-4"
                })(["background:url(", ") no-repeat top left/cover,", ";", ";border-color:rgba(var(--white),0.4);", ";height:", ";width:", ";", ";position:absolute;top:0;left:0;z-index:", ";", ";"], function(t) {
                    return t.layerBgImg || h
                }, function(t) {
                    return t.layerBgColor || "rgb(var(--black))"
                }, !p && "border: 1px solid", !p && "border-radius: 1em", p ? "100dvh" : "100%", p ? "100%" : "66.5em", !p && "margin-right: 1em", p ? 4 : 5, function(t) {
                    return t.isLandscape && (0, r.css)(["padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);", "{font-size:0.9375em;}", "{padding:0.375em 1em;min-height:calc(1.25em + (2 * 0.375em));}", "{top:0.375em;}", "{height:calc(100% - 2em);}"], v, b, x, y)
                });

            function C(t) {
                var n = t.children,
                    e = t.onClose,
                    o = t.promotionsRef,
                    r = t.styles,
                    a = t.strPromotions,
                    l = t.goToBack,
                    m = t.layerBgImg,
                    d = t.layerBgColor,
                    g = p && !(0, i.useOrientationChange)();
                return (0, f.jsxs)(w, {
                    style: r.container,
                    ref: o,
                    isLandscape: g,
                    layerBgImg: m,
                    layerBgColor: d,
                    children: [(0, f.jsxs)(b, {
                        style: r.header,
                        children: [l && (0, f.jsx)(x, {
                            onClick: l,
                            style: r.icon,
                            children: (0, f.jsx)(s.ArrowBack, {
                                color: r.iconColor || "rgba(var(--white))"
                            })
                        }), (0, f.jsx)(v, {
                            style: r.title,
                            children: a || "__Promotions"
                        }), p && (0, f.jsx)(x, {
                            onClick: e,
                            style: r.icon,
                            iconClose: !0,
                            children: (0, f.jsx)(c.Close, {
                                color: r.iconColor || "rgba(var(--white))"
                            })
                        })]
                    }), (0, f.jsx)(y, {
                        style: r.content,
                        children: n
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
            }, C.propTypes = g;
            const k = (0, o.memo)(C)
        },
        40194(t, n, e) {
            e.r(n), e.d(n, {
                fullSize: () => c,
                promotionScroll: () => g,
                promotionTitle: () => l,
                styledButton: () => d,
                styledFlex: () => a,
                textGradient: () => m,
                textTruncate: () => s,
                textWhiteUppercase: () => i
            });
            var o = e(38874),
                r = (0, e(79555).getIsMobile)(),
                c = (0, o.css)(["width:100%;height:100%;"]),
                a = function(t) {
                    var n = t.isInlineFlex,
                        e = t.alignItems,
                        o = t.justifyContent,
                        r = t.alignContent,
                        c = t.isWrap,
                        a = t.flexDirection;
                    return "\n  display: ".concat(n ? "inline-flex" : "flex", ";\n  ").concat(e && "align-items: ".concat(e), ";\n  ").concat(o && "justify-content: ".concat(o), ";\n  ").concat(r && "align-content: ".concat(r), ";\n  ").concat(c && "flex-wrap: wrap", ";\n  ").concat(a && "flex-direction: ".concat(a), ";\n")
                },
                i = (0, o.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                l = (0, o.css)(["color:#c2edff;font:", " var(--mainFontBold);letter-spacing:0.56px;text-transform:uppercase;margin-bottom:", ";"], r ? "1.25em" : "1.75em", function(t) {
                    return r && t.isLandscape ? "1em" : r ? "1.4em" : "0.58em"
                }),
                s = (0, o.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                m = function(t) {
                    var n = t.background;
                    return "\n\tbackground: ".concat(n || "transparent", ";;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n")
                },
                d = function(t) {
                    var n = t.background,
                        e = t.padding,
                        o = t.border,
                        r = t.borderColor,
                        c = t.borderRadius,
                        i = t.transform;
                    return "\n    ".concat(a({
                        alignItems: "center",
                        justifyContent: "center"
                    }), ";\n\t").concat(e && "padding: ".concat(e), ";\n\tbackground: ").concat(n || "transparent", ";\n\tborder: ").concat(o || "0 none", ";\n\t").concat(r && "border-color: ".concat(r), ";\n\t").concat(c && "border-radius: ".concat(c), ";\n\tfont-size: 1em;\n\tcursor: pointer;\n\toutline: 0 none;\n\t").concat(i && "transform: ".concat(i, ";"), ";\n\ttransition: var(--mainTransition);\n\t\n\t&:active {\n\t\ttransform: ").concat(i || "", " var(--mainScale);\n\t}\n")
                },
                g = function(t) {
                    var n = t.trackBg,
                        e = t.thumbBg;
                    return "\n    overflow: auto;\n\t\n\t&::-webkit-scrollbar {\n\t\twidth: 0.125em;\n\t\theight: 0.125em;\n\t}\n\n\t&::-webkit-scrollbar-track-piece {\n\t\tbackground-color: ".concat(n || "rgba(0, 85, 147, 0.4)", ";\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\theight: 0.125em;\n\t\tbackground: ").concat(e || "#0094ff", ";\n\t\tborder-radius: 0.1875em;\n\t}\n")
                }
        }
    }
]);