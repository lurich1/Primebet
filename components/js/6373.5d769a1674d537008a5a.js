/*! For license information please see 6373.5d769a1674d537008a5a.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1820, 1876, 2723, 4201, 4677, 5104, 5629, 6373, 6582, 7058, 8963, 9439], {
        76373(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: () => v
            });
            var n = o(98283),
                r = o(5556),
                a = o.n(r),
                i = o(38874),
                s = o(79555),
                c = o(12754),
                l = o(24659),
                u = "".concat(l.CDN_URL, "/images/loaderGS.svg"),
                d = "".concat(l.CDN_URL, "/gifs/ninjaLoader.gif"),
                m = o(40194),
                p = o(74848);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = Array(t); o < t; o++) n[o] = e[o];
                return n
            }
            var _, y = (function(e) {
                    if (Array.isArray(e)) return e
                }(_ = (0, c.GalaxsysFrontendApi)()) || function(e) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var o, n, r, a, i = [],
                            s = !0,
                            c = !1;
                        try {
                            for (r = (t = t.call(e)).next, !2; !(s = (o = r.call(t)).done) && (i.push(o.value), 2 !== i.length); s = !0);
                        } catch (e) {
                            c = !0, n = e
                        } finally {
                            try {
                                if (!s && null != t.return && (a = t.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw n
                            }
                        }
                        return i
                    }
                }(_) || function(e) {
                    if (e) {
                        if ("string" == typeof e) return f(e, 2);
                        var t = {}.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f(e, 2) : void 0
                    }
                }(_) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[1],
                b = (0, s.getIsMobile)(),
                g = (0, n.memo)(i.default.div.withConfig({
                    componentId: "sc-zh9k1g-0"
                })(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgb(var(--white));width:100%;height:100%;background:rgb(var(--black));border-radius:", ";border:", ";border-color:", ";position:", ";top:0;left:0;z-index:99;", ""], b ? 0 : "1em", b ? "0 none" : "1px solid", b ? "transparent" : "var(--mainLayoutBorderColor)", b ? "fixed" : "absolute", function(e) {
                    return e.fixed && (0, i.css)(["position:fixed;bottom:0;"])
                })),
                h = (0, n.memo)(i.default.div.withConfig({
                    componentId: "sc-zh9k1g-1"
                })(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:", ";height:", ";margin-bottom:2em;"], b ? "9.6875em" : "14.375em", b ? "9.6875em" : "14.375em")),
                O = (0, i.keyframes)(["to{transform:rotate(360deg);}"]),
                S = i.default.div.withConfig({
                    componentId: "sc-zh9k1g-2"
                })(["", ";", ";position:absolute;left:0;top:0;gap:2em;border-radius:50%;animation:", " 1.2s infinite steps(25);"], (0, m.styledFlex)({
                    alignItems: "center"
                }), m.fullSize, O),
                E = i.default.span.withConfig({
                    componentId: "sc-zh9k1g-3"
                })(["width:", ";height:", ";border-radius:50%;position:absolute;", ";", ";transform:translate(-50%,-50%);", ";&:last-of-type{height:", ";width:", ";", ";background-color:rgb(var(--white));}"], b ? "0.375em" : "0.75em", b ? "0.375em" : "0.75em", function(e) {
                    var t = e.itemY;
                    return "top: calc(50% + ".concat(t, "em)")
                }, function(e) {
                    var t = e.itemX;
                    return "left: calc(50% + ".concat(t, "em)")
                }, function(e) {
                    return e.itemId && (0, i.css)(["background-color:rgba(var(--white),", ");"], 14 * e.itemId / 100)
                }, b ? "1.375em" : "2.25em", b ? "1.375em" : "2.25em", function(e) {
                    var t = e.itemX;
                    return "left: calc(45% + ".concat(t, "em)")
                }),
                P = (0, n.memo)(i.default.img.withConfig({
                    componentId: "sc-zh9k1g-4"
                })(["", ";display:block;max-width:100%;position:relative;z-index:1;pointer-events:none;"], m.fullSize)),
                A = (0, n.memo)(i.default.div.withConfig({
                    componentId: "sc-zh9k1g-5"
                })(["width:", ";height:", ";margin-bottom:1em;"], b ? "9.125em" : "8.75em", b ? "1.875em" : "2.5em")),
                L = (0, n.memo)(i.default.img.withConfig({
                    componentId: "sc-zh9k1g-6"
                })(["display:block;max-width:100%;width:100%;height:100%;position:relative;z-index:1;pointer-events:none;"])),
                I = (0, n.memo)(i.default.p.withConfig({
                    componentId: "sc-zh9k1g-7"
                })(["color:rgba(var(--white),0.7);font:", " var(--mainFontLight);text-transform:uppercase;position:absolute;bottom:", ";text-align:center;width:100%;margin:0;", ""], b ? "1em/1.18" : "1.5em/1.08", b ? "2.5em" : "3.5em", function(e) {
                    return e.textTransformNone && (0, i.css)(["text-transform:none;"])
                })),
                B = (0, n.memo)(i.default.p.withConfig({
                    componentId: "sc-zh9k1g-8"
                })(["position:static;text-align:center;width:100%;margin:0;font:0.875em var(--mainFont);color:rgba(var(--white),0.78);"])),
                T = "undefined" != typeof document ? document : null,
                C = function() {
                    for (var e = [], t = b ? 4.84375 : 7.1875, o = Math.PI / 180 * 15, n = 0; n < 7; n++) {
                        var r = n * o,
                            a = parseFloat(Math.cos(r).toFixed(10)),
                            i = Math.sin(r);
                        e.push({
                            x: t * a,
                            y: t * i
                        })
                    }
                    return e
                }();

            function N(e) {
                var t = e.isPartnerLogo,
                    o = e.setContentLoaded,
                    r = e.styles,
                    a = e.isNinjaLoader,
                    i = function(e) {
                        "complete" === e.target.readyState && (o(!0), y("GalaxsysLoad", {
                            progress: 100
                        }))
                    };
                (0, n.useEffect)(function() {
                    return null == T || T.addEventListener("readystatechange", i), y("GalaxsysLoad", {
                            progress: 0
                        }),
                        function() {
                            null == T || T.removeEventListener("readystatechange", i)
                        }
                }, []), (0, n.useEffect)(function() {
                    "complete" === (null == T ? void 0 : T.readyState) && (o(!0), y("GalaxsysLoad", {
                        progress: 100
                    }))
                }, [null == T ? void 0 : T.readyState]);
                var s = l.IS_HIDDEN_GLAXSYS_LOADER ? "" : "Galaxsys",
                    c = l.IS_HIDDEN_GLAXSYS_LOADER ? "" : "Powered by Galaxsys",
                    m = l.IS_HIDDEN_GLAXSYS_LOADER ? "" : "Powered by The FashionTV Gaming Group",
                    f = !l.IS_HIDDEN_GLAXSYS_LOADER || a,
                    _ = a ? d : u,
                    b = !a;
                return (0, p.jsxs)(g, {
                    style: r.container,
                    children: [(0, p.jsxs)(h, {
                        style: r.box,
                        children: [b && (0, p.jsx)(S, {
                            style: r.items,
                            children: C.map(function(e, t) {
                                return (0, p.jsx)(E, {
                                    style: r.item,
                                    itemX: e.x,
                                    itemY: e.y,
                                    itemId: t + 1
                                }, t)
                            })
                        }), f && (0, p.jsx)(P, {
                            src: _,
                            style: r.logo,
                            alt: "Loader"
                        })]
                    }), t ? (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(A, {
                            style: r.partnerLogoBlock,
                            children: (0, p.jsx)(L, {
                                src: r.partnerLogoUrl,
                                style: r.logo,
                                alt: "Loader"
                            })
                        }), (0, p.jsx)(B, {
                            style: r.partnerText,
                            children: c
                        })]
                    }) : "cashshow" === (null === l.gameKindName || void 0 === l.gameKindName ? void 0 : l.gameKindName.toLowerCase()) || "cashshow" === (null === l.gameKind || void 0 === l.gameKind ? void 0 : l.gameKind.toLowerCase()) ? (0, p.jsx)(I, {
                        textTransformNone: !0,
                        style: r.text,
                        children: m
                    }) : (0, p.jsx)(I, {
                        style: r.text,
                        children: s
                    })]
                })
            }
            N.defaultProps = {
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
            }, N.propTypes = {
                setContentLoaded: a().func,
                isPartnerLogo: a().bool,
                isNinjaLoader: a().bool,
                styles: a().shape({
                    container: a().object,
                    box: a().object,
                    items: a().object,
                    item: a().object,
                    text: a().object,
                    logo: a().object,
                    partnerLogoBlock: a().object,
                    partnerText: a().object,
                    partnerLogoUrl: a().string
                })
            };
            const v = (0, n.memo)(N)
        },
        40194(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                fullSize: () => a,
                promotionScroll: () => m,
                promotionTitle: () => c,
                styledButton: () => d,
                styledFlex: () => i,
                textGradient: () => u,
                textTruncate: () => l,
                textWhiteUppercase: () => s
            });
            var n = o(38874),
                r = (0, o(79555).getIsMobile)(),
                a = (0, n.css)(["width:100%;height:100%;"]),
                i = function(e) {
                    var t = e.isInlineFlex,
                        o = e.alignItems,
                        n = e.justifyContent,
                        r = e.alignContent,
                        a = e.isWrap,
                        i = e.flexDirection;
                    return "\n  display: ".concat(t ? "inline-flex" : "flex", ";\n  ").concat(o && "align-items: ".concat(o), ";\n  ").concat(n && "justify-content: ".concat(n), ";\n  ").concat(r && "align-content: ".concat(r), ";\n  ").concat(a && "flex-wrap: wrap", ";\n  ").concat(i && "flex-direction: ".concat(i), ";\n")
                },
                s = (0, n.css)(["color:rgb(var(--white));text-transform:uppercase;"]),
                c = (0, n.css)(["color:#c2edff;font:", " var(--mainFontBold);letter-spacing:0.56px;text-transform:uppercase;margin-bottom:", ";"], r ? "1.25em" : "1.75em", function(e) {
                    return r && e.isLandscape ? "1em" : r ? "1.4em" : "0.58em"
                }),
                l = (0, n.css)(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),
                u = function(e) {
                    var t = e.background;
                    return "\n\tbackground: ".concat(t || "transparent", ";;\n\tbackground-clip: text;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n")
                },
                d = function(e) {
                    var t = e.background,
                        o = e.padding,
                        n = e.border,
                        r = e.borderColor,
                        a = e.borderRadius,
                        s = e.transform;
                    return "\n    ".concat(i({
                        alignItems: "center",
                        justifyContent: "center"
                    }), ";\n\t").concat(o && "padding: ".concat(o), ";\n\tbackground: ").concat(t || "transparent", ";\n\tborder: ").concat(n || "0 none", ";\n\t").concat(r && "border-color: ".concat(r), ";\n\t").concat(a && "border-radius: ".concat(a), ";\n\tfont-size: 1em;\n\tcursor: pointer;\n\toutline: 0 none;\n\t").concat(s && "transform: ".concat(s, ";"), ";\n\ttransition: var(--mainTransition);\n\t\n\t&:active {\n\t\ttransform: ").concat(s || "", " var(--mainScale);\n\t}\n")
                },
                m = function(e) {
                    var t = e.trackBg,
                        o = e.thumbBg;
                    return "\n    overflow: auto;\n\t\n\t&::-webkit-scrollbar {\n\t\twidth: 0.125em;\n\t\theight: 0.125em;\n\t}\n\n\t&::-webkit-scrollbar-track-piece {\n\t\tbackground-color: ".concat(t || "rgba(0, 85, 147, 0.4)", ";\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\theight: 0.125em;\n\t\tbackground: ").concat(o || "#0094ff", ";\n\t\tborder-radius: 0.1875em;\n\t}\n")
                }
        },
        24659(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                ApiPartners: () => K,
                BASE_POPUP_NAMES: () => S,
                BonusTypes: () => h,
                BonusTypesById: () => O,
                BuilderPartners: () => j,
                CDNUrl: () => s,
                CDN_URL: () => J,
                GameStatus: () => L,
                IS_HIDDEN_GLAXSYS_LOADER: () => W,
                KEYBOARD_POPUP_NAMES: () => A,
                PROMOTIONS_TYPES: () => z,
                PopupNames: () => P,
                SLOT_CDN_URL: () => Q,
                TabNames: () => E,
                USELOBBY_BONUS_HISTORY: () => v,
                USELOBBY_BONUS_HISTORY_V2: () => U,
                USELOBBY_BONUS_NOTIFY: () => H,
                USELOBBY_DEACTIVATED: () => Y,
                USELOBBY_EXPIRED_TOKEN: () => M,
                USELOBBY_FREEBET_NOTIFY: () => D,
                USELOBBY_GENERATE_HASH_CODE: () => w,
                USELOBBY_GET_BALANCE: () => C,
                USELOBBY_GET_INITIAL_STATE: () => I,
                USELOBBY_GET_INITIAL_STATE_FREEBETINFO: () => T,
                USELOBBY_GET_INITIAL_STATE_MAX_WINNERS: () => B,
                USELOBBY_HISTORY: () => N,
                USELOBBY_LOGOUT_PLAYER: () => R,
                USELOBBY_RELOAD_SITE: () => k,
                USELOBBY_START_ROUND: () => x,
                culture: () => y,
                gameKind: () => l,
                gameKindName: () => u,
                gameType: () => b,
                gameTypes: () => V,
                isDemo: () => d,
                isHistory: () => p,
                isMobile: () => g,
                keySoundIsOnSlot: () => X,
                loader: () => m,
                partnerId: () => _,
                skinningName: () => f
            });
            var n = o(79555),
                r = o(27749);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            function i(e, t, o) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != a(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" != a(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == a(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            for (var s = r.c_, c = (0, n.getTypedParamsFromURL)(), l = c.gameKind, u = c.gameKindName, d = c.isDemo, m = c.loader, p = c.isHistory, f = c.skinningName, _ = c.partnerId, y = c.culture, b = c.gameType, g = c.isMobile, h = Object.freeze({
                    FreeBet: "freebet",
                    FreeAmount: "freeamount"
                }), O = Object.freeze({
                    1: "FreeBet",
                    2: "FreeAmount"
                }), S = Object.freeze({
                    RULES: "Rules",
                    CASH_BACK: "CashBackPopup",
                    CHECK_HASH_CODE: "CheckHashCode",
                    ABOUT_HASH_CODE: "AboutHashCode",
                    GAME_CONTROLS: "GameControls",
                    BONUS_LIST: "BonusListPopup",
                    KEYBOARD: "Keyboard",
                    KEYBOARD_MINES: "KeyboardMines",
                    GLOBAL_HISTORY: "GlobalHistory",
                    GLOBAL_BONUS_HISTORY: "GlobalBonusHistory",
                    MENU: "Menu",
                    MAIN_MENU: "MainMenu",
                    LEADER_BOARD: "LeaderBoard",
                    LEADER_BOARD_HISTORY: "LeaderBoardHistory",
                    BONUS_ASIDE: "BonusAside",
                    PROMOTIONS: "Promotions",
                    BONUS_LIST_BAR: "BonusListBar",
                    NEW_BONUS_NOTIFICATION: "NewBonusNotification",
                    CHAT_POPUP: "ChatPopup",
                    CHAT_REGISTRY_POPUP: "ChatRegistryPopup",
                    CASH_BACK_RULES: "CashbackRules",
                    CASH_BACK_INFO_POPUP: "CashbackInfoPopup",
                    CASH_BACK_COLLECT_POPUP: "CashbackCollectPopup",
                    CASH_BACK_INTRO_POPUP: "CashbackIntroPopup",
                    HISTORY_FRAME_POPUP: "HistoryFramePopup",
                    HISTORY_END_POPUP: "HistoryEndPopup",
                    LEADER_BOARD_HISTORY_INFO: "LeaderBoardHistoryInfo",
                    UPCOMING_MONEYLAND_POPUP: "UpcomingMoneyLandPopup",
                    MONEYLAND_WIN_POPUP: "MoneyLandWinPopup",
                    UPCOMING_LEADERBOARD_POPUP: "UpcomingLeaderboardPopup",
                    LEADERBOARD_WIN_POPUP: "LeaderboardWinPopup",
                    ACTIVE_MONEYLAND_POPUP: "ActiveMoneyLandPopup",
                    BANKSYSTEM_WIN_POPUP: "BankSystemWinPopup",
                    ACTIVE_MATCHDAY_POPUP: "ActiveMatchDayPopup",
                    ACTIVE_BANKSYSTEM_POPUP: "ActiveBankSystemPopup",
                    UPCOMING_BANKSYSTEM_POPUP: "UpcomingBankSystemPopup",
                    AVAILABLE_MISSIONS_POPUP: "AvailableMissionsPopup",
                    MISSIONS_COMPLETED_POPUP: "MissionCompletedPopup",
                    ACTIVE_CRASHBACK_POPUP: "ActiveCrashbackPopup"
                }), E = Object.freeze({
                    home: "home",
                    game: "game",
                    history: "history",
                    bonusHistory: "bonusHistory",
                    tutorial: "tutorial",
                    rules: "rules",
                    leaderBoard: "leaderboard"
                }), P = Object.freeze({
                    checkHashCode: "CheckHashCode",
                    aboutHashCode: "AboutHashCode",
                    history: "history",
                    bonusHistory: "bonusHistory",
                    rules: "Rules",
                    leaderBoard: "leaderboard",
                    LeaderboardNotification: "LeaderboardNotification"
                }), A = Object.freeze({
                    BET: "bet",
                    AUTO_BET: "autoBet",
                    AUTO_CASHOUT: "autoCashout"
                }), L = Object.freeze({
                    Loading: "loading",
                    Countdown: "countdown",
                    InProcess: "inprocess"
                }), I = "GetInitialState", B = "GetInitialStateMaxWinners", T = "GetInitialStateFreeBetInfo", C = "GetBalance", N = "History", v = "FreeBetHistory", U = "BonusHistory", x = "StartRound", R = "LogOutPlayer", k = "Error", w = "GenerateHashCode", D = "FreeBetNotify", H = "BonusNotify", M = "ExpiredToken", Y = "Deactivated", j = [81, 90, 93, 97, 99, 100, 153, 161, 170, 207, 208, 212, 213, 218, 222, 225, 228, 239, 241, 244, 248, 252, 253, 254, 255, 257, 259, 260, 261, 264, 268, 269, 273, 274, 275, 276, 281, 282], G = [], F = 0; F < 1e3; F++) G.push(F);
            var K = G,
                z = {
                    leaderboard: "leaderboard",
                    missions: "missions",
                    banksystem: "banksystem",
                    matchday: "matchday",
                    moneyland: "moneyland",
                    jackpot: "jackpot",
                    crashback: "crashback"
                },
                W = "1" === m,
                X = "isOn".concat(p ? "History" : ""),
                V = {
                    FAST_GAME: "FastGame",
                    SLOT_GAME: "SlotGame"
                },
                $ = i(i({}, V.FAST_GAME, {
                    template: r.oN,
                    defaultUrl: r.c_
                }), V.SLOT_GAME, {
                    template: r.lR,
                    defaultUrl: r.LI
                }),
                q = function(e) {
                    var t = new URL(window.location.href),
                        o = t.hostname,
                        n = t.protocol,
                        r = t.host,
                        a = $[e],
                        i = a.template,
                        s = a.defaultUrl;
                    return "localhost" === o ? s : "".concat(n, "//").concat(i.replace("{domain}", r))
                },
                J = q(V.FAST_GAME),
                Q = q(V.SLOT_GAME)
        },
        2694(e, t, o) {
            "use strict";
            var n = o(6925);

            function r() {}

            function a() {}
            a.resetWarningCache = r, e.exports = function() {
                function e(e, t, o, r, a, i) {
                    if (i !== n) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var o = {
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
                    checkPropTypes: a,
                    resetWarningCache: r
                };
                return o.PropTypes = o, o
            }
        },
        5556(e, t, o) {
            e.exports = o(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, t, o) {
            "use strict";
            var n = o(98283),
                r = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function l(e, t, o) {
                var n, a = {},
                    l = null,
                    u = null;
                for (n in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
                return {
                    $$typeof: r,
                    type: e,
                    key: l,
                    ref: u,
                    props: a,
                    _owner: s.current
                }
            }
            t.Fragment = a, t.jsx = l, t.jsxs = l
        },
        74848(e, t, o) {
            "use strict";
            e.exports = o(21020)
        }
    }
]);