/*! For license information please see 5104.29faf09fd0d2350f9076.js.LICENSE.txt */
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1344, 1820, 2723, 4201, 4677, 5104, 5629, 6582, 7058, 8963, 9439], {
        24659(e, o, t) {
            "use strict";
            t.r(o), t.d(o, {
                ApiPartners: () => W,
                BASE_POPUP_NAMES: () => d,
                BonusTypes: () => T,
                BonusTypesById: () => y,
                BuilderPartners: () => K,
                CDNUrl: () => i,
                CDN_URL: () => J,
                GameStatus: () => N,
                IS_HIDDEN_GLAXSYS_LOADER: () => V,
                KEYBOARD_POPUP_NAMES: () => L,
                PROMOTIONS_TYPES: () => x,
                PopupNames: () => I,
                SLOT_CDN_URL: () => Q,
                TabNames: () => m,
                USELOBBY_BONUS_HISTORY: () => h,
                USELOBBY_BONUS_HISTORY_V2: () => H,
                USELOBBY_BONUS_NOTIFY: () => G,
                USELOBBY_DEACTIVATED: () => F,
                USELOBBY_EXPIRED_TOKEN: () => v,
                USELOBBY_FREEBET_NOTIFY: () => g,
                USELOBBY_GENERATE_HASH_CODE: () => k,
                USELOBBY_GET_BALANCE: () => C,
                USELOBBY_GET_INITIAL_STATE: () => U,
                USELOBBY_GET_INITIAL_STATE_FREEBETINFO: () => b,
                USELOBBY_GET_INITIAL_STATE_MAX_WINNERS: () => f,
                USELOBBY_HISTORY: () => R,
                USELOBBY_LOGOUT_PLAYER: () => D,
                USELOBBY_RELOAD_SITE: () => Y,
                USELOBBY_START_ROUND: () => M,
                culture: () => A,
                gameKind: () => O,
                gameKindName: () => u,
                gameType: () => l,
                gameTypes: () => X,
                isDemo: () => p,
                isHistory: () => E,
                isMobile: () => B,
                keySoundIsOnSlot: () => z,
                loader: () => P,
                partnerId: () => c,
                skinningName: () => S
            });
            var r = t(79555),
                a = t(27749);

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            function s(e, o, t) {
                return (o = function(e) {
                    var o = function(e) {
                        if ("object" != n(e) || !e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var t = o.call(e, "string");
                            if ("object" != n(t)) return t;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == n(o) ? o : o + ""
                }(o)) in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }
            for (var i = a.c_, _ = (0, r.getTypedParamsFromURL)(), O = _.gameKind, u = _.gameKindName, p = _.isDemo, P = _.loader, E = _.isHistory, S = _.skinningName, c = _.partnerId, A = _.culture, l = _.gameType, B = _.isMobile, T = Object.freeze({
                    FreeBet: "freebet",
                    FreeAmount: "freeamount"
                }), y = Object.freeze({
                    1: "FreeBet",
                    2: "FreeAmount"
                }), d = Object.freeze({
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
                }), m = Object.freeze({
                    home: "home",
                    game: "game",
                    history: "history",
                    bonusHistory: "bonusHistory",
                    tutorial: "tutorial",
                    rules: "rules",
                    leaderBoard: "leaderboard"
                }), I = Object.freeze({
                    checkHashCode: "CheckHashCode",
                    aboutHashCode: "AboutHashCode",
                    history: "history",
                    bonusHistory: "bonusHistory",
                    rules: "Rules",
                    leaderBoard: "leaderboard",
                    LeaderboardNotification: "LeaderboardNotification"
                }), L = Object.freeze({
                    BET: "bet",
                    AUTO_BET: "autoBet",
                    AUTO_CASHOUT: "autoCashout"
                }), N = Object.freeze({
                    Loading: "loading",
                    Countdown: "countdown",
                    InProcess: "inprocess"
                }), U = "GetInitialState", f = "GetInitialStateMaxWinners", b = "GetInitialStateFreeBetInfo", C = "GetBalance", R = "History", h = "FreeBetHistory", H = "BonusHistory", M = "StartRound", D = "LogOutPlayer", Y = "Error", k = "GenerateHashCode", g = "FreeBetNotify", G = "BonusNotify", v = "ExpiredToken", F = "Deactivated", K = [81, 90, 93, 97, 99, 100, 153, 161, 170, 207, 208, 212, 213, 218, 222, 225, 228, 239, 241, 244, 248, 252, 253, 254, 255, 257, 259, 260, 261, 264, 268, 269, 273, 274, 275, 276, 281, 282], j = [], w = 0; w < 1e3; w++) j.push(w);
            var W = j,
                x = {
                    leaderboard: "leaderboard",
                    missions: "missions",
                    banksystem: "banksystem",
                    matchday: "matchday",
                    moneyland: "moneyland",
                    jackpot: "jackpot",
                    crashback: "crashback"
                },
                V = "1" === P,
                z = "isOn".concat(E ? "History" : ""),
                X = {
                    FAST_GAME: "FastGame",
                    SLOT_GAME: "SlotGame"
                },
                $ = s(s({}, X.FAST_GAME, {
                    template: a.oN,
                    defaultUrl: a.c_
                }), X.SLOT_GAME, {
                    template: a.lR,
                    defaultUrl: a.LI
                }),
                q = function(e) {
                    var o = new URL(window.location.href),
                        t = o.hostname,
                        r = o.protocol,
                        a = o.host,
                        n = $[e],
                        s = n.template,
                        i = n.defaultUrl;
                    return "localhost" === t ? i : "".concat(r, "//").concat(s.replace("{domain}", a))
                },
                J = q(X.FAST_GAME),
                Q = q(X.SLOT_GAME)
        },
        2694(e, o, t) {
            "use strict";
            var r = t(6925);

            function a() {}

            function n() {}
            n.resetWarningCache = a, e.exports = function() {
                function e(e, o, t, a, n, s) {
                    if (s !== r) {
                        var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw i.name = "Invariant Violation", i
                    }
                }

                function o() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: o,
                    element: e,
                    elementType: e,
                    instanceOf: o,
                    node: e,
                    objectOf: o,
                    oneOf: o,
                    oneOfType: o,
                    shape: o,
                    exact: o,
                    checkPropTypes: n,
                    resetWarningCache: a
                };
                return t.PropTypes = t, t
            }
        },
        5556(e, o, t) {
            e.exports = t(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        21020(e, o, t) {
            "use strict";
            var r = t(98283),
                a = Symbol.for("react.element"),
                n = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                _ = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function O(e, o, t) {
                var r, n = {},
                    O = null,
                    u = null;
                for (r in void 0 !== t && (O = "" + t), void 0 !== o.key && (O = "" + o.key), void 0 !== o.ref && (u = o.ref), o) s.call(o, r) && !_.hasOwnProperty(r) && (n[r] = o[r]);
                if (e && e.defaultProps)
                    for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: O,
                    ref: u,
                    props: n,
                    _owner: i.current
                }
            }
            o.Fragment = n, o.jsx = O, o.jsxs = O
        },
        74848(e, o, t) {
            "use strict";
            e.exports = t(21020)
        }
    }
]);