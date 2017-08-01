(function(b, l) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = b.document ? l(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return l(b)
    } : l(b)
})("undefined" !== typeof window ? window : this, function(b, l) {
    function m(a) {
        var c = a.length,
            g = e.type(a);
        return "function" === g || e.isWindow(a) ? !1 : 1 === a.nodeType && c ? !0 : "array" === g || 0 === c || "number" === typeof c && 0 < c && c - 1 in a
    }

    function f(a, c, g) {
        if (e.isFunction(c)) return e.grep(a, function(a, e) {
            return !!c.call(a,
                e, a) !== g
        });
        if (c.nodeType) return e.grep(a, function(a) {
            return a === c !== g
        });
        if ("string" === typeof c) {
            if (wa.test(c)) return e.filter(c, a, g);
            c = e.filter(c, a)
        }
        return e.grep(a, function(a) {
            return 0 <= e.inArray(a, c) !== g
        })
    }

    function k(a, c) {
        do a = a[c]; while (a && 1 !== a.nodeType);
        return a
    }

    function h(a) {
        var c = lb[a] = {};
        e.each(a.match(da) || [], function(a, e) {
            c[e] = !0
        });
        return c
    }

    function d() {
        x.addEventListener ? (x.removeEventListener("DOMContentLoaded", n, !1), b.removeEventListener("load", n, !1)) : (x.detachEvent("onreadystatechange",
            n), b.detachEvent("onload", n))
    }

    function n() {
        if (x.addEventListener || "load" === event.type || "complete" === x.readyState) d(), e.ready()
    }

    function r(a, c, g) {
        if (void 0 === g && 1 === a.nodeType)
            if (g = "data-" + c.replace(Ib, "-$1").toLowerCase(), g = a.getAttribute(g), "string" === typeof g) {
                try {
                    g = "true" === g ? !0 : "false" === g ? !1 : "null" === g ? null : +g + "" === g ? +g : Jb.test(g) ? e.parseJSON(g) : g
                } catch (q) {}
                e.data(a, c, g)
            } else g = void 0;
        return g
    }

    function u(a) {
        for (var c in a)
            if (("data" !== c || !e.isEmptyObject(a[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function v(a, c, g, q) {
        if (e.acceptData(a)) {
            var p = e.expando,
                t = a.nodeType,
                b = t ? e.cache : a,
                d = t ? a[p] : a[p] && p;
            if (d && b[d] && (q || b[d].data) || void 0 !== g || "string" !== typeof c) {
                d || (d = t ? a[p] = L.pop() || e.guid++ : p);
                b[d] || (b[d] = t ? {} : {
                    toJSON: e.noop
                });
                if ("object" === typeof c || "function" === typeof c) q ? b[d] = e.extend(b[d], c) : b[d].data = e.extend(b[d].data, c);
                a = b[d];
                q || (a.data || (a.data = {}), a = a.data);
                void 0 !== g && (a[e.camelCase(c)] = g);
                "string" === typeof c ? (g = a[c], null == g && (g = a[e.camelCase(c)])) : g = a;
                return g
            }
        }
    }

    function y(a, c, g) {
        if (e.acceptData(a)) {
            var q,
                p, t = a.nodeType,
                b = t ? e.cache : a,
                d = t ? a[e.expando] : e.expando;
            if (b[d]) {
                if (c && (q = g ? b[d] : b[d].data)) {
                    e.isArray(c) ? c = c.concat(e.map(c, e.camelCase)) : c in q ? c = [c] : (c = e.camelCase(c), c = c in q ? [c] : c.split(" "));
                    for (p = c.length; p--;) delete q[c[p]];
                    if (g ? !u(q) : !e.isEmptyObject(q)) return
                }
                if (!g && (delete b[d].data, !u(b[d]))) return;
                t ? e.cleanData([a], !0) : w.deleteExpando || b != b.window ? delete b[d] : b[d] = null
            }
        }
    }

    function A() {
        return !0
    }

    function z() {
        return !1
    }

    function H() {
        try {
            return x.activeElement
        } catch (a) {}
    }

    function I(a) {
        var c =
            mb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; c.length;) a.createElement(c.pop());
        return a
    }

    function C(a, c) {
        var g, q, p = 0,
            t = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(c || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(c || "*") : void 0;
        if (!t)
            for (t = [], g = a.childNodes || a; null != (q = g[p]); p++) !c || e.nodeName(q, c) ? t.push(q) : e.merge(t, C(q, c));
        return void 0 === c || c && e.nodeName(a, c) ? e.merge([a], t) : t
    }

    function B(a) {
        $a.test(a.type) && (a.defaultChecked = a.checked)
    }

    function J(a, c) {
        return e.nodeName(a, "table") && e.nodeName(11 !== c.nodeType ? c : c.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function M(a) {
        a.type = (null !== e.find.attr(a, "type")) + "/" + a.type;
        return a
    }

    function E(a) {
        var c = Kb.exec(a.type);
        c ? a.type = c[1] : a.removeAttribute("type");
        return a
    }

    function U(a, c) {
        for (var g, q = 0; null != (g = a[q]); q++) e._data(g, "globalEval", !c || e._data(c[q], "globalEval"))
    }

    function S(a, c) {
        if (1 === c.nodeType && e.hasData(a)) {
            var g,
                q, p;
            q = e._data(a);
            var t = e._data(c, q),
                b = q.events;
            if (b)
                for (g in delete t.handle, t.events = {}, b)
                    for (q = 0, p = b[g].length; q < p; q++) e.event.add(c, g, b[g][q]);
            t.data && (t.data = e.extend({}, t.data))
        }
    }

    function ua(a, c) {
        var g = e(c.createElement(a)).appendTo(c.body),
            q = b.getDefaultComputedStyle ? b.getDefaultComputedStyle(g[0]).display : e.css(g[0], "display");
        g.detach();
        return q
    }

    function W(a) {
        var c = x,
            g = nb[a];
        g || (g = ua(a, c), "none" !== g && g || (Ca = (Ca || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(c.documentElement),
            c = (Ca[0].contentWindow || Ca[0].contentDocument).document, c.write(), c.close(), g = ua(a, c), Ca.detach()), nb[a] = g);
        return g
    }

    function Da(a, c) {
        return {
            get: function() {
                var g = a();
                if (null != g)
                    if (g) delete this.get;
                    else return (this.get = c).apply(this, arguments)
            }
        }
    }

    function Ea(a, c) {
        if (c in a) return c;
        for (var g = c.charAt(0).toUpperCase() + c.slice(1), e = c, p = ob.length; p--;)
            if (c = ob[p] + g, c in a) return c;
        return e
    }

    function ea(a, c) {
        for (var g, q, p, b = [], d = 0, h = a.length; d < h; d++) q = a[d], q.style && (b[d] = e._data(q, "olddisplay"), g = q.style.display,
            c ? (b[d] || "none" !== g || (q.style.display = ""), "" === q.style.display && Fa(q) && (b[d] = e._data(q, "olddisplay", W(q.nodeName)))) : b[d] || (p = Fa(q), (g && "none" !== g || !p) && e._data(q, "olddisplay", p ? g : e.css(q, "display"))));
        for (d = 0; d < h; d++) q = a[d], !q.style || c && "none" !== q.style.display && "" !== q.style.display || (q.style.display = c ? b[d] || "" : "none");
        return a
    }

    function Ga(a, c, g) {
        return (a = Lb.exec(c)) ? Math.max(0, a[1] - (g || 0)) + (a[2] || "px") : c
    }

    function X(a, c, g, q, p) {
        c = g === (q ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var b = 0; 4 > c; c += 2) "margin" ===
            g && (b += e.css(a, g + ka[c], !0, p)), q ? ("content" === g && (b -= e.css(a, "padding" + ka[c], !0, p)), "margin" !== g && (b -= e.css(a, "border" + ka[c] + "Width", !0, p))) : (b += e.css(a, "padding" + ka[c], !0, p), "padding" !== g && (b += e.css(a, "border" + ka[c] + "Width", !0, p)));
        return b
    }

    function Ha(a, c, g) {
        var q = !0,
            p = "width" === c ? a.offsetWidth : a.offsetHeight,
            b = la(a),
            d = w.boxSizing() && "border-box" === e.css(a, "boxSizing", !1, b);
        if (0 >= p || null == p) {
            p = ma(a, c, b);
            if (0 > p || null == p) p = a.style[c];
            if (Ra.test(p)) return p;
            q = d && (w.boxSizingReliable() || p === a.style[c]);
            p = parseFloat(p) || 0
        }
        return p + X(a, c, g || (d ? "border" : "content"), q, b) + "px"
    }

    function N(a, c, g, e, p) {
        return new N.prototype.init(a, c, g, e, p)
    }

    function K() {
        setTimeout(function() {
            ha = void 0
        });
        return ha = e.now()
    }

    function fa(a, c) {
        var g, e = {
                height: a
            },
            p = 0;
        for (c = c ? 1 : 0; 4 > p; p += 2 - c) g = ka[p], e["margin" + g] = e["padding" + g] = a;
        c && (e.opacity = e.width = a);
        return e
    }

    function Ia(a, c, g) {
        for (var e, p = (Ja[c] || []).concat(Ja["*"]), b = 0, d = p.length; b < d; b++)
            if (e = p[b].call(g, c, a)) return e
    }

    function qa(a, c) {
        var g, q, p, b, d;
        for (g in a)
            if (q = e.camelCase(g),
                p = c[q], b = a[g], e.isArray(b) && (p = b[1], b = a[g] = b[0]), g !== q && (a[q] = b, delete a[g]), (d = e.cssHooks[q]) && "expand" in d)
                for (g in b = d.expand(b), delete a[q], b) g in a || (a[g] = b[g], c[g] = p);
            else c[q] = p
    }

    function Ka(a, c, g) {
        var q, b = 0,
            t = Sa.length,
            d = e.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                if (q) return !1;
                for (var c = ha || K(), c = Math.max(0, f.startTime + f.duration - c), g = 1 - (c / f.duration || 0), e = 0, b = f.tweens.length; e < b; e++) f.tweens[e].run(g);
                d.notifyWith(a, [f, g, c]);
                if (1 > g && b) return c;
                d.resolveWith(a, [f]);
                return !1
            },
            f = d.promise({
                elem: a,
                props: e.extend({}, c),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, g),
                originalProperties: c,
                originalOptions: g,
                startTime: ha || K(),
                duration: g.duration,
                tweens: [],
                createTween: function(c, g) {
                    var q = e.Tween(a, f.opts, c, g, f.opts.specialEasing[c] || f.opts.easing);
                    f.tweens.push(q);
                    return q
                },
                stop: function(c) {
                    var g = 0,
                        e = c ? f.tweens.length : 0;
                    if (q) return this;
                    for (q = !0; g < e; g++) f.tweens[g].run(1);
                    c ? d.resolveWith(a, [f, c]) : d.rejectWith(a, [f, c]);
                    return this
                }
            });
        g = f.props;
        for (qa(g, f.opts.specialEasing); b < t; b++)
            if (c =
                Sa[b].call(f, a, g, f.opts)) return c;
        e.map(g, Ia, f);
        e.isFunction(f.opts.start) && f.opts.start.call(a, f);
        e.fx.timer(e.extend(h, {
            elem: a,
            anim: f,
            queue: f.opts.queue
        }));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function La(a) {
        return function(c, g) {
            "string" !== typeof c && (g = c, c = "*");
            var q, b = 0,
                t = c.toLowerCase().match(da) || [];
            if (e.isFunction(g))
                for (; q = t[b++];) "+" === q.charAt(0) ? (q = q.slice(1) || "*", (a[q] = a[q] || []).unshift(g)) : (a[q] = a[q] || []).push(g)
        }
    }

    function xa(a, c, g, q) {
        function b(f) {
            var h;
            t[f] = !0;
            e.each(a[f] || [], function(a, e) {
                var f = e(c, g, q);
                if ("string" === typeof f && !d && !t[f]) return c.dataTypes.unshift(f), b(f), !1;
                if (d) return !(h = f)
            });
            return h
        }
        var t = {},
            d = a === ab;
        return b(c.dataTypes[0]) || !t["*"] && b("*")
    }

    function na(a, c) {
        var g, q, b = e.ajaxSettings.flatOptions || {};
        for (q in c) void 0 !== c[q] && ((b[q] ? a : g || (g = {}))[q] = c[q]);
        g && e.extend(!0, a, g);
        return a
    }

    function ya(a, c, g, q) {
        var b;
        if (e.isArray(c)) e.each(c, function(c, e) {
            g || Mb.test(a) ? q(a, e) : ya(a + "[" + ("object" ===
                typeof e ? c : "") + "]", e, g, q)
        });
        else if (g || "object" !== e.type(c)) q(a, c);
        else
            for (b in c) ya(a + "[" + b + "]", c[b], g, q)
    }

    function Ma() {
        try {
            return new b.XMLHttpRequest
        } catch (a) {}
    }

    function Na(a) {
        return e.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var L = [],
        Y = L.slice,
        za = L.concat,
        Aa = L.push,
        O = L.indexOf,
        T = {},
        F = T.toString,
        aa = T.hasOwnProperty,
        Oa = "".trim,
        w = {},
        e = function(a, c) {
            return new e.fn.init(a, c)
        },
        bb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        Q = /-([\da-z])/gi,
        G = function(a, c) {
            return c.toUpperCase()
        };
    e.fn = e.prototype = {
        jquery: "1.11.0",
        constructor: e,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function(a) {
            a = e.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a, c) {
            return e.each(this, a, c)
        },
        map: function(a) {
            return this.pushStack(e.map(this, function(c, g) {
                return a.call(c, g, c)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var c = this.length;
            a = +a + (0 > a ? c : 0);
            return this.pushStack(0 <= a && a < c ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Aa,
        sort: L.sort,
        splice: L.splice
    };
    e.extend = e.fn.extend = function() {
        var a, c, g, q, b, t = arguments[0] || {},
            d = 1,
            f = arguments.length,
            h = !1;
        "boolean" === typeof t && (h = t, t = arguments[d] || {}, d++);
        "object" === typeof t || e.isFunction(t) || (t = {});
        d === f && (t = this, d--);
        for (; d < f; d++)
            if (null != (b = arguments[d]))
                for (q in b) a = t[q], g = b[q],
                    t !== g && (h && g && (e.isPlainObject(g) || (c = e.isArray(g))) ? (c ? (c = !1, a = a && e.isArray(a) ? a : []) : a = a && e.isPlainObject(a) ? a : {}, t[q] = e.extend(h, a, g)) : void 0 !== g && (t[q] = g));
        return t
    };
    e.extend({
        expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === e.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === e.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return 0 <= a -
                parseFloat(a)
        },
        isEmptyObject: function(a) {
            for (var c in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== e.type(a) || a.nodeType || e.isWindow(a)) return !1;
            try {
                if (a.constructor && !aa.call(a, "constructor") && !aa.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (g) {
                return !1
            }
            if (w.ownLast)
                for (c in a) return aa.call(a, c);
            for (c in a);
            return void 0 === c || aa.call(a, c)
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? T[F.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            a &&
                e.trim(a) && (b.execScript || function(a) {
                    b.eval.call(b, a)
                })(a)
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(Q, G)
        },
        nodeName: function(a, c) {
            return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(a, c, g) {
            var e, b = 0,
                t = a.length;
            e = m(a);
            if (g)
                if (e)
                    for (; b < t && (e = c.apply(a[b], g), !1 !== e); b++);
                else
                    for (b in a) {
                        if (e = c.apply(a[b], g), !1 === e) break
                    } else if (e)
                        for (; b < t && (e = c.call(a[b], b, a[b]), !1 !== e); b++);
                    else
                        for (b in a)
                            if (e = c.call(a[b], b, a[b]), !1 === e) break;
            return a
        },
        trim: Oa && !Oa.call("\ufeff\u00a0") ?
            function(a) {
                return null == a ? "" : Oa.call(a)
            } : function(a) {
                return null == a ? "" : (a + "").replace(bb, "")
            },
        makeArray: function(a, c) {
            var g = c || [];
            null != a && (m(Object(a)) ? e.merge(g, "string" === typeof a ? [a] : a) : Aa.call(g, a));
            return g
        },
        inArray: function(a, c, g) {
            var e;
            if (c) {
                if (O) return O.call(c, a, g);
                e = c.length;
                for (g = g ? 0 > g ? Math.max(0, e + g) : g : 0; g < e; g++)
                    if (g in c && c[g] === a) return g
            }
            return -1
        },
        merge: function(a, c) {
            for (var g = +c.length, e = 0, b = a.length; e < g;) a[b++] = c[e++];
            if (g !== g)
                for (; void 0 !== c[e];) a[b++] = c[e++];
            a.length = b;
            return a
        },
        grep: function(a, c, g) {
            for (var e = [], b = 0, t = a.length, d = !g; b < t; b++) g = !c(a[b], b), g !== d && e.push(a[b]);
            return e
        },
        map: function(a, c, g) {
            var e, b = 0,
                t = a.length,
                d = [];
            if (m(a))
                for (; b < t; b++) e = c(a[b], b, g), null != e && d.push(e);
            else
                for (b in a) e = c(a[b], b, g), null != e && d.push(e);
            return za.apply([], d)
        },
        guid: 1,
        proxy: function(a, c) {
            var g, q;
            "string" === typeof c && (q = a[c], c = a, a = q);
            if (e.isFunction(a)) return g = Y.call(arguments, 2), q = function() {
                return a.apply(c || this, g.concat(Y.call(arguments)))
            }, q.guid = a.guid = a.guid || e.guid++, q
        },
        now: function() {
            return +new Date
        },
        support: w
    });
    e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, c) {
        T["[object " + c + "]"] = c.toLowerCase()
    });
    var R = function(a) {
        function c(a, c, g, e) {
            var b, q, p, t, d;
            (c ? c.ownerDocument || c : ga) !== G && w(c);
            c = c || G;
            g = g || [];
            if (!a || "string" !== typeof a) return g;
            if (1 !== (t = c.nodeType) && 9 !== t) return [];
            if (R && !e) {
                if (b = pa.exec(a))
                    if (p = b[1])
                        if (9 === t)
                            if ((q = c.getElementById(p)) && q.parentNode) {
                                if (q.id === p) return g.push(q), g
                            } else return g;
                else {
                    if (c.ownerDocument && (q = c.ownerDocument.getElementById(p)) &&
                        F(c, q) && q.id === p) return g.push(q), g
                } else {
                    if (b[2]) return L.apply(g, c.getElementsByTagName(a)), g;
                    if ((p = b[3]) && y.getElementsByClassName && c.getElementsByClassName) return L.apply(g, c.getElementsByClassName(p)), g
                }
                if (y.qsa && (!V || !V.test(a))) {
                    q = b = P;
                    p = c;
                    d = 9 === t && a;
                    if (1 === t && "object" !== c.nodeName.toLowerCase()) {
                        t = l(a);
                        (b = c.getAttribute("id")) ? q = b.replace(qa, "\\$&"): c.setAttribute("id", q);
                        q = "[id='" + q + "'] ";
                        for (p = t.length; p--;) t[p] = q + r(t[p]);
                        p = ha.test(a) && m(c.parentNode) || c;
                        d = t.join(",")
                    }
                    if (d) try {
                        return L.apply(g,
                            p.querySelectorAll(d)), g
                    } catch (f) {} finally {
                        b || c.removeAttribute("id")
                    }
                }
            }
            var h;
            a: {
                a = a.replace(aa, "$1");
                q = l(a);
                if (!e && 1 === q.length) {
                    b = q[0] = q[0].slice(0);
                    if (2 < b.length && "ID" === (h = b[0]).type && y.getById && 9 === c.nodeType && R && z.relative[b[1].type]) {
                        c = (z.find.ID(h.matches[0].replace(ra, sa), c) || [])[0];
                        if (!c) {
                            h = g;
                            break a
                        }
                        a = a.slice(b.shift().value.length)
                    }
                    for (t = fa.needsContext.test(a) ? 0 : b.length; t--;) {
                        h = b[t];
                        if (z.relative[p = h.type]) break;
                        if (p = z.find[p])
                            if (e = p(h.matches[0].replace(ra, sa), ha.test(b[0].type) && m(c.parentNode) ||
                                    c)) {
                                b.splice(t, 1);
                                a = e.length && r(b);
                                if (!a) {
                                    L.apply(g, e);
                                    h = g;
                                    break a
                                }
                                break
                            }
                    }
                }
                I(a, q)(e, c, !R, g, ha.test(a) && m(c.parentNode) || c);
                h = g
            }
            return h
        }

        function g() {
            function a(g, e) {
                c.push(g + " ") > z.cacheLength && delete a[c.shift()];
                return a[g + " "] = e
            }
            var c = [];
            return a
        }

        function e(a) {
            a[P] = !0;
            return a
        }

        function b(a) {
            var c = G.createElement("div");
            try {
                return !!a(c)
            } catch (g) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        }

        function t(a, c) {
            for (var g = a.split("|"), e = a.length; e--;) z.attrHandle[g[e]] = c
        }

        function d(a, c) {
            var g =
                c && a,
                e = g && 1 === a.nodeType && 1 === c.nodeType && (~c.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (e) return e;
            if (g)
                for (; g = g.nextSibling;)
                    if (g === c) return -1;
            return a ? 1 : -1
        }

        function f(a) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === a
            }
        }

        function h(a) {
            return function(c) {
                var g = c.nodeName.toLowerCase();
                return ("input" === g || "button" === g) && c.type === a
            }
        }

        function n(a) {
            return e(function(c) {
                c = +c;
                return e(function(g, e) {
                    for (var b, q = a([], g.length, c), p = q.length; p--;) g[b = q[p]] && (g[b] = !(e[b] =
                        g[b]))
                })
            })
        }

        function m(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function k() {}

        function l(a, g) {
            var e, b, q, p, t, d, f;
            if (t = K[a + " "]) return g ? 0 : t.slice(0);
            t = a;
            d = [];
            for (f = z.preFilter; t;) {
                if (!e || (b = ia.exec(t))) b && (t = t.slice(b[0].length) || t), d.push(q = []);
                e = !1;
                if (b = ja.exec(t)) e = b.shift(), q.push({
                    value: e,
                    type: b[0].replace(aa, " ")
                }), t = t.slice(e.length);
                for (p in z.filter) !(b = fa[p].exec(t)) || f[p] && !(b = f[p](b)) || (e = b.shift(), q.push({
                    value: e,
                    type: p,
                    matches: b
                }), t = t.slice(e.length));
                if (!e) break
            }
            return g ?
                t.length : t ? c.error(a) : K(a, d).slice(0)
        }

        function r(a) {
            for (var c = 0, g = a.length, e = ""; c < g; c++) e += a[c].value;
            return e
        }

        function v(a, c, g) {
            var e = c.dir,
                b = g && "parentNode" === e,
                q = Ta++;
            return c.first ? function(c, g, q) {
                for (; c = c[e];)
                    if (1 === c.nodeType || b) return a(c, g, q)
            } : function(c, g, p) {
                var t, d, f = [S, q];
                if (p)
                    for (; c = c[e];) {
                        if ((1 === c.nodeType || b) && a(c, g, p)) return !0
                    } else
                        for (; c = c[e];)
                            if (1 === c.nodeType || b) {
                                d = c[P] || (c[P] = {});
                                if ((t = d[e]) && t[0] === S && t[1] === q) return f[2] = t[2];
                                d[e] = f;
                                if (f[2] = a(c, g, p)) return !0
                            }
            }
        }

        function u(a) {
            return 1 <
                a.length ? function(c, g, e) {
                    for (var b = a.length; b--;)
                        if (!a[b](c, g, e)) return !1;
                    return !0
                } : a[0]
        }

        function ba(a, c, g, e, b) {
            for (var q, p = [], t = 0, d = a.length, f = null != c; t < d; t++)
                if (q = a[t])
                    if (!g || g(q, e, b)) p.push(q), f && c.push(t);
            return p
        }

        function M(a, g, b, p, t, d) {
            p && !p[P] && (p = M(p));
            t && !t[P] && (t = M(t, d));
            return e(function(e, q, d, f) {
                var h, n, m = [],
                    k = [],
                    l = q.length,
                    r;
                if (!(r = e)) {
                    r = g || "*";
                    for (var D = d.nodeType ? [d] : d, v = [], u = 0, Qa = D.length; u < Qa; u++) c(r, D[u], v);
                    r = v
                }
                r = !a || !e && g ? r : ba(r, m, a, d, f);
                D = b ? t || (e ? a : l || p) ? [] : q : r;
                b && b(r, D, d, f);
                if (p)
                    for (h =
                        ba(D, k), p(h, [], d, f), d = h.length; d--;)
                        if (n = h[d]) D[k[d]] = !(r[k[d]] = n);
                if (e) {
                    if (t || a) {
                        if (t) {
                            h = [];
                            for (d = D.length; d--;)(n = D[d]) && h.push(r[d] = n);
                            t(null, D = [], h, f)
                        }
                        for (d = D.length; d--;)(n = D[d]) && -1 < (h = t ? T.call(e, n) : m[d]) && (e[h] = !(q[h] = n))
                    }
                } else D = ba(D === q ? D.splice(l, D.length) : D), t ? t(null, q, D, f) : L.apply(q, D)
            })
        }

        function Q(a) {
            var c, g, e, b = a.length,
                q = z.relative[a[0].type];
            g = q || z.relative[" "];
            for (var p = q ? 1 : 0, t = v(function(a) {
                    return a === c
                }, g, !0), d = v(function(a) {
                    return -1 < T.call(c, a)
                }, g, !0), f = [function(a, g, e) {
                    return !q &&
                        (e || g !== C) || ((c = g).nodeType ? t(a, g, e) : d(a, g, e))
                }]; p < b; p++)
                if (g = z.relative[a[p].type]) f = [v(u(f), g)];
                else {
                    g = z.filter[a[p].type].apply(null, a[p].matches);
                    if (g[P]) {
                        for (e = ++p; e < b && !z.relative[a[e].type]; e++);
                        return M(1 < p && u(f), 1 < p && r(a.slice(0, p - 1).concat({
                            value: " " === a[p - 2].type ? "*" : ""
                        })).replace(aa, "$1"), g, p < e && Q(a.slice(p, e)), e < b && Q(a = a.slice(e)), e < b && r(a))
                    }
                    f.push(g)
                }
            return u(f)
        }

        function H(a, g) {
            var b = 0 < g.length,
                p = 0 < a.length,
                t = function(e, q, t, d, f) {
                    var h, n, m, k = 0,
                        D = "0",
                        r = e && [],
                        l = [],
                        v = C,
                        u = e || p && z.find.TAG("*",
                            f),
                        Qa = S += null == v ? 1 : Math.random() || .1,
                        M = u.length;
                    for (f && (C = q !== G && q); D !== M && null != (h = u[D]); D++) {
                        if (p && h) {
                            for (n = 0; m = a[n++];)
                                if (m(h, q, t)) {
                                    d.push(h);
                                    break
                                }
                            f && (S = Qa)
                        }
                        b && ((h = !m && h) && k--, e && r.push(h))
                    }
                    k += D;
                    if (b && D !== k) {
                        for (n = 0; m = g[n++];) m(r, l, q, t);
                        if (e) {
                            if (0 < k)
                                for (; D--;) r[D] || l[D] || (l[D] = X.call(d));
                            l = ba(l)
                        }
                        L.apply(d, l);
                        f && !e && 0 < l.length && 1 < k + g.length && c.uniqueSort(d)
                    }
                    f && (S = Qa, C = v);
                    return r
                };
            return b ? e(t) : t
        }
        var J, y, z, B, A, I, C, E, x, w, G, U, R, V, va, wa, F, P = "sizzle" + -new Date,
            ga = a.document,
            S = 0,
            Ta = 0,
            ta = g(),
            K = g(),
            N =
            g(),
            O = function(a, c) {
                a === c && (x = !0);
                return 0
            },
            ua = {}.hasOwnProperty,
            W = [],
            X = W.pop,
            Z = W.push,
            L = W.push,
            Y = W.slice,
            T = W.indexOf || function(a) {
                for (var c = 0, g = this.length; c < g; c++)
                    if (this[c] === a) return c;
                return -1
            },
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            ea = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + da + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            Pa = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
            ea.replace(3, 8) + ")*)|.*)\\)|)",
            aa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ia = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ja = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ka = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            la = new RegExp(Pa),
            ma = new RegExp("^" + da + "$"),
            fa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + Pa),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            na = /^(?:input|select|textarea|button)$/i,
            oa = /^h\d$/i,
            ca = /^[^{]+\{\s*\[native \w/,
            pa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ha = /[+~]/,
            qa = /'|\\/g,
            ra = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            sa = function(a, c, g) {
                a = "0x" + c - 65536;
                return a !== a || g ? c : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            };
        try {
            L.apply(W = Y.call(ga.childNodes), ga.childNodes), W[ga.childNodes.length].nodeType
        } catch (sc) {
            L = {
                apply: W.length ? function(a, c) {
                    Z.apply(a, Y.call(c))
                } : function(a, c) {
                    for (var g = a.length, e = 0; a[g++] = c[e++];);
                    a.length = g - 1
                }
            }
        }
        y = c.support = {};
        A = c.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        w = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : ga;
            a = c.defaultView;
            if (c ===
                G || 9 !== c.nodeType || !c.documentElement) return G;
            G = c;
            U = c.documentElement;
            R = !A(c);
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                w()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                w()
            }));
            y.attributes = b(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            y.getElementsByTagName = b(function(a) {
                a.appendChild(c.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            y.getElementsByClassName = ca.test(c.getElementsByClassName) && b(function(a) {
                a.innerHTML =
                    "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return 2 === a.getElementsByClassName("i").length
            });
            y.getById = b(function(a) {
                U.appendChild(a).id = P;
                return !c.getElementsByName || !c.getElementsByName(P).length
            });
            y.getById ? (z.find.ID = function(a, c) {
                if ("undefined" !== typeof c.getElementById && R) {
                    var g = c.getElementById(a);
                    return g && g.parentNode ? [g] : []
                }
            }, z.filter.ID = function(a) {
                var c = a.replace(ra, sa);
                return function(a) {
                    return a.getAttribute("id") === c
                }
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var c =
                    a.replace(ra, sa);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === c
                }
            });
            z.find.TAG = y.getElementsByTagName ? function(a, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(a)
            } : function(a, c) {
                var g, e = [],
                    b = 0,
                    q = c.getElementsByTagName(a);
                if ("*" === a) {
                    for (; g = q[b++];) 1 === g.nodeType && e.push(g);
                    return e
                }
                return q
            };
            z.find.CLASS = y.getElementsByClassName && function(a, c) {
                if ("undefined" !== typeof c.getElementsByClassName && R) return c.getElementsByClassName(a)
            };
            va = [];
            V = [];
            if (y.qsa = ca.test(c.querySelectorAll)) b(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>";
                a.querySelectorAll("[t^='']").length && V.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || V.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || V.push(":checked")
            }), b(function(a) {
                var g =
                    c.createElement("input");
                g.setAttribute("type", "hidden");
                a.appendChild(g).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && V.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || V.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                V.push(",.*:")
            });
            (y.matchesSelector = ca.test(wa = U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && b(function(a) {
                y.disconnectedMatch = wa.call(a, "div");
                wa.call(a, "[s!='']:x");
                va.push("!=",
                    Pa)
            });
            V = V.length && new RegExp(V.join("|"));
            va = va.length && new RegExp(va.join("|"));
            F = (a = ca.test(U.compareDocumentPosition)) || ca.test(U.contains) ? function(a, c) {
                var g = 9 === a.nodeType ? a.documentElement : a,
                    e = c && c.parentNode;
                return a === e || !!(e && 1 === e.nodeType && (g.contains ? g.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
            } : function(a, c) {
                if (c)
                    for (; c = c.parentNode;)
                        if (c === a) return !0;
                return !1
            };
            O = a ? function(a, g) {
                if (a === g) return x = !0, 0;
                var e = !a.compareDocumentPosition - !g.compareDocumentPosition;
                if (e) return e;
                e = (a.ownerDocument || a) === (g.ownerDocument || g) ? a.compareDocumentPosition(g) : 1;
                return e & 1 || !y.sortDetached && g.compareDocumentPosition(a) === e ? a === c || a.ownerDocument === ga && F(ga, a) ? -1 : g === c || g.ownerDocument === ga && F(ga, g) ? 1 : E ? T.call(E, a) - T.call(E, g) : 0 : e & 4 ? -1 : 1
            } : function(a, g) {
                if (a === g) return x = !0, 0;
                var e, b = 0;
                e = a.parentNode;
                var q = g.parentNode,
                    p = [a],
                    t = [g];
                if (!e || !q) return a === c ? -1 : g === c ? 1 : e ? -1 : q ? 1 : E ? T.call(E, a) - T.call(E, g) : 0;
                if (e === q) return d(a, g);
                for (e = a; e = e.parentNode;) p.unshift(e);
                for (e = g; e =
                    e.parentNode;) t.unshift(e);
                for (; p[b] === t[b];) b++;
                return b ? d(p[b], t[b]) : p[b] === ga ? -1 : t[b] === ga ? 1 : 0
            };
            return c
        };
        c.matches = function(a, g) {
            return c(a, null, null, g)
        };
        c.matchesSelector = function(a, g) {
            (a.ownerDocument || a) !== G && w(a);
            g = g.replace(ka, "='$1']");
            if (!(!y.matchesSelector || !R || va && va.test(g) || V && V.test(g))) try {
                var e = wa.call(a, g);
                if (e || y.disconnectedMatch || a.document && 11 !== a.document.nodeType) return e
            } catch (b) {}
            return 0 < c(g, G, null, [a]).length
        };
        c.contains = function(a, c) {
            (a.ownerDocument || a) !== G && w(a);
            return F(a,
                c)
        };
        c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && w(a);
            var g = z.attrHandle[c.toLowerCase()],
                g = g && ua.call(z.attrHandle, c.toLowerCase()) ? g(a, c, !R) : void 0;
            return void 0 !== g ? g : y.attributes || !R ? a.getAttribute(c) : (g = a.getAttributeNode(c)) && g.specified ? g.value : null
        };
        c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        c.uniqueSort = function(a) {
            var c, g = [],
                e = 0,
                b = 0;
            x = !y.detectDuplicates;
            E = !y.sortStable && a.slice(0);
            a.sort(O);
            if (x) {
                for (; c = a[b++];) c === a[b] && (e = g.push(b));
                for (; e--;) a.splice(g[e],
                    1)
            }
            E = null;
            return a
        };
        B = c.getText = function(a) {
            var c, g = "",
                e = 0;
            c = a.nodeType;
            if (!c)
                for (; c = a[e++];) g += B(c);
            else if (1 === c || 9 === c || 11 === c) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) g += B(a)
            } else if (3 === c || 4 === c) return a.nodeValue;
            return g
        };
        z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: fa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] =
                        a[1].replace(ra, sa);
                    a[3] = (a[4] || a[5] || "").replace(ra, sa);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var c, g = !a[5] && a[2];
                    if (fa.CHILD.test(a[0])) return null;
                    a[3] && void 0 !== a[4] ? a[2] = a[4] : g && la.test(g) && (c = l(g, !0)) && (c = g.indexOf(")", g.length - c) - g.length) && (a[0] = a[0].slice(0,
                        c), a[2] = g.slice(0, c));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var c = a.replace(ra, sa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === c
                    }
                },
                CLASS: function(a) {
                    var c = ta[a + " "];
                    return c || (c = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ta(a, function(a) {
                        return c.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, g, e) {
                    return function(b) {
                        b =
                            c.attr(b, a);
                        if (null == b) return "!=" === g;
                        if (!g) return !0;
                        b += "";
                        return "=" === g ? b === e : "!=" === g ? b !== e : "^=" === g ? e && 0 === b.indexOf(e) : "*=" === g ? e && -1 < b.indexOf(e) : "$=" === g ? e && b.slice(-e.length) === e : "~=" === g ? -1 < (" " + b + " ").indexOf(e) : "|=" === g ? b === e || b.slice(0, e.length + 1) === e + "-" : !1
                    }
                },
                CHILD: function(a, c, g, e, b) {
                    var q = "nth" !== a.slice(0, 3),
                        p = "last" !== a.slice(-4),
                        t = "of-type" === c;
                    return 1 === e && 0 === b ? function(a) {
                        return !!a.parentNode
                    } : function(c, g, d) {
                        var f, h, n, m, k;
                        g = q !== p ? "nextSibling" : "previousSibling";
                        var D = c.parentNode,
                            l = t && c.nodeName.toLowerCase();
                        d = !d && !t;
                        if (D) {
                            if (q) {
                                for (; g;) {
                                    for (h = c; h = h[g];)
                                        if (t ? h.nodeName.toLowerCase() === l : 1 === h.nodeType) return !1;
                                    k = g = "only" === a && !k && "nextSibling"
                                }
                                return !0
                            }
                            k = [p ? D.firstChild : D.lastChild];
                            if (p && d)
                                for (d = D[P] || (D[P] = {}), f = d[a] || [], m = f[0] === S && f[1], n = f[0] === S && f[2], h = m && D.childNodes[m]; h = ++m && h && h[g] || (n = m = 0) || k.pop();) {
                                    if (1 === h.nodeType && ++n && h === c) {
                                        d[a] = [S, m, n];
                                        break
                                    }
                                } else if (d && (f = (c[P] || (c[P] = {}))[a]) && f[0] === S) n = f[1];
                                else
                                    for (;
                                        (h = ++m && h && h[g] || (n = m = 0) || k.pop()) && ((t ? h.nodeName.toLowerCase() !==
                                            l : 1 !== h.nodeType) || !++n || (d && ((h[P] || (h[P] = {}))[a] = [S, n]), h !== c)););
                            n -= b;
                            return n === e || 0 === n % e && 0 <= n / e
                        }
                    }
                },
                PSEUDO: function(a, g) {
                    var b, p = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return p[P] ? p(g) : 1 < p.length ? (b = [a, a, "", g], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var e, b = p(a, g), q = b.length; q--;) e = T.call(a, b[q]), a[e] = !(c[e] = b[q])
                    }) : function(a) {
                        return p(a, 0, b)
                    }) : p
                }
            },
            pseudos: {
                not: e(function(a) {
                    var c = [],
                        g = [],
                        b = I(a.replace(aa, "$1"));
                    return b[P] ? e(function(a,
                        c, g, e) {
                        e = b(a, null, e, []);
                        for (var q = a.length; q--;)
                            if (g = e[q]) a[q] = !(c[q] = g)
                    }) : function(a, e, q) {
                        c[0] = a;
                        b(c, null, q, g);
                        return !g.pop()
                    }
                }),
                has: e(function(a) {
                    return function(g) {
                        return 0 < c(a, g).length
                    }
                }),
                contains: e(function(a) {
                    return function(c) {
                        return -1 < (c.textContent || c.innerText || B(c)).indexOf(a)
                    }
                }),
                lang: e(function(a) {
                    ma.test(a || "") || c.error("unsupported lang: " + a);
                    a = a.replace(ra, sa).toLowerCase();
                    return function(c) {
                        var g;
                        do
                            if (g = R ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return g = g.toLowerCase(),
                                g === a || 0 === g.indexOf(a + "-");
                        while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
                }),
                target: function(c) {
                    var g = a.location && a.location.hash;
                    return g && g.slice(1) === c.id
                },
                root: function(a) {
                    return a === U
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && !!a.checked || "option" === c && !!a.selected
                },
                selected: function(a) {
                    a.parentNode &&
                        a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !z.pseudos.empty(a)
                },
                header: function(a) {
                    return oa.test(a.nodeName)
                },
                input: function(a) {
                    return na.test(a.nodeName)
                },
                button: function(a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && "button" === a.type || "button" === c
                },
                text: function(a) {
                    var c;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (c = a.getAttribute("type")) || "text" ===
                        c.toLowerCase())
                },
                first: n(function() {
                    return [0]
                }),
                last: n(function(a, c) {
                    return [c - 1]
                }),
                eq: n(function(a, c, g) {
                    return [0 > g ? g + c : g]
                }),
                even: n(function(a, c) {
                    for (var g = 0; g < c; g += 2) a.push(g);
                    return a
                }),
                odd: n(function(a, c) {
                    for (var g = 1; g < c; g += 2) a.push(g);
                    return a
                }),
                lt: n(function(a, c, g) {
                    for (c = 0 > g ? g + c : g; 0 <= --c;) a.push(c);
                    return a
                }),
                gt: n(function(a, c, g) {
                    for (g = 0 > g ? g + c : g; ++g < c;) a.push(g);
                    return a
                })
            }
        };
        z.pseudos.nth = z.pseudos.eq;
        for (J in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) z.pseudos[J] = f(J);
        for (J in {
                submit: !0,
                reset: !0
            }) z.pseudos[J] = h(J);
        k.prototype = z.filters = z.pseudos;
        z.setFilters = new k;
        I = c.compile = function(a, c) {
            var g, e = [],
                b = [],
                q = N[a + " "];
            if (!q) {
                c || (c = l(a));
                for (g = c.length; g--;) q = Q(c[g]), q[P] ? e.push(q) : b.push(q);
                q = N(a, H(b, e))
            }
            return q
        };
        y.sortStable = P.split("").sort(O).join("") === P;
        y.detectDuplicates = !!x;
        w();
        y.sortDetached = b(function(a) {
            return a.compareDocumentPosition(G.createElement("div")) & 1
        });
        b(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || t("type|href|height|width",
            function(a, c, g) {
                if (!g) return a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
            });
        y.attributes && b(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || t("value", function(a, c, g) {
            if (!g && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        });
        b(function(a) {
            return null == a.getAttribute("disabled")
        }) || t("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a,
            c, g) {
            var e;
            if (!g) return !0 === a[c] ? c.toLowerCase() : (e = a.getAttributeNode(c)) && e.specified ? e.value : null
        });
        return c
    }(b);
    e.find = R;
    e.expr = R.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = R.uniqueSort;
    e.text = R.getText;
    e.isXMLDoc = R.isXML;
    e.contains = R.contains;
    var V = e.expr.match.needsContext,
        Ta = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        wa = /^.[^:#\[\.,]*$/;
    e.filter = function(a, c, g) {
        var b = c[0];
        g && (a = ":not(" + a + ")");
        return 1 === c.length && 1 === b.nodeType ? e.find.matchesSelector(b, a) ? [b] : [] : e.find.matches(a, e.grep(c, function(a) {
            return 1 ===
                a.nodeType
        }))
    };
    e.fn.extend({
        find: function(a) {
            var c, g = [],
                b = this,
                p = b.length;
            if ("string" !== typeof a) return this.pushStack(e(a).filter(function() {
                for (c = 0; c < p; c++)
                    if (e.contains(b[c], this)) return !0
            }));
            for (c = 0; c < p; c++) e.find(a, b[c], g);
            g = this.pushStack(1 < p ? e.unique(g) : g);
            g.selector = this.selector ? this.selector + " " + a : a;
            return g
        },
        filter: function(a) {
            return this.pushStack(f(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(f(this, a || [], !0))
        },
        is: function(a) {
            return !!f(this, "string" === typeof a && V.test(a) ? e(a) :
                a || [], !1).length
        }
    });
    var ta, x = b.document,
        Pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (e.fn.init = function(a, c) {
        var g, b;
        if (!a) return this;
        if ("string" === typeof a) {
            g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Pa.exec(a);
            if (!g || !g[1] && c) return !c || c.jquery ? (c || ta).find(a) : this.constructor(c).find(a);
            if (g[1]) {
                if (c = c instanceof e ? c[0] : c, e.merge(this, e.parseHTML(g[1], c && c.nodeType ? c.ownerDocument || c : x, !0)), Ta.test(g[1]) && e.isPlainObject(c))
                    for (g in c)
                        if (e.isFunction(this[g])) this[g](c[g]);
                        else this.attr(g, c[g])
            } else {
                if ((b = x.getElementById(g[2])) && b.parentNode) {
                    if (b.id !== g[2]) return ta.find(a);
                    this.length = 1;
                    this[0] = b
                }
                this.context = x;
                this.selector = a
            }
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (e.isFunction(a)) return "undefined" !== typeof ta.ready ? ta.ready(a) : a(e);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return e.makeArray(a, this)
    }).prototype = e.fn;
    ta = e(x);
    var Ob = /^(?:parents|prev(?:Until|All))/,
        Pb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.extend({
        dir: function(a, c, g) {
            var b = [];
            for (a = a[c]; a && 9 !== a.nodeType && (void 0 === g || 1 !== a.nodeType || !e(a).is(g));) 1 === a.nodeType && b.push(a), a = a[c];
            return b
        },
        sibling: function(a, c) {
            for (var g = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && g.push(a);
            return g
        }
    });
    e.fn.extend({
        has: function(a) {
            var c, g = e(a, this),
                b = g.length;
            return this.filter(function() {
                for (c = 0; c < b; c++)
                    if (e.contains(this, g[c])) return !0
            })
        },
        closest: function(a, c) {
            for (var g, b = 0, p = this.length, t = [], d = V.test(a) || "string" !== typeof a ? e(a, c || this.context) :
                    0; b < p; b++)
                for (g = this[b]; g && g !== c; g = g.parentNode)
                    if (11 > g.nodeType && (d ? -1 < d.index(g) : 1 === g.nodeType && e.find.matchesSelector(g, a))) {
                        t.push(g);
                        break
                    }
            return this.pushStack(1 < t.length ? e.unique(t) : t)
        },
        index: function(a) {
            return a ? "string" === typeof a ? e.inArray(this[0], e(a)) : e.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, c) {
            return this.pushStack(e.unique(e.merge(this.get(), e(a, c))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    e.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return e.dir(a, "parentNode")
        },
        parentsUntil: function(a, c, g) {
            return e.dir(a, "parentNode", g)
        },
        next: function(a) {
            return k(a, "nextSibling")
        },
        prev: function(a) {
            return k(a, "previousSibling")
        },
        nextAll: function(a) {
            return e.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return e.dir(a, "previousSibling")
        },
        nextUntil: function(a, c, g) {
            return e.dir(a, "nextSibling", g)
        },
        prevUntil: function(a, c, g) {
            return e.dir(a, "previousSibling",
                g)
        },
        siblings: function(a) {
            return e.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return e.sibling(a.firstChild)
        },
        contents: function(a) {
            return e.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : e.merge([], a.childNodes)
        }
    }, function(a, c) {
        e.fn[a] = function(g, b) {
            var p = e.map(this, c, g);
            "Until" !== a.slice(-5) && (b = g);
            b && "string" === typeof b && (p = e.filter(b, p));
            1 < this.length && (Pb[a] || (p = e.unique(p)), Ob.test(a) && (p = p.reverse()));
            return this.pushStack(p)
        }
    });
    var da = /\S+/g,
        lb = {};
    e.Callbacks =
        function(a) {
            a = "string" === typeof a ? lb[a] || h(a) : e.extend({}, a);
            var c, g, b, p, t, d, f = [],
                n = !a.once && [],
                m = function(e) {
                    g = a.memory && e;
                    b = !0;
                    t = d || 0;
                    d = 0;
                    p = f.length;
                    for (c = !0; f && t < p; t++)
                        if (!1 === f[t].apply(e[0], e[1]) && a.stopOnFalse) {
                            g = !1;
                            break
                        }
                    c = !1;
                    f && (n ? n.length && m(n.shift()) : g ? f = [] : k.disable())
                },
                k = {
                    add: function() {
                        if (f) {
                            var b = f.length;
                            (function Nb(c) {
                                e.each(c, function(c, g) {
                                    var b = e.type(g);
                                    "function" === b ? a.unique && k.has(g) || f.push(g) : g && g.length && "string" !== b && Nb(g)
                                })
                            })(arguments);
                            c ? p = f.length : g && (d = b, m(g))
                        }
                        return this
                    },
                    remove: function() {
                        f && e.each(arguments, function(a, g) {
                            for (var b; - 1 < (b = e.inArray(g, f, b));) f.splice(b, 1), c && (b <= p && p--, b <= t && t--)
                        });
                        return this
                    },
                    has: function(a) {
                        return a ? -1 < e.inArray(a, f) : !(!f || !f.length)
                    },
                    empty: function() {
                        f = [];
                        p = 0;
                        return this
                    },
                    disable: function() {
                        f = n = g = void 0;
                        return this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        n = void 0;
                        g || k.disable();
                        return this
                    },
                    locked: function() {
                        return !n
                    },
                    fireWith: function(a, g) {
                        !f || b && !n || (g = g || [], g = [a, g.slice ? g.slice() : g], c ? n.push(g) : m(g));
                        return this
                    },
                    fire: function() {
                        k.fireWith(this,
                            arguments);
                        return this
                    },
                    fired: function() {
                        return !!b
                    }
                };
            return k
        };
    e.extend({
        Deferred: function(a) {
            var c = [
                    ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
                ],
                g = "pending",
                b = {
                    state: function() {
                        return g
                    },
                    always: function() {
                        p.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return e.Deferred(function(g) {
                            e.each(c, function(c, d) {
                                var f = e.isFunction(a[c]) && a[c];
                                p[d[1]](function() {
                                    var a =
                                        f && f.apply(this, arguments);
                                    if (a && e.isFunction(a.promise)) a.promise().done(g.resolve).fail(g.reject).progress(g.notify);
                                    else g[d[0] + "With"](this === b ? g.promise() : this, f ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? e.extend(a, b) : b
                    }
                },
                p = {};
            b.pipe = b.then;
            e.each(c, function(a, e) {
                var d = e[2],
                    f = e[3];
                b[e[1]] = d.add;
                f && d.add(function() {
                    g = f
                }, c[a ^ 1][2].disable, c[2][2].lock);
                p[e[0]] = function() {
                    p[e[0] + "With"](this === p ? b : this, arguments);
                    return this
                };
                p[e[0] + "With"] = d.fireWith
            });
            b.promise(p);
            a && a.call(p, p);
            return p
        },
        when: function(a) {
            var c = 0,
                g = Y.call(arguments),
                b = g.length,
                p = 1 !== b || a && e.isFunction(a.promise) ? b : 0,
                t = 1 === p ? a : e.Deferred(),
                d = function(a, c, g) {
                    return function(e) {
                        c[a] = this;
                        g[a] = 1 < arguments.length ? Y.call(arguments) : e;
                        g === f ? t.notifyWith(c, g) : --p || t.resolveWith(c, g)
                    }
                },
                f, h, n;
            if (1 < b)
                for (f = Array(b), h = Array(b), n = Array(b); c < b; c++) g[c] && e.isFunction(g[c].promise) ? g[c].promise().done(d(c, n, g)).fail(t.reject).progress(d(c, h, f)) : --p;
            p || t.resolveWith(n, g);
            return t.promise()
        }
    });
    var Ua;
    e.fn.ready =
        function(a) {
            e.ready.promise().done(a);
            return this
        };
    e.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? e.readyWait++ : e.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--e.readyWait : !e.isReady) {
                if (!x.body) return setTimeout(e.ready);
                e.isReady = !0;
                !0 !== a && 0 < --e.readyWait || (Ua.resolveWith(x, [e]), e.fn.trigger && e(x).trigger("ready").off("ready"))
            }
        }
    });
    e.ready.promise = function(a) {
        if (!Ua)
            if (Ua = e.Deferred(), "complete" === x.readyState) setTimeout(e.ready);
            else if (x.addEventListener) x.addEventListener("DOMContentLoaded",
            n, !1), b.addEventListener("load", n, !1);
        else {
            x.attachEvent("onreadystatechange", n);
            b.attachEvent("onload", n);
            var c = !1;
            try {
                c = null == b.frameElement && x.documentElement
            } catch (g) {}
            c && c.doScroll && function q() {
                if (!e.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(q, 50)
                    }
                    d();
                    e.ready()
                }
            }()
        }
        return Ua.promise(a)
    };
    for (var Qb in e(w)) break;
    w.ownLast = "0" !== Qb;
    w.inlineBlockNeedsLayout = !1;
    e(function() {
        var a, c, g = x.getElementsByTagName("body")[0];
        g && (a = x.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            c = x.createElement("div"), g.appendChild(a).appendChild(c), "undefined" !== typeof c.style.zoom && (c.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", w.inlineBlockNeedsLayout = 3 === c.offsetWidth) && (g.style.zoom = 1), g.removeChild(a))
    });
    (function() {
        var a = x.createElement("div");
        if (null == w.deleteExpando) {
            w.deleteExpando = !0;
            try {
                delete a.test
            } catch (c) {
                w.deleteExpando = !1
            }
        }
    })();
    e.acceptData = function(a) {
        var c = e.noData[(a.nodeName + " ").toLowerCase()],
            g = +a.nodeType || 1;
        return 1 !== g && 9 !== g ?
            !1 : !c || !0 !== c && a.getAttribute("classid") === c
    };
    var Jb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ib = /([A-Z])/g;
    e.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando];
            return !!a && !u(a)
        },
        data: function(a, c, g) {
            return v(a, c, g)
        },
        removeData: function(a, c) {
            return y(a, c)
        },
        _data: function(a, c, g) {
            return v(a, c, g, !0)
        },
        _removeData: function(a, c) {
            return y(a, c, !0)
        }
    });
    e.fn.extend({
        data: function(a, c) {
            var g, b, p,
                t = this[0],
                d = t && t.attributes;
            if (void 0 === a) {
                if (this.length && (p = e.data(t), 1 === t.nodeType && !e._data(t, "parsedAttrs"))) {
                    for (g = d.length; g--;) b = d[g].name, 0 === b.indexOf("data-") && (b = e.camelCase(b.slice(5)), r(t, b, p[b]));
                    e._data(t, "parsedAttrs", !0)
                }
                return p
            }
            return "object" === typeof a ? this.each(function() {
                e.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                e.data(this, a, c)
            }) : t ? r(t, a, e.data(t, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                e.removeData(this, a)
            })
        }
    });
    e.extend({
        queue: function(a,
            c, g) {
            var b;
            if (a) return c = (c || "fx") + "queue", b = e._data(a, c), g && (!b || e.isArray(g) ? b = e._data(a, c, e.makeArray(g)) : b.push(g)), b || []
        },
        dequeue: function(a, c) {
            c = c || "fx";
            var g = e.queue(a, c),
                b = g.length,
                p = g.shift(),
                t = e._queueHooks(a, c),
                d = function() {
                    e.dequeue(a, c)
                };
            "inprogress" === p && (p = g.shift(), b--);
            p && ("fx" === c && g.unshift("inprogress"), delete t.stop, p.call(a, d, t));
            !b && t && t.empty.fire()
        },
        _queueHooks: function(a, c) {
            var g = c + "queueHooks";
            return e._data(a, g) || e._data(a, g, {
                empty: e.Callbacks("once memory").add(function() {
                    e._removeData(a,
                        c + "queue");
                    e._removeData(a, g)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(a, c) {
            var g = 2;
            "string" !== typeof a && (c = a, a = "fx", g--);
            return arguments.length < g ? e.queue(this[0], a) : void 0 === c ? this : this.each(function() {
                var g = e.queue(this, a, c);
                e._queueHooks(this, a);
                "fx" === a && "inprogress" !== g[0] && e.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                e.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var g, b = 1,
                p = e.Deferred(),
                t = this,
                d = this.length,
                f = function() {
                    --b ||
                        p.resolveWith(t, [t])
                };
            "string" !== typeof a && (c = a, a = void 0);
            for (a = a || "fx"; d--;)(g = e._data(t[d], a + "queueHooks")) && g.empty && (b++, g.empty.add(f));
            f();
            return p.promise(c)
        }
    });
    var Va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ka = ["Top", "Right", "Bottom", "Left"],
        Fa = function(a, c) {
            a = c || a;
            return "none" === e.css(a, "display") || !e.contains(a.ownerDocument, a)
        },
        oa = e.access = function(a, c, g, b, p, t, d) {
            var f = 0,
                h = a.length,
                n = null == g;
            if ("object" === e.type(g))
                for (f in p = !0, g) e.access(a, c, f, g[f], !0, t, d);
            else if (void 0 !== b && (p = !0, e.isFunction(b) || (d = !0), n && (d ? (c.call(a, b), c = null) : (n = c, c = function(a, c, g) {
                    return n.call(e(a), g)
                })), c))
                for (; f < h; f++) c(a[f], g, d ? b : b.call(a[f], f, c(a[f], g)));
            return p ? a : n ? c.call(a) : h ? c(a[0], g) : t
        },
        $a = /^(?:checkbox|radio)$/i;
    (function() {
        var a = x.createDocumentFragment(),
            c = x.createElement("div"),
            g = x.createElement("input");
        c.setAttribute("className", "t");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a>";
        w.leadingWhitespace = 3 === c.firstChild.nodeType;
        w.tbody = !c.getElementsByTagName("tbody").length;
        w.htmlSerialize = !!c.getElementsByTagName("link").length;
        w.html5Clone = "<:nav></:nav>" !== x.createElement("nav").cloneNode(!0).outerHTML;
        g.type = "checkbox";
        g.checked = !0;
        a.appendChild(g);
        w.appendChecked = g.checked;
        c.innerHTML = "<textarea>x</textarea>";
        w.noCloneChecked = !!c.cloneNode(!0).lastChild.defaultValue;
        a.appendChild(c);
        c.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        w.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        w.noCloneEvent = !0;
        c.attachEvent && (c.attachEvent("onclick",
            function() {
                w.noCloneEvent = !1
            }), c.cloneNode(!0).click());
        if (null == w.deleteExpando) {
            w.deleteExpando = !0;
            try {
                delete c.test
            } catch (e) {
                w.deleteExpando = !1
            }
        }
        a = c = g = null
    })();
    (function() {
        var a, c, g = x.createElement("div");
        for (a in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + a, (w[a + "Bubbles"] = c in b) || (g.setAttribute(c, "t"), w[a + "Bubbles"] = !1 === g.attributes[c].expando)
    })();
    var cb = /^(?:input|select|textarea)$/i,
        Rb = /^key/,
        Sb = /^(?:mouse|contextmenu)|click/,
        pb = /^(?:focusinfocus|focusoutblur)$/,
        qb = /^([^.]*)(?:\.(.+)|)$/;
    e.event = {
        global: {},
        add: function(a, c, g, b, p) {
            var d, f, h, n, m, k, l, r, v;
            if (h = e._data(a)) {
                g.handler && (n = g, g = n.handler, p = n.selector);
                g.guid || (g.guid = e.guid++);
                (f = h.events) || (f = h.events = {});
                (m = h.handle) || (m = h.handle = function(a) {
                    return "undefined" === typeof e || a && e.event.triggered === a.type ? void 0 : e.event.dispatch.apply(m.elem, arguments)
                }, m.elem = a);
                c = (c || "").match(da) || [""];
                for (h = c.length; h--;) d = qb.exec(c[h]) || [], r = k = d[1], v = (d[2] || "").split(".").sort(), r && (d = e.event.special[r] || {}, r = (p ? d.delegateType : d.bindType) || r, d =
                    e.event.special[r] || {}, k = e.extend({
                        type: r,
                        origType: k,
                        data: b,
                        handler: g,
                        guid: g.guid,
                        selector: p,
                        needsContext: p && e.expr.match.needsContext.test(p),
                        namespace: v.join(".")
                    }, n), (l = f[r]) || (l = f[r] = [], l.delegateCount = 0, d.setup && !1 !== d.setup.call(a, b, v, m) || (a.addEventListener ? a.addEventListener(r, m, !1) : a.attachEvent && a.attachEvent("on" + r, m))), d.add && (d.add.call(a, k), k.handler.guid || (k.handler.guid = g.guid)), p ? l.splice(l.delegateCount++, 0, k) : l.push(k), e.event.global[r] = !0);
                a = null
            }
        },
        remove: function(a, c, g, b, p) {
            var d,
                f, h, n, m, k, r, l, v, u, ba, M = e.hasData(a) && e._data(a);
            if (M && (k = M.events)) {
                c = (c || "").match(da) || [""];
                for (m = c.length; m--;)
                    if (h = qb.exec(c[m]) || [], v = ba = h[1], u = (h[2] || "").split(".").sort(), v) {
                        r = e.event.special[v] || {};
                        v = (b ? r.delegateType : r.bindType) || v;
                        l = k[v] || [];
                        h = h[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (n = d = l.length; d--;) f = l[d], !p && ba !== f.origType || g && g.guid !== f.guid || h && !h.test(f.namespace) || b && b !== f.selector && ("**" !== b || !f.selector) || (l.splice(d, 1), f.selector && l.delegateCount--, r.remove &&
                            r.remove.call(a, f));
                        n && !l.length && (r.teardown && !1 !== r.teardown.call(a, u, M.handle) || e.removeEvent(a, v, M.handle), delete k[v])
                    } else
                        for (v in k) e.event.remove(a, v + c[m], g, b, !0);
                e.isEmptyObject(k) && (delete M.handle, e._removeData(a, "events"))
            }
        },
        trigger: function(a, c, g, q) {
            var p, d, f, h, n, k, m = [g || x],
                r = aa.call(a, "type") ? a.type : a;
            n = aa.call(a, "namespace") ? a.namespace.split(".") : [];
            f = p = g = g || x;
            if (3 !== g.nodeType && 8 !== g.nodeType && !pb.test(r + e.event.triggered) && (0 <= r.indexOf(".") && (n = r.split("."), r = n.shift(), n.sort()),
                    d = 0 > r.indexOf(":") && "on" + r, a = a[e.expando] ? a : new e.Event(r, "object" === typeof a && a), a.isTrigger = q ? 2 : 3, a.namespace = n.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = g), c = null == c ? [a] : e.makeArray(c, [a]), n = e.event.special[r] || {}, q || !n.trigger || !1 !== n.trigger.apply(g, c))) {
                if (!q && !n.noBubble && !e.isWindow(g)) {
                    h = n.delegateType || r;
                    pb.test(h + r) || (f = f.parentNode);
                    for (; f; f = f.parentNode) m.push(f), p = f;
                    p === (g.ownerDocument || x) &&
                        m.push(p.defaultView || p.parentWindow || b)
                }
                for (k = 0;
                    (f = m[k++]) && !a.isPropagationStopped();) a.type = 1 < k ? h : n.bindType || r, (p = (e._data(f, "events") || {})[a.type] && e._data(f, "handle")) && p.apply(f, c), (p = d && f[d]) && p.apply && e.acceptData(f) && (a.result = p.apply(f, c), !1 === a.result && a.preventDefault());
                a.type = r;
                if (!(q || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(m.pop(), c)) && e.acceptData(g) && d && g[r] && !e.isWindow(g)) {
                    (p = g[d]) && (g[d] = null);
                    e.event.triggered = r;
                    try {
                        g[r]()
                    } catch (l) {}
                    e.event.triggered = void 0;
                    p && (g[d] = p)
                }
                return a.result
            }
        },
        dispatch: function(a) {
            a = e.event.fix(a);
            var c, g, b, d, f = [],
                h = Y.call(arguments);
            c = (e._data(this, "events") || {})[a.type] || [];
            var n = e.event.special[a.type] || {};
            h[0] = a;
            a.delegateTarget = this;
            if (!n.preDispatch || !1 !== n.preDispatch.call(this, a)) {
                f = e.event.handlers.call(this, a, c);
                for (c = 0;
                    (b = f[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = b.elem, d = 0;
                        (g = b.handlers[d++]) && !a.isImmediatePropagationStopped();)
                        if (!a.namespace_re || a.namespace_re.test(g.namespace)) a.handleObj = g, a.data =
                            g.data, g = ((e.event.special[g.origType] || {}).handle || g.handler).apply(b.elem, h), void 0 !== g && !1 === (a.result = g) && (a.preventDefault(), a.stopPropagation());
                n.postDispatch && n.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, c) {
            var g, b, d, f, h = [],
                n = c.delegateCount,
                m = a.target;
            if (n && m.nodeType && (!a.button || "click" !== a.type))
                for (; m != this; m = m.parentNode || this)
                    if (1 === m.nodeType && (!0 !== m.disabled || "click" !== a.type)) {
                        d = [];
                        for (f = 0; f < n; f++) b = c[f], g = b.selector + " ", void 0 === d[g] && (d[g] = b.needsContext ?
                            0 <= e(g, this).index(m) : e.find(g, this, null, [m]).length), d[g] && d.push(b);
                        d.length && h.push({
                            elem: m,
                            handlers: d
                        })
                    }
            n < c.length && h.push({
                elem: this,
                handlers: c.slice(n)
            });
            return h
        },
        fix: function(a) {
            if (a[e.expando]) return a;
            var c, g, b;
            c = a.type;
            var d = a,
                f = this.fixHooks[c];
            f || (this.fixHooks[c] = f = Sb.test(c) ? this.mouseHooks : Rb.test(c) ? this.keyHooks : {});
            b = f.props ? this.props.concat(f.props) : this.props;
            a = new e.Event(d);
            for (c = b.length; c--;) g = b[c], a[g] = d[g];
            a.target || (a.target = d.srcElement || x);
            3 === a.target.nodeType && (a.target =
                a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return f.filter ? f.filter(a, d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, c) {
                null == a.which && (a.which = null != c.charCode ? c.charCode : c.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a,
                c) {
                var g, e, b = c.button,
                    d = c.fromElement;
                null == a.pageX && null != c.clientX && (g = a.target.ownerDocument || x, e = g.documentElement, g = g.body, a.pageX = c.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0));
                !a.relatedTarget && d && (a.relatedTarget = d === a.target ? c.toElement : d);
                a.which || void 0 === b || (a.which = b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !==
                        H() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === H() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (e.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return e.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, c, g, b) {
            a = e.extend(new e.Event, g, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            b ? e.event.trigger(a, null, c) : e.event.dispatch.call(c, a);
            a.isDefaultPrevented() && g.preventDefault()
        }
    };
    e.removeEvent = x.removeEventListener ? function(a, c, g) {
        a.removeEventListener && a.removeEventListener(c, g, !1)
    } : function(a, c, g) {
        c = "on" + c;
        a.detachEvent && ("undefined" === typeof a[c] && (a[c] = null), a.detachEvent(c, g))
    };
    e.Event = function(a, c) {
        if (!(this instanceof e.Event)) return new e.Event(a, c);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
            void 0 === a.defaultPrevented && (!1 === a.returnValue || a.getPreventDefault && a.getPreventDefault()) ? A : z) : this.type = a;
        c && e.extend(this, c);
        this.timeStamp = a && a.timeStamp || e.now();
        this[e.expando] = !0
    };
    e.Event.prototype = {
        isDefaultPrevented: z,
        isPropagationStopped: z,
        isImmediatePropagationStopped: z,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = A;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = A;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = A;
            this.stopPropagation()
        }
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, c) {
        e.event.special[a] = {
            delegateType: c,
            bindType: c,
            handle: function(a) {
                var b, d = a.relatedTarget,
                    f = a.handleObj;
                if (!d || d !== this && !e.contains(this, d)) a.type = f.origType, b = f.handler.apply(this, arguments), a.type = c;
                return b
            }
        }
    });
    w.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this,
                    "form")) return !1;
            e.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = e.nodeName(a, "input") || e.nodeName(a, "button") ? a.form : void 0) && !e._data(a, "submitBubbles") && (e.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), e._data(a, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && e.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.remove(this,
                "._submit")
        }
    });
    w.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (cb.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) e.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), e.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, a, !0)
                });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                cb.test(a.nodeName) &&
                    !e._data(a, "changeBubbles") && (e.event.add(a, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || e.event.simulate("change", this.parentNode, a, !0)
                    }), e._data(a, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var c = a.target;
            if (this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            e.event.remove(this, "._change");
            return !cb.test(this.nodeName)
        }
    });
    w.focusinBubbles || e.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(a, c) {
            var g = function(a) {
                e.event.simulate(c, a.target, e.event.fix(a), !0)
            };
            e.event.special[c] = {
                setup: function() {
                    var b = this.ownerDocument || this,
                        d = e._data(b, c);
                    d || b.addEventListener(a, g, !0);
                    e._data(b, c, (d || 0) + 1)
                },
                teardown: function() {
                    var b = this.ownerDocument || this,
                        d = e._data(b, c) - 1;
                    d ? e._data(b, c, d) : (b.removeEventListener(a, g, !0), e._removeData(b, c))
                }
            }
        });
    e.fn.extend({
        on: function(a, c, g, b, d) {
            var f, h;
            if ("object" === typeof a) {
                "string" !== typeof c && (g = g || c, c = void 0);
                for (f in a) this.on(f, c, g, a[f], d);
                return this
            }
            null ==
                g && null == b ? (b = c, g = c = void 0) : null == b && ("string" === typeof c ? (b = g, g = void 0) : (b = g, g = c, c = void 0));
            if (!1 === b) b = z;
            else if (!b) return this;
            1 === d && (h = b, b = function(a) {
                e().off(a);
                return h.apply(this, arguments)
            }, b.guid = h.guid || (h.guid = e.guid++));
            return this.each(function() {
                e.event.add(this, a, b, g, c)
            })
        },
        one: function(a, c, g, e) {
            return this.on(a, c, g, e, 1)
        },
        off: function(a, c, g) {
            var b;
            if (a && a.preventDefault && a.handleObj) return b = a.handleObj, e(a.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector,
                b.handler), this;
            if ("object" === typeof a) {
                for (b in a) this.off(b, c, a[b]);
                return this
            }
            if (!1 === c || "function" === typeof c) g = c, c = void 0;
            !1 === g && (g = z);
            return this.each(function() {
                e.event.remove(this, a, g, c)
            })
        },
        trigger: function(a, c) {
            return this.each(function() {
                e.event.trigger(a, c, this)
            })
        },
        triggerHandler: function(a, c) {
            var g = this[0];
            if (g) return e.event.trigger(a, c, g, !0)
        }
    });
    var mb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Tb = / jQuery\d+="(?:null|\d+)"/g,
        rb = new RegExp("<(?:" + mb + ")[\\s/>]", "i"),
        db = /^\s+/,
        sb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        tb = /<([\w:]+)/,
        ub = /<tbody/i,
        Ub = /<|&#?\w+;/,
        Vb = /<(?:script|style|link)/i,
        Wb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vb = /^$|\/(?:java|ecma)script/i,
        Kb = /^true\/(.*)/,
        Xb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Z = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>",
                "</object>"
            ],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        eb = I(x).appendChild(x.createElement("div"));
    Z.optgroup = Z.option;
    Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead;
    Z.th = Z.td;
    e.extend({
        clone: function(a, c, g) {
            var b, d, f, h, n, m = e.contains(a.ownerDocument, a);
            w.html5Clone || e.isXMLDoc(a) || !rb.test("<" +
                a.nodeName + ">") ? f = a.cloneNode(!0) : (eb.innerHTML = a.outerHTML, eb.removeChild(f = eb.firstChild));
            if (!(w.noCloneEvent && w.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a)))
                for (b = C(f), n = C(a), h = 0; null != (d = n[h]); ++h)
                    if (b[h]) {
                        var k = b[h],
                            r = void 0,
                            l = void 0,
                            v = void 0;
                        if (1 === k.nodeType) {
                            r = k.nodeName.toLowerCase();
                            if (!w.noCloneEvent && k[e.expando]) {
                                v = e._data(k);
                                for (l in v.events) e.removeEvent(k, l, v.handle);
                                k.removeAttribute(e.expando)
                            }
                            if ("script" === r && k.text !== d.text) M(k).text = d.text, E(k);
                            else if ("object" ===
                                r) k.parentNode && (k.outerHTML = d.outerHTML), w.html5Clone && d.innerHTML && !e.trim(k.innerHTML) && (k.innerHTML = d.innerHTML);
                            else if ("input" === r && $a.test(d.type)) k.defaultChecked = k.checked = d.checked, k.value !== d.value && (k.value = d.value);
                            else if ("option" === r) k.defaultSelected = k.selected = d.defaultSelected;
                            else if ("input" === r || "textarea" === r) k.defaultValue = d.defaultValue
                        }
                    }
            if (c)
                if (g)
                    for (n = n || C(a), b = b || C(f), h = 0; null != (d = n[h]); h++) S(d, b[h]);
                else S(a, f);
            b = C(f, "script");
            0 < b.length && U(b, !m && C(a, "script"));
            return f
        },
        buildFragment: function(a, c, g, b) {
            for (var d, f, h, n, k, m, r = a.length, l = I(c), v = [], u = 0; u < r; u++)
                if ((f = a[u]) || 0 === f)
                    if ("object" === e.type(f)) e.merge(v, f.nodeType ? [f] : f);
                    else if (Ub.test(f)) {
                h = h || l.appendChild(c.createElement("div"));
                n = (tb.exec(f) || ["", ""])[1].toLowerCase();
                m = Z[n] || Z._default;
                h.innerHTML = m[1] + f.replace(sb, "<$1></$2>") + m[2];
                for (d = m[0]; d--;) h = h.lastChild;
                !w.leadingWhitespace && db.test(f) && v.push(c.createTextNode(db.exec(f)[0]));
                if (!w.tbody)
                    for (d = (f = "table" !== n || ub.test(f) ? "<table>" !== m[1] || ub.test(f) ?
                            0 : h : h.firstChild) && f.childNodes.length; d--;) e.nodeName(k = f.childNodes[d], "tbody") && !k.childNodes.length && f.removeChild(k);
                e.merge(v, h.childNodes);
                for (h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = l.lastChild
            } else v.push(c.createTextNode(f));
            h && l.removeChild(h);
            w.appendChecked || e.grep(C(v, "input"), B);
            for (u = 0; f = v[u++];)
                if (!b || -1 === e.inArray(f, b))
                    if (a = e.contains(f.ownerDocument, f), h = C(l.appendChild(f), "script"), a && U(h), g)
                        for (d = 0; f = h[d++];) vb.test(f.type || "") && g.push(f);
            return l
        },
        cleanData: function(a,
            c) {
            for (var g, b, d, f, h = 0, n = e.expando, k = e.cache, m = w.deleteExpando, r = e.event.special; null != (g = a[h]); h++)
                if (c || e.acceptData(g))
                    if (f = (d = g[n]) && k[d]) {
                        if (f.events)
                            for (b in f.events) r[b] ? e.event.remove(g, b) : e.removeEvent(g, b, f.handle);
                        k[d] && (delete k[d], m ? delete g[n] : "undefined" !== typeof g.removeAttribute ? g.removeAttribute(n) : g[n] = null, L.push(d))
                    }
        }
    });
    e.fn.extend({
        text: function(a) {
            return oa(this, function(a) {
                    return void 0 === a ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(a))
                },
                null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || J(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = J(this, a);
                    c.insertBefore(a, c.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
                function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
        },
        remove: function(a, c) {
            for (var g, b = a ? e.filter(a, this) : this, d = 0; null != (g = b[d]); d++) c || 1 !== g.nodeType || e.cleanData(C(g)), g.parentNode && (c && e.contains(g.ownerDocument, g) && U(C(g, "script")), g.parentNode.removeChild(g));
            return this
        },
        empty: function() {
            for (var a, c = 0; null != (a = this[c]); c++) {
                for (1 === a.nodeType && e.cleanData(C(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && e.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, c) {
            a = null == a ? !1 : a;
            c = null == c ? a : c;
            return this.map(function() {
                return e.clone(this, a, c)
            })
        },
        html: function(a) {
            return oa(this, function(a) {
                var g = this[0] || {},
                    b = 0,
                    d = this.length;
                if (void 0 === a) return 1 === g.nodeType ? g.innerHTML.replace(Tb, "") : void 0;
                if (!("string" !== typeof a || Vb.test(a) || !w.htmlSerialize && rb.test(a) || !w.leadingWhitespace && db.test(a) || Z[(tb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(sb, "<$1></$2>");
                    try {
                        for (; b < d; b++) g = this[b] || {}, 1 === g.nodeType && (e.cleanData(C(g, !1)), g.innerHTML =
                            a);
                        g = 0
                    } catch (f) {}
                }
                g && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(c) {
                a = this.parentNode;
                e.cleanData(C(this));
                a && a.replaceChild(c, this)
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c) {
            a = za.apply([], a);
            var g, b, d, f, h = 0,
                n = this.length,
                k = this,
                m = n - 1,
                r = a[0],
                l = e.isFunction(r);
            if (l || 1 < n && "string" === typeof r && !w.checkClone && Wb.test(r)) return this.each(function(g) {
                var e =
                    k.eq(g);
                l && (a[0] = r.call(this, g, e.html()));
                e.domManip(a, c)
            });
            if (n && (f = e.buildFragment(a, this[0].ownerDocument, !1, this), g = f.firstChild, 1 === f.childNodes.length && (f = g), g)) {
                d = e.map(C(f, "script"), M);
                for (b = d.length; h < n; h++) g = f, h !== m && (g = e.clone(g, !0, !0), b && e.merge(d, C(g, "script"))), c.call(this[h], g, h);
                if (b)
                    for (f = d[d.length - 1].ownerDocument, e.map(d, E), h = 0; h < b; h++) g = d[h], vb.test(g.type || "") && !e._data(g, "globalEval") && e.contains(f, g) && (g.src ? e._evalUrl && e._evalUrl(g.src) : e.globalEval((g.text || g.textContent ||
                        g.innerHTML || "").replace(Xb, "")));
                f = g = null
            }
            return this
        }
    });
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, c) {
        e.fn[a] = function(a) {
            for (var b = 0, d = [], f = e(a), h = f.length - 1; b <= h; b++) a = b === h ? this : this.clone(!0), e(f[b])[c](a), Aa.apply(d, a.get());
            return this.pushStack(d)
        }
    });
    var Ca, nb = {};
    (function() {
        var a, c, g = x.createElement("div");
        g.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = g.getElementsByTagName("a")[0];
        a.style.cssText = "float:left;opacity:.5";
        w.opacity = /^0.5/.test(a.style.opacity);
        w.cssFloat = !!a.style.cssFloat;
        g.style.backgroundClip = "content-box";
        g.cloneNode(!0).style.backgroundClip = "";
        w.clearCloneStyle = "content-box" === g.style.backgroundClip;
        a = g = null;
        w.shrinkWrapBlocks = function() {
            var a, g, e;
            if (null == c) {
                a = x.getElementsByTagName("body")[0];
                if (!a) return;
                g = x.createElement("div");
                e = x.createElement("div");
                a.appendChild(g).appendChild(e);
                c = !1;
                "undefined" !== typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
                    e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", c = 3 !== e.offsetWidth);
                a.removeChild(g)
            }
            return c
        }
    })();
    var wb = /^margin/,
        Ra = new RegExp("^(" + Va + ")(?!px)[a-z%]+$", "i"),
        la, ma, Yb = /^(top|right|bottom|left)$/;
    b.getComputedStyle ? (la = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, ma = function(a, c, g) {
        var b, d, f = a.style;
        d = (g = g || la(a)) ? g.getPropertyValue(c) || g[c] : void 0;
        g && ("" !== d || e.contains(a.ownerDocument, a) || (d = e.style(a, c)), Ra.test(d) && wb.test(c) && (a = f.width, c = f.minWidth, b =
            f.maxWidth, f.minWidth = f.maxWidth = f.width = d, d = g.width, f.width = a, f.minWidth = c, f.maxWidth = b));
        return void 0 === d ? d : d + ""
    }) : x.documentElement.currentStyle && (la = function(a) {
        return a.currentStyle
    }, ma = function(a, c, g) {
        var e, b, d, f = a.style;
        d = (g = g || la(a)) ? g[c] : void 0;
        null == d && f && f[c] && (d = f[c]);
        if (Ra.test(d) && !Yb.test(c)) {
            g = f.left;
            if (b = (e = a.runtimeStyle) && e.left) e.left = a.currentStyle.left;
            f.left = "fontSize" === c ? "1em" : d;
            d = f.pixelLeft + "px";
            f.left = g;
            b && (e.left = b)
        }
        return void 0 === d ? d : d + "" || "auto"
    });
    (function() {
        function a() {
            var a,
                c, g = x.getElementsByTagName("body")[0];
            g && (a = x.createElement("div"), c = x.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", g.appendChild(a).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", e.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                d = 4 === c.offsetWidth
            }), f = !0, h = !1, n = !0, b.getComputedStyle && (h = "1%" !==
                (b.getComputedStyle(c, null) || {}).top, f = "4px" === (b.getComputedStyle(c, null) || {
                    width: "4px"
                }).width), g.removeChild(a), c = g = null)
        }
        var c, g, d, f, h, n, k = x.createElement("div");
        k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = k.getElementsByTagName("a")[0];
        c.style.cssText = "float:left;opacity:.5";
        w.opacity = /^0.5/.test(c.style.opacity);
        w.cssFloat = !!c.style.cssFloat;
        k.style.backgroundClip = "content-box";
        k.cloneNode(!0).style.backgroundClip = "";
        w.clearCloneStyle = "content-box" === k.style.backgroundClip;
        c = k = null;
        e.extend(w, {
            reliableHiddenOffsets: function() {
                if (null != g) return g;
                var a, c, e;
                c = x.createElement("div");
                var b = x.getElementsByTagName("body")[0];
                if (b) return c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = x.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", b.appendChild(a).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = c.getElementsByTagName("td"),
                    c[0].style.cssText = "padding:0;margin:0;border:0;display:none", e = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", g = e && 0 === c[0].offsetHeight, b.removeChild(a), g
            },
            boxSizing: function() {
                null == d && a();
                return d
            },
            boxSizingReliable: function() {
                null == f && a();
                return f
            },
            pixelPosition: function() {
                null == h && a();
                return h
            },
            reliableMarginRight: function() {
                var a, c, g, e;
                if (null == n && b.getComputedStyle) {
                    a = x.getElementsByTagName("body")[0];
                    if (!a) return;
                    c = x.createElement("div");
                    g = x.createElement("div");
                    c.style.cssText =
                        "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                    a.appendChild(c).appendChild(g);
                    e = g.appendChild(x.createElement("div"));
                    e.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                    e.style.marginRight = e.style.width = "0";
                    g.style.width = "1px";
                    n = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight);
                    a.removeChild(c)
                }
                return n
            }
        })
    })();
    e.swap = function(a, c, g, e) {
        var b, d = {};
        for (b in c) d[b] = a.style[b],
            a.style[b] = c[b];
        g = g.apply(a, e || []);
        for (b in c) a.style[b] = d[b];
        return g
    };
    var fb = /alpha\([^)]*\)/i,
        Zb = /opacity\s*=\s*([^)]*)/,
        $b = /^(none|table(?!-c[ea]).+)/,
        Lb = new RegExp("^(" + Va + ")(.*)$", "i"),
        ac = new RegExp("^([+-])=(" + Va + ")", "i"),
        bc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ob = ["Webkit", "O", "Moz", "ms"];
    e.extend({
        cssHooks: {
            opacity: {
                get: function(a, c) {
                    if (c) {
                        var g = ma(a, "opacity");
                        return "" === g ? "1" : g
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, g, b) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, f, h, n = e.camelCase(c),
                    k = a.style;
                c = e.cssProps[n] || (e.cssProps[n] = Ea(k, n));
                h = e.cssHooks[c] || e.cssHooks[n];
                if (void 0 !== g) {
                    if (f = typeof g, "string" === f && (d = ac.exec(g)) && (g = (d[1] + 1) * d[2] + parseFloat(e.css(a, c)), f = "number"), null != g && g === g && ("number" !== f || e.cssNumber[n] || (g += "px"), w.clearCloneStyle || "" !== g ||
                            0 !== c.indexOf("background") || (k[c] = "inherit"), !(h && "set" in h) || void 0 !== (g = h.set(a, g, b)))) try {
                        k[c] = "", k[c] = g
                    } catch (m) {}
                } else return h && "get" in h && void 0 !== (d = h.get(a, !1, b)) ? d : k[c]
            }
        },
        css: function(a, c, g, b) {
            var d, f;
            f = e.camelCase(c);
            c = e.cssProps[f] || (e.cssProps[f] = Ea(a.style, f));
            (f = e.cssHooks[c] || e.cssHooks[f]) && "get" in f && (d = f.get(a, !0, g));
            void 0 === d && (d = ma(a, c, b));
            "normal" === d && c in xb && (d = xb[c]);
            return "" === g || g ? (a = parseFloat(d), !0 === g || e.isNumeric(a) ? a || 0 : d) : d
        }
    });
    e.each(["height", "width"], function(a,
        c) {
        e.cssHooks[c] = {
            get: function(a, b, d) {
                if (b) return 0 === a.offsetWidth && $b.test(e.css(a, "display")) ? e.swap(a, bc, function() {
                    return Ha(a, c, d)
                }) : Ha(a, c, d)
            },
            set: function(a, b, d) {
                var f = d && la(a);
                return Ga(a, b, d ? X(a, c, d, w.boxSizing() && "border-box" === e.css(a, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    w.opacity || (e.cssHooks.opacity = {
        get: function(a, c) {
            return Zb.test((c && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(a, c) {
            var g = a.style,
                b = a.currentStyle,
                d = e.isNumeric(c) ?
                "alpha(opacity=" + 100 * c + ")" : "",
                f = b && b.filter || g.filter || "";
            g.zoom = 1;
            if ((1 <= c || "" === c) && "" === e.trim(f.replace(fb, "")) && g.removeAttribute && (g.removeAttribute("filter"), "" === c || b && !b.filter)) return;
            g.filter = fb.test(f) ? f.replace(fb, d) : f + " " + d
        }
    });
    e.cssHooks.marginRight = Da(w.reliableMarginRight, function(a, c) {
        if (c) return e.swap(a, {
            display: "inline-block"
        }, ma, [a, "marginRight"])
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, c) {
        e.cssHooks[a + c] = {
            expand: function(g) {
                var e = 0,
                    b = {};
                for (g = "string" === typeof g ?
                    g.split(" ") : [g]; 4 > e; e++) b[a + ka[e] + c] = g[e] || g[e - 2] || g[0];
                return b
            }
        };
        wb.test(a) || (e.cssHooks[a + c].set = Ga)
    });
    e.fn.extend({
        css: function(a, c) {
            return oa(this, function(a, c, b) {
                var d, f = {},
                    h = 0;
                if (e.isArray(c)) {
                    b = la(a);
                    for (d = c.length; h < d; h++) f[c[h]] = e.css(a, c[h], !1, b);
                    return f
                }
                return void 0 !== b ? e.style(a, c, b) : e.css(a, c)
            }, a, c, 1 < arguments.length)
        },
        show: function() {
            return ea(this, !0)
        },
        hide: function() {
            return ea(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Fa(this) ?
                    e(this).show() : e(this).hide()
            })
        }
    });
    e.Tween = N;
    N.prototype = {
        constructor: N,
        init: function(a, c, g, b, d, f) {
            this.elem = a;
            this.prop = g;
            this.easing = d || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = b;
            this.unit = f || (e.cssNumber[g] ? "" : "px")
        },
        cur: function() {
            var a = N.propHooks[this.prop];
            return a && a.get ? a.get(this) : N.propHooks._default.get(this)
        },
        run: function(a) {
            var c, g = N.propHooks[this.prop];
            this.pos = this.options.duration ? c = e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) :
                c = a;
            this.now = (this.end - this.start) * c + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            g && g.set ? g.set(this) : N.propHooks._default.set(this);
            return this
        }
    };
    N.prototype.init.prototype = N.prototype;
    N.propHooks = {
        _default: {
            get: function(a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = e.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            },
            set: function(a) {
                if (e.fx.step[a.prop]) e.fx.step[a.prop](a);
                else a.elem.style && (null != a.elem.style[e.cssProps[a.prop]] ||
                    e.cssHooks[a.prop]) ? e.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    e.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    e.fx = N.prototype.init;
    e.fx.step = {};
    var ha, Wa, cc = /^(?:toggle|show|hide)$/,
        yb = new RegExp("^(?:([+-])=|)(" + Va + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        Sa = [function(a, c, g) {
            var b, d, f, h, n, k, m = this,
                r = {},
                l = a.style,
                v = a.nodeType &&
                Fa(a),
                u = e._data(a, "fxshow");
            g.queue || (h = e._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, n = h.empty.fire, h.empty.fire = function() {
                h.unqueued || n()
            }), h.unqueued++, m.always(function() {
                m.always(function() {
                    h.unqueued--;
                    e.queue(a, "fx").length || h.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in c || "width" in c) && (g.overflow = [l.overflow, l.overflowX, l.overflowY], d = e.css(a, "display"), k = W(a.nodeName), "none" === d && (d = k), "inline" === d && "none" === e.css(a, "float") && (w.inlineBlockNeedsLayout && "inline" !== k ? l.zoom = 1 : l.display =
                "inline-block"));
            g.overflow && (l.overflow = "hidden", w.shrinkWrapBlocks() || m.always(function() {
                l.overflow = g.overflow[0];
                l.overflowX = g.overflow[1];
                l.overflowY = g.overflow[2]
            }));
            for (b in c)
                if (d = c[b], cc.exec(d)) {
                    delete c[b];
                    f = f || "toggle" === d;
                    if (d === (v ? "hide" : "show"))
                        if ("show" === d && u && void 0 !== u[b]) v = !0;
                        else continue;
                    r[b] = u && u[b] || e.style(a, b)
                }
            if (!e.isEmptyObject(r))
                for (b in u ? "hidden" in u && (v = u.hidden) : u = e._data(a, "fxshow", {}), f && (u.hidden = !v), v ? e(a).show() : m.done(function() {
                        e(a).hide()
                    }), m.done(function() {
                        var c;
                        e._removeData(a, "fxshow");
                        for (c in r) e.style(a, c, r[c])
                    }), r) c = Ia(v ? u[b] : 0, b, m), b in u || (u[b] = c.start, v && (c.end = c.start, c.start = "width" === b || "height" === b ? 1 : 0))
        }],
        Ja = {
            "*": [function(a, c) {
                var g = this.createTween(a, c),
                    b = g.cur(),
                    d = yb.exec(c),
                    f = d && d[3] || (e.cssNumber[a] ? "" : "px"),
                    h = (e.cssNumber[a] || "px" !== f && +b) && yb.exec(e.css(g.elem, a)),
                    n = 1,
                    k = 20;
                if (h && h[3] !== f) {
                    f = f || h[3];
                    d = d || [];
                    h = +b || 1;
                    do n = n || ".5", h /= n, e.style(g.elem, a, h + f); while (n !== (n = g.cur() / b) && 1 !== n && --k)
                }
                d && (h = g.start = +h || +b || 0, g.unit = f, g.end = d[1] ?
                    h + (d[1] + 1) * d[2] : +d[2]);
                return g
            }]
        };
    e.Animation = e.extend(Ka, {
        tweener: function(a, c) {
            e.isFunction(a) ? (c = a, a = ["*"]) : a = a.split(" ");
            for (var g, b = 0, d = a.length; b < d; b++) g = a[b], Ja[g] = Ja[g] || [], Ja[g].unshift(c)
        },
        prefilter: function(a, c) {
            c ? Sa.unshift(a) : Sa.push(a)
        }
    });
    e.speed = function(a, c, g) {
        var b = a && "object" === typeof a ? e.extend({}, a) : {
            complete: g || !g && c || e.isFunction(a) && a,
            duration: a,
            easing: g && c || c && !e.isFunction(c) && c
        };
        b.duration = e.fx.off ? 0 : "number" === typeof b.duration ? b.duration : b.duration in e.fx.speeds ? e.fx.speeds[b.duration] :
            e.fx.speeds._default;
        if (null == b.queue || !0 === b.queue) b.queue = "fx";
        b.old = b.complete;
        b.complete = function() {
            e.isFunction(b.old) && b.old.call(this);
            b.queue && e.dequeue(this, b.queue)
        };
        return b
    };
    e.fn.extend({
        fadeTo: function(a, c, g, e) {
            return this.filter(Fa).css("opacity", 0).show().end().animate({
                opacity: c
            }, a, g, e)
        },
        animate: function(a, c, g, b) {
            var d = e.isEmptyObject(a),
                f = e.speed(c, g, b);
            c = function() {
                var c = Ka(this, e.extend({}, a), f);
                (d || e._data(this, "finish")) && c.stop(!0)
            };
            c.finish = c;
            return d || !1 === f.queue ? this.each(c) :
                this.queue(f.queue, c)
        },
        stop: function(a, c, g) {
            var b = function(a) {
                var c = a.stop;
                delete a.stop;
                c(g)
            };
            "string" !== typeof a && (g = c, c = a, a = void 0);
            c && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var c = !0,
                    d = null != a && a + "queueHooks",
                    f = e.timers,
                    h = e._data(this);
                if (d) h[d] && h[d].stop && b(h[d]);
                else
                    for (d in h) h[d] && h[d].stop && dc.test(d) && b(h[d]);
                for (d = f.length; d--;) f[d].elem !== this || null != a && f[d].queue !== a || (f[d].anim.stop(g), c = !1, f.splice(d, 1));
                !c && g || e.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a =
                a || "fx");
            return this.each(function() {
                var c, g = e._data(this),
                    b = g[a + "queue"];
                c = g[a + "queueHooks"];
                var d = e.timers,
                    f = b ? b.length : 0;
                g.finish = !0;
                e.queue(this, a, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = d.length; c--;) d[c].elem === this && d[c].queue === a && (d[c].anim.stop(!0), d.splice(c, 1));
                for (c = 0; c < f; c++) b[c] && b[c].finish && b[c].finish.call(this);
                delete g.finish
            })
        }
    });
    e.each(["toggle", "show", "hide"], function(a, c) {
        var g = e.fn[c];
        e.fn[c] = function(a, e, b) {
            return null == a || "boolean" === typeof a ? g.apply(this, arguments) : this.animate(fa(c, !0), a, e, b)
        }
    });
    e.each({
        slideDown: fa("show"),
        slideUp: fa("hide"),
        slideToggle: fa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, c) {
        e.fn[a] = function(a, e, b) {
            return this.animate(c, a, e, b)
        }
    });
    e.timers = [];
    e.fx.tick = function() {
        var a, c = e.timers,
            g = 0;
        for (ha = e.now(); g < c.length; g++) a = c[g], a() || c[g] !== a || c.splice(g--, 1);
        c.length || e.fx.stop();
        ha = void 0
    };
    e.fx.timer = function(a) {
        e.timers.push(a);
        a() ? e.fx.start() : e.timers.pop()
    };
    e.fx.interval = 13;
    e.fx.start = function() {
        Wa ||
            (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fn.delay = function(a, c) {
        a = e.fx ? e.fx.speeds[a] || a : a;
        return this.queue(c || "fx", function(c, e) {
            var b = setTimeout(c, a);
            e.stop = function() {
                clearTimeout(b)
            }
        })
    };
    (function() {
        var a, c, g, e, b = x.createElement("div");
        b.setAttribute("className", "t");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = b.getElementsByTagName("a")[0];
        g = x.createElement("select");
        e = g.appendChild(x.createElement("option"));
        c = b.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px";
        w.getSetAttribute = "t" !== b.className;
        w.style = /top/.test(a.getAttribute("style"));
        w.hrefNormalized = "/a" === a.getAttribute("href");
        w.checkOn = !!c.value;
        w.optSelected = e.selected;
        w.enctype = !!x.createElement("form").enctype;
        g.disabled = !0;
        w.optDisabled = !e.disabled;
        c = x.createElement("input");
        c.setAttribute("value", "");
        w.input = "" === c.getAttribute("value");
        c.value = "t";
        c.setAttribute("type", "radio");
        w.radioValue =
            "t" === c.value
    })();
    var ec = /\r/g;
    e.fn.extend({
        val: function(a) {
            var c, g, b, d = this[0];
            if (arguments.length) return b = e.isFunction(a), this.each(function(g) {
                1 === this.nodeType && (g = b ? a.call(this, g, e(this).val()) : a, null == g ? g = "" : "number" === typeof g ? g += "" : e.isArray(g) && (g = e.map(g, function(a) {
                    return null == a ? "" : a + ""
                })), c = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, g, "value") || (this.value = g))
            });
            if (d) {
                if ((c = e.valHooks[d.type] || e.valHooks[d.nodeName.toLowerCase()]) &&
                    "get" in c && void 0 !== (g = c.get(d, "value"))) return g;
                g = d.value;
                return "string" === typeof g ? g.replace(ec, "") : null == g ? "" : g
            }
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var c = e.find.attr(a, "value");
                    return null != c ? c : e.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var c, g = a.options, b = a.selectedIndex, d = (a = "select-one" === a.type || 0 > b) ? null : [], f = a ? b + 1 : g.length, h = 0 > b ? f : a ? b : 0; h < f; h++)
                        if (c = g[h], !(!c.selected && h !== b || (w.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && e.nodeName(c.parentNode,
                                "optgroup"))) {
                            c = e(c).val();
                            if (a) return c;
                            d.push(c)
                        }
                    return d
                },
                set: function(a, c) {
                    for (var g, b, d = a.options, f = e.makeArray(c), h = d.length; h--;)
                        if (b = d[h], 0 <= e.inArray(e.valHooks.option.get(b), f)) try {
                            b.selected = g = !0
                        } catch (n) {
                            b.scrollHeight
                        } else b.selected = !1;
                    g || (a.selectedIndex = -1);
                    return d
                }
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            set: function(a, c) {
                if (e.isArray(c)) return a.checked = 0 <= e.inArray(e(a).val(), c)
            }
        };
        w.checkOn || (e.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ?
                "on" : a.value
        })
    });
    var Ba, zb, ia = e.expr.attrHandle,
        gb = /^(?:checked|selected)$/i,
        ca = w.getSetAttribute,
        Xa = w.input;
    e.fn.extend({
        attr: function(a, c) {
            return oa(this, e.attr, a, c, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                e.removeAttr(this, a)
            })
        }
    });
    e.extend({
        attr: function(a, c, g) {
            var b, d, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if ("undefined" === typeof a.getAttribute) return e.prop(a, c, g);
                1 === f && e.isXMLDoc(a) || (c = c.toLowerCase(), b = e.attrHooks[c] || (e.expr.match.bool.test(c) ? zb : Ba));
                if (void 0 !==
                    g)
                    if (null === g) e.removeAttr(a, c);
                    else {
                        if (b && "set" in b && void 0 !== (d = b.set(a, g, c))) return d;
                        a.setAttribute(c, g + "");
                        return g
                    } else {
                    if (b && "get" in b && null !== (d = b.get(a, c))) return d;
                    d = e.find.attr(a, c);
                    return null == d ? void 0 : d
                }
            }
        },
        removeAttr: function(a, c) {
            var g, b, d = 0,
                f = c && c.match(da);
            if (f && 1 === a.nodeType)
                for (; g = f[d++];) b = e.propFix[g] || g, e.expr.match.bool.test(g) ? Xa && ca || !gb.test(g) ? a[b] = !1 : a[e.camelCase("default-" + g)] = a[b] = !1 : e.attr(a, g, ""), a.removeAttribute(ca ? g : b)
        },
        attrHooks: {
            type: {
                set: function(a, c) {
                    if (!w.radioValue &&
                        "radio" === c && e.nodeName(a, "input")) {
                        var g = a.value;
                        a.setAttribute("type", c);
                        g && (a.value = g);
                        return c
                    }
                }
            }
        }
    });
    zb = {
        set: function(a, c, g) {
            !1 === c ? e.removeAttr(a, g) : Xa && ca || !gb.test(g) ? a.setAttribute(!ca && e.propFix[g] || g, g) : a[e.camelCase("default-" + g)] = a[g] = !0;
            return g
        }
    };
    e.each(e.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var g = ia[c] || e.find.attr;
        ia[c] = Xa && ca || !gb.test(c) ? function(a, c, e) {
            var b, d;
            e || (d = ia[c], ia[c] = b, b = null != g(a, c, e) ? c.toLowerCase() : null, ia[c] = d);
            return b
        } : function(a, c, g) {
            if (!g) return a[e.camelCase("default-" +
                c)] ? c.toLowerCase() : null
        }
    });
    Xa && ca || (e.attrHooks.value = {
        set: function(a, c, g) {
            if (e.nodeName(a, "input")) a.defaultValue = c;
            else return Ba && Ba.set(a, c, g)
        }
    });
    ca || (Ba = {
        set: function(a, c, g) {
            var e = a.getAttributeNode(g);
            e || a.setAttributeNode(e = a.ownerDocument.createAttribute(g));
            e.value = c += "";
            if ("value" === g || c === a.getAttribute(g)) return c
        }
    }, ia.id = ia.name = ia.coords = function(a, c, g) {
        var e;
        if (!g) return (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
    }, e.valHooks.button = {
        get: function(a, c) {
            var g = a.getAttributeNode(c);
            if (g && g.specified) return g.value
        },
        set: Ba.set
    }, e.attrHooks.contenteditable = {
        set: function(a, c, g) {
            Ba.set(a, "" === c ? !1 : c, g)
        }
    }, e.each(["width", "height"], function(a, c) {
        e.attrHooks[c] = {
            set: function(a, e) {
                if ("" === e) return a.setAttribute(c, "auto"), e
            }
        }
    }));
    w.style || (e.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, c) {
            return a.style.cssText = c + ""
        }
    });
    var fc = /^(?:input|select|textarea|button|object)$/i,
        gc = /^(?:a|area)$/i;
    e.fn.extend({
        prop: function(a, c) {
            return oa(this, e.prop, a, c, 1 <
                arguments.length)
        },
        removeProp: function(a) {
            a = e.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (c) {}
            })
        }
    });
    e.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, g) {
            var b, d, f;
            f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if (f = 1 !== f || !e.isXMLDoc(a)) c = e.propFix[c] || c, d = e.propHooks[c];
                return void 0 !== g ? d && "set" in d && void 0 !== (b = d.set(a, g, c)) ? b : a[c] = g : d && "get" in d && null !== (b = d.get(a, c)) ? b : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = e.find.attr(a, "tabindex");
                    return c ? parseInt(c, 10) : fc.test(a.nodeName) || gc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    w.hrefNormalized || e.each(["href", "src"], function(a, c) {
        e.propHooks[c] = {
            get: function(a) {
                return a.getAttribute(c, 4)
            }
        }
    });
    w.optSelected || (e.propHooks.selected = {
        get: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        e.propFix[this.toLowerCase()] =
            this
    });
    w.enctype || (e.propFix.enctype = "encoding");
    var hb = /[\t\r\n\f]/g;
    e.fn.extend({
        addClass: function(a) {
            var c, g, b, d, f, h = 0,
                n = this.length;
            c = "string" === typeof a && a;
            if (e.isFunction(a)) return this.each(function(c) {
                e(this).addClass(a.call(this, c, this.className))
            });
            if (c)
                for (c = (a || "").match(da) || []; h < n; h++)
                    if (g = this[h], b = 1 === g.nodeType && (g.className ? (" " + g.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; d = c[f++];) 0 > b.indexOf(" " + d + " ") && (b += d + " ");
                        b = e.trim(b);
                        g.className !== b && (g.className = b)
                    }
            return this
        },
        removeClass: function(a) {
            var c,
                g, b, d, f, h = 0,
                n = this.length;
            c = 0 === arguments.length || "string" === typeof a && a;
            if (e.isFunction(a)) return this.each(function(c) {
                e(this).removeClass(a.call(this, c, this.className))
            });
            if (c)
                for (c = (a || "").match(da) || []; h < n; h++)
                    if (g = this[h], b = 1 === g.nodeType && (g.className ? (" " + g.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; d = c[f++];)
                            for (; 0 <= b.indexOf(" " + d + " ");) b = b.replace(" " + d + " ", " ");
                        b = a ? e.trim(b) : "";
                        g.className !== b && (g.className = b)
                    }
            return this
        },
        toggleClass: function(a, c) {
            var g = typeof a;
            return "boolean" === typeof c &&
                "string" === g ? c ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function(g) {
                    e(this).toggleClass(a.call(this, g, this.className, c), c)
                }) : this.each(function() {
                    if ("string" === g)
                        for (var c, b = 0, d = e(this), f = a.match(da) || []; c = f[b++];) d.hasClass(c) ? d.removeClass(c) : d.addClass(c);
                    else if ("undefined" === g || "boolean" === g) this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : e._data(this, "__className__") || ""
                })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var c =
                    0, g = this.length; c < g; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(hb, " ").indexOf(a)) return !0;
            return !1
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, c) {
        e.fn[c] = function(a, e) {
            return 0 < arguments.length ? this.on(c, null, a, e) : this.trigger(c)
        }
    });
    e.fn.extend({
        hover: function(a, c) {
            return this.mouseenter(a).mouseleave(c ||
                a)
        },
        bind: function(a, c, g) {
            return this.on(a, null, c, g)
        },
        unbind: function(a, c) {
            return this.off(a, null, c)
        },
        delegate: function(a, c, g, e) {
            return this.on(c, a, g, e)
        },
        undelegate: function(a, c, g) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", g)
        }
    });
    var ib = e.now(),
        jb = /\?/,
        hc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    e.parseJSON = function(a) {
        if (b.JSON && b.JSON.parse) return b.JSON.parse(a + "");
        var c, g = null,
            d = e.trim(a +
                "");
        return d && !e.trim(d.replace(hc, function(a, e, b, d) {
            c && e && (g = 0);
            if (0 === g) return a;
            c = b || e;
            g += !d - !b;
            return ""
        })) ? Function("return " + d)() : e.error("Invalid JSON: " + a)
    };
    e.parseXML = function(a) {
        var c, g;
        if (!a || "string" !== typeof a) return null;
        try {
            b.DOMParser ? (g = new DOMParser, c = g.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
        } catch (d) {
            c = void 0
        }
        c && c.documentElement && !c.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + a);
        return c
    };
    var pa,
        ja, ic = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        jc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        Bb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Cb = {},
        ab = {},
        Db = "*/".concat("*");
    try {
        ja = location.href
    } catch (a) {
        ja = x.createElement("a"), ja.href = "", ja = ja.href
    }
    pa = Bb.exec(ja.toLowerCase()) || [];
    e.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ja,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pa[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Db,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, c) {
            return c ? na(na(a, e.ajaxSettings), c) : na(e.ajaxSettings, a)
        },
        ajaxPrefilter: La(Cb),
        ajaxTransport: La(ab),
        ajax: function(a,
            c) {
            function g(a, c, g, b) {
                var d, r, q, p;
                p = c;
                if (2 !== H) {
                    H = 2;
                    n && clearTimeout(n);
                    m = void 0;
                    h = b || "";
                    B.readyState = 0 < a ? 4 : 0;
                    b = 200 <= a && 300 > a || 304 === a;
                    if (g) {
                        q = l;
                        for (var Q = B, y, J, E, A, I = q.contents, C = q.dataTypes;
                            "*" === C[0];) C.shift(), void 0 === J && (J = q.mimeType || Q.getResponseHeader("Content-Type"));
                        if (J)
                            for (A in I)
                                if (I[A] && I[A].test(J)) {
                                    C.unshift(A);
                                    break
                                }
                        if (C[0] in g) E = C[0];
                        else {
                            for (A in g) {
                                if (!C[0] || q.converters[A + " " + C[0]]) {
                                    E = A;
                                    break
                                }
                                y || (y = A)
                            }
                            E = E || y
                        }
                        E ? (E !== C[0] && C.unshift(E), q = g[E]) : q = void 0
                    }
                    a: {
                        g = l;
                        y = q;
                        J = B;
                        E = b;
                        var w,
                            x, G, Q = {},
                            I = g.dataTypes.slice();
                        if (I[1])
                            for (x in g.converters) Q[x.toLowerCase()] = g.converters[x];
                        for (A = I.shift(); A;)
                            if (g.responseFields[A] && (J[g.responseFields[A]] = y), !G && E && g.dataFilter && (y = g.dataFilter(y, g.dataType)), G = A, A = I.shift())
                                if ("*" === A) A = G;
                                else if ("*" !== G && G !== A) {
                            x = Q[G + " " + A] || Q["* " + A];
                            if (!x)
                                for (w in Q)
                                    if (q = w.split(" "), q[1] === A && (x = Q[G + " " + q[0]] || Q["* " + q[0]])) {
                                        !0 === x ? x = Q[w] : !0 !== Q[w] && (A = q[0], I.unshift(q[1]));
                                        break
                                    }
                            if (!0 !== x)
                                if (x && g["throws"]) y = x(y);
                                else try {
                                    y = x(y)
                                } catch (R) {
                                    q = {
                                        state: "parsererror",
                                        error: x ? R : "No conversion from " + G + " to " + A
                                    };
                                    break a
                                }
                        }
                        q = {
                            state: "success",
                            data: y
                        }
                    }
                    if (b) l.ifModified && ((p = B.getResponseHeader("Last-Modified")) && (e.lastModified[f] = p), (p = B.getResponseHeader("etag")) && (e.etag[f] = p)), 204 === a || "HEAD" === l.type ? p = "nocontent" : 304 === a ? p = "notmodified" : (p = q.state, d = q.data, r = q.error, b = !r);
                    else if (r = p, a || !p) p = "error", 0 > a && (a = 0);
                    B.status = a;
                    B.statusText = (c || p) + "";
                    b ? ba.resolveWith(v, [d, p, B]) : ba.rejectWith(v, [B, p, r]);
                    B.statusCode(z);
                    z = void 0;
                    k && u.trigger(b ? "ajaxSuccess" : "ajaxError", [B, l, b ? d : r]);
                    M.fireWith(v, [B, p]);
                    k && (u.trigger("ajaxComplete", [B, l]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (c = a, a = void 0);
            c = c || {};
            var b, d, f, h, n, k, m, r, l = e.ajaxSetup({}, c),
                v = l.context || l,
                u = l.context && (v.nodeType || v.jquery) ? e(v) : e.event,
                ba = e.Deferred(),
                M = e.Callbacks("once memory"),
                z = l.statusCode || {},
                Q = {},
                y = {},
                H = 0,
                J = "canceled",
                B = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === H) {
                            if (!r)
                                for (r = {}; c = jc.exec(h);) r[c[1].toLowerCase()] = c[2];
                            c = r[a.toLowerCase()]
                        }
                        return null ==
                            c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return 2 === H ? h : null
                    },
                    setRequestHeader: function(a, c) {
                        var g = a.toLowerCase();
                        H || (a = y[g] = y[g] || a, Q[a] = c);
                        return this
                    },
                    overrideMimeType: function(a) {
                        H || (l.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var c;
                        if (a)
                            if (2 > H)
                                for (c in a) z[c] = [z[c], a[c]];
                            else B.always(a[B.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || J;
                        m && m.abort(a);
                        g(0, a);
                        return this
                    }
                };
            ba.promise(B).complete = M.add;
            B.success = B.done;
            B.error = B.fail;
            l.url = ((a || l.url || ja) + "").replace(ic, "").replace(lc, pa[1] +
                "//");
            l.type = c.method || c.type || l.method || l.type;
            l.dataTypes = e.trim(l.dataType || "*").toLowerCase().match(da) || [""];
            null == l.crossDomain && (b = Bb.exec(l.url.toLowerCase()), l.crossDomain = !(!b || b[1] === pa[1] && b[2] === pa[2] && (b[3] || ("http:" === b[1] ? "80" : "443")) === (pa[3] || ("http:" === pa[1] ? "80" : "443"))));
            l.data && l.processData && "string" !== typeof l.data && (l.data = e.param(l.data, l.traditional));
            xa(Cb, l, c, B);
            if (2 === H) return B;
            (k = l.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
            l.type = l.type.toUpperCase();
            l.hasContent = !kc.test(l.type);
            f = l.url;
            l.hasContent || (l.data && (f = l.url += (jb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Ab.test(f) ? f.replace(Ab, "$1_=" + ib++) : f + (jb.test(f) ? "&" : "?") + "_=" + ib++));
            l.ifModified && (e.lastModified[f] && B.setRequestHeader("If-Modified-Since", e.lastModified[f]), e.etag[f] && B.setRequestHeader("If-None-Match", e.etag[f]));
            (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && B.setRequestHeader("Content-Type", l.contentType);
            B.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ?
                l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Db + "; q=0.01" : "") : l.accepts["*"]);
            for (d in l.headers) B.setRequestHeader(d, l.headers[d]);
            if (l.beforeSend && (!1 === l.beforeSend.call(v, B, l) || 2 === H)) return B.abort();
            J = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) B[d](l[d]);
            if (m = xa(ab, l, c, B)) {
                B.readyState = 1;
                k && u.trigger("ajaxSend", [B, l]);
                l.async && 0 < l.timeout && (n = setTimeout(function() {
                    B.abort("timeout")
                }, l.timeout));
                try {
                    H = 1, m.send(Q, g)
                } catch (E) {
                    if (2 > H) g(-1, E);
                    else throw E;
                }
            } else g(-1, "No Transport");
            return B
        },
        getJSON: function(a, c, g) {
            return e.get(a, c, g, "json")
        },
        getScript: function(a, c) {
            return e.get(a, void 0, c, "script")
        }
    });
    e.each(["get", "post"], function(a, c) {
        e[c] = function(a, b, d, f) {
            e.isFunction(b) && (f = f || d, d = b, b = void 0);
            return e.ajax({
                url: a,
                type: c,
                dataType: f,
                data: b,
                success: d
            })
        }
    });
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
        e.fn[c] = function(a) {
            return this.on(c, a)
        }
    });
    e._evalUrl = function(a) {
        return e.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    e.fn.extend({
        wrapAll: function(a) {
            if (e.isFunction(a)) return this.each(function(c) {
                e(this).wrapAll(a.call(this, c))
            });
            if (this[0]) {
                var c = e(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return e.isFunction(a) ? this.each(function(c) {
                e(this).wrapInner(a.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                    g = c.contents();
                g.length ? g.wrapAll(a) : c.append(a)
            })
        },
        wrap: function(a) {
            var c = e.isFunction(a);
            return this.each(function(g) {
                e(this).wrapAll(c ? a.call(this, g) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    e.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !w.reliableHiddenOffsets() && "none" === (a.style && a.style.display || e.css(a, "display"))
    };
    e.expr.filters.visible = function(a) {
        return !e.expr.filters.hidden(a)
    };
    var mc = /%20/g,
        Mb = /\[\]$/,
        Eb = /\r?\n/g,
        nc = /^(?:submit|button|image|reset|file)$/i,
        oc = /^(?:input|select|textarea|keygen)/i;
    e.param = function(a, c) {
        var g, b = [],
            d = function(a, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                b[b.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
            };
        void 0 === c && (c = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(a) || a.jquery && !e.isPlainObject(a)) e.each(a, function() {
            d(this.name, this.value)
        });
        else
            for (g in a) ya(g, a[g], c, d);
        return b.join("&").replace(mc, "+")
    };
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = e.prop(this, "elements");
                return a ? e.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !e(this).is(":disabled") && oc.test(this.nodeName) && !nc.test(a) && (this.checked || !$a.test(a))
            }).map(function(a, c) {
                var g = e(this).val();
                return null == g ? null : e.isArray(g) ? e.map(g, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(Eb, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: g.replace(Eb, "\r\n")
                }
            }).get()
        }
    });
    e.ajaxSettings.xhr = void 0 !== b.ActiveXObject ? function() {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Ma())) a: {
            try {
                a = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            a = void 0
        }
        return a
    } : Ma;
    var pc = 0,
        Ya = {},
        Za = e.ajaxSettings.xhr();
    if (b.ActiveXObject) e(b).on("unload", function() {
        for (var a in Ya) Ya[a](void 0, !0)
    });
    w.cors = !!Za && "withCredentials" in Za;
    (Za = w.ajax = !!Za) && e.ajaxTransport(function(a) {
        if (!a.crossDomain || w.cors) {
            var c;
            return {
                send: function(g, b) {
                    var d, f = a.xhr(),
                        h = ++pc;
                    f.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (d in a.xhrFields) f[d] = a.xhrFields[d];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                    a.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest");
                    for (d in g) void 0 !== g[d] && f.setRequestHeader(d, g[d] + "");
                    f.send(a.hasContent && a.data || null);
                    c = function(g, d) {
                        var n, k, m;
                        if (c && (d || 4 === f.readyState))
                            if (delete Ya[h], c = void 0, f.onreadystatechange = e.noop, d) 4 !== f.readyState && f.abort();
                            else {
                                m = {};
                                n = f.status;
                                "string" === typeof f.responseText && (m.text = f.responseText);
                                try {
                                    k = f.statusText
                                } catch (l) {
                                    k = ""
                                }
                                n || !a.isLocal || a.crossDomain ? 1223 === n && (n = 204) : n = m.text ? 200 : 404
                            }
                        m && b(n, k, m, f.getAllResponseHeaders())
                    };
                    a.async ? 4 === f.readyState ? setTimeout(c) : f.onreadystatechange = Ya[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                e.globalEval(a);
                return a
            }
        }
    });
    e.ajaxPrefilter("script",
        function(a) {
            void 0 === a.cache && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
    e.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, g = x.head || e("head")[0] || x.documentElement;
            return {
                send: function(b, e) {
                    c = x.createElement("script");
                    c.async = !0;
                    a.scriptCharset && (c.charset = a.scriptCharset);
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function(a, g) {
                        if (g || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, g ||
                            e(200, "success")
                    };
                    g.insertBefore(c, g.firstChild)
                },
                abort: function() {
                    if (c) c.onload(void 0, !0)
                }
            }
        }
    });
    var Fb = [],
        kb = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || e.expando + "_" + ib++;
            this[a] = !0;
            return a
        }
    });
    e.ajaxPrefilter("json jsonp", function(a, c, g) {
        var d, f, h, n = !1 !== a.jsonp && (kb.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && kb.test(a.data) && "data");
        if (n || "jsonp" === a.dataTypes[0]) return d = a.jsonpCallback =
            e.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, n ? a[n] = a[n].replace(kb, "$1" + d) : !1 !== a.jsonp && (a.url += (jb.test(a.url) ? "&" : "?") + a.jsonp + "=" + d), a.converters["script json"] = function() {
                h || e.error(d + " was not called");
                return h[0]
            }, a.dataTypes[0] = "json", f = b[d], b[d] = function() {
                h = arguments
            }, g.always(function() {
                b[d] = f;
                a[d] && (a.jsonpCallback = c.jsonpCallback, Fb.push(d));
                h && e.isFunction(f) && f(h[0]);
                h = f = void 0
            }), "script"
    });
    e.parseHTML = function(a, c, g) {
        if (!a || "string" !== typeof a) return null;
        "boolean" ===
        typeof c && (g = c, c = !1);
        c = c || x;
        var b = Ta.exec(a);
        g = !g && [];
        if (b) return [c.createElement(b[1])];
        b = e.buildFragment([a], c, g);
        g && g.length && e(g).remove();
        return e.merge([], b.childNodes)
    };
    var Gb = e.fn.load;
    e.fn.load = function(a, c, g) {
        if ("string" !== typeof a && Gb) return Gb.apply(this, arguments);
        var b, d, f, h = this,
            n = a.indexOf(" ");
        0 <= n && (b = a.slice(n, a.length), a = a.slice(0, n));
        e.isFunction(c) ? (g = c, c = void 0) : c && "object" === typeof c && (f = "POST");
        0 < h.length && e.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            d = arguments;
            h.html(b ? e("<div>").append(e.parseHTML(a)).find(b) : a)
        }).complete(g && function(a, c) {
            h.each(g, d || [a.responseText, c, a])
        });
        return this
    };
    e.expr.filters.animated = function(a) {
        return e.grep(e.timers, function(c) {
            return a === c.elem
        }).length
    };
    var Hb = b.document.documentElement;
    e.offset = {
        setOffset: function(a, c, g) {
            var b, d, f, h = e.css(a, "position"),
                n = e(a),
                k = {};
            "static" === h && (a.style.position = "relative");
            f = n.offset();
            d = e.css(a, "top");
            b = e.css(a, "left");
            ("absolute" === h || "fixed" === h) && -1 < e.inArray("auto", [d, b]) ? (b = n.position(),
                d = b.top, b = b.left) : (d = parseFloat(d) || 0, b = parseFloat(b) || 0);
            e.isFunction(c) && (c = c.call(a, g, f));
            null != c.top && (k.top = c.top - f.top + d);
            null != c.left && (k.left = c.left - f.left + b);
            "using" in c ? c.using.call(a, k) : n.css(k)
        }
    };
    e.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(c) {
                e.offset.setOffset(this, a, c)
            });
            var c, g, b = {
                    top: 0,
                    left: 0
                },
                d = (g = this[0]) && g.ownerDocument;
            if (d) {
                c = d.documentElement;
                if (!e.contains(c, g)) return b;
                "undefined" !== typeof g.getBoundingClientRect && (b = g.getBoundingClientRect());
                g = Na(d);
                return {
                    top: b.top + (g.pageYOffset || c.scrollTop) - (c.clientTop || 0),
                    left: b.left + (g.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a, c, b = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                "fixed" === e.css(d, "position") ? c = d.getBoundingClientRect() : (a = this.offsetParent(), c = this.offset(), e.nodeName(a[0], "html") || (b = a.offset()), b.top += e.css(a[0], "borderTopWidth", !0), b.left += e.css(a[0], "borderLeftWidth", !0));
                return {
                    top: c.top - b.top - e.css(d, "marginTop", !0),
                    left: c.left - b.left - e.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Hb; a && !e.nodeName(a, "html") && "static" === e.css(a, "position");) a = a.offsetParent;
                return a || Hb
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var b = /Y/.test(c);
        e.fn[a] = function(d) {
            return oa(this, function(a, d, f) {
                var h = Na(a);
                if (void 0 === f) return h ? c in h ? h[c] : h.document.documentElement[d] : a[d];
                h ? h.scrollTo(b ? e(h).scrollLeft() : f, b ? f : e(h).scrollTop()) : a[d] = f
            }, a, d, arguments.length, null)
        }
    });
    e.each(["top", "left"], function(a, c) {
        e.cssHooks[c] = Da(w.pixelPosition, function(a, b) {
            if (b) return b = ma(a, c), Ra.test(b) ? e(a).position()[c] + "px" : b
        })
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        e.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(b, d) {
            e.fn[d] = function(d, f) {
                var h = arguments.length && (b || "boolean" !== typeof d),
                    n = b || (!0 === d || !0 === f ? "margin" : "border");
                return oa(this, function(c, b, g) {
                    return e.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (b = c.documentElement,
                        Math.max(c.body["scroll" + a], b["scroll" + a], c.body["offset" + a], b["offset" + a], b["client" + a])) : void 0 === g ? e.css(c, b, n) : e.style(c, b, g, n)
                }, c, h ? d : void 0, h, null)
            }
        })
    });
    e.fn.size = function() {
        return this.length
    };
    e.fn.andSelf = e.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return e
    });
    var qc = b.jQuery,
        rc = b.$;
    e.noConflict = function(a) {
        b.$ === e && (b.$ = rc);
        a && b.jQuery === e && (b.jQuery = qc);
        return e
    };
    "undefined" === typeof l && (b.jQuery = b.$ = e);
    return e
});
(function(b, l, m) {
    function f() {
        if (h) return h;
        h = "default";
        if ("ltr" === l.documentElement.dir) return h;
        var d = b("<div>A</div>").css({
                "font-size": "14px",
                height: "1px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px",
                width: "1px"
            }).appendTo(l.body),
            f = d[0];
        0 < f.scrollLeft ? h = "reverse" : (f.scrollLeft = 1, 0 === f.scrollLeft && (h = "negative"));
        d.remove();
        return h
    }

    function k(b) {
        switch (f()) {
            case "negative":
                return -b;
            case "reverse":
                return this.scrollWidth - this.clientWidth - b;
            default:
                return b
        }
    }
    var h = null;
    b.fn.bidiScrollLeft =
        function(b) {
            var f = this[0];
            if (b === m) return k.call(f, f.scrollLeft);
            f.scrollLeft = k.call(f, b)
        };
    b.fn.animateBidiScrollLeft = function(b, f, h) {
        b = {
            scrollLeft: k.call(this[0], b)
        };
        this.animate(b, {
            duration: f,
            complete: h
        })
    }
})(jQuery, document);
try {
    (function() {
        var b, l, m, f, k, h, d, n, r, u, v, y, A, z, H, I, C, B, J, M, E, U, S, ua, W, Da, Ea, ea, Ga, X, Ha, N, K, fa, Ia, qa, Ka, La, xa, na, ya, Ma, Na, L, Y, za, Aa, O, T, F, aa = [].indexOf || function(b) {
                for (var e = 0, d = this.length; e < d; e++)
                    if (e in this && this[e] === b) return e;
                return -1
            },
            Oa = function(b, e) {
                function d() {
                    this.constructor = b
                }
                for (var f in e) w.call(e, f) && (b[f] = e[f]);
                d.prototype = e.prototype;
                b.prototype = new d;
                b.__super__ = e.prototype;
                return b
            },
            w = {}.hasOwnProperty,
            e = [].slice,
            bb = function(b, e) {
                return function() {
                    return b.apply(e, arguments)
                }
            };
        X = {};
        y = 10;
        za = !1;
        F = qa = ea = B = K = null;
        f = {
            BEFORE_CHANGE: "page:before-change",
            FETCH: "page:fetch",
            RECEIVE: "page:receive",
            CHANGE: "page:change",
            UPDATE: "page:update",
            LOAD: "page:load",
            RESTORE: "page:restore",
            BEFORE_UNLOAD: "page:before-unload",
            EXPIRE: "page:expire"
        };
        E = function(b) {
            var e;
            b = new m(b);
            ya();
            v();
            null != K && K.start();
            return za && (e = Aa(b.absolute)) ? (U(e), S(b, null, !1)) : S(b, L)
        };
        Aa = function(b) {
            if ((b = X[b]) && !b.transitionCacheDisabled) return b
        };
        S = function(b, e, d) {
            null == d && (d = !0);
            O(f.FETCH, {
                url: b.absolute
            });
            null !=
                F && F.abort();
            F = new XMLHttpRequest;
            F.open("GET", b.withoutHashForIE10compatibility(), !0);
            F.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml");
            F.setRequestHeader("X-XHR-Referer", qa);
            F.onload = function() {
                var d;
                O(f.RECEIVE, {
                    url: b.absolute
                });
                return (d = N()) ? (Ka(b), La(), A.apply(null, M(d)), Ga(), "function" === typeof e && e(), O(f.LOAD)) : document.location.href = C() || b.absolute
            };
            K && d && (F.onprogress = function(b) {
                return function(b) {
                    return K.advanceTo(b.lengthComputable ? b.loaded / b.total * 100 :
                        K.value + (100 - K.value) / 10)
                }
            }(this));
            F.onloadend = function() {
                return F = null
            };
            F.onerror = function() {
                return document.location.href = b.absolute
            };
            return F.send()
        };
        U = function(b) {
            null != F && F.abort();
            A(b.title, b.body);
            fa(b);
            return O(f.RESTORE)
        };
        v = function() {
            var b;
            b = new m(B.url);
            X[b.absolute] = {
                url: b.relative,
                body: document.body,
                title: document.title,
                positionY: window.pageYOffset,
                positionX: window.pageXOffset,
                cachedAt: (new Date).getTime(),
                transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
            };
            return H(y)
        };
        H = function(b) {
            var e, d, h, n, k, m;
            k = Object.keys(X);
            e = k.map(function(b) {
                return X[b].cachedAt
            }).sort(function(b, e) {
                return e - b
            });
            m = [];
            d = 0;
            for (n = k.length; d < n; d++) h = k[d], X[h].cachedAt <= e[b] && (O(f.EXPIRE, X[h]), m.push(delete X[h]));
            return m
        };
        A = function(e, d, h, n) {
            O(f.BEFORE_UNLOAD);
            document.title = e;
            document.documentElement.replaceChild(d, document.body);
            null != h && b.update(h);
            Y();
            n && J();
            B = window.history.state;
            null != K && K.done();
            O(f.CHANGE);
            return O(f.UPDATE)
        };
        J = function() {
            var b, e, d, f, h, n, k, m, l, r;
            r = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
            d = 0;
            for (h = r.length; d < h; d++)
                if (l = r[d], "" === (k = l.type) || "text/javascript" === k) {
                    e = document.createElement("script");
                    m = l.attributes;
                    f = 0;
                    for (n = m.length; f < n; f++) b = m[f], e.setAttribute(b.name, b.value);
                    l.hasAttribute("async") || (e.async = !1);
                    e.appendChild(document.createTextNode(l.innerHTML));
                    f = l.parentNode;
                    b = l.nextSibling;
                    f.removeChild(l);
                    f.insertBefore(e, b)
                }
        };
        Ma = function(b) {
            b.innerHTML = b.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, "");
            return b
        };
        Y = function() {
            var b, e;
            if ((b = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length -
                    1]) && document.activeElement !== b) return b.focus()
        };
        Ka = function(b) {
            if ((b = new m(b)).absolute !== qa) return window.history.pushState({
                turbolinks: !0,
                url: b.absolute
            }, "", b.absolute)
        };
        La = function() {
            var b, e;
            if (b = F.getResponseHeader("X-XHR-Redirected-To")) return b = new m(b), e = b.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", b.href + e)
        };
        C = function() {
            var b;
            if (null != (b = F.getResponseHeader("Location")) && (new m(b)).crossOrigin()) return b
        };
        ya = function() {
            return qa = document.location.href
        };
        na = function() {
            return window.history.replaceState({
                turbolinks: !0,
                url: document.location.href
            }, "", document.location.href)
        };
        xa = function() {
            return B = window.history.state
        };
        Ga = function() {
            var b;
            if (navigator.userAgent.match(/Firefox/) && !(b = new m).hasNoHash()) return window.history.replaceState(B, "", b.withoutHash()), document.location.hash = b.hash
        };
        fa = function(b) {
            return window.scrollTo(b.positionX, b.positionY)
        };
        L = function() {
            return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0,
                0)
        };
        z = function(b) {
            var e, d, f;
            if (null == b || "object" !== typeof b) return b;
            e = new b.constructor;
            for (d in b) f = b[d], e[d] = z(f);
            return e
        };
        O = function(b, e) {
            var d;
            "undefined" !== typeof Prototype && Event.fire(document, b, e, !0);
            d = document.createEvent("Events");
            e && (d.data = e);
            d.initEvent(b, !0, !0);
            return document.dispatchEvent(d)
        };
        Ha = function(b) {
            return !O(f.BEFORE_CHANGE, {
                url: b
            })
        };
        N = function() {
            var b, e, d, f;
            e = function() {
                var b;
                return null != (b = F.getResponseHeader("Content-Type")) && b.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
            };
            d = function(b) {
                var e, d, f, h;
                f = b.querySelector("head").childNodes;
                h = [];
                b = 0;
                for (e = f.length; b < e; b++) d = f[b], null != ("function" === typeof d.getAttribute ? d.getAttribute("data-turbolinks-track") : void 0) && h.push(d.getAttribute("src") || d.getAttribute("href"));
                return h
            };
            b = function(b) {
                ea || (ea = d(document));
                b = d(b);
                return b.length !== ea.length || f(b, ea).length !== ea.length
            };
            f = function(b, e) {
                var d, f, h, n;
                b.length > e.length && (d = [e, b], b = d[0], e = d[1]);
                h = [];
                d = 0;
                for (f = b.length; d < f; d++) n = b[d], 0 <= aa.call(e, n) && h.push(n);
                return h
            };
            if (! function() {
                    var b;
                    return 400 <= (b = F.status) && 600 > b
                }() && e() && (e = I(F.responseText)) && !b(e)) return e
        };
        M = function(e) {
            var d;
            d = e.querySelector("title");
            return [null != d ? d.textContent : void 0, Ma(e.querySelector("body")), b.get(e).token, "runScripts"]
        };
        b = {
            get: function(b) {
                var e;
                null == b && (b = document);
                return {
                    node: e = b.querySelector('meta[name="csrf-token"]'),
                    token: null != e ? "function" === typeof e.getAttribute ? e.getAttribute("content") : void 0 : void 0
                }
            },
            update: function(b) {
                var e;
                e = this.get();
                if (null != e.token && null != b &&
                    e.token !== b) return e.node.setAttribute("content", b)
            }
        };
        I = function(b) {
            var e;
            e = document.documentElement.cloneNode();
            e.innerHTML = b;
            e.head = e.querySelector("head");
            e.body = e.querySelector("body");
            return e
        };
        m = function() {
            function b(e) {
                this.original = null != e ? e : document.location.href;
                if (this.original.constructor === b) return this.original;
                this._parse()
            }
            b.prototype.withoutHash = function() {
                return this.href.replace(this.hash, "").replace("#", "")
            };
            b.prototype.withoutHashForIE10compatibility = function() {
                return this.withoutHash()
            };
            b.prototype.hasNoHash = function() {
                return 0 === this.hash.length
            };
            b.prototype.crossOrigin = function() {
                return this.origin !== (new b).origin
            };
            b.prototype._parse = function() {
                var b;
                (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original;
                b = this.link;
                this.href = b.href;
                this.protocol = b.protocol;
                this.host = b.host;
                this.hostname = b.hostname;
                this.port = b.port;
                this.pathname = b.pathname;
                this.search = b.search;
                this.hash = b.hash;
                this.origin = [this.protocol, "//", this.hostname].join("");
                0 !== this.port.length &&
                    (this.origin += ":" + this.port);
                this.relative = [this.pathname, this.search, this.hash].join("");
                return this.absolute = this.href
            };
            return b
        }();
        k = function(b) {
            function d(b) {
                this.link = b;
                if (this.link.constructor === d) return this.link;
                this.original = this.link.href;
                this.originalElement = this.link;
                this.link = this.link.cloneNode(!1);
                d.__super__.constructor.apply(this, arguments)
            }
            Oa(d, b);
            d.HTML_EXTENSIONS = ["html"];
            d.allowExtensions = function() {
                var b, f, h, n;
                f = 1 <= arguments.length ? e.call(arguments, 0) : [];
                h = 0;
                for (n = f.length; h <
                    n; h++) b = f[h], d.HTML_EXTENSIONS.push(b);
                return d.HTML_EXTENSIONS
            };
            d.prototype.shouldIgnore = function() {
                return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
            };
            d.prototype._anchored = function() {
                return (0 < this.hash.length || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new m).withoutHash()
            };
            d.prototype._nonHtml = function() {
                return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + d.HTML_EXTENSIONS.join("|") + ")?$", "g"))
            };
            d.prototype._optOut =
                function() {
                    var b, e;
                    for (e = this.originalElement; !b && e !== document;) b = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
                    return b
                };
            d.prototype._target = function() {
                return 0 !== this.link.target.length
            };
            return d
        }(m);
        l = function() {
            function b(e) {
                this.event = e;
                this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (Ha(this.link.absolute) || T(this.link.href), this.event.preventDefault()))
            }
            b.installHandlerLast = function(e) {
                if (!e.defaultPrevented) return document.removeEventListener("click",
                    b.handle, !1), document.addEventListener("click", b.handle, !1)
            };
            b.handle = function(e) {
                return new b(e)
            };
            b.prototype._extractLink = function() {
                var b;
                for (b = this.event.target; b.parentNode && "A" !== b.nodeName;) b = b.parentNode;
                if ("A" === b.nodeName && 0 !== b.href.length) return this.link = new k(b)
            };
            b.prototype._validForTurbolinks = function() {
                return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
            };
            b.prototype._nonStandardClick = function() {
                return 1 < this.event.which || this.event.metaKey || this.event.ctrlKey ||
                    this.event.shiftKey || this.event.altKey
            };
            return b
        }();
        h = function() {
            function b(e) {
                this.elementSelector = e;
                this._trickle = bb(this._trickle, this);
                this.value = 0;
                this.content = "";
                this.speed = 300;
                this.opacity = .99;
                this.install()
            }
            b.prototype.install = function() {
                this.element = document.querySelector(this.elementSelector);
                this.element.classList.add("turbolinks-progress-bar");
                this.styleElement = document.createElement("style");
                document.head.appendChild(this.styleElement);
                return this._updateStyle()
            };
            b.prototype.uninstall =
                function() {
                    this.element.classList.remove("turbolinks-progress-bar");
                    return document.head.removeChild(this.styleElement)
                };
            b.prototype.start = function() {
                return this.advanceTo(5)
            };
            b.prototype.advanceTo = function(b) {
                var e;
                if (b > (e = this.value) && 100 >= e) {
                    this.value = b;
                    this._updateStyle();
                    if (100 === this.value) return this._stopTrickle();
                    if (0 < this.value) return this._startTrickle()
                }
            };
            b.prototype.done = function() {
                if (0 < this.value) return this.advanceTo(100), this._reset()
            };
            b.prototype._reset = function() {
                var b;
                b = this.opacity;
                setTimeout(function(b) {
                    return function() {
                        b.opacity = 0;
                        return b._updateStyle()
                    }
                }(this), this.speed / 2);
                return setTimeout(function(e) {
                    return function() {
                        e.value = 0;
                        e.opacity = b;
                        return e._withSpeed(0, function() {
                            return e._updateStyle(!0)
                        })
                    }
                }(this), this.speed)
            };
            b.prototype._startTrickle = function() {
                if (!this.trickling) return this.trickling = !0, setTimeout(this._trickle, this.speed)
            };
            b.prototype._stopTrickle = function() {
                return delete this.trickling
            };
            b.prototype._trickle = function() {
                if (this.trickling) return this.advanceTo(this.value +
                    Math.random() / 2), setTimeout(this._trickle, this.speed)
            };
            b.prototype._withSpeed = function(b, e) {
                var d, f;
                d = this.speed;
                this.speed = b;
                f = e();
                this.speed = d;
                return f
            };
            b.prototype._updateStyle = function(b) {
                null == b && (b = !1);
                b && this._changeContentToForceRepaint();
                return this.styleElement.textContent = this._createCSSRule()
            };
            b.prototype._changeContentToForceRepaint = function() {
                return this.content = "" === this.content ? " " : ""
            };
            b.prototype._createCSSRule = function() {
                return this.elementSelector + ".turbolinks-progress-bar::before {\n  content: '" +
                    this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
            };
            return b
        }();
        u = function(b) {
            return setTimeout(b, 500)
        };
        W = function() {
            return document.addEventListener("DOMContentLoaded", function() {
                O(f.CHANGE);
                return O(f.UPDATE)
            }, !0)
        };
        Ea = function() {
            if ("undefined" !== typeof jQuery) return jQuery(document).on("ajaxSuccess",
                function(b, e, d) {
                    if (jQuery.trim(e.responseText)) return O(f.UPDATE)
                })
        };
        Da = function(b) {
            var e;
            if (null != (e = b.state) && e.turbolinks) return (e = X[(new m(b.state.url)).absolute]) ? (v(), U(e)) : T(b.target.location.href)
        };
        ua = function() {
            na();
            xa();
            document.addEventListener("click", l.installHandlerLast, !0);
            window.addEventListener("hashchange", function(b) {
                na();
                return xa()
            }, !1);
            return u(function() {
                return window.addEventListener("popstate", Da, !1)
            })
        };
        d = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/);
        n = window.history && window.history.pushState && window.history.replaceState && d;
        d = !navigator.userAgent.match(/CriOS\//);
        Na = "GET" === (Ia = function(b) {
            var e, d;
            d = (null != (e = document.cookie.match(new RegExp(b + "=(\\w+)"))) ? e[1].toUpperCase() : void 0) || "";
            document.cookie = b + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/";
            return d
        }("request_method")) || "" === Ia;
        r = n && d && Na;
        document.addEventListener && document.createEvent && (W(), Ea());
        r ? (T = E, ua()) : T = function(b) {
            return document.location.href = b
        };
        this.Turbolinks = {
            visit: T,
            pagesCached: function(b) {
                null == b && (b = y);
                if (/^[\d]+$/.test(b)) return y = parseInt(b)
            },
            enableTransitionCache: function(b) {
                null == b && (b = !0);
                return za = b
            },
            enableProgressBar: function(b) {
                null == b && (b = !0);
                if (r) {
                    if (b) return null != K ? K : K = new h("html");
                    null != K && K.uninstall();
                    return K = null
                }
            },
            allowLinkExtensions: k.allowExtensions,
            supported: r,
            EVENTS: z(f)
        }
    }).call(this)
} catch (b) {}
(function(b) {
    function l(b, f, k) {
        this.leftRegex = new RegExp((b || /(?:^|\s)(\S+)/).source + "$");
        this.rightRegex = new RegExp("^" + (f || /(\S*)/).source);
        this.maxLength = 0 < k ? k : 128
    }
    l.VERSION = "0.2";
    l.startsWith = function(b) {
        return new l(new RegExp(["(?:^|\\s)(", b, "[^", b, "\\s]*)"].join("")))
    };
    l.prototype.token = function(b, f) {
        var k;
        "string" === typeof b ? k = b : (k = b.value, f = b.selectionStart);
        var h = k.slice(0, f);
        k = k.slice(f);
        var d = h.slice(-this.maxLength),
            h = k.slice(0, this.maxLength),
            d = (k = d.match(this.leftRegex)) ? k[1] : "",
            h =
            (k = h.match(this.rightRegex)) ? k[1] : "";
        return {
            value: d ? d + h : "",
            prefix: d,
            suffix: d ? h : "",
            toString: function() {
                return this.value
            }
        }
    };
    l.prototype.replace = function(b, f, k) {
        var h;
        "string" === typeof b ? h = b : (h = b.value, k = f, f = b.selectionStart);
        var d = this.token(h, f);
        if (h && !d.value) return "string" === typeof b ? h : !1;
        var n = h.slice(0, f);
        h = h.slice(f);
        n = [n.slice(0, n.length - d.prefix.length), k, h.slice(d.suffix.length)].join("");
        if ("string" === typeof b) return n;
        k = k.length - d.prefix.length;
        b.value = n;
        b.setSelectionRange(f + k, f + k);
        return !0
    };
    b.Cursores = l
})(this);
jQuery.fn.bg = function(b) {
    return this.css("background-image", b ? "url(" + b + ")" : "")
};
jQuery.json = function(b, l, m) {
    l.dataType = "json";
    return this.ajax(b, l).done(function(b, k, h) {
        return m.call(this, h.responseJSON)
    }).fail(function(b, k, h) {
        return m.call(this, b.responseJSON)
    })
};
jQuery.fn.presence = function() {
    return 0 < this.length ? this : null
};
window.Utils = function(b, l, m) {
    return {
        getCsrfToken: function() {
            return b('meta[name="csrf-token"]').attr("content")
        },
        debounce: function(b, k) {
            var h;
            return function() {
                h && l.clearTimeout(h);
                var d = this,
                    n = arguments;
                h = l.setTimeout(function() {
                    b.apply(d, n);
                    h = null
                }, k)
            }
        },
        serialize: function(f) {
            var k = {},
                h = f.attr("name");
            h && (k[h] = f.val());
            return b.extend(k, f.data("params"))
        },
        isPresent: function(f) {
            return 0 < b.trim(f).length
        },
        countSymbols: function(b) {
            return b.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length
        },
        limitSymbols: function(b,
            k) {
            for (var h = "", d = 0, n, l, m = 0; m < b.length && (n = b.charAt(m), l = n.charCodeAt(0), h += n, 55296 <= l && 56319 >= l && (h += b.charAt(++m)), ++d != k); m++);
            return h
        },
        setCookie: function(b, k, h, d) {
            b = b + "=" + (k ? encodeURIComponent(k) : "");
            h && (h = 0 < h ? (new Date((new Date).getTime() + h)).toGMTString() : "Thu, 01 Jan 1970 00:00:01 GMT", b += ";expires=" + h);
            d && (b += ";path=" + d);
            m.cookie = b
        }
    }
}(jQuery, window, document);
window.Events = function(b) {
    function l() {
        k("trigger", arguments)
    }

    function m() {
        k("on", arguments)
    }

    function f() {
        k("off", arguments)
    }

    function k(d, f) {
        var k = b(f[0]),
            m = h(f[1]),
            l = b.makeArray(f).slice(2),
            m = [m.join(" ")].concat(l);
        k[d].apply(k, m);
        //console.log(k);
    }

    function h(f) {
        return b.map(f.split(" "), function(b) {
            b = b.split(".", 2);
            var f = d[b[0]];
            f && (b[0] = f);
            return b.join(".")
        })
    }
    var d = {};
    return {
        on: m,
        off: f,
        fire: l,
        refire: function(b, d, h) {
            f(b, d);
            m(b, d, h);
            l(b, d)
        },
        alias: function(b, f) {
            d[b] = f
        }
    }
}(jQuery);
window.Browser = function(b, l, m, f) {
    function k(b) {
        return -1 !== d.indexOf(b)
    }

    function h() {
        b(m.body).addClass("foo").removeClass("foo")
    }
    var d = l.navigator && l.navigator.userAgent || "";
    if (k("IEmobile/11")) f.on(l, "turbolinks:change", h);
    return {
        isUserAgent: k,
        notUserAgent: function(b) {
            return -1 === d.indexOf(b)
        }
    }
}(jQuery, window, document, Events);
window.Turbolinkz = function(b, l, m, f, k, h, d) {
    function n() {
        return h == d || !h.supported || !!(u("IEMobile/10.") || u("Android") && u("Firefox") || (u("Android 2.") || u("Android 4.0")) && u("Mobile Safari") && v("Chrome") && v("Windows Phone"))
    }

    function r(b) {
        n() ? l.location.href = b : h.visit(b)
    }
    var u = k.isUserAgent,
        v = k.notUserAgent;
    n() ? f.alias("custom:ready", "ready") : (f.alias("custom:ready", "page:change"), f.alias("turbolinks:before-unload", "page:before-unload"), f.alias("turbolinks:fetch", "page:fetch"), f.alias("turbolinks:change",
        "page:change"));
    f.on(m, "ready", function() {
        n() && b(m.body).attr("data-no-turbolink", !0)
    });
    return {
        visit: r,
        reload: function() {
            r(l.location.toString())
        }
    }
}(jQuery, window, document, Events, Browser, window.Turbolinks);
window.Actions = function(b, l, m, f) {
    function k(d) {
        return function(f) {
            var k = h[b(this).data(d)];
            k && (k.handler(this, f), !1 !== k.options.preventDefault && f.preventDefault())
        }
    }
    var h = {};
    b(l).on("submit", "form[data-action]", k("action")).on("click", "a[data-action]", k("action")).on("click", "input[data-action]", k("action")).on("click", "button[data-action]", k("action")).on("change", "select[data-action]", k("action")).on("input paste", "input[data-input]", f.debounce(function(d) {
        return m.notUserAgent("Trident/") ? d : function() {
            var f =
                b(this),
                h = f.data("oldVal") || "",
                k = f.val();
            if (h !== k) return f.data("oldVal", k), d.apply(this, arguments)
        }
    }(k("input")), 500)).on("upload", "label[data-upload]", k("upload"));
    return function(b, f, k) {
        h[b] = {
            handler: f,
            options: k || {}
        }
    }
}(jQuery, document, Browser, Utils);
window.Ajax = function(b, l) {
    function m(f, d, n) {
        var k = b(d);
        f = b.extend(!0, {
            url: k.data("url") || k.attr("href"),
            type: f,
            data: l.serialize(k),
            context: d
        }, n);
        return b.ajax(f)
    }

    function f(f, d) {
        d = b.extend(!0, {}, d, {
            headers: {
                "X-CSRF-Token": l.getCsrfToken()
            }
        });
        return m("POST", f, d)
    }

    function k(h, d) {
        d = b.extend(!0, {}, d, {
            data: {
                _method: "PUT"
            }
        });
        return f(h, d)
    }
    return {
        get: function(b, d) {
            return m("GET", b, d)
        },
        post: f,
        put: k,
        _put: k,
        _delete: function(h, d) {
            d = b.extend(!0, {}, d, {
                data: {
                    _method: "DELETE"
                }
            });
            return f(h, d)
        }
    }
}(jQuery, Utils);
window.Mutex = function(b, l) {
    function m(k, h) {
        var d = b(k);
        if (d.data("mutex")) return !1;
        d.data("mutex", !0);
        h && (d.addClass("item-disabled"), l.setTimeout(function() {
            f(k);
            d.removeClass("item-disabled")
        }, h));
        return !0
    }

    function f(f) {
        b(f).removeData("mutex")
    }
    return {
        acquire: m,
        vacquire: function(k, h) {
            var d = b(k),
                n = m(d, h);
            if (!k.form) return n;
            if (!n) return !1;
            n = d.val();
            if (d.data("mutex-val") === n) return f(d), !1;
            d.data("mutex-val", n);
            return !0
        },
        release: f
    }
}(jQuery, window);
window.Pages = function(b, l, m) {
    function f(b, d, f) {
        b = b + "/" + d;
        k[b] ? k[b].push(f) : k[b] = [f]
    }
    var k = {};
    m.on(l, "custom:ready", function(f) {
        var d = b(l.body).data("id"),
            n = d && d.split("/") || [],
            d = n[0],
            n = n[1],
            n = b.unique((k["*/*"] || []).concat(k[d + "/*"] || []).concat(k[d + "/" + n] || [])),
            m;
        for (m in n) n[m].call(this, f)
    });
    return function(b, d) {
        for (var n in b) {
            var k = b[n];
            if ("*" === n) "*" === k && f(n, k, d);
            else if ("*" === k) f(n, k, d);
            else
                for (var m in k) f(n, k[m], d)
        }
    }
}(jQuery, document, Events);
window.PageLoader = function(b, l, m) {
    function f() {
        b("#loaderMother").show()
    }

    function k() {
        b("#loaderMother").hide()
    }
    m.on(l, "custom:ready", k);
    m.on(l, "turbolinks:fetch", f);
    return {
        show: f,
        hide: k
    }
}(jQuery, document, Events);
window.AjaxUI = function(b, l) {
    return {
        get: function(m, f) {
            l.show();
            return b.get(m, f).always(PageLoader.hide)
        }
    }
}(Ajax, PageLoader);
window.AskfmAd = function(b, l, m, f, k) {
    function h(f) {
        if (!f) return d.call(this);
        b(this).html(f).addClass("loader").show()
    }

    function d() {
        var d = b(this),
            f = d.find(".askfm-default-ad").show();
        d.toggle(0 < f.length)
    }

    function n(f, h) {
        if ("error" === h) {
            var n = b(this).data("count-url");
            n && b.get(n)
        }
        d.call(this)
    }

    function r() {
        f.get(this).done(h).fail(n).always(function() {
            b(this).addClass("loaded")
        })
    }

    function u(d) {
        var f = ".askfm-ad-slot[data-url]";
        d || (f += ":not(.loaded)");
        return function() {
            b(f).parent(":visible").children(f).each(r)
        }
    }
    m.on(l, "custom:ready", u(!0));
    m.on(l, "custom:resize", u(!1))
}(jQuery, document, Events, Ajax, Utils);
window.Atcomplete = function(b, l, m, f, k) {
    function h() {
        return C = C || new f(/(?:^|\s)(@(?:[a-z][a-z0-9_]*)?)/i, /([a-z0-9_]*)/, 50)
    }

    function d(d, f) {
        var h = b(d),
            m = h.data("friends");
        switch (m) {
            case k:
                h.data("friends", !1), m = h.data("atcomplete"), b.getJSON(m, function(b) {
                    h.data("friends", b);
                    z.call(d)
                });
            case !1:
                return !1;
            default:
                return n(m, f)
        }
    }

    function n(b, d) {
        for (var f = [], h = 0, n = b.length; h < n && (0 !== b[h].login.lastIndexOf(d, 0) || (f.push(b[h]), 7 !== f.length)); h++);
        return f
    }

    function r(d) {
        return function(f) {
            var h = "<b>@" + f.login.substring(0,
                d) + "</b>" + f.login.substring(d);
            return b('<div class="item"> <div class="avatar"></div> <div class="name"></div> <div class="login" dir="ltr"></div></div>').data("login", f.login).find(".avatar").css("background-image", "url(" + f.avatar + ")").end().find(".name").text(f.name).end().find(".login").html(h).end()
        }
    }

    function u(d, f) {
        m.off(d, "keydown.atcomplete");
        (f || b(d).next(".atcomplete")).hide()
    }

    function v(d) {
        var f = b(d);
        return function() {
            f.data("noblur", !0)
        }
    }

    function y(d, f) {
        return function() {
            var n = b(d).removeData("noblur"),
                k = b(this).data("login");
            m.fire(n, "focus");
            h().replace(d, "@" + k + " ");
            m.fire(n, "input");
            u(n, f)
        }
    }

    function A(b) {
        return function(d) {
            var f = d.keyCode;
            if (9 === f || 13 === f || 27 === f || 38 === f || 40 === f) switch (d.preventDefault(), f) {
                case 13:
                    m.fire(b.find(".active"), "click");
                    break;
                case 27:
                    u(this, b);
                    break;
                case 9:
                    d.shiftKey && (f = 38);
                case 38:
                case 40:
                    d = b.find(".active").removeClass("active"), f = d[38 === f ? "prev" : "next"](), (f.length ? f : d).addClass("active")
            }
        }
    }

    function z() {
        var f = h().token(this).value,
            n = [],
            k = "";
        0 < f.length && (k = f.substring(1),
            n = d(this, k));
        n && 0 === n.length ? u(this) : (f = n, k = k.length, n = b(this).next(".atcomplete"), 0 === n.length && (n = b('<div class="atcomplete"></div>').insertAfter(this), m.on(n, "mousedown", ".item", v(this)), m.on(n, "click", ".item", y(this, n))), f = b.map(f, r(k)), m.off(this, "keydown.atcomplete"), m.on(this, "keydown.atcomplete", A(n)), f.length && f[0].addClass("active"), n.empty().append(f).show())
    }

    function H() {
        var d = b(this);
        d.data("noblur") || u(d)
    }

    function I(d) {
        d = b("input[data-atcomplete],textarea[data-atcomplete]", d.target);
        m.off(d, ".atcomplete");
        m.on(d, "input.atcomplete click.atcomplete", z);
        m.on(d, "blur.atcomplete", H)
    }
    var C;
    if (function() {
            var b = l.createElement("textarea");
            return "selectionStart" in b && "setSelectionRange" in b
        }()) m.on(l, "custom:ready lightbox:change", I)
}(jQuery, document, Events, Cursores);
window.Autofocus = function(b, l, m, f) {
    function k(h) {
        h = b("input[autofocus],textarea[autofocus]:first", h.target);
        h.length && f.fire(h, "focus")
    }
    f.on(l, "load", function(b) {
        f.on(m, "lightbox:change", k)
    })
}(jQuery, window, document, Events);
window.Config = function(b, l, m, f) {
    function k(b) {
        d ? u.push(b) : b.apply(this)
    }

    function h(b, d) {
        if (null === b) throw Error("JS configuration not loaded yet (" + d + ")");
        if ("undefined" === typeof b[d]) throw Error("JS configuration not found for key " + d);
        return b[d]
    }
    var d = !0,
        n = null,
        r = null,
        u = [];
    f.on(m, "turbolinks:fetch", function() {
        d = !0
    });
    f.on(m, "custom:ready", function() {
        r = b(m.body).data("config-cache")
    });
    return {
        init: function(f) {
            n = f;
            d = !1;
            b(m.body).data("config-cache", r = n);
            for (f = 0; f < u.length; ++f) u[f].apply(this);
            u = []
        },
        once: k,
        ajax: function(b) {
            f.on(m, "turbolinks:fetch", function() {
                k(b)
            })
        },
        always: function(b) {
            f.on(m, "custom:ready", function() {
                k(b)
            })
        },
        latest: function(b) {
            return h(n, b)
        },
        cached: function(b) {
            return h(r, b)
        }
    }
}(jQuery, window, document, Events);
window.Flash = function(b, l, m, f) {
    function k() {
        u.stop(!0, !0).hide()
    }

    function h() {
        return b(this).delay(f.latest("flash:delay")).fadeOut("slow").dequeue()
    }

    function d(b, d) {
        var f = -1 === b.indexOf("<a");
        v.html(b);
        u.finish().removeClass("alert notice").addClass(d).show();
        f && (v.append(y), u.queue(h))
    }

    function n(b) {
        d(b, "alert")
    }

    function r(b) {
        d(b, "notice")
    }
    var u = null,
        v = null,
        y = null;
    m.on(l, "custom:ready lightbox:change lightbox:close", function(d) {
        u = b(".flash-message", "lightbox:close" === d.type ? l : d.target).first();
        v = u.find("p");
        y = u.find(".icon-close");
        u.filter(":visible").queue(h)
    });
    return {
        error: n,
        notice: r,
        message: function(b, d) {
            b ? n(b) : d ? r(d) : k()
        },
        hideAction: k
    }
}(jQuery, document, Events, Config);
window.Uploads = function(b, l, m, f) {
    function k(d) {
        return "FileReader" in l && "ondrop" in m.createElement("div") && b(d).next("label").closest(".drop-zone") || b()
    }

    function h(b) {
        return b.data("drop-file") || b.prop("files")[0]
    }

    function d(b, d, f) {
        var h = Config.latest("uploader:max_size"),
            n = b.size && b.size > h,
            k = !n,
            r = Config.latest("uploader:resize:max_size"),
            r = b.size && b.size > r;
        if (!k && Config.latest("uploader:resize:enabled") && l.URL && URL.createObjectURL && l.HTMLCanvasElement && HTMLCanvasElement.prototype.toBlob && !r) {
            var v =
                new Image;
            v.onerror = function() {
                f()
            };
            v.onload = function() {
                var b = Config.latest("uploader:resize:max_dimension") / Math.max(v.width, v.height),
                    k = Math.floor(b * v.width),
                    b = Math.floor(b * v.height),
                    l = m.createElement("canvas");
                l.width = k;
                l.height = b;
                l.getContext("2d").drawImage(v, 0, 0, k, b);
                l.toBlob(function(b) {
                    (n = b.size && h < b.size) ? f(n): d(b)
                })
            };
            v.src = URL.createObjectURL(b)
        } else n ? f(n) : d(b)
    }

    function n(d, f) {
        var h = new FormData;
        h.append("ts", (new Date).getTime());
        h.append("rid", d.data("rid"));
        h.append("specs", d.data("specs"));
        h.append("file", f);
        return b.ajax({
            url: d.data("url"),
            type: "POST",
            data: h,
            async: !0,
            cache: !1,
            contentType: !1,
            processData: !1
        })
    }

    function r(b) {
        (b = b.data("identify-error")) && f.error(b)
    }

    function u() {
        var d = b(this),
            f = b(d).next("label");
        h(d) && Events.fire(f, "upload")
    }

    function v(d) {
        var f = !0;
        d.each(function() {
            var d = b(this),
                h = k(d);
            h.length && (f = !1, Events.on(h, "dragenter.uploads dragleave.uploads drop.uploads", y(h)), Events.on(h, "drop.uploads", function(b) {
                d.data("drop-file", b.originalEvent.dataTransfer.files[0]);
                Events.fire(d,
                    "change")
            }))
        });
        f || (Events.on(m, "dragenter.uploads dragleave.uploads drop.uploads", y(b(m.body))), Events.on(m, "dragenter.uploads dragover.uploads drop.uploads", function(b) {
            b.preventDefault()
        }), Events.on(m, "turbolinks:before-unload", function() {
            Events.off(m, ".uploads")
        }))
    }

    function y(b) {
        b.data("dragenters", 0);
        return function(d) {
            var f = b.data("dragenters");
            switch (d.type) {
                case "dragenter":
                    0 == f++ && b.addClass("drag-over");
                    break;
                case "dragleave":
                    0 == --f && b.removeClass("drag-over");
                    break;
                case "drop":
                    f = 0, b.removeClass("drag-over")
            }
            b.data("dragenters",
                f)
        }
    }

    function A(d) {
        d = b(".upload-file", d.target);
        Events.on(d, "change", u);
        v(d)
    }
    Events.on(m, "lightbox:change", A);
    return {
        init: A,
        post: function(k) {
            var m = b.Deferred(),
                l = b(k).prev(".upload-file"),
                v = h(l),
                u = ["image/jpeg", "image/png", "image/gif"];
            if (v.type && -1 === u.indexOf(v.type)) return r(l), m.rejectWith(k).promise();
            d(v, function(b) {
                n(l, b).done(function() {
                    l.wrap("<form>").closest("form").get(0).reset();
                    l.unwrap();
                    l.removeData("drop-file");
                    m.resolveWith(k, arguments)
                }).fail(function(b) {
                    (b = l.data((b.responseJSON &&
                        b.responseJSON.reason || "error").replace("_", "-"))) && f.error(b);
                    m.rejectWith(k)
                })
            }, function(b) {
                (b = l.data(b ? "file-size-error" : "error")) && f.error(b);
                m.rejectWith(k)
            });
            return m.promise()
        }
    }
}(jQuery, window, document, Flash);
window.Avatar = function(b, l, m, f) {
    function k(d) {
        return b(d).siblings(".avatar-thumb")
    }

    function h(b) {
        if (!m.acquire(b)) return !1;
        k(b).first().toggleClass("loader", !0);
        return !0
    }

    function d() {
        k(this).first().toggleClass("loader", !1);
        m.release(this)
    }

    function n(b) {
        var d = k(this);
        d.slice(1).remove();
        d.slice(0, 1).replaceWith(b)
    }
    return {
        uploadAction: function(k) {
            h(k) && f.post(k).done(function(f) {
                b(k).data("params", f);
                l.post(k).always(d).done(n)
            }).fail(d)
        },
        selectAction: function(f) {
            var k = b(f).parent().siblings("[data-upload]")[0];
            h(k) && l.put(f, {
                context: k
            }).always(d).done(n)
        },
        deleteAction: function(d) {
            m.acquire(d) && (l._delete(d), b(d).parent().remove())
        }
    }
}(jQuery, Ajax, Mutex, Uploads);
window.Background = function(b, l, m, f) {
    function k(d) {
        return b(d).siblings(".background-thumb")
    }

    function h(b) {
        if (!m.acquire(b)) return !1;
        k(b).toggleClass("loader", !0);
        return !0
    }

    function d() {
        k(this).toggleClass("loader", !1);
        m.release(this)
    }

    function n() {
        var d = b(this),
            f = k(d),
            d = d.data("params").thumbUrl;
        f.bg(d)
    }
    return {
        uploadAction: function(k) {
            h(k) && f.post(k).done(function(f) {
                b(k).data("params", f);
                l.post(k).always(d).done(n)
            }).fail(d)
        }
    }
}(jQuery, Ajax, Mutex, Uploads);
window.Form = function(b, l, m) {
    function f(f, d) {
        var n = b(f),
            m = b("<form>").attr({
                action: n.data("url") || n.attr("href"),
                target: k("IEmobile/11") || k("iPhone") && (k("FBAN") || k("Twitter") || k("Instagram")) ? null : n.data("window"),
                method: "POST"
            }),
            n = b.extend({}, d, l.serialize(n), {
                authenticity_token: l.getCsrfToken()
            }),
            u;
        for (u in n) b("<input>").attr({
            name: u,
            value: n[u]
        }).appendTo(m);
        m.hide().appendTo("body").submit()
    }
    var k = m.isUserAgent;
    return {
        post: function(b) {
            f(b)
        },
        put: function(b) {
            f(b, {
                _method: "PUT"
            })
        },
        "delete": function(b) {
            f(b, {
                _method: "DELETE"
            })
        }
    }
}(jQuery, Utils, Browser);
window.Button = function(b, l, m, f) {
    function k(f) {
        f = b(f);
        b(f.data("target")).submit()
    }
    return {
        submit: k,
        submitOnce: function(b) {
            m.acquire(b) && k.call(this, b)
        },
        postOnce: function(h) {
            if (m.acquire(h, 2E3)) {
                var d = b(h).data("method") || "post";
                if (f[d]) f[d](h)
            }
        },
        getOnce: function(f) {
            m.acquire(f) && l.visit(b(f).data("url"))
        }
    }
}(jQuery, Turbolinkz, Mutex, Form);
window.Captcha = function(b, l, m, f, k) {
    function h(b) {
        return f.get(b[0]).done(function(f) {
            b.html(f || "").toggle(!!f)
        })
    }
    return {
        reload: function(d) {
            d = b(".captcha-container", d);
            1 === d.length && h(d)
        },
        reloadAction: function(d) {
            var f = b(".captcha-container", d.form);
            f.data("params", k.serialize(b(d)));
            f.is(":visible") && m.vacquire(d) && h(f).always(function() {
                m.release(d)
            })
        },
        onRecaptcha2Load: function() {
            b(".g-recaptcha").each(function() {
                l.grecaptcha.render(this, {
                    size: b(this).data("size"),
                    sitekey: b(this).data("sitekey"),
                    "expired-callback": l.grecaptcha.reset
                })
            })
        },
        toggleUrl: function(d, f) {
            var h = b(".captcha-container", d);
            h.data("url", h.data(f + "-url"))
        }
    }
}(jQuery, window, Mutex, Ajax, Utils);
window.Recaptcha2onLoad = Captcha.onRecaptcha2Load;
window.Checkbox = function(b, l) {
    function m(b, f) {
        return function(d, n) {
            n = b !== l ? b : !(f ? !0 === n : "true" === n);
            return f ? n : n ? "true" : "false"
        }
    }

    function f(f, h) {
        var d = b(f),
            n = d.data("target"),
            n = n ? b("#" + n) : d,
            l = n.next("input");
        n.toggleClass(d.data("class"), h);
        l.is(":checkbox") ? (l.prop("checked", m(h, !0)), d = l.prop("checked")) : (l.val(m(h, !1)), d = "true" === l.val());
        return d
    }
    return {
        toggle: f,
        onToggle: function(k) {
            var h = f(k),
                d = b(k);
            k = d.data("also-on");
            d = d.data("also-off");
            h && k && f(b(k), !0);
            !h && d && f(b(d), !1)
        }
    }
}(jQuery);
window.Discovery = function(b, l, m) {
    function f() {
        var d = b(".feedTabBar a[data-poll-url]:not(.active)").data("poll-url");
        d && b.getJSON(d).done(k)
    }

    function k(d) {
        d ? b(".feedTabBar a[data-poll-url]:not(.active)").addClass("fresh") : (l.clearTimeout(h), (d = m.latest("poller:interval")) && (h = l.setTimeout(f, 3 * d)))
    }
    var h = null;
    m.always(f)
}(jQuery, window, Config);
window.PositionFixedFocus = function(b, l, m, f, k) {
    function h() {
        v && d()
    }

    function d() {
        v = !0;
        u.css("position", "absolute")
    }

    function n() {
        v = !1;
        u.css("position", "");
        l.setTimeout(function() {
            l.scrollTo(m.body.scrollLeft, m.body.scrollTop)
        }, 0)
    }

    function r() {
        u = b("#topMenu");
        f.on(m, "focusin", "input,textarea", d);
        f.on(m, "focusout", "input,textarea", n);
        f.on(m, "custom:resize", h)
    }
    var u = null,
        v = !1;
    k = k.isUserAgent;
    return k("CriOS") || (k("iPad") || k("iPod")) && k("OS 7_") ? (f.on(m, "custom:ready", r), {
        enabled: !0
    }) : {
        enabled: !1
    }
}(jQuery, window, document, Events, Browser);
window.Lightbox = function(b, l, m, f, k, h, d, n, r, u) {
    function v() {
        k.fire(B, "lightbox:close");
        y();
        b(m.body).removeClass("lightbox-open")
    }

    function y() {
        k.off(m, ".lightbox");
        B.remove();
        B = null
    }

    function A() {
        k.on(B, "click", function(b) {
            b.target === this && (v(), b.preventDefault())
        });
        k.on(m, "turbolinks:before-unload.lightbox", v);
        k.on(m, "keyup.lightbox", function(b) {
            27 == b.keyCode && v()
        })
    }

    function z(d) {
        var f = d.klass || "",
            h = d.html; - 1 === f.indexOf("lightbox") && (f = "lightbox " + f);
        !0 !== d.modal && (h += '<a href="#" class="lightbox-close" data-action="PopupClose"></a>');
        B && y();
        B = b('<div class="lightbox-overlay util-vcontainer">  <div class="util-vcenter">    <div class="' + f + '">' + h + "</div>  </div></div");
        !0 !== d.modal && A();
        b(m.body).append(B).addClass("lightbox-open");
        !1 !== d.event && k.fire(B, "lightbox:change")
    }

    function H(d, f) {
        for (var h in d)
            if (d.hasOwnProperty(h)) break;
        d.hasOwnProperty(f) && (h = f);
        var k = '<img class="gallery-image" src="' + d[h] + '" /><nav><a href="#" class="icon-caret-left" data-action="ImagesPrev"></a>' + b.map(d, function(b, d) {
            return '<a href="#"' + (d === h ?
                ' class="active"' : "") + ' style="background-image:url(' + d + ')" data-action="ImagesSelect" data-url="' + b + '"></a>'
        }).join("") + '<a href="#" class="icon-caret-right" data-action="ImagesNext"></a></nav>';
        z({
            html: k,
            event: !1,
            klass: "lightbox-gallery"
        })
    }

    function I(b) {
        switch (typeof b) {
            case "string":
                r.enabled && (b = b.replace('autofocus="autofocus"', ""));
                z({
                    html: b
                });
                break;
            case "object":
                h.message(b.error, b.notice);
            default:
                v()
        }
        d.release(this);
        n.hide()
    }

    function C(d) {
        return function(f) {
            f = b(".lightbox-gallery nav .active")[d]('[data-action="ImagesSelect"]');
            k.fire(f, "click")
        }
    }
    var B = null;
    k.on(m, "custom:ready", function() {
        var d = b("#preloaded-lightbox");
        if (1 === d.length) {
            var f = d.data("options") || {};
            f.html = d.html();
            z(f)
        }
    });
    return {
        popupAction: function(h) {
            if (d.acquire(h)) {
                var k = b(h);
                n.show();
                k.is("form") ? b.ajax(h.action, {
                    data: k.serializeArray(),
                    type: h.method,
                    context: h
                }).done(I) : f[k.data("method") || "get"](h).done(I)
            }
        },
        imageAction: function(f) {
            if (d.acquire(f)) {
                var h = b(f),
                    k = h.data("url"),
                    h = h.find("img").attr("onerror");
                k && z({
                    html: '<img src="' + k + '"' + (h ? ' onerror="' +
                        h + '"' : "") + "/>",
                    event: !1,
                    klass: "lightbox-gallery"
                });
                d.release(f)
            }
        },
        imagesAction: function(f) {
            if (d.acquire(f)) {
                var h = b(f),
                    k = h.data("urls") || h.parent().data("urls"),
                    h = h.data("open-url");
                H(k, h);
                d.release(f)
            }
        },
        selectImageAction: function(d) {
            d = b(d);
            var f = b(".lightbox-gallery nav .active"),
                h = b(".lightbox-gallery img"),
                k = d.data("url"),
                n = f.prop("class");
            h.prop("src", "").prop("src", k);
            f.removeClass(n);
            d.addClass(n)
        },
        prevImageAction: C("prev"),
        nextImageAction: C("next"),
        closeAction: function(d) {
            B && b.contains(B[0],
                d) && v()
        }
    }
}(jQuery, window, document, Ajax, Events, Flash, Mutex, PageLoader, PositionFixedFocus, Utils);
window.FormXHR = function(b, l, m, f, k, h, d, n, r, u) {
    function v(d, f) {
        var h = {};
        b.each(f, function(f, k) {
            var n = k.match(/[a-z_]+_at/),
                n = n ? n[0] : k;
            (k = d[k]) && (h[n] = (h[n] || b()).add(k))
        });

        b.each(h, function(b, d) {

            var f = y(d);
            //console.log(f);
            f.addClass("invalid-input");
            m.off(d, ".formxhr");
            m.on(d, "focus.formxhr blur.formxhr change.formxhr", function() {
                f.removeClass("invalid-input");
                m.off(d, ".formxhr")
            })
        })
    }

    function y(b) {
        return b.is("select,.checkbox") ? b : b.parent()
    }

    function A(f) {
        d.error(f.error);
        f.fields && v(this, f.fields);
        b(this.authenticity_token).val(n.getCsrfToken());
        r.reload(this);
        h.hide();
        k.release(this)
    }

    function z(b) {
        b ? b.error ? A.call(this, b) : b.url ? f.visit(b.url) : (h.hide(), k.release(this), u.closeAction(this), b.notice && d.notice(b.notice)) : A.call(this, {
            error: "No data received"
        })
    }
    return {
        submit: function(d) {
            k.acquire(d) && (h.show(), b.json(d.action, {
                data: b(d).serializeArray(),
                type: d.method,
                context: d
            }, z))
        }
    }
}(jQuery, document, Events, Turbolinkz, Mutex, PageLoader, Flash, Utils, Captcha, Lightbox);
window.GoogleAnalytics = function(b, l, m, f) {
    function k() {
        h({
            event: "pageview-ajax"
        })
    }

    function h(h) {
        !d && f.latest("gtm") && (l.dataLayer = l.dataLayer || [], l.dataLayer.push(b.extend({
            "page.category": f.cached("page:category"),
            "page.type": f.cached("page:type"),
            "user.id": f.latest("page:user_id")
        }, h)))
    }
    var d = !0;
    f.once(function() {
        if (f.latest("gtm")) {
            h();
            d = !1;
            l.dataLayer = l.dataLayer || [];
            l.dataLayer.push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js"
            });
            var b = m.getElementsByTagName("script")[0],
                r = m.createElement("script");
            r.async = !0;
            r.src = "//www.googletagmanager.com/gtm.js?id=GTM-W5DVX4";
            b.parentNode.insertBefore(r, b);
            f.ajax(k)
        }
    });
    return {
        push: h
    }
}(jQuery, window, document, Config);
window.GTM = function(b, l, m, f) {
    function k(b, d, f) {
        $.each($.trim(d).split(/\s+/), function() {
            b[this] = f
        })
    }

    function h(b) {
        var d = $(this),
            f = d.data("gtm"),
            h = $.isPlainObject(f);
        b = h ? f.name : f;
        d = [d, b].concat(h ? f.meta : []);
        (n[b] || r).apply(u, d)
    }
    var d = {},
        n = {},
        r = function(b, d) {
            this.push({
                event: d
            })
        },
        u = {
            push: function(b) {
                f && f.push(b)
            },
            opts: {}
        };
    m.always(function() {
        u.opts = {
            pageCategory: m.cached("page:category")
        }
    });
    $(l).on("submit", "form[data-gtm]", h).on("click", "a[data-gtm]", h);
    return {
        routine: function(b, f) {
            k(d, b, f)
        },
        element: function(b,
            d) {
            k(n, b, d)
        },
        exec: function() {
            var b = $.makeArray(arguments);
            d[b[0]].apply(u, b)
        }
    }
}(jQuery, document, Config, window.GoogleAnalytics);
window.HoverToActive = function(b, l, m, f) {
    function k() {
        for (var b = 0; b < l.styleSheets.length; b++) {
            var d = l.styleSheets[b];
            if (d.cssRules)
                for (var f = 0; f < d.cssRules.length; f++) {
                    var k = d.cssRules[f];
                    k.selectorText && (k.selectorText = k.selectorText.replace(":hover", ":active"))
                }
        }
    }
    b = f.isUserAgent;
    f = f.notUserAgent;
    if ((b("iPhone") || b("iPad") || b("iPod")) && f("CriOS")) m.on(l, "ready", k)
}(jQuery, document, Events, Browser);
window.LoginCheck = function(b, l, m, f, k) {
    function h(d, f, h) {
        d = b(d).parent();
        null !== f && d.toggleClass("invalid-input", f);
        null !== h && d.toggleClass("valid-input", h)
    }

    function d(d) {
        return function(k) {
            if (d) {
                var m = k ? k.error : !1;
                h(this, !!m, !m);
                f.message(m, null)
            }
            k = k ? k.suggestions : [];
            b(this).data("suggestions", k).parent().toggleClass("has-suggestions", 0 < k.length);
            n = null
        }
    }
    var n = null;
    return {
        suggestInit: function() {
            b("#user_email,#user_name").each(function() {
                if (this.value) return m.fire(this, "input"), !1
            })
        },
        suggestAction: function(d) {
            var f =
                b("#user_name"),
                h = b("#user_email");
            d = b("#user_login");
            f = b.extend(k.serialize(f), k.serialize(h));
            d.data("params", f);
            m.fire(d, "input")
        },
        checkAction: function(b) {
            n && n.abort();
            var f = k.isPresent(b.value);
            f || h(b, null, !1);
            n = l.post(b).done(d(f))
        },
        resetAction: function(d) {
            d = b(d).prev("input");
            var f = d.val(),
                h = d.data("suggestions") || [],
                f = h.indexOf(f) + 1;
            if (h = h[f] || h[0]) d.val(h), m.fire(d, "input")
        }
    }
}(jQuery, Ajax, Events, Flash, Utils);
window.ScrollViewMore = function(b, l, m, f, k) {
    function h(d) {
        return b(d).parents("#MassAskSearch,.lightbox").filter(function() {
            return "visible" !== b(this).css("overflowY")
        }).add(m).last()
    }
    var d = k.debounce(function(d) {
        var h = b(".viewMore", d.target);
        if (1 !== h.length) f.off(d.target, "scroll.viewMore");
        else {
            var k = b(d.target === m ? l : d.target);
            d = k.height();
            k = k.scrollTop() + d;
            d *= .65;
            h.position().top - k < d && h.click()
        }
    }, 100);
    f.on(m, "custom:ready custom:resize lightbox:change pager:change", function(k) {
        b(".viewMore", k.target).each(function() {
            f.refire(h(this),
                "scroll.viewMore", d)
        })
    });
    return {
        selector: ".viewMore"
    }
}(jQuery, window, document, Events, Utils);
window.Pager = function(b, l, m, f) {
    function k(h) {
        h || (h = b(".item-pager").first());
        return h.find(".item").length || h.find(f.selector).length ? !1 : !0
    }
    m.on(l, "custom:ready pager:change", function(f) {
        f = f.target === l ? b(".item-pager").first() : b(f.target);
        var d;
        d = f.siblings(".emptyViewContent,.emptyResults");
        d = d.length ? d : f.parent().siblings(".emptyViewContent,.emptyResults");
        d.length && d.toggle(k(f))
    });
    return {
        pagerSelector: ".item-pager",
        isEmpty: k,
        $prependWithItems: function(f, d) {
            var k = b(f),
                l = b(d).prependTo(k);
            m.fire(k,
                "pager:change");
            return l
        },
        $replaceWithItems: function(f, d) {
            var k = b(d).replaceAll(f),
                l = k.closest(".item-pager"),
                k = k.find(".item").length;
            m.fire(l, "pager:change");
            return k
        },
        $removeClosestItem: function(f) {
            f = b(f).closest(".item");
            var d = f.closest(".item-pager");
            f.remove();
            m.fire(d, "pager:change")
        },
        $substituteItems: function(f, d) {
            var k = b(f).html(d),
                k = k.is(".item-pager") ? k : k.find(".item-pager");
            m.fire(k, "pager:change")
        }
    }
}(jQuery, document, Events, ScrollViewMore);
window.MassAsk = function(b, l, m, f, k, h, d, n, r) {
    function u(b) {
        var d;
        b = b.data("logins");
        var f = 0;
        for (d in b) b.hasOwnProperty(d) && f++;
        return f
    }

    function v(b, f, h) {
        f = b.find("#MassAskSearch").data(f);
        d.error(f);
        h && b.find(".selectFriendsCounter").addClass("error")
    }

    function y(b, d) {
        b.toggleClass("listItemCheckbox-checked", d);
        b.find(".listItemCheckbox").toggleClass("listItemCheckbox-checked", d)
    }

    function A(b, d, f) {
        b = b.find('#MassAskSearch a[data-login="' + d + '"]');
        b.length && y(b, f)
    }

    function z(b, d) {
        var f = b.data("logins") || {},
            f = d(f);
        b.data("logins", f);
        var f = u(b),
            k = h.latest("mass_ask_limit");
        b.find(".selectFriendsCounter").removeClass("error").text(f + "/" + k)
    }

    function H(d) {
        var f = d.data("logins") || {};
        b.each(f, function(b) {
            A(d, b, !0)
        })
    }

    function I(d) {
        z(d, function(f) {
            b.each(f, function(b, h) {
                if (h) return !0;
                A(d, b, !1);
                delete f[b]
            });
            return f
        })
    }

    function C(b) {
        var d = b[0].elements["question[anonymous]"] ? b[0].elements["question[anonymous]"][1] : null;
        d && d.checked ? (I(b), b.find('a[data-allow-anonymous-questions="false"]').addClass("item-disabled")) :
            b.find(".item-disabled").removeClass("item-disabled")
    }

    function B(d) {
        b(d[0].elements["question[logins][]"]).remove();
        b.each(d.data("logins") || {}, function(f) {
            b("<input/>", {
                type: "hidden",
                name: "question[logins][]",
                value: f
            }).appendTo(d)
        })
    }

    function J(d) {
        d = b(d.target).closest("form");
        H(d);
        C(d)
    }
    m.on(l, "custom:ready lightbox:change", function(d) {
        d = b("#MassAskSearch " + n.pagerSelector);
        m.refire(d, "pager:change", J)
    });
    return {
        onSearch: function(d) {
            f.acquire(d) && k.get(d).done(function(h) {
                var k = b(d.form).find(n.pagerSelector);
                n.$substituteItems(k, h || null);
                f.release(d)
            })
        },
        onToggleAnonymous: function(d) {
            d = b(d).closest("form");
            C(d)
        },
        onToggleUser: function(d) {
            d = b(d);
            var f = d.closest("form"),
                k = !d.hasClass("listItemCheckbox-checked"),
                n = d.data("login"),
                m = d.data("allow-anonymous-questions");
            d.hasClass("item-disabled") ? v(f, "disabled-item-error") : k && u(f) === h.latest("mass_ask_limit") ? v(f, "max-users-error", !0) : (z(f, function(b) {
                k ? b[n] = m : delete b[n];
                return b
            }), y(d, k))
        },
        onSubmit: function(d) {
            var f = b(d),
                h = u(f);
            0 === h ? v(f, "min-users-error", !0) : (B(f), r.toggleUrl(f, 1 === h ? "single" : "mass"), FormXHR.submit(d))
        },
        loginCount: u
    }
}(jQuery, document, Events, Mutex, AjaxUI, Config, Flash, Pager, Captcha);
window.Media = function(b, l, m, f) {
    function k(b, d, f, k) {
        var n = b.find(".visualItemPlayIcon, .visualItemWatermarkIcon-youTube"),
            l = d.data("src"),
            r = d.attr("src"),
            u = "IMG" === d.prop("tagName");
        n.toggle(f).addClass("loader");
        m.off(d, "load.media");
        m.on(d, "load.media", function() {
            n.toggle(!f).removeClass("loader");
            u && b.find(".visualItemWatermarkIcon-animatedGif").toggle(f)
        });
        d.data("src", r).attr("src", l);
        b.toggleClass("playing", f);
        k || b.toggleClass("stopped", !f);
        h()
    }

    function h() {
        r || (m.on(l, "turbolinks:before-unload",
            function(d) {
                d = b(".playing", d.originalEvent.data);
                m.fire(d, "click")
            }), r = !0)
    }

    function d(d) {
        return function() {
            var f = b(this),
                h = f.hasClass("playing"),
                n = f.hasClass("stopped"),
                m = this.getBoundingClientRect();
            (0 < m.bottom && m.top < d ? h || n : !h) || (n = f.find("img"), k(f, n, !h, !0))
        }
    }

    function n() {
        b(".side-column").is(":visible") ? m.refire(l, "scroll.gif", u) : m.off(l, "scroll.gif")
    }
    var r = !1,
        u = Utils.debounce(function() {
            var f = b(window).height();
            b('a[data-action="GifToggle"]').each(d(f))
        }, 100);
    f.once(function() {
        m.on(l, "custom:ready custom:resize",
            n)
    });
    return {
        gifToggleAction: function(d) {
            d = b(d);
            var f = d.find("img"),
                h = d.hasClass("playing");
            k(d, f, !h)
        },
        iframeToggleAction: function(d) {
            d = b(d);
            var f = d.find("img"),
                h = d.find("iframe"),
                n = d.hasClass("playing");
            if (!n) {
                var m = "uniq" + Math.random();
                h.remove().attr("name", m).appendTo(d)
            }
            k(d, h, !n);
            f.toggle(n);
            h.toggle(!n)
        }
    }
}(jQuery, document, Events, Config);
window.Notifications = function(b, l, m, f, k, h, d, n) {
    function r() {
        l.clearTimeout(A);
        A = l.setTimeout(u, d.latest("poller:interval"))
    }

    function u() {
        var d = b(".notificationCounter").data("poll-url");
        d && b.getJSON(d).done(v)
    }

    function v(d) {
        b(".notificationCounter").text(d).toggle(!!d);
        r()
    }

    function y(d) {
        if (!d.target.href) {
            var f = b(this);
            d = f.data("action");
            f = f.data("url");
            "PopupOpen" === d ? Lightbox.popupAction(this) : f && h.visit(f)
        }
    }
    var A = null,
        z = 0;
    d.always(r);
    d.once(function() {
        f.on(m, "visibilitychange", function() {
            "hidden" ==
            m.visibilityState && (l.clearTimeout(A), z = b.now());
            if ("visible" == m.visibilityState) {
                var f = d.latest("poller:interval");
                b.now() - z > f && (f = 0);
                A = l.setTimeout(u, f)
            }
        })
    });
    return {
        initClickActions: function() {
            f.on(m, "click.notifications", ".streamItem-notification", y);
            f.on(m, "turbolinks:before-unload", function() {
                f.off(m, ".notifications")
            })
        },
        deleteAction: function(b) {
            k._delete(b);
            n.$removeClosestItem(b)
        }
    }
}(jQuery, window, document, Events, Ajax, Turbolinkz, Config, Pager);
window.OnlineStatus = function(b, l, m) {
    function f(b, d) {
        m.acquire(b) && l[d ? "post" : "_delete"](b).done(k(d))
    }

    function k(f) {
        return function() {
            var d = b(this).parent().prev(),
                k = d.data("class");
            if (d.hasClass(k) !== f) {
                var l = d.text(),
                    u = d.data("text");
                d.data("text", l).text(u);
                d.toggleClass(k)
            }
            m.release(this)
        }
    }
    return {
        showAction: function(b) {
            f(b, !0)
        },
        hideAction: function(b) {
            f(b, !1)
        }
    }
}(jQuery, Ajax, Mutex);
window.Performance = function(b, l, m) {
    function f() {
        var f = b(m.body),
            h = f.data("js-perf-url");
        if (h) {
            var d;
            d = (d = l.performance && l.performance.timing) ? {
                dns: d.domainLookupEnd - d.domainLookupStart,
                tcp: d.connectEnd - d.connectStart,
                tfb: d.responseStart - d.navigationStart,
                req: d.responseEnd - d.requestStart,
                dom: d.domComplete - d.domLoading,
                all: d.loadEventEnd - d.navigationStart
            } : !1;
            d && (d.pid = f.data("id"), b.get(h, d))
        }
    }
    b(l).on("load", function() {
        l.setTimeout(f, 0)
    })
}(jQuery, window, document);
window.PhotoAnswer = function(b, l, m) {
    function f(d, f, h, k) {
        d = b(d);
        var m = d.find(".icon-close"),
            l = !!k;
        b("#answerType").val(f);
        b("#photoUrl").val(h);
        d.bg(k).toggleClass("loaded", l);
        m.toggle(l)
    }

    function k(d) {
        var h = b(this).prev(".upload-file").data("rid");
        f(this, "photo", h, d.thumbUrl)
    }

    function h() {
        f(this, "", "", "")
    }

    function d() {
        b(this).toggleClass("loader", !1);
        l.release(this)
    }
    return {
        uploadAction: function(f) {
            var r;
            l.acquire(f) ? (b(f).toggleClass("loader", !0), r = !0) : r = !1;
            r && m.post(f).done(k).fail(h).always(d)
        },
        removeAction: function(b) {
            h.call(b.parentNode)
        }
    }
}(jQuery, Mutex, Uploads);
window.Photopoll = function(b, l, m) {
    function f(d, f, h) {
        d = b(d);
        var k = d.prevAll("input[type=hidden]:first"),
            m = !!h;
        k.val(f);
        d.bg(h).toggleClass("loaded", m)
    }

    function k(b) {
        f(this, b.sequence_id, b.thumbBigUrl)
    }

    function h() {
        f(this, "", "")
    }

    function d() {
        b(this).toggleClass("loader", !1);
        l.release(this)
    }
    return {
        uploadAction: function(f) {
            var r;
            l.acquire(f) ? (b(f).toggleClass("loader", !0), r = !0) : r = !1;
            r && m.post(f).done(k).fail(h).always(d)
        }
    }
}(jQuery, Mutex, Uploads);
window.ProfileTabCounters = function(b, l, m) {
    var f = !1,
        k = {
            answers: ".profileTabAnswerCount",
            likes: ".profileTabLikeCount"
        };
    return {
        update: function(h) {
            f && b.each(h, function(d, f) {
                b.isFunction(f) && (f = f());
                b(k[d]).text(function(b, d) {
                    return parseInt(d) + parseInt(f)
                })
            })
        },
        enable: function() {
            f = !0;
            m.on(l, "turbolinks:before-unload", function() {
                f = !1
            })
        }
    }
}(jQuery, document, Events);
window.Poller = function(b, l, m, f, k, h) {
    function d() {
        l.clearTimeout(v);
        v = l.setTimeout(n, f.latest("poller:interval"))
    }

    function n() {
        var d = b("#newItemsReady").data("poll-url");
        d && b.get(d, {
            counter: A
        }).done(r)
    }

    function r(b) {
        b && (A += k.$replaceWithItems("#newItemsReady", b));
        A < f.latest("poller:cache_limit") && d()
    }

    function u() {
        var d = 0;
        b(".item-poller-chunk .likeButton .counter").each(function() {
            d += parseInt(b(this).text())
        });
        return d
    }
    var v = null,
        y = 0,
        A = 0;
    f.always(d);
    f.once(function() {
        Events.on(m, "visibilitychange",
            function() {
                "hidden" == m.visibilityState && (l.clearTimeout(v), y = b.now());
                if ("visible" == m.visibilityState) {
                    var d = f.latest("poller:interval");
                    b.now() - y > d && (d = 0);
                    v = l.setTimeout(n, d)
                }
            })
    });
    return {
        clickAction: function() {
            var f = b(".item-poller-chunk").children();
            d();
            b("#newItemsReady").hide();
            h.update({
                answers: A,
                likes: u
            });
            k.$prependWithItems(k.pagerSelector, f);
            f.addClass("highlight");
            A = 0
        }
    }
}(jQuery, window, document, Config, Pager, ProfileTabCounters);
window.PopupCallback = function(b, l) {
    function m(f, k) {
        var h = b(f),
            d = h.get(0);
        h.data("connected", k);
        l.toggle(d, k)
    }
    return {
        permit: {
            facebook: function(b) {
                m("#facebook_switch", b)
            },
            twitter: function(b) {
                m("#twitter_switch", b)
            },
            vkontakte: function(b) {
                m("#vkontakte_switch", b)
            }
        }
    }
}(jQuery, Checkbox);
window.Pymk = function(b, l, m, f) {
    function k(f, d) {
        if (m.acquire(f)) {
            var k = b(f).closest(".streamItem-pymk");
            k.addClass("loader");
            l[d](f).done(function(b) {
                k.replaceWith(b)
            })
        }
    }
    return {
        closeAction: function(h) {
            b(h).closest(".streamItem-pymk").remove();
            f.setCookie("skip_pymk", "1", null, "/")
        },
        acceptAction: function(b) {
            k(b, "post")
        },
        declineAction: function(b) {
            k(b, "_delete")
        }
    }
}(jQuery, Ajax, Mutex, Utils);
window.Pyml = function(b, l, m, f) {
    function k(d, f) {
        var k = b(d).siblings(".pyml-items"),
            m = k[0],
            m = k.bidiScrollLeft() + f * m.clientWidth * .9;
        k.animateBidiScrollLeft(m, 100, h)
    }

    function h() {
        min = 3;
        max = this.scrollWidth - this.clientWidth - 3;
        $items = b(this);
        newLeft = $items.bidiScrollLeft();
        $items.siblings(".icon-caret-left").toggle(newLeft > min);
        $items.siblings(".icon-caret-right").toggle(newLeft < max)
    }

    function d() {
        var d = b(".pyml-items");
        d.length && (m.on(d, "scroll", h), m.fire(d, "scroll"))
    }
    return {
        init: d,
        prevAction: function(b) {
            k(b, -1)
        },
        nextAction: function(b) {
            k(b, 1)
        },
        declineAction: function(d) {
            if (f.acquire(d)) {
                var h = b(d).closest(".pyml-user"),
                    k = h.closest(".pyml-items");
                h.remove();
                m.fire(k, "scroll");
                l._delete(d)
            }
        },
        hashtagAction: function(h) {
            if (f.acquire(h)) {
                var k = b(h).closest(".streamItem-pyml");
                k.addClass("loader");
                l.post(h).done(function(b) {
                    k.replaceWith(b);
                    d()
                })
            }
        }
    }
}(jQuery, Ajax, Events, Mutex);
window.Quantcast = function(b, l, m, f) {
    function k() {
        l._qevents.push(h({
            event: "click"
        }))
    }

    function h(d) {
        return b.extend({
            qacct: "p-r1DAFnUnQgqGA",
            uid: f.latest("page:user_id")
        }, d)
    }
    f.once(function() {
        l.qcdata = {};
        l._qevents = l._qevents || [];
        var b = m.createElement("script");
        b.src = ("https:" == m.location.protocol ? "https://secure" : "http://pixel") + ".quantserve.com/aquant.js?a=p-r1DAFnUnQgqGA";
        b.async = !0;
        b.type = "text/javascript";
        m.getElementsByTagName("head")[0].appendChild(b);
        l.qcdata = h();
        f.ajax(k)
    })
}(jQuery, window, document, Config);
window.Questions = function(b, l, m, f, k, h, d) {
    function n(d) {
        var f = b("#question-count");
        if (f.length) return d = parseInt(f.text()) + d, f.text(d).toggle(0 < d), d
    }

    function r(d) {
        d = k.$prependWithItems(k.pagerSelector, d);
        n(1);
        b("#questions-delete").toggle(!0);
        d.addClass("highlight");
        f.release(this)
    }

    function u(f) {
        f = b(f).closest("form");
        f = b.trim(f.find("[name*=question_text]").val());
        d.setCookie("question", f, f.length ? 6E5 : -1)
    }
    return {
        randomAction: function(b) {
            f.acquire(b) && l.post(b).done(r)
        },
        deleteAction: function(d) {
            l._delete(d);
            k.$removeClosestItem(d);
            d = n(-1);
            0 === d && b("#questions-delete").toggle(!1);
            1 === d && k.isEmpty() && b("#questions-delete").toggle(!1)
        },
        deleteAllAction: function(d) {
            if (f.acquire(d)) {
                var k = b(d).data("confirm");
                window.confirm(k) && (PageLoader.show(), l._delete(d).fail(PageLoader.hide).done(h.reload));
                f.release(d)
            }
        },
        saveAction: u,
        saveAndPopupAction: function(b) {
            u(b);
            m.popupAction(b)
        }
    }
}(jQuery, Ajax, Lightbox, Mutex, Pager, Turbolinkz, Utils);
window.Shoutout = function(b, l, m, f, k) {
    function h() {
        l.clearTimeout(u);
        var b = m.latest("poller:interval");
        b && (u = l.setTimeout(n, b))
    }

    function d() {
        var d = m.latest("poller:interval");
        b.now() - v > d && (d = 0);
        u = l.setTimeout(n, d)
    }

    function n() {
        var d = b("a.shoutout-poller[data-poll-url]:visible").data("poll-url");
        d && b.getJSON(d).done(r)
    }

    function r(d) {
        d.time_left ? (b("a.shoutout-poller[data-poll-url]:visible").data("url", b("a.shoutout-poller[data-poll-url]:visible").data("disabled-url")).addClass("off").find("span").html(d.time_left),
            b("nav.content-menu.open a.shoutout-link[data-poll-url]").data({
                action: "PopupOpen",
                url: b("nav.content-menu.open a.shoutout-link[data-poll-url]").data("disabled-url")
            }), h()) : (b("a.shoutout-poller[data-poll-url]:visible").data("url", b("a.shoutout-poller[data-poll-url]:visible").data("enabled-url")).removeClass("off"), b("nav.content-menu.open a.shoutout-link[data-poll-url]").removeData("action url").removeAttr("data-action data-url"))
    }
    var u = null,
        v = 0;
    m.always(h);
    m.always(function() {
        k.on(b(".content-menu"),
            "open",
            function() {
                b(this).find(".shoutout-link").addClass("shoutout-poller");
                d()
            });
        k.on(b(".content-menu"), "close", function() {
            b(this).find(".shoutout-link").removeClass("shoutout-poller")
        })
    });
    m.once(function() {
        k.on(f, "visibilitychange", function() {
            "hidden" == f.visibilityState && (l.clearTimeout(u), v = b.now());
            "visible" == f.visibilityState && d()
        })
    })
}(jQuery, window, Config, document, Events);
(function(b, l, m, f) {
    function k() {
        var f = b(l).scrollTop() + v,
            h = b(l).height() - v,
            k = r.height() < n.height(),
            m = y + v;
        u.each(function() {
            var l = b(this),
                n = y + l.height(),
                r = l.data("$anchor"),
                u = d.position().top,
                v = r.position().top,
                r = r.height(),
                n = k && n < h && (0 < r ? v + r : u) < f;
            l.toggleClass("sticky-div", n).css({
                top: n ? m : 0
            })
        })
    }

    function h() {
        var d = b(this),
            f = d.data("stick-to");
        d.data({
            $anchor: b(f)
        }).css({
            width: d.width()
        })
    }
    var d, n, r, u, v, y;
    f.on(m, "custom:ready", function() {
        d = b(".main-content").presence();
        n = b(".main-column").presence();
        r = b(".side-column").presence();
        u = b("[data-stick-to]:visible").each(h).presence();
        v = b("#topMenu").height() || 0;
        y = d && parseInt(d.css("padding-top")) || 0
    });
    f.on(l, "resize scroll", function() {
        d && n && u && k()
    })
})(jQuery, window, document, Events);
window.Tagcomplete = function(b, l, m) {
    function f(d) {
        return function(f) {
            var h = f[0];
            f = f[1];
            return b('<div class="item"> <span class="count"></span> <div class="tag"></div></div>').data("tag", h).find(".tag").append([b("<mark/>").text(h.substring(0, d)), h.substring(d)]).end().find(".count").text(f).toggle(0 < f).end()
        }
    }

    function k(d, h, k) {
        h = b.map(h, f(k));
        k = d.data("$list");
        k || (k = b('<div class="tagcomplete"></div>'), m.on(k, "mousedown", ".item", n), m.on(k, "click", ".item", r(d)), d.data("$list", k).after(k));
        d = k;
        h[0].addClass("active");
        d.empty().append(h).show();
        return d
    }

    function h(b) {
        if (b = b.data("$list")) A && (A.abort(), A = null), b.hide()
    }

    function d(d, f) {
        f = f || d.attr("placeholder") || "";
        var h = d.data("$sizer");
        h || (h = b('<div style="position:absolute;visibility:hidden"/>'), d.data("$sizer", h).before(h));
        h = h.text(f).width();
        d.width(h + 30)
    }

    function n(b) {
        b.preventDefault()
    }

    function r(d) {
        return function() {
            var f = b(this).data("tag");
            h(d);
            d.val(f + " ");
            m.fire(d, "input")
        }
    }

    function u(d) {
        var f = b(this),
            k = f.data("$list"),
            l = d.keyCode;
        if (k && k.is(":visible")) switch (l) {
            case 13:
                m.fire(k.find(".active"),
                    "click");
                break;
            case 27:
                h(f);
                break;
            case 9:
                d.shiftKey && (l = 38);
            case 38:
            case 40:
                f = 38 === l;
                l = k.find(".active").removeClass("active")[f ? "prev" : "next"]();
                l.length || (l = k.find(".item" + (f ? ":last" : ":first")));
                l.addClass("active");
                break;
            default:
                return
        } else switch (l) {
            case 13:
                if (k = f.val(), /\S/.test(k)) {
                    f.val(k + " ");
                    m.fire(f, "input");
                    break
                }
            default:
                return
        }
        d.preventDefault()
    }

    function v() {
        A && (A.abort(), A = null);
        var f = b(this),
            l = f.val(),
            m = /^#?\s*$/.test(l),
            n = / $/.test(l);
        d(f, l);
        m || n ? h(f) : (l = l.replace(/^#?\s*/, ""), m = [
            [l,
                0
            ]
        ], n = k(f, m, l.length), z(f, l, n, m))
    }

    function y() {
        var d = b(this);
        h(d)
    }
    var A, z = Utils.debounce(function(d, f, h, l) {
        var m = d.data("tagcomplete"),
            n = {
                hashtag: f
            };
        h.addClass("loader");
        A = b.getJSON(m, n, function(b) {
            h.removeClass("loader");
            b && b[0] && b[0][0] && (l = l[0][0] === b[0][0] ? b : l.concat(b), k(d, l, f.length))
        })
    }, 100);
    m.on(l, "custom:ready lightbox:change", function(f) {
        f = b("input[data-tagcomplete]", f.target);
        f.length && (d(f), m.off(f, ".tagcomplete"), m.on(f, "keydown.tagcomplete", u), m.on(f, "input.tagcomplete", v), m.on(f, "blur.tagcomplete",
            y))
    })
}(jQuery, document, Events);
(function(b, l, m, f) {
    function k() {
        var h = b(this),
            d = h.closest("form").find(h.data("counter")),
            k = h.data("limit");
        d.toggle(500 > k).text(k);
        f.on(h, "input paste", function() {
            var b = h.val(),
                f = k - m.countSymbols(b);
            0 > f && (h.val(m.limitSymbols(b, k)), f = 0);
            d.toggle(500 > f).text(f)
        });
        f.fire(h, "input")
    }
    f.on(l, "custom:ready lightbox:change", function(f) {
        b("textarea[data-counter][data-limit]", f.target).each(k)
    })
})(jQuery, document, Utils, Events);
window.Viewport = function(b, l, m, f, k) {
    var h = b(l).width();
    f.on(l, "resize", k.debounce(function() {
        var d = b(l).width();
        d != h && f.fire(m, "custom:resize");
        h = d
    }, 100));
    return {}
}(jQuery, window, document, Events, Utils);
Actions("AppStoreBannerHide", function(b, l) {
    return function(m) {
        m = $(m);
        l.setCookie("promo", "off", 1E3 * m.data("ttl"), "/");
        m.parent().hide();
        $(b.body).removeClass("appPromoBody")
    }
}(document, Utils));
Actions("CaptchaReload", Captcha.reloadAction);
Actions("FormXHRSubmit", FormXHR.submit);
Actions("ButtonSubmit", Button.submit);
Actions("ButtonSubmitOnce", Button.submitOnce);
Actions("ButtonPostOnce", Button.postOnce);
Actions("ButtonGetOnce", Button.getOnce);
Actions("CheckboxToggle", Checkbox.onToggle);
Actions("FlashHide", Flash.hideAction);
Actions("BlockToggle", function(b) {
    return function(l) {
        l = b(l);
        var m = l.data("target"),
            f = l.data("class");
        f && l.toggleClass(f);
        b(m).stop(!1, !1).slideToggle(100)
    }
}(jQuery));
Actions("MenuToggle", function(b) {
    return function(l) {
        l = b(l);
        var m = l.data("target"),
            m = b(m),
            f = null;
        l.toggleClass("active").siblings(".icon-menu-item").removeClass("active");
        m.stop(!1, !1).slideToggle(100).toggleClass("open").siblings("nav").slideUp(100).removeClass("open");
        f = m.hasClass("open") ? "open" : "close";
        Events.fire(m, f)
    }
}(jQuery));
Actions("UserSearch", function(b, l, m) {
    function f(b) {
        var f = $(this.form).find(m.pagerSelector);
        m.$substituteItems(f, b);
        l.release(this)
    }
    return function(k) {
        l.acquire(k) && b.get(k).done(f)
    }
}(AjaxUI, Mutex, Pager));
Actions("ItemDelete", function(b, l, m, f, k) {
    function h(b) {
        var h = {
            answers: -1
        };
        b = $(b).closest(".streamItem").find(".likeButton .counter,.voteCount").text();
        if (b = parseInt(b)) h.likes = -b;
        f.update(h)
    }
    return function(d) {
        var f = $(d).data("confirm");
        if (!f || b.confirm(f)) {
            h(d);
            var r = $(d).data("after-url"),
                f = l._delete(d);
            r && f.done(function() {
                k.visit(r)
            });
            m.$removeClosestItem(d)
        }
    }
}(window, Ajax, Pager, ProfileTabCounters, Turbolinkz));
Actions("DiscardBanner", function(b, l, m) {
    return function(f) {
        m.acquire(f) && (l.put(f), b(f).parent().remove())
    }
}(jQuery, Ajax, Mutex));
Actions("FavoriteToggle", function(b, l, m) {
    return function(f) {
        if (l.acquire(f)) {
            var k = $(f),
                h = k.data("url"),
                d = k.data("toggle-url"),
                n = k.data("error-message"),
                r = k.data("class");
            k.toggleClass(r);
            b.post(f).done(function() {
                k.data("url", d).data("toggle-url", h);
                l.release(f)
            }).fail(function() {
                k.toggleClass(r);
                m.error(n);
                l.release(f)
            })
        }
    }
}(Ajax, Mutex, Flash));
Actions("FeedToggle", function(b, l, m) {
    return function(f) {
        b.acquire(f);
        m.setCookie("skip_likes", "1", f.checked ? 31536E6 : -1, "/");
        l.reload()
    }
}(Mutex, Turbolinkz, Utils), {
    preventDefault: !1
});
Actions("FollowToggle", function(b, l) {
    function m(b) {
        var k = $(this),
            h = k.data("class"),
            d = 0 < b.url.indexOf("/follow");
        h ? k.data("url", b.url).text(b.text).toggleClass(h, d) : k.remove();
        l.release(this)
    }
    return function(f) {
        l.acquire(f) && b.post(f).done(m)
    }
}(Ajax, Mutex));
Actions("SubmitWithTimezone", function(b, l) {
    function m() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        } catch (b) {}
    }
    return function(f) {
        b(f).find("[name*=gmt_offset]").val(-(new Date).getTimezoneOffset());
        b(f).find("[name*=tz_id]").val(m());
        l.submit(f)
    }
}(jQuery, FormXHR));
Actions("ServicePermit", function(b, l, m) {
    return function(f) {
        b(f).data("connected") ? m.toggle(f) : l.post(f)
    }
}(jQuery, Form, Checkbox));
Actions("HashtagDelete", function(b, l, m) {
    return function(f) {
        var k = b(f),
            h = k.siblings("input:first");
        m.fire(h, "focus");
        k.data("url") ? (k.addClass("loader"), l._delete(f, {
            data: {
                hashtag: k.text()
            }
        }).done(function() {
            k.remove()
        })) : (k.remove(), m.fire(h, "input"))
    }
}(jQuery, Ajax, Events));
Actions("HashtagCreate", function(b, l) {
    var m = /#?(\S+) /g;
    return function(f) {
        var k = b(f),
            h = k.data("url"),
            d = k.val(),
            n;
        n = d.replace(m, function(d, m) {
            var n = b('<a href="" data-action="HashtagDelete" data-url=""></a>').text(m).data("url", h).insertBefore(k).before(" ").after(" ");
            h && (n.addClass("loader"), Ajax.post(f, {
                data: {
                    hashtag: m
                }
            }).done(function(b) {
                n.removeClass("loader");
                b && b.error && (n.remove(), l.error(b.error))
            }));
            return ""
        });
        d !== n && (k.val(n), Events.fire(k, "input"));
        if (!h) {
            var d = k.siblings("input[type=hidden]"),
                r = k.siblings("a");
            n = d.val();
            r = r.map(function() {
                return b(this).text()
            }).get().join(",");
            n !== r && (d.val(r), Events.fire(d, "input"))
        }
    }
}(jQuery, Flash));
Actions("InboxToggle", function(b, l, m) {
    return function(f) {
        b.acquire(f);
        m.setCookie("skip_shoutouts", "1", f.checked ? 31536E6 : -1, "/");
        l.reload()
    }
}(Mutex, Turbolinkz, Utils), {
    preventDefault: !1
});
Actions("PopupOpen", Lightbox.popupAction);
Actions("PopupClose", Lightbox.closeAction);
Actions("ImageOpen", Lightbox.imageAction);
Actions("ImagesOpen", Lightbox.imagesAction);
Actions("ImagesSelect", Lightbox.selectImageAction);
Actions("ImagesPrev", Lightbox.prevImageAction);
Actions("ImagesNext", Lightbox.nextImageAction);
Actions("GifToggle", Media.gifToggleAction);
Actions("IframeToggle", Media.iframeToggleAction);
Actions("ItemsMore", function(b, l, m) {
    function f(b, f, d) {
        m.$replaceWithItems(this, b)
    }
    return function(k) {
        b.acquire(k) && Ajax.get(k).done(f)
    }
}(Mutex, AjaxUI, Pager));
Actions("ItemsPoll", Poller.clickAction);
Actions("NotificationDelete", Notifications.deleteAction);
Actions("OnlineStatusShow", OnlineStatus.showAction);
Actions("OnlineStatusHide", OnlineStatus.hideAction);
Actions("PhotopollVote", function(b, l, m) {
    function f(b, f) {
        var d = $(f).closest(".streamItem"),
            l = d.find(".photopoll");
        d.find(".voteCount").text(b.total_votes);
        l.find(".vote, .owner-vote").toggle();
        l.find(".choices").each(function() {
            var d = $(this),
                f = d.data("option-id"),
                f = b.options[f],
                h = f.vote_percent,
                l = d.find(".rating");
            f.voted && d.addClass("voted");
            l.text(h + "%").animate({
                marginBottom: 3 * h + 100 + "px"
            }, 400)
        })
    }
    return function(k) {
        var h = $(k),
            d = h.closest(".choices"),
            n = h.closest(".streamItem"),
            r = n.find(".photopoll");
        l.acquire(n) && (r.addClass("loading"), b.post(k).done(function(b) {
            f(b, k);
            b = $(".current-voter");
            b.length && (b.find(".votedOption[data-id!=" + d.data("option-id") + "]").remove(), m.$prependWithItems(".votes-container", b.html()), n.siblings(".votes-container").addClass("voted"))
        }).always(function() {
            r.removeClass("loading");
            l.release(n)
        }))
    }
}(Ajax, Mutex, Pager));
Actions("PhotopollSubmit", FormXHR.submit);
Actions("PolicyAccept", function(b, l, m, f) {
    return function(k) {
        k = b(k);
        if (m.acquire(k)) {
            k.closest(".policy-message").hide();
            var h = k.data("cookie");
            h ? f.setCookie(h, "1", 31536E6, "/") : l.put(k[0])
        }
    }
}(jQuery, Ajax, Mutex, Utils));
Actions("PopoverOpen", function(b, l, m, f) {
    function k() {
        h && (h.hide(), h = null, f.off(m, "click.popover"))
    }
    var h = null;
    return function(d) {
        var n = b(d);
        d = n.next();
        k();
        var r = b(l).scrollTop(),
            n = n.offsetParent().offset().top,
            u = b("#topMenu").outerHeight(),
            v = d.outerHeight(),
            r = n - v > u + r;
        d.toggleClass("top", r).toggleClass("bottom", !r).show();
        h = d;
        f.on(m, "click.popover", k)
    }
}(jQuery, window, document, Events));
Actions("ProfileSettingSelect", function(b, l) {
    function m(b) {
        return 0 === b.indexOf("theme")
    }

    function f(f, h) {
        return b.grep(h.split(" "), m).join(" ")
    }
    return function(k) {
        k = b(k);
        var h = k.data("class"),
            d = k.data("value"),
            m = k.data("target");
        k.closest(".simpleFormItem").find("." + h).removeClass(h);
        k.addClass(h);
        b(m).val(d);
        "#user_theme_id" === m && (k = "theme" + d, b(l.body).removeClass(f).addClass(k))
    }
}(jQuery, document));
Actions("PymkClose", Pymk.closeAction);
Actions("PymkAccept", Pymk.acceptAction);
Actions("PymkDecline", Pymk.declineAction);
Actions("PymlPrev", Pyml.prevAction);
Actions("PymlNext", Pyml.nextAction);
Actions("PymlDecline", Pyml.declineAction);
Actions("PymlHashtagCreate", Pyml.hashtagAction);
Actions("AnswerLikeToggle", function(b, l, m, f) {
    return function(k) {
        if (l.acquire(k)) {
            var h = $(k),
                d = h.siblings(".counter"),
                n = h.hasClass("active") ? -1 : 1,
                r = parseInt(d.text()) + n;
            h.toggleClass("active", 1 === n);
            d.text(r).toggle(0 < r);
            m.update({
                likes: n
            });
            1 === n ? (b.post(k), h = $(".current-liker").html(), f.$prependWithItems(".likes-container", h)) : (b._delete(k), h = $(".current-liker div[data-login]").data("login"), h = $('.likes-container div[data-login="' + h + '"]'), f.$removeClosestItem(h));
            l.release(k)
        }
    }
}(Ajax, Mutex, ProfileTabCounters,
    Pager));
Actions("QuestionDelete", Questions.deleteAction);
Actions("QuestionsDelete", Questions.deleteAllAction);
Actions("QuestionRandom", Questions.randomAction);
Actions("QuestionSave", Questions.saveAction, {
    preventDefault: !1
});
Actions("QuestionSaveAndPopupOpen", Questions.saveAndPopupAction);
Actions("MassAskSubmit", MassAsk.onSubmit);
Actions("MassAskToggleUser", MassAsk.onToggleUser);
Actions("MassAskToggleAnonymous", MassAsk.onToggleAnonymous, {
    preventDefault: !1
});
Actions("MassAskSearch", MassAsk.onSearch);
Actions("ReadMore", function() {
    return function(b) {
        b = $(b).closest(".streamItem");
        b.removeClass("shorten");
        b.children(".streamItemContent-embed").remove()
    }
}());
Actions("LoginSuggest", LoginCheck.suggestAction);
Actions("LoginCheck", LoginCheck.checkAction);
Actions("LoginReset", LoginCheck.resetAction);
Actions("SignupConfirmDob", function(b, l) {
    return l.debounce(function(l) {
        var f = b(l).closest("[data-confirm]");
        l = f.find("[name*=day]");
        var k = f.find("[name*=month]"),
            h = f.find("[name*=year]"),
            d = l.val(),
            n = k.val(),
            r = h.val();
        if (d && n && r) {
            var u = new Date,
                d = new Date(r, n - 1, d, 23, 59, 59);
            u.setFullYear(u.getFullYear() - 13);
            d < u || (f = f.data("confirm"), window.confirm(f) || (l.val(""), k.val(""), h.val("")))
        }
    }, 300)
}(jQuery, Utils));
Actions("PhotoUpload", PhotoAnswer.uploadAction);
Actions("PhotoRemove", PhotoAnswer.removeAction);
Actions("PhotopollUpload", Photopoll.uploadAction);
Actions("AvatarUpload", Avatar.uploadAction);
Actions("AvatarSelect", Avatar.selectAction);
Actions("AvatarDelete", Avatar.deleteAction);
Actions("BackgroundUpload", Background.uploadAction);
Actions("UserBlockDelete", function(b, l, m, f, k) {
    function h(d) {
        f.$removeClosestItem(this);
        b("#blockCount").text(function(b, d) {
            return parseInt(d) - 1
        });
        k.message(d.error, d.notice);
        m.release(this)
    }
    return function(b) {
        m.acquire(b) && l._delete(b).done(h)
    }
}(jQuery, Ajax, Mutex, Pager, Flash));
Pages({
    discovery: ["index"]
}, Pyml.init);
Pages({
    notifications: ["index", "questions", "answers", "likes"]
}, Notifications.initClickActions);
Pages({
    profile: ["answers", "likes"]
}, ProfileTabCounters.enable);
Pages({
    signup: ["new"]
}, LoginCheck.suggestInit);
Pages({
    photopolls: ["new"]
}, Uploads.init);
Pages({
    answers: ["new"]
}, Uploads.init);
Pages({
    profile: ["edit"]
}, Uploads.init);
GTM.element("like-toggle", function(b) {
    b = b.hasClass("active");
    this.push({
        event: b ? "like" : "unlike"
    })
});
GTM.element("follow-toggle", function(b) {
    b = b.hasClass("icon-add-friend") || !b.data("class");
    this.push({
        event: b ? "follow" : "unfollow"
    })
});
GTM.element("report-user report-topic report-question", function(b, l, m, f) {
    this.push({
        event: l,
        "report-reason": m,
        "report-block": f
    })
});
GTM.element("popup", function(b, l, m, f, k) {
    this.push({
        event: m + "-" + l,
        "page.category": f,
        "page.type": k
    })
});
GTM.element("ask-question", function(b, l, m, f) {
    l = b.find("input[name*=anonymous]:checked").length;
    var k = "individual",
        h = 1;
    if ("mass" === m) {
        h = MassAsk.loginCount(b);
        if (0 === h) return;
        1 < h && (k = "mass")
    }
    this.push({
        event: f ? "reask-question" : "ask-question",
        "question-type": l ? "anonymous" : "identified",
        "question-target": k,
        "recipient-count": h
    });
    GTM.exec("mention-user", "question", b.find("textarea").val())
});
GTM.element("answer-question", function(b) {
    var l = this;
    l.push({
        event: "answer-question"
    });
    b.find("input[name*=sharing]:checked").each(function() {
        l.push({
            event: "share-answer",
            "sharing-option": $(this).val()
        })
    });
    GTM.exec("mention-user", "answer", b.find("textarea").val())
});
GTM.element("share-topic share-user", function(b, l) {
    var m = this;
    b.find("input[value=true]").each(function() {
        m.push({
            event: l,
            "sharing-option": $(this).attr("name")
        })
    })
});
GTM.routine("mention-user", function(b, l, m) {
    (b = (m.match(/\B(@[a-zA-Z][a-zA-Z0-9_]{2,}\b(?!@))/g) || []).length) && this.push({
        event: "mention-user",
        "entity-type": l,
        "mention-count": b
    })
});