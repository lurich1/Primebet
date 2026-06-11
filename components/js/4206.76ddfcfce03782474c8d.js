/*! For license information please see 4206.76ddfcfce03782474c8d.js.LICENSE.txt */
"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [864, 915, 916, 1340, 2672, 4206, 4702, 6977, 9086, 9214, 9361, 9416, 9491], {
        94206(t, e, n) {
            n.r(e), n.d(e, {
                useActiveElement: () => r.default,
                useBetPart: () => h.default,
                useBonus: () => o.default,
                useCurrentSecond: () => g.default,
                useDidUpdate: () => S.default,
                useFontSize: () => i.default,
                useFontSizeV2: () => u.default,
                useFontSizeV3: () => I.default,
                useHostUrl: () => a.default,
                useNotification: () => l.default,
                useNumberInput: () => c.default,
                useNumberInputV2: () => f.default,
                useOrientationChange: () => E.default,
                useOutsideClick: () => A.default,
                useOutsideClickV2: () => O.default,
                useOutsideClickV3: () => w.default,
                usePopup: () => s.default,
                useSignalR: () => d.default,
                useSounds: () => y.default,
                useSoundsV2: () => m.default,
                useTabControls: () => p.default,
                useWindowSize: () => b.default,
                useWindowVisibility: () => v.default
            });
            var r = n(49416),
                o = n(21761),
                i = n(57546),
                u = n(49650),
                a = n(26977),
                l = n(5829),
                c = n(17817),
                f = n(31901),
                s = n(10864),
                d = n(80916),
                y = n(29086),
                m = n(64702),
                b = n(75359),
                v = n(81742),
                p = n(99491),
                h = n(35356),
                g = n(50291),
                S = n(29214),
                A = n(84079),
                O = n(90915),
                w = n(41340),
                E = n(18512),
                I = n(25801)
        },
        49416(t, e, n) {
            n.r(e), n.d(e, {
                default: () => i
            });
            var r = n(98283);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            const i = function() {
                var t, e, n = (t = (0, r.useState)(document.activeElement), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return o(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = n[0],
                    u = n[1],
                    a = function() {
                        u(document.activeElement)
                    };
                return (0, r.useEffect)(function() {
                    return document.addEventListener("focusin", a),
                        function() {
                            document.removeEventListener("focusin", a)
                        }
                }, []), i
            }
        },
        35356(t, e, n) {
            n.r(e), n.d(e, {
                default: () => c
            });
            var r = n(98283),
                o = n(76653),
                i = n(79555),
                u = n(17817),
                a = n(24659);

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            const c = function(t) {
                var e, n, c = t.win,
                    f = t.enabled,
                    s = t.selected,
                    d = t.initialBet,
                    y = t.isPopupOpen,
                    m = t.strBetAmount,
                    b = t.cancelAutoBet,
                    v = t.betPartData,
                    p = void 0 === v ? {} : v,
                    h = t.openPopup,
                    g = void 0 === h ? function() {} : h,
                    S = t.playSound,
                    A = void 0 === S ? function() {} : S,
                    O = t.sendTicket,
                    w = void 0 === O ? function() {} : O,
                    E = (0, o.useDispatch)(),
                    I = p.pressed,
                    P = p.defaultBet,
                    _ = p.minBet,
                    B = p.maxBet,
                    C = p.precision,
                    T = p.balance,
                    j = p.autoBetCount,
                    L = (e = (0, u.default)(d, 2), n = 4, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(e, n) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return l(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    N = L[0],
                    U = L[1],
                    M = L[2],
                    k = L[3];
                (0, r.useEffect)(function() {
                    c && (c.bonusType > 0 ? A("bonusWin") : A("win"))
                }, [c]), (0, r.useEffect)(function() {
                    U(P || _)
                }, [_, P]), (0, r.useEffect)(function() {
                    f && (null == s ? void 0 : s.type.toLowerCase()) === a.BonusTypes.FreeBet && U(s.bet)
                }, [f, s]);
                var D = function(t) {
                        if ((null == s ? void 0 : s.type) !== a.BonusTypes.FreeBet) {
                            var e = t.currentTarget.dataset.quickbet,
                                n = (0, i.sumWithPrecision)(+(0, i.toNumberString)(N), +e, C);
                            U(n >= B ? B : n)
                        }
                    },
                    H = function() {
                        var t = Number((0, i.toNumberString)(N));
                        U(2 * t <= B ? 2 * t : B)
                    },
                    R = function() {
                        if (!f || s.type !== a.BonusTypes.FreeBet)
                            if (f && s.type === a.BonusTypes.FreeAmount) {
                                var t = s.remainingBet;
                                U(t >= B ? B : t)
                            } else U(T <= B ? T : B)
                    },
                    F = function() {
                        E(g({
                            name: a.BASE_POPUP_NAMES.KEYBOARD,
                            args: {
                                title: m,
                                getter: N,
                                setter: U,
                                config: {
                                    extended: !0,
                                    dot: !0
                                }
                            }
                        }))
                    },
                    Y = function() {
                        U(function(t) {
                            var e = (0, i.subtractWithPrecision)(+(0, i.toNumberString)(t), _, C),
                                n = e < _ ? _ : e;
                            return (0, i.numberToSpacedStringLocal)(n, 2)
                        })
                    },
                    G = function() {
                        U(function(t) {
                            var e = (0, i.sumWithPrecision)(+(0, i.toNumberString)(t), _, C),
                                n = e > B ? B : e;
                            return (0, i.numberToSpacedStringLocal)(n, 2)
                        })
                    },
                    W = function() {
                        y || E(g({
                            name: "AutoBet"
                        }))
                    },
                    x = function() {
                        T - N < 0 && b(), I || w({
                            bet: +(0, i.toNumberString)(N || 0)
                        })
                    };
                return (0, r.useMemo)(function() {
                    return [N, R, k, W, Y, G, D, F, H, M, x]
                }, [N, f, s, d, y, p, j])
            }
        },
        21761(t, e, n) {
            n.r(e), n.d(e, {
                default: () => S
            });
            var r = n(98283),
                o = n(41783);

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || a(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                if (t) {
                    if ("string" == typeof t) return l(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function s(t, e, n) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != i(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == i(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var d = "ENABLED",
                y = "TOGGLE_DISABLE_SWITCHER",
                m = "CLEAN_AND_ADD",
                b = "REMOVE_EMPTY",
                v = "CLEAN",
                p = "UPDATE",
                h = function(t, e) {
                    switch (e.type) {
                        case d:
                            return f(f({}, t), {}, {
                                enabled: e.payload.enabled,
                                selected: e.payload.enabled ? t.list[0] : null
                            });
                        case "ADD":
                            var n = e.payload;
                            return t.list.forEach(function(t) {
                                n = n.filter(function(e) {
                                    return t.id !== e.id
                                })
                            }), f(f({}, t), {}, {
                                list: [].concat(u(t.list), u(n))
                            });
                        case y:
                            return f(f({}, t), {}, {
                                disabledSwitcher: e.payload
                            });
                        case m:
                            return f(f({}, t), {}, {
                                selected: t.enabled ? e.payload[0] : null,
                                list: u(e.payload)
                            });
                        case b:
                            return f(f({}, t), {}, {
                                list: t.list.filter(function(t) {
                                    return t.remainingBet > 0 && "freeamount" === t.type.toLowerCase() || t.remainingCount > 0 && "freebet" === t.type.toLowerCase()
                                })
                            });
                        case v:
                            return f(f({}, t), {}, {
                                list: []
                            });
                        case p:
                            var r = e.payload,
                                o = r.remainingBet,
                                i = r.remainingCount,
                                a = r.addBet,
                                l = r.addCount,
                                c = t.selected,
                                s = t.list.map(function(t, e) {
                                    return (c && t.id === c.id || 0 === e) && ("number" == typeof o && (t = f(f({}, t), {}, {
                                        remainingBet: o
                                    })), "number" == typeof i && (t = f(f({}, t), {}, {
                                        remainingCount: i
                                    })), "number" == typeof a && (t = f(f({}, t), {}, {
                                        remainingBet: t.remainingBet + a
                                    })), "number" == typeof l && (t = f(f({}, t), {}, {
                                        remainingCount: t.remainingCount + l
                                    }))), t
                                });
                            return s.filter(function(t) {
                                return t.remainingBet >= 0 && "freeamount" === t.type.toLowerCase() || t.remainingCount >= 0 && "freebet" === t.type.toLowerCase()
                            }), f(f({}, t), {}, {
                                list: s,
                                selected: s[0] || null
                            })
                    }
                },
                g = {
                    enabled: null,
                    disabledSwitcher: !1,
                    selected: null,
                    list: []
                };
            const S = function() {
                var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        localStorageEnabled: !0,
                        name: ""
                    },
                    i = n.localStorageEnabled,
                    u = n.name,
                    l = (t = (0, r.useReducer)(h, g), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || a(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    c = l[0],
                    f = l[1];
                (0, r.useEffect)(function() {
                    if (c.list.length > 0) {
                        var t = !!i && o.default && "true" === o.default.getItem("useBonus_hook_enabled_".concat(u.toLowerCase()));
                        s(t)
                    }
                }, [c.list.length]), (0, r.useEffect)(function() {
                    0 === c.list.length && c.enabled && s(!1)
                }, [c.list]);
                var s = (0, r.useCallback)(function(t) {
                        i && o.default && o.default.setItem("useBonus_hook_enabled_".concat(u.toLowerCase()), t), f({
                            type: d,
                            payload: {
                                enabled: t
                            }
                        })
                    }, [c]),
                    S = (0, r.useCallback)(function() {
                        f({
                            type: "ADD",
                            payload: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                        })
                    }, []),
                    A = (0, r.useCallback)(function(t) {
                        f({
                            type: y,
                            payload: t
                        })
                    }, []),
                    O = (0, r.useCallback)(function() {
                        f({
                            type: m,
                            payload: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                        })
                    }, []),
                    w = (0, r.useCallback)(function() {
                        f({
                            type: p,
                            payload: {
                                remainingCount: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                addCount: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                            }
                        })
                    }, []),
                    E = (0, r.useCallback)(function() {
                        f({
                            type: p,
                            payload: {
                                remainingBet: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                addBet: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                            }
                        })
                    }, []),
                    I = (0, r.useCallback)(function() {
                        f({
                            type: v
                        })
                    }, []),
                    P = (0, r.useCallback)(function() {
                        f({
                            type: b
                        })
                    }, []);
                return (0, r.useMemo)(function() {
                    return {
                        bonuses: c,
                        toggleDisableSwitcher: A,
                        setBonusEnabled: s,
                        addBonus: S,
                        cleanAndFillBonus: O,
                        cleanBonus: I,
                        updateFreeBet: w,
                        updateFreeAmount: E,
                        removeEmptyBonus: P
                    }
                }, [c])
            }
        },
        50291(t, e, n) {
            n.r(e), n.d(e, {
                default: () => i
            });
            var r = n(98283);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t) {
                var e, n, i = (e = (0, r.useState)(t), n = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(e, n) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return o(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = i[0],
                    a = i[1];
                return (0, r.useEffect)(function() {
                    a(t)
                }, [t]), (0, r.useEffect)(function() {
                    var t = Date.now(),
                        e = setTimeout(function() {
                            var e = Date.now() - t;
                            u > 0 && a(u - e / 1e3)
                        }, 1e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }, [u]), Math.round(u) || 0
            }
        },
        29214(t, e, n) {
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(98283);

            function o(t, e) {
                var n = (0, r.useRef)(!1);
                (0, r.useEffect)(function() {
                    if (n.current) return t();
                    n.current = !0
                }, e)
            }
        },
        57546(t, e, n) {
            n.r(e), n.d(e, {
                default: () => s
            });
            var r = n(98283),
                o = n(45041),
                i = n(79555);

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var a = (0, i.getIsMobile)(),
                l = (0, i.getParamsFromUrl)().mode,
                c = a ? 375 : "2" === l ? 1480 : 1920,
                f = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            function s() {
                var t, e, n = a && "999" !== l && window.screen.width >= 481,
                    i = (t = (0, r.useState)({}), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return u(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    s = i[0],
                    d = i[1],
                    y = function() {
                        setTimeout(function() {
                            var t, e = f ? window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight : window.innerWidth,
                                r = window.innerHeight,
                                i = !a && o.A.isFullscreen ? 20 : 16,
                                u = i * e / c,
                                l = i * r / 830;
                            t = a || l > u ? u : l, d({
                                fontSize: a ? t : Math.round(10 * t) / 10,
                                windowWidth: a ? n ? 768 : 375 : 1920
                            })
                        }, 100)
                    };
                return (0, r.useEffect)(function() {
                    return y(), window.addEventListener("resize", y),
                        function() {
                            return window.removeEventListener("resize", y)
                        }
                }, []), s
            }
        },
        49650(t, e, n) {
            n.r(e), n.d(e, {
                default: () => s
            });
            var r = n(98283),
                o = n(45041),
                i = n(79555);

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var a = (0, i.getIsMobile)(),
                l = (0, i.getParamsFromUrl)().mode,
                c = a ? 375 : "2" === l ? 1480 : 1920,
                f = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            function s() {
                var t, e, n = (t = (0, r.useState)(null), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return u(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = n[0],
                    l = n[1],
                    s = function() {
                        setTimeout(function() {
                            var t, e = f ? window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight : window.innerWidth,
                                n = window.innerHeight,
                                r = !a && o.A.isFullscreen ? 20 : 16,
                                i = r * e / c,
                                u = r * n / 830;
                            t = a || u > i ? i : u, l(a ? t : Math.round(10 * t) / 10)
                        }, 100)
                    };
                return (0, r.useEffect)(function() {
                    return s(), window.addEventListener("resize", s),
                        function() {
                            return window.removeEventListener("resize", s)
                        }
                }, []), i
            }
        },
        25801(t, e, n) {
            n.r(e), n.d(e, {
                default: () => c
            });
            var r = n(98283),
                o = n(79555);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = (0, o.getIsMobile)(),
                a = (0, o.getParamsFromUrl)().mode,
                l = u ? 375 : "2" === a ? 1480 : 1920;

            function c() {
                var t, e, n = function() {
                        var t = window,
                            e = t.innerWidth,
                            n = t.innerHeight,
                            r = 16 * (u ? e < n ? e : n : e) / l,
                            o = 16 * n / 830,
                            i = u || o > r ? r : o;
                        return u ? i : Math.round(10 * i) / 10
                    },
                    o = (t = (0, r.useState)(n()), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return i(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    a = o[0],
                    c = o[1],
                    f = function() {
                        return c(n())
                    };
                return (0, r.useEffect)(function() {
                    return f(), window.addEventListener("resize", f),
                        function() {
                            return window.removeEventListener("resize", f)
                        }
                }, []), a
            }
        },
        26977(t, e, n) {
            function r(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.location.protocol,
                    r = "".concat(n, "//").concat(e);
                return [r, "".concat(r, "/").concat(t)]
            }
            n.r(e), n.d(e, {
                default: () => r
            })
        },
        5829(t, e, n) {
            n.r(e), n.d(e, {
                default: () => a
            });
            var r = n(98283);

            function o(t, e) {
                if (t) {
                    if ("string" == typeof t) return i(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                }
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = (0, n(79555).getIsMobile)();
            const a = function() {
                var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u ? 2 : 5,
                    l = (t = (0, r.useState)([]), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || o(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    c = l[0],
                    f = l[1],
                    s = (0, r.useCallback)(function(t) {
                        var e = t.message,
                            r = t.status,
                            u = Math.round(Math.random() * Math.random() * 1e4);
                        f(function(t) {
                            return t.length < a ? [{
                                guid: u,
                                message: e,
                                status: r
                            }].concat(function(t) {
                                return function(t) {
                                    if (Array.isArray(t)) return i(t)
                                }(t) || function(t) {
                                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                }(t) || o(t) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(t)) : t
                        }), setTimeout(d.bind(null, u), 1e3 * n)
                    }, []),
                    d = (0, r.useCallback)(function(t) {
                        f(function(e) {
                            return e.filter(function(e) {
                                return e.guid !== t
                            })
                        })
                    }, []);
                return (0, r.useMemo)(function() {
                    return [c, s, d]
                }, [c])
            }
        },
        17817(t, e, n) {
            n.r(e), n.d(e, {
                default: () => a
            });
            var r = n(98283),
                o = n(79555);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i, u, a = [],
                            l = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function a() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    u = i((0, r.useState)(t), 2),
                    a = u[0],
                    l = u[1],
                    c = i((0, r.useState)(+t), 2),
                    f = c[0],
                    s = c[1],
                    d = function(t) {
                        l(function() {
                            return s(+(0, o.toNumberString)(t)), t
                        })
                    };
                (0, r.useEffect)(function() {
                    d(t)
                }, [t]);
                var y = (0, r.useCallback)(function(t) {
                        var r = t.target.value;
                        if (!(0, o.isValidInputForNumberInput)(t.keyCode) || Number.isNaN(+(0, o.toNumberString)(r))) return t.preventDefault();
                        if (n && +(0, o.toNumberString)(r) > n) return d(n), t.preventDefault();
                        var i = (0, o.validInputWithEveryCase)(t, e);
                        if (i) d(i);
                        else {
                            var u = r.split(".")[1];
                            u && !e ? (u = u.length > e ? u.slice(0, e) : u, d(+"".concat(Math.floor(r), ".").concat(u))) : d(r)
                        }
                    }, [t, e]),
                    m = (0, r.useCallback)(function(t) {
                        var e = t.target.value;
                        n && +(0, o.toNumberString)(e) > n ? d(n) : Number.isNaN(+(0, o.toNumberString)(e)) || d(e)
                    }, []);
                return [a, l, m, y, f]
            }
        },
        31901(t, e, n) {
            n.r(e), n.d(e, {
                default: () => u
            });
            var r = n(98283),
                o = n(79555);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function u(t) {
                var e, n, u = t.defaultValue,
                    a = void 0 === u ? 0 : u,
                    l = t.precision,
                    c = void 0 === l ? 0 : l,
                    f = t.maxValue,
                    s = t.maxCharLength,
                    d = (e = (0, r.useState)(a), n = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(e, n) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return i(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    y = d[0],
                    m = d[1],
                    b = function(t) {
                        m(t)
                    };
                (0, r.useEffect)(function() {
                    b(a)
                }, [a]);
                var v = (0, r.useCallback)(function(t) {
                        var e = t.target.value;
                        if (!(0, o.isValidInputForNumberInput)(t.keyCode) || Number.isNaN(+(0, o.toNumberString)(e))) return t.preventDefault();
                        if (f && +(0, o.toNumberString)(e) > f) return b(f), t.preventDefault();
                        var n = (0, o.validInputWithEveryCase)(t, c, s);
                        if (n) b(n);
                        else {
                            var r = e.split(".")[1];
                            r && !c ? (r = r.length > c ? r.slice(0, c) : r, b(+"".concat(Math.floor(e), ".").concat(r))) : b(e)
                        }
                    }, [a, c]),
                    p = (0, r.useCallback)(function(t) {
                        var e = t.target.value;
                        f && +(0, o.toNumberString)(e) > f ? b(f) : Number.isNaN(+(0, o.toNumberString)(e)) || b(e)
                    }, []);
                return {
                    value: y,
                    numberValue: +(0, o.toNumberString)(y),
                    setValue: m,
                    handleChange: p,
                    handleInput: v
                }
            }
        },
        18512(t, e, n) {
            n.r(e), n.d(e, {
                default: () => u
            });
            var r = n(98283),
                o = n(79555);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            const u = function() {
                var t, e, n = (t = (0, r.useState)((0, o.getIsPortraitOrientation)()), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return i(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = n[0],
                    a = n[1],
                    l = function(t) {
                        a(t.matches)
                    };
                return (0, r.useEffect)(function() {
                    return window.matchMedia("(orientation: portrait)").addEventListener("change", l),
                        function() {
                            return window.matchMedia("(orientation: portrait)").removeEventListener("change", l)
                        }
                }, []), u
            }
        },
        84079(t, e, n) {
            n.r(e), n.d(e, {
                default: () => i
            });
            var r = n(98283),
                o = (0, n(79555).getIsMobile)();
            const i = function(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                (0, r.useEffect)(function() {
                    return document.addEventListener("".concat(o ? "touchstart" : "mousedown"), u),
                        function() {
                            document.removeEventListener("".concat(o ? "touchstart" : "mousedown"), u)
                        }
                }, []);
                var u = function(e) {
                    e.stopPropagation(), n.every(function(t) {
                        return t.current && !t.current.contains(e.target)
                    }) && t()
                }
            }
        },
        90915(t, e, n) {
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(98283);
            const o = function(t, e) {
                (0, r.useEffect)(function() {
                    function n(n) {
                        n.stopPropagation(), null != t && t.find(function(t) {
                            var e;
                            return null === (e = t.current) || void 0 === e ? void 0 : e.contains(n.target)
                        }) || e()
                    }
                    return document.addEventListener("mousedown", n),
                        function() {
                            document.removeEventListener("mousedown", n)
                        }
                }, [t])
            }
        },
        41340(t, e, n) {
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(98283);
            const o = function(t, e) {
                (0, r.useEffect)(function() {
                    function n(n) {
                        n.stopPropagation(), null != t && t.find(function(t) {
                            var e;
                            return null === (e = t.current) || void 0 === e ? void 0 : e.contains(n.target)
                        }) || e()
                    }
                    return document.addEventListener("pointerdown", n),
                        function() {
                            document.removeEventListener("pointerdown", n)
                        }
                }, [t])
            }
        },
        10864(t, e, n) {
            n.r(e), n.d(e, {
                default: () => c
            });
            var r = n(98283);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        a(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function a(t, e, n) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != o(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != o(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == o(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            const c = function() {
                var t, e, n = (t = (0, r.useState)({}), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return l(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    o = n[0],
                    i = n[1],
                    c = (0, r.useCallback)(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(function(n) {
                            return u(u({}, n), {}, a({}, t, {
                                open: !0,
                                data: u({}, e)
                            }))
                        })
                    }, []),
                    f = (0, r.useCallback)(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(function(n) {
                            return u(u({}, n), {}, a({}, t, {
                                open: !1,
                                data: u({}, e)
                            }))
                        })
                    }, []);
                return (0, r.useMemo)(function() {
                    return [o, c, f]
                }, [o])
            }
        },
        80916(t, e, n) {
            n.r(e), n.d(e, {
                default: () => d
            });
            var r = n(98283),
                o = n(10291),
                i = n(20250),
                u = n(52521);

            function a() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.toStringTag || "@@toStringTag";

                function i(n, r, o, i) {
                    var a = r && r.prototype instanceof c ? r : c,
                        f = Object.create(a.prototype);
                    return l(f, "_invoke", function(n, r, o) {
                        var i, a, l, c = 0,
                            f = o || [],
                            s = !1,
                            d = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: y,
                                f: y.bind(t, 4),
                                d: function(e, n) {
                                    return i = e, a = 0, l = t, d.n = n, u
                                }
                            };

                        function y(n, r) {
                            for (a = n, l = r, e = 0; !s && c && !o && e < f.length; e++) {
                                var o, i = f[e],
                                    y = d.p,
                                    m = i[2];
                                n > 3 ? (o = m === r) && (l = i[(a = i[4]) ? 5 : (a = 3, 3)], i[4] = i[5] = t) : i[0] <= y && ((o = n < 2 && y < i[1]) ? (a = 0, d.v = r, d.n = i[1]) : y < m && (o = n < 3 || i[0] > r || r > m) && (i[4] = n, i[5] = r, d.n = m, a = 0))
                            }
                            if (o || n > 1) return u;
                            throw s = !0, r
                        }
                        return function(o, f, m) {
                            if (c > 1) throw TypeError("Generator is already running");
                            for (s && 1 === f && y(f, m), a = f, l = m;
                                (e = a < 2 ? t : l) || !s;) {
                                i || (a ? a < 3 ? (a > 1 && (d.n = -1), y(a, l)) : d.n = l : d.v = l);
                                try {
                                    if (c = 2, i) {
                                        if (a || (o = "next"), e = i[o]) {
                                            if (!(e = e.call(i, l))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            l = e.value, a < 2 && (a = 0)
                                        } else 1 === a && (e = i.return) && e.call(i), a < 2 && (l = TypeError("The iterator does not provide a '" + o + "' method"), a = 1);
                                        i = t
                                    } else if ((e = (s = d.n < 0) ? l : n.call(r, d)) !== u) break
                                } catch (e) {
                                    i = t, a = 1, l = e
                                } finally {
                                    c = 1
                                }
                            }
                            return {
                                value: e,
                                done: s
                            }
                        }
                    }(n, o, i), !0), f
                }
                var u = {};

                function c() {}

                function f() {}

                function s() {}
                e = Object.getPrototypeOf;
                var d = [][r] ? e(e([][r]())) : (l(e = {}, r, function() {
                        return this
                    }), e),
                    y = s.prototype = c.prototype = Object.create(d);

                function m(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : (t.__proto__ = s, l(t, o, "GeneratorFunction")), t.prototype = Object.create(y), t
                }
                return f.prototype = s, l(y, "constructor", s), l(s, "constructor", f), f.displayName = "GeneratorFunction", l(s, o, "GeneratorFunction"), l(y), l(y, o, "Generator"), l(y, r, function() {
                    return this
                }), l(y, "toString", function() {
                    return "[object Generator]"
                }), (a = function() {
                    return {
                        w: i,
                        m
                    }
                })()
            }

            function l(t, e, n, r) {
                var o = Object.defineProperty;
                try {
                    o({}, "", {})
                } catch (t) {
                    o = 0
                }
                l = function(t, e, n, r) {
                    if (e) o ? o(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n;
                    else {
                        var i = function(e, n) {
                            l(t, e, function(t) {
                                return this._invoke(e, n, t)
                            })
                        };
                        i("next", 0), i("throw", 1), i("return", 2)
                    }
                }, l(t, e, n, r)
            }

            function c(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function f(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            c(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            c(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    })
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t) {
                var e, n, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = (0, r.useRef)(null),
                    d = (0, r.useRef)(null),
                    y = (0, r.useRef)(null),
                    m = (e = (0, r.useState)(null), n = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(e, n) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return s(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    b = m[0],
                    v = m[1];
                return (0, r.useEffect)(function() {
                    var t = function() {
                            v(!1), d.current && d.current.stop()
                        },
                        e = function() {
                            v(!0)
                        };
                    return window.addEventListener("offline", t), window.addEventListener("online", e),
                        function() {
                            window.removeEventListener("offline", t), window.removeEventListener("online", e)
                        }
                }, []), (0, r.useEffect)(function() {
                    return d.current = function() {
                            var e = c.current;
                            if (null !== e) return e;
                            var n = (new o.$).withUrl(t, {
                                skipNegotiation: !0,
                                transport: u.w.WebSockets
                            }).configureLogging(i.$.Information).build();

                            function r() {
                                return s.apply(this, arguments)
                            }

                            function s() {
                                return (s = f(a().m(function t() {
                                    var e;
                                    return a().w(function(t) {
                                        for (;;) switch (t.n) {
                                            case 0:
                                                return t.p = 0, t.n = 1, n.start();
                                            case 1:
                                                null === y.current ? (console.log("Connected", Date.now()), n.dontReconnect = !1, v(!0), y.current = !0) : (console.log("Reloading..."), window.location.reload()), t.n = 3;
                                                break;
                                            case 2:
                                                t.p = 2, e = t.v, console.log(e), setTimeout(function() {
                                                    return r()
                                                }, l.reconnectTimeInMilliseconds || 5e3);
                                            case 3:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [0, 2]
                                    ])
                                }))).apply(this, arguments)
                            }
                            return n.serverTimeoutInMilliseconds = l.serverTimeoutInMilliseconds || 3e4, n.keepAliveIntervalInMilliseconds = l.keepAliveIntervalInMilliseconds || 5e3, c.current = n, n.start().then(function() {
                                null === y.current ? (console.log("SignalR connected, waiting for actions"), v(!0), y.current = !0) : (console.log("Reloading..."), window.location.reload())
                            }).catch(function(t) {
                                console.log(t), v(!1), y.current = !1
                            }), n.onClosed = function(t) {
                                console.log(t ? "Connection closed with error: ".concat(t) : "Disconnected"), setTimeout(function() {
                                    window.location.reload()
                                }, 1e4)
                            }, n.onclose(f(a().m(function t() {
                                return a().w(function(t) {
                                    for (;;) switch (t.n) {
                                        case 0:
                                            if (console.log("Disconnected", Date.now()), navigator.onLine && window.location.reload(), v(!1), y.current = !1, n.dontReconnect) {
                                                t.n = 1;
                                                break
                                            }
                                            return console.log(n.dontReconnect, "reconect"), t.n = 1, r();
                                        case 1:
                                            return t.a(2)
                                    }
                                }, t)
                            }))), n
                        }(),
                        function() {
                            d.current = null
                        }
                }, [b]), [d.current, b]
            }
        },
        29086(t, e, n) {
            n.r(e), n.d(e, {
                default: () => l
            });
            var r = n(98283),
                o = n(94196);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i, u, a = [],
                            l = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || u(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                if (t) {
                    if ("string" == typeof t) return a(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                }
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t, e, n) {
                var l = (0, r.useRef)([]),
                    c = i((0, r.useState)(null), 2),
                    f = c[0],
                    s = c[1],
                    d = i((0, r.useState)(!1), 2),
                    y = d[0],
                    m = d[1],
                    b = i((0, r.useState)(1), 2),
                    v = b[0],
                    p = b[1];
                return (0, r.useEffect)(function() {
                    try {
                        s(new o.Howl({
                            src: "string" == typeof e ? [e] : (t = e, function(t) {
                                if (Array.isArray(t)) return a(t)
                            }(t) || function(t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                            }(t) || u(t) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            autoplay: !1,
                            autoUnlock: !0,
                            volume: v,
                            sprite: n,
                            onload: function() {
                                console.log("Sounds were loaded"), m(!0)
                            },
                            onplayerror: function() {
                                f.once("unlock", function() {
                                    f.play()
                                })
                            }
                        }))
                    } catch (t) {
                        console.error("Howler:", t)
                    }
                    var t
                }, []), (0, r.useEffect)(function() {
                    f && f.volume(v)
                }, [v, f]), (0, r.useEffect)(function() {
                    f && t && f.stop()
                }, [t, f]), [y, function(e) {
                    t || y && (l[e] = null == f ? void 0 : f.play(e))
                }, function(t) {
                    var e = l[t];
                    e && (f.stop(e), delete l[t])
                }, l, function() {
                    f.stop()
                }, p]
            }
        },
        64702(t, e, n) {
            n.r(e), n.d(e, {
                default: () => a
            });
            var r = n(98283),
                o = n(94196);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i, u, a = [],
                            l = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function a(t) {
                var e = t.mute,
                    n = t.url,
                    u = t.sprite,
                    a = void 0 === u ? null : u,
                    l = t.autoplay,
                    c = void 0 !== l && l,
                    f = t.loop,
                    s = void 0 !== f && f,
                    d = t.volume,
                    y = void 0 === d ? 1 : d,
                    m = t.onStart,
                    b = t.onLoad,
                    v = t.onEnd,
                    p = t.onError,
                    h = i((0, r.useState)(null), 2),
                    g = h[0],
                    S = h[1],
                    A = i((0, r.useState)(!1), 2),
                    O = A[0],
                    w = A[1];
                return (0, r.useEffect)(function() {
                    try {
                        S(new o.Howl({
                            src: [n],
                            autoplay: c,
                            loop: s,
                            autoUnlock: !0,
                            volume: y,
                            sprite: a,
                            onload: function() {
                                b && b(), w(!0)
                            },
                            onplayerror: function() {
                                p(), g.once("unlock", function() {
                                    g.play()
                                })
                            },
                            onplay: function() {
                                m && m()
                            },
                            onend: function() {
                                v && v()
                            }
                        }))
                    } catch (t) {
                        console.error("Howler:", t)
                    }
                }, []), (0, r.useEffect)(function() {
                    g && e && g.stop()
                }, [e, g]), [O, g]
            }
        },
        99491(t, e, n) {
            n.r(e), n.d(e, {
                default: () => u
            });
            var r = n(98283);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i, u, a = [],
                            l = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return i(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            const u = function() {
                var t = o((0, r.useState)(0), 2),
                    e = t[0],
                    n = t[1],
                    i = o((0, r.useTransition)(), 2),
                    u = (i[0], i[1]),
                    a = (0, r.useCallback)(function(t, e) {
                        u(function() {
                            null == e || e.current.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                                inline: "end"
                            }), n(t)
                        })
                    }, []);
                return (0, r.useMemo)(function() {
                    return [e, a]
                }, [e])
            }
        },
        75359(t, e, n) {
            n.r(e), n.d(e, {
                default: () => a
            });
            var r = n(98283),
                o = n(38221),
                i = n.n(o);

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            const a = function() {
                var t, e, n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).delay,
                    o = void 0 === n ? 100 : n,
                    a = (t = (0, r.useState)({
                        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                    }), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return u(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    l = a[0],
                    c = a[1];
                return (0, r.useEffect)(function() {
                    var t = i()(function() {
                        return c({
                            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                        })
                    }, o);
                    return window.addEventListener("resize", t),
                        function() {
                            return window.removeEventListener("resize", t)
                        }
                }, []), l
            }
        },
        81742(t, e, n) {
            n.r(e), n.d(e, {
                default: () => f
            });
            var r = n(98283);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var i = ["moz", "ms", "o", "webkit"];

            function u(t) {
                return t ? "".concat(t, "Hidden") : "hidden"
            }
            var a = function() {
                    for (var t = 0; t < i.length; t++)
                        if (u(i[t]) in document) return i[t];
                    return null
                }(),
                l = u(a),
                c = "".concat(a || "", "visibilitychange");

            function f() {
                var t, e, n = (t = (0, r.useState)(!0), e = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    l = !1
                                } else
                                    for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    if (!l && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return o(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = n[0],
                    u = n[1];
                return (0, r.useEffect)(function() {
                    function t(t) {
                        if ("boolean" == typeof t && t) return u(t);
                        u(!document[l])
                    }

                    function e() {
                        t(!1)
                    }

                    function n() {
                        t(!0)
                    }
                    return document.addEventListener(c, t, !1), document.addEventListener("focus", n, !1), document.addEventListener("blur", e, !1), window.addEventListener("focus", n, !1), window.addEventListener("blur", e, !1),
                        function() {
                            document.removeEventListener(c, t), document.removeEventListener("focus", n, !1), document.removeEventListener("blur", e, !1), window.removeEventListener("focus", n, !1), window.removeEventListener("blur", e, !1)
                        }
                }, []), i
            }
        },
        24659(t, e, n) {
            n.r(e), n.d(e, {
                ApiPartners: () => x,
                BASE_POPUP_NAMES: () => A,
                BonusTypes: () => g,
                BonusTypesById: () => S,
                BuilderPartners: () => Y,
                CDNUrl: () => a,
                CDN_URL: () => J,
                GameStatus: () => I,
                IS_HIDDEN_GLAXSYS_LOADER: () => z,
                KEYBOARD_POPUP_NAMES: () => E,
                PROMOTIONS_TYPES: () => V,
                PopupNames: () => w,
                SLOT_CDN_URL: () => Q,
                TabNames: () => O,
                USELOBBY_BONUS_HISTORY: () => j,
                USELOBBY_BONUS_HISTORY_V2: () => L,
                USELOBBY_BONUS_NOTIFY: () => H,
                USELOBBY_DEACTIVATED: () => F,
                USELOBBY_EXPIRED_TOKEN: () => R,
                USELOBBY_FREEBET_NOTIFY: () => D,
                USELOBBY_GENERATE_HASH_CODE: () => k,
                USELOBBY_GET_BALANCE: () => C,
                USELOBBY_GET_INITIAL_STATE: () => P,
                USELOBBY_GET_INITIAL_STATE_FREEBETINFO: () => B,
                USELOBBY_GET_INITIAL_STATE_MAX_WINNERS: () => _,
                USELOBBY_HISTORY: () => T,
                USELOBBY_LOGOUT_PLAYER: () => U,
                USELOBBY_RELOAD_SITE: () => M,
                USELOBBY_START_ROUND: () => N,
                culture: () => v,
                gameKind: () => c,
                gameKindName: () => f,
                gameType: () => p,
                gameTypes: () => $,
                isDemo: () => s,
                isHistory: () => y,
                isMobile: () => h,
                keySoundIsOnSlot: () => K,
                loader: () => d,
                partnerId: () => b,
                skinningName: () => m
            });
            var r = n(79555),
                o = n(27749);

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function u(t, e, n) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != i(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == i(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            for (var a = o.c_, l = (0, r.getTypedParamsFromURL)(), c = l.gameKind, f = l.gameKindName, s = l.isDemo, d = l.loader, y = l.isHistory, m = l.skinningName, b = l.partnerId, v = l.culture, p = l.gameType, h = l.isMobile, g = Object.freeze({
                    FreeBet: "freebet",
                    FreeAmount: "freeamount"
                }), S = Object.freeze({
                    1: "FreeBet",
                    2: "FreeAmount"
                }), A = Object.freeze({
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
                }), O = Object.freeze({
                    home: "home",
                    game: "game",
                    history: "history",
                    bonusHistory: "bonusHistory",
                    tutorial: "tutorial",
                    rules: "rules",
                    leaderBoard: "leaderboard"
                }), w = Object.freeze({
                    checkHashCode: "CheckHashCode",
                    aboutHashCode: "AboutHashCode",
                    history: "history",
                    bonusHistory: "bonusHistory",
                    rules: "Rules",
                    leaderBoard: "leaderboard",
                    LeaderboardNotification: "LeaderboardNotification"
                }), E = Object.freeze({
                    BET: "bet",
                    AUTO_BET: "autoBet",
                    AUTO_CASHOUT: "autoCashout"
                }), I = Object.freeze({
                    Loading: "loading",
                    Countdown: "countdown",
                    InProcess: "inprocess"
                }), P = "GetInitialState", _ = "GetInitialStateMaxWinners", B = "GetInitialStateFreeBetInfo", C = "GetBalance", T = "History", j = "FreeBetHistory", L = "BonusHistory", N = "StartRound", U = "LogOutPlayer", M = "Error", k = "GenerateHashCode", D = "FreeBetNotify", H = "BonusNotify", R = "ExpiredToken", F = "Deactivated", Y = [81, 90, 93, 97, 99, 100, 153, 161, 170, 207, 208, 212, 213, 218, 222, 225, 228, 239, 241, 244, 248, 252, 253, 254, 255, 257, 259, 260, 261, 264, 268, 269, 273, 274, 275, 276, 281, 282], G = [], W = 0; W < 1e3; W++) G.push(W);
            var x = G,
                V = {
                    leaderboard: "leaderboard",
                    missions: "missions",
                    banksystem: "banksystem",
                    matchday: "matchday",
                    moneyland: "moneyland",
                    jackpot: "jackpot",
                    crashback: "crashback"
                },
                z = "1" === d,
                K = "isOn".concat(y ? "History" : ""),
                $ = {
                    FAST_GAME: "FastGame",
                    SLOT_GAME: "SlotGame"
                },
                X = u(u({}, $.FAST_GAME, {
                    template: o.oN,
                    defaultUrl: o.c_
                }), $.SLOT_GAME, {
                    template: o.lR,
                    defaultUrl: o.LI
                }),
                q = function(t) {
                    var e = new URL(window.location.href),
                        n = e.hostname,
                        r = e.protocol,
                        o = e.host,
                        i = X[t],
                        u = i.template,
                        a = i.defaultUrl;
                    return "localhost" === n ? a : "".concat(r, "//").concat(u.replace("{domain}", o))
                },
                J = q($.FAST_GAME),
                Q = q($.SLOT_GAME)
        }
    }
]);