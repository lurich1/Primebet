"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [6411], {
        98792(e, t, r) {
            r.r(t), r.d(t, {
                default: () => R
            });
            var n = r(98283),
                o = r(38874),
                i = r(41783),
                a = r(13362),
                l = r(5052),
                s = r(89472),
                c = r(3420),
                u = r(28865),
                d = r(79555),
                m = r(55103),
                h = r(5556),
                f = r.n(h),
                b = {
                    codes: f().shape({
                        key: f().string,
                        salt: f().string,
                        hash: f().string
                    }),
                    hashCode: f().string,
                    inputDisabled: f().bool,
                    onAboutHashCode: f().func,
                    onCheckHashCode: f().func,
                    onClose: f().func,
                    resources: f().shape({
                        strFairness: f().string,
                        strKey: f().string,
                        strSalt: f().string,
                        strHash: f().string,
                        strCheck: f().string,
                        strAboutHashCode: f().string,
                        strCheckHashCode: f().string,
                        strPasteKeyHere: f().string,
                        strPasteSaltHere: f().string
                    }),
                    styles: f().shape({
                        container: f().object,
                        block: f().object,
                        heading: f().object,
                        iconColor: f().string,
                        title: f().object,
                        label: f().object,
                        formGroup: f().object,
                        row: f().object,
                        iconWithText: f().object,
                        input: f().object,
                        textarea: f().object,
                        hashCode: f().object,
                        buttonBlock: f().object,
                        buttonInner: f().object,
                        icon: f().object,
                        closeIcon: f().object,
                        approveColor: f().string
                    })
                },
                p = r(74848);

            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, g(e)
            }

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach(function(t) {
                        x(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function x(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != g(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != g(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == g(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, l = [],
                            s = !0,
                            c = !1;
                        try {
                            if (i = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                s = !1
                            } else
                                for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!s && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return k(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? k(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var j = (0, d.getIsMobile)(),
                C = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-0"
                })(["", ";width:", ";height:", ";position:", ";left:", ";top:", ";transform:", ";z-index:", ";font-family:var(--mainFont);margin:auto;color:rgb(var(--white));background:rgba(var(--white),0.16);backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px);border-radius:", ";padding:", ";border:", ";border-color:var(--mainLayoutBorderColor);", ";}"], m.Pi, j ? "100%" : "35.25em", j ? "auto" : "37.625em", j ? "relative" : "absolute", j ? "auto" : "50%", j ? "auto" : "50%", j ? "none" : "translate(-50%, -50%)", j ? 5 : 4, j ? 0 : "1.5em", j ? "1em" : "3.25em 2.25em 2.25em", j ? "0 none" : "1px solid", function(e) {
                    return e.isMobile && (0, o.css)(["", ";top:0;left:0;bottom:0;position:fixed;"], (0, m.Dj)({
                        justifyContent: "center",
                        flexDirection: "column"
                    }))
                })),
                I = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-1"
                })(["margin-bottom:", ";", ";"], j ? "1.5em" : "2.75em", function(e) {
                    return e.mb0 && (0, o.css)(["margin-bottom:0;"])
                })),
                z = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-2"
                })(["width:100%;"])),
                S = (0, n.memo)(o.default.h4.withConfig({
                    componentId: "sc-to78gz-3"
                })(["", ";font:", " var(--mainFont);margin:0 0 1em;text-align:center;letter-spacing:0.96px;"], m.Au, j ? "0.875em/1.2" : "1em/1.2")),
                O = (0, n.memo)(o.default.label.withConfig({
                    componentId: "sc-to78gz-4"
                })(["display:block;color:rgba(var(--white),0.7);font:", " var(--mainFont);margin-bottom:0.3em;letter-spacing:1.92px;"], j ? "0.5em/1.2" : "0.625em/1.2")),
                P = (0, n.memo)(o.default.span.withConfig({
                    componentId: "sc-to78gz-5"
                })(["height:", ";width:", ";cursor:pointer;display:block;position:absolute;right:", ";top:", ";opacity:0.7;&:hover{opacity:1;}"], j ? "1.5em" : "1.625em", j ? "1.5em" : "1.625em", j ? "1.125em" : "1.375em", j ? "1.625em" : "1.375em")),
                H = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-6"
                })(["display:flex;gap:", ";margin-bottom:", ";", ";", ";", ";"], j ? "0.5em" : "0.75em", j ? "0.5em" : "0.75em", function(e) {
                    return e.aboutHashCode && (0, o.css)(["border-bottom:0 none;padding-bottom:0;"])
                }, function(e) {
                    return e.hashArea && (0, o.css)(["border-bottom:0 none;padding-bottom:0;"])
                }, function(e) {
                    return e.mb0 && (0, o.css)(["margin-bottom:0;"])
                })),
                D = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-7"
                })(["", ";flex:1;width:calc(100% - 2em);font:", " var(--mainFont);user-select:auto;color:rgb(var(--white));letter-spacing:0.32px;"], m.YF, j ? "0.625em/1.25" : "0.75em/1.25")),
                A = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-8"
                })(["position:relative;background:rgba(var(--black),0.16);border-radius:0.5em;padding:0.3125em ", ";line-height:1;border:1px solid;border-color:rgba(var(--white),0.0672) rgba(var(--white),0.15) rgba(var(--white),0.2);flex:1;display:inline-block;", ";", ";"], j ? "0.5em" : "0.75em", function(e) {
                    return e.half && (0, o.css)(["width:calc(50% - 1em);flex:1 1 calc(50% - 1em);"])
                }, function(e) {
                    return e.textarea && (0, o.css)(["height:", ";"], j ? "4em" : "5.5em")
                })),
                F = (0, n.memo)(o.default.input.withConfig({
                    componentId: "sc-to78gz-9"
                })(["", ";flex:1;width:calc(100% - 2.5em);height:auto;font:", " var(--mainFont);user-select:auto;color:rgb(var(--white));outline:none;border:0 none;background:transparent;padding:0;display:flex;"], m.YF, j ? "0.625em/1.25" : "0.75em/1.25")),
                E = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-10"
                })(["color:rgb(var(--white));overflow-y:auto;word-break:break-all;font-size:", ";line-height:1.3;width:calc(100% - 1em);padding-right:1.5em;letter-spacing:0.32px;scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.125em;height:0.125em;margin-right:-1em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{height:0.125em;background:rgba(var(--white),0.2);border-radius:0.1875em;margin-right:0;}", ";"], j ? "0.625em" : "0.75em", function(e) {
                    return e.full && (0, o.css)(["width:100%;"])
                })),
                T = (0, n.memo)(o.default.span.withConfig({
                    componentId: "sc-to78gz-11"
                })(["width:0.8125em;height:", ";display:flex;cursor:pointer;flex:0 0 0.8125em;position:absolute;right:0.75em;top:0;bottom:0;margin:auto;"], j ? "0.75em" : "1em")),
                N = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-12"
                })(["", ""], function(e) {
                    return e.disabled && "pointer-events: none; filter: brightness(0.7)"
                })),
                G = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-13"
                })(["", ";", ";height:", ";line-height:", ";font-size:1em;position:relative;margin:", ";padding:1px;background:", ";border-radius:0.5em;text-align:center;cursor:pointer;letter-spacing:0.32px;transition:opacity 0.3s linear,transform 0.3s linear;&:active{transform:scale(0.98);}span{font-size:", ";}"], m.Au, m.xD, j ? "2.4375em" : "3.5em", j ? "2.4375em" : "3.5em", j ? "1em 0 1.25em" : "1.5em 0 1em", j ? "var(--secondaryButtonLayer1)" : "linear-gradient(180deg, #379129 0%, #38ffaf 100%)", j ? "0.75em" : "1em")),
                K = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-14"
                })(["", ";", ";border-radius:0.5em;font-family:var(--mainFont);background:", ";"], m.PH, (0, m.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }), j ? "var(--secondaryButtonLayer2)" : "linear-gradient(95.31deg, #66ac1f 4.92%, #127c30 100%)")),
                L = (0, n.memo)(o.default.span.withConfig({
                    componentId: "sc-to78gz-15"
                })(["display:inline-flex;vertical-align:middle;width:1em;height:1em;margin-right:0.5em;& ~ span{font-size:", ";}"], j ? "0.75em" : "1em")),
                B = (0, n.memo)(o.default.div.withConfig({
                    componentId: "sc-to78gz-16"
                })(["", ";text-transform:capitalize;color:rgb(var(--white));cursor:pointer;text-decoration:underline;letter-spacing:0.32px;"], (0, m.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }))),
                _ = ["contextmenu", "drop", "paste", "keydown", "keyup", "focus"];

            function M(e) {
                var t = e.codes,
                    r = e.hashCode,
                    o = e.inputDisabled,
                    d = e.onAboutHashCode,
                    m = e.onCheckHashCode,
                    h = e.onClose,
                    f = e.resources,
                    b = e.styles,
                    g = e.hashCodeRef,
                    y = (0, n.useRef)(null),
                    k = (0, n.useRef)(null),
                    M = (0, n.useRef)(null),
                    R = w((0, n.useState)(""), 2),
                    V = R[0],
                    W = R[1],
                    Y = w((0, n.useState)(""), 2),
                    U = Y[0],
                    Q = Y[1],
                    X = w((0, n.useState)({
                        key: "copy",
                        salt: "copy",
                        hash: "copy"
                    }), 2),
                    $ = X[0],
                    q = X[1],
                    J = function(e) {
                        return e.preventDefault()
                    };
                (0, n.useEffect)(function() {
                    return null != k && k.current && _.forEach(function(e) {
                            k.current.addEventListener(e, J)
                        }),
                        function() {
                            _.forEach(function(e) {
                                var t;
                                null == k || null === (t = k.current) || void 0 === t || t.removeEventListener(e, J)
                            })
                        }
                }, [k]), (0, n.useEffect)(function() {
                    return null != M && M.current && _.forEach(function(e) {
                            M.current.addEventListener(e, J)
                        }),
                        function() {
                            _.forEach(function(e) {
                                var t;
                                null == M || null === (t = M.current) || void 0 === t || t.removeEventListener(e, J)
                            })
                        }
                }, [M]), (0, n.useEffect)(function() {
                    return function() {
                        return clearTimeout(y.current)
                    }
                }, []);
                var Z = (0, n.useCallback)(function(e, t) {
                        i.default && i.default.setItem("clipboard_key_salt_hash", e);
                        var r = document.createElement("textarea");
                        r.innerText = e, document.body.appendChild(r), r.select(), document.execCommand("copy"), r.remove(), q(function(e) {
                            return v(v({}, e), {}, x({}, t, "approve"))
                        }), y.current = setTimeout(function() {
                            return q(function(e) {
                                return v(v({}, e), {}, x({}, t, "copy"))
                            })
                        }, 1e3)
                    }, []),
                    ee = (0, n.useCallback)(function(e) {
                        var t = i.default && i.default.getItem("clipboard_key_salt_hash");
                        switch (e) {
                            case "key":
                                W(t);
                                break;
                            case "salt":
                                Q(t)
                        }
                    }, []),
                    te = (0, n.useCallback)(function() {
                        null != k && k.current && null != M && M.current && m(k.current.value, M.current.value)
                    }, [m, k, M]),
                    re = function(e) {
                        var t = "copy" === $[e],
                            r = t ? s.default : a.default,
                            n = t ? "rgb(var(--white))" : b.approveColor || "#37FDAD";
                        return (0, p.jsx)(r, {
                            color: n
                        })
                    },
                    ne = t.key,
                    oe = t.hash,
                    ie = t.salt,
                    ae = f.strFairness,
                    le = f.strKey,
                    se = f.strSalt,
                    ce = f.strHash,
                    ue = f.strCheck,
                    de = f.strAboutHashCode,
                    me = f.strCheckHashCode,
                    he = f.strPasteKeyHere,
                    fe = f.strPasteSaltHere;
                return (0, p.jsxs)(C, {
                    isMobile: j,
                    style: b.container,
                    ref: g,
                    children: [(0, p.jsxs)(I, {
                        style: b.block,
                        children: [(0, p.jsxs)(z, {
                            style: b.heading,
                            children: [(0, p.jsx)(S, {
                                style: b.title,
                                children: ae
                            }), (0, p.jsx)(P, {
                                className: "allowClick",
                                onClick: h,
                                style: v(v({}, b.closeIcon), b.icon),
                                children: (0, p.jsx)(l.Close, {
                                    color: b.iconColor || "rgb(var(--white))"
                                })
                            })]
                        }), (0, p.jsxs)(H, {
                            style: b.row,
                            children: [(0, p.jsxs)(A, {
                                className: "allowClick",
                                style: b.formGroup,
                                half: !0,
                                children: [(0, p.jsx)(O, {
                                    style: b.label,
                                    children: le
                                }), (0, p.jsx)(D, {
                                    style: b.hashCode,
                                    children: ne
                                }), (0, p.jsx)(T, {
                                    onClick: function() {
                                        return Z(ne, "key")
                                    },
                                    style: b.icon,
                                    children: re("key")
                                })]
                            }), (0, p.jsxs)(A, {
                                className: "allowClick",
                                style: b.formGroup,
                                half: !0,
                                children: [(0, p.jsx)(O, {
                                    style: b.label,
                                    children: se
                                }), (0, p.jsx)(D, {
                                    style: b.hashCode,
                                    children: ie
                                }), (0, p.jsx)(T, {
                                    onClick: function() {
                                        return Z(ie, "salt")
                                    },
                                    style: b.icon,
                                    children: re("salt")
                                })]
                            })]
                        }), (0, p.jsx)(H, {
                            style: b.row,
                            mb0: !0,
                            children: (0, p.jsxs)(A, {
                                className: "allowClick",
                                style: b.formGroup,
                                textarea: !0,
                                children: [(0, p.jsx)(O, {
                                    style: b.label,
                                    children: ce
                                }), (0, p.jsx)(E, {
                                    style: b.textarea,
                                    children: oe
                                }), (0, p.jsx)(T, {
                                    onClick: function() {
                                        return Z(oe, "hash")
                                    },
                                    children: re("hash")
                                })]
                            })
                        })]
                    }), (0, p.jsxs)(I, {
                        mb0: !0,
                        style: b.block,
                        children: [(0, p.jsx)(z, {
                            style: b.heading,
                            children: (0, p.jsx)(S, {
                                style: b.title,
                                children: me
                            })
                        }), (0, p.jsxs)(H, {
                            style: b.row,
                            children: [(0, p.jsxs)(A, {
                                className: "allowClick",
                                style: b.formGroup,
                                half: !0,
                                children: [(0, p.jsx)(O, {
                                    style: b.label,
                                    htmlFor: "pasteKey",
                                    children: he
                                }), (0, p.jsx)(F, {
                                    style: b.input,
                                    disabled: o,
                                    type: "text",
                                    id: "pasteKey",
                                    defaultValue: V,
                                    ref: k
                                }), (0, p.jsx)(T, {
                                    onClick: function() {
                                        return ee("key")
                                    },
                                    style: b.icon,
                                    children: (0, p.jsx)(c.default, {
                                        color: "rgb(var(--white))"
                                    })
                                })]
                            }), (0, p.jsxs)(A, {
                                className: "allowClick",
                                style: b.formGroup,
                                half: !0,
                                children: [(0, p.jsx)(O, {
                                    style: b.label,
                                    htmlFor: "pasteSalt",
                                    children: fe
                                }), (0, p.jsx)(F, {
                                    style: b.input,
                                    disabled: o,
                                    type: "text",
                                    id: "pasteSalt",
                                    defaultValue: U,
                                    ref: M
                                }), (0, p.jsx)(T, {
                                    onClick: function() {
                                        return ee("salt")
                                    },
                                    style: b.icon,
                                    children: (0, p.jsx)(c.default, {
                                        color: "rgb(var(--white))"
                                    })
                                })]
                            })]
                        }), (0, p.jsx)(H, {
                            hashArea: !0,
                            style: b.row,
                            mb0: !0,
                            children: (0, p.jsxs)(A, {
                                className: "allowClick",
                                style: b.formGroup,
                                textarea: !0,
                                children: [(0, p.jsx)(O, {
                                    style: b.label,
                                    children: ce
                                }), (0, p.jsx)(E, {
                                    id: "HashCodeText",
                                    style: b.textarea,
                                    full: !0,
                                    children: r
                                })]
                            })
                        }), (0, p.jsx)(N, {
                            className: "allowClick",
                            disabled: !V || !U || "-" === V || "-" === U,
                            children: (0, p.jsx)(G, {
                                style: b.buttonBlock,
                                onClick: V && U && "-" !== V && "-" !== U ? te : null,
                                children: (0, p.jsx)(K, {
                                    style: b.buttonInner,
                                    children: (0, p.jsx)("span", {
                                        children: ue
                                    })
                                })
                            })
                        }), (0, p.jsxs)(B, {
                            className: "allowClick",
                            style: b.iconWithText,
                            onClick: d,
                            children: [(0, p.jsx)(L, {
                                style: b.icon,
                                children: (0, p.jsx)(u.default, {
                                    color: "rgba(var(--white), 0.7)"
                                })
                            }), (0, p.jsx)("span", {
                                children: de
                            })]
                        })]
                    })]
                })
            }
            M.defaultProps = {
                codes: {
                    key: "",
                    salt: "",
                    hash: ""
                },
                hashCode: "",
                inputDisabled: !0,
                onAboutHashCode: function() {},
                onCheckHashCode: function() {},
                onClose: function() {},
                resources: {},
                styles: {
                    container: {},
                    block: {},
                    heading: {},
                    iconColor: "",
                    title: {},
                    formGroup: {},
                    label: {},
                    row: {},
                    iconWithText: {},
                    input: {},
                    textarea: {},
                    approveColor: "",
                    hashCode: {},
                    buttonBlock: {},
                    buttonInner: {},
                    icon: {}
                }
            }, M.propTypes = b;
            const R = (0, n.memo)(M)
        },
        55103(e, t, r) {
            r.d(t, {
                Au: () => l,
                Dj: () => i,
                K: () => p,
                PH: () => o,
                PV: () => m,
                Pi: () => f,
                QX: () => u,
                SC: () => a,
                Uf: () => g,
                VY: () => b,
                YF: () => s,
                _7: () => d,
                bD: () => c,
                xD: () => h,
                xK: () => y
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
                l = (0, n.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                s = (0, n.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                c = function(e) {
                    var t = e.isFixed;
                    return "\n\tposition: ".concat(t ? "fixed" : "absolute", ";\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n")
                },
                u = (0, n.css)(["position:relative;margin-top:0.5em;overflow-y:auto;scrollbar-color:rgba(var(--white),0.1);&::-webkit-scrollbar{width:0.1875em;height:0.1875em;margin-right:-1em;}&::-webkit-scrollbar-track-piece{background-color:rgba(var(--white),0.1);}&::-webkit-scrollbar-thumb:vertical{height:0.1875em;background:rgba(var(--white),0.2);border-radius:0.1875em;margin-right:0;}"]),
                d = (0, n.css)(["position:relative;scrollbar-color:transparent transparent;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{width:0.25em;height:0.25em;background-color:transparent;display:none;}&::-webkit-scrollbar-track-piece{background-color:transparent;}&::-webkit-scrollbar-thumb:vertical{width:0.25em;height:6.25em;background:transparent;border-radius:0.25em;}&::-webkit-scrollbar-thumb:horizontal{width:0;height:0;background:transparent;}"]),
                m = ((0, n.css)(["", ";width:1.5em;height:1.5em;cursor:pointer;position:absolute;right:0;"], i({
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
                h = (0, n.css)(["&:hover{opacity:0.9;}"]),
                f = (0, n.css)(["@-moz-document url-prefix(){&{background:#272727;}}"]),
                b = (0, n.css)(["", ";", ";background:rgba(var(--black),0.12);backdrop-filter:blur(100px);-webkit-backdrop-filter:blur(100px);position:fixed;z-index:4;top:0;left:0;"], o, f),
                p = (0, n.css)(["position:relative;padding:2.5em 0.75em 1em;"]),
                g = (0, n.css)(["width:1.5em;height:1.5em;cursor:pointer;display:flex;position:absolute;right:1.5em;top:1.625em;"]),
                y = (0, n.css)(["", ";font:0.875em/1.2 var(--mainFont);text-align:center;letter-spacing:0.96px;margin:0;text-shadow:0 0 8px rgba(var(--black),0.4);"], l)
        }
    }
]);