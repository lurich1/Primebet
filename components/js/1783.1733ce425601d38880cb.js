"use strict";
(self.webpackChunkengine = self.webpackChunkengine || []).push([
    [1783], {
        41783(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var o = new URLSearchParams(window.location.search).get("gameKindName");
            const c = function() {
                var e, t = "".concat(Date.now());
                try {
                    if ((e = window.localStorage).setItem(t, t), e.getItem(t) !== t) return;
                    e.removeItem(t);
                    var n = function(e) {
                        return "".concat(o, "-").concat(e)
                    };
                    return Object.create(e, {
                        getItem: {
                            value: function(t) {
                                return e.getItem(n(t)) || e.getItem(t)
                            }
                        },
                        setItem: {
                            value: function(t, o) {
                                e.setItem(n(t), o)
                            }
                        },
                        removeItem: {
                            value: function(t) {
                                e.removeItem(t), e.removeItem(n(t))
                            }
                        }
                    })
                } catch (e) {
                    return console.log("Local Storage is Disabled!"), {
                        getItem: function() {},
                        setItem: function() {},
                        removeItem: function() {}
                    }
                }
            }()
        }
    }
]);