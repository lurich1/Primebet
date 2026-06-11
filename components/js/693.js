/*! For license information please see 693.js.LICENSE.txt */
"use strict";
(self.webpackChunktowerrush = self.webpackChunktowerrush || []).push([
[693], {
    8679: (e, t, n) => {
        var r = n(9864),
            o = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            s = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            },
            i = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            },
            a = {};

        function c(e) {
            return r.isMemo(e) ? i : a[e.$$typeof] || o
        }
        a[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }, a[r.Memo] = i;
        var u = Object.defineProperty,
            l = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            p = Object.getOwnPropertyDescriptor,
            h = Object.getPrototypeOf,
            f = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" != typeof n) {
                if (f) {
                    var o = h(n);
                    o && o !== f && e(t, o, r)
                }
                var i = l(n);
                d && (i = i.concat(d(n)));
                for (var a = c(t), m = c(n), g = 0; g < i.length; ++g) {
                    var _ = i[g];
                    if (!(s[_] || r && r[_] || m && m[_] || a && a[_])) {
                        var y = p(n, _);
                        try {
                            u(t, _, y)
                        } catch (e) {}
                    }
                }
            }
            return t
        }
    },
    9921: (e, t) => {
        var n = "function" == typeof Symbol && Symbol.for,
            r = n ? Symbol.for("react.element") : 60103,
            o = n ? Symbol.for("react.portal") : 60106,
            s = n ? Symbol.for("react.fragment") : 60107,
            i = n ? Symbol.for("react.strict_mode") : 60108,
            a = n ? Symbol.for("react.profiler") : 60114,
            c = n ? Symbol.for("react.provider") : 60109,
            u = n ? Symbol.for("react.context") : 60110,
            l = n ? Symbol.for("react.async_mode") : 60111,
            d = n ? Symbol.for("react.concurrent_mode") : 60111,
            p = n ? Symbol.for("react.forward_ref") : 60112,
            h = n ? Symbol.for("react.suspense") : 60113,
            f = n ? Symbol.for("react.suspense_list") : 60120,
            m = n ? Symbol.for("react.memo") : 60115,
            g = n ? Symbol.for("react.lazy") : 60116,
            _ = n ? Symbol.for("react.block") : 60121,
            y = n ? Symbol.for("react.fundamental") : 60117,
            v = n ? Symbol.for("react.responder") : 60118,
            b = n ? Symbol.for("react.scope") : 60119;

        function S(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case r:
                        switch (e = e.type) {
                            case l:
                            case d:
                            case s:
                            case a:
                            case i:
                            case h:
                                return e;
                            default:
                                switch (e = e && e.$$typeof) {
                                    case u:
                                    case p:
                                    case g:
                                    case m:
                                    case c:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case o:
                        return t
                }
            }
        }

        function w(e) {
            return S(e) === d
        }
        t.AsyncMode = l, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = c, t.Element = r, t.ForwardRef = p, t.Fragment = s, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = a, t.StrictMode = i, t.Suspense = h, t.isAsyncMode = function(e) {
            return w(e) || S(e) === l
        }, t.isConcurrentMode = w, t.isContextConsumer = function(e) {
            return S(e) === u
        }, t.isContextProvider = function(e) {
            return S(e) === c
        }, t.isElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r
        }, t.isForwardRef = function(e) {
            return S(e) === p
        }, t.isFragment = function(e) {
            return S(e) === s
        }, t.isLazy = function(e) {
            return S(e) === g
        }, t.isMemo = function(e) {
            return S(e) === m
        }, t.isPortal = function(e) {
            return S(e) === o
        }, t.isProfiler = function(e) {
            return S(e) === a
        }, t.isStrictMode = function(e) {
            return S(e) === i
        }, t.isSuspense = function(e) {
            return S(e) === h
        }, t.isValidElementType = function(e) {
            return "string" == typeof e || "function" == typeof e || e === s || e === d || e === a || e === i || e === h || e === f || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === p || e.$$typeof === y || e.$$typeof === v || e.$$typeof === b || e.$$typeof === _)
        }, t.typeOf = S
    },
    9864: (e, t, n) => {
        e.exports = n(9921)
    },
    3693: (e, t, n) => {
        n.r(t), n.d(t, {
            BrowserClient: () => jo,
            ErrorBoundary: () => Nm,
            OpenFeatureIntegrationHook: () => _m,
            Profiler: () => Mm,
            SDK_VERSION: () => r,
            SEMANTIC_ATTRIBUTE_SENTRY_OP: () => i,
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => a,
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => s,
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => o,
            Scope: () => _e,
            WINDOW: () => yo,
            addBreadcrumb: () => Le,
            addEventProcessor: () => un,
            addIntegration: () => yn,
            addTracingExtensions: () => Dn,
            breadcrumbsIntegration: () => Fs,
            browserApiErrorsIntegration: () => Us,
            browserProfilingIntegration: () => cm,
            browserSessionIntegration: () => qs,
            browserTracingIntegration: () => Af,
            buildLaunchDarklyFlagUsedHandler: () => mm,
            captureConsoleIntegration: () => $n,
            captureEvent: () => Kt,
            captureException: () => Xt,
            captureFeedback: () => Fn,
            captureMessage: () => Jt,
            captureSession: () => hn,
            captureUserFeedback: () => si,
            chromeStackLineParser: () => rs,
            close: () => an,
            contextLinesIntegration: () => wi,
            continueTrace: () => _r,
            createReduxEnhancer: () => Um,
            createTransport: () => Dr,
            createUserFeedbackEnvelope: () => Uo,
            debugIntegration: () => Nr,
            dedupeIntegration: () => Pr,
            defaultRequestInstrumentationOptions: () => pf,
            defaultStackLineParsers: () => hs,
            defaultStackParser: () => fs,
            endSession: () => dn,
            eventFromException: () => No,
            eventFromMessage: () => Po,
            exceptionFromError: () => Io,
            extraErrorDataIntegration: () => Ur,
            featureFlagsIntegration: () => hm,
            feedbackAsyncIntegration: () => jh,
            feedbackIntegration: () => Hh,
            feedbackSyncIntegration: () => Hh,
            flush: () => sn,
            forceLoad: () => ri,
            functionToStringIntegration: () => zr,
            geckoStackLineParser: () => is,
            getActiveSpan: () => Pt,
            getClient: () => Ae,
            getCurrentHub: () => Wr,
            getCurrentScope: () => Ce,
            getDefaultIntegrations: () => ti,
            getFeedback: () => pp,
            getGlobalScope: () => Ie,
            getIsolationScope: () => Te,
            getReplay: () => wd,
            getRootSpan: () => Nt,
            getSpanDescendants: () => Lt,
            getSpanStatusFromHttpCode: () => gt,
            globalHandlersIntegration: () => Ys,
            httpClientIntegration: () => fi,
            httpContextIntegration: () => Xs,
            inboundFiltersIntegration: () => Yr,
            init: () => wm,
            instrumentOutgoingRequests: () => hf,
            isInitialized: () => cn,
            lastEventId: () => on,
            launchDarklyIntegration: () => fm,
            lazyLoadIntegration: () => ci,
            linkedErrorsIntegration: () => ei,
            makeBrowserOfflineTransport: () => jf,
            makeFetchTransport: () => Zo,
            makeMultiplexedTransport: () => Zr,
            metrics: () => Qh,
            moduleMetadataIntegration: () => oo,
            onLoad: () => oi,
            openFeatureIntegration: () => gm,
            opera10StackLineParser: () => ls,
            opera11StackLineParser: () => ps,
            parameterize: () => so,
            reactErrorHandler: () => Em,
            reactRouterV3BrowserTracingIntegration: () => jm,
            reactRouterV4BrowserTracingIntegration: () => qm,
            reactRouterV5BrowserTracingIntegration: () => Ym,
            reactRouterV6BrowserTracingIntegration: () => Eg,
            reactRouterV7BrowserTracingIntegration: () => Ag,
            registerSpanErrorInstrumentation: () => An,
            replayCanvasIntegration: () => Kd,
            replayIntegration: () => vd,
            reportingObserverIntegration: () => di,
            rewriteFramesIntegration: () => uo,
            sendFeedback: () => rp,
            sessionTimingIntegration: () => lo,
            setContext: () => Zt,
            setCurrentClient: () => po,
            setExtra: () => en,
            setExtras: () => Qt,
            setHttpStatus: () => _t,
            setMeasurement: () => sr,
            setTag: () => nn,
            setTags: () => tn,
            setUser: () => rn,
            showReportDialog: () => ni,
            spanToBaggageHeader: () => Wt,
            spanToJSON: () => It,
            spanToTraceHeader: () => xt,
            spotlightBrowserIntegration: () => um,
            startBrowserTracingNavigationSpan: () => Df,
            startBrowserTracingPageLoadSpan: () => Of,
            startInactiveSpan: () => gr,
            startNewTrace: () => br,
            startSession: () => ln,
            startSpan: () => fr,
            startSpanManual: () => mr,
            statsigIntegration: () => bm,
            suppressTracing: () => vr,
            tanstackRouterBrowserTracingIntegration: () => zm,
            thirdPartyErrorFilterIntegration: () => ho,
            unleashIntegration: () => ym,
            updateSpanName: () => Ft,
            useProfiler: () => Am,
            winjsStackLineParser: () => cs,
            withActiveSpan: () => yr,
            withErrorBoundary: () => Pm,
            withIsolationScope: () => Re,
            withProfiler: () => Rm,
            withScope: () => Me,
            withSentryReactRouterV6Routing: () => Rg,
            withSentryReactRouterV7Routing: () => Og,
            withSentryRouting: () => Xm,
            wrapCreateBrowserRouter: () => Ig,
            wrapCreateBrowserRouterV6: () => Tg,
            wrapCreateBrowserRouterV7: () => Dg,
            wrapCreateMemoryRouterV6: () => Mg,
            wrapCreateMemoryRouterV7: () => Lg,
            wrapUseRoutes: () => Cg,
            wrapUseRoutesV6: () => xg,
            wrapUseRoutesV7: () => Ng,
            zodErrorsIntegration: () => _o
        });
        const r = "8.55.0",
            o = "sentry.source",
            s = "sentry.sample_rate",
            i = "sentry.op",
            a = "sentry.origin",
            c = "sentry.idle_span_finish_reason",
            u = "sentry.measurement_unit",
            l = "sentry.measurement_value",
            d = "sentry.custom_span_name",
            p = "sentry.exclusive_time",
            h = Object.prototype.toString;

        function f(e) {
            switch (h.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                case "[object WebAssembly.Exception]":
                    return !0;
                default:
                    return E(e, Error)
            }
        }

        function m(e, t) {
            return h.call(e) === `[object ${t}]`
        }

        function g(e) {
            return m(e, "ErrorEvent")
        }

        function _(e) {
            return m(e, "DOMError")
        }

        function y(e) {
            return m(e, "String")
        }

        function v(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
        }

        function b(e) {
            return null === e || v(e) || "object" != typeof e && "function" != typeof e
        }

        function S(e) {
            return m(e, "Object")
        }

        function w(e) {
            return "undefined" != typeof Event && E(e, Event)
        }

        function k(e) {
            return Boolean(e && e.then && "function" == typeof e.then)
        }

        function E(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }

        function x(e) {
            return !("object" != typeof e || null === e || !e.__isVue && !e._isVue)
        }
        const C = globalThis;

        function T(e, t, n) {
            const o = n || C,
                s = o.__SENTRY__ = o.__SENTRY__ || {},
                i = s[r] = s[r] || {};
            return i[e] || (i[e] = t())
        }
        const I = C,
            M = 80;

        function R(e, t = {}) {
            if (!e) return "<unknown>";
            try {
                let n = e;
                const r = 5,
                    o = [];
                let s = 0,
                    i = 0;
                const a = " > ",
                    c = a.length;
                let u;
                const l = Array.isArray(t) ? t : t.keyAttrs,
                    d = !Array.isArray(t) && t.maxStringLength || M;
                for (; n && s++ < r && (u = A(n, l), !("html" === u || s > 1 && i + o.length * c + u.length >= d));) o.push(u), i += u.length, n = n.parentNode;
                return o.reverse().join(a)
            } catch (e) {
                return "<unknown>"
            }
        }

        function A(e, t) {
            const n = e,
                r = [];
            if (!n || !n.tagName) return "";
            if (I.HTMLElement && n instanceof HTMLElement && n.dataset) {
                if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
                if (n.dataset.sentryElement) return n.dataset.sentryElement
            }
            r.push(n.tagName.toLowerCase());
            const o = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
            if (o && o.length) o.forEach((e => {
                r.push(`[${e[0]}="${e[1]}"]`)
            }));
            else {
                n.id && r.push(`#${n.id}`);
                const e = n.className;
                if (e && y(e)) {
                    const t = e.split(/\s+/);
                    for (const e of t) r.push(`.${e}`)
                }
            }
            const s = ["aria-label", "type", "name", "title", "alt"];
            for (const e of s) {
                const t = n.getAttribute(e);
                t && r.push(`[${e}="${t}"]`)
            }
            return r.join("")
        }

        function O() {
            try {
                return I.document.location.href
            } catch (e) {
                return ""
            }
        }

        function D(e) {
            if (!I.HTMLElement) return null;
            let t = e;
            for (let e = 0; e < 5; e++) {
                if (!t) return null;
                if (t instanceof HTMLElement) {
                    if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement) return t.dataset.sentryElement
                }
                t = t.parentNode
            }
            return null
        }
        const L = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            N = ["debug", "info", "warn", "error", "log", "assert", "trace"],
            P = {};

        function $(e) {
            if (!("console" in C)) return e();
            const t = C.console,
                n = {},
                r = Object.keys(P);
            r.forEach((e => {
                const r = P[e];
                n[e] = t[e], t[e] = r
            }));
            try {
                return e()
            } finally {
                r.forEach((e => {
                    t[e] = n[e]
                }))
            }
        }
        const F = T("logger", (function() {
            let e = !1;
            const t = {
                enable: () => {
                    e = !0
                },
                disable: () => {
                    e = !1
                },
                isEnabled: () => e
            };
            return L ? N.forEach((n => {
                t[n] = (...t) => {
                    e && $((() => {
                        C.console[n](`Sentry Logger [${n}]:`, ...t)
                    }))
                }
            })) : N.forEach((e => {
                t[e] = () => {}
            })), t
        }));

        function B(e, t = 0) {
            return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
        }

        function U(e, t) {
            let n = e;
            const r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            let o = Math.max(t - 60, 0);
            o < 5 && (o = 0);
            let s = Math.min(o + 140, r);
            return s > r - 5 && (s = r), s === r && (o = Math.max(s - 140, 0)), n = n.slice(o, s), o > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
        }

        function j(e, t) {
            if (!Array.isArray(e)) return "";
            const n = [];
            for (let t = 0; t < e.length; t++) {
                const r = e[t];
                try {
                    x(r) ? n.push("[VueViewModel]") : n.push(String(r))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function H(e, t = [], n = !1) {
            return t.some((t => function(e, t, n = !1) {
                return !!y(e) && (m(t, "RegExp") ? t.test(e) : !!y(t) && (n ? e === t : e.includes(t)))
            }(e, t, n)))
        }

        function z(e, t, n) {
            if (!(t in e)) return;
            const r = e[t],
                o = n(r);
            "function" == typeof o && q(o, r);
            try {
                e[t] = o
            } catch (n) {
                L && F.log(`Failed to replace method "${t}" in object`, e)
            }
        }

        function W(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch (n) {
                L && F.log(`Failed to add non-enumerable property "${t}" to object`, e)
            }
        }

        function q(e, t) {
            try {
                const n = t.prototype || {};
                e.prototype = t.prototype = n, W(e, "__sentry_original__", t)
            } catch (e) {}
        }

        function Y(e) {
            return e.__sentry_original__
        }

        function V(e) {
            if (f(e)) return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...X(e)
            };
            if (w(e)) {
                const t = {
                    type: e.type,
                    target: G(e.target),
                    currentTarget: G(e.currentTarget),
                    ...X(e)
                };
                return "undefined" != typeof CustomEvent && E(e, CustomEvent) && (t.detail = e.detail), t
            }
            return e
        }

        function G(e) {
            try {
                return "undefined" != typeof Element && E(e, Element) ? R(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }

        function X(e) {
            if ("object" == typeof e && null !== e) {
                const t = {};
                for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
            return {}
        }

        function J(e) {
            return K(e, new Map)
        }

        function K(e, t) {
            if (function(e) {
                    if (!S(e)) return !1;
                    try {
                        const t = Object.getPrototypeOf(e).constructor.name;
                        return !t || "Object" === t
                    } catch (e) {
                        return !0
                    }
                }(e)) {
                const n = t.get(e);
                if (void 0 !== n) return n;
                const r = {};
                t.set(e, r);
                for (const n of Object.getOwnPropertyNames(e)) void 0 !== e[n] && (r[n] = K(e[n], t));
                return r
            }
            if (Array.isArray(e)) {
                const n = t.get(e);
                if (void 0 !== n) return n;
                const r = [];
                return t.set(e, r), e.forEach((e => {
                    r.push(K(e, t))
                })), r
            }
            return e
        }
        const Z = 1e3;

        function Q() {
            return Date.now() / Z
        }
        const ee = function() {
            const {
                performance: e
            } = C;
            if (!e || !e.now) return Q;
            const t = Date.now() - e.now(),
                n = null == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / Z
        }();
        let te;
        const ne = (() => {
            const {
                performance: e
            } = C;
            if (!e || !e.now) return void(te = "none");
            const t = 36e5,
                n = e.now(),
                r = Date.now(),
                o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
                s = o < t,
                i = e.timing && e.timing.navigationStart,
                a = "number" == typeof i ? Math.abs(i + n - r) : t;
            return s || a < t ? o <= a ? (te = "timeOrigin", e.timeOrigin) : (te = "navigationStart", i) : (te = "dateNow", r)
        })();

        function re() {
            const e = C,
                t = e.crypto || e.msCrypto;
            let n = () => 16 * Math.random();
            try {
                if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
                t && t.getRandomValues && (n = () => {
                    const e = new Uint8Array(1);
                    return t.getRandomValues(e), e[0]
                })
            } catch (e) {}
            return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)))
        }

        function oe(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }

        function se(e) {
            const {
                message: t,
                event_id: n
            } = e;
            if (t) return t;
            const r = oe(e);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }

        function ie(e, t, n) {
            const r = e.exception = e.exception || {},
                o = r.values = r.values || [],
                s = o[0] = o[0] || {};
            s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
        }

        function ae(e, t) {
            const n = oe(e);
            if (!n) return;
            const r = n.mechanism;
            if (n.mechanism = {
                    type: "generic",
                    handled: !0,
                    ...r,
                    ...t
                }, t && "data" in t) {
                const e = { ...r && r.data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }

        function ce(e) {
            if (function(e) {
                    try {
                        return e.__sentry_captured__
                    } catch (e) {}
                }(e)) return !0;
            try {
                W(e, "__sentry_captured__", !0)
            } catch (e) {}
            return !1
        }

        function ue(e, t = {}) {
            if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || ee(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : re()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
            else if ("number" == typeof t.duration) e.duration = t.duration;
            else {
                const t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
        }

        function le() {
            return re()
        }

        function de() {
            return re().substring(16)
        }

        function pe(e, t, n = 2) {
            if (!t || "object" != typeof t || n <= 0) return t;
            if (e && t && 0 === Object.keys(t).length) return e;
            const r = { ...e
            };
            for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = pe(r[e], t[e], n - 1));
            return r
        }
        const he = "_sentrySpan";

        function fe(e, t) {
            t ? W(e, he, t) : delete e[he]
        }

        function me(e) {
            return e[he]
        }
        class ge {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                    traceId: le(),
                    spanId: de()
                }
            }
            clone() {
                const e = new ge;
                return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
                }, e._extra = { ...this._extra
                }, e._contexts = { ...this._contexts
                }, this._contexts.flags && (e._contexts.flags = {
                    values: [...this._contexts.flags.values]
                }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                }, e._propagationContext = { ...this._propagationContext
                }, e._client = this._client, e._lastEventId = this._lastEventId, fe(e, me(this)), e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e), this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                }, this._session && ue(this._session, {
                    user: e
                }), this._notifyScopeListeners(), this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(e) {
                return this._requestSession = e, this
            }
            setTags(e) {
                return this._tags = { ...this._tags,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setTag(e, t) {
                return this._tags = { ...this._tags,
                    [e]: t
                }, this._notifyScopeListeners(), this
            }
            setExtras(e) {
                return this._extra = { ...this._extra,
                    ...e
                }, this._notifyScopeListeners(), this
            }
            setExtra(e, t) {
                return this._extra = { ...this._extra,
                    [e]: t
                }, this._notifyScopeListeners(), this
            }
            setFingerprint(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }
            setLevel(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }
            setTransactionName(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e) return this;
                const t = "function" == typeof e ? e(this) : e,
                    [n, r] = t instanceof _e ? [t.getScopeData(), t.getRequestSession()] : S(t) ? [e, e.requestSession] : [],
                    {
                        tags: o,
                        extra: s,
                        user: i,
                        contexts: a,
                        level: c,
                        fingerprint: u = [],
                        propagationContext: l
                    } = n || {};
                return this._tags = { ...this._tags,
                    ...o
                }, this._extra = { ...this._extra,
                    ...s
                }, this._contexts = { ...this._contexts,
                    ...a
                }, i && Object.keys(i).length && (this._user = i), c && (this._level = c), u.length && (this._fingerprint = u), l && (this._propagationContext = l), r && (this._requestSession = r), this
            }
            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, fe(this, void 0), this._attachments = [], this.setPropagationContext({
                    traceId: le()
                }), this._notifyScopeListeners(), this
            }
            addBreadcrumb(e, t) {
                const n = "number" == typeof t ? t : 100;
                if (n <= 0) return this;
                const r = {
                    timestamp: Q(),
                    ...e
                };
                return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }
            addAttachment(e) {
                return this._attachments.push(e), this
            }
            clearAttachments() {
                return this._attachments = [], this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: me(this)
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = pe(this._sdkProcessingMetadata, e, 2), this
            }
            setPropagationContext(e) {
                return this._propagationContext = {
                    spanId: de(),
                    ...e
                }, this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                const n = t && t.event_id ? t.event_id : re();
                if (!this._client) return F.warn("No client configured on scope - will not capture exception!"), n;
                const r = new Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this), n
            }
            captureMessage(e, t, n) {
                const r = n && n.event_id ? n.event_id : re();
                if (!this._client) return F.warn("No client configured on scope - will not capture message!"), r;
                const o = new Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: o,
                    ...n,
                    event_id: r
                }, this), r
            }
            captureEvent(e, t) {
                const n = t && t.event_id ? t.event_id : re();
                return this._client ? (this._client.captureEvent(e, { ...t,
                    event_id: n
                }, this), n) : (F.warn("No client configured on scope - will not capture event!"), n)
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e => {
                    e(this)
                })), this._notifyingListeners = !1)
            }
        }
        const _e = ge;

        function ye() {
            return ve(C), C
        }

        function ve(e) {
            const t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || r, t[r] = t[r] || {}
        }
        class be {
            constructor(e, t) {
                let n, r;
                n = e || new _e, r = t || new _e, this._stack = [{
                    scope: n
                }], this._isolationScope = r
            }
            withScope(e) {
                const t = this._pushScope();
                let n;
                try {
                    n = e(t)
                } catch (e) {
                    throw this._popScope(), e
                }
                return k(n) ? n.then((e => (this._popScope(), e)), (e => {
                    throw this._popScope(), e
                })) : (this._popScope(), n)
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                const e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }), e
            }
            _popScope() {
                return !(this._stack.length <= 1 || !this._stack.pop())
            }
        }

        function Se() {
            const e = ve(ye());
            return e.stack = e.stack || new be(T("defaultCurrentScope", (() => new _e)), T("defaultIsolationScope", (() => new _e)))
        }

        function we(e) {
            return Se().withScope(e)
        }

        function ke(e, t) {
            const n = Se();
            return n.withScope((() => (n.getStackTop().scope = e, t(e))))
        }

        function Ee(e) {
            return Se().withScope((() => e(Se().getIsolationScope())))
        }

        function xe(e) {
            const t = ve(e);
            return t.acs ? t.acs : {
                withIsolationScope: Ee,
                withScope: we,
                withSetScope: ke,
                withSetIsolationScope: (e, t) => Ee(t),
                getCurrentScope: () => Se().getScope(),
                getIsolationScope: () => Se().getIsolationScope()
            }
        }

        function Ce() {
            return xe(ye()).getCurrentScope()
        }

        function Te() {
            return xe(ye()).getIsolationScope()
        }

        function Ie() {
            return T("globalScope", (() => new _e))
        }

        function Me(...e) {
            const t = xe(ye());
            if (2 === e.length) {
                const [n, r] = e;
                return n ? t.withSetScope(n, r) : t.withScope(r)
            }
            return t.withScope(e[0])
        }

        function Re(...e) {
            const t = xe(ye());
            if (2 === e.length) {
                const [n, r] = e;
                return n ? t.withSetIsolationScope(n, r) : t.withIsolationScope(r)
            }
            return t.withIsolationScope(e[0])
        }

        function Ae() {
            return Ce().getClient()
        }

        function Oe(e) {
            const t = e.getPropagationContext(),
                {
                    traceId: n,
                    spanId: r,
                    parentSpanId: o
                } = t;
            return J({
                trace_id: n,
                span_id: r,
                parent_span_id: o
            })
        }
        const De = 100;

        function Le(e, t) {
            const n = Ae(),
                r = Te();
            if (!n) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: s = De
            } = n.getOptions();
            if (s <= 0) return;
            const i = {
                    timestamp: Q(),
                    ...e
                },
                a = o ? $((() => o(i, t))) : i;
            null !== a && (n.emit && n.emit("beforeAddBreadcrumb", a, t), r.addBreadcrumb(a, s))
        }
        const Ne = "production",
            Pe = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        var $e;

        function Fe(e) {
            return new Ue((t => {
                t(e)
            }))
        }

        function Be(e) {
            return new Ue(((t, n) => {
                n(e)
            }))
        }! function(e) {
            e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED"
        }($e || ($e = {}));
        class Ue {
            constructor(e) {
                Ue.prototype.__init.call(this), Ue.prototype.__init2.call(this), Ue.prototype.__init3.call(this), Ue.prototype.__init4.call(this), this._state = $e.PENDING, this._handlers = [];
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            then(e, t) {
                return new Ue(((n, r) => {
                    this._handlers.push([!1, t => {
                        if (e) try {
                            n(e(t))
                        } catch (e) {
                            r(e)
                        } else n(t)
                    }, e => {
                        if (t) try {
                            n(t(e))
                        } catch (e) {
                            r(e)
                        } else r(e)
                    }]), this._executeHandlers()
                }))
            } catch (e) {
                return this.then((e => e), e)
            } finally(e) {
                return new Ue(((t, n) => {
                    let r, o;
                    return this.then((t => {
                        o = !1, r = t, e && e()
                    }), (t => {
                        o = !0, r = t, e && e()
                    })).then((() => {
                        o ? n(r) : t(r)
                    }))
                }))
            }
            __init() {
                this._resolve = e => {
                    this._setResult($e.RESOLVED, e)
                }
            }
            __init2() {
                this._reject = e => {
                    this._setResult($e.REJECTED, e)
                }
            }
            __init3() {
                this._setResult = (e, t) => {
                    this._state === $e.PENDING && (k(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()))
                }
            }
            __init4() {
                this._executeHandlers = () => {
                    if (this._state === $e.PENDING) return;
                    const e = this._handlers.slice();
                    this._handlers = [], e.forEach((e => {
                        e[0] || (this._state === $e.RESOLVED && e[1](this._value), this._state === $e.REJECTED && e[2](this._value), e[0] = !0)
                    }))
                }
            }
        }

        function je(e, t, n, r = 0) {
            return new Ue(((o, s) => {
                const i = e[r];
                if (null === t || "function" != typeof i) o(t);
                else {
                    const a = i({ ...t
                    }, n);
                    Pe && i.id && null === a && F.log(`Event processor "${i.id}" dropped event`), k(a) ? a.then((t => je(e, t, n, r + 1).then(o))).then(null, s) : je(e, a, n, r + 1).then(o).then(null, s)
                }
            }))
        }
        let He, ze, We;

        function qe(e) {
            const t = C._sentryDebugIds;
            if (!t) return {};
            const n = Object.keys(t);
            return We && n.length === ze || (ze = n.length, We = n.reduce(((n, r) => {
                He || (He = {});
                const o = He[r];
                if (o) n[o[0]] = o[1];
                else {
                    const o = e(r);
                    for (let e = o.length - 1; e >= 0; e--) {
                        const s = o[e],
                            i = s && s.filename,
                            a = t[r];
                        if (i && a) {
                            n[i] = a, He[r] = [i, a];
                            break
                        }
                    }
                }
                return n
            }), {})), We
        }
        const Ye = 50,
            Ve = "?",
            Ge = /\(error: (.*)\)/,
            Xe = /captureMessage|captureException/;

        function Je(...e) {
            const t = e.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
            return (e, n = 0, r = 0) => {
                const o = [],
                    s = e.split("\n");
                for (let e = n; e < s.length; e++) {
                    const n = s[e];
                    if (n.length > 1024) continue;
                    const i = Ge.test(n) ? n.replace(Ge, "$1") : n;
                    if (!i.match(/\S*Error: /)) {
                        for (const e of t) {
                            const t = e(i);
                            if (t) {
                                o.push(t);
                                break
                            }
                        }
                        if (o.length >= Ye + r) break
                    }
                }
                return function(e) {
                    if (!e.length) return [];
                    const t = Array.from(e);
                    return /sentryWrapped/.test(Ke(t).function || "") && t.pop(), t.reverse(), Xe.test(Ke(t).function || "") && (t.pop(), Xe.test(Ke(t).function || "") && t.pop()), t.slice(0, Ye).map((e => ({ ...e,
                        filename: e.filename || Ke(t).filename,
                        function: e.function || Ve
                    })))
                }(o.slice(r))
            }
        }

        function Ke(e) {
            return e[e.length - 1] || {}
        }
        const Ze = "<anonymous>";

        function Qe(e) {
            try {
                return e && "function" == typeof e && e.name || Ze
            } catch (e) {
                return Ze
            }
        }

        function et(e) {
            const t = e.exception;
            if (t) {
                const e = [];
                try {
                    return t.values.forEach((t => {
                        t.stacktrace.frames && e.push(...t.stacktrace.frames)
                    })), e
                } catch (e) {
                    return
                }
            }
        }

        function tt(e, t = 100, n = 1 / 0) {
            try {
                return rt("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }

        function nt(e, t = 3, n = 102400) {
            const r = tt(e, t);
            return o = r,
                function(e) {
                    return ~-encodeURI(e).split(/%..|./).length
                }(JSON.stringify(o)) > n ? nt(e, t - 1, n) : r;
            var o
        }

        function rt(e, t, n = 1 / 0, r = 1 / 0, o = function() {
            const e = "function" == typeof WeakSet,
                t = e ? new WeakSet : [];
            return [function(n) {
                if (e) return !!t.has(n) || (t.add(n), !1);
                for (let e = 0; e < t.length; e++)
                    if (t[e] === n) return !0;
                return t.push(n), !1
            }, function(n) {
                if (e) t.delete(n);
                else
                    for (let e = 0; e < t.length; e++)
                        if (t[e] === n) {
                            t.splice(e, 1);
                            break
                        }
            }]
        }()) {
            const [s, i] = o;
            if (null == t || ["boolean", "string"].includes(typeof t) || "number" == typeof t && Number.isFinite(t)) return t;
            const a = function(e, t) {
                try {
                    if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                    if ("domainEmitter" === e) return "[DomainEmitter]";
                    if ("undefined" != typeof global && t === global) return "[Global]";
                    if ("undefined" != typeof window && t === window) return "[Window]";
                    if ("undefined" != typeof document && t === document) return "[Document]";
                    if (x(t)) return "[VueViewModel]";
                    if (S(n = t) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n) return "[SyntheticEvent]";
                    if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                    if ("function" == typeof t) return `[Function: ${Qe(t)}]`;
                    if ("symbol" == typeof t) return `[${String(t)}]`;
                    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                    const r = function(e) {
                        const t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : "null prototype"
                    }(t);
                    return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
                } catch (e) {
                    return `**non-serializable** (${e})`
                }
                var n
            }(e, t);
            if (!a.startsWith("[object ")) return a;
            if (t.__sentry_skip_normalization__) return t;
            const c = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
            if (0 === c) return a.replace("object ", "");
            if (s(t)) return "[Circular ~]";
            const u = t;
            if (u && "function" == typeof u.toJSON) try {
                return rt("", u.toJSON(), c - 1, r, o)
            } catch (e) {}
            const l = Array.isArray(t) ? [] : {};
            let d = 0;
            const p = V(t);
            for (const e in p) {
                if (!Object.prototype.hasOwnProperty.call(p, e)) continue;
                if (d >= r) {
                    l[e] = "[MaxProperties ~]";
                    break
                }
                const t = p[e];
                l[e] = rt(e, t, c - 1, r, o), d++
            }
            return i(t), l
        }
        const ot = "sentry-",
            st = /^sentry-/,
            it = 8192;

        function at(e) {
            const t = function(e) {
                if (e && (y(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce(((e, t) => {
                    const n = ut(t);
                    return Object.entries(n).forEach((([t, n]) => {
                        e[t] = n
                    })), e
                }), {}) : ut(e)
            }(e);
            if (!t) return;
            const n = Object.entries(t).reduce(((e, [t, n]) => (t.match(st) && (e[t.slice(ot.length)] = n), e)), {});
            return Object.keys(n).length > 0 ? n : void 0
        }

        function ct(e) {
            if (e) return function(e) {
                if (0 !== Object.keys(e).length) return Object.entries(e).reduce(((e, [t, n], r) => {
                    const o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                        s = 0 === r ? o : `${e},${o}`;
                    return s.length > it ? (L && F.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : s
                }), "")
            }(Object.entries(e).reduce(((e, [t, n]) => (n && (e[`${ot}${t}`] = n), e)), {}))
        }

        function ut(e) {
            return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(((e, [t, n]) => (t && n && (e[t] = n), e)), {})
        }

        function lt(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            const t = Ae(),
                n = e || t && t.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        }
        const dt = "_sentryMetrics";

        function pt(e) {
            const t = e[dt];
            if (!t) return;
            const n = {};
            for (const [, [e, r]] of t)(n[e] || (n[e] = [])).push(J(r));
            return n
        }
        const ht = 0,
            ft = 1,
            mt = 2;

        function gt(e) {
            if (e < 400 && e >= 100) return {
                code: ft
            };
            if (e >= 400 && e < 500) switch (e) {
                case 401:
                    return {
                        code: mt,
                        message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: mt,
                        message: "permission_denied"
                    };
                case 404:
                    return {
                        code: mt,
                        message: "not_found"
                    };
                case 409:
                    return {
                        code: mt,
                        message: "already_exists"
                    };
                case 413:
                    return {
                        code: mt,
                        message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: mt,
                        message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: mt,
                        message: "cancelled"
                    };
                default:
                    return {
                        code: mt,
                        message: "invalid_argument"
                    }
            }
            if (e >= 500 && e < 600) switch (e) {
                case 501:
                    return {
                        code: mt,
                        message: "unimplemented"
                    };
                case 503:
                    return {
                        code: mt,
                        message: "unavailable"
                    };
                case 504:
                    return {
                        code: mt,
                        message: "deadline_exceeded"
                    };
                default:
                    return {
                        code: mt,
                        message: "internal_error"
                    }
            }
            return {
                code: mt,
                message: "unknown_error"
            }
        }

        function _t(e, t) {
            e.setAttribute("http.response.status_code", t);
            const n = gt(t);
            "unknown_error" !== n.message && e.setStatus(n)
        }
        const yt = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

        function vt(e, t) {
            const n = function(e) {
                    if (!e) return;
                    const t = e.match(yt);
                    if (!t) return;
                    let n;
                    return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1), {
                        traceId: t[1],
                        parentSampled: n,
                        parentSpanId: t[2]
                    }
                }(e),
                r = at(t);
            if (!n || !n.traceId) return {
                traceId: le(),
                spanId: de()
            };
            const {
                traceId: o,
                parentSpanId: s,
                parentSampled: i
            } = n;
            return {
                traceId: o,
                parentSpanId: s,
                spanId: de(),
                sampled: i,
                dsc: r || {}
            }
        }

        function bt(e = le(), t = de(), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
        }
        const St = 1;
        let wt = !1;

        function kt(e) {
            const {
                spanId: t,
                traceId: n
            } = e.spanContext(), {
                data: r,
                op: o,
                parent_span_id: s,
                status: i,
                origin: a
            } = It(e);
            return J({
                parent_span_id: s,
                span_id: t,
                trace_id: n,
                data: r,
                op: o,
                status: i,
                origin: a
            })
        }

        function Et(e) {
            const {
                spanId: t,
                traceId: n,
                isRemote: r
            } = e.spanContext();
            return J({
                parent_span_id: r ? t : It(e).parent_span_id,
                span_id: r ? de() : t,
                trace_id: n
            })
        }

        function xt(e) {
            const {
                traceId: t,
                spanId: n
            } = e.spanContext();
            return bt(t, n, Mt(e))
        }

        function Ct(e) {
            return "number" == typeof e ? Tt(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Tt(e.getTime()) : ee()
        }

        function Tt(e) {
            return e > 9999999999 ? e / 1e3 : e
        }

        function It(e) {
            if (function(e) {
                    return "function" == typeof e.getSpanJSON
                }(e)) return e.getSpanJSON();
            try {
                const {
                    spanId: t,
                    traceId: n
                } = e.spanContext();
                if (function(e) {
                        const t = e;
                        return !!(t.attributes && t.startTime && t.name && t.endTime && t.status)
                    }(e)) {
                    const {
                        attributes: r,
                        startTime: o,
                        name: s,
                        endTime: c,
                        parentSpanId: u,
                        status: l
                    } = e;
                    return J({
                        span_id: t,
                        trace_id: n,
                        data: r,
                        description: s,
                        parent_span_id: u,
                        start_timestamp: Ct(o),
                        timestamp: Ct(c) || void 0,
                        status: Rt(l),
                        op: r[i],
                        origin: r[a],
                        _metrics_summary: pt(e)
                    })
                }
                return {
                    span_id: t,
                    trace_id: n
                }
            } catch (e) {
                return {}
            }
        }

        function Mt(e) {
            const {
                traceFlags: t
            } = e.spanContext();
            return t === St
        }

        function Rt(e) {
            if (e && e.code !== ht) return e.code === ft ? "ok" : e.message || "unknown_error"
        }
        const At = "_sentryChildSpans",
            Ot = "_sentryRootSpan";

        function Dt(e, t) {
            const n = e[Ot] || e;
            W(t, Ot, n), e[At] ? e[At].add(t) : W(e, At, new Set([t]))
        }

        function Lt(e) {
            const t = new Set;
            return function e(n) {
                if (!t.has(n) && Mt(n)) {
                    t.add(n);
                    const r = n[At] ? Array.from(n[At]) : [];
                    for (const t of r) e(t)
                }
            }(e), Array.from(t)
        }

        function Nt(e) {
            return e[Ot] || e
        }

        function Pt() {
            const e = xe(ye());
            return e.getActiveSpan ? e.getActiveSpan() : me(Ce())
        }

        function $t() {
            wt || ($((() => {
                console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.")
            })), wt = !0)
        }

        function Ft(e, t) {
            e.updateName(t), e.setAttributes({
                [o]: "custom",
                [d]: t
            })
        }
        const Bt = "_frozenDsc";

        function Ut(e, t) {
            W(e, Bt, t)
        }

        function jt(e, t) {
            const n = t.getOptions(),
                {
                    publicKey: r
                } = t.getDsn() || {},
                o = J({
                    environment: n.environment || Ne,
                    release: n.release,
                    public_key: r,
                    trace_id: e
                });
            return t.emit("createDsc", o), o
        }

        function Ht(e, t) {
            const n = t.getPropagationContext();
            return n.dsc || jt(n.traceId, e)
        }

        function zt(e) {
            const t = Ae();
            if (!t) return {};
            const n = Nt(e),
                r = n[Bt];
            if (r) return r;
            const i = n.spanContext().traceState,
                a = i && i.get("sentry.dsc"),
                c = a && at(a);
            if (c) return c;
            const u = jt(e.spanContext().traceId, t),
                l = It(n),
                d = l.data || {},
                p = d[s];
            null != p && (u.sample_rate = `${p}`);
            const h = d[o],
                f = l.description;
            return "url" !== h && f && (u.transaction = f), lt() && (u.sampled = String(Mt(n))), t.emit("createDsc", u, n), u
        }

        function Wt(e) {
            return ct(zt(e))
        }

        function qt(e, t) {
            const {
                extra: n,
                tags: r,
                user: o,
                contexts: s,
                level: i,
                sdkProcessingMetadata: a,
                breadcrumbs: c,
                fingerprint: u,
                eventProcessors: l,
                attachments: d,
                propagationContext: p,
                transactionName: h,
                span: f
            } = t;
            Yt(e, "extra", n), Yt(e, "tags", r), Yt(e, "user", o), Yt(e, "contexts", s), e.sdkProcessingMetadata = pe(e.sdkProcessingMetadata, a, 2), i && (e.level = i), h && (e.transactionName = h), f && (e.span = f), c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]), u.length && (e.fingerprint = [...e.fingerprint, ...u]), l.length && (e.eventProcessors = [...e.eventProcessors, ...l]), d.length && (e.attachments = [...e.attachments, ...d]), e.propagationContext = { ...e.propagationContext,
                ...p
            }
        }

        function Yt(e, t, n) {
            e[t] = pe(e[t], n, 1)
        }

        function Vt(e, t, n, r, o, s) {
            const {
                normalizeDepth: i = 3,
                normalizeMaxBreadth: a = 1e3
            } = e, c = { ...t,
                event_id: t.event_id || n.event_id || re(),
                timestamp: t.timestamp || Q()
            }, u = n.integrations || e.integrations.map((e => e.name));
            ! function(e, t) {
                const {
                    environment: n,
                    release: r,
                    dist: o,
                    maxValueLength: s = 250
                } = t;
                e.environment = e.environment || n || Ne, !e.release && r && (e.release = r), !e.dist && o && (e.dist = o), e.message && (e.message = B(e.message, s));
                const i = e.exception && e.exception.values && e.exception.values[0];
                i && i.value && (i.value = B(i.value, s));
                const a = e.request;
                a && a.url && (a.url = B(a.url, s))
            }(c, e),
            function(e, t) {
                t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
            }(c, u), o && o.emit("applyFrameMetadata", t), void 0 === t.type && function(e, t) {
                const n = qe(t);
                try {
                    e.exception.values.forEach((e => {
                        e.stacktrace.frames.forEach((e => {
                            n && e.filename && (e.debug_id = n[e.filename])
                        }))
                    }))
                } catch (e) {}
            }(c, e.stackParser);
            const l = function(e, t) {
                if (!t) return e;
                const n = e ? e.clone() : new _e;
                return n.update(t), n
            }(r, n.captureContext);
            n.mechanism && ae(c, n.mechanism);
            const d = o ? o.getEventProcessors() : [],
                p = Ie().getScopeData();
            s && qt(p, s.getScopeData()), l && qt(p, l.getScopeData());
            const h = [...n.attachments || [], ...p.attachments];
            return h.length && (n.attachments = h),
                function(e, t) {
                    const {
                        fingerprint: n,
                        span: r,
                        breadcrumbs: o,
                        sdkProcessingMetadata: s
                    } = t;
                    ! function(e, t) {
                        const {
                            extra: n,
                            tags: r,
                            user: o,
                            contexts: s,
                            level: i,
                            transactionName: a
                        } = t, c = J(n);
                        c && Object.keys(c).length && (e.extra = { ...c,
                            ...e.extra
                        });
                        const u = J(r);
                        u && Object.keys(u).length && (e.tags = { ...u,
                            ...e.tags
                        });
                        const l = J(o);
                        l && Object.keys(l).length && (e.user = { ...l,
                            ...e.user
                        });
                        const d = J(s);
                        d && Object.keys(d).length && (e.contexts = { ...d,
                            ...e.contexts
                        }), i && (e.level = i), a && "transaction" !== e.type && (e.transaction = a)
                    }(e, t), r && function(e, t) {
                            e.contexts = {
                                trace: Et(t),
                                ...e.contexts
                            }, e.sdkProcessingMetadata = {
                                dynamicSamplingContext: zt(t),
                                ...e.sdkProcessingMetadata
                            };
                            const n = It(Nt(t)).description;
                            n && !e.transaction && "transaction" === e.type && (e.transaction = n)
                        }(e, r),
                        function(e, t) {
                            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                        }(e, n),
                        function(e, t) {
                            const n = [...e.breadcrumbs || [], ...t];
                            e.breadcrumbs = n.length ? n : void 0
                        }(e, o),
                        function(e, t) {
                            e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
                                ...t
                            }
                        }(e, s)
                }(c, p), je([...d, ...p.eventProcessors], c, n).then((e => (e && function(e) {
                    const t = {};
                    try {
                        e.exception.values.forEach((e => {
                            e.stacktrace.frames.forEach((e => {
                                e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                            }))
                        }))
                    } catch (e) {}
                    if (0 === Object.keys(t).length) return;
                    e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                    const n = e.debug_meta.images;
                    Object.entries(t).forEach((([e, t]) => {
                        n.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: t
                        })
                    }))
                }(e), "number" == typeof i && i > 0 ? function(e, t, n) {
                    if (!e) return null;
                    const r = { ...e,
                        ...e.breadcrumbs && {
                            breadcrumbs: e.breadcrumbs.map((e => ({ ...e,
                                ...e.data && {
                                    data: tt(e.data, t, n)
                                }
                            })))
                        },
                        ...e.user && {
                            user: tt(e.user, t, n)
                        },
                        ...e.contexts && {
                            contexts: tt(e.contexts, t, n)
                        },
                        ...e.extra && {
                            extra: tt(e.extra, t, n)
                        }
                    };
                    return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = tt(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map((e => ({ ...e,
                        ...e.data && {
                            data: tt(e.data, t, n)
                        }
                    })))), e.contexts && e.contexts.flags && r.contexts && (r.contexts.flags = tt(e.contexts.flags, 3, n)), r
                }(e, i, a) : e)))
        }
        const Gt = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

        function Xt(e, t) {
            return Ce().captureException(e, function(e) {
                if (e) return function(e) {
                    return e instanceof _e || "function" == typeof e
                }(e) || function(e) {
                    return Object.keys(e).some((e => Gt.includes(e)))
                }(e) ? {
                    captureContext: e
                } : e
            }(t))
        }

        function Jt(e, t) {
            const n = "string" == typeof t ? t : void 0,
                r = "string" != typeof t ? {
                    captureContext: t
                } : void 0;
            return Ce().captureMessage(e, n, r)
        }

        function Kt(e, t) {
            return Ce().captureEvent(e, t)
        }

        function Zt(e, t) {
            Te().setContext(e, t)
        }

        function Qt(e) {
            Te().setExtras(e)
        }

        function en(e, t) {
            Te().setExtra(e, t)
        }

        function tn(e) {
            Te().setTags(e)
        }

        function nn(e, t) {
            Te().setTag(e, t)
        }

        function rn(e) {
            Te().setUser(e)
        }

        function on() {
            return Te().lastEventId()
        }
        async function sn(e) {
            const t = Ae();
            return t ? t.flush(e) : (Pe && F.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
        }
        async function an(e) {
            const t = Ae();
            return t ? t.close(e) : (Pe && F.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
        }

        function cn() {
            return !!Ae()
        }

        function un(e) {
            Te().addEventProcessor(e)
        }

        function ln(e) {
            const t = Ae(),
                n = Te(),
                r = Ce(),
                {
                    release: o,
                    environment: s = Ne
                } = t && t.getOptions() || {},
                {
                    userAgent: i
                } = C.navigator || {},
                a = function(e) {
                    const t = ee(),
                        n = {
                            sid: re(),
                            init: !0,
                            timestamp: t,
                            started: t,
                            duration: 0,
                            status: "ok",
                            errors: 0,
                            ignoreDuration: !1,
                            toJSON: () => function(e) {
                                return J({
                                    sid: `${e.sid}`,
                                    init: e.init,
                                    started: new Date(1e3 * e.started).toISOString(),
                                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                    status: e.status,
                                    errors: e.errors,
                                    did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                                    duration: e.duration,
                                    abnormal_mechanism: e.abnormal_mechanism,
                                    attrs: {
                                        release: e.release,
                                        environment: e.environment,
                                        ip_address: e.ipAddress,
                                        user_agent: e.userAgent
                                    }
                                })
                            }(n)
                        };
                    return e && ue(n, e), n
                }({
                    release: o,
                    environment: s,
                    user: r.getUser() || n.getUser(),
                    ...i && {
                        userAgent: i
                    },
                    ...e
                }),
                c = n.getSession();
            return c && "ok" === c.status && ue(c, {
                status: "exited"
            }), dn(), n.setSession(a), r.setSession(a), a
        }

        function dn() {
            const e = Te(),
                t = Ce(),
                n = t.getSession() || e.getSession();
            n && function(e, t) {
                let n = {};
                "ok" === e.status && (n = {
                    status: "exited"
                }), ue(e, n)
            }(n), pn(), e.setSession(), t.setSession()
        }

        function pn() {
            const e = Te(),
                t = Ce(),
                n = Ae(),
                r = t.getSession() || e.getSession();
            r && n && n.captureSession(r)
        }

        function hn(e = !1) {
            e ? dn() : pn()
        }
        const fn = [];

        function mn(e) {
            const t = e.defaultIntegrations || [],
                n = e.integrations;
            let r;
            if (t.forEach((e => {
                    e.isDefaultInstance = !0
                })), Array.isArray(n)) r = [...t, ...n];
            else if ("function" == typeof n) {
                const e = n(t);
                r = Array.isArray(e) ? e : [e]
            } else r = t;
            const o = function(e) {
                    const t = {};
                    return e.forEach((e => {
                        const {
                            name: n
                        } = e, r = t[n];
                        r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                    })), Object.values(t)
                }(r),
                s = o.findIndex((e => "Debug" === e.name));
            if (s > -1) {
                const [e] = o.splice(s, 1);
                o.push(e)
            }
            return o
        }

        function gn(e, t) {
            for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e)
        }

        function _n(e, t, n) {
            if (n[t.name]) Pe && F.log(`Integration skipped because it was already installed: ${t.name}`);
            else {
                if (n[t.name] = t, -1 === fn.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(), fn.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
                    const n = t.preprocessEvent.bind(t);
                    e.on("preprocessEvent", ((t, r) => n(t, r, e)))
                }
                if ("function" == typeof t.processEvent) {
                    const n = t.processEvent.bind(t),
                        r = Object.assign(((t, r) => n(t, r, e)), {
                            id: t.name
                        });
                    e.addEventProcessor(r)
                }
                Pe && F.log(`Integration installed: ${t.name}`)
            }
        }

        function yn(e) {
            const t = Ae();
            t ? t.addIntegration(e) : Pe && F.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`)
        }
        const vn = {},
            bn = {};

        function Sn(e, t) {
            vn[e] = vn[e] || [], vn[e].push(t)
        }

        function wn(e, t) {
            if (!bn[e]) {
                bn[e] = !0;
                try {
                    t()
                } catch (t) {
                    L && F.error(`Error while instrumenting ${e}`, t)
                }
            }
        }

        function kn(e, t) {
            const n = e && vn[e];
            if (n)
                for (const r of n) try {
                    r(t)
                } catch (t) {
                    L && F.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Qe(r)}\nError:`, t)
                }
        }
        let En = null;

        function xn(e) {
            const t = "error";
            Sn(t, e), wn(t, Cn)
        }

        function Cn() {
            En = C.onerror, C.onerror = function(e, t, n, r, o) {
                return kn("error", {
                    column: r,
                    error: o,
                    line: n,
                    msg: e,
                    url: t
                }), !!En && En.apply(this, arguments)
            }, C.onerror.__SENTRY_INSTRUMENTED__ = !0
        }
        let Tn = null;

        function In(e) {
            const t = "unhandledrejection";
            Sn(t, e), wn(t, Mn)
        }

        function Mn() {
            Tn = C.onunhandledrejection, C.onunhandledrejection = function(e) {
                return kn("unhandledrejection", e), !Tn || Tn.apply(this, arguments)
            }, C.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }
        let Rn = !1;

        function An() {
            Rn || (Rn = !0, xn(On), In(On))
        }

        function On() {
            const e = Pt(),
                t = e && Nt(e);
            if (t) {
                const e = "internal_error";
                Pe && F.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                    code: mt,
                    message: e
                })
            }
        }

        function Dn() {
            An()
        }

        function Ln(e) {
            const t = "console";
            Sn(t, e), wn(t, Nn)
        }

        function Nn() {
            "console" in C && N.forEach((function(e) {
                e in C.console && z(C.console, e, (function(t) {
                    return P[e] = t,
                        function(...t) {
                            kn("console", {
                                args: t,
                                level: e
                            });
                            const n = P[e];
                            n && n.apply(C.console, t)
                        }
                }))
            }))
        }

        function Pn(e) {
            return "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log"
        }
        On.tag = "sentry_tracingErrorCallback";
        const $n = (e = {}) => {
            const t = e.levels || N,
                n = !!e.handled;
            return {
                name: "CaptureConsole",
                setup(e) {
                    "console" in C && Ln((({
                        args: r,
                        level: o
                    }) => {
                        Ae() === e && t.includes(o) && function(e, t, n) {
                            const r = {
                                level: Pn(t),
                                extra: {
                                    arguments: e
                                }
                            };
                            Me((o => {
                                if (o.addEventProcessor((e => (e.logger = "console", ae(e, {
                                        handled: n,
                                        type: "console"
                                    }), e))), "assert" === t) {
                                    if (!e[0]) {
                                        const t = `Assertion failed: ${j(e.slice(1)," ")||"console.assert"}`;
                                        o.setExtra("arguments", e.slice(1)), Jt(t, r)
                                    }
                                    return
                                }
                                const s = e.find((e => e instanceof Error));
                                s ? Xt(s, r) : Jt(j(e, " "), r)
                            }))
                        }(r, o, n)
                    }))
                }
            }
        };

        function Fn(e, t = {}, n = Ce()) {
            const {
                message: r,
                name: o,
                email: s,
                url: i,
                source: a,
                associatedEventId: c,
                tags: u
            } = e, l = {
                contexts: {
                    feedback: J({
                        contact_email: s,
                        name: o,
                        message: r,
                        url: i,
                        source: a,
                        associated_event_id: c
                    })
                },
                type: "feedback",
                level: "info",
                tags: u
            }, d = n && n.getClient() || Ae();
            return d && d.emit("beforeSendFeedback", l, t), n.captureEvent(l, t)
        }

        function Bn(e, t, n = (() => {})) {
            let r;
            try {
                r = e()
            } catch (e) {
                throw t(e), n(), e
            }
            return function(e, t, n) {
                return k(e) ? e.then((e => (n(), e)), (e => {
                    throw t(e), n(), e
                })) : (n(), e)
            }(r, t, n)
        }

        function Un(e) {
            if ("boolean" == typeof e) return Number(e);
            const t = "string" == typeof e ? parseFloat(e) : e;
            if (!("number" != typeof t || isNaN(t) || t < 0 || t > 1)) return t;
            Pe && F.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`)
        }
        class jn {
            constructor(e = {}) {
                this._traceId = e.traceId || le(), this._spanId = e.spanId || de()
            }
            spanContext() {
                return {
                    spanId: this._spanId,
                    traceId: this._traceId,
                    traceFlags: 0
                }
            }
            end(e) {}
            setAttribute(e, t) {
                return this
            }
            setAttributes(e) {
                return this
            }
            setStatus(e) {
                return this
            }
            updateName(e) {
                return this
            }
            isRecording() {
                return !1
            }
            addEvent(e, t, n) {
                return this
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
        }
        const Hn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

        function zn(e, t = !1) {
            const {
                host: n,
                path: r,
                pass: o,
                port: s,
                projectId: i,
                protocol: a,
                publicKey: c
            } = e;
            return `${a}://${c}${t&&o?`:${o}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${i}`
        }

        function Wn(e) {
            const t = Hn.exec(e);
            if (!t) return void $((() => {
                console.error(`Invalid Sentry Dsn: ${e}`)
            }));
            const [n, r, o = "", s = "", i = "", a = ""] = t.slice(1);
            let c = "",
                u = a;
            const l = u.split("/");
            if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
                const e = u.match(/^\d+/);
                e && (u = e[0])
            }
            return qn({
                host: s,
                pass: o,
                path: c,
                projectId: u,
                port: i,
                protocol: n,
                publicKey: r
            })
        }

        function qn(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }

        function Yn(e) {
            const t = "string" == typeof e ? Wn(e) : qn(e);
            if (t && function(e) {
                    if (!L) return !0;
                    const {
                        port: t,
                        projectId: n,
                        protocol: r
                    } = e;
                    return !(["protocol", "publicKey", "host", "projectId"].find((t => !e[t] && (F.error(`Invalid Sentry Dsn: ${t} missing`), !0))) || (n.match(/^\d+$/) ? function(e) {
                        return "http" === e || "https" === e
                    }(r) ? t && isNaN(parseInt(t, 10)) && (F.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1) : (F.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1) : (F.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)))
                }(t)) return t
        }

        function Vn(e, t = []) {
            return [e, t]
        }

        function Gn(e, t) {
            const [n, r] = e;
            return [n, [...r, t]]
        }

        function Xn(e, t) {
            const n = e[1];
            for (const e of n)
                if (t(e, e[0].type)) return !0;
            return !1
        }

        function Jn(e, t) {
            return Xn(e, ((e, n) => t.includes(n)))
        }

        function Kn(e) {
            return C.__SENTRY__ && C.__SENTRY__.encodePolyfill ? C.__SENTRY__.encodePolyfill(e) : (new TextEncoder).encode(e)
        }

        function Zn(e) {
            const [t, n] = e;
            let r = JSON.stringify(t);

            function o(e) {
                "string" == typeof r ? r = "string" == typeof e ? r + e : [Kn(r), e] : r.push("string" == typeof e ? Kn(e) : e)
            }
            for (const e of n) {
                const [t, n] = e;
                if (o(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array) o(n);
                else {
                    let e;
                    try {
                        e = JSON.stringify(n)
                    } catch (t) {
                        e = JSON.stringify(tt(n))
                    }
                    o(e)
                }
            }
            return "string" == typeof r ? r : function(e) {
                const t = e.reduce(((e, t) => e + t.length), 0),
                    n = new Uint8Array(t);
                let r = 0;
                for (const t of e) n.set(t, r), r += t.length;
                return n
            }(r)
        }

        function Qn(e) {
            return [{
                type: "span"
            }, e]
        }

        function er(e) {
            const t = "string" == typeof e.data ? Kn(e.data) : e.data;
            return [J({
                type: "attachment",
                length: t.length,
                filename: e.filename,
                content_type: e.contentType,
                attachment_type: e.attachmentType
            }), t]
        }
        const tr = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            profile_chunk: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "metric_bucket",
            raw_security: "security"
        };

        function nr(e) {
            return tr[e]
        }

        function rr(e) {
            if (!e || !e.sdk) return;
            const {
                name: t,
                version: n
            } = e.sdk;
            return {
                name: t,
                version: n
            }
        }

        function or(e, t, n, r) {
            const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: (new Date).toISOString(),
                ...t && {
                    sdk: t
                },
                ...!!n && r && {
                    dsn: zn(r)
                },
                ...o && {
                    trace: J({ ...o
                    })
                }
            }
        }

        function sr(e, t, n, r = Pt()) {
            const o = r && Nt(r);
            o && (Pe && F.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), o.addEvent(e, {
                [l]: t,
                [u]: n
            }))
        }

        function ir(e) {
            if (!e || 0 === e.length) return;
            const t = {};
            return e.forEach((e => {
                const n = e.attributes || {},
                    r = n[u],
                    o = n[l];
                "string" == typeof r && "number" == typeof o && (t[e.name] = {
                    value: o,
                    unit: r
                })
            })), t
        }
        const ar = "_sentryScope",
            cr = "_sentryIsolationScope";

        function ur(e) {
            return {
                scope: e[ar],
                isolationScope: e[cr]
            }
        }
        class lr {
            constructor(e = {}) {
                this._traceId = e.traceId || le(), this._spanId = e.spanId || de(), this._startTime = e.startTimestamp || ee(), this._attributes = {}, this.setAttributes({
                    [a]: "manual",
                    [i]: e.op,
                    ...e.attributes
                }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
            spanContext() {
                const {
                    _spanId: e,
                    _traceId: t,
                    _sampled: n
                } = this;
                return {
                    spanId: e,
                    traceId: t,
                    traceFlags: n ? St : 0
                }
            }
            setAttribute(e, t) {
                return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, this
            }
            setAttributes(e) {
                return Object.keys(e).forEach((t => this.setAttribute(t, e[t]))), this
            }
            updateStartTime(e) {
                this._startTime = Ct(e)
            }
            setStatus(e) {
                return this._status = e, this
            }
            updateName(e) {
                return this._name = e, this.setAttribute(o, "custom"), this
            }
            end(e) {
                this._endTime || (this._endTime = Ct(e), function(e) {
                    if (!Pe) return;
                    const {
                        description: t = "< unknown name >",
                        op: n = "< unknown op >"
                    } = It(e), {
                        spanId: r
                    } = e.spanContext(), o = `[Tracing] Finishing "${n}" ${Nt(e)===e?"root ":""}span "${t}" with ID ${r}`;
                    F.log(o)
                }(this), this._onSpanEnded())
            }
            getSpanJSON() {
                return J({
                    data: this._attributes,
                    description: this._name,
                    op: this._attributes[i],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: Rt(this._status),
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[a],
                    _metrics_summary: pt(this),
                    profile_id: this._attributes["sentry.profile_id"],
                    exclusive_time: this._attributes[p],
                    measurements: ir(this._events),
                    is_segment: this._isStandaloneSpan && Nt(this) === this || void 0,
                    segment_id: this._isStandaloneSpan ? Nt(this).spanContext().spanId : void 0
                })
            }
            isRecording() {
                return !this._endTime && !!this._sampled
            }
            addEvent(e, t, n) {
                Pe && F.log("[Tracing] Adding an event to span:", e);
                const r = dr(t) ? t : n || ee(),
                    o = dr(t) ? {} : t || {},
                    s = {
                        name: e,
                        time: Ct(r),
                        attributes: o
                    };
                return this._events.push(s), this
            }
            isStandaloneSpan() {
                return !!this._isStandaloneSpan
            }
            _onSpanEnded() {
                const e = Ae();
                if (e && e.emit("spanEnd", this), !this._isStandaloneSpan && this !== Nt(this)) return;
                if (this._isStandaloneSpan) return void(this._sampled ? function(e) {
                    const t = Ae();
                    if (!t) return;
                    const n = e[1];
                    n && 0 !== n.length ? t.sendEnvelope(e) : t.recordDroppedEvent("before_send", "span")
                }(function(e, t) {
                    const n = zt(e[0]),
                        r = t && t.getDsn(),
                        o = t && t.getOptions().tunnel,
                        s = {
                            sent_at: (new Date).toISOString(),
                            ... function(e) {
                                return !!e.trace_id && !!e.public_key
                            }(n) && {
                                trace: n
                            },
                            ...!!o && r && {
                                dsn: zn(r)
                            }
                        },
                        i = t && t.getOptions().beforeSendSpan,
                        a = i ? e => {
                            const t = i(It(e));
                            return t || $t(), t
                        } : e => It(e),
                        c = [];
                    for (const t of e) {
                        const e = a(t);
                        e && c.push(Qn(e))
                    }
                    return Vn(s, c)
                }([this], e)) : (Pe && F.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
                const t = this._convertSpanToTransaction();
                t && (ur(this).scope || Ce()).captureEvent(t)
            }
            _convertSpanToTransaction() {
                if (!pr(It(this))) return;
                this._name || (Pe && F.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
                const {
                    scope: e,
                    isolationScope: t
                } = ur(this), n = (e || Ce()).getClient() || Ae();
                if (!0 !== this._sampled) return Pe && F.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(n && n.recordDroppedEvent("sample_rate", "transaction"));
                const r = Lt(this).filter((e => e !== this && ! function(e) {
                        return e instanceof lr && e.isStandaloneSpan()
                    }(e))).map((e => It(e))).filter(pr),
                    s = this._attributes[o];
                delete this._attributes[d], r.forEach((e => {
                    e.data && delete e.data[d]
                }));
                const i = {
                        contexts: {
                            trace: kt(this)
                        },
                        spans: r.length > 1e3 ? r.sort(((e, t) => e.start_timestamp - t.start_timestamp)).slice(0, 1e3) : r,
                        start_timestamp: this._startTime,
                        timestamp: this._endTime,
                        transaction: this._name,
                        type: "transaction",
                        sdkProcessingMetadata: {
                            capturedSpanScope: e,
                            capturedSpanIsolationScope: t,
                            ...J({
                                dynamicSamplingContext: zt(this)
                            })
                        },
                        _metrics_summary: pt(this),
                        ...s && {
                            transaction_info: {
                                source: s
                            }
                        }
                    },
                    a = ir(this._events);
                return a && Object.keys(a).length && (Pe && F.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, void 0, 2)), i.measurements = a), i
            }
        }

        function dr(e) {
            return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
        }

        function pr(e) {
            return !!(e.start_timestamp && e.timestamp && e.span_id && e.trace_id)
        }
        const hr = "__SENTRY_SUPPRESS_TRACING__";

        function fr(e, t) {
            const n = kr();
            if (n.startSpan) return n.startSpan(e, t);
            const r = wr(e),
                {
                    forceTransaction: o,
                    parentSpan: s
                } = e;
            return Me(e.scope, (() => Cr(s)((() => {
                const n = Ce(),
                    s = xr(n),
                    i = e.onlyIfParent && !s ? new jn : Sr({
                        parentSpan: s,
                        spanArguments: r,
                        forceTransaction: o,
                        scope: n
                    });
                return fe(n, i), Bn((() => t(i)), (() => {
                    const {
                        status: e
                    } = It(i);
                    !i.isRecording() || e && "ok" !== e || i.setStatus({
                        code: mt,
                        message: "internal_error"
                    })
                }), (() => i.end()))
            }))))
        }

        function mr(e, t) {
            const n = kr();
            if (n.startSpanManual) return n.startSpanManual(e, t);
            const r = wr(e),
                {
                    forceTransaction: o,
                    parentSpan: s
                } = e;
            return Me(e.scope, (() => Cr(s)((() => {
                const n = Ce(),
                    s = xr(n),
                    i = e.onlyIfParent && !s ? new jn : Sr({
                        parentSpan: s,
                        spanArguments: r,
                        forceTransaction: o,
                        scope: n
                    });

                function a() {
                    i.end()
                }
                return fe(n, i), Bn((() => t(i, a)), (() => {
                    const {
                        status: e
                    } = It(i);
                    !i.isRecording() || e && "ok" !== e || i.setStatus({
                        code: mt,
                        message: "internal_error"
                    })
                }))
            }))))
        }

        function gr(e) {
            const t = kr();
            if (t.startInactiveSpan) return t.startInactiveSpan(e);
            const n = wr(e),
                {
                    forceTransaction: r,
                    parentSpan: o
                } = e;
            return (e.scope ? t => Me(e.scope, t) : void 0 !== o ? e => yr(o, e) : e => e())((() => {
                const t = Ce(),
                    o = xr(t);
                return e.onlyIfParent && !o ? new jn : Sr({
                    parentSpan: o,
                    spanArguments: n,
                    forceTransaction: r,
                    scope: t
                })
            }))
        }
        const _r = (e, t) => {
            const n = xe(ye());
            if (n.continueTrace) return n.continueTrace(e, t);
            const {
                sentryTrace: r,
                baggage: o
            } = e;
            return Me((e => {
                const n = vt(r, o);
                return e.setPropagationContext(n), t()
            }))
        };

        function yr(e, t) {
            const n = kr();
            return n.withActiveSpan ? n.withActiveSpan(e, t) : Me((n => (fe(n, e || void 0), t(n))))
        }

        function vr(e) {
            const t = kr();
            return t.suppressTracing ? t.suppressTracing(e) : Me((t => (t.setSDKProcessingMetadata({
                [hr]: !0
            }), e())))
        }

        function br(e) {
            return Me((t => (t.setPropagationContext({
                traceId: le()
            }), Pe && F.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`), yr(null, e))))
        }

        function Sr({
            parentSpan: e,
            spanArguments: t,
            forceTransaction: n,
            scope: r
        }) {
            if (!lt()) return new jn;
            const o = Te();
            let s;
            if (e && !n) s = function(e, t, n) {
                const {
                    spanId: r,
                    traceId: o
                } = e.spanContext(), s = !t.getScopeData().sdkProcessingMetadata[hr] && Mt(e), i = s ? new lr({ ...n,
                    parentSpanId: r,
                    traceId: o,
                    sampled: s
                }) : new jn({
                    traceId: o
                });
                Dt(e, i);
                const a = Ae();
                return a && (a.emit("spanStart", i), n.endTimestamp && a.emit("spanEnd", i)), i
            }(e, r, t), Dt(e, s);
            else if (e) {
                const n = zt(e),
                    {
                        traceId: o,
                        spanId: i
                    } = e.spanContext(),
                    a = Mt(e);
                s = Er({
                    traceId: o,
                    parentSpanId: i,
                    ...t
                }, r, a), Ut(s, n)
            } else {
                const {
                    traceId: e,
                    dsc: n,
                    parentSpanId: i,
                    sampled: a
                } = { ...o.getPropagationContext(),
                    ...r.getPropagationContext()
                };
                s = Er({
                    traceId: e,
                    parentSpanId: i,
                    ...t
                }, r, a), n && Ut(s, n)
            }
            return function(e) {
                    if (!Pe) return;
                    const {
                        description: t = "< unknown name >",
                        op: n = "< unknown op >",
                        parent_span_id: r
                    } = It(e), {
                        spanId: o
                    } = e.spanContext(), s = Mt(e), i = Nt(e), a = i === e, c = `[Tracing] Starting ${s?"sampled":"unsampled"} ${a?"root ":""}span`, u = [`op: ${n}`, `name: ${t}`, `ID: ${o}`];
                    if (r && u.push(`parent ID: ${r}`), !a) {
                        const {
                            op: e,
                            description: t
                        } = It(i);
                        u.push(`root ID: ${i.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`)
                    }
                    F.log(`${c}\n  ${u.join("\n  ")}`)
                }(s),
                function(e, t, n) {
                    e && (W(e, cr, n), W(e, ar, t))
                }(s, r, o), s
        }

        function wr(e) {
            const t = {
                isStandalone: (e.experimental || {}).standalone,
                ...e
            };
            if (e.startTime) {
                const n = { ...t
                };
                return n.startTimestamp = Ct(e.startTime), delete n.startTime, n
            }
            return t
        }

        function kr() {
            return xe(ye())
        }

        function Er(e, t, n) {
            const r = Ae(),
                i = r && r.getOptions() || {},
                {
                    name: a = "",
                    attributes: c
                } = e,
                [u, l] = t.getScopeData().sdkProcessingMetadata[hr] ? [!1] : function(e, t) {
                    if (!lt(e)) return [!1];
                    const n = Te().getScopeData().sdkProcessingMetadata.normalizedRequest,
                        r = { ...t,
                            normalizedRequest: t.normalizedRequest || n
                        };
                    let o;
                    o = "function" == typeof e.tracesSampler ? e.tracesSampler(r) : void 0 !== r.parentSampled ? r.parentSampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1;
                    const s = Un(o);
                    return void 0 === s ? (Pe && F.warn("[Tracing] Discarding transaction because of invalid sample rate."), [!1]) : s ? Math.random() < s ? [!0, s] : (Pe && F.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`), [!1, s]) : (Pe && F.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, s])
                }(i, {
                    name: a,
                    parentSampled: n,
                    attributes: c,
                    transactionContext: {
                        name: a,
                        parentSampled: n
                    }
                }),
                d = new lr({ ...e,
                    attributes: {
                        [o]: "custom",
                        ...e.attributes
                    },
                    sampled: u
                });
            return void 0 !== l && d.setAttribute(s, l), r && r.emit("spanStart", d), d
        }

        function xr(e) {
            const t = me(e);
            if (!t) return;
            const n = Ae();
            return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Nt(t) : t
        }

        function Cr(e) {
            return void 0 !== e ? t => yr(e, t) : e => e()
        }
        class Tr extends Error {
            constructor(e, t = "warn") {
                super(e), this.message = e, this.logLevel = t
            }
        }
        const Ir = 6e4;

        function Mr(e, t = Date.now()) {
            const n = parseInt(`${e}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            const r = Date.parse(`${e}`);
            return isNaN(r) ? Ir : r - t
        }

        function Rr(e, t, n = Date.now()) {
            return function(e, t) {
                return e[t] || e.all || 0
            }(e, t) > n
        }

        function Ar(e, {
            statusCode: t,
            headers: n
        }, r = Date.now()) {
            const o = { ...e
                },
                s = n && n["x-sentry-rate-limits"],
                i = n && n["retry-after"];
            if (s)
                for (const e of s.trim().split(",")) {
                    const [t, n, , , s] = e.split(":", 5), i = parseInt(t, 10), a = 1e3 * (isNaN(i) ? 60 : i);
                    if (n)
                        for (const e of n.split(";")) "metric_bucket" === e && s && !s.split(";").includes("custom") || (o[e] = r + a);
                    else o.all = r + a
                } else i ? o.all = r + Mr(i, r) : 429 === t && (o.all = r + 6e4);
            return o
        }
        const Or = 64;

        function Dr(e, t, n = function(e) {
            const t = [];

            function n(e) {
                return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
            }
            return {
                $: t,
                add: function(r) {
                    if (!(void 0 === e || t.length < e)) return Be(new Tr("Not adding Promise because buffer limit was reached."));
                    const o = r();
                    return -1 === t.indexOf(o) && t.push(o), o.then((() => n(o))).then(null, (() => n(o).then(null, (() => {})))), o
                },
                drain: function(e) {
                    return new Ue(((n, r) => {
                        let o = t.length;
                        if (!o) return n(!0);
                        const s = setTimeout((() => {
                            e && e > 0 && n(!1)
                        }), e);
                        t.forEach((e => {
                            Fe(e).then((() => {
                                --o || (clearTimeout(s), n(!0))
                            }), r)
                        }))
                    }))
                }
            }
        }(e.bufferSize || Or)) {
            let r = {};
            return {
                send: function(o) {
                    const s = [];
                    if (Xn(o, ((t, n) => {
                            const o = nr(n);
                            if (Rr(r, o)) {
                                const r = Lr(t, n);
                                e.recordDroppedEvent("ratelimit_backoff", o, r)
                            } else s.push(t)
                        })), 0 === s.length) return Fe({});
                    const i = Vn(o[0], s),
                        a = t => {
                            Xn(i, ((n, r) => {
                                const o = Lr(n, r);
                                e.recordDroppedEvent(t, nr(r), o)
                            }))
                        };
                    return n.add((() => t({
                        body: Zn(i)
                    }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && Pe && F.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = Ar(r, e), e)), (e => {
                        throw a("network_error"), e
                    })))).then((e => e), (e => {
                        if (e instanceof Tr) return Pe && F.error("Skipped sending event because buffer is full."), a("queue_overflow"), Fe({});
                        throw e
                    }))
                },
                flush: e => n.drain(e)
            }
        }

        function Lr(e, t) {
            if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0
        }
        const Nr = (e = {}) => {
                const t = {
                    debugger: !1,
                    stringify: !1,
                    ...e
                };
                return {
                    name: "Debug",
                    setup(e) {
                        e.on("beforeSendEvent", ((e, n) => {
                            t.debugger, $((() => {
                                t.stringify ? (console.log(JSON.stringify(e, null, 2)), n && Object.keys(n).length && console.log(JSON.stringify(n, null, 2))) : (console.log(e), n && Object.keys(n).length && console.log(n))
                            }))
                        }))
                    }
                }
            },
            Pr = () => {
                let e;
                return {
                    name: "Dedupe",
                    processEvent(t) {
                        if (t.type) return t;
                        try {
                            if (function(e, t) {
                                    return !!t && (!! function(e, t) {
                                        const n = e.message,
                                            r = t.message;
                                        return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!Fr(e, t) && !!$r(e, t))))
                                    }(e, t) || !! function(e, t) {
                                        const n = Br(t),
                                            r = Br(e);
                                        return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!Fr(e, t) && !!$r(e, t)))
                                    }(e, t))
                                }(t, e)) return Pe && F.warn("Event dropped due to being a duplicate of previously captured event."), null
                        } catch (e) {}
                        return e = t
                    }
                }
            };

        function $r(e, t) {
            let n = et(e),
                r = et(t);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (let e = 0; e < r.length; e++) {
                const t = r[e],
                    o = n[e];
                if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function) return !1
            }
            return !0
        }

        function Fr(e, t) {
            let n = e.fingerprint,
                r = t.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }

        function Br(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }
        const Ur = (e = {}) => {
            const {
                depth: t = 3,
                captureErrorCause: n = !0
            } = e;
            return {
                name: "ExtraErrorData",
                processEvent(e, r, o) {
                    const {
                        maxValueLength: s = 250
                    } = o.getOptions();
                    return function(e, t = {}, n, r, o) {
                        if (!t.originalException || !f(t.originalException)) return e;
                        const s = t.originalException.name || t.originalException.constructor.name,
                            i = function(e, t, n) {
                                try {
                                    const r = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                                        o = {};
                                    for (const t of Object.keys(e)) {
                                        if (-1 !== r.indexOf(t)) continue;
                                        const s = e[t];
                                        o[t] = f(s) || "string" == typeof s ? B(`${s}`, n) : s
                                    }
                                    if (t && void 0 !== e.cause && (o.cause = f(e.cause) ? e.cause.toString() : e.cause), "function" == typeof e.toJSON) {
                                        const t = e.toJSON();
                                        for (const e of Object.keys(t)) {
                                            const n = t[e];
                                            o[e] = f(n) ? n.toString() : n
                                        }
                                    }
                                    return o
                                } catch (e) {
                                    Pe && F.error("Unable to extract extra data from the Error object:", e)
                                }
                                return null
                            }(t.originalException, r, o);
                        if (i) {
                            const t = { ...e.contexts
                                },
                                r = tt(i, n);
                            return S(r) && (W(r, "__sentry_skip_normalization__", !0), t[s] = r), { ...e,
                                contexts: t
                            }
                        }
                        return e
                    }(e, r, t, n, s)
                }
            }
        };
        let jr;
        const Hr = new WeakMap,
            zr = () => ({
                name: "FunctionToString",
                setupOnce() {
                    jr = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function(...e) {
                            const t = Y(this),
                                n = Hr.has(Ae()) && void 0 !== t ? t : this;
                            return jr.apply(n, e)
                        }
                    } catch (e) {}
                },
                setup(e) {
                    Hr.set(e, !0)
                }
            }),
            Wr = function() {
                return {
                    bindClient(e) {
                        Ce().setClient(e)
                    },
                    withScope: Me,
                    getClient: () => Ae(),
                    getScope: Ce,
                    getIsolationScope: Te,
                    captureException: (e, t) => Ce().captureException(e, t),
                    captureMessage: (e, t, n) => Ce().captureMessage(e, t, n),
                    captureEvent: Kt,
                    addBreadcrumb: Le,
                    setUser: rn,
                    setTags: tn,
                    setTag: nn,
                    setExtra: en,
                    setExtras: Qt,
                    setContext: Zt,
                    getIntegration(e) {
                        const t = Ae();
                        return t && t.getIntegrationByName(e.id) || null
                    },
                    startSession: ln,
                    endSession: dn,
                    captureSession(e) {
                        if (e) return dn();
                        ! function() {
                            const e = Ce(),
                                t = Ae(),
                                n = e.getSession();
                            t && n && t.captureSession(n)
                        }()
                    }
                }
            },
            qr = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/],
            Yr = (e = {}) => ({
                name: "InboundFilters",
                processEvent(t, n, r) {
                    const o = r.getOptions(),
                        s = function(e = {}, t = {}) {
                            return {
                                allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                                denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                                ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : qr],
                                ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
                                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                            }
                        }(e, o);
                    return function(e, t) {
                        return t.ignoreInternal && function(e) {
                            try {
                                return "SentryError" === e.exception.values[0].type
                            } catch (e) {}
                            return !1
                        }(e) ? (Pe && F.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${se(e)}`), !0) : function(e, t) {
                            return !(e.type || !t || !t.length) && function(e) {
                                const t = [];
                                let n;
                                e.message && t.push(e.message);
                                try {
                                    n = e.exception.values[e.exception.values.length - 1]
                                } catch (e) {}
                                return n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)), t
                            }(e).some((e => H(e, t)))
                        }(e, t.ignoreErrors) ? (Pe && F.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${se(e)}`), !0) : function(e) {
                            return !e.type && (!(!e.exception || !e.exception.values || 0 === e.exception.values.length) && (!e.message && !e.exception.values.some((e => e.stacktrace || e.type && "Error" !== e.type || e.value))))
                        }(e) ? (Pe && F.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${se(e)}`), !0) : function(e, t) {
                            if ("transaction" !== e.type || !t || !t.length) return !1;
                            const n = e.transaction;
                            return !!n && H(n, t)
                        }(e, t.ignoreTransactions) ? (Pe && F.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${se(e)}`), !0) : function(e, t) {
                            if (!t || !t.length) return !1;
                            const n = Vr(e);
                            return !!n && H(n, t)
                        }(e, t.denyUrls) ? (Pe && F.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${se(e)}.\nUrl: ${Vr(e)}`), !0) : ! function(e, t) {
                            if (!t || !t.length) return !0;
                            const n = Vr(e);
                            return !n || H(n, t)
                        }(e, t.allowUrls) && (Pe && F.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${se(e)}.\nUrl: ${Vr(e)}`), !0)
                    }(t, s) ? null : t
                }
            });

        function Vr(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {}
                return t ? function(e = []) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                    }
                    return null
                }(t) : null
            } catch (t) {
                return Pe && F.error(`Cannot extract url for event ${se(e)}`), null
            }
        }
        const Gr = "7";

        function Xr(e) {
            const t = e.protocol ? `${e.protocol}:` : "",
                n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
        }

        function Jr(e, t, n) {
            return t || `${function(e){return`${Xr(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){const n={sentry_version:Gr};return e.publicKey&&(n.sentry_key=e.publicKey),t&&(n.sentry_client=`
            $ {
                t.name
            }
            /${t.version}`),new URLSearchParams(n).toString()}(e,n)}`}function Kr(e,t){let n;return Xn(e,((e,r)=>(t.includes(r)&&(n=Array.isArray(e)?e[1]:void 0),!!n))),n}function Zr(e,t){return n=>{const r=e(n),o=new Map;function s(t,r){const s=r?`${t}:${r}`:t;let i=o.get(s);if(!i){const a=Wn(t);if(!a)return;const c=Jr(a,n.tunnel);i=r?function(e,t){return n=>{const r=e(n);return{...r,send:async e=>{const n=Kr(e,["event","transaction","profile","replay_event"]);return n&&(n.release=t),r.send(e)}}}}(e,r)({...n,url:c}):e({...n,url:c}),o.set(s,i)}return[t,i]}return{send:async function(e){const n=t({envelope:e,getEvent:function(t){const n=t&&t.length?t:["event"];return Kr(e,n)}}).map((e=>"string"==typeof e?s(e,void 0):s(e.dsn,e.release))).filter((e=>!!e)),o=n.length?n:[["",r]];return(await Promise.all(o.map((([t,n])=>n.send(function(e,t){return Vn(t?{...e[0],dsn:t}:e[0],e[1])}(e,t))))))[0]},flush:async function(e){const t=[...o.values(),r];return(await Promise.all(t.map((t=>t.flush(e))))).every((e=>e))}}}}const Qr=new Map,eo=new Set;function to(e,t){return function(e){if(C._sentryModuleMetadata)for(const t of Object.keys(C._sentryModuleMetadata)){const n=C._sentryModuleMetadata[t];if(eo.has(t))continue;eo.add(t);const r=e(t);for(const e of r.reverse())if(e.filename){Qr.set(e.filename,n);break}}}(e),Qr.get(t)}function no(e,t){try{t.exception.values.forEach((t=>{if(t.stacktrace)for(const n of t.stacktrace.frames||[]){if(!n.filename||n.module_metadata)continue;const t=to(e,n.filename);t&&(n.module_metadata=t)}}))}catch(e){}}function ro(e){try{e.exception.values.forEach((e=>{if(e.stacktrace)for(const t of e.stacktrace.frames||[])delete t.module_metadata}))}catch(e){}}const oo=()=>({name:"ModuleMetadata",setup(e){e.on("beforeEnvelope",(e=>{Xn(e,((e,t)=>{if("event"===t){const t=Array.isArray(e)?e[1]:void 0;t&&(ro(t),e[1]=t)}}))})),e.on("applyFrameMetadata",(t=>{t.type||no(e.getOptions().stackParser,t)}))}});function so(e,...t){const n=new String(String.raw(e,...t));return n.__sentry_template_string__=e.join("\0").replace(/ % /g,"%%").replace(/\
            0 / g, "%s"), n.__sentry_template_values__ = t, n
    }
    const io = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

    function ao(...e) {
        let t = "",
            n = !1;
        for (let r = e.length - 1; r >= -1 && !n; r--) {
            const o = r >= 0 ? e[r] : "/";
            o && (t = `${o}/${t}`, n = "/" === o.charAt(0))
        }
        return t = function(e, t) {
            let n = 0;
            for (let t = e.length - 1; t >= 0; t--) {
                const r = e[t];
                "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
            }
            if (t)
                for (; n--; n) e.unshift("..");
            return e
        }(t.split("/").filter((e => !!e)), !n).join("/"), (n ? "/" : "") + t || "."
    }

    function co(e) {
        let t = 0;
        for (; t < e.length && "" === e[t]; t++);
        let n = e.length - 1;
        for (; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1)
    }
    const uo = (e = {}) => {
            const t = e.root,
                n = e.prefix || "app:///",
                r = "window" in C && void 0 !== C.window,
                o = e.iteratee || function({
                    isBrowser: e,
                    root: t,
                    prefix: n
                }) {
                    return r => {
                        if (!r.filename) return r;
                        const o = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                            s = /^\//.test(r.filename);
                        if (e) {
                            if (t) {
                                const e = r.filename;
                                0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                            }
                        } else if (o || s) {
                            const e = o ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                                s = t ? function(e, t) {
                                    e = ao(e).slice(1), t = ao(t).slice(1);
                                    const n = co(e.split("/")),
                                        r = co(t.split("/")),
                                        o = Math.min(n.length, r.length);
                                    let s = o;
                                    for (let e = 0; e < o; e++)
                                        if (n[e] !== r[e]) {
                                            s = e;
                                            break
                                        }
                                    let i = [];
                                    for (let e = s; e < n.length; e++) i.push("..");
                                    return i = i.concat(r.slice(s)), i.join("/")
                                }(t, e) : function(e, t) {
                                    let n = function(e) {
                                        const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                                            n = io.exec(t);
                                        return n ? n.slice(1) : []
                                    }(e)[2] || "";
                                    return n
                                }(e);
                            r.filename = `${n}${s}`
                        }
                        return r
                    }
                }({
                    isBrowser: r,
                    root: t,
                    prefix: n
                });
            return {
                name: "RewriteFrames",
                processEvent(e) {
                    let t = e;
                    return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                        try {
                            return { ...e,
                                exception: { ...e.exception,
                                    values: e.exception.values.map((e => {
                                        return { ...e,
                                            ...e.stacktrace && {
                                                stacktrace: (t = e.stacktrace, { ...t,
                                                    frames: t && t.frames && t.frames.map((e => o(e)))
                                                })
                                            }
                                        };
                                        var t
                                    }))
                                }
                            }
                        } catch (t) {
                            return e
                        }
                    }(t)), t
                }
            }
        },
        lo = () => {
            const e = 1e3 * ee();
            return {
                name: "SessionTiming",
                processEvent(t) {
                    const n = 1e3 * ee();
                    return { ...t,
                        extra: { ...t.extra,
                            "session:start": e,
                            "session:duration": n - e,
                            "session:end": n
                        }
                    }
                }
            }
        };

    function po(e) {
        Ce().setClient(e)
    }
    const ho = e => ({
            name: "ThirdPartyErrorsFilter",
            setup(e) {
                e.on("beforeEnvelope", (e => {
                    Xn(e, ((e, t) => {
                        if ("event" === t) {
                            const t = Array.isArray(e) ? e[1] : void 0;
                            t && (ro(t), e[1] = t)
                        }
                    }))
                })), e.on("applyFrameMetadata", (t => {
                    t.type || no(e.getOptions().stackParser, t)
                }))
            },
            processEvent(t) {
                const n = function(e) {
                    const t = et(e);
                    if (t) return t.filter((e => !!e.filename)).map((e => e.module_metadata ? Object.keys(e.module_metadata).filter((e => e.startsWith(fo))).map((e => e.slice(fo.length))) : []))
                }(t);
                if (n) {
                    const r = n["drop-error-if-contains-third-party-frames" === e.behaviour || "apply-tag-if-contains-third-party-frames" === e.behaviour ? "some" : "every"]((t => !t.some((t => e.filterKeys.includes(t)))));
                    if (r) {
                        if ("drop-error-if-contains-third-party-frames" === e.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour) return null;
                        t.tags = { ...t.tags,
                            third_party_code: !0
                        }
                    }
                }
                return t
            }
        }),
        fo = "_sentryBundlerPluginAppKey:";

    function mo(e) {
        return { ...e,
            path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
            keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
            unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
        }
    }

    function go(e) {
        const t = new Set;
        for (const n of e.issues) {
            const e = n.path.map((e => "number" == typeof e ? "<array>" : e)).join(".");
            e.length > 0 && t.add(e)
        }
        const n = Array.from(t);
        if (0 === n.length) {
            let t = "variable";
            if (e.issues.length > 0) {
                const n = e.issues[0];
                void 0 !== n && "expected" in n && "string" == typeof n.expected && (t = n.expected)
            }
            return `Failed to validate ${t}`
        }
        return `Failed to validate keys: ${B(n.join(", "),100)}`
    }
    const _o = (e = {}) => {
            const t = void 0 === e.limit ? 10 : e.limit;
            return {
                name: "ZodErrors",
                processEvent: (n, r) => function(e, t = !1, n, r) {
                    if (!(n.exception && n.exception.values && r && r.originalException && (o = r.originalException, f(o) && "ZodError" === o.name && Array.isArray(o.issues)) && 0 !== r.originalException.issues.length)) return n;
                    var o;
                    try {
                        const o = (t ? r.originalException.issues : r.originalException.issues.slice(0, e)).map(mo);
                        return t && (Array.isArray(r.attachments) || (r.attachments = []), r.attachments.push({
                            filename: "zod_issues.json",
                            data: JSON.stringify({
                                issues: o
                            })
                        })), { ...n,
                            exception: { ...n.exception,
                                values: [{ ...n.exception.values[0],
                                    value: go(r.originalException)
                                }, ...n.exception.values.slice(1)]
                            },
                            extra: { ...n.extra,
                                "zoderror.issues": o.slice(0, e)
                            }
                        }
                    } catch (e) {
                        return { ...n,
                            extra: { ...n.extra,
                                "zoderrors sentry integration parse error": {
                                    message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                                    error: e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : "unknown"
                                }
                            }
                        }
                    }
                }(t, e.saveZodIssuesAsAttachment, n, r)
            }
        },
        yo = C;
    let vo = 0;

    function bo() {
        return vo > 0
    }

    function So(e, t = {}) {
        if (! function(e) {
                return "function" == typeof e
            }(e)) return e;
        try {
            const t = e.__sentry_wrapped__;
            if (t) return "function" == typeof t ? t : e;
            if (Y(e)) return e
        } catch (t) {
            return e
        }
        const n = function(...n) {
            try {
                const r = n.map((e => So(e, t)));
                return e.apply(this, r)
            } catch (e) {
                throw vo++, setTimeout((() => {
                    vo--
                })), Me((r => {
                    r.addEventProcessor((e => (t.mechanism && (ie(e, void 0, void 0), ae(e, t.mechanism)), e.extra = { ...e.extra,
                        arguments: n
                    }, e))), Xt(e)
                })), e
            }
        };
        try {
            for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
        } catch (e) {}
        q(n, e), W(e, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get: () => e.name
            })
        } catch (e) {}
        return n
    }
    const wo = "Not capturing exception because it's already been captured.";class ko {
        constructor(e) {
            if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = Yn(e.dsn) : Pe && F.warn("No DSN provided, client will not send events."), this._dsn) {
                const t = Jr(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
                this._transport = e.transport({
                    tunnel: this._options.tunnel,
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: t
                })
            }
            const t = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((t => t in e && null == e[t]));
            t && $((() => {
                console.warn(`[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`)
            }))
        }
        captureException(e, t, n) {
            const r = re();
            if (ce(e)) return Pe && F.log(wo), r;
            const o = {
                event_id: r,
                ...t
            };
            return this._process(this.eventFromException(e, o).then((e => this._captureEvent(e, o, n)))), o.event_id
        }
        captureMessage(e, t, n, r) {
            const o = {
                    event_id: re(),
                    ...n
                },
                s = v(e) ? e : String(e),
                i = b(e) ? this.eventFromMessage(s, t, o) : this.eventFromException(e, o);
            return this._process(i.then((e => this._captureEvent(e, o, r)))), o.event_id
        }
        captureEvent(e, t, n) {
            const r = re();
            if (t && t.originalException && ce(t.originalException)) return Pe && F.log(wo), r;
            const o = {
                    event_id: r,
                    ...t
                },
                s = (e.sdkProcessingMetadata || {}).capturedSpanScope;
            return this._process(this._captureEvent(e, o, s || n)), o.event_id
        }
        captureSession(e) {
            "string" != typeof e.release ? Pe && F.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), ue(e, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(e) {
            const t = this._transport;
            return t ? (this.emit("flush"), this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e))))) : Fe(!0)
        }
        close(e) {
            return this.flush(e).then((e => (this.getOptions().enabled = !1, this.emit("close"), e)))
        }
        getEventProcessors() {
            return this._eventProcessors
        }
        addEventProcessor(e) {
            this._eventProcessors.push(e)
        }
        init() {
            (this._isEnabled() || this._options.integrations.some((({
                name: e
            }) => e.startsWith("Spotlight")))) && this._setupIntegrations()
        }
        getIntegrationByName(e) {
            return this._integrations[e]
        }
        addIntegration(e) {
            const t = this._integrations[e.name];
            _n(this, e, this._integrations), t || gn(this, [e])
        }
        sendEvent(e, t = {}) {
            this.emit("beforeSendEvent", e, t);
            let n = function(e, t, n, r) {
                const o = rr(n),
                    s = e.type && "replay_event" !== e.type ? e.type : "event";
                ! function(e, t) {
                    t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
                }(e, n && n.sdk);
                const i = or(e, o, r, t);
                return delete e.sdkProcessingMetadata, Vn(i, [
                    [{
                        type: s
                    }, e]
                ])
            }(e, this._dsn, this._options._metadata, this._options.tunnel);
            for (const e of t.attachments || []) n = Gn(n, er(e));
            const r = this.sendEnvelope(n);
            r && r.then((t => this.emit("afterSendEvent", e, t)), null)
        }
        sendSession(e) {
            const t = function(e, t, n, r) {
                const o = rr(n);
                return Vn({
                    sent_at: (new Date).toISOString(),
                    ...o && {
                        sdk: o
                    },
                    ...!!r && t && {
                        dsn: zn(t)
                    }
                }, ["aggregates" in e ? [{
                    type: "sessions"
                }, e] : [{
                    type: "session"
                }, e.toJSON()]])
            }(e, this._dsn, this._options._metadata, this._options.tunnel);
            this.sendEnvelope(t)
        }
        recordDroppedEvent(e, t, n) {
            if (this._options.sendClientReports) {
                const r = "number" == typeof n ? n : 1,
                    o = `${e}:${t}`;
                Pe && F.log(`Recording outcome: "${o}"${r>1?` (${r} times)`:""}`), this._outcomes[o] = (this._outcomes[o] || 0) + r
            }
        }
        on(e, t) {
            const n = this._hooks[e] = this._hooks[e] || [];
            return n.push(t), () => {
                const e = n.indexOf(t);
                e > -1 && n.splice(e, 1)
            }
        }
        emit(e, ...t) {
            const n = this._hooks[e];
            n && n.forEach((e => e(...t)))
        }
        sendEnvelope(e) {
            return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, (e => (Pe && F.error("Error while sending envelope:", e), e))) : (Pe && F.error("Transport disabled"), Fe({}))
        }
        _setupIntegrations() {
            const {
                integrations: e
            } = this._options;
            this._integrations = function(e, t) {
                const n = {};
                return t.forEach((t => {
                    t && _n(e, t, n)
                })), n
            }(this, e), gn(this, e)
        }
        _updateSessionFromEvent(e, t) {
            let n = "fatal" === t.level,
                r = !1;
            const o = t.exception && t.exception.values;
            if (o) {
                r = !0;
                for (const e of o) {
                    const t = e.mechanism;
                    if (t && !1 === t.handled) {
                        n = !0;
                        break
                    }
                }
            }
            const s = "ok" === e.status;
            (s && 0 === e.errors || s && n) && (ue(e, { ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(r || n)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new Ue((t => {
                let n = 0;
                const r = setInterval((() => {
                    0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
                }), 1)
            }))
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._transport
        }
        _prepareEvent(e, t, n = Ce(), r = Te()) {
            const o = this.getOptions(),
                s = Object.keys(this._integrations);
            return !t.integrations && s.length > 0 && (t.integrations = s), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), Vt(o, e, t, n, this, r).then((e => {
                if (null === e) return e;
                e.contexts = {
                    trace: Oe(n),
                    ...e.contexts
                };
                const t = Ht(this, n);
                return e.sdkProcessingMetadata = {
                    dynamicSamplingContext: t,
                    ...e.sdkProcessingMetadata
                }, e
            }))
        }
        _captureEvent(e, t = {}, n) {
            return this._processEvent(e, t, n).then((e => e.event_id), (e => {
                Pe && (e instanceof Tr && "log" === e.logLevel ? F.log(e.message) : F.warn(e))
            }))
        }
        _processEvent(e, t, n) {
            const r = this.getOptions(),
                {
                    sampleRate: o
                } = r,
                s = xo(e),
                i = Eo(e),
                a = e.type || "error",
                c = `before send for type \`${a}\``,
                u = void 0 === o ? void 0 : Un(o);
            if (i && "number" == typeof u && Math.random() > u) return this.recordDroppedEvent("sample_rate", "error", e), Be(new Tr(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const l = "replay_event" === a ? "replay" : a,
                d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
            return this._prepareEvent(e, t, n, d).then((n => {
                if (null === n) throw this.recordDroppedEvent("event_processor", l, e), new Tr("An event processor returned `null`, will not send event.", "log");
                if (t.data && !0 === t.data.__sentry__) return n;
                const o = function(e, t, n, r) {
                    const {
                        beforeSend: o,
                        beforeSendTransaction: s,
                        beforeSendSpan: i
                    } = t;
                    if (Eo(n) && o) return o(n, r);
                    if (xo(n)) {
                        if (n.spans && i) {
                            const t = [];
                            for (const r of n.spans) {
                                const n = i(r);
                                n ? t.push(n) : ($t(), e.recordDroppedEvent("before_send", "span"))
                            }
                            n.spans = t
                        }
                        if (s) {
                            if (n.spans) {
                                const e = n.spans.length;
                                n.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                                    spanCountBeforeProcessing: e
                                }
                            }
                            return s(n, r)
                        }
                    }
                    return n
                }(this, r, n, t);
                return function(e, t) {
                    const n = `${t} must return \`null\` or a valid event.`;
                    if (k(e)) return e.then((e => {
                        if (!S(e) && null !== e) throw new Tr(n);
                        return e
                    }), (e => {
                        throw new Tr(`${t} rejected with ${e}`)
                    }));
                    if (!S(e) && null !== e) throw new Tr(n);
                    return e
                }(o, c)
            })).then((r => {
                if (null === r) {
                    if (this.recordDroppedEvent("before_send", l, e), s) {
                        const t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", t)
                    }
                    throw new Tr(`${c} returned \`null\`, will not send event.`, "log")
                }
                const o = n && n.getSession();
                if (!s && o && this._updateSessionFromEvent(o, r), s) {
                    const e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                    e > 0 && this.recordDroppedEvent("before_send", "span", e)
                }
                const i = r.transaction_info;
                if (s && i && r.transaction !== e.transaction) {
                    const e = "custom";
                    r.transaction_info = { ...i,
                        source: e
                    }
                }
                return this.sendEvent(r, t), r
            })).then(null, (e => {
                if (e instanceof Tr) throw e;
                throw this.captureException(e, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: e
                }), new Tr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
            }))
        }
        _process(e) {
            this._numProcessing++, e.then((e => (this._numProcessing--, e)), (e => (this._numProcessing--, e)))
        }
        _clearOutcomes() {
            const e = this._outcomes;
            return this._outcomes = {}, Object.entries(e).map((([e, t]) => {
                const [n, r] = e.split(":");
                return {
                    reason: n,
                    category: r,
                    quantity: t
                }
            }))
        }
        _flushOutcomes() {
            Pe && F.log("Flushing outcomes...");
            const e = this._clearOutcomes();
            if (0 === e.length) return void(Pe && F.log("No outcomes to send"));
            if (!this._dsn) return void(Pe && F.log("No dsn provided, will not send outcomes"));
            Pe && F.log("Sending outcomes:", e);
            const t = (n = e, Vn((r = this._options.tunnel && zn(this._dsn)) ? {
                dsn: r
            } : {}, [
                [{
                    type: "client_report"
                }, {
                    timestamp: Q(),
                    discarded_events: n
                }]
            ]));
            var n, r;
            this.sendEnvelope(t)
        }
    }

    function Eo(e) {
        return void 0 === e.type
    }

    function xo(e) {
        return "transaction" === e.type
    }

    function Co(e, t, n = [t], o = "npm") {
        const s = e._metadata || {};
        s.sdk || (s.sdk = {
            name: `sentry.javascript.${t}`,
            packages: n.map((e => ({
                name: `${o}:@sentry/${e}`,
                version: r
            }))),
            version: r
        }), e._metadata = s
    }
    const To = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

    function Io(e, t) {
        const n = Ro(e, t),
            r = {
                type: Do(t),
                value: Lo(t)
            };
        return n.length && (r.stacktrace = {
            frames: n
        }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
    }

    function Mo(e, t) {
        return {
            exception: {
                values: [Io(e, t)]
            }
        }
    }

    function Ro(e, t) {
        const n = t.stacktrace || t.stack || "",
            r = function(e) {
                return e && Ao.test(e.message) ? 1 : 0
            }(t),
            o = function(e) {
                return "number" == typeof e.framesToPop ? e.framesToPop : 0
            }(t);
        try {
            return e(n, r, o)
        } catch (e) {}
        return []
    }
    const Ao = /Minified React error #\d+;/i;

    function Oo(e) {
        return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
    }

    function Do(e) {
        const t = e && e.name;
        return !t && Oo(e) ? e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception" : t
    }

    function Lo(e) {
        const t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : Oo(e) && Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : t : "No error message"
    }

    function No(e, t, n, r) {
        const o = $o(e, t, n && n.syntheticException || void 0, r);
        return ae(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), Fe(o)
    }

    function Po(e, t, n = "info", r, o) {
        const s = Fo(e, t, r && r.syntheticException || void 0, o);
        return s.level = n, r && r.event_id && (s.event_id = r.event_id), Fe(s)
    }

    function $o(e, t, n, r, o) {
        let s;
        if (g(t) && t.error) return Mo(e, t.error);
        if (_(t) || m(t, "DOMException")) {
            const o = t;
            if ("stack" in t) s = Mo(e, t);
            else {
                const t = o.name || (_(o) ? "DOMError" : "DOMException"),
                    i = o.message ? `${t}: ${o.message}` : t;
                s = Fo(e, i, n, r), ie(s, i)
            }
            return "code" in o && (s.tags = { ...s.tags,
                "DOMException.code": `${o.code}`
            }), s
        }
        return f(t) ? Mo(e, t) : S(t) || w(t) ? (s = function(e, t, n, r) {
            const o = Ae(),
                s = o && o.getOptions().normalizeDepth,
                i = function(e) {
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            const n = e[t];
                            if (n instanceof Error) return n
                        }
                }(t),
                a = {
                    __serialized__: nt(t, s)
                };
            if (i) return {
                exception: {
                    values: [Io(e, i)]
                },
                extra: a
            };
            const c = {
                exception: {
                    values: [{
                        type: w(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: Bo(t, {
                            isUnhandledRejection: r
                        })
                    }]
                },
                extra: a
            };
            if (n) {
                const t = Ro(e, n);
                t.length && (c.exception.values[0].stacktrace = {
                    frames: t
                })
            }
            return c
        }(e, t, n, o), ae(s, {
            synthetic: !0
        }), s) : (s = Fo(e, t, n, r), ie(s, `${t}`, void 0), ae(s, {
            synthetic: !0
        }), s)
    }

    function Fo(e, t, n, r) {
        const o = {};
        if (r && n) {
            const r = Ro(e, n);
            r.length && (o.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: r
                    }
                }]
            }), ae(o, {
                synthetic: !0
            })
        }
        if (v(t)) {
            const {
                __sentry_template_string__: e,
                __sentry_template_values__: n
            } = t;
            return o.logentry = {
                message: e,
                params: n
            }, o
        }
        return o.message = t, o
    }

    function Bo(e, {
        isUnhandledRejection: t
    }) {
        const n = function(e, t = 40) {
                const n = Object.keys(V(e));
                n.sort();
                const r = n[0];
                if (!r) return "[object has no keys]";
                if (r.length >= t) return B(r, t);
                for (let e = n.length; e > 0; e--) {
                    const r = n.slice(0, e).join(", ");
                    if (!(r.length > t)) return e === n.length ? r : B(r, t)
                }
                return ""
            }(e),
            r = t ? "promise rejection" : "exception";
        return g(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : w(e) ? `Event \`${function(e){try{const t=Object.getPrototypeOf(e);return t?t.constructor.name:void 0}catch(e){}}(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
    }

    function Uo(e, {
        metadata: t,
        tunnel: n,
        dsn: r
    }) {
        const o = {
                event_id: e.event_id,
                sent_at: (new Date).toISOString(),
                ...t && t.sdk && {
                    sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version
                    }
                },
                ...!!n && !!r && {
                    dsn: zn(r)
                }
            },
            s = function(e) {
                return [{
                    type: "user_report"
                }, e]
            }(e);
        return Vn(o, [s])
    }
    class jo extends ko {
        constructor(e) {
            const t = {
                parentSpanIsAlwaysRootSpan: !0,
                ...e
            };
            Co(t, "browser", ["browser"], yo.SENTRY_SDK_SOURCE || "npm"), super(t), t.sendClientReports && yo.document && yo.document.addEventListener("visibilitychange", (() => {
                "hidden" === yo.document.visibilityState && this._flushOutcomes()
            }))
        }
        eventFromException(e, t) {
            return No(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e, t = "info", n) {
            return Po(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) return void(To && F.warn("SDK not enabled, will not capture user feedback."));
            const t = Uo(e, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this.sendEnvelope(t)
        }
        _prepareEvent(e, t, n) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n)
        }
    }
    const Ho = C;

    function zo() {
        if (!("fetch" in Ho)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch (e) {
            return !1
        }
    }

    function Wo(e) {
        return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function qo() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (!zo()) return !1;
        if (Wo(Ho.fetch)) return !0;
        let e = !1;
        const t = Ho.document;
        if (t && "function" == typeof t.createElement) try {
            const n = t.createElement("iframe");
            n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = Wo(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {
            L && F.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
    }
    const Yo = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        Vo = C,
        Go = {};

    function Xo(e) {
        const t = Go[e];
        if (t) return t;
        let n = Vo[e];
        if (Wo(n)) return Go[e] = n.bind(Vo);
        const r = Vo.document;
        if (r && "function" == typeof r.createElement) try {
            const t = r.createElement("iframe");
            t.hidden = !0, r.head.appendChild(t);
            const o = t.contentWindow;
            o && o[e] && (n = o[e]), r.head.removeChild(t)
        } catch (t) {
            Yo && F.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
        }
        return n ? Go[e] = n.bind(Vo) : n
    }

    function Jo(e) {
        Go[e] = void 0
    }

    function Ko(...e) {
        return Xo("setTimeout")(...e)
    }

    function Zo(e, t = Xo("fetch")) {
        let n = 0,
            r = 0;
        return Dr(e, (function(o) {
            const s = o.body.length;
            n += s, r++;
            const i = {
                body: o.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: e.headers,
                keepalive: n <= 6e4 && r < 15,
                ...e.fetchOptions
            };
            if (!t) return Jo("fetch"), Be("No fetch implementation available");
            try {
                return t(e.url, i).then((e => (n -= s, r--, {
                    statusCode: e.status,
                    headers: {
                        "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": e.headers.get("Retry-After")
                    }
                })))
            } catch (e) {
                return Jo("fetch"), n -= s, r--, Be(e)
            }
        }))
    }

    function Qo(e, t, n, r) {
        const o = {
            filename: e,
            function: "<anonymous>" === t ? Ve : t,
            in_app: !0
        };
        return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o
    }
    const es = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        ts = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        ns = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        rs = [30, e => {
            const t = es.exec(e);
            if (t) {
                const [, e, n, r] = t;
                return Qo(e, Ve, +n, +r)
            }
            const n = ts.exec(e);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    const e = ns.exec(n[2]);
                    e && (n[2] = e[1], n[3] = e[2], n[4] = e[3])
                }
                const [e, t] = ms(n[1] || Ve, n[2]);
                return Qo(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
            }
        }],
        os = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        ss = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        is = [50, e => {
            const t = os.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    const e = ss.exec(t[3]);
                    e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                }
                let e = t[3],
                    n = t[1] || Ve;
                return [n, e] = ms(n, e), Qo(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }],
        as = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        cs = [40, e => {
            const t = as.exec(e);
            return t ? Qo(t[2], t[1] || Ve, +t[3], t[4] ? +t[4] : void 0) : void 0
        }],
        us = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        ls = [10, e => {
            const t = us.exec(e);
            return t ? Qo(t[2], t[3] || Ve, +t[1]) : void 0
        }],
        ds = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        ps = [20, e => {
            const t = ds.exec(e);
            return t ? Qo(t[5], t[3] || t[4] || Ve, +t[1], +t[2]) : void 0
        }],
        hs = [rs, is],
        fs = Je(...hs),
        ms = (e, t) => {
            const n = -1 !== e.indexOf("safari-extension"),
                r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : Ve, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        },
        gs = 1e3;
    let _s, ys, vs;

    function bs(e) {
        Sn("dom", e), wn("dom", Ss)
    }

    function Ss() {
        if (!Vo.document) return;
        const e = kn.bind(null, "dom"),
            t = ws(e, !0);
        Vo.document.addEventListener("click", t, !1), Vo.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t => {
            const n = Vo[t],
                r = n && n.prototype;
            r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (z(r, "addEventListener", (function(t) {
                return function(n, r, o) {
                    if ("click" === n || "keypress" == n) try {
                        const r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                            s = r[n] = r[n] || {
                                refCount: 0
                            };
                        if (!s.handler) {
                            const r = ws(e);
                            s.handler = r, t.call(this, n, r, o)
                        }
                        s.refCount++
                    } catch (e) {}
                    return t.call(this, n, r, o)
                }
            })), z(r, "removeEventListener", (function(e) {
                return function(t, n, r) {
                    if ("click" === t || "keypress" == t) try {
                        const n = this.__sentry_instrumentation_handlers__ || {},
                            o = n[t];
                        o && (o.refCount--, o.refCount <= 0 && (e.call(this, t, o.handler, r), o.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                    } catch (e) {}
                    return e.call(this, t, n, r)
                }
            })))
        }))
    }

    function ws(e, t = !1) {
        return n => {
            if (!n || n._sentryCaptured) return;
            const r = function(e) {
                try {
                    return e.target
                } catch (e) {
                    return null
                }
            }(n);
            if (function(e, t) {
                    return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
                }(n.type, r)) return;
            W(n, "_sentryCaptured", !0), r && !r._sentryId && W(r, "_sentryId", re());
            const o = "keypress" === n.type ? "input" : n.type;
            (function(e) {
                if (e.type !== ys) return !1;
                try {
                    if (!e.target || e.target._sentryId !== vs) return !1
                } catch (e) {}
                return !0
            })(n) || (e({
                event: n,
                name: o,
                global: t
            }), ys = n.type, vs = r ? r._sentryId : void 0), clearTimeout(_s), _s = Vo.setTimeout((() => {
                vs = void 0, ys = void 0
            }), gs)
        }
    }
    const ks = "__sentry_xhr_v3__";

    function Es(e) {
        Sn("xhr", e), wn("xhr", xs)
    }

    function xs() {
        if (!Vo.XMLHttpRequest) return;
        const e = XMLHttpRequest.prototype;
        e.open = new Proxy(e.open, {
            apply(e, t, n) {
                const r = new Error,
                    o = 1e3 * ee(),
                    s = y(n[0]) ? n[0].toUpperCase() : void 0,
                    i = function(e) {
                        if (y(e)) return e;
                        try {
                            return e.toString()
                        } catch (e) {}
                    }(n[1]);
                if (!s || !i) return e.apply(t, n);
                t[ks] = {
                    method: s,
                    url: i,
                    request_headers: {}
                }, "POST" === s && i.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                const a = () => {
                    const e = t[ks];
                    if (e && 4 === t.readyState) {
                        try {
                            e.status_code = t.status
                        } catch (e) {}
                        kn("xhr", {
                            endTimestamp: 1e3 * ee(),
                            startTimestamp: o,
                            xhr: t,
                            virtualError: r
                        })
                    }
                };
                return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                    apply: (e, t, n) => (a(), e.apply(t, n))
                }) : t.addEventListener("readystatechange", a), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, n) {
                        const [r, o] = n, s = t[ks];
                        return s && y(r) && y(o) && (s.request_headers[r.toLowerCase()] = o), e.apply(t, n)
                    }
                }), e.apply(t, n)
            }
        }), e.send = new Proxy(e.send, {
            apply(e, t, n) {
                const r = t[ks];
                return r ? (void 0 !== n[0] && (r.body = n[0]), kn("xhr", {
                    startTimestamp: 1e3 * ee(),
                    xhr: t
                }), e.apply(t, n)) : e.apply(t, n)
            }
        })
    }
    const Cs = C;
    let Ts;

    function Is(e) {
        const t = "history";
        Sn(t, e), wn(t, Ms)
    }

    function Ms() {
        if (! function() {
                const e = Cs.chrome,
                    t = e && e.app && e.app.runtime,
                    n = "history" in Cs && !!Cs.history.pushState && !!Cs.history.replaceState;
                return !t && n
            }()) return;
        const e = Vo.onpopstate;

        function t(e) {
            return function(...t) {
                const n = t.length > 2 ? t[2] : void 0;
                if (n) {
                    const e = Ts,
                        t = String(n);
                    Ts = t, kn("history", {
                        from: e,
                        to: t
                    })
                }
                return e.apply(this, t)
            }
        }
        Vo.onpopstate = function(...t) {
            const n = Vo.location.href,
                r = Ts;
            if (Ts = n, kn("history", {
                    from: r,
                    to: n
                }), e) try {
                return e.apply(this, t)
            } catch (e) {}
        }, z(Vo.history, "pushState", t), z(Vo.history, "replaceState", t)
    }

    function Rs(e, t) {
        const n = "fetch";
        Sn(n, e), wn(n, (() => As(void 0, t)))
    }

    function As(e, t = !1) {
        t && !qo() || z(C, "fetch", (function(t) {
            return function(...n) {
                const r = new Error,
                    {
                        method: o,
                        url: s
                    } = function(e) {
                        if (0 === e.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === e.length) {
                            const [t, n] = e;
                            return {
                                url: Ls(t),
                                method: Ds(n, "method") ? String(n.method).toUpperCase() : "GET"
                            }
                        }
                        const t = e[0];
                        return {
                            url: Ls(t),
                            method: Ds(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(n),
                    i = {
                        args: n,
                        fetchData: {
                            method: o,
                            url: s
                        },
                        startTimestamp: 1e3 * ee(),
                        virtualError: r
                    };
                return e || kn("fetch", { ...i
                }), t.apply(C, n).then((async t => (e ? e(t) : kn("fetch", { ...i,
                    endTimestamp: 1e3 * ee(),
                    response: t
                }), t)), (e => {
                    throw kn("fetch", { ...i,
                        endTimestamp: 1e3 * ee(),
                        error: e
                    }), f(e) && void 0 === e.stack && (e.stack = r.stack, W(e, "framesToPop", 1)), e
                }))
            }
        }))
    }

    function Os(e) {
        let t;
        try {
            t = e.clone()
        } catch (e) {
            return
        }!async function(t, n) {
            if (t && t.body) {
                const n = t.body,
                    r = n.getReader(),
                    o = setTimeout((() => {
                        n.cancel().then(null, (() => {}))
                    }), 9e4);
                let s = !0;
                for (; s;) {
                    let t;
                    try {
                        t = setTimeout((() => {
                            n.cancel().then(null, (() => {}))
                        }), 5e3);
                        const {
                            done: o
                        } = await r.read();
                        clearTimeout(t), o && (kn("fetch-body-resolved", {
                            endTimestamp: 1e3 * ee(),
                            response: e
                        }), s = !1)
                    } catch (e) {
                        s = !1
                    } finally {
                        clearTimeout(t)
                    }
                }
                clearTimeout(o), r.releaseLock(), n.cancel().then(null, (() => {}))
            }
        }(t)
    }

    function Ds(e, t) {
        return !!e && "object" == typeof e && !!e[t]
    }

    function Ls(e) {
        return "string" == typeof e ? e : e ? Ds(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
    }

    function Ns(e) {
        return void 0 === e ? void 0 : e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
    }

    function Ps(e) {
        if (!e) return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        const n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: n,
            hash: r,
            relative: t[5] + n + r
        }
    }

    function $s(e) {
        return e.split(/\\?\//).filter((e => e.length > 0 && "," !== e)).length
    }
    const Fs = (e = {}) => {
            const t = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
            return {
                name: "Breadcrumbs",
                setup(e) {
                    t.console && Ln(function(e) {
                        return function(t) {
                            if (Ae() !== e) return;
                            const n = {
                                category: "console",
                                data: {
                                    arguments: t.args,
                                    logger: "console"
                                },
                                level: Pn(t.level),
                                message: j(t.args, " ")
                            };
                            if ("assert" === t.level) {
                                if (!1 !== t.args[0]) return;
                                n.message = `Assertion failed: ${j(t.args.slice(1)," ")||"console.assert"}`, n.data.arguments = t.args.slice(1)
                            }
                            Le(n, {
                                input: t.args,
                                level: t.level
                            })
                        }
                    }(e)), t.dom && bs(function(e, t) {
                        return function(n) {
                            if (Ae() !== e) return;
                            let r, o, s = "object" == typeof t ? t.serializeAttribute : void 0,
                                i = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            i && i > 1024 && (To && F.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`), i = 1024), "string" == typeof s && (s = [s]);
                            try {
                                const e = n.event,
                                    t = function(e) {
                                        return !!e && !!e.target
                                    }(e) ? e.target : e;
                                r = R(t, {
                                    keyAttrs: s,
                                    maxStringLength: i
                                }), o = D(t)
                            } catch (e) {
                                r = "<unknown>"
                            }
                            if (0 === r.length) return;
                            const a = {
                                category: `ui.${n.name}`,
                                message: r
                            };
                            o && (a.data = {
                                "ui.component_name": o
                            }), Le(a, {
                                event: n.event,
                                name: n.name,
                                global: n.global
                            })
                        }
                    }(e, t.dom)), t.xhr && Es(function(e) {
                        return function(t) {
                            if (Ae() !== e) return;
                            const {
                                startTimestamp: n,
                                endTimestamp: r
                            } = t, o = t.xhr[ks];
                            if (!n || !r || !o) return;
                            const {
                                method: s,
                                url: i,
                                status_code: a,
                                body: c
                            } = o, u = {
                                method: s,
                                url: i,
                                status_code: a
                            }, l = {
                                xhr: t.xhr,
                                input: c,
                                startTimestamp: n,
                                endTimestamp: r
                            };
                            Le({
                                category: "xhr",
                                data: u,
                                type: "http",
                                level: Ns(a)
                            }, l)
                        }
                    }(e)), t.fetch && Rs(function(e) {
                        return function(t) {
                            if (Ae() !== e) return;
                            const {
                                startTimestamp: n,
                                endTimestamp: r
                            } = t;
                            if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                                if (t.error) Le({
                                    category: "fetch",
                                    data: t.fetchData,
                                    level: "error",
                                    type: "http"
                                }, {
                                    data: t.error,
                                    input: t.args,
                                    startTimestamp: n,
                                    endTimestamp: r
                                });
                                else {
                                    const e = t.response,
                                        o = { ...t.fetchData,
                                            status_code: e && e.status
                                        },
                                        s = {
                                            input: t.args,
                                            response: e,
                                            startTimestamp: n,
                                            endTimestamp: r
                                        };
                                    Le({
                                        category: "fetch",
                                        data: o,
                                        type: "http",
                                        level: Ns(o.status_code)
                                    }, s)
                                }
                        }
                    }(e)), t.history && Is(function(e) {
                        return function(t) {
                            if (Ae() !== e) return;
                            let n = t.from,
                                r = t.to;
                            const o = Ps(yo.location.href);
                            let s = n ? Ps(n) : void 0;
                            const i = Ps(r);
                            s && s.path || (s = o), o.protocol === i.protocol && o.host === i.host && (r = i.relative), o.protocol === s.protocol && o.host === s.host && (n = s.relative), Le({
                                category: "navigation",
                                data: {
                                    from: n,
                                    to: r
                                }
                            })
                        }
                    }(e)), t.sentry && e.on("beforeSendEvent", function(e) {
                        return function(t) {
                            Ae() === e && Le({
                                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                                event_id: t.event_id,
                                level: t.level,
                                message: se(t)
                            }, {
                                event: t
                            })
                        }
                    }(e))
                }
            }
        },
        Bs = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        Us = (e = {}) => {
            const t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            };
            return {
                name: "BrowserApiErrors",
                setupOnce() {
                    t.setTimeout && z(yo, "setTimeout", js), t.setInterval && z(yo, "setInterval", js), t.requestAnimationFrame && z(yo, "requestAnimationFrame", Hs), t.XMLHttpRequest && "XMLHttpRequest" in yo && z(XMLHttpRequest.prototype, "send", zs);
                    const e = t.eventTarget;
                    e && (Array.isArray(e) ? e : Bs).forEach(Ws)
                }
            }
        };

    function js(e) {
        return function(...t) {
            const n = t[0];
            return t[0] = So(n, {
                mechanism: {
                    data: {
                        function: Qe(e)
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), e.apply(this, t)
        }
    }

    function Hs(e) {
        return function(t) {
            return e.apply(this, [So(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Qe(e)
                    },
                    handled: !1,
                    type: "instrument"
                }
            })])
        }
    }

    function zs(e) {
        return function(...t) {
            const n = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
                e in n && "function" == typeof n[e] && z(n, e, (function(t) {
                    const n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: Qe(t)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        },
                        r = Y(t);
                    return r && (n.mechanism.data.handler = Qe(r)), So(t, n)
                }))
            })), e.apply(this, t)
        }
    }

    function Ws(e) {
        const t = yo[e],
            n = t && t.prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (z(n, "addEventListener", (function(t) {
            return function(n, r, o) {
                try {
                    "function" == typeof r.handleEvent && (r.handleEvent = So(r.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Qe(r),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }))
                } catch (e) {}
                return t.apply(this, [n, So(r, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Qe(r),
                            target: e
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }), o])
            }
        })), z(n, "removeEventListener", (function(e) {
            return function(t, n, r) {
                try {
                    const o = n.__sentry_wrapped__;
                    o && e.call(this, t, o, r)
                } catch (e) {}
                return e.call(this, t, n, r)
            }
        })))
    }
    const qs = () => ({
            name: "BrowserSession",
            setupOnce() {
                void 0 !== yo.document ? (ln({
                    ignoreDuration: !0
                }), hn(), Is((({
                    from: e,
                    to: t
                }) => {
                    void 0 !== e && e !== t && (ln({
                        ignoreDuration: !0
                    }), hn())
                }))) : To && F.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.")
            }
        }),
        Ys = (e = {}) => {
            const t = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            };
            return {
                name: "GlobalHandlers",
                setupOnce() {
                    Error.stackTraceLimit = 50
                },
                setup(e) {
                    t.onerror && (function(e) {
                        xn((t => {
                            const {
                                stackParser: n,
                                attachStacktrace: r
                            } = Gs();
                            if (Ae() !== e || bo()) return;
                            const {
                                msg: o,
                                url: s,
                                line: i,
                                column: a,
                                error: c
                            } = t, u = function(e, t, n, r) {
                                const o = e.exception = e.exception || {},
                                    s = o.values = o.values || [],
                                    i = s[0] = s[0] || {},
                                    a = i.stacktrace = i.stacktrace || {},
                                    c = a.frames = a.frames || [],
                                    u = r,
                                    l = n,
                                    d = y(t) && t.length > 0 ? t : O();
                                return 0 === c.length && c.push({
                                    colno: u,
                                    filename: d,
                                    function: Ve,
                                    in_app: !0,
                                    lineno: l
                                }), e
                            }($o(n, c || o, void 0, r, !1), s, i, a);
                            u.level = "error", Kt(u, {
                                originalException: c,
                                mechanism: {
                                    handled: !1,
                                    type: "onerror"
                                }
                            })
                        }))
                    }(e), Vs("onerror")), t.onunhandledrejection && (function(e) {
                        In((t => {
                            const {
                                stackParser: n,
                                attachStacktrace: r
                            } = Gs();
                            if (Ae() !== e || bo()) return;
                            const o = function(e) {
                                    if (b(e)) return e;
                                    try {
                                        if ("reason" in e) return e.reason;
                                        if ("detail" in e && "reason" in e.detail) return e.detail.reason
                                    } catch (e) {}
                                    return e
                                }(t),
                                s = b(o) ? {
                                    exception: {
                                        values: [{
                                            type: "UnhandledRejection",
                                            value: `Non-Error promise rejection captured with value: ${String(o)}`
                                        }]
                                    }
                                } : $o(n, o, void 0, r, !0);
                            s.level = "error", Kt(s, {
                                originalException: o,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }
                            })
                        }))
                    }(e), Vs("onunhandledrejection"))
                }
            }
        };

    function Vs(e) {
        To && F.log(`Global Handler attached: ${e}`)
    }

    function Gs() {
        const e = Ae();
        return e && e.getOptions() || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    }
    const Xs = () => ({
        name: "HttpContext",
        preprocessEvent(e) {
            if (!yo.navigator && !yo.location && !yo.document) return;
            const t = e.request && e.request.url || yo.location && yo.location.href,
                {
                    referrer: n
                } = yo.document || {},
                {
                    userAgent: r
                } = yo.navigator || {},
                o = { ...e.request && e.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                },
                s = { ...e.request,
                    ...t && {
                        url: t
                    },
                    headers: o
                };
            e.request = s
        }
    });

    function Js(e, t, n = 250, r, o, s, i) {
        if (!(s.exception && s.exception.values && i && E(i.originalException, Error))) return;
        const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
        var c, u;
        a && (s.exception.values = (c = Ks(e, t, o, i.originalException, r, s.exception.values, a, 0), u = n, c.map((e => (e.value && (e.value = B(e.value, u)), e)))))
    }

    function Ks(e, t, n, r, o, s, i, a) {
        if (s.length >= n + 1) return s;
        let c = [...s];
        if (E(r[o], Error)) {
            Zs(i, a);
            const s = e(t, r[o]),
                u = c.length;
            Qs(s, o, u, a), c = Ks(e, t, n, r[o], o, [s, ...c], s, u)
        }
        return Array.isArray(r.errors) && r.errors.forEach(((r, s) => {
            if (E(r, Error)) {
                Zs(i, a);
                const u = e(t, r),
                    l = c.length;
                Qs(u, `errors[${s}]`, l, a), c = Ks(e, t, n, r, o, [u, ...c], u, l)
            }
        })), c
    }

    function Zs(e, t) {
        e.mechanism = e.mechanism || {
            type: "generic",
            handled: !0
        }, e.mechanism = { ...e.mechanism,
            ..."AggregateError" === e.type && {
                is_exception_group: !0
            },
            exception_id: t
        }
    }

    function Qs(e, t, n, r) {
        e.mechanism = e.mechanism || {
            type: "generic",
            handled: !0
        }, e.mechanism = { ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: n,
            parent_id: r
        }
    }
    const ei = (e = {}) => {
        const t = e.limit || 5,
            n = e.key || "cause";
        return {
            name: "LinkedErrors",
            preprocessEvent(e, r, o) {
                const s = o.getOptions();
                Js(Io, s.stackParser, s.maxValueLength, n, t, e, r)
            }
        }
    };

    function ti(e) {
        const t = [Yr(), zr(), Us(), Fs(), Ys(), ei(), Pr(), Xs()];
        return !1 !== e.autoSessionTracking && t.push(qs()), t
    }

    function ni(e = {}) {
        if (!yo.document) return void(To && F.error("Global document not defined in showReportDialog call"));
        const t = Ce(),
            n = t.getClient(),
            r = n && n.getDsn();
        if (!r) return void(To && F.error("DSN not configured for showReportDialog call"));
        if (t && (e.user = { ...t.getUser(),
                ...e.user
            }), !e.eventId) {
            const t = on();
            t && (e.eventId = t)
        }
        const o = yo.document.createElement("script");
        o.async = !0, o.crossOrigin = "anonymous", o.src = function(e, t) {
            const n = Yn(e);
            if (!n) return "";
            const r = `${Xr(n)}embed/error-page/`;
            let o = `dsn=${zn(n)}`;
            for (const e in t)
                if ("dsn" !== e && "onClose" !== e)
                    if ("user" === e) {
                        const e = t.user;
                        if (!e) continue;
                        e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`)
                    } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
            return `${r}?${o}`
        }(r, e), e.onLoad && (o.onload = e.onLoad);
        const {
            onClose: s
        } = e;
        if (s) {
            const e = t => {
                if ("__sentry_reportdialog_closed__" === t.data) try {
                    s()
                } finally {
                    yo.removeEventListener("message", e)
                }
            };
            yo.addEventListener("message", e)
        }
        const i = yo.document.head || yo.document.body;
        i ? i.appendChild(o) : To && F.error("Not injecting report dialog. No injection point found in HTML")
    }

    function ri() {}

    function oi(e) {
        e()
    }

    function si(e) {
        const t = Ae();
        t && t.captureUserFeedback(e)
    }
    const ii = {
            replayIntegration: "replay",
            replayCanvasIntegration: "replay-canvas",
            feedbackIntegration: "feedback",
            feedbackModalIntegration: "feedback-modal",
            feedbackScreenshotIntegration: "feedback-screenshot",
            captureConsoleIntegration: "captureconsole",
            contextLinesIntegration: "contextlines",
            linkedErrorsIntegration: "linkederrors",
            debugIntegration: "debug",
            dedupeIntegration: "dedupe",
            extraErrorDataIntegration: "extraerrordata",
            httpClientIntegration: "httpclient",
            reportingObserverIntegration: "reportingobserver",
            rewriteFramesIntegration: "rewriteframes",
            sessionTimingIntegration: "sessiontiming",
            browserProfilingIntegration: "browserprofiling",
            moduleMetadataIntegration: "modulemetadata"
        },
        ai = yo;async function ci(e, t) {
        const n = ii[e],
            o = ai.Sentry = ai.Sentry || {};
        if (!n) throw new Error(`Cannot lazy load integration: ${e}`);
        const s = o[e];
        if ("function" == typeof s && !("_isShim" in s)) return s;
        const i = function(e) {
                const t = Ae(),
                    n = t && t.getOptions(),
                    o = n && n.cdnBaseUrl || "https://browser.sentry-cdn.com";
                return new URL(`/${r}/${e}.min.js`, o).toString()
            }(n),
            a = yo.document.createElement("script");
        a.src = i, a.crossOrigin = "anonymous", a.referrerPolicy = "origin", t && a.setAttribute("nonce", t);
        const c = new Promise(((e, t) => {
                a.addEventListener("load", (() => e())), a.addEventListener("error", t)
            })),
            u = yo.document.currentScript,
            l = yo.document.body || yo.document.head || u && u.parentElement;
        if (!l) throw new Error(`Could not find parent element to insert lazy-loaded ${e} script`);
        l.appendChild(a);
        try {
            await c
        } catch (t) {
            throw new Error(`Error when loading integration: ${e}`)
        }
        const d = o[e];
        if ("function" != typeof d) throw new Error(`Could not load integration: ${e}`);
        return d
    }
    const ui = C,
        li = new WeakMap,
        di = (e = {}) => {
            const t = e.types || ["crash", "deprecation", "intervention"];

            function n(e) {
                if (li.has(Ae()))
                    for (const t of e) Me((e => {
                        e.setExtra("url", t.url);
                        const n = `ReportingObserver [${t.type}]`;
                        let r = "No details available";
                        if (t.body) {
                            const n = {};
                            for (const e in t.body) n[e] = t.body[e];
                            if (e.setExtra("body", n), "crash" === t.type) {
                                const e = t.body;
                                r = [e.crashId || "", e.reason || ""].join(" ").trim() || r
                            } else r = t.body.message || r
                        }
                        Jt(`${n}: ${r}`)
                    }))
            }
            return {
                name: "ReportingObserver",
                setupOnce() {
                    "ReportingObserver" in Ho && new ui.ReportingObserver(n, {
                        buffered: !0,
                        types: t
                    }).observe()
                },
                setup(e) {
                    li.set(e, !0)
                }
            }
        };

    function pi(e, t) {
        const n = t && t.getDsn(),
            r = t && t.getOptions().tunnel;
        return function(e, t) {
            return !!t && e.includes(t.host)
        }(e, n) || function(e, t) {
            return !!t && hi(e) === hi(t)
        }(e, r)
    }

    function hi(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
    }
    const fi = (e = {}) => {
        const t = {
            failedRequestStatusCodes: [
                [500, 599]
            ],
            failedRequestTargets: [/.*/],
            ...e
        };
        return {
            name: "HttpClient",
            setup(e) {
                ! function(e, t) {
                    qo() && Rs((n => {
                        if (Ae() !== e) return;
                        const {
                            response: r,
                            args: o,
                            error: s,
                            virtualError: i
                        } = n, [a, c] = o;
                        r && function(e, t, n, r, o) {
                            if (yi(e, n.status, n.url)) {
                                const e = function(e, t) {
                                    return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e, t)
                                }(t, r);
                                let s, i, a, c;
                                bi() && ([s, a] = mi("Cookie", e), [i, c] = mi("Set-Cookie", n)), Kt(vi({
                                    url: e.url,
                                    method: e.method,
                                    status: n.status,
                                    requestHeaders: s,
                                    responseHeaders: i,
                                    requestCookies: a,
                                    responseCookies: c,
                                    error: o
                                }))
                            }
                        }(t, a, r, c, s || i)
                    }), !1)
                }(e, t),
                function(e, t) {
                    "XMLHttpRequest" in C && Es((n => {
                        if (Ae() !== e) return;
                        const {
                            error: r,
                            virtualError: o
                        } = n, s = n.xhr, i = s[ks];
                        if (!i) return;
                        const {
                            method: a,
                            request_headers: c
                        } = i;
                        try {
                            ! function(e, t, n, r, o) {
                                if (yi(e, t.status, t.responseURL)) {
                                    let e, s, i;
                                    if (bi()) {
                                        try {
                                            const e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                            e && (s = _i(e))
                                        } catch (e) {}
                                        try {
                                            i = function(e) {
                                                const t = e.getAllResponseHeaders();
                                                return t ? t.split("\r\n").reduce(((e, t) => {
                                                    const [n, r] = t.split(": ");
                                                    return n && r && (e[n] = r), e
                                                }), {}) : {}
                                            }(t)
                                        } catch (e) {}
                                        e = r
                                    }
                                    Kt(vi({
                                        url: t.responseURL,
                                        method: n,
                                        status: t.status,
                                        requestHeaders: e,
                                        responseHeaders: i,
                                        responseCookies: s,
                                        error: o
                                    }))
                                }
                            }(t, s, a, c, r || o)
                        } catch (e) {
                            To && F.warn("Error while extracting response event form XHR response", e)
                        }
                    }))
                }(e, t)
            }
        }
    };

    function mi(e, t) {
        const n = function(e) {
            const t = {};
            return e.forEach(((e, n) => {
                t[n] = e
            })), t
        }(t.headers);
        let r;
        try {
            const t = n[e] || n[e.toLowerCase()] || void 0;
            t && (r = _i(t))
        } catch (e) {}
        return [n, r]
    }

    function gi(e) {
        if (e) {
            const t = e["Content-Length"] || e["content-length"];
            if (t) return parseInt(t, 10)
        }
    }

    function _i(e) {
        return e.split("; ").reduce(((e, t) => {
            const [n, r] = t.split("=");
            return n && r && (e[n] = r), e
        }), {})
    }

    function yi(e, t, n) {
        return function(e, t) {
            return e.some((e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]))
        }(e.failedRequestStatusCodes, t) && (r = e.failedRequestTargets, o = n, r.some((e => "string" == typeof e ? o.includes(e) : e.test(o)))) && !pi(n, Ae());
        var r, o
    }

    function vi(e) {
        const t = Ae(),
            n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
            r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
            o = `HTTP Client Error with status code: ${e.status}`,
            s = {
                message: o,
                exception: {
                    values: [{
                        type: "Error",
                        value: o,
                        stacktrace: r ? {
                            frames: r
                        } : void 0
                    }]
                },
                request: {
                    url: e.url,
                    method: e.method,
                    headers: e.requestHeaders,
                    cookies: e.requestCookies
                },
                contexts: {
                    response: {
                        status_code: e.status,
                        headers: e.responseHeaders,
                        cookies: e.responseCookies,
                        body_size: gi(e.responseHeaders)
                    }
                }
            };
        return ae(s, {
            type: "http.client",
            handled: !1
        }), s
    }

    function bi() {
        const e = Ae();
        return !!e && Boolean(e.getOptions().sendDefaultPii)
    }
    const Si = C,
        wi = (e = {}) => {
            const t = null != e.frameContextLines ? e.frameContextLines : 7;
            return {
                name: "ContextLines",
                processEvent: e => function(e, t) {
                    const n = Si.document,
                        r = Si.location && Si.location.href.split(/[?#]/, 1)[0];
                    if (!n || !r) return e;
                    const o = e.exception && e.exception.values;
                    if (!o || !o.length) return e;
                    const s = n.documentElement.innerHTML;
                    if (!s) return e;
                    const i = ["<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>"];
                    return o.forEach((e => {
                        const n = e.stacktrace;
                        n && n.frames && (n.frames = n.frames.map((e => function(e, t, n, r) {
                            return e.filename === n && e.lineno && t.length ? (function(e, t, n = 5) {
                                if (void 0 === t.lineno) return;
                                const r = e.length,
                                    o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                                t.pre_context = e.slice(Math.max(0, o - n), o).map((e => U(e, 0)));
                                const s = Math.min(r - 1, o);
                                t.context_line = U(e[s], t.colno || 0), t.post_context = e.slice(Math.min(o + 1, r), o + 1 + n).map((e => U(e, 0)))
                            }(t, e, r), e) : e
                        }(e, i, r, t))))
                    })), e
                }(e, t)
            }
        };

    function ki(e) {
        let t, n = e[0],
            r = 1;
        for (; r < e.length;) {
            const o = e[r],
                s = e[r + 1];
            if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
            "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s(((...e) => n.call(t, ...e))), t = void 0)
        }
        return n
    }

    function Ei() {
        return "undefined" != typeof window && (!(("undefined" == typeof __SENTRY_BROWSER_BUNDLE__ || !__SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)) || function() {
            const e = C.process;
            return !!e && "renderer" === e.type
        }())
    }
    const xi = (e, t, n, r) => {
            let o, s;
            return i => {
                t.value >= 0 && (i || r) && (s = t.value - (o || 0), (s || void 0 === o) && (o = t.value, t.delta = s, t.rating = ((e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)))
            }
        },
        Ci = (e = !0) => {
            const t = Vo.performance && Vo.performance.getEntriesByType && Vo.performance.getEntriesByType("navigation")[0];
            if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
        },
        Ti = () => {
            const e = Ci();
            return e && e.activationStart || 0
        },
        Ii = (e, t) => {
            const n = Ci();
            let r = "navigate";
            return n && (Vo.document && Vo.document.prerendering || Ti() > 0 ? r = "prerender" : Vo.document && Vo.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v4-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
                navigationType: r
            }
        },
        Mi = (e, t, n) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    const r = new PerformanceObserver((e => {
                        Promise.resolve().then((() => {
                            t(e.getEntries())
                        }))
                    }));
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})), r
                }
            } catch (e) {}
        },
        Ri = e => {
            const t = t => {
                ("pagehide" === t.type || Vo.document && "hidden" === Vo.document.visibilityState) && e(t)
            };
            Vo.document && (addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0))
        },
        Ai = e => {
            let t = !1;
            return () => {
                t || (e(), t = !0)
            }
        };
    let Oi = -1;
    const Di = e => {
            "hidden" === Vo.document.visibilityState && Oi > -1 && (Oi = "visibilitychange" === e.type ? e.timeStamp : 0, Li())
        },
        Li = () => {
            removeEventListener("visibilitychange", Di, !0), removeEventListener("prerenderingchange", Di, !0)
        },
        Ni = () => (Vo.document && Oi < 0 && (Oi = "hidden" !== Vo.document.visibilityState || Vo.document.prerendering ? 1 / 0 : 0, addEventListener("visibilitychange", Di, !0), addEventListener("prerenderingchange", Di, !0)), {
            get firstHiddenTime() {
                return Oi
            }
        }),
        Pi = e => {
            Vo.document && Vo.document.prerendering ? addEventListener("prerenderingchange", (() => e()), !0) : e()
        },
        $i = [1800, 3e3],
        Fi = [.1, .25],
        Bi = (e, t = {}) => {
            ((e, t = {}) => {
                Pi((() => {
                    const n = Ni(),
                        r = Ii("FCP");
                    let o;
                    const s = Mi("paint", (e => {
                        e.forEach((e => {
                            "first-contentful-paint" === e.name && (s.disconnect(), e.startTime < n.firstHiddenTime && (r.value = Math.max(e.startTime - Ti(), 0), r.entries.push(e), o(!0)))
                        }))
                    }));
                    s && (o = xi(e, r, $i, t.reportAllChanges))
                }))
            })(Ai((() => {
                const n = Ii("CLS", 0);
                let r, o = 0,
                    s = [];
                const i = e => {
                        e.forEach((e => {
                            if (!e.hadRecentInput) {
                                const t = s[0],
                                    n = s[s.length - 1];
                                o && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e])
                            }
                        })), o > n.value && (n.value = o, n.entries = s, r())
                    },
                    a = Mi("layout-shift", i);
                a && (r = xi(e, n, Fi, t.reportAllChanges), Ri((() => {
                    i(a.takeRecords()), r(!0)
                })), setTimeout(r, 0))
            })))
        },
        Ui = [100, 300],
        ji = (e, t = {}) => {
            Pi((() => {
                const n = Ni(),
                    r = Ii("FID");
                let o;
                const s = e => {
                        e.startTime < n.firstHiddenTime && (r.value = e.processingStart - e.startTime, r.entries.push(e), o(!0))
                    },
                    i = e => {
                        e.forEach(s)
                    },
                    a = Mi("first-input", i);
                o = xi(e, r, Ui, t.reportAllChanges), a && Ri(Ai((() => {
                    i(a.takeRecords()), a.disconnect()
                })))
            }))
        };
    let Hi = 0,
        zi = 1 / 0,
        Wi = 0;
    const qi = e => {
        e.forEach((e => {
            e.interactionId && (zi = Math.min(zi, e.interactionId), Wi = Math.max(Wi, e.interactionId), Hi = Wi ? (Wi - zi) / 7 + 1 : 0)
        }))
    };
    let Yi;
    const Vi = () => {
            "interactionCount" in performance || Yi || (Yi = Mi("event", qi, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        Gi = [],
        Xi = new Map,
        Ji = () => (Yi ? Hi : performance.interactionCount || 0) - 0,
        Ki = [],
        Zi = e => {
            if (Ki.forEach((t => t(e))), !e.interactionId && "first-input" !== e.entryType) return;
            const t = Gi[Gi.length - 1],
                n = Xi.get(e.interactionId);
            if (n || Gi.length < 10 || t && e.duration > t.latency) {
                if (n) e.duration > n.latency ? (n.entries = [e], n.latency = e.duration) : e.duration === n.latency && e.startTime === (n.entries[0] && n.entries[0].startTime) && n.entries.push(e);
                else {
                    const t = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    Xi.set(t.id, t), Gi.push(t)
                }
                Gi.sort(((e, t) => t.latency - e.latency)), Gi.length > 10 && Gi.splice(10).forEach((e => Xi.delete(e.id)))
            }
        },
        Qi = e => {
            const t = Vo.requestIdleCallback || Vo.setTimeout;
            let n = -1;
            return e = Ai(e), Vo.document && "hidden" === Vo.document.visibilityState ? e() : (n = t(e), Ri(e)), n
        },
        ea = [200, 500],
        ta = (e, t = {}) => {
            "PerformanceEventTiming" in Vo && "interactionId" in PerformanceEventTiming.prototype && Pi((() => {
                Vi();
                const n = Ii("INP");
                let r;
                const o = e => {
                        Qi((() => {
                            e.forEach(Zi);
                            const t = (() => {
                                const e = Math.min(Gi.length - 1, Math.floor(Ji() / 50));
                                return Gi[e]
                            })();
                            t && t.latency !== n.value && (n.value = t.latency, n.entries = t.entries, r())
                        }))
                    },
                    s = Mi("event", o, {
                        durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40
                    });
                r = xi(e, n, ea, t.reportAllChanges), s && (s.observe({
                    type: "first-input",
                    buffered: !0
                }), Ri((() => {
                    o(s.takeRecords()), r(!0)
                })))
            }))
        },
        na = [2500, 4e3],
        ra = {},
        oa = (e, t = {}) => {
            Pi((() => {
                const n = Ni(),
                    r = Ii("LCP");
                let o;
                const s = e => {
                        t.reportAllChanges || (e = e.slice(-1)), e.forEach((e => {
                            e.startTime < n.firstHiddenTime && (r.value = Math.max(e.startTime - Ti(), 0), r.entries = [e], o())
                        }))
                    },
                    i = Mi("largest-contentful-paint", s);
                if (i) {
                    o = xi(e, r, na, t.reportAllChanges);
                    const n = Ai((() => {
                        ra[r.id] || (s(i.takeRecords()), i.disconnect(), ra[r.id] = !0, o(!0))
                    }));
                    ["keydown", "click"].forEach((e => {
                        Vo.document && addEventListener(e, (() => Qi(n)), {
                            once: !0,
                            capture: !0
                        })
                    })), Ri(n)
                }
            }))
        },
        sa = [800, 1800],
        ia = e => {
            Vo.document && Vo.document.prerendering ? Pi((() => ia(e))) : Vo.document && "complete" !== Vo.document.readyState ? addEventListener("load", (() => ia(e)), !0) : setTimeout(e, 0)
        },
        aa = (e, t = {}) => {
            const n = Ii("TTFB"),
                r = xi(e, n, sa, t.reportAllChanges);
            ia((() => {
                const e = Ci();
                e && (n.value = Math.max(e.responseStart - Ti(), 0), n.entries = [e], r(!0))
            }))
        },
        ca = {},
        ua = {};
    let la, da, pa, ha, fa;

    function ma(e, t = !1) {
        return Ca("cls", e, Sa, la, t)
    }

    function ga(e, t = !1) {
        return Ca("lcp", e, ka, pa, t)
    }

    function _a(e) {
        return Ca("fid", e, wa, da)
    }

    function ya(e) {
        return Ca("inp", e, xa, fa)
    }

    function va(e, t) {
        return Ta(e, t), ua[e] || (function(e) {
            const t = {};
            "event" === e && (t.durationThreshold = 0), Mi(e, (t => {
                ba(e, {
                    entries: t
                })
            }), t)
        }(e), ua[e] = !0), Ia(e, t)
    }

    function ba(e, t) {
        const n = ca[e];
        if (n && n.length)
            for (const r of n) try {
                r(t)
            } catch (t) {
                Yo && F.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Qe(r)}\nError:`, t)
            }
    }

    function Sa() {
        return Bi((e => {
            ba("cls", {
                metric: e
            }), la = e
        }), {
            reportAllChanges: !0
        })
    }

    function wa() {
        return ji((e => {
            ba("fid", {
                metric: e
            }), da = e
        }))
    }

    function ka() {
        return oa((e => {
            ba("lcp", {
                metric: e
            }), pa = e
        }), {
            reportAllChanges: !0
        })
    }

    function Ea() {
        return aa((e => {
            ba("ttfb", {
                metric: e
            }), ha = e
        }))
    }

    function xa() {
        return ta((e => {
            ba("inp", {
                metric: e
            }), fa = e
        }))
    }

    function Ca(e, t, n, r, o = !1) {
        let s;
        return Ta(e, t), ua[e] || (s = n(), ua[e] = !0), r && t({
            metric: r
        }), Ia(e, t, o ? s : void 0)
    }

    function Ta(e, t) {
        ca[e] = ca[e] || [], ca[e].push(t)
    }

    function Ia(e, t, n) {
        return () => {
            n && n();
            const r = ca[e];
            if (!r) return;
            const o = r.indexOf(t); - 1 !== o && r.splice(o, 1)
        }
    }
    const Ma = C,
        Ra = "sentryReplaySession",
        Aa = "replay_event",
        Oa = "Unable to send Replay",
        Da = 15e4,
        La = 5e3,
        Na = 2e7;

    function Pa(e, t) {
        return null != e ? e : t()
    }

    function $a(e) {
        let t, n = e[0],
            r = 1;
        for (; r < e.length;) {
            const o = e[r],
                s = e[r + 1];
            if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
            "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s(((...e) => n.call(t, ...e))), t = void 0)
        }
        return n
    }
    var Fa;

    function Ba(e) {
        const t = $a([e, "optionalAccess", e => e.host]);
        return Boolean($a([t, "optionalAccess", e => e.shadowRoot]) === e)
    }

    function Ua(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
    }

    function ja(e) {
        try {
            const n = e.rules || e.cssRules;
            return n ? ((t = Array.from(n, Ha).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
        } catch (e) {
            return null
        }
        var t
    }

    function Ha(e) {
        let t;
        if (function(e) {
                return "styleSheet" in e
            }(e)) try {
            t = ja(e.styleSheet) || function(e) {
                const {
                    cssText: t
                } = e;
                if (t.split('"').length < 3) return t;
                const n = ["@import", `url(${JSON.stringify(e.href)})`];
                return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
            }(e)
        } catch (e) {} else if (function(e) {
                return "selectorText" in e
            }(e)) {
            let t = e.cssText;
            const n = e.selectorText.includes(":"),
                r = "string" == typeof e.style.all && e.style.all;
            if (r && (t = function(e) {
                    let t = "";
                    for (let n = 0; n < e.style.length; n++) {
                        const r = e.style,
                            o = r[n],
                            s = r.getPropertyPriority(o);
                        t += `${o}:${r.getPropertyValue(o)}${s?" !important":""};`
                    }
                    return `${e.selectorText} { ${t} }`
                }(e)), n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), n || r) return t
        }
        return t || e.cssText
    }! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
    }(Fa || (Fa = {}));class za {
        constructor() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
        getId(e) {
            return e ? Pa($a([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id]), (() => -1)) : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            const t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            const n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            const n = this.getNode(e);
            if (n) {
                const e = this.nodeMetaMap.get(n);
                e && this.nodeMetaMap.set(t, e)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    }

    function Wa({
        maskInputOptions: e,
        tagName: t,
        type: n
    }) {
        return "OPTION" === t && (t = "SELECT"), Boolean(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
    }

    function qa({
        isMasked: e,
        element: t,
        value: n,
        maskInputFn: r
    }) {
        let o = n || "";
        return e ? (r && (o = r(o, t)), "*".repeat(o.length)) : o
    }

    function Ya(e) {
        return e.toLowerCase()
    }

    function Va(e) {
        return e.toUpperCase()
    }
    const Ga = "__rrweb_original__";

    function Xa(e) {
        const t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? Ya(t) : null
    }

    function Ja(e, t, n) {
        return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || ""
    }

    function Ka(e, t) {
        let n;
        try {
            n = new URL(e, Pa(t, (() => window.location.href)))
        } catch (e) {
            return null
        }
        return Pa($a([n.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", e => e[1]]), (() => null))
    }
    const Za = {};

    function Qa(e) {
        const t = Za[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
            const t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            const o = t.contentWindow;
            o && o[e] && (r = o[e]), n.head.removeChild(t)
        } catch (e) {}
        return Za[e] = r.bind(window)
    }

    function ec(...e) {
        return Qa("setTimeout")(...e)
    }

    function tc(...e) {
        return Qa("clearTimeout")(...e)
    }

    function nc(e) {
        try {
            return e.contentDocument
        } catch (e) {}
    }
    let rc = 1;
    const oc = new RegExp("[^a-z0-9-_:]"),
        sc = -2;

    function ic() {
        return rc++
    }
    let ac, cc;
    const uc = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        lc = /^(?:[a-z+]+:)?\/\//i,
        dc = /^www\..*/i,
        pc = /^(data:)([^,]*),(.*)/i;

    function hc(e, t) {
        return (e || "").replace(uc, ((e, n, r, o, s, i) => {
            const a = r || s || i,
                c = n || o || "";
            if (!a) return e;
            if (lc.test(a) || dc.test(a)) return `url(${c}${a}${c})`;
            if (pc.test(a)) return `url(${c}${a}${c})`;
            if ("/" === a[0]) return `url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`;
            const u = t.split("/"),
                l = a.split("/");
            u.pop();
            for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
            return `url(${c}${u.join("/")}${c})`
        }))
    }
    const fc = /^[^ \t\n\r\u000c]+/,
        mc = /^[, \t\n\r\u000c]+/,
        gc = new WeakMap;

    function _c(e, t) {
        return t && "" !== t.trim() ? yc(e, t) : t
    }

    function yc(e, t) {
        let n = gc.get(e);
        if (n || (n = e.createElement("a"), gc.set(e, n)), t) {
            if (t.startsWith("blob:") || t.startsWith("data:")) return t
        } else t = "";
        return n.setAttribute("href", t), n.href
    }

    function vc(e, t, n, r, o, s) {
        return r ? "src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? _c(e, r) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? function(e, t) {
            if ("" === t.trim()) return t;
            let n = 0;

            function r(e) {
                let r;
                const o = e.exec(t.substring(n));
                return o ? (r = o[0], n += r.length, r) : ""
            }
            const o = [];
            for (; r(mc), !(n >= t.length);) {
                let s = r(fc);
                if ("," === s.slice(-1)) s = _c(e, s.substring(0, s.length - 1)), o.push(s);
                else {
                    let r = "";
                    s = _c(e, s);
                    let i = !1;
                    for (;;) {
                        const e = t.charAt(n);
                        if ("" === e) {
                            o.push((s + r).trim());
                            break
                        }
                        if (i) ")" === e && (i = !1);
                        else {
                            if ("," === e) {
                                n += 1, o.push((s + r).trim());
                                break
                            }
                            "(" === e && (i = !0)
                        }
                        r += e, n += 1
                    }
                }
            }
            return o.join(", ")
        }(e, r) : "style" === n ? hc(r, yc(e)) : "object" === t && "data" === n ? _c(e, r) : "function" == typeof s ? s(n, r, o) : r : _c(e, r) : r
    }

    function bc(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t
    }

    function Sc(e, t, n = 1 / 0, r = 0) {
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Sc(e.parentNode, t, n, r + 1) : -1
    }

    function wc(e, t) {
        return n => {
            const r = n;
            if (null === r) return !1;
            try {
                if (e)
                    if ("string" == typeof e) {
                        if (r.matches(`.${e}`)) return !0
                    } else if (function(e, t) {
                        for (let n = e.classList.length; n--;) {
                            const r = e.classList[n];
                            if (t.test(r)) return !0
                        }
                        return !1
                    }(r, e)) return !0;
                return !(!t || !r.matches(t))
            } catch (e) {
                return !1
            }
        }
    }

    function kc(e, t, n, r, o, s) {
        try {
            const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === i) return !1;
            if ("INPUT" === i.tagName) {
                const e = i.getAttribute("autocomplete");
                if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
            }
            let a = -1,
                c = -1;
            if (s) {
                if (c = Sc(i, wc(r, o)), c < 0) return !0;
                a = Sc(i, wc(t, n), c >= 0 ? c : 1 / 0)
            } else {
                if (a = Sc(i, wc(t, n)), a < 0) return !1;
                c = Sc(i, wc(r, o), a >= 0 ? a : 1 / 0)
            }
            return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !s)
        } catch (e) {}
        return !!s
    }

    function Ec(e) {
        return null == e ? "" : e.toLowerCase()
    }

    function xc(e, t) {
        const {
            doc: n,
            mirror: r,
            blockClass: o,
            blockSelector: s,
            unblockSelector: i,
            maskAllText: a,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: l,
            unmaskTextSelector: d,
            skipChild: p = !1,
            inlineStylesheet: h = !0,
            maskInputOptions: f = {},
            maskAttributeFn: m,
            maskTextFn: g,
            maskInputFn: _,
            slimDOMOptions: y,
            dataURLOptions: v = {},
            inlineImages: b = !1,
            recordCanvas: S = !1,
            onSerialize: w,
            onIframeLoad: k,
            iframeLoadTimeout: E = 5e3,
            onStylesheetLoad: x,
            stylesheetLoadTimeout: C = 5e3,
            keepIframeSrcFn: T = (() => !1),
            newlyAddedElement: I = !1
        } = t;
        let {
            preserveWhiteSpace: M = !0
        } = t;
        const R = function(e, t) {
            const {
                doc: n,
                mirror: r,
                blockClass: o,
                blockSelector: s,
                unblockSelector: i,
                maskAllText: a,
                maskAttributeFn: c,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: h,
                maskInputOptions: f = {},
                maskTextFn: m,
                maskInputFn: g,
                dataURLOptions: _ = {},
                inlineImages: y,
                recordCanvas: v,
                keepIframeSrcFn: b,
                newlyAddedElement: S = !1
            } = t, w = function(e, t) {
                if (!t.hasNode(e)) return;
                const n = t.getId(e);
                return 1 === n ? void 0 : n
            }(n, r);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    return "CSS1Compat" !== e.compatMode ? {
                        type: Fa.Document,
                        childNodes: [],
                        compatMode: e.compatMode
                    } : {
                        type: Fa.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: Fa.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: w
                    };
                case e.ELEMENT_NODE:
                    return function(e, t) {
                        const {
                            doc: n,
                            blockClass: r,
                            blockSelector: o,
                            unblockSelector: s,
                            inlineStylesheet: i,
                            maskInputOptions: a = {},
                            maskAttributeFn: c,
                            maskInputFn: u,
                            dataURLOptions: l = {},
                            inlineImages: d,
                            recordCanvas: p,
                            keepIframeSrcFn: h,
                            newlyAddedElement: f = !1,
                            rootId: m,
                            maskAllText: g,
                            maskTextClass: _,
                            unmaskTextClass: y,
                            maskTextSelector: v,
                            unmaskTextSelector: b
                        } = t, S = function(e, t, n, r) {
                            try {
                                if (r && e.matches(r)) return !1;
                                if ("string" == typeof t) {
                                    if (e.classList.contains(t)) return !0
                                } else
                                    for (let n = e.classList.length; n--;) {
                                        const r = e.classList[n];
                                        if (t.test(r)) return !0
                                    }
                                if (n) return e.matches(n)
                            } catch (e) {}
                            return !1
                        }(e, r, o, s), w = function(e) {
                            if (e instanceof HTMLFormElement) return "form";
                            const t = Ya(e.tagName);
                            return oc.test(t) ? "div" : t
                        }(e);
                        let k = {};
                        const E = e.attributes.length;
                        for (let t = 0; t < E; t++) {
                            const r = e.attributes[t];
                            r.name && !bc(w, r.name, r.value) && (k[r.name] = vc(n, w, Ya(r.name), r.value, e, c))
                        }
                        if ("link" === w && i) {
                            const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                            let r = null;
                            t && (r = ja(t)), r && (k.rel = null, k.href = null, k.crossorigin = null, k._cssText = hc(r, t.href))
                        }
                        if ("style" === w && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            const t = ja(e.sheet);
                            t && (k._cssText = hc(t, yc(n)))
                        }
                        if ("input" === w || "textarea" === w || "select" === w || "option" === w) {
                            const t = e,
                                n = Xa(t),
                                r = Ja(t, Va(w), n),
                                o = t.checked;
                            if ("submit" !== n && "button" !== n && r) {
                                const e = kc(t, _, v, y, b, Wa({
                                    type: n,
                                    tagName: Va(w),
                                    maskInputOptions: a
                                }));
                                k.value = qa({
                                    isMasked: e,
                                    element: t,
                                    value: r,
                                    maskInputFn: u
                                })
                            }
                            o && (k.checked = o)
                        }
                        if ("option" === w && (e.selected && !a.select ? k.selected = !0 : delete k.selected), "canvas" === w && p)
                            if ("2d" === e.__context)(function(e) {
                                const t = e.getContext("2d");
                                if (!t) return !0;
                                for (let n = 0; n < e.width; n += 50)
                                    for (let r = 0; r < e.height; r += 50) {
                                        const o = t.getImageData,
                                            s = Ga in o ? o[Ga] : o;
                                        if (new Uint32Array(s.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e))) return !1
                                    }
                                return !0
                            })(e) || (k.rr_dataURL = e.toDataURL(l.type, l.quality));
                            else if (!("__context" in e)) {
                            const t = e.toDataURL(l.type, l.quality),
                                r = n.createElement("canvas");
                            r.width = e.width, r.height = e.height, t !== r.toDataURL(l.type, l.quality) && (k.rr_dataURL = t)
                        }
                        if ("img" === w && d) {
                            ac || (ac = n.createElement("canvas"), cc = ac.getContext("2d"));
                            const t = e,
                                r = t.currentSrc || t.getAttribute("src") || "<unknown-src>",
                                o = t.crossOrigin,
                                s = () => {
                                    t.removeEventListener("load", s);
                                    try {
                                        ac.width = t.naturalWidth, ac.height = t.naturalHeight, cc.drawImage(t, 0, 0), k.rr_dataURL = ac.toDataURL(l.type, l.quality)
                                    } catch (e) {
                                        if ("anonymous" !== t.crossOrigin) return t.crossOrigin = "anonymous", void(t.complete && 0 !== t.naturalWidth ? s() : t.addEventListener("load", s));
                                        console.warn(`Cannot inline img src=${r}! Error: ${e}`)
                                    }
                                    "anonymous" === t.crossOrigin && (o ? k.crossOrigin = o : t.removeAttribute("crossorigin"))
                                };
                            t.complete && 0 !== t.naturalWidth ? s() : t.addEventListener("load", s)
                        }
                        if ("audio" !== w && "video" !== w || (k.rr_mediaState = e.paused ? "paused" : "played", k.rr_mediaCurrentTime = e.currentTime), f || (e.scrollLeft && (k.rr_scrollLeft = e.scrollLeft), e.scrollTop && (k.rr_scrollTop = e.scrollTop)), S) {
                            const {
                                width: t,
                                height: n
                            } = e.getBoundingClientRect();
                            k = {
                                class: k.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`
                            }
                        }
                        let x;
                        "iframe" !== w || h(k.src) || (S || nc(e) || (k.rr_src = k.src), delete k.src);
                        try {
                            customElements.get(w) && (x = !0)
                        } catch (e) {}
                        return {
                            type: Fa.Element,
                            tagName: w,
                            attributes: k,
                            childNodes: [],
                            isSVG: (C = e, Boolean("svg" === C.tagName || C.ownerSVGElement) || void 0),
                            needBlock: S,
                            rootId: m,
                            isCustom: x
                        };
                        var C
                    }(e, {
                        doc: n,
                        blockClass: o,
                        blockSelector: s,
                        unblockSelector: i,
                        inlineStylesheet: h,
                        maskAttributeFn: c,
                        maskInputOptions: f,
                        maskInputFn: g,
                        dataURLOptions: _,
                        inlineImages: y,
                        recordCanvas: v,
                        keepIframeSrcFn: b,
                        newlyAddedElement: S,
                        rootId: w,
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p
                    });
                case e.TEXT_NODE:
                    return function(e, t) {
                        const {
                            maskAllText: n,
                            maskTextClass: r,
                            unmaskTextClass: o,
                            maskTextSelector: s,
                            unmaskTextSelector: i,
                            maskTextFn: a,
                            maskInputOptions: c,
                            maskInputFn: u,
                            rootId: l
                        } = t, d = e.parentNode && e.parentNode.tagName;
                        let p = e.textContent;
                        const h = "STYLE" === d || void 0,
                            f = "SCRIPT" === d || void 0,
                            m = "TEXTAREA" === d || void 0;
                        if (h && p) {
                            try {
                                e.nextSibling || e.previousSibling || $a([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (p = ja(e.parentNode.sheet))
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                            }
                            p = hc(p, yc(t.doc))
                        }
                        f && (p = "SCRIPT_PLACEHOLDER");
                        const g = kc(e, r, s, o, i, n);
                        return h || f || m || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), m && p && (c.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = qa({
                            isMasked: kc(e, r, s, o, i, Wa({
                                type: null,
                                tagName: d,
                                maskInputOptions: c
                            })),
                            element: e,
                            value: p,
                            maskInputFn: u
                        })), {
                            type: Fa.Text,
                            textContent: p || "",
                            isStyle: h,
                            rootId: l
                        }
                    }(e, {
                        doc: n,
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: m,
                        maskInputOptions: f,
                        maskInputFn: g,
                        rootId: w
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: Fa.CDATA,
                        textContent: "",
                        rootId: w
                    };
                case e.COMMENT_NODE:
                    return {
                        type: Fa.Comment,
                        textContent: e.textContent || "",
                        rootId: w
                    };
                default:
                    return !1
            }
        }(e, {
            doc: n,
            mirror: r,
            blockClass: o,
            blockSelector: s,
            maskAllText: a,
            unblockSelector: i,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: l,
            unmaskTextSelector: d,
            inlineStylesheet: h,
            maskInputOptions: f,
            maskAttributeFn: m,
            maskTextFn: g,
            maskInputFn: _,
            dataURLOptions: v,
            inlineImages: b,
            recordCanvas: S,
            keepIframeSrcFn: T,
            newlyAddedElement: I
        });
        if (!R) return console.warn(e, "not serialized"), null;
        let A;
        A = r.hasNode(e) ? r.getId(e) : ! function(e, t) {
            if (t.comment && e.type === Fa.Comment) return !0;
            if (e.type === Fa.Element) {
                if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === Ka(e.attributes.href))) return !0;
                if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (Ec(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Ec(e.attributes.name) || "icon" === Ec(e.attributes.rel) || "apple-touch-icon" === Ec(e.attributes.rel) || "shortcut icon" === Ec(e.attributes.rel)))) return !0;
                if ("meta" === e.tagName) {
                    if (t.headMetaDescKeywords && Ec(e.attributes.name).match(/^description|keywords$/)) return !0;
                    if (t.headMetaSocial && (Ec(e.attributes.property).match(/^(og|twitter|fb):/) || Ec(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === Ec(e.attributes.name))) return !0;
                    if (t.headMetaRobots && ("robots" === Ec(e.attributes.name) || "googlebot" === Ec(e.attributes.name) || "bingbot" === Ec(e.attributes.name))) return !0;
                    if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                    if (t.headMetaAuthorship && ("author" === Ec(e.attributes.name) || "generator" === Ec(e.attributes.name) || "framework" === Ec(e.attributes.name) || "publisher" === Ec(e.attributes.name) || "progid" === Ec(e.attributes.name) || Ec(e.attributes.property).match(/^article:/) || Ec(e.attributes.property).match(/^product:/))) return !0;
                    if (t.headMetaVerification && ("google-site-verification" === Ec(e.attributes.name) || "yandex-verification" === Ec(e.attributes.name) || "csrf-token" === Ec(e.attributes.name) || "p:domain_verify" === Ec(e.attributes.name) || "verify-v1" === Ec(e.attributes.name) || "verification" === Ec(e.attributes.name) || "shopify-checkout-api-token" === Ec(e.attributes.name))) return !0
                }
            }
            return !1
        }(R, y) && (M || R.type !== Fa.Text || R.isStyle || R.textContent.replace(/^\s+|\s+$/gm, "").length) ? ic() : sc;
        const O = Object.assign(R, {
            id: A
        });
        if (r.add(e, O), A === sc) return null;
        w && w(e);
        let D = !p;
        if (O.type === Fa.Element) {
            D = D && !O.needBlock, delete O.needBlock;
            const t = e.shadowRoot;
            t && Ua(t) && (O.isShadowHost = !0)
        }
        if ((O.type === Fa.Document || O.type === Fa.Element) && D) {
            y.headWhitespace && O.type === Fa.Element && "head" === O.tagName && (M = !1);
            const t = {
                doc: n,
                mirror: r,
                blockClass: o,
                blockSelector: s,
                maskAllText: a,
                unblockSelector: i,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: d,
                skipChild: p,
                inlineStylesheet: h,
                maskInputOptions: f,
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: _,
                slimDOMOptions: y,
                dataURLOptions: v,
                inlineImages: b,
                recordCanvas: S,
                preserveWhiteSpace: M,
                onSerialize: w,
                onIframeLoad: k,
                iframeLoadTimeout: E,
                onStylesheetLoad: x,
                stylesheetLoadTimeout: C,
                keepIframeSrcFn: T
            };
            for (const n of Array.from(e.childNodes)) {
                const e = xc(n, t);
                e && O.childNodes.push(e)
            }
            if (function(e) {
                    return e.nodeType === e.ELEMENT_NODE
                }(e) && e.shadowRoot)
                for (const n of Array.from(e.shadowRoot.childNodes)) {
                    const r = xc(n, t);
                    r && (Ua(e.shadowRoot) && (r.isShadow = !0), O.childNodes.push(r))
                }
        }
        return e.parentNode && Ba(e.parentNode) && Ua(e.parentNode) && (O.isShadow = !0), O.type === Fa.Element && "iframe" === O.tagName && function(e, t, n) {
            const r = e.contentWindow;
            if (!r) return;
            let o, s = !1;
            try {
                o = r.document.readyState
            } catch (e) {
                return
            }
            if ("complete" !== o) {
                const r = ec((() => {
                    s || (t(), s = !0)
                }), n);
                return void e.addEventListener("load", (() => {
                    tc(r), s = !0, t()
                }))
            }
            const i = "about:blank";
            if (r.location.href !== i || e.src === i || "" === e.src) return ec(t, 0), e.addEventListener("load", t);
            e.addEventListener("load", t)
        }(e, (() => {
            const t = nc(e);
            if (t && k) {
                const n = xc(t, {
                    doc: t,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: i,
                    maskAllText: a,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions: f,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: _,
                    slimDOMOptions: y,
                    dataURLOptions: v,
                    inlineImages: b,
                    recordCanvas: S,
                    preserveWhiteSpace: M,
                    onSerialize: w,
                    onIframeLoad: k,
                    iframeLoadTimeout: E,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: T
                });
                n && k(e, n)
            }
        }), E), O.type === Fa.Element && "link" === O.tagName && "string" == typeof O.attributes.rel && ("stylesheet" === O.attributes.rel || "preload" === O.attributes.rel && "string" == typeof O.attributes.href && "css" === Ka(O.attributes.href)) && function(e, t, n) {
            let r, o = !1;
            try {
                r = e.sheet
            } catch (e) {
                return
            }
            if (r) return;
            const s = ec((() => {
                o || (t(), o = !0)
            }), n);
            e.addEventListener("load", (() => {
                tc(s), o = !0, t()
            }))
        }(e, (() => {
            if (x) {
                const t = xc(e, {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: i,
                    maskAllText: a,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions: f,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: _,
                    slimDOMOptions: y,
                    dataURLOptions: v,
                    inlineImages: b,
                    recordCanvas: S,
                    preserveWhiteSpace: M,
                    onSerialize: w,
                    onIframeLoad: k,
                    iframeLoadTimeout: E,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: T
                });
                t && x(e, t)
            }
        }), C), O
    }

    function Cc(e) {
        let t, n = e[0],
            r = 1;
        for (; r < e.length;) {
            const o = e[r],
                s = e[r + 1];
            if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
            "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s(((...e) => n.call(t, ...e))), t = void 0)
        }
        return n
    }

    function Tc(e, t, n = document) {
        const r = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
    }
    const Ic = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let Mc = {
        map: {},
        getId: () => (console.error(Ic), -1),
        getNode: () => (console.error(Ic), null),
        removeNodeFromMap() {
            console.error(Ic)
        },
        has: () => (console.error(Ic), !1),
        reset() {
            console.error(Ic)
        }
    };

    function Rc(e, t, n = {}) {
        let r = null,
            o = 0;
        return function(...s) {
            const i = Date.now();
            o || !1 !== n.leading || (o = i);
            const a = t - (i - o),
                c = this;
            a <= 0 || a > t ? (r && (function(...e) {
                Xc("clearTimeout")(...e)
            }(r), r = null), o = i, e.apply(c, s)) : r || !1 === n.trailing || (r = Jc((() => {
                o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, s)
            }), a))
        }
    }

    function Ac(e, t, n, r, o = window) {
        const s = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, r ? n : {
            set(e) {
                Jc((() => {
                    n.set.call(this, e)
                }), 0), s && s.set && s.set.call(this, e)
            }
        }), () => Ac(e, t, s || {}, !0)
    }

    function Oc(e, t, n) {
        try {
            if (!(t in e)) return () => {};
            const r = e[t],
                o = n(r);
            return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), e[t] = o, () => {
                e[t] = r
            }
        } catch (e) {
            return () => {}
        }
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (Mc = new Proxy(Mc, {
        get: (e, t, n) => ("map" === t && console.error(Ic), Reflect.get(e, t, n))
    }));
    let Dc = Date.now;

    function Lc(e) {
        const t = e.document;
        return {
            left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : Cc([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || Cc([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || Cc([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
            top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : Cc([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || Cc([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || Cc([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
        }
    }

    function Nc() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function Pc() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function $c(e) {
        return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
    }

    function Fc(e, t, n, r, o) {
        if (!e) return !1;
        const s = $c(e);
        if (!s) return !1;
        const i = wc(t, n);
        if (!o) {
            const e = r && s.matches(r);
            return i(s) && !e
        }
        const a = Sc(s, i);
        let c = -1;
        return !(a < 0) && (r && (c = Sc(s, wc(null, r))), a > -1 && c < 0 || a < c)
    }

    function Bc(e, t) {
        return t.getId(e) === sc
    }

    function Uc(e, t) {
        if (Ba(e)) return !1;
        const n = t.getId(e);
        return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || Uc(e.parentNode, t))
    }

    function jc(e) {
        return Boolean(e.changedTouches)
    }

    function Hc(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
    }

    function zc(e, t) {
        return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
    }

    function Wc(e) {
        return Boolean(Cc([e, "optionalAccess", e => e.shadowRoot]))
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Dc = () => (new Date).getTime());class qc {
        constructor() {
            this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(e) {
            return () => -1, null != (t = this.styleIDMap.get(e)) ? t : -1;
            var t
        }
        has(e) {
            return this.styleIDMap.has(e)
        }
        add(e, t) {
            if (this.has(e)) return this.getId(e);
            let n;
            return n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n
        }
        getStyle(e) {
            return this.idStyleMap.get(e) || null
        }
        reset() {
            this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
            return this.id++
        }
    }

    function Yc(e) {
        let t = null;
        return Cc([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
    }

    function Vc(e) {
        const t = e.ownerDocument;
        return !!t && (t.contains(e) || function(e) {
            const t = e.ownerDocument;
            if (!t) return !1;
            const n = function(e) {
                let t, n = e;
                for (; t = Yc(n);) n = t;
                return n
            }(e);
            return t.contains(n)
        }(e))
    }
    const Gc = {};

    function Xc(e) {
        const t = Gc[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
            const t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            const o = t.contentWindow;
            o && o[e] && (r = o[e]), n.head.removeChild(t)
        } catch (e) {}
        return Gc[e] = r.bind(window)
    }

    function Jc(...e) {
        return Xc("setTimeout")(...e)
    }
    var Kc, Zc, Qc = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(Qc || {}),
        eu = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(eu || {}),
        tu = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(tu || {}),
        nu = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(nu || {});

    function ru(e) {
        try {
            return e.contentDocument
        } catch (e) {}
    }

    function ou(e) {
        let t, n = e[0],
            r = 1;
        for (; r < e.length;) {
            const o = e[r],
                s = e[r + 1];
            if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
            "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s(((...e) => n.call(t, ...e))), t = void 0)
        }
        return n
    }

    function su(e) {
        return "__ln" in e
    }! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
    }(Kc || (Kc = {})),
    function(e) {
        e[e.PLACEHOLDER = 0] = "PLACEHOLDER", e[e.ELEMENT_NODE = 1] = "ELEMENT_NODE", e[e.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", e[e.TEXT_NODE = 3] = "TEXT_NODE", e[e.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", e[e.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", e[e.ENTITY_NODE = 6] = "ENTITY_NODE", e[e.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", e[e.COMMENT_NODE = 8] = "COMMENT_NODE", e[e.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", e[e.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", e[e.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE"
    }(Zc || (Zc = {}));class iu {
        constructor() {
            this.length = 0, this.head = null, this.tail = null
        }
        get(e) {
            if (e >= this.length) throw new Error("Position outside of list range");
            let t = this.head;
            for (let n = 0; n < e; n++) t = ou([t, "optionalAccess", e => e.next]) || null;
            return t
        }
        addNode(e) {
            const t = {
                value: e,
                previous: null,
                next: null
            };
            if (e.__ln = t, e.previousSibling && su(e.previousSibling)) {
                const n = e.previousSibling.__ln.next;
                t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
            } else if (e.nextSibling && su(e.nextSibling) && e.nextSibling.__ln.previous) {
                const n = e.nextSibling.__ln.previous;
                t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
            } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
            null === t.next && (this.tail = t), this.length++
        }
        removeNode(e) {
            const t = e.__ln;
            this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
        }
    }
    const au = (e, t) => `${e}@${t}`;class cu {
        constructor() {
            this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                e.forEach(this.processMutation), this.emit()
            }, this.emit = () => {
                if (this.frozen || this.locked) return;
                const e = [],
                    t = new Set,
                    n = new iu,
                    r = e => {
                        let t = e,
                            n = sc;
                        for (; n === sc;) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                        return n
                    },
                    o = o => {
                        if (!o.parentNode || !Vc(o)) return;
                        const s = Ba(o.parentNode) ? this.mirror.getId(Yc(o)) : this.mirror.getId(o.parentNode),
                            i = r(o);
                        if (-1 === s || -1 === i) return n.addNode(o);
                        const a = xc(o, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                Hc(e, this.mirror) && !Fc(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), zc(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), Wc(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc)
                            },
                            onIframeLoad: (e, t) => {
                                Fc(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e))
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            }
                        });
                        a && (e.push({
                            parentId: s,
                            nextId: i,
                            node: a
                        }), t.add(a.id))
                    };
                for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (const e of this.movedSet) lu(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || o(e);
                for (const e of this.addedSet) du(this.droppedSet, e) || lu(this.removes, e, this.mirror) ? du(this.movedSet, e) ? o(e) : this.droppedSet.add(e) : o(e);
                let s = null;
                for (; n.length;) {
                    let e = null;
                    if (s) {
                        const t = this.mirror.getId(s.value.parentNode),
                            n = r(s.value); - 1 !== t && -1 !== n && (e = s)
                    }
                    if (!e) {
                        let t = n.tail;
                        for (; t;) {
                            const n = t;
                            if (t = t.previous, n) {
                                const t = this.mirror.getId(n.value.parentNode);
                                if (-1 === r(n.value)) continue;
                                if (-1 !== t) {
                                    e = n;
                                    break
                                } {
                                    const t = n.value;
                                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        const r = t.parentNode.host;
                                        if (-1 !== this.mirror.getId(r)) {
                                            e = n;
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!e) {
                        for (; n.head;) n.removeNode(n.head.value);
                        break
                    }
                    s = e.previous, n.removeNode(e.value), o(e.value)
                }
                const i = {
                    texts: this.texts.map((e => ({
                        id: this.mirror.getId(e.node),
                        value: e.value
                    }))).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                    attributes: this.attributes.map((e => {
                        const {
                            attributes: t
                        } = e;
                        if ("string" == typeof t.style) {
                            const n = JSON.stringify(e.styleDiff),
                                r = JSON.stringify(e._unchangedStyles);
                            n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                        }
                        return {
                            id: this.mirror.getId(e.node),
                            attributes: t
                        }
                    })).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                    removes: this.removes,
                    adds: e
                };
                (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(i))
            }, this.processMutation = e => {
                if (!Bc(e.target, this.mirror)) switch (e.type) {
                    case "characterData":
                        {
                            const t = e.target.textContent;Fc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                value: kc(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, $c(e.target)) : t.replace(/[\S]/g, "*") : t,
                                node: e.target
                            });
                            break
                        }
                    case "attributes":
                        {
                            const t = e.target;
                            let n = e.attributeName,
                                r = e.target.getAttribute(n);
                            if ("value" === n) {
                                const n = Xa(t),
                                    o = t.tagName;
                                r = Ja(t, o, n);
                                const s = Wa({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: o,
                                    type: n
                                });
                                r = qa({
                                    isMasked: kc(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                    element: t,
                                    value: r,
                                    maskInputFn: this.maskInputFn
                                })
                            }
                            if (Fc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                            let o = this.attributeMap.get(e.target);
                            if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                if (ru(t)) return;
                                n = "rr_src"
                            }
                            if (o || (o = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                }, this.attributes.push(o), this.attributeMap.set(e.target, o)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !bc(t.tagName, n) && (o.attributes[n] = vc(this.doc, Ya(t.tagName), Ya(n), r, t, this.maskAttributeFn), "style" === n)) {
                                if (!this.unattachedDoc) try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument()
                                } catch (e) {
                                    this.unattachedDoc = this.doc
                                }
                                const n = this.unattachedDoc.createElement("span");
                                e.oldValue && n.setAttribute("style", e.oldValue);
                                for (const e of Array.from(t.style)) {
                                    const r = t.style.getPropertyValue(e),
                                        s = t.style.getPropertyPriority(e);
                                    r !== n.style.getPropertyValue(e) || s !== n.style.getPropertyPriority(e) ? o.styleDiff[e] = "" === s ? r : [r, s] : o._unchangedStyles[e] = [r, s]
                                }
                                for (const e of Array.from(n.style)) "" === t.style.getPropertyValue(e) && (o.styleDiff[e] = !1)
                            }
                            break
                        }
                    case "childList":
                        if (Fc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                            const n = this.mirror.getId(t),
                                r = Ba(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                            Fc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Bc(t, this.mirror) || ! function(e, t) {
                                return -1 !== t.getId(e)
                            }(t, this.mirror) || (this.addedSet.has(t) ? (uu(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || Uc(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[au(n, r)] ? uu(this.movedSet, t) : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow: !(!Ba(e.target) || !Ua(e.target)) || void 0
                            })), this.mapRemoves.push(t))
                        }))
                }
            }, this.genAdds = (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                    if (this.mirror.hasNode(e)) {
                        if (Bc(e, this.mirror)) return;
                        this.movedSet.add(e);
                        let n = null;
                        t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[au(this.mirror.getId(e), n)] = !0)
                    } else this.addedSet.add(e), this.droppedSet.delete(e);
                    Fc(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes.forEach((e => this.genAdds(e))), Wc(e) && e.shadowRoot.childNodes.forEach((t => {
                        this.processedNodeManager.add(t, this), this.genAdds(t, e)
                    })))
                }
            }
        }
        init(e) {
            ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((t => {
                this[t] = e[t]
            }))
        }
        freeze() {
            this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset()
        }
    }

    function uu(e, t) {
        e.delete(t), t.childNodes.forEach((t => uu(e, t)))
    }

    function lu(e, t, n) {
        return 0 !== e.length && function(e, t, n) {
            let r = t.parentNode;
            for (; r;) {
                const t = n.getId(r);
                if (e.some((e => e.id === t))) return !0;
                r = r.parentNode
            }
            return !1
        }(e, t, n)
    }

    function du(e, t) {
        return 0 !== e.size && pu(e, t)
    }

    function pu(e, t) {
        const {
            parentNode: n
        } = t;
        return !!n && (!!e.has(n) || pu(e, n))
    }
    let hu;

    function fu(e) {
        hu = e
    }

    function mu() {
        hu = void 0
    }
    const gu = e => hu ? (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (hu && !0 === hu(e)) return () => {};
            throw e
        }
    } : e;

    function _u(e) {
        let t, n = e[0],
            r = 1;
        for (; r < e.length;) {
            const o = e[r],
                s = e[r + 1];
            if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
            "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s(((...e) => n.call(t, ...e))), t = void 0)
        }
        return n
    }
    const yu = [];

    function vu(e) {
        try {
            if ("composedPath" in e) {
                const t = e.composedPath();
                if (t.length) return t[0]
            } else if ("path" in e && e.path.length) return e.path[0]
        } catch (e) {}
        return e && e.target
    }

    function bu(e, t) {
        const n = new cu;
        yu.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver;
        const o = _u([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
        o && window[o] && (r = window[o]);
        const s = new r(gu((t => {
            e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
        })));
        return s.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), s
    }

    function Su({
        scrollCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: o,
        unblockSelector: s,
        sampling: i
    }) {
        return Tc("scroll", gu(Rc(gu((i => {
            const a = vu(i);
            if (!a || Fc(a, r, o, s, !0)) return;
            const c = n.getId(a);
            if (a === t && t.defaultView) {
                const n = Lc(t.defaultView);
                e({
                    id: c,
                    x: n.left,
                    y: n.top
                })
            } else e({
                id: c,
                x: a.scrollLeft,
                y: a.scrollTop
            })
        })), i.scroll || 100)), t)
    }
    const wu = ["INPUT", "TEXTAREA", "SELECT"],
        ku = new WeakMap;

    function Eu({
        inputCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: o,
        unblockSelector: s,
        ignoreClass: i,
        ignoreSelector: a,
        maskInputOptions: c,
        maskInputFn: u,
        sampling: l,
        userTriggeredOnInput: d,
        maskTextClass: p,
        unmaskTextClass: h,
        maskTextSelector: f,
        unmaskTextSelector: m
    }) {
        function g(e) {
            let n = vu(e);
            const l = e.isTrusted,
                g = n && Va(n.tagName);
            if ("OPTION" === g && (n = n.parentElement), !n || !g || wu.indexOf(g) < 0 || Fc(n, r, o, s, !0)) return;
            const y = n;
            if (y.classList.contains(i) || a && y.matches(a)) return;
            const v = Xa(n);
            let b = Ja(y, g, v),
                S = !1;
            const w = Wa({
                    maskInputOptions: c,
                    tagName: g,
                    type: v
                }),
                k = kc(n, p, f, h, m, w);
            "radio" !== v && "checkbox" !== v || (S = n.checked), b = qa({
                isMasked: k,
                element: n,
                value: b,
                maskInputFn: u
            }), _(n, d ? {
                text: b,
                isChecked: S,
                userTriggered: l
            } : {
                text: b,
                isChecked: S
            });
            const E = n.name;
            "radio" === v && E && S && t.querySelectorAll(`input[type="radio"][name="${E}"]`).forEach((e => {
                if (e !== n) {
                    const t = qa({
                        isMasked: k,
                        element: e,
                        value: Ja(e, g, v),
                        maskInputFn: u
                    });
                    _(e, d ? {
                        text: t,
                        isChecked: !S,
                        userTriggered: !1
                    } : {
                        text: t,
                        isChecked: !S
                    })
                }
            }))
        }

        function _(t, r) {
            const o = ku.get(t);
            if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                ku.set(t, r);
                const o = n.getId(t);
                gu(e)({ ...r,
                    id: o
                })
            }
        }
        const y = ("last" === l.input ? ["change"] : ["input", "change"]).map((e => Tc(e, gu(g), t))),
            v = t.defaultView;
        if (!v) return () => {
            y.forEach((e => e()))
        };
        const b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
            S = [
                [v.HTMLInputElement.prototype, "value"],
                [v.HTMLInputElement.prototype, "checked"],
                [v.HTMLSelectElement.prototype, "value"],
                [v.HTMLTextAreaElement.prototype, "value"],
                [v.HTMLSelectElement.prototype, "selectedIndex"],
                [v.HTMLOptionElement.prototype, "selected"]
            ];
        return b && b.set && y.push(...S.map((e => Ac(e[0], e[1], {
            set() {
                gu(g)({
                    target: this,
                    isTrusted: !1
                })
            }
        }, !1, v)))), gu((() => {
            y.forEach((e => e()))
        }))
    }

    function xu(e) {
        return function(e, t) {
            if (Mu("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || Mu("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || Mu("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || Mu("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                const n = Array.from(e.parentRule.cssRules).indexOf(e);
                t.unshift(n)
            } else if (e.parentStyleSheet) {
                const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                t.unshift(n)
            }
            return t
        }(e, [])
    }

    function Cu(e, t, n) {
        let r, o;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e), {
            styleId: o,
            id: r
        }) : {}
    }

    function Tu({
        mirror: e,
        stylesheetManager: t
    }, n) {
        let r = null;
        r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
        const o = "#document" === n.nodeName ? _u([n, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : _u([n, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
            s = _u([o, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(_u([o, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
        return null !== r && -1 !== r && o && s ? (Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: s.configurable,
            enumerable: s.enumerable,
            get() {
                return _u([s, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
            },
            set(e) {
                const n = _u([s, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                if (null !== r && -1 !== r) try {
                    t.adoptStyleSheets(e, r)
                } catch (e) {}
                return n
            }
        }), gu((() => {
            Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: s.configurable,
                enumerable: s.enumerable,
                get: s.get,
                set: s.set
            })
        }))) : () => {}
    }

    function Iu(e, t = {}) {
        const n = e.doc.defaultView;
        if (!n) return () => {};
        let r;
        e.recordDOM && (r = bu(e, e.doc));
        const o = function({
                mousemoveCb: e,
                sampling: t,
                doc: n,
                mirror: r
            }) {
                if (!1 === t.mousemove) return () => {};
                const o = "number" == typeof t.mousemove ? t.mousemove : 50,
                    s = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
                let i, a = [];
                const c = Rc(gu((t => {
                        const n = Date.now() - i;
                        e(a.map((e => (e.timeOffset -= n, e))), t), a = [], i = null
                    })), s),
                    u = gu(Rc(gu((e => {
                        const t = vu(e),
                            {
                                clientX: n,
                                clientY: o
                            } = jc(e) ? e.changedTouches[0] : e;
                        i || (i = Dc()), a.push({
                            x: n,
                            y: o,
                            id: r.getId(t),
                            timeOffset: Dc() - i
                        }), c("undefined" != typeof DragEvent && e instanceof DragEvent ? eu.Drag : e instanceof MouseEvent ? eu.MouseMove : eu.TouchMove)
                    })), o, {
                        trailing: !1
                    })),
                    l = [Tc("mousemove", u, n), Tc("touchmove", u, n), Tc("drag", u, n)];
                return gu((() => {
                    l.forEach((e => e()))
                }))
            }(e),
            s = function({
                mouseInteractionCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                unblockSelector: s,
                sampling: i
            }) {
                if (!1 === i.mouseInteraction) return () => {};
                const a = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction,
                    c = [];
                let u = null;
                return Object.keys(tu).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])).forEach((i => {
                    let a = Ya(i);
                    const l = (t => i => {
                        const a = vu(i);
                        if (Fc(a, r, o, s, !0)) return;
                        let c = null,
                            l = t;
                        if ("pointerType" in i) {
                            switch (i.pointerType) {
                                case "mouse":
                                    c = nu.Mouse;
                                    break;
                                case "touch":
                                    c = nu.Touch;
                                    break;
                                case "pen":
                                    c = nu.Pen
                            }
                            c === nu.Touch ? tu[t] === tu.MouseDown ? l = "TouchStart" : tu[t] === tu.MouseUp && (l = "TouchEnd") : nu.Pen
                        } else jc(i) && (c = nu.Touch);
                        null !== c ? (u = c, (l.startsWith("Touch") && c === nu.Touch || l.startsWith("Mouse") && c === nu.Mouse) && (c = null)) : tu[t] === tu.Click && (c = u, u = null);
                        const d = jc(i) ? i.changedTouches[0] : i;
                        if (!d) return;
                        const p = n.getId(a),
                            {
                                clientX: h,
                                clientY: f
                            } = d;
                        gu(e)({
                            type: tu[l],
                            id: p,
                            x: h,
                            y: f,
                            ...null !== c && {
                                pointerType: c
                            }
                        })
                    })(i);
                    if (window.PointerEvent) switch (tu[i]) {
                        case tu.MouseDown:
                        case tu.MouseUp:
                            a = a.replace("mouse", "pointer");
                            break;
                        case tu.TouchStart:
                        case tu.TouchEnd:
                            return
                    }
                    c.push(Tc(a, l, t))
                })), gu((() => {
                    c.forEach((e => e()))
                }))
            }(e),
            i = Su(e),
            a = function({
                viewportResizeCb: e
            }, {
                win: t
            }) {
                let n = -1,
                    r = -1;
                return Tc("resize", gu(Rc(gu((() => {
                    const t = Nc(),
                        o = Pc();
                    n === t && r === o || (e({
                        width: Number(o),
                        height: Number(t)
                    }), n = t, r = o)
                })), 200)), t)
            }(e, {
                win: n
            }),
            c = Eu(e),
            u = function({
                mediaInteractionCb: e,
                blockClass: t,
                blockSelector: n,
                unblockSelector: r,
                mirror: o,
                sampling: s,
                doc: i
            }) {
                const a = gu((i => Rc(gu((s => {
                        const a = vu(s);
                        if (!a || Fc(a, t, n, r, !0)) return;
                        const {
                            currentTime: c,
                            volume: u,
                            muted: l,
                            playbackRate: d
                        } = a;
                        e({
                            type: i,
                            id: o.getId(a),
                            currentTime: c,
                            volume: u,
                            muted: l,
                            playbackRate: d
                        })
                    })), s.media || 500))),
                    c = [Tc("play", a(0), i), Tc("pause", a(1), i), Tc("seeked", a(2), i), Tc("volumechange", a(3), i), Tc("ratechange", a(4), i)];
                return gu((() => {
                    c.forEach((e => e()))
                }))
            }(e);
        let l = () => {},
            d = () => {},
            p = () => {},
            h = () => {};
        e.recordDOM && (l = function({
            styleSheetRuleCb: e,
            mirror: t,
            stylesheetManager: n
        }, {
            win: r
        }) {
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            const o = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: gu(((r, o, s) => {
                    const [i, a] = s, {
                        id: c,
                        styleId: u
                    } = Cu(o, t, n.styleMirror);
                    return (c && -1 !== c || u && -1 !== u) && e({
                        id: c,
                        styleId: u,
                        adds: [{
                            rule: i,
                            index: a
                        }]
                    }), r.apply(o, s)
                }))
            });
            const s = r.CSSStyleSheet.prototype.deleteRule;
            let i, a;
            r.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
                apply: gu(((r, o, s) => {
                    const [i] = s, {
                        id: a,
                        styleId: c
                    } = Cu(o, t, n.styleMirror);
                    return (a && -1 !== a || c && -1 !== c) && e({
                        id: a,
                        styleId: c,
                        removes: [{
                            index: i
                        }]
                    }), r.apply(o, s)
                }))
            }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                apply: gu(((r, o, s) => {
                    const [i] = s, {
                        id: a,
                        styleId: c
                    } = Cu(o, t, n.styleMirror);
                    return (a && -1 !== a || c && -1 !== c) && e({
                        id: a,
                        styleId: c,
                        replace: i
                    }), r.apply(o, s)
                }))
            })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                apply: gu(((r, o, s) => {
                    const [i] = s, {
                        id: a,
                        styleId: c
                    } = Cu(o, t, n.styleMirror);
                    return (a && -1 !== a || c && -1 !== c) && e({
                        id: a,
                        styleId: c,
                        replaceSync: i
                    }), r.apply(o, s)
                }))
            }));
            const c = {};
            Ru("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (Ru("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), Ru("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), Ru("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
            const u = {};
            return Object.entries(c).forEach((([r, o]) => {
                u[r] = {
                    insertRule: o.prototype.insertRule,
                    deleteRule: o.prototype.deleteRule
                }, o.prototype.insertRule = new Proxy(u[r].insertRule, {
                    apply: gu(((r, o, s) => {
                        const [i, a] = s, {
                            id: c,
                            styleId: u
                        } = Cu(o.parentStyleSheet, t, n.styleMirror);
                        return (c && -1 !== c || u && -1 !== u) && e({
                            id: c,
                            styleId: u,
                            adds: [{
                                rule: i,
                                index: [...xu(o), a || 0]
                            }]
                        }), r.apply(o, s)
                    }))
                }), o.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                    apply: gu(((r, o, s) => {
                        const [i] = s, {
                            id: a,
                            styleId: c
                        } = Cu(o.parentStyleSheet, t, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && e({
                            id: a,
                            styleId: c,
                            removes: [{
                                index: [...xu(o), i]
                            }]
                        }), r.apply(o, s)
                    }))
                })
            })), gu((() => {
                r.CSSStyleSheet.prototype.insertRule = o, r.CSSStyleSheet.prototype.deleteRule = s, i && (r.CSSStyleSheet.prototype.replace = i), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(c).forEach((([e, t]) => {
                    t.prototype.insertRule = u[e].insertRule, t.prototype.deleteRule = u[e].deleteRule
                }))
            }))
        }(e, {
            win: n
        }), d = Tu(e, e.doc), p = function({
            styleDeclarationCb: e,
            mirror: t,
            ignoreCSSAttributes: n,
            stylesheetManager: r
        }, {
            win: o
        }) {
            const s = o.CSSStyleDeclaration.prototype.setProperty;
            o.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                apply: gu(((o, i, a) => {
                    const [c, u, l] = a;
                    if (n.has(c)) return s.apply(i, [c, u, l]);
                    const {
                        id: d,
                        styleId: p
                    } = Cu(_u([i, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, r.styleMirror);
                    return (d && -1 !== d || p && -1 !== p) && e({
                        id: d,
                        styleId: p,
                        set: {
                            property: c,
                            value: u,
                            priority: l
                        },
                        index: xu(i.parentRule)
                    }), o.apply(i, a)
                }))
            });
            const i = o.CSSStyleDeclaration.prototype.removeProperty;
            return o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
                apply: gu(((o, s, a) => {
                    const [c] = a;
                    if (n.has(c)) return i.apply(s, [c]);
                    const {
                        id: u,
                        styleId: l
                    } = Cu(_u([s, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, r.styleMirror);
                    return (u && -1 !== u || l && -1 !== l) && e({
                        id: u,
                        styleId: l,
                        remove: {
                            property: c
                        },
                        index: xu(s.parentRule)
                    }), o.apply(s, a)
                }))
            }), gu((() => {
                o.CSSStyleDeclaration.prototype.setProperty = s, o.CSSStyleDeclaration.prototype.removeProperty = i
            }))
        }(e, {
            win: n
        }), e.collectFonts && (h = function({
            fontCb: e,
            doc: t
        }) {
            const n = t.defaultView;
            if (!n) return () => {};
            const r = [],
                o = new WeakMap,
                s = n.FontFace;
            n.FontFace = function(e, t, n) {
                const r = new s(e, t, n);
                return o.set(r, {
                    family: e,
                    buffer: "string" != typeof t,
                    descriptors: n,
                    fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                }), r
            };
            const i = Oc(t.fonts, "add", (function(t) {
                return function(n) {
                    return Jc(gu((() => {
                        const t = o.get(n);
                        t && (e(t), o.delete(n))
                    })), 0), t.apply(this, [n])
                }
            }));
            return r.push((() => {
                n.FontFace = s
            })), r.push(i), gu((() => {
                r.forEach((e => e()))
            }))
        }(e)));
        const f = function(e) {
                const {
                    doc: t,
                    mirror: n,
                    blockClass: r,
                    blockSelector: o,
                    unblockSelector: s,
                    selectionCb: i
                } = e;
                let a = !0;
                const c = gu((() => {
                    const e = t.getSelection();
                    if (!e || a && _u([e, "optionalAccess", e => e.isCollapsed])) return;
                    a = e.isCollapsed || !1;
                    const c = [],
                        u = e.rangeCount || 0;
                    for (let t = 0; t < u; t++) {
                        const i = e.getRangeAt(t),
                            {
                                startContainer: a,
                                startOffset: u,
                                endContainer: l,
                                endOffset: d
                            } = i;
                        Fc(a, r, o, s, !0) || Fc(l, r, o, s, !0) || c.push({
                            start: n.getId(a),
                            startOffset: u,
                            end: n.getId(l),
                            endOffset: d
                        })
                    }
                    i({
                        ranges: c
                    })
                }));
                return c(), Tc("selectionchange", c)
            }(e),
            m = function({
                doc: e,
                customElementCb: t
            }) {
                const n = e.defaultView;
                return n && n.customElements ? Oc(n.customElements, "define", (function(e) {
                    return function(n, r, o) {
                        try {
                            t({
                                define: {
                                    name: n
                                }
                            })
                        } catch (e) {}
                        return e.apply(this, [n, r, o])
                    }
                })) : () => {}
            }(e),
            g = [];
        for (const t of e.plugins) g.push(t.observer(t.callback, n, t.options));
        return gu((() => {
            yu.forEach((e => e.reset())), _u([r, "optionalAccess", e => e.disconnect, "call", e => e()]), o(), s(), i(), a(), c(), u(), l(), d(), p(), h(), f(), m(), g.forEach((e => e()))
        }))
    }

    function Mu(e) {
        return void 0 !== window[e]
    }

    function Ru(e) {
        return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
    }
    class Au {
        constructor(e) {
            this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(e, t, n, r) {
            const o = n || this.getIdToRemoteIdMap(e),
                s = r || this.getRemoteIdToIdMap(e);
            let i = o.get(t);
            return i || (i = this.generateIdFn(), o.set(t, i), s.set(i, t)), i
        }
        getIds(e, t) {
            const n = this.getIdToRemoteIdMap(e),
                r = this.getRemoteIdToIdMap(e);
            return t.map((t => this.getId(e, t, n, r)))
        }
        getRemoteId(e, t, n) {
            const r = n || this.getRemoteIdToIdMap(e);
            if ("number" != typeof t) return t;
            return r.get(t) || -1
        }
        getRemoteIds(e, t) {
            const n = this.getRemoteIdToIdMap(e);
            return t.map((t => this.getRemoteId(e, t, n)))
        }
        reset(e) {
            if (!e) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
        }
        getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
        }
    }

    function Ou(e) {
        let t, n = e[0],
            r = 1;
        for (; r < e.length;) {
            const o = e[r],
                s = e[r + 1];
            if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
            "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s(((...e) => n.call(t, ...e))), t = void 0)
        }
        return n
    }
    class Du {
        constructor() {
            this.crossOriginIframeMirror = new Au(ic), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
    }
    class Lu {
        constructor(e) {
            this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new Au(ic), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Au(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
            this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
        }
        addLoadListener(e) {
            this.loadListener = e
        }
        attachIframe(e, t) {
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }), Ou([this, "access", e => e.loadListener, "optionalCall", t => t(e)]);
            const n = ru(e);
            n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
        }
        handleMessage(e) {
            const t = e;
            if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
            if (!e.source) return;
            const n = this.crossOriginIframeMap.get(e.source);
            if (!n) return;
            const r = this.transformCrossOriginEvent(n, t.data.event);
            r && this.wrappedEmit(r, t.data.isCheckout)
        }
        transformCrossOriginEvent(e, t) {
            switch (t.type) {
                case Qc.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        const n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n),
                        this.patchRootIdOnNode(t.data.node, n),
                        {
                            timestamp: t.timestamp,
                            type: Qc.IncrementalSnapshot,
                            data: {
                                source: eu.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case Qc.Meta:
                case Qc.Load:
                case Qc.DomContentLoaded:
                    return !1;
                case Qc.Plugin:
                    return t;
                case Qc.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                case Qc.IncrementalSnapshot:
                    switch (t.data.source) {
                        case eu.Mutation:
                            return t.data.adds.forEach((t => {
                                this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                const n = this.crossOriginIframeRootIdMap.get(e);
                                n && this.patchRootIdOnNode(t.node, n)
                            })), t.data.removes.forEach((t => {
                                this.replaceIds(t, e, ["parentId", "id"])
                            })), t.data.attributes.forEach((t => {
                                this.replaceIds(t, e, ["id"])
                            })), t.data.texts.forEach((t => {
                                this.replaceIds(t, e, ["id"])
                            })), t;
                        case eu.Drag:
                        case eu.TouchMove:
                        case eu.MouseMove:
                            return t.data.positions.forEach((t => {
                                this.replaceIds(t, e, ["id"])
                            })), t;
                        case eu.ViewportResize:
                            return !1;
                        case eu.MediaInteraction:
                        case eu.MouseInteraction:
                        case eu.Scroll:
                        case eu.CanvasMutation:
                        case eu.Input:
                            return this.replaceIds(t.data, e, ["id"]), t;
                        case eu.StyleSheetRule:
                        case eu.StyleDeclaration:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                        case eu.Font:
                            return t;
                        case eu.Selection:
                            return t.data.ranges.forEach((t => {
                                this.replaceIds(t, e, ["start", "end"])
                            })), t;
                        case eu.AdoptedStyleSheet:
                            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), Ou([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t((t => {
                                this.replaceStyleIds(t, e, ["styleId"])
                            }))]), t
                    }
            }
            return !1
        }
        replace(e, t, n, r) {
            for (const o of r)(Array.isArray(t[o]) || "number" == typeof t[o]) && (Array.isArray(t[o]) ? t[o] = e.getIds(n, t[o]) : t[o] = e.getId(n, t[o]));
            return t
        }
        replaceIds(e, t, n) {
            return this.replace(this.crossOriginIframeMirror, e, t, n)
        }
        replaceStyleIds(e, t, n) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
        }
        replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach((e => {
                this.replaceIdOnNode(e, t)
            }))
        }
        patchRootIdOnNode(e, t) {
            e.type === Fa.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach((e => {
                this.patchRootIdOnNode(e, t)
            }))
        }
    }
    class Nu {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
    }
    class Pu {
        constructor(e) {
            this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
            this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
            if (!Ua(e)) return;
            if (this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
            const n = bu({ ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }, e);
            this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(Su({ ...this.bypassOptions,
                scrollCb: this.scrollCb,
                doc: e,
                mirror: this.mirror
            })), Jc((() => {
                e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(Tu({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager
                }, e))
            }), 0)
        }
        observeAttachShadow(e) {
            const t = ru(e),
                n = function(e) {
                    try {
                        return e.contentWindow
                    } catch (e) {}
                }(e);
            t && n && this.patchAttachShadow(n.Element, t)
        }
        patchAttachShadow(e, t) {
            const n = this;
            this.restoreHandlers.push(Oc(e.prototype, "attachShadow", (function(e) {
                return function(r) {
                    const o = e.call(this, r);
                    return this.shadowRoot && Vc(this) && n.addShadowRoot(this.shadowRoot, t), o
                }
            })))
        }
        reset() {
            this.restoreHandlers.forEach((e => {
                try {
                    e()
                } catch (e) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
        }
    }
    class $u {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
        addWindow() {}
        addShadowRoot() {}
        resetShadowRoots() {}
    }
    class Fu {
        constructor(e) {
            this.trackedLinkElements = new WeakSet, this.styleMirror = new qc, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
            "_cssText" in t.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: t.id,
                    attributes: t.attributes
                }]
            }), this.trackLinkElement(e)
        }
        trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
            if (0 === e.length) return;
            const n = {
                    id: t,
                    styleIds: []
                },
                r = [];
            for (const t of e) {
                let e;
                this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                    styleId: e,
                    rules: Array.from(t.rules || CSSRule, ((e, t) => ({
                        rule: Ha(e),
                        index: t
                    })))
                })), n.styleIds.push(e)
            }
            r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
        }
        reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
    }
    class Bu {
        constructor() {
            this.nodeMap = new WeakMap, this.active = !1
        }
        inOtherBuffer(e, t) {
            const n = this.nodeMap.get(e);
            return n && Array.from(n).some((e => e !== t))
        }
        add(e, t) {
            this.active || (this.active = !0, function(...e) {
                Xc("requestAnimationFrame")(...e)
            }((() => {
                this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
    }
    let Uu, ju;
    try {
        if (2 !== Array.from([1], (e => 2 * e))[0]) {
            const e = document.createElement("iframe");
            document.body.appendChild(e), Array.from = ki([e, "access", e => e.contentWindow, "optionalAccess", e => e.Array, "access", e => e.from]) || Array.from, document.body.removeChild(e)
        }
    } catch (e) {
        console.debug("Unable to override Array.from", e)
    }
    const Hu = new za;

    function zu(e = {}) {
        const {
            emit: t,
            checkoutEveryNms: n,
            checkoutEveryNth: r,
            blockClass: o = "rr-block",
            blockSelector: s = null,
            unblockSelector: i = null,
            ignoreClass: a = "rr-ignore",
            ignoreSelector: c = null,
            maskAllText: u = !1,
            maskTextClass: l = "rr-mask",
            unmaskTextClass: d = null,
            maskTextSelector: p = null,
            unmaskTextSelector: h = null,
            inlineStylesheet: f = !0,
            maskAllInputs: m,
            maskInputOptions: g,
            slimDOMOptions: _,
            maskAttributeFn: y,
            maskInputFn: v,
            maskTextFn: b,
            maxCanvasSize: S = null,
            packFn: w,
            sampling: k = {},
            dataURLOptions: E = {},
            mousemoveWait: x,
            recordDOM: C = !0,
            recordCanvas: T = !1,
            recordCrossOriginIframes: I = !1,
            recordAfter: M = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"),
            userTriggeredOnInput: R = !1,
            collectFonts: A = !1,
            inlineImages: O = !1,
            plugins: D,
            keepIframeSrcFn: L = (() => !1),
            ignoreCSSAttributes: N = new Set([]),
            errorHandler: P,
            onMutation: $,
            getCanvasManager: F
        } = e;
        fu(P);
        const B = !I || window.parent === window;
        let U = !1;
        if (!B) try {
            window.parent.document && (U = !1)
        } catch (e) {
            U = !0
        }
        if (B && !t) throw new Error("emit function is required");
        if (!B && !U) return () => {};
        void 0 !== x && void 0 === k.mousemove && (k.mousemove = x), Hu.reset();
        const j = !0 === m ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== g ? g : {},
            H = !0 === _ || "all" === _ ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === _,
                headMetaDescKeywords: "all" === _
            } : _ || {};
        let z;
        ! function(e = window) {
            "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                let t = e[0];
                if (!(0 in e)) throw new TypeError("1 argument is required");
                do {
                    if (this === t) return !0
                } while (t = t && t.parentNode);
                return !1
            })
        }();
        let W = 0;
        const q = e => {
            for (const t of D || []) t.eventProcessor && (e = t.eventProcessor(e));
            return w && !U && (e = w(e)), e
        };
        Uu = (e, o) => {
            const s = e;
            if (s.timestamp = Dc(), !ki([yu, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) || s.type === Qc.FullSnapshot || s.type === Qc.IncrementalSnapshot && s.data.source === eu.Mutation || yu.forEach((e => e.unfreeze())), B) ki([t, "optionalCall", e => e(q(s), o)]);
            else if (U) {
                const e = {
                    type: "rrweb",
                    event: q(s),
                    origin: window.location.origin,
                    isCheckout: o
                };
                window.parent.postMessage(e, "*")
            }
            if (s.type === Qc.FullSnapshot) z = s, W = 0;
            else if (s.type === Qc.IncrementalSnapshot) {
                if (s.data.source === eu.Mutation && s.data.isAttachIframe) return;
                W++;
                const e = r && W >= r,
                    t = n && z && s.timestamp - z.timestamp > n;
                (e || t) && ee(!0)
            }
        };
        const Y = e => {
                Uu({
                    type: Qc.IncrementalSnapshot,
                    data: {
                        source: eu.Mutation,
                        ...e
                    }
                })
            },
            V = e => Uu({
                type: Qc.IncrementalSnapshot,
                data: {
                    source: eu.Scroll,
                    ...e
                }
            }),
            G = e => Uu({
                type: Qc.IncrementalSnapshot,
                data: {
                    source: eu.CanvasMutation,
                    ...e
                }
            }),
            X = new Fu({
                mutationCb: Y,
                adoptedStyleSheetCb: e => Uu({
                    type: Qc.IncrementalSnapshot,
                    data: {
                        source: eu.AdoptedStyleSheet,
                        ...e
                    }
                })
            }),
            J = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new Du : new Lu({
                mirror: Hu,
                mutationCb: Y,
                stylesheetManager: X,
                recordCrossOriginIframes: I,
                wrappedEmit: Uu
            });
        for (const e of D || []) e.getMirror && e.getMirror({
            nodeMirror: Hu,
            crossOriginIframeMirror: J.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: J.crossOriginIframeStyleMirror
        });
        const K = new Bu,
            Z = function(e, t) {
                try {
                    return e ? e(t) : new $u
                } catch (e) {
                    return console.warn("Unable to initialize CanvasManager"), new $u
                }
            }(F, {
                mirror: Hu,
                win: window,
                mutationCb: e => Uu({
                    type: Qc.IncrementalSnapshot,
                    data: {
                        source: eu.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: T,
                blockClass: o,
                blockSelector: s,
                unblockSelector: i,
                maxCanvasSize: S,
                sampling: k.canvas,
                dataURLOptions: E,
                errorHandler: P
            }),
            Q = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new Nu : new Pu({
                mutationCb: Y,
                scrollCb: V,
                bypassOptions: {
                    onMutation: $,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: i,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskInputOptions: j,
                    dataURLOptions: E,
                    maskAttributeFn: y,
                    maskTextFn: b,
                    maskInputFn: v,
                    recordCanvas: T,
                    inlineImages: O,
                    sampling: k,
                    slimDOMOptions: H,
                    iframeManager: J,
                    stylesheetManager: X,
                    canvasManager: Z,
                    keepIframeSrcFn: L,
                    processedNodeManager: K
                },
                mirror: Hu
            }),
            ee = (e = !1) => {
                if (!C) return;
                Uu({
                    type: Qc.Meta,
                    data: {
                        href: window.location.href,
                        width: Pc(),
                        height: Nc()
                    }
                }, e), X.reset(), Q.init(), yu.forEach((e => e.lock()));
                const t = function(e, t) {
                    const {
                        mirror: n = new za,
                        blockClass: r = "rr-block",
                        blockSelector: o = null,
                        unblockSelector: s = null,
                        maskAllText: i = !1,
                        maskTextClass: a = "rr-mask",
                        unmaskTextClass: c = null,
                        maskTextSelector: u = null,
                        unmaskTextSelector: l = null,
                        inlineStylesheet: d = !0,
                        inlineImages: p = !1,
                        recordCanvas: h = !1,
                        maskAllInputs: f = !1,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: _,
                        slimDOM: y = !1,
                        dataURLOptions: v,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: E,
                        stylesheetLoadTimeout: x,
                        keepIframeSrcFn: C = (() => !1)
                    } = t || {};
                    return xc(e, {
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: o,
                        unblockSelector: s,
                        maskAllText: i,
                        maskTextClass: a,
                        unmaskTextClass: c,
                        maskTextSelector: u,
                        unmaskTextSelector: l,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === f ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === f ? {} : f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: _,
                        slimDOMOptions: !0 === y || "all" === y ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === y,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === y ? {} : y,
                        dataURLOptions: v,
                        inlineImages: p,
                        recordCanvas: h,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: E,
                        stylesheetLoadTimeout: x,
                        keepIframeSrcFn: C,
                        newlyAddedElement: !1
                    })
                }(document, {
                    mirror: Hu,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: i,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskAllInputs: j,
                    maskAttributeFn: y,
                    maskInputFn: v,
                    maskTextFn: b,
                    slimDOM: H,
                    dataURLOptions: E,
                    recordCanvas: T,
                    inlineImages: O,
                    onSerialize: e => {
                        Hc(e, Hu) && J.addIframe(e), zc(e, Hu) && X.trackLinkElement(e), Wc(e) && Q.addShadowRoot(e.shadowRoot, document)
                    },
                    onIframeLoad: (e, t) => {
                        J.attachIframe(e, t), e.contentWindow && Z.addWindow(e.contentWindow), Q.observeAttachShadow(e)
                    },
                    onStylesheetLoad: (e, t) => {
                        X.attachLinkElement(e, t)
                    },
                    keepIframeSrcFn: L
                });
                if (!t) return console.warn("Failed to snapshot the document");
                Uu({
                    type: Qc.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: Lc(window)
                    }
                }), yu.forEach((e => e.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && X.adoptStyleSheets(document.adoptedStyleSheets, Hu.getId(document))
            };
        ju = ee;
        try {
            const e = [],
                t = e => gu(Iu)({
                    onMutation: $,
                    mutationCb: Y,
                    mousemoveCb: (e, t) => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: V,
                    viewportResizeCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: G,
                    fontCb: e => Uu({
                        type: Qc.IncrementalSnapshot,
                        data: {
                            source: eu.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        Uu({
                            type: Qc.IncrementalSnapshot,
                            data: {
                                source: eu.Selection,
                                ...e
                            }
                        })
                    },
                    customElementCb: e => {
                        Uu({
                            type: Qc.IncrementalSnapshot,
                            data: {
                                source: eu.CustomElement,
                                ...e
                            }
                        })
                    },
                    blockClass: o,
                    ignoreClass: a,
                    ignoreSelector: c,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    maskInputOptions: j,
                    inlineStylesheet: f,
                    sampling: k,
                    recordDOM: C,
                    recordCanvas: T,
                    inlineImages: O,
                    userTriggeredOnInput: R,
                    collectFonts: A,
                    doc: e,
                    maskAttributeFn: y,
                    maskInputFn: v,
                    maskTextFn: b,
                    keepIframeSrcFn: L,
                    blockSelector: s,
                    unblockSelector: i,
                    slimDOMOptions: H,
                    dataURLOptions: E,
                    mirror: Hu,
                    iframeManager: J,
                    stylesheetManager: X,
                    shadowDomManager: Q,
                    processedNodeManager: K,
                    canvasManager: Z,
                    ignoreCSSAttributes: N,
                    plugins: ki([D, "optionalAccess", e => e.filter, "call", e => e((e => e.observer)), "optionalAccess", e => e.map, "call", e => e((e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => Uu({
                            type: Qc.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    })))]) || []
                }, {});
            J.addLoadListener((n => {
                try {
                    e.push(t(n.contentDocument))
                } catch (e) {
                    console.warn(e)
                }
            }));
            const n = () => {
                ee(), e.push(t(document))
            };
            return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(Tc("DOMContentLoaded", (() => {
                Uu({
                    type: Qc.DomContentLoaded,
                    data: {}
                }), "DOMContentLoaded" === M && n()
            }))), e.push(Tc("load", (() => {
                Uu({
                    type: Qc.Load,
                    data: {}
                }), "load" === M && n()
            }), window))), () => {
                e.forEach((e => e())), K.destroy(), ju = void 0, mu()
            }
        } catch (e) {
            console.warn(e)
        }
    }
    zu.mirror = Hu,
    zu.takeFullSnapshot = function(e) {
        if (!ju) throw new Error("please take full snapshot after start recording");
        ju(e)
    };
    const Wu = 3;

    function qu(e) {
        return e > 9999999999 ? e : 1e3 * e
    }

    function Yu(e) {
        return e > 9999999999 ? e / 1e3 : e
    }

    function Vu(e, t) {
        "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate((() => (e.throttledAddEvent({
            type: Qc.Custom,
            timestamp: 1e3 * (t.timestamp || 0),
            data: {
                tag: "breadcrumb",
                payload: tt(t, 10, 1e3)
            }
        }), "console" === t.category))))
    }
    const Gu = "button,a";

    function Xu(e) {
        return e.closest(Gu) || e
    }

    function Ju(e) {
        const t = Ku(e);
        return t && t instanceof Element ? Xu(t) : t
    }

    function Ku(e) {
        return function(e) {
            return "object" == typeof e && !!e && "target" in e
        }(e) ? e.target : e
    }
    let Zu;
    const Qu = new Set([eu.Mutation, eu.StyleSheetRule, eu.StyleDeclaration, eu.AdoptedStyleSheet, eu.CanvasMutation, eu.Selection, eu.MediaInteraction]);class el {
        constructor(e, t, n = Vu) {
            this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
            const e = (t = () => {
                this._lastMutation = nl()
            }, Zu || (Zu = [], z(Ma, "open", (function(e) {
                return function(...t) {
                    if (Zu) try {
                        Zu.forEach((e => e()))
                    } catch (e) {}
                    return e.apply(Ma, t)
                }
            }))), Zu.push(t), () => {
                const e = Zu ? Zu.indexOf(t) : -1;
                e > -1 && Zu.splice(e, 1)
            });
            var t;
            this._teardown = () => {
                e(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
            }
        }
        removeListeners() {
            this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(e, t) {
            if (function(e, t) {
                    return !tl.includes(e.tagName) || ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "") || (!("A" !== e.tagName || !(e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) || !(!t || !e.matches(t))))
                }(t, this._ignoreSelector) || ! function(e) {
                    return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp)
                }(e)) return;
            const n = {
                timestamp: Yu(e.timestamp),
                clickBreadcrumb: e,
                clickCount: 0,
                node: t
            };
            this._clicks.some((e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation(e = Date.now()) {
            this._lastMutation = Yu(e)
        }
        registerScroll(e = Date.now()) {
            this._lastScroll = Yu(e)
        }
        registerClick(e) {
            const t = Xu(e);
            this._handleMultiClick(t)
        }
        _handleMultiClick(e) {
            this._getClicks(e).forEach((e => {
                e.clickCount++
            }))
        }
        _getClicks(e) {
            return this._clicks.filter((t => t.node === e))
        }
        _checkClicks() {
            const e = [],
                t = nl();
            this._clicks.forEach((n => {
                !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
            }));
            for (const t of e) {
                const e = this._clicks.indexOf(t);
                e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1))
            }
            this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(e) {
            const t = this._replay,
                n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
                r = e.mutationAfter && e.mutationAfter <= this._threshold,
                o = !n && !r,
                {
                    clickCount: s,
                    clickBreadcrumb: i
                } = e;
            if (o) {
                const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                    r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                    o = {
                        type: "default",
                        message: i.message,
                        timestamp: i.timestamp,
                        category: "ui.slowClickDetected",
                        data: { ...i.data,
                            url: Ma.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: s || 1
                        }
                    };
                this._addBreadcrumbEvent(t, o)
            } else if (s > 1) {
                const e = {
                    type: "default",
                    message: i.message,
                    timestamp: i.timestamp,
                    category: "ui.multiClick",
                    data: { ...i.data,
                        url: Ma.location.href,
                        route: t.getCurrentRoute(),
                        clickCount: s,
                        metric: !0
                    }
                };
                this._addBreadcrumbEvent(t, e)
            }
        }
        _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = Ko((() => this._checkClicks()), 1e3)
        }
    }
    const tl = ["A", "BUTTON", "INPUT"];

    function nl() {
        return Date.now() / 1e3
    }

    function rl(e) {
        return {
            timestamp: Date.now() / 1e3,
            type: "default",
            ...e
        }
    }
    var ol;! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
    }(ol || (ol = {}));
    const sl = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

    function il(e) {
        const t = {};
        !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
        for (const n in e)
            if (sl.has(n)) {
                let r = n;
                "data-testid" !== n && "data-test-id" !== n || (r = "testId"), t[r] = e[n]
            }
        return t
    }

    function al(e, t) {
        const n = zu.mirror.getId(e),
            r = n && zu.mirror.getNode(n),
            o = r && zu.mirror.getMeta(r),
            s = o && function(e) {
                return e.type === ol.Element
            }(o) ? o : null;
        return {
            message: t,
            data: s ? {
                nodeId: n,
                node: {
                    id: n,
                    tagName: s.tagName,
                    textContent: Array.from(s.childNodes).map((e => e.type === ol.Text && e.textContent)).filter(Boolean).map((e => e.trim())).join(""),
                    attributes: il(s.attributes)
                }
            } : {}
        }
    }
    const cl = {
        resource: function(e) {
            const {
                entryType: t,
                initiatorType: n,
                name: r,
                responseEnd: o,
                startTime: s,
                decodedBodySize: i,
                encodedBodySize: a,
                responseStatus: c,
                transferSize: u
            } = e;
            return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                type: `${t}.${n}`,
                start: dl(s),
                end: dl(o),
                name: r,
                data: {
                    size: u,
                    statusCode: c,
                    decodedBodySize: i,
                    encodedBodySize: a
                }
            }
        },
        paint: function(e) {
            const {
                duration: t,
                entryType: n,
                name: r,
                startTime: o
            } = e, s = dl(o);
            return {
                type: n,
                name: r,
                start: s,
                end: s + t,
                data: void 0
            }
        },
        navigation: function(e) {
            const {
                entryType: t,
                name: n,
                decodedBodySize: r,
                duration: o,
                domComplete: s,
                encodedBodySize: i,
                domContentLoadedEventStart: a,
                domContentLoadedEventEnd: c,
                domInteractive: u,
                loadEventStart: l,
                loadEventEnd: d,
                redirectCount: p,
                startTime: h,
                transferSize: f,
                type: m
            } = e;
            return 0 === o ? null : {
                type: `${t}.${m}`,
                start: dl(h),
                end: dl(s),
                name: n,
                data: {
                    size: f,
                    decodedBodySize: r,
                    encodedBodySize: i,
                    duration: o,
                    domInteractive: u,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: c,
                    loadEventStart: l,
                    loadEventEnd: d,
                    domComplete: s,
                    redirectCount: p
                }
            }
        }
    };

    function ul(e, t) {
        return ({
            metric: n
        }) => {
            t.replayPerformanceEntries.push(e(n))
        }
    }

    function ll(e) {
        const t = cl[e.entryType];
        return t ? t(e) : null
    }

    function dl(e) {
        return ((ne || Ma.performance.timeOrigin) + e) / 1e3
    }

    function pl(e) {
        const t = e.entries[e.entries.length - 1];
        return _l(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0)
    }

    function hl(e) {
        return void 0 !== e.sources
    }

    function fl(e) {
        const t = [],
            n = [];
        for (const r of e.entries)
            if (hl(r)) {
                const e = [];
                for (const t of r.sources)
                    if (t.node) {
                        n.push(t.node);
                        const r = zu.mirror.getId(t.node);
                        r && e.push(r)
                    }
                t.push({
                    value: r.value,
                    nodeIds: e.length ? e : void 0
                })
            }
        return _l(e, "cumulative-layout-shift", n, t)
    }

    function ml(e) {
        const t = e.entries[e.entries.length - 1];
        return _l(e, "first-input-delay", t && t.target ? [t.target] : void 0)
    }

    function gl(e) {
        const t = e.entries[e.entries.length - 1];
        return _l(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0)
    }

    function _l(e, t, n, r) {
        const o = e.value,
            s = e.rating,
            i = dl(o);
        return {
            type: "web-vital",
            name: t,
            start: i,
            end: i,
            data: {
                value: o,
                size: o,
                rating: s,
                nodeIds: n ? n.map((e => zu.mirror.getId(e))) : void 0,
                attributions: r
            }
        }
    }
    const yl = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        vl = ["info", "warn", "error", "log"],
        bl = "[Replay] ";

    function Sl(e, t = "info") {
        Le({
            category: "console",
            data: {
                logger: "replay"
            },
            level: t,
            message: `${bl}${e}`
        }, {
            level: t
        })
    }
    const wl = function() {
        let e = !1,
            t = !1;
        const n = {
            exception: () => {},
            infoTick: () => {},
            setConfig: n => {
                e = n.captureExceptions, t = n.traceInternals
            }
        };
        return yl ? (vl.forEach((e => {
            n[e] = (...n) => {
                F[e](bl, ...n), t && Sl(n.join(""), Pn(e))
            }
        })), n.exception = (r, ...o) => {
            o.length && n.error && n.error(...o), F.error(bl, r), e ? Xt(r) : t && Sl(r, "error")
        }, n.infoTick = (...e) => {
            F.info(bl, ...e), t && setTimeout((() => Sl(e[0])), 0)
        }) : vl.forEach((e => {
            n[e] = () => {}
        })), n
    }();class kl extends Error {
        constructor() {
            super("Event buffer exceeded maximum size of 20000000.")
        }
    }
    class El {
        constructor() {
            this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
            return this.events.length > 0
        }
        get type() {
            return "sync"
        }
        destroy() {
            this.events = []
        }
        async addEvent(e) {
            const t = JSON.stringify(e).length;
            if (this._totalSize += t, this._totalSize > Na) throw new kl;
            this.events.push(e)
        }
        finish() {
            return new Promise((e => {
                const t = this.events;
                this.clear(), e(JSON.stringify(t))
            }))
        }
        clear() {
            this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        getEarliestTimestamp() {
            const e = this.events.map((e => e.timestamp)).sort()[0];
            return e ? qu(e) : null
        }
    }
    class xl {
        constructor(e) {
            this._worker = e, this._id = 0
        }
        ensureReady() {
            return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((e, t) => {
                this._worker.addEventListener("message", (({
                    data: n
                }) => {
                    n.success ? e() : t()
                }), {
                    once: !0
                }), this._worker.addEventListener("error", (e => {
                    t(e)
                }), {
                    once: !0
                })
            }))), this._ensureReadyPromise
        }
        destroy() {
            yl && wl.info("Destroying compression worker"), this._worker.terminate()
        }
        postMessage(e, t) {
            const n = this._getAndIncrementId();
            return new Promise(((r, o) => {
                const s = ({
                    data: t
                }) => {
                    const i = t;
                    if (i.method === e && i.id === n) {
                        if (this._worker.removeEventListener("message", s), !i.success) return yl && wl.error("Error in compression worker: ", i.response), void o(new Error("Error in compression worker"));
                        r(i.response)
                    }
                };
                this._worker.addEventListener("message", s), this._worker.postMessage({
                    id: n,
                    method: e,
                    arg: t
                })
            }))
        }
        _getAndIncrementId() {
            return this._id++
        }
    }
    class Cl {
        constructor(e) {
            this._worker = new xl(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
        }
        get hasEvents() {
            return !!this._earliestTimestamp
        }
        get type() {
            return "worker"
        }
        ensureReady() {
            return this._worker.ensureReady()
        }
        destroy() {
            this._worker.destroy()
        }
        addEvent(e) {
            const t = qu(e.timestamp);
            (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
            const n = JSON.stringify(e);
            return this._totalSize += n.length, this._totalSize > Na ? Promise.reject(new kl) : this._sendEventToWorker(n)
        }
        finish() {
            return this._finishRequest()
        }
        clear() {
            this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (e => {
                yl && wl.exception(e, 'Sending "clear" message to worker failed', e)
            }))
        }
        getEarliestTimestamp() {
            return this._earliestTimestamp
        }
        _sendEventToWorker(e) {
            return this._worker.postMessage("addEvent", e)
        }
        async _finishRequest() {
            const e = await this._worker.postMessage("finish");
            return this._earliestTimestamp = null, this._totalSize = 0, e
        }
    }
    class Tl {
        constructor(e) {
            this._fallback = new El, this._compression = new Cl(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
        }
        get waitForCheckout() {
            return this._used.waitForCheckout
        }
        get type() {
            return this._used.type
        }
        get hasEvents() {
            return this._used.hasEvents
        }
        get hasCheckout() {
            return this._used.hasCheckout
        }
        set hasCheckout(e) {
            this._used.hasCheckout = e
        }
        set waitForCheckout(e) {
            this._used.waitForCheckout = e
        }
        destroy() {
            this._fallback.destroy(), this._compression.destroy()
        }
        clear() {
            return this._used.clear()
        }
        getEarliestTimestamp() {
            return this._used.getEarliestTimestamp()
        }
        addEvent(e) {
            return this._used.addEvent(e)
        }
        async finish() {
            return await this.ensureWorkerIsLoaded(), this._used.finish()
        }
        ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise
        }
        async _ensureWorkerIsLoaded() {
            try {
                await this._compression.ensureReady()
            } catch (e) {
                return void(yl && wl.exception(e, "Failed to load the compression worker, falling back to simple buffer"))
            }
            await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
            const {
                events: e,
                hasCheckout: t,
                waitForCheckout: n
            } = this._fallback, r = [];
            for (const t of e) r.push(this._compression.addEvent(t));
            this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
            try {
                await Promise.all(r), this._fallback.clear()
            } catch (e) {
                yl && wl.exception(e, "Failed to add events when switching buffers.")
            }
        }
    }

    function Il() {
        try {
            return "sessionStorage" in Ma && !!Ma.sessionStorage
        } catch (e) {
            return !1
        }
    }

    function Ml(e) {
        return void 0 !== e && Math.random() < e
    }

    function Rl(e) {
        const t = Date.now();
        return {
            id: e.id || re(),
            started: e.started || t,
            lastActivity: e.lastActivity || t,
            segmentId: e.segmentId || 0,
            sampled: e.sampled,
            previousSessionId: e.previousSessionId
        }
    }

    function Al(e) {
        if (Il()) try {
            Ma.sessionStorage.setItem(Ra, JSON.stringify(e))
        } catch (e) {}
    }

    function Ol({
        sessionSampleRate: e,
        allowBuffering: t,
        stickySession: n = !1
    }, {
        previousSessionId: r
    } = {}) {
        const o = function(e, t) {
                return Ml(e) ? "session" : !!t && "buffer"
            }(e, t),
            s = Rl({
                sampled: o,
                previousSessionId: r
            });
        return n && Al(s), s
    }

    function Dl(e, t, n = +new Date) {
        return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
    }

    function Ll(e, {
        maxReplayDuration: t,
        sessionIdleExpire: n,
        targetTime: r = Date.now()
    }) {
        return Dl(e.started, t, r) || Dl(e.lastActivity, n, r)
    }

    function Nl(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) {
        return !!Ll(e, {
            sessionIdleExpire: t,
            maxReplayDuration: n
        }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
    }

    function Pl({
        sessionIdleExpire: e,
        maxReplayDuration: t,
        previousSessionId: n
    }, r) {
        const o = r.stickySession && function() {
            if (!Il()) return null;
            try {
                const e = Ma.sessionStorage.getItem(Ra);
                if (!e) return null;
                const t = JSON.parse(e);
                return yl && wl.infoTick("Loading existing session"), Rl(t)
            } catch (e) {
                return null
            }
        }();
        return o ? Nl(o, {
            sessionIdleExpire: e,
            maxReplayDuration: t
        }) ? (yl && wl.infoTick("Session in sessionStorage is expired, creating new one..."), Ol(r, {
            previousSessionId: o.id
        })) : o : (yl && wl.infoTick("Creating new session"), Ol(r, {
            previousSessionId: n
        }))
    }

    function $l(e, t, n) {
        return !!Bl(e, t) && (Fl(e, t, n), !0)
    }
    async function Fl(e, t, n) {
        const {
            eventBuffer: r
        } = e;
        if (!r || r.waitForCheckout && !n) return null;
        const o = "buffer" === e.recordingMode;
        try {
            n && o && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
            const s = function(e, t) {
                try {
                    if ("function" == typeof t && function(e) {
                            return e.type === Qc.Custom
                        }(e)) return t(e)
                } catch (e) {
                    return yl && wl.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null
                }
                return e
            }(t, e.getOptions().beforeAddRecordingEvent);
            if (!s) return;
            return await r.addEvent(s)
        } catch (t) {
            const n = t && t instanceof kl,
                s = n ? "addEventSizeExceeded" : "addEvent";
            if (n && o) return r.clear(), r.waitForCheckout = !0, null;
            e.handleException(t), await e.stop({
                reason: s
            });
            const i = Ae();
            i && i.recordDroppedEvent("internal_sdk_error", "replay")
        }
    }

    function Bl(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        const n = qu(t.timestamp);
        return !(n + e.timeouts.sessionIdlePause < Date.now() || n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration && (yl && wl.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), 1))
    }

    function Ul(e) {
        return !e.type
    }

    function jl(e) {
        return "transaction" === e.type
    }

    function Hl(e) {
        return "feedback" === e.type
    }

    function zl(e) {
        return !!e.category
    }

    function Wl() {
        const e = Ce().getPropagationContext().dsc;
        e && delete e.replay_id;
        const t = Pt();
        t && delete zt(t).replay_id
    }

    function ql(e, t) {
        return t.map((({
            type: t,
            start: n,
            end: r,
            name: o,
            data: s
        }) => {
            const i = e.throttledAddEvent({
                type: Qc.Custom,
                timestamp: n,
                data: {
                    tag: "performanceSpan",
                    payload: {
                        op: t,
                        description: o,
                        startTimestamp: n,
                        endTimestamp: r,
                        data: s
                    }
                }
            });
            return "string" == typeof i ? Promise.resolve(null) : i
        }))
    }

    function Yl(e, t) {
        e.isEnabled() && null !== t && (function(e, t) {
            return (!yl || !e.getOptions()._experiments.traceInternals) && pi(t, Ae())
        }(e, t.name) || e.addUpdate((() => (ql(e, [t]), !0))))
    }

    function Vl(e) {
        if (!e) return;
        const t = new TextEncoder;
        try {
            if ("string" == typeof e) return t.encode(e).length;
            if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
            if (e instanceof FormData) {
                const n = td(e);
                return t.encode(n).length
            }
            if (e instanceof Blob) return e.size;
            if (e instanceof ArrayBuffer) return e.byteLength
        } catch (e) {}
    }

    function Gl(e) {
        if (!e) return;
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
    }

    function Xl(e) {
        try {
            if ("string" == typeof e) return [e];
            if (e instanceof URLSearchParams) return [e.toString()];
            if (e instanceof FormData) return [td(e)];
            if (!e) return [void 0]
        } catch (t) {
            return yl && wl.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
        }
        return yl && wl.info("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
    }

    function Jl(e, t) {
        if (!e) return {
            headers: {},
            size: void 0,
            _meta: {
                warnings: [t]
            }
        };
        const n = { ...e._meta
            },
            r = n.warnings || [];
        return n.warnings = [...r, t], e._meta = n, e
    }

    function Kl(e, t) {
        if (!t) return null;
        const {
            startTimestamp: n,
            endTimestamp: r,
            url: o,
            method: s,
            statusCode: i,
            request: a,
            response: c
        } = t;
        return {
            type: e,
            start: n / 1e3,
            end: r / 1e3,
            name: o,
            data: J({
                method: s,
                statusCode: i,
                request: a,
                response: c
            })
        }
    }

    function Zl(e) {
        return {
            headers: {},
            size: e,
            _meta: {
                warnings: ["URL_SKIPPED"]
            }
        }
    }

    function Ql(e, t, n) {
        if (!t && 0 === Object.keys(e).length) return;
        if (!t) return {
            headers: e
        };
        if (!n) return {
            headers: e,
            size: t
        };
        const r = {
                headers: e,
                size: t
            },
            {
                body: o,
                warnings: s
            } = function(e) {
                if (!e || "string" != typeof e) return {
                    body: e
                };
                const t = e.length > Da,
                    n = function(e) {
                        const t = e[0],
                            n = e[e.length - 1];
                        return "[" === t && "]" === n || "{" === t && "}" === n
                    }(e);
                if (t) {
                    const t = e.slice(0, Da);
                    return n ? {
                        body: t,
                        warnings: ["MAYBE_JSON_TRUNCATED"]
                    } : {
                        body: `${t}…`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (n) try {
                    return {
                        body: JSON.parse(e)
                    }
                } catch (e) {}
                return {
                    body: e
                }
            }(n);
        return r.body = o, s && s.length > 0 && (r._meta = {
            warnings: s
        }), r
    }

    function ed(e, t) {
        return Object.entries(e).reduce(((n, [r, o]) => {
            const s = r.toLowerCase();
            return t.includes(s) && e[r] && (n[s] = o), n
        }), {})
    }

    function td(e) {
        return new URLSearchParams(e).toString()
    }

    function nd(e, t) {
        const n = function(e, t = Ma.document.baseURI) {
            if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(Ma.location.origin)) return e;
            const n = new URL(e, t);
            if (n.origin !== new URL(t).origin) return e;
            const r = n.href;
            return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }(e);
        return H(n, t)
    }

    function rd(e = []) {
        if (2 === e.length && "object" == typeof e[1]) return e[1].body
    }

    function od(e, t) {
        const n = {};
        return t.forEach((t => {
            e.get(t) && (n[t] = e.get(t))
        })), n
    }

    function sd(e, t) {
        if (!e) return {};
        const n = e.headers;
        return n ? n instanceof Headers ? od(n, t) : Array.isArray(n) ? {} : ed(n, t) : {}
    }

    function id(e) {
        const t = Ae();
        try {
            const {
                networkDetailAllowUrls: n,
                networkDetailDenyUrls: r,
                networkCaptureBodies: o,
                networkRequestHeaders: s,
                networkResponseHeaders: i
            } = e.getOptions(), a = {
                replay: e,
                networkDetailAllowUrls: n,
                networkDetailDenyUrls: r,
                networkCaptureBodies: o,
                networkRequestHeaders: s,
                networkResponseHeaders: i
            };
            t && t.on("beforeAddBreadcrumb", ((e, t) => function(e, t, n) {
                if (t.data) try {
                    (function(e) {
                        return "xhr" === e.category
                    })(t) && function(e) {
                        return e && e.xhr
                    }(n) && (function(e, t) {
                        const {
                            xhr: n,
                            input: r
                        } = t;
                        if (!n) return;
                        const o = Vl(r),
                            s = n.getResponseHeader("content-length") ? Gl(n.getResponseHeader("content-length")) : function(e, t) {
                                try {
                                    return Vl("json" === t && e && "object" == typeof e ? JSON.stringify(e) : e)
                                } catch (e) {
                                    return
                                }
                            }(n.response, n.responseType);
                        void 0 !== o && (e.data.request_body_size = o), void 0 !== s && (e.data.response_body_size = s)
                    }(t, n), async function(e, t, n) {
                        try {
                            const r = function(e, t, n) {
                                    const r = Date.now(),
                                        {
                                            startTimestamp: o = r,
                                            endTimestamp: s = r,
                                            input: i,
                                            xhr: a
                                        } = t,
                                        {
                                            url: c,
                                            method: u,
                                            status_code: l = 0,
                                            request_body_size: d,
                                            response_body_size: p
                                        } = e.data;
                                    if (!c) return null;
                                    if (!a || !nd(c, n.networkDetailAllowUrls) || nd(c, n.networkDetailDenyUrls)) return {
                                        startTimestamp: o,
                                        endTimestamp: s,
                                        url: c,
                                        method: u,
                                        statusCode: l,
                                        request: Zl(d),
                                        response: Zl(p)
                                    };
                                    const h = a[ks],
                                        f = h ? ed(h.request_headers, n.networkRequestHeaders) : {},
                                        m = ed(function(e) {
                                            const t = e.getAllResponseHeaders();
                                            return t ? t.split("\r\n").reduce(((e, t) => {
                                                const [n, r] = t.split(": ");
                                                return r && (e[n.toLowerCase()] = r), e
                                            }), {}) : {}
                                        }(a), n.networkResponseHeaders),
                                        [g, _] = n.networkCaptureBodies ? Xl(i) : [void 0],
                                        [y, v] = n.networkCaptureBodies ? function(e) {
                                            const t = [];
                                            try {
                                                return [e.responseText]
                                            } catch (e) {
                                                t.push(e)
                                            }
                                            try {
                                                return function(e, t) {
                                                    try {
                                                        if ("string" == typeof e) return [e];
                                                        if (e instanceof Document) return [e.body.outerHTML];
                                                        if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                                        if (!e) return [void 0]
                                                    } catch (t) {
                                                        return yl && wl.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                                                    }
                                                    return yl && wl.info("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
                                                }(e.response, e.responseType)
                                            } catch (e) {
                                                t.push(e)
                                            }
                                            return yl && wl.warn("Failed to get xhr response body", ...t), [void 0]
                                        }(a) : [void 0],
                                        b = Ql(f, d, g),
                                        S = Ql(m, p, y);
                                    return {
                                        startTimestamp: o,
                                        endTimestamp: s,
                                        url: c,
                                        method: u,
                                        statusCode: l,
                                        request: _ ? Jl(b, _) : b,
                                        response: v ? Jl(S, v) : S
                                    }
                                }(e, t, n),
                                o = Kl("resource.xhr", r);
                            Yl(n.replay, o)
                        } catch (e) {
                            yl && wl.exception(e, "Failed to capture xhr breadcrumb")
                        }
                    }(t, n, e)),
                    function(e) {
                        return "fetch" === e.category
                    }(t) && function(e) {
                        return e && e.response
                    }(n) && (function(e, t) {
                        const {
                            input: n,
                            response: r
                        } = t, o = Vl(n ? rd(n) : void 0), s = r ? Gl(r.headers.get("content-length")) : void 0;
                        void 0 !== o && (e.data.request_body_size = o), void 0 !== s && (e.data.response_body_size = s)
                    }(t, n), async function(e, t, n) {
                        try {
                            const r = await async function(e, t, n) {
                                    const r = Date.now(),
                                        {
                                            startTimestamp: o = r,
                                            endTimestamp: s = r
                                        } = t,
                                        {
                                            url: i,
                                            method: a,
                                            status_code: c = 0,
                                            request_body_size: u,
                                            response_body_size: l
                                        } = e.data,
                                        d = nd(i, n.networkDetailAllowUrls) && !nd(i, n.networkDetailDenyUrls),
                                        p = d ? function({
                                            networkCaptureBodies: e,
                                            networkRequestHeaders: t
                                        }, n, r) {
                                            const o = n ? (i = t, 1 === (s = n).length && "string" != typeof s[0] ? sd(s[0], i) : 2 === s.length ? sd(s[1], i) : {}) : {};
                                            var s, i;
                                            if (!e) return Ql(o, r, void 0);
                                            const a = rd(n),
                                                [c, u] = Xl(a),
                                                l = Ql(o, r, c);
                                            return u ? Jl(l, u) : l
                                        }(n, t.input, u) : Zl(u),
                                        h = await async function(e, {
                                            networkCaptureBodies: t,
                                            networkResponseHeaders: n
                                        }, r, o) {
                                            if (!e && void 0 !== o) return Zl(o);
                                            const s = r ? od(r.headers, n) : {};
                                            if (!r || !t && void 0 !== o) return Ql(s, o, void 0);
                                            const [i, a] = await async function(e) {
                                                const t = function(e) {
                                                    try {
                                                        return e.clone()
                                                    } catch (e) {
                                                        yl && wl.exception(e, "Failed to clone response body")
                                                    }
                                                }(e);
                                                if (!t) return [void 0, "BODY_PARSE_ERROR"];
                                                try {
                                                    const e = await
                                                    function(e) {
                                                        return new Promise(((t, n) => {
                                                            const r = Ko((() => n(new Error("Timeout while trying to read response body"))), 500);
                                                            (async function(e) {
                                                                return await e.text()
                                                            })(e).then((e => t(e)), (e => n(e))).finally((() => clearTimeout(r)))
                                                        }))
                                                    }(t);
                                                    return [e]
                                                } catch (e) {
                                                    return e instanceof Error && e.message.indexOf("Timeout") > -1 ? (yl && wl.warn("Parsing text body from response timed out"), [void 0, "BODY_PARSE_TIMEOUT"]) : (yl && wl.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"])
                                                }
                                            }(r), c = function(e, {
                                                networkCaptureBodies: t,
                                                responseBodySize: n,
                                                captureDetails: r,
                                                headers: o
                                            }) {
                                                try {
                                                    const s = e && e.length && void 0 === n ? Vl(e) : n;
                                                    return r ? Ql(o, s, t ? e : void 0) : Zl(s)
                                                } catch (e) {
                                                    return yl && wl.exception(e, "Failed to serialize response body"), Ql(o, n, void 0)
                                                }
                                            }(i, {
                                                networkCaptureBodies: t,
                                                responseBodySize: o,
                                                captureDetails: e,
                                                headers: s
                                            });
                                            return a ? Jl(c, a) : c
                                        }(d, n, t.response, l);
                                    return {
                                        startTimestamp: o,
                                        endTimestamp: s,
                                        url: i,
                                        method: a,
                                        statusCode: c,
                                        request: p,
                                        response: h
                                    }
                                }(e, t, n),
                                o = Kl("resource.fetch", r);
                            Yl(n.replay, o)
                        } catch (e) {
                            yl && wl.exception(e, "Failed to capture fetch breadcrumb")
                        }
                    }(t, n, e))
                } catch (e) {
                    yl && wl.exception(e, "Error when enriching network breadcrumb")
                }
            }(a, e, t)))
        } catch (e) {}
    }

    function ad(e) {
        const {
            jsHeapSizeLimit: t,
            totalJSHeapSize: n,
            usedJSHeapSize: r
        } = e, o = Date.now() / 1e3;
        return {
            type: "memory",
            name: "memory",
            start: o,
            end: o,
            data: {
                memory: {
                    jsHeapSizeLimit: t,
                    totalJSHeapSize: n,
                    usedJSHeapSize: r
                }
            }
        }
    }
    const cd = C.navigator;

    function ud(e) {
        let t = !1;
        return (n, r) => {
            if (!e.checkAndHandleExpiredSession()) return void(yl && wl.warn("Received replay event after session expired."));
            const o = r || !t;
            t = !0, e.clickDetector && function(e, t) {
                try {
                    if (! function(e) {
                            return e.type === Wu
                        }(t)) return;
                    const {
                        source: n
                    } = t.data;
                    if (Qu.has(n) && e.registerMutation(t.timestamp), n === eu.Scroll && e.registerScroll(t.timestamp), function(e) {
                            return e.data.source === eu.MouseInteraction
                        }(t)) {
                        const {
                            type: n,
                            id: r
                        } = t.data, o = zu.mirror.getNode(r);
                        o instanceof HTMLElement && n === tu.Click && e.registerClick(o)
                    }
                } catch (e) {}
            }(e.clickDetector, n), e.addUpdate((() => {
                if ("buffer" === e.recordingMode && o && e.setInitialState(), !$l(e, n, o)) return !0;
                if (!o) return !1;
                const t = e.session;
                if (function(e, t) {
                        t && e.session && 0 === e.session.segmentId && $l(e, function(e) {
                            const t = e.getOptions();
                            return {
                                type: Qc.Custom,
                                timestamp: Date.now(),
                                data: {
                                    tag: "options",
                                    payload: {
                                        shouldRecordCanvas: e.isRecordingCanvas(),
                                        sessionSampleRate: t.sessionSampleRate,
                                        errorSampleRate: t.errorSampleRate,
                                        useCompressionOption: t.useCompression,
                                        blockAllMedia: t.blockAllMedia,
                                        maskAllText: t.maskAllText,
                                        maskAllInputs: t.maskAllInputs,
                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                        networkCaptureBodies: t.networkCaptureBodies,
                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                    }
                                }
                            }
                        }(e), !1)
                    }(e, o), "buffer" === e.recordingMode && t && e.eventBuffer) {
                    const n = e.eventBuffer.getEarliestTimestamp();
                    n && (yl && wl.info(`Updating session start time to earliest event in buffer to ${new Date(n)}`), t.started = n, e.getOptions().stickySession && Al(t))
                }
                return t && t.previousSessionId || "session" === e.recordingMode && e.flush(), !0
            }))
        }
    }
    class ld extends Error {
        constructor(e) {
            super(`Transport returned status code ${e}`)
        }
    }
    class dd extends Error {
        constructor(e) {
            super("Rate limit hit"), this.rateLimits = e
        }
    }
    async function pd(e, t = {
        count: 0,
        interval: 5e3
    }) {
        const {
            recordingData: n,
            onError: r
        } = e;
        if (n.length) try {
            return await async function({
                recordingData: e,
                replayId: t,
                segmentId: n,
                eventContext: r,
                timestamp: o,
                session: s
            }) {
                const i = function({
                        recordingData: e,
                        headers: t
                    }) {
                        let n;
                        const r = `${JSON.stringify(t)}\n`;
                        if ("string" == typeof e) n = `${r}${e}`;
                        else {
                            const t = (new TextEncoder).encode(r);
                            n = new Uint8Array(t.length + e.length), n.set(t), n.set(e, t.length)
                        }
                        return n
                    }({
                        recordingData: e,
                        headers: {
                            segment_id: n
                        }
                    }),
                    {
                        urls: a,
                        errorIds: c,
                        traceIds: u,
                        initialTimestamp: l
                    } = r,
                    d = Ae(),
                    p = Ce(),
                    h = d && d.getTransport(),
                    f = d && d.getDsn();
                if (!(d && h && f && s.sampled)) return Fe({});
                const m = {
                        type: Aa,
                        replay_start_timestamp: l / 1e3,
                        timestamp: o / 1e3,
                        error_ids: c,
                        trace_ids: u,
                        urls: a,
                        replay_id: t,
                        segment_id: n,
                        replay_type: s.sampled
                    },
                    g = await async function({
                        client: e,
                        scope: t,
                        replayId: n,
                        event: r
                    }) {
                        const o = {
                            event_id: n,
                            integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                        };
                        e.emit("preprocessEvent", r, o);
                        const s = await Vt(e.getOptions(), r, o, t, e, Te());
                        if (!s) return null;
                        s.platform = s.platform || "javascript";
                        const i = e.getSdkMetadata(),
                            {
                                name: a,
                                version: c
                            } = i && i.sdk || {};
                        return s.sdk = { ...s.sdk,
                            name: a || "sentry.javascript.unknown",
                            version: c || "0.0.0"
                        }, s
                    }({
                        scope: p,
                        client: d,
                        replayId: t,
                        event: m
                    });
                if (!g) return d.recordDroppedEvent("event_processor", "replay", m), yl && wl.info("An event processor returned `null`, will not send event."), Fe({});
                delete g.sdkProcessingMetadata;
                const _ = function(e, t, n, r) {
                    return Vn(or(e, rr(e), r, n), [
                        [{
                            type: "replay_event"
                        }, e],
                        [{
                            type: "replay_recording",
                            length: "string" == typeof t ? (new TextEncoder).encode(t).length : t.length
                        }, t]
                    ])
                }(g, i, f, d.getOptions().tunnel);
                let y;
                try {
                    y = await h.send(_)
                } catch (e) {
                    const t = new Error(Oa);
                    try {
                        t.cause = e
                    } catch (e) {}
                    throw t
                }
                if ("number" == typeof y.statusCode && (y.statusCode < 200 || y.statusCode >= 300)) throw new ld(y.statusCode);
                const v = Ar({}, y);
                if (Rr(v, "replay")) throw new dd(v);
                return y
            }(e), !0
        } catch (n) {
            if (n instanceof ld || n instanceof dd) throw n;
            if (Zt("Replays", {
                    _retryCount: t.count
                }), r && r(n), t.count >= 3) {
                const e = new Error(`${Oa} - max retries exceeded`);
                try {
                    e.cause = n
                } catch (e) {}
                throw e
            }
            return t.interval *= ++t.count, new Promise(((n, r) => {
                Ko((async () => {
                    try {
                        await pd(e, t), n(!0)
                    } catch (e) {
                        r(e)
                    }
                }), t.interval)
            }))
        }
    }
    const hd = "__THROTTLED";class fd {
        constructor({
            options: e,
            recordingOptions: t
        }) {
            fd.prototype.__init.call(this), fd.prototype.__init2.call(this), fd.prototype.__init3.call(this), fd.prototype.__init4.call(this), fd.prototype.__init5.call(this), fd.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5
            }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
                errorIds: new Set,
                traceIds: new Set,
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: ""
            }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
                let r, o, s;
                const i = n && n.maxWait ? Math.max(n.maxWait, t) : 0;

                function a() {
                    return c(), r = e(), r
                }

                function c() {
                    void 0 !== o && clearTimeout(o), void 0 !== s && clearTimeout(s), o = s = void 0
                }

                function u() {
                    return o && clearTimeout(o), o = Ko(a, t), i && void 0 === s && (s = Ko(a, i)), r
                }
                return u.cancel = c, u.flush = function() {
                    return void 0 !== o || void 0 !== s ? a() : r
                }, u
            }((() => this._flush()), this._options.flushMinDelay, {
                maxWait: this._options.flushMaxDelay
            }), this._throttledAddEvent = function(e, t, n) {
                const r = new Map;
                let o = !1;
                return (...s) => {
                    const i = Math.floor(Date.now() / 1e3);
                    if ((e => {
                            const t = e - n;
                            r.forEach(((e, n) => {
                                n < t && r.delete(n)
                            }))
                        })(i), [...r.values()].reduce(((e, t) => e + t), 0) >= t) {
                        const e = o;
                        return o = !0, e ? "__SKIPPED" : hd
                    }
                    o = !1;
                    const a = r.get(i) || 0;
                    return r.set(i, a + 1), e(...s)
                }
            }(((e, t) => function(e, t, n) {
                return Bl(e, t) ? Fl(e, t, n) : Promise.resolve(null)
            }(this, e, t)), 300, 5);
            const {
                slowClickTimeout: n,
                slowClickIgnoreSelectors: r
            } = this.getOptions(), o = n ? {
                threshold: Math.min(3e3, n),
                timeout: n,
                scrollTimeout: 300,
                ignoreSelector: r ? r.join(",") : ""
            } : void 0;
            if (o && (this.clickDetector = new el(this, o)), yl) {
                const t = e._experiments;
                wl.setConfig({
                    captureExceptions: !!t.captureExceptions,
                    traceInternals: !!t.traceInternals
                })
            }
        }
        getContext() {
            return this._context
        }
        isEnabled() {
            return this._isEnabled
        }
        isPaused() {
            return this._isPaused
        }
        isRecordingCanvas() {
            return Boolean(this._canvas)
        }
        getOptions() {
            return this._options
        }
        handleException(e) {
            yl && wl.exception(e), this._options.onError && this._options.onError(e)
        }
        initializeSampling(e) {
            const {
                errorSampleRate: t,
                sessionSampleRate: n
            } = this._options, r = t <= 0 && n <= 0;
            this._requiresManualStart = r, r || (this._initializeSessionForSampling(e), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", yl && wl.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording()) : yl && wl.exception(new Error("Unable to initialize and create session")))
        }
        start() {
            if (this._isEnabled && "session" === this.recordingMode) return void(yl && wl.info("Recording is already in progress"));
            if (this._isEnabled && "buffer" === this.recordingMode) return void(yl && wl.info("Buffering is in progress, call `flush()` to save the replay"));
            yl && wl.infoTick("Starting replay in session mode"), this._updateUserActivity();
            const e = Pl({
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1
            });
            this.session = e, this._initializeRecording()
        }
        startBuffering() {
            if (this._isEnabled) return void(yl && wl.info("Buffering is in progress, call `flush()` to save the replay"));
            yl && wl.infoTick("Starting replay in buffer mode");
            const e = Pl({
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0
            });
            this.session = e, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
            try {
                const e = this._canvas;
                this._stopRecording = zu({ ...this._recordingOptions,
                    ..."buffer" === this.recordingMode ? {
                        checkoutEveryNms: 6e4
                    } : this._options._experiments.continuousCheckout && {
                        checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                    },
                    emit: ud(this),
                    .../iPhone|iPad|iPod/i.test(cd && cd.userAgent || "") || /Macintosh/i.test(cd && cd.userAgent || "") && cd && cd.maxTouchPoints && cd.maxTouchPoints > 1 ? {
                        sampling: {
                            mousemove: !1
                        }
                    } : {},
                    onMutation: this._onMutationHandler,
                    ...e ? {
                        recordCanvas: e.recordCanvas,
                        getCanvasManager: e.getCanvasManager,
                        sampling: e.sampling,
                        dataURLOptions: e.dataURLOptions
                    } : {}
                })
            } catch (e) {
                this.handleException(e)
            }
        }
        stopRecording() {
            try {
                return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
            } catch (e) {
                return this.handleException(e), !1
            }
        }
        async stop({
            forceFlush: e = !1,
            reason: t
        } = {}) {
            if (this._isEnabled) {
                this._isEnabled = !1;
                try {
                    yl && wl.info("Stopping Replay" + (t ? ` triggered by ${t}` : "")), Wl(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                            force: !0
                        }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, n = this,
                        function() {
                            if (Il()) try {
                                Ma.sessionStorage.removeItem(Ra)
                            } catch (e) {}
                        }(), n.session = void 0
                } catch (e) {
                    this.handleException(e)
                }
            }
            var n
        }
        pause() {
            this._isPaused || (this._isPaused = !0, this.stopRecording(), yl && wl.info("Pausing replay"))
        }
        resume() {
            this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), yl && wl.info("Resuming replay"))
        }
        async sendBufferedReplayOrFlush({
            continueRecording: e = !0
        } = {}) {
            if ("session" === this.recordingMode) return this.flushImmediate();
            const t = Date.now();
            yl && wl.info("Converting buffer to session"), await this.flushImmediate();
            const n = this.stopRecording();
            e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
        }
        addUpdate(e) {
            const t = e();
            "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
        }
        triggerUserActivity() {
            if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
            else {
                if (!this._checkSession()) return;
                this.resume()
            }
        }
        updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity()
        }
        conditionalFlush() {
            return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
        }
        flush() {
            return this._debouncedFlush()
        }
        flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush()
        }
        cancelFlush() {
            this._debouncedFlush.cancel()
        }
        getSessionId() {
            return this.session && this.session.id
        }
        checkAndHandleExpiredSession() {
            if (!(this._lastActivity && Dl(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
            this.pause()
        }
        setInitialState() {
            const e = `${Ma.location.pathname}${Ma.location.hash}${Ma.location.search}`,
                t = `${Ma.location.origin}${e}`;
            this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
        }
        throttledAddEvent(e, t) {
            const n = this._throttledAddEvent(e, t);
            if (n === hd) {
                const e = rl({
                    category: "replay.throttled"
                });
                this.addUpdate((() => !$l(this, {
                    type: 5,
                    timestamp: e.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: e,
                        metric: !0
                    }
                })))
            }
            return n
        }
        getCurrentRoute() {
            const e = this.lastActiveSpan || Pt(),
                t = e && Nt(e),
                n = (t && It(t).data || {})[o];
            if (t && n && ["route", "custom"].includes(n)) return It(t).description
        }
        _initializeRecording() {
            this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                useCompression: e,
                workerUrl: t
            }) {
                if (e && window.Worker) {
                    const e = function(e) {
                        try {
                            const t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                const e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                return URL.createObjectURL(e)
                            }());
                            if (!t) return;
                            yl && wl.info("Using compression worker" + (e ? ` from ${e}` : ""));
                            const n = new Worker(t);
                            return new Tl(n)
                        } catch (e) {
                            yl && wl.exception(e, "Failed to create compression worker")
                        }
                    }(t);
                    if (e) return e
                }
                return yl && wl.info("Using simple buffer"), new El
            }({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl
            }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
        }
        _initializeSessionForSampling(e) {
            const t = this._options.errorSampleRate > 0,
                n = Pl({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
            this.session = n
        }
        _checkSession() {
            if (!this.session) return !1;
            const e = this.session;
            return !Nl(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }) || (this._refreshSession(e), !1)
        }
        async _refreshSession(e) {
            this._isEnabled && (await this.stop({
                reason: "refresh session"
            }), this.initializeSampling(e.id))
        }
        _addListeners() {
            try {
                Ma.document.addEventListener("visibilitychange", this._handleVisibilityChange), Ma.addEventListener("blur", this._handleWindowBlur), Ma.addEventListener("focus", this._handleWindowFocus), Ma.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(e) {
                    const t = Ae();
                    bs((e => t => {
                            if (!e.isEnabled()) return;
                            const n = function(e) {
                                const {
                                    target: t,
                                    message: n
                                } = function(e) {
                                    const t = "click" === e.name;
                                    let n, r = null;
                                    try {
                                        r = t ? Ju(e.event) : Ku(e.event), n = R(r, {
                                            maxStringLength: 200
                                        }) || "<unknown>"
                                    } catch (e) {
                                        n = "<unknown>"
                                    }
                                    return {
                                        target: r,
                                        message: n
                                    }
                                }(e);
                                return rl({
                                    category: `ui.${e.name}`,
                                    ...al(t, n)
                                })
                            }(t);
                            if (!n) return;
                            const r = "click" === t.name,
                                o = r ? t.event : void 0;
                            var s, i, a;
                            !(r && e.clickDetector && o && o.target) || o.altKey || o.metaKey || o.ctrlKey || o.shiftKey || (s = e.clickDetector, i = n, a = Ju(t.event), s.handleClick(i, a)), Vu(e, n)
                        })(e)), Is(function(e) {
                            return t => {
                                if (!e.isEnabled()) return;
                                const n = function(e) {
                                    const {
                                        from: t,
                                        to: n
                                    } = e, r = Date.now() / 1e3;
                                    return {
                                        type: "navigation.push",
                                        start: r,
                                        end: r,
                                        name: n,
                                        data: {
                                            previous: t
                                        }
                                    }
                                }(t);
                                null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate((() => (ql(e, [n]), !1))))
                            }
                        }(e)),
                        function(e) {
                            const t = Ae();
                            t && t.on("beforeAddBreadcrumb", (t => function(e, t) {
                                if (!e.isEnabled() || !zl(t)) return;
                                const n = function(e) {
                                    return !zl(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : "console" === e.category ? function(e) {
                                        const t = e.data && e.data.arguments;
                                        if (!Array.isArray(t) || 0 === t.length) return rl(e);
                                        let n = !1;
                                        const r = t.map((e => {
                                            if (!e) return e;
                                            if ("string" == typeof e) return e.length > La ? (n = !0, `${e.slice(0,La)}…`) : e;
                                            if ("object" == typeof e) try {
                                                const t = tt(e, 7);
                                                return JSON.stringify(t).length > La ? (n = !0, `${JSON.stringify(t,null,2).slice(0,La)}…`) : t
                                            } catch (e) {}
                                            return e
                                        }));
                                        return rl({ ...e,
                                            data: { ...e.data,
                                                arguments: r,
                                                ...n ? {
                                                    _meta: {
                                                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                    }
                                                } : {}
                                            }
                                        })
                                    }(e) : rl(e)
                                }(t);
                                n && Vu(e, n)
                            }(e, t)))
                        }(e), id(e), un(function(e) {
                            return Object.assign(((t, n) => {
                                if (!e.isEnabled() || e.isPaused()) return t;
                                if (function(e) {
                                        return "replay_event" === e.type
                                    }(t)) return delete t.breadcrumbs, t;
                                if (!Ul(t) && !jl(t) && !Hl(t)) return t;
                                if (!e.checkAndHandleExpiredSession()) return Wl(), t;
                                if (Hl(t)) return e.flush(), t.contexts.feedback.replay_id = e.getSessionId(),
                                    function(e, t) {
                                        e.triggerUserActivity(), e.addUpdate((() => !t.timestamp || (e.throttledAddEvent({
                                            type: Qc.Custom,
                                            timestamp: 1e3 * t.timestamp,
                                            data: {
                                                tag: "breadcrumb",
                                                payload: {
                                                    timestamp: t.timestamp,
                                                    type: "default",
                                                    category: "sentry.feedback",
                                                    data: {
                                                        feedbackId: t.event_id
                                                    }
                                                }
                                            }
                                        }), !1)))
                                    }(e, t), t;
                                if (function(e, t) {
                                        return !(e.type || !e.exception || !e.exception.values || !e.exception.values.length || !t.originalException || !t.originalException.__rrweb__)
                                    }(t, n) && !e.getOptions()._experiments.captureExceptions) return yl && wl.log("Ignoring error from rrweb internals", t), null;
                                const r = function(e, t) {
                                    return "buffer" === e.recordingMode && t.message !== Oa && !(!t.exception || t.type) && Ml(e.getOptions().errorSampleRate)
                                }(e, t);
                                return (r || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                    replayId: e.getSessionId()
                                }), t
                            }), {
                                id: "Replay"
                            })
                        }(e)), t && (t.on("beforeSendEvent", function(e) {
                            return t => {
                                e.isEnabled() && Ul(t) && function(e, t) {
                                    const n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                    "string" == typeof n && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && Vu(e, rl({
                                        category: "replay.hydrate-error",
                                        data: {
                                            url: O()
                                        }
                                    }))
                                }(e, t)
                            }
                        }(e)), t.on("afterSendEvent", function(e) {
                            return (t, n) => {
                                if (!e.isEnabled() || !Ul(t) && !jl(t)) return;
                                const r = n && n.statusCode;
                                !r || r < 200 || r >= 300 || (jl(t) ? function(e, t) {
                                    const n = e.getContext();
                                    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
                                }(e, t) : function(e, t) {
                                    const n = e.getContext();
                                    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                                    const {
                                        beforeErrorSampling: r
                                    } = e.getOptions();
                                    ("function" != typeof r || r(t)) && Ko((async () => {
                                        try {
                                            await e.sendBufferedReplayOrFlush()
                                        } catch (t) {
                                            e.handleException(t)
                                        }
                                    }))
                                }(e, t))
                            }
                        }(e)), t.on("createDsc", (t => {
                            const n = e.getSessionId();
                            n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                        })), t.on("spanStart", (t => {
                            e.lastActiveSpan = t
                        })), t.on("spanEnd", (t => {
                            e.lastActiveSpan = t
                        })), t.on("beforeSendFeedback", ((t, n) => {
                            const r = e.getSessionId();
                            n && n.includeReplay && e.isEnabled() && r && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r)
                        })))
                }(this), this._hasInitializedCoreListeners = !0)
            } catch (e) {
                this.handleException(e)
            }
            this._performanceCleanupCallback = function(e) {
                function t(t) {
                    e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                }

                function n({
                    entries: e
                }) {
                    e.forEach(t)
                }
                const r = [];
                return ["navigation", "paint", "resource"].forEach((e => {
                    r.push(va(e, n))
                })), r.push(ga(ul(pl, e)), ma(ul(fl, e)), _a(ul(ml, e)), ya(ul(gl, e))), () => {
                    r.forEach((e => e()))
                }
            }(this)
        }
        _removeListeners() {
            try {
                Ma.document.removeEventListener("visibilitychange", this._handleVisibilityChange), Ma.removeEventListener("blur", this._handleWindowBlur), Ma.removeEventListener("focus", this._handleWindowFocus), Ma.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
            } catch (e) {
                this.handleException(e)
            }
        }
        __init() {
            this._handleVisibilityChange = () => {
                "visible" === Ma.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
            }
        }
        __init2() {
            this._handleWindowBlur = () => {
                const e = rl({
                    category: "ui.blur"
                });
                this._doChangeToBackgroundTasks(e)
            }
        }
        __init3() {
            this._handleWindowFocus = () => {
                const e = rl({
                    category: "ui.focus"
                });
                this._doChangeToForegroundTasks(e)
            }
        }
        __init4() {
            this._handleKeyboardEvent = e => {
                ! function(e, t) {
                    if (!e.isEnabled()) return;
                    e.updateUserActivity();
                    const n = function(e) {
                        const {
                            metaKey: t,
                            shiftKey: n,
                            ctrlKey: r,
                            altKey: o,
                            key: s,
                            target: i
                        } = e;
                        if (!i || function(e) {
                                return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable
                            }(i) || !s) return null;
                        const a = t || r || o,
                            c = 1 === s.length;
                        if (!a && c) return null;
                        const u = R(i, {
                            maxStringLength: 200
                        }) || "<unknown>";
                        return rl({
                            category: "ui.keyDown",
                            message: u,
                            data: { ...al(i, u).data,
                                metaKey: t,
                                shiftKey: n,
                                ctrlKey: r,
                                altKey: o,
                                key: s
                            }
                        })
                    }(t);
                    n && Vu(e, n)
                }(this, e)
            }
        }
        _doChangeToBackgroundTasks(e) {
            this.session && (Ll(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
        }
        _doChangeToForegroundTasks(e) {
            this.session && (this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : yl && wl.info("Document has become active, but session has expired"))
        }
        _updateUserActivity(e = Date.now()) {
            this._lastActivity = e
        }
        _updateSessionActivity(e = Date.now()) {
            this.session && (this.session.lastActivity = e, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(e) {
            this.addUpdate((() => {
                this.throttledAddEvent({
                    type: Qc.Custom,
                    timestamp: e.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: e
                    }
                })
            }))
        }
        _addPerformanceEntries() {
            let e = (t = this.performanceEntries, t.map(ll).filter(Boolean)).concat(this.replayPerformanceEntries);
            var t;
            if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
                const t = this._context.initialTimestamp / 1e3;
                e = e.filter((e => e.start >= t))
            }
            return Promise.all(ql(this, e))
        }
        _clearContext() {
            this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
            const {
                session: e,
                eventBuffer: t
            } = this;
            if (!e || !t || this._requiresManualStart) return;
            if (e.segmentId) return;
            const n = t.getEarliestTimestamp();
            n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
            const e = {
                initialTimestamp: this._context.initialTimestamp,
                initialUrl: this._context.initialUrl,
                errorIds: Array.from(this._context.errorIds),
                traceIds: Array.from(this._context.traceIds),
                urls: this._context.urls
            };
            return this._clearContext(), e
        }
        async _runFlush() {
            const e = this.getSessionId();
            if (this.session && this.eventBuffer && e) {
                if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function(e) {
                        try {
                            return Promise.all(ql(e, [ad(Ma.performance.memory)]))
                        } catch (e) {
                            return []
                        }
                    }(this), this.eventBuffer && e === this.getSessionId())) try {
                    this._updateInitialTimestampFromEventBuffer();
                    const t = Date.now();
                    if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
                    const n = this._popEventContext(),
                        r = this.session.segmentId++;
                    this._maybeSaveSession();
                    const o = await this.eventBuffer.finish();
                    await pd({
                        replayId: e,
                        recordingData: o,
                        segmentId: r,
                        eventContext: n,
                        session: this.session,
                        timestamp: t,
                        onError: e => this.handleException(e)
                    })
                } catch (e) {
                    this.handleException(e), this.stop({
                        reason: "sendReplay"
                    });
                    const t = Ae();
                    if (t) {
                        const n = e instanceof dd ? "ratelimit_backoff" : "send_error";
                        t.recordDroppedEvent(n, "replay")
                    }
                }
            } else yl && wl.error("No session or eventBuffer found to flush.")
        }
        __init5() {
            this._flush = async ({
                force: e = !1
            } = {}) => {
                if (!this._isEnabled && !e) return;
                if (!this.checkAndHandleExpiredSession()) return void(yl && wl.error("Attempting to finish replay event after session expired."));
                if (!this.session) return;
                const t = this.session.started,
                    n = Date.now() - t;
                this._debouncedFlush.cancel();
                const r = n < this._options.minReplayDuration,
                    o = n > this._options.maxReplayDuration + 5e3;
                if (r || o) return yl && wl.info(`Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`), void(r && this._debouncedFlush());
                const s = this.eventBuffer;
                s && 0 === this.session.segmentId && !s.hasCheckout && yl && wl.info("Flushing initial segment without checkout.");
                const i = !!this._flushLock;
                this._flushLock || (this._flushLock = this._runFlush());
                try {
                    await this._flushLock
                } catch (e) {
                    this.handleException(e)
                } finally {
                    this._flushLock = void 0, i && this._debouncedFlush()
                }
            }
        }
        _maybeSaveSession() {
            this.session && this._options.stickySession && Al(this.session)
        }
        __init6() {
            this._onMutationHandler = e => {
                const t = e.length,
                    n = this._options.mutationLimit,
                    r = n && t > n;
                if (t > this._options.mutationBreadcrumbLimit || r) {
                    const e = rl({
                        category: "replay.mutations",
                        data: {
                            count: t,
                            limit: r
                        }
                    });
                    this._createCustomBreadcrumb(e)
                }
                return !r || (this.stop({
                    reason: "mutationLimit",
                    forceFlush: "session" === this.recordingMode
                }), !1)
            }
        }
    }

    function md(e, t) {
        return [...e, ...t].join(",")
    }
    const gd = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        _d = ["content-length", "content-type", "accept"];
    let yd = !1;
    const vd = e => new bd(e);class bd {
        static __initStatic() {
            this.id = "Replay"
        }
        constructor({
            flushMinDelay: e = 5e3,
            flushMaxDelay: t = 5500,
            minReplayDuration: n = 4999,
            maxReplayDuration: r = 36e5,
            stickySession: o = !0,
            useCompression: s = !0,
            workerUrl: i,
            _experiments: a = {},
            maskAllText: c = !0,
            maskAllInputs: u = !0,
            blockAllMedia: l = !0,
            mutationBreadcrumbLimit: d = 750,
            mutationLimit: p = 1e4,
            slowClickTimeout: h = 7e3,
            slowClickIgnoreSelectors: f = [],
            networkDetailAllowUrls: m = [],
            networkDetailDenyUrls: g = [],
            networkCaptureBodies: _ = !0,
            networkRequestHeaders: y = [],
            networkResponseHeaders: v = [],
            mask: b = [],
            maskAttributes: S = ["title", "placeholder"],
            unmask: w = [],
            block: k = [],
            unblock: E = [],
            ignore: x = [],
            maskFn: C,
            beforeAddRecordingEvent: T,
            beforeErrorSampling: I,
            onError: M
        } = {}) {
            this.name = bd.id;
            const R = function({
                mask: e,
                unmask: t,
                block: n,
                unblock: r,
                ignore: o
            }) {
                return {
                    maskTextSelector: md(e, [".sentry-mask", "[data-sentry-mask]"]),
                    unmaskTextSelector: md(t, []),
                    blockSelector: md(n, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                    unblockSelector: md(r, []),
                    ignoreSelector: md(o, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                }
            }({
                mask: b,
                unmask: w,
                block: k,
                unblock: E,
                ignore: x
            });
            if (this._recordingOptions = {
                    maskAllInputs: u,
                    maskAllText: c,
                    maskInputOptions: {
                        password: !0
                    },
                    maskTextFn: C,
                    maskInputFn: C,
                    maskAttributeFn: (e, t, n) => function({
                        el: e,
                        key: t,
                        maskAttributes: n,
                        maskAllText: r,
                        privacyOptions: o,
                        value: s
                    }) {
                        return r ? o.unmaskTextSelector && e.matches(o.unmaskTextSelector) ? s : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s : s
                    }({
                        maskAttributes: S,
                        maskAllText: c,
                        privacyOptions: R,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...R,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch (e) {}
                    }
                }, this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: o,
                    useCompression: s,
                    workerUrl: i,
                    blockAllMedia: l,
                    maskAllInputs: u,
                    maskAllText: c,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: p,
                    slowClickTimeout: h,
                    slowClickIgnoreSelectors: f,
                    networkDetailAllowUrls: m,
                    networkDetailDenyUrls: g,
                    networkCaptureBodies: _,
                    networkRequestHeaders: Sd(y),
                    networkResponseHeaders: Sd(v),
                    beforeAddRecordingEvent: T,
                    beforeErrorSampling: I,
                    onError: M,
                    _experiments: a
                }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${gd}` : gd), this._isInitialized && Ei()) throw new Error("Multiple Sentry Session Replay instances are not supported");
            this._isInitialized = !0
        }
        get _isInitialized() {
            return yd
        }
        set _isInitialized(e) {
            yd = e
        }
        afterAllSetup(e) {
            Ei() && !this._replay && (this._setup(e), this._initialize(e))
        }
        start() {
            this._replay && this._replay.start()
        }
        startBuffering() {
            this._replay && this._replay.startBuffering()
        }
        stop() {
            return this._replay ? this._replay.stop({
                forceFlush: "session" === this._replay.recordingMode
            }) : Promise.resolve()
        }
        flush(e) {
            return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
        }
        getReplayId() {
            if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
        }
        getRecordingMode() {
            if (this._replay && this._replay.isEnabled()) return this._replay.recordingMode
        }
        _initialize(e) {
            this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
        }
        _setup(e) {
            const t = function(e, t) {
                const n = t.getOptions(),
                    r = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...J(e)
                    },
                    o = Un(n.replaysSessionSampleRate),
                    s = Un(n.replaysOnErrorSampleRate);
                return null == o && null == s && $((() => {
                    console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                })), null != o && (r.sessionSampleRate = o), null != s && (r.errorSampleRate = s), r
            }(this._initialOptions, e);
            this._replay = new fd({
                options: t,
                recordingOptions: this._recordingOptions
            })
        }
        _maybeLoadFromReplayCanvasIntegration(e) {
            try {
                const t = e.getIntegrationByName("ReplayCanvas");
                if (!t) return;
                this._replay._canvas = t.getOptions()
            } catch (e) {}
        }
    }

    function Sd(e) {
        return [..._d, ...e.map((e => e.toLowerCase()))]
    }

    function wd() {
        const e = Ae();
        return e && e.getIntegrationByName("Replay")
    }
    var kd;

    function Ed(e, t, n = 1 / 0, r = 0) {
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Ed(e.parentNode, t, n, r + 1) : -1
    }

    function xd(e, t) {
        return n => {
            const r = n;
            if (null === r) return !1;
            try {
                if (e)
                    if ("string" == typeof e) {
                        if (r.matches(`.${e}`)) return !0
                    } else if (function(e, t) {
                        for (let n = e.classList.length; n--;) {
                            const r = e.classList[n];
                            if (t.test(r)) return !0
                        }
                        return !1
                    }(r, e)) return !0;
                return !(!t || !r.matches(t))
            } catch (e) {
                return !1
            }
        }
    }
    bd.__initStatic(),
    function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
    }(kd || (kd = {}));
    const Cd = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let Td = {
        map: {},
        getId: () => (console.error(Cd), -1),
        getNode: () => (console.error(Cd), null),
        removeNodeFromMap() {
            console.error(Cd)
        },
        has: () => (console.error(Cd), !1),
        reset() {
            console.error(Cd)
        }
    };

    function Id(e, t, n, r, o = window) {
        const s = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, r ? n : {
            set(e) {
                Ld((() => {
                    n.set.call(this, e)
                }), 0), s && s.set && s.set.call(this, e)
            }
        }), () => Id(e, t, s || {}, !0)
    }

    function Md(e, t, n) {
        try {
            if (!(t in e)) return () => {};
            const r = e[t],
                o = n(r);
            return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), e[t] = o, () => {
                e[t] = r
            }
        } catch (e) {
            return () => {}
        }
    }

    function Rd(e, t, n, r, o) {
        if (!e) return !1;
        const s = function(e) {
            return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
        }(e);
        if (!s) return !1;
        const i = Ed(s, xd(t, n));
        let a = -1;
        return !(i < 0) && (r && (a = Ed(s, xd(null, r))), i > -1 && a < 0 || i < a)
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (Td = new Proxy(Td, {
        get: (e, t, n) => ("map" === t && console.error(Cd), Reflect.get(e, t, n))
    })),
    /[1-9][0-9]{12}/.test(Date.now().toString());
    const Ad = {};

    function Od(e) {
        const t = Ad[e];
        if (t) return t;
        const n = window.document;
        let r = window[e];
        if (n && "function" == typeof n.createElement) try {
            const t = n.createElement("iframe");
            t.hidden = !0, n.head.appendChild(t);
            const o = t.contentWindow;
            o && o[e] && (r = o[e]), n.head.removeChild(t)
        } catch (e) {}
        return Ad[e] = r.bind(window)
    }

    function Dd(...e) {
        return Od("requestAnimationFrame")(...e)
    }

    function Ld(...e) {
        return Od("setTimeout")(...e)
    }
    var Nd = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(Nd || {});
    let Pd;
    const $d = e => Pd ? (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (Pd && !0 === Pd(e)) return () => {};
            throw e
        }
    } : e;
    for (var Fd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bd = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Ud = 0; Ud < 64; Ud++) Bd[Fd.charCodeAt(Ud)] = Ud;
    const jd = new Map,
        Hd = (e, t, n) => {
            if (!e || !qd(e, t) && "object" != typeof e) return;
            const r = function(e, t) {
                let n = jd.get(e);
                return n || (n = new Map, jd.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
            }(n, e.constructor.name);
            let o = r.indexOf(e);
            return -1 === o && (o = r.length, r.push(e)), o
        };

    function zd(e, t, n) {
        if (e instanceof Array) return e.map((e => zd(e, t, n)));
        if (null === e) return e;
        if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
            rr_type: e.constructor.name,
            args: [Object.values(e)]
        };
        if (e instanceof ArrayBuffer) {
            const t = e.constructor.name,
                n = function(e) {
                    var t, n = new Uint8Array(e),
                        r = n.length,
                        o = "";
                    for (t = 0; t < r; t += 3) o += Fd[n[t] >> 2], o += Fd[(3 & n[t]) << 4 | n[t + 1] >> 4], o += Fd[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], o += Fd[63 & n[t + 2]];
                    return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                }(e);
            return {
                rr_type: t,
                base64: n
            }
        }
        if (e instanceof DataView) return {
            rr_type: e.constructor.name,
            args: [zd(e.buffer, t, n), e.byteOffset, e.byteLength]
        };
        if (e instanceof HTMLImageElement) {
            const t = e.constructor.name,
                {
                    src: n
                } = e;
            return {
                rr_type: t,
                src: n
            }
        }
        return e instanceof HTMLCanvasElement ? {
            rr_type: "HTMLImageElement",
            src: e.toDataURL()
        } : e instanceof ImageData ? {
            rr_type: e.constructor.name,
            args: [zd(e.data, t, n), e.width, e.height]
        } : qd(e, t) || "object" == typeof e ? {
            rr_type: e.constructor.name,
            index: Hd(e, t, n)
        } : e
    }
    const Wd = (e, t, n) => e.map((e => zd(e, t, n))),
        qd = (e, t) => {
            const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
            return Boolean(n.find((n => e instanceof t[n])))
        };

    function Yd(e, t, n, r, o) {
        const s = [];
        try {
            const i = Md(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
                return function(s, ...i) {
                    if (!Rd(this, t, n, r)) {
                        const e = function(e) {
                            return "experimental-webgl" === e ? "webgl" : e
                        }(s);
                        if ("__context" in this || (this.__context = e), o && ["webgl", "webgl2"].includes(e))
                            if (i[0] && "object" == typeof i[0]) {
                                const e = i[0];
                                e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                            } else i.splice(0, 1, {
                                preserveDrawingBuffer: !0
                            })
                    }
                    return e.apply(this, [s, ...i])
                }
            }));
            s.push(i)
        } catch (e) {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
            s.forEach((e => e()))
        }
    }

    function Vd(e, t, n, r, o, s, i, a) {
        const c = [],
            u = Object.getOwnPropertyNames(e);
        for (const i of u)
            if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(i)) try {
                if ("function" != typeof e[i]) continue;
                const u = Md(e, i, (function(e) {
                    return function(...c) {
                        const u = e.apply(this, c);
                        if (Hd(u, a, this), "tagName" in this.canvas && !Rd(this.canvas, r, o, s)) {
                            const e = Wd(c, a, this),
                                r = {
                                    type: t,
                                    property: i,
                                    args: e
                                };
                            n(this.canvas, r)
                        }
                        return u
                    }
                }));
                c.push(u)
            } catch (r) {
                const o = Id(e, i, {
                    set(e) {
                        n(this.canvas, {
                            type: t,
                            property: i,
                            args: [e],
                            setter: !0
                        })
                    }
                });
                c.push(o)
            }
        return c
    }
    class Gd {
        reset() {
            this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach((e => {
                try {
                    e()
                } catch (e) {}
            })), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, ki([this, "access", e => e.worker, "optionalAccess", e => e.terminate, "call", e => e()]), this.worker = null, this.snapshotInProgressMap = new Map
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        constructor(e) {
            this.pendingCanvasMutations = new Map, this.rafStamps = {
                latestId: 0,
                invokeId: null
            }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.processMutation = (e, t) => {
                !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
            };
            const {
                sampling: t = "all",
                win: n,
                blockClass: r,
                blockSelector: o,
                unblockSelector: s,
                maxCanvasSize: i,
                recordCanvas: a,
                dataURLOptions: c,
                errorHandler: u
            } = e;
            this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, u && (Pd = u), (a && "number" == typeof t || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()), this.addWindow(n), e.enableManualSnapshot || $d((() => {
                a && "all" === t && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), a && "number" == typeof t && this.initCanvasFPSObserver(t, r, o, s, i, {
                    dataURLOptions: c
                })
            }))()
        }
        addWindow(e) {
            const {
                sampling: t = "all",
                blockClass: n,
                blockSelector: r,
                unblockSelector: o,
                recordCanvas: s,
                enableManualSnapshot: i
            } = this.options;
            if (!this.windowsSet.has(e)) {
                if (i) return this.windowsSet.add(e), void this.windows.push(new WeakRef(e));
                $d((() => {
                    if (s && "all" === t && this.initCanvasMutationObserver(e, n, r, o), s && "number" == typeof t) {
                        const t = Yd(e, n, r, o, !0);
                        this.restoreHandlers.push((() => {
                            t()
                        }))
                    }
                }))(), this.windowsSet.add(e), this.windows.push(new WeakRef(e))
            }
        }
        addShadowRoot(e) {
            this.shadowDoms.add(new WeakRef(e))
        }
        resetShadowRoots() {
            this.shadowDoms = new Set
        }
        initFPSWorker() {
            const e = new Worker(function() {
                const e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
                return URL.createObjectURL(e)
            }());
            return e.onmessage = e => {
                const t = e.data,
                    {
                        id: n
                    } = t;
                if (this.snapshotInProgressMap.set(n, !1), !("base64" in t)) return;
                const {
                    base64: r,
                    type: o,
                    width: s,
                    height: i
                } = t;
                this.mutationCb({
                    id: n,
                    type: Nd["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, s, i]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: r
                                }],
                                type: o
                            }]
                        }, 0, 0, s, i]
                    }]
                })
            }, e
        }
        initCanvasFPSObserver(e, t, n, r, o, s) {
            const i = this.takeSnapshot(!1, e, t, n, r, o, s.dataURLOptions);
            this.restoreHandlers.push((() => {
                cancelAnimationFrame(i)
            }))
        }
        initCanvasMutationObserver(e, t, n, r) {
            const o = Yd(e, t, n, r, !1),
                s = function(e, t, n, r, o) {
                    const s = [],
                        i = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                    for (const a of i) try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                        const i = Md(t.CanvasRenderingContext2D.prototype, a, (function(s) {
                            return function(...i) {
                                return Rd(this.canvas, n, r, o) || Ld((() => {
                                    const n = Wd(i, t, this);
                                    e(this.canvas, {
                                        type: Nd["2D"],
                                        property: a,
                                        args: n
                                    })
                                }), 0), s.apply(this, i)
                            }
                        }));
                        s.push(i)
                    } catch (n) {
                        const r = Id(t.CanvasRenderingContext2D.prototype, a, {
                            set(t) {
                                e(this.canvas, {
                                    type: Nd["2D"],
                                    property: a,
                                    args: [t],
                                    setter: !0
                                })
                            }
                        });
                        s.push(r)
                    }
                    return () => {
                        s.forEach((e => e()))
                    }
                }(this.processMutation.bind(this), e, t, n, r),
                i = function(e, t, n, r, o, s) {
                    const i = [];
                    return i.push(...Vd(t.WebGLRenderingContext.prototype, Nd.WebGL, e, n, r, o, 0, t)), void 0 !== t.WebGL2RenderingContext && i.push(...Vd(t.WebGL2RenderingContext.prototype, Nd.WebGL2, e, n, r, o, 0, t)), () => {
                        i.forEach((e => e()))
                    }
                }(this.processMutation.bind(this), e, t, n, r, this.mirror);
            this.restoreHandlers.push((() => {
                o(), s(), i()
            }))
        }
        snapshot(e) {
            const {
                options: t
            } = this, n = this.takeSnapshot(!0, "all" === t.sampling ? 2 : t.sampling || 2, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
            this.restoreHandlers.push((() => {
                cancelAnimationFrame(n)
            }))
        }
        takeSnapshot(e, t, n, r, o, s, i, a) {
            const c = 1e3 / t;
            let u, l = 0;
            const d = e => {
                    if (e) return [e];
                    const t = [],
                        s = e => {
                            e.querySelectorAll("canvas").forEach((e => {
                                Rd(e, n, r, o) || t.push(e)
                            }))
                        };
                    for (const e of this.windows) {
                        const t = e.deref();
                        t && s(t.document)
                    }
                    for (const e of this.shadowDoms) {
                        const t = e.deref();
                        t && s(t)
                    }
                    return t
                },
                p = t => {
                    this.windows.length && (l && t - l < c ? u = Dd(p) : (l = t, d(a).forEach((t => {
                        if (!this.mirror.hasNode(t)) return;
                        const n = this.mirror.getId(t);
                        if (!this.snapshotInProgressMap.get(n) && t.width && t.height) {
                            if (this.snapshotInProgressMap.set(n, !0), !e && ["webgl", "webgl2"].includes(t.__context)) {
                                const e = t.getContext(t.__context);
                                !1 === ki([e, "optionalAccess", e => e.getContextAttributes, "call", e => e(), "optionalAccess", e => e.preserveDrawingBuffer]) && e.clear(e.COLOR_BUFFER_BIT)
                            }
                            createImageBitmap(t).then((e => {
                                ki([this, "access", e => e.worker, "optionalAccess", e => e.postMessage, "call", r => r({
                                    id: n,
                                    bitmap: e,
                                    width: t.width,
                                    height: t.height,
                                    dataURLOptions: i,
                                    maxCanvasSize: s
                                }, [e])])
                            })).catch((e => {
                                $d((() => {
                                    throw e
                                }))()
                            }))
                        }
                    })), e || (u = Dd(p))))
                };
            return u = Dd(p), u
        }
        startPendingCanvasMutationFlusher() {
            Dd((() => this.flushPendingCanvasMutations()))
        }
        startRAFTimestamping() {
            const e = t => {
                this.rafStamps.latestId = t, Dd(e)
            };
            Dd(e)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((e, t) => {
                const n = this.mirror.getId(t);
                this.flushPendingCanvasMutationFor(t, n)
            })), Dd((() => this.flushPendingCanvasMutations()))
        }
        flushPendingCanvasMutationFor(e, t) {
            if (this.frozen || this.locked) return;
            const n = this.pendingCanvasMutations.get(e);
            if (!n || -1 === t) return;
            const r = n.map((e => {
                    const {
                        type: t,
                        ...n
                    } = e;
                    return n
                })),
                {
                    type: o
                } = n[0];
            this.mutationCb({
                id: t,
                type: o,
                commands: r
            }), this.pendingCanvasMutations.delete(e)
        }
    }
    const Xd = {
            low: {
                sampling: {
                    canvas: 1
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .25
                }
            },
            medium: {
                sampling: {
                    canvas: 2
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .4
                }
            },
            high: {
                sampling: {
                    canvas: 4
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .5
                }
            }
        },
        Jd = 1280,
        Kd = (e = {}) => {
            const [t, n] = e.maxCanvasSize || [], r = {
                quality: e.quality || "medium",
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [t ? Math.min(t, Jd) : Jd, n ? Math.min(n, Jd) : Jd]
            };
            let o;
            const s = new Promise((e => o = e));
            return {
                name: "ReplayCanvas",
                getOptions() {
                    const {
                        quality: e,
                        enableManualSnapshot: t,
                        maxCanvasSize: n
                    } = r;
                    return {
                        enableManualSnapshot: t,
                        recordCanvas: !0,
                        getCanvasManager: e => {
                            const r = new Gd({ ...e,
                                enableManualSnapshot: t,
                                maxCanvasSize: n,
                                errorHandler: e => {
                                    try {
                                        "object" == typeof e && (e.__rrweb__ = !0)
                                    } catch (e) {}
                                }
                            });
                            return o(r), r
                        },
                        ...Xd[e || "medium"] || Xd.medium
                    }
                },
                async snapshot(e) {
                    (await s).snapshot(e)
                }
            }
        },
        Zd = C,
        Qd = Zd.document,
        ep = Zd.navigator,
        tp = "Report a Bug",
        np = "widget",
        rp = (e, t = {
            includeReplay: !0
        }) => {
            if (!e.message) throw new Error("Unable to submit feedback with empty message");
            const n = Ae();
            if (!n) throw new Error("No client setup, cannot send feedback.");
            e.tags && Object.keys(e.tags).length && Ce().setTags(e.tags);
            const r = Fn({
                source: "api",
                url: O(),
                ...e
            }, t);
            return new Promise(((e, t) => {
                const o = setTimeout((() => t("Unable to determine if Feedback was correctly sent.")), 5e3),
                    s = n.on("afterSendEvent", ((n, i) => {
                        if (n.event_id === r) return clearTimeout(o), s(), i && "number" == typeof i.statusCode && i.statusCode >= 200 && i.statusCode < 300 ? e(r) : i && "number" == typeof i.statusCode && 0 === i.statusCode ? t("Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.") : i && "number" == typeof i.statusCode && 403 === i.statusCode ? t("Unable to send Feedback. This could be because this domain is not in your list of allowed domains.") : t("Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker")
                    }))
            }))
        },
        op = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

    function sp(e, t) {
        return { ...e,
            ...t,
            tags: { ...e.tags,
                ...t.tags
            },
            onFormOpen: () => {
                t.onFormOpen && t.onFormOpen(), e.onFormOpen && e.onFormOpen()
            },
            onFormClose: () => {
                t.onFormClose && t.onFormClose(), e.onFormClose && e.onFormClose()
            },
            onSubmitSuccess: n => {
                t.onSubmitSuccess && t.onSubmitSuccess(n), e.onSubmitSuccess && e.onSubmitSuccess(n)
            },
            onSubmitError: n => {
                t.onSubmitError && t.onSubmitError(n), e.onSubmitError && e.onSubmitError(n)
            },
            onFormSubmitted: () => {
                t.onFormSubmitted && t.onFormSubmitted(), e.onFormSubmitted && e.onFormSubmitted()
            },
            themeDark: { ...e.themeDark,
                ...t.themeDark
            },
            themeLight: { ...e.themeLight,
                ...t.themeLight
            }
        }
    }

    function ip(e, t) {
        return Object.entries(t).forEach((([t, n]) => {
            e.setAttributeNS(null, t, n)
        })), e
    }
    const ap = "rgba(88, 74, 192, 1)",
        cp = {
            foreground: "#2b2233",
            background: "#ffffff",
            accentForeground: "white",
            accentBackground: ap,
            successColor: "#268d75",
            errorColor: "#df3338",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            outline: "1px auto var(--accent-background)",
            interactiveFilter: "brightness(95%)"
        },
        up = {
            foreground: "#ebe6ef",
            background: "#29232f",
            accentForeground: "white",
            accentBackground: ap,
            successColor: "#2da98c",
            errorColor: "#f55459",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            outline: "1px auto var(--accent-background)",
            interactiveFilter: "brightness(150%)"
        };

    function lp(e) {
        return `\n  --foreground: ${e.foreground};\n  --background: ${e.background};\n  --accent-foreground: ${e.accentForeground};\n  --accent-background: ${e.accentBackground};\n  --success-color: ${e.successColor};\n  --error-color: ${e.errorColor};\n  --border: ${e.border};\n  --box-shadow: ${e.boxShadow};\n  --outline: ${e.outline};\n  --interactive-filter: ${e.interactiveFilter};\n  `
    }
    const dp = ({
        lazyLoadIntegration: e,
        getModalIntegration: t,
        getScreenshotIntegration: n
    }) => ({
        id: r = "sentry-feedback",
        autoInject: o = !0,
        showBranding: s = !0,
        isEmailRequired: i = !1,
        isNameRequired: a = !1,
        showEmail: c = !0,
        showName: u = !0,
        enableScreenshot: l = !0,
        useSentryUser: d = {
            email: "email",
            name: "username"
        },
        tags: p,
        styleNonce: h,
        scriptNonce: f,
        colorScheme: m = "system",
        themeLight: g = {},
        themeDark: _ = {},
        addScreenshotButtonLabel: y = "Add a screenshot",
        cancelButtonLabel: v = "Cancel",
        confirmButtonLabel: b = "Confirm",
        emailLabel: S = "Email",
        emailPlaceholder: w = "your.email@example.org",
        formTitle: k = "Report a Bug",
        isRequiredLabel: E = "(required)",
        messageLabel: x = "Description",
        messagePlaceholder: C = "What's the bug? What did you expect?",
        nameLabel: T = "Name",
        namePlaceholder: I = "Your Name",
        removeScreenshotButtonLabel: M = "Remove screenshot",
        submitButtonLabel: R = "Send Bug Report",
        successMessageText: A = "Thank you for your report!",
        triggerLabel: O = tp,
        triggerAriaLabel: D = "",
        onFormOpen: L,
        onFormClose: N,
        onSubmitSuccess: P,
        onSubmitError: $,
        onFormSubmitted: B
    } = {}) => {
        const U = {
            id: r,
            autoInject: o,
            showBranding: s,
            isEmailRequired: i,
            isNameRequired: a,
            showEmail: c,
            showName: u,
            enableScreenshot: l,
            useSentryUser: d,
            tags: p,
            styleNonce: h,
            scriptNonce: f,
            colorScheme: m,
            themeDark: _,
            themeLight: g,
            triggerLabel: O,
            triggerAriaLabel: D,
            cancelButtonLabel: v,
            submitButtonLabel: R,
            confirmButtonLabel: b,
            formTitle: k,
            emailLabel: S,
            emailPlaceholder: w,
            messageLabel: x,
            messagePlaceholder: C,
            nameLabel: T,
            namePlaceholder: I,
            successMessageText: A,
            isRequiredLabel: E,
            addScreenshotButtonLabel: y,
            removeScreenshotButtonLabel: M,
            onFormClose: N,
            onFormOpen: L,
            onSubmitError: $,
            onSubmitSuccess: P,
            onFormSubmitted: B
        };
        let j = null,
            H = [];
        const z = e => {
                if (!j) {
                    const t = Qd.createElement("div");
                    t.id = String(e.id), Qd.body.appendChild(t), j = t.attachShadow({
                        mode: "open"
                    }), j.appendChild(function({
                        colorScheme: e,
                        themeDark: t,
                        themeLight: n,
                        styleNonce: r
                    }) {
                        const o = Qd.createElement("style");
                        return o.textContent = `\n:host {\n  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;\n  --font-size: 14px;\n  --z-index: 100000;\n\n  --page-margin: 16px;\n  --inset: auto 0 0 auto;\n  --actor-inset: var(--inset);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${"system"!==e?"color-scheme: only light;":""}\n\n  ${lp("dark"===e?{...up,...t}:{...cp,...n})}\n}\n\n${"system"===e?`\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${lp({...up,...t})}\n  }\n}`:""}\n}\n`, r && o.setAttribute("nonce", r), o
                    }(e))
                }
                return j
            },
            W = async r => {
                const o = r.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ep.userAgent) || /Macintosh/i.test(ep.userAgent) && ep.maxTouchPoints && ep.maxTouchPoints > 1 || !isSecureContext);
                let s, i;
                try {
                    s = (t ? t() : await e("feedbackModalIntegration", f))(), yn(s)
                } catch (e) {
                    throw op && F.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."), new Error("[Feedback] Missing feedback modal integration!")
                }
                try {
                    const t = o ? n ? n() : await e("feedbackScreenshotIntegration", f) : void 0;
                    t && (i = t(), yn(i))
                } catch (e) {
                    op && F.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")
                }
                const a = s.createDialog({
                    options: { ...r,
                        onFormClose: () => {
                            a && a.close(), r.onFormClose && r.onFormClose()
                        },
                        onFormSubmitted: () => {
                            a && a.close(), r.onFormSubmitted && r.onFormSubmitted()
                        }
                    },
                    screenshotIntegration: i,
                    sendFeedback: rp,
                    shadow: z(r)
                });
                return a
            },
            q = (e, t = {}) => {
                const n = sp(U, t),
                    r = "string" == typeof e ? Qd.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                if (!r) throw op && F.error("[Feedback] Unable to attach to target element"), new Error("Unable to attach to target element");
                let o = null;
                const s = async () => {
                    o || (o = await W({ ...n,
                        onFormSubmitted: () => {
                            o && o.removeFromDom(), n.onFormSubmitted && n.onFormSubmitted()
                        }
                    })), o.appendToDom(), o.open()
                };
                r.addEventListener("click", s);
                const i = () => {
                    H = H.filter((e => e !== i)), o && o.removeFromDom(), o = null, r.removeEventListener("click", s)
                };
                return H.push(i), i
            },
            Y = (e = {}) => {
                const t = sp(U, e),
                    n = z(t),
                    r = function({
                        triggerLabel: e,
                        triggerAriaLabel: t,
                        shadow: n,
                        styleNonce: r
                    }) {
                        const o = Qd.createElement("button");
                        if (o.type = "button", o.className = "widget__actor", o.ariaHidden = "false", o.ariaLabel = t || e || tp, o.appendChild(function() {
                                const e = e => Zd.document.createElementNS("http://www.w3.org/2000/svg", e),
                                    t = ip(e("svg"), {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "var(--actor-color, var(--foreground))"
                                    }),
                                    n = ip(e("g"), {
                                        clipPath: "url(#clip0_57_80)"
                                    }),
                                    r = ip(e("path"), {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                                    });
                                t.appendChild(n).appendChild(r);
                                const o = e("defs"),
                                    s = ip(e("clipPath"), {
                                        id: "clip0_57_80"
                                    }),
                                    i = ip(e("rect"), {
                                        width: "20",
                                        height: "20",
                                        fill: "white"
                                    });
                                return s.appendChild(i), o.appendChild(s), t.appendChild(o).appendChild(s).appendChild(i), t
                            }()), e) {
                            const t = Qd.createElement("span");
                            t.appendChild(Qd.createTextNode(e)), o.appendChild(t)
                        }
                        const s = function(e) {
                            const t = Qd.createElement("style");
                            return t.textContent = '\n.widget__actor {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: var(--page-margin);\n  inset: var(--actor-inset);\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  line-height: 1.14em;\n  text-decoration: none;\n\n  background: var(--actor-background, var(--background));\n  border-radius: var(--actor-border-radius, 1.7em/50%);\n  border: var(--actor-border, var(--border));\n  box-shadow: var(--actor-box-shadow, var(--box-shadow));\n  color: var(--actor-color, var(--foreground));\n  fill: var(--actor-color, var(--foreground));\n  cursor: pointer;\n  opacity: 1;\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n.widget__actor[aria-hidden="true"] {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  transform: translate(0, 16px) scale(0.98);\n}\n\n.widget__actor:hover {\n  background: var(--actor-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n\n.widget__actor svg {\n  width: 1.14em;\n  height: 1.14em;\n}\n\n@media (max-width: 600px) {\n  .widget__actor span {\n    display: none;\n  }\n}\n', e && t.setAttribute("nonce", e), t
                        }(r);
                        return {
                            el: o,
                            appendToDom() {
                                n.appendChild(s), n.appendChild(o)
                            },
                            removeFromDom() {
                                n.removeChild(o), n.removeChild(s)
                            },
                            show() {
                                o.ariaHidden = "false"
                            },
                            hide() {
                                o.ariaHidden = "true"
                            }
                        }
                    }({
                        triggerLabel: t.triggerLabel,
                        triggerAriaLabel: t.triggerAriaLabel,
                        shadow: n,
                        styleNonce: h
                    });
                return q(r.el, { ...t,
                    onFormOpen() {
                        r.hide()
                    },
                    onFormClose() {
                        r.show()
                    },
                    onFormSubmitted() {
                        r.show()
                    }
                }), r
            };
        return {
            name: "Feedback",
            setupOnce() {
                Ei() && U.autoInject && ("loading" === Qd.readyState ? Qd.addEventListener("DOMContentLoaded", (() => Y().appendToDom())) : Y().appendToDom())
            },
            attachTo: q,
            createWidget(e = {}) {
                const t = Y(sp(U, e));
                return t.appendToDom(), t
            },
            createForm: async (e = {}) => W(sp(U, e)),
            remove() {
                j && (j.parentElement && j.parentElement.remove(), j = null), H.forEach((e => e())), H = []
            }
        }
    };

    function pp() {
        const e = Ae();
        return e && e.getIntegrationByName("Feedback")
    }
    var hp, fp, mp, gp, _p, yp, vp, bp = {},
        Sp = [],
        wp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        kp = Array.isArray;

    function Ep(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function xp(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function Cp(e, t, n) {
        var r, o, s, i = {};
        for (s in t) "key" == s ? r = t[s] : "ref" == s ? o = t[s] : i[s] = t[s];
        if (arguments.length > 2 && (i.children = arguments.length > 3 ? hp.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
            for (s in e.defaultProps) void 0 === i[s] && (i[s] = e.defaultProps[s]);
        return Tp(e, i, r, o, null)
    }

    function Tp(e, t, n, r, o) {
        var s = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == o ? ++mp : o,
            __i: -1,
            __u: 0
        };
        return null == o && null != fp.vnode && fp.vnode(s), s
    }

    function Ip(e) {
        return e.children
    }

    function Mp(e, t) {
        this.props = e, this.context = t
    }

    function Rp(e, t) {
        if (null == t) return e.__ ? Rp(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? Rp(e) : null
    }

    function Ap(e, t, n) {
        var r, o = e.__v,
            s = o.__e,
            i = e.__P;
        if (i) return (r = Ep({}, o)).__v = o.__v + 1, fp.vnode && fp.vnode(r), Hp(i, r, o, e.__n, void 0 !== i.ownerSVGElement, 32 & o.__u ? [s] : null, t, null == s ? Rp(o) : s, !!(32 & o.__u), n), r.__.__k[r.__i] = r, r.__d = void 0, r.__e != s && Op(r), r
    }

    function Op(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return Op(e)
        }
    }

    function Dp(e) {
        (!e.__d && (e.__d = !0) && gp.push(e) && !Lp.__r++ || _p !== fp.debounceRendering) && ((_p = fp.debounceRendering) || yp)(Lp)
    }

    function Lp() {
        var e, t, n, r = [],
            o = [];
        for (gp.sort(vp); e = gp.shift();) e.__d && (n = gp.length, t = Ap(e, r, o) || t, 0 === n || gp.length > n ? (zp(r, t, o), o.length = r.length = 0, t = void 0, gp.sort(vp)) : t && fp.__c && fp.__c(t, Sp));
        t && zp(r, t, o), Lp.__r = 0
    }

    function Np(e, t, n, r, o, s, i, a, c, u, l) {
        var d, p, h, f, m, g = r && r.__k || Sp,
            _ = t.length;
        for (n.__d = c, function(e, t, n) {
                var r, o, s, i, a, c = t.length,
                    u = n.length,
                    l = u,
                    d = 0;
                for (e.__k = [], r = 0; r < c; r++) null != (o = e.__k[r] = null == (o = t[r]) || "boolean" == typeof o || "function" == typeof o ? null : "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? Tp(null, o, null, null, o) : kp(o) ? Tp(Ip, {
                    children: o
                }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? Tp(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) ? (o.__ = e, o.__b = e.__b + 1, a = $p(o, n, i = r + d, l), o.__i = a, s = null, -1 !== a && (l--, (s = n[a]) && (s.__u |= 131072)), null == s || null === s.__v ? (-1 == a && d--, "function" != typeof o.type && (o.__u |= 65536)) : a !== i && (a === i + 1 ? d++ : a > i ? l > c - i ? d += a - i : d-- : d = a < i && a == i - 1 ? a - i : 0, a !== r + d && (o.__u |= 65536))) : (s = n[r]) && null == s.key && s.__e && (s.__e == e.__d && (e.__d = Rp(s)), Yp(s, s, !1), n[r] = null, l--);
                if (l)
                    for (r = 0; r < u; r++) null != (s = n[r]) && 0 == (131072 & s.__u) && (s.__e == e.__d && (e.__d = Rp(s)), Yp(s, s))
            }(n, t, g), c = n.__d, d = 0; d < _; d++) null != (h = n.__k[d]) && "boolean" != typeof h && "function" != typeof h && (p = -1 === h.__i ? bp : g[h.__i] || bp, h.__i = d, Hp(e, h, p, o, s, i, a, c, u, l), f = h.__e, h.ref && p.ref != h.ref && (p.ref && qp(p.ref, null, h), l.push(h.ref, h.__c || f, h)), null == m && null != f && (m = f), 65536 & h.__u || p.__k === h.__k ? c = Pp(h, c, e) : "function" == typeof h.type && void 0 !== h.__d ? c = h.__d : f && (c = f.nextSibling), h.__d = void 0, h.__u &= -196609);
        n.__d = c, n.__e = m
    }

    function Pp(e, t, n) {
        var r, o;
        if ("function" == typeof e.type) {
            for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Pp(r[o], t, n));
            return t
        }
        e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
        do {
            t = t && t.nextSibling
        } while (null != t && 8 === t.nodeType);
        return t
    }

    function $p(e, t, n, r) {
        var o = e.key,
            s = e.type,
            i = n - 1,
            a = n + 1,
            c = t[n];
        if (null === c || c && o == c.key && s === c.type) return n;
        if (r > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
            for (; i >= 0 || a < t.length;) {
                if (i >= 0) {
                    if ((c = t[i]) && 0 == (131072 & c.__u) && o == c.key && s === c.type) return i;
                    i--
                }
                if (a < t.length) {
                    if ((c = t[a]) && 0 == (131072 & c.__u) && o == c.key && s === c.type) return a;
                    a++
                }
            }
        return -1
    }

    function Fp(e, t, n) {
        "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || wp.test(t) ? n : n + "px"
    }

    function Bp(e, t, n, r, o) {
        var s;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || Fp(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || Fp(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, s ? jp : Up, s)) : e.removeEventListener(t, s ? jp : Up, s);
        else {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
        }
    }

    function Up(e) {
        if (this.l) {
            var t = this.l[e.type + !1];
            if (e.t) {
                if (e.t <= t.u) return
            } else e.t = Date.now();
            return t(fp.event ? fp.event(e) : e)
        }
    }

    function jp(e) {
        if (this.l) return this.l[e.type + !0](fp.event ? fp.event(e) : e)
    }

    function Hp(e, t, n, r, o, s, i, a, c, u) {
        var l, d, p, h, f, m, g, _, y, v, b, S, w, k, E, x = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && (c = !!(32 & n.__u), s = [a = t.__e = n.__e]), (l = fp.__b) && l(t);
        e: if ("function" == typeof x) try {
            if (_ = t.props, y = (l = x.contextType) && r[l.__c], v = l ? y ? y.props.value : l.__ : r, n.__c ? g = (d = t.__c = n.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(_, v) : (t.__c = d = new Mp(_, v), d.constructor = x, d.render = Vp), y && y.sub(d), d.props = _, d.state || (d.state = {}), d.context = v, d.__n = r, p = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = Ep({}, d.__s)), Ep(d.__s, x.getDerivedStateFromProps(_, d.__s))), h = d.props, f = d.state, d.__v = t, p) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
                if (null == x.getDerivedStateFromProps && _ !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, v), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, v) || t.__v === n.__v)) {
                    for (t.__v !== n.__v && (d.props = _, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                            e && (e.__ = t)
                        })), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                    d._sb = [], d.__h.length && i.push(d);
                    break e
                }
                null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, v), null != d.componentDidUpdate && d.__h.push((function() {
                    d.componentDidUpdate(h, f, m)
                }))
            }
            if (d.context = v, d.props = _, d.__P = e, d.__e = !1, S = fp.__r, w = 0, "prototype" in x && x.prototype.render) {
                for (d.state = d.__s, d.__d = !1, S && S(t), l = d.render(d.props, d.state, d.context), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
                d._sb = []
            } else
                do {
                    d.__d = !1, S && S(t), l = d.render(d.props, d.state, d.context), d.state = d.__s
                } while (d.__d && ++w < 25);
            d.state = d.__s, null != d.getChildContext && (r = Ep(Ep({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (m = d.getSnapshotBeforeUpdate(h, f)), Np(e, kp(E = null != l && l.type === Ip && null == l.key ? l.props.children : l) ? E : [E], t, n, r, o, s, i, a, c, u), d.base = t.__e, t.__u &= -161, d.__h.length && i.push(d), g && (d.__E = d.__ = null)
        } catch (e) {
            t.__v = null, c || null != s ? (t.__e = a, t.__u |= c ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), fp.__e(e, t, n)
        } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wp(n.__e, t, n, r, o, s, i, c, u);
        (l = fp.diffed) && l(t)
    }

    function zp(e, t, n) {
        for (var r = 0; r < n.length; r++) qp(n[r], n[++r], n[++r]);
        fp.__c && fp.__c(t, e), e.some((function(t) {
            try {
                e = t.__h, t.__h = [], e.some((function(e) {
                    e.call(t)
                }))
            } catch (e) {
                fp.__e(e, t.__v)
            }
        }))
    }

    function Wp(e, t, n, r, o, s, i, a, c) {
        var u, l, d, p, h, f, m, g = n.props,
            _ = t.props,
            y = t.type;
        if ("svg" === y && (o = !0), null != s)
            for (u = 0; u < s.length; u++)
                if ((h = s[u]) && "setAttribute" in h == !!y && (y ? h.localName === y : 3 === h.nodeType)) {
                    e = h, s[u] = null;
                    break
                }
        if (null == e) {
            if (null === y) return document.createTextNode(_);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, _.is && _), s = null, a = !1
        }
        if (null === y) g === _ || a && e.data === _ || (e.data = _);
        else {
            if (s = s && hp.call(e.childNodes), g = n.props || bp, !a && null != s)
                for (g = {}, u = 0; u < e.attributes.length; u++) g[(h = e.attributes[u]).name] = h.value;
            for (u in g) h = g[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = h : "key" === u || u in _ || Bp(e, u, null, h, o));
            for (u in _) h = _[u], "children" == u ? p = h : "dangerouslySetInnerHTML" == u ? l = h : "value" == u ? f = h : "checked" == u ? m = h : "key" === u || a && "function" != typeof h || g[u] === h || Bp(e, u, h, g[u], o);
            if (l) a || d && (l.__html === d.__html || l.__html === e.innerHTML) || (e.innerHTML = l.__html), t.__k = [];
            else if (d && (e.innerHTML = ""), Np(e, kp(p) ? p : [p], t, n, r, o && "foreignObject" !== y, s, i, s ? s[0] : n.__k && Rp(n, 0), a, c), null != s)
                for (u = s.length; u--;) null != s[u] && xp(s[u]);
            a || (u = "value", void 0 !== f && (f !== e[u] || "progress" === y && !f || "option" === y && f !== g[u]) && Bp(e, u, f, g[u], !1), u = "checked", void 0 !== m && m !== e[u] && Bp(e, u, m, g[u], !1))
        }
        return e
    }

    function qp(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            fp.__e(e, n)
        }
    }

    function Yp(e, t, n) {
        var r, o;
        if (fp.unmount && fp.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || qp(r, null, t)), null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                fp.__e(e, t)
            }
            r.base = r.__P = null, e.__c = void 0
        }
        if (r = e.__k)
            for (o = 0; o < r.length; o++) r[o] && Yp(r[o], t, n || "function" != typeof e.type);
        n || null == e.__e || xp(e.__e), e.__ = e.__e = e.__d = void 0
    }

    function Vp(e, t, n) {
        return this.constructor(e, n)
    }
    hp = Sp.slice,
    fp = {
        __e: function(e, t, n, r) {
            for (var o, s, i; t = t.__;)
                if ((o = t.__c) && !o.__) try {
                    if ((s = o.constructor) && null != s.getDerivedStateFromError && (o.setState(s.getDerivedStateFromError(e)), i = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), i = o.__d), i) return o.__E = o
                } catch (t) {
                    e = t
                }
            throw e
        }
    },
    mp = 0,
    Mp.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Ep({}, this.state), "function" == typeof e && (e = e(Ep({}, n), this.props)), e && Ep(n, e), null != e && this.__v && (t && this._sb.push(t), Dp(this))
    },
    Mp.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), Dp(this))
    },
    Mp.prototype.render = Ip,
    gp = [],
    yp = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    vp = function(e, t) {
        return e.__v.__b - t.__v.__b
    },
    Lp.__r = 0;
    var Gp, Xp, Jp, Kp, Zp = 0,
        Qp = [],
        eh = [],
        th = fp,
        nh = th.__b,
        rh = th.__r,
        oh = th.diffed,
        sh = th.__c,
        ih = th.unmount,
        ah = th.__;

    function ch(e, t) {
        th.__h && th.__h(Xp, e, Zp || t), Zp = 0;
        var n = Xp.__H || (Xp.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({
            __V: eh
        }), n.__[e]
    }

    function uh(e) {
        return Zp = 1, lh(bh, e)
    }

    function lh(e, t, n) {
        var r = ch(Gp++, 2);
        if (r.t = e, !r.__c && (r.__ = [n ? n(t) : bh(void 0, t), function(e) {
                var t = r.__N ? r.__N[0] : r.__[0],
                    n = r.t(t, e);
                t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
            }], r.__c = Xp, !Xp.u)) {
            var o = function(e, t, n) {
                if (!r.__c.__H) return !0;
                var o = r.__c.__H.__.filter((function(e) {
                    return !!e.__c
                }));
                if (o.every((function(e) {
                        return !e.__N
                    }))) return !s || s.call(this, e, t, n);
                var i = !1;
                return o.forEach((function(e) {
                    if (e.__N) {
                        var t = e.__[0];
                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (i = !0)
                    }
                })), !(!i && r.__c.props === e) && (!s || s.call(this, e, t, n))
            };
            Xp.u = !0;
            var s = Xp.shouldComponentUpdate,
                i = Xp.componentWillUpdate;
            Xp.componentWillUpdate = function(e, t, n) {
                if (this.__e) {
                    var r = s;
                    s = void 0, o(e, t, n), s = r
                }
                i && i.call(this, e, t, n)
            }, Xp.shouldComponentUpdate = o
        }
        return r.__N || r.__
    }

    function dh(e, t) {
        var n = ch(Gp++, 4);
        !th.__s && vh(n.__H, t) && (n.__ = e, n.i = t, Xp.__h.push(n))
    }

    function ph(e, t) {
        var n = ch(Gp++, 7);
        return vh(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
    }

    function hh(e, t) {
        return Zp = 8, ph((function() {
            return e
        }), t)
    }

    function fh() {
        for (var e; e = Qp.shift();)
            if (e.__P && e.__H) try {
                e.__H.__h.forEach(_h), e.__H.__h.forEach(yh), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], th.__e(t, e.__v)
            }
    }
    th.__b = function(e) {
        Xp = null, nh && nh(e)
    },
    th.__ = function(e, t) {
        t.__k && t.__k.__m && (e.__m = t.__k.__m), ah && ah(e, t)
    },
    th.__r = function(e) {
        rh && rh(e), Gp = 0;
        var t = (Xp = e.__c).__H;
        t && (Jp === Xp ? (t.__h = [], Xp.__h = [], t.__.forEach((function(e) {
            e.__N && (e.__ = e.__N), e.__V = eh, e.__N = e.i = void 0
        }))) : (t.__h.forEach(_h), t.__h.forEach(yh), t.__h = [], Gp = 0)), Jp = Xp
    },
    th.diffed = function(e) {
        oh && oh(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (1 !== Qp.push(t) && Kp === th.requestAnimationFrame || ((Kp = th.requestAnimationFrame) || gh)(fh)), t.__H.__.forEach((function(e) {
            e.i && (e.__H = e.i), e.__V !== eh && (e.__ = e.__V), e.i = void 0, e.__V = eh
        }))), Jp = Xp = null
    },
    th.__c = function(e, t) {
        t.some((function(e) {
            try {
                e.__h.forEach(_h), e.__h = e.__h.filter((function(e) {
                    return !e.__ || yh(e)
                }))
            } catch (n) {
                t.some((function(e) {
                    e.__h && (e.__h = [])
                })), t = [], th.__e(n, e.__v)
            }
        })), sh && sh(e, t)
    },
    th.unmount = function(e) {
        ih && ih(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.forEach((function(e) {
            try {
                _h(e)
            } catch (e) {
                t = e
            }
        })), n.__H = void 0, t && th.__e(t, n.__v))
    };
    var mh = "function" == typeof requestAnimationFrame;

    function gh(e) {
        var t, n = function() {
                clearTimeout(r), mh && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        mh && (t = requestAnimationFrame(n))
    }

    function _h(e) {
        var t = Xp,
            n = e.__c;
        "function" == typeof n && (e.__c = void 0, n()), Xp = t
    }

    function yh(e) {
        var t = Xp;
        e.__c = e.__(), Xp = t
    }

    function vh(e, t) {
        return !e || e.length !== t.length || t.some((function(t, n) {
            return t !== e[n]
        }))
    }

    function bh(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    const Sh = {
            __proto__: null,
            useCallback: hh,
            useContext: function(e) {
                var t = Xp.context[e.__c],
                    n = ch(Gp++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(Xp)), t.props.value) : e.__
            },
            useDebugValue: function(e, t) {
                th.useDebugValue && th.useDebugValue(t ? t(e) : e)
            },
            useEffect: function(e, t) {
                var n = ch(Gp++, 3);
                !th.__s && vh(n.__H, t) && (n.__ = e, n.i = t, Xp.__H.__h.push(n))
            },
            useErrorBoundary: function(e) {
                var t = ch(Gp++, 10),
                    n = uh();
                return t.__ = e, Xp.componentDidCatch || (Xp.componentDidCatch = function(e, r) {
                    t.__ && t.__(e, r), n[1](e)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            },
            useId: function() {
                var e = ch(Gp++, 11);
                if (!e.__) {
                    for (var t = Xp.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                    var n = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + n[0] + "-" + n[1]++
                }
                return e.__
            },
            useImperativeHandle: function(e, t, n) {
                Zp = 6, dh((function() {
                    return "function" == typeof e ? (e(t()), function() {
                        return e(null)
                    }) : e ? (e.current = t(), function() {
                        return e.current = null
                    }) : void 0
                }), null == n ? n : n.concat(e))
            },
            useLayoutEffect: dh,
            useMemo: ph,
            useReducer: lh,
            useRef: function(e) {
                return Zp = 5, ph((function() {
                    return {
                        current: e
                    }
                }), [])
            },
            useState: uh
        },
        wh = "http://www.w3.org/2000/svg";

    function kh() {
        const e = e => Qd.createElementNS(wh, e),
            t = ip(e("svg"), {
                width: "32",
                height: "30",
                viewBox: "0 0 72 66",
                fill: "inherit"
            }),
            n = ip(e("path"), {
                transform: "translate(11, 11)",
                d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
            });
        return t.appendChild(n), t
    }

    function Eh({
        options: e
    }) {
        const t = ph((() => ({
            __html: kh().outerHTML
        })), []);
        return Cp("h2", {
            class: "dialog__header"
        }, Cp("span", {
            class: "dialog__title"
        }, e.formTitle), e.showBranding ? Cp("a", {
            class: "brand-link",
            target: "_blank",
            href: "https://sentry.io/welcome/",
            title: "Powered by Sentry",
            rel: "noopener noreferrer",
            dangerouslySetInnerHTML: t
        }) : null)
    }

    function xh(e, t) {
        const n = e.get(t);
        return "string" == typeof n ? n.trim() : ""
    }

    function Ch({
        options: e,
        defaultEmail: t,
        defaultName: n,
        onFormClose: r,
        onSubmit: o,
        onSubmitSuccess: s,
        onSubmitError: i,
        showEmail: a,
        showName: c,
        screenshotInput: u
    }) {
        const {
            tags: l,
            addScreenshotButtonLabel: d,
            removeScreenshotButtonLabel: p,
            cancelButtonLabel: h,
            emailLabel: f,
            emailPlaceholder: m,
            isEmailRequired: g,
            isNameRequired: _,
            messageLabel: y,
            messagePlaceholder: v,
            nameLabel: b,
            namePlaceholder: S,
            submitButtonLabel: w,
            isRequiredLabel: k
        } = e, [E, x] = uh(null), [C, T] = uh(!1), I = u && u.input, [M, R] = uh(null), A = hh((e => {
            R(e), T(!1)
        }), []), O = hh((e => {
            const t = function(e, t) {
                const n = [];
                return t.isNameRequired && !e.name && n.push(t.nameLabel), t.isEmailRequired && !e.email && n.push(t.emailLabel), e.message || n.push(t.messageLabel), n
            }(e, {
                emailLabel: f,
                isEmailRequired: g,
                isNameRequired: _,
                messageLabel: y,
                nameLabel: b
            });
            return t.length > 0 ? x(`Please enter in the following required fields: ${t.join(", ")}`) : x(null), 0 === t.length
        }), [f, g, _, y, b]), D = hh((async e => {
            try {
                if (e.preventDefault(), !(e.target instanceof HTMLFormElement)) return;
                const t = new FormData(e.target),
                    n = await (u && C ? u.value() : void 0),
                    r = {
                        name: xh(t, "name"),
                        email: xh(t, "email"),
                        message: xh(t, "message"),
                        attachments: n ? [n] : void 0
                    };
                if (!O(r)) return;
                try {
                    await o({
                        name: r.name,
                        email: r.email,
                        message: r.message,
                        source: np,
                        tags: l
                    }, {
                        attachments: r.attachments
                    }), s(r)
                } catch (e) {
                    op && F.error(e), x(e), i(e)
                }
            } catch (e) {}
        }), [u && C, s, i]);
        return Cp("form", {
            class: "form",
            onSubmit: D
        }, I && C ? Cp(I, {
            onError: A
        }) : null, Cp("div", {
            class: "form__right",
            "data-sentry-feedback": !0
        }, Cp("div", {
            class: "form__top"
        }, E ? Cp("div", {
            class: "form__error-container"
        }, E) : null, c ? Cp("label", {
            for: "name",
            class: "form__label"
        }, Cp(Th, {
            label: b,
            isRequiredLabel: k,
            isRequired: _
        }), Cp("input", {
            class: "form__input",
            defaultValue: n,
            id: "name",
            name: "name",
            placeholder: S,
            required: _,
            type: "text"
        })) : Cp("input", {
            "aria-hidden": !0,
            value: n,
            name: "name",
            type: "hidden"
        }), a ? Cp("label", {
            for: "email",
            class: "form__label"
        }, Cp(Th, {
            label: f,
            isRequiredLabel: k,
            isRequired: g
        }), Cp("input", {
            class: "form__input",
            defaultValue: t,
            id: "email",
            name: "email",
            placeholder: m,
            required: g,
            type: "email"
        })) : Cp("input", {
            "aria-hidden": !0,
            value: t,
            name: "email",
            type: "hidden"
        }), Cp("label", {
            for: "message",
            class: "form__label"
        }, Cp(Th, {
            label: y,
            isRequiredLabel: k,
            isRequired: !0
        }), Cp("textarea", {
            autoFocus: !0,
            class: "form__input form__input--textarea",
            id: "message",
            name: "message",
            placeholder: v,
            required: !0,
            rows: 5
        })), I ? Cp("label", {
            for: "screenshot",
            class: "form__label"
        }, Cp("button", {
            class: "btn btn--default",
            type: "button",
            onClick: () => {
                R(null), T((e => !e))
            }
        }, C ? p : d), M ? Cp("div", {
            class: "form__error-container"
        }, M.message) : null) : null), Cp("div", {
            class: "btn-group"
        }, Cp("button", {
            class: "btn btn--primary",
            type: "submit"
        }, w), Cp("button", {
            class: "btn btn--default",
            type: "button",
            onClick: r
        }, h))))
    }

    function Th({
        label: e,
        isRequired: t,
        isRequiredLabel: n
    }) {
        return Cp("span", {
            class: "form__label__text"
        }, e, t && Cp("span", {
            class: "form__label__text--required"
        }, n))
    }
    const Ih = 16,
        Mh = 17,
        Rh = "http://www.w3.org/2000/svg";

    function Ah() {
        const e = e => Zd.document.createElementNS(Rh, e),
            t = ip(e("svg"), {
                width: `${Ih}`,
                height: `${Mh}`,
                viewBox: `0 0 ${Ih} ${Mh}`,
                fill: "inherit"
            }),
            n = ip(e("g"), {
                clipPath: "url(#clip0_57_156)"
            }),
            r = ip(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
            }),
            o = ip(e("path"), {
                d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
            });
        t.appendChild(n).append(o, r);
        const s = e("defs"),
            i = ip(e("clipPath"), {
                id: "clip0_57_156"
            }),
            a = ip(e("rect"), {
                width: `${Ih}`,
                height: `${Ih}`,
                fill: "white",
                transform: "translate(0 0.5)"
            });
        return i.appendChild(a), s.appendChild(i), t.appendChild(s).appendChild(i).appendChild(a), t
    }

    function Oh({
        open: e,
        onFormSubmitted: t,
        ...n
    }) {
        const r = n.options,
            o = ph((() => ({
                __html: Ah().outerHTML
            })), []),
            [s, i] = uh(null),
            a = hh((() => {
                s && (clearTimeout(s), i(null)), t()
            }), [s]),
            c = hh((e => {
                n.onSubmitSuccess(e), i(setTimeout((() => {
                    t(), i(null)
                }), 5e3))
            }), [t]);
        return Cp(Ip, null, s ? Cp("div", {
            class: "success__position",
            onClick: a
        }, Cp("div", {
            class: "success__content"
        }, r.successMessageText, Cp("span", {
            class: "success__icon",
            dangerouslySetInnerHTML: o
        }))) : Cp("dialog", {
            class: "dialog",
            onClick: r.onFormClose,
            open: e
        }, Cp("div", {
            class: "dialog__position"
        }, Cp("div", {
            class: "dialog__content",
            onClick: e => {
                e.stopPropagation()
            }
        }, Cp(Eh, {
            options: r
        }), Cp(Ch, { ...n,
            onSubmitSuccess: c
        })))))
    }
    const Dh = () => ({
        name: "FeedbackModal",
        setupOnce() {},
        createDialog: ({
            options: e,
            screenshotIntegration: t,
            sendFeedback: n,
            shadow: r
        }) => {
            const o = r,
                s = e.useSentryUser,
                i = function() {
                    const e = Ce().getUser(),
                        t = Te().getUser(),
                        n = Ie().getUser();
                    return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : n
                }(),
                a = Qd.createElement("div"),
                c = function(e) {
                    const t = Qd.createElement("style");
                    return t.textContent = "\n:host {\n  --dialog-inset: var(--inset);\n}\n\n\n.dialog {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: 0;\n  inset: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n\n  color: var(--dialog-color, var(--foreground));\n  fill: var(--dialog-color, var(--foreground));\n  line-height: 1.75em;\n\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  inset: 0;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog__position {\n  position: fixed;\n  z-index: var(--z-index);\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  display: flex;\n  max-height: calc(100vh - (2 * var(--page-margin)));\n}\n@media (max-width: 600px) {\n  .dialog__position {\n    inset: var(--page-margin);\n    padding: 0;\n  }\n}\n\n.dialog__position:has(.editor) {\n  inset: var(--page-margin);\n  padding: 0;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: var(--dialog-padding, 24px);\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  overflow: auto;\n\n  background: var(--dialog-background, var(--background));\n  border-radius: var(--dialog-border-radius, 20px);\n  border: var(--dialog-border, var(--border));\n  box-shadow: var(--dialog-box-shadow, var(--box-shadow));\n  transform: translate(0, 0) scale(1);\n  transition: transform 0.2s ease-in-out;\n}\n\n\n\n.dialog__header {\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  font-weight: var(--dialog-header-weight, 600);\n  margin: 0;\n}\n.dialog__title {\n  align-self: center;\n  width: var(--form-width, 272px);\n}\n\n@media (max-width: 600px) {\n  .dialog__title {\n    width: auto;\n  }\n}\n\n.dialog__position:has(.editor) .dialog__title {\n  width: auto;\n}\n\n\n.brand-link {\n  display: inline-flex;\n}\n.brand-link:focus-visible {\n  outline: var(--outline);\n}\n\n\n.form {\n  display: flex;\n  overflow: auto;\n  flex-direction: row;\n  gap: 16px;\n  flex: 1 0;\n}\n\n.form__right {\n  flex: 0 0 auto;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  width: var(--form-width, 100%);\n}\n\n.dialog__position:has(.editor) .form__right {\n  width: var(--form-width, 272px);\n}\n\n.form__top {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form__error-container {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background: transparent;\n  box-sizing: border-box;\n  border: var(--input-border, var(--border));\n  border-radius: var(--input-border-radius, 6px);\n  color: var(--input-color, inherit);\n  fill: var(--input-color, inherit);\n  font-size: var(--input-font-size, inherit);\n  font-weight: var(--input-font-weight, 500);\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  opacity: 0.65;\n  color: var(--input-placeholder-color, inherit);\n  filter: var(--interactive-filter);\n}\n\n.form__input:focus-visible {\n  outline: var(--input-focus-outline, var(--outline));\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.error {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--button-font-size, inherit);\n  font-weight: var(--button-font-weight, 600);\n  padding: var(--button-padding, 6px 16px);\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  color: var(--button-primary-color, var(--accent-foreground));\n  fill: var(--button-primary-color, var(--accent-foreground));\n  background: var(--button-primary-background, var(--accent-background));\n  border: var(--button-primary-border, var(--border));\n  border-radius: var(--button-primary-border-radius, 6px);\n  font-weight: var(--button-primary-font-weight, 500);\n}\n.btn--primary:hover {\n  color: var(--button-primary-hover-color, var(--accent-foreground));\n  fill: var(--button-primary-hover-color, var(--accent-foreground));\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n}\n.btn--primary:focus-visible {\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n  outline: var(--button-primary-focus-outline, var(--outline));\n}\n\n.btn--default {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-background, var(--background));\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  font-weight: var(--button-font-weight, 500);\n}\n.btn--default:hover {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n.btn--default:focus-visible {\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n  outline: var(--button-focus-outline, var(--outline));\n}\n\n\n.success__position {\n  position: fixed;\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  z-index: var(--z-index);\n}\n.success__content {\n  background: var(--success-background, var(--background));\n  border: var(--success-border, var(--border));\n  border-radius: var(--success-border-radius, 1.7em/50%);\n  box-shadow: var(--success-box-shadow, var(--box-shadow));\n  font-weight: var(--success-font-weight, 600);\n  color: var(--success-color);\n  fill: var(--success-color);\n  padding: 12px 24px;\n  line-height: 1.75em;\n\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success__icon {\n  display: flex;\n}\n\n", e && t.setAttribute("nonce", e), t
                }(e.styleNonce);
            let u = "";
            const l = {
                    get el() {
                        return a
                    },
                    appendToDom() {
                        o.contains(c) || o.contains(a) || (o.appendChild(c), o.appendChild(a))
                    },
                    removeFromDom() {
                        o.removeChild(a), o.removeChild(c), Qd.body.style.overflow = u
                    },
                    open() {
                        p(!0), e.onFormOpen && e.onFormOpen(), u = Qd.body.style.overflow, Qd.body.style.overflow = "hidden"
                    },
                    close() {
                        p(!1), Qd.body.style.overflow = u
                    }
                },
                d = t && t.createInput({
                    h: Cp,
                    hooks: Sh,
                    dialog: l,
                    options: e
                }),
                p = t => {
                    ! function(e, t, n) {
                        var r, o, s, i;
                        fp.__ && fp.__(e, t), o = (r = !1) ? null : t.__k, s = [], i = [], Hp(t, e = t.__k = Cp(Ip, null, [e]), o || bp, bp, void 0 !== t.ownerSVGElement, o ? null : t.firstChild ? hp.call(t.childNodes) : null, s, o ? o.__e : t.firstChild, r, i), e.__d = void 0, zp(s, e, i)
                    }(Cp(Oh, {
                        options: e,
                        screenshotInput: d,
                        showName: e.showName || e.isNameRequired,
                        showEmail: e.showEmail || e.isEmailRequired,
                        defaultName: s && i && i[s.name] || "",
                        defaultEmail: s && i && i[s.email] || "",
                        onFormClose: () => {
                            p(!1), e.onFormClose && e.onFormClose()
                        },
                        onSubmit: n,
                        onSubmitSuccess: t => {
                            p(!1), e.onSubmitSuccess && e.onSubmitSuccess(t)
                        },
                        onSubmitError: t => {
                            e.onSubmitError && e.onSubmitError(t)
                        },
                        onFormSubmitted: () => {
                            e.onFormSubmitted && e.onFormSubmitted()
                        },
                        open: t
                    }), a)
                };
            return l
        }
    });

    function Lh(e) {
        const t = Qd.createElement("style"),
            n = "#1A141F",
            r = "#302735";
        return t.textContent = `\n.editor {\n  padding: 10px;\n  padding-top: 65px;\n  padding-bottom: 65px;\n  flex-grow: 1;\n\n  background-color: ${n};\n  background-image: repeating-linear-gradient(\n      -145deg,\n      transparent,\n      transparent 8px,\n      ${n} 8px,\n      ${n} 11px\n    ),\n    repeating-linear-gradient(\n      -45deg,\n      transparent,\n      transparent 15px,\n      ${r} 15px,\n      ${r} 16px\n    );\n}\n\n.editor__canvas-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.editor__canvas-container canvas {\n  object-fit: contain;\n  position: relative;\n}\n\n.editor__crop-btn-group {\n  padding: 8px;\n  gap: 8px;\n  border-radius: var(--menu-border-radius, 6px);\n  background: var(--button-primary-background, var(--background));\n  width: 175px;\n  position: absolute;\n}\n\n.editor__crop-corner {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  background: none;\n  border: 3px solid #ffffff;\n}\n\n.editor__crop-corner--top-left {\n  cursor: nwse-resize;\n  border-right: none;\n  border-bottom: none;\n}\n.editor__crop-corner--top-right {\n  cursor: nesw-resize;\n  border-left: none;\n  border-bottom: none;\n}\n.editor__crop-corner--bottom-left {\n  cursor: nesw-resize;\n  border-right: none;\n  border-top: none;\n}\n.editor__crop-corner--bottom-right {\n  cursor: nwse-resize;\n  border-left: none;\n  border-top: none;\n}\n`, e && t.setAttribute("nonce", e), t
    }
    const Nh = 33,
        Ph = Zd.devicePixelRatio,
        $h = e => ({
            x: Math.min(e.startX, e.endX),
            y: Math.min(e.startY, e.endY),
            width: Math.abs(e.startX - e.endX),
            height: Math.abs(e.startY - e.endY)
        }),
        Fh = e => {
            const t = e.clientHeight,
                n = e.clientWidth,
                r = e.width / e.height;
            let o = t * r,
                s = t;
            o > n && (o = n, s = n / r);
            const i = (n - o) / 2,
                a = (t - s) / 2;
            return {
                startX: i,
                startY: a,
                endX: o + i,
                endY: s + a
            }
        };

    function Bh({
        h: e,
        hooks: t,
        imageBuffer: n,
        dialog: r,
        options: o
    }) {
        const s = function({
            hooks: e
        }) {
            return function({
                onBeforeScreenshot: t,
                onScreenshot: n,
                onAfterScreenshot: r,
                onError: o
            }) {
                e.useEffect((() => {
                    (async () => {
                        t();
                        const e = await ep.mediaDevices.getDisplayMedia({
                                video: {
                                    width: Zd.innerWidth * Zd.devicePixelRatio,
                                    height: Zd.innerHeight * Zd.devicePixelRatio
                                },
                                audio: !1,
                                monitorTypeSurfaces: "exclude",
                                preferCurrentTab: !0,
                                selfBrowserSurface: "include",
                                surfaceSwitching: "exclude"
                            }),
                            o = Qd.createElement("video");
                        await new Promise(((t, r) => {
                            o.srcObject = e, o.onloadedmetadata = () => {
                                n(o), e.getTracks().forEach((e => e.stop())), t()
                            }, o.play().catch(r)
                        })), r()
                    })().catch(o)
                }), [])
            }
        }({
            hooks: t
        });
        return function({
            onError: i
        }) {
            const a = t.useMemo((() => ({
                    __html: Lh(o.styleNonce).innerText
                })), []),
                c = function({
                    h: e
                }) {
                    return function({
                        top: t,
                        left: n,
                        corner: r,
                        onGrabButton: o
                    }) {
                        return e("button", {
                            class: `editor__crop-corner editor__crop-corner--${r} `,
                            style: {
                                top: t,
                                left: n
                            },
                            onMouseDown: e => {
                                e.preventDefault(), o(e, r)
                            },
                            onClick: e => {
                                e.preventDefault()
                            }
                        })
                    }
                }({
                    h: e
                }),
                u = t.useRef(null),
                l = t.useRef(null),
                d = t.useRef(null),
                [p, h] = t.useState({
                    startX: 0,
                    startY: 0,
                    endX: 0,
                    endY: 0
                }),
                [f, m] = t.useState(!1),
                [g, _] = t.useState(!1);

            function y() {
                const e = d.current,
                    t = $h(Fh(n));
                if (e) {
                    e.width = t.width * Ph, e.height = t.height * Ph, e.style.width = `${t.width}px`, e.style.height = `${t.height}px`;
                    const n = e.getContext("2d");
                    n && n.scale(Ph, Ph)
                }
                const r = l.current;
                r && (r.style.width = `${t.width}px`, r.style.height = `${t.height}px`), h({
                    startX: 0,
                    startY: 0,
                    endX: t.width,
                    endY: t.height
                })
            }

            function v(e, t) {
                m(!1), _(!0);
                const n = b(t),
                    r = () => {
                        Qd.removeEventListener("mousemove", n), Qd.removeEventListener("mouseup", r), m(!0), _(!1)
                    };
                Qd.addEventListener("mouseup", r), Qd.addEventListener("mousemove", n)
            }
            t.useEffect((() => {
                Zd.addEventListener("resize", y, !1)
            }), []), t.useEffect((() => {
                const e = d.current;
                if (!e) return;
                const t = e.getContext("2d");
                if (!t) return;
                const r = $h(Fh(n)),
                    o = $h(p);
                t.clearRect(0, 0, r.width, r.height), t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, r.width, r.height), t.clearRect(o.x, o.y, o.width, o.height), t.strokeStyle = "#ffffff", t.lineWidth = 3, t.strokeRect(o.x + 1, o.y + 1, o.width - 2, o.height - 2), t.strokeStyle = "#000000", t.lineWidth = 1, t.strokeRect(o.x + 3, o.y + 3, o.width - 6, o.height - 6)
            }), [p]);
            const b = t.useCallback((e => function(t) {
                    if (!d.current) return;
                    const n = d.current,
                        r = n.getBoundingClientRect(),
                        o = t.clientX - r.x,
                        s = t.clientY - r.y;
                    switch (e) {
                        case "top-left":
                            h((e => ({ ...e,
                                startX: Math.min(Math.max(0, o), e.endX - Nh),
                                startY: Math.min(Math.max(0, s), e.endY - Nh)
                            })));
                            break;
                        case "top-right":
                            h((e => ({ ...e,
                                endX: Math.max(Math.min(o, n.width / Ph), e.startX + Nh),
                                startY: Math.min(Math.max(0, s), e.endY - Nh)
                            })));
                            break;
                        case "bottom-left":
                            h((e => ({ ...e,
                                startX: Math.min(Math.max(0, o), e.endX - Nh),
                                endY: Math.max(Math.min(s, n.height / Ph), e.startY + Nh)
                            })));
                            break;
                        case "bottom-right":
                            h((e => ({ ...e,
                                endX: Math.max(Math.min(o, n.width / Ph), e.startX + Nh),
                                endY: Math.max(Math.min(s, n.height / Ph), e.startY + Nh)
                            })))
                    }
                }), []),
                S = t.useRef({
                    initialX: 0,
                    initialY: 0
                });
            return s({
                onBeforeScreenshot: t.useCallback((() => {
                    r.el.style.display = "none"
                }), []),
                onScreenshot: t.useCallback((e => {
                    const t = n.getContext("2d");
                    if (!t) throw new Error("Could not get canvas context");
                    n.width = e.videoWidth, n.height = e.videoHeight, n.style.width = "100%", n.style.height = "100%", t.drawImage(e, 0, 0)
                }), [n]),
                onAfterScreenshot: t.useCallback((() => {
                    r.el.style.display = "block";
                    const e = u.current;
                    e && e.appendChild(n), y()
                }), []),
                onError: t.useCallback((e => {
                    r.el.style.display = "block", i(e)
                }), [])
            }), e("div", {
                class: "editor"
            }, e("style", {
                nonce: o.styleNonce,
                dangerouslySetInnerHTML: a
            }), e("div", {
                class: "editor__canvas-container",
                ref: u
            }, e("div", {
                class: "editor__crop-container",
                style: {
                    position: "absolute",
                    zIndex: 1
                },
                ref: l
            }, e("canvas", {
                onMouseDown: function(e) {
                    if (g) return;
                    S.current = {
                        initialX: e.clientX,
                        initialY: e.clientY
                    };
                    const t = e => {
                            const t = d.current;
                            if (!t) return;
                            const n = e.clientX - S.current.initialX,
                                r = e.clientY - S.current.initialY;
                            h((o => {
                                const s = Math.max(0, Math.min(o.startX + n, t.width / Ph - (o.endX - o.startX))),
                                    i = Math.max(0, Math.min(o.startY + r, t.height / Ph - (o.endY - o.startY))),
                                    a = s + (o.endX - o.startX),
                                    c = i + (o.endY - o.startY);
                                return S.current.initialX = e.clientX, S.current.initialY = e.clientY, {
                                    startX: s,
                                    startY: i,
                                    endX: a,
                                    endY: c
                                }
                            }))
                        },
                        n = () => {
                            Qd.removeEventListener("mousemove", t), Qd.removeEventListener("mouseup", n)
                        };
                    Qd.addEventListener("mousemove", t), Qd.addEventListener("mouseup", n)
                },
                style: {
                    position: "absolute",
                    cursor: f ? "move" : "auto"
                },
                ref: d
            }), e(c, {
                left: p.startX - 3,
                top: p.startY - 3,
                onGrabButton: v,
                corner: "top-left"
            }), e(c, {
                left: p.endX - 30 + 3,
                top: p.startY - 3,
                onGrabButton: v,
                corner: "top-right"
            }), e(c, {
                left: p.startX - 3,
                top: p.endY - 30 + 3,
                onGrabButton: v,
                corner: "bottom-left"
            }), e(c, {
                left: p.endX - 30 + 3,
                top: p.endY - 30 + 3,
                onGrabButton: v,
                corner: "bottom-right"
            }), e("div", {
                style: {
                    left: Math.max(0, p.endX - 191),
                    top: Math.max(0, p.endY + 8),
                    display: f ? "flex" : "none"
                },
                class: "editor__crop-btn-group"
            }, e("button", {
                onClick: e => {
                    e.preventDefault(), d.current && h({
                        startX: 0,
                        startY: 0,
                        endX: d.current.width / Ph,
                        endY: d.current.height / Ph
                    }), m(!1)
                },
                class: "btn btn--default"
            }, o.cancelButtonLabel), e("button", {
                onClick: e => {
                    e.preventDefault(),
                        function() {
                            const e = Qd.createElement("canvas"),
                                t = $h(Fh(n)),
                                r = $h(p);
                            e.width = r.width * Ph, e.height = r.height * Ph;
                            const o = e.getContext("2d");
                            o && n && o.drawImage(n, r.x / t.width * n.width, r.y / t.height * n.height, r.width / t.width * n.width, r.height / t.height * n.height, 0, 0, e.width, e.height);
                            const s = n.getContext("2d");
                            s && (s.clearRect(0, 0, n.width, n.height), n.width = e.width, n.height = e.height, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, s.drawImage(e, 0, 0), y())
                        }(), m(!1)
                },
                class: "btn btn--primary"
            }, o.confirmButtonLabel)))))
        }
    }
    const Uh = () => ({
            name: "FeedbackScreenshot",
            setupOnce() {},
            createInput: ({
                h: e,
                hooks: t,
                dialog: n,
                options: r
            }) => {
                const o = Qd.createElement("canvas");
                return {
                    input: Bh({
                        h: e,
                        hooks: t,
                        imageBuffer: o,
                        dialog: n,
                        options: r
                    }),
                    value: async () => {
                        const e = await new Promise((e => {
                            o.toBlob(e, "image/png")
                        }));
                        if (e) return {
                            data: new Uint8Array(await e.arrayBuffer()),
                            filename: "screenshot.png",
                            contentType: "application/png"
                        }
                    }
                }
            }
        }),
        jh = dp({
            lazyLoadIntegration: ci
        }),
        Hh = dp({
            getModalIntegration: () => Dh,
            getScreenshotIntegration: () => Uh
        });

    function zh(e, t) {
        const n = T("globalMetricsAggregators", (() => new WeakMap)),
            r = n.get(e);
        if (r) return r;
        const o = new t(e);
        return e.on("flush", (() => o.flush())), e.on("close", (() => o.close())), n.set(e, o), o
    }

    function Wh(e, t, n, r, o = {}) {
        const s = o.client || Ae();
        if (!s) return;
        const i = Pt(),
            a = i ? Nt(i) : void 0,
            c = a && It(a).description,
            {
                unit: u,
                tags: l,
                timestamp: d
            } = o,
            {
                release: p,
                environment: h
            } = s.getOptions(),
            f = {};
        p && (f.release = p), h && (f.environment = h), c && (f.transaction = c), Pe && F.log(`Adding value of ${r} to ${t} metric ${n}`), zh(s, e).add(t, n, r, u, { ...f,
            ...l
        }, d)
    }

    function qh(e, t, n, r) {
        Wh(e, "d", t, Vh(n), r)
    }
    const Yh = {
        increment: function(e, t, n = 1, r) {
            Wh(e, "c", t, Vh(n), r)
        },
        distribution: qh,
        set: function(e, t, n, r) {
            Wh(e, "s", t, n, r)
        },
        gauge: function(e, t, n, r) {
            Wh(e, "g", t, Vh(n), r)
        },
        timing: function(e, t, n, r = "second", o) {
            if ("function" == typeof n) {
                const r = ee();
                return mr({
                    op: "metrics.timing",
                    name: t,
                    startTime: r,
                    onlyIfParent: !0
                }, (s => Bn((() => n()), (() => {}), (() => {
                    const n = ee();
                    qh(e, t, n - r, { ...o,
                        unit: "second"
                    }), s.end(n)
                }))))
            }
            qh(e, t, n, { ...o,
                unit: r
            })
        },
        getMetricsAggregatorForClient: zh
    };

    function Vh(e) {
        return "string" == typeof e ? parseInt(e) : e
    }

    function Gh(e) {
        return e.replace(/[^\w\-./]+/gi, "")
    }
    const Xh = [
        ["\n", "\\n"],
        ["\r", "\\r"],
        ["\t", "\\t"],
        ["\\", "\\\\"],
        ["|", "\\u{7c}"],
        [",", "\\u{2c}"]
    ];

    function Jh(e) {
        return [...e].reduce(((e, t) => e + function(e) {
            for (const [t, n] of Xh)
                if (e === t) return n;
            return e
        }(t)), "")
    }
    const Kh = {
        c: class {
            constructor(e) {
                this._value = e
            }
            get weight() {
                return 1
            }
            add(e) {
                this._value += e
            }
            toString() {
                return `${this._value}`
            }
        },
        g: class {
            constructor(e) {
                this._last = e, this._min = e, this._max = e, this._sum = e, this._count = 1
            }
            get weight() {
                return 5
            }
            add(e) {
                this._last = e, e < this._min && (this._min = e), e > this._max && (this._max = e), this._sum += e, this._count++
            }
            toString() {
                return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
            }
        },
        d: class {
            constructor(e) {
                this._value = [e]
            }
            get weight() {
                return this._value.length
            }
            add(e) {
                this._value.push(e)
            }
            toString() {
                return this._value.join(":")
            }
        },
        s: class {
            constructor(e) {
                this.first = e, this._value = new Set([e])
            }
            get weight() {
                return this._value.size
            }
            add(e) {
                this._value.add(e)
            }
            toString() {
                return Array.from(this._value).map((e => "string" == typeof e ? function(e) {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
                    return t >>> 0
                }(e) : e)).join(":")
            }
        }
    };class Zh {
        constructor(e) {
            this._client = e, this._buckets = new Map, this._interval = setInterval((() => this.flush()), 5e3)
        }
        add(e, t, n, r = "none", o = {}, s = ee()) {
            const i = Math.floor(s),
                a = t.replace(/[^\w\-.]+/gi, "_"),
                c = function(e) {
                    const t = {};
                    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[Gh(n)] = Jh(String(e[n])));
                    return t
                }(o),
                u = function(e) {
                    return e.replace(/[^\w]+/gi, "_")
                }(r),
                l = function(e, t, n, r) {
                    const o = Object.entries(J(r)).sort(((e, t) => e[0].localeCompare(t[0])));
                    return `${e}${t}${n}${o}`
                }(e, a, u, c);
            let d = this._buckets.get(l);
            const p = d && "s" === e ? d.metric.weight : 0;
            d ? (d.metric.add(n), d.timestamp < i && (d.timestamp = i)) : (d = {
                    metric: new Kh[e](n),
                    timestamp: i,
                    metricType: e,
                    name: a,
                    unit: u,
                    tags: c
                }, this._buckets.set(l, d)),
                function(e, t, n, r, o, s) {
                    const i = Pt();
                    i && function(e, t, n, r, o, s, i) {
                        const a = e[dt] || (e[dt] = new Map),
                            c = `${t}:${n}@${o}`,
                            u = a.get(i);
                        if (u) {
                            const [, e] = u;
                            a.set(i, [c, {
                                min: Math.min(e.min, r),
                                max: Math.max(e.max, r),
                                count: e.count += 1,
                                sum: e.sum += r,
                                tags: e.tags
                            }])
                        } else a.set(i, [c, {
                            min: r,
                            max: r,
                            count: 1,
                            sum: r,
                            tags: s
                        }])
                    }(i, e, t, n, r, o, s)
                }(e, a, "string" == typeof n ? d.metric.weight - p : n, u, o, l)
        }
        flush() {
            if (0 === this._buckets.size) return;
            const e = Array.from(this._buckets.values());
            (function(e, t) {
                F.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
                const n = function(e, t, n, r) {
                    const o = {
                        sent_at: (new Date).toISOString()
                    };
                    n && n.sdk && (o.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && t && (o.dsn = zn(t));
                    const s = function(e) {
                        const t = function(e) {
                            let t = "";
                            for (const n of e) {
                                const e = Object.entries(n.tags),
                                    r = e.length > 0 ? `|#${e.map((([e,t])=>`${e}:${t}`)).join(",")}` : "";
                                t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
                            }
                            return t
                        }(e);
                        return [{
                            type: "statsd",
                            length: t.length
                        }, t]
                    }(e);
                    return Vn(o, [s])
                }(t, e.getDsn(), e.getSdkMetadata(), e.getOptions().tunnel);
                e.sendEnvelope(n)
            })(this._client, e), this._buckets.clear()
        }
        close() {
            clearInterval(this._interval), this.flush()
        }
    }
    const Qh = {
        increment: function(e, t = 1, n) {
            Yh.increment(Zh, e, t, n)
        },
        distribution: function(e, t, n) {
            Yh.distribution(Zh, e, t, n)
        },
        set: function(e, t, n) {
            Yh.set(Zh, e, t, n)
        },
        gauge: function(e, t, n) {
            Yh.gauge(Zh, e, t, n)
        },
        timing: function(e, t, n = "second", r) {
            return Yh.timing(Zh, e, t, n, r)
        }
    };

    function ef(e) {
        return "number" == typeof e && isFinite(e)
    }

    function tf(e, t, n, { ...r
    }) {
        const o = It(e).start_timestamp;
        return o && o > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), yr(e, (() => {
            const e = gr({
                startTime: t,
                ...r
            });
            return e && e.end(n), e
        }))
    }

    function nf(e) {
        const t = Ae();
        if (!t) return;
        const {
            name: n,
            transaction: r,
            attributes: o,
            startTime: s
        } = e, {
            release: i,
            environment: a
        } = t.getOptions(), c = t.getIntegrationByName("Replay"), u = c && c.getReplayId(), l = Ce(), d = l.getUser(), p = void 0 !== d ? d.email || d.id || d.ip_address : void 0;
        let h;
        try {
            h = l.getScopeData().contexts.profile.profile_id
        } catch (e) {}
        return gr({
            name: n,
            attributes: {
                release: i,
                environment: a,
                user: p || void 0,
                profile_id: h || void 0,
                replay_id: u || void 0,
                transaction: r,
                "user_agent.original": Vo.navigator && Vo.navigator.userAgent,
                ...o
            },
            startTime: s,
            experimental: {
                standalone: !0
            }
        })
    }

    function rf() {
        return Vo && Vo.addEventListener && Vo.performance
    }

    function of (e) {
        return e / 1e3
    }

    function sf(e) {
        let t = "unknown",
            n = "unknown",
            r = "";
        for (const o of e) {
            if ("/" === o) {
                [t, n] = e.split("/");
                break
            }
            if (!isNaN(Number(o))) {
                t = "h" === r ? "http" : r, n = e.split(r)[1];
                break
            }
            r += o
        }
        return r === e && (t = r), {
            name: t,
            version: n
        }
    }

    function af(e = {}) {
        const t = Ae();
        if (! function() {
                const e = Ae();
                return !!e && !1 !== e.getOptions().enabled && !!e.getTransport()
            }() || !t) return {};
        const n = xe(ye());
        if (n.getTraceData) return n.getTraceData(e);
        const r = Ce(),
            o = e.span || Pt(),
            s = o ? xt(o) : function(e) {
                const {
                    traceId: t,
                    sampled: n,
                    spanId: r
                } = e.getPropagationContext();
                return bt(t, r, n)
            }(r),
            i = ct(o ? zt(o) : Ht(t, r));
        return yt.test(s) ? {
            "sentry-trace": s,
            baggage: i
        } : (F.warn("Invalid sentry-trace data. Cannot generate trace data"), {})
    }

    function cf(e, t, n, r, o = "auto.http.browser") {
        if (!e.fetchData) return;
        const s = lt() && t(e.fetchData.url);
        if (e.endTimestamp && s) {
            const t = e.fetchData.__span;
            if (!t) return;
            const n = r[t];
            return void(n && (function(e, t) {
                if (t.response) {
                    _t(e, t.response.status);
                    const n = t.response && t.response.headers && t.response.headers.get("content-length");
                    if (n) {
                        const t = parseInt(n);
                        t > 0 && e.setAttribute("http.response_content_length", t)
                    }
                } else t.error && e.setStatus({
                    code: mt,
                    message: "internal_error"
                });
                e.end()
            }(n, e), delete r[t]))
        }
        const {
            method: c,
            url: u
        } = e.fetchData, l = function(e) {
            try {
                return new URL(e).href
            } catch (e) {
                return
            }
        }(u), d = l ? Ps(l).host : void 0, p = !!Pt(), h = s && p ? gr({
            name: `${c} ${u}`,
            attributes: {
                url: u,
                type: "fetch",
                "http.method": c,
                "http.url": l,
                "server.address": d,
                [a]: o,
                [i]: "http.client"
            }
        }) : new jn;
        if (e.fetchData.__span = h.spanContext().spanId, r[h.spanContext().spanId] = h, n(e.fetchData.url)) {
            const t = e.args[0],
                n = e.args[1] || {},
                r = function(e, t, n) {
                    const r = af({
                            span: n
                        }),
                        o = r["sentry-trace"],
                        s = r.baggage;
                    if (!o) return;
                    const i = t.headers || (function(e) {
                        return "undefined" != typeof Request && E(e, Request)
                    }(e) ? e.headers : void 0);
                    if (i) {
                        if (function(e) {
                                return "undefined" != typeof Headers && E(e, Headers)
                            }(i)) {
                            const e = new Headers(i);
                            if (e.set("sentry-trace", o), s) {
                                const t = e.get("baggage");
                                if (t) {
                                    const n = uf(t);
                                    e.set("baggage", n ? `${n},${s}` : s)
                                } else e.set("baggage", s)
                            }
                            return e
                        }
                        if (Array.isArray(i)) {
                            const e = [...i.filter((e => !(Array.isArray(e) && "sentry-trace" === e[0]))).map((e => {
                                if (Array.isArray(e) && "baggage" === e[0] && "string" == typeof e[1]) {
                                    const [t, n, ...r] = e;
                                    return [t, uf(n), ...r]
                                }
                                return e
                            })), ["sentry-trace", o]];
                            return s && e.push(["baggage", s]), e
                        } {
                            const e = "baggage" in i ? i.baggage : void 0;
                            let t = [];
                            return Array.isArray(e) ? t = e.map((e => "string" == typeof e ? uf(e) : e)).filter((e => "" === e)) : e && t.push(uf(e)), s && t.push(s), { ...i,
                                "sentry-trace": o,
                                baggage: t.length > 0 ? t.join(",") : void 0
                            }
                        }
                    }
                    return { ...r
                    }
                }(t, n, lt() && p ? h : void 0);
            r && (e.args[1] = n, n.headers = r)
        }
        return h
    }

    function uf(e) {
        return e.split(",").filter((e => !e.split("=")[0].startsWith(ot))).join(",")
    }
    const lf = new WeakMap,
        df = new Map,
        pf = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            trackFetchStreamPerformance: !1
        };

    function hf(e, t) {
        const {
            traceFetch: n,
            traceXHR: r,
            trackFetchStreamPerformance: o,
            shouldCreateSpanForRequest: s,
            enableHTTPTimings: c,
            tracePropagationTargets: u
        } = {
            traceFetch: pf.traceFetch,
            traceXHR: pf.traceXHR,
            trackFetchStreamPerformance: pf.trackFetchStreamPerformance,
            ...t
        }, l = "function" == typeof s ? s : e => !0, d = e => function(e, t) {
            const n = yo.location && yo.location.href;
            if (n) {
                let r, o;
                try {
                    r = new URL(e, n), o = new URL(n).origin
                } catch (e) {
                    return !1
                }
                const s = r.origin === o;
                return t ? H(r.toString(), t) || s && H(r.pathname, t) : s
            } {
                const n = !!e.match(/^\/(?!\/)/);
                return t ? H(e, t) : n
            }
        }(e, u), p = {};
        n && (e.addEventProcessor((e => ("transaction" === e.type && e.spans && e.spans.forEach((e => {
            if ("http.client" === e.op) {
                const t = df.get(e.span_id);
                t && (e.timestamp = t / 1e3, df.delete(e.span_id))
            }
        })), e))), o && function(e) {
            const t = "fetch-body-resolved";
            Sn(t, (e => {
                if (e.response) {
                    const t = lf.get(e.response);
                    t && e.endTimestamp && df.set(t, e.endTimestamp)
                }
            })), wn(t, (() => As(Os)))
        }(), Rs((e => {
            const t = cf(e, l, d, p);
            if (e.response && e.fetchData.__span && lf.set(e.response, e.fetchData.__span), t) {
                const n = gf(e.fetchData.url),
                    r = n ? Ps(n).host : void 0;
                t.setAttributes({
                    "http.url": n,
                    "server.address": r
                })
            }
            c && t && ff(t)
        }))), r && Es((e => {
            const t = function(e, t, n, r) {
                const o = e.xhr,
                    s = o && o[ks];
                if (!o || o.__sentry_own_request__ || !s) return;
                const c = lt() && t(s.url);
                if (e.endTimestamp && c) {
                    const e = o.__sentry_xhr_span_id__;
                    if (!e) return;
                    const t = r[e];
                    return void(t && void 0 !== s.status_code && (_t(t, s.status_code), t.end(), delete r[e]))
                }
                const u = gf(s.url),
                    l = u ? Ps(u).host : void 0,
                    d = !!Pt(),
                    p = c && d ? gr({
                        name: `${s.method} ${s.url}`,
                        attributes: {
                            type: "xhr",
                            "http.method": s.method,
                            "http.url": u,
                            url: s.url,
                            "server.address": l,
                            [a]: "auto.http.browser",
                            [i]: "http.client"
                        }
                    }) : new jn;
                return o.__sentry_xhr_span_id__ = p.spanContext().spanId, r[o.__sentry_xhr_span_id__] = p, n(s.url) && function(e, t) {
                    const {
                        "sentry-trace": n,
                        baggage: r
                    } = af({
                        span: t
                    });
                    n && function(e, t, n) {
                        try {
                            e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader("baggage", n)
                        } catch (e) {}
                    }(e, n, r)
                }(o, lt() && d ? p : void 0), p
            }(e, l, d, p);
            c && t && ff(t)
        }))
    }

    function ff(e) {
        const {
            url: t
        } = It(e).data || {};
        if (!t || "string" != typeof t) return;
        const n = va("resource", (({
            entries: r
        }) => {
            r.forEach((r => {
                (function(e) {
                    return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
                })(r) && r.name.endsWith(t) && (function(e) {
                    const {
                        name: t,
                        version: n
                    } = sf(e.nextHopProtocol), r = [];
                    return r.push(["network.protocol.version", n], ["network.protocol.name", t]), ne ? [...r, ["http.request.redirect_start", mf(e.redirectStart)],
                        ["http.request.fetch_start", mf(e.fetchStart)],
                        ["http.request.domain_lookup_start", mf(e.domainLookupStart)],
                        ["http.request.domain_lookup_end", mf(e.domainLookupEnd)],
                        ["http.request.connect_start", mf(e.connectStart)],
                        ["http.request.secure_connection_start", mf(e.secureConnectionStart)],
                        ["http.request.connection_end", mf(e.connectEnd)],
                        ["http.request.request_start", mf(e.requestStart)],
                        ["http.request.response_start", mf(e.responseStart)],
                        ["http.request.response_end", mf(e.responseEnd)]
                    ] : r
                }(r).forEach((t => e.setAttribute(...t))), setTimeout(n))
            }))
        }))
    }

    function mf(e = 0) {
        return ((ne || performance.timeOrigin) + e) / 1e3
    }

    function gf(e) {
        try {
            return new URL(e, yo.location.origin).href
        } catch (e) {
            return
        }
    }
    const _f = 2147483647;
    let yf, vf, bf = 0,
        Sf = {};

    function wf({
        recordClsStandaloneSpans: e
    }) {
        const t = rf();
        if (t && ne) {
            t.mark && Vo.performance.mark("sentry-tracing-init");
            const n = _a((({
                    metric: e
                }) => {
                    const t = e.entries[e.entries.length - 1];
                    if (!t) return;
                    const n = of (ne),
                        r = of (t.startTime);
                    Sf.fid = {
                        value: e.value,
                        unit: "millisecond"
                    }, Sf["mark.fid"] = {
                        value: n + r,
                        unit: "second"
                    }
                })),
                r = ga((({
                    metric: e
                }) => {
                    const t = e.entries[e.entries.length - 1];
                    t && (Sf.lcp = {
                        value: e.value,
                        unit: "millisecond"
                    }, yf = t)
                }), !0),
                o = Ca("ttfb", (({
                    metric: e
                }) => {
                    e.entries[e.entries.length - 1] && (Sf.ttfb = {
                        value: e.value,
                        unit: "millisecond"
                    })
                }), Ea, ha),
                s = e ? function() {
                    let e, t, n = 0;
                    if (! function() {
                            try {
                                return PerformanceObserver.supportedEntryTypes.includes("layout-shift")
                            } catch (e) {
                                return !1
                            }
                        }()) return;
                    let r = !1;

                    function o() {
                        r || (r = !0, t && function(e, t, n) {
                            Yo && F.log(`Sending CLS span (${e})`);
                            const r = of ((ne || 0) + (t && t.startTime || 0)),
                                o = Ce().getScopeData().transactionName,
                                s = nf({
                                    name: t ? R(t.sources[0] && t.sources[0].node) : "Layout shift",
                                    transaction: o,
                                    attributes: J({
                                        [a]: "auto.http.browser.cls",
                                        [i]: "ui.webvital.cls",
                                        [p]: t && t.duration || 0,
                                        "sentry.pageload.span_id": n
                                    }),
                                    startTime: r
                                });
                            s && (s.addEvent("cls", {
                                [u]: "",
                                [l]: e
                            }), s.end(r))
                        }(n, e, t), s())
                    }
                    const s = ma((({
                        metric: t
                    }) => {
                        const r = t.entries[t.entries.length - 1];
                        r && (n = t.value, e = r)
                    }), !0);
                    Ri((() => {
                        o()
                    })), setTimeout((() => {
                        const e = Ae();
                        if (!e) return;
                        const n = e.on("startNavigationSpan", (() => {
                                o(), n && n()
                            })),
                            r = Pt(),
                            s = r && Nt(r),
                            i = s && It(s);
                        i && "pageload" === i.op && (t = s.spanContext().spanId)
                    }), 0)
                }() : ma((({
                    metric: e
                }) => {
                    const t = e.entries[e.entries.length - 1];
                    t && (Sf.cls = {
                        value: e.value,
                        unit: ""
                    }, vf = t)
                }), !0);
            return () => {
                n(), r(), o(), s && s()
            }
        }
        return () => {}
    }

    function kf(e, t, n, r, o = n) {
        const s = function(e) {
                return "secureConnection" === e ? "connectEnd" : "fetch" === e ? "domainLookupStart" : `${e}End`
            }(n),
            i = t[s],
            c = t[`${n}Start`];
        c && i && tf(e, r + of (c), r + of (i), {
            op: `browser.${o}`,
            name: t.name,
            attributes: {
                [a]: "auto.ui.browser.metrics"
            }
        })
    }

    function Ef(e, t, n, r) {
        const o = t[n];
        null != o && o < _f && (e[r] = o)
    }
    const xf = [],
        Cf = new Map;
    const Tf = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        },
        If = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            childSpanTimeout: 15e3
        };

    function Mf(e, t = {}) {
        const n = new Map;
        let r, o = !1,
            s = "externalFinish",
            i = !t.disableAutoFinish;
        const a = [],
            {
                idleTimeout: u = If.idleTimeout,
                finalTimeout: l = If.finalTimeout,
                childSpanTimeout: d = If.childSpanTimeout,
                beforeSpanEnd: p
            } = t,
            h = Ae();
        if (!h || !lt()) return new jn;
        const f = Ce(),
            m = Pt(),
            g = function(e) {
                const t = gr(e);
                return fe(Ce(), t), Pe && F.log("[Tracing] Started span is an idle span"), t
            }(e);

        function _() {
            r && (clearTimeout(r), r = void 0)
        }

        function y(e) {
            _(), r = setTimeout((() => {
                !o && 0 === n.size && i && (s = "idleTimeout", g.end(e))
            }), u)
        }

        function v(e) {
            r = setTimeout((() => {
                !o && i && (s = "heartbeatFailed", g.end(e))
            }), d)
        }

        function b(e) {
            o = !0, n.clear(), a.forEach((e => e())), fe(f, m);
            const t = It(g),
                {
                    start_timestamp: r
                } = t;
            if (!r) return;
            (t.data || {})[c] || g.setAttribute(c, s), F.log(`[Tracing] Idle span "${t.op}" finished`);
            const i = Lt(g).filter((e => e !== g));
            let d = 0;
            i.forEach((t => {
                t.isRecording() && (t.setStatus({
                    code: mt,
                    message: "cancelled"
                }), t.end(e), Pe && F.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                const n = It(t),
                    {
                        timestamp: r = 0,
                        start_timestamp: o = 0
                    } = n,
                    s = o <= e,
                    i = r - o <= (l + u) / 1e3;
                if (Pe) {
                    const e = JSON.stringify(t, void 0, 2);
                    s ? i || F.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : F.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                }
                i && s || (function(e, t) {
                    e[At] && e[At].delete(t)
                }(g, t), d++)
            })), d > 0 && g.setAttribute("sentry.idle_span_discarded_spans", d)
        }
        return g.end = new Proxy(g.end, {
            apply(e, t, n) {
                p && p(g);
                const [r, ...o] = n, s = Ct(r || ee()), i = Lt(g).filter((e => e !== g));
                if (!i.length) return b(s), Reflect.apply(e, t, [s, ...o]);
                const a = i.map((e => It(e).timestamp)).filter((e => !!e)),
                    c = a.length ? Math.max(...a) : void 0,
                    u = It(g).start_timestamp,
                    d = Math.min(u ? u + l / 1e3 : 1 / 0, Math.max(u || -1 / 0, Math.min(s, c || 1 / 0)));
                return b(d), Reflect.apply(e, t, [d, ...o])
            }
        }), a.push(h.on("spanStart", (e => {
            var t;
            o || e === g || It(e).timestamp || Lt(g).includes(e) && (t = e.spanContext().spanId, _(), n.set(t, !0), v(ee() + d / 1e3))
        }))), a.push(h.on("spanEnd", (e => {
            var t;
            o || (t = e.spanContext().spanId, n.has(t) && n.delete(t), 0 === n.size && y(ee() + u / 1e3))
        }))), a.push(h.on("idleSpanEnableAutoFinish", (e => {
            e === g && (i = !0, y(), n.size && v())
        }))), t.disableAutoFinish || y(), setTimeout((() => {
            o || (g.setStatus({
                code: mt,
                message: "deadline_exceeded"
            }), s = "finalTimeout", g.end())
        }), l), g
    }
    const Rf = { ...If,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableLongAnimationFrame: !0,
            enableInp: !0,
            _experiments: {},
            ...pf
        },
        Af = (e = {}) => {
            An();
            const {
                enableInp: t,
                enableLongTask: n,
                enableLongAnimationFrame: r,
                _experiments: {
                    enableInteractions: s,
                    enableStandaloneClsSpans: d
                },
                beforeStartSpan: h,
                idleTimeout: f,
                finalTimeout: m,
                childSpanTimeout: g,
                markBackgroundSpan: _,
                traceFetch: y,
                traceXHR: v,
                trackFetchStreamPerformance: b,
                shouldCreateSpanForRequest: S,
                enableHTTPTimings: w,
                instrumentPageLoad: k,
                instrumentNavigation: E
            } = { ...Rf,
                ...e
            }, x = wf({
                recordClsStandaloneSpans: d || !1
            });
            t && function() {
                if (rf() && ne) {
                    const e = ya((({
                        metric: e
                    }) => {
                        if (null == e.value) return;
                        const t = e.entries.find((t => t.duration === e.value && Tf[t.name]));
                        if (!t) return;
                        const {
                            interactionId: n
                        } = t, r = Tf[t.name], o = of (ne + t.startTime), s = of (e.value), c = Pt(), d = c ? Nt(c) : void 0, h = (null != n ? Cf.get(n) : void 0) || d, f = h ? It(h).description : Ce().getScopeData().transactionName, m = nf({
                            name: R(t.target),
                            transaction: f,
                            attributes: J({
                                [a]: "auto.http.browser.inp",
                                [i]: `ui.interaction.${r}`,
                                [p]: t.duration
                            }),
                            startTime: o
                        });
                        m && (m.addEvent("inp", {
                            [u]: "millisecond",
                            [l]: e.value
                        }), m.end(o + s))
                    }));
                    return () => {
                        e()
                    }
                }
            }(), r && C.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? new PerformanceObserver((e => {
                const t = Pt();
                if (t)
                    for (const n of e.getEntries()) {
                        if (!n.scripts[0]) continue;
                        const e = of (ne + n.startTime),
                            {
                                start_timestamp: r,
                                op: o
                            } = It(t);
                        if ("navigation" === o && r && e < r) continue;
                        const s = of (n.duration),
                            i = {
                                [a]: "auto.ui.browser.metrics"
                            },
                            c = n.scripts[0],
                            {
                                invoker: u,
                                invokerType: l,
                                sourceURL: d,
                                sourceFunctionName: p,
                                sourceCharPosition: h
                            } = c;
                        i["browser.script.invoker"] = u, i["browser.script.invoker_type"] = l, d && (i["code.filepath"] = d), p && (i["code.function"] = p), -1 !== h && (i["browser.script.source_char_position"] = h), tf(t, e, e + s, {
                            name: "Main UI thread blocked",
                            op: "ui.long-animation-frame",
                            attributes: i
                        })
                    }
            })).observe({
                type: "long-animation-frame",
                buffered: !0
            }) : n && va("longtask", (({
                entries: e
            }) => {
                const t = Pt();
                if (!t) return;
                const {
                    op: n,
                    start_timestamp: r
                } = It(t);
                for (const o of e) {
                    const e = of (ne + o.startTime),
                        s = of (o.duration);
                    "navigation" === n && r && e < r || tf(t, e, e + s, {
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        attributes: {
                            [a]: "auto.ui.browser.metrics"
                        }
                    })
                }
            })), s && va("event", (({
                entries: e
            }) => {
                const t = Pt();
                if (t)
                    for (const n of e)
                        if ("click" === n.name) {
                            const e = of (ne + n.startTime),
                                r = of (n.duration),
                                o = {
                                    name: R(n.target),
                                    op: `ui.interaction.${n.name}`,
                                    startTime: e,
                                    attributes: {
                                        [a]: "auto.ui.browser.metrics"
                                    }
                                },
                                s = D(n.target);
                            s && (o.attributes["ui.component_name"] = s), tf(t, e, e + r, o)
                        }
            }));
            const T = {
                name: void 0,
                source: void 0
            };

            function I(e, t) {
                const n = "pageload" === t.op,
                    r = h ? h(t) : t,
                    s = r.attributes || {};
                t.name !== r.name && (s[o] = "custom", r.attributes = s), T.name = r.name, T.source = s[o];
                const i = Mf(r, {
                    idleTimeout: f,
                    finalTimeout: m,
                    childSpanTimeout: g,
                    disableAutoFinish: n,
                    beforeSpanEnd: e => {
                        x(),
                            function(e, t) {
                                const n = rf();
                                if (!n || !n.getEntries || !ne) return;
                                const r = of (ne),
                                    o = n.getEntries(),
                                    {
                                        op: s,
                                        start_timestamp: i
                                    } = It(e);
                                if (o.slice(bf).forEach((t => {
                                        const n = of (t.startTime),
                                            o = of (Math.max(0, t.duration));
                                        if (!("navigation" === s && i && r + n < i)) switch (t.entryType) {
                                            case "navigation":
                                                ! function(e, t, n) {
                                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                                            kf(e, t, r, n)
                                                        })), kf(e, t, "secureConnection", n, "TLS/SSL"), kf(e, t, "fetch", n, "cache"), kf(e, t, "domainLookup", n, "DNS"),
                                                        function(e, t, n) {
                                                            const r = n + of (t.requestStart),
                                                                o = n + of (t.responseEnd),
                                                                s = n + of (t.responseStart);
                                                            t.responseEnd && (tf(e, r, o, {
                                                                op: "browser.request",
                                                                name: t.name,
                                                                attributes: {
                                                                    [a]: "auto.ui.browser.metrics"
                                                                }
                                                            }), tf(e, s, o, {
                                                                op: "browser.response",
                                                                name: t.name,
                                                                attributes: {
                                                                    [a]: "auto.ui.browser.metrics"
                                                                }
                                                            }))
                                                        }(e, t, n)
                                                }(e, t, r);
                                                break;
                                            case "mark":
                                            case "paint":
                                            case "measure":
                                                {! function(e, t, n, r, o) {
                                                        const s = Ci(!1),
                                                            i = of (s ? s.requestStart : 0),
                                                            c = o + Math.max(n, i),
                                                            u = o + n,
                                                            l = u + r,
                                                            d = {
                                                                [a]: "auto.resource.browser.metrics"
                                                            };
                                                        c !== u && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = c), tf(e, c, l, {
                                                            name: t.name,
                                                            op: t.entryType,
                                                            attributes: d
                                                        })
                                                    }(e, t, n, o, r);
                                                    const s = Ni(),
                                                        i = t.startTime < s.firstHiddenTime;
                                                    "first-paint" === t.name && i && (Sf.fp = {
                                                        value: t.startTime,
                                                        unit: "millisecond"
                                                    }),
                                                    "first-contentful-paint" === t.name && i && (Sf.fcp = {
                                                        value: t.startTime,
                                                        unit: "millisecond"
                                                    });
                                                    break
                                                }
                                            case "resource":
                                                ! function(e, t, n, r, o, s) {
                                                    if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                                    const i = Ps(n),
                                                        c = {
                                                            [a]: "auto.resource.browser.metrics"
                                                        };
                                                    Ef(c, t, "transferSize", "http.response_transfer_size"), Ef(c, t, "encodedBodySize", "http.response_content_length"), Ef(c, t, "decodedBodySize", "http.decoded_response_content_length");
                                                    const u = t.deliveryType;
                                                    null != u && (c["http.response_delivery_type"] = u);
                                                    const l = t.renderBlockingStatus;
                                                    l && (c["resource.render_blocking_status"] = l), i.protocol && (c["url.scheme"] = i.protocol.split(":").pop()), i.host && (c["server.address"] = i.host), c["url.same_origin"] = n.includes(Vo.location.origin);
                                                    const {
                                                        name: d,
                                                        version: p
                                                    } = sf(t.nextHopProtocol);
                                                    c["network.protocol.name"] = d, c["network.protocol.version"] = p;
                                                    const h = s + r;
                                                    tf(e, h, h + o, {
                                                        name: n.replace(Vo.location.origin, ""),
                                                        op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                                        attributes: c
                                                    })
                                                }(e, t, t.name, n, o, r)
                                        }
                                    })), bf = Math.max(o.length - 1, 0), function(e) {
                                        const t = Vo.navigator;
                                        if (!t) return;
                                        const n = t.connection;
                                        n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), ef(n.rtt) && (Sf["connection.rtt"] = {
                                            value: n.rtt,
                                            unit: "millisecond"
                                        })), ef(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`), ef(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                                    }(e), "pageload" === s) {
                                    ! function(e) {
                                        const t = Ci(!1);
                                        if (!t) return;
                                        const {
                                            responseStart: n,
                                            requestStart: r
                                        } = t;
                                        r <= n && (e["ttfb.requestTime"] = {
                                            value: n - r,
                                            unit: "millisecond"
                                        })
                                    }(Sf);
                                    const n = Sf["mark.fid"];
                                    n && Sf.fid && (tf(e, n.value, n.value + of (Sf.fid.value), {
                                            name: "first input delay",
                                            op: "ui.action",
                                            attributes: {
                                                [a]: "auto.ui.browser.metrics"
                                            }
                                        }), delete Sf["mark.fid"]), "fcp" in Sf && t.recordClsOnPageloadSpan || delete Sf.cls, Object.entries(Sf).forEach((([e, t]) => {
                                            sr(e, t.value, t.unit)
                                        })), e.setAttribute("performance.timeOrigin", r), e.setAttribute("performance.activationStart", Ti()),
                                        function(e) {
                                            yf && (yf.element && e.setAttribute("lcp.element", R(yf.element)), yf.id && e.setAttribute("lcp.id", yf.id), yf.url && e.setAttribute("lcp.url", yf.url.trim().slice(0, 200)), null != yf.loadTime && e.setAttribute("lcp.loadTime", yf.loadTime), null != yf.renderTime && e.setAttribute("lcp.renderTime", yf.renderTime), e.setAttribute("lcp.size", yf.size)), vf && vf.sources && vf.sources.forEach(((t, n) => e.setAttribute(`cls.source.${n+1}`, R(t.node))))
                                        }(e)
                                }
                                yf = void 0, vf = void 0, Sf = {}
                            }(e, {
                                recordClsOnPageloadSpan: !d
                            })
                    }
                });

                function c() {
                    ["interactive", "complete"].includes(yo.document.readyState) && e.emit("idleSpanEnableAutoFinish", i)
                }
                return n && yo.document && (yo.document.addEventListener("readystatechange", (() => {
                    c()
                })), c()), i
            }
            return {
                name: "BrowserTracing",
                afterAllSetup(e) {
                    let n, r = yo.location && yo.location.href;

                    function i() {
                        n && !It(n).timestamp && (To && F.log(`[Tracing] Finishing current active span with op: ${It(n).op}`), n.end())
                    }
                    e.on("startNavigationSpan", (t => {
                        Ae() === e && (i(), n = I(e, {
                            op: "navigation",
                            ...t
                        }))
                    })), e.on("startPageLoadSpan", ((t, r = {}) => {
                        if (Ae() !== e) return;
                        i();
                        const o = vt(r.sentryTrace || Lf("sentry-trace"), r.baggage || Lf("baggage"));
                        Ce().setPropagationContext(o), n = I(e, {
                            op: "pageload",
                            ...t
                        })
                    })), e.on("spanEnd", (e => {
                        const t = It(e).op;
                        if (e !== Nt(e) || "navigation" !== t && "pageload" !== t) return;
                        const n = Ce(),
                            r = n.getPropagationContext();
                        n.setPropagationContext({ ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : Mt(e),
                            dsc: r.dsc || zt(e)
                        })
                    })), yo.location && (k && Of(e, {
                        name: yo.location.pathname,
                        startTime: ne ? ne / 1e3 : void 0,
                        attributes: {
                            [o]: "url",
                            [a]: "auto.pageload.browser"
                        }
                    }), E && Is((({
                        to: t,
                        from: n
                    }) => {
                        void 0 === n && r && -1 !== r.indexOf(t) ? r = void 0 : n !== t && (r = void 0, Df(e, {
                            name: yo.location.pathname,
                            attributes: {
                                [o]: "url",
                                [a]: "auto.navigation.browser"
                            }
                        }))
                    }))), _ && (yo && yo.document ? yo.document.addEventListener("visibilitychange", (() => {
                        const e = Pt();
                        if (!e) return;
                        const t = Nt(e);
                        if (yo.document.hidden && t) {
                            const e = "cancelled",
                                {
                                    op: n,
                                    status: r
                                } = It(t);
                            To && F.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                                code: mt,
                                message: e
                            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                        }
                    })) : To && F.warn("[Tracing] Could not set up background tab detection due to lack of global document")), s && function(e, t, n, r) {
                        let s;
                        yo.document && addEventListener("click", (() => {
                            const i = "ui.action.click",
                                a = Pt(),
                                u = a && Nt(a);
                            if (u) {
                                const e = It(u).op;
                                if (["navigation", "pageload"].includes(e)) return void(To && F.warn(`[Tracing] Did not create ${i} span because a pageload or navigation span is in progress.`))
                            }
                            s && (s.setAttribute(c, "interactionInterrupted"), s.end(), s = void 0), r.name ? s = Mf({
                                name: r.name,
                                op: i,
                                attributes: {
                                    [o]: r.source || "url"
                                }
                            }, {
                                idleTimeout: e,
                                finalTimeout: t,
                                childSpanTimeout: n
                            }) : To && F.warn(`[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`)
                        }), {
                            once: !1,
                            capture: !0
                        })
                    }(f, m, g, T), t && function(e) {
                        const t = ({
                            entries: e
                        }) => {
                            const t = Pt(),
                                n = t && Nt(t);
                            e.forEach((e => {
                                if (! function(e) {
                                        return "duration" in e
                                    }(e) || !n) return;
                                const t = e.interactionId;
                                if (null != t && !Cf.has(t)) {
                                    if (xf.length > 10) {
                                        const e = xf.shift();
                                        Cf.delete(e)
                                    }
                                    xf.push(t), Cf.set(t, n)
                                }
                            }))
                        };
                        va("event", t), va("first-input", t)
                    }(), hf(e, {
                        traceFetch: y,
                        traceXHR: v,
                        trackFetchStreamPerformance: b,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: S,
                        enableHTTPTimings: w
                    })
                }
            }
        };

    function Of(e, t, n) {
        e.emit("startPageLoadSpan", t, n), Ce().setTransactionName(t.name);
        const r = Pt();
        return "pageload" === (r && It(r).op) ? r : void 0
    }

    function Df(e, t) {
        Te().setPropagationContext({
            traceId: le()
        }), Ce().setPropagationContext({
            traceId: le()
        }), e.emit("startNavigationSpan", t), Ce().setTransactionName(t.name);
        const n = Pt();
        return "navigation" === (n && It(n).op) ? n : void 0
    }

    function Lf(e) {
        const t = (n = `meta[name=${e}]`, I.document && I.document.querySelector ? I.document.querySelector(n) : null);
        var n;
        return t ? t.getAttribute("content") : void 0
    }
    const Nf = 100,
        Pf = 5e3,
        $f = 36e5;

    function Ff(e) {
        return new Promise(((t, n) => {
            e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
        }))
    }

    function Bf(e) {
        return Ff(e.getAllKeys())
    }

    function Uf(e) {
        let t;

        function n() {
            return null == t && (t = function(e, t) {
                const n = indexedDB.open(e);
                n.onupgradeneeded = () => n.result.createObjectStore(t);
                const r = Ff(n);
                return e => r.then((n => e(n.transaction(t, "readwrite").objectStore(t))))
            }(e.dbName || "sentry-offline", e.storeName || "queue")), t
        }
        return {
            push: async t => {
                try {
                    const r = await Zn(t);
                    await
                    function(e, t, n) {
                        return e((e => Bf(e).then((r => {
                            if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), Ff(e.transaction)
                        }))))
                    }(n(), r, e.maxQueueSize || 30)
                } catch (e) {}
            },
            unshift: async t => {
                try {
                    const r = await Zn(t);
                    await
                    function(e, t, n) {
                        return e((e => Bf(e).then((r => {
                            if (!(r.length >= n)) return e.put(t, Math.min(...r, 0) - 1), Ff(e.transaction)
                        }))))
                    }(n(), r, e.maxQueueSize || 30)
                } catch (e) {}
            },
            shift: async () => {
                try {
                    const e = await
                    function(e) {
                        return e((e => Bf(e).then((t => {
                            const n = t[0];
                            if (null != n) return Ff(e.get(n)).then((t => (e.delete(n), Ff(e.transaction).then((() => t)))))
                        }))))
                    }(n());
                    if (e) return function(e) {
                        let t = "string" == typeof e ? Kn(e) : e;

                        function n(e) {
                            const n = t.subarray(0, e);
                            return t = t.subarray(e + 1), n
                        }

                        function r() {
                            let e = t.indexOf(10);
                            return e < 0 && (e = t.length), JSON.parse((r = n(e), C.__SENTRY__ && C.__SENTRY__.decodePolyfill ? C.__SENTRY__.decodePolyfill(r) : (new TextDecoder).decode(r)));
                            var r
                        }
                        const o = r(),
                            s = [];
                        for (; t.length;) {
                            const e = r(),
                                t = "number" == typeof e.length ? e.length : void 0;
                            s.push([e, t ? n(t) : r()])
                        }
                        return [o, s]
                    }(e)
                } catch (e) {}
            }
        }
    }

    function jf(e = Zo) {
        return function(e) {
            return t => {
                const n = e({ ...t,
                    createStore: Uf
                });
                return yo.addEventListener("online", (async e => {
                    await n.flush()
                })), n
            }
        }(function(e) {
            function t(...e) {
                Pe && F.info("[Offline]:", ...e)
            }
            return n => {
                const r = e(n);
                if (!n.createStore) throw new Error("No `createStore` function was provided");
                const o = n.createStore(n);
                let s, i = Pf;

                function a(e) {
                    s && clearTimeout(s), s = setTimeout((async () => {
                        s = void 0;
                        const e = await o.shift();
                        e && (t("Attempting to send previously queued event"), e[0].sent_at = (new Date).toISOString(), u(e, !0).catch((e => {
                            t("Failed to retry sending", e)
                        })))
                    }), e), "number" != typeof s && s.unref && s.unref()
                }

                function c() {
                    s || (a(i), i = Math.min(2 * i, $f))
                }
                async function u(e, s = !1) {
                    if (!s && Jn(e, ["replay_event", "replay_recording"])) return await o.push(e), a(Nf), {};
                    try {
                        const t = await r.send(e);
                        let n = Nf;
                        if (t)
                            if (t.headers && t.headers["retry-after"]) n = Mr(t.headers["retry-after"]);
                            else if (t.headers && t.headers["x-sentry-rate-limits"]) n = 6e4;
                        else if ((t.statusCode || 0) >= 400) return t;
                        return a(n), i = Pf, t
                    } catch (r) {
                        if (await
                            function(e, t, r) {
                                return !Jn(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, t, r))
                            }(e, r, i)) return s ? await o.unshift(e) : await o.push(e), c(), t("Error sending. Event queued.", r), {};
                        throw r
                    }
                }
                return n.flushAtStartup && c(), {
                    send: u,
                    flush: e => (void 0 === e && (i = Pf, a(Nf)), r.flush(e))
                }
            }
        }(e))
    }
    const Hf = 1e6,
        zf = String(0),
        Wf = "main";
    let qf = "",
        Yf = "",
        Vf = "",
        Gf = yo.navigator && yo.navigator.userAgent || "",
        Xf = "";
    const Jf = yo.navigator && yo.navigator.language || yo.navigator && yo.navigator.languages && yo.navigator.languages[0] || "",
        Kf = yo.navigator && yo.navigator.userAgentData;
    var Zf;

    function Qf(e, t, n, r) {
        if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
        if (null == n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
        const o = function(e) {
                const t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                return "string" == typeof t && 32 !== t.length && To && F.log(`[Profiling] Invalid traceId: ${t} on profiled event`), "string" != typeof t ? "" : t
            }(r),
            s = function(e) {
                return !("thread_metadata" in e)
            }(c = n) ? function(e) {
                let t, n = 0;
                const r = {
                        samples: [],
                        stacks: [],
                        frames: [],
                        thread_metadata: {
                            [zf]: {
                                name: Wf
                            }
                        }
                    },
                    o = e.samples[0];
                if (!o) return r;
                const s = o.timestamp,
                    i = "number" == typeof performance.timeOrigin ? performance.timeOrigin : ne || 0,
                    a = i - (ne || i);
                return e.samples.forEach(((o, i) => {
                    if (void 0 === o.stackId) return void 0 === t && (t = n, r.stacks[t] = [], n++), void(r.samples[i] = {
                        elapsed_since_start_ns: ((o.timestamp + a - s) * Hf).toFixed(0),
                        stack_id: t,
                        thread_id: zf
                    });
                    let c = e.stacks[o.stackId];
                    const u = [];
                    for (; c;) {
                        u.push(c.frameId);
                        const t = e.frames[c.frameId];
                        t && void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                            function: t.name,
                            abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                            lineno: t.line,
                            colno: t.column
                        }), c = void 0 === c.parentId ? void 0 : e.stacks[c.parentId]
                    }
                    const l = {
                        elapsed_since_start_ns: ((o.timestamp + a - s) * Hf).toFixed(0),
                        stack_id: n,
                        thread_id: zf
                    };
                    r.stacks[n] = u, r.samples[i] = l, n++
                })), r
            }(c) : c,
            i = t || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : 1e3 * ee()),
            a = "number" == typeof r.timestamp ? 1e3 * r.timestamp : 1e3 * ee();
        var c;
        return {
            event_id: e,
            timestamp: new Date(i).toISOString(),
            platform: "javascript",
            version: "1",
            release: r.release || "",
            environment: r.environment || Ne,
            runtime: {
                name: "javascript",
                version: yo.navigator.userAgent
            },
            os: {
                name: qf,
                version: Yf,
                build_number: Gf
            },
            device: {
                locale: Jf,
                model: Xf,
                manufacturer: Gf,
                architecture: Vf,
                is_emulator: !1
            },
            debug_meta: {
                images: tm(n.resources)
            },
            profile: s,
            transactions: [{
                name: r.transaction || "",
                id: r.event_id || re(),
                trace_id: o,
                active_thread_id: zf,
                relative_start_ns: "0",
                relative_end_ns: (1e6 * (a - i)).toFixed(0)
            }]
        }
    }

    function em(e) {
        return "pageload" === It(e).op
    }

    function tm(e) {
        const t = Ae(),
            n = t && t.getOptions(),
            r = n && n.stackParser;
        return r ? function(e, t) {
            const n = qe(e);
            if (!n) return [];
            const r = [];
            for (const e of t) e && n[e] && r.push({
                type: "sourcemap",
                code_file: e,
                debug_id: n[e]
            });
            return r
        }(r, e) : []
    }
    "object" == typeof(Zf = Kf) && null !== Zf && "getHighEntropyValues" in Zf && Kf.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then((e => {
        if (qf = e.platform || "", Vf = e.architecture || "", Xf = e.model || "", Yf = e.platformVersion || "", e.fullVersionList && e.fullVersionList.length > 0) {
            const t = e.fullVersionList[e.fullVersionList.length - 1];
            Gf = `${t.brand} ${t.version}`
        }
    })).catch((e => {}));
    let nm = !1;

    function rm(e) {
        if (nm) return To && F.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
        if (!e.isRecording()) return To && F.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
        const t = Ae(),
            n = t && t.getOptions();
        if (!n) return To && F.log("[Profiling] Profiling disabled, no options found."), !1;
        const r = n.profilesSampleRate;
        return ("number" != typeof(o = r) && "boolean" != typeof o || "number" == typeof o && isNaN(o) ? (To && F.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 0) : !0 === o || !1 === o || !(o < 0 || o > 1) || (To && F.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${o}.`), 0)) ? r ? !!(!0 === r || Math.random() < r) || (To && F.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1) : (To && F.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1) : (To && F.warn("[Profiling] Discarding profile because of invalid sample rate."), !1);
        var o
    }

    function om(e, t, n, r) {
        return function(e) {
            return e.samples.length < 2 ? (To && F.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!e.frames.length || (To && F.log("[Profiling] Discarding profile because it contains no frames"), !1)
        }(n) ? Qf(e, t, n, r) : null
    }
    const sm = new Map;

    function im(e) {
        const t = sm.get(e);
        return t && sm.delete(e), t
    }

    function am(e) {
        let t;
        em(e) && (t = 1e3 * ee());
        const n = function() {
            const e = yo.Profiler;
            if ("function" != typeof e) return void(To && F.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
            const t = Math.floor(3e3);
            try {
                return new e({
                    sampleInterval: 10,
                    maxBufferSize: t
                })
            } catch (e) {
                To && (F.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), F.log("[Profiling] Disabling profiling for current user session.")), nm = !0
            }
        }();
        if (!n) return;
        To && F.log(`[Profiling] started profiling span: ${It(e).description}`);
        const r = re();
        async function o() {
            if (e && n) return n.stop().then((t => {
                s && (yo.clearTimeout(s), s = void 0), To && F.log(`[Profiling] stopped profiling of span: ${It(e).description}`), t ? function(e, t) {
                    if (sm.set(e, t), sm.size > 30) {
                        const e = sm.keys().next().value;
                        sm.delete(e)
                    }
                }(r, t) : To && F.log(`[Profiling] profiler returned null profile for: ${It(e).description}`, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started")
            })).catch((e => {
                To && F.log("[Profiling] error while stopping profiler:", e)
            }))
        }
        Ce().setContext("profile", {
            profile_id: r,
            start_timestamp: t
        });
        let s = yo.setTimeout((() => {
            To && F.log("[Profiling] max profile duration elapsed, stopping profiling for:", It(e).description), o()
        }), 3e4);
        const i = e.end.bind(e);
        e.end = function() {
            return e ? (o().then((() => {
                i()
            }), (() => {
                i()
            })), e) : i()
        }
    }
    const cm = () => ({
            name: "BrowserProfiling",
            setup(e) {
                const t = Pt(),
                    n = t && Nt(t);
                n && em(n) && rm(n) && am(n), e.on("spanStart", (e => {
                    e === Nt(e) && rm(e) && am(e)
                })), e.on("beforeEnvelope", (e => {
                    if (!sm.size) return;
                    const t = function(e) {
                        const t = [];
                        return Xn(e, ((e, n) => {
                            if ("transaction" === n)
                                for (let n = 1; n < e.length; n++) {
                                    const r = e[n];
                                    r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && t.push(e[n])
                                }
                        })), t
                    }(e);
                    if (!t.length) return;
                    const n = [];
                    for (const e of t) {
                        const t = e && e.contexts,
                            r = t && t.profile && t.profile.profile_id,
                            o = t && t.profile && t.profile.start_timestamp;
                        if ("string" != typeof r) {
                            To && F.log("[Profiling] cannot find profile for a span without a profile context");
                            continue
                        }
                        if (!r) {
                            To && F.log("[Profiling] cannot find profile for a span without a profile context");
                            continue
                        }
                        t && t.profile && delete t.profile;
                        const s = im(r);
                        if (!s) {
                            To && F.log(`[Profiling] Could not retrieve profile for span: ${r}`);
                            continue
                        }
                        const i = om(r, o, s, e);
                        i && n.push(i)
                    }! function(e, t) {
                        if (!t.length) return e;
                        for (const n of t) e[1].push([{
                            type: "profile"
                        }, n])
                    }(e, n)
                }))
            }
        }),
        um = (e = {}) => {
            const t = e.sidecarUrl || "http://localhost:8969/stream";
            return {
                name: "SpotlightBrowser",
                setup: () => {
                    To && F.log("Using Sidecar URL", t)
                },
                processEvent: e => function(e) {
                    return Boolean("transaction" === e.type && e.spans && e.contexts && e.contexts.trace && "ui.action.click" === e.contexts.trace.op && e.spans.some((({
                        description: e
                    }) => e && e.includes("#sentry-spotlight"))))
                }(e) ? null : e,
                afterAllSetup: e => {
                    ! function(e, t) {
                        const n = Xo("fetch");
                        let r = 0;
                        e.on("beforeEnvelope", (e => {
                            r > 3 ? F.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", r) : n(t, {
                                method: "POST",
                                body: Zn(e),
                                headers: {
                                    "Content-Type": "application/x-sentry-envelope"
                                },
                                mode: "cors"
                            }).then((e => {
                                e.status >= 200 && e.status < 400 && (r = 0)
                            }), (e => {
                                r++, F.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                            }))
                        }))
                    }(e, t)
                }
            }
        },
        lm = 100;

    function dm(e) {
        const t = Ce().getScopeData().contexts.flags,
            n = t ? t.values : [];
        return n.length ? (void 0 === e.contexts && (e.contexts = {}), e.contexts.flags = {
            values: [...n]
        }, e) : e
    }

    function pm(e, t, n = lm) {
        const r = Ce().getScopeData().contexts;
        r.flags || (r.flags = {
                values: []
            }),
            function(e, t, n, r) {
                if ("boolean" != typeof n) return;
                if (e.length > r) return void(To && F.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`));
                const o = e.findIndex((e => e.flag === t)); - 1 !== o && e.splice(o, 1), e.length === r && e.shift(), e.push({
                    flag: t,
                    result: n
                })
            }(r.flags.values, e, t, n)
    }
    const hm = () => ({
            name: "FeatureFlags",
            processEvent: (e, t, n) => dm(e),
            addFeatureFlag(e, t) {
                pm(e, t)
            }
        }),
        fm = () => ({
            name: "LaunchDarkly",
            processEvent: (e, t, n) => dm(e)
        });

    function mm() {
        return {
            name: "sentry-flag-auditor",
            type: "flag-used",
            synchronous: !0,
            method: (e, t, n) => {
                pm(e, t.value)
            }
        }
    }
    const gm = () => ({
        name: "OpenFeature",
        processEvent: (e, t, n) => dm(e)
    });class _m {
        after(e, t) {
            pm(t.flagKey, t.value)
        }
        error(e, t, n) {
            pm(e.flagKey, e.defaultValue)
        }
    }
    const ym = ({
        unleashClientClass: e
    }) => ({
        name: "Unleash",
        processEvent: (e, t, n) => dm(e),
        setupOnce() {
            z(e.prototype, "isEnabled", vm)
        }
    });

    function vm(e) {
        return function(...t) {
            const n = t[0],
                r = e.apply(this, t);
            return "string" == typeof n && "boolean" == typeof r ? pm(n, r) : To && F.error(`[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${r} (${typeof r})`), r
        }
    }
    const bm = ({
        featureFlagClient: e
    }) => ({
        name: "Statsig",
        processEvent: (e, t, n) => dm(e),
        setup() {
            e.on("gate_evaluation", (e => {
                pm(e.gate.name, e.gate.value)
            }))
        }
    });
    var Sm = n(8416);

    function wm(e) {
        const t = { ...e
        };
        return Co(t, "react"), Zt("react", {
                version: Sm.version
            }),
            function(e = {}) {
                const t = function(e = {}) {
                    const t = {
                        defaultIntegrations: ti(e),
                        release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : yo.SENTRY_RELEASE && yo.SENTRY_RELEASE.id ? yo.SENTRY_RELEASE.id : void 0,
                        autoSessionTracking: !0,
                        sendClientReports: !0
                    };
                    return null == e.defaultIntegrations && delete e.defaultIntegrations, { ...t,
                        ...e
                    }
                }(e);
                if (!t.skipBrowserExtensionCheck && function() {
                        const e = void 0 !== yo.window && yo;
                        if (!e) return !1;
                        const t = e[e.chrome ? "chrome" : "browser"],
                            n = t && t.runtime && t.runtime.id,
                            r = yo.location && yo.location.href || "",
                            o = !!n && yo === yo.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some((e => r.startsWith(`${e}//`))),
                            s = void 0 !== e.nw;
                        return !!n && !o && !s
                    }()) return void $((() => {
                    console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                }));
                To && (zo() || F.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
                const n = { ...t,
                    stackParser: (r = t.stackParser || fs, Array.isArray(r) ? Je(...r) : r),
                    integrations: mn(t),
                    transport: t.transport || Zo
                };
                var r;
                return function(e, t) {
                    !0 === t.debug && (Pe ? F.enable() : $((() => {
                        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                    }))), Ce().update(t.initialScope);
                    const n = new e(t);
                    return po(n), n.init(), n
                }(jo, n)
            }(t)
    }

    function km(e, {
        componentStack: t
    }, n) {
        if (function(e) {
                const t = e.match(/^([^.]+)/);
                return null !== t && parseInt(t[0]) >= 17
            }(Sm.version) && f(e) && t) {
            const n = new Error(e.message);
            n.name = `React ErrorBoundary ${e.name}`, n.stack = t,
                function(e, t) {
                    const n = new WeakSet;
                    ! function e(t, r) {
                        if (!n.has(t)) return t.cause ? (n.add(t), e(t.cause, r)) : void(t.cause = r)
                    }(e, t)
                }(e, n)
        }
        return Xt(e, { ...n,
            captureContext: {
                contexts: {
                    react: {
                        componentStack: t
                    }
                }
            }
        })
    }

    function Em(e) {
        return (t, n) => {
            const r = km(t, n);
            e && e(t, n, r)
        }
    }
    var xm = n(8679);
    const Cm = "ui.react.render",
        Tm = "ui.react.mount",
        Im = "unknown";class Mm extends Sm.Component {
        static __initStatic() {
            this.defaultProps = {
                disabled: !1,
                includeRender: !0,
                includeUpdates: !0
            }
        }
        constructor(e) {
            super(e);
            const {
                name: t,
                disabled: n = !1
            } = this.props;
            n || (this._mountSpan = gr({
                name: `<${t}>`,
                onlyIfParent: !0,
                op: Tm,
                attributes: {
                    [a]: "auto.ui.react.profiler",
                    "ui.component_name": t
                }
            }))
        }
        componentDidMount() {
            this._mountSpan && this._mountSpan.end()
        }
        shouldComponentUpdate({
            updateProps: e,
            includeUpdates: t = !0
        }) {
            if (t && this._mountSpan && e !== this.props.updateProps) {
                const t = Object.keys(e).filter((t => e[t] !== this.props.updateProps[t]));
                if (t.length > 0) {
                    const e = ee();
                    this._updateSpan = yr(this._mountSpan, (() => gr({
                        name: `<${this.props.name}>`,
                        onlyIfParent: !0,
                        op: "ui.react.update",
                        startTime: e,
                        attributes: {
                            [a]: "auto.ui.react.profiler",
                            "ui.component_name": this.props.name,
                            "ui.react.changed_props": t
                        }
                    })))
                }
            }
            return !0
        }
        componentDidUpdate() {
            this._updateSpan && (this._updateSpan.end(), this._updateSpan = void 0)
        }
        componentWillUnmount() {
            const e = ee(),
                {
                    name: t,
                    includeRender: n = !0
                } = this.props;
            if (this._mountSpan && n) {
                const n = It(this._mountSpan).timestamp;
                yr(this._mountSpan, (() => {
                    const r = gr({
                        onlyIfParent: !0,
                        name: `<${t}>`,
                        op: Cm,
                        startTime: n,
                        attributes: {
                            [a]: "auto.ui.react.profiler",
                            "ui.component_name": t
                        }
                    });
                    r && r.end(e)
                }))
            }
        }
        render() {
            return this.props.children
        }
    }

    function Rm(e, t) {
        const n = t && t.name || e.displayName || e.name || Im,
            r = r => Sm.createElement(Mm, { ...t,
                name: n,
                updateProps: r
            }, Sm.createElement(e, { ...r
            }));
        return r.displayName = `profiler(${n})`, xm(r, e), r
    }

    function Am(e, t = {
        disabled: !1,
        hasRenderSpan: !0
    }) {
        const [n] = Sm.useState((() => {
            if (!t || !t.disabled) return gr({
                name: `<${e}>`,
                onlyIfParent: !0,
                op: Tm,
                attributes: {
                    [a]: "auto.ui.react.profiler",
                    "ui.component_name": e
                }
            })
        }));
        Sm.useEffect((() => (n && n.end(), () => {
            if (n && t.hasRenderSpan) {
                const t = It(n).timestamp,
                    r = ee(),
                    o = gr({
                        name: `<${e}>`,
                        onlyIfParent: !0,
                        op: Cm,
                        startTime: t,
                        attributes: {
                            [a]: "auto.ui.react.profiler",
                            "ui.component_name": e
                        }
                    });
                o && o.end(r)
            }
        })), [])
    }
    Mm.__initStatic();
    const Om = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        Dm = "unknown",
        Lm = {
            componentStack: null,
            error: null,
            eventId: null
        };class Nm extends Sm.Component {
        constructor(e) {
            super(e), Nm.prototype.__init.call(this), this.state = Lm, this._openFallbackReportDialog = !0;
            const t = Ae();
            t && e.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = t.on("afterSendEvent", (t => {
                !t.type && this._lastEventId && t.event_id === this._lastEventId && ni({ ...e.dialogOptions,
                    eventId: this._lastEventId
                })
            })))
        }
        componentDidCatch(e, t) {
            const {
                componentStack: n
            } = t, r = null == n ? void 0 : n, {
                beforeCapture: o,
                onError: s,
                showDialog: i,
                dialogOptions: a
            } = this.props;
            Me((c => {
                o && o(c, e, r);
                const u = null != this.props.handled ? this.props.handled : !!this.props.fallback,
                    l = km(e, t, {
                        mechanism: {
                            handled: u
                        }
                    });
                s && s(e, r, l), i && (this._lastEventId = l, this._openFallbackReportDialog && ni({ ...a,
                    eventId: l
                })), this.setState({
                    error: e,
                    componentStack: n,
                    eventId: l
                })
            }))
        }
        componentDidMount() {
            const {
                onMount: e
            } = this.props;
            e && e()
        }
        componentWillUnmount() {
            const {
                error: e,
                componentStack: t,
                eventId: n
            } = this.state, {
                onUnmount: r
            } = this.props;
            r && r(e, t, n), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0)
        }
        __init() {
            this.resetErrorBoundary = () => {
                const {
                    onReset: e
                } = this.props, {
                    error: t,
                    componentStack: n,
                    eventId: r
                } = this.state;
                e && e(t, n, r), this.setState(Lm)
            }
        }
        render() {
            const {
                fallback: e,
                children: t
            } = this.props, n = this.state;
            if (n.error) {
                let t;
                return t = "function" == typeof e ? Sm.createElement(e, {
                    error: n.error,
                    componentStack: n.componentStack,
                    resetError: this.resetErrorBoundary,
                    eventId: n.eventId
                }) : e, Sm.isValidElement(t) ? t : (e && Om && F.warn("fallback did not produce a valid ReactElement"), null)
            }
            return "function" == typeof t ? t() : t
        }
    }

    function Pm(e, t) {
        const n = e.displayName || e.name || Dm,
            r = n => Sm.createElement(Nm, { ...t
            }, Sm.createElement(e, { ...n
            }));
        return r.displayName = `errorBoundary(${n})`, xm(r, e), r
    }
    const $m = "redux.action",
        Fm = "info",
        Bm = {
            attachReduxState: !0,
            actionTransformer: e => e,
            stateTransformer: e => e || null
        };

    function Um(e) {
        const t = { ...Bm,
            ...e
        };
        return e => (n, r) => (t.attachReduxState && Ie().addEventProcessor(((e, t) => {
            try {
                void 0 === e.type && "redux" === e.contexts.state.state.type && (t.attachments = [...t.attachments || [], {
                    filename: "redux_state.json",
                    data: JSON.stringify(e.contexts.state.state.value)
                }])
            } catch (e) {}
            return e
        })), e(((e, r) => {
            const o = n(e, r),
                s = Ce(),
                i = t.actionTransformer(r);
            null != i && Le({
                category: $m,
                data: i,
                type: Fm
            });
            const a = t.stateTransformer(o);
            if (null != a) {
                const e = Ae(),
                    t = e && e.getOptions(),
                    n = {
                        state: {
                            type: "redux",
                            value: a
                        }
                    };
                W(n, "__sentry_override_normalization_depth__", 3 + (t && t.normalizeDepth || 3)), s.setContext("state", n)
            } else s.setContext("state", null);
            const {
                configureScopeWithState: c
            } = t;
            return "function" == typeof c && c(s, o), o
        }), r))
    }

    function jm(e) {
        const t = Af({ ...e,
                instrumentPageLoad: !1,
                instrumentNavigation: !1
            }),
            {
                history: n,
                routes: r,
                match: s,
                instrumentPageLoad: c = !0,
                instrumentNavigation: u = !0
            } = e;
        return { ...t,
            afterAllSetup(e) {
                t.afterAllSetup(e), c && yo && yo.location && Hm(r, yo.location, s, ((t, n = "url") => {
                    Of(e, {
                        name: t,
                        attributes: {
                            [i]: "pageload",
                            [a]: "auto.pageload.react.reactrouter_v3",
                            [o]: n
                        }
                    })
                })), u && n.listen && n.listen((t => {
                    "PUSH" !== t.action && "POP" !== t.action || Hm(r, t, s, ((t, n = "url") => {
                        Df(e, {
                            name: t,
                            attributes: {
                                [i]: "navigation",
                                [a]: "auto.navigation.react.reactrouter_v3",
                                [o]: n
                            }
                        })
                    }))
                }))
            }
        }
    }

    function Hm(e, t, n, r) {
        let o = t.pathname;
        n({
            location: t,
            routes: e
        }, ((e, t, n) => {
            if (e || !n) return r(o);
            const s = function(e) {
                if (!Array.isArray(e) || 0 === e.length) return "";
                const t = e.filter((e => !!e.path));
                let n = -1;
                for (let e = t.length - 1; e >= 0; e--) {
                    const r = t[e];
                    if (r.path && r.path.startsWith("/")) {
                        n = e;
                        break
                    }
                }
                return t.slice(n).filter((({
                    path: e
                }) => !!e)).map((({
                    path: e
                }) => e)).join("")
            }(n.routes || []);
            return 0 === s.length || "/*" === s ? r(o) : (o = s, r(o, "route"))
        }))
    }

    function zm(e, t = {}) {
        const n = e,
            r = Af({ ...t,
                instrumentNavigation: !1,
                instrumentPageLoad: !1
            }),
            {
                instrumentPageLoad: s = !0,
                instrumentNavigation: c = !0
            } = t;
        return { ...r,
            afterAllSetup(e) {
                r.afterAllSetup(e);
                const t = yo.location;
                if (s && t) {
                    const r = n.matchRoutes(t.pathname, n.options.parseSearch(t.search), {
                            preload: !1,
                            throwOnError: !1
                        }),
                        s = r[r.length - 1];
                    Of(e, {
                        name: s ? s.routeId : t.pathname,
                        attributes: {
                            [i]: "pageload",
                            [a]: "auto.pageload.react.tanstack_router",
                            [o]: s ? "route" : "url",
                            ...Wm(s)
                        }
                    })
                }
                c && n.subscribe("onBeforeNavigate", (t => {
                    const r = t.fromLocation && t.fromLocation.state;
                    if (t.toLocation.state === r) return;
                    const s = n.matchRoutes(t.toLocation.pathname, t.toLocation.search, {
                            preload: !1,
                            throwOnError: !1
                        }),
                        c = s[s.length - 1],
                        u = yo.location,
                        l = Df(e, {
                            name: c ? c.routeId : u.pathname,
                            attributes: {
                                [i]: "navigation",
                                [a]: "auto.navigation.react.tanstack_router",
                                [o]: c ? "route" : "url"
                            }
                        }),
                        d = n.subscribe("onResolved", (e => {
                            if (d(), l) {
                                const t = n.matchRoutes(e.toLocation.pathname, e.toLocation.search, {
                                        preload: !1,
                                        throwOnError: !1
                                    }),
                                    r = t[t.length - 1];
                                r && (l.updateName(r.routeId), l.setAttribute(o, "route"), l.setAttributes(Wm(r)))
                            }
                        }))
                }))
            }
        }
    }

    function Wm(e) {
        if (!e) return {};
        const t = {};
        return Object.entries(e.params).forEach((([e, n]) => {
            t[`url.path.params.${e}`] = n
        })), t
    }

    function qm(e) {
        const t = Af({ ...e,
                instrumentPageLoad: !1,
                instrumentNavigation: !1
            }),
            {
                history: n,
                routes: r,
                matchPath: o,
                instrumentPageLoad: s = !0,
                instrumentNavigation: i = !0
            } = e;
        return { ...t,
            afterAllSetup(e) {
                t.afterAllSetup(e), Vm(e, s, i, n, "reactrouter_v4", r, o)
            }
        }
    }

    function Ym(e) {
        const t = Af({ ...e,
                instrumentPageLoad: !1,
                instrumentNavigation: !1
            }),
            {
                history: n,
                routes: r,
                matchPath: o,
                instrumentPageLoad: s = !0,
                instrumentNavigation: i = !0
            } = e;
        return { ...t,
            afterAllSetup(e) {
                t.afterAllSetup(e), Vm(e, s, i, n, "reactrouter_v5", r, o)
            }
        }
    }

    function Vm(e, t, n, r, s, c = [], u) {
        function l(e) {
            if (0 === c.length || !u) return [e, "url"];
            const t = Gm(c, e, u);
            for (const e of t)
                if (e.match.isExact) return [e.match.path, "route"];
            return [e, "url"]
        }
        if (t) {
            const t = r && r.location ? r.location.pathname : yo && yo.location ? yo.location.pathname : void 0;
            if (t) {
                const [n, r] = l(t);
                Of(e, {
                    name: n,
                    attributes: {
                        [i]: "pageload",
                        [a]: `auto.pageload.react.${s}`,
                        [o]: r
                    }
                })
            }
        }
        n && r.listen && r.listen(((t, n) => {
            if (n && ("PUSH" === n || "POP" === n)) {
                const [n, r] = l(t.pathname);
                Df(e, {
                    name: n,
                    attributes: {
                        [i]: "navigation",
                        [a]: `auto.navigation.react.${s}`,
                        [o]: r
                    }
                })
            }
        }))
    }

    function Gm(e, t, n, r = []) {
        return e.some((e => {
            const o = e.path ? n(t, e) : r.length ? r[r.length - 1].match : function(e) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === e
                }
            }(t);
            return o && (r.push({
                route: e,
                match: o
            }), e.routes && Gm(e.routes, t, n, r)), !!o
        })), r
    }

    function Xm(e) {
        const t = e.displayName || e.name,
            n = t => {
                if (t && t.computedMatch && t.computedMatch.isExact) {
                    const e = t.computedMatch.path,
                        n = function() {
                            const e = Pt(),
                                t = e && Nt(e);
                            if (!t) return;
                            const n = It(t).op;
                            return "navigation" === n || "pageload" === n ? t : void 0
                        }();
                    Ce().setTransactionName(e), n && (n.updateName(e), n.setAttribute(o, "route"))
                }
                return Sm.createElement(e, { ...t
                })
            };
        return n.displayName = `sentryRoute(${t})`, xm(n, e), n
    }
    let Jm, Km, Zm, Qm, eg, tg = !1;
    const ng = new WeakSet,
        rg = new Set;

    function og(e, t) {
        return Jm && Km && Zm && eg ? function(n, r) {
            n.forEach((e => {
                rg.add(e)
            }));
            const o = e(n, r),
                s = r && r.basename,
                i = kg();
            return "POP" === o.state.historyAction && i && Sg(i, o.state.location, n, void 0, s, Array.from(rg)), o.subscribe((e => {
                "PUSH" !== e.historyAction && "POP" !== e.historyAction || ("idle" !== e.navigation.state ? requestAnimationFrame((() => {
                    cg({
                        location: e.location,
                        routes: n,
                        navigationType: e.historyAction,
                        version: t,
                        basename: s,
                        allRoutes: Array.from(rg)
                    })
                })) : cg({
                    location: e.location,
                    routes: n,
                    navigationType: e.historyAction,
                    version: t,
                    basename: s,
                    allRoutes: Array.from(rg)
                }))
            })), o
        } : (Om && F.warn(`reactRouterV${t}Instrumentation was unable to wrap the \`createRouter\` function because of one or more missing parameters.`), e)
    }

    function sg(e, t) {
        return Jm && Km && Zm && eg ? function(n, r) {
            n.forEach((e => {
                rg.add(e)
            }));
            const o = e(n, r),
                s = r ? r.basename : void 0,
                i = kg();
            let a;
            const c = r ? r.initialEntries : void 0,
                u = r ? r.initialIndex : void 0,
                l = c && 1 === c.length,
                d = void 0 !== u && c && c[u];
            a = l ? c[0] : d ? c[u] : void 0;
            const p = a ? "string" == typeof a ? {
                pathname: a
            } : a : o.state.location;
            return "POP" === o.state.historyAction && i && Sg(i, p, n, void 0, s, Array.from(rg)), o.subscribe((e => {
                const r = e.location;
                "PUSH" !== e.historyAction && "POP" !== e.historyAction || cg({
                    location: r,
                    routes: n,
                    navigationType: e.historyAction,
                    version: t,
                    basename: s,
                    allRoutes: Array.from(rg)
                })
            })), o
        } : (Om && F.warn(`reactRouterV${t}Instrumentation was unable to wrap the \`createMemoryRouter\` function because of one or more missing parameters.`), e)
    }

    function ig(e, t) {
        const n = Af({ ...e,
                instrumentPageLoad: !1,
                instrumentNavigation: !1
            }),
            {
                useEffect: r,
                useLocation: s,
                useNavigationType: c,
                createRoutesFromChildren: u,
                matchRoutes: l,
                stripBasename: d,
                instrumentPageLoad: p = !0,
                instrumentNavigation: h = !0
            } = e;
        return { ...n,
            setup() {
                Jm = r, Km = s, Zm = c, eg = l, Qm = u, tg = d || !1
            },
            afterAllSetup(e) {
                n.afterAllSetup(e);
                const r = yo && yo.location && yo.location.pathname;
                p && r && Of(e, {
                    name: r,
                    attributes: {
                        [o]: "url",
                        [i]: "pageload",
                        [a]: `auto.pageload.react.reactrouter_v${t}`
                    }
                }), h && ng.add(e)
            }
        }
    }

    function ag(e, t) {
        if (!(Jm && Km && Zm && eg)) return Om && F.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."), e;
        const n = n => {
            const r = Sm.useRef(!0),
                {
                    routes: o,
                    locationArg: s
                } = n,
                i = e(o, s),
                a = Km(),
                c = Zm(),
                u = "string" == typeof s || s && s.pathname ? s : a;
            return Jm((() => {
                const e = "string" == typeof u ? {
                    pathname: u
                } : u;
                r.current ? (o.forEach((e => {
                    fg(e).forEach((e => {
                        rg.add(e)
                    }))
                })), Sg(kg(), e, o, void 0, void 0, Array.from(rg)), r.current = !1) : cg({
                    location: e,
                    routes: o,
                    navigationType: c,
                    version: t,
                    allRoutes: Array.from(rg)
                })
            }), [c, u]), i
        };
        return (e, t) => Sm.createElement(n, {
            routes: e,
            locationArg: t
        })
    }

    function cg(e) {
        const {
            location: t,
            routes: n,
            navigationType: r,
            version: s,
            matches: c,
            basename: u,
            allRoutes: l
        } = e, d = Array.isArray(c) ? c : eg(n, t, u), p = Ae();
        if (p && ng.has(p) && ("PUSH" === r || "POP" === r) && d) {
            let e, r = "url";
            const c = hg(t, l || n);
            c && (e = yg(vg(l || n, t)), r = "route"), c && e || ([e, r] = bg(n, t, d, u)), Df(p, {
                name: e,
                attributes: {
                    [o]: r,
                    [i]: "navigation",
                    [a]: `auto.navigation.react.reactrouter_v${s}`
                }
            })
        }
    }

    function ug(e, t) {
        if (!t || "/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return e;
        const n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
        return r && "/" !== r ? e : e.slice(n) || "/"
    }

    function lg(e, t, n) {
        const r = e || tg ? ug(t, n) : t;
        return ["/" === r[r.length - 1] || "/*" === r.slice(-2) ? r.slice(0, -1) : r, "route"]
    }

    function dg(e) {
        return e.endsWith("*")
    }

    function pg(e, t) {
        return dg(e) && t.route.children && t.route.children.length > 0 || !1
    }

    function hg(e, t) {
        const n = eg(t, e);
        if (n)
            for (const e of n)
                if (!(r = e.route).children && r.element && r.path && r.path.endsWith("/*") && gg(e)) return !0;
        var r;
        return !1
    }

    function fg(e, t = new Set) {
        return t.has(e) || (t.add(e), e.children && !e.index && e.children.forEach((e => {
            fg(e, t).forEach((e => t.add(e)))
        }))), t
    }

    function mg(e) {
        return "*" === (t = e.route.path || "")[t.length - 1] ? t.slice(0, -1) : t;
        var t
    }

    function gg(e) {
        return e.params["*"] || ""
    }

    function _g(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
    }

    function yg(e) {
        return "/" === e[0] ? e : `/${e}`
    }

    function vg(e, t) {
        const n = eg(e, t);
        if (!n || 0 === n.length) return "";
        for (const r of n)
            if (r.route.path && "*" !== r.route.path) {
                const n = mg(r),
                    o = ug(t.pathname, yg(r.pathnameBase));
                return _g(_g(n || "") + yg(vg(e.filter((e => e !== r.route)), {
                    pathname: o
                })))
            }
        return ""
    }

    function bg(e, t, n, r = "") {
        if (!e || 0 === e.length) return [tg ? ug(t.pathname, r) : t.pathname, "url"];
        let o = "";
        if (n)
            for (const e of n) {
                const n = e.route;
                if (n) {
                    if (n.index) return lg(o, e.pathname, r);
                    const s = n.path;
                    if (s && !pg(s, e)) {
                        const n = "/" === s[0] || "/" === o[o.length - 1] ? s : `/${s}`;
                        if (o = _g(o) + yg(n), _g(t.pathname) === _g(r + e.pathname)) return $s(o) === $s(e.pathname) || dg(o) ? (pg(o, e) && (o = o.slice(0, -1)), [(tg ? "" : r) + o, "route"]) : [(tg ? "" : r) + n, "route"]
                    }
                }
            }
        return [tg ? ug(t.pathname, r) : t.pathname || "/", "url"]
    }

    function Sg(e, t, n, r, s, i) {
        const a = Array.isArray(r) ? r : eg(i || n, t, s);
        if (a) {
            let r, c = "url";
            const u = hg(t, i || n);
            u && (r = yg(vg(i || n, t)), c = "route"), u && r || ([r, c] = bg(n, t, a, s)), Ce().setTransactionName(r || "/"), e && (e.updateName(r), e.setAttribute(o, c))
        }
    }

    function wg(e, t) {
        if (!(Jm && Km && Zm && Qm && eg)) return Om && F.warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ${Jm}. useLocation: ${Km}. useNavigationType: ${Zm}.\n      createRoutesFromChildren: ${Qm}. matchRoutes: ${eg}.`), e;
        const n = n => {
            const r = Sm.useRef(!0),
                o = Km(),
                s = Zm();
            return Jm((() => {
                const e = Qm(n.children);
                r.current ? (e.forEach((e => {
                    fg(e).forEach((e => {
                        rg.add(e)
                    }))
                })), Sg(kg(), o, e, void 0, void 0, Array.from(rg)), r.current = !1) : cg({
                    location: o,
                    routes: e,
                    navigationType: s,
                    version: t,
                    allRoutes: Array.from(rg)
                })
            }), [o, s]), Sm.createElement(e, { ...n
            })
        };
        return xm(n, e), n
    }

    function kg() {
        const e = Pt(),
            t = e ? Nt(e) : void 0;
        if (!t) return;
        const n = It(t).op;
        return "navigation" === n || "pageload" === n ? t : void 0
    }

    function Eg(e) {
        return ig(e, "6")
    }

    function xg(e) {
        return ag(e, "6")
    }
    const Cg = xg;

    function Tg(e) {
        return og(e, "6")
    }
    const Ig = Tg;

    function Mg(e) {
        return sg(e, "6")
    }

    function Rg(e) {
        return wg(e, "6")
    }

    function Ag(e) {
        return ig(e, "7")
    }

    function Og(e) {
        return wg(e, "7")
    }

    function Dg(e) {
        return og(e, "7")
    }

    function Lg(e) {
        return sg(e, "7")
    }

    function Ng(e) {
        return ag(e, "7")
    }
}
}]);