﻿!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
        , E = C.document
        , r = Object.getPrototypeOf
        , s = t.slice
        , v = t.concat
        , u = t.push
        , i = t.indexOf
        , n = {}
        , o = n.toString
        , y = n.hasOwnProperty
        , a = y.toString
        , l = a.call(Object)
        , m = {}
        , x = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
        , c = {
            type: !0,
            src: !0,
            noModule: !0
        };
    function b(e, t, n) {
        var r, i = (t = t || E).createElement("script");
        if (i.text = e,
            n)
            for (r in c)
                n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var k = function (e, t) {
        return new k.fn.init(e, t)
    }
        , f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function p(e) {
        var t = !!e && "length" in e && e.length
            , n = w(e);
        return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: "3.3.1",
        constructor: k,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function (e) {
            return k.each(this, e)
        },
        map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
        k.extend = k.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || x(a) || (a = {}),
                s === u && (a = this,
                    s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                            a !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1,
                                n && Array.isArray(n) ? n : []) : n && k.isPlainObject(n) ? n : {},
                                a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        k.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof (n = y.call(t, "constructor") && t.constructor) || a.call(n) !== l))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function (e) {
                b(e)
            },
            each: function (e, t) {
                var n, r = 0;
                if (p(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(f, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                    n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) != a && r.push(e[i]);
                return r
            },
            map: function (e, t, n) {
                var r, i, o = 0, a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i);
                return v.apply([], a)
            },
            guid: 1,
            support: m
        }),
        "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
    var d = function (n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }
        function i() {
            T()
        }
        var e, d, b, o, a, h, p, g, w, u, l, T, C, s, E, v, c, y, m, k = "sizzle" + 1 * new Date, x = n.document, S = 0, r = 0, D = ae(), N = ae(), A = ae(), j = function (e, t) {
            return e === t && (l = !0),
                0
        }, q = {}.hasOwnProperty, t = [], L = t.pop, H = t.push, O = t.push, P = t.slice, M = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + I + "*(" + W + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + I + "*\\]", B = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", F = new RegExp(I + "+", "g"), _ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), z = new RegExp("^" + I + "*," + I + "*"), X = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), U = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), V = new RegExp(B), G = new RegExp("^" + W + "$"), Y = {
            ID: new RegExp("^#(" + W + ")"),
            CLASS: new RegExp("^\\.(" + W + ")"),
            TAG: new RegExp("^(" + W + "|[*])"),
            ATTR: new RegExp("^" + $),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = me(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            O.apply(t = P.call(x.childNodes), x.childNodes),
                t[x.childNodes.length].nodeType
        } catch (n) {
            O = {
                apply: t.length ? function (e, t) {
                    H.apply(e, P.call(t))
                }
                    : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];)
                            ;
                        e.length = n - 1
                    }
            }
        }
        function oe(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t),
                t = t || C,
                E)) {
                if (11 !== p && (u = Z.exec(e)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (f && (a = f.getElementById(i)) && m(t, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return O.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName)
                            return O.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (d.qsa && !A[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p)
                        f = t,
                            c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ne, re) : t.setAttribute("id", s = k),
                            o = (l = h(e)).length; o--;)
                            l[o] = "#" + s + " " + ye(l[o]);
                        c = l.join(","),
                            f = ee.test(e) && ge(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return O.apply(n, f.querySelectorAll(c)),
                                n
                        } catch (e) { } finally {
                            s === k && t.removeAttribute("id")
                        }
                }
            }
            return g(e.replace(_, "$1"), t, n, r)
        }
        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
            }
        }
        function se(e) {
            return e[k] = !0,
                e
        }
        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function le(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)
                b.attrHandle[n[r]] = t
        }
        function ce(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function pe(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function de(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function he(a) {
            return se(function (o) {
                return o = +o,
                    se(function (e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--;)
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = oe.support = {},
            a = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            T = oe.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement,
                    E = !a(C),
                    x !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)),
                    d.attributes = ue(function (e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    d.getElementsByTagName = ue(function (e) {
                        return e.appendChild(C.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    d.getElementsByClassName = K.test(C.getElementsByClassName),
                    d.getById = ue(function (e) {
                        return s.appendChild(e).id = k,
                            !C.getElementsByName || !C.getElementsByName(k).length
                    }),
                    d.getById ? (b.filter.ID = function (e) {
                        var t = e.replace(te, f);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }
                        ,
                        b.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                    ) : (b.filter.ID = function (e) {
                        var n = e.replace(te, f);
                        return function (e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }
                        ,
                        b.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o];
                                    for (i = t.getElementsByName(e),
                                        r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o]
                                }
                                return []
                            }
                        }
                    ),
                    b.find.TAG = d.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function (e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" !== e)
                                return o;
                            for (; n = o[i++];)
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                    ,
                    b.find.CLASS = d.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && E)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    c = [],
                    v = [],
                    (d.qsa = K.test(C.querySelectorAll)) && (ue(function (e) {
                        s.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + R + ")"),
                            e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                    }),
                        ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                s.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:")
                        })),
                    (d.matchesSelector = K.test(y = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function (e) {
                        d.disconnectedMatch = y.call(e, "*"),
                            y.call(e, "[s!='']:x"),
                            c.push("!=", B)
                    }),
                    v = v.length && new RegExp(v.join("|")),
                    c = c.length && new RegExp(c.join("|")),
                    t = K.test(s.compareDocumentPosition),
                    m = t || K.test(s.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    j = t ? function (e, t) {
                        if (e === t)
                            return l = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && m(x, e) ? -1 : t === C || t.ownerDocument === x && m(x, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function (e, t) {
                            if (e === t)
                                return l = !0,
                                    0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!i || !o)
                                return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                            if (i === o)
                                return ce(e, t);
                            for (n = e; n = n.parentNode;)
                                a.unshift(n);
                            for (n = t; n = n.parentNode;)
                                s.unshift(n);
                            for (; a[r] === s[r];)
                                r++;
                            return r ? ce(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                        }
                ),
                    C
            }
            ,
            oe.matches = function (e, t) {
                return oe(e, null, null, t)
            }
            ,
            oe.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== C && T(e),
                    t = t.replace(U, "='$1']"),
                    d.matchesSelector && E && !A[t + " "] && (!c || !c.test(t)) && (!v || !v.test(t)))
                    try {
                        var n = y.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) { }
                return 0 < oe(t, C, null, [e]).length
            }
            ,
            oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== C && T(e),
                    m(e, t)
            }
            ,
            oe.attr = function (e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()]
                    , r = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            oe.escape = function (e) {
                return (e + "").replace(ne, re)
            }
            ,
            oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            oe.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (l = !d.detectDuplicates,
                    u = !d.sortStable && e.slice(0),
                    e.sort(j),
                    l) {
                    for (; t = e[i++];)
                        t === e[i] && (r = n.push(i));
                    for (; r--;)
                        e.splice(n[r], 1)
                }
                return u = null,
                    e
            }
            ,
            o = oe.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++];)
                        n += o(t);
                return n
            }
            ,
            (b = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: Y,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, f),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, f),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                            e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, f).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = D[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && D(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = oe.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                                "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3)
                            , m = "last" !== h.slice(-4)
                            , x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        }
                            : function (e, t, n) {
                                var r, i, o, a, s, u, l = y != m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                                if (c) {
                                    if (y) {
                                        for (; l;) {
                                            for (a = e; a = a[l];)
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                                    return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [m ? c.firstChild : c.lastChild],
                                        m && p) {
                                        for (d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                            a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                            if (1 === a.nodeType && ++d && a === e) {
                                                i[h] = [S, s, d];
                                                break
                                            }
                                    } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                                        !1 === d)
                                        for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                            a !== e));)
                                            ;
                                    return (d -= v) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                            b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                                for (var n, r = a(e, o), i = r.length; i--;)
                                    e[n = M(e, r[i])] = !(t[n] = r[i])
                            }) : function (e) {
                                return a(e, 0, t)
                            }
                        ) : a
                    }
                },
                pseudos: {
                    not: se(function (e) {
                        var r = []
                            , i = []
                            , s = p(e.replace(_, "$1"));
                        return s[k] ? se(function (e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)
                                (i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e,
                                s(r, null, n, i),
                                r[0] = null,
                                !i.pop()
                        }
                    }),
                    has: se(function (t) {
                        return function (e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: se(function (t) {
                        return t = t.replace(te, f),
                            function (e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: se(function (n) {
                        return G.test(n || "") || oe.error("unsupported lang: " + n),
                            n = n.replace(te, f).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === s
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function () {
                        return [0]
                    }),
                    last: he(function (e, t) {
                        return [t - 1]
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;)
                            e.push(r);
                        return e
                    }),
                    gt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;)
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = fe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = pe(e);
        function ve() { }
        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(s, e, t) {
            var u = e.dir
                , l = e.next
                , c = l || u
                , f = t && "parentNode" === c
                , p = r++;
            return e.first ? function (e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
                : function (e, t, n) {
                    var r, i, o, a = [S, p];
                    if (n) {
                        for (; e = e[u];)
                            if ((1 === e.nodeType || f) && s(e, t, n))
                                return !0
                    } else
                        for (; e = e[u];)
                            if (1 === e.nodeType || f)
                                if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                    l && l === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === S && r[1] === p)
                                        return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n))
                                        return !0
                                }
                    return !1
                }
        }
        function xe(i) {
            return 1 < i.length ? function (e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
                : i[0]
        }
        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    l && t.push(s)));
            return a
        }
        function we(d, h, g, v, y, e) {
            return v && !v[k] && (v = we(v)),
                y && !y[k] && (y = we(y, e)),
                se(function (e, t, n, r) {
                    var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            oe(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : be(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r),
                        v)
                        for (i = be(p, u),
                            v(i, [], n, r),
                            o = i.length; o--;)
                            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (y || d) {
                            if (y) {
                                for (i = [],
                                    o = p.length; o--;)
                                    (a = p[o]) && i.push(f[o] = a);
                                y(null, p = [], i, r)
                            }
                            for (o = p.length; o--;)
                                (a = p[o]) && -1 < (i = y ? M(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else
                        p = be(p === t ? p.splice(l, p.length) : p),
                            y ? y(null, t, p, r) : O.apply(t, p)
                })
        }
        function Te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = me(function (e) {
                return e === i
            }, a, !0), l = me(function (e) {
                return -1 < M(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                    r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [me(xe(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++)
                            ;
                        return we(1 < s && xe(c), 1 < s && ye(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(_, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && ye(e))
                    }
                    c.push(t)
                }
            return xe(c)
        }
        return ve.prototype = b.filters = b.pseudos,
            b.setFilters = new ve,
            h = oe.tokenize = function (e, t) {
                var n, r, i, o, a, s, u, l = N[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (a = e,
                    s = [],
                    u = b.preFilter; a;) {
                    for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                        s.push(i = [])),
                        n = !1,
                        (r = X.exec(a)) && (n = r.shift(),
                            i.push({
                                value: n,
                                type: r[0].replace(_, " ")
                            }),
                            a = a.slice(n.length)),
                        b.filter)
                        !(r = Y[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? oe.error(e) : N(e, s).slice(0)
            }
            ,
            p = oe.compile = function (e, t) {
                var n, r = [], i = [], o = A[e + " "];
                if (!o) {
                    for (n = (t = t || h(e)).length; n--;)
                        (o = Te(t[n]))[k] ? r.push(o) : i.push(o);
                    (o = A(e, function (v, y) {
                        function e(e, t, n, r, i) {
                            var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    for (a = 0,
                                        t || o.ownerDocument === C || (T(o),
                                            n = !E); s = v[a++];)
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (S = h)
                                }
                                m && ((o = !s && o) && u--,
                                    e && c.push(o))
                            }
                            if (u += l,
                                m && l !== u) {
                                for (a = 0; s = y[a++];)
                                    s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        for (; l--;)
                                            c[l] || f[l] || (f[l] = L.call(r));
                                    f = be(f)
                                }
                                O.apply(r, f),
                                    i && !e && 0 < f.length && 1 < u + y.length && oe.uniqueSort(r)
                            }
                            return i && (S = h,
                                w = p),
                                c
                        }
                        var m = 0 < y.length
                            , x = 0 < v.length;
                        return m ? se(e) : e
                    }(i, r))).selector = e
                }
                return o
            }
            ,
            g = oe.select = function (e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, f), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                        !b.relative[s = a.type]);)
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, f), ee.test(o[0].type) && ge(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                !(e = r.length && ye(o)))
                                return O.apply(n, r),
                                    n;
                            break
                        }
                }
                return (l || p(e, c))(r, t, !E, n, !t || ee.test(e) && ge(t.parentNode) || t),
                    n
            }
            ,
            d.sortStable = k.split("").sort(j).join("") === k,
            d.detectDuplicates = !!l,
            T(),
            d.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }),
            ue(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || le("type|href|height|width", function (e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            d.attributes && ue(function (e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || le("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ue(function (e) {
                return null == e.getAttribute("disabled")
            }) || le(R, function (e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            oe
    }(C);
    k.find = d,
        k.expr = d.selectors,
        k.expr[":"] = k.expr.pseudos,
        k.uniqueSort = k.unique = d.uniqueSort,
        k.text = d.getText,
        k.isXMLDoc = d.isXML,
        k.contains = d.contains,
        k.escapeSelector = d.escape;
    function h(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function T(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var S = k.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function A(e, n, r) {
        return x(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }
        ,
        k.fn.extend({
            find: function (e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(k(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (k.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                    t = 0; t < r; t++)
                    k.find(e, i[t], n);
                return 1 < r ? k.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(A(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(A(this, e || [], !0))
            },
            is: function (e) {
                return !!A(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
            }
        });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
            "string" != typeof e)
            return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && k.isPlainObject(t))
                for (r in t)
                    x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
    }
    ).prototype = k.fn,
        j = k(E);
    var L = /^(?:parents|prev(?:Until|All))/
        , H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    k.fn.extend({
        has: function (e) {
            var t = k(e, this)
                , n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        k.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return h(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function (e) {
                return O(e, "nextSibling")
            },
            prev: function (e) {
                return O(e, "previousSibling")
            },
            nextAll: function (e) {
                return h(e, "nextSibling")
            },
            prevAll: function (e) {
                return h(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function (e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return T(e.firstChild)
            },
            contents: function (e) {
                return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e),
                    k.merge([], e.childNodes))
            }
        }, function (r, i) {
            k.fn[r] = function (e, t) {
                var n = k.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                    t && "string" == typeof t && (n = k.filter(t, n)),
                    1 < this.length && (H[r] || k.uniqueSort(n),
                        L.test(r) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var P = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function (r) {
        r = "string" == typeof r ? function (e) {
            var n = {};
            return k.each(e.match(P) || [], function (e, t) {
                n[t] = !0
            }),
                n
        }(r) : k.extend({}, r);
        function n() {
            for (o = o || r.once,
                t = i = !0; s.length; u = -1)
                for (e = s.shift(); ++u < a.length;)
                    !1 === a[u].apply(e[0], e[1]) && r.stopOnFalse && (u = a.length,
                        e = !1);
            r.memory || (e = !1),
                i = !1,
                o && (a = e ? [] : "")
        }
        var i, e, t, o, a = [], s = [], u = -1, l = {
            add: function () {
                return a && (e && !i && (u = a.length - 1,
                    s.push(e)),
                    function n(e) {
                        k.each(e, function (e, t) {
                            x(t) ? r.unique && l.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments),
                    e && !i && n()),
                    this
            },
            remove: function () {
                return k.each(arguments, function (e, t) {
                    for (var n; -1 < (n = k.inArray(t, a, n));)
                        a.splice(n, 1),
                            n <= u && u--
                }),
                    this
            },
            has: function (e) {
                return e ? -1 < k.inArray(e, a) : 0 < a.length
            },
            empty: function () {
                return a = a && [],
                    this
            },
            disable: function () {
                return o = s = [],
                    a = e = "",
                    this
            },
            disabled: function () {
                return !a
            },
            lock: function () {
                return o = s = [],
                    e || i || (a = e = ""),
                    this
            },
            locked: function () {
                return !!o
            },
            fireWith: function (e, t) {
                return o || (t = [e, (t = t || []).slice ? t.slice() : t],
                    s.push(t),
                    i || n()),
                    this
            },
            fire: function () {
                return l.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!t
            }
        };
        return l
    }
        ,
        k.extend({
            Deferred: function (e) {
                var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
                    , i = "pending"
                    , a = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments),
                                this
                        },
                        catch: function (e) {
                            return a.then(null, e)
                        },
                        pipe: function () {
                            var i = arguments;
                            return k.Deferred(function (r) {
                                k.each(o, function (e, t) {
                                    var n = x(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }),
                                    i = null
                            }).promise()
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                x(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, R, s)) : (u++,
                                                    t.call(e, l(u, o, M, s), l(u, o, R, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                                        r = [e]),
                                                        (s || o.resolveWith)(n, r))
                                        }
                                    }
                                    var n = this
                                        , r = arguments
                                        , t = s ? e : function () {
                                            try {
                                                e()
                                            } catch (e) {
                                                k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                                    u <= i + 1 && (a !== R && (n = void 0,
                                                        r = [e]),
                                                        o.rejectWith(n, r))
                                            }
                                        }
                                        ;
                                    i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                                        C.setTimeout(t))
                                }
                            }
                            return k.Deferred(function (e) {
                                o[0][3].add(l(0, e, x(r) ? r : M, e.notifyWith)),
                                    o[1][3].add(l(0, e, x(t) ? t : M)),
                                    o[2][3].add(l(0, e, x(n) ? n : R))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? k.extend(e, a) : a
                        }
                    }
                    , s = {};
                return k.each(o, function (e, t) {
                    var n = t[2]
                        , r = t[5];
                    a[t[1]] = n.add,
                        r && n.add(function () {
                            i = r
                        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                        n.add(t[3].fire),
                        s[t[0]] = function () {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                                this
                        }
                        ,
                        s[t[0] + "With"] = n.fireWith
                }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        i[t] = this,
                            o[t] = 1 < arguments.length ? s.call(arguments) : e,
                            --n || a.resolveWith(i, o)
                    }
                }
                var n = arguments.length
                    , r = n
                    , i = Array(r)
                    , o = s.call(arguments)
                    , a = k.Deferred();
                if (n <= 1 && (I(e, a.done(t(r)).resolve, a.reject, !n),
                    "pending" === a.state() || x(o[r] && o[r].then)))
                    return a.then();
                for (; r--;)
                    I(o[r], t(r), a.reject);
                return a.promise()
            }
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
        ,
        k.readyException = function (e) {
            C.setTimeout(function () {
                throw e
            })
        }
        ;
    var $ = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            k.ready()
    }
    k.fn.ready = function (e) {
        return $.then(e).catch(function (e) {
            k.readyException(e)
        }),
            this
    }
        ,
        k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait || $.resolveWith(E, [k]))
            }
        }),
        k.ready.then = $.then,
        "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
            C.addEventListener("load", B));
    var F = function (e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
                n)
                F(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
            x(r) || (a = !0),
            l && (t = a ? (t.call(e, r),
                null) : (l = t,
                    function (e, t, n) {
                        return l.call(k(e), n)
                    }
            )),
            t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , _ = /^-ms-/
        , z = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function U(e) {
        return e.replace(_, "ms-").replace(z, X)
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function G() {
        this.expando = k.expando + G.uid++
    }
    G.uid = 1,
        G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {},
                    V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
            },
            set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[U(t)] = n;
                else
                    for (r in t)
                        i[U(r)] = t[r];
                return i
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(P) || []).length;
                        for (; n--;)
                            delete r[t[n]]
                    }
                    void 0 !== t && !k.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t)
            }
        };
    var Y = new G
        , Q = new G
        , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) { }
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }),
        k.fn.extend({
            data: function (n, e) {
                var t, r, i, o = this[0], a = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n ? this.each(function () {
                        Q.set(this, n)
                    }) : F(this, function (e) {
                        var t;
                        if (o && void 0 === e) {
                            if (void 0 !== (t = Q.get(o, n)))
                                return t;
                            if (void 0 !== (t = Z(o, n)))
                                return t
                        } else
                            this.each(function () {
                                Q.set(this, n, e)
                            })
                    }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (i = Q.get(o),
                    1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)),
                            Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e)
                })
            }
        }),
        k.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                        r = Y.get(e, t),
                        n && (!r || Array.isArray(n) ? r = Y.access(e, t, k.makeArray(n)) : r.push(n)),
                        r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = k._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, function () {
                            k.dequeue(e, t)
                        }, o)),
                    !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: k.Callbacks("once memory").add(function () {
                        Y.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        k.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = k.queue(this, t, n);
                        k._queueHooks(this, t),
                            "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    k.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                function n() {
                    --i || o.resolveWith(a, [a])
                }
                var r, i = 1, o = k.Deferred(), a = this, s = this.length;
                for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--;)
                    (r = Y.get(a[s], e + "queueHooks")) && r.empty && (i++,
                        r.empty.add(n));
                return n(),
                    o.promise(t)
            }
        });
    function ee(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
                e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
            t)
            e.style[o] = a[o];
        return i
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i")
        , re = ["Top", "Right", "Bottom", "Left"]
        , ie = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
        };
    function oe(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
            return r.cur()
        }
            : function () {
                return k.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
                l = l || c[3],
                c = +u || 1; a--;)
                k.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    c /= o;
            c *= 2,
                k.style(e, t, c + l),
                n = n || []
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
                r.start = c,
                r.end = i)),
            i
    }
    var ae = {};
    function se(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
                t ? ("none" === n && (i[o] = Y.get(r, "display") || null,
                    i[o] || (r.style.display = "")),
                    "" === r.style.display && ie(r) && (i[o] = (f = l = u = void 0,
                        l = (s = r).ownerDocument,
                        c = s.nodeName,
                        (f = ae[c]) || (u = l.body.appendChild(l.createElement(c)),
                            f = k.css(u, "display"),
                            u.parentNode.removeChild(u),
                            "none" === f && (f = "block"),
                            ae[c] = f)))) : "none" !== n && (i[o] = "none",
                                Y.set(r, "display", n)));
        var s, u, l, c, f;
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    k.fn.extend({
        show: function () {
            return se(this, !0)
        },
        hide: function () {
            return se(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ie(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i
        , le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , ce = /^$|^module$|\/(?:java|ecma)script/i
        , fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    function pe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && D(e, t) ? k.merge([e], n) : n
    }
    function de(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    fe.optgroup = fe.option,
        fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead,
        fe.th = fe.td;
    var he, ge, ve = /<|&#?\w+;/;
    function ye(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                        s = (le.exec(o) || ["", ""])[1].toLowerCase(),
                        u = fe[s] || fe._default,
                        a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                        c = u[0]; c--;)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
            d = 0; o = p[d++];)
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = k.contains(o.ownerDocument, o),
                a = pe(f.appendChild(o), "script"),
                l && de(a),
                n)
                for (c = 0; o = a[c++];)
                    ce.test(o.type || "") && n.push(o);
        return f
    }
    he = E.createDocumentFragment().appendChild(E.createElement("div")),
        (ge = E.createElement("input")).setAttribute("type", "radio"),
        ge.setAttribute("checked", "checked"),
        ge.setAttribute("name", "t"),
        he.appendChild(ge),
        m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
        he.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var me = E.documentElement
        , xe = /^key/
        , be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , we = /^([^.]*)(?:\.(.+)|)/;
    function Te() {
        return !0
    }
    function Ce() {
        return !1
    }
    function Ee() {
        try {
            return E.activeElement
        } catch (e) { }
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
            !1 === i)
            i = Ce;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            (i = function (e) {
                return k().off(e),
                    a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = k.guid++)),
            e.each(function () {
                k.event.add(this, t, i, r, n)
            })
    }
    k.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler,
                    i = o.selector),
                    i && k.find.matchesSelector(me, i),
                    n.guid || (n.guid = k.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (a = v.handle) || (a = v.handle = function (e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    l = (e = (e || "").match(P) || [""]).length; l--;)
                    d = g = (s = we.exec(e[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d && (f = k.event.special[d] || {},
                            d = (i ? f.delegateType : f.bindType) || d,
                            f = k.event.special[d] || {},
                            c = k.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && k.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o),
                            (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                                f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                            f.add && (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            k.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--;)
                    if (d = g = (s = we.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                        for (f = k.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = p.length; o--;)
                            c = p[o],
                                !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Y.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
                t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = k.event.handlers.call(this, s, l),
                    t = 0; (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem,
                        n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                            s.data = o.data,
                            void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                                s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                            a = {},
                            n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
                u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }),
                s
        },
        addProp: function (t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: x(e) ? function () {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                    : function () {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                ,
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Ee() && this.focus)
                        return this.focus(),
                            !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Ee() && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && D(this, "input"))
                        return this.click(),
                            !1
                },
                _default: function (e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        k.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        k.Event = function (e, t) {
            if (!(this instanceof k.Event))
                return new k.Event(e, t);
            e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && k.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[k.expando] = !0
        }
        ,
        k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Ce,
            isPropagationStopped: Ce,
            isImmediatePropagationStopped: Ce,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Te,
                    e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Te,
                    e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Te,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        k.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, k.event.addProp),
        k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, i) {
            k.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                        t = r.handler.apply(this, arguments),
                        e.type = i),
                        t
                }
            }
        }),
        k.fn.extend({
            on: function (e, t, n, r) {
                return ke(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return ke(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = Ce),
                        this.each(function () {
                            k.event.remove(this, e, n, t)
                        });
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
        });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , De = /<script|<style|<link/i
        , Ne = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }
    function He(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e),
                a = Y.set(t, o),
                l = o.events))
                for (i in delete a.handle,
                    a.events = {},
                    l)
                    for (n = 0,
                        r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            Q.hasData(e) && (s = Q.access(e),
                u = k.extend({}, s),
                Q.set(t, u))
        }
    }
    function Oe(n, r, i, o) {
        r = v.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = x(d);
        if (h || 1 < f && "string" == typeof d && !m.checkClone && Ne.test(d))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                    Oe(t, r, i, o)
            });
        if (f && (t = (e = ye(r, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
            for (s = (a = k.map(pe(e, "script"), qe)).length; c < f; c++)
                u = e,
                    c !== p && (u = k.clone(u, !0, !0),
                        s && k.merge(a, pe(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                    k.map(a, Le),
                    c = 0; c < s; c++)
                    u = a[c],
                        ce.test(u.type || "") && !Y.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : b(u.textContent.replace(Ae, ""), l, u))
        }
        return n
    }
    function Pe(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(pe(r)),
                r.parentNode && (n && k.contains(r.ownerDocument, r) && de(pe(r, "script")),
                    r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function (e) {
            return e.replace(Se, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = k.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = pe(c),
                    r = 0,
                    i = (o = pe(e)).length; r < i; r++)
                    s = o[r],
                        u = a[r],
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && ue.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || pe(e),
                        a = a || pe(c),
                        r = 0,
                        i = o.length; r < i; r++)
                        He(o[r], a[r]);
                else
                    He(e, c);
            return 0 < (a = pe(c, "script")).length && de(a, !f && pe(e, "script")),
                c
        },
        cleanData: function (e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
        k.fn.extend({
            detach: function (e) {
                return Pe(this, e, !0)
            },
            remove: function (e) {
                return Pe(this, e)
            },
            text: function (e) {
                return F(this, function (e) {
                    return void 0 === e ? k.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return Oe(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return Oe(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return Oe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return Oe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (k.cleanData(pe(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return k.clone(this, e, t)
                    })
            },
            html: function (e) {
                return F(this, function (e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = k.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (k.cleanData(pe(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return Oe(this, arguments, function (e) {
                    var t = this.parentNode;
                    k.inArray(this, n) < 0 && (k.cleanData(pe(this)),
                        t && t.replaceChild(e, this))
                }, n)
            }
        }),
        k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, a) {
            k.fn[e] = function (e) {
                for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                        k(r[o])[a](t),
                        u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var Me, Re, Ie, We, $e, Be, Fe, _e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), ze = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
            t.getComputedStyle(e)
    }, Xe = new RegExp(re.join("|"), "i");
    function Ue() {
        if (Fe) {
            Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                me.appendChild(Be).appendChild(Fe);
            var e = C.getComputedStyle(Fe);
            Me = "1%" !== e.top,
                $e = 12 === Ve(e.marginLeft),
                Fe.style.right = "60%",
                We = 36 === Ve(e.right),
                Re = 36 === Ve(e.width),
                Fe.style.position = "absolute",
                Ie = 36 === Fe.offsetWidth || "absolute",
                me.removeChild(Be),
                Fe = null
        }
    }
    function Ve(e) {
        return Math.round(parseFloat(e))
    }
    function Ge(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)),
            !m.pixelBoxStyles() && _e.test(a) && Xe.test(t) && (r = s.width,
                i = s.minWidth,
                o = s.maxWidth,
                s.minWidth = s.maxWidth = s.width = a,
                a = n.width,
                s.width = r,
                s.minWidth = i,
                s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function Ye(e, t) {
        return {
            get: function () {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Be = E.createElement("div"),
        (Fe = E.createElement("div")).style && (Fe.style.backgroundClip = "content-box",
            Fe.cloneNode(!0).style.backgroundClip = "",
            m.clearCloneStyle = "content-box" === Fe.style.backgroundClip,
            k.extend(m, {
                boxSizingReliable: function () {
                    return Ue(),
                        Re
                },
                pixelBoxStyles: function () {
                    return Ue(),
                        We
                },
                pixelPosition: function () {
                    return Ue(),
                        Me
                },
                reliableMarginLeft: function () {
                    return Ue(),
                        $e
                },
                scrollboxSize: function () {
                    return Ue(),
                        Ie
                }
            }));
    var Qe = /^(none|table(?!-c[ea]).+)/
        , Je = /^--/
        , Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , et = ["Webkit", "Moz", "ms"]
        , tt = E.createElement("div").style;
    function nt(e) {
        var t = k.cssProps[e];
        return t = t || (k.cssProps[e] = function (e) {
            if (e in tt)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt)
                    return e
        }(e) || e)
    }
    function rt(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
            , s = 0
            , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
                r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
                    "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
                        "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
            u
    }
    function ot(e, t, n) {
        var r = ze(e)
            , i = Ge(e, t, r)
            , o = "border-box" === k.css(e, "boxSizing", !1, r)
            , a = o;
        if (_e.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (m.boxSizingReliable() || i === e.style[t]),
            "auto" !== i && (parseFloat(i) || "inline" !== k.css(e, "display", !1, r)) || (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
                a = !0),
            (i = parseFloat(i) || 0) + it(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = U(t), u = Je.test(t), l = e.style;
                if (u || (t = nt(s)),
                    a = k.cssHooks[t] || k.cssHooks[s],
                    void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = oe(e, t, i),
                    o = "number"),
                    null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                        m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = U(t);
            return Je.test(t) || (t = nt(s)),
                (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Ge(e, t, r)),
                "normal" === i && t in Ze && (i = Ze[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
        k.each(["height", "width"], function (e, s) {
            k.cssHooks[s] = {
                get: function (e, t, n) {
                    if (t)
                        return !Qe.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, s, n) : ee(e, Ke, function () {
                            return ot(e, s, n)
                        })
                },
                set: function (e, t, n) {
                    var r, i = ze(e), o = "border-box" === k.css(e, "boxSizing", !1, i), a = n && it(e, s, n, o, i);
                    return o && m.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - it(e, s, "border", !1, i) - .5)),
                        a && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                            t = k.css(e, s)),
                        rt(0, t, a)
                }
            }
        }),
        k.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function (e, t) {
            if (t)
                return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (i, o) {
            k.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
                "margin" !== i && (k.cssHooks[i + o].set = rt)
        }),
        k.fn.extend({
            css: function (e, t) {
                return F(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = ze(e),
                            i = t.length; a < i; a++)
                            o[t[a]] = k.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((k.Tween = at).prototype = {
            constructor: at,
            init: function (e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || k.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (k.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = at.propHooks[this.prop];
                return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : at.propHooks._default.set(this),
                    this
            }
        }).init.prototype = at.prototype,
        (at.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = at.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        k.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        k.fx = at.prototype.init,
        k.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
    function dt() {
        ut && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(dt) : C.setTimeout(dt, k.fx.interval),
            k.fx.tick())
    }
    function ht() {
        return C.setTimeout(function () {
            st = void 0
        }),
            st = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function yt(o, e, t) {
        var n, a, r = 0, i = yt.prefilters.length, s = k.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a)
                return !1;
            for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
                n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l]),
                    !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: st || ht(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                    n
            },
            stop: function (e) {
                var t = 0
                    , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                    this
            }
        }), c = l.props;
        for (function (e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = U(n)],
                    o = e[n],
                    Array.isArray(o) && (i = o[1],
                        o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                        delete e[n]),
                    (a = k.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o),
                        delete e[r],
                        o)
                        n in e || (e[n] = o[n],
                            t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts))
                return x(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                    n;
        return k.map(c, vt, l),
            x(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            k.fx.timer(k.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
    }
    k.Animation = k.extend(yt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, ne.exec(t), n),
                    n
            }
            ]
        },
        tweener: function (e, t) {
            for (var n, r = 0, i = (e = x(e) ? (t = e,
                ["*"]) : e.match(P)).length; r < i; r++)
                n = e[r],
                    yt.tweeners[n] = yt.tweeners[n] || [],
                    yt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ie(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function () {
                    a.unqueued || s()
                }
            ),
                a.unqueued++,
                p.always(function () {
                    p.always(function () {
                        a.unqueued--,
                            k.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                if (i = t[r],
                    ft.test(i)) {
                    if (delete t[r],
                        o = o || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (l = v && v.display) && (l = Y.get(e, "display")),
                    "none" === (c = k.css(e, "display")) && (l ? c = l : (se([e], !0),
                        l = e.style.display || l,
                        c = k.css(e, "display"),
                        se([e]))),
                    ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }),
                        null == l && (c = h.display,
                            l = "none" === c ? "" : c)),
                        h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                        p.always(function () {
                            h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                        })),
                    u = !1,
                    d)
                    u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                        o && (v.hidden = !g),
                        g && se([e], !0),
                        p.done(function () {
                            for (r in g || se([e]),
                                Y.remove(e, "fxshow"),
                                d)
                                k.style(e, r, d[r])
                        })),
                        u = vt(g ? v[r] : 0, r, p),
                        r in v || (v[r] = u.start,
                            g && (u.end = u.start,
                                u.start = 0))
        }
        ],
        prefilter: function (e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }),
        k.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? k.extend({}, e) : {
                complete: n || !n && t || x(e) && e,
                duration: e,
                easing: n && t || t && !x(t) && t
            };
            return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function () {
                    x(r.old) && r.old.call(this),
                        r.queue && k.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        k.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ie).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (t, e, n, r) {
                function i() {
                    var e = yt(this, k.extend({}, t), a);
                    (o || Y.get(this, "finish")) && e.stop(!0)
                }
                var o = k.isEmptyObject(t)
                    , a = k.speed(e, n, r);
                return i.finish = i,
                    o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
            },
            stop: function (i, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(o)
                }
                return "string" != typeof i && (o = e,
                    e = i,
                    i = void 0),
                    e && !1 !== i && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0
                            , t = null != i && i + "queueHooks"
                            , n = k.timers
                            , r = Y.get(this);
                        if (t)
                            r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && pt.test(t) && a(r[t]);
                        for (t = n.length; t--;)
                            n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                                e = !1,
                                n.splice(t, 1));
                        !e && o || k.dequeue(this, i)
                    })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                        for (t.finish = !0,
                            k.queue(this, a, []),
                            r && r.stop && r.stop.call(this, !0),
                            e = i.length; e--;)
                            i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                                i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        k.each(["toggle", "show", "hide"], function (e, r) {
            var i = k.fn[r];
            k.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
            }
        }),
        k.each({
            slideDown: gt("show"),
            slideUp: gt("hide"),
            slideToggle: gt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, r) {
            k.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        k.timers = [],
        k.fx.tick = function () {
            var e, t = 0, n = k.timers;
            for (st = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(),
                st = void 0
        }
        ,
        k.fx.timer = function (e) {
            k.timers.push(e),
                k.fx.start()
        }
        ,
        k.fx.interval = 13,
        k.fx.start = function () {
            ut || (ut = !0,
                dt())
        }
        ,
        k.fx.stop = function () {
            ut = null
        }
        ,
        k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        k.fn.delay = function (r, e) {
            return r = k.fx && k.fx.speeds[r] || r,
                e = e || "fx",
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n)
                    }
                })
        }
        ,
        lt = E.createElement("input"),
        ct = E.createElement("select").appendChild(E.createElement("option")),
        lt.type = "checkbox",
        m.checkOn = "" !== lt.value,
        m.optSelected = ct.selected,
        (lt = E.createElement("input")).value = "t",
        lt.type = "radio",
        m.radioValue = "t" === lt.value;
    var mt, xt = k.expr.attrHandle;
    k.fn.extend({
        attr: function (e, t) {
            return F(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }),
        k.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? mt : void 0)),
                        void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!m.radioValue && "radio" === t && D(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0, i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];)
                        e.removeAttribute(n)
            }
        }),
        mt = {
            set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = xt[t] || k.find.attr;
            xt[t] = function (e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = xt[o],
                    xt[o] = r,
                    r = null != a(e, t, n) ? o : null,
                    xt[o] = i),
                    r
            }
        });
    var bt = /^(?:input|select|textarea|button)$/i
        , wt = /^(?:a|area)$/i;
    function Tt(e) {
        return (e.match(P) || []).join(" ")
    }
    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Et(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    k.fn.extend({
        prop: function (e, t) {
            return F(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e]
            })
        }
    }),
        k.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                        i = k.propHooks[t]),
                        void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        m.optSelected || (k.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            k.propFix[this.toLowerCase()] = this
        }),
        k.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a, s, u = 0;
                if (x(t))
                    return this.each(function (e) {
                        k(this).addClass(t.call(this, e, Ct(this)))
                    });
                if ((e = Et(t)).length)
                    for (; n = this[u++];)
                        if (i = Ct(n),
                            r = 1 === n.nodeType && " " + Tt(i) + " ") {
                            for (a = 0; o = e[a++];)
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = Tt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function (t) {
                var e, n, r, i, o, a, s, u = 0;
                if (x(t))
                    return this.each(function (e) {
                        k(this).removeClass(t.call(this, e, Ct(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = Et(t)).length)
                    for (; n = this[u++];)
                        if (i = Ct(n),
                            r = 1 === n.nodeType && " " + Tt(i) + " ") {
                            for (a = 0; o = e[a++];)
                                for (; -1 < r.indexOf(" " + o + " ");)
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = Tt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function (i, t) {
                var o = typeof i
                    , a = "string" == o || Array.isArray(i);
                return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function (e) {
                    k(this).toggleClass(i.call(this, e, Ct(this), t), t)
                }) : this.each(function () {
                    var e, t, n, r;
                    if (a)
                        for (t = 0,
                            n = k(this),
                            r = Et(i); e = r[t++];)
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else
                        void 0 !== i && "boolean" != o || ((e = Ct(this)) && Y.set(this, "__className__", e),
                            this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
    var kt = /\r/g;
    k.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = x(n),
                this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })),
                        (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
        }
    }),
        k.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : Tt(k.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (t = k(n).val(),
                                    a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;)
                            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        k.each(["radio", "checkbox"], function () {
            k.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < k.inArray(k(e).val(), t)
                }
            },
                m.checkOn || (k.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        }),
        m.focusin = "onfocusin" in C;
    function St(e) {
        e.stopPropagation()
    }
    var Dt = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
                3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
                    h.sort()),
                    u = d.indexOf(":") < 0 && "on" + d,
                    (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3,
                    e.namespace = h.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = n),
                    t = null == t ? [e] : k.makeArray(t, [e]),
                    c = k.event.special[d] || {},
                    r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !g(n)) {
                    for (s = c.delegateType || d,
                        Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                            a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0; (o = p[i++]) && !e.isPropagationStopped();)
                    f = o,
                        e.type = 1 < i ? s : c.bindType || d,
                        (l = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                            !1 === e.result && e.preventDefault());
                return e.type = d,
                    r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && x(n[d]) && !g(n) && ((a = n[u]) && (n[u] = null),
                        k.event.triggered = d,
                        e.isPropagationStopped() && f.addEventListener(d, St),
                        n[d](),
                        e.isPropagationStopped() && f.removeEventListener(d, St),
                        k.event.triggered = void 0,
                        a && (n[u] = a)),
                    e.result
            }
        },
        simulate: function (e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
        k.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    k.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n)
                    return k.event.trigger(e, t, n, !0)
            }
        }),
        m.focusin || k.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, r) {
            function i(e) {
                k.event.simulate(r, e.target, k.event.fix(e))
            }
            k.event.special[r] = {
                setup: function () {
                    var e = this.ownerDocument || this
                        , t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0),
                        Y.access(e, r, (t || 0) + 1)
                },
                teardown: function () {
                    var e = this.ownerDocument || this
                        , t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                        Y.remove(e, r))
                }
            }
        });
    var Nt = C.location
        , At = Date.now()
        , jt = /\?/;
    k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
            t
    }
        ;
    var qt = /\[\]$/
        , Lt = /\r?\n/g
        , Ht = /^(?:submit|button|image|reset|file)$/i
        , Ot = /^(?:input|select|textarea|keygen)/i;
    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function (e, t) {
                r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Pt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function (e, t) {
        function n(e, t) {
            var n = x(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var r, i = [];
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function () {
                n(this.name, this.value)
            });
        else
            for (r in e)
                Pt(r, e[r], t, n);
        return i.join("&")
    }
        ,
        k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !ue.test(e))
                }).map(function (e, t) {
                    var n = k(this).val();
                    return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Lt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Lt, "\r\n")
                    }
                }).get()
            }
        });
    var Mt = /%20/g
        , Rt = /#.*$/
        , It = /([?&])_=[^&]*/
        , Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , $t = /^(?:GET|HEAD)$/
        , Bt = /^\/\//
        , Ft = {}
        , _t = {}
        , zt = "*/".concat("*")
        , Xt = E.createElement("a");
    function Ut(o) {
        return function (e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (x(t))
                for (; n = i[r++];)
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Vt(t, i, o, a) {
        var s = {}
            , u = t === _t;
        function l(e) {
            var r;
            return s[e] = !0,
                k.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                        l(n),
                        !1)
                }),
                r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Gt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && k.extend(!0, e, r),
            e
    }
    Xt.href = Nt.href,
        k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Nt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Gt(Gt(e, k.ajaxSettings), t) : Gt(k.ajaxSettings, e)
            },
            ajaxPrefilter: Ut(Ft),
            ajaxTransport: Ut(_t),
            ajax: function (e, t) {
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = Wt.exec(p);)
                                    n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                            a[e] = t),
                            this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e),
                            this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t),
                            l(0, t),
                            this
                    }
                };
                if (x.promise(T),
                    v.url = ((e || v.url || Nt.href) + "").replace(Bt, Nt.protocol + "//"),
                    v.type = t.method || t.type || v.method || v.type,
                    v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
                    null == v.crossDomain) {
                    r = E.createElement("a");
                    try {
                        r.href = v.url,
                            r.href = r.href,
                            v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        v.crossDomain = !0
                    }
                }
                if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
                    Vt(Ft, v, t, T),
                    h)
                    return T;
                for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                    v.type = v.type.toUpperCase(),
                    v.hasContent = !$t.test(v.type),
                    f = v.url.replace(Rt, ""),
                    v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length),
                        v.data && (v.processData || "string" == typeof v.data) && (f += (jt.test(f) ? "&" : "?") + v.data,
                            delete v.data),
                        !1 === v.cache && (f = f.replace(It, "$1"),
                            o = (jt.test(f) ? "&" : "?") + "_=" + At++ + o),
                        v.url = f + o),
                    v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
                        k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
                    (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                    T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]),
                    v.headers)
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (u = "abort",
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    c = Vt(_t, v, t, T)) {
                    if (T.readyState = 1,
                        g && m.trigger("ajaxSend", [T, v]),
                        h)
                        return T;
                    v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                        T.abort("timeout")
                    }, v.timeout));
                    try {
                        h = !1,
                            c.send(a, l)
                    } catch (e) {
                        if (h)
                            throw e;
                        l(-1, e)
                    }
                } else
                    l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0,
                        d && C.clearTimeout(d),
                        c = void 0,
                        p = r || "",
                        T.readyState = 0 < e ? 4 : 0,
                        i = 200 <= e && e < 300 || 304 === e,
                        n && (s = function (e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
                                u.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n)
                                o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a = a || i
                                }
                                o = o || a
                            }
                            if (o)
                                return o !== u[0] && u.unshift(o),
                                    n[o]
                        }(v, T, n)),
                        s = function (e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                        c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws)
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(v, s, T, i),
                        i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                            (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                            204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                                o = s.data,
                                i = !(a = s.error))) : (a = l,
                                    !e && l || (l = "error",
                                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || l) + "",
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        w = void 0,
                        g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                        g && (m.trigger("ajaxComplete", [T, v]),
                            --k.active || k.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function (e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return k.get(e, void 0, t, "script")
            }
        }),
        k.each(["get", "post"], function (e, i) {
            k[i] = function (e, t, n, r) {
                return x(t) && (r = r || n,
                    n = t,
                    t = void 0),
                    k.ajax(k.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, k.isPlainObject(e) && e))
            }
        }),
        k._evalUrl = function (e) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        k.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (x(e) && (e = e.call(this[0])),
                    t = k(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function () {
                        for (var e = this; e.firstElementChild;)
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function (n) {
                return x(n) ? this.each(function (e) {
                    k(this).wrapInner(n.call(this, e))
                }) : this.each(function () {
                    var e = k(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function (t) {
                var n = x(t);
                return this.each(function (e) {
                    k(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    k(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        k.expr.pseudos.hidden = function (e) {
            return !k.expr.pseudos.visible(e)
        }
        ,
        k.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        k.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest
            } catch (e) { }
        }
        ;
    var Yt = {
        0: 200,
        1223: 204
    }
        , Qt = k.ajaxSettings.xhr();
    m.cors = !!Qt && "withCredentials" in Qt,
        m.ajax = Qt = !!Qt,
        k.ajaxTransport(function (i) {
            var o, a;
            if (m.cors || Qt && !i.crossDomain)
                return {
                    send: function (e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password),
                            i.xhrFields)
                            for (n in i.xhrFields)
                                r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                            i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                            e)
                            r.setRequestHeader(n, e[n]);
                        o = function (e) {
                            return function () {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                    "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                        binary: r.response
                                    } : {
                                        text: r.responseText
                                    }, r.getAllResponseHeaders()))
                            }
                        }
                            ,
                            r.onload = o(),
                            a = r.onerror = r.ontimeout = o("error"),
                            void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                                4 === r.readyState && C.setTimeout(function () {
                                    o && a()
                                })
                            }
                            ,
                            o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function () {
                        o && o()
                    }
                }
        }),
        k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return k.globalEval(e),
                        e
                }
            }
        }),
        k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        k.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain)
                return {
                    send: function (e, t) {
                        r = k("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function (e) {
                            r.remove(),
                                i = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                            E.head.appendChild(r[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
        });
    var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Kt.pop() || k.expando + "_" + At++;
            return this[e] = !0,
                e
        }
    }),
        k.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function () {
                        return o || k.error(r + " was not called"),
                            o[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    i = C[r],
                    C[r] = function () {
                        o = arguments
                    }
                    ,
                    n.always(function () {
                        void 0 === i ? k(C).removeProp(r) : C[r] = i,
                            e[r] && (e.jsonpCallback = t.jsonpCallback,
                                Kt.push(r)),
                            o && x(i) && i(o[0]),
                            o = i = void 0
                    }),
                    "script"
        }),
        m.createHTMLDocument = ((Jt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === Jt.childNodes.length),
        k.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1),
                t || (m.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
                    t.head.appendChild(r)) : t = E),
                o = !n && [],
                (i = N.exec(e)) ? [t.createElement(i[1])] : (i = ye([e], t, o),
                    o && o.length && k(o).remove(),
                    k.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        k.fn.load = function (e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return -1 < s && (r = Tt(e.slice(s)),
                e = e.slice(0, s)),
                x(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                0 < a.length && k.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments,
                        a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
        }
        ,
        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            k.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        k.expr.pseudos.animated = function (t) {
            return k.grep(k.timers, function (e) {
                return t === e.elem
            }).length
        }
        ,
        k.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
                "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    o = k.css(e, "top"),
                    u = k.css(e, "left"),
                    i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
                        r.left) : (a = parseFloat(o) || 0,
                            parseFloat(u) || 0),
                    x(t) && (t = t.call(e, n, k.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f)
            }
        },
        k.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) {
                        k.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === k.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");)
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                            i.left += k.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - k.css(r, "marginTop", !0),
                        left: t.left - i.left - k.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === k.css(e, "position");)
                        e = e.offsetParent;
                    return e || me
                })
            }
        }),
        k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, i) {
            var o = "pageYOffset" === i;
            k.fn[t] = function (e) {
                return F(this, function (e, t, n) {
                    var r;
                    if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === n)
                        return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        k.each(["top", "left"], function (e, n) {
            k.cssHooks[n] = Ye(m.pixelPosition, function (e, t) {
                if (t)
                    return t = Ge(e, n),
                        _e.test(t) ? k(e).position()[n] + "px" : t
            })
        }),
        k.each({
            Height: "height",
            Width: "width"
        }, function (a, s) {
            k.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function (r, o) {
                k.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                        , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return F(this, function (e, t, n) {
                        var r;
                        return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }),
        k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            k.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        k.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        k.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        k.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                x(e))
                return r = s.call(arguments, 2),
                    (i = function () {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || k.guid++,
                    i
        }
        ,
        k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0)
        }
        ,
        k.isArray = Array.isArray,
        k.parseJSON = JSON.parse,
        k.nodeName = D,
        k.isFunction = x,
        k.isWindow = g,
        k.camelCase = U,
        k.type = w,
        k.now = Date.now,
        k.isNumeric = function (e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return k
        });
    var en = C.jQuery
        , tn = C.$;
    return k.noConflict = function (e) {
        return C.$ === k && (C.$ = tn),
            e && C.jQuery === k && (C.jQuery = en),
            k
    }
        ,
        e || (C.jQuery = C.$ = k),
        k
});
