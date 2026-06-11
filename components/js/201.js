/*! For license information please see 201.js.LICENSE.txt */
"use strict";
(self.webpackChunktowerrush = self.webpackChunktowerrush || []).push([
    [201], {
        9201: (e, t, n) => {
            n.r(t);
            var r = n(745),
                o = n(5694),
                i = n(2413),
                a = n(1277),
                s = n(9786),
                l = n.n(s);

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== c(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== c(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === c(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const m = f(f({}, l()), {}, {
                partnerInfo: f(f({}, l().partnerInfo), {}, {
                    partnerInfo: [],
                    possibleWin: void 0
                }),
                gameInfo: {
                    isIntroOpen: !1,
                    activeGameId: 0,
                    gameId: 0,
                    duration: 0,
                    second: 0,
                    status: "",
                    coefficients: [],
                    totalBet: 0,
                    isOpenTabsPopup: !1,
                    floorData: {
                        floors: null,
                        outcome: void 0,
                        bonusType: void 0,
                        nextFloorType: void 0
                    },
                    win: void 0,
                    isFinished: !1,
                    isReadyThrowFloor: !1,
                    isCashOutFrozen: void 0,
                    isTempleFrozenWin: void 0,
                    comingPossibleWin: void 0,
                    isTempleFrozenWheel: void 0,
                    floorDataAfterCollision: null,
                    comingIsCashOutFrozen: void 0,
                    templeBonusWheelWinIndex: void 0
                },
                playerInfo: f(f({}, l().playerInfo), {}, {
                    winCoefficient: void 0,
                    isGameOver: !1,
                    additionalBet: void 0,
                    isDisconnected: void 0,
                    isDemo: void 0,
                    isMobile: void 0,
                    bet: void 0,
                    possibleWin: void 0,
                    win: void 0,
                    pressed: !0
                }),
                leadersCurrent: [],
                leadersDaily: [],
                leadersMonthly: [],
                animationToggle: !1,
                gameAssetsAreLoading: !0
            });
            var d, b = n(3562),
                p = n(6606),
                y = n(6345);

            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, g(e)
            }

            function h(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== g(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" !== g(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === g(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var v, x = (0, p.getTypedParamsFromURL)() || {},
                k = (x.token, x.mode, x.backUrl, x.partnerId, x.playerId, x.referer, x.isMobile),
                j = (x.gameKindName, x.activeGameId, x.culture),
                S = x.isDemo,
                I = x.skinningName,
                z = x.theme,
                B = x.isDemoPlay,
                O = x.demoPlayCurrency,
                P = k ? "mobile" : "desktop",
                C = (2, function(e) {
                    if (Array.isArray(e)) return e
                }(v = (0, b.GalaxsysFrontendApi)()) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i, a, s = [],
                            l = !0,
                            c = !1;
                        try {
                            for (i = (n = n.call(e)).next, 0; !(l = (r = i.call(n)).done) && (s.push(r.value), 2 !== s.length); l = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return s
                    }
                }(v) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return w(e, 2);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, 2) : void 0
                    }
                }(v) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[1],
                T = {
                    imagesCDNUrl: "".concat(y.CDN_URL, "/images/towerrush"),
                    fontsCDNUrl: "".concat(y.CDN_URL, "/fonts"),
                    spinesCDNUrl: "".concat(y.CDN_URL, "/spines/towerrush/v2"),
                    soundsCDNUrl: "".concat(y.CDN_URL, "/sounds/towerrush")
                },
                A = {
                    soundUrl: "".concat(T.soundsCDNUrl, "/sounds.mp3"),
                    soundObj: {
                        hang: [1e3, 1700],
                        floorDrop: [4e3, 1300],
                        floorDropTriple: [6e3, 3e3],
                        frozenFloor: [1e4, 2200],
                        templeFloor: [14e3, 2300],
                        wheelRotate: [18e3, 4800],
                        templeBonusMount: [24e3, 1500],
                        templeBonusUnmount: [27e3, 1500],
                        floorFail: [3e4, 1700],
                        win: [32e3, 2600],
                        bigWin: [36e3, 4e3]
                    },
                    musicUrl: "".concat(T.soundsCDNUrl, "/background.mp3"),
                    musicObj: {
                        background: [0, 1e7, !0]
                    }
                },
                _ = "START",
                R = "MIDDLE",
                D = "FINISH",
                F = "TEMPLE_BONUS",
                M = "TEMPLE_BONUS_MIDDLE",
                E = 3374,
                N = "isShowIntro",
                L = "tower-constraint-hook",
                Z = "tower-constraint-cable",
                W = "success",
                U = "failure",
                K = "bonus-triple",
                Y = k ? .75 : 1,
                V = (h(d = {
                    "tower-1": {
                        asset: "tower1",
                        width: 191 * Y,
                        height: 162 * Y
                    },
                    "tower-2": {
                        asset: "tower2",
                        width: 150 * Y,
                        height: 180 * Y
                    },
                    "tower-3": {
                        asset: "tower3",
                        width: 141 * Y,
                        height: 143 * Y
                    },
                    "tower-4": {
                        asset: "tower4",
                        width: 145 * Y,
                        height: 173 * Y
                    },
                    "tower-5": {
                        asset: "tower5",
                        width: 143 * Y,
                        height: 167 * Y
                    }
                }, 0, {
                    asset: "frozenTower",
                    width: 153 * Y,
                    height: 172 * Y
                }), h(d, 1, {
                    asset: "bonusTemple",
                    width: 140 * Y,
                    height: 138 * Y
                }), h(d, 2, {
                    asset: "bonusTriple",
                    width: 160 * Y,
                    height: 153 * Y
                }), d),
                q = [1.5, 1.5, 2, 2, 3, 3, 5, 5, 7, 4],
                X = {
                    FREE_BET: 3,
                    FREE_AMOUNT: 4
                };

            function G(e) {
                return G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, G(e)
            }

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== G(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== G(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === G(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const J = {
                setInitialState: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                        n = t.gameInfo,
                        r = t.partnerInfo,
                        o = t.partnerConfiguration,
                        i = n.possibleWin,
                        a = n.floorsInfo,
                        s = n.nextFloorType,
                        l = n.isFrozenCashout,
                        c = n.bet;
                    if (e.playerInfo.win = null, e.playerInfo.pressed = !1, e.playerInfo.possibleWin = i, e.playerInfo.bet = c || (null == o ? void 0 : o.defaultBet) || r.defaultBet || r.minBet, e.playerInfo.initialBet = e.playerInfo.bet, e.gameInfo.isCashOutFrozen = l, e.gameInfo.status = a ? R : _, e.gameInfo.floorData = {
                            nextFloorType: s,
                            floors: null == a ? void 0 : a.map((function(e) {
                                return Q(Q({}, e), {}, {
                                    bonusType: 3 === e.bonusType ? 1 : e.bonusType
                                })
                            }))
                        }, a) {
                        var u = a.findIndex((function(e) {
                            var t = e.bonusType;
                            return 0 === t || 3 === t
                        }));
                        e.gameInfo.coefficients = a.map((function(e, t) {
                            return {
                                odd: e.odd,
                                isFrozen: t <= u
                            }
                        }))
                    }
                    e.partnerInfo = Q(Q({}, e.partnerInfo), r), e.isDataLoaded = !0
                },
                setInitialStateHistory: function(e, t) {
                    var n = t.payload.historyTickets;
                    n && (e.history = n.filter((function(e) {
                        return null !== e.win
                    }))), e.initialStateHistoryLoaded = !0
                }
            };
            var $, ee, te = n(248);

            function ne(e) {
                return ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ne(e)
            }

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? re(Object(n), !0).forEach((function(t) {
                        ie(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ie(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== ne(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" !== ne(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === ne(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var ae, se = oe(oe({}, te.BaseHubMethodNames), {}, {
                    Step: "Step",
                    Cashout: "Cashout",
                    AddStake: "AddStake",
                    FinishGame: "FinishGame",
                    StepValidation: "StepValidation",
                    CashoutValidation: "CashoutValidation",
                    AddStakeValidation: "AddStakeValidation"
                }),
                le = function(e) {
                    return function(t) {
                        var n = {
                            name: e
                        };
                        return t && (n.model = oe({}, t)), n
                    }
                },
                ce = oe(oe({}, (0, te.BaseHubRequests)("2")), {}, (ie($ = {}, se.Step, le(se.Step)), ie($, se.Cashout, le(se.Cashout)), ie($, se.AddStake, le(se.AddStake)), $)),
                ue = oe(oe({}, te.BaseHubResponseModels), {}, (ie(ee = {}, se.GetBalance, {
                    balance: 0
                }), ie(ee, se.History, {
                    history: [{
                        gameId: 0,
                        betId: 0,
                        bet: 0,
                        win: 0,
                        winCoefficient: 0,
                        bonusCoefficient: 0,
                        gameResult: 0,
                        endDate: "1 January, 1970, 00:00:00 UTC"
                    }]
                }), ie(ee, se.GetInitialState, {
                    gameData: {
                        gameInfo: {
                            gameId: 0
                        },
                        gameResult: "",
                        playerId: 14,
                        partnerConfiguration: {
                            coinRate: 0,
                            currencyId: "",
                            quickBets: [],
                            precision: 0,
                            defaultBet: 0,
                            minBet: 0,
                            maxBet: 0,
                            maxWin: 0
                        },
                        resources: "",
                        underConstruction: null,
                        balance: 0,
                        freeBetInfo: [],
                        token: null,
                        winners: {
                            currentWinners: [{
                                playerNickName: "0",
                                playerId: 0,
                                currencyId: "",
                                betCoin: 0,
                                bet: 0,
                                win: 0,
                                winCoin: 0,
                                betTime: "2022-08-02T13:14:53.793"
                            }],
                            dailyMaxWinners: [{
                                playerNickName: "0",
                                playerId: 0,
                                currencyId: "",
                                betCoin: 0,
                                bet: 0,
                                win: 0,
                                winCoin: 0,
                                betTime: "2022-08-02T13:14:53.793"
                            }],
                            monthlyMaxWinners: [{
                                playerNickName: "0",
                                playerId: 0,
                                currencyId: "",
                                betCoin: 0,
                                bet: 0,
                                win: 0,
                                winCoin: 0,
                                betTime: "2022-08-02T13:14:53.793"
                            }]
                        },
                        historyTickets: [{
                            gameId: 0,
                            betId: 0,
                            bet: 0,
                            win: 0,
                            gameResult: 0,
                            endDate: "1 January, 1970, 00:00:00 UTC"
                        }],
                        partnerInstanceName: "TotoGaming",
                        gameTypeNames: []
                    }
                }), ie(ee, se.UpdateWinners, {
                    currentWinners: [{
                        playerNickName: "0",
                        playerId: 0,
                        currencyId: "",
                        betCoin: 0,
                        bet: 0,
                        win: 0,
                        winCoin: 0,
                        betTime: "2022-08-02T13:14:53.793"
                    }],
                    dailyMaxWinners: [{
                        playerNickName: "0",
                        playerId: 0,
                        currencyId: "",
                        betCoin: 0,
                        bet: 0,
                        win: 0,
                        winCoin: 0,
                        betTime: "2022-08-02T13:14:53.793"
                    }],
                    monthlyMaxWinners: [{
                        playerNickName: "0",
                        playerId: 0,
                        currencyId: "",
                        betCoin: 0,
                        bet: 0,
                        win: 0,
                        winCoin: 0,
                        betTime: "2022-08-02T13:14:53.793"
                    }]
                }), ie(ee, se.AddStake, {
                    gameId: 0,
                    validation: 0,
                    bonusType: null,
                    floorsInfo: [{
                        odd: 0,
                        floorType: 1,
                        bonusType: null
                    }],
                    win: 0,
                    playerId: 0,
                    nextFloorType: 1,
                    isFinished: !1
                }), ie(ee, se.Step, {
                    validation: 0,
                    bonusType: null,
                    floorsInfo: [{
                        odd: 0,
                        floorType: 1,
                        bonusType: null
                    }],
                    win: 0,
                    playerId: 0,
                    nextFloorType: 1,
                    isFinished: !1
                }), ie(ee, se.FinishGame, {
                    gameId: 0,
                    validation: 0,
                    floorsInfo: null,
                    win: 0,
                    playerId: 0,
                    isFrozenWheel: null,
                    nextFloorType: 1,
                    bonusType: null,
                    isFinished: !0,
                    winCoefficient: 0
                }), ie(ee, se.AddStakeValidation, {
                    validation: 0
                }), ee));

            function fe(e) {
                return fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, fe(e)
            }

            function me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function de(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? de(Object(n), !0).forEach((function(t) {
                        pe(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function pe(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== fe(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" !== fe(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === fe(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const ye = (pe(ae = {}, se.AddStake, (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                    n = t.win,
                    r = t.gameId,
                    o = t.balance,
                    i = t.bonusType,
                    a = t.floorsInfo,
                    s = t.isFinished,
                    l = t.nextFloorType,
                    c = t.isFrozenWheel,
                    u = t.winCoefficient,
                    f = t.isFrozenCashout,
                    d = t.betType,
                    b = r || e.gameInfo.gameId,
                    p = Object.values(X).some((function(e) {
                        return e === d
                    }));
                e.playerInfo.pressed = !1, p || (e.playerInfo.balance = o), e.playerInfo.comingPossibleWin = n, e.playerInfo.winCoefficient = u, e.gameInfo.gameId = b, e.gameInfo.status = R, e.gameInfo.isFinished = s, e.gameInfo.isReadyThrowFloor = !1, e.gameInfo.isTempleFrozenWin = 3 === i, e.gameInfo.isTempleFrozenWheel = c || e.gameInfo.isTempleFrozenWin, e.gameInfo.comingIsCashOutFrozen = f, e.playerInfo.possibleWin = e.playerInfo.bet, e.gameInfo.floorData = {
                    nextFloorType: l,
                    floors: a,
                    bonusType: e.gameInfo.isTempleFrozenWheel ? 1 : i,
                    outcome: s ? U : W
                }
            })), pe(ae, se.Step, (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                    n = t.isFrozenWheel,
                    r = t.isFinished,
                    o = t.bonusType,
                    i = t.floorsInfo,
                    a = t.win,
                    s = t.nextFloorType,
                    l = t.isFrozenCashout,
                    c = t.winCoefficient;
                e.playerInfo.pressed = !1, e.playerInfo.comingPossibleWin = a, e.playerInfo.winCoefficient = c, e.gameInfo.status = R, e.gameInfo.isFinished = r, e.gameInfo.isReadyThrowFloor = !1, e.gameInfo.comingIsCashOutFrozen = l, e.gameInfo.isTempleFrozenWin = 3 === o, e.gameInfo.isTempleFrozenWheel = n || e.gameInfo.isTempleFrozenWin, e.gameInfo.floorData = {
                    nextFloorType: s,
                    floors: i,
                    bonusType: e.gameInfo.isTempleFrozenWheel ? 1 : o,
                    outcome: r ? U : W
                }
            })), pe(ae, "setFinishGameState", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                    n = t.gameId,
                    r = t.win,
                    o = t.winCoefficient,
                    i = e.playerInfo.bet;
                e.history.unshift({
                    gameId: S ? ++e.playerInfo.demoStakeId : n || e.gameInfo.gameId,
                    bet: i,
                    win: r
                }), e.gameInfo.status = D, e.playerInfo.win = r, e.playerInfo.demoGamesCount += 1, e.playerInfo.pressed = !1, e.playerInfo.winCoefficient = o
            })), pe(ae, "setIsTabsPopupOpen", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.gameInfo.isOpenTabsPopup = t
            })), pe(ae, "setPlayerPressed", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.playerInfo.pressed = t
            })), pe(ae, "setGameStatus", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.gameInfo.status = t
            })), pe(ae, "setBetAmount", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.playerInfo.bet = +(0, p.toNumberString)(t)
            })), pe(ae, "setAdditionalBetAmount", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.playerInfo.additionalBet = t
            })), pe(ae, "setFloorDataAfterCollision", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                    n = t.odd,
                    r = t.tripleIndex;
                e.gameInfo.floorDataAfterCollision = t, "number" == typeof r ? 2 === r && (e.playerInfo.possibleWin = e.playerInfo.comingPossibleWin, e.gameInfo.isCashOutFrozen = e.gameInfo.comingIsCashOutFrozen) : n && (e.playerInfo.possibleWin = e.playerInfo.comingPossibleWin, e.gameInfo.isCashOutFrozen = e.gameInfo.comingIsCashOutFrozen)
            })), pe(ae, "setIsReadyThrowFloor", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.gameInfo.isReadyThrowFloor = t
            })), pe(ae, "setBonusWheelWinIndex", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                e.gameInfo.templeBonusWheelWinIndex = t
            })), pe(ae, "setFrozeCoefficients", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
                e.gameInfo.isCashOutFrozen = !0, e.gameInfo.coefficients = e.gameInfo.coefficients.map((function(e) {
                    return be(be({}, e), {}, {
                        isFrozen: !0
                    })
                })), e.playerInfo.possibleWin = e.playerInfo.comingPossibleWin
            })), pe(ae, "resetFloorData", (function() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    r = (arguments.length > 1 ? arguments[1] : void 0).payload,
                    o = (null == r ? void 0 : r.odd) || (null === (e = n.gameInfo.floorDataAfterCollision) || void 0 === e ? void 0 : e.odd),
                    i = (null == r ? void 0 : r.isFrozen) || (null === (t = n.gameInfo.floorDataAfterCollision) || void 0 === t ? void 0 : t.isFrozen);
                o && (n.gameInfo.coefficients = [].concat(function(e) {
                    return function(e) {
                        if (Array.isArray(e)) return me(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return me(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? me(e, t) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }(n.gameInfo.coefficients), [{
                    odd: o,
                    isFrozen: i
                }])), n.gameInfo.floorDataAfterCollision = null
            })), pe(ae, "clearBonusTempleData", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
                e.gameInfo.templeBonusWheelWinIndex = void 0, e.gameInfo.isTempleFrozenWheel = void 0, e.gameInfo.isTempleFrozenWin = void 0, e.gameInfo.status = R
            })), pe(ae, "resetActon", (function() {
                (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m).playerInfo.pressed = !1
            })), pe(ae, "cleanData", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    t = m.playerInfo,
                    n = t.win,
                    r = t.possibleWin,
                    o = t.winCoefficient,
                    i = m.gameInfo,
                    a = i.coefficients,
                    s = i.floorDataAfterCollision,
                    l = i.isCashOutFrozen,
                    c = i.floorData,
                    u = i.comingIsCashOutFrozen,
                    f = i.comingPossibleWin;
                e.playerInfo.win = n, e.playerInfo.pressed = !1, e.playerInfo.possibleWin = r, e.playerInfo.winCoefficient = o, e.gameInfo.isFinished = void 0, e.gameInfo.floorData = c, e.gameInfo.status = _, e.gameInfo.coefficients = a, e.gameInfo.isCashOutFrozen = l, e.gameInfo.comingPossibleWin = f, e.gameInfo.comingIsCashOutFrozen = u, e.gameInfo.floorDataAfterCollision = s
            })), pe(ae, "setIsIntroOpen", (function(e, t) {
                var n = t.payload;
                e.gameInfo.isIntroOpen = n
            })), pe(ae, "addPartnerInfo", (function(e, t) {
                var n = t.payload;
                e.partnerInfo = be(be({}, e.partnerInfo), n)
            })), ae);

            function ge(e) {
                return ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ge(e)
            }

            function he(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function we(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== ge(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== ge(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === ge(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xe = (0, i.createSlice)({
                    name: "game",
                    initialState: m,
                    reducers: ve(ve(ve({}, a.actionCreators), J), ye),
                    extraReducers: function(e) {
                        Object.entries(a.actionCreators).forEach((function(t) {
                            var n = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != n) {
                                            var r, o, i, a, s = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (i = (n = n.call(e)).next, 0 === t) {
                                                    if (Object(n) !== n) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                            } catch (e) {
                                                c = !0, o = e
                                            } finally {
                                                try {
                                                    if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw o
                                                }
                                            }
                                            return s
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return he(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? he(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }(t, 2),
                                r = n[0],
                                o = n[1];
                            e.addMatcher((function(e) {
                                return e.type === "launcher/".concat(r)
                            }), o)
                        }))
                    }
                }),
                ke = xe.actions;
            const je = xe.reducer,
                Se = function(e) {
                    var t = e.getState,
                        n = e.dispatch;
                    return function(e) {
                        return function(r) {
                            var o = t(),
                                i = o.services.bonuses,
                                a = o.gameInfo.status;
                            switch (null == r ? void 0 : r.type) {
                                case "game/setGameStatus":
                                    var s = r.payload;
                                    (i.enabled || i.disabledSwitcher) && s === _ && i.disabledSwitcher && n(ke.activateBonusService(!0)), e(r);
                                    break;
                                case "launcher/setBonusEnabled":
                                    var l, c = r.payload,
                                        u = null == i ? void 0 : i.list[0];
                                    if (u && (null == u || null === (l = u.type) || void 0 === l ? void 0 : l.toLowerCase()) === y.BonusTypes.FreeBet)
                                        if (c) {
                                            if (a !== _ && a !== R) return;
                                            n(ke.setAdditionalBetAmount(u.bet))
                                        } else n(ke.setAdditionalBetAmount());
                                    e(r);
                                    break;
                                case "launcher/setLauncherInitialState":
                                    e(r), B && S && O && n(ke.addPartnerInfo({
                                        currencyId: O,
                                        currencyDisplayName: O
                                    }));
                                    break;
                                default:
                                    e(r)
                            }
                        }
                    }
                };
            var Ie = n(701);

            function ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            const Be = function() {
                var e = [];
                return {
                    add: function(t) {
                        e = [].concat(function(e) {
                            return function(e) {
                                if (Array.isArray(e)) return ze(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                            }(e) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return ze(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ze(e, t) : void 0
                                }
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(e), [t])
                    },
                    getLength: function() {
                        return e.length
                    },
                    clear: function() {
                        e = []
                    },
                    call: function(t) {
                        var n;
                        if (null !== (n = e) && void 0 !== n && n.length)
                            for (var r = 0; r <= e.length; r++) e[r] && "function" == typeof e[r] && e[r]();
                        e = [], "function" == typeof t && t()
                    },
                    firstCall: function() {
                        var t = e[0];
                        "function" == typeof t && t(), e.shift()
                    },
                    lastCall: function() {
                        var t = e[e.length - 1];
                        "function" == typeof t && t(), e.pop()
                    }
                }
            };
            var Oe = (0, i.createDynamicMiddleware)(),
                Pe = (0, i.configureStore)({
                    reducer: je,
                    devTools: !1,
                    middleware: function(e) {
                        return e().prepend(Oe.middleware).concat(Se)
                    }
                });
            ! function(e) {
                var t, n, r, o = e.getState,
                    i = e.dispatch,
                    a = e.subscribe,
                    s = Be(),
                    l = s.add,
                    c = s.call;
                a((function() {
                    var e = o(),
                        a = e.services.settings.music,
                        s = e.partnerInfo.maxWin,
                        u = e.playerInfo.possibleWin,
                        f = e.gameAssetsAreLoading,
                        m = a && a.isOn && a.isLoaded;
                    if (m && !t && Ie.settings.playMusic("background"), n !== u && (n = u, u && u >= s)) {
                        var d = function() {
                            var e = o().resources;
                            i(ke.addNotification((0, p.getNotificationById)(e, 998)))
                        };
                        f ? l(d) : d()
                    }
                    r && !f && (r = f, c()), t = m, n = u, r = f
                }))
            }(Pe);
            var Ce = n(8148),
                Te = n.n(Ce),
                Ae = function(e) {
                    var t, n = e.playerInfo,
                        r = e.partnerInfo,
                        o = e.services,
                        i = e.gameInfo,
                        a = o.bonuses,
                        s = i.status,
                        l = i.isReadyThrowFloor,
                        c = r.minBet,
                        u = r.maxBet,
                        f = r.defaultBet,
                        m = n.additionalBet,
                        d = n.win,
                        b = n.pressed,
                        p = n.initialBet,
                        g = n.winCoefficient,
                        h = (null == a || null === (t = a.selected) || void 0 === t ? void 0 : t.type) === y.BonusTypes.FreeBet,
                        w = 0 === d && s === D,
                        v = We({
                            gameInfo: i
                        }),
                        x = !l || b || v;
                    return {
                        maxBet: u,
                        status: s,
                        defaultBetAmount: p || f || c,
                        isDisabled: x || h && s !== R,
                        isBetButtonDisabled: x,
                        isFinishAndLose: w,
                        additionalBetAmount: m,
                        isNotBigWin: g < 5
                    }
                },
                _e = function(e) {
                    var t, n = e.resources,
                        r = e.services.bonuses,
                        o = n.strAllIn,
                        i = (null == r || null === (t = r.selected) || void 0 === t ? void 0 : t.type) === y.BonusTypes.FreeBet;
                    return {
                        strAllIn: o,
                        isDisabled: !S && i
                    }
                },
                Re = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                        r = n.services.bonuses,
                        o = n.gameInfo.status,
                        i = n.resources,
                        a = i.strFreeBet,
                        s = i.strFreeAmount,
                        l = i.strBuild;
                    return {
                        status: o,
                        buttonText: S || (null == r || null === (e = r.selected) || void 0 === e ? void 0 : e.type) !== y.BonusTypes.FreeBet ? S || (null == r || null === (t = r.selected) || void 0 === t ? void 0 : t.type) !== y.BonusTypes.FreeAmount ? l : s : a
                    }
                },
                De = function(e) {
                    var t = e.resources,
                        n = e.partnerInfo,
                        r = e.playerInfo,
                        o = t.strYouWin,
                        i = n.currencyId;
                    return {
                        win: r.win,
                        strYouWin: o,
                        currencyId: i
                    }
                },
                Fe = function(e) {
                    var t;
                    return null === (t = e.services.leaderBoard) || void 0 === t || null === (t = t.activeLeaderBoard) || void 0 === t ? void 0 : t.id
                },
                Me = function(e) {
                    var t = e.resources,
                        n = e.leadersMonthly,
                        r = e.leadersCurrent,
                        o = e.history,
                        i = e.services.leaderBoard.activeLeaderBoard;
                    return {
                        leadersMonthly: n,
                        leadersCurrent: r,
                        history: o,
                        resources: t,
                        activeLeaderBoardId: null == i ? void 0 : i.id
                    }
                },
                Ee = function(e) {
                    var t = e.partnerInfo,
                        n = e.playerInfo,
                        r = e.gameInfo,
                        o = e.resources,
                        i = t.currencyId,
                        a = o.strCashout;
                    return {
                        possibleWin: n.possibleWin,
                        strCashout: a,
                        currencyId: i,
                        isCashOutFrozen: r.isCashOutFrozen
                    }
                },
                Ne = function(e) {
                    var t = e.gameInfo,
                        n = e.resources.strResults;
                    return {
                        coefficients: t.coefficients,
                        isHide: We({
                            gameInfo: t
                        }),
                        strResults: n
                    }
                },
                Le = function(e) {
                    var t = e.gameInfo;
                    return {
                        winIndex: t.templeBonusWheelWinIndex,
                        isTempleFrozenWheel: t.isTempleFrozenWheel
                    }
                },
                Ze = function(e) {
                    var t = e.gameInfo;
                    return {
                        floorData: t.floorData,
                        isTempleBonusMode: We({
                            gameInfo: t
                        })
                    }
                },
                We = function(e) {
                    var t = e.gameInfo.status;
                    return t === F || t === M
                },
                Ue = function(e) {
                    return e.gameInfo.status === F
                },
                Ke = function(e) {
                    var t = e.playerInfo,
                        n = e.gameInfo,
                        r = e.partnerInfo,
                        o = e.resources,
                        i = n.status,
                        a = r.currencyId,
                        s = t.win,
                        l = t.winCoefficient;
                    return {
                        strYouWin: o.strYouWin,
                        strCongratulations: o.strCongratulations,
                        win: s,
                        currencyId: a,
                        isShow: i === D && l >= 5
                    }
                },
                Ye = function(e) {
                    var t = e.playerInfo,
                        n = e.gameInfo.status,
                        r = t.win,
                        o = t.winCoefficient;
                    return {
                        isShow: n === D && (0 === r || o < 5),
                        win: r
                    }
                },
                Ve = function(e) {
                    var t = e.services,
                        n = e.gameInfo,
                        r = t.settings,
                        o = r.sound,
                        i = r.music,
                        a = n.status;
                    return {
                        sound: o,
                        music: i,
                        isHide: a === F || a === M
                    }
                },
                qe = function(e) {
                    return !e.gameInfo.isIntroOpen
                },
                Xe = n(8416),
                Ge = n(7608),
                He = n(1350),
                Qe = n(433),
                Je = n.n(Qe),
                $e = "".concat(T.imagesCDNUrl, "/global/switchBtn.webp"),
                et = "url(".concat($e, ") no-repeat center/100% 100%"),
                tt = "".concat(T.imagesCDNUrl, "/global/secondaryBtn.webp"),
                nt = "url(".concat(tt, ") no-repeat center/100% 100%"),
                rt = "".concat(T.imagesCDNUrl, "/global/secondaryBtnSm.webp"),
                ot = "url(".concat(rt, ") no-repeat center/100% 100%"),
                it = {
                    background: et
                },
                at = "".concat(T.imagesCDNUrl, "/desktop/headerBg.webp"),
                st = {
                    gameHeader: {
                        container: {
                            background: "url(".concat(at, ") no-repeat center/100% 100% #3a3a3a")
                        }
                    },
                    promotions: {
                        container: {
                            borderRadius: "var(--mainRadiusBig)"
                        }
                    },
                    bonusAside: {
                        container: {
                            background: "var(--mainPopupBg)"
                        },
                        button: {
                            background: "var(--secondaryButtonLayer1)"
                        },
                        buttonInner: {
                            background: nt
                        }
                    },
                    gameAsideInner: {
                        background: "var(--gameAsideBg)"
                    },
                    bonusListBar: {
                        container: {
                            background: "var(--mainPopupBg)"
                        }
                    },
                    sliderView: {
                        list: {
                            background: "rgba(var(--white), 0.14)"
                        },
                        switcherInner: it
                    }
                },
                lt = n(5500),
                ct = n(8442),
                ut = n.n(ct);

            function ft(e) {
                return ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ft(e)
            }

            function mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function dt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(n), !0).forEach((function(t) {
                        pt(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function bt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function pt(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== ft(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" !== ft(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === ft(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var yt, gt, ht = "engine",
                wt = "fontSize",
                vt = "deadLine",
                xt = "ballonSkin",
                kt = "towerBodies",
                jt = "currentTower",
                St = "towerCounter",
                It = "scene-options",
                zt = "SceneContainer",
                Bt = "towersContainer",
                Ot = "clouds-container",
                Pt = "scene-resolution",
                Ct = "backgroundGraphic",
                Tt = "towerCableGraphic",
                At = "prevTowerPosition",
                _t = "scene-main-container",
                Rt = "bodiesWorldStartPoint",
                Dt = St,
                Ft = kt,
                Mt = (pt(yt = {}, Dt, 1), pt(yt, Ft, []), gt = yt, {
                    get: function(e) {
                        return gt[e]
                    },
                    set: function(e, t) {
                        gt[e] = t
                    },
                    actions: {
                        addTowerBodies: function(e) {
                            gt[Ft] = [].concat(function(e) {
                                return function(e) {
                                    if (Array.isArray(e)) return bt(e)
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(e) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return bt(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bt(e, t) : void 0
                                    }
                                }(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(gt[Ft]), [e])
                        }
                    },
                    reset: function() {
                        var e;
                        gt = dt(dt({}, gt), {}, (pt(e = {}, Dt, 1), pt(e, Ft, []), e))
                    },
                    remove: function(e) {
                        delete gt[e]
                    }
                });
            const Et = Mt;

            function Nt(e) {
                return Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Nt(e)
            }
            var Lt = ["editableBody", "editableGraphic"],
                Zt = ["graphicDestroy"];

            function Wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wt(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== Nt(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== Nt(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === Nt(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Kt(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var Yt = function(e) {
                    var t = e.data,
                        n = e.body,
                        r = e.graphic,
                        o = e.graphicKey,
                        i = e.bodyKey;
                    return t.findIndex((function(e) {
                        return n ? e.body === n : r ? e.graphics === r : o ? o === e.graphic.graphicKey : i ? i === e.body.bodyKey : e.body.graphicKey === r.graphicKey
                    }))
                },
                Vt = function() {
                    var e = [];
                    return {
                        add: function(t) {
                            return e.push(t)
                        },
                        get: function(t) {
                            var n = t.body,
                                r = t.graphic,
                                o = Yt({
                                    data: e,
                                    body: n,
                                    graphic: r
                                });
                            return e[o]
                        },
                        edit: function(t) {
                            var n = t.editableBody,
                                r = t.editableGraphic,
                                o = Kt(t, Lt),
                                i = Yt(Ut({
                                    data: e
                                }, o));
                            r ? e[i].graphics = r : n && (e[i].body = n)
                        },
                        remove: function(t) {
                            var n = t.graphicDestroy,
                                r = Kt(t, Zt),
                                o = Yt(Ut({
                                    data: e
                                }, r));
                            if (n) {
                                var i = (e[o] || {}).graphics;
                                i && !i._destroyed && i.destroy()
                            } - 1 !== o && e.splice(o, 1)
                        },
                        removeAll: function() {
                            e = []
                        },
                        update: function() {
                            var t;
                            null === (t = e) || void 0 === t || t.forEach((function(e) {
                                var t = e.graphics,
                                    n = e.body,
                                    r = e.isConstraint;
                                t && n && !t._destroyed && (r ? (t.position = n.pointB || 0, t.rotation = n.angle || 0) : (t.position = n.position || 0, t.rotation = n.angle || 0))
                            }))
                        }
                    }
                }();
            const qt = Vt;
            var Xt, Gt = (Xt = {
                x: 0,
                y: 0
            }, {
                add: function(e) {
                    var t = Et.get(ht);
                    ct.Composite.add(t.world, e)
                },
                remove: function(e) {
                    var t = e.bodies,
                        n = e.graphicDestroy,
                        r = Et.get(ht);
                    Array.isArray(t) ? t.forEach((function(e) {
                        return qt.remove({
                            body: e,
                            graphicDestroy: n
                        })
                    })) : qt.remove({
                        body: t,
                        graphicDestroy: n
                    }), ct.World.remove(r.world, t)
                },
                translate: function(e) {
                    var t = e.x,
                        n = e.y,
                        r = Et.get(ht);
                    ct.Composite.translate(r.world, {
                        x: Xt.x || 0,
                        y: n - Xt.y || 0
                    }), Xt = {
                        x: t,
                        y: n
                    }
                },
                translateComplete: function() {
                    Xt = {
                        x: 0,
                        y: 0
                    }
                },
                removeAll: function() {}
            });
            const Ht = Gt;
            var Qt = {
                Sinusoidal: {
                    In: function(e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    Out: function(e) {
                        return Math.sin(e * Math.PI / 2)
                    },
                    InOut: function(e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                Quadratic: {
                    In: function(e) {
                        return e * e
                    },
                    Out: function(e) {
                        return 1 - (1 - e) * (1 - e)
                    },
                    InOut: function(e) {
                        return e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2
                    }
                },
                Cubic: {
                    In: function(e) {
                        return e * e * e
                    },
                    Out: function(e) {
                        return 1 - Math.pow(1 - e, 3)
                    },
                    InOut: function(e) {
                        return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
                    }
                },
                Quartic: {
                    In: function(e) {
                        return e * e * e * e
                    },
                    Out: function(e) {
                        return 1 - Math.pow(1 - e, 4)
                    },
                    InOut: function(e) {
                        return e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2
                    }
                },
                Quintic: {
                    In: function(e) {
                        return e * e * e * e * e
                    },
                    Out: function(e) {
                        return 1 - Math.pow(1 - e, 5)
                    },
                    InOut: function(e) {
                        return e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2
                    }
                },
                Exponential: {
                    In: function(e) {
                        return 0 === e ? 0 : Math.pow(2, 10 * e - 10)
                    },
                    Out: function(e) {
                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                    },
                    InOut: function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2
                    }
                },
                Circular: {
                    In: function(e) {
                        return 1 - Math.sqrt(1 - Math.pow(e, 2))
                    },
                    Out: function(e) {
                        return Math.sqrt(1 - Math.pow(e - 1, 2))
                    },
                    InOut: function(e) {
                        return e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2
                    }
                },
                Back: {
                    In: function(e) {
                        return 2.70158 * e * e * e - 1.70158 * e * e
                    },
                    Out: function(e) {
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2)
                    },
                    InOut: function(e) {
                        var t = 2.5949095;
                        return e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - t) / 2 : (Math.pow(2 * e - 2, 2) * ((t + 1) * (2 * e - 2) + t) + 2) / 2
                    }
                },
                Elastic: {
                    In: function(e) {
                        var t = 2 * Math.PI / 3;
                        return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * t)
                    },
                    Out: function(e) {
                        var t = 2 * Math.PI / 3;
                        return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * t) + 1
                    },
                    InOut: function(e) {
                        var t = 2 * Math.PI / 4.5;
                        return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * t) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * t) / 2 + 1
                    }
                },
                Bounce: {
                    In: function(e) {
                        return 1 - Qt.Bounce.Out(1 - e)
                    },
                    Out: function(e) {
                        var t = 7.5625,
                            n = 2.75;
                        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                    },
                    InOut: function(e) {
                        return e < .5 ? (1 - Qt.Bounce.Out(1 - 2 * e)) / 2 : (1 + Qt.Bounce.Out(2 * e - 1)) / 2
                    }
                },
                Quart: {
                    In: function(e) {
                        return e * e * e * e
                    }
                },
                Quadric: {
                    InOut: function(e) {
                        return e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2
                    },
                    Out: function(e) {
                        return 1 - (1 - e) * (1 - e)
                    }
                },
                Circ: {
                    Out: function(e) {
                        return Math.sqrt(1 - (e - Math.pow(1, 2)))
                    }
                },
                Sine: {
                    In: function(e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    Out: function(e) {
                        return Math.sin(e * Math.PI / 2)
                    }
                },
                easeExpo: {
                    In: function(e) {
                        return 0 === e ? 0 : Math.pow(2, 10 * e - 10)
                    },
                    Out: function(e) {
                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                    }
                },
                easeQuart: {
                    In: function(e) {
                        return e * e * e * e
                    },
                    Out: function(e) {
                        return 1 - Math.pow(1 - e, 4)
                    }
                }
            };
            const Jt = Qt;
            var $t;

            function en(e) {
                return en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, en(e)
            }

            function tn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rn(r.key), r)
                }
            }

            function nn(e, t, n) {
                return (t = rn(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function rn(e) {
                var t = function(e, t) {
                    if ("object" !== en(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" !== en(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === en(t) ? t : String(t)
            }
            var on = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), e.counter++, e.instances[e.counter] = this, this._start = t, this._currentStart = t, this.id = e.counter, this._repeat = 0, this.elapsed = 0, this.results = {}, this.repeatCounter = 0, this.isYoyoInit = !1, this._isStarted = !1
                }
                var t, n, r;
                return t = e, r = [{
                    key: "removeAll",
                    value: function() {
                        e.counter = 0, e.instances = {}
                    }
                }], (n = [{
                    key: "to",
                    value: function(e, t) {
                        if ("number" != typeof t || Number.isNaN(t)) throw new Error("Tween: Invalid duration type");
                        return this._currentEnd = e, this._end = e, this._duration = t, this
                    }
                }, {
                    key: "easing",
                    value: function(e, t) {
                        return this._easing = {
                            default: e,
                            specifics: t
                        }, this
                    }
                }, {
                    key: "yoyo",
                    value: function(e) {
                        return this._yoyo = e, this
                    }
                }, {
                    key: "delay",
                    value: function(e) {
                        return this._delay = e, this
                    }
                }, {
                    key: "repeat",
                    value: function(e) {
                        return this._repeat = e, this
                    }
                }, {
                    key: "onStart",
                    value: function(e) {
                        return this._onStart = e, this
                    }
                }, {
                    key: "onUpdate",
                    value: function(e) {
                        return this._onUpdate = e, this
                    }
                }, {
                    key: "onComplete",
                    value: function(e) {
                        return this._onComplete = e, this
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        e.instances[this.id] && (e.instances[this.id] = !0, delete e.instances[this.id])
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this._isSkipped = !0
                    }
                }]) && tn(t.prototype, n), r && tn(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            $t = on, nn(on, "counter", 0), nn(on, "instances", {}), nn(on, "update", (function(e) {
                ! function(e) {
                    var t = e.delta,
                        n = e.instances;
                    Object.values(n).forEach((function(e) {
                        var n = e._start,
                            r = e._end,
                            o = e._currentStart,
                            i = e._currentEnd,
                            a = e._delay,
                            s = e._duration,
                            l = e._isStarted,
                            c = e._isSkipped,
                            u = e._yoyo,
                            f = e._repeat,
                            m = e._easing,
                            d = e._onStart,
                            b = e._onUpdate,
                            p = e._onComplete;
                        if (a > 0) e._delay -= t;
                        else {
                            l || ("function" == typeof d && d(), e._isStarted = !0);
                            var y = e.elapsed + t,
                                g = y / s,
                                h = g >= 1 || c;
                            if (e.elapsed = y, Object.keys(o).forEach((function(t) {
                                    var n, r = g,
                                        a = o[t],
                                        s = i[t],
                                        l = s;
                                    if (Array.isArray(s)) {
                                        var c = Math.floor(g * s.length);
                                        h ? (r = 1, l = s[s.length - 1], a = s[s.length - 2]) : (c && (a = s[c - 1]), l = s[c], r = s.length * (r % (1 / s.length)))
                                    }
                                    var u = m && (m.specifics && m.specifics[t] || m.default);
                                    u && (r = u(r)), n = h ? l : a + (l - a) * r, e.results[t] = n
                                })), "function" == typeof b && b(e.results, g), h)
                                if (!u || e.isYoyoInit || c) {
                                    if (!e.preFinish) return void(e.preFinish = !0);
                                    if ("function" == typeof p && p(e.results), f > 1) return e._repeat--, e.elapsed = 0, e._currentStart = n, e._currentEnd = r, e.isYoyoInit = !1, e._isStarted = !1, void(e.result = {});
                                    e.destroy()
                                } else e._currentStart = r, e._currentEnd = n, e.elapsed = 0, e.isYoyoInit = !0
                        }
                    }))
                }({
                    delta: e.delta,
                    instances: $t.instances
                })
            }));
            const an = on;

            function sn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i, a, s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ln(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ln(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ln(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var cn = ht,
                un = Ct,
                fn = vt,
                mn = Ot,
                dn = kt,
                bn = Rt,
                pn = function(e) {
                    var t = e.height,
                        n = e.toDown,
                        r = e.callback,
                        o = e.skip,
                        i = Et.get(cn),
                        a = Et.get(dn),
                        s = Et.get(un),
                        l = Et.get(mn),
                        c = Et.get(bn),
                        u = Et.get(xt),
                        f = Et.get(Pt);
                    if (null != a && a.length && n) {
                        var m = a[a.length - 1];
                        new an({
                            angle: m.angle
                        }).to({
                            angle: 0
                        }, 2e3).easing(Jt.Cubic.Out).onUpdate((function(e) {
                            var t = e.angle;
                            m && ct.Body.setAngle(m, t)
                        }))
                    }
                    if (l && !l._destroyed) {
                        var d = Et.get(fn),
                            b = Et.get(It),
                            p = n ? c - ct.Composite.bounds(i.world).max.y : t;
                        n && ct.Body.setPosition(d, {
                            x: d.position.x,
                            y: Math.abs(p) + b.deadLine.y
                        });
                        var y = {
                                worldY: 0,
                                backgroundY: s.position.y,
                                cloudContainerY: l.position.y
                            },
                            g = {
                                worldY: p,
                                cloudContainerY: n ? 0 : l.position.y + t / 4,
                                backgroundY: n ? f.height - s.height : s.position.y + t
                            };
                        u && (y.ballonSkinY = u.position.y, g.ballonSkinY = u.position.y + (n ? p / 5 : t / 2)), new an(y).to(g, o ? 0 : n ? 2e3 : 500).easing(Jt.Cubic.InOut).onUpdate((function(e) {
                            var t = e.backgroundY,
                                n = e.worldY,
                                r = e.cloudContainerY,
                                o = e.ballonSkinY;
                            Ht.translate({
                                y: n
                            }), l && !l._destroyed && (l.position.y = r), s && !s._destroyed && (null == s ? void 0 : s.position.y) <= 0 && (s.position.y = t > 0 ? 0 : t), u && !u._destroyed && (u.position.y = o)
                        })).onComplete((function() {
                            Ht.translateComplete(), "function" == typeof r && r(), n || ct.Body.translate(d, {
                                x: 0,
                                y: -t
                            }), u && !u._destroyed && new an({
                                y: u.position.y
                            }).to({
                                y: b.balloonSkin.yStart
                            }, 2e3).easing(Jt.Quadric.InOut).onUpdate((function(e) {
                                var t = e.y;
                                u && !u._destroyed && (u.position.y = t)
                            }))
                        }))
                    }
                },
                yn = function(e) {
                    var t = lt.Cache.get(e);
                    if (!t) throw new Error("Asset ".concat(e, " not found in cache"));
                    return t
                },
                gn = function(e, t) {
                    return yn(e).textures[t]
                },
                hn = function(e) {
                    for (var t = e.pairs, n = e.actions, r = 0; r < t.length; r++)
                        for (var o = t[r], i = {
                                bodyA: o.bodyA,
                                bodyB: o.bodyB
                            }, a = 0, s = Object.entries(i); a < s.length; a++) {
                            var l = sn(s[a], 2),
                                c = l[0],
                                u = l[1],
                                f = o["bodyA" === c ? "bodyB" : "bodyA"],
                                m = n[u.label];
                            m && "function" == typeof m && m({
                                firstBody: u,
                                secondBody: f
                            })
                        }
                },
                wn = function(e) {
                    return 180 / Math.PI * e % 360
                },
                vn = function(e, t) {
                    return e.children.find((function(e) {
                        return e.name === t
                    }))
                },
                xn = function() {
                    var e = Et.get(cn),
                        t = ct.Composite.allBodies(e.world).filter((function(e) {
                            return "tower" === e.label
                        }));
                    t.length > 4 && Ht.remove({
                        bodies: t.splice(0, t.length - 4),
                        graphicDestroy: !0
                    })
                },
                kn = function(e, t) {
                    return V["number" == typeof t ? t : "tower-".concat(e)]
                };

            function jn(e) {
                return jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, jn(e)
            }

            function Sn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function In(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sn(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== jn(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== jn(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === jn(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var zn = T.imagesCDNUrl,
                Bn = T.fontsCDNUrl,
                On = T.spinesCDNUrl,
                Pn = I ? "/skinning/".concat(I) : "",
                Cn = new function() {
                    this.fonts = {
                        RubikBlack: "".concat(Bn, "/RubikBlack/RubikBlack.woff")
                    }, this.afterLoadFonts = {
                        RubikLight: "".concat(Bn, "/RubikLight/RubikLight.woff"),
                        RubikRegular: "".concat(Bn, "/RubikRegular/RubikRegular.woff"),
                        RubikMedium: "".concat(Bn, "/RubikMedium/RubikMedium.woff"),
                        RubikBold: "".concat(Bn, "/RubikBold/RubikBold.woff")
                    }, this.images = {
                        buildBtn: "".concat(zn, "/").concat(P, "/buildBtn.webp"),
                        betPartBorder: "".concat(zn, "/").concat(P, "/betPartBorder.webp"),
                        logo: "".concat(zn).concat(Pn, "/").concat(P, "/logo.webp")
                    }, this.spines = {
                        frozenTower: {
                            src: "".concat(On, "/tr_tower_rush_frozen.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }
                    }, this.sprites = new function() {
                        this.globalBeforeLoadSpritePack = ["".concat(zn, "/global/beforeLoad/global.json")], this.backgroundBack = ["".concat(zn, "/").concat(P, "/background-back.webp")], this.backgroundFront = ["".concat(zn, "/").concat(P, "/background-front.webp")], this.bonusFrozenText = ["".concat(zn, "/").concat(P, "/bonus-frozen.webp")], this.bonusTripleText = ["".concat(zn, "/").concat(P, "/bonus-triple.webp")], this.basisTower = ["".concat(zn, "/").concat(P, "/basis-tower.webp")], I ? (this.airBalloon = "".concat(zn).concat(Pn, "/airballoon.webp"), this.bgAnim = "".concat(On).concat(Pn, "/").concat(P, "/bg.json"), this.bonusFrozenText.unshift("".concat(zn).concat(Pn, "/").concat(P, "/bonus-frozen.webp")), this.bonusTripleText.unshift("".concat(zn).concat(Pn, "/").concat(P, "/bonus-triple.webp")), this.basisTower.unshift("".concat(zn).concat(Pn, "/").concat(P, "/basis-tower.webp")), this.backgroundFront.unshift("".concat(zn).concat(Pn, "/").concat(P, "/background-front.webp")), this.backgroundBack.unshift("".concat(zn).concat(Pn, "/").concat(P, "/background-back.webp")), this.globalBeforeLoadSpritePack.unshift("".concat(zn).concat(Pn, "/global/beforeLoad/global.json")), z && (this.basisTower.unshift("".concat(zn).concat(Pn, "/").concat(z, "/").concat(P, "/basis-tower.webp")), this.airBalloon = "".concat(zn).concat(Pn, "/").concat(z, "/airballoon.webp"))) : z && (this.basisTower.unshift("".concat(zn, "/").concat(z, "/").concat(P, "/basis-tower.webp")), this.backgroundFront.unshift("".concat(zn, "/").concat(z, "/").concat(P, "/background-front.webp")))
                    }, this.afterLoadSprites = new function() {
                        this.coefficientSmoke = {
                            src: "".concat(On, "/tr_result_smoke.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }, this.bonusTempleFire = {
                            src: "".concat(On, "/tr_bonus_torch_fire_web.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }, this.coefficientSmokeTriple = {
                            src: "".concat(On, "/tr_triple_bonus_smoke.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }, this.bonusTempleWheelFrameHighlight = {
                            src: "".concat(On, "/tr_bonus_wheel_stone.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }, this.bonusTempleWheelFrameSectorGlowSpine = {
                            src: "".concat(On, "/tr_bonus_sector_glow.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }, this.dropSmoke = {
                            src: "".concat(On, "/tr_drop_smoke.json"),
                            spineAtlasFile: "".concat(On, "/tr_all.atlas")
                        }, this.bonusTempleWheel = "".concat(zn, "/global/bonus-temple-wheel.webp"), this.bonusTempleTextShine = "".concat(zn, "/global/temple-text-shine.png"), this.bonusTempleWheelFrozen = "".concat(zn, "/global/bonus-temple-wheel-frozen.webp"), this.bonusTempleWheelArrow = "".concat(zn, "/global/bonus-temple-wheel-arrow.webp"), this.bonusTempleWheelCenter = "".concat(zn, "/global/bonus-temple-wheel-centre.webp"), this.bonusTempleWheelBackShadow = "".concat(zn, "/global/bonus-temple-wheel-back.webp"), this.bonusTempleBackground = "".concat(zn, "/").concat(P, "/bonus-temple-background.webp"), this.bonusTempleWheelFrameShadow = "".concat(zn, "/global/bonus-temple-wheel-frame-shadow.webp"), this.bonusTempleText = ["".concat(zn, "/").concat(P, "/bonus-temple.webp")], I && this.bonusTempleText.unshift("".concat(zn).concat(Pn, "/").concat(P, "/bonus-temple.webp"))
                    }, this.afterLoadImages = {
                        win: "".concat(zn, "/").concat(P, "/win.webp"),
                        lose: "".concat(zn, "/").concat(P, "/lose.webp"),
                        bigWin: "".concat(zn, "/").concat(P, "/bigWin.webp"),
                        sprite: "".concat(zn, "/").concat(P, "/sprite.webp"),
                        bigWinPopupBG: "".concat(zn, "/").concat(P, "/bigWinPopupBG.webp")
                    }
                },
                Tn = {
                    sun: function() {
                        return gn("globalBeforeLoadSpritePack", "sun")
                    },
                    shine: function() {
                        return gn("globalBeforeLoadSpritePack", "shine")
                    },
                    hook: function() {
                        return gn("globalBeforeLoadSpritePack", "hook")
                    },
                    hookCable: function() {
                        return gn("globalBeforeLoadSpritePack", "hook-cable")
                    },
                    cloud1: function() {
                        return gn("globalBeforeLoadSpritePack", "cloud-1")
                    },
                    cloud2: function() {
                        return gn("globalBeforeLoadSpritePack", "cloud-2")
                    },
                    tower1: function() {
                        return gn("globalBeforeLoadSpritePack", "tower-1")
                    },
                    tower2: function() {
                        return gn("globalBeforeLoadSpritePack", "tower-2")
                    },
                    tower3: function() {
                        return gn("globalBeforeLoadSpritePack", "tower-3")
                    },
                    tower4: function() {
                        return gn("globalBeforeLoadSpritePack", "tower-4")
                    },
                    tower5: function() {
                        return gn("globalBeforeLoadSpritePack", "tower-5")
                    },
                    bonusTemple: function() {
                        return gn("globalBeforeLoadSpritePack", "bonus-temple")
                    },
                    bonusTriple: function() {
                        return gn("globalBeforeLoadSpritePack", "bonus-triple")
                    }
                },
                An = In(In(In(In({}, Cn.fonts), Cn.spines), Cn.sprites), Cn.images),
                _n = In(In(In({}, Cn.afterLoadSprites), Cn.afterLoadImages), Cn.afterLoadFonts),
                Rn = ["".concat(y.CDN_URL, "/fonts/RubikLight/RubikLight.woff"), "".concat(y.CDN_URL, "/fonts/RubikRegular/RubikRegular.woff"), "".concat(y.CDN_URL, "/fonts/RubikMedium/RubikMedium.woff"), "".concat(y.CDN_URL, "/fonts/RubikBold/RubikBold.woff")],
                Dn = "".concat(y.CDN_URL, "/fonts/index.css"),
                Fn = "".concat(y.CDN_URL, "/images/").concat("towerrush", "/favicon/favicon.ico"),
                Mn = "".concat(y.CDN_URL, "/gifs/rotate.gif"),
                En = {
                    "--appBg": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/desktop/bg.webp)"),
                    "--resultItemFrozen": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/global/resultItemFrozen.webp)"),
                    "--bigWinPopupBG": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/bigWinPopupBG.webp)"),
                    "--bigWinBg": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/bigWin.webp)"),
                    "--bigWinPopupSprite": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/sprite.webp)"),
                    "--winBg": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/win.webp)"),
                    "--loseBg": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/lose.webp)"),
                    "--betPartBorder": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/betPartBorder.webp)"),
                    "--cashoutBtn": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/cashoutBtn.webp)"),
                    "--cashoutBtnFrozen": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/cashoutBtnFrozen.webp)"),
                    "--buildBtn": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/buildBtn.webp)"),
                    "--buildBtnBolt": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/global/buildBtnBolt.webp)"),
                    "--betInputBackground": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/global/betInputBackground.webp)"),
                    "--quickBtnBackground": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/global/quickBtnBackground.webp)"),
                    "--buildBtnLines": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/buildBtnLines.webp)"),
                    "--buildSnow": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/winter/mobile/buildSnow.webp)"),
                    "--halfBuildSnow": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/winter/mobile/halfBuildSnow.webp)"),
                    "--cashoutSnow": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/winter/mobile/cashoutSnow.webp)"),
                    "--boardItem": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/intro/boardItem.webp)"),
                    "--boardItemArrow": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/intro/boardItemArrow.webp)"),
                    "--resultRow": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/intro/resultRow.webp)"),
                    "--resultRowArrow": "url(".concat(y.CDN_URL, "/images/").concat("towerrush", "/").concat(P, "/intro/resultRowArrow.webp)")
                },
                Nn = "".concat(T.imagesCDNUrl, "/mobile/headerBg.webp"),
                Ln = {
                    gameHeader: {
                        container: {
                            background: "url(".concat(Nn, ") no-repeat center/100% 100% #3a3a3a")
                        }
                    },
                    aside: {
                        logoImg: Cn.images.logo
                    },
                    bonusListBar: {
                        container: {
                            background: "var(--mainPopupBg)"
                        }
                    },
                    keyboard: {
                        okButton: {
                            background: ot
                        }
                    },
                    sliderView: {
                        header: {
                            height: "auto"
                        },
                        switcherInner: it,
                        list: {
                            background: "rgba(var(--white),0.14)",
                            width: "calc(100% - 0.5em)",
                            border: "1px solid ",
                            borderColor: " var(--mainLayoutBorderColor)",
                            borderRadius: "3em"
                        }
                    },
                    table: {
                        container: {
                            height: "100%",
                            padding: 0
                        },
                        header: {
                            paddingRight: "0.5em"
                        },
                        body: {
                            height: "calc(100% - 6em)",
                            paddingRight: "0.5em",
                            overflowY: "auto"
                        }
                    },
                    backdrop: {
                        container: {
                            zIndex: 5
                        }
                    },
                    mobileHistory: {
                        historyContainer: {
                            background: "var(--historyContainerBg)"
                        },
                        boxTable: {
                            row: {
                                background: "rgba(var(--white),0.04)",
                                borderColor: "rgba(var(--white),0.24)"
                            },
                            winRow: {
                                background: "var(--winRowBg)",
                                borderColor: "var(--winRowBorderColor)"
                            }
                        }
                    },
                    chatBtn: {
                        container: {
                            height: "1.625em",
                            width: "1.625em",
                            padding: "0.25em",
                            border: "0 none",
                            background: "radial-gradient(100% 100% at 50% 0%, #92d0de 11.46%, #0086b0 100%)"
                        }
                    }
                },
                Zn = n(5439),
                Wn = n.n(Zn),
                Un = n(5893);

            function Kn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Yn = function(e) {
                var t = e.isShowSlash,
                    n = e.item,
                    r = (0, o.useSelector)((function(e) {
                        return e.resources
                    })),
                    i = function(e) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Kn(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kn(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(n.split(":")),
                    a = i[0],
                    s = i.slice(1),
                    l = s[0].includes("x") ? "" : s[0].toLowerCase(),
                    c = s.map((function(e, t, n) {
                        if (e.includes("x")) return l && (1 === t && (e = "(".concat(e)), t === n.length - 1 && (e = "".concat(e, ")"))), e;
                        var o = r["str".concat(e)] || "_".concat(e);
                        return 0 !== t ? " ".concat(o) : o
                    }));
                return (0, Un.jsxs)("div", {
                    className: "".concat(l, " item"),
                    children: [(0, Un.jsxs)("span", {
                        children: ["".concat(t ? "/" : "").concat(a), ":"]
                    }), (0, Un.jsx)("span", {
                        children: c
                    })]
                })
            };
            Yn.propTypes = {
                item: Wn().string.isRequired,
                isShowSlash: Wn().bool.isRequired
            };
            const Vn = (0, Xe.memo)(Yn);
            var qn = n(3379),
                Xn = n.n(qn),
                Gn = n(7795),
                Hn = n.n(Gn),
                Qn = n(569),
                Jn = n.n(Qn),
                $n = n(3565),
                er = n.n($n),
                tr = n(9216),
                nr = n.n(tr),
                rr = n(4589),
                or = n.n(rr),
                ir = n(3774),
                ar = {};
            ar.styleTagTransform = or(), ar.setAttributes = er(), ar.insert = Jn().bind(null, "head"), ar.domAPI = Hn(), ar.insertStyleElement = nr(), Xn()(ir.Z, ar);
            const sr = ir.Z && ir.Z.locals ? ir.Z.locals : void 0;
            var lr = n(8994),
                cr = {};
            cr.styleTagTransform = or(), cr.setAttributes = er(), cr.insert = Jn().bind(null, "head"), cr.domAPI = Hn(), cr.insertStyleElement = nr(), Xn()(lr.Z, cr);
            const ur = lr.Z && lr.Z.locals ? lr.Z.locals : void 0;

            function fr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var mr = k ? sr : ur;
            const dr = function(e) {
                var t = e.result,
                    n = void 0 === t ? null : t,
                    r = (0, Xe.useRef)(),
                    i = (0, o.useSelector)((function(e) {
                        return e.resources.strMore
                    })),
                    a = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return fr(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fr(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)(), 2),
                    s = a[0],
                    l = a[1];
                if ((0, Ge.useOutsideClick)((function() {
                        return l(!1)
                    }), r), n) {
                    var c = n.split("/"),
                        u = c.splice(4);
                    return (0, Un.jsxs)("div", {
                        className: "".concat(k ? "gameResultMb" : "gameResultWeb", " gameResult"),
                        children: [c.map((function(e, t) {
                            return (0, Un.jsx)(Vn, {
                                item: e,
                                isShowSlash: 0 !== t
                            }, t)
                        })), !!u.length && (0, Un.jsxs)("div", {
                            className: mr.tooltipContainer,
                            ref: r,
                            children: [(0, Un.jsx)("button", {
                                className: mr.tooltipButton,
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: i || "_more"
                            }), s && (0, Un.jsx)("div", {
                                className: mr.tooltipInner,
                                children: u.map((function(e, t) {
                                    return e && (0, Un.jsx)(Vn, {
                                        item: e,
                                        isShowSlash: 0 !== t
                                    }, t)
                                }))
                            })]
                        })]
                    })
                }
            };
            var br = k ? Ln : st,
                pr = Pe.getState,
                yr = function(e, t, n) {
                    var r = pr(),
                        o = n.strDrawId,
                        i = n.strBet,
                        s = n.strWin,
                        l = n.strExpireDate,
                        c = n.strCanceled,
                        u = n.strGameResult,
                        f = (0, a.selectPartnerUIConfig)(r).historyHighlightAnyWin;
                    return {
                        headers: [o, i, s, (0, Un.jsx)("div", {
                            className: "".concat(k ? "gameResultMb" : "gameResultWeb", " gameResult"),
                            children: u
                        }, "result"), l],
                        body: e.map((function(e) {
                            var t = e.gameId,
                                n = e.bet,
                                r = e.win,
                                o = e.result;
                            return {
                                key: t,
                                betId: t,
                                bet: n,
                                win: null === r ? c || "Canceled" : r,
                                result: (0, Un.jsx)(dr, {
                                    result: o
                                }),
                                endDate: (0, p.getFormattedDateTime)(e.endDate, !0)
                            }
                        })),
                        selectedIndex: -1,
                        winBy: f ? "win" : "bet",
                        onSelect: function() {}
                    }
                },
                gr = n(6499),
                hr = n(2480);

            function wr(e) {
                return wr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, wr(e)
            }

            function vr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function xr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? vr(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== wr(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== wr(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === wr(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const kr = function(e) {
                var t = e.assets,
                    n = e.loader,
                    r = Object.keys(t);
                if ("pixi" === n) {
                    var o = function(e, t) {
                        return lt.Assets.add(e), lt.Assets.load(t).catch((function(e) {
                            return console.log(e)
                        }))
                    };
                    return Promise.all(r.map((function(e) {
                        var n = t[e],
                            r = Array.isArray(n),
                            i = {
                                alias: e,
                                data: {}
                            };
                        if (null != n && n.spineAtlasFile) {
                            var a = n.src,
                                s = n.spineAtlasFile;
                            i.src = a, i.data.spineAtlasFile = s
                        } else i.src = r ? n[0] : n;
                        return r ? new Promise((function(t) {
                            fetch(i.src).then((function(n) {
                                if (!n.ok) throw new Error;
                                o(i, e).then(t)
                            })).catch((function() {
                                var r = n[1];
                                r ? o(xr(xr({}, i), {}, {
                                    src: r
                                }), e).catch((function(e) {
                                    return console.error(e, "Asset 2")
                                })).finally(t) : t()
                            }))
                        })) : o(i, e)
                    })))
                }
                return Promise.all(r.map((function(e) {
                    return fetch(t[e]).catch((function() {
                        return console.error("AssetsLoadService: Asset ".concat(e, " ").concat(t[e], " not found"))
                    }))
                })))
            };

            function jr(e) {
                return jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, jr(e)
            }

            function Sr() {
                Sr = function() {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    l = i.toStringTag || "@@toStringTag";

                function c(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function u(e, t, n, r) {
                    var i = t && t.prototype instanceof g ? t : g,
                        a = Object.create(i.prototype),
                        s = new C(r || []);
                    return o(a, "_invoke", {
                        value: z(e, n, s)
                    }), a
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = u;
                var m = "suspendedStart",
                    d = "suspendedYield",
                    b = "executing",
                    p = "completed",
                    y = {};

                function g() {}

                function h() {}

                function w() {}
                var v = {};
                c(v, a, (function() {
                    return this
                }));
                var x = Object.getPrototypeOf,
                    k = x && x(x(T([])));
                k && k !== n && r.call(k, a) && (v = k);
                var j = w.prototype = g.prototype = Object.create(v);

                function S(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function I(e, t) {
                    function n(o, i, a, s) {
                        var l = f(e[o], e, i);
                        if ("throw" !== l.type) {
                            var c = l.arg,
                                u = c.value;
                            return u && "object" == jr(u) && r.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                n("next", e, a, s)
                            }), (function(e) {
                                n("throw", e, a, s)
                            })) : t.resolve(u).then((function(e) {
                                c.value = e, a(c)
                            }), (function(e) {
                                return n("throw", e, a, s)
                            }))
                        }
                        s(l.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(e, r) {
                            function o() {
                                return new t((function(t, o) {
                                    n(e, r, t, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function z(t, n, r) {
                    var o = m;
                    return function(i, a) {
                        if (o === b) throw new Error("Generator is already running");
                        if (o === p) {
                            if ("throw" === i) throw a;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = i, r.arg = a;;) {
                            var s = r.delegate;
                            if (s) {
                                var l = B(s, r);
                                if (l) {
                                    if (l === y) continue;
                                    return l
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === m) throw o = p, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = b;
                            var c = f(t, n, r);
                            if ("normal" === c.type) {
                                if (o = r.done ? p : d, c.arg === y) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (o = p, r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function B(t, n) {
                    var r = n.method,
                        o = t.iterator[r];
                    if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, B(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                    var i = f(o, t.iterator, n.arg);
                    if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, y;
                    var a = i.arg;
                    return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function P(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function T(t) {
                    if (t || "" === t) {
                        var n = t[a];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                i = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(jr(t) + " is not iterable")
                }
                return h.prototype = w, o(j, "constructor", {
                    value: w,
                    configurable: !0
                }), o(w, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = c(w, l, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, c(e, l, "GeneratorFunction")), e.prototype = Object.create(j), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, S(I.prototype), c(I.prototype, s, (function() {
                    return this
                })), t.AsyncIterator = I, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new I(u(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, S(j), c(j, l, "Generator"), c(j, a, (function() {
                    return this
                })), c(j, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = T, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var n = this;

                        function o(r, o) {
                            return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    P(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: T(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), y
                    }
                }, t
            }

            function Ir(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(r, o)
            }
            var zr, Br, Or, Pr, Cr, Tr, Ar = Pe.getState,
                _r = Pe.dispatch,
                Rr = function() {
                    var e, t = (e = Sr().mark((function e() {
                        var t, n, r;
                        return Sr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Ar(), r = n.gameInfo.floorData, (null === (t = r.floors) || void 0 === t ? void 0 : t.slice(-3).some((function(e) {
                                        return 0 === e.bonusType
                                    }))) ? An.frozenTower = Cn.spines.frozenTower : _n.frozenTower = Cn.spines.frozenTower, e.next = 5, kr({
                                        loader: "pixi",
                                        assets: An,
                                        onProgress: function(e) {
                                            return Pe.dispatch(ke.setProgress(e))
                                        }
                                    });
                                case 5:
                                    _r(ke.setGameAssetsAreLoading(!1)), kr({
                                        assets: _n,
                                        loader: "pixi"
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                Ir(i, r, o, a, s, "next", e)
                            }

                            function s(e) {
                                Ir(i, r, o, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                Dr = function() {
                    return _r(ke.openPopup({
                        name: y.BASE_POPUP_NAMES.CHAT_POPUP
                    }))
                },
                Fr = function(e) {
                    var t = Ar().playerInfo;
                    C("GalaxsysRound", {
                        state: "finish",
                        data: {
                            bet: t.bet,
                            win: e
                        }
                    })
                },
                Mr = function(e) {
                    var t = e.name,
                        n = e.args;
                    return _r(ke.openPopup({
                        name: t,
                        args: n
                    }))
                },
                Er = function(e) {
                    return _r(ke.setGameStatus(e))
                },
                Nr = function() {
                    var e = Ar().gameInfo,
                        t = e.floorData.floors,
                        n = e.isTempleFrozenWin,
                        r = t[0].odd,
                        o = n ? 9 : q.indexOf(r);
                    _r(ke.setBonusWheelWinIndex(-1 === o ? void 0 : o))
                },
                Lr = function(e) {
                    return _r(ke.setIsTabsPopupOpen(e))
                },
                Zr = function() {
                    return _r(ke.setFrozeCoefficients())
                },
                Wr = function(e) {
                    return _r(ke.resetFloorData(e))
                },
                Ur = function(e) {
                    return _r(ke.setIsReadyThrowFloor(e))
                },
                Kr = function(e) {
                    return _r(ke.setFloorDataAfterCollision(e))
                },
                Yr = function() {
                    var e = Ar().services.leaderBoard.activeLeaderBoard;
                    Mr({
                        name: y.BASE_POPUP_NAMES.LEADER_BOARD,
                        args: {
                            leaderBoardId: null == e ? void 0 : e.id
                        }
                    })
                },
                Vr = function(e, t) {
                    var n = e.isFinished,
                        r = e.bonusType,
                        o = n ? "floorFail" : 0 === r ? "frozenFloor" : 1 === r ? "templeFloor" : 2 === r ? "floorDropTriple" : "floorDrop";
                    _r(ke[t](e)), n && setTimeout((function() {
                        return qr(e)
                    }), 1e3), Ie.settings.playSound(o)
                },
                qr = function(e) {
                    var t, n, r;
                    _r(ke.setFinishGameState(e)), n = 1500, (r = ((null === (t = Ar()) || void 0 === t ? void 0 : t.uiConfigs) || {}).BetsInterval) && (n = 1e3 * r), setTimeout((function() {
                        _r(ke.cleanData())
                    }), n)
                },
                Xr = (zr = 1, Br = 0, Or = 1, Pr = {}, Cr = {}, Tr = performance.now(), requestAnimationFrame((function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = t - Tr;
                    Tr = t;
                    var r = 1e3 / 60;
                    switch (requestAnimationFrame(e), !0) {
                        case n > 20 && n < 1e3 / 30:
                            r = 1e3 / 30;
                            break;
                        case n < 1e3 / 70:
                            r = 1e3 / 120
                    }
                    Or = r / (1e3 / 60), Br += r * zr, Object.values(Pr).forEach((function(e) {
                        return "function" == typeof e && e({
                            delta: r * zr,
                            correction: Or
                        })
                    })), Object.values(Cr).forEach((function(e) {
                        var t = e.start,
                            n = e.timeout,
                            r = e.key,
                            o = e.callback;
                        t + n <= Br && (o(), delete Cr[r])
                    }))
                })), {
                    add: function(e) {
                        var t = e.name,
                            n = e.callback;
                        Pr[t] = n
                    },
                    addTimeOut: function(e, t) {
                        var n = (new Date).getUTCMilliseconds() + Math.random();
                        return Cr[n] = {
                            callback: e,
                            timeout: t,
                            key: n,
                            start: Br
                        }, n
                    },
                    remove: function(e) {
                        delete Pr[e]
                    },
                    removeTimeOut: function(e) {
                        delete Cr[e]
                    },
                    removeAll: function() {
                        Pr = {}, Cr = {}
                    },
                    setScale: function(e) {
                        zr = e
                    }
                });
            const Gr = Xr;

            function Hr(e) {
                return Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Hr(e)
            }
            var Qr = ["index", "type", "height", "isBonusTriple", "swayingTowerDirectionIsRight", "posY", "bonusTypeKey"];

            function Jr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            const $r = function(e) {
                    var t = e.index,
                        n = e.type,
                        r = e.height,
                        o = e.isBonusTriple,
                        i = e.swayingTowerDirectionIsRight,
                        a = e.posY,
                        s = e.bonusTypeKey,
                        l = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }(e, Qr),
                        c = Et.get(It),
                        u = c.tower.width,
                        f = c.swayingTower,
                        m = f.xStart,
                        d = f.xEnd,
                        b = f.yStart,
                        p = l.isStatic,
                        y = a || b,
                        g = Et.get(At).x,
                        h = Et.get(Pt).width,
                        w = p ? h / 2 : o ? g : i ? m : d,
                        v = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Jr(Object(n), !0).forEach((function(t) {
                                    var r, o, i;
                                    r = e, o = t, i = n[t], (o = function(e) {
                                        var t = function(e, t) {
                                            if ("object" !== Hr(e) || null === e) return e;
                                            var n = e[Symbol.toPrimitive];
                                            if (void 0 !== n) {
                                                var r = n.call(e, "string");
                                                if ("object" !== Hr(r)) return r;
                                                throw new TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(e)
                                        }(e);
                                        return "symbol" === Hr(t) ? t : String(t)
                                    }(o)) in r ? Object.defineProperty(r, o, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[o] = i
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jr(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            index: t,
                            friction: 1,
                            label: "tower",
                            modelType: n,
                            restitution: 0,
                            frictionAir: .05
                        }, l),
                        x = 1 === n && void 0 === s ? ct.Bodies.fromVertices(w, y, [{
                            x: 140 * Y,
                            y: 0
                        }, {
                            x: 170 * Y,
                            y: 80 * Y
                        }, {
                            x: 140 * Y,
                            y: 160 * Y
                        }, {
                            x: 0,
                            y: 160 * Y
                        }, {
                            x: -30 * Y,
                            y: 80 * Y
                        }, {
                            x: 0,
                            y: 0
                        }], v) : ct.Bodies.rectangle(w, y, u, r, v);
                    return o && (x.outcome = K), x.height = r, Ht.add(x), {
                        body: x
                    }
                },
                eo = function(e) {
                    var t = e.bonusType,
                        n = new lt.Container;
                    n.scale = {
                        x: 0,
                        y: 0
                    }, n.zIndex = 1;
                    var r, o, i = (r = yn("shine"), (o = lt.Sprite.from(r)).alpha = .4, o.anchor = {
                        x: .5,
                        y: .5
                    }, o.scale = {
                        x: .4,
                        y: .4
                    }, o.blendMode = lt.BLEND_MODES.ADD, o);
                    n.addChild(i);
                    var a = 0 === t ? "bonusFrozenText" : "bonusTripleText";
                    if (a) {
                        var s = yn(a),
                            l = lt.Sprite.from(s),
                            c = k ? .9 : .75;
                        l.anchor.set(.5, .5), l.scale.set(c), n.addChild(l)
                    }
                    return new an({
                        angle: 0
                    }).to({
                        angle: 360
                    }, 4e3).repeat(1 / 0).onUpdate((function(e) {
                        var t = e.angle;
                        i && !i._destroyed && (i.angle = t)
                    })), new an({
                        scale: 0
                    }).to({
                        scale: Y
                    }, 1e3).easing(Jt.Cubic.Out).onUpdate((function(e) {
                        var t = e.scale;
                        n && !n._destroyed && (n.scale = {
                            x: t,
                            y: t
                        })
                    })), n
                },
                to = function(e) {
                    var t = e.towerContainer,
                        n = e.index,
                        r = V[2],
                        o = r.asset,
                        i = r.width,
                        a = r.height,
                        s = Tn[o](),
                        l = eo({
                            index: n,
                            bonusType: 2
                        });
                    return t.addChild(l), t.zIndex = 3, {
                        graphic: s,
                        asset: o,
                        width: i,
                        height: a
                    }
                },
                no = function(e) {
                    var t = e.towerContainer,
                        n = e.index,
                        r = V[0],
                        o = r.asset,
                        i = r.width,
                        a = r.height,
                        s = yn(o),
                        l = new gr.Spine(s.spineData);
                    l.pivot.y = -85.5, k && l.scale.set(Y), l.state.setAnimation(0, "frozen_web", !1);
                    var c = eo({
                        index: n,
                        bonusType: 0
                    });
                    return t.zIndex = 3, t.addChild(c), {
                        spine: l,
                        width: i,
                        height: a
                    }
                },
                ro = function() {
                    var e = V[1],
                        t = e.asset,
                        n = e.width,
                        r = e.height;
                    return {
                        graphic: Tn[t](),
                        asset: t,
                        width: n,
                        height: r
                    }
                };

            function oo(e) {
                return oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, oo(e)
            }

            function io(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var ao = function(e) {
                    var t = e.bonusType,
                        n = e.graphics,
                        r = e.body,
                        o = e.index;
                    if ("number" == typeof t) {
                        var i, a = n.children[0];
                        switch (t) {
                            case 0:
                                i = V[0];
                                var s = no({
                                    index: o,
                                    towerContainer: n
                                }).spine;
                                a.destroy(), n.addChild(s);
                                break;
                            case 1:
                                var l = Et.get(Pt),
                                    c = Et.get(_t);
                                i = V[1];
                                var u = ro(),
                                    f = u.graphic,
                                    m = u.width,
                                    d = u.height;
                                a.texture = f, a.width = m, a.height = d;
                                var b = l.height / 2,
                                    p = l.width / 2;
                                setTimeout((function() {
                                    Ie.settings.playSound("templeBonusMount"), Er(M), new an({
                                        scale: 1
                                    }).to({
                                        scale: 120
                                    }, 1250).easing(Jt.Cubic.In).onUpdate((function(e) {
                                        var t = e.scale;
                                        c && !c._destroyed && (c.scale = {
                                            x: t,
                                            y: t
                                        })
                                    })), new an({
                                        pivotX: p,
                                        pivotY: b
                                    }).to({
                                        pivotX: n.position.x,
                                        pivotY: k ? l.height - 270 : b + 70
                                    }, 1e3).easing(Jt.Cubic.Out).onUpdate((function(e) {
                                        var t = e.pivotY,
                                            n = e.pivotX;
                                        c && !c._destroyed && (c.pivot = {
                                            x: n,
                                            y: t
                                        })
                                    })), setTimeout((function() {
                                        return Er(F)
                                    }), 500)
                                }), 1e3);
                                break;
                            case 2:
                                i = V[2];
                                var y = to({
                                        index: o,
                                        towerContainer: n
                                    }),
                                    g = y.graphic,
                                    h = y.width,
                                    w = y.height;
                                a.texture = g, a.width = h, a.height = w
                        }
                        r && (r.height = i.height, ct.Body.setVertices(r, [{
                            x: i.width,
                            y: 0
                        }, {
                            x: i.width,
                            y: i.height
                        }, {
                            x: 0,
                            y: i.height
                        }, {
                            x: 0,
                            y: 0
                        }]))
                    }
                },
                so = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.type,
                        n = e.bonusTypeKey;
                    if (t) {
                        var r = Et.get(St),
                            o = Et.get(Bt);
                        Et.set(St, r + 1);
                        var i = new lt.Container;
                        i.name = "tower-container", i.sortableChildren = !0, i.position = {
                            x: -200,
                            y: -200
                        };
                        var a = "number" == typeof n ? 0 === n ? no({
                                index: r,
                                towerContainer: i
                            }) : 1 === n ? ro() : to({
                                index: r,
                                towerContainer: i
                            }) : kn(t),
                            s = a.asset,
                            l = a.spine,
                            c = a.height,
                            u = a.width,
                            f = $r(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? io(Object(n), !0).forEach((function(t) {
                                        var r, o, i;
                                        r = e, o = t, i = n[t], (o = function(e) {
                                            var t = function(e, t) {
                                                if ("object" !== oo(e) || null === e) return e;
                                                var n = e[Symbol.toPrimitive];
                                                if (void 0 !== n) {
                                                    var r = n.call(e, "string");
                                                    if ("object" !== oo(r)) return r;
                                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                                }
                                                return String(e)
                                            }(e);
                                            return "symbol" === oo(t) ? t : String(t)
                                        }(o)) in r ? Object.defineProperty(r, o, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[o] = i
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : io(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                index: r,
                                height: c
                            }, e)),
                            m = f.body;
                        Et.actions.addTowerBodies(m);
                        var d = function(e) {
                            var t = e.asset,
                                n = e.spine,
                                r = e.height,
                                o = e.width,
                                i = e.index,
                                a = n;
                            if (!n) {
                                var s = Tn[t]();
                                (a = lt.Sprite.from(s)).anchor.set(.5), a.height = r, a.width = o
                            }
                            return a.label = "tower", a.index = i, a
                        }({
                            asset: s,
                            spine: l,
                            height: c,
                            width: u,
                            index: r
                        });
                        return i.addChild(d), qt.add({
                            body: m,
                            graphics: i
                        }), o.addChild(i), {
                            height: c,
                            body: m,
                            graphics: d
                        }
                    }
                },
                lo = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.callback,
                        n = e.forceFinish;
                    Et.set(St, n ? 2 : 1);
                    var r = Et.get(kt),
                        o = [];
                    n && (r = r.filter((function(e) {
                        return e.isStatic || (e.index = 1, o.push(e)), e.isStatic
                    }))), r.length < 2 && !n ? (setTimeout((function() {
                        return Ht.remove({
                            bodies: r,
                            graphicDestroy: !0
                        })
                    }), 500), t()) : (Ht.remove({
                        bodies: r,
                        graphicDestroy: !0
                    }), setTimeout((function() {
                        return pn({
                            toDown: !0,
                            callback: t
                        })
                    }), n ? 500 : 0)), Et.set(kt, o)
                },
                co = Pe.dispatch;

            function uo(e) {
                var t = function() {
                    lo({
                        forceFinish: !0
                    }), Ur(!1), setTimeout((function() {
                        return co(ke.cleanData())
                    }), 1500), setTimeout((function() {
                        return Ur(!0)
                    }), 2e3)
                };
                e.on(se.GetInitialState, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue.GetInitialState;
                    null != e && e.gameInfo && !e.validation && co(ke.setInitialState(e))
                }));
                var n = new Map;
                n.set(se.History, (function(e) {
                    co(ke.setInitialStateHistory({
                        historyTickets: e.history || e
                    }))
                })).set(se.AddStake, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue.AddStake,
                        t = Pe.getState().resources;
                    co(ke.addNotification((0, p.getNotificationById)(t, 0))), Vr(e, se.AddStake), e.isFinished && Fr(0)
                })).set(se.Step, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue.Step;
                    Vr(e, se.Step), e.isFinished && Fr(e.win)
                })).set(se.AddStakeValidation, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue.AddStakeValidation,
                        n = Pe.getState(),
                        r = n.resources,
                        i = n.partnerInfo,
                        a = i.minBet,
                        s = i.maxBet,
                        l = null,
                        c = e.validation;
                    switch (c) {
                        case 2:
                            l = a;
                            break;
                        case 12:
                            l = s;
                            break;
                        case 27:
                            c = 115
                    }(0, o.batch)((function() {
                        28 === c && t(), co(ke.resetActon()), co(ke.addNotification((0, p.getNotificationById)(r, c, l)))
                    }))
                })).set(se.StepValidation, (function(e) {
                    var n = Pe.getState().resources,
                        r = e.validation;
                    (0, o.batch)((function() {
                        28 === r && t(), co(ke.resetActon()), co(ke.addNotification((0, p.getNotificationById)(n, r)))
                    }))
                })).set(se.FinishGame, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue.AddStake;
                    (0, o.batch)((function() {
                        co(ke.updateSharedBigWinCoefficient(null == e ? void 0 : e.winCoefficient)), qr(e), Ur(!1)
                    })), Fr(e.win), setTimeout((function() {
                        return lo({
                            forceFinish: !0,
                            callback: function() {
                                return Ur(!0)
                            }
                        })
                    }), 100)
                })).set(se.CashoutValidation, (function(e) {
                    var n = Pe.getState().resources,
                        r = e.validation;
                    (0, o.batch)((function() {
                        28 === r && t(), co(ke.resetActon()), co(ke.addNotification((0, p.getNotificationById)(n, 999)))
                    }))
                })), n.forEach((function(t, n) {
                    e.on(n, t)
                }))
            }
            var fo = n(2351),
                mo = n(4364);

            function bo(e) {
                return bo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, bo(e)
            }

            function po(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? po(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== bo(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== bo(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === bo(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : po(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function go(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var ho = k ? Ln : st,
                wo = (0, Xe.lazy)((function() {
                    return n.e(334).then(n.t.bind(n, 4334, 23))
                })),
                vo = (0, Xe.lazy)((function() {
                    return n.e(303).then(n.t.bind(n, 1303, 23))
                })),
                xo = (0, Xe.lazy)((function() {
                    return n.e(8).then(n.t.bind(n, 1008, 23))
                }));

            function ko() {
                var e = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return go(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? go(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Ge.useTabControls)(), 2),
                    t = e[0],
                    n = e[1],
                    r = (0, a.shallowSelector)(Me),
                    o = r.resources,
                    i = r.leadersMonthly,
                    s = r.leadersCurrent,
                    l = r.history,
                    c = r.activeLeaderBoardId,
                    u = (0, a.shallowSelector)(a.selectPartnerUIConfig),
                    f = u.hidePlayers,
                    m = u.hideHistory,
                    d = u.hideMonthly,
                    b = (0, Xe.useMemo)((function() {
                        var e = o.strHistory,
                            t = o.strTop,
                            n = o.strPlayers,
                            r = o.strLeaderBoard,
                            i = [];
                        return m || i.push(e), d || i.push(t), c ? (k && !f && i.unshift(n), i.unshift(r)) : f || i.unshift(n), i
                    }), [o, c]),
                    y = (0, Xe.useMemo)((function() {
                        return function(e) {
                            var t = e.tickets,
                                n = pr(),
                                r = n.resources,
                                o = n.partnerInfo.currencyId;
                            return {
                                headers: [r.strPlayerId, (0, Un.jsx)(He.AmountBox, {
                                    currencyId: o,
                                    culture: j,
                                    text: r.strBet,
                                    styles: br.amountBox
                                }, ""), (0, Un.jsx)(He.AmountBox, {
                                    currencyId: o,
                                    culture: j,
                                    text: r.strWin,
                                    styles: br.amountBox
                                }, ""), r.strBetTime],
                                body: (null == t ? void 0 : t.map((function(e, t) {
                                    return {
                                        key: t,
                                        playerId: e.playerId,
                                        bet: (0, p.numberToSpacedStringLocal)(e.bet),
                                        win: e.win ? (0, p.numberToSpacedStringLocal)(e.win) : "-",
                                        betTime: (0, p.getFormattedTime)(e.betTime, !0)
                                    }
                                }))) || [],
                                onSelect: function() {}
                            }
                        }({
                            tickets: s
                        })
                    }), [s]),
                    g = (0, Xe.useMemo)((function() {
                        return function(e) {
                            var t = e.tickets,
                                n = pr(),
                                r = n.resources,
                                o = n.partnerInfo.currencyId;
                            return {
                                headers: [r.strPlayerId, r.strX, (0, Un.jsx)(He.AmountBox, {
                                    currencyId: o,
                                    culture: j,
                                    text: r.strWin,
                                    styles: br.amountBox
                                }, "")],
                                body: (null == t ? void 0 : t.map((function(e, t) {
                                    return {
                                        key: t,
                                        playerId: e.playerId,
                                        coefficient: "x".concat(e.coefficient),
                                        win: e.win ? (0, p.numberToSpacedStringLocal)(e.win) : "-"
                                    }
                                }))) || [],
                                onSelect: function() {}
                            }
                        }({
                            tickets: i
                        })
                    }), [i]),
                    h = (0, Xe.useMemo)((function() {
                        return function(e) {
                            var t = e.tickets,
                                n = pr(),
                                r = n.resources,
                                o = n.partnerInfo.currencyId,
                                i = (0, a.selectPartnerUIConfig)(n).historyHighlightAnyWin;
                            return {
                                headers: [r.strDrawId || "_Draw Id", (0, Un.jsx)(He.AmountBox, {
                                    currencyId: o,
                                    culture: j,
                                    text: r.strBet,
                                    styles: br.amountBox
                                }, ""), (0, Un.jsx)(He.AmountBox, {
                                    currencyId: o,
                                    culture: j,
                                    text: r.strWin,
                                    styles: br.amountBox
                                }, "")],
                                body: (null == t ? void 0 : t.map((function(e) {
                                    return {
                                        key: e.gameId,
                                        gameId: e.gameId,
                                        bet: (0, p.numberToSpacedStringLocal)(e.bet),
                                        win: e.win ? (0, p.numberToSpacedStringLocal)(e.win) : "-"
                                    }
                                }))) || [],
                                winBy: i ? "win" : "bet",
                                onSelect: function() {}
                            }
                        }({
                            tickets: l
                        })
                    }), [l]);
                if (0 === b.length) return null;
                var w = [];
                m || w.push({
                    Component: (0, Un.jsx)(vo, {
                        children: (0, Un.jsx)(fo.Table, yo(yo({}, h), {}, {
                            styles: ho.table
                        }))
                    })
                }), d || w.push(g), c ? (k && !f && w.unshift(y), w.unshift({
                    Component: (0, Un.jsx)(wo, {
                        openBoard: Yr
                    })
                })) : f || w.unshift(y);
                var v = (w[t] || {}).Component;
                return (0, Un.jsxs)(Un.Fragment, {
                    children: [(0, Un.jsx)(mo.SliderTabs, {
                        activeIndex: t,
                        handleClick: n,
                        tabList: b || [],
                        styles: ho.sliderView
                    }), (0, Un.jsx)(Xe.Suspense, {
                        fallback: null,
                        children: v || (0, Un.jsx)(xo, {
                            children: (0, Un.jsx)(fo.Table, yo(yo({}, w[t]), {}, {
                                styles: ho.table
                            }))
                        })
                    })]
                })
            }
            ko.propTypes = {
                style: Wn().object.isRequired
            };
            const jo = (0, Xe.memo)(ko);
            var So = n(1458);

            function Io(e) {
                return Io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Io(e)
            }
            var zo = ["children"];

            function Bo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Oo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Bo(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== Io(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== Io(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === Io(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bo(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Po = o.ReactReduxContext.Consumer,
                Co = o.ReactReduxContext.Provider,
                To = function(e) {
                    var t = e.children,
                        n = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }(e, zo);
                    return (0, Un.jsx)(Po, {
                        children: function(e) {
                            return (0, Un.jsx)(So.Stage, Oo(Oo({}, n), {}, {
                                children: (0, Un.jsx)(Co, {
                                    value: e,
                                    children: t
                                })
                            }))
                        }
                    })
                };
            To.propTypes = {
                children: Wn().node.isRequired
            };
            const Ao = To;
            var _o = {
                shake: function() {
                    var e = Et.get(zt);
                    new an({
                        value: 0
                    }).to({
                        value: [5, -5, 5, -5, 0]
                    }, 150).onUpdate((function(t) {
                        var n = t.value;
                        e.position = {
                            x: n,
                            y: n
                        }
                    })).easing(Jt.Cubic.Out)
                }
            };
            const Ro = _o;
            var Do, Fo = At,
                Mo = ht,
                Eo = jt;
            var No, Lo, Zo = (No = ct.Runner.create(), (Lo = ct.Engine.create()).gravity.y = 5, Et.set(ht, Lo), {
                update: function(e) {
                    for (var t = e.correction || 1, n = 0; n < t; n++) ct.Runner.tick(No, Lo, 1)
                },
                clear: function() {
                    for (var e = Lo.world.bodies, t = e.length - 1; t >= 0; t--) ct.World.remove(Lo.world, e[t])
                }
            });
            const Wo = Zo;

            function Uo(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ko(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return Ko(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ko(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ko(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Yo = {
                setup: function() {
                    Gr.add({
                            name: "updater",
                            callback: function(e) {
                                var t = e.delta,
                                    n = e.correction;
                                an.update({
                                    delta: t
                                }), Wo.update({
                                    correction: n
                                }), qt.update()
                            }
                        }),
                        function() {
                            var e = Et.get(Mo);
                            ct.Events.on(e, "collisionStart", (function(e) {
                                hn({
                                    pairs: e.pairs,
                                    actions: {
                                        ground: function(e) {
                                            var t = e.secondBody;
                                            t.outcome = void 0, Do = void 0, t.friction = 1, Et.remove(Eo)
                                        },
                                        deadLine: function(e) {
                                            var t = e.secondBody;
                                            if (!t.crashed) {
                                                var n = t.odd,
                                                    r = t.outcome;
                                                "number" == typeof n && void 0 !== r && (Kr({
                                                    odd: n
                                                }), t.crashed = !0)
                                            }
                                        }
                                    }
                                })
                            })), ct.Events.on(e, "collisionActive", (function(e) {
                                hn({
                                    pairs: e.pairs,
                                    actions: {
                                        tower: function(e) {
                                            var t = e.firstBody,
                                                n = e.secondBody,
                                                r = t.angle,
                                                o = t.outcome,
                                                i = t.odd,
                                                a = t.modelType,
                                                s = t.bonusType,
                                                l = t.collisionEndCallbacks,
                                                c = t.tripleIndex,
                                                u = t.index,
                                                f = t.index - n.index == 1,
                                                m = f && o === W,
                                                d = o === K;
                                            if (f && !t.isShaken && (t.isShaken = !0, Ro.shake()), m || d) {
                                                var b = wn(r);
                                                if (b > -10 && b < 10) {
                                                    var p = l || {},
                                                        y = p.beforeWorldTranslate,
                                                        g = p.afterWorldTranslate,
                                                        h = kn(a),
                                                        w = h.height;
                                                    if ("number" == typeof s) {
                                                        var v = V[s].height;
                                                        w = v, ct.Body.scale(t, 1, v / h.height), ct.Body.translate(t, {
                                                            x: 0,
                                                            y: (h.height - v) / 2
                                                        }), 0 === s && setTimeout((function() {
                                                            Zr(), Kr({
                                                                odd: i,
                                                                isFrozen: !0
                                                            })
                                                        }), 1e3)
                                                    } else Kr({
                                                        odd: i,
                                                        tripleIndex: c
                                                    });
                                                    var x = qt.get({
                                                        body: t
                                                    }).graphics;
                                                    ! function(e) {
                                                        var t = e.children[0],
                                                            n = yn("dropSmoke");
                                                        if (n && (null == n || !n.spine)) {
                                                            var r = new gr.Spine(n.spineData);
                                                            r.zIndex = 2, r.pivot.y = -t.height / 2, r.state.setAnimation(0, "drop_smoke", !1), e.addChild(r)
                                                        }
                                                    }(x), "function" == typeof y && y({
                                                        bonusType: s,
                                                        body: t,
                                                        graphics: x,
                                                        index: u
                                                    }), 1 !== s && m && setTimeout((function() {
                                                        pn({
                                                            height: w,
                                                            callback: function() {
                                                                xn(), "function" == typeof g && g()
                                                            }
                                                        })
                                                    }), 0 === s ? 1e3 : 0), ct.Body.setPosition(t, {
                                                        x: t.position.x,
                                                        y: n.position.y - (n.height / 2 + ("number" == typeof s ? V[s].height : t.height) / 2)
                                                    }), ct.Body.setAngle(t, 0), t.isStatic = !0, t.outcome = void 0, Do = void 0, Et.remove(Eo), Et.set(Fo, t.position)
                                                }
                                            }
                                        }
                                    }
                                })
                            })), ct.Events.on(e, "afterUpdate", (function(e) {
                                var t = e.source.detector,
                                    n = Et.get(jt);
                                if (n && (null == n || !n.crashed)) {
                                    var r = n.angle,
                                        o = n.velocity,
                                        i = n.position,
                                        a = n.index,
                                        s = n.outcome,
                                        l = wn(r),
                                        c = l > -1 && l < 1;
                                    if (s) {
                                        Do || (Do = o.x > 0 ? "right" : "left"), c || s !== W || ct.Body.setAngle(n, r + .1 * Math.abs(r) * (r > 0 ? -1 : 1));
                                        var u = Et.get(Fo) || t.bodies.find((function(e) {
                                            return "tower" === e.label && e.index === a - 1
                                        })).position;
                                        if (u && i) {
                                            var f = Et.get(It),
                                                m = f.tower.width / 2;
                                            if (s === W) {
                                                var d = Et.get(Pt).ratio,
                                                    b = k ? d : 1,
                                                    p = f.swayingTower.xStart + m - i.x,
                                                    y = Math.abs(.1 * p) > 2.5 ? 3 * (p > 0 ? 1 : -1) * b : .1 * p;
                                                p && ct.Body.setVelocity(n, {
                                                    x: y,
                                                    y: o.y
                                                })
                                            } else {
                                                var g = u.x - i.x,
                                                    h = Math.abs(g),
                                                    w = "right" === Do;
                                                if (n.friction = 0, h > m) {
                                                    if (w && g > 0 || !w && g < 0) {
                                                        var v = 2 / (h / m) * (w ? -1 : 1);
                                                        ct.Body.setVelocity(n, {
                                                            x: v,
                                                            y: o.y
                                                        })
                                                    }
                                                } else {
                                                    var x = g / 100 + 4 * (w ? 1 : -1);
                                                    ct.Body.setVelocity(n, {
                                                        x,
                                                        y: o.y
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }))
                        }()
                },
                clear: function() {
                    var e = Et.get(ht).world,
                        t = e.constraints,
                        n = e.bodies;
                    ut().World.remove(e, [].concat(Uo(n), Uo(t)))
                }
            };
            const Vo = Yo;
            var qo = function(e) {
                var t = e.children,
                    n = (0, So.useApp)(),
                    r = (0, o.useSelector)((function(e) {
                        return e.gameAssetsAreLoading
                    }));
                return (0, Xe.useEffect)((function() {
                    n && (n.renderer.view.style.touchAction = "auto", n.renderer.events.autoPreventDefault = !1)
                }), [n]), (0, Xe.useEffect)((function() {
                    return Vo.setup(),
                        function() {
                            Gr.removeAll(), Et.reset(), Vo.clear(), qt.removeAll()
                        }
                }), []), !r && t
            };
            qo.propTypes = {
                children: Wn().node.isRequired
            };
            const Xo = qo;

            function Go(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ho(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return Ho(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ho(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ho(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Qo = function() {
                var e = (0, Xe.useRef)({}),
                    t = Et.get(Pt),
                    n = t.width,
                    r = t.height;
                return (0, Xe.useEffect)((function() {
                    Et.set(Ot, e.current), e.current.children.forEach((function(e, t, o) {
                        e && function(e) {
                            var t = e.graphic,
                                o = e.index,
                                i = e.length,
                                a = r / 1.5,
                                s = t.width / 2,
                                l = a - a / (o + 1) + (0 === o ? 0 : 80),
                                c = l + a / i + (0 === o ? -40 : 0),
                                u = Math.floor(Math.random() * (c - l)) + l - (a - (k ? 60 : 120));
                            t.position.y = u,
                                function e(r) {
                                    var o;
                                    void 0 === r && (o = Math.random(), r = Math.random() >= .5);
                                    var i = void 0 !== o ? 1e5 * (r ? 1 - o : o) : 1e5 * (Math.random() / 2 + .5),
                                        a = r ? n + s : -s;
                                    new an({
                                        x: void 0 !== o ? n * o + s * (r ? 1 : -1) : r ? -s : n + s
                                    }).to({
                                        x: a
                                    }, i).easing(Jt.Quadratic.InOut).onUpdate((function(e) {
                                        var n = e.x;
                                        t && !t._destroyed && (t.position.x = n)
                                    })).onComplete((function() {
                                        e(r)
                                    }))
                                }()
                        }({
                            graphic: e,
                            index: t,
                            length: o.length
                        })
                    }))
                }), []), (0, Un.jsx)(So.Container, {
                    name: "clouds-container",
                    zIndex: 1,
                    ref: e,
                    children: Go(Array(2).keys()).map((function(e) {
                        var t = Tn["cloud".concat(e + 1)]();
                        return t && (0, Un.jsx)(So.Sprite, {
                            anchor: .5,
                            texture: t,
                            scale: (Math.random() / 3 + .2) * Y
                        }, e)
                    }))
                })
            };
            const Jo = (0, Xe.memo)(Qo),
                $o = function() {
                    var e = (0, Xe.useRef)(),
                        t = Et.get(It).tower;
                    return (0, Xe.useEffect)((function() {
                        Et.set(Tt, e.current), k && (e.current.pivot.y = 0, e.current.scale.y *= 1.35 * Y)
                    }), []), (0, Un.jsx)(So.Sprite, {
                        ref: e,
                        graphicKey: "tower-cable",
                        name: Z,
                        texture: Tn.hookCable(),
                        width: t.width,
                        zIndex: 2
                    })
                },
                ei = function() {
                    return (0, Un.jsx)(So.Sprite, {
                        name: L,
                        image: "hook",
                        scale: Y,
                        anchor: {
                            x: .55,
                            y: .99
                        }
                    })
                };

            function ti(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var ni = L,
                ri = Z,
                oi = function(e) {
                    var t = e.initialTower,
                        n = void 0 === t ? null : t,
                        r = (0, a.shallowSelector)(Ze),
                        o = r.floorData,
                        i = r.isTempleBonusMode,
                        s = (0, Xe.useRef)({}),
                        l = (0, Xe.useRef)(),
                        c = (0, Xe.useRef)({}),
                        u = function(e, t) {
                            return function(e) {
                                if (Array.isArray(e)) return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, i, a, s = [],
                                        l = !0,
                                        c = !1;
                                    try {
                                        if (i = (n = n.call(e)).next, 0 === t) {
                                            if (Object(n) !== n) return;
                                            l = !1
                                        } else
                                            for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                    } catch (e) {
                                        c = !0, o = e
                                    } finally {
                                        try {
                                            if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                        } finally {
                                            if (c) throw o
                                        }
                                    }
                                    return s
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return ti(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ti(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }((0, Xe.useState)(), 2),
                        f = u[0],
                        m = u[1];
                    return (0, Xe.useEffect)((function() {
                        if (s.current.prevFloorData && null != o && o.floors) {
                            var e = s.current.constraints,
                                t = o.outcome,
                                n = o.floors,
                                r = o.bonusType,
                                i = o.nextFloorType;
                            ! function(e) {
                                var t = e.constraintA,
                                    n = e.constraintB;
                                t.bodyA = null, n.bodyA = null;
                                var r = Et.get("recursiveMoveTween"),
                                    o = Et.get("towerDropTween");
                                null == o || o.destroy(), null == r || r.destroy(), new an({
                                    y: t.pointB.y
                                }).to({
                                    y: t.pointB.y - 100
                                }, 500).easing(Jt.Quadric.InOut).onUpdate((function(e) {
                                    var r = e.y;
                                    t.pointB.y = r, n.pointB.y = r
                                })).onComplete((function() {
                                    Ht.remove({
                                        bodies: [t, n]
                                    })
                                }))
                            }(e), c = function() {
                                m(), setTimeout((function() {
                                    t === W ? "number" != typeof r && m(i) : setTimeout((function() {
                                        lo({
                                            callback: function() {
                                                return m(i)
                                            }
                                        })
                                    }), 1200)
                                }), 0)
                            }, (u = Et.get(Tt)) && !u._destroyed && new an({
                                height: u.height
                            }).to({
                                height: 0
                            }, 300).easing(Jt.Cubic.InOut).onUpdate((function(e) {
                                var t = e.height;
                                u && !u._destroyed && (u.height = t)
                            })).onComplete((function() {
                                qt.remove({
                                    graphic: u
                                }), "function" == typeof c && c()
                            }));
                            var a = {
                                    beforeWorldTranslate: ao,
                                    afterWorldTranslate: function() {
                                        switch (r) {
                                            case 0:
                                                var e = Math.floor(4 * Math.random()) + 1;
                                                m(e);
                                                break;
                                            case 2:
                                                ! function(e) {
                                                    var t = e.callback,
                                                        n = 0;
                                                    e.floors.forEach((function(e, r) {
                                                        var o = e.odd,
                                                            i = e.floorType;
                                                        n += kn(i).height, Gr.addTimeOut((function() {
                                                            so({
                                                                type: i,
                                                                odd: o,
                                                                isBonusTriple: !0,
                                                                tripleIndex: r
                                                            }), 2 === r && setTimeout((function() {
                                                                return pn({
                                                                    height: n,
                                                                    callback: t
                                                                })
                                                            }), 500)
                                                        }), 500 * r)
                                                    }))
                                                }({
                                                    callback: function() {
                                                        m(i), xn()
                                                    },
                                                    floors: n
                                                })
                                        }
                                    }
                                },
                                l = s.current.currentTowerBody;
                            l.outcome = t, l.bonusType = r, l.collisionEndCallbacks = a, "number" == typeof r && 0 !== r || (l.odd = n[0].odd), Et.set(jt, l)
                        }
                        var c, u;
                        s.current.prevFloorData = o
                    }), [o]), (0, Xe.useEffect)((function() {
                        Et.set(Bt, l.current)
                    }), []), (0, Xe.useEffect)((function() {
                        f && function(e) {
                            var t = Math.random() < .5,
                                n = so({
                                    type: e,
                                    swayingTowerDirectionIsRight: t
                                }),
                                r = n.height,
                                o = n.body,
                                i = vn(c.current, ni),
                                a = function(e) {
                                    var t = e.body,
                                        n = e.height,
                                        r = e.swayingTowerDirectionIsRight,
                                        o = !1,
                                        i = !1,
                                        a = Et.get(It),
                                        s = a.tower.width,
                                        l = a.swayingTower,
                                        c = l.xStart,
                                        u = l.xEnd,
                                        f = l.time,
                                        m = l.y,
                                        d = l.yStart,
                                        b = {
                                            x: t.position.x,
                                            y: -n / 2 + d - 35 * Y
                                        },
                                        p = {
                                            bodyA: t,
                                            stiffness: .4,
                                            pointA: {
                                                x: -s / 2,
                                                y: -n / 2
                                            },
                                            pointB: b
                                        },
                                        y = {
                                            bodyA: t,
                                            stiffness: .4,
                                            pointA: {
                                                x: s / 2,
                                                y: -n / 2
                                            },
                                            pointB: b
                                        };
                                    k && (p.length = 66, y.length = 66);
                                    var g = ct.Constraint.create(p),
                                        h = ct.Constraint.create(y),
                                        w = new an({
                                            y: g.pointB.y
                                        }).to({
                                            y: m
                                        }, 1e3).easing(Jt.Quadric.InOut).onUpdate((function(e, t) {
                                            var n = e.y;
                                            g.pointB.y = n, h.pointB.y = n, t > .5 && !i && (i = !0, Ur(!0))
                                        })).onComplete((function() {
                                            o = !0, i = !1
                                        }));
                                    return Et.set("towerDropTween", w),
                                        function e(t) {
                                            var n = new an({
                                                x: b.x,
                                                y: g.pointB.y
                                            }).to({
                                                x: r ? u : c,
                                                y: [g.pointB.y + 16 * Y, g.pointB.y]
                                            }, f).easing(Jt.Quadric.InOut).onUpdate((function(e) {
                                                var n = e.x,
                                                    r = e.y;
                                                g.pointB.x = n, h.pointB.x = n, t && (g.pointB.y = r, h.pointB.y = r)
                                            })).onComplete((function() {
                                                r = !r, e(o)
                                            }));
                                            Et.set("recursiveMoveTween", n)
                                        }(), Ie.settings.playSound("hang"), Ht.add([g, h]), {
                                            constraintA: g,
                                            constraintB: h
                                        }
                                }({
                                    body: o,
                                    height: r,
                                    swayingTowerDirectionIsRight: t
                                }),
                                l = a.constraintA,
                                u = a.constraintB;
                            qt.add({
                                body: l,
                                graphics: i,
                                isConstraint: !0
                            }), s.current.constraints = {
                                constraintA: l,
                                constraintB: u
                            }, s.current.currentTowerBody = o;
                            var f = vn(c.current, ri);
                            qt.add({
                                body: o,
                                graphics: f
                            }), f.anchor = {
                                x: .5,
                                y: 1 + r / 87
                            }
                        }(f)
                    }), [f]), (0, Xe.useEffect)((function() {
                        m(n)
                    }), [n]), (0, Xe.useEffect)((function() {
                        if (s.current.prevIsTempleBonusMode && !i) {
                            var e = o.nextFloorType;
                            setTimeout((function() {
                                return m(e)
                            }), 500), n = (t = Ar().gameInfo).isTempleFrozenWin, r = t.floorData.floors, n && Zr(), Kr({
                                odd: r[0].odd,
                                disableSmoke: !0,
                                isFrozen: n
                            }), pn({
                                height: V[1].height,
                                callback: xn
                            }), _r(ke.clearBonusTempleData())
                        }
                        var t, n, r;
                        s.current.prevIsTempleBonusMode = i
                    }), [i]), (0, Un.jsxs)(So.Container, {
                        name: "tower-composition-container",
                        ref: c,
                        zIndex: 1,
                        children: [(0, Un.jsx)(ei, {}), !!f && (0, Un.jsx)($o, {}), (0, Un.jsx)(So.Container, {
                            ref: l,
                            name: "towers-container",
                            zIndex: 1,
                            sortableChildren: !0
                        })]
                    })
                };
            const ii = (0, Xe.memo)(oi);
            var ai = function() {
                var e = (0, Xe.useRef)(),
                    t = (0, Xe.useRef)(),
                    n = Et.get(Pt),
                    r = n.width,
                    o = n.height;
                return (0, Xe.useLayoutEffect)((function() {
                    try {
                        var n = yn("bgAnim");
                        if (n) {
                            var i = new gr.Spine(n.spineData);
                            i.scale.set(k ? .5 : 1), i.x = r / 2, i.y = E, i.state.setAnimation(0, "animation", !0), i.state.setAnimation(1, "bird1", !0), e.current.addChildAt(i, 1)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    var a, s;
                    e.current.position.y = o - e.current.height, Et.set(Ct, e.current), t.current.position.y = E, t.current.children.forEach((function(e) {
                        "background-sun" === e.name ? a = e : "background-front" === e.name && (s = e)
                    })), a && (a.anchor = {
                        x: .5,
                        y: .5
                    }, a.position = {
                        x: r / 2,
                        y: -a.height / 1.45
                    }), s.anchor = {
                        x: 0,
                        y: 1
                    }, k ? s.height = 385 : s.scale.y = s.scale.x, new an({
                        angle: 0
                    }).to({
                        angle: 360
                    }, 15e3).onUpdate((function(e) {
                        var t = e.angle;
                        a && !a._destroyed && (a.angle = t)
                    })).repeat(1 / 0)
                }), []), (0, Un.jsxs)(So.Container, {
                    ref: e,
                    name: "background-container",
                    zIndex: 1,
                    children: [(0, Un.jsx)(So.Sprite, {
                        name: "background-back",
                        image: "backgroundBack",
                        width: r + 10,
                        height: E,
                        position: {
                            x: -5,
                            y: 0
                        }
                    }), (0, Un.jsxs)(So.Container, {
                        name: "background-front-container",
                        ref: t,
                        children: [Tn.sun() && (0, Un.jsx)(So.Sprite, {
                            name: "background-sun",
                            texture: Tn.sun(),
                            scale: k ? .4 : .5
                        }), (0, Un.jsx)(So.Sprite, {
                            name: "background-front",
                            image: "backgroundFront",
                            width: r + 10,
                            position: {
                                x: -5,
                                y: k ? 0 : 4
                            }
                        })]
                    }), (0, Un.jsx)(So.Sprite, {
                        anchor: .5,
                        name: "basis-tower",
                        image: "basisTower",
                        width: k ? 250 : 344,
                        height: k ? 155 : 211,
                        position: {
                            x: r / 2,
                            y: E - (k ? 190 : 230)
                        }
                    })]
                })
            };
            const si = (0, Xe.memo)(ai);
            var li = function() {
                var e = (0, Xe.useRef)({}),
                    t = Et.get(It).balloonSkin,
                    n = t.xStart,
                    r = t.xEnd,
                    o = t.yStart,
                    i = t.scale;
                return (0, Xe.useEffect)((function() {
                    ! function() {
                        var t = e.current;
                        ! function e() {
                            var o = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                i = t.position.x,
                                a = o ? r : n;
                            new an({
                                x: i
                            }).to({
                                x: a
                            }, 1e4).onUpdate((function(e) {
                                var n = e.x;
                                t && !t._destroyed && (t.position.x = n)
                            })).easing(Jt.Quadric.InOut).onComplete((function() {
                                e(!o)
                            }))
                        }()
                    }(), Et.set(xt, e.current)
                }), []), (0, Un.jsx)(So.Container, {
                    name: "balloon-skin-container",
                    zIndex: 1,
                    ref: e,
                    scale: i,
                    anchor: {
                        x: 0,
                        y: 0
                    },
                    position: {
                        x: n,
                        y: o
                    },
                    children: (0, Un.jsx)(So.Sprite, {
                        image: "airBalloon"
                    })
                })
            };
            const ci = (0, Xe.memo)(li);

            function ui(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var fi = function(e) {
                return 2 === e ? void 0 : e
            };
            const mi = function() {
                var e = (0, Xe.useRef)(),
                    t = Et.get(Pt),
                    n = t.width,
                    r = t.height,
                    i = (0, o.useSelector)((function(e) {
                        return e.gameInfo.floorData
                    })),
                    a = i.nextFloorType,
                    s = i.floors,
                    l = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return ui(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ui(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)(s ? null : a), 2),
                    c = l[0],
                    u = l[1];
                return (0, Xe.useEffect)((function() {
                    if (Et.set(_t, e.current), s) {
                        var t = s.reduce((function(e, t) {
                                var n = t.floorType,
                                    r = t.bonusType;
                                return e + kn(n, fi(r)).height
                            }), 0),
                            n = Et.get(It),
                            r = s[s.length - 1],
                            o = s[s.length - 2],
                            i = s[s.length - 3],
                            l = fi(r.bonusType),
                            c = fi(null == o ? void 0 : o.bonusType),
                            f = fi(null == i ? void 0 : i.bonusType),
                            m = kn(r.floorType, l),
                            d = kn(null == o ? void 0 : o.floorType, c),
                            b = kn(null == i ? void 0 : i.floorType, c),
                            p = n.basisTower.y - n.tower.height / 2 - t;
                        i && so({
                            isStatic: !0,
                            type: i.floorType,
                            bonusTypeKey: f,
                            posY: p + m.height + d.height + b.height / 2
                        }), o && so({
                            isStatic: !0,
                            type: o.floorType,
                            bonusTypeKey: c,
                            posY: p + m.height + d.height / 2
                        }), so({
                            isStatic: !0,
                            type: r.floorType,
                            bonusTypeKey: l,
                            posY: p + m.height / 2
                        }), pn({
                            skip: !0,
                            height: t,
                            callback: function() {
                                u(a)
                            }
                        })
                    }
                }), []), (0, Un.jsxs)(So.Container, {
                    ref: e,
                    name: "scene-main-container",
                    pivot: {
                        x: n / 2,
                        y: r / 2
                    },
                    position: {
                        x: n / 2,
                        y: r / 2
                    },
                    children: [(0, Un.jsx)(si, {}), (0, Un.jsx)(Jo, {}), I && (0, Un.jsx)(ci, {}), (0, Un.jsx)(ii, {
                        initialTower: c
                    })]
                })
            };
            var di = "result_smoke",
                bi = "triple_bonus_smoke",
                pi = function(e) {
                    var t = yn(e ? "coefficientSmokeTriple" : "coefficientSmoke"),
                        n = new gr.Spine(t.spineData);
                    return n.state.timeScale = e ? 1.5 : 1, n.state.setAnimation(0, e ? bi : di, !1), n.state.addListener({
                        complete: function(e) {
                            var t = e.animation.name;
                            t !== di && t !== bi || setTimeout((function() {
                                return !n._destroyed && n.destroy()
                            }), 0)
                        }
                    }), n
                };
            const yi = function() {
                    var e = (0, Xe.useRef)(),
                        t = (0, Xe.useRef)(),
                        n = (0, o.useSelector)((function(e) {
                            return e.gameInfo.floorDataAfterCollision
                        })),
                        r = Et.get(Pt),
                        i = r.width,
                        a = r.height,
                        s = r.scale,
                        l = n || {},
                        c = l.tripleIndex,
                        u = l.odd,
                        f = l.disableSmoke,
                        m = l.isFrozen;
                    return (0, Xe.useEffect)((function() {
                        if (n) {
                            var r = t.current,
                                o = void 0 !== c;
                            f || (o ? 0 === c && (l = pi(!0)) : l = pi()), l && e.current.addChild(l), new an({
                                scale: 0
                            }).to({
                                scale: 1
                            }, o ? 100 : 200).easing(Jt.Cubic.Out).onUpdate((function(e) {
                                var t = e.scale;
                                r && !r._destroyed && (r.scale = {
                                    x: t,
                                    y: t
                                })
                            })).onComplete((function() {
                                u && setTimeout((function() {
                                    if (r && !r._destroyed) {
                                        var e = Et.get(wt);
                                        new an({
                                            x: r.position.x,
                                            y: r.position.y,
                                            scale: 1,
                                            alpha: 1
                                        }).to({
                                            x: r.position.x + i / 2 - (k ? 50 : 100),
                                            y: r.position.y + (k ? e * s * 13.2 - a / 4 : 125),
                                            scale: .2,
                                            alpha: 0
                                        }, o ? 100 : 300).easing(Jt.Cubic.In).onUpdate((function(e) {
                                            var t = e.x,
                                                n = e.y,
                                                o = e.scale,
                                                i = e.alpha;
                                            r && !r._destroyed && (r.alpha = i, r.position = {
                                                x: t,
                                                y: n
                                            }, r.scale = {
                                                x: o,
                                                y: o
                                            })
                                        })).onComplete((function() {
                                            return Wr({
                                                odd: u,
                                                isFrozen: m
                                            })
                                        }))
                                    } else Wr({
                                        odd: u,
                                        isFrozen: m
                                    })
                                }), o ? 100 : 300)
                            }))
                        }
                        var l
                    }), [n]), (0, Un.jsx)(So.Container, {
                        name: "coefficient-container",
                        ref: e,
                        zIndex: 1,
                        position: {
                            x: i / 2,
                            y: a / 4
                        },
                        scale: Y,
                        children: n && (0, Un.jsx)(So.Text, {
                            ref: t,
                            text: "x".concat(u),
                            anchor: .5,
                            scale: 0,
                            style: new lt.TextStyle({
                                align: "center",
                                fontFamily: '"RubikBold", sans-serif',
                                fontSize: 96,
                                fontWeight: "700",
                                fill: u ? "#F5AD18" : "#D83333",
                                stroke: "#FFFFFF",
                                strokeThickness: k ? 2.5 : 3,
                                dropShadow: !0,
                                dropShadowColor: "#FFFFFF",
                                dropShadowAlpha: .7,
                                dropShadowDistance: 2,
                                dropShadowAngle: Math.PI / 2
                            })
                        })
                    })
                },
                gi = function() {
                    var e = (0, Xe.useRef)(),
                        t = Et.get(Pt),
                        n = t.width,
                        r = t.height;
                    return (0, Xe.useEffect)((function() {
                        var t, n = e.current.children.find((function(e) {
                            return "temple_shine" === e.name
                        }));
                        return n && (t = new an({
                                angle: 0
                            }).to({
                                angle: 360
                            }, 4e3).repeat(1 / 0).onUpdate((function(e) {
                                var t = e.angle;
                                n && !n._destroyed && (n.angle = t)
                            }))),
                            function() {
                                var e;
                                null === (e = t) || void 0 === e || e.destroy()
                            }
                    }), []), (0, Un.jsxs)(So.Container, {
                        name: "temple-bonus-text",
                        ref: e,
                        sortableChildren: !0,
                        scale: Y,
                        position: {
                            x: n / 2,
                            y: r / 8
                        },
                        children: [(0, Un.jsx)(So.Sprite, {
                            name: "temple_shine",
                            anchor: .5,
                            alpha: .1,
                            scale: .5,
                            blendMode: lt.BLEND_MODES.ADD,
                            image: "bonusTempleTextShine"
                        }), (0, Un.jsx)(So.Sprite, {
                            name: "bonus-temple-text",
                            scale: k ? n / 300 : 1,
                            anchor: .5,
                            image: "bonusTempleText"
                        })]
                    })
                },
                hi = function() {
                    var e = (0, Xe.useRef)(),
                        t = Et.get(Pt),
                        n = t.height,
                        r = t.width;
                    return (0, Xe.useEffect)((function() {
                        var t = k ? r >= 400 ? 65 : r < 330 ? 48 : 56 : 105,
                            n = yn("bonusTempleFire");
                        if (n) {
                            var o = new gr.Spine(n.spineData),
                                i = new gr.Spine(n.spineData);
                            o.position.x = t, i.position.x = r - t - (k ? 3 : 0), k && (o.scale.set(.5), i.scale.set(.5)), o.state.setAnimation(0, "torch_fire_web", !0), i.state.setAnimation(0, "torch_fire_web", !0), e.current.addChild(o, i)
                        }
                    }), []), (0, Un.jsx)(So.Container, {
                        ref: e,
                        name: "temple-bonus-fires",
                        y: k ? n > 800 ? 36 : n > 750 ? 33 : n > 700 ? 30 : n > 600 ? 23 : 18 : 34.5
                    })
                };
            var wi = function(e) {
                var t = e.rotateEndCallback,
                    n = e.coefficients,
                    r = e.winIndex,
                    o = e.isFrozen,
                    i = (0, Xe.useRef)();
                return (0, Xe.useEffect)((function() {
                    var e, o, a, s, l, c;
                    "number" == typeof r && (Ie.settings.playSound("wheelRotate"), function(e) {
                        var t = e.rotateTo,
                            n = e.graphic,
                            r = e.callback;
                        if (n) {
                            var o = Math.PI / 20;
                            new an({
                                rotation: n.rotation
                            }).to({
                                rotation: n.rotation + t + o
                            }, 4e3).easing(Jt.Quadratic.InOut).onUpdate((function(e) {
                                var t = e.rotation;
                                n && !n._destroyed && (n.rotation = t)
                            })).onComplete((function() {
                                n && new an({
                                    rotation: n.rotation
                                }).to({
                                    rotation: n.rotation - o
                                }, 1e3).easing(Jt.Quadratic.Out).onUpdate((function(e) {
                                    var t = e.rotation;
                                    n && !n._destroyed && (n.rotation = t)
                                })).onComplete((function() {
                                    "function" == typeof r && r()
                                }))
                            }))
                        }
                    }({
                        rotateTo: (e = {
                            count: null == n ? void 0 : n.length,
                            index: r,
                            round: 9
                        }, o = e.count, a = e.index, s = e.prevIndex, l = e.round, c = (a - (s || 0)) * (2 * Math.PI / o), l * Math.PI * 2 - c),
                        callback: t,
                        graphic: i.current,
                        time: 2e3
                    }))
                }), [r]), (0, Un.jsxs)(So.Container, {
                    ref: i,
                    name: "wheel-frame-container",
                    anchor: .5,
                    zIndex: 1,
                    children: [(0, Un.jsx)(So.Sprite, {
                        image: o ? "bonusTempleWheelFrozen" : "bonusTempleWheel",
                        anchor: .5
                    }), (0, Un.jsx)(So.Sprite, {
                        image: "bonusTempleWheelCenter",
                        anchor: .5
                    }), null == n ? void 0 : n.map((function(e, t) {
                        var r = function(e) {
                                var t, n, r = e.radius,
                                    o = e.index,
                                    i = e.sectorAngle,
                                    a = Math.PI / 2,
                                    s = o * i,
                                    l = s % a,
                                    c = 2 * Math.PI + s;
                                return s >= 0 && s < a ? (t = r * Math.sin(l), n = r * Math.cos(l) * -1) : s >= a && s < 2 * a ? (t = r * Math.cos(l), n = r * Math.sin(l)) : s >= 2 * a && s < 3 * a ? (t = r * Math.sin(l) * -1, n = r * Math.cos(l)) : s >= 3 * a && s < 4 * a && (t = r * Math.cos(l) * -1, n = r * Math.sin(l) * -1), {
                                    x: t,
                                    y: n,
                                    rotation: c
                                }
                            }({
                                index: t,
                                radius: 356,
                                sectorAngle: 2 * Math.PI / n.length
                            }),
                            i = r.x,
                            a = r.y,
                            s = r.rotation;
                        return !(o && t === n.length - 1) && (0, Un.jsx)(So.Text, {
                            text: "x".concat(e),
                            rotation: s,
                            x: i,
                            y: a,
                            anchor: .5,
                            style: new lt.TextStyle({
                                fontFamily: '"RubikBlack", sans-serif',
                                fontSize: 52,
                                fontWeight: 800,
                                fill: "#FFEDD8",
                                align: "center",
                                dropShadow: !0,
                                dropShadowAngle: 1.5,
                                dropShadowColor: "#624213",
                                dropShadowDistance: 5,
                                lineJoin: "round"
                            })
                        }, t)
                    }))]
                })
            };
            wi.propTypes = {
                isFrozen: Wn().bool.isRequired,
                winIndex: Wn().number.isRequired,
                coefficients: Wn().array.isRequired,
                rotateEndCallback: Wn().func.isRequired
            };
            const vi = (0, Xe.memo)(wi);
            var xi = function(e) {
                var t = e.rotateEndCallback,
                    n = (0, Xe.useRef)(),
                    r = (0, a.shallowSelector)(Le),
                    o = r.winIndex,
                    i = r.isTempleFrozenWheel,
                    s = Et.get(Pt),
                    l = s.width,
                    c = s.height,
                    u = s.ratio,
                    f = k ? l / (u > 1 ? 6 * (u - 1) : u + .3) : 600,
                    m = (0, Xe.useCallback)((function() {
                        var e = yn("bonusTempleWheelFrameSectorGlowSpine"),
                            r = new gr.Spine(e.spineData);
                        r.state.setAnimation(0, "sector_glow", !1), r.y = -270, r.scale.set(2.5), r.zIndex = 3, n.current.addChild(r), t()
                    }), []);
                return (0, Xe.useEffect)((function() {
                    n.current.width = f, n.current.height = f;
                    var e = yn("bonusTempleWheelFrameHighlight"),
                        t = new gr.Spine(null == e ? void 0 : e.spineData);
                    t.scale.set(2.05), t.zIndex = 3, t.state.setAnimation(0, "wheel_stone_idle", !1), n.current.addChild(t), n.current.spine = t, n.current.spineGraphic = e
                }), []), (0, Xe.useEffect)((function() {
                    "number" == typeof o && n.current.spine.state.setAnimation(0, "wheel_stone_glow", !1)
                }), [o]), (0, Un.jsxs)(So.Container, {
                    name: "bonus-wheel-container",
                    ref: n,
                    sortableChildren: !0,
                    width: f,
                    height: f,
                    position: {
                        x: l / 2,
                        y: c / (k ? 1.8 : 1.95)
                    },
                    children: [(0, Un.jsx)(So.Sprite, {
                        image: "bonusTempleWheelBackShadow",
                        anchor: .5,
                        scale: 2,
                        zIndex: 0
                    }), (0, Un.jsx)(vi, {
                        winIndex: o,
                        coefficients: q,
                        isFrozen: i,
                        rotateEndCallback: m
                    }), (0, Un.jsx)(So.Sprite, {
                        image: "bonusTempleWheelFrameShadow",
                        anchor: .5,
                        zIndex: 2
                    }), (0, Un.jsx)(So.Sprite, {
                        image: "bonusTempleWheelArrow",
                        anchor: .5,
                        y: -436,
                        zIndex: 2
                    })]
                })
            };
            xi.propTypes = {
                rotateEndCallback: Wn().func.isRequired
            };
            const ki = (0, Xe.memo)(xi),
                ji = function() {
                    var e = Et.get(Pt),
                        t = e.width,
                        n = e.height;
                    return (0, Un.jsx)(So.Container, {
                        name: "temple_bonus_background-container",
                        zIndex: 1,
                        children: (0, Un.jsx)(So.Sprite, {
                            image: "bonusTempleBackground",
                            width: t,
                            height: n
                        })
                    })
                };

            function Si(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            const Ii = function() {
                    var e = (0, Xe.useRef)({}),
                        t = Et.get(Pt),
                        n = t.width,
                        r = t.height,
                        o = n / 2,
                        i = r / 2,
                        a = function(e, t) {
                            return function(e) {
                                if (Array.isArray(e)) return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, i, a, s = [],
                                        l = !0,
                                        c = !1;
                                    try {
                                        if (i = (n = n.call(e)).next, 0 === t) {
                                            if (Object(n) !== n) return;
                                            l = !1
                                        } else
                                            for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                    } catch (e) {
                                        c = !0, o = e
                                    } finally {
                                        try {
                                            if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                        } finally {
                                            if (c) throw o
                                        }
                                    }
                                    return s
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return Si(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Si(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }((0, Xe.useState)(!1), 2),
                        s = a[0],
                        l = a[1],
                        c = (0, Xe.useCallback)((function() {
                            setTimeout((function() {
                                return l(!0)
                            }), 2e3)
                        }), []);
                    return (0, Xe.useEffect)((function() {
                        new an({
                            alpha: 0
                        }).to({
                            alpha: 1
                        }, 1500).easing(Jt.Cubic.In).onUpdate((function(t) {
                            var n = t.alpha;
                            e.current && !e.current._destroyed && (e.current.alpha = n)
                        })).onComplete((function() {
                            return setTimeout(Nr, 500)
                        }))
                    }), []), (0, Xe.useEffect)((function() {
                        s && new an({
                            alpha: 1
                        }).to({
                            alpha: 0
                        }, 500).easing(Jt.Cubic.In).onUpdate((function(t) {
                            var n = t.alpha;
                            e.current && !e.current._destroyed && (e.current.alpha = n)
                        })).onComplete((function() {
                            Ie.settings.playSound("templeBonusUnmount");
                            var e = Et.get(_t);
                            new an({
                                scale: e.scale.x
                            }).to({
                                scale: 1
                            }, 1500).easing(Jt.Cubic.Out).onUpdate((function(t) {
                                var n = t.scale;
                                e && !e._destroyed && (e.scale = {
                                    x: n,
                                    y: n
                                })
                            })).onComplete((function() {
                                Er(R)
                            })), new an({
                                pivotX: e.pivot.x,
                                pivotY: e.pivot.y
                            }).to({
                                pivotX: o,
                                pivotY: i
                            }, 1500).easing(Jt.Quart.In).onUpdate((function(t) {
                                var n = t.pivotY,
                                    r = t.pivotX;
                                e && !e._destroyed && (e.pivot = {
                                    x: r,
                                    y: n
                                })
                            }))
                        }))
                    }), [s]), (0, Un.jsxs)(So.Container, {
                        ref: e,
                        alpha: 0,
                        name: "scene-bonus-temple-container",
                        pivot: {
                            x: o,
                            y: i
                        },
                        position: {
                            x: o,
                            y: i
                        },
                        children: [(0, Un.jsx)(ji, {}), (0, Un.jsx)(hi, {}), (0, Un.jsx)(gi, {}), (0, Un.jsx)(ki, {
                            rotateEndCallback: c
                        })]
                    })
                },
                zi = function() {
                    return (0, o.useSelector)(Ue) && (0, Un.jsx)(Ii, {})
                },
                Bi = function() {
                    var e = (0, Xe.useRef)();
                    return (0, Xe.useLayoutEffect)((function() {
                        var t, n;
                        (function() {
                            var e = Et.get(It).deadLine,
                                t = ct.Bodies.rectangle(e.x, e.y, e.width, e.height, {
                                    isStatic: !0,
                                    isSensor: !0,
                                    label: "deadLine"
                                });
                            Ht.add(t), Et.set(vt, t)
                        })(), t = Et.get(It).ground, n = ct.Bodies.rectangle(t.x, t.y, t.width, t.height, {
                                isStatic: !0,
                                index: 0,
                                label: "ground",
                                friction: 1,
                                restitution: 0
                            }), Ht.add(n),
                            function() {
                                var e = Et.get(It),
                                    t = e.basisTower,
                                    n = e.tower,
                                    r = ct.Bodies.rectangle(t.x, t.y, n.width, n.height, {
                                        isStatic: !0,
                                        index: 0,
                                        label: "basis-tower",
                                        slop: 2
                                    });
                                r.bodyKey = "basis-tower", r.height = n.height, Ht.add(r), Et.set(At, r.position)
                            }();
                        var r = Et.get(ht);
                        Et.set(Rt, ct.Composite.bounds(r.world).max.y), Et.set(zt, e.current)
                    }), []), (0, Un.jsxs)(So.Container, {
                        ref: e,
                        name: "scene-container",
                        sortableChildren: !0,
                        children: [(0, Un.jsx)(mi, {}), (0, Un.jsx)(zi, {}), (0, Un.jsx)(yi, {})]
                    })
                };

            function Oi(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            const Pi = function() {
                var e = (0, Xe.useRef)({}),
                    t = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Oi(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oi(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)((0, p.getIsPortraitOrientation)()), 2),
                    n = t[0],
                    r = t[1],
                    o = function(t) {
                        clearTimeout(e.current.timeout), e.current.timeout = setTimeout((function() {
                            return r(t.matches)
                        }), (0, p.getIsMobileChrome)() ? 100 : 0)
                    };
                return (0, Xe.useEffect)((function() {
                    return window.matchMedia("(orientation: portrait)").addEventListener("change", o),
                        function() {
                            return window.matchMedia("(orientation: portrait)").removeEventListener("change", o)
                        }
                }), []), n
            };
            var Ci = n(9173),
                Ti = {};
            Ti.styleTagTransform = or(), Ti.setAttributes = er(), Ti.insert = Jn().bind(null, "head"), Ti.domAPI = Hn(), Ti.insertStyleElement = nr(), Xn()(Ci.Z, Ti);
            const Ai = Ci.Z && Ci.Z.locals ? Ci.Z.locals : void 0;

            function _i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            const Ri = function() {
                var e = (0, Xe.useRef)(),
                    t = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _i(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _i(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)(), 2),
                    n = t[0],
                    r = t[1],
                    o = Pi();
                return (0, Xe.useLayoutEffect)((function() {
                    k && !o || function(e) {
                        var t = e.current,
                            n = e.setResolution,
                            r = t.clientWidth,
                            o = t.clientHeight,
                            i = r / o,
                            a = 1;
                        r > 500 ? (a = 500 / r, i > .8 && (a *= 1.2 * i)) : a *= i * (600 / r);
                        var s = {
                            scale: a,
                            ratio: i,
                            width: k ? r * a : 1080,
                            height: k ? o * a : 810
                        };
                        Et.set(Pt, s),
                            function() {
                                var e = Et.get(Pt),
                                    t = e.width,
                                    n = e.height,
                                    r = e.ratio,
                                    o = k ? t / 2.5 + (r > 1 ? 50 * (r - 1) : 20 * (r - 1)) : 450,
                                    i = new function() {
                                        this.hook = {
                                            hookY: -95
                                        }, this.swayingTower = {
                                            y: 50 * Y,
                                            time: k ? 1200 : 1400,
                                            yStart: -200 * Y,
                                            xStart: o,
                                            xEnd: t - o
                                        }, this.tower = {
                                            width: 140 * Y,
                                            height: 175 * Y
                                        }, this.balloonSkin = {
                                            scale: k ? .0013 * t : .55,
                                            xStart: k ? .01 * t : 50,
                                            xEnd: k ? o - this.tower.width > 0 ? o - this.tower.width : 0 : 250,
                                            yStart: k ? .3 * n : 200,
                                            yEnd: k ? .4 * n : 300
                                        }, this.ground = {
                                            height: 15,
                                            width: 1.5 * t,
                                            x: t / 2,
                                            y: n - (k ? 105 : 120)
                                        }, this.deadLine = {
                                            height: 15,
                                            width: t,
                                            x: t / 2,
                                            y: n - (k ? 200 : 250)
                                        }, this.basisTower = {
                                            x: t / 2,
                                            y: this.ground.y - this.tower.height / 2 - this.ground.height / 2
                                        }
                                    };
                                Et.set(It, i)
                            }(), n(s)
                    }({
                        current: e.current,
                        setResolution: r
                    })
                }), [o]), (0, Un.jsx)("div", {
                    className: Ai.sceneApp,
                    ref: e,
                    id: "scene-app",
                    children: n && (0, Un.jsx)(Ao, {
                        width: n.width,
                        height: n.height,
                        options: {
                            backgroundAlpha: 0,
                            resolution: 2
                        },
                        children: (0, Un.jsx)(Xo, {
                            children: (0, Un.jsx)(Bi, {})
                        })
                    })
                })
            };
            var Di = n(1100),
                Fi = n.n(Di),
                Mi = n(223),
                Ei = n(7327),
                Ni = {};
            Ni.styleTagTransform = or(), Ni.setAttributes = er(), Ni.insert = Jn().bind(null, "head"), Ni.domAPI = Hn(), Ni.insertStyleElement = nr(), Xn()(Ei.Z, Ni);
            const Li = Ei.Z && Ei.Z.locals ? Ei.Z.locals : void 0;
            var Zi = n(6199),
                Wi = {};
            Wi.styleTagTransform = or(), Wi.setAttributes = er(), Wi.insert = Jn().bind(null, "head"), Wi.domAPI = Hn(), Wi.insertStyleElement = nr(), Xn()(Zi.Z, Wi);
            const Ui = Zi.Z && Zi.Z.locals ? Zi.Z.locals : void 0;

            function Ki(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i, a, s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                        } catch (e) {
                            c = !0, o = e
                        } finally {
                            try {
                                if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return Yi(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yi(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Yi(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Vi = k ? Li : Ui;
            const qi = function() {
                var e = (0, o.useDispatch)(),
                    t = (0, a.shallowSelector)(a.selectPartnerUIConfig),
                    n = t.showIntroWithCoefficient,
                    r = t.hideIntro,
                    i = (0, a.shallowSelector)(a.selectResources),
                    s = Ki((0, Xe.useState)(n || null === (null === Fi() || void 0 === Fi() ? void 0 : Fi().getItem(N)) || "true" === (null === Fi() || void 0 === Fi() ? void 0 : Fi().getItem(N))), 2),
                    l = s[0],
                    c = s[1],
                    u = i.strBonusFloors,
                    f = i.strBonusFloorsDescription,
                    m = i.strWinningOdds,
                    d = i.strWinningOddsDescription,
                    b = i.strResults,
                    p = Ki((0, Xe.useState)(1), 2),
                    y = p[0],
                    g = p[1],
                    h = n ? 2 : 1;
                (0, Xe.useEffect)((function() {
                    l && e(ke.setIsIntroOpen(!0))
                }), []);
                var w = function(e) {
                        e < 1 || e > h || g(e)
                    },
                    v = function() {
                        null === Fi() || void 0 === Fi() || Fi().setItem(N, !1), e(ke.setIsIntroOpen(!1)), c(!1)
                    };
                return r && !n ? null : l && (0, Un.jsxs)("div", {
                    className: Vi.introPopup,
                    onClick: function() {
                        1 === h || y === h ? v() : w(y + 1)
                    },
                    children: [(0, Un.jsx)("div", {
                        className: Vi.introPopup__backdrop
                    }), (0, Un.jsx)("button", {
                        type: "button",
                        className: Vi.introPopup__close,
                        onClick: v,
                        children: (0, Un.jsx)(Mi.Close, {
                            color: "rgb(var(--white))"
                        })
                    }), y === h ? (0, Un.jsxs)("div", {
                        className: Vi.introPopup__content,
                        children: [(0, Un.jsxs)("div", {
                            className: Vi.introPopup__boardItem,
                            children: [(0, Un.jsx)("div", {
                                className: Vi.introPopup__boardItem_image
                            }), (0, Un.jsx)("div", {
                                className: Vi.introPopup__boardItem_arrow
                            }), (0, Un.jsxs)("div", {
                                className: Vi.introPopup__boardItem_textBlock,
                                children: [(0, Un.jsx)("p", {
                                    className: Vi.introPopup__title,
                                    children: u || "_Bonus floors"
                                }), (0, Un.jsx)("p", {
                                    className: Vi.introPopup__text,
                                    children: f || "_Get bonus floors in a random round."
                                })]
                            })]
                        }), (0, Un.jsxs)("div", {
                            className: Vi.introPopup__resultRow,
                            children: [(0, Un.jsxs)("div", {
                                className: Vi.introPopup__resultRow_main,
                                children: [(0, Un.jsx)("p", {
                                    className: Vi.introPopup__resultRow_title,
                                    children: (0, Un.jsx)("span", {
                                        children: b || "_Results"
                                    })
                                }), (0, Un.jsx)("div", {
                                    className: Vi.introPopup__resultRow_image
                                })]
                            }), (0, Un.jsx)("div", {
                                className: Vi.introPopup__resultRow_arrow
                            }), (0, Un.jsxs)("div", {
                                className: Vi.introPopup__resultRow_textBlock,
                                children: [(0, Un.jsx)("p", {
                                    className: Vi.introPopup__title,
                                    children: m || "_Winning odds"
                                }), (0, Un.jsx)("p", {
                                    className: Vi.introPopup__text,
                                    children: d || "_Winning is composed by multiplying your bet by odds. "
                                })]
                            })]
                        })]
                    }) : (0, Un.jsx)(He.IntroCoeffBlock, {
                        minCoeff: "0.4",
                        isMaxWinUnlimited: !0,
                        resources: i
                    }), n && (0, Un.jsx)(He.IntroPaginationBlock, {
                        allPointsCount: h,
                        currentPoint: y,
                        onChangePoint: w,
                        onClose: function(e) {
                            e.stopPropagation(), v()
                        }
                    })]
                })
            };
            var Xi = n(9234),
                Gi = n(6469),
                Hi = {};
            Hi.styleTagTransform = or(), Hi.setAttributes = er(), Hi.insert = Jn().bind(null, "head"), Hi.domAPI = Hn(), Hi.insertStyleElement = nr(), Xn()(Gi.Z, Hi);
            const Qi = Gi.Z && Gi.Z.locals ? Gi.Z.locals : void 0;
            var Ji = n(1956),
                $i = {};
            $i.styleTagTransform = or(), $i.setAttributes = er(), $i.insert = Jn().bind(null, "head"), $i.domAPI = Hn(), $i.insertStyleElement = nr(), Xn()(Ji.Z, $i);
            const ea = Ji.Z && Ji.Z.locals ? Ji.Z.locals : void 0;

            function ta(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var na = k ? Qi : ea,
                ra = null,
                oa = null;

            function ia(e) {
                var t = e.children,
                    n = void 0 === t ? null : t,
                    r = e.className,
                    o = void 0 === r ? "" : r,
                    i = e.handleClick,
                    a = void 0 === i ? function() {} : i,
                    s = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return ta(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ta(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)(!1), 2),
                    l = s[0],
                    c = s[1],
                    u = function() {
                        return c(!0)
                    },
                    f = function() {
                        return c(!1)
                    };
                return (0, Xe.useEffect)((function() {
                    return clearInterval(ra), clearTimeout(oa), l && (oa = setTimeout((function() {
                            ra = setInterval(a, 150)
                        }), 300)),
                        function() {
                            clearInterval(ra), clearTimeout(oa)
                        }
                }), [l]), (0, Un.jsx)("button", {
                    type: "button",
                    className: "".concat(na.spinnerBtn, " ").concat(o),
                    onClick: a,
                    onMouseDown: u,
                    onTouchStart: u,
                    onMouseUp: f,
                    onMouseLeave: f,
                    onTouchEnd: f,
                    children: n
                })
            }
            const aa = (0, Xe.memo)(ia, (function(e, t) {
                return e.handleClick === t.handleClick && e.className === t.className
            }));

            function sa(e) {
                var t = e.setBet,
                    n = e.bet,
                    r = void 0 === n ? 0 : n,
                    o = e.classNames,
                    i = void 0 === o ? {} : o,
                    a = e.handleBetInputKey,
                    s = e.handleBetInputChange,
                    l = e.incrementBetValue,
                    c = void 0 === l ? function() {} : l,
                    u = e.decrementBetValue,
                    f = void 0 === u ? function() {} : u,
                    m = (0, Xe.useCallback)((function() {
                        c()
                    }), [c]),
                    d = (0, Xe.useCallback)((function() {
                        f()
                    }), [f]);
                return (0, Un.jsxs)("div", {
                    className: i.betInput,
                    children: [(0, Un.jsx)(aa, {
                        handleClick: d,
                        children: (0, Un.jsx)(Mi.Minus, {
                            color: "rgba($white, 0.7)"
                        })
                    }), k ? (0, Un.jsxs)(Un.Fragment, {
                        children: [(0, Un.jsx)("input", {
                            type: "hidden"
                        }), (0, Un.jsx)("div", {
                            className: i.betInput__field,
                            onClick: function() {
                                return function(e) {
                                    var t = e.bet,
                                        n = e.setBet,
                                        r = Ar().resources.strBetAmount;
                                    Mr({
                                        name: y.BASE_POPUP_NAMES.KEYBOARD,
                                        args: {
                                            title: r,
                                            getter: t,
                                            setter: n,
                                            config: {
                                                extended: !0,
                                                dot: !0
                                            }
                                        }
                                    })
                                }({
                                    bet: r,
                                    setBet: t
                                })
                            },
                            children: (0, p.numberToSpacedStringBetValue)({
                                number: r,
                                isMobile: k
                            })
                        })]
                    }) : (0, Un.jsx)("input", {
                        type: "text",
                        onKeyDown: a,
                        onKeyUp: a,
                        onClick: function(e, t) {
                            t = e.target.value, e.target.value = "", e.target.value = t
                        },
                        onPaste: function(e) {
                            return e.preventDefault()
                        },
                        onChange: s,
                        "data-bet": r,
                        value: (0, p.numberToSpacedStringBetValue)({
                            number: r
                        }),
                        "data-testid": "bp-inp"
                    }), (0, Un.jsx)(aa, {
                        handleClick: m,
                        children: (0, Un.jsx)(Mi.Plus, {
                            color: "rgba($white, 0.7)"
                        })
                    })]
                })
            }
            const la = (0, Xe.memo)(sa);

            function ca(e) {
                var t = e.classNames,
                    n = e.handleAllIn,
                    r = (0, a.shallowSelector)(_e),
                    o = r.isDisabled,
                    i = r.strAllIn;
                return (0, Un.jsx)("button", {
                    type: "button",
                    onClick: n,
                    className: "".concat(t.quickBetButton, " ").concat(t.allInBtn, "\n\t\t\t\t").concat(o ? "disabled" : ""),
                    children: (0, Un.jsx)("span", {
                        className: t.quickBetText,
                        children: i || "_All IN"
                    })
                })
            }
            ca.propTypes = {
                handleAllIn: Wn().func.isRequired,
                classNames: Wn().object.isRequired
            };
            const ua = (0, Xe.memo)(ca);
            var fa = n(3953);

            function ma(e) {
                return ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ma(e)
            }

            function da(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (void 0, o = function(e, t) {
                        if ("object" !== ma(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" !== ma(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(r.key), "symbol" === ma(o) ? o : String(o)), r)
                }
                var o
            }

            function ba(e, t, n) {
                return t && da(e.prototype, t), n && da(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var pa = ba((function e(t) {
                var n = t.odd,
                    r = void 0 === n ? 0 : n,
                    o = t.floorType,
                    i = void 0 === o ? 1 : o,
                    a = t.bonusType;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.odd = r, this.floorType = i, this.bonusType = a
            }));
            const ya = pa;

            function ga(e) {
                return ga = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ga(e)
            }

            function ha(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function wa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ha(Object(n), !0).forEach((function(t) {
                        va(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ha(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function va(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== ga(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" !== ga(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === ga(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function xa(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            const ka = (Ia = 0, za = 0, Ba = 0, Oa = !1, Pa = 1, Ca = 0, Ta = 0, Aa = !1, _a = null, Ra = [{
                coefficientRange: [1, 1.3],
                loseProbabilityAdder: .02,
                bonusProbabilityAdder: 0
            }, {
                coefficientRange: [.9, 1.45],
                loseProbabilityAdder: .03,
                bonusProbabilityAdder: .02
            }, {
                coefficientRange: [1, 1.4],
                loseProbabilityAdder: .05,
                bonusProbabilityAdder: .03
            }, {
                coefficientRange: [.8, 1.75],
                loseProbabilityAdder: .08,
                bonusProbabilityAdder: .04
            }, {
                coefficientRange: [.9, 1.65],
                loseProbabilityAdder: .16,
                bonusProbabilityAdder: .05
            }, {
                coefficientRange: [.5, 2.4],
                loseProbabilityAdder: .22,
                bonusProbabilityAdder: .06
            }, {
                coefficientRange: [.75, 1.9],
                loseProbabilityAdder: .18,
                bonusProbabilityAdder: .05
            }, {
                coefficientRange: [.5, 2.7],
                loseProbabilityAdder: .13,
                bonusProbabilityAdder: .03
            }, {
                coefficientRange: [.8, 2.1],
                loseProbabilityAdder: .08,
                bonusProbabilityAdder: .02
            }, {
                coefficientRange: [.5, 3],
                loseProbabilityAdder: .05,
                bonusProbabilityAdder: 0
            }], Da = function(e, t) {
                var n = Ra[Ba],
                    r = n.coefficientRange,
                    o = n.loseProbabilityAdder,
                    i = n.bonusProbabilityAdder,
                    a = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return xa(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xa(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(r, 2),
                    s = a[0],
                    l = a[1],
                    c = null != e ? e : (Math.random() * (l - s) + s).toFixed(2);
                return Ca += o, Ta += i, Sa = Math.floor(5 * Math.random() + 1), Pa = (0, p.multiplyWithPrecision)(Pa, c, 2), za = (0, p.multiplyWithPrecision)(Pa, Ia, 2), Ba++, new ya({
                    odd: c,
                    floorType: Sa,
                    bonusType: t
                })
            }, Fa = function(e) {
                var t, n, r = null,
                    o = Math.random() <= Ca,
                    i = wa(wa({}, e), {}, {
                        floorsInfo: []
                    });
                !Oa && !o && Math.random() <= Ta && (i.bonusType = 0, Oa = !0, Aa = !0, r = Da(void 0, 0), _a = {
                    win: za,
                    coefficient: Pa
                });
                return i.floorsInfo[0] = r || Da(), o && (i.isFinished = !0, za = (null === (t = _a) || void 0 === t ? void 0 : t.win) || 0, Pa = (null === (n = _a) || void 0 === n ? void 0 : n.coefficient) || 0), Object.assign(i, {
                    win: za,
                    nextFloorType: Sa,
                    isFrozenCashout: Aa,
                    winCoefficient: Pa
                }), i
            }, va(ja = {}, se.AddStake, (function(e) {
                var t = e.bet;
                Ia = t, Sa = void 0, Ba = 0, _a = null, Oa = !1, Pa = 1, Ca = 0, Ta = 0, Aa = !1;
                var n = Pe.getState().playerInfo.balance,
                    r = ue.AddStake,
                    o = Fa(wa(wa({}, r), {}, {
                        balance: (+n - Ia).toFixed(2)
                    }));
                Vr(o, se.AddStake)
            })), va(ja, se.Step, (function() {
                var e = ue.Step,
                    t = Fa(e);
                Vr(t, se.Step)
            })), va(ja, se.Cashout, (function() {
                var e, t = Pe.getState().playerInfo.balance,
                    n = wa(wa({}, ue.FinishGame), {}, {
                        win: za,
                        winCoefficient: Pa,
                        nextFloorType: Sa
                    });
                qr(n), Ur(!1), e = (0, p.sumWithPrecision)(t, za, 2), _r(ke.setBalance({
                    balance: e
                })), setTimeout((function() {
                    lo({
                        forceFinish: !0,
                        callback: function() {
                            return Ur(!0)
                        }
                    })
                }), 100)
            })), ja);
            var ja, Sa, Ia, za, Ba, Oa, Pa, Ca, Ta, Aa, _a, Ra, Da, Fa, Ma = Pe.getState,
                Ea = Pe.dispatch,
                Na = function() {
                    if (Ea(ke.setPlayerPressed(!0)), B && S) ka.Step();
                    else {
                        var e = new ce.Step;
                        (0, fa.requestToServer)(e)
                    }
                },
                La = function() {
                    if (Ea(ke.setPlayerPressed(!0)), B && S) ka.Cashout();
                    else {
                        var e = new ce.Cashout;
                        (0, fa.requestToServer)(e)
                    }
                },
                Za = n(7504),
                Wa = {};
            Wa.styleTagTransform = or(), Wa.setAttributes = er(), Wa.insert = Jn().bind(null, "head"), Wa.domAPI = Hn(), Wa.insertStyleElement = nr(), Xn()(Za.Z, Wa);
            const Ua = Za.Z && Za.Z.locals ? Za.Z.locals : void 0;
            var Ka = n(2092),
                Ya = {};
            Ya.styleTagTransform = or(), Ya.setAttributes = er(), Ya.insert = Jn().bind(null, "head"), Ya.domAPI = Hn(), Ya.insertStyleElement = nr(), Xn()(Ka.Z, Ya);
            const Va = Ka.Z && Ka.Z.locals ? Ka.Z.locals : void 0;
            var qa = k ? Ua : Va;

            function Xa(e) {
                var t = e.disabled,
                    n = e.setBet,
                    r = (0, a.shallowSelector)(Re),
                    o = r.status,
                    i = r.buttonText,
                    s = "".concat(qa.betBtn, " ").concat("".concat("POST_START" === o ? qa.cancel : o === _ ? "" : qa.halfButton), " ");
                return (0, Un.jsxs)("button", {
                    type: "button",
                    className: "".concat(s, " ").concat(t ? "disabled" : "", " "),
                    onClick: o === _ ? function() {
                        return function(e) {
                            var t = Ma(),
                                n = t.playerInfo,
                                r = t.services,
                                o = t.resources,
                                i = t.partnerInfo,
                                s = i.minBet,
                                l = i.maxBet,
                                c = n.balance,
                                u = n.bet;
                            if (u = +(0, p.toNumberString)(u || 0), S && c - u < 0) return Ea(ke.addNotification((0, p.getNotificationById)(o, 4))), void(c >= l && e({
                                value: l,
                                validationValue: u
                            }));
                            if (!u || u < s) e({
                                value: s,
                                validationValue: u
                            });
                            else if (u > l) e({
                                value: l,
                                validationValue: u
                            });
                            else if (Ea(ke.setPlayerPressed(!0)), B && S) ka.AddStake({
                                bet: u
                            });
                            else {
                                var f = r.bonuses,
                                    m = function(e) {
                                        var t = ((0, a.selectBonuses)(e) || {}).selected;
                                        if (null != t && t.type) {
                                            if (t.type === y.BonusTypes.FreeBet) return X.FREE_BET;
                                            if (t.type === y.BonusTypes.FreeAmount) return X.FREE_AMOUNT
                                        }
                                        return 1
                                    }(t),
                                    d = f.selected,
                                    b = new ce.AddStake({
                                        bet: u,
                                        betType: m,
                                        bonusId: (null == d ? void 0 : d.id) || 0
                                    });
                                (0, fa.requestToServer)(b)
                            }
                        }(n)
                    } : Na,
                    "data-testid": "b-btn",
                    onKeyDown: function(e) {
                        return e.preventDefault()
                    },
                    children: [(0, Un.jsx)("div", {
                        className: qa.linesBackgroundLayer
                    }), (0, Un.jsx)("span", {
                        className: qa.betBtn_Txt,
                        children: i || "_build"
                    })]
                })
            }
            Xa.propTypes = {
                disabled: Wn().bool.isRequired,
                setBet: Wn().func.isRequired
            };
            const Ga = (0, Xe.memo)(Xa);
            var Ha = k ? Ua : Va;

            function Qa(e) {
                var t = e.disabled,
                    n = (0, a.shallowSelector)(Ee),
                    r = n.strCashout,
                    o = n.currencyId,
                    i = n.possibleWin,
                    s = n.isCashOutFrozen;
                return (0, Un.jsx)("button", {
                    className: "".concat(Ha.cashoutBtn, " ").concat(s ? Ha.frozen : "", " ").concat(t ? "disabled" : ""),
                    onClick: La,
                    children: (0, Un.jsxs)("div", {
                        className: Ha.cashoutBtnInner,
                        children: [(0, Un.jsx)("span", {
                            className: Ha.cashoutTxt,
                            children: r || "_Cashout"
                        }), (0, Un.jsx)(He.AmountBox, {
                            currencyId: o,
                            culture: j,
                            text: i || 0
                        })]
                    })
                })
            }
            const Ja = (0, Xe.memo)(Qa);
            var $a = n(2274),
                es = {};
            es.styleTagTransform = or(), es.setAttributes = er(), es.insert = Jn().bind(null, "head"), es.domAPI = Hn(), es.insertStyleElement = nr(), Xn()($a.Z, es);
            const ts = $a.Z && $a.Z.locals ? $a.Z.locals : void 0;
            var ns = n(8470),
                rs = {};
            rs.styleTagTransform = or(), rs.setAttributes = er(), rs.insert = Jn().bind(null, "head"), rs.domAPI = Hn(), rs.insertStyleElement = nr(), Xn()(ns.Z, rs);
            const os = ns.Z && ns.Z.locals ? ns.Z.locals : void 0;
            var is = k ? ts : os;
            const as = function() {
                var e = (0, o.useSelector)((function(e) {
                    return e.resources.strOops
                }));
                return (0, Un.jsx)("div", {
                    className: is.loseBox,
                    children: (0, Un.jsx)("h4", {
                        className: is.loseBox__title,
                        children: e || "OOPs"
                    })
                })
            };
            var ss = k ? ts : os;
            const ls = function() {
                var e = (0, a.shallowSelector)(De),
                    t = e.currencyId,
                    n = e.strYouWin,
                    r = e.win;
                return (0, Un.jsxs)("div", {
                    className: ss.winBox,
                    children: [(0, Un.jsx)("h4", {
                        className: ss.winBox__title,
                        "data-testid": "win-pu",
                        children: n || "_You Win"
                    }), (0, Un.jsx)("div", {
                        className: ss.winBox__amount,
                        children: (0, Un.jsx)(He.AmountBox, {
                            currencyId: t,
                            culture: j,
                            text: r
                        })
                    })]
                })
            };
            var cs = function() {
                var e = (0, a.shallowSelector)(Ye),
                    t = e.win,
                    n = e.isShow;
                return (0, Xe.useEffect)((function() {
                    n && t && Ie.settings.playSound("win")
                }), [n, t]), n ? 0 === t ? (0, Un.jsx)(as, {}) : (0, Un.jsx)(ls, {}) : null
            };
            const us = (0, Xe.memo)(cs);

            function fs(e) {
                return fs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, fs(e)
            }

            function ms(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ds(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ms(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== fs(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== fs(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === fs(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function bs(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var ps = k ? Ua : Va;
            const ys = function() {
                var e = (0, a.shallowSelector)(Ae),
                    t = e.status,
                    n = e.defaultBetAmount,
                    r = e.isDisabled,
                    o = e.isBetButtonDisabled,
                    i = e.isFinishAndLose,
                    s = e.additionalBetAmount,
                    l = e.isNotBigWin,
                    c = t === _,
                    u = (0, Xe.useRef)({
                        counterKey: 0
                    }),
                    f = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return bs(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bs(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)({
                        key: 0,
                        isActive: !1,
                        animationName: c ? "hideCashout" : "showCashout"
                    }), 2),
                    m = f[0],
                    d = f[1],
                    b = (0, Xi.useBetPartInput)({
                        defaultValue: n
                    }),
                    p = b.inputValue,
                    y = b.handleSetInputValue,
                    g = b.handleNumberInputChange,
                    h = b.handleNumberInputKey,
                    w = b.incrementBetValue,
                    v = b.decrementBetValue,
                    x = b.doubleBetValue,
                    j = b.handleAllIn,
                    S = b.numberValue;
                (0, Xe.useEffect)((function() {
                    ! function(e) {
                        _r(ke.setBetAmount(e))
                    }(p), C("GalaxsysBet", {
                        bet: S
                    })
                }), [p]), (0, Xe.useEffect)((function() {
                    s && y(s)
                }), [s]), (0, Xe.useEffect)((function() {
                    var e, n = u.prevStatus === _ && t === R || u.prevStatus === D && c,
                        r = c ? "hideCashout" : "showCashout";
                    d((function(e) {
                        var t = {
                            animationName: r
                        };
                        return n ? (t.key = e.key + 1, t.isActive = !0) : t.key = 0, ds(ds({}, e), t)
                    })), u.prevStatus = t, e = t !== _, _r(ke.toggleDisableSwitcher(e))
                }), [t]);
                var I = r || m.isActive;
                return (0, Un.jsx)("div", {
                    className: "".concat(ps.betPartContainer, " ").concat(i ? ps.losePopup : ""),
                    children: t === D && l ? (0, Un.jsx)(us, {}) : (0, Un.jsxs)("div", {
                        className: "".concat(ps.betPart, " ").concat(m.key ? ps.animationOn : "", " ").concat(ps[m.animationName]),
                        children: [(0, Un.jsx)("div", {
                            className: "".concat(ps.betPart__leftBock, " ").concat(I ? "disabled" : ""),
                            onAnimationStart: function() {
                                return d((function(e) {
                                    return ds(ds({}, e), {}, {
                                        isActive: !0
                                    })
                                }))
                            },
                            onAnimationEnd: function() {
                                return d((function(e) {
                                    return ds(ds({}, e), {}, {
                                        isActive: !1
                                    })
                                }))
                            },
                            children: (0, Un.jsxs)("div", {
                                className: "".concat(ps.betPart__leftBock_inner, " "),
                                children: [(0, Un.jsxs)("div", {
                                    className: "".concat(ps.betPart__inner, " "),
                                    children: [(0, Un.jsx)(ua, {
                                        handleAllIn: j,
                                        classNames: ps
                                    }), (0, Un.jsx)(la, {
                                        setBet: y,
                                        bet: p,
                                        classNames: ps,
                                        handleBetInputChange: g,
                                        handleBetInputKey: h,
                                        incrementBetValue: w,
                                        decrementBetValue: v
                                    }), (0, Un.jsx)("button", {
                                        type: "button",
                                        onClick: x,
                                        className: "".concat(ps.quickBetButton, " ").concat(ps.doubleBtn),
                                        children: (0, Un.jsx)("span", {
                                            className: ps.quickBetText,
                                            children: "x2"
                                        })
                                    })]
                                }), k ? null : (0, Un.jsx)(Ja, {})]
                            })
                        }), (0, Un.jsx)("div", {
                            className: ps.betCashoutBtnsBlock,
                            children: (0, Un.jsxs)("div", {
                                className: ps.betCashoutBtnsBlockInner,
                                children: [k ? (0, Un.jsx)(Ja, {
                                    disabled: r
                                }) : null, (0, Un.jsx)(Ga, {
                                    disabled: m.isActive || o,
                                    setBet: y
                                })]
                            })
                        })]
                    }, m.key)
                })
            };
            var gs = n(1816),
                hs = {};
            hs.styleTagTransform = or(), hs.setAttributes = er(), hs.insert = Jn().bind(null, "head"), hs.domAPI = Hn(), hs.insertStyleElement = nr(), Xn()(gs.Z, hs);
            const ws = gs.Z && gs.Z.locals ? gs.Z.locals : void 0;
            var vs = n(4466),
                xs = {};
            xs.styleTagTransform = or(), xs.setAttributes = er(), xs.insert = Jn().bind(null, "head"), xs.domAPI = Hn(), xs.insertStyleElement = nr(), Xn()(vs.Z, xs);
            const ks = vs.Z && vs.Z.locals ? vs.Z.locals : void 0;
            var js = k ? ws : ks;
            const Ss = function(e) {
                var t = e.coefficient,
                    n = e.isOuter,
                    r = void 0 !== n && n,
                    o = e.isFrozen,
                    i = void 0 !== o && o;
                return (0, Un.jsx)("div", {
                    className: "".concat(js.resultItem, " ").concat(r ? js.outerAnimated : js.innerAnimated),
                    children: (0, Un.jsx)("div", {
                        children: (0, Un.jsxs)("div", {
                            className: "".concat(js.resultItemInner, " ").concat(i ? js.frozen : ""),
                            children: [(0, Un.jsx)("span", {
                                children: "x"
                            }), (0, Un.jsx)("span", {
                                className: js.resultValue,
                                children: t
                            })]
                        })
                    })
                })
            };

            function Is(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var zs = k ? ws : ks;
            const Bs = function() {
                var e, t = (0, Xe.useRef)(),
                    n = (0, a.shallowSelector)(Ne),
                    r = n.coefficients,
                    o = n.isHide,
                    i = n.strResults,
                    s = r.length,
                    l = (0, Xe.useMemo)((function() {
                        return function(e) {
                            return function(e) {
                                if (Array.isArray(e)) return Is(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                            }(e) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return Is(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Is(e, t) : void 0
                                }
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(r).reverse()
                    }), [r]);
                return (0, Xe.useEffect)((function() {
                    var e;
                    s && t.current && (null === (e = t.current) || void 0 === e || e.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }))
                }), [s]), !!s && (0, Un.jsxs)("div", {
                    className: zs.resultBoxContainer,
                    children: [!o && (0, Un.jsx)("p", {
                        className: zs.title,
                        children: (0, Un.jsx)("span", {
                            children: i || "_Results"
                        })
                    }), (0, Un.jsxs)("div", {
                        className: zs.resultBox,
                        children: [(null === (e = l[0]) || void 0 === e ? void 0 : e.odd) && (0, Un.jsx)("div", {
                            className: zs.resultBoxHelper,
                            children: (0, Un.jsx)(Ss, {
                                isOuter: !0,
                                coefficient: l[0].odd
                            }, s)
                        }), !o && (0, Un.jsx)("div", {
                            className: zs.resultBoxMainBlock,
                            children: (0, Un.jsx)("div", {
                                ref: t,
                                className: zs.resultBoxInner,
                                children: l.map((function(e, t) {
                                    var n = e.odd,
                                        r = e.isFrozen;
                                    return (0, Un.jsx)(Ss, {
                                        coefficient: n,
                                        isFrozen: r
                                    }, s - t)
                                }))
                            })
                        })]
                    })]
                })
            };
            var Os = n(9887),
                Ps = {};
            Ps.styleTagTransform = or(), Ps.setAttributes = er(), Ps.insert = Jn().bind(null, "head"), Ps.domAPI = Hn(), Ps.insertStyleElement = nr(), Xn()(Os.Z, Ps);
            const Cs = Os.Z && Os.Z.locals ? Os.Z.locals : void 0;
            var Ts = n(7095),
                As = {};
            As.styleTagTransform = or(), As.setAttributes = er(), As.insert = Jn().bind(null, "head"), As.domAPI = Hn(), As.insertStyleElement = nr(), Xn()(Ts.Z, As);
            const _s = Ts.Z && Ts.Z.locals ? Ts.Z.locals : void 0;
            var Rs = k ? Cs : _s,
                Ds = k ? Ln : st,
                Fs = {
                    container: {
                        zIndex: 5
                    }
                };
            const Ms = function() {
                var e = (0, a.shallowSelector)(Ke),
                    t = e.strYouWin,
                    n = e.win,
                    r = e.currencyId,
                    o = e.strCongratulations,
                    i = e.isShow;
                return (0, Xe.useEffect)((function() {
                    i && Ie.settings.playSound("bigWin")
                }), [i]), i && (0, Un.jsxs)(Un.Fragment, {
                    children: [(0, Un.jsx)(He.Backdrop, {
                        styles: Fs
                    }), (0, Un.jsxs)("div", {
                        className: Rs.container,
                        children: [(0, Un.jsx)("div", {
                            className: Rs.imageBox,
                            children: (0, Un.jsx)("div", {
                                className: Rs.imageBox__sprite
                            })
                        }), (0, Un.jsxs)("div", {
                            className: Rs.popupInner,
                            children: [(0, Un.jsx)("p", {
                                className: Rs.title,
                                children: (0, Un.jsx)("span", {
                                    children: o || "_Congratulations"
                                })
                            }), (0, Un.jsx)("p", {
                                className: Rs.title__sm,
                                children: (0, Un.jsx)("span", {
                                    children: t || "_You Win"
                                })
                            }), (0, Un.jsx)("div", {
                                className: Rs.winAmount,
                                children: (0, Un.jsx)(He.AmountBox, {
                                    culture: j,
                                    currencyId: r,
                                    styles: Ds.amountBox,
                                    text: (0, p.numberToSpacedStringLocal)(n || 0)
                                })
                            })]
                        })]
                    })]
                })
            };
            var Es = n(9138),
                Ns = {};
            Ns.styleTagTransform = or(), Ns.setAttributes = er(), Ns.insert = Jn().bind(null, "head"), Ns.domAPI = Hn(), Ns.insertStyleElement = nr(), Xn()(Es.Z, Ns);
            var Ls = Es.Z && Es.Z.locals ? Es.Z.locals : void 0;
            const Zs = function() {
                return !(0, o.useSelector)(We) && (0, Un.jsx)("div", {
                    className: Ls.logoContainer,
                    children: (0, Un.jsx)("img", {
                        src: Cn.images.logo,
                        alt: "towerRush"
                    })
                })
            };
            var Ws = n(8699);

            function Us(e) {
                var t = e.color,
                    n = void 0 === t ? "black" : t;
                return (0, Un.jsx)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    fill: n,
                    children: (0, Un.jsx)("path", {
                        d: "M7.33333 10.6665C7.68696 10.6665 8.02609 10.807 8.27614 11.057C8.52619 11.3071 8.66667 11.6462 8.66667 11.9998C8.66667 12.3535 8.52619 12.6926 8.27614 12.9426C8.02609 13.1927 7.68696 13.3332 7.33333 13.3332C6.97971 13.3332 6.64057 13.1927 6.39052 12.9426C6.14048 12.6926 6 12.3535 6 11.9998C6 11.6462 6.14048 11.3071 6.39052 11.057C6.64057 10.807 6.97971 10.6665 7.33333 10.6665ZM12 10.6665C12.3536 10.6665 12.6928 10.807 12.9428 11.057C13.1929 11.3071 13.3333 11.6462 13.3333 11.9998C13.3333 12.3535 13.1929 12.6926 12.9428 12.9426C12.6928 13.1927 12.3536 13.3332 12 13.3332C11.6464 13.3332 11.3072 13.1927 11.0572 12.9426C10.8071 12.6926 10.6667 12.3535 10.6667 11.9998C10.6667 11.6462 10.8071 11.3071 11.0572 11.057C11.3072 10.807 11.6464 10.6665 12 10.6665ZM16.6667 10.6665C17.0203 10.6665 17.3594 10.807 17.6095 11.057C17.8595 11.3071 18 11.6462 18 11.9998C18 12.3535 17.8595 12.6926 17.6095 12.9426C17.3594 13.1927 17.0203 13.3332 16.6667 13.3332C16.313 13.3332 15.9739 13.1927 15.7239 12.9426C15.4738 12.6926 15.3333 12.3535 15.3333 11.9998C15.3333 11.6462 15.4738 11.3071 15.7239 11.057C15.9739 10.807 16.313 10.6665 16.6667 10.6665Z"
                    })
                })
            }
            const Ks = (0, Xe.memo)(Us);
            var Ys = n(66),
                Vs = {};
            Vs.styleTagTransform = or(), Vs.setAttributes = er(), Vs.insert = Jn().bind(null, "head"), Vs.domAPI = Hn(), Vs.insertStyleElement = nr(), Xn()(Ys.Z, Vs);
            const qs = Ys.Z && Ys.Z.locals ? Ys.Z.locals : void 0;
            var Xs = n(4680),
                Gs = {};
            Gs.styleTagTransform = or(), Gs.setAttributes = er(), Gs.insert = Jn().bind(null, "head"), Gs.domAPI = Hn(), Gs.insertStyleElement = nr(), Xn()(Xs.Z, Gs);
            const Hs = Xs.Z && Xs.Z.locals ? Xs.Z.locals : void 0;

            function Qs(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Js = k ? qs : Hs,
                $s = k ? Ln : st;
            const el = function() {
                var e = (0, Xe.useRef)(),
                    t = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, o, i, a, s = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (i = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        l = !1
                                    } else
                                        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return s
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Qs(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qs(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, Xe.useState)(!1), 2),
                    n = t[0],
                    r = t[1],
                    i = (0, a.shallowSelector)(Ve),
                    s = i.sound,
                    l = i.music,
                    c = i.isHide,
                    u = (0, a.shallowSelector)(a.selectPartnerUIConfig),
                    f = u.hidePlayers,
                    m = u.hideHistory,
                    d = u.hideMonthly,
                    b = (0, o.useSelector)(Fe),
                    p = f && m && d && !b;
                return (0, Ge.useOutsideClick)((function() {
                    return r(!1)
                }), e), !c && k && (0, Un.jsxs)("div", {
                    className: "".concat(Js.iconsToggleBox, " ").concat(k ? Js.open : ""),
                    ref: e,
                    children: [(0, Un.jsx)("button", {
                        className: Js.iconsToggleBoxButton,
                        onClick: function() {
                            return r((function(e) {
                                return !e
                            }))
                        },
                        children: (0, Un.jsx)("div", {
                            className: Js.buttonInner,
                            children: (0, Un.jsx)(Ks, {
                                color: "rgb(var(--white))"
                            })
                        })
                    }), n && (0, Un.jsxs)("div", {
                        className: Js.iconsToggleBoxInner,
                        children: [(0, Un.jsx)("div", {
                            className: Js.iconsItem,
                            children: (0, Un.jsx)(Ws.SoundOnOff, {
                                styles: $s.soundOnOffBtn,
                                sound: s,
                                music: l,
                                setSound: Ie.settings.setOnSound,
                                setMusic: Ie.settings.setOnMusic
                            })
                        }), !p && (0, Un.jsx)("div", {
                            className: Js.iconsItem,
                            children: (0, Un.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    return Lr(!0)
                                },
                                children: (0, Un.jsx)(Mi.History, {
                                    color: "rgb(var(--white))"
                                })
                            })
                        })]
                    })]
                })
            };
            var tl = k ? Ln : st,
                nl = k ? qs : Hs;
            const rl = function() {
                var e = (0, a.shallowSelector)(Ve).isHide,
                    t = (0, a.shallowSelector)(a.selectChatConfigs),
                    n = t.newMessageNotify,
                    r = t.showChatIcon;
                return !e && r && (0, Un.jsx)("div", {
                    className: "".concat(nl.chatBox, " ").concat(nl.iconsToggleBoxButton),
                    children: (0, Un.jsx)(Ws.ChatBtn, {
                        styles: tl.chatBtn,
                        onClick: Dr,
                        onTouchStart: Dr,
                        badgeIsActive: n
                    })
                })
            };
            var ol = n(785),
                il = {};
            il.styleTagTransform = or(), il.setAttributes = er(), il.insert = Jn().bind(null, "head"), il.domAPI = Hn(), il.insertStyleElement = nr(), Xn()(ol.Z, il);
            const al = ol.Z && ol.Z.locals ? ol.Z.locals : void 0,
                sl = function() {
                    return (0, o.useSelector)((function(e) {
                        return e.gameInfo.isOpenTabsPopup
                    })) && (0, Un.jsxs)("div", {
                        className: al.container,
                        children: [(0, Un.jsx)("button", {
                            type: "button",
                            className: al.closeBtn,
                            onClick: function() {
                                return Lr(!1)
                            },
                            children: (0, Un.jsx)(Mi.Close, {
                                color: "rgba(var(--white), 0.6)"
                            })
                        }), (0, Un.jsx)(jo, {})]
                    })
                };
            var ll = n(1366),
                cl = {};
            cl.styleTagTransform = or(), cl.setAttributes = er(), cl.insert = Jn().bind(null, "head"), cl.domAPI = Hn(), cl.insertStyleElement = nr(), Xn()(ll.Z, cl);
            const ul = ll.Z && ll.Z.locals ? ll.Z.locals : void 0;
            var fl = n(2372),
                ml = {};
            ml.styleTagTransform = or(), ml.setAttributes = er(), ml.insert = Jn().bind(null, "head"), ml.domAPI = Hn(), ml.insertStyleElement = nr(), Xn()(fl.Z, ml);
            const dl = fl.Z && fl.Z.locals ? fl.Z.locals : void 0;
            var bl = k ? ul : dl;

            function pl() {
                return (0, Xe.useEffect)((function() {
                    Rr()
                }), []), (0, Un.jsxs)(Un.Fragment, {
                    children: [(0, Un.jsxs)("div", {
                        id: "main-container",
                        className: bl.gameCenter,
                        children: [(0, Un.jsx)(Ri, {}), k ? (0, Un.jsx)(rl, {}) : (0, Un.jsx)(Zs, {}), k && (0, Un.jsx)(sl, {}), (0, Un.jsx)(Bs, {}), (0, Un.jsx)(el, {}), (0, Un.jsx)(ys, {}), (0, Un.jsx)(Ms, {})]
                    }), (0, Un.jsx)(qi, {})]
                })
            }
            const yl = (0, Xe.memo)(pl);
            var gl = k ? Ln : st,
                hl = function() {
                    return (0, Un.jsx)(Xe.Suspense, {
                        fallback: null,
                        children: (0, Un.jsx)(Je(), {
                            version: 2,
                            style: gl,
                            gameName: "towerrush",
                            mappedGlobalHistory: yr,
                            RightPane: jo,
                            settingsConfig: A,
                            socketListeners: uo,
                            selectShowOutsidePopups: qe,
                            children: (0, Un.jsx)(yl, {})
                        })
                    })
                };
            const wl = (0, Xe.memo)(hl);
            var vl = n(2180),
                xl = {};

            function kl(e) {
                return kl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, kl(e)
            }

            function jl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Sl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? jl(Object(n), !0).forEach((function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" !== kl(e) || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" !== kl(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" === kl(t) ? t : String(t)
                        }(o)) in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jl(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            xl.styleTagTransform = or(), xl.setAttributes = er(), xl.insert = Jn().bind(null, "head"), xl.domAPI = Hn(), xl.insertStyleElement = nr(), Xn()(vl.Z, xl), vl.Z && vl.Z.locals && vl.Z.locals;
            const Il = function() {
                    var e = (0, Ge.useFontSizeV3)();
                    return (0, Xe.useEffect)((function() {
                        Et.set(wt, e)
                    }), [e]), (0, Un.jsx)("div", {
                        "data-theme": z,
                        className: "App ".concat(k ? "AppMobile" : ""),
                        style: Sl({
                            fontSize: e
                        }, En),
                        children: (0, Un.jsxs)("div", {
                            className: "AppInner",
                            style: {
                                fontSize: e
                            },
                            children: [(0, Un.jsx)(wl, {}), k && (0, Un.jsx)(Xe.Suspense, {
                                fallback: null,
                                children: (0, Un.jsx)(He.Orientationchange, {
                                    img: Mn
                                })
                            })]
                        })
                    })
                },
                zl = function() {
                    var e = (0, o.useSelector)(a.selectResources);
                    return (0, Un.jsx)(Te(), {
                        resources: e,
                        dynamicMiddleware: Oe,
                        children: (0, Un.jsx)(Il, {})
                    })
                };
            (0, p.preLoadDataWithLinks)({
                paths: [Dn],
                dataType: "",
                relType: "stylesheet"
            }), (0, p.preLoadDataWithLinks)({
                paths: Rn,
                dataType: "font",
                options: {
                    type: "font/woff",
                    crossorigin: !0
                }
            }), (0, p.preLoadDataWithLinks)({
                paths: [Fn],
                dataType: "",
                relType: "icon"
            }), hr.init({
                dsn: "https://3beecb35b6bc8c5efb60f58a712c4a8d@sentry.digitain.tools/60",
                integrations: [hr.replayIntegration(), hr.replayCanvasIntegration(), hr.captureConsoleIntegration({
                    levels: ["error"]
                })],
                tracesSampleRate: 1,
                replaysSessionSampleRate: .1,
                replaysOnErrorSampleRate: 1,
                ignoreErrors: ["Cannot send data if the connection is not in the 'Connected' State.", "Cannot read properties of undefined (reading 'send')", "Support for defaultProps", "Invalid prop", "Invalid argument supplied", "is marked as required in", "prop type"]
            });
            var Bl = document.getElementById("root");
            (0, r.s)(Bl).render((0, Un.jsx)(o.Provider, {
                store: Pe,
                children: (0, Un.jsx)(zl, {})
            }))
        },
        2180: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ':root{--mainTransition: transform 0.3s linear;--mainScale: scale(0.95);--white: 255, 255, 255;--black: 0, 0, 0;--activeItemBgColor: linear-gradient(90deg, rgba(255, 187, 1, 0.32) 0.06%, rgba(255, 187, 1, 0) 99.95%);--activeItemBorderColor: #ffbb01;--activeIconColor: #ffdb78;--asideIconColor: rgba(194, 142, 0, 0.7);--asideIconBorderColor: #ffdb78;--gameAsideBg: linear-gradient(180deg, #171717 0%, #1f1f1f 100%);--mainMenuBg: #292007;--mainMenuPopoverTitleColor: #ffdb78;--mainMenuPopoverIconColor: #ffdb78;--mainMenuMbBg: var(--mainMenuBg);--menuFooterTopBorderColor: #605a47;--mainMenuPopoverBeforeBg: linear-gradient(0deg, #211a06 36.76%, rgba(33, 26, 6, 0) 100%);--mainMenuPopoverMbBeforeBg: var(--mainMenuPopoverBeforeBg);--mainMenuPopoverBg: linear-gradient(0deg, rgba(var(--black), 0.2) 0%, rgba(var(--black), 0.2) 100%), var(--mainMenuBg);--mainMenuPopoverMbBg: var(--mainMenuPopoverBg);--rulesPopupBg: linear-gradient(180deg, #171717 0%, #171717 100%);--mainBackground: linear-gradient(167.28deg, rgba(var(--white), 0.06) 0%, rgba(var(--white), 0.02) 100%);--mainPopupBg: linear-gradient(#171717 0%, #1f1f1f 100%);--gameControlsBg: rgba(26, 24, 18, 0.32);--primaryButtonLayer1: linear-gradient(180deg, #ffac2c 0%, #8e6423 100%);--secondaryButtonLayer1: #ffc160;--bonusPopupButtonLayer1: linear-gradient(180deg, #da9432 0%, #ffb422 63.89%);--bonusPopupButtonLayer2: linear-gradient(92.65deg, #fcab2a 2.21%, #b97f3b 97.79%);--historyContainerBg: linear-gradient(180deg, #141310 0%, #221a05 100%);--tabsPopupBg: linear-gradient(180deg, #0f0c04 0%, #141310 0.01%, #221a04 100%);--betPartBg: radial-gradient(100% 100% at 50% 0%, #4d4d4d 0%, #292929 100%);--mainMenuGlobalHistoryBg: linear-gradient(180deg, #141310 0%, #221a05 100%);--mainLayoutBorderColor: rgba(var(--white), 0.1) rgba(var(--white), 0.2) rgba(var(--white), 0.34);--tableRowBg: rgba(var(--white), 0.06);--tableRowBorderColor: rgba(var(--white), 0.1);--winRowBg: rgba(5, 140, 15, 0.32);--winRowBorderColor: rgba(38, 199, 127, 0) rgba(38, 199, 127, 0.5) #26c77f;--bonusSwitcherDivider: rgba(144, 144, 144, 0.15);--globalHistoryBg: var(--historyContainerBg);--globalHistoryBorderColor: var(--mainLayoutBorderColor);--globalHistoryRadius: var(--mainRadiusBig);--mainRadius: 0.5em;--mainRadiusMd: 0.375em;--mainRadiusSm: 0.25em;--mainRadiusBig: 0.75em;--mainIranFont: "IranSans";--mainHyFont: "MardotoRegular";--mainHyFontLight: "MardotoLight";--mainHyFontMedium: "MardotoMedium";--mainHyFontBold: "MardotoBold";--mainFont: "RubikRegular", var(--mainIranFont), var(--mainHyFont), sans-serif;--mainFontLight: "RubikLight", var(--mainIranFont), var(--mainHyFontLight), sans-serif;--mainFontMedium: "RubikMedium", var(--mainIranFont), var(--mainHyFontMedium), sans-serif;--mainFontBold: "RubikBold", var(--mainIranFont), var(--mainHyFontBold), sans-serif;--mainFontNumber: "RobotoBold", var(--mainHyFontBold), sans-serif;--keyboardBg: #171717;--keyboardBorderColor: #cc9300;--keyboardMinMaxBtnBg: #333;--keyboardMinMaxBtnBorderColor: transparent;--keyboardInputBg: rgba(var(--black), 0.2);--keyboardInputBoxShadow: 1px 1px 0.5em 0 rgba(var(--black), 0.5) inset;--keyboardInputBorderColor: #232323;--keyboardBtnBg: rgba(164, 164, 164, 0.14);--keyboardBtnBorderColor: var(--mainLayoutBorderColor);--keyboardBtnColor: rgb(var(--white));--keyboardOkBtnColor: rgb(var(--white));--keyboardOkBtnBorderColor: #ffc160;--keyboardBackdropBlurValue: 0}*{margin:0;padding:0;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}html,body,#root{height:100%}body{font-family:var(--mainFont);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#140d02;touch-action:manipulation;color:#fff}body::-webkit-scrollbar{width:0}.opacity-1{opacity:1 !important}.fix-body{position:fixed;overflow:hidden;width:100vw}.hide{display:none !important}.disabled{pointer-events:none;opacity:.5 !important;-webkit-transition:none !important;-moz-transition:none !important;transition:none !important}.App{padding:1em 0 0 0;height:100%;width:100%;background:var(--appBg) no-repeat top/120em 55em #140d02}.AppInner{height:50.625em;width:89em;margin:auto;position:relative;overflow:hidden}.AppMobile{padding:0;background:#140d02}.AppMobile .AppInner{height:100%;width:100%;background-color:#010b1c}.gameResult{word-break:break-word;position:relative}.gameResult .item{display:inline}.gameResult .item span{margin-right:.125em}.gameResult .frozen span:nth-child(2){color:#6788ff}.gameResult .triple span:nth-child(2){color:#be6cff}.gameResult .temple span:nth-child(2){color:#63e04e}.gameResultWeb{text-align:center;width:22.5em}.gameResultMb{text-align:left;width:100%}#main-container .Table_body::-webkit-scrollbar-thumb:vertical{background:rgba(255,199,44,.5)}#main-container .Table_body::-webkit-scrollbar-track-piece{background-color:rgba(255,199,44,.2)}', ""]);
            const s = a
        },
        8470: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.h7kUY{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:absolute;bottom:0;z-index:3;width:38.25em;height:8em;background:var(--loseBg) top center/cover no-repeat}.xRT8m{font:2.5em "RubikBold","IranSans","MardotoBold",sans-serif;text-transform:uppercase;color:#fff;text-shadow:0 1px .125em rgba(0,0,0,.24);-webkit-transform:rotate(3.2deg);-moz-transform:rotate(3.2deg);-ms-transform:rotate(3.2deg);transform:rotate(3.2deg)}.zuX3s{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:absolute;bottom:0;z-index:3;width:38.25em;height:8em;background:var(--winBg) top center/cover no-repeat}.u2WTh{font:2.5em "RubikBold","IranSans","MardotoBold",sans-serif;text-transform:uppercase;color:#ffdc5f;text-shadow:-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff,0 1px .5em #833f00}.nDoQ9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;font:1.375em "RubikMedium","IranSans","MardotoMedium",sans-serif;text-transform:uppercase;color:#fff;text-shadow:0 0 5px rgba(0,80,48,.65)}', ""]), a.locals = {
                loseBox: "h7kUY",
                loseBox__title: "xRT8m",
                winBox: "zuX3s",
                winBox__title: "u2WTh",
                winBox__amount: "nDoQ9"
            };
            const s = a
        },
        2274: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.BvyqD{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:absolute;bottom:0;z-index:3;width:100%;height:7em;background:var(--loseBg) top center/cover no-repeat}.BAKAy{font:2em "RubikBold","IranSans","MardotoBold",sans-serif;text-transform:uppercase;color:#fff;text-shadow:0 1px .125em rgba(0,0,0,.24);-webkit-transform:rotate(3.2deg);-moz-transform:rotate(3.2deg);-ms-transform:rotate(3.2deg);transform:rotate(3.2deg)}.XUKZW{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:absolute;bottom:0;z-index:3;width:100%;height:7em;background:var(--winBg) top center/cover no-repeat;border-radius:.25em .25em 0 0}.ypTJ7{font:2em "RubikBold","IranSans","MardotoBold",sans-serif;text-transform:uppercase;color:#ffdc5f;text-shadow:-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff,0 1px .5em #833f00}.cDmBm{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;font:1.25em "RubikMedium","IranSans","MardotoMedium",sans-serif;text-transform:uppercase;color:#fff;text-shadow:0 0 5px rgba(0,80,48,.65)}', ""]), a.locals = {
                loseBox: "BvyqD",
                loseBox__title: "BAKAy",
                winBox: "XUKZW",
                winBox__title: "ypTJ7",
                winBox__amount: "cDmBm"
            };
            const s = a
        },
        2092: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '@-webkit-keyframes c6jrF{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-webkit-calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}}@-moz-keyframes c6jrF{0%{-moz-transform:translateX(0);transform:translateX(0)}100%{-moz-transform:translateX(-moz-calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}}@keyframes c6jrF{0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-webkit-calc(-50% - 0.5em));-moz-transform:translateX(-moz-calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}}@-webkit-keyframes CzYmS{from{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-webkit-calc(-100% - 0.6em));transform:translateY(calc(-100% - 0.6em))}}@-moz-keyframes CzYmS{from{-moz-transform:translateY(0);transform:translateY(0)}to{-moz-transform:translateY(-moz-calc(-100% - 0.6em));transform:translateY(calc(-100% - 0.6em))}}@keyframes CzYmS{from{-webkit-transform:translateY(0);-moz-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-webkit-calc(-100% - 0.6em));-moz-transform:translateY(-moz-calc(-100% - 0.6em));transform:translateY(calc(-100% - 0.6em))}}@-webkit-keyframes sWMkQ{0%{width:34.0625em}100%{width:22.4375em}}@-moz-keyframes sWMkQ{0%{width:34.0625em}100%{width:22.4375em}}@keyframes sWMkQ{0%{width:34.0625em}100%{width:22.4375em}}@-webkit-keyframes b074K{0%{height:3em}100%{height:0}}@-moz-keyframes b074K{0%{height:3em}100%{height:0}}@keyframes b074K{0%{height:3em}100%{height:0}}.VuR5I{position:absolute;left:50%;bottom:0;z-index:3;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;color:#fff;width:auto;height:auto;background:var(--betPartBorder) top center/contain no-repeat,var(--betPartBg);border-radius:.25em .25em 0 0}.K9_fH{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;width:38.25em;height:8em;padding:1em}.K9_fH ._6kCCd,.K9_fH .xvU0Z,.K9_fH .LR7AQ{height:2.75em}.gQnoZ{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 50%;-moz-box-flex:0;flex:0 0 50%;margin:0;-webkit-flex-wrap:wrap;flex-wrap:wrap}.mJb5i{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 50%;-moz-box-flex:0;flex:0 0 50%;overflow:hidden}.B94ix{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box-flex:0;-webkit-flex:0 0 36.25em;-moz-box-flex:0;flex:0 0 36.25em;gap:.5em}.K9_fH.QE6ux .B94ix{-webkit-transform:translateX(-webkit-calc(-50% - 0.5em));-moz-transform:translateX(-moz-calc(-50% - 0.5em));-ms-transform:translateX(calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}.K9_fH.j_Vu9 .B94ix{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.r911z.QE6ux .B94ix{-webkit-animation:c6jrF .6s linear forwards;-moz-animation:c6jrF .6s linear forwards;animation:c6jrF .6s linear forwards}.r911z.j_Vu9 .B94ix{animation:c6jrF .6s linear forwards reverse}.w0vIA{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 17.875em 0 auto;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 17.875em 0 auto;height:100%;width:17.875em;margin-left:.5em;overflow:visible;position:relative}.w0vIA .Osst_{height:100%;width:100%}.Kw8cP{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:0 none;outline:0 none;background:var(--buildBtn) center left/cover no-repeat,-webkit-radial-gradient(49.73% 0%, 100% 100%, #ffcc49 0%, #ffc60d 35.59%, #f2b034 65.52%);background:var(--buildBtn) center left/cover no-repeat,-moz-radial-gradient(49.73% 0%, 100% 100%, #ffcc49 0%, #ffc60d 35.59%, #f2b034 65.52%);background:var(--buildBtn) center left/cover no-repeat,radial-gradient(100% 100% at 49.73% 0%, #ffcc49 0%, #ffc60d 35.59%, #f2b034 65.52%);padding:0;font-size:1em;color:#fff;text-align:center;cursor:pointer;height:100%;width:100%;margin-left:0;border-radius:.5em;text-transform:uppercase;background-blend-mode:luminosity,normal;position:relative;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;-moz-transition:transform .3s linear, -moz-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear, -webkit-transform .3s linear, -moz-transform .3s linear}.Kw8cP::before,.Kw8cP::after{position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:"";display:block;width:.6em;height:.6em;background:var(--buildBtnBolt) center center/100% no-repeat;border-radius:50%;-webkit-filter:drop-shadow(0px 0.5px 0px #da8827);filter:drop-shadow(0px 0.5px 0px #da8827)}.Kw8cP::before{left:.8em}.Kw8cP::after{right:.8em;rotate:90deg}.Kw8cP:active{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}.izLlO{font:1.5em "RubikBold","IranSans","MardotoBold",sans-serif;letter-spacing:.04em;text-shadow:0 .125em .25em #814f15}.Kw8cP .qRM87{position:absolute;top:.125em;left:.125em;width:-webkit-calc(100% - .25em);width:-moz-calc(100% - .25em);width:calc(100% - .25em);height:-webkit-calc(100% - .25em);height:-moz-calc(100% - .25em);height:calc(100% - .25em);border-radius:inherit;background:var(--buildBtnLines) repeat-x 0 0/26.75em 5.75em;-webkit-animation:UsXXo 15s linear infinite;-moz-animation:UsXXo 15s linear infinite;animation:UsXXo 15s linear infinite}@-webkit-keyframes UsXXo{0%{background-position-x:0}100%{background-position-x:26.75em}}@-moz-keyframes UsXXo{0%{background-position-x:0}100%{background-position-x:26.75em}}@keyframes UsXXo{0%{background-position-x:0}100%{background-position-x:26.75em}}.iVWD1{border:0 none;outline:0 none;background:-webkit-gradient(linear, left top, left bottom, from(#b9ddff), to(#3481c9)),radial-gradient(#68b6ff, #2476c2, #215e98);background:-webkit-linear-gradient(top, #b9ddff, #3481c9),-webkit-radial-gradient(#68b6ff, #2476c2, #215e98);background:-moz-linear-gradient(top, #b9ddff, #3481c9),-moz-radial-gradient(#68b6ff, #2476c2, #215e98);background:linear-gradient(to bottom, #b9ddff, #3481c9),radial-gradient(#68b6ff, #2476c2, #215e98);padding:.125em;font-size:1em;color:#fff;text-align:center;cursor:pointer;height:100%;border-radius:.5em;overflow:hidden;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;-moz-transition:transform .3s linear, -moz-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear, -webkit-transform .3s linear, -moz-transform .3s linear;z-index:1}.iVWD1 .xapDh{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;height:100%;width:100%;border-radius:.5em}.iVWD1 .xapDh .CjHfw{text-transform:uppercase;font:1.5em "RubikBold","IranSans","MardotoBold",sans-serif;text-shadow:0 .125em .25em #23598a;margin-bottom:.25em}.iVWD1 .xapDh .CjHfw+div span,.iVWD1 .xapDh .CjHfw+div b{font:1.125em "RubikRegular","IranSans","MardotoRegular",sans-serif}.iVWD1:not(.qEOui) .xapDh{background:var(--cashoutBtn) center center/cover no-repeat}.iVWD1.qEOui .xapDh{background:var(--cashoutBtnFrozen) center center/cover no-repeat}.iVWD1.qEOui .xapDh .CjHfw+div span,.iVWD1.qEOui .xapDh .CjHfw+div b{font:1em "RubikBold","IranSans","MardotoBold",sans-serif;color:#408be6;text-shadow:-0.0625em -0.0625em 0 #fff,.0625em -0.0625em 0 #fff,-0.0625em .0625em 0 #fff,.0625em .0625em 0 #fff}.iVWD1:active{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}.iVWD1{-webkit-box-flex:0;-webkit-flex:0 0 50%;-moz-box-flex:0;flex:0 0 50%}._6kCCd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 -webkit-calc(100% - .25em) 0 auto;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 calc(100% - .25em) 0 auto;background:var(--betInputBackground) center center/cover no-repeat;padding:.375em;margin:0 0 .5em;width:-webkit-calc(100% - .25em);width:-moz-calc(100% - .25em);width:calc(100% - .25em);-webkit-box-shadow:0 0 .25em -1px #fff inset;box-shadow:0 0 .25em -1px #fff inset;position:relative;border-radius:.5em}.ZoJLB,._6kCCd input{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 100%;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 100%;height:100%;width:100%;border:0 none;outline:0 none;color:#fff;padding:0;font:1em "RubikMedium","IranSans","MardotoMedium",sans-serif;background:rgba(0,0,0,0);text-align:center}.ZoJLB:focus,._6kCCd input:focus{outline:0 none}._6kCCd{-webkit-box-ordinal-group:2;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.dTJmY{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:rgba(0,0,0,0);outline:0 none;background:var(--quickBtnBackground) center center/cover no-repeat;padding:0;font-size:1em;color:#fff;text-align:center;cursor:pointer;border-radius:.5em;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;-moz-transition:transform .3s linear, -moz-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear, -webkit-transform .3s linear, -moz-transform .3s linear}.dTJmY.xvU0Z{text-transform:uppercase}.dTJmY.xvU0Z:last-child{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex}.dTJmY:active{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}.dTJmY .uguNJ{font-family:"RubikBold","IranSans","MardotoBold",sans-serif;font-size:1em}.dTJmY.xvU0Z{-webkit-box-ordinal-group:3;-webkit-order:2;-moz-box-ordinal-group:3;order:2;-webkit-box-flex:1;-webkit-flex:1 1 -webkit-calc(50% - .25em);-moz-box-flex:1;flex:1 1 calc(50% - .25em)}.dTJmY.LR7AQ{-webkit-box-ordinal-group:4;-webkit-order:3;-moz-box-ordinal-group:4;order:3;-webkit-box-flex:1;-webkit-flex:1 1 -webkit-calc(50% - .25em);-moz-box-flex:1;flex:1 1 calc(50% - .25em);margin-left:.5em}', ""]), a.locals = {
                betPartContainer: "VuR5I",
                betPart: "K9_fH",
                betInput: "_6kCCd",
                allInBtn: "xvU0Z",
                doubleBtn: "LR7AQ",
                betPart__inner: "gQnoZ",
                betPart__leftBock: "mJb5i",
                betPart__leftBock_inner: "B94ix",
                showCashout: "QE6ux",
                hideCashout: "j_Vu9",
                animationOn: "r911z",
                betPartAnimation: "c6jrF",
                betCashoutBtnsBlock: "w0vIA",
                betCashoutBtnsBlockInner: "Osst_",
                betBtn: "Kw8cP",
                betBtn_Txt: "izLlO",
                linesBackgroundLayer: "qRM87",
                betBtnLinesAnimation: "UsXXo",
                cashoutBtn: "iVWD1",
                cashoutBtnInner: "xapDh",
                cashoutTxt: "CjHfw",
                frozen: "qEOui",
                betInput__field: "ZoJLB",
                quickBetButton: "dTJmY",
                quickBetText: "uguNJ",
                betPartAnimationMob: "CzYmS",
                betCashoutBtnsAnimationMob: "sWMkQ",
                heightAnimation: "b074K"
            };
            const s = a
        },
        7504: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '@-webkit-keyframes vVuev{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-webkit-calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}}@-moz-keyframes vVuev{0%{-moz-transform:translateX(0);transform:translateX(0)}100%{-moz-transform:translateX(-moz-calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}}@keyframes vVuev{0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-webkit-calc(-50% - 0.5em));-moz-transform:translateX(-moz-calc(-50% - 0.5em));transform:translateX(calc(-50% - 0.5em))}}@-webkit-keyframes B9qxv{from{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-webkit-calc(-100% - 0.6em));transform:translateY(calc(-100% - 0.6em))}}@-moz-keyframes B9qxv{from{-moz-transform:translateY(0);transform:translateY(0)}to{-moz-transform:translateY(-moz-calc(-100% - 0.6em));transform:translateY(calc(-100% - 0.6em))}}@keyframes B9qxv{from{-webkit-transform:translateY(0);-moz-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-webkit-calc(-100% - 0.6em));-moz-transform:translateY(-moz-calc(-100% - 0.6em));transform:translateY(calc(-100% - 0.6em))}}@-webkit-keyframes DiKkf{0%{width:34.0625em}100%{width:22.4375em}}@-moz-keyframes DiKkf{0%{width:34.0625em}100%{width:22.4375em}}@keyframes DiKkf{0%{width:34.0625em}100%{width:22.4375em}}@-webkit-keyframes Z8mYb{0%{height:3em}100%{height:0}}@-moz-keyframes Z8mYb{0%{height:3em}100%{height:0}}@keyframes Z8mYb{0%{height:3em}100%{height:0}}.df2us{position:fixed;left:0;bottom:0;z-index:3;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;color:#fff;width:100%;height:auto;background:var(--betPartBorder) top center/contain no-repeat,var(--betPartBg)}.Rn1q6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:auto;padding:.1875em .5em .5em}.Rn1q6 .IsN5Z,.Rn1q6 .V7_kn,.Rn1q6 .un4K2{height:2.5em}.Rn1q6{position:relative}.fl5ur{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 100%;-moz-box-flex:1;flex:1 1 100%;margin:0 0 .5em;position:absolute;top:0;left:0}.BIxYo{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 100%;-moz-box-flex:1;flex:1 1 100%;overflow:hidden;height:auto}.pO3v4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box-flex:0;-webkit-flex:0 0 100%;-moz-box-flex:0;flex:0 0 100%;gap:.5em;position:relative;margin-top:.5em}.Rn1q6.gAWmU .pO3v4{height:0}.Rn1q6.rfaNl .pO3v4{height:3em}.IsN5Z{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 10.375em 0 auto;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 10.375em 0 auto;background:var(--betInputBackground) center center/cover no-repeat;padding:.375em;margin:0 .5em;width:10.375em;-webkit-box-shadow:0 0 .25em -1px #fff inset;box-shadow:0 0 .25em -1px #fff inset;position:relative;border-radius:.5em}.Oarr4,.IsN5Z input{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 100%;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 100%;height:100%;width:100%;border:0 none;outline:0 none;color:#fff;padding:0;font:.875em "RubikMedium","IranSans","MardotoMedium",sans-serif;background:rgba(0,0,0,0);text-align:center}.Oarr4:focus,.IsN5Z input:focus{outline:0 none}.GISE4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:rgba(0,0,0,0);outline:0 none;background:var(--quickBtnBackground) center center/cover no-repeat;padding:0;font-size:1em;color:#fff;text-align:center;cursor:pointer;border-radius:.5em;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;-moz-transition:transform .3s linear, -moz-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear, -webkit-transform .3s linear, -moz-transform .3s linear}.GISE4.V7_kn{text-transform:uppercase}.GISE4.V7_kn:last-child{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex}.GISE4:active{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}.GISE4 .vwc9L{font-family:"RubikBold","IranSans","MardotoBold",sans-serif;font-size:.875em}.GISE4.V7_kn,.GISE4.un4K2{width:5.5em}.xeNdr{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 100% 0 auto;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 100% 0 auto;height:3em;width:100%;margin-left:0;overflow:visible;position:relative}.IiTYu{position:absolute;right:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;width:33.6375em;height:3em;gap:.5em}.Rn1q6.gAWmU .IiTYu{width:22.4375em}.Rn1q6.rfaNl .IiTYu{width:34.0625em}.KhBsq{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:0 none;outline:0 none;background:var(--buildBtn) center left/cover no-repeat,-webkit-radial-gradient(49.73% 0%, 100% 100%, #ffcc49 0%, #ffc60d 35.59%, #f2b034 65.52%);background:var(--buildBtn) center left/cover no-repeat,-moz-radial-gradient(49.73% 0%, 100% 100%, #ffcc49 0%, #ffc60d 35.59%, #f2b034 65.52%);background:var(--buildBtn) center left/cover no-repeat,radial-gradient(100% 100% at 49.73% 0%, #ffcc49 0%, #ffc60d 35.59%, #f2b034 65.52%);padding:0;font-size:1em;color:#fff;text-align:center;cursor:pointer;height:100%;width:auto;margin-left:0;border-radius:.5em;text-transform:uppercase;background-blend-mode:luminosity,normal;position:relative;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;-moz-transition:transform .3s linear, -moz-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear, -webkit-transform .3s linear, -moz-transform .3s linear}.KhBsq::before,.KhBsq::after{position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:"";display:block;width:.6em;height:.6em;background:var(--buildBtnBolt) center center/100% no-repeat;border-radius:50%;-webkit-filter:drop-shadow(0px 0.5px 0px #da8827);filter:drop-shadow(0px 0.5px 0px #da8827)}.KhBsq::before{left:.8em}.KhBsq::after{right:.8em;rotate:90deg}.KhBsq:active{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}.bQnft{font:1em "RubikBold","IranSans","MardotoBold",sans-serif;letter-spacing:.04em;text-shadow:0 .125em .25em #814f15}.KhBsq{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box:1;-moz-box:1;-webkit-flex:1 1 auto;-webkit-box-flex:1;-moz-box-flex:1;flex:1 1 auto}.KhBsq .pdqnb{position:absolute;top:.125em;left:.125em;width:-webkit-calc(100% - .25em);width:-moz-calc(100% - .25em);width:calc(100% - .25em);height:-webkit-calc(100% - .25em);height:-moz-calc(100% - .25em);height:calc(100% - .25em);border-radius:inherit;background:var(--buildBtnLines) repeat-x 0 0/43.828125em 2.75em;-webkit-animation:Zf6_7 30s linear infinite;-moz-animation:Zf6_7 30s linear infinite;animation:Zf6_7 30s linear infinite}@-webkit-keyframes Zf6_7{0%{background-position-x:0}100%{background-position-x:43.828125em}}@-moz-keyframes Zf6_7{0%{background-position-x:0}100%{background-position-x:43.828125em}}@keyframes Zf6_7{0%{background-position-x:0}100%{background-position-x:43.828125em}}[data-theme=winter] .KhBsq ::after{content:"";position:absolute;top:-0.35em;left:0;width:100%;height:2em;background:var(--buildSnow) no-repeat 0 0/100% 100%}[data-theme=winter] .KhBsq.xnZY6 ::after{height:1.5em;background:var(--halfBuildSnow) no-repeat 0 0/100% 100%}.o23Zw{border:0 none;outline:0 none;background:-webkit-gradient(linear, left top, left bottom, from(#b9ddff), to(#3481c9)),radial-gradient(#68b6ff, #2476c2, #215e98);background:-webkit-linear-gradient(top, #b9ddff, #3481c9),-webkit-radial-gradient(#68b6ff, #2476c2, #215e98);background:-moz-linear-gradient(top, #b9ddff, #3481c9),-moz-radial-gradient(#68b6ff, #2476c2, #215e98);background:linear-gradient(to bottom, #b9ddff, #3481c9),radial-gradient(#68b6ff, #2476c2, #215e98);padding:.125em;font-size:1em;color:#fff;text-align:center;cursor:pointer;height:3em;border-radius:.5em;overflow:hidden;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;-moz-transition:transform .3s linear, -moz-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear, -webkit-transform .3s linear, -moz-transform .3s linear;z-index:1}.o23Zw .jkabZ{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;height:100%;width:100%;border-radius:.5em}.o23Zw .jkabZ .j4oa1{text-transform:uppercase;font:.875em "RubikBold","IranSans","MardotoBold",sans-serif;text-shadow:0 .125em .25em #23598a;margin-bottom:.125em}.o23Zw .jkabZ .j4oa1+div span,.o23Zw .jkabZ .j4oa1+div b{font:1em "RubikRegular","IranSans","MardotoRegular",sans-serif}.o23Zw:not(.FsujJ) .jkabZ{background:var(--cashoutBtn) center center/cover no-repeat}.o23Zw.FsujJ .jkabZ{background:var(--cashoutBtnFrozen) center center/cover no-repeat}.o23Zw.FsujJ .jkabZ .j4oa1+div span,.o23Zw.FsujJ .jkabZ .j4oa1+div b{font:.875em "RubikBold","IranSans","MardotoBold",sans-serif;color:#408be6;text-shadow:-0.0625em -0.0625em 0 #fff,.0625em -0.0625em 0 #fff,-0.0625em .0625em 0 #fff,.0625em .0625em 0 #fff}.o23Zw:active{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}.o23Zw{-webkit-box:0;-moz-box:0;-webkit-flex:0 0 11.1em;-webkit-box-flex:0;-moz-box-flex:0;flex:0 0 11.1em;width:11.1em}[data-theme=winter] .o23Zw ::after{content:"";position:absolute;top:-0.25em;left:0;width:2.875em;height:1.25em;background:var(--cashoutSnow) no-repeat 0 0/100% 100%}.KaVgt.gAWmU .pO3v4{-webkit-animation:Z8mYb .6s linear forwards;-moz-animation:Z8mYb .6s linear forwards;animation:Z8mYb .6s linear forwards}.KaVgt.gAWmU .pO3v4 .fl5ur{-webkit-animation:B9qxv .6s linear forwards;-moz-animation:B9qxv .6s linear forwards;animation:B9qxv .6s linear forwards}.KaVgt.gAWmU .IiTYu{-webkit-animation:DiKkf .6s linear forwards;-moz-animation:DiKkf .6s linear forwards;animation:DiKkf .6s linear forwards}.KaVgt.rfaNl .pO3v4{animation:Z8mYb .6s linear forwards reverse}.KaVgt.rfaNl .pO3v4 .fl5ur{animation:B9qxv .6s linear forwards reverse}.KaVgt.rfaNl .IiTYu{animation:DiKkf .6s linear forwards reverse}', ""]), a.locals = {
                betPartContainer: "df2us",
                betPart: "Rn1q6",
                betInput: "IsN5Z",
                allInBtn: "V7_kn",
                doubleBtn: "un4K2",
                betPart__inner: "fl5ur",
                betPart__leftBock: "BIxYo",
                betPart__leftBock_inner: "pO3v4",
                showCashout: "gAWmU",
                hideCashout: "rfaNl",
                betInput__field: "Oarr4",
                quickBetButton: "GISE4",
                quickBetText: "vwc9L",
                betCashoutBtnsBlock: "xeNdr",
                betCashoutBtnsBlockInner: "IiTYu",
                betBtn: "KhBsq",
                betBtn_Txt: "bQnft",
                linesBackgroundLayer: "pdqnb",
                betBtnLinesAnimation: "Zf6_7",
                halfButton: "xnZY6",
                cashoutBtn: "o23Zw",
                cashoutBtnInner: "jkabZ",
                cashoutTxt: "j4oa1",
                frozen: "FsujJ",
                animationOn: "KaVgt",
                heightAnimation: "Z8mYb",
                betPartAnimationMob: "B9qxv",
                betCashoutBtnsAnimationMob: "DiKkf",
                betPartAnimation: "vVuev"
            };
            const s = a
        },
        7095: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '@-webkit-keyframes DnWca{0%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}25%{-webkit-transform:translate(-50%, -50%) scale(1.1);transform:translate(-50%, -50%) scale(1.1)}50%{-webkit-transform:translate(-50%, -50%) scale(0.94);transform:translate(-50%, -50%) scale(0.94)}75%{-webkit-transform:translate(-50%, -50%) scale(1.02);transform:translate(-50%, -50%) scale(1.02)}100%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}}@-moz-keyframes DnWca{0%{-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}25%{-moz-transform:translate(-50%, -50%) scale(1.1);transform:translate(-50%, -50%) scale(1.1)}50%{-moz-transform:translate(-50%, -50%) scale(0.94);transform:translate(-50%, -50%) scale(0.94)}75%{-moz-transform:translate(-50%, -50%) scale(1.02);transform:translate(-50%, -50%) scale(1.02)}100%{-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}}@keyframes DnWca{0%{-webkit-transform:translate(-50%, -50%) scale(0);-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}25%{-webkit-transform:translate(-50%, -50%) scale(1.1);-moz-transform:translate(-50%, -50%) scale(1.1);transform:translate(-50%, -50%) scale(1.1)}50%{-webkit-transform:translate(-50%, -50%) scale(0.94);-moz-transform:translate(-50%, -50%) scale(0.94);transform:translate(-50%, -50%) scale(0.94)}75%{-webkit-transform:translate(-50%, -50%) scale(1.02);-moz-transform:translate(-50%, -50%) scale(1.02);transform:translate(-50%, -50%) scale(1.02)}100%{-webkit-transform:translate(-50%, -50%) scale(1);-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}}@-webkit-keyframes gFWTB{0%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}25%{-webkit-transform:translate(-50%, -50%) scale(1.25);transform:translate(-50%, -50%) scale(1.25)}100%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}}@-moz-keyframes gFWTB{0%{-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}25%{-moz-transform:translate(-50%, -50%) scale(1.25);transform:translate(-50%, -50%) scale(1.25)}100%{-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}}@keyframes gFWTB{0%{-webkit-transform:translate(-50%, -50%) scale(1);-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}25%{-webkit-transform:translate(-50%, -50%) scale(1.25);-moz-transform:translate(-50%, -50%) scale(1.25);transform:translate(-50%, -50%) scale(1.25)}100%{-webkit-transform:translate(-50%, -50%) scale(0);-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}}@-webkit-keyframes LbKDy{0%,20%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.1);transform:scale(1.1)}60%{-webkit-transform:scale(0.95);transform:scale(0.95)}80%{-webkit-transform:scale(1.02);transform:scale(1.02)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes LbKDy{0%,20%{-moz-transform:scale(0);transform:scale(0)}40%{-moz-transform:scale(1.1);transform:scale(1.1)}60%{-moz-transform:scale(0.95);transform:scale(0.95)}80%{-moz-transform:scale(1.02);transform:scale(1.02)}100%{-moz-transform:scale(1);transform:scale(1)}}@keyframes LbKDy{0%,20%{-webkit-transform:scale(0);-moz-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);transform:scale(1.1)}60%{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);transform:scale(0.95)}80%{-webkit-transform:scale(1.02);-moz-transform:scale(1.02);transform:scale(1.02)}100%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}.XvZGH{position:fixed;top:30em;left:50%;z-index:15;-webkit-transform:translate(-50%, -50%) scale(1);-moz-transform:translate(-50%, -50%) scale(1);-ms-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;justify-content:flex-end;text-align:center;color:#fff;border-radius:1em;width:42em;height:26.375em;padding:12em 3.75em 3.75em;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;border:1px solid #fbbb3b;background:var(--bigWinPopupBG) no-repeat center 10.3em/42em 8em,-webkit-radial-gradient(50% 0%, 100% 100%, #5f4a3a 0%, #2b211a 52.6%, #000 100%);background:var(--bigWinPopupBG) no-repeat center 10.3em/42em 8em,-moz-radial-gradient(50% 0%, 100% 100%, #5f4a3a 0%, #2b211a 52.6%, #000 100%);background:var(--bigWinPopupBG) no-repeat center 10.3em/42em 8em,radial-gradient(100% 100% at 50% 0%, #5f4a3a 0%, #2b211a 52.6%, #000 100%);-webkit-animation:DnWca .76s cubic-bezier(0.36, -0.01, 0.42, 1.01) forwards,gFWTB .4s cubic-bezier(0.36, -0.01, 0.42, 1.01) 1.5s forwards;-moz-animation:DnWca .76s cubic-bezier(0.36, -0.01, 0.42, 1.01) forwards,gFWTB .4s cubic-bezier(0.36, -0.01, 0.42, 1.01) 1.5s forwards;animation:DnWca .76s cubic-bezier(0.36, -0.01, 0.42, 1.01) forwards,gFWTB .4s cubic-bezier(0.36, -0.01, 0.42, 1.01) 1.5s forwards}.muPEn{position:absolute;top:-7.6875em;width:35.375em;height:15.375em;background:var(--bigWinBg) no-repeat center center/contain}.UVj0Q{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:35.375em;height:15.375em;background:var(--bigWinPopupSprite) no-repeat 0 0/389.125em 46.125em;-webkit-animation:Izdjx .5s steps(11) infinite,mrs2U 1.5s steps(3) infinite;-moz-animation:Izdjx .5s steps(11) infinite,mrs2U 1.5s steps(3) infinite;animation:Izdjx .5s steps(11) infinite,mrs2U 1.5s steps(3) infinite}@-webkit-keyframes Izdjx{from{background-position-x:0}to{background-position-x:-389.125em}}@-moz-keyframes Izdjx{from{background-position-x:0}to{background-position-x:-389.125em}}@keyframes Izdjx{from{background-position-x:0}to{background-position-x:-389.125em}}@-webkit-keyframes mrs2U{from{background-position-y:0}to{background-position-y:-46.125em}}@-moz-keyframes mrs2U{from{background-position-y:0}to{background-position-y:-46.125em}}@keyframes mrs2U{from{background-position-y:0}to{background-position-y:-46.125em}}.I9F91{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;justify-content:flex-end}.I9F91 .aQbcu{margin-bottom:.75em;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);-moz-animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01)}.I9F91 .aQbcu span{font:1.5em "RubikRegular","IranSans","MardotoRegular",sans-serif}.I9F91 .BajYV{text-transform:uppercase;margin-bottom:.75em;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);-moz-animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01)}.I9F91 .BajYV span{font:2.5em "RubikBold","IranSans","MardotoBold",sans-serif}.I9F91 .Tgf9Q{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:relative;text-transform:uppercase;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);-moz-animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);animation:LbKDy .76s cubic-bezier(0.36, -0.01, 0.42, 1.01)}.I9F91 .Tgf9Q span,.I9F91 .Tgf9Q b{font:4em "RubikMedium","IranSans","MardotoMedium",sans-serif;letter-spacing:.64px}.I9F91 .Tgf9Q span{-webkit-margin-end:.12em;-moz-margin-end:.12em;margin-inline-end:.12em}.I9F91 .Tgf9Q b{padding:0}', ""]), a.locals = {
                container: "XvZGH",
                winPopup: "DnWca",
                winPopupFade: "gFWTB",
                imageBox: "muPEn",
                imageBox__sprite: "UVj0Q",
                animatedPosX: "Izdjx",
                animatedPosY: "mrs2U",
                popupInner: "I9F91",
                title: "aQbcu",
                textScaleUp: "LbKDy",
                title__sm: "BajYV",
                winAmount: "Tgf9Q"
            };
            const s = a
        },
        9887: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '@-webkit-keyframes FK4Bp{0%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}25%{-webkit-transform:translate(-50%, -50%) scale(1.1);transform:translate(-50%, -50%) scale(1.1)}50%{-webkit-transform:translate(-50%, -50%) scale(0.94);transform:translate(-50%, -50%) scale(0.94)}75%{-webkit-transform:translate(-50%, -50%) scale(1.02);transform:translate(-50%, -50%) scale(1.02)}100%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}}@-moz-keyframes FK4Bp{0%{-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}25%{-moz-transform:translate(-50%, -50%) scale(1.1);transform:translate(-50%, -50%) scale(1.1)}50%{-moz-transform:translate(-50%, -50%) scale(0.94);transform:translate(-50%, -50%) scale(0.94)}75%{-moz-transform:translate(-50%, -50%) scale(1.02);transform:translate(-50%, -50%) scale(1.02)}100%{-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}}@keyframes FK4Bp{0%{-webkit-transform:translate(-50%, -50%) scale(0);-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}25%{-webkit-transform:translate(-50%, -50%) scale(1.1);-moz-transform:translate(-50%, -50%) scale(1.1);transform:translate(-50%, -50%) scale(1.1)}50%{-webkit-transform:translate(-50%, -50%) scale(0.94);-moz-transform:translate(-50%, -50%) scale(0.94);transform:translate(-50%, -50%) scale(0.94)}75%{-webkit-transform:translate(-50%, -50%) scale(1.02);-moz-transform:translate(-50%, -50%) scale(1.02);transform:translate(-50%, -50%) scale(1.02)}100%{-webkit-transform:translate(-50%, -50%) scale(1);-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}}@-webkit-keyframes OSg_8{0%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}25%{-webkit-transform:translate(-50%, -50%) scale(1.25);transform:translate(-50%, -50%) scale(1.25)}100%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}}@-moz-keyframes OSg_8{0%{-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}25%{-moz-transform:translate(-50%, -50%) scale(1.25);transform:translate(-50%, -50%) scale(1.25)}100%{-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}}@keyframes OSg_8{0%{-webkit-transform:translate(-50%, -50%) scale(1);-moz-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}25%{-webkit-transform:translate(-50%, -50%) scale(1.25);-moz-transform:translate(-50%, -50%) scale(1.25);transform:translate(-50%, -50%) scale(1.25)}100%{-webkit-transform:translate(-50%, -50%) scale(0);-moz-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0)}}@-webkit-keyframes vDC1S{0%,20%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.1);transform:scale(1.1)}60%{-webkit-transform:scale(0.95);transform:scale(0.95)}80%{-webkit-transform:scale(1.02);transform:scale(1.02)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes vDC1S{0%,20%{-moz-transform:scale(0);transform:scale(0)}40%{-moz-transform:scale(1.1);transform:scale(1.1)}60%{-moz-transform:scale(0.95);transform:scale(0.95)}80%{-moz-transform:scale(1.02);transform:scale(1.02)}100%{-moz-transform:scale(1);transform:scale(1)}}@keyframes vDC1S{0%,20%{-webkit-transform:scale(0);-moz-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);transform:scale(1.1)}60%{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);transform:scale(0.95)}80%{-webkit-transform:scale(1.02);-moz-transform:scale(1.02);transform:scale(1.02)}100%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}.AirBt{position:fixed;top:50%;left:50%;z-index:15;-webkit-transform:translate(-50%, -50%) scale(1);-moz-transform:translate(-50%, -50%) scale(1);-ms-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;justify-content:flex-end;text-align:center;color:#fff;border-radius:1em;width:21.375em;height:15.625em;padding:6em 2.625em 2.625em;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;border:1px solid #fbbb3b;background:var(--bigWinPopupBG) no-repeat center 5.9em/21.375em 5.25em,-webkit-radial-gradient(50% 0%, 100% 100%, #5f4a3a 0%, #2b211a 52.6%, #000 100%);background:var(--bigWinPopupBG) no-repeat center 5.9em/21.375em 5.25em,-moz-radial-gradient(50% 0%, 100% 100%, #5f4a3a 0%, #2b211a 52.6%, #000 100%);background:var(--bigWinPopupBG) no-repeat center 5.9em/21.375em 5.25em,radial-gradient(100% 100% at 50% 0%, #5f4a3a 0%, #2b211a 52.6%, #000 100%);-webkit-animation:FK4Bp .76s cubic-bezier(0.36, -0.01, 0.42, 1.01) forwards,OSg_8 .4s cubic-bezier(0.36, -0.01, 0.42, 1.01) 1.5s forwards;-moz-animation:FK4Bp .76s cubic-bezier(0.36, -0.01, 0.42, 1.01) forwards,OSg_8 .4s cubic-bezier(0.36, -0.01, 0.42, 1.01) 1.5s forwards;animation:FK4Bp .76s cubic-bezier(0.36, -0.01, 0.42, 1.01) forwards,OSg_8 .4s cubic-bezier(0.36, -0.01, 0.42, 1.01) 1.5s forwards}.nqleE{position:absolute;top:-4.71em;width:17.375em;height:9.4375em;background:var(--bigWinBg) no-repeat center center/contain}.m4OPr{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:17.375em;height:9.4375em;background:var(--bigWinPopupSprite) no-repeat 0 0/191.125em 28.3125em;-webkit-animation:Ksyx2 .5s steps(11) infinite,OA8wq 1.5s steps(3) infinite;-moz-animation:Ksyx2 .5s steps(11) infinite,OA8wq 1.5s steps(3) infinite;animation:Ksyx2 .5s steps(11) infinite,OA8wq 1.5s steps(3) infinite}@-webkit-keyframes Ksyx2{from{background-position-x:0}to{background-position-x:-191.125em}}@-moz-keyframes Ksyx2{from{background-position-x:0}to{background-position-x:-191.125em}}@keyframes Ksyx2{from{background-position-x:0}to{background-position-x:-191.125em}}@-webkit-keyframes OA8wq{from{background-position-y:0}to{background-position-y:-28.3125em}}@-moz-keyframes OA8wq{from{background-position-y:0}to{background-position-y:-28.3125em}}@keyframes OA8wq{from{background-position-y:0}to{background-position-y:-28.3125em}}.kxKlI{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;justify-content:flex-end}.kxKlI .VPSYk{margin-bottom:.5em;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);-moz-animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01)}.kxKlI .VPSYk span{font:.875em "RubikRegular","IranSans","MardotoRegular",sans-serif}.kxKlI .Ggau4{text-transform:uppercase;margin-bottom:.5em;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);-moz-animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01)}.kxKlI .Ggau4 span{font:1.5em "RubikBold","IranSans","MardotoBold",sans-serif}.kxKlI .xxQXG{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:relative;text-transform:uppercase;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);-moz-animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01);animation:vDC1S .76s cubic-bezier(0.36, -0.01, 0.42, 1.01)}.kxKlI .xxQXG span,.kxKlI .xxQXG b{font:2em "RubikMedium","IranSans","MardotoMedium",sans-serif;letter-spacing:.64px}.kxKlI .xxQXG span{-webkit-margin-end:.12em;-moz-margin-end:.12em;margin-inline-end:.12em}.kxKlI .xxQXG b{padding:0}', ""]), a.locals = {
                container: "AirBt",
                winPopup: "FK4Bp",
                winPopupFade: "OSg_8",
                imageBox: "nqleE",
                imageBox__sprite: "m4OPr",
                animatedPosX: "Ksyx2",
                animatedPosY: "OA8wq",
                popupInner: "kxKlI",
                title: "VPSYk",
                textScaleUp: "vDC1S",
                title__sm: "Ggau4",
                winAmount: "xxQXG"
            };
            const s = a
        },
        4680: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".racZU{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:absolute;top:1em;right:1em}.g477P{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:2em;height:2em;border-radius:50%;border:0 none;outline:0 none;background:-webkit-gradient(linear, left top, left bottom, from(#fff), to(#0086b0));background:-webkit-linear-gradient(top, #fff 0%, #0086b0 100%);background:-moz-linear-gradient(top, #fff 0%, #0086b0 100%);background:linear-gradient(180deg, #fff 0%, #0086b0 100%);padding:1px;font-size:1em;color:#fff;text-align:center;cursor:pointer}.N5pgx{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border-radius:50%;background:-webkit-radial-gradient(50% 0%, 100% 100%, #92d0de 11.46%, #0086b0 100%);background:-moz-radial-gradient(50% 0%, 100% 100%, #92d0de 11.46%, #0086b0 100%);background:radial-gradient(100% 100% at 50% 0%, #92d0de 11.46%, #0086b0 100%);padding:.35em}", ""]), a.locals = {
                iconsToggleBox: "racZU",
                iconsToggleBoxButton: "g477P",
                buttonInner: "N5pgx"
            };
            const s = a
        },
        66: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".PBcEF{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;position:absolute;top:1em;right:.875em}.bkD3_{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:1.75em;height:1.75em;border-radius:50%;border:0 none;outline:0 none;background:-webkit-gradient(linear, left top, left bottom, from(#fff), to(#0086b0));background:-webkit-linear-gradient(top, #fff 0%, #0086b0 100%);background:-moz-linear-gradient(top, #fff 0%, #0086b0 100%);background:linear-gradient(180deg, #fff 0%, #0086b0 100%);padding:1px;font-size:1em;color:#fff;text-align:center;cursor:pointer;margin:0 .125em .25em .125em}.GIyFD{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border-radius:50%;background:-webkit-radial-gradient(50% 0%, 100% 100%, #92d0de 11.46%, #0086b0 100%);background:-moz-radial-gradient(50% 0%, 100% 100%, #92d0de 11.46%, #0086b0 100%);background:radial-gradient(100% 100% at 50% 0%, #92d0de 11.46%, #0086b0 100%);padding:.125em}.T1HR7{display:none;background:rgba(0,0,0,.4);border-radius:1em;padding:.125em}.PBcEF.jXLH0 .T1HR7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:cneter;-webkit-align-items:cneter;-moz-box-align:cneter;align-items:cneter}.nv3d4 button{width:1.75em;height:1.75em;background:hsla(0,0%,100%,.24);border-radius:50%;font-size:1em;border:none;padding:.25em}.nv3d4 button svg{fill:#fff}.nv3d4:not(:last-of-type){margin-bottom:.5em}.qWlNj{position:absolute;top:1em;left:1em;margin:0}", ""]), a.locals = {
                iconsToggleBox: "PBcEF",
                iconsToggleBoxButton: "bkD3_",
                buttonInner: "GIyFD",
                iconsToggleBoxInner: "T1HR7",
                open: "jXLH0",
                iconsItem: "nv3d4",
                chatBox: "qWlNj"
            };
            const s = a
        },
        6199: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.j_UeZ{position:absolute;top:0;left:0;z-index:18;height:100%;width:100%}.vPKXH{color:#fff;text-transform:uppercase;font:1.5em/1.25em "RubikBold","IranSans","MardotoBold",sans-serif;width:100%;margin-bottom:.375em}.FFJy8{font:1.125em/1.25em "RubikRegular","IranSans","MardotoRegular",sans-serif;color:hsla(0,0%,100%,.7);width:100%}._PucL{position:fixed;top:0;left:0;bottom:0;z-index:1;height:100%;width:100%;background:rgba(0,0,0,.8)}.Qthei{position:absolute;top:1em;right:1em;z-index:3;border:0 none;outline:0 none;background:rgba(0,0,0,0);padding:0;font-size:1em;color:#fff;text-align:center;cursor:pointer;width:1.875em;height:1.875em}.bbqWU{position:relative;z-index:2;width:67.5em;height:100%}.JyQD_{position:absolute;top:0;left:11.25em}.gZ_90{position:absolute;top:2em;left:14em;width:17.5em;height:18.875em;background:var(--boardItem) no-repeat 0 0/100% 100%}.IZtSr{position:absolute;top:18.5em;left:9em;width:5.125em;height:3.875em;background:var(--boardItemArrow) no-repeat 0 0/100% 100%}.lIO4U{position:absolute;top:24em;left:0;width:18em}.fivI4{position:absolute;top:12.5em;left:48em}.m85CS{position:absolute;top:5.5em;left:14em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.Kjbty{text-transform:capitalize;padding-bottom:.75em;text-align:center;color:#fff}.Kjbty span{font:.9375em "RubikRegular","IranSans","MardotoRegular",sans-serif}.wQE6o{width:3.625em;height:13em;background:var(--resultRow) no-repeat 0 0/100% 100%}.TG69M{position:absolute;top:6.5em;left:3.5em;width:8.875em;height:5.75em;background:var(--resultRowArrow) no-repeat 0 0/100% 100%}.sq54x{position:absolute;top:0;left:0;width:16.375em;text-align:start}', ""]), a.locals = {
                introPopup: "j_UeZ",
                introPopup__title: "vPKXH",
                introPopup__text: "FFJy8",
                introPopup__backdrop: "_PucL",
                introPopup__close: "Qthei",
                introPopup__content: "bbqWU",
                introPopup__boardItem: "JyQD_",
                introPopup__boardItem_image: "gZ_90",
                introPopup__boardItem_arrow: "IZtSr",
                introPopup__boardItem_textBlock: "lIO4U",
                introPopup__resultRow: "fivI4",
                introPopup__resultRow_main: "m85CS",
                introPopup__resultRow_title: "Kjbty",
                introPopup__resultRow_image: "wQE6o",
                introPopup__resultRow_arrow: "TG69M",
                introPopup__resultRow_textBlock: "sq54x"
            };
            const s = a
        },
        7327: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.RljG5{position:absolute;top:0;left:0;z-index:18;height:100%;width:100%}.yRMmr{color:#fff;text-transform:uppercase;font:1.125em/1.25em "RubikBold","IranSans","MardotoBold",sans-serif;width:100%;margin-bottom:.375em}.TPjj8{font:0.875em/1.25em "RubikRegular","IranSans","MardotoRegular",sans-serif;color:hsla(0,0%,100%,.7);width:100%}.k6o8y{position:fixed;top:0;left:0;bottom:0;z-index:1;height:100%;width:100%;background:rgba(0,0,0,.8)}.Qdafw{position:absolute;top:.75em;right:1em;z-index:3;border:0 none;outline:0 none;background:rgba(0,0,0,0);padding:0;font-size:1em;color:#fff;text-align:center;cursor:pointer;width:1.75em;height:1.75em}.WIWq5{position:relative;z-index:2;width:100%;height:100%}._MDcx{position:absolute;top:5.5em;left:3.25em}.YrHvX{position:absolute;top:0;left:4em;width:10.25em;height:12.75em;background:var(--boardItem) no-repeat 0 0/100% 100%}.RuhZz{position:absolute;top:14em;left:1em;width:3.5em;height:3.75em;background:var(--boardItemArrow) no-repeat 0 0/100% 100%}.mkhUr{position:absolute;top:18.5em;left:0;width:12.375em}.B_tFD{position:absolute;top:3.25em;left:8em}.ZuFGU{position:absolute;top:10.125em;left:11em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}._had1{text-transform:capitalize;padding-bottom:.75em;text-align:center;color:#fff}._had1 span{font:.9375em "RubikRegular","IranSans","MardotoRegular",sans-serif}.URtta{width:3.375em;height:10.25em;background:var(--resultRow) no-repeat 0 0/100% 100%}.tyKRP{position:absolute;top:4.5em;left:12.5em;width:1.75em;height:4.375em;background:var(--resultRowArrow) no-repeat 0 0/100% 100%}.FoBFC{position:absolute;top:0;left:0;width:12.5em;text-align:end}', ""]), a.locals = {
                introPopup: "RljG5",
                introPopup__title: "yRMmr",
                introPopup__text: "TPjj8",
                introPopup__backdrop: "k6o8y",
                introPopup__close: "Qdafw",
                introPopup__content: "WIWq5",
                introPopup__boardItem: "_MDcx",
                introPopup__boardItem_image: "YrHvX",
                introPopup__boardItem_arrow: "RuhZz",
                introPopup__boardItem_textBlock: "mkhUr",
                introPopup__resultRow: "B_tFD",
                introPopup__resultRow_main: "ZuFGU",
                introPopup__resultRow_title: "_had1",
                introPopup__resultRow_image: "URtta",
                introPopup__resultRow_arrow: "tyKRP",
                introPopup__resultRow_textBlock: "FoBFC"
            };
            const s = a
        },
        9138: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".LouH5{position:absolute;top:1em;left:1em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;width:10.6em;height:6.625em}", ""]), a.locals = {
                logoContainer: "LouH5"
            };
            const s = a
        },
        4466: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.iINq4{position:absolute;top:17.875em;right:.6875em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.bMySP{text-transform:capitalize;padding-bottom:.75em;text-align:center;height:2em}.bMySP span{font-size:.9375em}.u19ps{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;position:relative}.u19ps .sYmv4{position:absolute;top:0;right:.25em}.u19ps .Nm9u3{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.u19ps .Nm9u3 .Cbp8V{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;padding:0 .25em;max-height:13.125em;overflow-y:auto}.u19ps .Nm9u3 .Cbp8V::-webkit-scrollbar{width:.125em;height:.25em;margin-right:.5em}.u19ps .Nm9u3 .Cbp8V::-webkit-scrollbar-track-piece{background-color:hsla(0,0%,100%,.1)}.u19ps .Nm9u3 .Cbp8V::-webkit-scrollbar-thumb:vertical{height:.1875em;background:hsla(0,0%,100%,.05);border-radius:.1875em;margin-right:0}.u19ps .n4VT_ .C2Gzi{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:3.5625em;height:1.75em;border-radius:.375em;border:1px solid #ffd35c;background:rgba(251,176,59,.32);text-align:center;letter-spacing:.64px;margin-bottom:.5em}.u19ps .n4VT_ .C2Gzi span{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;line-height:normal;font:1em "RubikRegular","IranSans","MardotoRegular",sans-serif;letter-spacing:.64px}.u19ps .n4VT_ .C2Gzi.vmVx6{font-weight:500;border-color:#fff;background:var(--resultItemFrozen) no-repeat center center}.u19ps .n4VT_.svTsg{opacity:1;-webkit-animation:MgFb9 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s nJ72K .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);-moz-animation:MgFb9 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s nJ72K .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);animation:MgFb9 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s nJ72K .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99)}@-webkit-keyframes MgFb9{0%{-webkit-transform:translate(-7em, -1em);transform:translate(-7em, -1em)}100%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@-moz-keyframes MgFb9{0%{-moz-transform:translate(-7em, -1em);transform:translate(-7em, -1em)}100%{-moz-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes MgFb9{0%{-webkit-transform:translate(-7em, -1em);-moz-transform:translate(-7em, -1em);transform:translate(-7em, -1em)}100%{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);transform:translate(0, 0)}}@-webkit-keyframes nJ72K{0%{opacity:1}100%{opacity:0}}@-moz-keyframes nJ72K{0%{opacity:1}100%{opacity:0}}@keyframes nJ72K{0%{opacity:1}100%{opacity:0}}.u19ps .n4VT_.ISmiD{height:0;opacity:0;-webkit-animation:gTow8 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s Y0W4m .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);-moz-animation:gTow8 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s Y0W4m .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);animation:gTow8 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s Y0W4m .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99)}@-webkit-keyframes gTow8{0%{height:0}100%{height:2.25em}}@-moz-keyframes gTow8{0%{height:0}100%{height:2.25em}}@keyframes gTow8{0%{height:0}100%{height:2.25em}}@-webkit-keyframes Y0W4m{0%{opacity:0}100%{opacity:1}}@-moz-keyframes Y0W4m{0%{opacity:0}100%{opacity:1}}@keyframes Y0W4m{0%{opacity:0}100%{opacity:1}}', ""]), a.locals = {
                resultBoxContainer: "iINq4",
                title: "bMySP",
                resultBox: "u19ps",
                resultBoxHelper: "sYmv4",
                resultBoxMainBlock: "Nm9u3",
                resultBoxInner: "Cbp8V",
                resultItem: "n4VT_",
                resultItemInner: "C2Gzi",
                frozen: "vmVx6",
                outerAnimated: "svTsg",
                outerAniamation: "MgFb9",
                opacityAnimation1: "nJ72K",
                innerAnimated: "ISmiD",
                innerAniamation: "gTow8",
                opacityAnimation: "Y0W4m"
            };
            const s = a
        },
        1816: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.O5EEY{position:absolute;top:10.3125em;right:.25em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.DksZR{text-transform:capitalize;padding-bottom:.65em;text-align:center;height:1.625em}.DksZR span{font-size:.75em}.Vj1L_{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;position:relative}.Vj1L_ .tcorG{position:absolute;top:0;right:.25em}.Vj1L_ ._3d_0v{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.Vj1L_ ._3d_0v .jBuMz{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;padding:0 .25em;max-height:10.25em;overflow-y:auto}.Vj1L_ ._3d_0v .jBuMz::-webkit-scrollbar{width:.125em;height:.25em;margin-right:.5em}.Vj1L_ ._3d_0v .jBuMz::-webkit-scrollbar-track-piece{background-color:hsla(0,0%,100%,.1)}.Vj1L_ ._3d_0v .jBuMz::-webkit-scrollbar-thumb:vertical{height:.1875em;background:hsla(0,0%,100%,.05);border-radius:.1875em;margin-right:0}.Vj1L_ .Z27iK .Hjmjf{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:3.375em;height:1.5em;border-radius:.375em;border:1px solid #ffd35c;background:rgba(251,176,59,.32);text-align:center;letter-spacing:.64px;margin-bottom:.25em}.Vj1L_ .Z27iK .Hjmjf span{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;line-height:normal;font:.875em "RubikRegular","IranSans","MardotoRegular",sans-serif;letter-spacing:.64px}.Vj1L_ .Z27iK .Hjmjf._P37j{font-weight:500;border-color:#fff;background:var(--resultItemFrozen) no-repeat center center}.Vj1L_ .Z27iK.hjJXV{opacity:1;-webkit-animation:kArFO .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s KoAw9 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);-moz-animation:kArFO .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s KoAw9 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);animation:kArFO .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s KoAw9 .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99)}@-webkit-keyframes kArFO{0%{-webkit-transform:translate(-1em, -1em);transform:translate(-1em, -1em)}100%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@-moz-keyframes kArFO{0%{-moz-transform:translate(-1em, -1em);transform:translate(-1em, -1em)}100%{-moz-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes kArFO{0%{-webkit-transform:translate(-1em, -1em);-moz-transform:translate(-1em, -1em);transform:translate(-1em, -1em)}100%{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);transform:translate(0, 0)}}@-webkit-keyframes KoAw9{0%{opacity:1}100%{opacity:0}}@-moz-keyframes KoAw9{0%{opacity:1}100%{opacity:0}}@keyframes KoAw9{0%{opacity:1}100%{opacity:0}}.Vj1L_ .Z27iK.s01nI{height:0;opacity:0;-webkit-animation:q9fZD .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s yoPeP .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);-moz-animation:q9fZD .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s yoPeP .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99);animation:q9fZD .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99),.1s yoPeP .2s forwards cubic-bezier(0.05, 0.98, 1, 0.99)}@-webkit-keyframes q9fZD{0%{height:0}100%{height:1.75em}}@-moz-keyframes q9fZD{0%{height:0}100%{height:1.75em}}@keyframes q9fZD{0%{height:0}100%{height:1.75em}}@-webkit-keyframes yoPeP{0%{opacity:0}100%{opacity:1}}@-moz-keyframes yoPeP{0%{opacity:0}100%{opacity:1}}@keyframes yoPeP{0%{opacity:0}100%{opacity:1}}', ""]), a.locals = {
                resultBoxContainer: "O5EEY",
                title: "DksZR",
                resultBox: "Vj1L_",
                resultBoxHelper: "tcorG",
                resultBoxMainBlock: "_3d_0v",
                resultBoxInner: "jBuMz",
                resultItem: "Z27iK",
                resultItemInner: "Hjmjf",
                frozen: "_P37j",
                outerAnimated: "hjJXV",
                outerAniamation: "kArFO",
                opacityAnimation1: "KoAw9",
                innerAnimated: "s01nI",
                innerAniamation: "q9fZD",
                opacityAnimation: "yoPeP"
            };
            const s = a
        },
        1956: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".RSrZv{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:0 none;outline:0 none;background:rgba(0,0,0,.32);padding:.625em;font-size:1em;color:#fff;text-align:center;cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 2em;-moz-box-flex:0;flex:0 0 2em;fill:hsla(0,0%,100%,.7);border-radius:50%;width:2em;height:2em}", ""]), a.locals = {
                spinnerBtn: "RSrZv"
            };
            const s = a
        },
        6469: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".y1I4W{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:0 none;outline:0 none;background:rgba(0,0,0,.32);padding:.625em;font-size:1em;color:#fff;text-align:center;cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 2em;-moz-box-flex:0;flex:0 0 2em;fill:hsla(0,0%,100%,.7);border-radius:50%;width:2em;height:2em}", ""]), a.locals = {
                spinnerBtn: "y1I4W"
            };
            const s = a
        },
        785: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".X4H1U{height:100%;width:100%;position:fixed;top:0;left:0;z-index:4;padding:3.75em .5em 1em 1em;background:var(--tabsPopupBg)}.A1R9z{position:absolute;top:1em;right:1em;border:0 none;outline:0 none;background:rgba(0,0,0,0);padding:.125em;font-size:1em;color:#fff;text-align:center;cursor:pointer;width:1.75em;height:1.75em}", ""]), a.locals = {
                container: "X4H1U",
                closeBtn: "A1R9z"
            };
            const s = a
        },
        8994: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.rCZ0F{position:relative;display:inline-block}.rCZ0F .hutFT{border:0 none;outline:0 none;background:rgba(0,0,0,0);padding:0 .25em;font-size:1em;color:#fff;text-align:center;cursor:pointer;text-transform:capitalize;text-decoration:underline;word-break:keep-all}.rCZ0F .is7fB{position:absolute;top:-webkit-calc(100% + .4em);top:-moz-calc(100% + .4em);top:calc(100% + .4em);z-index:1;width:29em;border-radius:.5em;letter-spacing:.24px;line-height:1.4;padding:.5em;border:1px solid #4a4a4a;background:#1c1c1c}.rCZ0F .is7fB:before,.rCZ0F .is7fB:after{content:"";position:absolute;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);display:block;height:0;width:0;border-style:solid;border-top:.6em solid rgba(0,0,0,0);border-left:.5em solid rgba(0,0,0,0);border-right:.5em solid rgba(0,0,0,0);border-bottom-width:.7em}.rCZ0F .is7fB:before{border-bottom-color:#1c1c1c;top:-1.15em;z-index:1}.rCZ0F .is7fB:after{border-bottom-color:#4a4a4a;top:-1.25em}.rCZ0F .is7fB{left:50%;-webkit-transform:translate(-50%, 0.375em);-moz-transform:translate(-50%, 0.375em);-ms-transform:translate(-50%, 0.375em);transform:translate(-50%, 0.375em)}.O0wAk{display:inline-block}', ""]), a.locals = {
                tooltipContainer: "rCZ0F",
                tooltipButton: "hutFT",
                tooltipInner: "is7fB",
                item: "O0wAk"
            };
            const s = a
        },
        3774: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, '.gv2mK{position:relative;display:inline-block}.gv2mK .JzyB9{border:0 none;outline:0 none;background:rgba(0,0,0,0);padding:0 .25em;font-size:1em;color:#fff;text-align:center;cursor:pointer;text-transform:capitalize;text-decoration:underline;word-break:keep-all}.gv2mK .Os4Iu{position:absolute;top:-webkit-calc(100% + .4em);top:-moz-calc(100% + .4em);top:calc(100% + .4em);z-index:1;width:15em;border-radius:.5em;letter-spacing:.24px;line-height:1.4;padding:.5em;border:1px solid #4a4a4a;background:#1c1c1c}.gv2mK .Os4Iu:before,.gv2mK .Os4Iu:after{content:"";position:absolute;right:1em;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);display:block;height:0;width:0;border-style:solid;border-top:.35em solid rgba(0,0,0,0);border-left:.35em solid rgba(0,0,0,0);border-right:.35em solid rgba(0,0,0,0);border-bottom-width:.5em}.gv2mK .Os4Iu:before{border-bottom-color:#1c1c1c;top:-0.8em;z-index:1}.gv2mK .Os4Iu:after{border-bottom-color:#4a4a4a;top:-0.95em}.gv2mK .Os4Iu{-webkit-transform:translateY(0.375em);-moz-transform:translateY(0.375em);-ms-transform:translateY(0.375em);transform:translateY(0.375em);right:0}._6WBA{display:inline-block}', ""]), a.locals = {
                tooltipContainer: "gv2mK",
                tooltipButton: "JzyB9",
                tooltipInner: "Os4Iu",
                item: "_6WBA"
            };
            const s = a
        },
        2372: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".bJUnb{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;color:#fff;position:relative;overflow:hidden;-webkit-box:0;-moz-box:0;-webkit-flex:0 0 66.5em;-webkit-box-flex:0;-moz-box-flex:0;flex:0 0 66.5em;border:1px solid;border-color:hsla(0,0%,100%,.1) hsla(0,0%,100%,.2) hsla(0,0%,100%,.336);-webkit-border-image:initial;-moz-border-image:initial;-o-border-image:initial;border-image:initial;width:66.5em;margin-right:1em;height:50.625em;border-radius:1em}.bJUnb #xvkId canvas{border-radius:1em}", ""]), a.locals = {
                gameCenter: "bJUnb",
                "scene-app": "xvkId"
            };
            const s = a
        },
        1366: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".NmvYk{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;color:#fff;position:relative;overflow:hidden;height:-webkit-calc(100vh - 6.5em);height:-moz-calc(100vh - 6.5em);height:calc(100vh - 6.5em)}", ""]), a.locals = {
                gameCenter: "NmvYk"
            };
            const s = a
        },
        9173: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(8081),
                o = n.n(r),
                i = n(3645),
                a = n.n(i)()(o());
            a.push([e.id, ".kCS9h{height:100%;width:100%;padding:0;position:relative}.kCS9h canvas{position:absolute;top:0;width:100% !important;height:100% !important}.kCS9h canvas:nth-child(2){position:absolute;left:0;opacity:0}", ""]), a.locals = {
                sceneApp: "kCS9h"
            };
            const s = a
        },
        3645: e => {
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = "",
                            r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function(e, n, r, o, i) {
                    "string" == typeof e && (e = [
                        [null, e, void 0]
                    ]);
                    var a = {};
                    if (r)
                        for (var s = 0; s < this.length; s++) {
                            var l = this[s][0];
                            null != l && (a[l] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var u = [].concat(e[c]);
                        r && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
                    }
                }, t
            }
        },
        8081: e => {
            e.exports = function(e) {
                return e[1]
            }
        },
        745: (e, t, n) => {
            var r = n(1051);
            t.s = r.createRoot, r.hydrateRoot
        },
        5251: (e, t, n) => {
            var r = n(8416),
                o = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                a = Object.prototype.hasOwnProperty,
                s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, n) {
                var r, i = {},
                    c = null,
                    u = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) a.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
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
        5893: (e, t, n) => {
            e.exports = n(5251)
        },
        3379: e => {
            var t = [];

            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++)
                    if (t[r].identifier === e) {
                        n = r;
                        break
                    }
                return n
            }

            function r(e, r) {
                for (var i = {}, a = [], s = 0; s < e.length; s++) {
                    var l = e[s],
                        c = r.base ? l[0] + r.base : l[0],
                        u = i[c] || 0,
                        f = "".concat(c, " ").concat(u);
                    i[c] = u + 1;
                    var m = n(f),
                        d = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5]
                        };
                    if (-1 !== m) t[m].references++, t[m].updater(d);
                    else {
                        var b = o(d, r);
                        r.byIndex = s, t.splice(s, 0, {
                            identifier: f,
                            updater: b,
                            references: 1
                        })
                    }
                    a.push(f)
                }
                return a
            }

            function o(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                    function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                            n.update(e = t)
                        } else n.remove()
                    }
            }
            e.exports = function(e, o) {
                var i = r(e = e || [], o = o || {});
                return function(e) {
                    e = e || [];
                    for (var a = 0; a < i.length; a++) {
                        var s = n(i[a]);
                        t[s].references--
                    }
                    for (var l = r(e, o), c = 0; c < i.length; c++) {
                        var u = n(i[c]);
                        0 === t[u].references && (t[u].updater(), t.splice(u, 1))
                    }
                    i = l
                }
            }
        },
        569: e => {
            var t = {};
            e.exports = function(e, n) {
                var r = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        },
        9216: e => {
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        },
        3565: (e, t, n) => {
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        },
        7795: e => {
            e.exports = function(e) {
                if ("undefined" == typeof document) return {
                    update: function() {},
                    remove: function() {}
                };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        ! function(e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                            var i = n.sourceMap;
                            i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        },
        4589: e => {
            e.exports = function(e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
    }
]);