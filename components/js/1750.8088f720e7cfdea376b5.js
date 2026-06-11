"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [312, 1750], {
        21750(e, t, n) {
            n.r(t), n.d(t, {
                default: () => A
            });
            var o = n(98283),
                i = n(38874),
                r = n(1733),
                a = n(312),
                s = n(40593),
                c = n(81670),
                l = n(42605),
                u = n(92222),
                d = n(43718),
                f = n(55103),
                m = n(91300),
                h = n(79555),
                p = n(5556),
                b = n.n(p),
                g = {
                    isGlow: b().bool,
                    culture: b().string,
                    demo: b().bool,
                    cashBackInfo: b().object,
                    openCashBackPopup: b().func,
                    isToggleBalance: b().bool,
                    balance: b().number,
                    currencyId: b().string,
                    gameId: b().number,
                    bonuses: b().object,
                    ping: b().number,
                    selectedBonus: null,
                    openBonusListPopup: b().func,
                    resources: b().object,
                    notifications: b().array,
                    removeNotification: b().func,
                    notificationStyles: b().object,
                    chatConfigs: b().object,
                    onChatIconClick: b().func,
                    openMainMenu: b().func,
                    isLeaderBoard: b().bool,
                    showJackpot: b().bool,
                    showNotification: b().bool,
                    openLeaderboardPopup: b().func,
                    openChatRegistryPopup: b().func,
                    hideMenu: b().bool,
                    hideBalance: b().bool,
                    hideClock: b().bool,
                    hidePing: b().bool,
                    showTimer: b().bool,
                    isDataLoaded: b().bool,
                    openJackpotMeterPopup: b().func,
                    styles: {
                        container: b().object,
                        block: b().object,
                        blockInner: b().object,
                        avatar: b().object,
                        item: b().object,
                        IdText: b().object,
                        text: b().object,
                        balanceBox: b().object,
                        iconBtn: b().object,
                        chatBtn: b().object,
                        iconColor: b().string,
                        menuBtn: b().object,
                        isActiveIcon: b().object,
                        cashbackButton: b().object,
                        leaderboardButton: b().object,
                        bonusButton: b().object,
                        jackpotButton: b().object,
                        ping: {}
                    },
                    netPosition: b().number
                },
                y = n(74848);

            function v(e) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, v(e)
            }

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach(function(t) {
                        w(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function w(e, t, n) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != v(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != v(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == v(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var x = (0, o.lazy)(function() {
                    return n.e(8430).then(n.bind(n, 16049))
                }),
                I = (0, o.lazy)(function() {
                    return Promise.resolve().then(n.bind(n, 35340))
                }),
                k = (0, o.lazy)(function() {
                    return Promise.resolve().then(n.bind(n, 66710))
                }),
                B = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-1u1d561-0"
                })(["", ";", ";flex:0 0 100%;height:6.875em;max-height:6.875em;width:100%;color:rgb(var(--white));padding:0.5em 1em 0.75em 1em;margin-bottom:0.5em;border-radius:1em;background:var(--gameHeaderBg,rgba(var(--white),0.08));"], (0, f.Dj)({
                    alignContent: "space-between",
                    flexDirection: "column"
                }), f.SC)),
                P = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-1u1d561-1"
                })(["", ";border-bottom:1px solid rgba(var(--white),0.16);min-height:2.125em;&:nth-child(1){padding-bottom:0.5em;min-height:3.375em;}&:nth-child(2){border-bottom:0 none;padding-top:0.625em;}"], (0, f.Dj)({
                    alignItems: "center",
                    justifyContent: "space-between"
                }))),
                S = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-1u1d561-2"
                })(["", ";gap:0.5em;"], (0, f.Dj)({
                    alignItems: "center"
                }))),
                L = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-1u1d561-3"
                })(["", ";margin-right:1.25em;", ";&:last-child{margin-right:0;}"], (0, f.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center"
                }), function(e) {
                    return e.btnsBlock && (0, i.css)(["gap:0.5em;"])
                })),
                M = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-1u1d561-4"
                })(["font-size:0.875em;", ";", ";"], function(e) {
                    return e.lightText && (0, i.css)(["color:rgba(var(--white),0.7);margin-right:0.5em;"])
                }, function(e) {
                    return e.balance && (0, i.css)(["font-family:var(--mainFontMedium);"])
                })),
                T = (0, o.memo)(i.default.button.withConfig({
                    componentId: "sc-1u1d561-5"
                })(["", ";", ";font-size:1em;width:1.875em;height:1.875em;background:rgba(var(--white),0.08);border-radius:50%;cursor:pointer;position:relative;&:first-child{margin-left:0;}"], (0, f.Dj)({
                    isInlineFlex: !0,
                    alignItems: "center",
                    justifyContent: "center"
                }), f.SC)),
                O = {
                    item: {
                        width: "auto",
                        flex: "0 0 auto",
                        marginRight: "0.25em"
                    }
                },
                D = (0, h.getParamsFromUrl)() || {};

            function H(e) {
                var t = e.isGlow,
                    n = e.culture,
                    i = e.demo,
                    f = e.cashBackInfo,
                    h = e.openCashBackPopup,
                    p = e.isToggleBalance,
                    b = e.balance,
                    g = e.currencyId,
                    v = e.gameId,
                    j = e.bonuses,
                    w = e.ping,
                    D = e.selectedBonus,
                    H = e.openBonusListPopup,
                    A = e.resources,
                    R = e.styles,
                    z = e.notifications,
                    N = e.removeNotification,
                    q = e.notificationStyles,
                    E = e.chatConfigs,
                    F = E.showChatIcon,
                    J = E.showAvatar,
                    U = E.avatarUrl,
                    G = E.newMessageNotify,
                    V = e.onChatIconClick,
                    Z = e.openMainMenu,
                    W = e.isLeaderBoard,
                    Y = e.showJackpot,
                    $ = e.showNotification,
                    _ = e.openLeaderboardPopup,
                    K = e.openChatRegistryPopup,
                    Q = e.hideMenu,
                    X = e.hideBalance,
                    ee = e.hideClock,
                    te = e.hidePing,
                    ne = e.showTimer,
                    oe = e.isDataLoaded,
                    ie = e.openJackpotMeterPopup,
                    re = e.netPosition,
                    ae = !D;
                return (0, y.jsxs)(B, {
                    style: R.container,
                    children: [oe && (0, y.jsx)(o.Suspense, {
                        fallback: null,
                        children: (0, y.jsxs)(P, {
                            style: R.block,
                            children: [(0, y.jsxs)(S, {
                                style: R.blockInner,
                                children: [J && (0, y.jsx)(a.default, {
                                    style: R.avatar,
                                    onClick: K,
                                    avatarUrl: U
                                }), (0, y.jsx)(d.default, {
                                    isInGameHeader: !0,
                                    demo: i,
                                    ping: w,
                                    gameId: v,
                                    culture: n,
                                    balance: b,
                                    resources: A,
                                    currencyId: g,
                                    hideBalance: X,
                                    hidePing: te,
                                    isToggleBalance: p,
                                    netPosition: re,
                                    styles: R
                                })]
                            }), (0, y.jsxs)(L, {
                                style: R.item,
                                btnsBlock: !0,
                                children: [F && (0, y.jsxs)(T, {
                                    style: C(C({}, R.iconBtn), R.chatBtn),
                                    onClick: V,
                                    children: [(0, y.jsx)(c.Chat, {
                                        color: (null == R ? void 0 : R.iconColor) || "rgb(var(--white))"
                                    }), G && (0, y.jsx)(l.default, {})]
                                }), !Q && (0, y.jsx)(m.BurgerButton, {
                                    styles: R,
                                    openMenu: Z
                                })]
                            })]
                        })
                    }), (0, y.jsxs)(P, {
                        style: R.block,
                        children: [(0, y.jsxs)(L, {
                            style: R.item,
                            btnsBlock: !0,
                            children: [(null == f ? void 0 : f.isActiveIcon) && !i && ae && (0, y.jsx)(o.Suspense, {
                                fallback: null,
                                children: (0, y.jsx)(k, {
                                    isGlow: t,
                                    percent: null == f ? void 0 : f.fillPercentage,
                                    styles: R.cashbackButton,
                                    onClick: h
                                })
                            }), W && !i && ae ? (0, y.jsx)(m.LeadBoardHeaderButton, {
                                styles: R.leaderBoardButton,
                                openPopup: _
                            }) : null, oe && !i && (0, y.jsx)(o.Suspense, {
                                fallback: null,
                                children: (0, y.jsx)(I, {
                                    bonuses: j,
                                    styles: R.bonusButton,
                                    selectedBonus: D,
                                    currencyId: g,
                                    resources: A,
                                    onClick: H
                                })
                            }), Y ? (0, y.jsx)(m.JackpotButton, {
                                styles: R.jackpotButton,
                                handleClick: ie
                            }) : null]
                        }), (0, y.jsxs)(L, {
                            style: R.item,
                            children: [!ee && !ne && oe && (0, y.jsx)(o.Suspense, {
                                fallback: null,
                                children: (0, y.jsx)(M, {
                                    lightText: !0,
                                    style: R.text,
                                    children: (0, y.jsx)(x, {})
                                })
                            }), ne && oe && (0, y.jsx)(s.default, {
                                styles: O,
                                isIconHide: !0
                            }), !i && !te && oe && (0, y.jsx)(o.Suspense, {
                                fallback: null,
                                children: (0, y.jsx)(r.default, {
                                    styles: R.ping,
                                    data: w,
                                    resources: A
                                })
                            })]
                        })]
                    }), $ && z.length > 0 && (0, y.jsx)(u.default, {
                        culture: n,
                        isMobile: !1,
                        style: q,
                        notificationList: z,
                        removeNotification: N
                    })]
                })
            }
            D.token, D.mode, H.defaultProps = {
                isGlow: !1,
                culture: "",
                demo: null,
                cashBackInfo: {},
                openCashBackPopup: function() {},
                isToggleBalance: !1,
                balance: 0,
                currencyId: "",
                gameId: void 0,
                bonuses: {
                    list: [],
                    selected: null,
                    enabled: null
                },
                ping: 0,
                selectedBonus: null,
                openBonusListPopup: function() {},
                redirectToGame: function() {},
                resources: {},
                notifications: [],
                removeNotification: function() {},
                notificationStyles: {},
                chatConfigs: {},
                onChatIconClick: function() {},
                openMainMenu: function() {},
                isLeaderBoard: !1,
                showJackpot: !1,
                showNotification: !0,
                openLeaderboardPopup: function() {},
                openChatRegistryPopup: function() {},
                hideMenu: !1,
                hideBalance: !1,
                hideClock: !1,
                hidePing: !1,
                showTimer: !1,
                isDataLoaded: !1,
                openJackpotMeterPopup: function() {},
                styles: {
                    container: {},
                    block: {},
                    blockInner: {},
                    avatar: {},
                    item: {},
                    IdText: {},
                    text: {},
                    balanceBox: {},
                    iconBtn: {},
                    chatBtn: {},
                    iconColor: "",
                    menuBtn: {},
                    isActiveIcon: {},
                    cashbackButton: {},
                    leaderboardButton: {},
                    bonusButton: {},
                    jackpotButton: {},
                    ping: {}
                },
                netPosition: null
            }, H.propTypes = g;
            const A = (0, o.memo)(H)
        },
        312(e, t, n) {
            n.r(t), n.d(t, {
                default: () => f
            });
            var o = n(98283),
                i = n(38874),
                r = (n(94206), n(5556)),
                a = n.n(r),
                s = n(79555),
                c = n(74848),
                l = (0, s.getIsMobile)(),
                u = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-dfqosm-0"
                })(["display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";cursor:pointer;background:linear-gradient(180deg,rgba(var(--white),0.09) 0%,rgba(var(--white),0.36) 100%);", ";"], l ? "1.5em" : "2.25em", l ? "1.5em" : "2.25em", l ? "1.5em" : "2.25em", function(e) {
                    return e.isSmall && (0, i.css)(["width:", ";height:", ";"], l ? "1.5em" : "1.875em", l ? "1.5em" : "1.875em")
                })),
                d = (0, o.memo)(i.default.img.withConfig({
                    componentId: "sc-dfqosm-1"
                })(["width:calc(100% - 0.125em);height:calc(100% - 0.125em);border-radius:inherit;object-fit:cover;"]));

            function f(e) {
                var t = e.styles,
                    n = e.onClick,
                    o = e.avatarUrl,
                    i = e.isSmall;
                return (0, c.jsx)(u, {
                    style: t.container,
                    onClick: n,
                    isSmall: i,
                    children: (0, c.jsx)(d, {
                        style: t.img,
                        alt: "Avatar",
                        src: o
                    })
                })
            }
            f.defaultProps = {
                styles: {},
                onClick: function() {},
                avatarUrl: "",
                isSmall: !1
            }, f.propTypes = {
                styles: a().object,
                onClick: a().func,
                avatarUrl: a().string,
                isSmall: a().bool
            }
        },
        40593(e, t, n) {
            n.r(t), n.d(t, {
                default: () => w
            });
            var o = n(95093),
                i = n.n(o),
                r = n(98283),
                a = n(94206),
                s = n(5556),
                c = n.n(s),
                l = n(51936),
                u = n(38874),
                d = n(34269),
                f = n(79555),
                m = n(74848);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var p = (0, f.getIsMobile)(),
                b = (0, r.memo)(u.default.div.withConfig({
                    componentId: "sc-1teomqm-0"
                })(["", ";width:1em;height:1em;padding-right:0;color:rgb(var(--white));position:relative;margin-right:0.25em;", ";"], (0, d.Dj)({
                    alignItems: "center",
                    justifyContent: "center"
                }), function(e) {
                    return e.isLandscape && (0, u.css)(["width:0.5em;height:0.5em;"])
                })),
                g = (0, r.memo)(u.default.div.withConfig({
                    componentId: "sc-1teomqm-1"
                })(["", ";flex:0 0 6em;width:6em;text-align:center;&:first-child{margin-left:0;}", ";"], (0, d.Dj)({
                    isInlineFlex: !0,
                    alignItems: "flex-end",
                    justifyContent: "center"
                }), function(e) {
                    return e.isLandscape && (0, u.css)(["position:absolute;right:0;top:0.875em;"])
                })),
                y = (0, r.memo)(u.default.div.withConfig({
                    componentId: "sc-1teomqm-2"
                })(["", ";justify-content:", ";width:100%;", ";"], (0, d.Dj)({
                    alignItems: "center"
                }), p ? "center" : "flex-end", function(e) {
                    return e.isLandscape && (0, u.css)(["justify-content:flex-end;"])
                })),
                v = (0, r.memo)(u.default.span.withConfig({
                    componentId: "sc-1teomqm-3"
                })(["", ";font:", " Roboto,sans-serif;color:rgba(var(--white),0.48);"], (0, d.Dj)({
                    isInlineFlex: !0
                }), p ? "0.625em" : "0.875em")),
                j = function(e) {
                    return "".concat(e > 9 ? "" : "0").concat(e)
                };

            function C(e) {
                var t, n, o = e.isIconHide,
                    s = e.styles,
                    c = p && !(0, a.useOrientationChange)(),
                    u = (0, r.useRef)({
                        startTime: i()()
                    }),
                    d = (t = (0, r.useState)(), n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var o, i, r, a, s = [],
                                c = !0,
                                l = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    c = !1
                                } else
                                    for (; !(c = (o = r.call(n)).done) && (s.push(o.value), s.length !== t); c = !0);
                            } catch (e) {
                                l = !0, i = e
                            } finally {
                                try {
                                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                                } finally {
                                    if (l) throw i
                                }
                            }
                            return s
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return h(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                        }
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    f = d[0],
                    C = d[1];
                return (0, r.useEffect)(function() {
                    var e = setInterval(function() {
                        var e = i()(),
                            t = i().duration(e.diff(u.current.startTime)),
                            n = [j(t.hours()), j(t.minutes()), j(t.seconds())],
                            o = n[1],
                            r = n[2];
                        C("".concat(n[0], ":").concat(o, ":").concat(r))
                    }, 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }, []), (0, m.jsx)(g, {
                    style: s.item,
                    isLandscape: c,
                    children: (0, m.jsxs)(y, {
                        style: s.wrapper,
                        isLandscape: c,
                        children: [o ? null : (0, m.jsx)(b, {
                            style: s.timeIcon,
                            isLandscape: c,
                            children: (0, m.jsx)(l.default, {
                                color: "rgba(var(--white), 0.48)"
                            })
                        }), (0, m.jsx)(v, {
                            style: s.value,
                            children: f
                        })]
                    })
                })
            }
            C.defaultProps = {
                isIconHide: !1,
                styles: {}
            }, C.propTypes = {
                isIconHide: c().bool,
                styles: c().shape({
                    item: c().object,
                    wrapper: c().object,
                    timeIcon: c().object,
                    value: c().object
                })
            };
            const w = (0, r.memo)(C)
        },
        92222(e, t, n) {
            n.r(t), n.d(t, {
                default: () => b
            });
            var o = n(98283),
                i = n(38874),
                r = n(5556),
                a = n.n(r),
                s = {
                    culture: a().string,
                    notificationList: a().arrayOf((0, r.shape)({
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
                c = n(74848),
                l = (0, o.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(1543)]).then(n.bind(n, 33924))
                }),
                u = (0, o.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(8019)]).then(n.bind(n, 80400))
                }),
                d = (0, o.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(6879)]).then(n.bind(n, 59260))
                }),
                f = (0, o.lazy)(function() {
                    return Promise.all([n.e(1193), n.e(8832), n.e(2207), n.e(5052), n.e(1855)]).then(n.bind(n, 1855))
                }),
                m = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-la5e2j-0"
                })(["position:absolute;right:0;top:0;z-index:15;overflow:hidden;height:", ";width:", ";"], function(e) {
                    return e.isMobile ? "2.875em" : "var(--notificationContainerHeight, 6.875em)"
                }, function(e) {
                    return e.isMobile ? "var(--notificationContainerWidthMob, 100%)" : "var(--notificationContainerWidth, 21.5em)"
                })),
                h = (0, o.memo)(i.default.div.withConfig({
                    componentId: "sc-la5e2j-1"
                })(["position:static;flex:0 0 auto;width:18.9375em;max-width:19.4375em;align-self:center;margin-bottom:0.5em;overflow:hidden;"]));

            function p(e) {
                var t = e.notificationList,
                    n = e.removeNotification,
                    i = e.style,
                    r = e.closeTime,
                    a = e.isMobile,
                    s = e.isLandscape,
                    p = e.culture,
                    b = e.parentId,
                    g = e.isSmall,
                    y = s ? u : a ? l : g ? f : d,
                    v = g && !a ? h : m,
                    j = (0, o.useRef)(null);
                (0, o.useEffect)(function() {
                    return C(), window.addEventListener("scroll", C),
                        function() {
                            window.removeEventListener("scroll", C)
                        }
                }, [t]);
                var C = (0, o.useCallback)(function() {
                        requestAnimationFrame(function() {
                            j.current && (j.current.style.transform = "translateY(".concat(window.pageYOffset, "px)"))
                        })
                    }, []),
                    w = (0, o.useCallback)(function(e) {
                        n(e)
                    }, [n]);
                return (0, c.jsx)(v, {
                    isMobile: a,
                    style: i.container,
                    ref: j,
                    "data-testid": "".concat(b ? "".concat(b, "_") : "", "notification-container"),
                    children: (0, c.jsx)(o.Suspense, {
                        fallback: null,
                        children: t.map(function(e, t) {
                            var n = e.guid,
                                o = e.message,
                                a = e.status;
                            return (0, c.jsx)(y, {
                                culture: p,
                                status: a,
                                message: o,
                                onClose: function() {
                                    return w(n)
                                },
                                closeTime: r,
                                styles: i.notification,
                                testIdIndex: t,
                                parentId: b
                            }, n || t)
                        })
                    })
                })
            }
            p.defaultProps = {
                culture: "en",
                isMobile: !1,
                style: {},
                closeTime: 1.7,
                parentId: "",
                isSmall: !1
            }, p.propTypes = s;
            const b = (0, o.memo)(p)
        },
        5665(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var o = n(98283),
                i = n(5556),
                r = n.n(i),
                a = n(74848);

            function s(e) {
                var t = e.color,
                    n = e.stroke;
                return (0, a.jsx)("svg", {
                    fill: t,
                    stroke: n,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M6.75 15.4471H8.5V19L12.9634 15.4471H17.25C18.2151 15.4471 19 14.6662 19 13.7059V6.74119C19 5.78092 18.2151 5 17.25 5H6.75C5.78487 5 5 5.78092 5 6.74119V13.7059C5 14.6662 5.78487 15.4471 6.75 15.4471Z"
                    })
                })
            }
            s.defaultProps = {
                color: "",
                stroke: ""
            }, s.propTypes = {
                color: r().string,
                stroke: r().string
            };
            const c = (0, o.memo)(s)
        },
        56694(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var o = n(98283),
                i = n(5556),
                r = n.n(i),
                a = n(74848);

            function s(e) {
                var t = e.color;
                return (0, a.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    fill: t,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.1912 13.106C18.4548 13.239 18.6581 13.449 18.8011 13.659C19.0798 14.093 19.0572 14.625 18.7861 15.094L18.259 15.934C17.9804 16.382 17.4608 16.662 16.9261 16.662C16.6626 16.662 16.3689 16.592 16.1279 16.452C15.9321 16.333 15.7062 16.291 15.4653 16.291C14.7198 16.291 14.0948 16.872 14.0722 17.565C14.0722 18.37 13.3794 19 12.5134 19H11.4893C10.6158 19 9.92303 18.37 9.92303 17.565C9.90797 16.872 9.28296 16.291 8.53747 16.291C8.28897 16.291 8.06307 16.333 7.87481 16.452C7.63384 16.592 7.33264 16.662 7.07661 16.662C6.53443 16.662 6.01485 16.382 5.73623 15.934L5.21665 15.094C4.93803 14.639 4.92297 14.093 5.20159 13.659C5.32207 13.449 5.54798 13.239 5.804 13.106C6.01485 13.008 6.15039 12.847 6.27841 12.658C6.65492 12.056 6.42901 11.265 5.78894 10.908C5.04345 10.509 4.80248 9.62 5.23171 8.927L5.73623 8.101C6.17298 7.408 7.10673 7.163 7.85975 7.569C8.51488 7.905 9.36579 7.681 9.74983 7.086C9.87032 6.89 9.93809 6.68 9.92303 6.47C9.90797 6.197 9.9908 5.938 10.1339 5.728C10.4125 5.294 10.917 5.014 11.4667 5H12.5285C13.0857 5 13.5902 5.294 13.8689 5.728C14.0044 5.938 14.0948 6.197 14.0722 6.47C14.0571 6.68 14.1249 6.89 14.2454 7.086C14.6294 7.681 15.4803 7.905 16.143 7.569C16.8885 7.163 17.8298 7.408 18.259 8.101L18.7635 8.927C19.2003 9.62 18.9593 10.509 18.2063 10.908C17.5662 11.265 17.3403 12.056 17.7243 12.658C17.8448 12.847 17.9804 13.008 18.1912 13.106ZM9.87046 12.007C9.87046 13.106 10.8268 13.981 12.009 13.981C13.1913 13.981 14.125 13.106 14.125 12.007C14.125 10.908 13.1913 10.026 12.009 10.026C10.8268 10.026 9.87046 10.908 9.87046 12.007Z"
                    })
                })
            }
            s.defaultProps = {
                color: "black"
            }, s.propTypes = {
                color: r().string
            };
            const c = (0, o.memo)(s)
        },
        81670(e, t, n) {
            n.r(t), n.d(t, {
                Bonus: () => o.default,
                Chat: () => i.default,
                Menu: () => r.default,
                Settings: () => a.default
            });
            var o = n(21006),
                i = n(5665),
                r = n(32680),
                a = n(56694)
        }
    }
]);