function popupClose() {
    $(".popup-frame").removeClass("active"),
        $("#elName").text(""),
        $("#elId").val(""),
        $(".black-layer").removeClass("active")
}
function subDropMenuOpen(t, e) { }
function campaignBarClose() {
    $(".campaign-bar").addClass("closed"),
        localStorage.setItem("campaignBarClose", "closed")
}
function campaignBarOpen() {
    $(".campaign-bar").removeClass("closed"),
        localStorage.setItem("campaignBarClose", "opened")
}
function cookieBarClose() {
    $(".cookie-policy").remove(),
        $(".cookie-policy").removeClass("open"),
        localStorage.setItem("cookieBarClose", "closed")
}
function cookieBarOpen() {
    localStorage.setItem("cookieBarClose", "opened")
}
function popupOpen(t, e, i, s) {
    $(t).addClass("active"),
        $(".black-layer").addClass("active"),
        "ssl" == e && ($("#sslName").text(i),
            $("#sslId").val(s)),
        "ssl" != e && ($("#elName").text(i),
            $("#elId").val(s))
}
function alert(t, e) {
    Swal.fire({
        title: t,
        confirmButtonColor: "#ee7633",
        confirmButtonText: "Tamam",
        onClose: function () { }
    })
}
function coloredExtensions(t, e, i) {
    $(".page-content .query-area-wrapper .domain-name").show(),
        $(".page-content .query-area-wrapper").css("background-color", e),
        $(".page-content .query-area-wrapper > .title").text(t),
        $(".page-content .query-area-wrapper .domain-extension").text(i)
}
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (d) {
    function t() {
        for (var t = u.scrollTop(), e = p.height(), i = e - m, s = i < t ? i - t : 0, n = 0, a = f.length; n < a; n++) {
            var o = f[n]
                , r = o.stickyWrapper.offset().top - o.topSpacing - s;
            if (o.stickyWrapper.css("height", o.stickyElement.outerHeight()),
                t <= r)
                null !== o.currentTop && (o.stickyElement.css({
                    width: "",
                    position: "",
                    top: "",
                    "z-index": ""
                }),
                    o.stickyElement.parent().removeClass(o.className),
                    o.stickyElement.trigger("sticky-end", [o]),
                    o.currentTop = null);
            else {
                var l, h = e - o.stickyElement.outerHeight() - o.topSpacing - o.bottomSpacing - t - s;
                if (h < 0 ? h += o.topSpacing : h = o.topSpacing,
                    o.currentTop !== h)
                    o.getWidthFrom ? (padding = o.stickyElement.innerWidth() - o.stickyElement.width(),
                        l = d(o.getWidthFrom).width() - padding || null) : o.widthFromWrapper && (l = o.stickyWrapper.width()),
                        null == l && (l = o.stickyElement.width()),
                        o.stickyElement.css("width", l).css("position", "fixed").css("top", h).css("z-index", o.zIndex),
                        o.stickyElement.parent().addClass(o.className),
                        null === o.currentTop ? o.stickyElement.trigger("sticky-start", [o]) : o.stickyElement.trigger("sticky-update", [o]),
                        o.currentTop === o.topSpacing && o.currentTop > h || null === o.currentTop && h < o.topSpacing ? o.stickyElement.trigger("sticky-bottom-reached", [o]) : null !== o.currentTop && h === o.topSpacing && o.currentTop < h && o.stickyElement.trigger("sticky-bottom-unreached", [o]),
                        o.currentTop = h;
                var c = o.stickyWrapper.parent();
                o.stickyElement.offset().top + o.stickyElement.outerHeight() >= c.offset().top + c.outerHeight() && o.stickyElement.offset().top <= o.topSpacing ? o.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : o.stickyElement.css("position", "fixed").css("top", h).css("bottom", "").css("z-index", o.zIndex)
            }
        }
    }
    function e() {
        m = u.height();
        for (var t = 0, e = f.length; t < e; t++) {
            var i = f[t]
                , s = null;
            i.getWidthFrom ? i.responsiveWidth && (s = d(i.getWidthFrom).width()) : i.widthFromWrapper && (s = i.stickyWrapper.width()),
                null != s && i.stickyElement.css("width", s)
        }
    }
    var i = Array.prototype.slice
        , s = Array.prototype.splice
        , r = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            widthFromWrapper: !0,
            responsiveWidth: !1,
            zIndex: "inherit"
        }
        , u = d(window)
        , p = d(document)
        , f = []
        , m = u.height()
        , l = {
            init: function (o) {
                return this.each(function () {
                    var t = d.extend({}, r, o)
                        , e = d(this)
                        , i = e.attr("id")
                        , s = i ? i + "-" + r.wrapperClassName : r.wrapperClassName
                        , n = d("<div></div>").attr("id", s).addClass(t.wrapperClassName);
                    e.wrapAll(function () {
                        if (0 == d(this).parent("#" + s).length)
                            return n
                    });
                    var a = e.parent();
                    t.center && a.css({
                        width: e.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }),
                        "right" === e.css("float") && e.css({
                            float: "none"
                        }).parent().css({
                            float: "right"
                        }),
                        t.stickyElement = e,
                        t.stickyWrapper = a,
                        t.currentTop = null,
                        f.push(t),
                        l.setWrapperHeight(this),
                        l.setupChangeListeners(this)
                })
            },
            setWrapperHeight: function (t) {
                var e = d(t)
                    , i = e.parent();
                i && i.css("height", e.outerHeight())
            },
            setupChangeListeners: function (e) {
                window.MutationObserver ? new window.MutationObserver(function (t) {
                    (t[0].addedNodes.length || t[0].removedNodes.length) && l.setWrapperHeight(e)
                }
                ).observe(e, {
                    subtree: !0,
                    childList: !0
                }) : window.addEventListener ? (e.addEventListener("DOMNodeInserted", function () {
                    l.setWrapperHeight(e)
                }, !1),
                    e.addEventListener("DOMNodeRemoved", function () {
                        l.setWrapperHeight(e)
                    }, !1)) : window.attachEvent && (e.attachEvent("onDOMNodeInserted", function () {
                        l.setWrapperHeight(e)
                    }),
                        e.attachEvent("onDOMNodeRemoved", function () {
                            l.setWrapperHeight(e)
                        }))
            },
            update: t,
            unstick: function (t) {
                return this.each(function () {
                    for (var t = d(this), e = -1, i = f.length; 0 < i--;)
                        f[i].stickyElement.get(0) === this && (s.call(f, i, 1),
                            e = i);
                    -1 !== e && (t.unwrap(),
                        t.css({
                            width: "",
                            position: "",
                            top: "",
                            float: "",
                            "z-index": ""
                        }))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", t, !1),
        window.addEventListener("resize", e, !1)) : window.attachEvent && (window.attachEvent("onscroll", t),
            window.attachEvent("onresize", e)),
        d.fn.sticky = function (t) {
            return l[t] ? l[t].apply(this, i.call(arguments, 1)) : "object" != typeof t && t ? void d.error("Method " + t + " does not exist on jQuery.sticky") : l.init.apply(this, arguments)
        }
        ,
        d.fn.unstick = function (t) {
            return l[t] ? l[t].apply(this, i.call(arguments, 1)) : "object" != typeof t && t ? void d.error("Method " + t + " does not exist on jQuery.sticky") : l.unstick.apply(this, arguments)
        }
        ,
        d(function () {
            setTimeout(t, 0)
        })
}),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (k) {
        function t() {
            this._curInst = null,
                this._keyEvent = !1,
                this._disabledInputs = [],
                this._datepickerShowing = !1,
                this._inDialog = !1,
                this._mainDivId = "ui-datepicker-div",
                this._inlineClass = "ui-datepicker-inline",
                this._appendClass = "ui-datepicker-append",
                this._triggerClass = "ui-datepicker-trigger",
                this._dialogClass = "ui-datepicker-dialog",
                this._disableClass = "ui-datepicker-disabled",
                this._unselectableClass = "ui-datepicker-unselectable",
                this._currentClass = "ui-datepicker-current-day",
                this._dayOverClass = "ui-datepicker-days-cell-over",
                this.regional = [],
                this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                },
                this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                },
                k.extend(this._defaults, this.regional[""]),
                this.regional.en = k.extend(!0, {}, this.regional[""]),
                this.regional["en-US"] = k.extend(!0, {}, this.regional.en),
                this.dpDiv = i(k("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }
        function i(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", e, function () {
                k(this).removeClass("ui-state-hover"),
                    -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).removeClass("ui-datepicker-prev-hover"),
                    -1 !== this.className.indexOf("ui-datepicker-next") && k(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", e, a)
        }
        function a() {
            k.datepicker._isDisabledDatepicker(it.inline ? it.dpDiv.parent()[0] : it.input[0]) || (k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                k(this).addClass("ui-state-hover"),
                -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).addClass("ui-datepicker-prev-hover"),
                -1 !== this.className.indexOf("ui-datepicker-next") && k(this).addClass("ui-datepicker-next-hover"))
        }
        function d(t, e) {
            for (var i in k.extend(t, e),
                e)
                null == e[i] && (t[i] = e[i]);
            return t
        }
        function e(e) {
            return function () {
                var t = this.element.val();
                e.apply(this, arguments),
                    this._refresh(),
                    t !== this.element.val() && this._trigger("change")
            }
        }
        k.ui = k.ui || {},
            k.ui.version = "1.12.1";
        var s, n, x, C, o, r, l, h, c, T, u, p = 0, f = Array.prototype.slice;
        function S(t, e, i) {
            return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
        }
        function E(t, e) {
            return parseInt(k.css(t, e), 10) || 0
        }
        k.cleanData = (u = k.cleanData,
            function (t) {
                var e, i, s;
                for (s = 0; null != (i = t[s]); s++)
                    try {
                        (e = k._data(i, "events")) && e.remove && k(i).triggerHandler("remove")
                    } catch (t) { }
                u(t)
            }
        ),
            k.widget = function (t, i, e) {
                var s, n, a, o = {}, r = t.split(".")[0], l = r + "-" + (t = t.split(".")[1]);
                return e || (e = i,
                    i = k.Widget),
                    k.isArray(e) && (e = k.extend.apply(null, [{}].concat(e))),
                    k.expr[":"][l.toLowerCase()] = function (t) {
                        return !!k.data(t, l)
                    }
                    ,
                    k[r] = k[r] || {},
                    s = k[r][t],
                    n = k[r][t] = function (t, e) {
                        return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new n(t, e)
                    }
                    ,
                    k.extend(n, s, {
                        version: e.version,
                        _proto: k.extend({}, e),
                        _childConstructors: []
                    }),
                    (a = new i).options = k.widget.extend({}, a.options),
                    k.each(e, function (e, s) {
                        return k.isFunction(s) ? void (o[e] = function () {
                            var t, e = this._super, i = this._superApply;
                            return this._super = n,
                                this._superApply = a,
                                t = s.apply(this, arguments),
                                this._super = e,
                                this._superApply = i,
                                t
                        }
                        ) : void (o[e] = s);
                        function n() {
                            return i.prototype[e].apply(this, arguments)
                        }
                        function a(t) {
                            return i.prototype[e].apply(this, t)
                        }
                    }),
                    n.prototype = k.widget.extend(a, {
                        widgetEventPrefix: s && a.widgetEventPrefix || t
                    }, o, {
                        constructor: n,
                        namespace: r,
                        widgetName: t,
                        widgetFullName: l
                    }),
                    s ? (k.each(s._childConstructors, function (t, e) {
                        var i = e.prototype;
                        k.widget(i.namespace + "." + i.widgetName, n, e._proto)
                    }),
                        delete s._childConstructors) : i._childConstructors.push(n),
                    k.widget.bridge(t, n),
                    n
            }
            ,
            k.widget.extend = function (t) {
                for (var e, i, s = f.call(arguments, 1), n = 0, a = s.length; n < a; n++)
                    for (e in s[n])
                        i = s[n][e],
                            s[n].hasOwnProperty(e) && void 0 !== i && (t[e] = k.isPlainObject(i) ? k.isPlainObject(t[e]) ? k.widget.extend({}, t[e], i) : k.widget.extend({}, i) : i);
                return t
            }
            ,
            k.widget.bridge = function (a, e) {
                var o = e.prototype.widgetFullName || a;
                k.fn[a] = function (i) {
                    var t = "string" == typeof i
                        , s = f.call(arguments, 1)
                        , n = this;
                    return t ? this.length || "instance" !== i ? this.each(function () {
                        var t, e = k.data(this, o);
                        return "instance" === i ? (n = e,
                            !1) : e ? k.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t,
                                !1) : void 0 : k.error("no such method '" + i + "' for " + a + " widget instance") : k.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'")
                    }) : n = void 0 : (s.length && (i = k.widget.extend.apply(null, [i].concat(s))),
                        this.each(function () {
                            var t = k.data(this, o);
                            t ? (t.option(i || {}),
                                t._init && t._init()) : k.data(this, o, new e(i, this))
                        })),
                        n
                }
            }
            ,
            k.Widget = function () { }
            ,
            k.Widget._childConstructors = [],
            k.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function (t, e) {
                    e = k(e || this.defaultElement || this)[0],
                        this.element = k(e),
                        this.uuid = p++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.bindings = k(),
                        this.hoverable = k(),
                        this.focusable = k(),
                        this.classesElementLookup = {},
                        e !== this && (k.data(e, this.widgetFullName, this),
                            this._on(!0, this.element, {
                                remove: function (t) {
                                    t.target === e && this.destroy()
                                }
                            }),
                            this.document = k(e.style ? e.ownerDocument : e.document || e),
                            this.window = k(this.document[0].defaultView || this.document[0].parentWindow)),
                        this.options = k.widget.extend({}, this.options, this._getCreateOptions(), t),
                        this._create(),
                        this.options.disabled && this._setOptionDisabled(this.options.disabled),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                },
                _getCreateOptions: function () {
                    return {}
                },
                _getCreateEventData: k.noop,
                _create: k.noop,
                _init: k.noop,
                destroy: function () {
                    var i = this;
                    this._destroy(),
                        k.each(this.classesElementLookup, function (t, e) {
                            i._removeClass(e, t)
                        }),
                        this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                        this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                        this.bindings.off(this.eventNamespace)
                },
                _destroy: k.noop,
                widget: function () {
                    return this.element
                },
                option: function (t, e) {
                    var i, s, n, a = t;
                    if (0 === arguments.length)
                        return k.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (a = {},
                            t = (i = t.split(".")).shift(),
                            i.length) {
                            for (s = a[t] = k.widget.extend({}, this.options[t]),
                                n = 0; i.length - 1 > n; n++)
                                s[i[n]] = s[i[n]] || {},
                                    s = s[i[n]];
                            if (t = i.pop(),
                                1 === arguments.length)
                                return void 0 === s[t] ? null : s[t];
                            s[t] = e
                        } else {
                            if (1 === arguments.length)
                                return void 0 === this.options[t] ? null : this.options[t];
                            a[t] = e
                        }
                    return this._setOptions(a),
                        this
                },
                _setOptions: function (t) {
                    var e;
                    for (e in t)
                        this._setOption(e, t[e]);
                    return this
                },
                _setOption: function (t, e) {
                    return "classes" === t && this._setOptionClasses(e),
                        this.options[t] = e,
                        "disabled" === t && this._setOptionDisabled(e),
                        this
                },
                _setOptionClasses: function (t) {
                    var e, i, s;
                    for (e in t)
                        s = this.classesElementLookup[e],
                            t[e] !== this.options.classes[e] && s && s.length && (i = k(s.get()),
                                this._removeClass(s, e),
                                i.addClass(this._classes({
                                    element: i,
                                    keys: e,
                                    classes: t,
                                    add: !0
                                })))
                },
                _setOptionDisabled: function (t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
                        t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
                            this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function () {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function () {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function (n) {
                    function t(t, e) {
                        var i, s;
                        for (s = 0; t.length > s; s++)
                            i = o.classesElementLookup[t[s]] || k(),
                                i = n.add ? k(k.unique(i.get().concat(n.element.get()))) : k(i.not(n.element).get()),
                                o.classesElementLookup[t[s]] = i,
                                a.push(t[s]),
                                e && n.classes[t[s]] && a.push(n.classes[t[s]])
                    }
                    var a = []
                        , o = this;
                    return n = k.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, n),
                        this._on(n.element, {
                            remove: "_untrackClassesElement"
                        }),
                        n.keys && t(n.keys.match(/\S+/g) || [], !0),
                        n.extra && t(n.extra.match(/\S+/g) || []),
                        a.join(" ")
                },
                _untrackClassesElement: function (i) {
                    var s = this;
                    k.each(s.classesElementLookup, function (t, e) {
                        -1 !== k.inArray(i.target, e) && (s.classesElementLookup[t] = k(e.not(i.target).get()))
                    })
                },
                _removeClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !1)
                },
                _addClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !0)
                },
                _toggleClass: function (t, e, i, s) {
                    s = "boolean" == typeof s ? s : i;
                    var n = "string" == typeof t || null === t
                        , a = {
                            extra: n ? e : i,
                            keys: n ? t : e,
                            element: n ? this.element : t,
                            add: s
                        };
                    return a.element.toggleClass(this._classes(a), s),
                        this
                },
                _on: function (o, r, t) {
                    var l, h = this;
                    "boolean" != typeof o && (t = r,
                        r = o,
                        o = !1),
                        t ? (r = l = k(r),
                            this.bindings = this.bindings.add(r)) : (t = r,
                                r = this.element,
                                l = this.widget()),
                        k.each(t, function (t, e) {
                            function i() {
                                return o || !0 !== h.options.disabled && !k(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? h[e] : e).apply(h, arguments) : void 0
                            }
                            "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || k.guid++);
                            var s = t.match(/^([\w:-]*)\s*(.*)$/)
                                , n = s[1] + h.eventNamespace
                                , a = s[2];
                            a ? l.on(n, a, i) : r.on(n, i)
                        })
                },
                _off: function (t, e) {
                    e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        t.off(e).off(e),
                        this.bindings = k(this.bindings.not(t).get()),
                        this.focusable = k(this.focusable.not(t).get()),
                        this.hoverable = k(this.hoverable.not(t).get())
                },
                _delay: function (t, e) {
                    var i = this;
                    return setTimeout(function () {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                    }, e || 0)
                },
                _hoverable: function (t) {
                    this.hoverable = this.hoverable.add(t),
                        this._on(t, {
                            mouseenter: function (t) {
                                this._addClass(k(t.currentTarget), null, "ui-state-hover")
                            },
                            mouseleave: function (t) {
                                this._removeClass(k(t.currentTarget), null, "ui-state-hover")
                            }
                        })
                },
                _focusable: function (t) {
                    this.focusable = this.focusable.add(t),
                        this._on(t, {
                            focusin: function (t) {
                                this._addClass(k(t.currentTarget), null, "ui-state-focus")
                            },
                            focusout: function (t) {
                                this._removeClass(k(t.currentTarget), null, "ui-state-focus")
                            }
                        })
                },
                _trigger: function (t, e, i) {
                    var s, n, a = this.options[t];
                    if (i = i || {},
                        (e = k.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
                        e.target = this.element[0],
                        n = e.originalEvent)
                        for (s in n)
                            s in e || (e[s] = n[s]);
                    return this.element.trigger(e, i),
                        !(k.isFunction(a) && !1 === a.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
                }
            },
            k.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function (a, o) {
                k.Widget.prototype["_" + a] = function (e, t, i) {
                    "string" == typeof t && (t = {
                        effect: t
                    });
                    var s, n = t ? !0 === t || "number" == typeof t ? o : t.effect || o : a;
                    "number" == typeof (t = t || {}) && (t = {
                        duration: t
                    }),
                        s = !k.isEmptyObject(t),
                        t.complete = i,
                        t.delay && e.delay(t.delay),
                        s && k.effects && k.effects.effect[n] ? e[a](t) : n !== a && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function (t) {
                            k(this)[a](),
                                i && i.call(e[0]),
                                t()
                        })
                }
            }),
            k.widget,
            x = Math.max,
            C = Math.abs,
            o = /left|center|right/,
            r = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/,
            h = /^\w+/,
            c = /%$/,
            T = k.fn.position,
            k.position = {
                scrollbarWidth: function () {
                    if (void 0 !== n)
                        return n;
                    var t, e, i = k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), s = i.children()[0];
                    return k("body").append(i),
                        t = s.offsetWidth,
                        i.css("overflow", "scroll"),
                        t === (e = s.offsetWidth) && (e = i[0].clientWidth),
                        i.remove(),
                        n = t - e
                },
                getScrollInfo: function (t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                        , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                        , s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? k.position.scrollbarWidth() : 0,
                        height: s ? k.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function (t) {
                    var e = k(t || window)
                        , i = k.isWindow(e[0])
                        , s = !!e[0] && 9 === e[0].nodeType;
                    return {
                        element: e,
                        isWindow: i,
                        isDocument: s,
                        offset: i || s ? {
                            left: 0,
                            top: 0
                        } : k(t).offset(),
                        scrollLeft: e.scrollLeft(),
                        scrollTop: e.scrollTop(),
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }
                }
            },
            k.fn.position = function (d) {
                if (!d || !d.of)
                    return T.apply(this, arguments);
                d = k.extend({}, d);
                var u, p, f, m, g, t, v = k(d.of), b = k.position.getWithinInfo(d.within), w = k.position.getScrollInfo(b), y = (d.collision || "flip").split(" "), _ = {};
                return t = function (t) {
                    var e = t[0];
                    return 9 === e.nodeType ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : k.isWindow(e) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : e.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: e.pageY,
                            left: e.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    }
                }(v),
                    v[0].preventDefault && (d.at = "left top"),
                    p = t.width,
                    f = t.height,
                    m = t.offset,
                    g = k.extend({}, m),
                    k.each(["my", "at"], function () {
                        var t, e, i = (d[this] || "").split(" ");
                        1 === i.length && (i = o.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                            i[0] = o.test(i[0]) ? i[0] : "center",
                            i[1] = r.test(i[1]) ? i[1] : "center",
                            t = l.exec(i[0]),
                            e = l.exec(i[1]),
                            _[this] = [t ? t[0] : 0, e ? e[0] : 0],
                            d[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                    }),
                    1 === y.length && (y[1] = y[0]),
                    "right" === d.at[0] ? g.left += p : "center" === d.at[0] && (g.left += p / 2),
                    "bottom" === d.at[1] ? g.top += f : "center" === d.at[1] && (g.top += f / 2),
                    u = S(_.at, p, f),
                    g.left += u[0],
                    g.top += u[1],
                    this.each(function () {
                        var i, t, o = k(this), r = o.outerWidth(), l = o.outerHeight(), e = E(this, "marginLeft"), s = E(this, "marginTop"), n = r + e + E(this, "marginRight") + w.width, a = l + s + E(this, "marginBottom") + w.height, h = k.extend({}, g), c = S(_.my, o.outerWidth(), o.outerHeight());
                        "right" === d.my[0] ? h.left -= r : "center" === d.my[0] && (h.left -= r / 2),
                            "bottom" === d.my[1] ? h.top -= l : "center" === d.my[1] && (h.top -= l / 2),
                            h.left += c[0],
                            h.top += c[1],
                            i = {
                                marginLeft: e,
                                marginTop: s
                            },
                            k.each(["left", "top"], function (t, e) {
                                k.ui.position[y[t]] && k.ui.position[y[t]][e](h, {
                                    targetWidth: p,
                                    targetHeight: f,
                                    elemWidth: r,
                                    elemHeight: l,
                                    collisionPosition: i,
                                    collisionWidth: n,
                                    collisionHeight: a,
                                    offset: [u[0] + c[0], u[1] + c[1]],
                                    my: d.my,
                                    at: d.at,
                                    within: b,
                                    elem: o
                                })
                            }),
                            d.using && (t = function (t) {
                                var e = m.left - h.left
                                    , i = e + p - r
                                    , s = m.top - h.top
                                    , n = s + f - l
                                    , a = {
                                        target: {
                                            element: v,
                                            left: m.left,
                                            top: m.top,
                                            width: p,
                                            height: f
                                        },
                                        element: {
                                            element: o,
                                            left: h.left,
                                            top: h.top,
                                            width: r,
                                            height: l
                                        },
                                        horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                        vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
                                    };
                                p < r && p > C(e + i) && (a.horizontal = "center"),
                                    f < l && f > C(s + n) && (a.vertical = "middle"),
                                    a.important = x(C(e), C(i)) > x(C(s), C(n)) ? "horizontal" : "vertical",
                                    d.using.call(this, t, a)
                            }
                            ),
                            o.offset(k.extend(h, {
                                using: t
                            }))
                    })
            }
            ,
            k.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, o = t.left - e.collisionPosition.marginLeft, r = n - o, l = o + e.collisionWidth - a - n;
                        e.collisionWidth > a ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - a - n,
                            t.left += r - i) : t.left = 0 < l && r <= 0 ? n : l < r ? n + a - e.collisionWidth : n : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = x(t.left - o, t.left)
                    },
                    top: function (t, e) {
                        var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, o = t.top - e.collisionPosition.marginTop, r = n - o, l = o + e.collisionHeight - a - n;
                        e.collisionHeight > a ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - a - n,
                            t.top += r - i) : t.top = 0 < l && r <= 0 ? n : l < r ? n + a - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = x(t.top - o, t.top)
                    }
                },
                flip: {
                    left: function (t, e) {
                        var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, r = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, h = l - r, c = l + e.collisionWidth - o - r, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, u = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, p = -2 * e.offset[0];
                        h < 0 ? ((i = t.left + d + u + p + e.collisionWidth - o - a) < 0 || C(h) > i) && (t.left += d + u + p) : 0 < c && (0 < (s = t.left - e.collisionPosition.marginLeft + d + u + p - r) || c > C(s)) && (t.left += d + u + p)
                    },
                    top: function (t, e) {
                        var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, r = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, h = l - r, c = l + e.collisionHeight - o - r, d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, u = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, p = -2 * e.offset[1];
                        h < 0 ? ((s = t.top + d + u + p + e.collisionHeight - o - a) < 0 || C(h) > s) && (t.top += d + u + p) : 0 < c && (0 < (i = t.top - e.collisionPosition.marginTop + d + u + p - r) || c > C(i)) && (t.top += d + u + p)
                    }
                },
                flipfit: {
                    left: function () {
                        k.ui.position.flip.left.apply(this, arguments),
                            k.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        k.ui.position.flip.top.apply(this, arguments),
                            k.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            k.ui.position,
            k.extend(k.expr[":"], {
                data: k.expr.createPseudo ? k.expr.createPseudo(function (e) {
                    return function (t) {
                        return !!k.data(t, e)
                    }
                }) : function (t, e, i) {
                    return !!k.data(t, i[3])
                }
            }),
            k.fn.extend({
                disableSelection: (s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown",
                    function () {
                        return this.on(s + ".ui-disableSelection", function (t) {
                            t.preventDefault()
                        })
                    }
                ),
                enableSelection: function () {
                    return this.off(".ui-disableSelection")
                }
            });
        var m, g, v, b, w, y, _, D, P, M, I, z, O, A, H, L, $, N, B, W, F, R = "ui-effects-", Y = "ui-effects-style", V = "ui-effects-animated", j = k;
        function q(t, e, i, s) {
            return k.isPlainObject(t) && (t = (e = t).effect),
                t = {
                    effect: t
                },
                null == e && (e = {}),
                k.isFunction(e) && (s = e,
                    i = null,
                    e = {}),
                "number" != typeof e && !k.fx.speeds[e] || (s = i,
                    i = e,
                    e = {}),
                k.isFunction(i) && (s = i,
                    i = null),
                e && k.extend(t, e),
                i = i || e.duration,
                t.duration = k.fx.off ? 0 : "number" == typeof i ? i : i in k.fx.speeds ? k.fx.speeds[i] : k.fx.speeds._default,
                t.complete = s || e.complete,
                t
        }
        function X(t) {
            return !(t && "number" != typeof t && !k.fx.speeds[t]) || ("string" == typeof t && !k.effects.effect[t] || (!!k.isFunction(t) || "object" == typeof t && !t.effect))
        }
        function G(t, e) {
            var i = e.outerWidth()
                , s = e.outerHeight()
                , n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(n[1]) || 0,
                right: "auto" === n[2] ? i : parseFloat(n[2]),
                bottom: "auto" === n[3] ? s : parseFloat(n[3]),
                left: parseFloat(n[4]) || 0
            }
        }
        function U(t) {
            var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, n = {};
            if (s && s.length && s[0] && s[s[0]])
                for (i = s.length; i--;)
                    "string" == typeof s[e = s[i]] && (n[k.camelCase(e)] = s[e]);
            else
                for (e in s)
                    "string" == typeof s[e] && (n[e] = s[e]);
            return n
        }
        function K(t, e, i) {
            var s = N[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
                isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : t > s.max ? s.max : t)
        }
        function Z(o) {
            var r = L()
                , l = r._rgba = [];
            return o = o.toLowerCase(),
                F(H, function (t, e) {
                    var i, s = e.re.exec(o), n = s && e.parse(s), a = e.space || "rgba";
                    return n ? (i = r[a](n),
                        r[$[a].cache] = i[$[a].cache],
                        l = r._rgba = i._rgba,
                        !1) : z
                }),
                l.length ? ("0,0,0,0" === l.join() && I.extend(l, O.transparent),
                    r) : O[o]
        }
        function Q(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        k.effects = {
            effect: {}
        },
            A = /^([\-+])=\s*(\d+\.?\d*)/,
            H = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }],
            L = (I = j).Color = function (t, e, i, s) {
                return new I.Color.fn.parse(t, e, i, s)
            }
            ,
            $ = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            N = {
                byte: {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            B = L.support = {},
            W = I("<p>")[0],
            F = I.each,
            W.style.cssText = "background-color:rgba(1,1,1,.5)",
            B.rgba = -1 < W.style.backgroundColor.indexOf("rgba"),
            F($, function (t, e) {
                e.cache = "_" + t,
                    e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
            }),
            L.fn = I.extend(L.prototype, {
                parse: function (n, t, e, i) {
                    if (n === z)
                        return this._rgba = [null, null, null, null],
                            this;
                    (n.jquery || n.nodeType) && (n = I(n).css(t),
                        t = z);
                    var a = this
                        , s = I.type(n)
                        , o = this._rgba = [];
                    return t !== z && (n = [n, t, e, i],
                        s = "array"),
                        "string" === s ? this.parse(Z(n) || O._default) : "array" === s ? (F($.rgba.props, function (t, e) {
                            o[e.idx] = K(n[e.idx], e)
                        }),
                            this) : "object" === s ? (F($, n instanceof L ? function (t, e) {
                                n[e.cache] && (a[e.cache] = n[e.cache].slice())
                            }
                                : function (t, i) {
                                    var s = i.cache;
                                    F(i.props, function (t, e) {
                                        if (!a[s] && i.to) {
                                            if ("alpha" === t || null == n[t])
                                                return;
                                            a[s] = i.to(a._rgba)
                                        }
                                        a[s][e.idx] = K(n[t], e, !0)
                                    }),
                                        a[s] && I.inArray(null, a[s].slice(0, 3)) < 0 && (a[s][3] = 1,
                                            i.from && (a._rgba = i.from(a[s])))
                                }
                            ),
                                this) : z
                },
                is: function (t) {
                    var n = L(t)
                        , a = !0
                        , o = this;
                    return F($, function (t, e) {
                        var i, s = n[e.cache];
                        return s && (i = o[e.cache] || e.to && e.to(o._rgba) || [],
                            F(e.props, function (t, e) {
                                return null != s[e.idx] ? a = s[e.idx] === i[e.idx] : z
                            })),
                            a
                    }),
                        a
                },
                _space: function () {
                    var i = []
                        , s = this;
                    return F($, function (t, e) {
                        s[e.cache] && i.push(t)
                    }),
                        i.pop()
                },
                transition: function (t, o) {
                    var r = L(t)
                        , e = r._space()
                        , i = $[e]
                        , s = 0 === this.alpha() ? L("transparent") : this
                        , l = s[i.cache] || i.to(s._rgba)
                        , h = l.slice();
                    return r = r[i.cache],
                        F(i.props, function (t, e) {
                            var i = e.idx
                                , s = l[i]
                                , n = r[i]
                                , a = N[e.type] || {};
                            null !== n && (null === s ? h[i] = n : (a.mod && (n - s > a.mod / 2 ? s += a.mod : s - n > a.mod / 2 && (s -= a.mod)),
                                h[i] = K((n - s) * o + s, e)))
                        }),
                        this[e](h)
                },
                blend: function (t) {
                    if (1 === this._rgba[3])
                        return this;
                    var e = this._rgba.slice()
                        , i = e.pop()
                        , s = L(t)._rgba;
                    return L(I.map(e, function (t, e) {
                        return (1 - i) * s[e] + i * t
                    }))
                },
                toRgbaString: function () {
                    var t = "rgba("
                        , e = I.map(this._rgba, function (t, e) {
                            return null == t ? 2 < e ? 1 : 0 : t
                        });
                    return 1 === e[3] && (e.pop(),
                        t = "rgb("),
                        t + e.join() + ")"
                },
                toHslaString: function () {
                    var t = "hsla("
                        , e = I.map(this.hsla(), function (t, e) {
                            return null == t && (t = 2 < e ? 1 : 0),
                                e && e < 3 && (t = Math.round(100 * t) + "%"),
                                t
                        });
                    return 1 === e[3] && (e.pop(),
                        t = "hsl("),
                        t + e.join() + ")"
                },
                toHexString: function (t) {
                    var e = this._rgba.slice()
                        , i = e.pop();
                    return t && e.push(~~(255 * i)),
                        "#" + I.map(e, function (t) {
                            return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                        }).join("")
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }),
            L.fn.parse.prototype = L.fn,
            $.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2])
                    return [null, null, null, t[3]];
                var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, d = .5 * c;
                return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240,
                    i = 0 == h ? 0 : d <= .5 ? h / c : h / (2 - c),
                    [Math.round(e) % 360, i, d, null == o ? 1 : o]
            }
            ,
            $.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2])
                    return [null, null, null, t[3]];
                var e = t[0] / 360
                    , i = t[1]
                    , s = t[2]
                    , n = t[3]
                    , a = s <= .5 ? s * (1 + i) : s + i - s * i
                    , o = 2 * s - a;
                return [Math.round(255 * Q(o, a, e + 1 / 3)), Math.round(255 * Q(o, a, e)), Math.round(255 * Q(o, a, e - 1 / 3)), n]
            }
            ,
            F($, function (l, t) {
                var i = t.props
                    , o = t.cache
                    , r = t.to
                    , h = t.from;
                L.fn[l] = function (t) {
                    if (r && !this[o] && (this[o] = r(this._rgba)),
                        t === z)
                        return this[o].slice();
                    var e, s = I.type(t), n = "array" === s || "object" === s ? t : arguments, a = this[o].slice();
                    return F(i, function (t, e) {
                        var i = n["object" === s ? t : e.idx];
                        null == i && (i = a[e.idx]),
                            a[e.idx] = K(i, e)
                    }),
                        h ? ((e = L(h(a)))[o] = a,
                            e) : L(a)
                }
                    ,
                    F(i, function (o, r) {
                        L.fn[o] || (L.fn[o] = function (t) {
                            var e, i = I.type(t), s = "alpha" === o ? this._hsla ? "hsla" : "rgba" : l, n = this[s](), a = n[r.idx];
                            return "undefined" === i ? a : ("function" === i && (t = t.call(this, a),
                                i = I.type(t)),
                                null == t && r.empty ? this : ("string" === i && (e = A.exec(t)) && (t = a + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                                    n[r.idx] = t,
                                    this[s](n)))
                        }
                        )
                    })
            }),
            L.hook = function (t) {
                var e = t.split(" ");
                F(e, function (t, a) {
                    I.cssHooks[a] = {
                        set: function (t, e) {
                            var i, s, n = "";
                            if ("transparent" !== e && ("string" !== I.type(e) || (i = Z(e)))) {
                                if (e = L(i || e),
                                    !B.rgba && 1 !== e._rgba[3]) {
                                    for (s = "backgroundColor" === a ? t.parentNode : t; ("" === n || "transparent" === n) && s && s.style;)
                                        try {
                                            n = I.css(s, "backgroundColor"),
                                                s = s.parentNode
                                        } catch (t) { }
                                    e = e.blend(n && "transparent" !== n ? n : "_default")
                                }
                                e = e.toRgbaString()
                            }
                            try {
                                t.style[a] = e
                            } catch (t) { }
                        }
                    },
                        I.fx.step[a] = function (t) {
                            t.colorInit || (t.start = L(t.elem, a),
                                t.end = L(t.end),
                                t.colorInit = !0),
                                I.cssHooks[a].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                })
            }
            ,
            L.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
            I.cssHooks.borderColor = {
                expand: function (i) {
                    var s = {};
                    return F(["Top", "Right", "Bottom", "Left"], function (t, e) {
                        s["border" + e + "Color"] = i
                    }),
                        s
                }
            },
            O = I.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            },
            P = ["add", "remove", "toggle"],
            M = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            },
            k.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
                k.fx.step[e] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (j.style(t.elem, e, t.end),
                        t.setAttr = !0)
                }
            }),
            k.fn.addBack || (k.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
            ),
            k.effects.animateClass = function (n, t, e, i) {
                var a = k.speed(t, e, i);
                return this.queue(function () {
                    var t, i = k(this), e = i.attr("class") || "", s = a.children ? i.find("*").addBack() : i;
                    s = s.map(function () {
                        return {
                            el: k(this),
                            start: U(this)
                        }
                    }),
                        (t = function () {
                            k.each(P, function (t, e) {
                                n[e] && i[e + "Class"](n[e])
                            })
                        }
                        )(),
                        s = s.map(function () {
                            return this.end = U(this.el[0]),
                                this.diff = function (t, e) {
                                    var i, s, n = {};
                                    for (i in e)
                                        s = e[i],
                                            t[i] !== s && (M[i] || !k.fx.step[i] && isNaN(parseFloat(s)) || (n[i] = s));
                                    return n
                                }(this.start, this.end),
                                this
                        }),
                        i.attr("class", e),
                        s = s.map(function () {
                            var t = this
                                , e = k.Deferred()
                                , i = k.extend({}, a, {
                                    queue: !1,
                                    complete: function () {
                                        e.resolve(t)
                                    }
                                });
                            return this.el.animate(this.diff, i),
                                e.promise()
                        }),
                        k.when.apply(k, s.get()).done(function () {
                            t(),
                                k.each(arguments, function () {
                                    var e = this.el;
                                    k.each(this.diff, function (t) {
                                        e.css(t, "")
                                    })
                                }),
                                a.complete.call(i[0])
                        })
                })
            }
            ,
            k.fn.extend({
                addClass: (D = k.fn.addClass,
                    function (t, e, i, s) {
                        return e ? k.effects.animateClass.call(this, {
                            add: t
                        }, e, i, s) : D.apply(this, arguments)
                    }
                ),
                removeClass: (_ = k.fn.removeClass,
                    function (t, e, i, s) {
                        return 1 < arguments.length ? k.effects.animateClass.call(this, {
                            remove: t
                        }, e, i, s) : _.apply(this, arguments)
                    }
                ),
                toggleClass: (y = k.fn.toggleClass,
                    function (t, e, i, s, n) {
                        return "boolean" == typeof e || void 0 === e ? i ? k.effects.animateClass.call(this, e ? {
                            add: t
                        } : {
                            remove: t
                        }, i, s, n) : y.apply(this, arguments) : k.effects.animateClass.call(this, {
                            toggle: t
                        }, e, i, s)
                    }
                ),
                switchClass: function (t, e, i, s, n) {
                    return k.effects.animateClass.call(this, {
                        add: e,
                        remove: t
                    }, i, s, n)
                }
            }),
            k.expr && k.expr.filters && k.expr.filters.animated && (k.expr.filters.animated = (w = k.expr.filters.animated,
                function (t) {
                    return !!k(t).data(V) || w(t)
                }
            )),
            !1 !== k.uiBackCompat && k.extend(k.effects, {
                save: function (t, e) {
                    for (var i = 0, s = e.length; i < s; i++)
                        null !== e[i] && t.data(R + e[i], t[0].style[e[i]])
                },
                restore: function (t, e) {
                    for (var i, s = 0, n = e.length; s < n; s++)
                        null !== e[s] && (i = t.data(R + e[s]),
                            t.css(e[s], i))
                },
                setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                        e
                },
                createWrapper: function (i) {
                    if (i.parent().is(".ui-effects-wrapper"))
                        return i.parent();
                    var s = {
                        width: i.outerWidth(!0),
                        height: i.outerHeight(!0),
                        float: i.css("float")
                    }
                        , t = k("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        })
                        , e = {
                            width: i.width(),
                            height: i.height()
                        }
                        , n = document.activeElement;
                    try {
                        n.id
                    } catch (t) {
                        n = document.body
                    }
                    return i.wrap(t),
                        i[0] !== n && !k.contains(i[0], n) || k(n).trigger("focus"),
                        t = i.parent(),
                        "static" === i.css("position") ? (t.css({
                            position: "relative"
                        }),
                            i.css({
                                position: "relative"
                            })) : (k.extend(s, {
                                position: i.css("position"),
                                zIndex: i.css("z-index")
                            }),
                                k.each(["top", "left", "bottom", "right"], function (t, e) {
                                    s[e] = i.css(e),
                                        isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
                                }),
                                i.css({
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    right: "auto",
                                    bottom: "auto"
                                })),
                        i.css(e),
                        t.css(s).show()
                },
                removeWrapper: function (t) {
                    var e = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                        t[0] !== e && !k.contains(t[0], e) || k(e).trigger("focus")),
                        t
                }
            }),
            k.extend(k.effects, {
                version: "1.12.1",
                define: function (t, e, i) {
                    return i || (i = e,
                        e = "effect"),
                        k.effects.effect[t] = i,
                        k.effects.effect[t].mode = e,
                        i
                },
                scaledDimensions: function (t, e, i) {
                    if (0 === e)
                        return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                    var s = "horizontal" !== i ? (e || 100) / 100 : 1
                        , n = "vertical" !== i ? (e || 100) / 100 : 1;
                    return {
                        height: t.height() * n,
                        width: t.width() * s,
                        outerHeight: t.outerHeight() * n,
                        outerWidth: t.outerWidth() * s
                    }
                },
                clipToBox: function (t) {
                    return {
                        width: t.clip.right - t.clip.left,
                        height: t.clip.bottom - t.clip.top,
                        left: t.clip.left,
                        top: t.clip.top
                    }
                },
                unshift: function (t, e, i) {
                    var s = t.queue();
                    1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
                        t.dequeue()
                },
                saveStyle: function (t) {
                    t.data(Y, t[0].style.cssText)
                },
                restoreStyle: function (t) {
                    t[0].style.cssText = t.data(Y) || "",
                        t.removeData(Y)
                },
                mode: function (t, e) {
                    var i = t.is(":hidden");
                    return "toggle" === e && (e = i ? "show" : "hide"),
                        (i ? "hide" === e : "show" === e) && (e = "none"),
                        e
                },
                getBaseline: function (t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createPlaceholder: function (t) {
                    var e, i = t.css("position"), s = t.position();
                    return t.css({
                        marginTop: t.css("marginTop"),
                        marginBottom: t.css("marginBottom"),
                        marginLeft: t.css("marginLeft"),
                        marginRight: t.css("marginRight")
                    }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
                        /^(static|relative)/.test(i) && (i = "absolute",
                            e = k("<" + t[0].nodeName + ">").insertAfter(t).css({
                                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                                visibility: "hidden",
                                marginTop: t.css("marginTop"),
                                marginBottom: t.css("marginBottom"),
                                marginLeft: t.css("marginLeft"),
                                marginRight: t.css("marginRight"),
                                float: t.css("float")
                            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
                            t.data(R + "placeholder", e)),
                        t.css({
                            position: i,
                            left: s.left,
                            top: s.top
                        }),
                        e
                },
                removePlaceholder: function (t) {
                    var e = R + "placeholder"
                        , i = t.data(e);
                    i && (i.remove(),
                        t.removeData(e))
                },
                cleanUp: function (t) {
                    k.effects.restoreStyle(t),
                        k.effects.removePlaceholder(t)
                },
                setTransition: function (s, t, n, a) {
                    return a = a || {},
                        k.each(t, function (t, e) {
                            var i = s.cssUnit(e);
                            0 < i[0] && (a[e] = i[0] * n + i[1])
                        }),
                        a
                }
            }),
            k.fn.extend({
                effect: function () {
                    function t(t) {
                        function e() {
                            k.isFunction(r) && r.call(i[0]),
                                k.isFunction(t) && t()
                        }
                        var i = k(this);
                        s.mode = h.shift(),
                            !1 === k.uiBackCompat || a ? "none" === s.mode ? (i[l](),
                                e()) : n.call(i[0], s, function () {
                                    i.removeData(V),
                                        k.effects.cleanUp(i),
                                        "hide" === s.mode && i.hide(),
                                        e()
                                }) : (i.is(":hidden") ? "hide" === l : "show" === l) ? (i[l](),
                                    e()) : n.call(i[0], s, e)
                    }
                    function e(t) {
                        var e = k(this)
                            , i = k.effects.mode(e, l) || a;
                        e.data(V, !0),
                            h.push(i),
                            a && ("show" === i || i === a && "hide" === i) && e.show(),
                            a && "none" === i || k.effects.saveStyle(e),
                            k.isFunction(t) && t()
                    }
                    var s = q.apply(this, arguments)
                        , n = k.effects.effect[s.effect]
                        , a = n.mode
                        , i = s.queue
                        , o = i || "fx"
                        , r = s.complete
                        , l = s.mode
                        , h = [];
                    return k.fx.off || !n ? l ? this[l](s.duration, r) : this.each(function () {
                        r && r.call(this)
                    }) : !1 === i ? this.each(e).each(t) : this.queue(o, e).queue(o, t)
                },
                show: (b = k.fn.show,
                    function (t) {
                        if (X(t))
                            return b.apply(this, arguments);
                        var e = q.apply(this, arguments);
                        return e.mode = "show",
                            this.effect.call(this, e)
                    }
                ),
                hide: (v = k.fn.hide,
                    function (t) {
                        if (X(t))
                            return v.apply(this, arguments);
                        var e = q.apply(this, arguments);
                        return e.mode = "hide",
                            this.effect.call(this, e)
                    }
                ),
                toggle: (g = k.fn.toggle,
                    function (t) {
                        if (X(t) || "boolean" == typeof t)
                            return g.apply(this, arguments);
                        var e = q.apply(this, arguments);
                        return e.mode = "toggle",
                            this.effect.call(this, e)
                    }
                ),
                cssUnit: function (t) {
                    var i = this.css(t)
                        , s = [];
                    return k.each(["em", "px", "%", "pt"], function (t, e) {
                        0 < i.indexOf(e) && (s = [parseFloat(i), e])
                    }),
                        s
                },
                cssClip: function (t) {
                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : G(this.css("clip"), this)
                },
                transfer: function (t, e) {
                    var i = k(this)
                        , s = k(t.to)
                        , n = "fixed" === s.css("position")
                        , a = k("body")
                        , o = n ? a.scrollTop() : 0
                        , r = n ? a.scrollLeft() : 0
                        , l = s.offset()
                        , h = {
                            top: l.top - o,
                            left: l.left - r,
                            height: s.innerHeight(),
                            width: s.innerWidth()
                        }
                        , c = i.offset()
                        , d = k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                            top: c.top - o,
                            left: c.left - r,
                            height: i.innerHeight(),
                            width: i.innerWidth(),
                            position: n ? "fixed" : "absolute"
                        }).animate(h, t.duration, t.easing, function () {
                            d.remove(),
                                k.isFunction(e) && e()
                        })
                }
            }),
            k.fx.step.clip = function (t) {
                t.clipInit || (t.start = k(t.elem).cssClip(),
                    "string" == typeof t.end && (t.end = G(t.end, t.elem)),
                    t.clipInit = !0),
                    k(t.elem).cssClip({
                        top: t.pos * (t.end.top - t.start.top) + t.start.top,
                        right: t.pos * (t.end.right - t.start.right) + t.start.right,
                        bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                        left: t.pos * (t.end.left - t.start.left) + t.start.left
                    })
            }
            ,
            m = {},
            k.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
                m[t] = function (t) {
                    return Math.pow(t, e + 2)
                }
            }),
            k.extend(m, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function (t) {
                    for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;)
                        ;
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }),
            k.each(m, function (t, e) {
                k.easing["easeIn" + t] = e,
                    k.easing["easeOut" + t] = function (t) {
                        return 1 - e(1 - t)
                    }
                    ,
                    k.easing["easeInOut" + t] = function (t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
                    }
            });
        var J, tt;
        k.effects;
        k.effects.define("blind", "hide", function (t, e) {
            var i = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }
                , s = k(this)
                , n = t.direction || "up"
                , a = s.cssClip()
                , o = {
                    clip: k.extend({}, a)
                }
                , r = k.effects.createPlaceholder(s);
            o.clip[i[n][0]] = o.clip[i[n][1]],
                "show" === t.mode && (s.cssClip(o.clip),
                    r && r.css(k.effects.clipToBox(o)),
                    o.clip = a),
                r && r.animate(k.effects.clipToBox(o), t.duration, t.easing),
                s.animate(o, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: e
                })
        }),
            k.effects.define("bounce", function (t, e) {
                var i, s, n, a = k(this), o = t.mode, r = "hide" === o, l = "show" === o, h = t.direction || "up", c = t.distance, d = t.times || 5, u = 2 * d + (l || r ? 1 : 0), p = t.duration / u, f = t.easing, m = "up" === h || "down" === h ? "top" : "left", g = "up" === h || "left" === h, v = 0, b = a.queue().length;
                for (k.effects.createPlaceholder(a),
                    n = a.css(m),
                    c = c || a["top" == m ? "outerHeight" : "outerWidth"]() / 3,
                    l && ((s = {
                        opacity: 1
                    })[m] = n,
                        a.css("opacity", 0).css(m, g ? 2 * -c : 2 * c).animate(s, p, f)),
                    r && (c /= Math.pow(2, d - 1)),
                    (s = {})[m] = n; v < d; v++)
                    (i = {})[m] = (g ? "-=" : "+=") + c,
                        a.animate(i, p, f).animate(s, p, f),
                        c = r ? 2 * c : c / 2;
                r && ((i = {
                    opacity: 0
                })[m] = (g ? "-=" : "+=") + c,
                    a.animate(i, p, f)),
                    a.queue(e),
                    k.effects.unshift(a, b, 1 + u)
            }),
            k.effects.define("clip", "hide", function (t, e) {
                var i, s = {}, n = k(this), a = t.direction || "vertical", o = "both" === a, r = o || "horizontal" === a, l = o || "vertical" === a;
                i = n.cssClip(),
                    s.clip = {
                        top: l ? (i.bottom - i.top) / 2 : i.top,
                        right: r ? (i.right - i.left) / 2 : i.right,
                        bottom: l ? (i.bottom - i.top) / 2 : i.bottom,
                        left: r ? (i.right - i.left) / 2 : i.left
                    },
                    k.effects.createPlaceholder(n),
                    "show" === t.mode && (n.cssClip(s.clip),
                        s.clip = i),
                    n.animate(s, {
                        queue: !1,
                        duration: t.duration,
                        easing: t.easing,
                        complete: e
                    })
            }),
            k.effects.define("drop", "hide", function (t, e) {
                var i, s = k(this), n = "show" === t.mode, a = t.direction || "left", o = "up" === a || "down" === a ? "top" : "left", r = "up" === a || "left" === a ? "-=" : "+=", l = "+=" == r ? "-=" : "+=", h = {
                    opacity: 0
                };
                k.effects.createPlaceholder(s),
                    i = t.distance || s["top" == o ? "outerHeight" : "outerWidth"](!0) / 2,
                    h[o] = r + i,
                    n && (s.css(h),
                        h[o] = l + i,
                        h.opacity = 1),
                    s.animate(h, {
                        queue: !1,
                        duration: t.duration,
                        easing: t.easing,
                        complete: e
                    })
            }),
            k.effects.define("explode", "hide", function (t, e) {
                function i() {
                    g.push(this),
                        g.length === h * c && (d.css({
                            visibility: "visible"
                        }),
                            k(g).remove(),
                            e())
                }
                var s, n, a, o, r, l, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = h, d = k(this), u = "show" === t.mode, p = d.show().css("visibility", "hidden").offset(), f = Math.ceil(d.outerWidth() / c), m = Math.ceil(d.outerHeight() / h), g = [];
                for (s = 0; s < h; s++)
                    for (o = p.top + s * m,
                        l = s - (h - 1) / 2,
                        n = 0; n < c; n++)
                        a = p.left + n * f,
                            r = n - (c - 1) / 2,
                            d.clone().appendTo("body").wrap("<div></div>").css({
                                position: "absolute",
                                visibility: "visible",
                                left: -n * f,
                                top: -s * m
                            }).parent().addClass("ui-effects-explode").css({
                                position: "absolute",
                                overflow: "hidden",
                                width: f,
                                height: m,
                                left: a + (u ? r * f : 0),
                                top: o + (u ? l * m : 0),
                                opacity: u ? 0 : 1
                            }).animate({
                                left: a + (u ? 0 : r * f),
                                top: o + (u ? 0 : l * m),
                                opacity: u ? 1 : 0
                            }, t.duration || 500, t.easing, i)
            }),
            k.effects.define("fade", "toggle", function (t, e) {
                var i = "show" === t.mode;
                k(this).css("opacity", i ? 0 : 1).animate({
                    opacity: i ? 1 : 0
                }, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: e
                })
            }),
            k.effects.define("fold", "hide", function (e, t) {
                var i = k(this)
                    , s = e.mode
                    , n = "show" === s
                    , a = "hide" === s
                    , o = e.size || 15
                    , r = /([0-9]+)%/.exec(o)
                    , l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"]
                    , h = e.duration / 2
                    , c = k.effects.createPlaceholder(i)
                    , d = i.cssClip()
                    , u = {
                        clip: k.extend({}, d)
                    }
                    , p = {
                        clip: k.extend({}, d)
                    }
                    , f = [d[l[0]], d[l[1]]]
                    , m = i.queue().length;
                r && (o = parseInt(r[1], 10) / 100 * f[a ? 0 : 1]),
                    u.clip[l[0]] = o,
                    p.clip[l[0]] = o,
                    p.clip[l[1]] = 0,
                    n && (i.cssClip(p.clip),
                        c && c.css(k.effects.clipToBox(p)),
                        p.clip = d),
                    i.queue(function (t) {
                        c && c.animate(k.effects.clipToBox(u), h, e.easing).animate(k.effects.clipToBox(p), h, e.easing),
                            t()
                    }).animate(u, h, e.easing).animate(p, h, e.easing).queue(t),
                    k.effects.unshift(i, m, 4)
            }),
            k.effects.define("highlight", "show", function (t, e) {
                var i = k(this)
                    , s = {
                        backgroundColor: i.css("backgroundColor")
                    };
                "hide" === t.mode && (s.opacity = 0),
                    k.effects.saveStyle(i),
                    i.css({
                        backgroundImage: "none",
                        backgroundColor: t.color || "#ffff99"
                    }).animate(s, {
                        queue: !1,
                        duration: t.duration,
                        easing: t.easing,
                        complete: e
                    })
            }),
            k.effects.define("size", function (n, e) {
                var t, a, i, s = k(this), o = ["fontSize"], r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = n.mode, c = "effect" !== h, d = n.scale || "both", u = n.origin || ["middle", "center"], p = s.css("position"), f = s.position(), m = k.effects.scaledDimensions(s), g = n.from || m, v = n.to || k.effects.scaledDimensions(s, 0);
                k.effects.createPlaceholder(s),
                    "show" === h && (i = g,
                        g = v,
                        v = i),
                    a = {
                        from: {
                            y: g.height / m.height,
                            x: g.width / m.width
                        },
                        to: {
                            y: v.height / m.height,
                            x: v.width / m.width
                        }
                    },
                    "box" !== d && "both" !== d || (a.from.y !== a.to.y && (g = k.effects.setTransition(s, r, a.from.y, g),
                        v = k.effects.setTransition(s, r, a.to.y, v)),
                        a.from.x !== a.to.x && (g = k.effects.setTransition(s, l, a.from.x, g),
                            v = k.effects.setTransition(s, l, a.to.x, v))),
                    "content" !== d && "both" !== d || a.from.y === a.to.y || (g = k.effects.setTransition(s, o, a.from.y, g),
                        v = k.effects.setTransition(s, o, a.to.y, v)),
                    u && (t = k.effects.getBaseline(u, m),
                        g.top = (m.outerHeight - g.outerHeight) * t.y + f.top,
                        g.left = (m.outerWidth - g.outerWidth) * t.x + f.left,
                        v.top = (m.outerHeight - v.outerHeight) * t.y + f.top,
                        v.left = (m.outerWidth - v.outerWidth) * t.x + f.left),
                    s.css(g),
                    "content" !== d && "both" !== d || (r = r.concat(["marginTop", "marginBottom"]).concat(o),
                        l = l.concat(["marginLeft", "marginRight"]),
                        s.find("*[width]").each(function () {
                            var t = k(this)
                                , e = k.effects.scaledDimensions(t)
                                , i = {
                                    height: e.height * a.from.y,
                                    width: e.width * a.from.x,
                                    outerHeight: e.outerHeight * a.from.y,
                                    outerWidth: e.outerWidth * a.from.x
                                }
                                , s = {
                                    height: e.height * a.to.y,
                                    width: e.width * a.to.x,
                                    outerHeight: e.height * a.to.y,
                                    outerWidth: e.width * a.to.x
                                };
                            a.from.y !== a.to.y && (i = k.effects.setTransition(t, r, a.from.y, i),
                                s = k.effects.setTransition(t, r, a.to.y, s)),
                                a.from.x !== a.to.x && (i = k.effects.setTransition(t, l, a.from.x, i),
                                    s = k.effects.setTransition(t, l, a.to.x, s)),
                                c && k.effects.saveStyle(t),
                                t.css(i),
                                t.animate(s, n.duration, n.easing, function () {
                                    c && k.effects.restoreStyle(t)
                                })
                        })),
                    s.animate(v, {
                        queue: !1,
                        duration: n.duration,
                        easing: n.easing,
                        complete: function () {
                            var t = s.offset();
                            0 === v.opacity && s.css("opacity", g.opacity),
                                c || (s.css("position", "static" === p ? "relative" : p).offset(t),
                                    k.effects.saveStyle(s)),
                                e()
                        }
                    })
            }),
            k.effects.define("scale", function (t, e) {
                var i = k(this)
                    , s = t.mode
                    , n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== s ? 0 : 100)
                    , a = k.extend(!0, {
                        from: k.effects.scaledDimensions(i),
                        to: k.effects.scaledDimensions(i, n, t.direction || "both"),
                        origin: t.origin || ["middle", "center"]
                    }, t);
                t.fade && (a.from.opacity = 1,
                    a.to.opacity = 0),
                    k.effects.effect.size.call(this, a, e)
            }),
            k.effects.define("puff", "hide", function (t, e) {
                var i = k.extend(!0, {}, t, {
                    fade: !0,
                    percent: parseInt(t.percent, 10) || 150
                });
                k.effects.effect.scale.call(this, i, e)
            }),
            k.effects.define("pulsate", "show", function (t, e) {
                var i = k(this)
                    , s = t.mode
                    , n = "show" === s
                    , a = n || "hide" === s
                    , o = 2 * (t.times || 5) + (a ? 1 : 0)
                    , r = t.duration / o
                    , l = 0
                    , h = 1
                    , c = i.queue().length;
                for (!n && i.is(":visible") || (i.css("opacity", 0).show(),
                    l = 1); h < o; h++)
                    i.animate({
                        opacity: l
                    }, r, t.easing),
                        l = 1 - l;
                i.animate({
                    opacity: l
                }, r, t.easing),
                    i.queue(e),
                    k.effects.unshift(i, c, 1 + o)
            }),
            k.effects.define("shake", function (t, e) {
                var i = 1
                    , s = k(this)
                    , n = t.direction || "left"
                    , a = t.distance || 20
                    , o = t.times || 3
                    , r = 2 * o + 1
                    , l = Math.round(t.duration / r)
                    , h = "up" === n || "down" === n ? "top" : "left"
                    , c = "up" === n || "left" === n
                    , d = {}
                    , u = {}
                    , p = {}
                    , f = s.queue().length;
                for (k.effects.createPlaceholder(s),
                    d[h] = (c ? "-=" : "+=") + a,
                    u[h] = (c ? "+=" : "-=") + 2 * a,
                    p[h] = (c ? "-=" : "+=") + 2 * a,
                    s.animate(d, l, t.easing); i < o; i++)
                    s.animate(u, l, t.easing).animate(p, l, t.easing);
                s.animate(u, l, t.easing).animate(d, l / 2, t.easing).queue(e),
                    k.effects.unshift(s, f, 1 + r)
            }),
            k.effects.define("slide", "show", function (t, e) {
                var i, s, n = k(this), a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                }, o = t.mode, r = t.direction || "left", l = "up" === r || "down" === r ? "top" : "left", h = "up" === r || "left" === r, c = t.distance || n["top" == l ? "outerHeight" : "outerWidth"](!0), d = {};
                k.effects.createPlaceholder(n),
                    i = n.cssClip(),
                    s = n.position()[l],
                    d[l] = (h ? -1 : 1) * c + s,
                    d.clip = n.cssClip(),
                    d.clip[a[r][1]] = d.clip[a[r][0]],
                    "show" === o && (n.cssClip(d.clip),
                        n.css(l, d[l]),
                        d.clip = i,
                        d[l] = s),
                    n.animate(d, {
                        queue: !1,
                        duration: t.duration,
                        easing: t.easing,
                        complete: e
                    })
            }),
            !1 !== k.uiBackCompat && k.effects.define("transfer", function (t, e) {
                k(this).transfer(t, e)
            }),
            k.ui.focusable = function (t, e) {
                var i, s, n, a, o, r = t.nodeName.toLowerCase();
                return "area" === r ? (s = (i = t.parentNode).name,
                    !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (0 < (n = k("img[usemap='#" + s + "']")).length && n.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(r) ? (a = !t.disabled) && ((o = k(t).closest("fieldset")[0]) && (a = !o.disabled)) : a = "a" === r && t.href || e,
                        a && k(t).is(":visible") && function (t) {
                            for (var e = t.css("visibility"); "inherit" === e;)
                                e = (t = t.parent()).css("visibility");
                            return "hidden" !== e
                        }(k(t)))
            }
            ,
            k.extend(k.expr[":"], {
                focusable: function (t) {
                    return k.ui.focusable(t, null != k.attr(t, "tabindex"))
                }
            }),
            k.ui.focusable,
            k.fn.form = function () {
                return "string" == typeof this[0].form ? this.closest("form") : k(this[0].form)
            }
            ,
            k.ui.formResetMixin = {
                _formResetHandler: function () {
                    var e = k(this);
                    setTimeout(function () {
                        var t = e.data("ui-form-reset-instances");
                        k.each(t, function () {
                            this.refresh()
                        })
                    })
                },
                _bindFormResetHandler: function () {
                    if (this.form = this.element.form(),
                        this.form.length) {
                        var t = this.form.data("ui-form-reset-instances") || [];
                        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                            t.push(this),
                            this.form.data("ui-form-reset-instances", t)
                    }
                },
                _unbindFormResetHandler: function () {
                    if (this.form.length) {
                        var t = this.form.data("ui-form-reset-instances");
                        t.splice(k.inArray(this, t), 1),
                            t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                    }
                }
            },
            "1.7" === k.fn.jquery.substring(0, 3) && (k.each(["Width", "Height"], function (t, i) {
                function s(t, e, i, s) {
                    return k.each(n, function () {
                        e -= parseFloat(k.css(t, "padding" + this)) || 0,
                            i && (e -= parseFloat(k.css(t, "border" + this + "Width")) || 0),
                            s && (e -= parseFloat(k.css(t, "margin" + this)) || 0)
                    }),
                        e
                }
                var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                    , a = i.toLowerCase()
                    , o = {
                        innerWidth: k.fn.innerWidth,
                        innerHeight: k.fn.innerHeight,
                        outerWidth: k.fn.outerWidth,
                        outerHeight: k.fn.outerHeight
                    };
                k.fn["inner" + i] = function (t) {
                    return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                        k(this).css(a, s(this, t) + "px")
                    })
                }
                    ,
                    k.fn["outer" + i] = function (t, e) {
                        return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                            k(this).css(a, s(this, t, !0, e) + "px")
                        })
                    }
            }),
                k.fn.addBack = function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            ),
            k.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            },
            k.ui.escapeSelector = (tt = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,
                function (t) {
                    return t.replace(tt, "\\$1")
                }
            ),
            k.fn.labels = function () {
                var t, e, i, s, n;
                return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"),
                    (i = this.attr("id")) && (n = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()),
                        e = "label[for='" + k.ui.escapeSelector(i) + "']",
                        s = s.add(n.find(e).addBack(e))),
                    this.pushStack(s))
            }
            ,
            k.fn.scrollParent = function (t) {
                var e = this.css("position")
                    , i = "absolute" === e
                    , s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                    , n = this.parents().filter(function () {
                        var t = k(this);
                        return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== e && n.length ? n : k(this[0].ownerDocument || document)
            }
            ,
            k.extend(k.expr[":"], {
                tabbable: function (t) {
                    var e = k.attr(t, "tabindex")
                        , i = null != e;
                    return (!i || 0 <= e) && k.ui.focusable(t, i)
                }
            }),
            k.fn.extend({
                uniqueId: (J = 0,
                    function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++J)
                        })
                    }
                ),
                removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && k(this).removeAttr("id")
                    })
                }
            }),
            k.widget("ui.accordion", {
                version: "1.12.1",
                options: {
                    active: 0,
                    animate: {},
                    classes: {
                        "ui-accordion-header": "ui-corner-top",
                        "ui-accordion-header-collapsed": "ui-corner-all",
                        "ui-accordion-content": "ui-corner-bottom"
                    },
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child, > :not(li):even",
                    heightStyle: "auto",
                    icons: {
                        activeHeader: "ui-icon-triangle-1-s",
                        header: "ui-icon-triangle-1-e"
                    },
                    activate: null,
                    beforeActivate: null
                },
                hideProps: {
                    borderTopWidth: "hide",
                    borderBottomWidth: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide",
                    height: "hide"
                },
                showProps: {
                    borderTopWidth: "show",
                    borderBottomWidth: "show",
                    paddingTop: "show",
                    paddingBottom: "show",
                    height: "show"
                },
                _create: function () {
                    var t = this.options;
                    this.prevShow = this.prevHide = k(),
                        this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
                        this.element.attr("role", "tablist"),
                        t.collapsible || !1 !== t.active && null != t.active || (t.active = 0),
                        this._processPanels(),
                        t.active < 0 && (t.active += this.headers.length),
                        this._refresh()
                },
                _getCreateEventData: function () {
                    return {
                        header: this.active,
                        panel: this.active.length ? this.active.next() : k()
                    }
                },
                _createIcons: function () {
                    var t, e, i = this.options.icons;
                    i && (t = k("<span>"),
                        this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header),
                        t.prependTo(this.headers),
                        e = this.active.children(".ui-accordion-header-icon"),
                        this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
                },
                _destroyIcons: function () {
                    this._removeClass(this.headers, "ui-accordion-icons"),
                        this.headers.children(".ui-accordion-header-icon").remove()
                },
                _destroy: function () {
                    var t;
                    this.element.removeAttr("role"),
                        this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
                        this._destroyIcons(),
                        t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
                        "content" !== this.options.heightStyle && t.css("height", "")
                },
                _setOption: function (t, e) {
                    return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
                        this._setupEvents(e)),
                        this._super(t, e),
                        "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
                        void ("icons" === t && (this._destroyIcons(),
                            e && this._createIcons())))
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this.element.attr("aria-disabled", t),
                        this._toggleClass(null, "ui-state-disabled", !!t),
                        this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
                },
                _keydown: function (t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var e = k.ui.keyCode
                            , i = this.headers.length
                            , s = this.headers.index(t.target)
                            , n = !1;
                        switch (t.keyCode) {
                            case e.RIGHT:
                            case e.DOWN:
                                n = this.headers[(s + 1) % i];
                                break;
                            case e.LEFT:
                            case e.UP:
                                n = this.headers[(s - 1 + i) % i];
                                break;
                            case e.SPACE:
                            case e.ENTER:
                                this._eventHandler(t);
                                break;
                            case e.HOME:
                                n = this.headers[0];
                                break;
                            case e.END:
                                n = this.headers[i - 1]
                        }
                        n && (k(t.target).attr("tabIndex", -1),
                            k(n).attr("tabIndex", 0),
                            k(n).trigger("focus"),
                            t.preventDefault())
                    }
                },
                _panelKeyDown: function (t) {
                    t.keyCode === k.ui.keyCode.UP && t.ctrlKey && k(t.currentTarget).prev().trigger("focus")
                },
                refresh: function () {
                    var t = this.options;
                    this._processPanels(),
                        !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1,
                            this.active = k()) : !1 === t.active ? this._activate(0) : this.active.length && !k.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
                                this.active = k()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active),
                        this._destroyIcons(),
                        this._refresh()
                },
                _processPanels: function () {
                    var t = this.headers
                        , e = this.panels;
                    this.headers = this.element.find(this.options.header),
                        this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
                        this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
                        this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
                        e && (this._off(t.not(this.headers)),
                            this._off(e.not(this.panels)))
                },
                _refresh: function () {
                    var i, t = this.options, e = t.heightStyle, s = this.element.parent();
                    this.active = this._findActive(t.active),
                        this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
                        this._addClass(this.active.next(), "ui-accordion-content-active"),
                        this.active.next().show(),
                        this.headers.attr("role", "tab").each(function () {
                            var t = k(this)
                                , e = t.uniqueId().attr("id")
                                , i = t.next()
                                , s = i.uniqueId().attr("id");
                            t.attr("aria-controls", s),
                                i.attr("aria-labelledby", e)
                        }).next().attr("role", "tabpanel"),
                        this.headers.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }).next().attr({
                            "aria-hidden": "true"
                        }).hide(),
                        this.active.length ? this.active.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }).next().attr({
                            "aria-hidden": "false"
                        }) : this.headers.eq(0).attr("tabIndex", 0),
                        this._createIcons(),
                        this._setupEvents(t.event),
                        "fill" === e ? (i = s.height(),
                            this.element.siblings(":visible").each(function () {
                                var t = k(this)
                                    , e = t.css("position");
                                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
                            }),
                            this.headers.each(function () {
                                i -= k(this).outerHeight(!0)
                            }),
                            this.headers.next().each(function () {
                                k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()))
                            }).css("overflow", "auto")) : "auto" === e && (i = 0,
                                this.headers.next().each(function () {
                                    var t = k(this).is(":visible");
                                    t || k(this).show(),
                                        i = Math.max(i, k(this).css("height", "").height()),
                                        t || k(this).hide()
                                }).height(i))
                },
                _activate: function (t) {
                    var e = this._findActive(t)[0];
                    e !== this.active[0] && (e = e || this.active[0],
                        this._eventHandler({
                            target: e,
                            currentTarget: e,
                            preventDefault: k.noop
                        }))
                },
                _findActive: function (t) {
                    return "number" == typeof t ? this.headers.eq(t) : k()
                },
                _setupEvents: function (t) {
                    var i = {
                        keydown: "_keydown"
                    };
                    t && k.each(t.split(" "), function (t, e) {
                        i[e] = "_eventHandler"
                    }),
                        this._off(this.headers.add(this.headers.next())),
                        this._on(this.headers, i),
                        this._on(this.headers.next(), {
                            keydown: "_panelKeyDown"
                        }),
                        this._hoverable(this.headers),
                        this._focusable(this.headers)
                },
                _eventHandler: function (t) {
                    var e, i, s = this.options, n = this.active, a = k(t.currentTarget), o = a[0] === n[0], r = o && s.collapsible, l = r ? k() : a.next(), h = n.next(), c = {
                        oldHeader: n,
                        oldPanel: h,
                        newHeader: r ? k() : a,
                        newPanel: l
                    };
                    t.preventDefault(),
                        o && !s.collapsible || !1 === this._trigger("beforeActivate", t, c) || (s.active = !r && this.headers.index(a),
                            this.active = o ? k() : a,
                            this._toggle(c),
                            this._removeClass(n, "ui-accordion-header-active", "ui-state-active"),
                            s.icons && (e = n.children(".ui-accordion-header-icon"),
                                this._removeClass(e, null, s.icons.activeHeader)._addClass(e, null, s.icons.header)),
                            o || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"),
                                s.icons && (i = a.children(".ui-accordion-header-icon"),
                                    this._removeClass(i, null, s.icons.header)._addClass(i, null, s.icons.activeHeader)),
                                this._addClass(a.next(), "ui-accordion-content-active")))
                },
                _toggle: function (t) {
                    var e = t.newPanel
                        , i = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0),
                        this.prevShow = e,
                        this.prevHide = i,
                        this.options.animate ? this._animate(e, i, t) : (i.hide(),
                            e.show(),
                            this._toggleComplete(t)),
                        i.attr({
                            "aria-hidden": "true"
                        }),
                        i.prev().attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }),
                        e.length && i.length ? i.prev().attr({
                            tabIndex: -1,
                            "aria-expanded": "false"
                        }) : e.length && this.headers.filter(function () {
                            return 0 === parseInt(k(this).attr("tabIndex"), 10)
                        }).attr("tabIndex", -1),
                        e.attr("aria-hidden", "false").prev().attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                },
                _animate: function (t, i, e) {
                    function s() {
                        r._toggleComplete(e)
                    }
                    var n, a, o, r = this, l = 0, h = t.css("box-sizing"), c = t.length && (!i.length || t.index() < i.index()), d = this.options.animate || {}, u = c && d.down || d;
                    return "number" == typeof u && (o = u),
                        "string" == typeof u && (a = u),
                        a = a || u.easing || d.easing,
                        o = o || u.duration || d.duration,
                        i.length ? t.length ? (n = t.show().outerHeight(),
                            i.animate(this.hideProps, {
                                duration: o,
                                easing: a,
                                step: function (t, e) {
                                    e.now = Math.round(t)
                                }
                            }),
                            void t.hide().animate(this.showProps, {
                                duration: o,
                                easing: a,
                                complete: s,
                                step: function (t, e) {
                                    e.now = Math.round(t),
                                        "height" !== e.prop ? "content-box" === h && (l += e.now) : "content" !== r.options.heightStyle && (e.now = Math.round(n - i.outerHeight() - l),
                                            l = 0)
                                }
                            })) : i.animate(this.hideProps, o, a, s) : t.animate(this.showProps, o, a, s)
                },
                _toggleComplete: function (t) {
                    var e = t.oldPanel
                        , i = e.prev();
                    this._removeClass(e, "ui-accordion-content-active"),
                        this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
                        e.length && (e.parent()[0].className = e.parent()[0].className),
                        this._trigger("activate", null, t)
                }
            }),
            k.ui.safeActiveElement = function (e) {
                var i;
                try {
                    i = e.activeElement
                } catch (t) {
                    i = e.body
                }
                return (i = i || e.body).nodeName || (i = e.body),
                    i
            }
            ,
            k.widget("ui.menu", {
                version: "1.12.1",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-caret-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function () {
                    this.activeMenu = this.element,
                        this.mouseHandled = !1,
                        this.element.uniqueId().attr({
                            role: this.options.role,
                            tabIndex: 0
                        }),
                        this._addClass("ui-menu", "ui-widget ui-widget-content"),
                        this._on({
                            "mousedown .ui-menu-item": function (t) {
                                t.preventDefault()
                            },
                            "click .ui-menu-item": function (t) {
                                var e = k(t.target)
                                    , i = k(k.ui.safeActiveElement(this.document[0]));
                                !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t),
                                    t.isPropagationStopped() || (this.mouseHandled = !0),
                                    e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                                        this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                            },
                            "mouseenter .ui-menu-item": function (t) {
                                if (!this.previousFilter) {
                                    var e = k(t.target).closest(".ui-menu-item")
                                        , i = k(t.currentTarget);
                                    e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"),
                                        this.focus(t, i))
                                }
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function (t, e) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                e || this.focus(t, i)
                            },
                            blur: function (t) {
                                this._delay(function () {
                                    k.contains(this.element[0], k.ui.safeActiveElement(this.document[0])) || this.collapseAll(t)
                                })
                            },
                            keydown: "_keydown"
                        }),
                        this.refresh(),
                        this._on(this.document, {
                            click: function (t) {
                                this._closeOnDocumentClick(t) && this.collapseAll(t),
                                    this.mouseHandled = !1
                            }
                        })
                },
                _destroy: function () {
                    var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
                        t.children().each(function () {
                            var t = k(this);
                            t.data("ui-menu-submenu-caret") && t.remove()
                        })
                },
                _keydown: function (t) {
                    var e, i, s, n, a = !0;
                    switch (t.keyCode) {
                        case k.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case k.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case k.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case k.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case k.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case k.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case k.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case k.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case k.ui.keyCode.ENTER:
                        case k.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case k.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            a = !1,
                                i = this.previousFilter || "",
                                n = !1,
                                s = 96 <= t.keyCode && t.keyCode <= 105 ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode),
                                clearTimeout(this.filterTimer),
                                s === i ? n = !0 : s = i + s,
                                e = this._filterMenuItems(s),
                                (e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (s = String.fromCharCode(t.keyCode),
                                    e = this._filterMenuItems(s)),
                                e.length ? (this.focus(t, e),
                                    this.previousFilter = s,
                                    this.filterTimer = this._delay(function () {
                                        delete this.previousFilter
                                    }, 1e3)) : delete this.previousFilter
                    }
                    a && t.preventDefault()
                },
                _activate: function (t) {
                    this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
                },
                refresh: function () {
                    var t, e, i, s, n = this, a = this.options.icons.submenu, o = this.element.find(this.options.menus);
                    this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
                        e = o.filter(":not(.ui-menu)").hide().attr({
                            role: this.options.role,
                            "aria-hidden": "true",
                            "aria-expanded": "false"
                        }).each(function () {
                            var t = k(this)
                                , e = t.prev()
                                , i = k("<span>").data("ui-menu-submenu-caret", !0);
                            n._addClass(i, "ui-menu-icon", "ui-icon " + a),
                                e.attr("aria-haspopup", "true").prepend(i),
                                t.attr("aria-labelledby", e.attr("id"))
                        }),
                        this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
                        (t = o.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
                            var t = k(this);
                            n._isDivider(t) && n._addClass(t, "ui-menu-divider", "ui-widget-content")
                        }),
                        s = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                            tabIndex: -1,
                            role: this._itemRole()
                        }),
                        this._addClass(i, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"),
                        t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                        this.active && !k.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function () {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function (t, e) {
                    if ("icons" === t) {
                        var i = this.element.find(".ui-menu-icon");
                        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                    }
                    this._super(t, e)
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this.element.attr("aria-disabled", t + ""),
                        this._toggleClass(null, "ui-state-disabled", !!t)
                },
                focus: function (t, e) {
                    var i, s, n;
                    this.blur(t, t && "focus" === t.type),
                        this._scrollIntoView(e),
                        this.active = e.first(),
                        s = this.active.children(".ui-menu-item-wrapper"),
                        this._addClass(s, null, "ui-state-active"),
                        this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
                        n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
                        this._addClass(n, null, "ui-state-active"),
                        t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                            this._close()
                        }, this.delay),
                        (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
                        this.activeMenu = e.parent(),
                        this._trigger("focus", t, {
                            item: e
                        })
                },
                _scrollIntoView: function (t) {
                    var e, i, s, n, a, o;
                    this._hasScroll() && (e = parseFloat(k.css(this.activeMenu[0], "borderTopWidth")) || 0,
                        i = parseFloat(k.css(this.activeMenu[0], "paddingTop")) || 0,
                        s = t.offset().top - this.activeMenu.offset().top - e - i,
                        n = this.activeMenu.scrollTop(),
                        a = this.activeMenu.height(),
                        o = t.outerHeight(),
                        s < 0 ? this.activeMenu.scrollTop(n + s) : a < s + o && this.activeMenu.scrollTop(n + s - a + o))
                },
                blur: function (t, e) {
                    e || clearTimeout(this.timer),
                        this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
                            this._trigger("blur", t, {
                                item: this.active
                            }),
                            this.active = null)
                },
                _startOpening: function (t) {
                    clearTimeout(this.timer),
                        "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                            this._close(),
                                this._open(t)
                        }, this.delay))
                },
                _open: function (t) {
                    var e = k.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer),
                        this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                        t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
                },
                collapseAll: function (e, i) {
                    clearTimeout(this.timer),
                        this.timer = this._delay(function () {
                            var t = i ? this.element : k(e && e.target).closest(this.element.find(".ui-menu"));
                            t.length || (t = this.element),
                                this._close(t),
                                this.blur(e),
                                this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"),
                                this.activeMenu = t
                        }, this.delay)
                },
                _close: function (t) {
                    (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
                },
                _closeOnDocumentClick: function (t) {
                    return !k(t.target).closest(".ui-menu").length
                },
                _isDivider: function (t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text())
                },
                collapse: function (t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(),
                        this.focus(t, e))
                },
                expand: function (t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e && e.length && (this._open(e.parent()),
                        this._delay(function () {
                            this.focus(t, e)
                        }))
                },
                next: function (t) {
                    this._move("next", "first", t)
                },
                previous: function (t) {
                    this._move("prev", "last", t)
                },
                isFirstItem: function () {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function () {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function (t, e, i) {
                    var s;
                    this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
                        s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()),
                        this.focus(i, s)
                },
                nextPage: function (t) {
                    var e, i, s;
                    return this.active ? void (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top,
                        s = this.element.height(),
                        this.active.nextAll(".ui-menu-item").each(function () {
                            return (e = k(this)).offset().top - i - s < 0
                        }),
                        this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
                },
                previousPage: function (t) {
                    var e, i, s;
                    return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top,
                        s = this.element.height(),
                        this.active.prevAll(".ui-menu-item").each(function () {
                            return 0 < (e = k(this)).offset().top - i + s
                        }),
                        this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
                },
                _hasScroll: function () {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function (t) {
                    this.active = this.active || k(t.target).closest(".ui-menu-item");
                    var e = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0),
                        this._trigger("select", t, e)
                },
                _filterMenuItems: function (t) {
                    var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                        , i = RegExp("^" + e, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                        return i.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
                    })
                }
            }),
            k.widget("ui.autocomplete", {
                version: "1.12.1",
                defaultElement: "<input>",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                requestIndex: 0,
                pending: 0,
                _create: function () {
                    var i, s, n, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t, a = "input" === t;
                    this.isMultiLine = e || !a && this._isContentEditable(this.element),
                        this.valueMethod = this.element[e || a ? "val" : "text"],
                        this.isNewMenu = !0,
                        this._addClass("ui-autocomplete-input"),
                        this.element.attr("autocomplete", "off"),
                        this._on(this.element, {
                            keydown: function (t) {
                                if (this.element.prop("readOnly"))
                                    s = n = i = !0;
                                else {
                                    s = n = i = !1;
                                    var e = k.ui.keyCode;
                                    switch (t.keyCode) {
                                        case e.PAGE_UP:
                                            i = !0,
                                                this._move("previousPage", t);
                                            break;
                                        case e.PAGE_DOWN:
                                            i = !0,
                                                this._move("nextPage", t);
                                            break;
                                        case e.UP:
                                            i = !0,
                                                this._keyEvent("previous", t);
                                            break;
                                        case e.DOWN:
                                            i = !0,
                                                this._keyEvent("next", t);
                                            break;
                                        case e.ENTER:
                                            this.menu.active && (i = !0,
                                                t.preventDefault(),
                                                this.menu.select(t));
                                            break;
                                        case e.TAB:
                                            this.menu.active && this.menu.select(t);
                                            break;
                                        case e.ESCAPE:
                                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                                                this.close(t),
                                                t.preventDefault());
                                            break;
                                        default:
                                            s = !0,
                                                this._searchTimeout(t)
                                    }
                                }
                            },
                            keypress: function (t) {
                                if (i)
                                    return i = !1,
                                        void (this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
                                if (!s) {
                                    var e = k.ui.keyCode;
                                    switch (t.keyCode) {
                                        case e.PAGE_UP:
                                            this._move("previousPage", t);
                                            break;
                                        case e.PAGE_DOWN:
                                            this._move("nextPage", t);
                                            break;
                                        case e.UP:
                                            this._keyEvent("previous", t);
                                            break;
                                        case e.DOWN:
                                            this._keyEvent("next", t)
                                    }
                                }
                            },
                            input: function (t) {
                                return n ? (n = !1,
                                    void t.preventDefault()) : void this._searchTimeout(t)
                            },
                            focus: function () {
                                this.selectedItem = null,
                                    this.previous = this._value()
                            },
                            blur: function (t) {
                                return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching),
                                    this.close(t),
                                    void this._change(t))
                            }
                        }),
                        this._initSource(),
                        this.menu = k("<ul>").appendTo(this._appendTo()).menu({
                            role: null
                        }).hide().menu("instance"),
                        this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
                        this._on(this.menu.element, {
                            mousedown: function (t) {
                                t.preventDefault(),
                                    this.cancelBlur = !0,
                                    this._delay(function () {
                                        delete this.cancelBlur,
                                            this.element[0] !== k.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                                    })
                            },
                            menufocus: function (t, e) {
                                var i, s;
                                return this.isNewMenu && (this.isNewMenu = !1,
                                    t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(),
                                        void this.document.one("mousemove", function () {
                                            k(t.target).trigger(t.originalEvent)
                                        })) : (s = e.item.data("ui-autocomplete-item"),
                                            !1 !== this._trigger("focus", t, {
                                                item: s
                                            }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value),
                                            void ((i = e.item.attr("aria-label") || s.value) && k.trim(i).length && (this.liveRegion.children().hide(),
                                                k("<div>").text(i).appendTo(this.liveRegion))))
                            },
                            menuselect: function (t, e) {
                                var i = e.item.data("ui-autocomplete-item")
                                    , s = this.previous;
                                this.element[0] !== k.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                                    this.previous = s,
                                    this._delay(function () {
                                        this.previous = s,
                                            this.selectedItem = i
                                    })),
                                    !1 !== this._trigger("select", t, {
                                        item: i
                                    }) && this._value(i.value),
                                    this.term = this._value(),
                                    this.close(t),
                                    this.selectedItem = i
                            }
                        }),
                        this.liveRegion = k("<div>", {
                            role: "status",
                            "aria-live": "assertive",
                            "aria-relevant": "additions"
                        }).appendTo(this.document[0].body),
                        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                        this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                },
                _destroy: function () {
                    clearTimeout(this.searching),
                        this.element.removeAttr("autocomplete"),
                        this.menu.element.remove(),
                        this.liveRegion.remove()
                },
                _setOption: function (t, e) {
                    this._super(t, e),
                        "source" === t && this._initSource(),
                        "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
                        "disabled" === t && e && this.xhr && this.xhr.abort()
                },
                _isEventTargetInWidget: function (t) {
                    var e = this.menu.element[0];
                    return t.target === this.element[0] || t.target === e || k.contains(e, t.target)
                },
                _closeOnClickOutside: function (t) {
                    this._isEventTargetInWidget(t) || this.close()
                },
                _appendTo: function () {
                    var t = this.options.appendTo;
                    return (t = t && (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")),
                        t.length || (t = this.document[0].body),
                        t
                },
                _initSource: function () {
                    var i, s, n = this;
                    k.isArray(this.options.source) ? (i = this.options.source,
                        this.source = function (t, e) {
                            e(k.ui.autocomplete.filter(i, t.term))
                        }
                    ) : "string" == typeof this.options.source ? (s = this.options.source,
                        this.source = function (t, e) {
                            n.xhr && n.xhr.abort(),
                                n.xhr = k.ajax({
                                    url: s,
                                    data: t,
                                    dataType: "json",
                                    success: function (t) {
                                        e(t)
                                    },
                                    error: function () {
                                        e([])
                                    }
                                })
                        }
                    ) : this.source = this.options.source
                },
                _searchTimeout: function (s) {
                    clearTimeout(this.searching),
                        this.searching = this._delay(function () {
                            var t = this.term === this._value()
                                , e = this.menu.element.is(":visible")
                                , i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                            t && (!t || e || i) || (this.selectedItem = null,
                                this.search(null, s))
                        }, this.options.delay)
                },
                search: function (t, e) {
                    return t = null != t ? t : this._value(),
                        this.term = this._value(),
                        t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
                },
                _search: function (t) {
                    this.pending++,
                        this._addClass("ui-autocomplete-loading"),
                        this.cancelSearch = !1,
                        this.source({
                            term: t
                        }, this._response())
                },
                _response: function () {
                    var e = ++this.requestIndex;
                    return k.proxy(function (t) {
                        e === this.requestIndex && this.__response(t),
                            this.pending--,
                            this.pending || this._removeClass("ui-autocomplete-loading")
                    }, this)
                },
                __response: function (t) {
                    t = t && this._normalize(t),
                        this._trigger("response", null, {
                            content: t
                        }),
                        !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
                            this._trigger("open")) : this._close()
                },
                close: function (t) {
                    this.cancelSearch = !0,
                        this._close(t)
                },
                _close: function (t) {
                    this._off(this.document, "mousedown"),
                        this.menu.element.is(":visible") && (this.menu.element.hide(),
                            this.menu.blur(),
                            this.isNewMenu = !0,
                            this._trigger("close", t))
                },
                _change: function (t) {
                    this.previous !== this._value() && this._trigger("change", t, {
                        item: this.selectedItem
                    })
                },
                _normalize: function (t) {
                    return t.length && t[0].label && t[0].value ? t : k.map(t, function (t) {
                        return "string" == typeof t ? {
                            label: t,
                            value: t
                        } : k.extend({}, t, {
                            label: t.label || t.value,
                            value: t.value || t.label
                        })
                    })
                },
                _suggest: function (t) {
                    var e = this.menu.element.empty();
                    this._renderMenu(e, t),
                        this.isNewMenu = !0,
                        this.menu.refresh(),
                        e.show(),
                        this._resizeMenu(),
                        e.position(k.extend({
                            of: this.element
                        }, this.options.position)),
                        this.options.autoFocus && this.menu.next(),
                        this._on(this.document, {
                            mousedown: "_closeOnClickOutside"
                        })
                },
                _resizeMenu: function () {
                    var t = this.menu.element;
                    t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function (i, t) {
                    var s = this;
                    k.each(t, function (t, e) {
                        s._renderItemData(i, e)
                    })
                },
                _renderItemData: function (t, e) {
                    return this._renderItem(t, e).data("ui-autocomplete-item", e)
                },
                _renderItem: function (t, e) {
                    return k("<li>").append(k("<div>").text(e.label)).appendTo(t)
                },
                _move: function (t, e) {
                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
                        void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
                },
                widget: function () {
                    return this.menu.element
                },
                _value: function () {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function (t, e) {
                    this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e),
                        e.preventDefault())
                },
                _isContentEditable: function (t) {
                    if (!t.length)
                        return !1;
                    var e = t.prop("contentEditable");
                    return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
                }
            }),
            k.extend(k.ui.autocomplete, {
                escapeRegex: function (t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function (t, e) {
                    var i = RegExp(k.ui.autocomplete.escapeRegex(e), "i");
                    return k.grep(t, function (t) {
                        return i.test(t.label || t.value || t)
                    })
                }
            }),
            k.widget("ui.autocomplete", k.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function (t) {
                            return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function (t) {
                    var e;
                    this._superApply(arguments),
                        this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
                            this.liveRegion.children().hide(),
                            k("<div>").text(e).appendTo(this.liveRegion))
                }
            }),
            k.ui.autocomplete;
        var et, it, st = /ui-corner-([a-z]){2,6}/g;
        k.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function () {
                this._enhance()
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"),
                    this.refresh()
            },
            _destroy: function () {
                this._callChildMethod("destroy"),
                    this.childWidgets.removeData("ui-controlgroup-data"),
                    this.element.removeAttr("role"),
                    this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function () {
                var o = this
                    , r = [];
                k.each(this.options.items, function (n, t) {
                    var e, a = {};
                    return t ? "controlgroupLabel" === n ? ((e = o.element.find(t)).each(function () {
                        var t = k(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }),
                        o._addClass(e, null, "ui-widget ui-widget-content ui-state-default"),
                        void (r = r.concat(e.get()))) : void (k.fn[n] && (a = o["_" + n + "Options"] ? o["_" + n + "Options"]("middle") : {
                            classes: {}
                        },
                            o.element.find(t).each(function () {
                                var t = k(this)
                                    , e = t[n]("instance")
                                    , i = k.widget.extend({}, a);
                                if ("button" !== n || !t.parent(".ui-spinner").length) {
                                    (e = e || t[n]()[n]("instance")) && (i.classes = o._resolveClassesValues(i.classes, e)),
                                        t[n](i);
                                    var s = t[n]("widget");
                                    k.data(s[0], "ui-controlgroup-data", e || t[n]("instance")),
                                        r.push(s[0])
                                }
                            }))) : void 0
                }),
                    this.childWidgets = k(k.unique(r)),
                    this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function (e) {
                this.childWidgets.each(function () {
                    var t = k(this).data("ui-controlgroup-data");
                    t && t[e] && t[e]()
                })
            },
            _updateCornerClass: function (t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),
                    this._addClass(t, null, i)
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction
                    , s = {
                        classes: {}
                    };
                return s.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t],
                    s
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "",
                    e.classes["ui-spinner-down"] = "",
                    e
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function (i, s) {
                var n = {};
                return k.each(i, function (t) {
                    var e = s.options.classes[t] || "";
                    e = k.trim(e.replace(st, "")),
                        n[t] = (e + " " + i[t]).replace(/\s+/g, " ")
                }),
                    n
            },
            _setOption: function (t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
                    this._super(t, e),
                    "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function () {
                var n, a = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
                    "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
                    this._initWidgets(),
                    n = this.childWidgets,
                    this.options.onlyVisible && (n = n.filter(":visible")),
                    n.length && (k.each(["first", "last"], function (t, e) {
                        var i = n[e]().data("ui-controlgroup-data");
                        if (i && a["_" + i.widgetName + "Options"]) {
                            var s = a["_" + i.widgetName + "Options"](1 === n.length ? "only" : e);
                            s.classes = a._resolveClassesValues(s.classes, i),
                                i.element[i.widgetName](s)
                        } else
                            a._updateCornerClass(n[e](), e)
                    }),
                        this._callChildMethod("refresh"))
            }
        }),
            k.widget("ui.checkboxradio", [k.ui.formResetMixin, {
                version: "1.12.1",
                options: {
                    disabled: null,
                    label: null,
                    icon: !0,
                    classes: {
                        "ui-checkboxradio-label": "ui-corner-all",
                        "ui-checkboxradio-icon": "ui-corner-all"
                    }
                },
                _getCreateOptions: function () {
                    var t, e, i = this, s = this._super() || {};
                    return this._readType(),
                        e = this.element.labels(),
                        this.label = k(e[e.length - 1]),
                        this.label.length || k.error("No label found for checkboxradio widget"),
                        this.originalLabel = "",
                        this.label.contents().not(this.element[0]).each(function () {
                            i.originalLabel += 3 === this.nodeType ? k(this).text() : this.outerHTML
                        }),
                        this.originalLabel && (s.label = this.originalLabel),
                        null != (t = this.element[0].disabled) && (s.disabled = t),
                        s
                },
                _create: function () {
                    var t = this.element[0].checked;
                    this._bindFormResetHandler(),
                        null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
                        this._setOption("disabled", this.options.disabled),
                        this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
                        this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
                        "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
                        this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
                        this._enhance(),
                        t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
                            this.icon && this._addClass(this.icon, null, "ui-state-hover")),
                        this._on({
                            change: "_toggleClasses",
                            focus: function () {
                                this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                            },
                            blur: function () {
                                this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                            }
                        })
                },
                _readType: function () {
                    var t = this.element[0].nodeName.toLowerCase();
                    this.type = this.element[0].type,
                        "input" === t && /radio|checkbox/.test(this.type) || k.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
                },
                _enhance: function () {
                    this._updateIcon(this.element[0].checked)
                },
                widget: function () {
                    return this.label
                },
                _getRadioGroup: function () {
                    var t = this.element[0].name
                        , e = "input[name='" + k.ui.escapeSelector(t) + "']";
                    return t ? (this.form.length ? k(this.form[0].elements).filter(e) : k(e).filter(function () {
                        return 0 === k(this).form().length
                    })).not(this.element) : k([])
                },
                _toggleClasses: function () {
                    var t = this.element[0].checked;
                    this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
                        this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t),
                        "radio" === this.type && this._getRadioGroup().each(function () {
                            var t = k(this).checkboxradio("instance");
                            t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
                        })
                },
                _destroy: function () {
                    this._unbindFormResetHandler(),
                        this.icon && (this.icon.remove(),
                            this.iconSpace.remove())
                },
                _setOption: function (t, e) {
                    return "label" !== t || e ? (this._super(t, e),
                        "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e),
                            void (this.element[0].disabled = e)) : void this.refresh()) : void 0
                },
                _updateIcon: function (t) {
                    var e = "ui-icon ui-icon-background ";
                    this.options.icon ? (this.icon || (this.icon = k("<span>"),
                        this.iconSpace = k("<span> </span>"),
                        this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
                        "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
                            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank",
                        this._addClass(this.icon, "ui-checkboxradio-icon", e),
                        t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
                        this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
                            this.iconSpace.remove(),
                            delete this.icon)
                },
                _updateLabel: function () {
                    var t = this.label.contents().not(this.element[0]);
                    this.icon && (t = t.not(this.icon[0])),
                        this.iconSpace && (t = t.not(this.iconSpace[0])),
                        t.remove(),
                        this.label.append(this.options.label)
                },
                refresh: function () {
                    var t = this.element[0].checked
                        , e = this.element[0].disabled;
                    this._updateIcon(t),
                        this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
                        null !== this.options.label && this._updateLabel(),
                        e !== this.options.disabled && this._setOptions({
                            disabled: e
                        })
                }
            }]),
            k.ui.checkboxradio,
            k.widget("ui.button", {
                version: "1.12.1",
                defaultElement: "<button>",
                options: {
                    classes: {
                        "ui-button": "ui-corner-all"
                    },
                    disabled: null,
                    icon: null,
                    iconPosition: "beginning",
                    label: null,
                    showLabel: !0
                },
                _getCreateOptions: function () {
                    var t, e = this._super() || {};
                    return this.isInput = this.element.is("input"),
                        null != (t = this.element[0].disabled) && (e.disabled = t),
                        this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
                        this.originalLabel && (e.label = this.originalLabel),
                        e
                },
                _create: function () {
                    !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
                        null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
                        this.hasTitle = !!this.element.attr("title"),
                        this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
                        this._addClass("ui-button", "ui-widget"),
                        this._setOption("disabled", this.options.disabled),
                        this._enhance(),
                        this.element.is("a") && this._on({
                            keyup: function (t) {
                                t.keyCode === k.ui.keyCode.SPACE && (t.preventDefault(),
                                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                            }
                        })
                },
                _enhance: function () {
                    this.element.is("button") || this.element.attr("role", "button"),
                        this.options.icon && (this._updateIcon("icon", this.options.icon),
                            this._updateTooltip())
                },
                _updateTooltip: function () {
                    this.title = this.element.attr("title"),
                        this.options.showLabel || this.title || this.element.attr("title", this.options.label)
                },
                _updateIcon: function (t, e) {
                    var i = "iconPosition" !== t
                        , s = i ? this.options.iconPosition : e
                        , n = "top" === s || "bottom" === s;
                    this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = k("<span>"),
                        this._addClass(this.icon, "ui-button-icon", "ui-icon"),
                        this.options.showLabel || this._addClass("ui-button-icon-only")),
                        i && this._addClass(this.icon, null, e),
                        this._attachIcon(s),
                        n ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
                            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = k("<span> </span>"),
                                this._addClass(this.iconSpace, "ui-button-icon-space")),
                                this._removeClass(this.icon, null, "ui-wiget-icon-block"),
                                this._attachIconSpace(s))
                },
                _destroy: function () {
                    this.element.removeAttr("role"),
                        this.icon && this.icon.remove(),
                        this.iconSpace && this.iconSpace.remove(),
                        this.hasTitle || this.element.removeAttr("title")
                },
                _attachIconSpace: function (t) {
                    this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
                },
                _attachIcon: function (t) {
                    this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
                },
                _setOptions: function (t) {
                    var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel
                        , i = void 0 === t.icon ? this.options.icon : t.icon;
                    e || i || (t.showLabel = !0),
                        this._super(t)
                },
                _setOption: function (t, e) {
                    "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(),
                        this.iconSpace && this.iconSpace.remove())),
                        "iconPosition" === t && this._updateIcon(t, e),
                        "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e),
                            this._updateTooltip()),
                        "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e),
                            this.icon && (this._attachIcon(this.options.iconPosition),
                                this._attachIconSpace(this.options.iconPosition)))),
                        this._super(t, e),
                        "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e),
                            (this.element[0].disabled = e) && this.element.blur())
                },
                refresh: function () {
                    var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOptions({
                        disabled: t
                    }),
                        this._updateTooltip()
                }
            }),
            !1 !== k.uiBackCompat && (k.widget("ui.button", k.ui.button, {
                options: {
                    text: !0,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function () {
                    this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
                        !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
                        this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
                            this.options.iconPosition = "end"),
                        this._super()
                },
                _setOption: function (t, e) {
                    return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e),
                        "icon" === t && (this.options.icons.primary = e),
                        "icons" === t && (e.primary ? (this._super("icon", e.primary),
                            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary),
                                this._super("iconPosition", "end"))),
                        void this._superApply(arguments))
                }
            }),
                k.fn.button = (et = k.fn.button,
                    function () {
                        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? et.apply(this, arguments) : (k.ui.checkboxradio || k.error("Checkboxradio widget missing"),
                            0 === arguments.length ? this.checkboxradio({
                                icon: !1
                            }) : this.checkboxradio.apply(this, arguments))
                    }
                ),
                k.fn.buttonset = function () {
                    return k.ui.controlgroup || k.error("Controlgroup widget missing"),
                        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                            button: arguments[0].items
                        }),
                            this.controlgroup.apply(this, arguments))
                }
            ),
            k.ui.button,
            k.extend(k.ui, {
                datepicker: {
                    version: "1.12.1"
                }
            }),
            k.extend(t.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function () {
                    return this.dpDiv
                },
                setDefaults: function (t) {
                    return d(this._defaults, t || {}),
                        this
                },
                _attachDatepicker: function (t, e) {
                    var i, s, n;
                    s = "div" === (i = t.nodeName.toLowerCase()) || "span" === i,
                        t.id || (this.uuid += 1,
                            t.id = "dp" + this.uuid),
                        (n = this._newInst(k(t), s)).settings = k.extend({}, e || {}),
                        "input" === i ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
                },
                _newInst: function (t, e) {
                    return {
                        id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                        input: t,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: e,
                        dpDiv: e ? i(k("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function (t, e) {
                    var i = k(t);
                    e.append = k([]),
                        e.trigger = k([]),
                        i.hasClass(this.markerClassName) || (this._attachments(i, e),
                            i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
                            this._autoSize(e),
                            k.data(t, "datepicker", e),
                            e.settings.disabled && this._disableDatepicker(t))
                },
                _attachments: function (t, e) {
                    var i, s, n, a = this._get(e, "appendText"), o = this._get(e, "isRTL");
                    e.append && e.append.remove(),
                        a && (e.append = k("<span class='" + this._appendClass + "'>" + a + "</span>"),
                            t[o ? "before" : "after"](e.append)),
                        t.off("focus", this._showDatepicker),
                        e.trigger && e.trigger.remove(),
                        "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker),
                        "button" !== i && "both" !== i || (s = this._get(e, "buttonText"),
                            n = this._get(e, "buttonImage"),
                            e.trigger = k(this._get(e, "buttonImageOnly") ? k("<img/>").addClass(this._triggerClass).attr({
                                src: n,
                                alt: s,
                                title: s
                            }) : k("<button type='button'></button>").addClass(this._triggerClass).html(n ? k("<img/>").attr({
                                src: n,
                                alt: s,
                                title: s
                            }) : s)),
                            t[o ? "before" : "after"](e.trigger),
                            e.trigger.on("click", function () {
                                return k.datepicker._datepickerShowing && k.datepicker._lastInput === t[0] ? k.datepicker._hideDatepicker() : (k.datepicker._datepickerShowing && k.datepicker._lastInput !== t[0] && k.datepicker._hideDatepicker(),
                                    k.datepicker._showDatepicker(t[0])),
                                    !1
                            }))
                },
                _autoSize: function (t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var e, i, s, n, a = new Date(2009, 11, 20), o = this._get(t, "dateFormat");
                        o.match(/[DM]/) && (e = function (t) {
                            for (n = s = i = 0; t.length > n; n++)
                                t[n].length > i && (i = t[n].length,
                                    s = n);
                            return s
                        }
                            ,
                            a.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                            a.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())),
                            t.input.attr("size", this._formatDate(t, a).length)
                    }
                },
                _inlineDatepicker: function (t, e) {
                    var i = k(t);
                    i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv),
                        k.data(t, "datepicker", e),
                        this._setDate(e, this._getDefaultDate(e), !0),
                        this._updateDatepicker(e),
                        this._updateAlternate(e),
                        e.settings.disabled && this._disableDatepicker(t),
                        e.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function (t, e, i, s, n) {
                    var a, o, r, l, h, c = this._dialogInst;
                    return c || (this.uuid += 1,
                        a = "dp" + this.uuid,
                        this._dialogInput = k("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                        this._dialogInput.on("keydown", this._doKeyDown),
                        k("body").append(this._dialogInput),
                        (c = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
                        k.data(this._dialogInput[0], "datepicker", c)),
                        d(c.settings, s || {}),
                        e = e && e.constructor === Date ? this._formatDate(c, e) : e,
                        this._dialogInput.val(e),
                        this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null,
                        this._pos || (o = document.documentElement.clientWidth,
                            r = document.documentElement.clientHeight,
                            l = document.documentElement.scrollLeft || document.body.scrollLeft,
                            h = document.documentElement.scrollTop || document.body.scrollTop,
                            this._pos = [o / 2 - 100 + l, r / 2 - 150 + h]),
                        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                        c.settings.onSelect = i,
                        this._inDialog = !0,
                        this.dpDiv.addClass(this._dialogClass),
                        this._showDatepicker(this._dialogInput[0]),
                        k.blockUI && k.blockUI(this.dpDiv),
                        k.data(this._dialogInput[0], "datepicker", c),
                        this
                },
                _destroyDatepicker: function (t) {
                    var e, i = k(t), s = k.data(t, "datepicker");
                    i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(),
                        k.removeData(t, "datepicker"),
                        "input" === e ? (s.append.remove(),
                            s.trigger.remove(),
                            i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(),
                        it === s && (it = null))
                },
                _enableDatepicker: function (e) {
                    var t, i, s = k(e), n = k.data(e, "datepicker");
                    s.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1,
                        n.trigger.filter("button").each(function () {
                            this.disabled = !1
                        }).end().filter("img").css({
                            opacity: "1.0",
                            cursor: ""
                        })) : "div" !== t && "span" !== t || ((i = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
                            i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                        this._disabledInputs = k.map(this._disabledInputs, function (t) {
                            return t === e ? null : t
                        }))
                },
                _disableDatepicker: function (e) {
                    var t, i, s = k(e), n = k.data(e, "datepicker");
                    s.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0,
                        n.trigger.filter("button").each(function () {
                            this.disabled = !0
                        }).end().filter("img").css({
                            opacity: "0.5",
                            cursor: "default"
                        })) : "div" !== t && "span" !== t || ((i = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
                            i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                        this._disabledInputs = k.map(this._disabledInputs, function (t) {
                            return t === e ? null : t
                        }),
                        this._disabledInputs[this._disabledInputs.length] = e)
                },
                _isDisabledDatepicker: function (t) {
                    if (!t)
                        return !1;
                    for (var e = 0; this._disabledInputs.length > e; e++)
                        if (this._disabledInputs[e] === t)
                            return !0;
                    return !1
                },
                _getInst: function (t) {
                    try {
                        return k.data(t, "datepicker")
                    } catch (t) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function (t, e, i) {
                    var s, n, a, o, r = this._getInst(t);
                    return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? k.extend({}, k.datepicker._defaults) : r ? "all" === e ? k.extend({}, r.settings) : this._get(r, e) : null : (s = e || {},
                        "string" == typeof e && ((s = {})[e] = i),
                        void (r && (this._curInst === r && this._hideDatepicker(),
                            n = this._getDateDatepicker(t, !0),
                            a = this._getMinMaxDate(r, "min"),
                            o = this._getMinMaxDate(r, "max"),
                            d(r.settings, s),
                            null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (r.settings.minDate = this._formatDate(r, a)),
                            null !== o && void 0 !== s.dateFormat && void 0 === s.maxDate && (r.settings.maxDate = this._formatDate(r, o)),
                            "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
                            this._attachments(k(t), r),
                            this._autoSize(r),
                            this._setDate(r, n),
                            this._updateAlternate(r),
                            this._updateDatepicker(r))))
                },
                _changeDatepicker: function (t, e, i) {
                    this._optionDatepicker(t, e, i)
                },
                _refreshDatepicker: function (t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e)
                },
                _setDateDatepicker: function (t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e),
                        this._updateDatepicker(i),
                        this._updateAlternate(i))
                },
                _getDateDatepicker: function (t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e),
                        i ? this._getDate(i) : null
                },
                _doKeyDown: function (t) {
                    var e, i, s, n = k.datepicker._getInst(t.target), a = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
                    if (n._keyEvent = !0,
                        k.datepicker._datepickerShowing)
                        switch (t.keyCode) {
                            case 9:
                                k.datepicker._hideDatepicker(),
                                    a = !1;
                                break;
                            case 13:
                                return (s = k("td." + k.datepicker._dayOverClass + ":not(." + k.datepicker._currentClass + ")", n.dpDiv))[0] && k.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]),
                                    (e = k.datepicker._get(n, "onSelect")) ? (i = k.datepicker._formatDate(n),
                                        e.apply(n.input ? n.input[0] : null, [i, n])) : k.datepicker._hideDatepicker(),
                                    !1;
                            case 27:
                                k.datepicker._hideDatepicker();
                                break;
                            case 33:
                                k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(n, "stepBigMonths") : -k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 34:
                                k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(n, "stepBigMonths") : +k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 35:
                                (t.ctrlKey || t.metaKey) && k.datepicker._clearDate(t.target),
                                    a = t.ctrlKey || t.metaKey;
                                break;
                            case 36:
                                (t.ctrlKey || t.metaKey) && k.datepicker._gotoToday(t.target),
                                    a = t.ctrlKey || t.metaKey;
                                break;
                            case 37:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
                                    a = t.ctrlKey || t.metaKey,
                                    t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(n, "stepBigMonths") : -k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 38:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, -7, "D"),
                                    a = t.ctrlKey || t.metaKey;
                                break;
                            case 39:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
                                    a = t.ctrlKey || t.metaKey,
                                    t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(n, "stepBigMonths") : +k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 40:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, 7, "D"),
                                    a = t.ctrlKey || t.metaKey;
                                break;
                            default:
                                a = !1
                        }
                    else
                        36 === t.keyCode && t.ctrlKey ? k.datepicker._showDatepicker(this) : a = !1;
                    a && (t.preventDefault(),
                        t.stopPropagation())
                },
                _doKeyPress: function (t) {
                    var e, i, s = k.datepicker._getInst(t.target);
                    return k.datepicker._get(s, "constrainInput") ? (e = k.datepicker._possibleChars(k.datepicker._get(s, "dateFormat")),
                        i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
                        t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)) : void 0
                },
                _doKeyUp: function (t) {
                    var e = k.datepicker._getInst(t.target);
                    if (e.input.val() !== e.lastVal)
                        try {
                            k.datepicker.parseDate(k.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, k.datepicker._getFormatConfig(e)) && (k.datepicker._setDateFromField(e),
                                k.datepicker._updateAlternate(e),
                                k.datepicker._updateDatepicker(e))
                        } catch (t) { }
                    return !0
                },
                _showDatepicker: function (t) {
                    var e, i, s, n, a, o, r;
                    "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = k("input", t.parentNode)[0]),
                        k.datepicker._isDisabledDatepicker(t) || k.datepicker._lastInput === t || (e = k.datepicker._getInst(t),
                            k.datepicker._curInst && k.datepicker._curInst !== e && (k.datepicker._curInst.dpDiv.stop(!0, !0),
                                e && k.datepicker._datepickerShowing && k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),
                            !1 !== (s = (i = k.datepicker._get(e, "beforeShow")) ? i.apply(t, [t, e]) : {}) && (d(e.settings, s),
                                e.lastVal = null,
                                k.datepicker._lastInput = t,
                                k.datepicker._setDateFromField(e),
                                k.datepicker._inDialog && (t.value = ""),
                                k.datepicker._pos || (k.datepicker._pos = k.datepicker._findPos(t),
                                    k.datepicker._pos[1] += t.offsetHeight),
                                n = !1,
                                k(t).parents().each(function () {
                                    return !(n |= "fixed" === k(this).css("position"))
                                }),
                                a = {
                                    left: k.datepicker._pos[0],
                                    top: k.datepicker._pos[1]
                                },
                                k.datepicker._pos = null,
                                e.dpDiv.empty(),
                                e.dpDiv.css({
                                    position: "absolute",
                                    display: "block",
                                    top: "-1000px"
                                }),
                                k.datepicker._updateDatepicker(e),
                                a = k.datepicker._checkOffset(e, a, n),
                                e.dpDiv.css({
                                    position: k.datepicker._inDialog && k.blockUI ? "static" : n ? "fixed" : "absolute",
                                    display: "none",
                                    left: a.left + "px",
                                    top: a.top + "px"
                                }),
                                e.inline || (o = k.datepicker._get(e, "showAnim"),
                                    r = k.datepicker._get(e, "duration"),
                                    e.dpDiv.css("z-index", function (t) {
                                        for (var e, i; t.length && t[0] !== document;) {
                                            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
                                                !isNaN(i) && 0 !== i))
                                                return i;
                                            t = t.parent()
                                        }
                                        return 0
                                    }(k(t)) + 1),
                                    k.datepicker._datepickerShowing = !0,
                                    k.effects && k.effects.effect[o] ? e.dpDiv.show(o, k.datepicker._get(e, "showOptions"), r) : e.dpDiv[o || "show"](o ? r : null),
                                    k.datepicker._shouldFocusInput(e) && e.input.trigger("focus"),
                                    k.datepicker._curInst = e)))
                },
                _updateDatepicker: function (t) {
                    this.maxRows = 4,
                        (it = t).dpDiv.empty().append(this._generateHTML(t)),
                        this._attachHandlers(t);
                    var e, i = this._getNumberOfMonths(t), s = i[1], n = t.dpDiv.find("." + this._dayOverClass + " a");
                    0 < n.length && a.apply(n.get(0)),
                        t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                        1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"),
                        t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                        t === k.datepicker._curInst && k.datepicker._datepickerShowing && k.datepicker._shouldFocusInput(t) && t.input.trigger("focus"),
                        t.yearshtml && (e = t.yearshtml,
                            setTimeout(function () {
                                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                                    e = t.yearshtml = null
                            }, 0))
                },
                _shouldFocusInput: function (t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                },
                _checkOffset: function (t, e, i) {
                    var s = t.dpDiv.outerWidth()
                        , n = t.dpDiv.outerHeight()
                        , a = t.input ? t.input.outerWidth() : 0
                        , o = t.input ? t.input.outerHeight() : 0
                        , r = document.documentElement.clientWidth + (i ? 0 : k(document).scrollLeft())
                        , l = document.documentElement.clientHeight + (i ? 0 : k(document).scrollTop());
                    return e.left -= this._get(t, "isRTL") ? s - a : 0,
                        e.left -= i && e.left === t.input.offset().left ? k(document).scrollLeft() : 0,
                        e.top -= i && e.top === t.input.offset().top + o ? k(document).scrollTop() : 0,
                        e.left -= Math.min(e.left, e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0),
                        e.top -= Math.min(e.top, e.top + n > l && n < l ? Math.abs(n + o) : 0),
                        e
                },
                _findPos: function (t) {
                    for (var e, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || k.expr.filters.hidden(t));)
                        t = t[s ? "previousSibling" : "nextSibling"];
                    return [(e = k(t).offset()).left, e.top]
                },
                _hideDatepicker: function (t) {
                    var e, i, s, n, a = this._curInst;
                    !a || t && a !== k.data(t, "datepicker") || this._datepickerShowing && (e = this._get(a, "showAnim"),
                        i = this._get(a, "duration"),
                        s = function () {
                            k.datepicker._tidyDialog(a)
                        }
                        ,
                        k.effects && (k.effects.effect[e] || k.effects[e]) ? a.dpDiv.hide(e, k.datepicker._get(a, "showOptions"), i, s) : a.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, s),
                        e || s(),
                        this._datepickerShowing = !1,
                        (n = this._get(a, "onClose")) && n.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]),
                        this._lastInput = null,
                        this._inDialog && (this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        }),
                            k.blockUI && (k.unblockUI(),
                                k("body").append(this.dpDiv))),
                        this._inDialog = !1)
                },
                _tidyDialog: function (t) {
                    t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
                },
                _checkExternalClick: function (t) {
                    if (k.datepicker._curInst) {
                        var e = k(t.target)
                            , i = k.datepicker._getInst(e[0]);
                        (e[0].id === k.datepicker._mainDivId || 0 !== e.parents("#" + k.datepicker._mainDivId).length || e.hasClass(k.datepicker.markerClassName) || e.closest("." + k.datepicker._triggerClass).length || !k.datepicker._datepickerShowing || k.datepicker._inDialog && k.blockUI) && (!e.hasClass(k.datepicker.markerClassName) || k.datepicker._curInst === i) || k.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function (t, e, i) {
                    var s = k(t)
                        , n = this._getInst(s[0]);
                    this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" === i ? this._get(n, "showCurrentAtPos") : 0), i),
                        this._updateDatepicker(n))
                },
                _gotoToday: function (t) {
                    var e, i = k(t), s = this._getInst(i[0]);
                    this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay,
                        s.drawMonth = s.selectedMonth = s.currentMonth,
                        s.drawYear = s.selectedYear = s.currentYear) : (e = new Date,
                            s.selectedDay = e.getDate(),
                            s.drawMonth = s.selectedMonth = e.getMonth(),
                            s.drawYear = s.selectedYear = e.getFullYear()),
                        this._notifyChange(s),
                        this._adjustDate(i)
                },
                _selectMonthYear: function (t, e, i) {
                    var s = k(t)
                        , n = this._getInst(s[0]);
                    n["selected" + ("M" === i ? "Month" : "Year")] = n["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10),
                        this._notifyChange(n),
                        this._adjustDate(s)
                },
                _selectDay: function (t, e, i, s) {
                    var n, a = k(t);
                    k(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((n = this._getInst(a[0])).selectedDay = n.currentDay = k("a", s).html(),
                        n.selectedMonth = n.currentMonth = e,
                        n.selectedYear = n.currentYear = i,
                        this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
                },
                _clearDate: function (t) {
                    var e = k(t);
                    this._selectDate(e, "")
                },
                _selectDate: function (t, e) {
                    var i, s = k(t), n = this._getInst(s[0]);
                    e = null != e ? e : this._formatDate(n),
                        n.input && n.input.val(e),
                        this._updateAlternate(n),
                        (i = this._get(n, "onSelect")) ? i.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"),
                        n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(),
                            this._lastInput = n.input[0],
                            "object" != typeof n.input[0] && n.input.trigger("focus"),
                            this._lastInput = null)
                },
                _updateAlternate: function (t) {
                    var e, i, s, n = this._get(t, "altField");
                    n && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        i = this._getDate(t),
                        s = this.formatDate(e, i, this._getFormatConfig(t)),
                        k(n).val(s))
                },
                noWeekends: function (t) {
                    var e = t.getDay();
                    return [0 < e && e < 6, ""]
                },
                iso8601Week: function (t) {
                    var e, i = new Date(t.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                        e = i.getTime(),
                        i.setMonth(0),
                        i.setDate(1),
                        Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                },
                parseDate: function (i, a, t) {
                    if (null == i || null == a)
                        throw "Invalid arguments";
                    if ("" === (a = "object" == typeof a ? "" + a : a + ""))
                        return null;
                    function o(t) {
                        var e = i.length > r + 1 && i.charAt(r + 1) === t;
                        return e && r++,
                            e
                    }
                    function e(t) {
                        var e = o(t)
                            , i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                            , s = RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}")
                            , n = a.substring(d).match(s);
                        if (!n)
                            throw "Missing number at position " + d;
                        return d += n[0].length,
                            parseInt(n[0], 10)
                    }
                    function s(t, e, i) {
                        var s = -1
                            , n = k.map(o(t) ? i : e, function (t, e) {
                                return [[e, t]]
                            }).sort(function (t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (k.each(n, function (t, e) {
                            var i = e[1];
                            return a.substr(d, i.length).toLowerCase() === i.toLowerCase() ? (s = e[0],
                                d += i.length,
                                !1) : void 0
                        }),
                            -1 !== s)
                            return s + 1;
                        throw "Unknown name at position " + d
                    }
                    function n() {
                        if (a.charAt(d) !== i.charAt(r))
                            throw "Unexpected literal at position " + d;
                        d++
                    }
                    var r, l, h, c, d = 0, u = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, p = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10), f = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, m = (t ? t.dayNames : null) || this._defaults.dayNames, g = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, v = (t ? t.monthNames : null) || this._defaults.monthNames, b = -1, w = -1, y = -1, _ = -1, x = !1;
                    for (r = 0; i.length > r; r++)
                        if (x)
                            "'" !== i.charAt(r) || o("'") ? n() : x = !1;
                        else
                            switch (i.charAt(r)) {
                                case "d":
                                    y = e("d");
                                    break;
                                case "D":
                                    s("D", f, m);
                                    break;
                                case "o":
                                    _ = e("o");
                                    break;
                                case "m":
                                    w = e("m");
                                    break;
                                case "M":
                                    w = s("M", g, v);
                                    break;
                                case "y":
                                    b = e("y");
                                    break;
                                case "@":
                                    b = (c = new Date(e("@"))).getFullYear(),
                                        w = c.getMonth() + 1,
                                        y = c.getDate();
                                    break;
                                case "!":
                                    b = (c = new Date((e("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                                        w = c.getMonth() + 1,
                                        y = c.getDate();
                                    break;
                                case "'":
                                    o("'") ? n() : x = !0;
                                    break;
                                default:
                                    n()
                            }
                    if (a.length > d && (h = a.substr(d),
                        !/^\s+/.test(h)))
                        throw "Extra/unparsed characters found in date: " + h;
                    if (-1 === b ? b = (new Date).getFullYear() : b < 100 && (b += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (b <= p ? 0 : -100)),
                        -1 < _)
                        for (w = 1,
                            y = _; !(y <= (l = this._getDaysInMonth(b, w - 1)));)
                            w++,
                                y -= l;
                    if ((c = this._daylightSavingAdjust(new Date(b, w - 1, y))).getFullYear() !== b || c.getMonth() + 1 !== w || c.getDate() !== y)
                        throw "Invalid date";
                    return c
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
                formatDate: function (i, t, e) {
                    if (!t)
                        return "";
                    function n(t) {
                        var e = i.length > o + 1 && i.charAt(o + 1) === t;
                        return e && o++,
                            e
                    }
                    function s(t, e, i) {
                        var s = "" + e;
                        if (n(t))
                            for (; i > s.length;)
                                s = "0" + s;
                        return s
                    }
                    function a(t, e, i, s) {
                        return n(t) ? s[e] : i[e]
                    }
                    var o, r = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, l = (e ? e.dayNames : null) || this._defaults.dayNames, h = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, c = (e ? e.monthNames : null) || this._defaults.monthNames, d = "", u = !1;
                    if (t)
                        for (o = 0; i.length > o; o++)
                            if (u)
                                "'" !== i.charAt(o) || n("'") ? d += i.charAt(o) : u = !1;
                            else
                                switch (i.charAt(o)) {
                                    case "d":
                                        d += s("d", t.getDate(), 2);
                                        break;
                                    case "D":
                                        d += a("D", t.getDay(), r, l);
                                        break;
                                    case "o":
                                        d += s("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                        break;
                                    case "m":
                                        d += s("m", t.getMonth() + 1, 2);
                                        break;
                                    case "M":
                                        d += a("M", t.getMonth(), h, c);
                                        break;
                                    case "y":
                                        d += n("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                        break;
                                    case "@":
                                        d += t.getTime();
                                        break;
                                    case "!":
                                        d += 1e4 * t.getTime() + this._ticksTo1970;
                                        break;
                                    case "'":
                                        n("'") ? d += "'" : u = !0;
                                        break;
                                    default:
                                        d += i.charAt(o)
                                }
                    return d
                },
                _possibleChars: function (i) {
                    function t(t) {
                        var e = i.length > s + 1 && i.charAt(s + 1) === t;
                        return e && s++,
                            e
                    }
                    var s, e = "", n = !1;
                    for (s = 0; i.length > s; s++)
                        if (n)
                            "'" !== i.charAt(s) || t("'") ? e += i.charAt(s) : n = !1;
                        else
                            switch (i.charAt(s)) {
                                case "d":
                                case "m":
                                case "y":
                                case "@":
                                    e += "0123456789";
                                    break;
                                case "D":
                                case "M":
                                    return null;
                                case "'":
                                    t("'") ? e += "'" : n = !0;
                                    break;
                                default:
                                    e += i.charAt(s)
                            }
                    return e
                },
                _get: function (t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function (t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat")
                            , s = t.lastVal = t.input ? t.input.val() : null
                            , n = this._getDefaultDate(t)
                            , a = n
                            , o = this._getFormatConfig(t);
                        try {
                            a = this.parseDate(i, s, o) || n
                        } catch (t) {
                            s = e ? "" : s
                        }
                        t.selectedDay = a.getDate(),
                            t.drawMonth = t.selectedMonth = a.getMonth(),
                            t.drawYear = t.selectedYear = a.getFullYear(),
                            t.currentDay = s ? a.getDate() : 0,
                            t.currentMonth = s ? a.getMonth() : 0,
                            t.currentYear = s ? a.getFullYear() : 0,
                            this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function (t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function (r, t, e) {
                    var i, s, n = null == t || "" === t ? e : "string" == typeof t ? function (t) {
                        try {
                            return k.datepicker.parseDate(k.datepicker._get(r, "dateFormat"), t, k.datepicker._getFormatConfig(r))
                        } catch (t) { }
                        for (var e = (t.toLowerCase().match(/^c/) ? k.datepicker._getDate(r) : null) || new Date, i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = a.exec(t); o;) {
                            switch (o[2] || "d") {
                                case "d":
                                case "D":
                                    n += parseInt(o[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    n += 7 * parseInt(o[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    s += parseInt(o[1], 10),
                                        n = Math.min(n, k.datepicker._getDaysInMonth(i, s));
                                    break;
                                case "y":
                                case "Y":
                                    i += parseInt(o[1], 10),
                                        n = Math.min(n, k.datepicker._getDaysInMonth(i, s))
                            }
                            o = a.exec(t)
                        }
                        return new Date(i, s, n)
                    }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t,
                        (s = new Date).setDate(s.getDate() + i),
                        s) : new Date(t.getTime());
                    return (n = n && "Invalid Date" == "" + n ? e : n) && (n.setHours(0),
                        n.setMinutes(0),
                        n.setSeconds(0),
                        n.setMilliseconds(0)),
                        this._daylightSavingAdjust(n)
                },
                _daylightSavingAdjust: function (t) {
                    return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0),
                        t) : null
                },
                _setDate: function (t, e, i) {
                    var s = !e
                        , n = t.selectedMonth
                        , a = t.selectedYear
                        , o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = o.getDate(),
                        t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(),
                        t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(),
                        n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t),
                        this._adjustInstDate(t),
                        t.input && t.input.val(s ? "" : this._formatDate(t))
                },
                _getDate: function (t) {
                    return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
                },
                _attachHandlers: function (t) {
                    var e = this._get(t, "stepMonths")
                        , i = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function () {
                        var t = {
                            prev: function () {
                                k.datepicker._adjustDate(i, -e, "M")
                            },
                            next: function () {
                                k.datepicker._adjustDate(i, +e, "M")
                            },
                            hide: function () {
                                k.datepicker._hideDatepicker()
                            },
                            today: function () {
                                k.datepicker._gotoToday(i)
                            },
                            selectDay: function () {
                                return k.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                                    !1
                            },
                            selectMonth: function () {
                                return k.datepicker._selectMonthYear(i, this, "M"),
                                    !1
                            },
                            selectYear: function () {
                                return k.datepicker._selectMonthYear(i, this, "Y"),
                                    !1
                            }
                        };
                        k(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function (t) {
                    var e, i, s, n, a, o, r, l, h, c, d, u, p, f, m, g, v, b, w, y, _, x, k, C, T, S, E, D, P, M, I, z, O, A, H, L, $, N, B, W = new Date, F = this._daylightSavingAdjust(new Date(W.getFullYear(), W.getMonth(), W.getDate())), R = this._get(t, "isRTL"), Y = this._get(t, "showButtonPanel"), V = this._get(t, "hideIfNoPrevNext"), j = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), X = this._get(t, "showCurrentAtPos"), G = this._get(t, "stepMonths"), U = 1 !== q[0] || 1 !== q[1], K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), J = t.drawMonth - X, tt = t.drawYear;
                    if (J < 0 && (J += 12,
                        tt--),
                        Q)
                        for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - q[0] * q[1] + 1, Q.getDate())),
                            e = Z && e < Z ? Z : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;)
                            --J < 0 && (J = 11,
                                tt--);
                    for (t.drawMonth = J,
                        t.drawYear = tt,
                        i = this._get(t, "prevText"),
                        i = j ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - G, 1)), this._getFormatConfig(t)) : i,
                        s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : V ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>",
                        n = this._get(t, "nextText"),
                        n = j ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + G, 1)), this._getFormatConfig(t)) : n,
                        a = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + n + "</span></a>" : V ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + n + "</span></a>",
                        o = this._get(t, "currentText"),
                        r = this._get(t, "gotoCurrent") && t.currentDay ? K : F,
                        o = j ? this.formatDate(o, r, this._getFormatConfig(t)) : o,
                        l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                        h = Y ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (R ? "" : l) + "</div>" : "",
                        c = parseInt(this._get(t, "firstDay"), 10),
                        c = isNaN(c) ? 0 : c,
                        d = this._get(t, "showWeek"),
                        u = this._get(t, "dayNames"),
                        p = this._get(t, "dayNamesMin"),
                        f = this._get(t, "monthNames"),
                        m = this._get(t, "monthNamesShort"),
                        g = this._get(t, "beforeShowDay"),
                        v = this._get(t, "showOtherMonths"),
                        b = this._get(t, "selectOtherMonths"),
                        w = this._getDefaultDate(t),
                        y = "",
                        x = 0; q[0] > x; x++) {
                        for (k = "",
                            this.maxRows = 4,
                            C = 0; q[1] > C; C++) {
                            if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)),
                                S = " ui-corner-all",
                                E = "",
                                U) {
                                if (E += "<div class='ui-datepicker-group",
                                    1 < q[1])
                                    switch (C) {
                                        case 0:
                                            E += " ui-datepicker-group-first",
                                                S = " ui-corner-" + (R ? "right" : "left");
                                            break;
                                        case q[1] - 1:
                                            E += " ui-datepicker-group-last",
                                                S = " ui-corner-" + (R ? "left" : "right");
                                            break;
                                        default:
                                            E += " ui-datepicker-group-middle",
                                                S = ""
                                    }
                                E += "'>"
                            }
                            for (E += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? R ? a : s : "") + (/all|right/.test(S) && 0 === x ? R ? s : a : "") + this._generateMonthYearHeader(t, J, tt, Z, Q, 0 < x || 0 < C, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                                D = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                                _ = 0; _ < 7; _++)
                                D += "<th scope='col'" + (5 <= (_ + c + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[P = (_ + c) % 7] + "'>" + p[P] + "</span></th>";
                            for (E += D + "</tr></thead><tbody>",
                                M = this._getDaysInMonth(tt, J),
                                tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)),
                                I = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7,
                                z = Math.ceil((I + M) / 7),
                                O = U && this.maxRows > z ? this.maxRows : z,
                                this.maxRows = O,
                                A = this._daylightSavingAdjust(new Date(tt, J, 1 - I)),
                                H = 0; H < O; H++) {
                                for (E += "<tr>",
                                    L = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "",
                                    _ = 0; _ < 7; _++)
                                    $ = g ? g.apply(t.input ? t.input[0] : null, [A]) : [!0, ""],
                                        B = (N = A.getMonth() !== J) && !b || !$[0] || Z && A < Z || Q && Q < A,
                                        L += "<td class='" + (5 <= (_ + c + 6) % 7 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (A.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || w.getTime() === A.getTime() && w.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (B ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !v ? "" : " " + $[1] + (A.getTime() === K.getTime() ? " " + this._currentClass : "") + (A.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (N && !v || !$[2] ? "" : " title='" + $[2].replace(/'/g, "&#39;") + "'") + (B ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (N && !v ? "&#xa0;" : B ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === F.getTime() ? " ui-state-highlight" : "") + (A.getTime() === K.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>",
                                        A.setDate(A.getDate() + 1),
                                        A = this._daylightSavingAdjust(A);
                                E += L + "</tr>"
                            }
                            11 < ++J && (J = 0,
                                tt++),
                                k += E += "</tbody></table>" + (U ? "</div>" + (0 < q[0] && C === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                        }
                        y += k
                    }
                    return y += h,
                        t._keyEvent = !1,
                        y
                },
                _generateMonthYearHeader: function (t, e, i, s, n, a, o, r) {
                    var l, h, c, d, u, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), b = this._get(t, "showMonthAfterYear"), w = "<div class='ui-datepicker-title'>", y = "";
                    if (a || !g)
                        y += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
                    else {
                        for (l = s && s.getFullYear() === i,
                            h = n && n.getFullYear() === i,
                            y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                            c = 0; c < 12; c++)
                            (!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                        y += "</select>"
                    }
                    if (b || (w += y + (!a && g && v ? "" : "&#xa0;")),
                        !t.yearshtml)
                        if (t.yearshtml = "",
                            a || !v)
                            w += "<span class='ui-datepicker-year'>" + i + "</span>";
                        else {
                            for (d = this._get(t, "yearRange").split(":"),
                                u = (new Date).getFullYear(),
                                f = (p = function (t) {
                                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                                    return isNaN(e) ? u : e
                                }
                                )(d[0]),
                                m = Math.max(f, p(d[1] || "")),
                                f = s ? Math.max(f, s.getFullYear()) : f,
                                m = n ? Math.min(m, n.getFullYear()) : m,
                                t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++)
                                t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            t.yearshtml += "</select>",
                                w += t.yearshtml,
                                t.yearshtml = null
                        }
                    return w += this._get(t, "yearSuffix"),
                        b && (w += (!a && g && v ? "" : "&#xa0;") + y),
                        w + "</div>"
                },
                _adjustInstDate: function (t, e, i) {
                    var s = t.selectedYear + ("Y" === i ? e : 0)
                        , n = t.selectedMonth + ("M" === i ? e : 0)
                        , a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
                        , o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
                    t.selectedDay = o.getDate(),
                        t.drawMonth = t.selectedMonth = o.getMonth(),
                        t.drawYear = t.selectedYear = o.getFullYear(),
                        "M" !== i && "Y" !== i || this._notifyChange(t)
                },
                _restrictMinMax: function (t, e) {
                    var i = this._getMinMaxDate(t, "min")
                        , s = this._getMinMaxDate(t, "max")
                        , n = i && e < i ? i : e;
                    return s && s < n ? s : n
                },
                _notifyChange: function (t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function (t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                },
                _getMinMaxDate: function (t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null)
                },
                _getDaysInMonth: function (t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
                },
                _getFirstDayOfMonth: function (t, e) {
                    return new Date(t, e, 1).getDay()
                },
                _canAdjustMonth: function (t, e, i, s) {
                    var n = this._getNumberOfMonths(t)
                        , a = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                    return e < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())),
                        this._isInRange(t, a)
                },
                _isInRange: function (t, e) {
                    var i, s, n = this._getMinMaxDate(t, "min"), a = this._getMinMaxDate(t, "max"), o = null, r = null, l = this._get(t, "yearRange");
                    return l && (i = l.split(":"),
                        s = (new Date).getFullYear(),
                        o = parseInt(i[0], 10),
                        r = parseInt(i[1], 10),
                        i[0].match(/[+\-].*/) && (o += s),
                        i[1].match(/[+\-].*/) && (r += s)),
                        (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!o || e.getFullYear() >= o) && (!r || r >= e.getFullYear())
                },
                _getFormatConfig: function (t) {
                    var e = this._get(t, "shortYearCutoff");
                    return {
                        shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function (t, e, i, s) {
                    e || (t.currentDay = t.selectedDay,
                        t.currentMonth = t.selectedMonth,
                        t.currentYear = t.selectedYear);
                    var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
                }
            }),
            k.fn.datepicker = function (t) {
                if (!this.length)
                    return this;
                k.datepicker.initialized || (k(document).on("mousedown", k.datepicker._checkExternalClick),
                    k.datepicker.initialized = !0),
                    0 === k("#" + k.datepicker._mainDivId).length && k("body").append(k.datepicker.dpDiv);
                var e = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this[0]].concat(e)) : this.each(function () {
                    "string" == typeof t ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this].concat(e)) : k.datepicker._attachDatepicker(this, t)
                }) : k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this[0]].concat(e))
            }
            ,
            k.datepicker = new t,
            k.datepicker.initialized = !1,
            k.datepicker.uuid = (new Date).getTime(),
            k.datepicker.version = "1.12.1",
            k.datepicker,
            k.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var nt = !1;
        k(document).on("mouseup", function () {
            nt = !1
        }),
            k.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function () {
                    var e = this;
                    this.element.on("mousedown." + this.widgetName, function (t) {
                        return e._mouseDown(t)
                    }).on("click." + this.widgetName, function (t) {
                        return !0 === k.data(t.target, e.widgetName + ".preventClickEvent") ? (k.removeData(t.target, e.widgetName + ".preventClickEvent"),
                            t.stopImmediatePropagation(),
                            !1) : void 0
                    }),
                        this.started = !1
                },
                _mouseDestroy: function () {
                    this.element.off("." + this.widgetName),
                        this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function (t) {
                    if (!nt) {
                        this._mouseMoved = !1,
                            this._mouseStarted && this._mouseUp(t),
                            this._mouseDownEvent = t;
                        var e = this
                            , i = 1 === t.which
                            , s = !("string" != typeof this.options.cancel || !t.target.nodeName) && k(t.target).closest(this.options.cancel).length;
                        return i && !s && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay,
                            this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                                e.mouseDelayMet = !0
                            }, this.options.delay)),
                            this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t),
                                !this._mouseStarted) ? t.preventDefault() : (!0 === k.data(t.target, this.widgetName + ".preventClickEvent") && k.removeData(t.target, this.widgetName + ".preventClickEvent"),
                                    this._mouseMoveDelegate = function (t) {
                                        return e._mouseMove(t)
                                    }
                                    ,
                                    this._mouseUpDelegate = function (t) {
                                        return e._mouseUp(t)
                                    }
                                    ,
                                    this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                                    t.preventDefault(),
                                    nt = !0)),
                            !0
                    }
                },
                _mouseMove: function (t) {
                    if (this._mouseMoved) {
                        if (k.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                            return this._mouseUp(t);
                        if (!t.which)
                            if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                                this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich)
                                return this._mouseUp(t)
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0),
                        this._mouseStarted ? (this._mouseDrag(t),
                            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t),
                                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                                !this._mouseStarted)
                },
                _mouseUp: function (t) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && (this._mouseStarted = !1,
                            t.target === this._mouseDownEvent.target && k.data(t.target, this.widgetName + ".preventClickEvent", !0),
                            this._mouseStop(t)),
                        this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
                            delete this._mouseDelayTimer),
                        this.ignoreMissingWhich = !1,
                        nt = !1,
                        t.preventDefault()
                },
                _mouseDistanceMet: function (t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function () {
                    return this.mouseDelayMet
                },
                _mouseStart: function () { },
                _mouseDrag: function () { },
                _mouseStop: function () { },
                _mouseCapture: function () {
                    return !0
                }
            }),
            k.ui.plugin = {
                add: function (t, e, i) {
                    var s, n = k.ui[t].prototype;
                    for (s in i)
                        n.plugins[s] = n.plugins[s] || [],
                            n.plugins[s].push([e, i[s]])
                },
                call: function (t, e, i, s) {
                    var n, a = t.plugins[e];
                    if (a && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                        for (n = 0; a.length > n; n++)
                            t.options[a[n][0]] && a[n][1].apply(t.element, i)
                }
            },
            k.ui.safeBlur = function (t) {
                t && "body" !== t.nodeName.toLowerCase() && k(t).trigger("blur")
            }
            ,
            k.widget("ui.draggable", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function () {
                    "original" === this.options.helper && this._setPositionRelative(),
                        this.options.addClasses && this._addClass("ui-draggable"),
                        this._setHandleClassName(),
                        this._mouseInit()
                },
                _setOption: function (t, e) {
                    this._super(t, e),
                        "handle" === t && (this._removeHandleClassName(),
                            this._setHandleClassName())
                },
                _destroy: function () {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(),
                        void this._mouseDestroy())
                },
                _mouseCapture: function (t) {
                    var e = this.options;
                    return !(this.helper || e.disabled || 0 < k(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t),
                        !!this.handle && (this._blurActiveElement(t),
                            this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix),
                            !0))
                },
                _blockFrames: function (t) {
                    this.iframeBlocks = this.document.find(t).map(function () {
                        var t = k(this);
                        return k("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(),
                        delete this.iframeBlocks)
                },
                _blurActiveElement: function (t) {
                    var e = k.ui.safeActiveElement(this.document[0]);
                    k(t.target).closest(e).length || k.ui.safeBlur(e)
                },
                _mouseStart: function (t) {
                    var e = this.options;
                    return this.helper = this._createHelper(t),
                        this._addClass(this.helper, "ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                        k.ui.ddmanager && (k.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        this.cssPosition = this.helper.css("position"),
                        this.scrollParent = this.helper.scrollParent(!0),
                        this.offsetParent = this.helper.offsetParent(),
                        this.hasFixedAncestor = 0 < this.helper.parents().filter(function () {
                            return "fixed" === k(this).css("position")
                        }).length,
                        this.positionAbs = this.element.offset(),
                        this._refreshOffsets(t),
                        this.originalPosition = this.position = this._generatePosition(t, !1),
                        this.originalPageX = t.pageX,
                        this.originalPageY = t.pageY,
                        e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
                        this._setContainment(),
                        !1 === this._trigger("start", t) ? (this._clear(),
                            !1) : (this._cacheHelperProportions(),
                                k.ui.ddmanager && !e.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t),
                                this._mouseDrag(t, !0),
                                k.ui.ddmanager && k.ui.ddmanager.dragStart(this, t),
                                !0)
                },
                _refreshOffsets: function (t) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    },
                        this.offset.click = {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        }
                },
                _mouseDrag: function (t, e) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
                        this.position = this._generatePosition(t, !0),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        !e) {
                        var i = this._uiHash();
                        if (!1 === this._trigger("drag", t, i))
                            return this._mouseUp(new k.Event("mouseup", t)),
                                !1;
                        this.position = i.position
                    }
                    return this.helper[0].style.left = this.position.left + "px",
                        this.helper[0].style.top = this.position.top + "px",
                        k.ui.ddmanager && k.ui.ddmanager.drag(this, t),
                        !1
                },
                _mouseStop: function (t) {
                    var e = this
                        , i = !1;
                    return k.ui.ddmanager && !this.options.dropBehaviour && (i = k.ui.ddmanager.drop(this, t)),
                        this.dropped && (i = this.dropped,
                            this.dropped = !1),
                        "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || k.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? k(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                            !1 !== e._trigger("stop", t) && e._clear()
                        }) : !1 !== this._trigger("stop", t) && this._clear(),
                        !1
                },
                _mouseUp: function (t) {
                    return this._unblockFrames(),
                        k.ui.ddmanager && k.ui.ddmanager.dragStop(this, t),
                        this.handleElement.is(t.target) && this.element.trigger("focus"),
                        k.ui.mouse.prototype._mouseUp.call(this, t)
                },
                cancel: function () {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new k.Event("mouseup", {
                        target: this.element[0]
                    })) : this._clear(),
                        this
                },
                _getHandle: function (t) {
                    return !this.options.handle || !!k(t.target).closest(this.element.find(this.options.handle)).length
                },
                _setHandleClassName: function () {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
                        this._addClass(this.handleElement, "ui-draggable-handle")
                },
                _removeHandleClassName: function () {
                    this._removeClass(this.handleElement, "ui-draggable-handle")
                },
                _createHelper: function (t) {
                    var e = this.options
                        , i = k.isFunction(e.helper)
                        , s = i ? k(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                    return s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo),
                        i && s[0] === this.element[0] && this._setPositionRelative(),
                        s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
                        s
                },
                _setPositionRelative: function () {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function (t) {
                    "string" == typeof t && (t = t.split(" ")),
                        k.isArray(t) && (t = {
                            left: +t[0],
                            top: +t[1] || 0
                        }),
                        "left" in t && (this.offset.click.left = t.left + this.margins.left),
                        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                        "top" in t && (this.offset.click.top = t.top + this.margins.top),
                        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _isRootNode: function (t) {
                    return /(html|body)/i.test(t.tagName) || t === this.document[0]
                },
                _getParentOffset: function () {
                    var t = this.offsetParent.offset()
                        , e = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== e && k.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
                        t.top += this.scrollParent.scrollTop()),
                        this._isRootNode(this.offsetParent[0]) && (t = {
                            top: 0,
                            left: 0
                        }),
                    {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function () {
                    if ("relative" !== this.cssPosition)
                        return {
                            top: 0,
                            left: 0
                        };
                    var t = this.element.position()
                        , e = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function () {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function () {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function () {
                    var t, e, i, s = this.options, n = this.document[0];
                    return this.relativeContainer = null,
                        s.containment ? "window" === s.containment ? void (this.containment = [k(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, k(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, k(window).scrollLeft() + k(window).width() - this.helperProportions.width - this.margins.left, k(window).scrollTop() + (k(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void (this.containment = [0, 0, k(n).width() - this.helperProportions.width - this.margins.left, (k(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void (this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
                            void ((i = (e = k(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")),
                                this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                                this.relativeContainer = e))) : void (this.containment = null)
                },
                _convertPositionTo: function (t, e) {
                    e = e || this.position;
                    var i = "absolute" === t ? 1 : -1
                        , s = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                    }
                },
                _generatePosition: function (t, e) {
                    var i, s, n, a, o = this.options, r = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
                    return r && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }),
                        e && (this.containment && (i = this.relativeContainer ? (s = this.relativeContainer.offset(),
                            [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : this.containment,
                            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
                            t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top),
                            t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
                            t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)),
                            o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY,
                                h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n,
                                a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX,
                                l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a),
                            "y" === o.axis && (l = this.originalPageX),
                            "x" === o.axis && (h = this.originalPageY)),
                    {
                        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function () {
                    this._removeClass(this.helper, "ui-draggable-dragging"),
                        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                        this.helper = null,
                        this.cancelHelperRemoval = !1,
                        this.destroyOnClear && this.destroy()
                },
                _trigger: function (t, e, i) {
                    return i = i || this._uiHash(),
                        k.ui.plugin.call(this, t, [e, i, this], !0),
                        /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
                            i.offset = this.positionAbs),
                        k.Widget.prototype._trigger.call(this, t, e, i)
                },
                plugins: {},
                _uiHash: function () {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }),
            k.ui.plugin.add("draggable", "connectToSortable", {
                start: function (e, t, i) {
                    var s = k.extend({}, t, {
                        item: i.element
                    });
                    i.sortables = [],
                        k(i.options.connectToSortable).each(function () {
                            var t = k(this).sortable("instance");
                            t && !t.options.disabled && (i.sortables.push(t),
                                t.refreshPositions(),
                                t._trigger("activate", e, s))
                        })
                },
                stop: function (e, t, i) {
                    var s = k.extend({}, t, {
                        item: i.element
                    });
                    i.cancelHelperRemoval = !1,
                        k.each(i.sortables, function () {
                            var t = this;
                            t.isOver ? (t.isOver = 0,
                                i.cancelHelperRemoval = !0,
                                t.cancelHelperRemoval = !1,
                                t._storedCSS = {
                                    position: t.placeholder.css("position"),
                                    top: t.placeholder.css("top"),
                                    left: t.placeholder.css("left")
                                },
                                t._mouseStop(e),
                                t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0,
                                    t._trigger("deactivate", e, s))
                        })
                },
                drag: function (i, s, n) {
                    k.each(n.sortables, function () {
                        var t = !1
                            , e = this;
                        e.positionAbs = n.positionAbs,
                            e.helperProportions = n.helperProportions,
                            e.offset.click = n.offset.click,
                            e._intersectsWith(e.containerCache) && (t = !0,
                                k.each(n.sortables, function () {
                                    return this.positionAbs = n.positionAbs,
                                        this.helperProportions = n.helperProportions,
                                        this.offset.click = n.offset.click,
                                        this !== e && this._intersectsWith(this.containerCache) && k.contains(e.element[0], this.element[0]) && (t = !1),
                                        t
                                })),
                            t ? (e.isOver || (e.isOver = 1,
                                n._parent = s.helper.parent(),
                                e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0),
                                e.options._helper = e.options.helper,
                                e.options.helper = function () {
                                    return s.helper[0]
                                }
                                ,
                                i.target = e.currentItem[0],
                                e._mouseCapture(i, !0),
                                e._mouseStart(i, !0, !0),
                                e.offset.click.top = n.offset.click.top,
                                e.offset.click.left = n.offset.click.left,
                                e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left,
                                e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top,
                                n._trigger("toSortable", i),
                                n.dropped = e.element,
                                k.each(n.sortables, function () {
                                    this.refreshPositions()
                                }),
                                n.currentItem = n.element,
                                e.fromOutside = n),
                                e.currentItem && (e._mouseDrag(i),
                                    s.position = e.position)) : e.isOver && (e.isOver = 0,
                                        e.cancelHelperRemoval = !0,
                                        e.options._revert = e.options.revert,
                                        e.options.revert = !1,
                                        e._trigger("out", i, e._uiHash(e)),
                                        e._mouseStop(i, !0),
                                        e.options.revert = e.options._revert,
                                        e.options.helper = e.options._helper,
                                        e.placeholder && e.placeholder.remove(),
                                        s.helper.appendTo(n._parent),
                                        n._refreshOffsets(i),
                                        s.position = n._generatePosition(i, !0),
                                        n._trigger("fromSortable", i),
                                        n.dropped = !1,
                                        k.each(n.sortables, function () {
                                            this.refreshPositions()
                                        }))
                    })
                }
            }),
            k.ui.plugin.add("draggable", "cursor", {
                start: function (t, e, i) {
                    var s = k("body")
                        , n = i.options;
                    s.css("cursor") && (n._cursor = s.css("cursor")),
                        s.css("cursor", n.cursor)
                },
                stop: function (t, e, i) {
                    var s = i.options;
                    s._cursor && k("body").css("cursor", s._cursor)
                }
            }),
            k.ui.plugin.add("draggable", "opacity", {
                start: function (t, e, i) {
                    var s = k(e.helper)
                        , n = i.options;
                    s.css("opacity") && (n._opacity = s.css("opacity")),
                        s.css("opacity", n.opacity)
                },
                stop: function (t, e, i) {
                    var s = i.options;
                    s._opacity && k(e.helper).css("opacity", s._opacity)
                }
            }),
            k.ui.plugin.add("draggable", "scroll", {
                start: function (t, e, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                        i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                },
                drag: function (t, e, i) {
                    var s = i.options
                        , n = !1
                        , a = i.scrollParentNotHidden[0]
                        , o = i.document[0];
                    a !== o && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + a.offsetHeight - t.pageY < s.scrollSensitivity ? a.scrollTop = n = a.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = n = a.scrollTop - s.scrollSpeed)),
                        s.axis && "y" === s.axis || (i.overflowOffset.left + a.offsetWidth - t.pageX < s.scrollSensitivity ? a.scrollLeft = n = a.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = n = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - k(o).scrollTop() < s.scrollSensitivity ? n = k(o).scrollTop(k(o).scrollTop() - s.scrollSpeed) : k(window).height() - (t.pageY - k(o).scrollTop()) < s.scrollSensitivity && (n = k(o).scrollTop(k(o).scrollTop() + s.scrollSpeed))),
                            s.axis && "y" === s.axis || (t.pageX - k(o).scrollLeft() < s.scrollSensitivity ? n = k(o).scrollLeft(k(o).scrollLeft() - s.scrollSpeed) : k(window).width() - (t.pageX - k(o).scrollLeft()) < s.scrollSensitivity && (n = k(o).scrollLeft(k(o).scrollLeft() + s.scrollSpeed)))),
                        !1 !== n && k.ui.ddmanager && !s.dropBehaviour && k.ui.ddmanager.prepareOffsets(i, t)
                }
            }),
            k.ui.plugin.add("draggable", "snap", {
                start: function (t, e, i) {
                    var s = i.options;
                    i.snapElements = [],
                        k(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                            var t = k(this)
                                , e = t.offset();
                            this !== i.element[0] && i.snapElements.push({
                                item: this,
                                width: t.outerWidth(),
                                height: t.outerHeight(),
                                top: e.top,
                                left: e.left
                            })
                        })
                },
                drag: function (t, e, i) {
                    var s, n, a, o, r, l, h, c, d, u, p = i.options, f = p.snapTolerance, m = e.offset.left, g = m + i.helperProportions.width, v = e.offset.top, b = v + i.helperProportions.height;
                    for (d = i.snapElements.length - 1; 0 <= d; d--)
                        l = (r = i.snapElements[d].left - i.margins.left) + i.snapElements[d].width,
                            c = (h = i.snapElements[d].top - i.margins.top) + i.snapElements[d].height,
                            g < r - f || l + f < m || b < h - f || c + f < v || !k.contains(i.snapElements[d].item.ownerDocument, i.snapElements[d].item) ? (i.snapElements[d].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, k.extend(i._uiHash(), {
                                snapItem: i.snapElements[d].item
                            })),
                                i.snapElements[d].snapping = !1) : ("inner" !== p.snapMode && (s = f >= Math.abs(h - b),
                                    n = f >= Math.abs(c - v),
                                    a = f >= Math.abs(r - g),
                                    o = f >= Math.abs(l - m),
                                    s && (e.position.top = i._convertPositionTo("relative", {
                                        top: h - i.helperProportions.height,
                                        left: 0
                                    }).top),
                                    n && (e.position.top = i._convertPositionTo("relative", {
                                        top: c,
                                        left: 0
                                    }).top),
                                    a && (e.position.left = i._convertPositionTo("relative", {
                                        top: 0,
                                        left: r - i.helperProportions.width
                                    }).left),
                                    o && (e.position.left = i._convertPositionTo("relative", {
                                        top: 0,
                                        left: l
                                    }).left)),
                                    u = s || n || a || o,
                                    "outer" !== p.snapMode && (s = f >= Math.abs(h - v),
                                        n = f >= Math.abs(c - b),
                                        a = f >= Math.abs(r - m),
                                        o = f >= Math.abs(l - g),
                                        s && (e.position.top = i._convertPositionTo("relative", {
                                            top: h,
                                            left: 0
                                        }).top),
                                        n && (e.position.top = i._convertPositionTo("relative", {
                                            top: c - i.helperProportions.height,
                                            left: 0
                                        }).top),
                                        a && (e.position.left = i._convertPositionTo("relative", {
                                            top: 0,
                                            left: r
                                        }).left),
                                        o && (e.position.left = i._convertPositionTo("relative", {
                                            top: 0,
                                            left: l - i.helperProportions.width
                                        }).left)),
                                    !i.snapElements[d].snapping && (s || n || a || o || u) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, k.extend(i._uiHash(), {
                                        snapItem: i.snapElements[d].item
                                    })),
                                    i.snapElements[d].snapping = s || n || a || o || u)
                }
            }),
            k.ui.plugin.add("draggable", "stack", {
                start: function (t, e, i) {
                    var s, n = i.options, a = k.makeArray(k(n.stack)).sort(function (t, e) {
                        return (parseInt(k(t).css("zIndex"), 10) || 0) - (parseInt(k(e).css("zIndex"), 10) || 0)
                    });
                    a.length && (s = parseInt(k(a[0]).css("zIndex"), 10) || 0,
                        k(a).each(function (t) {
                            k(this).css("zIndex", s + t)
                        }),
                        this.css("zIndex", s + a.length))
                }
            }),
            k.ui.plugin.add("draggable", "zIndex", {
                start: function (t, e, i) {
                    var s = k(e.helper)
                        , n = i.options;
                    s.css("zIndex") && (n._zIndex = s.css("zIndex")),
                        s.css("zIndex", n.zIndex)
                },
                stop: function (t, e, i) {
                    var s = i.options;
                    s._zIndex && k(e.helper).css("zIndex", s._zIndex)
                }
            }),
            k.ui.draggable,
            k.widget("ui.resizable", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    classes: {
                        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                    },
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function (t) {
                    return parseFloat(t) || 0
                },
                _isNumber: function (t) {
                    return !isNaN(parseFloat(t))
                },
                _hasScroll: function (t, e) {
                    if ("hidden" === k(t).css("overflow"))
                        return !1;
                    var i = e && "left" === e ? "scrollLeft" : "scrollTop"
                        , s = !1;
                    return 0 < t[i] || (t[i] = 1,
                        s = 0 < t[i],
                        t[i] = 0,
                        s)
                },
                _create: function () {
                    var t, e = this.options, i = this;
                    this._addClass("ui-resizable"),
                        k.extend(this, {
                            _aspectRatio: !!e.aspectRatio,
                            aspectRatio: e.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
                        }),
                        this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })),
                            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
                            this.elementIsWrapper = !0,
                            t = {
                                marginTop: this.originalElement.css("marginTop"),
                                marginRight: this.originalElement.css("marginRight"),
                                marginBottom: this.originalElement.css("marginBottom"),
                                marginLeft: this.originalElement.css("marginLeft")
                            },
                            this.element.css(t),
                            this.originalElement.css("margin", 0),
                            this.originalResizeStyle = this.originalElement.css("resize"),
                            this.originalElement.css("resize", "none"),
                            this._proportionallyResizeElements.push(this.originalElement.css({
                                position: "static",
                                zoom: 1,
                                display: "block"
                            })),
                            this.originalElement.css(t),
                            this._proportionallyResize()),
                        this._setupHandles(),
                        e.autoHide && k(this.element).on("mouseenter", function () {
                            e.disabled || (i._removeClass("ui-resizable-autohide"),
                                i._handles.show())
                        }).on("mouseleave", function () {
                            e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"),
                                i._handles.hide())
                        }),
                        this._mouseInit()
                },
                _destroy: function () {
                    this._mouseDestroy();
                    function t(t) {
                        k(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                    }
                    var e;
                    return this.elementIsWrapper && (t(this.element),
                        e = this.element,
                        this.originalElement.css({
                            position: e.css("position"),
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: e.css("top"),
                            left: e.css("left")
                        }).insertAfter(e),
                        e.remove()),
                        this.originalElement.css("resize", this.originalResizeStyle),
                        t(this.originalElement),
                        this
                },
                _setOption: function (t, e) {
                    switch (this._super(t, e),
                    t) {
                        case "handles":
                            this._removeHandles(),
                                this._setupHandles()
                    }
                },
                _setupHandles: function () {
                    var t, e, i, s, n, a = this.options, o = this;
                    if (this.handles = a.handles || (k(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"),
                        this._handles = k(),
                        this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                            i = this.handles.split(","),
                            this.handles = {},
                            e = 0; i.length > e; e++)
                            s = "ui-resizable-" + (t = k.trim(i[e])),
                                n = k("<div>"),
                                this._addClass(n, "ui-resizable-handle " + s),
                                n.css({
                                    zIndex: a.zIndex
                                }),
                                this.handles[t] = ".ui-resizable-" + t,
                                this.element.append(n);
                    this._renderAxis = function (t) {
                        var e, i, s, n;
                        for (e in t = t || this.element,
                            this.handles)
                            this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = k(this.handles[e]),
                                this._on(this.handles[e], {
                                    mousedown: o._mouseDown
                                })),
                                this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = k(this.handles[e], this.element),
                                    n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(),
                                    s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""),
                                    t.css(s, n),
                                    this._proportionallyResize()),
                                this._handles = this._handles.add(this.handles[e])
                    }
                        ,
                        this._renderAxis(this.element),
                        this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
                        this._handles.disableSelection(),
                        this._handles.on("mouseover", function () {
                            o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                                o.axis = n && n[1] ? n[1] : "se")
                        }),
                        a.autoHide && (this._handles.hide(),
                            this._addClass("ui-resizable-autohide"))
                },
                _removeHandles: function () {
                    this._handles.remove()
                },
                _mouseCapture: function (t) {
                    var e, i, s = !1;
                    for (e in this.handles)
                        (i = k(this.handles[e])[0]) !== t.target && !k.contains(i, t.target) || (s = !0);
                    return !this.options.disabled && s
                },
                _mouseStart: function (t) {
                    var e, i, s, n = this.options, a = this.element;
                    return this.resizing = !0,
                        this._renderProxy(),
                        e = this._num(this.helper.css("left")),
                        i = this._num(this.helper.css("top")),
                        n.containment && (e += k(n.containment).scrollLeft() || 0,
                            i += k(n.containment).scrollTop() || 0),
                        this.offset = this.helper.offset(),
                        this.position = {
                            left: e,
                            top: i
                        },
                        this.size = this._helper ? {
                            width: this.helper.width(),
                            height: this.helper.height()
                        } : {
                            width: a.width(),
                            height: a.height()
                        },
                        this.originalSize = this._helper ? {
                            width: a.outerWidth(),
                            height: a.outerHeight()
                        } : {
                            width: a.width(),
                            height: a.height()
                        },
                        this.sizeDiff = {
                            width: a.outerWidth() - a.width(),
                            height: a.outerHeight() - a.height()
                        },
                        this.originalPosition = {
                            left: e,
                            top: i
                        },
                        this.originalMousePosition = {
                            left: t.pageX,
                            top: t.pageY
                        },
                        this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                        s = k(".ui-resizable-" + this.axis).css("cursor"),
                        k("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
                        this._addClass("ui-resizable-resizing"),
                        this._propagate("start", t),
                        !0
                },
                _mouseDrag: function (t) {
                    var e, i, s = this.originalMousePosition, n = this.axis, a = t.pageX - s.left || 0, o = t.pageY - s.top || 0, r = this._change[n];
                    return this._updatePrevProperties(),
                        r && (e = r.apply(this, [t, a, o]),
                            this._updateVirtualBoundaries(t.shiftKey),
                            (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
                            e = this._respectSize(e, t),
                            this._updateCache(e),
                            this._propagate("resize", t),
                            i = this._applyChanges(),
                            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                            k.isEmptyObject(i) || (this._updatePrevProperties(),
                                this._trigger("resize", t, this.ui()),
                                this._applyChanges())),
                        !1
                },
                _mouseStop: function (t) {
                    this.resizing = !1;
                    var e, i, s, n, a, o, r, l = this.options, h = this;
                    return this._helper && (s = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : h.sizeDiff.height,
                        n = i ? 0 : h.sizeDiff.width,
                        a = {
                            width: h.helper.width() - n,
                            height: h.helper.height() - s
                        },
                        o = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null,
                        r = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null,
                        l.animate || this.element.css(k.extend(a, {
                            top: r,
                            left: o
                        })),
                        h.helper.height(h.size.height),
                        h.helper.width(h.size.width),
                        this._helper && !l.animate && this._proportionallyResize()),
                        k("body").css("cursor", "auto"),
                        this._removeClass("ui-resizable-resizing"),
                        this._propagate("stop", t),
                        this._helper && this.helper.remove(),
                        !1
                },
                _updatePrevProperties: function () {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    },
                        this.prevSize = {
                            width: this.size.width,
                            height: this.size.height
                        }
                },
                _applyChanges: function () {
                    var t = {};
                    return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
                        this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
                        this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
                        this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
                        this.helper.css(t),
                        t
                },
                _updateVirtualBoundaries: function (t) {
                    var e, i, s, n, a, o = this.options;
                    a = {
                        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                    },
                        (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio,
                            s = a.minWidth / this.aspectRatio,
                            i = a.maxHeight * this.aspectRatio,
                            n = a.maxWidth / this.aspectRatio,
                            e > a.minWidth && (a.minWidth = e),
                            s > a.minHeight && (a.minHeight = s),
                            a.maxWidth > i && (a.maxWidth = i),
                            a.maxHeight > n && (a.maxHeight = n)),
                        this._vBoundaries = a
                },
                _updateCache: function (t) {
                    this.offset = this.helper.offset(),
                        this._isNumber(t.left) && (this.position.left = t.left),
                        this._isNumber(t.top) && (this.position.top = t.top),
                        this._isNumber(t.height) && (this.size.height = t.height),
                        this._isNumber(t.width) && (this.size.width = t.width)
                },
                _updateRatio: function (t) {
                    var e = this.position
                        , i = this.size
                        , s = this.axis;
                    return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
                        "sw" === s && (t.left = e.left + (i.width - t.width),
                            t.top = null),
                        "nw" === s && (t.top = e.top + (i.height - t.height),
                            t.left = e.left + (i.width - t.width)),
                        t
                },
                _respectSize: function (t) {
                    var e = this._vBoundaries
                        , i = this.axis
                        , s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
                        , n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
                        , a = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
                        , o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
                        , r = this.originalPosition.left + this.originalSize.width
                        , l = this.originalPosition.top + this.originalSize.height
                        , h = /sw|nw|w/.test(i)
                        , c = /nw|ne|n/.test(i);
                    return a && (t.width = e.minWidth),
                        o && (t.height = e.minHeight),
                        s && (t.width = e.maxWidth),
                        n && (t.height = e.maxHeight),
                        a && h && (t.left = r - e.minWidth),
                        s && h && (t.left = r - e.maxWidth),
                        o && c && (t.top = l - e.minHeight),
                        n && c && (t.top = l - e.maxHeight),
                        t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
                        t
                },
                _getPaddingPlusBorderDimensions: function (t) {
                    for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++)
                        i[e] = parseFloat(s[e]) || 0,
                            i[e] += parseFloat(n[e]) || 0;
                    return {
                        height: i[0] + i[2],
                        width: i[1] + i[3]
                    }
                },
                _proportionallyResize: function () {
                    if (this._proportionallyResizeElements.length)
                        for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
                            t = this._proportionallyResizeElements[e],
                                this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                                t.css({
                                    height: i.height() - this.outerDimensions.height || 0,
                                    width: i.width() - this.outerDimensions.width || 0
                                })
                },
                _renderProxy: function () {
                    var t = this.element
                        , e = this.options;
                    this.elementOffset = t.offset(),
                        this._helper ? (this.helper = this.helper || k("<div style='overflow:hidden;'></div>"),
                            this._addClass(this.helper, this._helper),
                            this.helper.css({
                                width: this.element.outerWidth(),
                                height: this.element.outerHeight(),
                                position: "absolute",
                                left: this.elementOffset.left + "px",
                                top: this.elementOffset.top + "px",
                                zIndex: ++e.zIndex
                            }),
                            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function (t, e) {
                        return {
                            width: this.originalSize.width + e
                        }
                    },
                    w: function (t, e) {
                        var i = this.originalSize;
                        return {
                            left: this.originalPosition.left + e,
                            width: i.width - e
                        }
                    },
                    n: function (t, e, i) {
                        var s = this.originalSize;
                        return {
                            top: this.originalPosition.top + i,
                            height: s.height - i
                        }
                    },
                    s: function (t, e, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    },
                    se: function (t, e, i) {
                        return k.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                    },
                    sw: function (t, e, i) {
                        return k.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                    },
                    ne: function (t, e, i) {
                        return k.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                    },
                    nw: function (t, e, i) {
                        return k.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                    }
                },
                _propagate: function (t, e) {
                    k.ui.plugin.call(this, t, [e, this.ui()]),
                        "resize" !== t && this._trigger(t, e, this.ui())
                },
                plugins: {},
                ui: function () {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }),
            k.ui.plugin.add("resizable", "animate", {
                stop: function (e) {
                    var i = k(this).resizable("instance")
                        , t = i.options
                        , s = i._proportionallyResizeElements
                        , n = s.length && /textarea/i.test(s[0].nodeName)
                        , a = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height
                        , o = n ? 0 : i.sizeDiff.width
                        , r = {
                            width: i.size.width - o,
                            height: i.size.height - a
                        }
                        , l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
                        , h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(k.extend(r, h && l ? {
                        top: h,
                        left: l
                    } : {}), {
                        duration: t.animateDuration,
                        easing: t.animateEasing,
                        step: function () {
                            var t = {
                                width: parseFloat(i.element.css("width")),
                                height: parseFloat(i.element.css("height")),
                                top: parseFloat(i.element.css("top")),
                                left: parseFloat(i.element.css("left"))
                            };
                            s && s.length && k(s[0]).css({
                                width: t.width,
                                height: t.height
                            }),
                                i._updateCache(t),
                                i._propagate("resize", e)
                        }
                    })
                }
            }),
            k.ui.plugin.add("resizable", "containment", {
                start: function () {
                    var i, s, t, e, n, a, o, r = k(this).resizable("instance"), l = r.options, h = r.element, c = l.containment, d = c instanceof k ? c.get(0) : /parent/.test(c) ? h.parent().get(0) : c;
                    d && (r.containerElement = k(d),
                        /document/.test(c) || c === document ? (r.containerOffset = {
                            left: 0,
                            top: 0
                        },
                            r.containerPosition = {
                                left: 0,
                                top: 0
                            },
                            r.parentData = {
                                element: k(document),
                                left: 0,
                                top: 0,
                                width: k(document).width(),
                                height: k(document).height() || document.body.parentNode.scrollHeight
                            }) : (i = k(d),
                                s = [],
                                k(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                                    s[t] = r._num(i.css("padding" + e))
                                }),
                                r.containerOffset = i.offset(),
                                r.containerPosition = i.position(),
                                r.containerSize = {
                                    height: i.innerHeight() - s[3],
                                    width: i.innerWidth() - s[1]
                                },
                                t = r.containerOffset,
                                e = r.containerSize.height,
                                n = r.containerSize.width,
                                a = r._hasScroll(d, "left") ? d.scrollWidth : n,
                                o = r._hasScroll(d) ? d.scrollHeight : e,
                                r.parentData = {
                                    element: d,
                                    left: t.left,
                                    top: t.top,
                                    width: a,
                                    height: o
                                }))
                },
                resize: function (t) {
                    var e, i, s, n, a = k(this).resizable("instance"), o = a.options, r = a.containerOffset, l = a.position, h = a._aspectRatio || t.shiftKey, c = {
                        top: 0,
                        left: 0
                    }, d = a.containerElement, u = !0;
                    d[0] !== document && /static/.test(d.css("position")) && (c = r),
                        l.left < (a._helper ? r.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - r.left : a.position.left - c.left),
                            h && (a.size.height = a.size.width / a.aspectRatio,
                                u = !1),
                            a.position.left = o.helper ? r.left : 0),
                        l.top < (a._helper ? r.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - r.top : a.position.top),
                            h && (a.size.width = a.size.height * a.aspectRatio,
                                u = !1),
                            a.position.top = a._helper ? r.top : 0),
                        s = a.containerElement.get(0) === a.element.parent().get(0),
                        n = /relative|absolute/.test(a.containerElement.css("position")),
                        s && n ? (a.offset.left = a.parentData.left + a.position.left,
                            a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left,
                                a.offset.top = a.element.offset().top),
                        e = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left : a.offset.left - r.left)),
                        i = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top : a.offset.top - r.top)),
                        e + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - e,
                            h && (a.size.height = a.size.width / a.aspectRatio,
                                u = !1)),
                        i + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - i,
                            h && (a.size.width = a.size.height * a.aspectRatio,
                                u = !1)),
                        u || (a.position.left = a.prevPosition.left,
                            a.position.top = a.prevPosition.top,
                            a.size.width = a.prevSize.width,
                            a.size.height = a.prevSize.height)
                },
                stop: function () {
                    var t = k(this).resizable("instance")
                        , e = t.options
                        , i = t.containerOffset
                        , s = t.containerPosition
                        , n = t.containerElement
                        , a = k(t.helper)
                        , o = a.offset()
                        , r = a.outerWidth() - t.sizeDiff.width
                        , l = a.outerHeight() - t.sizeDiff.height;
                    t._helper && !e.animate && /relative/.test(n.css("position")) && k(this).css({
                        left: o.left - s.left - i.left,
                        width: r,
                        height: l
                    }),
                        t._helper && !e.animate && /static/.test(n.css("position")) && k(this).css({
                            left: o.left - s.left - i.left,
                            width: r,
                            height: l
                        })
                }
            }),
            k.ui.plugin.add("resizable", "alsoResize", {
                start: function () {
                    var t = k(this).resizable("instance").options;
                    k(t.alsoResize).each(function () {
                        var t = k(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseFloat(t.width()),
                            height: parseFloat(t.height()),
                            left: parseFloat(t.css("left")),
                            top: parseFloat(t.css("top"))
                        })
                    })
                },
                resize: function (t, i) {
                    var e = k(this).resizable("instance")
                        , s = e.options
                        , n = e.originalSize
                        , a = e.originalPosition
                        , o = {
                            height: e.size.height - n.height || 0,
                            width: e.size.width - n.width || 0,
                            top: e.position.top - a.top || 0,
                            left: e.position.left - a.left || 0
                        };
                    k(s.alsoResize).each(function () {
                        var t = k(this)
                            , s = k(this).data("ui-resizable-alsoresize")
                            , n = {}
                            , e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        k.each(e, function (t, e) {
                            var i = (s[e] || 0) + (o[e] || 0);
                            i && 0 <= i && (n[e] = i || null)
                        }),
                            t.css(n)
                    })
                },
                stop: function () {
                    k(this).removeData("ui-resizable-alsoresize")
                }
            }),
            k.ui.plugin.add("resizable", "ghost", {
                start: function () {
                    var t = k(this).resizable("instance")
                        , e = t.size;
                    t.ghost = t.originalElement.clone(),
                        t.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: e.height,
                            width: e.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }),
                        t._addClass(t.ghost, "ui-resizable-ghost"),
                        !1 !== k.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
                        t.ghost.appendTo(t.helper)
                },
                resize: function () {
                    var t = k(this).resizable("instance");
                    t.ghost && t.ghost.css({
                        position: "relative",
                        height: t.size.height,
                        width: t.size.width
                    })
                },
                stop: function () {
                    var t = k(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }),
            k.ui.plugin.add("resizable", "grid", {
                resize: function () {
                    var t, e = k(this).resizable("instance"), i = e.options, s = e.size, n = e.originalSize, a = e.originalPosition, o = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, l = r[0] || 1, h = r[1] || 1, c = Math.round((s.width - n.width) / l) * l, d = Math.round((s.height - n.height) / h) * h, u = n.width + c, p = n.height + d, f = i.maxWidth && u > i.maxWidth, m = i.maxHeight && p > i.maxHeight, g = i.minWidth && i.minWidth > u, v = i.minHeight && i.minHeight > p;
                    i.grid = r,
                        g && (u += l),
                        v && (p += h),
                        f && (u -= l),
                        m && (p -= h),
                        /^(se|s|e)$/.test(o) ? (e.size.width = u,
                            e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = u,
                                e.size.height = p,
                                e.position.top = a.top - d) : /^(sw)$/.test(o) ? (e.size.width = u,
                                    e.size.height = p,
                                    e.position.left = a.left - c) : ((p - h <= 0 || u - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)),
                                        0 < p - h ? (e.size.height = p,
                                            e.position.top = a.top - d) : (p = h - t.height,
                                                e.size.height = p,
                                                e.position.top = a.top + n.height - p),
                                        0 < u - l ? (e.size.width = u,
                                            e.position.left = a.left - c) : (u = l - t.width,
                                                e.size.width = u,
                                                e.position.left = a.left + n.width - u))
                }
            }),
            k.ui.resizable,
            k.widget("ui.dialog", {
                version: "1.12.1",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    classes: {
                        "ui-dialog": "ui-corner-all",
                        "ui-dialog-titlebar": "ui-corner-all"
                    },
                    closeOnEscape: !0,
                    closeText: "Close",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function (t) {
                            var e = k(this).css(t).offset().top;
                            e < 0 && k(this).css("top", t.top - e)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                sizeRelatedOptions: {
                    buttons: !0,
                    height: !0,
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0,
                    width: !0
                },
                resizableRelatedOptions: {
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0
                },
                _create: function () {
                    this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height
                    },
                        this.originalPosition = {
                            parent: this.element.parent(),
                            index: this.element.parent().children().index(this.element)
                        },
                        this.originalTitle = this.element.attr("title"),
                        null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
                        this.options.disabled && (this.options.disabled = !1),
                        this._createWrapper(),
                        this.element.show().removeAttr("title").appendTo(this.uiDialog),
                        this._addClass("ui-dialog-content", "ui-widget-content"),
                        this._createTitlebar(),
                        this._createButtonPane(),
                        this.options.draggable && k.fn.draggable && this._makeDraggable(),
                        this.options.resizable && k.fn.resizable && this._makeResizable(),
                        this._isOpen = !1,
                        this._trackFocus()
                },
                _init: function () {
                    this.options.autoOpen && this.open()
                },
                _appendTo: function () {
                    var t = this.options.appendTo;
                    return t && (t.jquery || t.nodeType) ? k(t) : this.document.find(t || "body").eq(0)
                },
                _destroy: function () {
                    var t, e = this.originalPosition;
                    this._untrackInstance(),
                        this._destroyOverlay(),
                        this.element.removeUniqueId().css(this.originalCss).detach(),
                        this.uiDialog.remove(),
                        this.originalTitle && this.element.attr("title", this.originalTitle),
                        (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function () {
                    return this.uiDialog
                },
                disable: k.noop,
                enable: k.noop,
                close: function (t) {
                    var e = this;
                    this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1,
                        this._focusedElement = null,
                        this._destroyOverlay(),
                        this._untrackInstance(),
                        this.opener.filter(":focusable").trigger("focus").length || k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),
                        this._hide(this.uiDialog, this.options.hide, function () {
                            e._trigger("close", t)
                        }))
                },
                isOpen: function () {
                    return this._isOpen
                },
                moveToTop: function () {
                    this._moveToTop()
                },
                _moveToTop: function (t, e) {
                    var i = !1
                        , s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                            return +k(this).css("z-index")
                        }).get()
                        , n = Math.max.apply(null, s);
                    return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1),
                        i = !0),
                        i && !e && this._trigger("focus", t),
                        i
                },
                open: function () {
                    var t = this;
                    return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0,
                        this.opener = k(k.ui.safeActiveElement(this.document[0])),
                        this._size(),
                        this._position(),
                        this._createOverlay(),
                        this._moveToTop(null, !0),
                        this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                        this._show(this.uiDialog, this.options.show, function () {
                            t._focusTabbable(),
                                t._trigger("focus")
                        }),
                        this._makeFocusTarget(),
                        void this._trigger("open"))
                },
                _focusTabbable: function () {
                    var t = this._focusedElement;
                    (t = t || this.element.find("[autofocus]")).length || (t = this.element.find(":tabbable")),
                        t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
                        t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
                        t.length || (t = this.uiDialog),
                        t.eq(0).trigger("focus")
                },
                _keepFocus: function (t) {
                    function e() {
                        var t = k.ui.safeActiveElement(this.document[0]);
                        this.uiDialog[0] === t || k.contains(this.uiDialog[0], t) || this._focusTabbable()
                    }
                    t.preventDefault(),
                        e.call(this),
                        this._delay(e)
                },
                _createWrapper: function () {
                    this.uiDialog = k("<div>").hide().attr({
                        tabIndex: -1,
                        role: "dialog"
                    }).appendTo(this._appendTo()),
                        this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
                        this._on(this.uiDialog, {
                            keydown: function (t) {
                                if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === k.ui.keyCode.ESCAPE)
                                    return t.preventDefault(),
                                        void this.close(t);
                                if (t.keyCode === k.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                                    var e = this.uiDialog.find(":tabbable")
                                        , i = e.filter(":first")
                                        , s = e.filter(":last");
                                    t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                                        s.trigger("focus")
                                    }),
                                        t.preventDefault()) : (this._delay(function () {
                                            i.trigger("focus")
                                        }),
                                            t.preventDefault())
                                }
                            },
                            mousedown: function (t) {
                                this._moveToTop(t) && this._focusTabbable()
                            }
                        }),
                        this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                            "aria-describedby": this.element.uniqueId().attr("id")
                        })
                },
                _createTitlebar: function () {
                    var t;
                    this.uiDialogTitlebar = k("<div>"),
                        this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
                        this._on(this.uiDialogTitlebar, {
                            mousedown: function (t) {
                                k(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                            }
                        }),
                        this.uiDialogTitlebarClose = k("<button type='button'></button>").button({
                            label: k("<a>").text(this.options.closeText).html(),
                            icon: "ui-icon-closethick",
                            showLabel: !1
                        }).appendTo(this.uiDialogTitlebar),
                        this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
                        this._on(this.uiDialogTitlebarClose, {
                            click: function (t) {
                                t.preventDefault(),
                                    this.close(t)
                            }
                        }),
                        t = k("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
                        this._addClass(t, "ui-dialog-title"),
                        this._title(t),
                        this.uiDialogTitlebar.prependTo(this.uiDialog),
                        this.uiDialog.attr({
                            "aria-labelledby": t.attr("id")
                        })
                },
                _title: function (t) {
                    this.options.title ? t.text(this.options.title) : t.html("&#160;")
                },
                _createButtonPane: function () {
                    this.uiDialogButtonPane = k("<div>"),
                        this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
                        this.uiButtonSet = k("<div>").appendTo(this.uiDialogButtonPane),
                        this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
                        this._createButtons()
                },
                _createButtons: function () {
                    var n = this
                        , t = this.options.buttons;
                    return this.uiDialogButtonPane.remove(),
                        this.uiButtonSet.empty(),
                        k.isEmptyObject(t) || k.isArray(t) && !t.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (k.each(t, function (t, e) {
                            var i, s;
                            e = k.isFunction(e) ? {
                                click: e,
                                text: t
                            } : e,
                                e = k.extend({
                                    type: "button"
                                }, e),
                                i = e.click,
                                s = {
                                    icon: e.icon,
                                    iconPosition: e.iconPosition,
                                    showLabel: e.showLabel,
                                    icons: e.icons,
                                    text: e.text
                                },
                                delete e.click,
                                delete e.icon,
                                delete e.iconPosition,
                                delete e.showLabel,
                                delete e.icons,
                                "boolean" == typeof e.text && delete e.text,
                                k("<button></button>", e).button(s).appendTo(n.uiButtonSet).on("click", function () {
                                    i.apply(n.element[0], arguments)
                                })
                        }),
                            this._addClass(this.uiDialog, "ui-dialog-buttons"),
                            void this.uiDialogButtonPane.appendTo(this.uiDialog))
                },
                _makeDraggable: function () {
                    function n(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    var a = this
                        , o = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function (t, e) {
                            a._addClass(k(this), "ui-dialog-dragging"),
                                a._blockFrames(),
                                a._trigger("dragStart", t, n(e))
                        },
                        drag: function (t, e) {
                            a._trigger("drag", t, n(e))
                        },
                        stop: function (t, e) {
                            var i = e.offset.left - a.document.scrollLeft()
                                , s = e.offset.top - a.document.scrollTop();
                            o.position = {
                                my: "left top",
                                at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
                                of: a.window
                            },
                                a._removeClass(k(this), "ui-dialog-dragging"),
                                a._unblockFrames(),
                                a._trigger("dragStop", t, n(e))
                        }
                    })
                },
                _makeResizable: function () {
                    function a(t) {
                        return {
                            originalPosition: t.originalPosition,
                            originalSize: t.originalSize,
                            position: t.position,
                            size: t.size
                        }
                    }
                    var o = this
                        , r = this.options
                        , t = r.resizable
                        , e = this.uiDialog.css("position")
                        , i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: r.maxWidth,
                        maxHeight: r.maxHeight,
                        minWidth: r.minWidth,
                        minHeight: this._minHeight(),
                        handles: i,
                        start: function (t, e) {
                            o._addClass(k(this), "ui-dialog-resizing"),
                                o._blockFrames(),
                                o._trigger("resizeStart", t, a(e))
                        },
                        resize: function (t, e) {
                            o._trigger("resize", t, a(e))
                        },
                        stop: function (t, e) {
                            var i = o.uiDialog.offset()
                                , s = i.left - o.document.scrollLeft()
                                , n = i.top - o.document.scrollTop();
                            r.height = o.uiDialog.height(),
                                r.width = o.uiDialog.width(),
                                r.position = {
                                    my: "left top",
                                    at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= n ? "+" : "") + n,
                                    of: o.window
                                },
                                o._removeClass(k(this), "ui-dialog-resizing"),
                                o._unblockFrames(),
                                o._trigger("resizeStop", t, a(e))
                        }
                    }).css("position", e)
                },
                _trackFocus: function () {
                    this._on(this.widget(), {
                        focusin: function (t) {
                            this._makeFocusTarget(),
                                this._focusedElement = k(t.target)
                        }
                    })
                },
                _makeFocusTarget: function () {
                    this._untrackInstance(),
                        this._trackingInstances().unshift(this)
                },
                _untrackInstance: function () {
                    var t = this._trackingInstances()
                        , e = k.inArray(this, t);
                    -1 !== e && t.splice(e, 1)
                },
                _trackingInstances: function () {
                    var t = this.document.data("ui-dialog-instances");
                    return t || (t = [],
                        this.document.data("ui-dialog-instances", t)),
                        t
                },
                _minHeight: function () {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function () {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(),
                        this.uiDialog.position(this.options.position),
                        t || this.uiDialog.hide()
                },
                _setOptions: function (t) {
                    var i = this
                        , s = !1
                        , n = {};
                    k.each(t, function (t, e) {
                        i._setOption(t, e),
                            t in i.sizeRelatedOptions && (s = !0),
                            t in i.resizableRelatedOptions && (n[t] = e)
                    }),
                        s && (this._size(),
                            this._position()),
                        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
                },
                _setOption: function (t, e) {
                    var i, s, n = this.uiDialog;
                    "disabled" !== t && (this._super(t, e),
                        "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
                        "buttons" === t && this._createButtons(),
                        "closeText" === t && this.uiDialogTitlebarClose.button({
                            label: k("<a>").text("" + this.options.closeText).html()
                        }),
                        "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"),
                            !i && e && this._makeDraggable()),
                        "position" === t && this._position(),
                        "resizable" === t && ((s = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"),
                            s && "string" == typeof e && n.resizable("option", "handles", e),
                            s || !1 === e || this._makeResizable()),
                        "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function () {
                    var t, e, i, s = this.options;
                    this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }),
                        s.minWidth > s.width && (s.width = s.minWidth),
                        t = this.uiDialog.css({
                            height: "auto",
                            width: s.width
                        }).outerHeight(),
                        e = Math.max(0, s.minHeight - t),
                        i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
                        "auto" === s.height ? this.element.css({
                            minHeight: e,
                            maxHeight: i,
                            height: "auto"
                        }) : this.element.height(Math.max(0, s.height - t)),
                        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function () {
                    this.iframeBlocks = this.document.find("iframe").map(function () {
                        var t = k(this);
                        return k("<div>").css({
                            position: "absolute",
                            width: t.outerWidth(),
                            height: t.outerHeight()
                        }).appendTo(t.parent()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(),
                        delete this.iframeBlocks)
                },
                _allowInteraction: function (t) {
                    return !!k(t.target).closest(".ui-dialog").length || !!k(t.target).closest(".ui-datepicker").length
                },
                _createOverlay: function () {
                    if (this.options.modal) {
                        var e = !0;
                        this._delay(function () {
                            e = !1
                        }),
                            this.document.data("ui-dialog-overlays") || this._on(this.document, {
                                focusin: function (t) {
                                    e || this._allowInteraction(t) || (t.preventDefault(),
                                        this._trackingInstances()[0]._focusTabbable())
                                }
                            }),
                            this.overlay = k("<div>").appendTo(this._appendTo()),
                            this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                            this._on(this.overlay, {
                                mousedown: "_keepFocus"
                            }),
                            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                },
                _destroyOverlay: function () {
                    if (this.options.modal && this.overlay) {
                        var t = this.document.data("ui-dialog-overlays") - 1;
                        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"),
                            this.document.removeData("ui-dialog-overlays")),
                            this.overlay.remove(),
                            this.overlay = null
                    }
                }
            }),
            !1 !== k.uiBackCompat && k.widget("ui.dialog", k.ui.dialog, {
                options: {
                    dialogClass: ""
                },
                _createWrapper: function () {
                    this._super(),
                        this.uiDialog.addClass(this.options.dialogClass)
                },
                _setOption: function (t, e) {
                    "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
                        this._superApply(arguments)
                }
            }),
            k.ui.dialog,
            k.widget("ui.droppable", {
                version: "1.12.1",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    addClasses: !0,
                    greedy: !1,
                    scope: "default",
                    tolerance: "intersect",
                    activate: null,
                    deactivate: null,
                    drop: null,
                    out: null,
                    over: null
                },
                _create: function () {
                    var t, e = this.options, i = e.accept;
                    this.isover = !1,
                        this.isout = !0,
                        this.accept = k.isFunction(i) ? i : function (t) {
                            return t.is(i)
                        }
                        ,
                        this.proportions = function () {
                            return arguments.length ? void (t = arguments[0]) : t || (t = {
                                width: this.element[0].offsetWidth,
                                height: this.element[0].offsetHeight
                            })
                        }
                        ,
                        this._addToManager(e.scope),
                        e.addClasses && this._addClass("ui-droppable")
                },
                _addToManager: function (t) {
                    k.ui.ddmanager.droppables[t] = k.ui.ddmanager.droppables[t] || [],
                        k.ui.ddmanager.droppables[t].push(this)
                },
                _splice: function (t) {
                    for (var e = 0; t.length > e; e++)
                        t[e] === this && t.splice(e, 1)
                },
                _destroy: function () {
                    var t = k.ui.ddmanager.droppables[this.options.scope];
                    this._splice(t)
                },
                _setOption: function (t, e) {
                    if ("accept" === t)
                        this.accept = k.isFunction(e) ? e : function (t) {
                            return t.is(e)
                        }
                            ;
                    else if ("scope" === t) {
                        var i = k.ui.ddmanager.droppables[this.options.scope];
                        this._splice(i),
                            this._addToManager(e)
                    }
                    this._super(t, e)
                },
                _activate: function (t) {
                    var e = k.ui.ddmanager.current;
                    this._addActiveClass(),
                        e && this._trigger("activate", t, this.ui(e))
                },
                _deactivate: function (t) {
                    var e = k.ui.ddmanager.current;
                    this._removeActiveClass(),
                        e && this._trigger("deactivate", t, this.ui(e))
                },
                _over: function (t) {
                    var e = k.ui.ddmanager.current;
                    e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(),
                        this._trigger("over", t, this.ui(e)))
                },
                _out: function (t) {
                    var e = k.ui.ddmanager.current;
                    e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(),
                        this._trigger("out", t, this.ui(e)))
                },
                _drop: function (e, t) {
                    var i = t || k.ui.ddmanager.current
                        , s = !1;
                    return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                        var t = k(this).droppable("instance");
                        return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && ot(i, k.extend(t, {
                            offset: t.element.offset()
                        }), t.options.tolerance, e) ? !(s = !0) : void 0
                    }),
                        !s && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(),
                            this._removeHoverClass(),
                            this._trigger("drop", e, this.ui(i)),
                            this.element)))
                },
                ui: function (t) {
                    return {
                        draggable: t.currentItem || t.element,
                        helper: t.helper,
                        position: t.position,
                        offset: t.positionAbs
                    }
                },
                _addHoverClass: function () {
                    this._addClass("ui-droppable-hover")
                },
                _removeHoverClass: function () {
                    this._removeClass("ui-droppable-hover")
                },
                _addActiveClass: function () {
                    this._addClass("ui-droppable-active")
                },
                _removeActiveClass: function () {
                    this._removeClass("ui-droppable-active")
                }
            });
        var at, ot = k.ui.intersect = function (t, e, i, s) {
            if (!e.offset)
                return !1;
            var n = (t.positionAbs || t.position.absolute).left + t.margins.left
                , a = (t.positionAbs || t.position.absolute).top + t.margins.top
                , o = n + t.helperProportions.width
                , r = a + t.helperProportions.height
                , l = e.offset.left
                , h = e.offset.top
                , c = l + e.proportions().width
                , d = h + e.proportions().height;
            switch (i) {
                case "fit":
                    return l <= n && o <= c && h <= a && r <= d;
                case "intersect":
                    return n + t.helperProportions.width / 2 > l && c > o - t.helperProportions.width / 2 && a + t.helperProportions.height / 2 > h && d > r - t.helperProportions.height / 2;
                case "pointer":
                    return rt(s.pageY, h, e.proportions().height) && rt(s.pageX, l, e.proportions().width);
                case "touch":
                    return (h <= a && a <= d || h <= r && r <= d || a < h && d < r) && (l <= n && n <= c || l <= o && o <= c || n < l && c < o);
                default:
                    return !1
            }
        }
            ;
        function rt(t, e, i) {
            return e <= t && t < e + i
        }
        !(k.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function (t, e) {
                var i, s, n = k.ui.ddmanager.droppables[t.options.scope] || [], a = e ? e.type : null, o = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                t: for (i = 0; n.length > i; i++)
                    if (!(n[i].options.disabled || t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element))) {
                        for (s = 0; o.length > s; s++)
                            if (o[s] === n[i].element[0]) {
                                n[i].proportions().height = 0;
                                continue t
                            }
                        n[i].visible = "none" !== n[i].element.css("display"),
                            n[i].visible && ("mousedown" === a && n[i]._activate.call(n[i], e),
                                n[i].offset = n[i].element.offset(),
                                n[i].proportions({
                                    width: n[i].element[0].offsetWidth,
                                    height: n[i].element[0].offsetHeight
                                }))
                    }
            },
            drop: function (t, e) {
                var i = !1;
                return k.each((k.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                    this.options && (!this.options.disabled && this.visible && ot(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i),
                        !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                            this.isover = !1,
                            this._deactivate.call(this, e)))
                }),
                    i
            },
            dragStart: function (t, e) {
                t.element.parentsUntil("body").on("scroll.droppable", function () {
                    t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e)
                })
            },
            drag: function (a, o) {
                a.options.refreshPositions && k.ui.ddmanager.prepareOffsets(a, o),
                    k.each(k.ui.ddmanager.droppables[a.options.scope] || [], function () {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var t, e, i, s = ot(a, this, this.options.tolerance, o), n = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                            n && (this.options.greedy && (e = this.options.scope,
                                (i = this.element.parents(":data(ui-droppable)").filter(function () {
                                    return k(this).droppable("instance").options.scope === e
                                })).length && ((t = k(i[0]).droppable("instance")).greedyChild = "isover" === n)),
                                t && "isover" === n && (t.isover = !1,
                                    t.isout = !0,
                                    t._out.call(t, o)),
                                this[n] = !0,
                                this["isout" === n ? "isover" : "isout"] = !1,
                                this["isover" === n ? "_over" : "_out"].call(this, o),
                                t && "isout" === n && (t.isout = !1,
                                    t.isover = !0,
                                    t._over.call(t, o)))
                        }
                    })
            },
            dragStop: function (t, e) {
                t.element.parentsUntil("body").off("scroll.droppable"),
                    t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e)
            }
        }) !== k.uiBackCompat && k.widget("ui.droppable", k.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function () {
                this._super(),
                    this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function () {
                this._super(),
                    this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function () {
                this._super(),
                    this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function () {
                this._super(),
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }),
            k.ui.droppable,
            k.widget("ui.progressbar", {
                version: "1.12.1",
                options: {
                    classes: {
                        "ui-progressbar": "ui-corner-all",
                        "ui-progressbar-value": "ui-corner-left",
                        "ui-progressbar-complete": "ui-corner-right"
                    },
                    max: 100,
                    value: 0,
                    change: null,
                    complete: null
                },
                min: 0,
                _create: function () {
                    this.oldValue = this.options.value = this._constrainedValue(),
                        this.element.attr({
                            role: "progressbar",
                            "aria-valuemin": this.min
                        }),
                        this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
                        this.valueDiv = k("<div>").appendTo(this.element),
                        this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
                        this._refreshValue()
                },
                _destroy: function () {
                    this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
                        this.valueDiv.remove()
                },
                value: function (t) {
                    return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t),
                        void this._refreshValue())
                },
                _constrainedValue: function (t) {
                    return void 0 === t && (t = this.options.value),
                        this.indeterminate = !1 === t,
                        "number" != typeof t && (t = 0),
                        !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
                },
                _setOptions: function (t) {
                    var e = t.value;
                    delete t.value,
                        this._super(t),
                        this.options.value = this._constrainedValue(e),
                        this._refreshValue()
                },
                _setOption: function (t, e) {
                    "max" === t && (e = Math.max(this.min, e)),
                        this._super(t, e)
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this.element.attr("aria-disabled", t),
                        this._toggleClass(null, "ui-state-disabled", !!t)
                },
                _percentage: function () {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function () {
                    var t = this.options.value
                        , e = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"),
                        this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
                        this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
                            this.overlayDiv || (this.overlayDiv = k("<div>").appendTo(this.valueDiv),
                                this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                                    "aria-valuemax": this.options.max,
                                    "aria-valuenow": t
                                }),
                                    this.overlayDiv && (this.overlayDiv.remove(),
                                        this.overlayDiv = null)),
                        this.oldValue !== t && (this.oldValue = t,
                            this._trigger("change")),
                        t === this.options.max && this._trigger("complete")
                }
            }),
            k.widget("ui.selectable", k.ui.mouse, {
                version: "1.12.1",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch",
                    selected: null,
                    selecting: null,
                    start: null,
                    stop: null,
                    unselected: null,
                    unselecting: null
                },
                _create: function () {
                    var s = this;
                    this._addClass("ui-selectable"),
                        this.dragged = !1,
                        this.refresh = function () {
                            s.elementPos = k(s.element[0]).offset(),
                                s.selectees = k(s.options.filter, s.element[0]),
                                s._addClass(s.selectees, "ui-selectee"),
                                s.selectees.each(function () {
                                    var t = k(this)
                                        , e = t.offset()
                                        , i = {
                                            left: e.left - s.elementPos.left,
                                            top: e.top - s.elementPos.top
                                        };
                                    k.data(this, "selectable-item", {
                                        element: this,
                                        $element: t,
                                        left: i.left,
                                        top: i.top,
                                        right: i.left + t.outerWidth(),
                                        bottom: i.top + t.outerHeight(),
                                        startselected: !1,
                                        selected: t.hasClass("ui-selected"),
                                        selecting: t.hasClass("ui-selecting"),
                                        unselecting: t.hasClass("ui-unselecting")
                                    })
                                })
                        }
                        ,
                        this.refresh(),
                        this._mouseInit(),
                        this.helper = k("<div>"),
                        this._addClass(this.helper, "ui-selectable-helper")
                },
                _destroy: function () {
                    this.selectees.removeData("selectable-item"),
                        this._mouseDestroy()
                },
                _mouseStart: function (i) {
                    var s = this
                        , t = this.options;
                    this.opos = [i.pageX, i.pageY],
                        this.elementPos = k(this.element[0]).offset(),
                        this.options.disabled || (this.selectees = k(t.filter, this.element[0]),
                            this._trigger("start", i),
                            k(t.appendTo).append(this.helper),
                            this.helper.css({
                                left: i.pageX,
                                top: i.pageY,
                                width: 0,
                                height: 0
                            }),
                            t.autoRefresh && this.refresh(),
                            this.selectees.filter(".ui-selected").each(function () {
                                var t = k.data(this, "selectable-item");
                                t.startselected = !0,
                                    i.metaKey || i.ctrlKey || (s._removeClass(t.$element, "ui-selected"),
                                        t.selected = !1,
                                        s._addClass(t.$element, "ui-unselecting"),
                                        t.unselecting = !0,
                                        s._trigger("unselecting", i, {
                                            unselecting: t.element
                                        }))
                            }),
                            k(i.target).parents().addBack().each(function () {
                                var t, e = k.data(this, "selectable-item");
                                return e ? (t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"),
                                    s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"),
                                    e.unselecting = !t,
                                    e.selecting = t,
                                    (e.selected = t) ? s._trigger("selecting", i, {
                                        selecting: e.element
                                    }) : s._trigger("unselecting", i, {
                                        unselecting: e.element
                                    }),
                                    !1) : void 0
                            }))
                },
                _mouseDrag: function (s) {
                    if (this.dragged = !0,
                        !this.options.disabled) {
                        var t, n = this, a = this.options, o = this.opos[0], r = this.opos[1], l = s.pageX, h = s.pageY;
                        return l < o && (t = l,
                            l = o,
                            o = t),
                            h < r && (t = h,
                                h = r,
                                r = t),
                            this.helper.css({
                                left: o,
                                top: r,
                                width: l - o,
                                height: h - r
                            }),
                            this.selectees.each(function () {
                                var t = k.data(this, "selectable-item")
                                    , e = !1
                                    , i = {};
                                t && t.element !== n.element[0] && (i.left = t.left + n.elementPos.left,
                                    i.right = t.right + n.elementPos.left,
                                    i.top = t.top + n.elementPos.top,
                                    i.bottom = t.bottom + n.elementPos.top,
                                    "touch" === a.tolerance ? e = !(i.left > l || o > i.right || i.top > h || r > i.bottom) : "fit" === a.tolerance && (e = i.left > o && l > i.right && i.top > r && h > i.bottom),
                                    e ? (t.selected && (n._removeClass(t.$element, "ui-selected"),
                                        t.selected = !1),
                                        t.unselecting && (n._removeClass(t.$element, "ui-unselecting"),
                                            t.unselecting = !1),
                                        t.selecting || (n._addClass(t.$element, "ui-selecting"),
                                            t.selecting = !0,
                                            n._trigger("selecting", s, {
                                                selecting: t.element
                                            }))) : (t.selecting && ((s.metaKey || s.ctrlKey) && t.startselected ? (n._removeClass(t.$element, "ui-selecting"),
                                                t.selecting = !1,
                                                n._addClass(t.$element, "ui-selected"),
                                                t.selected = !0) : (n._removeClass(t.$element, "ui-selecting"),
                                                    t.selecting = !1,
                                                    t.startselected && (n._addClass(t.$element, "ui-unselecting"),
                                                        t.unselecting = !0),
                                                    n._trigger("unselecting", s, {
                                                        unselecting: t.element
                                                    }))),
                                                t.selected && (s.metaKey || s.ctrlKey || t.startselected || (n._removeClass(t.$element, "ui-selected"),
                                                    t.selected = !1,
                                                    n._addClass(t.$element, "ui-unselecting"),
                                                    t.unselecting = !0,
                                                    n._trigger("unselecting", s, {
                                                        unselecting: t.element
                                                    })))))
                            }),
                            !1
                    }
                },
                _mouseStop: function (e) {
                    var i = this;
                    return this.dragged = !1,
                        k(".ui-unselecting", this.element[0]).each(function () {
                            var t = k.data(this, "selectable-item");
                            i._removeClass(t.$element, "ui-unselecting"),
                                t.unselecting = !1,
                                t.startselected = !1,
                                i._trigger("unselected", e, {
                                    unselected: t.element
                                })
                        }),
                        k(".ui-selecting", this.element[0]).each(function () {
                            var t = k.data(this, "selectable-item");
                            i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"),
                                t.selecting = !1,
                                t.selected = !0,
                                t.startselected = !0,
                                i._trigger("selected", e, {
                                    selected: t.element
                                })
                        }),
                        this._trigger("stop", e),
                        this.helper.remove(),
                        !1
                }
            }),
            k.widget("ui.selectmenu", [k.ui.formResetMixin, {
                version: "1.12.1",
                defaultElement: "<select>",
                options: {
                    appendTo: null,
                    classes: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    },
                    disabled: null,
                    icons: {
                        button: "ui-icon-triangle-1-s"
                    },
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    width: !1,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    select: null
                },
                _create: function () {
                    var t = this.element.uniqueId().attr("id");
                    this.ids = {
                        element: t,
                        button: t + "-button",
                        menu: t + "-menu"
                    },
                        this._drawButton(),
                        this._drawMenu(),
                        this._bindFormResetHandler(),
                        this._rendered = !1,
                        this.menuItems = k()
                },
                _drawButton: function () {
                    var t, e = this, i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                    this.labels = this.element.labels().attr("for", this.ids.button),
                        this._on(this.labels, {
                            click: function (t) {
                                this.button.focus(),
                                    t.preventDefault()
                            }
                        }),
                        this.element.hide(),
                        this.button = k("<span>", {
                            tabindex: this.options.disabled ? -1 : 0,
                            id: this.ids.button,
                            role: "combobox",
                            "aria-expanded": "false",
                            "aria-autocomplete": "list",
                            "aria-owns": this.ids.menu,
                            "aria-haspopup": "true",
                            title: this.element.attr("title")
                        }).insertAfter(this.element),
                        this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
                        t = k("<span>").appendTo(this.button),
                        this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
                        this.buttonItem = this._renderButtonItem(i).appendTo(this.button),
                        !1 !== this.options.width && this._resizeButton(),
                        this._on(this.button, this._buttonEvents),
                        this.button.one("focusin", function () {
                            e._rendered || e._refreshMenu()
                        })
                },
                _drawMenu: function () {
                    var s = this;
                    this.menu = k("<ul>", {
                        "aria-hidden": "true",
                        "aria-labelledby": this.ids.button,
                        id: this.ids.menu
                    }),
                        this.menuWrap = k("<div>").append(this.menu),
                        this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
                        this.menuWrap.appendTo(this._appendTo()),
                        this.menuInstance = this.menu.menu({
                            classes: {
                                "ui-menu": "ui-corner-bottom"
                            },
                            role: "listbox",
                            select: function (t, e) {
                                t.preventDefault(),
                                    s._setSelection(),
                                    s._select(e.item.data("ui-selectmenu-item"), t)
                            },
                            focus: function (t, e) {
                                var i = e.item.data("ui-selectmenu-item");
                                null != s.focusIndex && i.index !== s.focusIndex && (s._trigger("focus", t, {
                                    item: i
                                }),
                                    s.isOpen || s._select(i, t)),
                                    s.focusIndex = i.index,
                                    s.button.attr("aria-activedescendant", s.menuItems.eq(i.index).attr("id"))
                            }
                        }).menu("instance"),
                        this.menuInstance._off(this.menu, "mouseleave"),
                        this.menuInstance._closeOnDocumentClick = function () {
                            return !1
                        }
                        ,
                        this.menuInstance._isDivider = function () {
                            return !1
                        }
                },
                refresh: function () {
                    this._refreshMenu(),
                        this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})),
                        null === this.options.width && this._resizeButton()
                },
                _refreshMenu: function () {
                    var t, e = this.element.find("option");
                    this.menu.empty(),
                        this._parseOptions(e),
                        this._renderMenu(this.menu, this.items),
                        this.menuInstance.refresh(),
                        this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
                        this._rendered = !0,
                        e.length && (t = this._getSelectedItem(),
                            this.menuInstance.focus(null, t),
                            this._setAria(t.data("ui-selectmenu-item")),
                            this._setOption("disabled", this.element.prop("disabled")))
                },
                open: function (t) {
                    this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
                        this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
                        this.menuItems.length && (this.isOpen = !0,
                            this._toggleAttr(),
                            this._resizeMenu(),
                            this._position(),
                            this._on(this.document, this._documentClick),
                            this._trigger("open", t)))
                },
                _position: function () {
                    this.menuWrap.position(k.extend({
                        of: this.button
                    }, this.options.position))
                },
                close: function (t) {
                    this.isOpen && (this.isOpen = !1,
                        this._toggleAttr(),
                        this.range = null,
                        this._off(this.document),
                        this._trigger("close", t))
                },
                widget: function () {
                    return this.button
                },
                menuWidget: function () {
                    return this.menu
                },
                _renderButtonItem: function (t) {
                    var e = k("<span>");
                    return this._setText(e, t.label),
                        this._addClass(e, "ui-selectmenu-text"),
                        e
                },
                _renderMenu: function (s, t) {
                    var n = this
                        , a = "";
                    k.each(t, function (t, e) {
                        var i;
                        e.optgroup !== a && (i = k("<li>", {
                            text: e.optgroup
                        }),
                            n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                            i.appendTo(s),
                            a = e.optgroup),
                            n._renderItemData(s, e)
                    })
                },
                _renderItemData: function (t, e) {
                    return this._renderItem(t, e).data("ui-selectmenu-item", e)
                },
                _renderItem: function (t, e) {
                    var i = k("<li>")
                        , s = k("<div>", {
                            title: e.element.attr("title")
                        });
                    return e.disabled && this._addClass(i, null, "ui-state-disabled"),
                        this._setText(s, e.label),
                        i.append(s).appendTo(t)
                },
                _setText: function (t, e) {
                    e ? t.text(e) : t.html("&#160;")
                },
                _move: function (t, e) {
                    var i, s, n = ".ui-menu-item";
                    this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
                        n += ":not(.ui-state-disabled)"),
                        (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
                },
                _getSelectedItem: function () {
                    return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
                },
                _toggle: function (t) {
                    this[this.isOpen ? "close" : "open"](t)
                },
                _setSelection: function () {
                    var t;
                    this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(),
                        t.addRange(this.range)) : this.range.select(),
                        this.button.focus())
                },
                _documentClick: {
                    mousedown: function (t) {
                        this.isOpen && (k(t.target).closest(".ui-selectmenu-menu, #" + k.ui.escapeSelector(this.ids.button)).length || this.close(t))
                    }
                },
                _buttonEvents: {
                    mousedown: function () {
                        var t;
                        window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                    },
                    click: function (t) {
                        this._setSelection(),
                            this._toggle(t)
                    },
                    keydown: function (t) {
                        var e = !0;
                        switch (t.keyCode) {
                            case k.ui.keyCode.TAB:
                            case k.ui.keyCode.ESCAPE:
                                this.close(t),
                                    e = !1;
                                break;
                            case k.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(t);
                                break;
                            case k.ui.keyCode.UP:
                                t.altKey ? this._toggle(t) : this._move("prev", t);
                                break;
                            case k.ui.keyCode.DOWN:
                                t.altKey ? this._toggle(t) : this._move("next", t);
                                break;
                            case k.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                                break;
                            case k.ui.keyCode.LEFT:
                                this._move("prev", t);
                                break;
                            case k.ui.keyCode.RIGHT:
                                this._move("next", t);
                                break;
                            case k.ui.keyCode.HOME:
                            case k.ui.keyCode.PAGE_UP:
                                this._move("first", t);
                                break;
                            case k.ui.keyCode.END:
                            case k.ui.keyCode.PAGE_DOWN:
                                this._move("last", t);
                                break;
                            default:
                                this.menu.trigger(t),
                                    e = !1
                        }
                        e && t.preventDefault()
                    }
                },
                _selectFocusedItem: function (t) {
                    var e = this.menuItems.eq(this.focusIndex).parent("li");
                    e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
                },
                _select: function (t, e) {
                    var i = this.element[0].selectedIndex;
                    this.element[0].selectedIndex = t.index,
                        this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)),
                        this._setAria(t),
                        this._trigger("select", e, {
                            item: t
                        }),
                        t.index !== i && this._trigger("change", e, {
                            item: t
                        }),
                        this.close(e)
                },
                _setAria: function (t) {
                    var e = this.menuItems.eq(t.index).attr("id");
                    this.button.attr({
                        "aria-labelledby": e,
                        "aria-activedescendant": e
                    }),
                        this.menu.attr("aria-activedescendant", e)
                },
                _setOption: function (t, e) {
                    if ("icons" === t) {
                        var i = this.button.find("span.ui-icon");
                        this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                    }
                    this._super(t, e),
                        "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
                        "width" === t && this._resizeButton()
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this.menuInstance.option("disabled", t),
                        this.button.attr("aria-disabled", t),
                        this._toggleClass(this.button, null, "ui-state-disabled", t),
                        this.element.prop("disabled", t),
                        t ? (this.button.attr("tabindex", -1),
                            this.close()) : this.button.attr("tabindex", 0)
                },
                _appendTo: function () {
                    var t = this.options.appendTo;
                    return (t = t && (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")),
                        t.length || (t = this.document[0].body),
                        t
                },
                _toggleAttr: function () {
                    this.button.attr("aria-expanded", this.isOpen),
                        this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
                        this.menu.attr("aria-hidden", !this.isOpen)
                },
                _resizeButton: function () {
                    var t = this.options.width;
                    return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(),
                        this.element.hide()),
                        void this.button.outerWidth(t))
                },
                _resizeMenu: function () {
                    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                },
                _getCreateOptions: function () {
                    var t = this._super();
                    return t.disabled = this.element.prop("disabled"),
                        t
                },
                _parseOptions: function (t) {
                    var i = this
                        , s = [];
                    t.each(function (t, e) {
                        s.push(i._parseOption(k(e), t))
                    }),
                        this.items = s
                },
                _parseOption: function (t, e) {
                    var i = t.parent("optgroup");
                    return {
                        element: t,
                        index: e,
                        value: t.val(),
                        label: t.text(),
                        optgroup: i.attr("label") || "",
                        disabled: i.prop("disabled") || t.prop("disabled")
                    }
                },
                _destroy: function () {
                    this._unbindFormResetHandler(),
                        this.menuWrap.remove(),
                        this.button.remove(),
                        this.element.show(),
                        this.element.removeUniqueId(),
                        this.labels.attr("for", this.ids.element)
                }
            }]),
            k.widget("ui.slider", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    classes: {
                        "ui-slider": "ui-corner-all",
                        "ui-slider-handle": "ui-corner-all",
                        "ui-slider-range": "ui-corner-all ui-widget-header"
                    },
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                numPages: 5,
                _create: function () {
                    this._keySliding = !1,
                        this._mouseSliding = !1,
                        this._animateOff = !0,
                        this._handleIndex = null,
                        this._detectOrientation(),
                        this._mouseInit(),
                        this._calculateNewMax(),
                        this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
                        this._refresh(),
                        this._animateOff = !1
                },
                _refresh: function () {
                    this._createRange(),
                        this._createHandles(),
                        this._setupEvents(),
                        this._refreshValue()
                },
                _createHandles: function () {
                    var t, e, i = this.options, s = this.element.find(".ui-slider-handle"), n = [];
                    for (e = i.values && i.values.length || 1,
                        s.length > e && (s.slice(e).remove(),
                            s = s.slice(0, e)),
                        t = s.length; t < e; t++)
                        n.push("<span tabindex='0'></span>");
                    this.handles = s.add(k(n.join("")).appendTo(this.element)),
                        this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
                        this.handle = this.handles.eq(0),
                        this.handles.each(function (t) {
                            k(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
                        })
                },
                _createRange: function () {
                    var t = this.options;
                    t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : k.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
                        this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
                            this.range.css({
                                left: "",
                                bottom: ""
                            })) : (this.range = k("<div>").appendTo(this.element),
                                this._addClass(this.range, "ui-slider-range")),
                        "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(),
                            this.range = null)
                },
                _setupEvents: function () {
                    this._off(this.handles),
                        this._on(this.handles, this._handleEvents),
                        this._hoverable(this.handles),
                        this._focusable(this.handles)
                },
                _destroy: function () {
                    this.handles.remove(),
                        this.range && this.range.remove(),
                        this._mouseDestroy()
                },
                _mouseCapture: function (t) {
                    var e, i, s, n, a, o, r, l = this, h = this.options;
                    return !h.disabled && (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    },
                        this.elementOffset = this.element.offset(),
                        e = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        i = this._normValueFromMouse(e),
                        s = this._valueMax() - this._valueMin() + 1,
                        this.handles.each(function (t) {
                            var e = Math.abs(i - l.values(t));
                            (e < s || s === e && (t === l._lastChangedValue || l.values(t) === h.min)) && (s = e,
                                n = k(this),
                                a = t)
                        }),
                        !1 !== this._start(t, a) && (this._mouseSliding = !0,
                            this._handleIndex = a,
                            this._addClass(n, null, "ui-state-active"),
                            n.trigger("focus"),
                            o = n.offset(),
                            r = !k(t.target).parents().addBack().is(".ui-slider-handle"),
                            this._clickOffset = r ? {
                                left: 0,
                                top: 0
                            } : {
                                left: t.pageX - o.left - n.width() / 2,
                                top: t.pageY - o.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                            },
                            this.handles.hasClass("ui-state-hover") || this._slide(t, a, i),
                            this._animateOff = !0))
                },
                _mouseStart: function () {
                    return !0
                },
                _mouseDrag: function (t) {
                    var e = {
                        x: t.pageX,
                        y: t.pageY
                    }
                        , i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i),
                        !1
                },
                _mouseStop: function (t) {
                    return this._removeClass(this.handles, null, "ui-state-active"),
                        this._mouseSliding = !1,
                        this._stop(t, this._handleIndex),
                        this._change(t, this._handleIndex),
                        this._handleIndex = null,
                        this._clickOffset = null,
                        this._animateOff = !1
                },
                _detectOrientation: function () {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function (t) {
                    var e, i, s, n;
                    return 1 < (i = ("horizontal" === this.orientation ? (e = this.elementSize.width,
                        t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
                            t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / e) && (i = 1),
                        i < 0 && (i = 0),
                        "vertical" === this.orientation && (i = 1 - i),
                        s = this._valueMax() - this._valueMin(),
                        n = this._valueMin() + i * s,
                        this._trimAlignValue(n)
                },
                _uiHash: function (t, e, i) {
                    var s = {
                        handle: this.handles[t],
                        handleIndex: t,
                        value: void 0 !== e ? e : this.value()
                    };
                    return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t),
                        s.values = i || this.values()),
                        s
                },
                _hasMultipleValues: function () {
                    return this.options.values && this.options.values.length
                },
                _start: function (t, e) {
                    return this._trigger("start", t, this._uiHash(e))
                },
                _slide: function (t, e, i) {
                    var s, n = this.value(), a = this.values();
                    this._hasMultipleValues() && (s = this.values(e ? 0 : 1),
                        n = this.values(e),
                        2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
                        a[e] = i),
                        i === n || !1 !== this._trigger("slide", t, this._uiHash(e, i, a)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
                },
                _stop: function (t, e) {
                    this._trigger("stop", t, this._uiHash(e))
                },
                _change: function (t, e) {
                    this._keySliding || this._mouseSliding || (this._lastChangedValue = e,
                        this._trigger("change", t, this._uiHash(e)))
                },
                value: function (t) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(t),
                        this._refreshValue(),
                        void this._change(null, 0)) : this._value()
                },
                values: function (t, e) {
                    var i, s, n;
                    if (1 < arguments.length)
                        return this.options.values[t] = this._trimAlignValue(e),
                            this._refreshValue(),
                            void this._change(null, t);
                    if (!arguments.length)
                        return this._values();
                    if (!k.isArray(t))
                        return this._hasMultipleValues() ? this._values(t) : this.value();
                    for (i = this.options.values,
                        s = t,
                        n = 0; i.length > n; n += 1)
                        i[n] = this._trimAlignValue(s[n]),
                            this._change(null, n);
                    this._refreshValue()
                },
                _setOption: function (t, e) {
                    var i, s = 0;
                    switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0),
                        this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1),
                            this.options.values = null)),
                    k.isArray(this.options.values) && (s = this.options.values.length),
                    this._super(t, e),
                    t) {
                        case "orientation":
                            this._detectOrientation(),
                                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                                this._refreshValue(),
                                this.options.range && this._refreshRange(e),
                                this.handles.css("horizontal" === e ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0,
                                this._refreshValue(),
                                this._change(null, 0),
                                this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0,
                                this._refreshValue(),
                                i = s - 1; 0 <= i; i--)
                                this._change(null, i);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0,
                                this._calculateNewMax(),
                                this._refreshValue(),
                                this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0,
                                this._refresh(),
                                this._animateOff = !1
                    }
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this._toggleClass(null, "ui-state-disabled", !!t)
                },
                _value: function () {
                    var t = this.options.value;
                    return this._trimAlignValue(t)
                },
                _values: function (t) {
                    var e, i, s;
                    if (arguments.length)
                        return e = this.options.values[t],
                            this._trimAlignValue(e);
                    if (this._hasMultipleValues()) {
                        for (i = this.options.values.slice(),
                            s = 0; i.length > s; s += 1)
                            i[s] = this._trimAlignValue(i[s]);
                        return i
                    }
                    return []
                },
                _trimAlignValue: function (t) {
                    if (this._valueMin() >= t)
                        return this._valueMin();
                    if (t >= this._valueMax())
                        return this._valueMax();
                    var e = 0 < this.options.step ? this.options.step : 1
                        , i = (t - this._valueMin()) % e
                        , s = t - i;
                    return 2 * Math.abs(i) >= e && (s += 0 < i ? e : -e),
                        parseFloat(s.toFixed(5))
                },
                _calculateNewMax: function () {
                    var t = this.options.max
                        , e = this._valueMin()
                        , i = this.options.step;
                    (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
                        this.max = parseFloat(t.toFixed(this._precision()))
                },
                _precision: function () {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                        t
                },
                _precisionOf: function (t) {
                    var e = "" + t
                        , i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1
                },
                _valueMin: function () {
                    return this.options.min
                },
                _valueMax: function () {
                    return this.max
                },
                _refreshRange: function (t) {
                    "vertical" === t && this.range.css({
                        width: "",
                        left: ""
                    }),
                        "horizontal" === t && this.range.css({
                            height: "",
                            bottom: ""
                        })
                },
                _refreshValue: function () {
                    var e, i, t, s, n, a = this.options.range, o = this.options, r = this, l = !this._animateOff && o.animate, h = {};
                    this._hasMultipleValues() ? this.handles.each(function (t) {
                        i = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100,
                            h["horizontal" === r.orientation ? "left" : "bottom"] = i + "%",
                            k(this).stop(1, 1)[l ? "animate" : "css"](h, o.animate),
                            !0 === r.options.range && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({
                                left: i + "%"
                            }, o.animate),
                                1 === t && r.range[l ? "animate" : "css"]({
                                    width: i - e + "%"
                                }, {
                                    queue: !1,
                                    duration: o.animate
                                })) : (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({
                                    bottom: i + "%"
                                }, o.animate),
                                    1 === t && r.range[l ? "animate" : "css"]({
                                        height: i - e + "%"
                                    }, {
                                        queue: !1,
                                        duration: o.animate
                                    }))),
                            e = i
                    }) : (t = this.value(),
                        s = this._valueMin(),
                        n = this._valueMax(),
                        i = n !== s ? (t - s) / (n - s) * 100 : 0,
                        h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
                        this.handle.stop(1, 1)[l ? "animate" : "css"](h, o.animate),
                        "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                            width: i + "%"
                        }, o.animate),
                        "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                            width: 100 - i + "%"
                        }, o.animate),
                        "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                            height: i + "%"
                        }, o.animate),
                        "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                            height: 100 - i + "%"
                        }, o.animate))
                },
                _handleEvents: {
                    keydown: function (t) {
                        var e, i, s, n = k(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case k.ui.keyCode.HOME:
                            case k.ui.keyCode.END:
                            case k.ui.keyCode.PAGE_UP:
                            case k.ui.keyCode.PAGE_DOWN:
                            case k.ui.keyCode.UP:
                            case k.ui.keyCode.RIGHT:
                            case k.ui.keyCode.DOWN:
                            case k.ui.keyCode.LEFT:
                                if (t.preventDefault(),
                                    !this._keySliding && (this._keySliding = !0,
                                        this._addClass(k(t.target), null, "ui-state-active"),
                                        !1 === this._start(t, n)))
                                    return
                        }
                        switch (s = this.options.step,
                        e = i = this._hasMultipleValues() ? this.values(n) : this.value(),
                        t.keyCode) {
                            case k.ui.keyCode.HOME:
                                i = this._valueMin();
                                break;
                            case k.ui.keyCode.END:
                                i = this._valueMax();
                                break;
                            case k.ui.keyCode.PAGE_UP:
                                i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case k.ui.keyCode.PAGE_DOWN:
                                i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case k.ui.keyCode.UP:
                            case k.ui.keyCode.RIGHT:
                                if (e === this._valueMax())
                                    return;
                                i = this._trimAlignValue(e + s);
                                break;
                            case k.ui.keyCode.DOWN:
                            case k.ui.keyCode.LEFT:
                                if (e === this._valueMin())
                                    return;
                                i = this._trimAlignValue(e - s)
                        }
                        this._slide(t, n, i)
                    },
                    keyup: function (t) {
                        var e = k(t.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1,
                            this._stop(t, e),
                            this._change(t, e),
                            this._removeClass(k(t.target), null, "ui-state-active"))
                    }
                }
            }),
            k.widget("ui.sortable", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function (t, e, i) {
                    return e <= t && t < e + i
                },
                _isFloating: function (t) {
                    return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                },
                _create: function () {
                    this.containerCache = {},
                        this._addClass("ui-sortable"),
                        this.refresh(),
                        this.offset = this.element.offset(),
                        this._mouseInit(),
                        this._setHandleClassName(),
                        this.ready = !0
                },
                _setOption: function (t, e) {
                    this._super(t, e),
                        "handle" === t && this._setHandleClassName()
                },
                _setHandleClassName: function () {
                    var t = this;
                    this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
                        k.each(this.items, function () {
                            t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                        })
                },
                _destroy: function () {
                    this._mouseDestroy();
                    for (var t = this.items.length - 1; 0 <= t; t--)
                        this.items[t].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function (t, e) {
                    var i = null
                        , s = !1
                        , n = this;
                    return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t),
                        k(t.target).parents().each(function () {
                            return k.data(this, n.widgetName + "-item") === n ? (i = k(this),
                                !1) : void 0
                        }),
                        k.data(t.target, n.widgetName + "-item") === n && (i = k(t.target)),
                        !!i && (!(this.options.handle && !e && (k(this.options.handle, i).find("*").addBack().each(function () {
                            this === t.target && (s = !0)
                        }),
                            !s)) && (this.currentItem = i,
                                this._removeCurrentsFromItems(),
                                !0))))
                },
                _mouseStart: function (t, e, i) {
                    var s, n, a = this.options;
                    if ((this.currentContainer = this).refreshPositions(),
                        this.helper = this._createHelper(t),
                        this._cacheHelperProportions(),
                        this._cacheMargins(),
                        this.scrollParent = this.helper.scrollParent(),
                        this.offset = this.currentItem.offset(),
                        this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        },
                        k.extend(this.offset, {
                            click: {
                                left: t.pageX - this.offset.left,
                                top: t.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }),
                        this.helper.css("position", "absolute"),
                        this.cssPosition = this.helper.css("position"),
                        this.originalPosition = this._generatePosition(t),
                        this.originalPageX = t.pageX,
                        this.originalPageY = t.pageY,
                        a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
                        this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        },
                        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                        this._createPlaceholder(),
                        a.containment && this._setContainment(),
                        a.cursor && "auto" !== a.cursor && (n = this.document.find("body"),
                            this.storedCursor = n.css("cursor"),
                            n.css("cursor", a.cursor),
                            this.storedStylesheet = k("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(n)),
                        a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                            this.helper.css("opacity", a.opacity)),
                        a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
                            this.helper.css("zIndex", a.zIndex)),
                        this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                        this._trigger("start", t, this._uiHash()),
                        this._preserveHelperProportions || this._cacheHelperProportions(),
                        !i)
                        for (s = this.containers.length - 1; 0 <= s; s--)
                            this.containers[s]._trigger("activate", t, this._uiHash(this));
                    return k.ui.ddmanager && (k.ui.ddmanager.current = this),
                        k.ui.ddmanager && !a.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t),
                        this.dragging = !0,
                        this._addClass(this.helper, "ui-sortable-helper"),
                        this._mouseDrag(t),
                        !0
                },
                _mouseDrag: function (t) {
                    var e, i, s, n, a = this.options, o = !1;
                    for (this.position = this._generatePosition(t),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                        this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + a.scrollSpeed : t.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - a.scrollSpeed),
                            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + a.scrollSpeed : t.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (t.pageY - this.document.scrollTop() < a.scrollSensitivity ? o = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < a.scrollSensitivity && (o = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
                                t.pageX - this.document.scrollLeft() < a.scrollSensitivity ? o = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (o = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
                            !1 !== o && k.ui.ddmanager && !a.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t)),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                        this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
                        e = this.items.length - 1; 0 <= e; e--)
                        if (s = (i = this.items[e]).item[0],
                            (n = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== s && !k.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !k.contains(this.element[0], s))) {
                            if (this.direction = 1 === n ? "down" : "up",
                                "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))
                                break;
                            this._rearrange(t, i),
                                this._trigger("change", t, this._uiHash());
                            break
                        }
                    return this._contactContainers(t),
                        k.ui.ddmanager && k.ui.ddmanager.drag(this, t),
                        this._trigger("sort", t, this._uiHash()),
                        this.lastPositionAbs = this.positionAbs,
                        !1
                },
                _mouseStop: function (t, e) {
                    if (t) {
                        if (k.ui.ddmanager && !this.options.dropBehaviour && k.ui.ddmanager.drop(this, t),
                            this.options.revert) {
                            var i = this
                                , s = this.placeholder.offset()
                                , n = this.options.axis
                                , a = {};
                            n && "x" !== n || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                                n && "y" !== n || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                                this.reverting = !0,
                                k(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                                    i._clear(t)
                                })
                        } else
                            this._clear(t, e);
                        return !1
                    }
                },
                cancel: function () {
                    if (this.dragging) {
                        this._mouseUp(new k.Event("mouseup", {
                            target: null
                        })),
                            "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                        for (var t = this.containers.length - 1; 0 <= t; t--)
                            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                                    this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
                        k.extend(this, {
                            helper: null,
                            dragging: !1,
                            reverting: !1,
                            _noFinalSort: null
                        }),
                        this.domPosition.prev ? k(this.domPosition.prev).after(this.currentItem) : k(this.domPosition.parent).prepend(this.currentItem)),
                        this
                },
                serialize: function (e) {
                    var t = this._getItemsAsjQuery(e && e.connected)
                        , i = [];
                    return e = e || {},
                        k(t).each(function () {
                            var t = (k(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                            t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
                        }),
                        !i.length && e.key && i.push(e.key + "="),
                        i.join("&")
                },
                toArray: function (t) {
                    var e = this._getItemsAsjQuery(t && t.connected)
                        , i = [];
                    return t = t || {},
                        e.each(function () {
                            i.push(k(t.item || this).attr(t.attribute || "id") || "")
                        }),
                        i
                },
                _intersectsWith: function (t) {
                    var e = this.positionAbs.left
                        , i = e + this.helperProportions.width
                        , s = this.positionAbs.top
                        , n = s + this.helperProportions.height
                        , a = t.left
                        , o = a + t.width
                        , r = t.top
                        , l = r + t.height
                        , h = this.offset.click.top
                        , c = this.offset.click.left
                        , d = "x" === this.options.axis || r < s + h && s + h < l
                        , u = "y" === this.options.axis || a < e + c && e + c < o
                        , p = d && u;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2
                },
                _intersectsWithPointer: function (t) {
                    var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                    return !!(s && n) && (e = this._getDragVerticalDirection(),
                        i = this._getDragHorizontalDirection(),
                        this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
                },
                _intersectsWithSides: function (t) {
                    var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
                        , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
                        , s = this._getDragVerticalDirection()
                        , n = this._getDragHorizontalDirection();
                    return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
                },
                _getDragVerticalDirection: function () {
                    var t = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 != t && (0 < t ? "down" : "up")
                },
                _getDragHorizontalDirection: function () {
                    var t = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 != t && (0 < t ? "right" : "left")
                },
                refresh: function (t) {
                    return this._refreshItems(t),
                        this._setHandleClassName(),
                        this.refreshPositions(),
                        this
                },
                _connectWith: function () {
                    var t = this.options;
                    return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                },
                _getItemsAsjQuery: function (t) {
                    function e() {
                        o.push(this)
                    }
                    var i, s, n, a, o = [], r = [], l = this._connectWith();
                    if (l && t)
                        for (i = l.length - 1; 0 <= i; i--)
                            for (s = (n = k(l[i], this.document[0])).length - 1; 0 <= s; s--)
                                (a = k.data(n[s], this.widgetFullName)) && a !== this && !a.options.disabled && r.push([k.isFunction(a.options.items) ? a.options.items.call(a.element) : k(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                    for (r.push([k.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : k(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
                        i = r.length - 1; 0 <= i; i--)
                        r[i][0].each(e);
                    return k(o)
                },
                _removeCurrentsFromItems: function () {
                    var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = k.grep(this.items, function (t) {
                        for (var e = 0; i.length > e; e++)
                            if (i[e] === t.item[0])
                                return !1;
                        return !0
                    })
                },
                _refreshItems: function (t) {
                    this.items = [],
                        this.containers = [this];
                    var e, i, s, n, a, o, r, l, h = this.items, c = [[k.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : k(this.options.items, this.element), this]], d = this._connectWith();
                    if (d && this.ready)
                        for (e = d.length - 1; 0 <= e; e--)
                            for (i = (s = k(d[e], this.document[0])).length - 1; 0 <= i; i--)
                                (n = k.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && (c.push([k.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {
                                    item: this.currentItem
                                }) : k(n.options.items, n.element), n]),
                                    this.containers.push(n));
                    for (e = c.length - 1; 0 <= e; e--)
                        for (a = c[e][1],
                            i = 0,
                            l = (o = c[e][0]).length; i < l; i++)
                            (r = k(o[i])).data(this.widgetName + "-item", a),
                                h.push({
                                    item: r,
                                    instance: a,
                                    width: 0,
                                    height: 0,
                                    left: 0,
                                    top: 0
                                })
                },
                refreshPositions: function (t) {
                    var e, i, s, n;
                    for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
                        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
                        e = this.items.length - 1; 0 <= e; e--)
                        (i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? k(this.options.toleranceElement, i.item) : i.item,
                            t || (i.width = s.outerWidth(),
                                i.height = s.outerHeight()),
                            n = s.offset(),
                            i.left = n.left,
                            i.top = n.top);
                    if (this.options.custom && this.options.custom.refreshContainers)
                        this.options.custom.refreshContainers.call(this);
                    else
                        for (e = this.containers.length - 1; 0 <= e; e--)
                            n = this.containers[e].element.offset(),
                                this.containers[e].containerCache.left = n.left,
                                this.containers[e].containerCache.top = n.top,
                                this.containers[e].containerCache.width = this.containers[e].element.outerWidth(),
                                this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                    return this
                },
                _createPlaceholder: function (i) {
                    var s, n = (i = i || this).options;
                    n.placeholder && n.placeholder.constructor !== String || (s = n.placeholder,
                        n.placeholder = {
                            element: function () {
                                var t = i.currentItem[0].nodeName.toLowerCase()
                                    , e = k("<" + t + ">", i.document[0]);
                                return i._addClass(e, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"),
                                    "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), k("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")),
                                    s || e.css("visibility", "hidden"),
                                    e
                            },
                            update: function (t, e) {
                                s && !n.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)),
                                    e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }),
                        i.placeholder = k(n.placeholder.element.call(i.element, i.currentItem)),
                        i.currentItem.after(i.placeholder),
                        n.placeholder.update(i, i.placeholder)
                },
                _createTrPlaceholder: function (t, e) {
                    var i = this;
                    t.children().each(function () {
                        k("<td>&#160;</td>", i.document[0]).attr("colspan", k(this).attr("colspan") || 1).appendTo(e)
                    })
                },
                _contactContainers: function (t) {
                    var e, i, s, n, a, o, r, l, h, c, d = null, u = null;
                    for (e = this.containers.length - 1; 0 <= e; e--)
                        if (!k.contains(this.currentItem[0], this.containers[e].element[0]))
                            if (this._intersectsWith(this.containers[e].containerCache)) {
                                if (d && k.contains(this.containers[e].element[0], d.element[0]))
                                    continue;
                                d = this.containers[e],
                                    u = e
                            } else
                                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)),
                                    this.containers[e].containerCache.over = 0);
                    if (d)
                        if (1 === this.containers.length)
                            this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)),
                                this.containers[u].containerCache.over = 1);
                        else {
                            for (s = 1e4,
                                n = null,
                                a = (h = d.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                                o = h ? "width" : "height",
                                c = h ? "pageX" : "pageY",
                                i = this.items.length - 1; 0 <= i; i--)
                                k.contains(this.containers[u].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (r = this.items[i].item.offset()[a],
                                    l = !1,
                                    t[c] - r > this.items[i][o] / 2 && (l = !0),
                                    s > Math.abs(t[c] - r) && (s = Math.abs(t[c] - r),
                                        n = this.items[i],
                                        this.direction = l ? "up" : "down"));
                            if (!n && !this.options.dropOnEmpty)
                                return;
                            if (this.currentContainer === this.containers[u])
                                return void (this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash()),
                                    this.currentContainer.containerCache.over = 1));
                            n ? this._rearrange(t, n, null, !0) : this._rearrange(t, null, this.containers[u].element, !0),
                                this._trigger("change", t, this._uiHash()),
                                this.containers[u]._trigger("change", t, this._uiHash(this)),
                                this.currentContainer = this.containers[u],
                                this.options.placeholder.update(this.currentContainer, this.placeholder),
                                this.containers[u]._trigger("over", t, this._uiHash(this)),
                                this.containers[u].containerCache.over = 1
                        }
                },
                _createHelper: function (t) {
                    var e = this.options
                        , i = k.isFunction(e.helper) ? k(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || k("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
                        i[0] === this.currentItem[0] && (this._storedCSS = {
                            width: this.currentItem[0].style.width,
                            height: this.currentItem[0].style.height,
                            position: this.currentItem.css("position"),
                            top: this.currentItem.css("top"),
                            left: this.currentItem.css("left")
                        }),
                        i[0].style.width && !e.forceHelperSize || i.width(this.currentItem.width()),
                        i[0].style.height && !e.forceHelperSize || i.height(this.currentItem.height()),
                        i
                },
                _adjustOffsetFromHelper: function (t) {
                    "string" == typeof t && (t = t.split(" ")),
                        k.isArray(t) && (t = {
                            left: +t[0],
                            top: +t[1] || 0
                        }),
                        "left" in t && (this.offset.click.left = t.left + this.margins.left),
                        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                        "top" in t && (this.offset.click.top = t.top + this.margins.top),
                        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function () {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
                        t.top += this.scrollParent.scrollTop()),
                        (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && k.ui.ie) && (t = {
                            top: 0,
                            left: 0
                        }),
                    {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function () {
                    if ("relative" !== this.cssPosition)
                        return {
                            top: 0,
                            left: 0
                        };
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                },
                _cacheMargins: function () {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function () {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function () {
                    var t, e, i, s = this.options;
                    "parent" === s.containment && (s.containment = this.helper[0].parentNode),
                        "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
                        /^(document|window|parent)$/.test(s.containment) || (t = k(s.containment)[0],
                            e = k(s.containment).offset(),
                            i = "hidden" !== k(t).css("overflow"),
                            this.containment = [e.left + (parseInt(k(t).css("borderLeftWidth"), 10) || 0) + (parseInt(k(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(k(t).css("borderTopWidth"), 10) || 0) + (parseInt(k(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(k(t).css("borderLeftWidth"), 10) || 0) - (parseInt(k(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(k(t).css("borderTopWidth"), 10) || 0) - (parseInt(k(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function (t, e) {
                    e = e || this.position;
                    var i = "absolute" === t ? 1 : -1
                        , s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
                        , n = /(html|body)/i.test(s[0].tagName);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * i
                    }
                },
                _generatePosition: function (t) {
                    var e, i, s = this.options, n = t.pageX, a = t.pageY, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, r = /(html|body)/i.test(o[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
                        this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left),
                            t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
                            t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left),
                            t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
                            s.grid && (e = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1],
                                a = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - s.grid[1] : e + s.grid[1] : e,
                                i = this.originalPageX + Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0],
                                n = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0] : i)),
                    {
                        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()),
                        left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft())
                    }
                },
                _rearrange: function (t, e, i, s) {
                    i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
                        this.counter = this.counter ? ++this.counter : 1;
                    var n = this.counter;
                    this._delay(function () {
                        n === this.counter && this.refreshPositions(!s)
                    })
                },
                _clear: function (t, e) {
                    function i(e, i, s) {
                        return function (t) {
                            s._trigger(e, t, i._uiHash(i))
                        }
                    }
                    this.reverting = !1;
                    var s, n = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
                        this._noFinalSort = null,
                        this.helper[0] === this.currentItem[0]) {
                        for (s in this._storedCSS)
                            "auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s] || (this._storedCSS[s] = "");
                        this.currentItem.css(this._storedCSS),
                            this._removeClass(this.currentItem, "ui-sortable-helper")
                    } else
                        this.currentItem.show();
                    for (this.fromOutside && !e && n.push(function (t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }),
                        !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
                            this._trigger("update", t, this._uiHash())
                        }),
                        this !== this.currentContainer && (e || (n.push(function (t) {
                            this._trigger("remove", t, this._uiHash())
                        }),
                            n.push(function (e) {
                                return function (t) {
                                    e._trigger("receive", t, this._uiHash(this))
                                }
                            }
                                .call(this, this.currentContainer)),
                            n.push(function (e) {
                                return function (t) {
                                    e._trigger("update", t, this._uiHash(this))
                                }
                            }
                                .call(this, this.currentContainer)))),
                        s = this.containers.length - 1; 0 <= s; s--)
                        e || n.push(i("deactivate", this, this.containers[s])),
                            this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])),
                                this.containers[s].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
                        this.storedStylesheet.remove()),
                        this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                        this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                        this.dragging = !1,
                        e || this._trigger("beforeStop", t, this._uiHash()),
                        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                            this.helper = null),
                        !e) {
                        for (s = 0; n.length > s; s++)
                            n[s].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1,
                        !this.cancelHelperRemoval
                },
                _trigger: function () {
                    !1 === k.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                },
                _uiHash: function (t) {
                    var e = t || this;
                    return {
                        helper: e.helper,
                        placeholder: e.placeholder || k([]),
                        position: e.position,
                        originalPosition: e.originalPosition,
                        offset: e.positionAbs,
                        item: e.currentItem,
                        sender: t ? t.element : null
                    }
                }
            }),
            k.widget("ui.spinner", {
                version: "1.12.1",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: {
                    classes: {
                        "ui-spinner": "ui-corner-all",
                        "ui-spinner-down": "ui-corner-br",
                        "ui-spinner-up": "ui-corner-tr"
                    },
                    culture: null,
                    icons: {
                        down: "ui-icon-triangle-1-s",
                        up: "ui-icon-triangle-1-n"
                    },
                    incremental: !0,
                    max: null,
                    min: null,
                    numberFormat: null,
                    page: 10,
                    step: 1,
                    change: null,
                    spin: null,
                    start: null,
                    stop: null
                },
                _create: function () {
                    this._setOption("max", this.options.max),
                        this._setOption("min", this.options.min),
                        this._setOption("step", this.options.step),
                        "" !== this.value() && this._value(this.element.val(), !0),
                        this._draw(),
                        this._on(this._events),
                        this._refresh(),
                        this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                },
                _getCreateOptions: function () {
                    var s = this._super()
                        , n = this.element;
                    return k.each(["min", "max", "step"], function (t, e) {
                        var i = n.attr(e);
                        null != i && i.length && (s[e] = i)
                    }),
                        s
                },
                _events: {
                    keydown: function (t) {
                        this._start(t) && this._keydown(t) && t.preventDefault()
                    },
                    keyup: "_stop",
                    focus: function () {
                        this.previous = this.element.val()
                    },
                    blur: function (t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (this._stop(),
                            this._refresh(),
                            void (this.previous !== this.element.val() && this._trigger("change", t)))
                    },
                    mousewheel: function (t, e) {
                        if (e) {
                            if (!this.spinning && !this._start(t))
                                return !1;
                            this._spin((0 < e ? 1 : -1) * this.options.step, t),
                                clearTimeout(this.mousewheelTimer),
                                this.mousewheelTimer = this._delay(function () {
                                    this.spinning && this._stop(t)
                                }, 100),
                                t.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function (t) {
                        function e() {
                            this.element[0] === k.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"),
                                this.previous = i,
                                this._delay(function () {
                                    this.previous = i
                                }))
                        }
                        var i;
                        i = this.element[0] === k.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(),
                            t.preventDefault(),
                            e.call(this),
                            this.cancelBlur = !0,
                            this._delay(function () {
                                delete this.cancelBlur,
                                    e.call(this)
                            }),
                            !1 !== this._start(t) && this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function (t) {
                        return k(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && void this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _enhance: function () {
                    this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
                },
                _draw: function () {
                    this._enhance(),
                        this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
                        this._addClass("ui-spinner-input"),
                        this.element.attr("role", "spinbutton"),
                        this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                            classes: {
                                "ui-button": ""
                            }
                        }),
                        this._removeClass(this.buttons, "ui-corner-all"),
                        this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
                        this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
                        this.buttons.first().button({
                            icon: this.options.icons.up,
                            showLabel: !1
                        }),
                        this.buttons.last().button({
                            icon: this.options.icons.down,
                            showLabel: !1
                        }),
                        this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
                },
                _keydown: function (t) {
                    var e = this.options
                        , i = k.ui.keyCode;
                    switch (t.keyCode) {
                        case i.UP:
                            return this._repeat(null, 1, t),
                                !0;
                        case i.DOWN:
                            return this._repeat(null, -1, t),
                                !0;
                        case i.PAGE_UP:
                            return this._repeat(null, e.page, t),
                                !0;
                        case i.PAGE_DOWN:
                            return this._repeat(null, -e.page, t),
                                !0
                    }
                    return !1
                },
                _start: function (t) {
                    return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1),
                        this.spinning = !0)
                },
                _repeat: function (t, e, i) {
                    t = t || 500,
                        clearTimeout(this.timer),
                        this.timer = this._delay(function () {
                            this._repeat(40, e, i)
                        }, t),
                        this._spin(e * this.options.step, i)
                },
                _spin: function (t, e) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1),
                        i = this._adjustValue(i + t * this._increment(this.counter)),
                        this.spinning && !1 === this._trigger("spin", e, {
                            value: i
                        }) || (this._value(i),
                            this.counter++)
                },
                _increment: function (t) {
                    var e = this.options.incremental;
                    return e ? k.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
                },
                _precision: function () {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                        t
                },
                _precisionOf: function (t) {
                    var e = "" + t
                        , i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1
                },
                _adjustValue: function (t) {
                    var e, i, s = this.options;
                    return i = t - (e = null !== s.min ? s.min : 0),
                        t = e + (i = Math.round(i / s.step) * s.step),
                        t = parseFloat(t.toFixed(this._precision())),
                        null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
                },
                _stop: function (t) {
                    this.spinning && (clearTimeout(this.timer),
                        clearTimeout(this.mousewheelTimer),
                        this.counter = 0,
                        this.spinning = !1,
                        this._trigger("stop", t))
                },
                _setOption: function (t, e) {
                    var i, s, n;
                    return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()),
                        this.options[t] = e,
                        void this.element.val(this._format(i))) : ("max" !== t && "min" !== t && "step" !== t || "string" != typeof e || (e = this._parse(e)),
                            "icons" === t && (s = this.buttons.first().find(".ui-icon"),
                                this._removeClass(s, null, this.options.icons.up),
                                this._addClass(s, null, e.up),
                                n = this.buttons.last().find(".ui-icon"),
                                this._removeClass(n, null, this.options.icons.down),
                                this._addClass(n, null, e.down)),
                            void this._super(t, e))
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
                        this.element.prop("disabled", !!t),
                        this.buttons.button(t ? "disable" : "enable")
                },
                _setOptions: e(function (t) {
                    this._super(t)
                }),
                _parse: function (t) {
                    return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
                        "" === t || isNaN(t) ? null : t
                },
                _format: function (t) {
                    return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                },
                _refresh: function () {
                    this.element.attr({
                        "aria-valuemin": this.options.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._parse(this.element.val())
                    })
                },
                isValid: function () {
                    var t = this.value();
                    return null !== t && t === this._adjustValue(t)
                },
                _value: function (t, e) {
                    var i;
                    "" === t || null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)),
                        t = this._format(i)),
                        this.element.val(t),
                        this._refresh()
                },
                _destroy: function () {
                    this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
                        this.uiSpinner.replaceWith(this.element)
                },
                stepUp: e(function (t) {
                    this._stepUp(t)
                }),
                _stepUp: function (t) {
                    this._start() && (this._spin((t || 1) * this.options.step),
                        this._stop())
                },
                stepDown: e(function (t) {
                    this._stepDown(t)
                }),
                _stepDown: function (t) {
                    this._start() && (this._spin((t || 1) * -this.options.step),
                        this._stop())
                },
                pageUp: e(function (t) {
                    this._stepUp((t || 1) * this.options.page)
                }),
                pageDown: e(function (t) {
                    this._stepDown((t || 1) * this.options.page)
                }),
                value: function (t) {
                    return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
                },
                widget: function () {
                    return this.uiSpinner
                }
            }),
            !1 !== k.uiBackCompat && k.widget("ui.spinner", k.ui.spinner, {
                _enhance: function () {
                    this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
                },
                _uiSpinnerHtml: function () {
                    return "<span>"
                },
                _buttonHtml: function () {
                    return "<a></a><a></a>"
                }
            }),
            k.ui.spinner,
            k.widget("ui.tabs", {
                version: "1.12.1",
                delay: 300,
                options: {
                    active: null,
                    classes: {
                        "ui-tabs": "ui-corner-all",
                        "ui-tabs-nav": "ui-corner-all",
                        "ui-tabs-panel": "ui-corner-bottom",
                        "ui-tabs-tab": "ui-corner-top"
                    },
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _isLocal: (at = /#.*$/,
                    function (t) {
                        var e, i;
                        e = t.href.replace(at, ""),
                            i = location.href.replace(at, "");
                        try {
                            e = decodeURIComponent(e)
                        } catch (t) { }
                        try {
                            i = decodeURIComponent(i)
                        } catch (t) { }
                        return 1 < t.hash.length && e === i
                    }
                ),
                _create: function () {
                    var e = this
                        , t = this.options;
                    this.running = !1,
                        this._addClass("ui-tabs", "ui-widget ui-widget-content"),
                        this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
                        this._processTabs(),
                        t.active = this._initialActive(),
                        k.isArray(t.disabled) && (t.disabled = k.unique(t.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                            return e.tabs.index(t)
                        }))).sort()),
                        this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : k(),
                        this._refresh(),
                        this.active.length && this.load(t.active)
                },
                _initialActive: function () {
                    var i = this.options.active
                        , t = this.options.collapsible
                        , s = location.hash.substring(1);
                    return null === i && (s && this.tabs.each(function (t, e) {
                        return k(e).attr("aria-controls") === s ? (i = t,
                            !1) : void 0
                    }),
                        null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                        null !== i && -1 !== i || (i = !!this.tabs.length && 0)),
                        !1 !== i && (-1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0)),
                        !t && !1 === i && this.anchors.length && (i = 0),
                        i
                },
                _getCreateEventData: function () {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : k()
                    }
                },
                _tabKeydown: function (t) {
                    var e = k(k.ui.safeActiveElement(this.document[0])).closest("li")
                        , i = this.tabs.index(e)
                        , s = !0;
                    if (!this._handlePageNav(t)) {
                        switch (t.keyCode) {
                            case k.ui.keyCode.RIGHT:
                            case k.ui.keyCode.DOWN:
                                i++;
                                break;
                            case k.ui.keyCode.UP:
                            case k.ui.keyCode.LEFT:
                                s = !1,
                                    i--;
                                break;
                            case k.ui.keyCode.END:
                                i = this.anchors.length - 1;
                                break;
                            case k.ui.keyCode.HOME:
                                i = 0;
                                break;
                            case k.ui.keyCode.SPACE:
                                return t.preventDefault(),
                                    clearTimeout(this.activating),
                                    void this._activate(i);
                            case k.ui.keyCode.ENTER:
                                return t.preventDefault(),
                                    clearTimeout(this.activating),
                                    void this._activate(i !== this.options.active && i);
                            default:
                                return
                        }
                        t.preventDefault(),
                            clearTimeout(this.activating),
                            i = this._focusNextTab(i, s),
                            t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"),
                                this.tabs.eq(i).attr("aria-selected", "true"),
                                this.activating = this._delay(function () {
                                    this.option("active", i)
                                }, this.delay))
                    }
                },
                _panelKeydown: function (t) {
                    this._handlePageNav(t) || t.ctrlKey && t.keyCode === k.ui.keyCode.UP && (t.preventDefault(),
                        this.active.trigger("focus"))
                },
                _handlePageNav: function (t) {
                    return t.altKey && t.keyCode === k.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
                        !0) : t.altKey && t.keyCode === k.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
                            !0) : void 0
                },
                _findNextTab: function (t, e) {
                    for (var i = this.tabs.length - 1; -1 !== k.inArray((i < t && (t = 0),
                        t < 0 && (t = i),
                        t), this.options.disabled);)
                        t = e ? t + 1 : t - 1;
                    return t
                },
                _focusNextTab: function (t, e) {
                    return t = this._findNextTab(t, e),
                        this.tabs.eq(t).trigger("focus"),
                        t
                },
                _setOption: function (t, e) {
                    return "active" === t ? void this._activate(e) : (this._super(t, e),
                        "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e),
                            e || !1 !== this.options.active || this._activate(0)),
                        "event" === t && this._setupEvents(e),
                        void ("heightStyle" === t && this._setupHeightStyle(e)))
                },
                _sanitizeSelector: function (t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function () {
                    var t = this.options
                        , e = this.tablist.children(":has(a[href])");
                    t.disabled = k.map(e.filter(".ui-state-disabled"), function (t) {
                        return e.index(t)
                    }),
                        this._processTabs(),
                        !1 !== t.active && this.anchors.length ? this.active.length && !k.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
                            this.active = k()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
                                this.active = k()),
                        this._refresh()
                },
                _refresh: function () {
                    this._setOptionDisabled(this.options.disabled),
                        this._setupEvents(this.options.event),
                        this._setupHeightStyle(this.options.heightStyle),
                        this.tabs.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }),
                        this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                            "aria-hidden": "true"
                        }),
                        this.active.length ? (this.active.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }),
                            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
                            this._getPanelForTab(this.active).show().attr({
                                "aria-hidden": "false"
                            })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function () {
                    var l = this
                        , t = this.tabs
                        , e = this.anchors
                        , i = this.panels;
                    this.tablist = this._getList().attr("role", "tablist"),
                        this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
                        this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                            k(this).is(".ui-state-disabled") && t.preventDefault()
                        }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                            k(this).closest("li").is(".ui-state-disabled") && this.blur()
                        }),
                        this.tabs = this.tablist.find("> li:has(a[href])").attr({
                            role: "tab",
                            tabIndex: -1
                        }),
                        this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
                        this.anchors = this.tabs.map(function () {
                            return k("a", this)[0]
                        }).attr({
                            role: "presentation",
                            tabIndex: -1
                        }),
                        this._addClass(this.anchors, "ui-tabs-anchor"),
                        this.panels = k(),
                        this.anchors.each(function (t, e) {
                            var i, s, n, a = k(e).uniqueId().attr("id"), o = k(e).closest("li"), r = o.attr("aria-controls");
                            l._isLocal(e) ? (n = (i = e.hash).substring(1),
                                s = l.element.find(l._sanitizeSelector(i))) : (i = "#" + (n = o.attr("aria-controls") || k({}).uniqueId()[0].id),
                                    (s = l.element.find(i)).length || (s = l._createPanel(n)).insertAfter(l.panels[t - 1] || l.tablist),
                                    s.attr("aria-live", "polite")),
                                s.length && (l.panels = l.panels.add(s)),
                                r && o.data("ui-tabs-aria-controls", r),
                                o.attr({
                                    "aria-controls": n,
                                    "aria-labelledby": a
                                }),
                                s.attr("aria-labelledby", a)
                        }),
                        this.panels.attr("role", "tabpanel"),
                        this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
                        t && (this._off(t.not(this.tabs)),
                            this._off(e.not(this.anchors)),
                            this._off(i.not(this.panels)))
                },
                _getList: function () {
                    return this.tablist || this.element.find("ol, ul").eq(0)
                },
                _createPanel: function (t) {
                    return k("<div>").attr("id", t).data("ui-tabs-destroy", !0)
                },
                _setOptionDisabled: function (t) {
                    var e, i, s;
                    for (k.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1),
                        s = 0; i = this.tabs[s]; s++)
                        e = k(i),
                            !0 === t || -1 !== k.inArray(s, t) ? (e.attr("aria-disabled", "true"),
                                this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"),
                                    this._removeClass(e, null, "ui-state-disabled"));
                    this.options.disabled = t,
                        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
                },
                _setupEvents: function (t) {
                    var i = {};
                    t && k.each(t.split(" "), function (t, e) {
                        i[e] = "_eventHandler"
                    }),
                        this._off(this.anchors.add(this.tabs).add(this.panels)),
                        this._on(!0, this.anchors, {
                            click: function (t) {
                                t.preventDefault()
                            }
                        }),
                        this._on(this.anchors, i),
                        this._on(this.tabs, {
                            keydown: "_tabKeydown"
                        }),
                        this._on(this.panels, {
                            keydown: "_panelKeydown"
                        }),
                        this._focusable(this.tabs),
                        this._hoverable(this.tabs)
                },
                _setupHeightStyle: function (t) {
                    var i, e = this.element.parent();
                    "fill" === t ? (i = e.height(),
                        i -= this.element.outerHeight() - this.element.height(),
                        this.element.siblings(":visible").each(function () {
                            var t = k(this)
                                , e = t.css("position");
                            "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
                        }),
                        this.element.children().not(this.panels).each(function () {
                            i -= k(this).outerHeight(!0)
                        }),
                        this.panels.each(function () {
                            k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()))
                        }).css("overflow", "auto")) : "auto" === t && (i = 0,
                            this.panels.each(function () {
                                i = Math.max(i, k(this).height("").height())
                            }).height(i))
                },
                _eventHandler: function (t) {
                    var e = this.options
                        , i = this.active
                        , s = k(t.currentTarget).closest("li")
                        , n = s[0] === i[0]
                        , a = n && e.collapsible
                        , o = a ? k() : this._getPanelForTab(s)
                        , r = i.length ? this._getPanelForTab(i) : k()
                        , l = {
                            oldTab: i,
                            oldPanel: r,
                            newTab: a ? k() : s,
                            newPanel: o
                        };
                    t.preventDefault(),
                        s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !e.collapsible || !1 === this._trigger("beforeActivate", t, l) || (e.active = !a && this.tabs.index(s),
                            this.active = n ? k() : s,
                            this.xhr && this.xhr.abort(),
                            r.length || o.length || k.error("jQuery UI Tabs: Mismatching fragment identifier."),
                            o.length && this.load(this.tabs.index(s), t),
                            this._toggle(t, l))
                },
                _toggle: function (t, e) {
                    function i() {
                        n.running = !1,
                            n._trigger("activate", t, e)
                    }
                    function s() {
                        n._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                            a.length && n.options.show ? n._show(a, n.options.show, i) : (a.show(),
                                i())
                    }
                    var n = this
                        , a = e.newPanel
                        , o = e.oldPanel;
                    this.running = !0,
                        o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
                            n._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                                s()
                        }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                            o.hide(),
                            s()),
                        o.attr("aria-hidden", "true"),
                        e.oldTab.attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }),
                        a.length && o.length ? e.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                            return 0 === k(this).attr("tabIndex")
                        }).attr("tabIndex", -1),
                        a.attr("aria-hidden", "false"),
                        e.newTab.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                },
                _activate: function (t) {
                    var e, i = this._findActive(t);
                    i[0] !== this.active[0] && (i.length || (i = this.active),
                        e = i.find(".ui-tabs-anchor")[0],
                        this._eventHandler({
                            target: e,
                            currentTarget: e,
                            preventDefault: k.noop
                        }))
                },
                _findActive: function (t) {
                    return !1 === t ? k() : this.tabs.eq(t)
                },
                _getIndex: function (t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + k.ui.escapeSelector(t) + "']"))),
                        t
                },
                _destroy: function () {
                    this.xhr && this.xhr.abort(),
                        this.tablist.removeAttr("role").off(this.eventNamespace),
                        this.anchors.removeAttr("role tabIndex").removeUniqueId(),
                        this.tabs.add(this.panels).each(function () {
                            k.data(this, "ui-tabs-destroy") ? k(this).remove() : k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                        }),
                        this.tabs.each(function () {
                            var t = k(this)
                                , e = t.data("ui-tabs-aria-controls");
                            e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                        }),
                        this.panels.show(),
                        "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function (i) {
                    var t = this.options.disabled;
                    !1 !== t && (t = void 0 !== i && (i = this._getIndex(i),
                        k.isArray(t) ? k.map(t, function (t) {
                            return t !== i ? t : null
                        }) : k.map(this.tabs, function (t, e) {
                            return e !== i ? e : null
                        })),
                        this._setOptionDisabled(t))
                },
                disable: function (t) {
                    var e = this.options.disabled;
                    if (!0 !== e) {
                        if (void 0 === t)
                            e = !0;
                        else {
                            if (t = this._getIndex(t),
                                -1 !== k.inArray(t, e))
                                return;
                            e = k.isArray(e) ? k.merge([t], e).sort() : [t]
                        }
                        this._setOptionDisabled(e)
                    }
                },
                load: function (t, s) {
                    t = this._getIndex(t);
                    function n(t, e) {
                        "abort" === e && a.panels.stop(!1, !0),
                            a._removeClass(i, "ui-tabs-loading"),
                            o.removeAttr("aria-busy"),
                            t === a.xhr && delete a.xhr
                    }
                    var a = this
                        , i = this.tabs.eq(t)
                        , e = i.find(".ui-tabs-anchor")
                        , o = this._getPanelForTab(i)
                        , r = {
                            tab: i,
                            panel: o
                        };
                    this._isLocal(e[0]) || (this.xhr = k.ajax(this._ajaxSettings(e, s, r)),
                        this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"),
                            o.attr("aria-busy", "true"),
                            this.xhr.done(function (t, e, i) {
                                setTimeout(function () {
                                    o.html(t),
                                        a._trigger("load", s, r),
                                        n(i, e)
                                }, 1)
                            }).fail(function (t, e) {
                                setTimeout(function () {
                                    n(t, e)
                                }, 1)
                            })))
                },
                _ajaxSettings: function (t, i, s) {
                    var n = this;
                    return {
                        url: t.attr("href").replace(/#.*$/, ""),
                        beforeSend: function (t, e) {
                            return n._trigger("beforeLoad", i, k.extend({
                                jqXHR: t,
                                ajaxSettings: e
                            }, s))
                        }
                    }
                },
                _getPanelForTab: function (t) {
                    var e = k(t).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + e))
                }
            }),
            !1 !== k.uiBackCompat && k.widget("ui.tabs", k.ui.tabs, {
                _processTabs: function () {
                    this._superApply(arguments),
                        this._addClass(this.tabs, "ui-tab")
                }
            }),
            k.ui.tabs,
            k.widget("ui.tooltip", {
                version: "1.12.1",
                options: {
                    classes: {
                        "ui-tooltip": "ui-corner-all ui-widget-shadow"
                    },
                    content: function () {
                        var t = k(this).attr("title") || "";
                        return k("<a>").text(t).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: {
                        my: "left top+15",
                        at: "left bottom",
                        collision: "flipfit flip"
                    },
                    show: !0,
                    track: !1,
                    close: null,
                    open: null
                },
                _addDescribedBy: function (t, e) {
                    var i = (t.attr("aria-describedby") || "").split(/\s+/);
                    i.push(e),
                        t.data("ui-tooltip-id", e).attr("aria-describedby", k.trim(i.join(" ")))
                },
                _removeDescribedBy: function (t) {
                    var e = t.data("ui-tooltip-id")
                        , i = (t.attr("aria-describedby") || "").split(/\s+/)
                        , s = k.inArray(e, i);
                    -1 !== s && i.splice(s, 1),
                        t.removeData("ui-tooltip-id"),
                        (i = k.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
                },
                _create: function () {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }),
                        this.tooltips = {},
                        this.parents = {},
                        this.liveRegion = k("<div>").attr({
                            role: "log",
                            "aria-live": "assertive",
                            "aria-relevant": "additions"
                        }).appendTo(this.document[0].body),
                        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                        this.disabledTitles = k([])
                },
                _setOption: function (t, e) {
                    var i = this;
                    this._super(t, e),
                        "content" === t && k.each(this.tooltips, function (t, e) {
                            i._updateContent(e.element)
                        })
                },
                _setOptionDisabled: function (t) {
                    this[t ? "_disable" : "_enable"]()
                },
                _disable: function () {
                    var s = this;
                    k.each(this.tooltips, function (t, e) {
                        var i = k.Event("blur");
                        i.target = i.currentTarget = e.element[0],
                            s.close(i, !0)
                    }),
                        this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                            var t = k(this);
                            return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
                        }))
                },
                _enable: function () {
                    this.disabledTitles.each(function () {
                        var t = k(this);
                        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                    }),
                        this.disabledTitles = k([])
                },
                open: function (t) {
                    var i = this
                        , e = k(t ? t.target : this.element).closest(this.options.items);
                    e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
                        e.data("ui-tooltip-open", !0),
                        t && "mouseover" === t.type && e.parents().each(function () {
                            var t, e = k(this);
                            e.data("ui-tooltip-open") && ((t = k.Event("blur")).target = t.currentTarget = this,
                                i.close(t, !0)),
                                e.attr("title") && (e.uniqueId(),
                                    i.parents[this.id] = {
                                        element: this,
                                        title: e.attr("title")
                                    },
                                    e.attr("title", ""))
                        }),
                        this._registerCloseHandlers(t, e),
                        this._updateContent(e, t))
                },
                _updateContent: function (e, i) {
                    var t, s = this.options.content, n = this, a = i ? i.type : null;
                    return "string" == typeof s || s.nodeType || s.jquery ? this._open(i, e, s) : void ((t = s.call(e[0], function (t) {
                        n._delay(function () {
                            e.data("ui-tooltip-open") && (i && (i.type = a),
                                this._open(i, e, t))
                        })
                    })) && this._open(i, e, t))
                },
                _open: function (t, e, i) {
                    function s(t) {
                        l.of = t,
                            a.is(":hidden") || a.position(l)
                    }
                    var n, a, o, r, l = k.extend({}, this.options.position);
                    if (i) {
                        if (n = this._find(e))
                            return void n.tooltip.find(".ui-tooltip-content").html(i);
                        e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")),
                            n = this._tooltip(e),
                            a = n.tooltip,
                            this._addDescribedBy(e, a.attr("id")),
                            a.find(".ui-tooltip-content").html(i),
                            this.liveRegion.children().hide(),
                            (r = k("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
                            r.removeAttr("id").find("[id]").removeAttr("id"),
                            r.appendTo(this.liveRegion),
                            this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                                mousemove: s
                            }),
                                s(t)) : a.position(k.extend({
                                    of: e
                                }, this.options.position)),
                            a.hide(),
                            this._show(a, this.options.show),
                            this.options.track && this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval(function () {
                                a.is(":visible") && (s(l.of),
                                    clearInterval(o))
                            }, k.fx.interval)),
                            this._trigger("open", t, {
                                tooltip: a
                            })
                    }
                },
                _registerCloseHandlers: function (t, i) {
                    var e = {
                        keyup: function (t) {
                            if (t.keyCode === k.ui.keyCode.ESCAPE) {
                                var e = k.Event(t);
                                e.currentTarget = i[0],
                                    this.close(e, !0)
                            }
                        }
                    };
                    i[0] !== this.element[0] && (e.remove = function () {
                        this._removeTooltip(this._find(i).tooltip)
                    }
                    ),
                        t && "mouseover" !== t.type || (e.mouseleave = "close"),
                        t && "focusin" !== t.type || (e.focusout = "close"),
                        this._on(!0, i, e)
                },
                close: function (t) {
                    var e, i = this, s = k(t ? t.currentTarget : this.element), n = this._find(s);
                    return n ? (e = n.tooltip,
                        void (n.closing || (clearInterval(this.delayedShow),
                            s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")),
                            this._removeDescribedBy(s),
                            n.hiding = !0,
                            e.stop(!0),
                            this._hide(e, this.options.hide, function () {
                                i._removeTooltip(k(this))
                            }),
                            s.removeData("ui-tooltip-open"),
                            this._off(s, "mouseleave focusout keyup"),
                            s[0] !== this.element[0] && this._off(s, "remove"),
                            this._off(this.document, "mousemove"),
                            t && "mouseleave" === t.type && k.each(this.parents, function (t, e) {
                                k(e.element).attr("title", e.title),
                                    delete i.parents[t]
                            }),
                            n.closing = !0,
                            this._trigger("close", t, {
                                tooltip: e
                            }),
                            n.hiding || (n.closing = !1)))) : void s.removeData("ui-tooltip-open")
                },
                _tooltip: function (t) {
                    var e = k("<div>").attr("role", "tooltip")
                        , i = k("<div>").appendTo(e)
                        , s = e.uniqueId().attr("id");
                    return this._addClass(i, "ui-tooltip-content"),
                        this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"),
                        e.appendTo(this._appendTo(t)),
                        this.tooltips[s] = {
                            element: t,
                            tooltip: e
                        }
                },
                _find: function (t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null
                },
                _removeTooltip: function (t) {
                    t.remove(),
                        delete this.tooltips[t.attr("id")]
                },
                _appendTo: function (t) {
                    var e = t.closest(".ui-front, dialog");
                    return e.length || (e = this.document[0].body),
                        e
                },
                _destroy: function () {
                    var n = this;
                    k.each(this.tooltips, function (t, e) {
                        var i = k.Event("blur")
                            , s = e.element;
                        i.target = i.currentTarget = s[0],
                            n.close(i, !0),
                            k("#" + t).remove(),
                            s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")),
                                s.removeData("ui-tooltip-title"))
                    }),
                        this.liveRegion.remove()
                }
            }),
            !1 !== k.uiBackCompat && k.widget("ui.tooltip", k.ui.tooltip, {
                options: {
                    tooltipClass: null
                },
                _tooltip: function () {
                    var t = this._superApply(arguments);
                    return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass),
                        t
                }
            }),
            k.ui.tooltip
    }),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
    }(this, function () {
        "use strict";
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1,
                    s.configurable = !0,
                    "value" in s && (s.writable = !0),
                    Object.defineProperty(t, s.key, s)
            }
        }
        function t(t, e, i) {
            return e && n(t.prototype, e),
                i && n(t, i),
                t
        }
        function u() {
            return (u = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function o(t) {
            return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function r(t, e) {
            return (r = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e,
                    t
            }
            )(t, e)
        }
        function l(t, e, i) {
            return (l = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })),
                        !0
                } catch (t) {
                    return !1
                }
            }() ? Reflect.construct : function (t, e, i) {
                var s = [null];
                s.push.apply(s, e);
                var n = new (Function.bind.apply(t, s));
                return i && r(n, i.prototype),
                    n
            }
            ).apply(null, arguments)
        }
        function h(t, e, i) {
            return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
                var s = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t));)
                        ;
                    return t
                }(t, e);
                if (s) {
                    var n = Object.getOwnPropertyDescriptor(s, e);
                    return n.get ? n.get.call(i) : n.value
                }
            }
            )(t, e, i || t)
        }
        function c(e) {
            return Object.keys(e).map(function (t) {
                return e[t]
            })
        }
        function d(t) {
            return Array.prototype.slice.call(t)
        }
        function g(t) {
            console.error("".concat(N, " ").concat(t))
        }
        function p(t) {
            return t && Promise.resolve(t) === t
        }
        function f(t) {
            return t instanceof Element || "object" === a(e = t) && e.jquery;
            var e
        }
        function e(t) {
            var e = {};
            for (var i in t)
                e[t[i]] = "swal2-" + t[i];
            return e
        }
        function v() {
            return document.body.querySelector(".".concat(R.container))
        }
        function m(t) {
            var e = v();
            return e ? e.querySelector(t) : null
        }
        function i(t) {
            return m(".".concat(t))
        }
        function b() {
            return i(R.popup)
        }
        function w() {
            return d(b().querySelectorAll(".".concat(R.icon)))
        }
        function y() {
            var t = w().filter(function (t) {
                return lt(t)
            });
            return t.length ? t[0] : null
        }
        function _() {
            return i(R.title)
        }
        function x() {
            return i(R.content)
        }
        function k() {
            return i(R.image)
        }
        function C() {
            return i(R["progress-steps"])
        }
        function T() {
            return i(R["validation-message"])
        }
        function S() {
            return m(".".concat(R.actions, " .").concat(R.confirm))
        }
        function E() {
            return m(".".concat(R.actions, " .").concat(R.cancel))
        }
        function D() {
            return i(R.actions)
        }
        function P() {
            return i(R.header)
        }
        function M() {
            return i(R.footer)
        }
        function I() {
            return i(R["timer-progress-bar"])
        }
        function z() {
            return i(R.close)
        }
        function O() {
            var t = d(b().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
                return t = parseInt(t.getAttribute("tabindex")),
                    (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            })
                , e = d(b().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
                    return "-1" !== t.getAttribute("tabindex")
                });
            return function (t) {
                for (var e = [], i = 0; i < t.length; i++)
                    -1 === e.indexOf(t[i]) && e.push(t[i]);
                return e
            }(t.concat(e)).filter(function (t) {
                return lt(t)
            })
        }
        function A() {
            return !V() && !document.body.classList.contains(R["no-backdrop"])
        }
        function H(t, e) {
            if (!e)
                return !1;
            for (var i = e.split(/\s+/), s = 0; s < i.length; s++)
                if (!t.classList.contains(i[s]))
                    return !1;
            return !0
        }
        function L(t, e, i) {
            if (n = e,
                d((s = t).classList).forEach(function (t) {
                    -1 === c(R).indexOf(t) && -1 === c(Y).indexOf(t) && -1 === c(n.showClass).indexOf(t) && s.classList.remove(t)
                }),
                e.customClass && e.customClass[i]) {
                if ("string" != typeof e.customClass[i] && !e.customClass[i].forEach)
                    return B("Invalid type of customClass.".concat(i, '! Expected string or iterable object, got "').concat(a(e.customClass[i]), '"'));
                at(t, e.customClass[i])
            }
            var s, n
        }
        function $(t) {
            return "function" == typeof t ? t() : t
        }
        var N = "SweetAlert2:"
            , B = function (t) {
                console.warn("".concat(N, " ").concat(t))
            }
            , W = []
            , F = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            })
            , R = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "scrollbar-measure"])
            , Y = e(["success", "warning", "info", "question", "error"])
            , V = function () {
                return document.body.classList.contains(R["toast-shown"])
            }
            , j = {
                previousBodyPadding: null
            };
        function q(t, e) {
            if (!e)
                return null;
            switch (e) {
                case "select":
                case "textarea":
                case "file":
                    return rt(t, R[e]);
                case "checkbox":
                    return t.querySelector(".".concat(R.checkbox, " input"));
                case "radio":
                    return t.querySelector(".".concat(R.radio, " input:checked")) || t.querySelector(".".concat(R.radio, " input:first-child"));
                case "range":
                    return t.querySelector(".".concat(R.range, " input"));
                default:
                    return rt(t, R.input)
            }
        }
        function X(t) {
            if (t.focus(),
                "file" !== t.type) {
                var e = t.value;
                t.value = "",
                    t.value = e
            }
        }
        function G(t, e, i) {
            t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
                e.forEach(function (e) {
                    t.forEach ? t.forEach(function (t) {
                        i ? t.classList.add(e) : t.classList.remove(e)
                    }) : i ? t.classList.add(e) : t.classList.remove(e)
                }))
        }
        function U(t, e, i) {
            i || 0 === parseInt(i) ? t.style[e] = "number" == typeof i ? "".concat(i, "px") : i : t.style.removeProperty(e)
        }
        function K(t, e) {
            var i = 1 < arguments.length && void 0 !== e ? e : "flex";
            t.style.opacity = "",
                t.style.display = i
        }
        function Z(t) {
            t.style.opacity = "",
                t.style.display = "none"
        }
        function Q(t, e, i) {
            e ? K(t, i) : Z(t)
        }
        function J(t) {
            var e = window.getComputedStyle(t)
                , i = parseFloat(e.getPropertyValue("animation-duration") || "0")
                , s = parseFloat(e.getPropertyValue("transition-duration") || "0");
            return 0 < i || 0 < s
        }
        function tt(t, e) {
            var i = 1 < arguments.length && void 0 !== e && e
                , s = I();
            lt(s) && (i && (s.style.transition = "none",
                s.style.width = "100%"),
                setTimeout(function () {
                    s.style.transition = "width ".concat(t / 1e3, "s linear"),
                        s.style.width = "0%"
                }, 10))
        }
        function et() {
            return "undefined" == typeof window || "undefined" == typeof document
        }
        function it(t) {
            Ee.isVisible() && nt !== t.target.value && Ee.resetValidationMessage(),
                nt = t.target.value
        }
        function st(t, e) {
            t instanceof HTMLElement ? e.appendChild(t) : "object" === a(t) ? ct(e, t) : t && (e.innerHTML = t)
        }
        var nt, at = function (t, e) {
            G(t, e, !0)
        }, ot = function (t, e) {
            G(t, e, !1)
        }, rt = function (t, e) {
            for (var i = 0; i < t.childNodes.length; i++)
                if (H(t.childNodes[i], e))
                    return t.childNodes[i]
        }, lt = function (t) {
            return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
        }, ht = '\n <div aria-labelledby="'.concat(R.title, '" aria-describedby="').concat(R.content, '" class="').concat(R.popup, '" tabindex="-1">\n   <div class="').concat(R.header, '">\n     <ul class="').concat(R["progress-steps"], '"></ul>\n     <div class="').concat(R.icon, " ").concat(Y.error, '"></div>\n     <div class="').concat(R.icon, " ").concat(Y.question, '"></div>\n     <div class="').concat(R.icon, " ").concat(Y.warning, '"></div>\n     <div class="').concat(R.icon, " ").concat(Y.info, '"></div>\n     <div class="').concat(R.icon, " ").concat(Y.success, '"></div>\n     <img class="').concat(R.image, '" />\n     <h2 class="').concat(R.title, '" id="').concat(R.title, '"></h2>\n     <button type="button" class="').concat(R.close, '"></button>\n   </div>\n   <div class="').concat(R.content, '">\n     <div id="').concat(R.content, '" class="').concat(R["html-container"], '"></div>\n     <input class="').concat(R.input, '" />\n     <input type="file" class="').concat(R.file, '" />\n     <div class="').concat(R.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(R.select, '"></select>\n     <div class="').concat(R.radio, '"></div>\n     <label for="').concat(R.checkbox, '" class="').concat(R.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(R.label, '"></span>\n     </label>\n     <textarea class="').concat(R.textarea, '"></textarea>\n     <div class="').concat(R["validation-message"], '" id="').concat(R["validation-message"], '"></div>\n   </div>\n   <div class="').concat(R.actions, '">\n     <button type="button" class="').concat(R.confirm, '">OK</button>\n     <button type="button" class="').concat(R.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(R.footer, '"></div>\n   <div class="').concat(R["timer-progress-bar"], '"></div>\n </div>\n').replace(/(^|\n)\s*/g, ""), ct = function (t, e) {
            if (t.innerHTML = "",
                0 in e)
                for (var i = 0; i in e; i++)
                    t.appendChild(e[i].cloneNode(!0));
            else
                t.appendChild(e.cloneNode(!0))
        }, dt = function () {
            if (et())
                return !1;
            var t = document.createElement("div")
                , e = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i) && void 0 !== t.style[i])
                    return e[i];
            return !1
        }();
        function ut(t, e, i) {
            var s;
            Q(t, i["show".concat((s = e).charAt(0).toUpperCase() + s.slice(1), "Button")], "inline-block"),
                t.innerHTML = i["".concat(e, "ButtonText")],
                t.setAttribute("aria-label", i["".concat(e, "ButtonAriaLabel")]),
                t.className = R[e],
                L(t, i, "".concat(e, "Button")),
                at(t, i["".concat(e, "ButtonClass")])
        }
        function pt(t, e) {
            t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
        }
        var ft = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        }
            , mt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
            , gt = function (t) {
                if (!yt[t.input])
                    return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
                var e = wt(t.input)
                    , i = yt[t.input](e, t);
                K(i),
                    setTimeout(function () {
                        X(i)
                    })
            }
            , vt = function (t, e) {
                var i = q(x(), t);
                if (i)
                    for (var s in function (t) {
                        for (var e = 0; e < t.attributes.length; e++) {
                            var i = t.attributes[e].name;
                            -1 === ["type", "value", "style"].indexOf(i) && t.removeAttribute(i)
                        }
                    }(i),
                        e)
                        "range" === t && "placeholder" === s || i.setAttribute(s, e[s])
            }
            , bt = function (t) {
                var e = wt(t.input);
                t.customClass && at(e, t.customClass.input)
            }
            , wt = function (t) {
                var e = R[t] ? R[t] : R.input;
                return rt(x(), e)
            }
            , yt = {};
        function _t(t, e) {
            var i, s, n, a;
            L(P(), e, "header"),
                function (t, l) {
                    var h = C();
                    if (!l.progressSteps || 0 === l.progressSteps.length)
                        return Z(h);
                    K(h),
                        h.innerHTML = "";
                    var c = parseInt(null === l.currentProgressStep ? Ee.getQueueStep() : l.currentProgressStep);
                    c >= l.progressSteps.length && B("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
                        l.progressSteps.forEach(function (t, e) {
                            var i, s, n, a, o = (i = t,
                                s = document.createElement("li"),
                                at(s, R["progress-step"]),
                                s.innerHTML = i,
                                s);
                            if (h.appendChild(o),
                                e === c && at(o, R["active-progress-step"]),
                                e !== l.progressSteps.length - 1) {
                                var r = (n = t,
                                    a = document.createElement("li"),
                                    at(a, R["progress-step-line"]),
                                    n.progressStepsDistance && (a.style.width = n.progressStepsDistance),
                                    a);
                                h.appendChild(r)
                            }
                        })
                }(0, e),
                function (t, e) {
                    var i = ft.innerParams.get(t);
                    if (i && e.icon === i.icon && y())
                        L(y(), e, "icon");
                    else if (Ct(),
                        e.icon)
                        if (-1 !== Object.keys(Y).indexOf(e.icon)) {
                            var s = m(".".concat(R.icon, ".").concat(Y[e.icon]));
                            K(s),
                                St(s, e),
                                Tt(),
                                L(s, e, "icon"),
                                at(s, e.showClass.icon)
                        } else
                            g('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"'))
                }(t, e),
                function (t, e) {
                    var i = k();
                    if (!e.imageUrl)
                        return Z(i);
                    K(i),
                        i.setAttribute("src", e.imageUrl),
                        i.setAttribute("alt", e.imageAlt),
                        U(i, "width", e.imageWidth),
                        U(i, "height", e.imageHeight),
                        i.className = R.image,
                        L(i, e, "image")
                }(0, e),
                n = e,
                Q(a = _(), n.title || n.titleText),
                n.title && st(n.title, a),
                n.titleText && (a.innerText = n.titleText),
                L(a, n, "title"),
                i = e,
                (s = z()).innerHTML = i.closeButtonHtml,
                L(s, i, "closeButton"),
                Q(s, i.showCloseButton),
                s.setAttribute("aria-label", i.closeButtonAriaLabel)
        }
        function xt(t, e) {
            var i, s, n, a;
            n = e,
                U(a = b(), "width", n.width),
                U(a, "padding", n.padding),
                n.background && (a.style.background = n.background),
                a.className = R.popup,
                n.toast ? (at([document.documentElement, document.body], R["toast-shown"]),
                    at(a, R.toast)) : at(a, R.modal),
                L(a, n, "popup"),
                "string" == typeof n.customClass && at(a, n.customClass),
                lt(a) && at(a, n.showClass.popup),
                function (t, e) {
                    var i, s, n, a, o = v();
                    o && (n = o,
                        "string" == typeof (a = e.backdrop) ? n.style.background = a : a || at([document.documentElement, document.body], R["no-backdrop"]),
                        !e.backdrop && e.allowOutsideClick && B('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),
                        i = o,
                        (s = e.position) in R ? at(i, R[s]) : (B('The "position" parameter is not valid, defaulting to "center"'),
                            at(i, R.center)),
                        function (t, e) {
                            if (e && "string" == typeof e) {
                                var i = "grow-".concat(e);
                                i in R && at(t, R[i])
                            }
                        }(o, e.grow),
                        L(o, e, "container"))
                }(0, e),
                _t(t, e),
                function (t, e) {
                    var i, s, n, a, o, r = x().querySelector("#".concat(R.content));
                    e.html ? (st(e.html, r),
                        K(r, "block")) : e.text ? (r.textContent = e.text,
                            K(r, "block")) : Z(r),
                        i = t,
                        s = e,
                        n = x(),
                        a = ft.innerParams.get(i),
                        o = !a || s.input !== a.input,
                        mt.forEach(function (t) {
                            var e = R[t]
                                , i = rt(n, e);
                            vt(t, s.inputAttributes),
                                i.className = e,
                                o && Z(i)
                        }),
                        s.input && (o && gt(s),
                            bt(s)),
                        L(x(), e, "content")
                }(t, e),
                function (t, e) {
                    var i = D()
                        , s = S()
                        , n = E();
                    e.showConfirmButton || e.showCancelButton || Z(i),
                        L(i, e, "actions"),
                        ut(s, "confirm", e),
                        ut(n, "cancel", e),
                        e.buttonsStyling ? function (t, e, i) {
                            at([t, e], R.styled),
                                i.confirmButtonColor && (t.style.backgroundColor = i.confirmButtonColor),
                                i.cancelButtonColor && (e.style.backgroundColor = i.cancelButtonColor);
                            var s = window.getComputedStyle(t).getPropertyValue("background-color");
                            t.style.borderLeftColor = s,
                                t.style.borderRightColor = s
                        }(s, n, e) : (ot([s, n], R.styled),
                            s.style.backgroundColor = s.style.borderLeftColor = s.style.borderRightColor = "",
                            n.style.backgroundColor = n.style.borderLeftColor = n.style.borderRightColor = ""),
                        e.reverseButtons && s.parentNode.insertBefore(n, s)
                }(0, e),
                i = e,
                Q(s = M(), i.footer),
                i.footer && st(i.footer, s),
                L(s, i, "footer"),
                "function" == typeof e.onRender && e.onRender(b())
        }
        function kt() {
            return S() && S().click()
        }
        yt.text = yt.email = yt.password = yt.number = yt.tel = yt.url = function (t, e) {
            return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : p(e.inputValue) || B('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(a(e.inputValue), '"')),
                pt(t, e),
                t.type = e.input,
                t
        }
            ,
            yt.file = function (t, e) {
                return pt(t, e),
                    t
            }
            ,
            yt.range = function (t, e) {
                var i = t.querySelector("input")
                    , s = t.querySelector("output");
                return i.value = e.inputValue,
                    i.type = e.input,
                    s.value = e.inputValue,
                    t
            }
            ,
            yt.select = function (t, e) {
                if (t.innerHTML = "",
                    e.inputPlaceholder) {
                    var i = document.createElement("option");
                    i.innerHTML = e.inputPlaceholder,
                        i.value = "",
                        i.disabled = !0,
                        i.selected = !0,
                        t.appendChild(i)
                }
                return t
            }
            ,
            yt.radio = function (t) {
                return t.innerHTML = "",
                    t
            }
            ,
            yt.checkbox = function (t, e) {
                var i = q(x(), "checkbox");
                return i.value = 1,
                    i.id = R.checkbox,
                    i.checked = Boolean(e.inputValue),
                    t.querySelector("span").innerHTML = e.inputPlaceholder,
                    t
            }
            ,
            yt.textarea = function (e, t) {
                if (e.value = t.inputValue,
                    pt(e, t),
                    "MutationObserver" in window) {
                    var i = parseInt(window.getComputedStyle(b()).width)
                        , s = parseInt(window.getComputedStyle(b()).paddingLeft) + parseInt(window.getComputedStyle(b()).paddingRight);
                    new MutationObserver(function () {
                        var t = e.offsetWidth + s;
                        b().style.width = i < t ? "".concat(t, "px") : null
                    }
                    ).observe(e, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
                return e
            }
            ;
        var Ct = function () {
            for (var t = w(), e = 0; e < t.length; e++)
                Z(t[e])
        }
            , Tt = function () {
                for (var t = b(), e = window.getComputedStyle(t).getPropertyValue("background-color"), i = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), s = 0; s < i.length; s++)
                    i[s].style.backgroundColor = e
            }
            , St = function (t, e) {
                t.innerHTML = "",
                    e.iconHtml ? t.innerHTML = Et(e.iconHtml) : "success" === e.icon ? t.innerHTML = '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ' : "error" === e.icon ? t.innerHTML = '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ' : t.innerHTML = Et({
                        question: "?",
                        warning: "!",
                        info: "i"
                    }[e.icon])
            }
            , Et = function (t) {
                return '<div class="'.concat(R["icon-content"], '">').concat(t, "</div>")
            };
        function Dt() {
            var t = b();
            t || Ee.fire(),
                t = b();
            var e = D()
                , i = S();
            K(e),
                K(i, "inline-block"),
                at([t, e], R.loading),
                i.disabled = !0,
                t.setAttribute("data-loading", !0),
                t.setAttribute("aria-busy", !0),
                t.focus()
        }
        function Pt() {
            if (At.timeout)
                return function () {
                    var t = I()
                        , e = parseInt(window.getComputedStyle(t).width);
                    t.style.removeProperty("transition"),
                        t.style.width = "100%";
                    var i = parseInt(window.getComputedStyle(t).width)
                        , s = parseInt(e / i * 100);
                    t.style.removeProperty("transition"),
                        t.style.width = "".concat(s, "%")
                }(),
                    At.timeout.stop()
        }
        function Mt() {
            if (At.timeout) {
                var t = At.timeout.start();
                return tt(t),
                    t
            }
        }
        function It(t) {
            return Object.prototype.hasOwnProperty.call(Ht, t)
        }
        function zt(t) {
            return $t[t]
        }
        var Ot = []
            , At = {}
            , Ht = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: null,
                iconHtml: null,
                toast: !1,
                animation: !0,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: "",
                target: "body",
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                preConfirm: null,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: null,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: null,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusCancel: !1,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                showLoaderOnConfirm: !1,
                imageUrl: null,
                imageWidth: null,
                imageHeight: null,
                imageAlt: "",
                timer: null,
                timerProgressBar: !1,
                width: null,
                padding: null,
                background: null,
                input: null,
                inputPlaceholder: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: null,
                validationMessage: null,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: null,
                progressStepsDistance: null,
                onBeforeOpen: null,
                onOpen: null,
                onRender: null,
                onClose: null,
                onAfterClose: null,
                scrollbarPadding: !0
            }
            , Lt = ["title", "titleText", "text", "html", "icon", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep"]
            , $t = {
                animation: 'showClass" and "hideClass'
            }
            , Nt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"]
            , Bt = Object.freeze({
                isValidParameter: It,
                isUpdatableParameter: function (t) {
                    return -1 !== Lt.indexOf(t)
                },
                isDeprecatedParameter: zt,
                argsToParams: function (s) {
                    var n = {};
                    return "object" !== a(s[0]) || f(s[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
                        var i = s[e];
                        "string" == typeof i || f(i) ? n[t] = i : void 0 !== i && g("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(a(i)))
                    }) : u(n, s[0]),
                        n
                },
                isVisible: function () {
                    return lt(b())
                },
                clickConfirm: kt,
                clickCancel: function () {
                    return E() && E().click()
                },
                getContainer: v,
                getPopup: b,
                getTitle: _,
                getContent: x,
                getHtmlContainer: function () {
                    return i(R["html-container"])
                },
                getImage: k,
                getIcon: y,
                getIcons: w,
                getCloseButton: z,
                getActions: D,
                getConfirmButton: S,
                getCancelButton: E,
                getHeader: P,
                getFooter: M,
                getFocusableElements: O,
                getValidationMessage: T,
                isLoading: function () {
                    return b().hasAttribute("data-loading")
                },
                fire: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    return l(this, e)
                },
                mixin: function (e) {
                    return function (t, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            e && r(t, e)
                    }(i, this),
                        t(i, [{
                            key: "_main",
                            value: function (t) {
                                return h(o(i.prototype), "_main", this).call(this, u({}, e, t))
                            }
                        }]),
                        i;
                    function i() {
                        return s(this, i),
                            function (t, e) {
                                return !e || "object" != typeof e && "function" != typeof e ? function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t) : e
                            }(this, o(i).apply(this, arguments))
                    }
                },
                queue: function (t) {
                    var a = this;
                    function o(t, e) {
                        Ot = [],
                            document.body.removeAttribute("data-swal2-queue-step"),
                            t(e)
                    }
                    Ot = t;
                    var r = [];
                    return new Promise(function (n) {
                        !function e(i, s) {
                            i < Ot.length ? (document.body.setAttribute("data-swal2-queue-step", i),
                                a.fire(Ot[i]).then(function (t) {
                                    void 0 !== t.value ? (r.push(t.value),
                                        e(i + 1, s)) : o(n, {
                                            dismiss: t.dismiss
                                        })
                                })) : o(n, {
                                    value: r
                                })
                        }(0)
                    }
                    )
                },
                getQueueStep: function () {
                    return document.body.getAttribute("data-swal2-queue-step")
                },
                insertQueueStep: function (t, e) {
                    return e && e < Ot.length ? Ot.splice(e, 0, t) : Ot.push(t)
                },
                deleteQueueStep: function (t) {
                    void 0 !== Ot[t] && Ot.splice(t, 1)
                },
                showLoading: Dt,
                enableLoading: Dt,
                getTimerLeft: function () {
                    return At.timeout && At.timeout.getTimerLeft()
                },
                stopTimer: Pt,
                resumeTimer: Mt,
                toggleTimer: function () {
                    var t = At.timeout;
                    return t && (t.running ? Pt() : Mt())
                },
                increaseTimer: function (t) {
                    if (At.timeout) {
                        var e = At.timeout.increase(t);
                        return tt(e, !0),
                            e
                    }
                },
                isTimerRunning: function () {
                    return At.timeout && At.timeout.isRunning()
                }
            });
        function Wt() {
            var t = ft.innerParams.get(this);
            if (t) {
                var e = ft.domCache.get(this);
                t.showConfirmButton || (Z(e.confirmButton),
                    t.showCancelButton || Z(e.actions)),
                    ot([e.popup, e.actions], R.loading),
                    e.popup.removeAttribute("aria-busy"),
                    e.popup.removeAttribute("data-loading"),
                    e.confirmButton.disabled = !1,
                    e.cancelButton.disabled = !1
            }
        }
        function Ft() {
            null === j.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (j.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
                document.body.style.paddingRight = "".concat(j.previousBodyPadding + function () {
                    var t = document.createElement("div");
                    t.className = R["scrollbar-measure"],
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                }(), "px"))
        }
        function Rt() {
            return !!window.MSInputMethodContext && !!document.documentMode
        }
        function Yt() {
            var t = v()
                , e = b();
            t.style.removeProperty("align-items"),
                e.offsetTop < 0 && (t.style.alignItems = "flex-start")
        }
        function Vt() {
            var i, s = v();
            s.ontouchstart = function (t) {
                var e;
                i = t.target === s || !((e = s).scrollHeight > e.clientHeight) && "INPUT" !== t.target.tagName
            }
                ,
                s.ontouchmove = function (t) {
                    i && (t.preventDefault(),
                        t.stopPropagation())
                }
        }
        var jt = {
            swalPromiseResolve: new WeakMap
        };
        function qt(t, e, i, s) {
            i ? Ut(t, s) : (new Promise(function (t) {
                var e = window.scrollX
                    , i = window.scrollY;
                At.restoreFocusTimeout = setTimeout(function () {
                    At.previousActiveElement && At.previousActiveElement.focus ? (At.previousActiveElement.focus(),
                        At.previousActiveElement = null) : document.body && document.body.focus(),
                        t()
                }, 100),
                    void 0 !== e && void 0 !== i && window.scrollTo(e, i)
            }
            ).then(function () {
                return Ut(t, s)
            }),
                At.keydownTarget.removeEventListener("keydown", At.keydownHandler, {
                    capture: At.keydownListenerCapture
                }),
                At.keydownHandlerAdded = !1),
                e.parentNode && e.parentNode.removeChild(e),
                A() && (null !== j.previousBodyPadding && (document.body.style.paddingRight = "".concat(j.previousBodyPadding, "px"),
                    j.previousBodyPadding = null),
                    function () {
                        if (H(document.body, R.iosfix)) {
                            var t = parseInt(document.body.style.top, 10);
                            ot(document.body, R.iosfix),
                                document.body.style.top = "",
                                document.body.scrollTop = -1 * t
                        }
                    }(),
                    "undefined" != typeof window && Rt() && window.removeEventListener("resize", Yt),
                    d(document.body.children).forEach(function (t) {
                        t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")),
                            t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
                    })),
                ot([document.documentElement, document.body], [R.shown, R["height-auto"], R["no-backdrop"], R["toast-shown"], R["toast-column"]])
        }
        function Xt(t) {
            var e, i, s, n, a, o, r, l = b();
            if (l) {
                var h = ft.innerParams.get(this);
                if (h && !H(l, h.hideClass.popup)) {
                    var c = jt.swalPromiseResolve.get(this);
                    ot(l, h.showClass.popup),
                        at(l, h.hideClass.popup);
                    var d = v();
                    ot(d, h.showClass.backdrop),
                        at(d, h.hideClass.backdrop),
                        e = this,
                        i = l,
                        s = h,
                        n = v(),
                        a = dt && J(i),
                        o = s.onClose,
                        r = s.onAfterClose,
                        null !== o && "function" == typeof o && o(i),
                        a ? function (t, e, i, s) {
                            At.swalCloseEventFinishedCallback = qt.bind(null, t, i, V(), s),
                                e.addEventListener(dt, function (t) {
                                    t.target === e && (At.swalCloseEventFinishedCallback(),
                                        delete At.swalCloseEventFinishedCallback)
                                })
                        }(e, i, n, r) : qt(e, n, V(), r),
                        c(t || {})
                }
            }
        }
        function Gt(t) {
            for (var e in t)
                t[e] = new WeakMap
        }
        var Ut = function (t, e) {
            setTimeout(function () {
                null !== e && "function" == typeof e && e(),
                    b() || (delete t.params,
                        delete At.keydownHandler,
                        delete At.keydownTarget,
                        Gt(ft),
                        Gt(jt))
            })
        };
        function Kt(t, e, i) {
            var s = ft.domCache.get(t);
            e.forEach(function (t) {
                s[t].disabled = i
            })
        }
        function Zt(t, e) {
            if (!t)
                return !1;
            if ("radio" === t.type)
                for (var i = t.parentNode.parentNode.querySelectorAll("input"), s = 0; s < i.length; s++)
                    i[s].disabled = e;
            else
                t.disabled = e
        }
        var Qt = (t(te, [{
            key: "start",
            value: function () {
                return this.running || (this.running = !0,
                    this.started = new Date,
                    this.id = setTimeout(this.callback, this.remaining)),
                    this.remaining
            }
        }, {
            key: "stop",
            value: function () {
                return this.running && (this.running = !1,
                    clearTimeout(this.id),
                    this.remaining -= new Date - this.started),
                    this.remaining
            }
        }, {
            key: "increase",
            value: function (t) {
                var e = this.running;
                return e && this.stop(),
                    this.remaining += t,
                    e && this.start(),
                    this.remaining
            }
        }, {
            key: "getTimerLeft",
            value: function () {
                return this.running && (this.stop(),
                    this.start()),
                    this.remaining
            }
        }, {
            key: "isRunning",
            value: function () {
                return this.running
            }
        }]),
            te)
            , Jt = {
                email: function (t, e) {
                    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
                },
                url: function (t, e) {
                    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
                }
            };
        function te(t, e) {
            s(this, te),
                this.callback = t,
                this.remaining = e,
                this.running = !1,
                this.start()
        }
        function ee(t) {
            var e, i;
            (i = t).inputValidator || Object.keys(Jt).forEach(function (t) {
                i.input === t && (i.inputValidator = Jt[t])
            }),
                t.showLoaderOnConfirm && !t.preConfirm && B("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
                t.animation = $(t.animation),
                (e = t).target && ("string" != typeof e.target || document.querySelector(e.target)) && ("string" == typeof e.target || e.target.appendChild) || (B('Target parameter is not valid, defaulting to "body"'),
                    e.target = "body"),
                "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")),
                function (t) {
                    if ((m = v()) && (m.parentNode.removeChild(m),
                        ot([document.documentElement, document.body], [R["no-backdrop"], R["toast-shown"], R["has-column"]])),
                        et())
                        g("SweetAlert2 requires document to initialize");
                    else {
                        var e = document.createElement("div");
                        e.className = R.container,
                            e.innerHTML = ht;
                        var i = "string" == typeof (f = t.target) ? document.querySelector(f) : f;
                        i.appendChild(e),
                            u = t,
                            (p = b()).setAttribute("role", u.toast ? "alert" : "dialog"),
                            p.setAttribute("aria-live", u.toast ? "polite" : "assertive"),
                            u.toast || p.setAttribute("aria-modal", "true"),
                            d = i,
                            "rtl" === window.getComputedStyle(d).direction && at(v(), R.rtl),
                            s = x(),
                            n = rt(s, R.input),
                            a = rt(s, R.file),
                            o = s.querySelector(".".concat(R.range, " input")),
                            r = s.querySelector(".".concat(R.range, " output")),
                            l = rt(s, R.select),
                            h = s.querySelector(".".concat(R.checkbox, " input")),
                            c = rt(s, R.textarea),
                            n.oninput = it,
                            a.onchange = it,
                            l.onchange = it,
                            h.onchange = it,
                            c.oninput = it,
                            o.oninput = function (t) {
                                it(t),
                                    r.value = o.value
                            }
                            ,
                            o.onchange = function (t) {
                                it(t),
                                    o.nextSibling.value = o.value
                            }
                    }
                    var s, n, a, o, r, l, h, c, d, u, p, f, m
                }(t)
        }
        function ie(t, e) {
            t.removeEventListener(dt, ie),
                e.style.overflowY = "auto"
        }
        function se(t) {
            var e = v()
                , i = b();
            "function" == typeof t.onBeforeOpen && t.onBeforeOpen(i),
                function (t, e, i) {
                    at(t, i.showClass.backdrop),
                        K(e),
                        at(e, i.showClass.popup),
                        at([document.documentElement, document.body], R.shown),
                        i.heightAuto && i.backdrop && !i.toast && at([document.documentElement, document.body], R["height-auto"])
                }(e, i, t),
                function (t, e) {
                    dt && J(e) ? (t.style.overflowY = "hidden",
                        e.addEventListener(dt, ie.bind(null, e, t))) : t.style.overflowY = "auto"
                }(e, i),
                A() && function (t, e) {
                    !function () {
                        if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !H(document.body, R.iosfix)) {
                            var t = document.body.scrollTop;
                            document.body.style.top = "".concat(-1 * t, "px"),
                                at(document.body, R.iosfix),
                                Vt()
                        }
                    }(),
                        "undefined" != typeof window && Rt() && (Yt(),
                            window.addEventListener("resize", Yt)),
                        d(document.body.children).forEach(function (t) {
                            t === v() || function (t, e) {
                                if ("function" == typeof t.contains)
                                    return t.contains(e)
                            }(t, v()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")),
                                t.setAttribute("aria-hidden", "true"))
                        }),
                        e && Ft(),
                        setTimeout(function () {
                            t.scrollTop = 0
                        })
                }(e, t.scrollbarPadding),
                V() || At.previousActiveElement || (At.previousActiveElement = document.activeElement),
                "function" == typeof t.onOpen && setTimeout(function () {
                    return t.onOpen(i)
                })
        }
        function ne(t, e) {
            "select" === e.input || "radio" === e.input ? function (e, i) {
                function s(t) {
                    return fe[i.input](n, me(t), i)
                }
                var n = x();
                p(i.inputOptions) ? (Dt(),
                    i.inputOptions.then(function (t) {
                        e.hideLoading(),
                            s(t)
                    })) : "object" === a(i.inputOptions) ? s(i.inputOptions) : g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(a(i.inputOptions)))
            }(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && p(e.inputValue) && function (e, i) {
                var s = e.getInput();
                Z(s),
                    i.inputValue.then(function (t) {
                        s.value = "number" === i.input ? parseFloat(t) || 0 : "".concat(t),
                            K(s),
                            s.focus(),
                            e.hideLoading()
                    }).catch(function (t) {
                        g("Error in inputValue promise: ".concat(t)),
                            s.value = "",
                            K(s),
                            s.focus(),
                            e.hideLoading()
                    })
            }(t, e)
        }
        function ae(t, e) {
            t.disableButtons(),
                e.input ? function (e, i) {
                    var s = function (t, e) {
                        var i = t.getInput();
                        if (!i)
                            return null;
                        switch (e.input) {
                            case "checkbox":
                                return ce(i);
                            case "radio":
                                return de(i);
                            case "file":
                                return ue(i);
                            default:
                                return e.inputAutoTrim ? i.value.trim() : i.value
                        }
                    }(e, i);
                    i.inputValidator ? (e.disableInput(),
                        Promise.resolve().then(function () {
                            return i.inputValidator(s, i.validationMessage)
                        }).then(function (t) {
                            e.enableButtons(),
                                e.enableInput(),
                                t ? e.showValidationMessage(t) : ge(e, i, s)
                        })) : e.getInput().checkValidity() ? ge(e, i, s) : (e.enableButtons(),
                            e.showValidationMessage(i.validationMessage))
                }(t, e) : ge(t, e, !0)
        }
        function oe(t, e) {
            t.closePopup({
                value: e
            })
        }
        function re(e, t, i, s) {
            t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
                capture: t.keydownListenerCapture
            }),
                t.keydownHandlerAdded = !1),
                i.toast || (t.keydownHandler = function (t) {
                    return function (t, e, i, s) {
                        i.stopKeydownPropagation && e.stopPropagation(),
                            "Enter" === e.key ? we(t, e, i) : "Tab" === e.key ? ye(e, i) : -1 !== ve.indexOf(e.key) ? _e() : -1 !== be.indexOf(e.key) && xe(e, i, s)
                    }(e, t, i, s)
                }
                    ,
                    t.keydownTarget = i.keydownListenerCapture ? window : b(),
                    t.keydownListenerCapture = i.keydownListenerCapture,
                    t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                        capture: t.keydownListenerCapture
                    }),
                    t.keydownHandlerAdded = !0)
        }
        function le(t, e, i) {
            for (var s = O(), n = 0; n < s.length; n++)
                return (e += i) === s.length ? e = 0 : -1 === e && (e = s.length - 1),
                    s[e].focus();
            b().focus()
        }
        function he(t, e, i) {
            e.toast ? function (t, e, i) {
                t.popup.onclick = function () {
                    e.showConfirmButton || e.showCancelButton || e.showCloseButton || e.input || i(F.close)
                }
            }(t, e, i) : (function (e) {
                e.popup.onmousedown = function () {
                    e.container.onmouseup = function (t) {
                        e.container.onmouseup = void 0,
                            t.target === e.container && (ke = !0)
                    }
                }
            }(t),
                function (e) {
                    e.container.onmousedown = function () {
                        e.popup.onmouseup = function (t) {
                            e.popup.onmouseup = void 0,
                                t.target !== e.popup && !e.popup.contains(t.target) || (ke = !0)
                        }
                    }
                }(t),
                function (e, i, s) {
                    e.container.onclick = function (t) {
                        ke ? ke = !1 : t.target === e.container && $(i.allowOutsideClick) && s(F.backdrop)
                    }
                }(t, e, i))
        }
        function ce(t) {
            return t.checked ? 1 : 0
        }
        function de(t) {
            return t.checked ? t.value : null
        }
        function ue(t) {
            return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
        }
        var pe, fe = {
            select: function (t, e, n) {
                var a = rt(t, R.select);
                e.forEach(function (t) {
                    var e = t[0]
                        , i = t[1]
                        , s = document.createElement("option");
                    s.value = e,
                        s.innerHTML = i,
                        n.inputValue.toString() === e.toString() && (s.selected = !0),
                        a.appendChild(s)
                }),
                    a.focus()
            },
            radio: function (t, e, o) {
                var r = rt(t, R.radio);
                e.forEach(function (t) {
                    var e = t[0]
                        , i = t[1]
                        , s = document.createElement("input")
                        , n = document.createElement("label");
                    s.type = "radio",
                        s.name = R.radio,
                        s.value = e,
                        o.inputValue.toString() === e.toString() && (s.checked = !0);
                    var a = document.createElement("span");
                    a.innerHTML = i,
                        a.className = R.label,
                        n.appendChild(s),
                        n.appendChild(a),
                        r.appendChild(n)
                });
                var i = r.querySelectorAll("input");
                i.length && i[0].focus()
            }
        }, me = function (e) {
            var i = [];
            return "undefined" != typeof Map && e instanceof Map ? e.forEach(function (t, e) {
                i.push([e, t])
            }) : Object.keys(e).forEach(function (t) {
                i.push([t, e[t]])
            }),
                i
        }, ge = function (e, t, i) {
            t.showLoaderOnConfirm && Dt(),
                t.preConfirm ? (e.resetValidationMessage(),
                    Promise.resolve().then(function () {
                        return t.preConfirm(i, t.validationMessage)
                    }).then(function (t) {
                        lt(T()) || !1 === t ? e.hideLoading() : oe(e, void 0 === t ? i : t)
                    })) : oe(e, i)
        }, ve = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"], be = ["Escape", "Esc"], we = function (t, e, i) {
            if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                if (-1 !== ["textarea", "file"].indexOf(i.input))
                    return;
                kt(),
                    e.preventDefault()
            }
        }, ye = function (t) {
            for (var e = t.target, i = O(), s = -1, n = 0; n < i.length; n++)
                if (e === i[n]) {
                    s = n;
                    break
                }
            t.shiftKey ? le(0, s, -1) : le(0, s, 1),
                t.stopPropagation(),
                t.preventDefault()
        }, _e = function () {
            var t = S()
                , e = E();
            document.activeElement === t && lt(e) ? e.focus() : document.activeElement === e && lt(t) && t.focus()
        }, xe = function (t, e, i) {
            $(e.allowEscapeKey) && (t.preventDefault(),
                i(F.esc))
        }, ke = !1, Ce = function () {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        }, Te = Object.freeze({
            hideLoading: Wt,
            disableLoading: Wt,
            getInput: function (t) {
                var e = ft.innerParams.get(t || this)
                    , i = ft.domCache.get(t || this);
                return i ? q(i.content, e.input) : null
            },
            close: Xt,
            closePopup: Xt,
            closeModal: Xt,
            closeToast: Xt,
            enableButtons: function () {
                Kt(this, ["confirmButton", "cancelButton"], !1)
            },
            disableButtons: function () {
                Kt(this, ["confirmButton", "cancelButton"], !0)
            },
            enableInput: function () {
                return Zt(this.getInput(), !1)
            },
            disableInput: function () {
                return Zt(this.getInput(), !0)
            },
            showValidationMessage: function (t) {
                var e = ft.domCache.get(this);
                e.validationMessage.innerHTML = t;
                var i = window.getComputedStyle(e.popup);
                e.validationMessage.style.marginLeft = "-".concat(i.getPropertyValue("padding-left")),
                    e.validationMessage.style.marginRight = "-".concat(i.getPropertyValue("padding-right")),
                    K(e.validationMessage);
                var s = this.getInput();
                s && (s.setAttribute("aria-invalid", !0),
                    s.setAttribute("aria-describedBy", R["validation-message"]),
                    X(s),
                    at(s, R.inputerror))
            },
            resetValidationMessage: function () {
                var t = ft.domCache.get(this);
                t.validationMessage && Z(t.validationMessage);
                var e = this.getInput();
                e && (e.removeAttribute("aria-invalid"),
                    e.removeAttribute("aria-describedBy"),
                    ot(e, R.inputerror))
            },
            getProgressSteps: function () {
                return ft.domCache.get(this).progressSteps
            },
            _main: function (t) {
                !function (t) {
                    for (var e in t)
                        It(r = e) || B('Unknown parameter "'.concat(r, '"')),
                            t.toast && (o = e,
                                -1 !== Nt.indexOf(o) && B('The parameter "'.concat(o, '" is incompatible with toasts'))),
                            zt(a = e) && (s = zt(i = a),
                                n = void 0,
                                n = '"'.concat(i, '" is deprecated and will be removed in the next major release. Please use "').concat(s, '" instead.'),
                                -1 === W.indexOf(n) && (W.push(n),
                                    B(n)));
                    var i, s, n, a, o, r
                }(t),
                    b() && At.swalCloseEventFinishedCallback && (At.swalCloseEventFinishedCallback(),
                        delete At.swalCloseEventFinishedCallback),
                    At.deferDisposalTimer && (clearTimeout(At.deferDisposalTimer),
                        delete At.deferDisposalTimer);
                var e, i, s, n, a = (i = u({}, Ht.showClass, (e = t).showClass),
                    s = u({}, Ht.hideClass, e.hideClass),
                    (n = u({}, Ht, e)).showClass = i,
                    n.hideClass = s,
                    !1 === e.animation && (n.showClass = {
                        popup: "",
                        backdrop: "swal2-backdrop-show swal2-noanimation"
                    },
                        n.hideClass = {}),
                    n);
                ee(a),
                    Object.freeze(a),
                    At.timeout && (At.timeout.stop(),
                        delete At.timeout),
                    clearTimeout(At.restoreFocusTimeout);
                var o, r, l, h, c, d = (o = this,
                    r = {
                        popup: b(),
                        container: v(),
                        content: x(),
                        actions: D(),
                        confirmButton: S(),
                        cancelButton: E(),
                        closeButton: z(),
                        validationMessage: T(),
                        progressSteps: C()
                    },
                    ft.domCache.set(o, r),
                    r);
                return xt(this, a),
                    ft.innerParams.set(this, a),
                    l = this,
                    h = d,
                    c = a,
                    new Promise(function (t) {
                        function e(t) {
                            l.closePopup({
                                dismiss: t
                            })
                        }
                        jt.swalPromiseResolve.set(l, t),
                            function (t, e, i) {
                                var s = I();
                                Z(s),
                                    e.timer && (t.timeout = new Qt(function () {
                                        i("timer"),
                                            delete t.timeout
                                    }
                                        , e.timer),
                                        e.timerProgressBar && (K(s),
                                            setTimeout(function () {
                                                tt(e.timer)
                                            })))
                            }(At, c, e),
                            h.confirmButton.onclick = function () {
                                return ae(l, c)
                            }
                            ,
                            h.cancelButton.onclick = function () {
                                return function (t, e) {
                                    t.disableButtons(),
                                        e(F.cancel)
                                }(l, e)
                            }
                            ,
                            h.closeButton.onclick = function () {
                                return e(F.close)
                            }
                            ,
                            he(h, c, e),
                            re(l, At, c, e),
                            c.toast && (c.input || c.footer || c.showCloseButton) ? at(document.body, R["toast-column"]) : ot(document.body, R["toast-column"]),
                            ne(l, c),
                            se(c),
                            function (t, e) {
                                e.toast || ($(e.allowEnterKey) ? e.focusCancel && lt(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && lt(t.confirmButton) ? t.confirmButton.focus() : le(0, -1, 1) : Ce())
                            }(h, c),
                            h.container.scrollTop = 0
                    }
                    )
            },
            update: function (e) {
                var t = b()
                    , i = ft.innerParams.get(this);
                if (!t || H(t, i.hideClass.popup))
                    return B("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                var s = {};
                Object.keys(e).forEach(function (t) {
                    Ee.isUpdatableParameter(t) ? s[t] = e[t] : B('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
                });
                var n = u({}, i, s);
                xt(this, n),
                    ft.innerParams.set(this, n),
                    Object.defineProperties(this, {
                        params: {
                            value: u({}, this.params, e),
                            writable: !1,
                            enumerable: !0
                        }
                    })
            }
        });
        function Se() {
            if ("undefined" != typeof window) {
                "undefined" == typeof Promise && g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),
                    pe = this;
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                var s = Object.freeze(this.constructor.argsToParams(e));
                Object.defineProperties(this, {
                    params: {
                        value: s,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                var n = this._main(this.params);
                ft.promise.set(this, n)
            }
        }
        Se.prototype.then = function (t) {
            return ft.promise.get(this).then(t)
        }
            ,
            Se.prototype.finally = function (t) {
                return ft.promise.get(this).finally(t)
            }
            ,
            u(Se.prototype, Te),
            u(Se, Bt),
            Object.keys(Te).forEach(function (e) {
                Se[e] = function () {
                    var t;
                    if (pe)
                        return (t = pe)[e].apply(t, arguments)
                }
            }),
            Se.DismissReason = F,
            Se.version = "9.4.0";
        var Ee = Se;
        return Ee.default = Ee
    }),
    void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
    "undefined" != typeof document && function (t, e) {
        var i = t.createElement("style");
        if (t.getElementsByTagName("head")[0].appendChild(i),
            i.styleSheet)
            i.styleSheet.disabled || (i.styleSheet.cssText = e);
        else
            try {
                i.innerHTML = e
            } catch (t) {
                i.innerText = e
            }
    }(document, '.swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Swiper = e()
    }(this, function () {
        "use strict";
        var m = "undefined" == typeof document ? {
            body: {},
            addEventListener: function () { },
            removeEventListener: function () { },
            activeElement: {
                blur: function () { },
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () { }
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () { },
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document
            , J = "undefined" == typeof window ? {
                document: m,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function () {
                    return this
                },
                addEventListener: function () { },
                removeEventListener: function () { },
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return ""
                        }
                    }
                },
                Image: function () { },
                Date: function () { },
                screen: {},
                setTimeout: function () { },
                clearTimeout: function () { }
            } : window
            , l = function (t) {
                for (var e = 0; e < t.length; e += 1)
                    this[e] = t[e];
                return this.length = t.length,
                    this
            };
        function I(t, e) {
            var i = []
                , s = 0;
            if (t && !e && t instanceof l)
                return t;
            if (t)
                if ("string" == typeof t) {
                    var n, a, o = t.trim();
                    if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
                        var r = "div";
                        for (0 === o.indexOf("<li") && (r = "ul"),
                            0 === o.indexOf("<tr") && (r = "tbody"),
                            0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (r = "tr"),
                            0 === o.indexOf("<tbody") && (r = "table"),
                            0 === o.indexOf("<option") && (r = "select"),
                            (a = m.createElement(r)).innerHTML = o,
                            s = 0; s < a.childNodes.length; s += 1)
                            i.push(a.childNodes[s])
                    } else
                        for (n = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || m).querySelectorAll(t.trim()) : [m.getElementById(t.trim().split("#")[1])],
                            s = 0; s < n.length; s += 1)
                            n[s] && i.push(n[s])
                } else if (t.nodeType || t === J || t === m)
                    i.push(t);
                else if (0 < t.length && t[0].nodeType)
                    for (s = 0; s < t.length; s += 1)
                        i.push(t[s]);
            return new l(i)
        }
        function a(t) {
            for (var e = [], i = 0; i < t.length; i += 1)
                -1 === e.indexOf(t[i]) && e.push(t[i]);
            return e
        }
        I.fn = l.prototype,
            I.Class = l,
            I.Dom7 = l;
        var e = {
            addClass: function (t) {
                if (void 0 === t)
                    return this;
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1)
                        void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(e[i]);
                return this
            },
            removeClass: function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1)
                        void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(e[i]);
                return this
            },
            hasClass: function (t) {
                return !!this[0] && this[0].classList.contains(t)
            },
            toggleClass: function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1)
                        void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(e[i]);
                return this
            },
            attr: function (t, e) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof t)
                    return this[0] ? this[0].getAttribute(t) : void 0;
                for (var s = 0; s < this.length; s += 1)
                    if (2 === i.length)
                        this[s].setAttribute(t, e);
                    else
                        for (var n in t)
                            this[s][n] = t[n],
                                this[s].setAttribute(n, t[n]);
                return this
            },
            removeAttr: function (t) {
                for (var e = 0; e < this.length; e += 1)
                    this[e].removeAttribute(t);
                return this
            },
            data: function (t, e) {
                var i;
                if (void 0 !== e) {
                    for (var s = 0; s < this.length; s += 1)
                        (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                            i.dom7ElementDataStorage[t] = e;
                    return this
                }
                if (i = this[0])
                    return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[t] : i.getAttribute("data-" + t) || void 0
            },
            transform: function (t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransform = t,
                        i.transform = t
                }
                return this
            },
            transition: function (t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransitionDuration = t,
                        i.transitionDuration = t
                }
                return this
            },
            on: function () {
                for (var t, e = [], i = arguments.length; i--;)
                    e[i] = arguments[i];
                var s = e[0]
                    , a = e[1]
                    , o = e[2]
                    , n = e[3];
                function r(t) {
                    var e = t.target;
                    if (e) {
                        var i = t.target.dom7EventData || [];
                        if (i.indexOf(t) < 0 && i.unshift(t),
                            I(e).is(a))
                            o.apply(e, i);
                        else
                            for (var s = I(e).parents(), n = 0; n < s.length; n += 1)
                                I(s[n]).is(a) && o.apply(s[n], i)
                    }
                }
                function l(t) {
                    var e = t && t.target && t.target.dom7EventData || [];
                    e.indexOf(t) < 0 && e.unshift(t),
                        o.apply(this, e)
                }
                "function" == typeof e[1] && (s = (t = e)[0],
                    o = t[1],
                    n = t[2],
                    a = void 0),
                    n = n || !1;
                for (var h, c = s.split(" "), d = 0; d < this.length; d += 1) {
                    var u = this[d];
                    if (a)
                        for (h = 0; h < c.length; h += 1) {
                            var p = c[h];
                            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                                u.dom7LiveListeners[p] || (u.dom7LiveListeners[p] = []),
                                u.dom7LiveListeners[p].push({
                                    listener: o,
                                    proxyListener: r
                                }),
                                u.addEventListener(p, r, n)
                        }
                    else
                        for (h = 0; h < c.length; h += 1) {
                            var f = c[h];
                            u.dom7Listeners || (u.dom7Listeners = {}),
                                u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                                u.dom7Listeners[f].push({
                                    listener: o,
                                    proxyListener: l
                                }),
                                u.addEventListener(f, l, n)
                        }
                }
                return this
            },
            off: function () {
                for (var t, e = [], i = arguments.length; i--;)
                    e[i] = arguments[i];
                var s = e[0]
                    , n = e[1]
                    , a = e[2]
                    , o = e[3];
                "function" == typeof e[1] && (s = (t = e)[0],
                    a = t[1],
                    o = t[2],
                    n = void 0),
                    o = o || !1;
                for (var r = s.split(" "), l = 0; l < r.length; l += 1)
                    for (var h = r[l], c = 0; c < this.length; c += 1) {
                        var d = this[c]
                            , u = void 0;
                        if (!n && d.dom7Listeners ? u = d.dom7Listeners[h] : n && d.dom7LiveListeners && (u = d.dom7LiveListeners[h]),
                            u && u.length)
                            for (var p = u.length - 1; 0 <= p; p -= 1) {
                                var f = u[p];
                                a && f.listener === a ? (d.removeEventListener(h, f.proxyListener, o),
                                    u.splice(p, 1)) : a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (d.removeEventListener(h, f.proxyListener, o),
                                        u.splice(p, 1)) : a || (d.removeEventListener(h, f.proxyListener, o),
                                            u.splice(p, 1))
                            }
                    }
                return this
            },
            trigger: function () {
                for (var t = [], e = arguments.length; e--;)
                    t[e] = arguments[e];
                for (var i = t[0].split(" "), s = t[1], n = 0; n < i.length; n += 1)
                    for (var a = i[n], o = 0; o < this.length; o += 1) {
                        var r = this[o]
                            , l = void 0;
                        try {
                            l = new J.CustomEvent(a, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            (l = m.createEvent("Event")).initEvent(a, !0, !0),
                                l.detail = s
                        }
                        r.dom7EventData = t.filter(function (t, e) {
                            return 0 < e
                        }),
                            r.dispatchEvent(l),
                            r.dom7EventData = [],
                            delete r.dom7EventData
                    }
                return this
            },
            transitionEnd: function (e) {
                var i, s = ["webkitTransitionEnd", "transitionend"], n = this;
                function a(t) {
                    if (t.target === this)
                        for (e.call(this, t),
                            i = 0; i < s.length; i += 1)
                            n.off(s[i], a)
                }
                if (e)
                    for (i = 0; i < s.length; i += 1)
                        n.on(s[i], a);
                return this
            },
            outerWidth: function (t) {
                if (0 < this.length) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function (t) {
                if (0 < this.length) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function () {
                if (0 < this.length) {
                    var t = this[0]
                        , e = t.getBoundingClientRect()
                        , i = m.body
                        , s = t.clientTop || i.clientTop || 0
                        , n = t.clientLeft || i.clientLeft || 0
                        , a = t === J ? J.scrollY : t.scrollTop
                        , o = t === J ? J.scrollX : t.scrollLeft;
                    return {
                        top: e.top + a - s,
                        left: e.left + o - n
                    }
                }
                return null
            },
            css: function (t, e) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (i = 0; i < this.length; i += 1)
                            for (var s in t)
                                this[i].style[s] = t[s];
                        return this
                    }
                    if (this[0])
                        return J.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 !== arguments.length || "string" != typeof t)
                    return this;
                for (i = 0; i < this.length; i += 1)
                    this[i].style[t] = e;
                return this
            },
            each: function (t) {
                if (!t)
                    return this;
                for (var e = 0; e < this.length; e += 1)
                    if (!1 === t.call(this[e], e, this[e]))
                        return this;
                return this
            },
            html: function (t) {
                if (void 0 === t)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var e = 0; e < this.length; e += 1)
                    this[e].innerHTML = t;
                return this
            },
            text: function (t) {
                if (void 0 === t)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var e = 0; e < this.length; e += 1)
                    this[e].textContent = t;
                return this
            },
            is: function (t) {
                var e, i, s = this[0];
                if (!s || void 0 === t)
                    return !1;
                if ("string" == typeof t) {
                    if (s.matches)
                        return s.matches(t);
                    if (s.webkitMatchesSelector)
                        return s.webkitMatchesSelector(t);
                    if (s.msMatchesSelector)
                        return s.msMatchesSelector(t);
                    for (e = I(t),
                        i = 0; i < e.length; i += 1)
                        if (e[i] === s)
                            return !0;
                    return !1
                }
                if (t === m)
                    return s === m;
                if (t === J)
                    return s === J;
                if (t.nodeType || t instanceof l) {
                    for (e = t.nodeType ? [t] : t,
                        i = 0; i < e.length; i += 1)
                        if (e[i] === s)
                            return !0;
                    return !1
                }
                return !1
            },
            index: function () {
                var t, e = this[0];
                if (e) {
                    for (t = 0; null !== (e = e.previousSibling);)
                        1 === e.nodeType && (t += 1);
                    return t
                }
            },
            eq: function (t) {
                if (void 0 === t)
                    return this;
                var e, i = this.length;
                return new l(i - 1 < t ? [] : t < 0 ? (e = i + t) < 0 ? [] : [this[e]] : [this[t]])
            },
            append: function () {
                for (var t, e = [], i = arguments.length; i--;)
                    e[i] = arguments[i];
                for (var s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (var n = 0; n < this.length; n += 1)
                        if ("string" == typeof t) {
                            var a = m.createElement("div");
                            for (a.innerHTML = t; a.firstChild;)
                                this[n].appendChild(a.firstChild)
                        } else if (t instanceof l)
                            for (var o = 0; o < t.length; o += 1)
                                this[n].appendChild(t[o]);
                        else
                            this[n].appendChild(t)
                }
                return this
            },
            prepend: function (t) {
                var e, i;
                for (e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        var s = m.createElement("div");
                        for (s.innerHTML = t,
                            i = s.childNodes.length - 1; 0 <= i; i -= 1)
                            this[e].insertBefore(s.childNodes[i], this[e].childNodes[0])
                    } else if (t instanceof l)
                        for (i = 0; i < t.length; i += 1)
                            this[e].insertBefore(t[i], this[e].childNodes[0]);
                    else
                        this[e].insertBefore(t, this[e].childNodes[0]);
                return this
            },
            next: function (t) {
                return 0 < this.length ? t ? this[0].nextElementSibling && I(this[0].nextElementSibling).is(t) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
            },
            nextAll: function (t) {
                var e = []
                    , i = this[0];
                if (!i)
                    return new l([]);
                for (; i.nextElementSibling;) {
                    var s = i.nextElementSibling;
                    t ? I(s).is(t) && e.push(s) : e.push(s),
                        i = s
                }
                return new l(e)
            },
            prev: function (t) {
                if (0 < this.length) {
                    var e = this[0];
                    return t ? e.previousElementSibling && I(e.previousElementSibling).is(t) ? new l([e.previousElementSibling]) : new l([]) : e.previousElementSibling ? new l([e.previousElementSibling]) : new l([])
                }
                return new l([])
            },
            prevAll: function (t) {
                var e = []
                    , i = this[0];
                if (!i)
                    return new l([]);
                for (; i.previousElementSibling;) {
                    var s = i.previousElementSibling;
                    t ? I(s).is(t) && e.push(s) : e.push(s),
                        i = s
                }
                return new l(e)
            },
            parent: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode && (t ? I(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
                return I(a(e))
            },
            parents: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].parentNode; s;)
                        t ? I(s).is(t) && e.push(s) : e.push(s),
                            s = s.parentNode;
                return I(a(e))
            },
            closest: function (t) {
                var e = this;
                return void 0 === t ? new l([]) : (e.is(t) || (e = e.parents(t).eq(0)),
                    e)
            },
            find: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].querySelectorAll(t), n = 0; n < s.length; n += 1)
                        e.push(s[n]);
                return new l(e)
            },
            children: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].childNodes, n = 0; n < s.length; n += 1)
                        t ? 1 === s[n].nodeType && I(s[n]).is(t) && e.push(s[n]) : 1 === s[n].nodeType && e.push(s[n]);
                return new l(a(e))
            },
            remove: function () {
                for (var t = 0; t < this.length; t += 1)
                    this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                return this
            },
            add: function () {
                for (var t = [], e = arguments.length; e--;)
                    t[e] = arguments[e];
                var i, s;
                for (i = 0; i < t.length; i += 1) {
                    var n = I(t[i]);
                    for (s = 0; s < n.length; s += 1)
                        this[this.length] = n[s],
                            this.length += 1
                }
                return this
            },
            styles: function () {
                return this[0] ? J.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(e).forEach(function (t) {
            I.fn[t] = e[t]
        });
        function t(t) {
            void 0 === t && (t = {});
            var e = this;
            e.params = t,
                e.eventsListeners = {},
                e.params && e.params.on && Object.keys(e.params.on).forEach(function (t) {
                    e.on(t, e.params.on[t])
                })
        }
        var i, s, n, o, tt = {
            deleteProps: function (t) {
                var e = t;
                Object.keys(e).forEach(function (t) {
                    try {
                        e[t] = null
                    } catch (t) { }
                    try {
                        delete e[t]
                    } catch (t) { }
                })
            },
            nextTick: function (t, e) {
                return void 0 === e && (e = 0),
                    setTimeout(t, e)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (t, e) {
                var i, s, n;
                void 0 === e && (e = "x");
                var a = J.getComputedStyle(t, null);
                return J.WebKitCSSMatrix ? (6 < (s = a.transform || a.webkitTransform).split(",").length && (s = s.split(", ").map(function (t) {
                    return t.replace(",", ".")
                }).join(", ")),
                    n = new J.WebKitCSSMatrix("none" === s ? "" : s)) : i = (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                    "x" === e && (s = J.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                    "y" === e && (s = J.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                    s || 0
            },
            parseUrlQuery: function (t) {
                var e, i, s, n, a = {}, o = t || J.location.href;
                if ("string" == typeof o && o.length)
                    for (n = (i = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function (t) {
                        return "" !== t
                    })).length,
                        e = 0; e < n; e += 1)
                        s = i[e].replace(/#\S+/g, "").split("="),
                            a[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                return a
            },
            isObject: function (t) {
                return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
            },
            extend: function () {
                for (var t = [], e = arguments.length; e--;)
                    t[e] = arguments[e];
                for (var i = Object(t[0]), s = 1; s < t.length; s += 1) {
                    var n = t[s];
                    if (null != n)
                        for (var a = Object.keys(Object(n)), o = 0, r = a.length; o < r; o += 1) {
                            var l = a[o]
                                , h = Object.getOwnPropertyDescriptor(n, l);
                            void 0 !== h && h.enumerable && (tt.isObject(i[l]) && tt.isObject(n[l]) ? tt.extend(i[l], n[l]) : !tt.isObject(i[l]) && tt.isObject(n[l]) ? (i[l] = {},
                                tt.extend(i[l], n[l])) : i[l] = n[l])
                        }
                }
                return i
            }
        }, et = (n = m.createElement("div"),
        {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && m instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: (s = n.style,
                "transition" in s || "webkitTransition" in s || "MozTransition" in s),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (i = n.style,
                "webkitPerspective" in i || "MozPerspective" in i || "OPerspective" in i || "MsPerspective" in i || "perspective" in i),
            flexbox: function () {
                for (var t = n.style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i += 1)
                    if (e[i] in t)
                        return !0;
                return !1
            }(),
            observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
            passiveListener: function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, e)
                } catch (t) { }
                return t
            }(),
            gestures: "ongesturestart" in J
        }), z = {
            isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
            isEdge: !!J.navigator.userAgent.match(/Edge/g),
            isSafari: (o = J.navigator.userAgent.toLowerCase(),
                0 <= o.indexOf("safari") && o.indexOf("chrome") < 0 && o.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
        }, r = {
            components: {
                configurable: !0
            }
        };
        t.prototype.on = function (t, e, i) {
            var s = this;
            if ("function" != typeof e)
                return s;
            var n = i ? "unshift" : "push";
            return t.split(" ").forEach(function (t) {
                s.eventsListeners[t] || (s.eventsListeners[t] = []),
                    s.eventsListeners[t][n](e)
            }),
                s
        }
            ,
            t.prototype.once = function (i, s, t) {
                var n = this;
                if ("function" != typeof s)
                    return n;
                function a() {
                    for (var t = [], e = arguments.length; e--;)
                        t[e] = arguments[e];
                    s.apply(n, t),
                        n.off(i, a),
                        a.f7proxy && delete a.f7proxy
                }
                return a.f7proxy = s,
                    n.on(i, a, t)
            }
            ,
            t.prototype.off = function (t, s) {
                var n = this;
                return n.eventsListeners && t.split(" ").forEach(function (i) {
                    void 0 === s ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].length && n.eventsListeners[i].forEach(function (t, e) {
                        (t === s || t.f7proxy && t.f7proxy === s) && n.eventsListeners[i].splice(e, 1)
                    })
                }),
                    n
            }
            ,
            t.prototype.emit = function () {
                for (var t = [], e = arguments.length; e--;)
                    t[e] = arguments[e];
                var i, s, n, a = this;
                return a.eventsListeners && (n = "string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0],
                    s = t.slice(1, t.length),
                    a) : (i = t[0].events,
                        s = t[0].data,
                        t[0].context || a),
                    (Array.isArray(i) ? i : i.split(" ")).forEach(function (t) {
                        if (a.eventsListeners && a.eventsListeners[t]) {
                            var e = [];
                            a.eventsListeners[t].forEach(function (t) {
                                e.push(t)
                            }),
                                e.forEach(function (t) {
                                    t.apply(n, s)
                                })
                        }
                    })),
                    a
            }
            ,
            t.prototype.useModulesParams = function (i) {
                var s = this;
                s.modules && Object.keys(s.modules).forEach(function (t) {
                    var e = s.modules[t];
                    e.params && tt.extend(i, e.params)
                })
            }
            ,
            t.prototype.useModules = function (s) {
                void 0 === s && (s = {});
                var n = this;
                n.modules && Object.keys(n.modules).forEach(function (t) {
                    var i = n.modules[t]
                        , e = s[t] || {};
                    i.instance && Object.keys(i.instance).forEach(function (t) {
                        var e = i.instance[t];
                        n[t] = "function" == typeof e ? e.bind(n) : e
                    }),
                        i.on && n.on && Object.keys(i.on).forEach(function (t) {
                            n.on(t, i.on[t])
                        }),
                        i.create && i.create.bind(n)(e)
                })
            }
            ,
            r.components.set = function (t) {
                this.use && this.use(t)
            }
            ,
            t.installModule = function (e) {
                for (var t = [], i = arguments.length - 1; 0 < i--;)
                    t[i] = arguments[i + 1];
                var s = this;
                s.prototype.modules || (s.prototype.modules = {});
                var n = e.name || Object.keys(s.prototype.modules).length + "_" + tt.now();
                return (s.prototype.modules[n] = e).proto && Object.keys(e.proto).forEach(function (t) {
                    s.prototype[t] = e.proto[t]
                }),
                    e.static && Object.keys(e.static).forEach(function (t) {
                        s[t] = e.static[t]
                    }),
                    e.install && e.install.apply(s, t),
                    s
            }
            ,
            t.use = function (t) {
                for (var e = [], i = arguments.length - 1; 0 < i--;)
                    e[i] = arguments[i + 1];
                var s = this;
                return Array.isArray(t) ? (t.forEach(function (t) {
                    return s.installModule(t)
                }),
                    s) : s.installModule.apply(s, [t].concat(e))
            }
            ,
            Object.defineProperties(t, r);
        var h = {
            updateSize: function () {
                var t, e, i = this.$el;
                t = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
                    e = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
                    0 === t && this.isHorizontal() || 0 === e && this.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
                        e = e - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
                        tt.extend(this, {
                            width: t,
                            height: e,
                            size: this.isHorizontal() ? t : e
                        }))
            },
            updateSlides: function () {
                var t = this
                    , e = t.params
                    , i = t.$wrapperEl
                    , s = t.size
                    , n = t.rtlTranslate
                    , a = t.wrongRTL
                    , o = t.virtual && e.virtual.enabled
                    , r = o ? t.virtual.slides.length : t.slides.length
                    , l = i.children("." + t.params.slideClass)
                    , h = o ? t.virtual.slides.length : l.length
                    , c = []
                    , d = []
                    , u = []
                    , p = e.slidesOffsetBefore;
                "function" == typeof p && (p = e.slidesOffsetBefore.call(t));
                var f = e.slidesOffsetAfter;
                "function" == typeof f && (f = e.slidesOffsetAfter.call(t));
                var m = t.snapGrid.length
                    , g = t.snapGrid.length
                    , v = e.spaceBetween
                    , b = -p
                    , w = 0
                    , y = 0;
                if (void 0 !== s) {
                    var _, x;
                    "string" == typeof v && 0 <= v.indexOf("%") && (v = parseFloat(v.replace("%", "")) / 100 * s),
                        t.virtualSize = -v,
                        n ? l.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : l.css({
                            marginRight: "",
                            marginBottom: ""
                        }),
                        1 < e.slidesPerColumn && (_ = Math.floor(h / e.slidesPerColumn) === h / t.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn,
                            "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (_ = Math.max(_, e.slidesPerView * e.slidesPerColumn)));
                    for (var k, C = e.slidesPerColumn, T = _ / C, S = Math.floor(h / e.slidesPerColumn), E = 0; E < h; E += 1) {
                        x = 0;
                        var D = l.eq(E);
                        if (1 < e.slidesPerColumn) {
                            var P = void 0
                                , M = void 0
                                , I = void 0;
                            "column" === e.slidesPerColumnFill ? (I = E - (M = Math.floor(E / C)) * C,
                                (S < M || M === S && I === C - 1) && C <= (I += 1) && (I = 0,
                                    M += 1),
                                P = M + I * _ / C,
                                D.css({
                                    "-webkit-box-ordinal-group": P,
                                    "-moz-box-ordinal-group": P,
                                    "-ms-flex-order": P,
                                    "-webkit-order": P,
                                    order: P
                                })) : M = E - (I = Math.floor(E / T)) * T,
                                D.css("margin-" + (t.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", M).attr("data-swiper-row", I)
                        }
                        if ("none" !== D.css("display")) {
                            if ("auto" === e.slidesPerView) {
                                var z = J.getComputedStyle(D[0], null)
                                    , O = D[0].style.transform
                                    , A = D[0].style.webkitTransform;
                                if (O && (D[0].style.transform = "none"),
                                    A && (D[0].style.webkitTransform = "none"),
                                    e.roundLengths)
                                    x = t.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                                else if (t.isHorizontal()) {
                                    var H = parseFloat(z.getPropertyValue("width"))
                                        , L = parseFloat(z.getPropertyValue("padding-left"))
                                        , $ = parseFloat(z.getPropertyValue("padding-right"))
                                        , N = parseFloat(z.getPropertyValue("margin-left"))
                                        , B = parseFloat(z.getPropertyValue("margin-right"))
                                        , W = z.getPropertyValue("box-sizing");
                                    x = W && "border-box" === W ? H + N + B : H + L + $ + N + B
                                } else {
                                    var F = parseFloat(z.getPropertyValue("height"))
                                        , R = parseFloat(z.getPropertyValue("padding-top"))
                                        , Y = parseFloat(z.getPropertyValue("padding-bottom"))
                                        , V = parseFloat(z.getPropertyValue("margin-top"))
                                        , j = parseFloat(z.getPropertyValue("margin-bottom"))
                                        , q = z.getPropertyValue("box-sizing");
                                    x = q && "border-box" === q ? F + V + j : F + R + Y + V + j
                                }
                                O && (D[0].style.transform = O),
                                    A && (D[0].style.webkitTransform = A),
                                    e.roundLengths && (x = Math.floor(x))
                            } else
                                x = (s - (e.slidesPerView - 1) * v) / e.slidesPerView,
                                    e.roundLengths && (x = Math.floor(x)),
                                    l[E] && (t.isHorizontal() ? l[E].style.width = x + "px" : l[E].style.height = x + "px");
                            l[E] && (l[E].swiperSlideSize = x),
                                u.push(x),
                                e.centeredSlides ? (b = b + x / 2 + w / 2 + v,
                                    0 === w && 0 !== E && (b = b - s / 2 - v),
                                    0 === E && (b = b - s / 2 - v),
                                    Math.abs(b) < .001 && (b = 0),
                                    e.roundLengths && (b = Math.floor(b)),
                                    y % e.slidesPerGroup == 0 && c.push(b),
                                    d.push(b)) : (e.roundLengths && (b = Math.floor(b)),
                                        y % e.slidesPerGroup == 0 && c.push(b),
                                        d.push(b),
                                        b = b + x + v),
                                t.virtualSize += x + v,
                                w = x,
                                y += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, s) + f,
                        n && a && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                            width: t.virtualSize + e.spaceBetween + "px"
                        }),
                        et.flexbox && !e.setWrapperSize || (t.isHorizontal() ? i.css({
                            width: t.virtualSize + e.spaceBetween + "px"
                        }) : i.css({
                            height: t.virtualSize + e.spaceBetween + "px"
                        })),
                        1 < e.slidesPerColumn && (t.virtualSize = (x + e.spaceBetween) * _,
                            t.virtualSize = Math.ceil(t.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                            t.isHorizontal() ? i.css({
                                width: t.virtualSize + e.spaceBetween + "px"
                            }) : i.css({
                                height: t.virtualSize + e.spaceBetween + "px"
                            }),
                            e.centeredSlides)) {
                        k = [];
                        for (var X = 0; X < c.length; X += 1) {
                            var G = c[X];
                            e.roundLengths && (G = Math.floor(G)),
                                c[X] < t.virtualSize + c[0] && k.push(G)
                        }
                        c = k
                    }
                    if (!e.centeredSlides) {
                        k = [];
                        for (var U = 0; U < c.length; U += 1) {
                            var K = c[U];
                            e.roundLengths && (K = Math.floor(K)),
                                c[U] <= t.virtualSize - s && k.push(K)
                        }
                        c = k,
                            1 < Math.floor(t.virtualSize - s) - Math.floor(c[c.length - 1]) && c.push(t.virtualSize - s)
                    }
                    if (0 === c.length && (c = [0]),
                        0 !== e.spaceBetween && (t.isHorizontal() ? n ? l.css({
                            marginLeft: v + "px"
                        }) : l.css({
                            marginRight: v + "px"
                        }) : l.css({
                            marginBottom: v + "px"
                        })),
                        e.centerInsufficientSlides) {
                        var Z = 0;
                        if (u.forEach(function (t) {
                            Z += t + (e.spaceBetween ? e.spaceBetween : 0)
                        }),
                            (Z -= e.spaceBetween) < s) {
                            var Q = (s - Z) / 2;
                            c.forEach(function (t, e) {
                                c[e] = t - Q
                            }),
                                d.forEach(function (t, e) {
                                    d[e] = t + Q
                                })
                        }
                    }
                    tt.extend(t, {
                        slides: l,
                        snapGrid: c,
                        slidesGrid: d,
                        slidesSizesGrid: u
                    }),
                        h !== r && t.emit("slidesLengthChange"),
                        c.length !== m && (t.params.watchOverflow && t.checkOverflow(),
                            t.emit("snapGridLengthChange")),
                        d.length !== g && t.emit("slidesGridLengthChange"),
                        (e.watchSlidesProgress || e.watchSlidesVisibility) && t.updateSlidesOffset()
                }
            },
            updateAutoHeight: function (t) {
                var e, i = this, s = [], n = 0;
                if ("number" == typeof t ? i.setTransition(t) : !0 === t && i.setTransition(i.params.speed),
                    "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    for (e = 0; e < Math.ceil(i.params.slidesPerView); e += 1) {
                        var a = i.activeIndex + e;
                        if (a > i.slides.length)
                            break;
                        s.push(i.slides.eq(a)[0])
                    }
                else
                    s.push(i.slides.eq(i.activeIndex)[0]);
                for (e = 0; e < s.length; e += 1)
                    if (void 0 !== s[e]) {
                        var o = s[e].offsetHeight;
                        n = n < o ? o : n
                    }
                n && i.$wrapperEl.css("height", n + "px")
            },
            updateSlidesOffset: function () {
                for (var t = this.slides, e = 0; e < t.length; e += 1)
                    t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
            },
            updateSlidesProgress: function (t) {
                void 0 === t && (t = this && this.translate || 0);
                var e = this
                    , i = e.params
                    , s = e.slides
                    , n = e.rtlTranslate;
                if (0 !== s.length) {
                    void 0 === s[0].swiperSlideOffset && e.updateSlidesOffset();
                    var a = -t;
                    n && (a = t),
                        s.removeClass(i.slideVisibleClass),
                        e.visibleSlidesIndexes = [],
                        e.visibleSlides = [];
                    for (var o = 0; o < s.length; o += 1) {
                        var r = s[o]
                            , l = (a + (i.centeredSlides ? e.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility) {
                            var h = -(a - r.swiperSlideOffset)
                                , c = h + e.slidesSizesGrid[o];
                            (0 <= h && h < e.size || 0 < c && c <= e.size || h <= 0 && c >= e.size) && (e.visibleSlides.push(r),
                                e.visibleSlidesIndexes.push(o),
                                s.eq(o).addClass(i.slideVisibleClass))
                        }
                        r.progress = n ? -l : l
                    }
                    e.visibleSlides = I(e.visibleSlides)
                }
            },
            updateProgress: function (t) {
                void 0 === t && (t = this && this.translate || 0);
                var e = this
                    , i = e.params
                    , s = e.maxTranslate() - e.minTranslate()
                    , n = e.progress
                    , a = e.isBeginning
                    , o = e.isEnd
                    , r = a
                    , l = o;
                o = 0 == s ? a = !(n = 0) : (a = (n = (t - e.minTranslate()) / s) <= 0,
                    1 <= n),
                    tt.extend(e, {
                        progress: n,
                        isBeginning: a,
                        isEnd: o
                    }),
                    (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesProgress(t),
                    a && !r && e.emit("reachBeginning toEdge"),
                    o && !l && e.emit("reachEnd toEdge"),
                    (r && !a || l && !o) && e.emit("fromEdge"),
                    e.emit("progress", n)
            },
            updateSlidesClasses: function () {
                var t, e = this.slides, i = this.params, s = this.$wrapperEl, n = this.activeIndex, a = this.realIndex, o = this.virtual && i.virtual.enabled;
                e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                    (t = o ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]') : e.eq(n)).addClass(i.slideActiveClass),
                    i.loop && (t.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
                var r = t.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === r.length && (r = e.eq(0)).addClass(i.slideNextClass);
                var l = t.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass),
                    i.loop && (r.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                        l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (t) {
                var e, i = this, s = i.rtlTranslate ? i.translate : -i.translate, n = i.slidesGrid, a = i.snapGrid, o = i.params, r = i.activeIndex, l = i.realIndex, h = i.snapIndex, c = t;
                if (void 0 === c) {
                    for (var d = 0; d < n.length; d += 1)
                        void 0 !== n[d + 1] ? s >= n[d] && s < n[d + 1] - (n[d + 1] - n[d]) / 2 ? c = d : s >= n[d] && s < n[d + 1] && (c = d + 1) : s >= n[d] && (c = d);
                    o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if ((e = 0 <= a.indexOf(s) ? a.indexOf(s) : Math.floor(c / o.slidesPerGroup)) >= a.length && (e = a.length - 1),
                    c !== r) {
                    var u = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    tt.extend(i, {
                        snapIndex: e,
                        realIndex: u,
                        previousIndex: r,
                        activeIndex: c
                    }),
                        i.emit("activeIndexChange"),
                        i.emit("snapIndexChange"),
                        l !== u && i.emit("realIndexChange"),
                        i.emit("slideChange")
                } else
                    e !== h && (i.snapIndex = e,
                        i.emit("snapIndexChange"))
            },
            updateClickedSlide: function (t) {
                var e = this
                    , i = e.params
                    , s = I(t.target).closest("." + i.slideClass)[0]
                    , n = !1;
                if (s)
                    for (var a = 0; a < e.slides.length; a += 1)
                        e.slides[a] === s && (n = !0);
                if (!s || !n)
                    return e.clickedSlide = void 0,
                        void (e.clickedIndex = void 0);
                e.clickedSlide = s,
                    e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(I(s).attr("data-swiper-slide-index"), 10) : e.clickedIndex = I(s).index(),
                    i.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
            }
        }
            , c = {
                getTranslate: function (t) {
                    void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                    var e = this.params
                        , i = this.rtlTranslate
                        , s = this.translate
                        , n = this.$wrapperEl;
                    if (e.virtualTranslate)
                        return i ? -s : s;
                    var a = tt.getTranslate(n[0], t);
                    return i && (a = -a),
                        a || 0
                },
                setTranslate: function (t, e) {
                    var i = this
                        , s = i.rtlTranslate
                        , n = i.params
                        , a = i.$wrapperEl
                        , o = i.progress
                        , r = 0
                        , l = 0;
                    i.isHorizontal() ? r = s ? -t : t : l = t,
                        n.roundLengths && (r = Math.floor(r),
                            l = Math.floor(l)),
                        n.virtualTranslate || (et.transforms3d ? a.transform("translate3d(" + r + "px, " + l + "px, 0px)") : a.transform("translate(" + r + "px, " + l + "px)")),
                        i.previousTranslate = i.translate,
                        i.translate = i.isHorizontal() ? r : l;
                    var h = i.maxTranslate() - i.minTranslate();
                    (0 == h ? 0 : (t - i.minTranslate()) / h) !== o && i.updateProgress(t),
                        i.emit("setTranslate", i.translate, e)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            }
            , d = {
                slideTo: function (t, e, i, s) {
                    void 0 === t && (t = 0),
                        void 0 === e && (e = this.params.speed),
                        void 0 === i && (i = !0);
                    var n = this
                        , a = t;
                    a < 0 && (a = 0);
                    var o = n.params
                        , r = n.snapGrid
                        , l = n.slidesGrid
                        , h = n.previousIndex
                        , c = n.activeIndex
                        , d = n.rtlTranslate;
                    if (n.animating && o.preventInteractionOnTransition)
                        return !1;
                    var u = Math.floor(a / o.slidesPerGroup);
                    u >= r.length && (u = r.length - 1),
                        (c || o.initialSlide || 0) === (h || 0) && i && n.emit("beforeSlideChangeStart");
                    var p, f = -r[u];
                    if (n.updateProgress(f),
                        o.normalizeSlideIndex)
                        for (var m = 0; m < l.length; m += 1)
                            -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (a = m);
                    if (n.initialized && a !== c) {
                        if (!n.allowSlideNext && f < n.translate && f < n.minTranslate())
                            return !1;
                        if (!n.allowSlidePrev && f > n.translate && f > n.maxTranslate() && (c || 0) !== a)
                            return !1
                    }
                    return p = c < a ? "next" : a < c ? "prev" : "reset",
                        d && -f === n.translate || !d && f === n.translate ? (n.updateActiveIndex(a),
                            o.autoHeight && n.updateAutoHeight(),
                            n.updateSlidesClasses(),
                            "slide" !== o.effect && n.setTranslate(f),
                            "reset" != p && (n.transitionStart(i, p),
                                n.transitionEnd(i, p)),
                            !1) : (0 !== e && et.transition ? (n.setTransition(e),
                                n.setTranslate(f),
                                n.updateActiveIndex(a),
                                n.updateSlidesClasses(),
                                n.emit("beforeTransitionStart", e, s),
                                n.transitionStart(i, p),
                                n.animating || (n.animating = !0,
                                    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (t) {
                                        n && !n.destroyed && t.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                                            n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd),
                                            n.onSlideToWrapperTransitionEnd = null,
                                            delete n.onSlideToWrapperTransitionEnd,
                                            n.transitionEnd(i, p))
                                    }
                                    ),
                                    n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                                    n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0),
                                        n.setTranslate(f),
                                        n.updateActiveIndex(a),
                                        n.updateSlidesClasses(),
                                        n.emit("beforeTransitionStart", e, s),
                                        n.transitionStart(i, p),
                                        n.transitionEnd(i, p)),
                                !0)
                },
                slideToLoop: function (t, e, i, s) {
                    void 0 === t && (t = 0),
                        void 0 === e && (e = this.params.speed),
                        void 0 === i && (i = !0);
                    var n = t;
                    return this.params.loop && (n += this.loopedSlides),
                        this.slideTo(n, e, i, s)
                },
                slideNext: function (t, e, i) {
                    void 0 === t && (t = this.params.speed),
                        void 0 === e && (e = !0);
                    var s = this.params
                        , n = this.animating;
                    return s.loop ? !n && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        this.slideTo(this.activeIndex + s.slidesPerGroup, t, e, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, t, e, i)
                },
                slidePrev: function (t, e, i) {
                    void 0 === t && (t = this.params.speed),
                        void 0 === e && (e = !0);
                    var s = this
                        , n = s.params
                        , a = s.animating
                        , o = s.snapGrid
                        , r = s.slidesGrid
                        , l = s.rtlTranslate;
                    if (n.loop) {
                        if (a)
                            return !1;
                        s.loopFix(),
                            s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    function h(t) {
                        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                    }
                    var c, d = h(l ? s.translate : -s.translate), u = o.map(function (t) {
                        return h(t)
                    }), p = (r.map(function (t) {
                        return h(t)
                    }),
                        o[u.indexOf(d)],
                        o[u.indexOf(d) - 1]);
                    return void 0 !== p && (c = r.indexOf(p)) < 0 && (c = s.activeIndex - 1),
                        s.slideTo(c, t, e, i)
                },
                slideReset: function (t, e, i) {
                    return void 0 === t && (t = this.params.speed),
                        void 0 === e && (e = !0),
                        this.slideTo(this.activeIndex, t, e, i)
                },
                slideToClosest: function (t, e, i) {
                    void 0 === t && (t = this.params.speed),
                        void 0 === e && (e = !0);
                    var s = this
                        , n = s.activeIndex
                        , a = Math.floor(n / s.params.slidesPerGroup);
                    if (a < s.snapGrid.length - 1) {
                        var o = s.rtlTranslate ? s.translate : -s.translate
                            , r = s.snapGrid[a];
                        (s.snapGrid[a + 1] - r) / 2 < o - r && (n = s.params.slidesPerGroup)
                    }
                    return s.slideTo(n, t, e, i)
                },
                slideToClickedSlide: function () {
                    var t, e = this, i = e.params, s = e.$wrapperEl, n = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView, a = e.clickedIndex;
                    if (i.loop) {
                        if (e.animating)
                            return;
                        t = parseInt(I(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                            i.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(),
                                a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                                tt.nextTick(function () {
                                    e.slideTo(a)
                                })) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(),
                                    a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                                    tt.nextTick(function () {
                                        e.slideTo(a)
                                    })) : e.slideTo(a)
                    } else
                        e.slideTo(a)
                }
            }
            , u = {
                loopCreate: function () {
                    var s = this
                        , t = s.params
                        , e = s.$wrapperEl;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                    var n = e.children("." + t.slideClass);
                    if (t.loopFillGroupWithBlank) {
                        var i = t.slidesPerGroup - n.length % t.slidesPerGroup;
                        if (i !== t.slidesPerGroup) {
                            for (var a = 0; a < i; a += 1) {
                                var o = I(m.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                                e.append(o)
                            }
                            n = e.children("." + t.slideClass)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length),
                        s.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10),
                        s.loopedSlides += t.loopAdditionalSlides,
                        s.loopedSlides > n.length && (s.loopedSlides = n.length);
                    var r = []
                        , l = [];
                    n.each(function (t, e) {
                        var i = I(e);
                        t < s.loopedSlides && l.push(e),
                            t < n.length && t >= n.length - s.loopedSlides && r.push(e),
                            i.attr("data-swiper-slide-index", t)
                    });
                    for (var h = 0; h < l.length; h += 1)
                        e.append(I(l[h].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (var c = r.length - 1; 0 <= c; c -= 1)
                        e.prepend(I(r[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function () {
                    var t, e = this, i = e.params, s = e.activeIndex, n = e.slides, a = e.loopedSlides, o = e.allowSlidePrev, r = e.allowSlideNext, l = e.snapGrid, h = e.rtlTranslate;
                    e.allowSlidePrev = !0,
                        e.allowSlideNext = !0;
                    var c = -l[s] - e.getTranslate();
                    s < a ? (t = n.length - 3 * a + s,
                        t += a,
                        e.slideTo(t, 0, !1, !0) && 0 != c && e.setTranslate((h ? -e.translate : e.translate) - c)) : ("auto" === i.slidesPerView && 2 * a <= s || s >= n.length - a) && (t = -n.length + s + a,
                            t += a,
                            e.slideTo(t, 0, !1, !0) && 0 != c && e.setTranslate((h ? -e.translate : e.translate) - c)),
                        e.allowSlidePrev = o,
                        e.allowSlideNext = r
                },
                loopDestroy: function () {
                    var t = this.$wrapperEl
                        , e = this.params
                        , i = this.slides;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(),
                        i.removeAttr("data-swiper-slide-index")
                }
            }
            , p = {
                setGrabCursor: function (t) {
                    if (!(et.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var e = this.el;
                        e.style.cursor = "move",
                            e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab",
                            e.style.cursor = t ? "-moz-grabbin" : "-moz-grab",
                            e.style.cursor = t ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function () {
                    et.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                }
            }
            , f = {
                appendSlide: function (t) {
                    var e = this.$wrapperEl
                        , i = this.params;
                    if (i.loop && this.loopDestroy(),
                        "object" == typeof t && "length" in t)
                        for (var s = 0; s < t.length; s += 1)
                            t[s] && e.append(t[s]);
                    else
                        e.append(t);
                    i.loop && this.loopCreate(),
                        i.observer && et.observer || this.update()
                },
                prependSlide: function (t) {
                    var e = this.params
                        , i = this.$wrapperEl
                        , s = this.activeIndex;
                    e.loop && this.loopDestroy();
                    var n = s + 1;
                    if ("object" == typeof t && "length" in t) {
                        for (var a = 0; a < t.length; a += 1)
                            t[a] && i.prepend(t[a]);
                        n = s + t.length
                    } else
                        i.prepend(t);
                    e.loop && this.loopCreate(),
                        e.observer && et.observer || this.update(),
                        this.slideTo(n, 0, !1)
                },
                addSlide: function (t, e) {
                    var i = this
                        , s = i.$wrapperEl
                        , n = i.params
                        , a = i.activeIndex;
                    n.loop && (a -= i.loopedSlides,
                        i.loopDestroy(),
                        i.slides = s.children("." + n.slideClass));
                    var o = i.slides.length;
                    if (t <= 0)
                        i.prependSlide(e);
                    else if (o <= t)
                        i.appendSlide(e);
                    else {
                        for (var r = t < a ? a + 1 : a, l = [], h = o - 1; t <= h; h -= 1) {
                            var c = i.slides.eq(h);
                            c.remove(),
                                l.unshift(c)
                        }
                        if ("object" == typeof e && "length" in e) {
                            for (var d = 0; d < e.length; d += 1)
                                e[d] && s.append(e[d]);
                            r = t < a ? a + e.length : a
                        } else
                            s.append(e);
                        for (var u = 0; u < l.length; u += 1)
                            s.append(l[u]);
                        n.loop && i.loopCreate(),
                            n.observer && et.observer || i.update(),
                            n.loop ? i.slideTo(r + i.loopedSlides, 0, !1) : i.slideTo(r, 0, !1)
                    }
                },
                removeSlide: function (t) {
                    var e = this
                        , i = e.params
                        , s = e.$wrapperEl
                        , n = e.activeIndex;
                    i.loop && (n -= e.loopedSlides,
                        e.loopDestroy(),
                        e.slides = s.children("." + i.slideClass));
                    var a, o = n;
                    if ("object" == typeof t && "length" in t) {
                        for (var r = 0; r < t.length; r += 1)
                            a = t[r],
                                e.slides[a] && e.slides.eq(a).remove(),
                                a < o && (o -= 1);
                        o = Math.max(o, 0)
                    } else
                        a = t,
                            e.slides[a] && e.slides.eq(a).remove(),
                            a < o && (o -= 1),
                            o = Math.max(o, 0);
                    i.loop && e.loopCreate(),
                        i.observer && et.observer || e.update(),
                        i.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1)
                },
                removeAllSlides: function () {
                    for (var t = [], e = 0; e < this.slides.length; e += 1)
                        t.push(e);
                    this.removeSlide(t)
                }
            }
            , g = function () {
                var t = J.navigator.userAgent
                    , e = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: J.cordova || J.phonegap,
                        phonegap: J.cordova || J.phonegap
                    }
                    , i = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
                    , s = t.match(/(Android);?[\s\/]+([\d.]+)?/)
                    , n = t.match(/(iPad).*OS\s([\d_]+)/)
                    , a = t.match(/(iPod)(.*OS\s([\d_]+))?/)
                    , o = !n && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (i && (e.os = "windows",
                    e.osVersion = i[2],
                    e.windows = !0),
                    s && !i && (e.os = "android",
                        e.osVersion = s[2],
                        e.android = !0,
                        e.androidChrome = 0 <= t.toLowerCase().indexOf("chrome")),
                    (n || o || a) && (e.os = "ios",
                        e.ios = !0),
                    o && !a && (e.osVersion = o[2].replace(/_/g, "."),
                        e.iphone = !0),
                    n && (e.osVersion = n[2].replace(/_/g, "."),
                        e.ipad = !0),
                    a && (e.osVersion = a[3] ? a[3].replace(/_/g, ".") : null,
                        e.iphone = !0),
                    e.ios && e.osVersion && 0 <= t.indexOf("Version/") && "10" === e.osVersion.split(".")[0] && (e.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
                    e.desktop = !(e.os || e.android || e.webView),
                    e.webView = (o || n || a) && t.match(/.*AppleWebKit(?!.*Safari)/i),
                    e.os && "ios" === e.os) {
                    var r = e.osVersion.split(".")
                        , l = m.querySelector('meta[name="viewport"]');
                    e.minimalUi = !e.webView && (a || o) && (1 * r[0] == 7 ? 1 <= 1 * r[1] : 7 < 1 * r[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
                }
                return e.pixelRatio = J.devicePixelRatio || 1,
                    e
            }();
        function v() {
            var t = this
                , e = t.params
                , i = t.el;
            if (!i || 0 !== i.offsetWidth) {
                e.breakpoints && t.setBreakpoint();
                var s = t.allowSlideNext
                    , n = t.allowSlidePrev
                    , a = t.snapGrid;
                if (t.allowSlideNext = !0,
                    t.allowSlidePrev = !0,
                    t.updateSize(),
                    t.updateSlides(),
                    e.freeMode) {
                    var o = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(o),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses(),
                        e.autoHeight && t.updateAutoHeight()
                } else
                    t.updateSlidesClasses(),
                        ("auto" === e.slidesPerView || 1 < e.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
                t.allowSlidePrev = n,
                    t.allowSlideNext = s,
                    t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow()
            }
        }
        var b = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }
            , w = {
                update: h,
                translate: c,
                transition: {
                    setTransition: function (t, e) {
                        this.$wrapperEl.transition(t),
                            this.emit("setTransition", t, e)
                    },
                    transitionStart: function (t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex
                            , s = this.params
                            , n = this.previousIndex;
                        s.autoHeight && this.updateAutoHeight();
                        var a = e;
                        if (a = a || (n < i ? "next" : i < n ? "prev" : "reset"),
                            this.emit("transitionStart"),
                            t && i !== n) {
                            if ("reset" === a)
                                return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"),
                                "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                        }
                    },
                    transitionEnd: function (t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex
                            , s = this.previousIndex;
                        this.animating = !1,
                            this.setTransition(0);
                        var n = e;
                        if (n = n || (s < i ? "next" : i < s ? "prev" : "reset"),
                            this.emit("transitionEnd"),
                            t && i !== s) {
                            if ("reset" === n)
                                return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"),
                                "next" === n ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                        }
                    }
                },
                slide: d,
                loop: u,
                grabCursor: p,
                manipulation: f,
                events: {
                    attachEvents: function () {
                        var t = this
                            , e = t.params
                            , i = t.touchEvents
                            , s = t.el
                            , n = t.wrapperEl;
                        t.onTouchStart = function (t) {
                            var e = this
                                , i = e.touchEventsData
                                , s = e.params
                                , n = e.touches;
                            if (!e.animating || !s.preventInteractionOnTransition) {
                                var a = t;
                                if (a.originalEvent && (a = a.originalEvent),
                                    i.isTouchEvent = "touchstart" === a.type,
                                    (i.isTouchEvent || !("which" in a) || 3 !== a.which) && !(!i.isTouchEvent && "button" in a && 0 < a.button || i.isTouched && i.isMoved))
                                    if (s.noSwiping && I(a.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0])
                                        e.allowClick = !0;
                                    else if (!s.swipeHandler || I(a).closest(s.swipeHandler)[0]) {
                                        n.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                            n.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                                        var o = n.currentX
                                            , r = n.currentY
                                            , l = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
                                            , h = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                                        if (!l || !(o <= h || o >= J.screen.width - h)) {
                                            if (tt.extend(i, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0
                                            }),
                                                n.startX = o,
                                                n.startY = r,
                                                i.touchStartTime = tt.now(),
                                                e.allowClick = !0,
                                                e.updateSize(),
                                                e.swipeDirection = void 0,
                                                0 < s.threshold && (i.allowThresholdMove = !1),
                                                "touchstart" !== a.type) {
                                                var c = !0;
                                                I(a.target).is(i.formElements) && (c = !1),
                                                    m.activeElement && I(m.activeElement).is(i.formElements) && m.activeElement !== a.target && m.activeElement.blur();
                                                var d = c && e.allowTouchMove && s.touchStartPreventDefault;
                                                (s.touchStartForcePreventDefault || d) && a.preventDefault()
                                            }
                                            e.emit("touchStart", a)
                                        }
                                    }
                            }
                        }
                            .bind(t),
                            t.onTouchMove = function (t) {
                                var e = this
                                    , i = e.touchEventsData
                                    , s = e.params
                                    , n = e.touches
                                    , a = e.rtlTranslate
                                    , o = t;
                                if (o.originalEvent && (o = o.originalEvent),
                                    i.isTouched) {
                                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                                        var r = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                                            , l = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                                        if (o.preventedByNestedSwiper)
                                            return n.startX = r,
                                                void (n.startY = l);
                                        if (!e.allowTouchMove)
                                            return e.allowClick = !1,
                                                void (i.isTouched && (tt.extend(n, {
                                                    startX: r,
                                                    startY: l,
                                                    currentX: r,
                                                    currentY: l
                                                }),
                                                    i.touchStartTime = tt.now()));
                                        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                                            if (e.isVertical()) {
                                                if (l < n.startY && e.translate <= e.maxTranslate() || l > n.startY && e.translate >= e.minTranslate())
                                                    return i.isTouched = !1,
                                                        void (i.isMoved = !1)
                                            } else if (r < n.startX && e.translate <= e.maxTranslate() || r > n.startX && e.translate >= e.minTranslate())
                                                return;
                                        if (i.isTouchEvent && m.activeElement && o.target === m.activeElement && I(o.target).is(i.formElements))
                                            return i.isMoved = !0,
                                                void (e.allowClick = !1);
                                        if (i.allowTouchCallbacks && e.emit("touchMove", o),
                                            !(o.targetTouches && 1 < o.targetTouches.length)) {
                                            n.currentX = r,
                                                n.currentY = l;
                                            var h, c = n.currentX - n.startX, d = n.currentY - n.startY;
                                            if (!(e.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) < e.params.threshold))
                                                if (void 0 === i.isScrolling && (e.isHorizontal() && n.currentY === n.startY || e.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : 25 <= c * c + d * d && (h = 180 * Math.atan2(Math.abs(d), Math.abs(c)) / Math.PI,
                                                    i.isScrolling = e.isHorizontal() ? h > s.touchAngle : 90 - h > s.touchAngle)),
                                                    i.isScrolling && e.emit("touchMoveOpposite", o),
                                                    void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
                                                    i.isScrolling)
                                                    i.isTouched = !1;
                                                else if (i.startMoving) {
                                                    e.allowClick = !1,
                                                        o.preventDefault(),
                                                        s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                                                        i.isMoved || (s.loop && e.loopFix(),
                                                            i.startTranslate = e.getTranslate(),
                                                            e.setTransition(0),
                                                            e.animating && e.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                            i.allowMomentumBounce = !1,
                                                            !s.grabCursor || !0 !== e.allowSlideNext && !0 !== e.allowSlidePrev || e.setGrabCursor(!0),
                                                            e.emit("sliderFirstMove", o)),
                                                        e.emit("sliderMove", o),
                                                        i.isMoved = !0;
                                                    var u = e.isHorizontal() ? c : d;
                                                    n.diff = u,
                                                        u *= s.touchRatio,
                                                        a && (u = -u),
                                                        e.swipeDirection = 0 < u ? "prev" : "next",
                                                        i.currentTranslate = u + i.startTranslate;
                                                    var p = !0
                                                        , f = s.resistanceRatio;
                                                    if (s.touchReleaseOnEdges && (f = 0),
                                                        0 < u && i.currentTranslate > e.minTranslate() ? (p = !1,
                                                            s.resistance && (i.currentTranslate = e.minTranslate() - 1 + Math.pow(-e.minTranslate() + i.startTranslate + u, f))) : u < 0 && i.currentTranslate < e.maxTranslate() && (p = !1,
                                                                s.resistance && (i.currentTranslate = e.maxTranslate() + 1 - Math.pow(e.maxTranslate() - i.startTranslate - u, f))),
                                                        p && (o.preventedByNestedSwiper = !0),
                                                        !e.allowSlideNext && "next" === e.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                                        !e.allowSlidePrev && "prev" === e.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                                        0 < s.threshold) {
                                                        if (!(Math.abs(u) > s.threshold || i.allowThresholdMove))
                                                            return void (i.currentTranslate = i.startTranslate);
                                                        if (!i.allowThresholdMove)
                                                            return i.allowThresholdMove = !0,
                                                                n.startX = n.currentX,
                                                                n.startY = n.currentY,
                                                                i.currentTranslate = i.startTranslate,
                                                                void (n.diff = e.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                                    }
                                                    s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (e.updateActiveIndex(),
                                                        e.updateSlidesClasses()),
                                                        s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                                            position: n[e.isHorizontal() ? "startX" : "startY"],
                                                            time: i.touchStartTime
                                                        }),
                                                            i.velocities.push({
                                                                position: n[e.isHorizontal() ? "currentX" : "currentY"],
                                                                time: tt.now()
                                                            })),
                                                        e.updateProgress(i.currentTranslate),
                                                        e.setTranslate(i.currentTranslate))
                                                }
                                        }
                                    }
                                } else
                                    i.startMoving && i.isScrolling && e.emit("touchMoveOpposite", o)
                            }
                                .bind(t),
                            t.onTouchEnd = function (t) {
                                var e = this
                                    , i = e.touchEventsData
                                    , s = e.params
                                    , n = e.touches
                                    , a = e.rtlTranslate
                                    , o = e.$wrapperEl
                                    , r = e.slidesGrid
                                    , l = e.snapGrid
                                    , h = t;
                                if (h.originalEvent && (h = h.originalEvent),
                                    i.allowTouchCallbacks && e.emit("touchEnd", h),
                                    i.allowTouchCallbacks = !1,
                                    !i.isTouched)
                                    return i.isMoved && s.grabCursor && e.setGrabCursor(!1),
                                        i.isMoved = !1,
                                        void (i.startMoving = !1);
                                s.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                                var c, d = tt.now(), u = d - i.touchStartTime;
                                if (e.allowClick && (e.updateClickedSlide(h),
                                    e.emit("tap", h),
                                    u < 300 && 300 < d - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout),
                                        i.clickTimeout = tt.nextTick(function () {
                                            e && !e.destroyed && e.emit("click", h)
                                        }, 300)),
                                    u < 300 && d - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                                        e.emit("doubleTap", h))),
                                    i.lastClickTime = tt.now(),
                                    tt.nextTick(function () {
                                        e.destroyed || (e.allowClick = !0)
                                    }),
                                    !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate)
                                    return i.isTouched = !1,
                                        i.isMoved = !1,
                                        void (i.startMoving = !1);
                                if (i.isTouched = !1,
                                    i.isMoved = !1,
                                    i.startMoving = !1,
                                    c = s.followFinger ? a ? e.translate : -e.translate : -i.currentTranslate,
                                    s.freeMode) {
                                    if (c < -e.minTranslate())
                                        return void e.slideTo(e.activeIndex);
                                    if (c > -e.maxTranslate())
                                        return void (e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
                                    if (s.freeModeMomentum) {
                                        if (1 < i.velocities.length) {
                                            var p = i.velocities.pop()
                                                , f = i.velocities.pop()
                                                , m = p.position - f.position
                                                , g = p.time - f.time;
                                            e.velocity = m / g,
                                                e.velocity /= 2,
                                                Math.abs(e.velocity) < s.freeModeMinimumVelocity && (e.velocity = 0),
                                                (150 < g || 300 < tt.now() - p.time) && (e.velocity = 0)
                                        } else
                                            e.velocity = 0;
                                        e.velocity *= s.freeModeMomentumVelocityRatio,
                                            i.velocities.length = 0;
                                        var v = 1e3 * s.freeModeMomentumRatio
                                            , b = e.velocity * v
                                            , w = e.translate + b;
                                        a && (w = -w);
                                        var y, _, x = !1, k = 20 * Math.abs(e.velocity) * s.freeModeMomentumBounceRatio;
                                        if (w < e.maxTranslate())
                                            s.freeModeMomentumBounce ? (w + e.maxTranslate() < -k && (w = e.maxTranslate() - k),
                                                y = e.maxTranslate(),
                                                x = !0,
                                                i.allowMomentumBounce = !0) : w = e.maxTranslate(),
                                                s.loop && s.centeredSlides && (_ = !0);
                                        else if (w > e.minTranslate())
                                            s.freeModeMomentumBounce ? (w - e.minTranslate() > k && (w = e.minTranslate() + k),
                                                y = e.minTranslate(),
                                                x = !0,
                                                i.allowMomentumBounce = !0) : w = e.minTranslate(),
                                                s.loop && s.centeredSlides && (_ = !0);
                                        else if (s.freeModeSticky) {
                                            for (var C, T = 0; T < l.length; T += 1)
                                                if (l[T] > -w) {
                                                    C = T;
                                                    break
                                                }
                                            w = -(w = Math.abs(l[C] - w) < Math.abs(l[C - 1] - w) || "next" === e.swipeDirection ? l[C] : l[C - 1])
                                        }
                                        if (_ && e.once("transitionEnd", function () {
                                            e.loopFix()
                                        }),
                                            0 !== e.velocity)
                                            v = a ? Math.abs((-w - e.translate) / e.velocity) : Math.abs((w - e.translate) / e.velocity);
                                        else if (s.freeModeSticky)
                                            return void e.slideToClosest();
                                        s.freeModeMomentumBounce && x ? (e.updateProgress(y),
                                            e.setTransition(v),
                                            e.setTranslate(w),
                                            e.transitionStart(!0, e.swipeDirection),
                                            e.animating = !0,
                                            o.transitionEnd(function () {
                                                e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"),
                                                    e.setTransition(s.speed),
                                                    e.setTranslate(y),
                                                    o.transitionEnd(function () {
                                                        e && !e.destroyed && e.transitionEnd()
                                                    }))
                                            })) : e.velocity ? (e.updateProgress(w),
                                                e.setTransition(v),
                                                e.setTranslate(w),
                                                e.transitionStart(!0, e.swipeDirection),
                                                e.animating || (e.animating = !0,
                                                    o.transitionEnd(function () {
                                                        e && !e.destroyed && e.transitionEnd()
                                                    }))) : e.updateProgress(w),
                                            e.updateActiveIndex(),
                                            e.updateSlidesClasses()
                                    } else if (s.freeModeSticky)
                                        return void e.slideToClosest();
                                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (e.updateProgress(),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses())
                                } else {
                                    for (var S = 0, E = e.slidesSizesGrid[0], D = 0; D < r.length; D += s.slidesPerGroup)
                                        void 0 !== r[D + s.slidesPerGroup] ? c >= r[D] && c < r[D + s.slidesPerGroup] && (E = r[(S = D) + s.slidesPerGroup] - r[D]) : c >= r[D] && (S = D,
                                            E = r[r.length - 1] - r[r.length - 2]);
                                    var P = (c - r[S]) / E;
                                    if (u > s.longSwipesMs) {
                                        if (!s.longSwipes)
                                            return void e.slideTo(e.activeIndex);
                                        "next" === e.swipeDirection && (P >= s.longSwipesRatio ? e.slideTo(S + s.slidesPerGroup) : e.slideTo(S)),
                                            "prev" === e.swipeDirection && (P > 1 - s.longSwipesRatio ? e.slideTo(S + s.slidesPerGroup) : e.slideTo(S))
                                    } else {
                                        if (!s.shortSwipes)
                                            return void e.slideTo(e.activeIndex);
                                        "next" === e.swipeDirection && e.slideTo(S + s.slidesPerGroup),
                                            "prev" === e.swipeDirection && e.slideTo(S)
                                    }
                                }
                            }
                                .bind(t),
                            t.onClick = function (t) {
                                this.allowClick || (this.params.preventClicks && t.preventDefault(),
                                    this.params.preventClicksPropagation && this.animating && (t.stopPropagation(),
                                        t.stopImmediatePropagation()))
                            }
                                .bind(t);
                        var a = "container" === e.touchEventsTarget ? s : n
                            , o = !!e.nested;
                        if (et.touch || !et.pointerEvents && !et.prefixedPointerEvents) {
                            if (et.touch) {
                                var r = !("touchstart" !== i.start || !et.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                a.addEventListener(i.start, t.onTouchStart, r),
                                    a.addEventListener(i.move, t.onTouchMove, et.passiveListener ? {
                                        passive: !1,
                                        capture: o
                                    } : o),
                                    a.addEventListener(i.end, t.onTouchEnd, r)
                            }
                            (e.simulateTouch && !g.ios && !g.android || e.simulateTouch && !et.touch && g.ios) && (a.addEventListener("mousedown", t.onTouchStart, !1),
                                m.addEventListener("mousemove", t.onTouchMove, o),
                                m.addEventListener("mouseup", t.onTouchEnd, !1))
                        } else
                            a.addEventListener(i.start, t.onTouchStart, !1),
                                m.addEventListener(i.move, t.onTouchMove, o),
                                m.addEventListener(i.end, t.onTouchEnd, !1);
                        (e.preventClicks || e.preventClicksPropagation) && a.addEventListener("click", t.onClick, !0),
                            t.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v, !0)
                    },
                    detachEvents: function () {
                        var t = this
                            , e = t.params
                            , i = t.touchEvents
                            , s = t.el
                            , n = t.wrapperEl
                            , a = "container" === e.touchEventsTarget ? s : n
                            , o = !!e.nested;
                        if (et.touch || !et.pointerEvents && !et.prefixedPointerEvents) {
                            if (et.touch) {
                                var r = !("onTouchStart" !== i.start || !et.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                a.removeEventListener(i.start, t.onTouchStart, r),
                                    a.removeEventListener(i.move, t.onTouchMove, o),
                                    a.removeEventListener(i.end, t.onTouchEnd, r)
                            }
                            (e.simulateTouch && !g.ios && !g.android || e.simulateTouch && !et.touch && g.ios) && (a.removeEventListener("mousedown", t.onTouchStart, !1),
                                m.removeEventListener("mousemove", t.onTouchMove, o),
                                m.removeEventListener("mouseup", t.onTouchEnd, !1))
                        } else
                            a.removeEventListener(i.start, t.onTouchStart, !1),
                                m.removeEventListener(i.move, t.onTouchMove, o),
                                m.removeEventListener(i.end, t.onTouchEnd, !1);
                        (e.preventClicks || e.preventClicksPropagation) && a.removeEventListener("click", t.onClick, !0),
                            t.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v)
                    }
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var t = this
                            , e = t.activeIndex
                            , i = t.initialized
                            , s = t.loopedSlides;
                        void 0 === s && (s = 0);
                        var n = t.params
                            , a = n.breakpoints;
                        if (a && (!a || 0 !== Object.keys(a).length)) {
                            var o = t.getBreakpoint(a);
                            if (o && t.currentBreakpoint !== o) {
                                var r = o in a ? a[o] : void 0;
                                r && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (t) {
                                    var e = r[t];
                                    void 0 !== e && (r[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
                                });
                                var l = r || t.originalParams
                                    , h = l.direction && l.direction !== n.direction
                                    , c = n.loop && (l.slidesPerView !== n.slidesPerView || h);
                                h && i && t.changeDirection(),
                                    tt.extend(t.params, l),
                                    tt.extend(t, {
                                        allowTouchMove: t.params.allowTouchMove,
                                        allowSlideNext: t.params.allowSlideNext,
                                        allowSlidePrev: t.params.allowSlidePrev
                                    }),
                                    t.currentBreakpoint = o,
                                    c && i && (t.loopDestroy(),
                                        t.loopCreate(),
                                        t.updateSlides(),
                                        t.slideTo(e - s + t.loopedSlides, 0, !1)),
                                    t.emit("breakpoint", l)
                            }
                        }
                    },
                    getBreakpoint: function (t) {
                        if (t) {
                            var e = !1
                                , i = [];
                            Object.keys(t).forEach(function (t) {
                                i.push(t)
                            }),
                                i.sort(function (t, e) {
                                    return parseInt(t, 10) - parseInt(e, 10)
                                });
                            for (var s = 0; s < i.length; s += 1) {
                                var n = i[s];
                                this.params.breakpointsInverse ? n <= J.innerWidth && (e = n) : n >= J.innerWidth && !e && (e = n)
                            }
                            return e || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var t = this
                            , e = t.isLocked;
                        t.isLocked = 1 === t.snapGrid.length,
                            t.allowSlideNext = !t.isLocked,
                            t.allowSlidePrev = !t.isLocked,
                            e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"),
                            e && e !== t.isLocked && (t.isEnd = !1,
                                t.navigation.update())
                    }
                },
                classes: {
                    addClasses: function () {
                        var e = this.classNames
                            , i = this.params
                            , t = this.rtl
                            , s = this.$el
                            , n = [];
                        n.push("initialized"),
                            n.push(i.direction),
                            i.freeMode && n.push("free-mode"),
                            et.flexbox || n.push("no-flexbox"),
                            i.autoHeight && n.push("autoheight"),
                            t && n.push("rtl"),
                            1 < i.slidesPerColumn && n.push("multirow"),
                            g.android && n.push("android"),
                            g.ios && n.push("ios"),
                            (z.isIE || z.isEdge) && (et.pointerEvents || et.prefixedPointerEvents) && n.push("wp8-" + i.direction),
                            n.forEach(function (t) {
                                e.push(i.containerModifierClass + t)
                            }),
                            s.addClass(e.join(" "))
                    },
                    removeClasses: function () {
                        var t = this.$el
                            , e = this.classNames;
                        t.removeClass(e.join(" "))
                    }
                },
                images: {
                    loadImage: function (t, e, i, s, n, a) {
                        var o;
                        function r() {
                            a && a()
                        }
                        t.complete && n ? r() : e ? ((o = new J.Image).onload = r,
                            o.onerror = r,
                            s && (o.sizes = s),
                            i && (o.srcset = i),
                            e && (o.src = e)) : r()
                    },
                    preloadImages: function () {
                        var t = this;
                        function e() {
                            null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                                t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(),
                                    t.emit("imagesReady")))
                        }
                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var s = t.imagesToLoad[i];
                            t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e)
                        }
                    }
                }
            }
            , y = {}
            , _ = function (u) {
                function p() {
                    for (var t, e, n, i = [], s = arguments.length; s--;)
                        i[s] = arguments[s];
                    n = (n = 1 === i.length && i[0].constructor && i[0].constructor === Object ? i[0] : (e = (t = i)[0],
                        t[1])) || {},
                        n = tt.extend({}, n),
                        e && !n.el && (n.el = e),
                        u.call(this, n),
                        Object.keys(w).forEach(function (e) {
                            Object.keys(w[e]).forEach(function (t) {
                                p.prototype[t] || (p.prototype[t] = w[e][t])
                            })
                        });
                    var a = this;
                    void 0 === a.modules && (a.modules = {}),
                        Object.keys(a.modules).forEach(function (t) {
                            var e = a.modules[t];
                            if (e.params) {
                                var i = Object.keys(e.params)[0]
                                    , s = e.params[i];
                                if ("object" != typeof s || null === s)
                                    return;
                                if (!(i in n && "enabled" in s))
                                    return;
                                !0 === n[i] && (n[i] = {
                                    enabled: !0
                                }),
                                    "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0),
                                    n[i] || (n[i] = {
                                        enabled: !1
                                    })
                            }
                        });
                    var o = tt.extend({}, b);
                    a.useModulesParams(o),
                        a.params = tt.extend({}, o, y, n),
                        a.originalParams = tt.extend({}, a.params),
                        a.passedParams = tt.extend({}, n);
                    var r = (a.$ = I)(a.params.el);
                    if (e = r[0]) {
                        if (1 < r.length) {
                            var l = [];
                            return r.each(function (t, e) {
                                var i = tt.extend({}, n, {
                                    el: e
                                });
                                l.push(new p(i))
                            }),
                                l
                        }
                        e.swiper = a,
                            r.data("swiper", a);
                        var h, c, d = r.children("." + a.params.wrapperClass);
                        return tt.extend(a, {
                            $el: r,
                            el: e,
                            $wrapperEl: d,
                            wrapperEl: d[0],
                            classNames: [],
                            slides: I(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === a.params.direction
                            },
                            isVertical: function () {
                                return "vertical" === a.params.direction
                            },
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                            rtlTranslate: "horizontal" === a.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                            wrongRTL: "-webkit-box" === d.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: a.params.allowSlideNext,
                            allowSlidePrev: a.params.allowSlidePrev,
                            touchEvents: (h = ["touchstart", "touchmove", "touchend"],
                                c = ["mousedown", "mousemove", "mouseup"],
                                et.pointerEvents ? c = ["pointerdown", "pointermove", "pointerup"] : et.prefixedPointerEvents && (c = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                a.touchEventsTouch = {
                                    start: h[0],
                                    move: h[1],
                                    end: h[2]
                                },
                                a.touchEventsDesktop = {
                                    start: c[0],
                                    move: c[1],
                                    end: c[2]
                                },
                                et.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: tt.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: a.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }),
                            a.useModules(),
                            a.params.init && a.init(),
                            a
                    }
                }
                u && (p.__proto__ = u);
                var t = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return ((p.prototype = Object.create(u && u.prototype)).constructor = p).prototype.slidesPerViewDynamic = function () {
                    var t = this.params
                        , e = this.slides
                        , i = this.slidesGrid
                        , s = this.size
                        , n = this.activeIndex
                        , a = 1;
                    if (t.centeredSlides) {
                        for (var o, r = e[n].swiperSlideSize, l = n + 1; l < e.length; l += 1)
                            e[l] && !o && (a += 1,
                                s < (r += e[l].swiperSlideSize) && (o = !0));
                        for (var h = n - 1; 0 <= h; h -= 1)
                            e[h] && !o && (a += 1,
                                s < (r += e[h].swiperSlideSize) && (o = !0))
                    } else
                        for (var c = n + 1; c < e.length; c += 1)
                            i[c] - i[n] < s && (a += 1);
                    return a
                }
                    ,
                    p.prototype.update = function () {
                        var i = this;
                        if (i && !i.destroyed) {
                            var t = i.snapGrid
                                , e = i.params;
                            e.breakpoints && i.setBreakpoint(),
                                i.updateSize(),
                                i.updateSlides(),
                                i.updateProgress(),
                                i.updateSlidesClasses(),
                                i.params.freeMode ? (s(),
                                    i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || s(),
                                e.watchOverflow && t !== i.snapGrid && i.checkOverflow(),
                                i.emit("update")
                        }
                        function s() {
                            var t = i.rtlTranslate ? -1 * i.translate : i.translate
                                , e = Math.min(Math.max(t, i.maxTranslate()), i.minTranslate());
                            i.setTranslate(e),
                                i.updateActiveIndex(),
                                i.updateSlidesClasses()
                        }
                    }
                    ,
                    p.prototype.changeDirection = function (i, t) {
                        void 0 === t && (t = !0);
                        var e = this
                            , s = e.params.direction;
                        return (i = i || ("horizontal" === s ? "vertical" : "horizontal")) === s || "horizontal" !== i && "vertical" !== i || ("vertical" === s && (e.$el.removeClass(e.params.containerModifierClass + "vertical wp8-vertical").addClass("" + e.params.containerModifierClass + i),
                            (z.isIE || z.isEdge) && (et.pointerEvents || et.prefixedPointerEvents) && e.$el.addClass(e.params.containerModifierClass + "wp8-" + i)),
                            "horizontal" === s && (e.$el.removeClass(e.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + e.params.containerModifierClass + i),
                                (z.isIE || z.isEdge) && (et.pointerEvents || et.prefixedPointerEvents) && e.$el.addClass(e.params.containerModifierClass + "wp8-" + i)),
                            e.params.direction = i,
                            e.slides.each(function (t, e) {
                                "vertical" === i ? e.style.width = "" : e.style.height = ""
                            }),
                            e.emit("changeDirection"),
                            t && e.update()),
                            e
                    }
                    ,
                    p.prototype.init = function () {
                        var t = this;
                        t.initialized || (t.emit("beforeInit"),
                            t.params.breakpoints && t.setBreakpoint(),
                            t.addClasses(),
                            t.params.loop && t.loopCreate(),
                            t.updateSize(),
                            t.updateSlides(),
                            t.params.watchOverflow && t.checkOverflow(),
                            t.params.grabCursor && t.setGrabCursor(),
                            t.params.preloadImages && t.preloadImages(),
                            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit),
                            t.attachEvents(),
                            t.initialized = !0,
                            t.emit("init"))
                    }
                    ,
                    p.prototype.destroy = function (t, e) {
                        void 0 === t && (t = !0),
                            void 0 === e && (e = !0);
                        var i = this
                            , s = i.params
                            , n = i.$el
                            , a = i.$wrapperEl
                            , o = i.slides;
                        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                            i.initialized = !1,
                            i.detachEvents(),
                            s.loop && i.loopDestroy(),
                            e && (i.removeClasses(),
                                n.removeAttr("style"),
                                a.removeAttr("style"),
                                o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach(function (t) {
                                i.off(t)
                            }),
                            !1 !== t && (i.$el[0].swiper = null,
                                i.$el.data("swiper", null),
                                tt.deleteProps(i)),
                            i.destroyed = !0),
                            null
                    }
                    ,
                    p.extendDefaults = function (t) {
                        tt.extend(y, t)
                    }
                    ,
                    t.extendedDefaults.get = function () {
                        return y
                    }
                    ,
                    t.defaults.get = function () {
                        return b
                    }
                    ,
                    t.Class.get = function () {
                        return u
                    }
                    ,
                    t.$.get = function () {
                        return I
                    }
                    ,
                    Object.defineProperties(p, t),
                    p
            }(t)
            , x = {
                name: "device",
                proto: {
                    device: g
                },
                static: {
                    device: g
                }
            }
            , k = {
                name: "support",
                proto: {
                    support: et
                },
                static: {
                    support: et
                }
            }
            , C = {
                name: "browser",
                proto: {
                    browser: z
                },
                static: {
                    browser: z
                }
            }
            , T = {
                name: "resize",
                create: function () {
                    var t = this;
                    tt.extend(t, {
                        resize: {
                            resizeHandler: function () {
                                t && !t.destroyed && t.initialized && (t.emit("beforeResize"),
                                    t.emit("resize"))
                            },
                            orientationChangeHandler: function () {
                                t && !t.destroyed && t.initialized && t.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        J.addEventListener("resize", this.resize.resizeHandler),
                            J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function () {
                        J.removeEventListener("resize", this.resize.resizeHandler),
                            J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            }
            , S = {
                func: J.MutationObserver || J.WebkitMutationObserver,
                attach: function (t, e) {
                    void 0 === e && (e = {});
                    var i = this
                        , s = new S.func(function (t) {
                            if (1 !== t.length) {
                                var e = function () {
                                    i.emit("observerUpdate", t[0])
                                };
                                J.requestAnimationFrame ? J.requestAnimationFrame(e) : J.setTimeout(e, 0)
                            } else
                                i.emit("observerUpdate", t[0])
                        }
                        );
                    s.observe(t, {
                        attributes: void 0 === e.attributes || e.attributes,
                        childList: void 0 === e.childList || e.childList,
                        characterData: void 0 === e.characterData || e.characterData
                    }),
                        i.observer.observers.push(s)
                },
                init: function () {
                    if (et.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var t = this.$el.parents(), e = 0; e < t.length; e += 1)
                                this.observer.attach(t[e]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }),
                            this.observer.attach(this.$wrapperEl[0], {
                                attributes: !1
                            })
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (t) {
                        t.disconnect()
                    }),
                        this.observer.observers = []
                }
            }
            , E = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function () {
                    tt.extend(this, {
                        observer: {
                            init: S.init.bind(this),
                            attach: S.attach.bind(this),
                            destroy: S.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function () {
                        this.observer.init()
                    },
                    destroy: function () {
                        this.observer.destroy()
                    }
                }
            }
            , D = {
                update: function (t) {
                    var e = this
                        , i = e.params
                        , s = i.slidesPerView
                        , n = i.slidesPerGroup
                        , a = i.centeredSlides
                        , o = e.params.virtual
                        , r = o.addSlidesBefore
                        , l = o.addSlidesAfter
                        , h = e.virtual
                        , c = h.from
                        , d = h.to
                        , u = h.slides
                        , p = h.slidesGrid
                        , f = h.renderSlide
                        , m = h.offset;
                    e.updateActiveIndex();
                    var g, v, b, w = e.activeIndex || 0;
                    g = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
                        b = a ? (v = Math.floor(s / 2) + n + r,
                            Math.floor(s / 2) + n + l) : (v = s + (n - 1) + r,
                                n + l);
                    var y = Math.max((w || 0) - b, 0)
                        , _ = Math.min((w || 0) + v, u.length - 1)
                        , x = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);
                    function k() {
                        e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.lazy && e.params.lazy.enabled && e.lazy.load()
                    }
                    if (tt.extend(e.virtual, {
                        from: y,
                        to: _,
                        offset: x,
                        slidesGrid: e.slidesGrid
                    }),
                        c === y && d === _ && !t)
                        return e.slidesGrid !== p && x !== m && e.slides.css(g, x + "px"),
                            void e.updateProgress();
                    if (e.params.virtual.renderExternal)
                        return e.params.virtual.renderExternal.call(e, {
                            offset: x,
                            from: y,
                            to: _,
                            slides: function () {
                                for (var t = [], e = y; e <= _; e += 1)
                                    t.push(u[e]);
                                return t
                            }()
                        }),
                            void k();
                    var C = []
                        , T = [];
                    if (t)
                        e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else
                        for (var S = c; S <= d; S += 1)
                            (S < y || _ < S) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                    for (var E = 0; E < u.length; E += 1)
                        y <= E && E <= _ && (void 0 === d || t ? T.push(E) : (d < E && T.push(E),
                            E < c && C.push(E)));
                    T.forEach(function (t) {
                        e.$wrapperEl.append(f(u[t], t))
                    }),
                        C.sort(function (t, e) {
                            return e - t
                        }).forEach(function (t) {
                            e.$wrapperEl.prepend(f(u[t], t))
                        }),
                        e.$wrapperEl.children(".swiper-slide").css(g, x + "px"),
                        k()
                },
                renderSlide: function (t, e) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[e])
                        return this.virtual.cache[e];
                    var s = i.renderSlide ? I(i.renderSlide.call(this, t, e)) : I('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                    return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", e),
                        i.cache && (this.virtual.cache[e] = s),
                        s
                },
                appendSlide: function (t) {
                    if ("object" == typeof t && "length" in t)
                        for (var e = 0; e < t.length; e += 1)
                            t[e] && this.virtual.slides.push(t[e]);
                    else
                        this.virtual.slides.push(t);
                    this.virtual.update(!0)
                },
                prependSlide: function (t) {
                    var e = this.activeIndex
                        , i = e + 1
                        , s = 1;
                    if (Array.isArray(t)) {
                        for (var n = 0; n < t.length; n += 1)
                            t[n] && this.virtual.slides.unshift(t[n]);
                        i = e + t.length,
                            s = t.length
                    } else
                        this.virtual.slides.unshift(t);
                    if (this.params.virtual.cache) {
                        var a = this.virtual.cache
                            , o = {};
                        Object.keys(a).forEach(function (t) {
                            o[parseInt(t, 10) + s] = a[t]
                        }),
                            this.virtual.cache = o
                    }
                    this.virtual.update(!0),
                        this.slideTo(i, 0)
                },
                removeSlide: function (t) {
                    if (null != t) {
                        var e = this.activeIndex;
                        if (Array.isArray(t))
                            for (var i = t.length - 1; 0 <= i; i -= 1)
                                this.virtual.slides.splice(t[i], 1),
                                    this.params.virtual.cache && delete this.virtual.cache[t[i]],
                                    t[i] < e && (e -= 1),
                                    e = Math.max(e, 0);
                        else
                            this.virtual.slides.splice(t, 1),
                                this.params.virtual.cache && delete this.virtual.cache[t],
                                t < e && (e -= 1),
                                e = Math.max(e, 0);
                        this.virtual.update(!0),
                            this.slideTo(e, 0)
                    }
                },
                removeAllSlides: function () {
                    this.virtual.slides = [],
                        this.params.virtual.cache && (this.virtual.cache = {}),
                        this.virtual.update(!0),
                        this.slideTo(0, 0)
                }
            }
            , P = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function () {
                    tt.extend(this, {
                        virtual: {
                            update: D.update.bind(this),
                            appendSlide: D.appendSlide.bind(this),
                            prependSlide: D.prependSlide.bind(this),
                            removeSlide: D.removeSlide.bind(this),
                            removeAllSlides: D.removeAllSlides.bind(this),
                            renderSlide: D.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            tt.extend(this.params, t),
                                tt.extend(this.originalParams, t),
                                this.params.initialSlide || this.virtual.update()
                        }
                    },
                    setTranslate: function () {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            }
            , M = {
                handle: function (t) {
                    var e = this
                        , i = e.rtlTranslate
                        , s = t;
                    s.originalEvent && (s = s.originalEvent);
                    var n = s.keyCode || s.charCode;
                    if (!e.allowSlideNext && (e.isHorizontal() && 39 === n || e.isVertical() && 40 === n))
                        return !1;
                    if (!e.allowSlidePrev && (e.isHorizontal() && 37 === n || e.isVertical() && 38 === n))
                        return !1;
                    if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                        if (e.params.keyboard.onlyInViewport && (37 === n || 39 === n || 38 === n || 40 === n)) {
                            var a = !1;
                            if (0 < e.$el.parents("." + e.params.slideClass).length && 0 === e.$el.parents("." + e.params.slideActiveClass).length)
                                return;
                            var o = J.innerWidth
                                , r = J.innerHeight
                                , l = e.$el.offset();
                            i && (l.left -= e.$el[0].scrollLeft);
                            for (var h = [[l.left, l.top], [l.left + e.width, l.top], [l.left, l.top + e.height], [l.left + e.width, l.top + e.height]], c = 0; c < h.length; c += 1) {
                                var d = h[c];
                                0 <= d[0] && d[0] <= o && 0 <= d[1] && d[1] <= r && (a = !0)
                            }
                            if (!a)
                                return
                        }
                        e.isHorizontal() ? (37 !== n && 39 !== n || (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                            (39 === n && !i || 37 === n && i) && e.slideNext(),
                            (37 === n && !i || 39 === n && i) && e.slidePrev()) : (38 !== n && 40 !== n || (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                                40 === n && e.slideNext(),
                                38 === n && e.slidePrev()),
                            e.emit("keyPress", n)
                    }
                },
                enable: function () {
                    this.keyboard.enabled || (I(m).on("keydown", this.keyboard.handle),
                        this.keyboard.enabled = !0)
                },
                disable: function () {
                    this.keyboard.enabled && (I(m).off("keydown", this.keyboard.handle),
                        this.keyboard.enabled = !1)
                }
            }
            , O = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function () {
                    tt.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: M.enable.bind(this),
                            disable: M.disable.bind(this),
                            handle: M.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function () {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            }
            , A = {
                lastScrollTime: tt.now(),
                event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
                    var t = "onwheel"
                        , e = t in m;
                    if (!e) {
                        var i = m.createElement("div");
                        i.setAttribute(t, "return;"),
                            e = "function" == typeof i[t]
                    }
                    return !e && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (e = m.implementation.hasFeature("Events.wheel", "3.0")),
                        e
                }() ? "wheel" : "mousewheel",
                normalize: function (t) {
                    var e = 0
                        , i = 0
                        , s = 0
                        , n = 0;
                    return "detail" in t && (i = t.detail),
                        "wheelDelta" in t && (i = -t.wheelDelta / 120),
                        "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                        "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                        "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i,
                            i = 0),
                        s = 10 * e,
                        n = 10 * i,
                        "deltaY" in t && (n = t.deltaY),
                        "deltaX" in t && (s = t.deltaX),
                        (s || n) && t.deltaMode && (1 === t.deltaMode ? (s *= 40,
                            n *= 40) : (s *= 800,
                                n *= 800)),
                        s && !e && (e = s < 1 ? -1 : 1),
                        n && !i && (i = n < 1 ? -1 : 1),
                    {
                        spinX: e,
                        spinY: i,
                        pixelX: s,
                        pixelY: n
                    }
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1
                },
                handle: function (t) {
                    var e = t
                        , i = this
                        , s = i.params.mousewheel;
                    if (!i.mouseEntered && !s.releaseOnEdges)
                        return !0;
                    e.originalEvent && (e = e.originalEvent);
                    var n = 0
                        , a = i.rtlTranslate ? -1 : 1
                        , o = A.normalize(e);
                    if (s.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                                return !0;
                            n = o.pixelX * a
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                                return !0;
                            n = o.pixelY
                        }
                    else
                        n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY;
                    if (0 === n)
                        return !0;
                    if (s.invert && (n = -n),
                        i.params.freeMode) {
                        i.params.loop && i.loopFix();
                        var r = i.getTranslate() + n * s.sensitivity
                            , l = i.isBeginning
                            , h = i.isEnd;
                        if (r >= i.minTranslate() && (r = i.minTranslate()),
                            r <= i.maxTranslate() && (r = i.maxTranslate()),
                            i.setTransition(0),
                            i.setTranslate(r),
                            i.updateProgress(),
                            i.updateActiveIndex(),
                            i.updateSlidesClasses(),
                            (!l && i.isBeginning || !h && i.isEnd) && i.updateSlidesClasses(),
                            i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout),
                                i.mousewheel.timeout = tt.nextTick(function () {
                                    i.slideToClosest()
                                }, 300)),
                            i.emit("scroll", e),
                            i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                            r === i.minTranslate() || r === i.maxTranslate())
                            return !0
                    } else {
                        if (60 < tt.now() - i.mousewheel.lastScrollTime)
                            if (n < 0)
                                if (i.isEnd && !i.params.loop || i.animating) {
                                    if (s.releaseOnEdges)
                                        return !0
                                } else
                                    i.slideNext(),
                                        i.emit("scroll", e);
                            else if (i.isBeginning && !i.params.loop || i.animating) {
                                if (s.releaseOnEdges)
                                    return !0
                            } else
                                i.slidePrev(),
                                    i.emit("scroll", e);
                        i.mousewheel.lastScrollTime = (new J.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                        !1
                },
                enable: function () {
                    if (!A.event)
                        return !1;
                    if (this.mousewheel.enabled)
                        return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = I(this.params.mousewheel.eventsTarged)),
                        t.on("mouseenter", this.mousewheel.handleMouseEnter),
                        t.on("mouseleave", this.mousewheel.handleMouseLeave),
                        t.on(A.event, this.mousewheel.handle),
                        this.mousewheel.enabled = !0
                },
                disable: function () {
                    if (!A.event)
                        return !1;
                    if (!this.mousewheel.enabled)
                        return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = I(this.params.mousewheel.eventsTarged)),
                        t.off(A.event, this.mousewheel.handle),
                        !(this.mousewheel.enabled = !1)
                }
            }
            , H = {
                update: function () {
                    var t = this.params.navigation;
                    if (!this.params.loop) {
                        var e = this.navigation
                            , i = e.$nextEl
                            , s = e.$prevEl;
                        s && 0 < s.length && (this.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                            s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                            i && 0 < i.length && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function (t) {
                    t.preventDefault(),
                        this.isBeginning && !this.params.loop || this.slidePrev()
                },
                onNextClick: function (t) {
                    t.preventDefault(),
                        this.isEnd && !this.params.loop || this.slideNext()
                },
                init: function () {
                    var t, e, i = this, s = i.params.navigation;
                    (s.nextEl || s.prevEl) && (s.nextEl && (t = I(s.nextEl),
                        i.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < t.length && 1 === i.$el.find(s.nextEl).length && (t = i.$el.find(s.nextEl))),
                        s.prevEl && (e = I(s.prevEl),
                            i.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < e.length && 1 === i.$el.find(s.prevEl).length && (e = i.$el.find(s.prevEl))),
                        t && 0 < t.length && t.on("click", i.navigation.onNextClick),
                        e && 0 < e.length && e.on("click", i.navigation.onPrevClick),
                        tt.extend(i.navigation, {
                            $nextEl: t,
                            nextEl: t && t[0],
                            $prevEl: e,
                            prevEl: e && e[0]
                        }))
                },
                destroy: function () {
                    var t = this.navigation
                        , e = t.$nextEl
                        , i = t.$prevEl;
                    e && e.length && (e.off("click", this.navigation.onNextClick),
                        e.removeClass(this.params.navigation.disabledClass)),
                        i && i.length && (i.off("click", this.navigation.onPrevClick),
                            i.removeClass(this.params.navigation.disabledClass))
                }
            }
            , L = {
                update: function () {
                    var t = this
                        , e = t.rtl
                        , n = t.params.pagination;
                    if (n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var a, i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, s = t.pagination.$el, o = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        if (t.params.loop ? ((a = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > i - 1 - 2 * t.loopedSlides && (a -= i - 2 * t.loopedSlides),
                            o - 1 < a && (a -= o),
                            a < 0 && "bullets" !== t.params.paginationType && (a = o + a)) : a = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
                            "bullets" === n.type && t.pagination.bullets && 0 < t.pagination.bullets.length) {
                            var r, l, h, c = t.pagination.bullets;
                            if (n.dynamicBullets && (t.pagination.bulletSize = c.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                                s.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"),
                                1 < n.dynamicMainBullets && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += a - t.previousIndex,
                                    t.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)),
                                r = a - t.pagination.dynamicBulletIndex,
                                h = ((l = r + (Math.min(c.length, n.dynamicMainBullets) - 1)) + r) / 2),
                                c.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"),
                                1 < s.length)
                                c.each(function (t, e) {
                                    var i = I(e)
                                        , s = i.index();
                                    s === a && i.addClass(n.bulletActiveClass),
                                        n.dynamicBullets && (r <= s && s <= l && i.addClass(n.bulletActiveClass + "-main"),
                                            s === r && i.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"),
                                            s === l && i.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                                });
                            else if (c.eq(a).addClass(n.bulletActiveClass),
                                n.dynamicBullets) {
                                for (var d = c.eq(r), u = c.eq(l), p = r; p <= l; p += 1)
                                    c.eq(p).addClass(n.bulletActiveClass + "-main");
                                d.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"),
                                    u.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                            }
                            if (n.dynamicBullets) {
                                var f = Math.min(c.length, n.dynamicMainBullets + 4)
                                    , m = (t.pagination.bulletSize * f - t.pagination.bulletSize) / 2 - h * t.pagination.bulletSize
                                    , g = e ? "right" : "left";
                                c.css(t.isHorizontal() ? g : "top", m + "px")
                            }
                        }
                        if ("fraction" === n.type && (s.find("." + n.currentClass).text(n.formatFractionCurrent(a + 1)),
                            s.find("." + n.totalClass).text(n.formatFractionTotal(o))),
                            "progressbar" === n.type) {
                            var v;
                            v = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                            var b = (a + 1) / o
                                , w = 1
                                , y = 1;
                            "horizontal" == v ? w = b : y = b,
                                s.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(t.params.speed)
                        }
                        "custom" === n.type && n.renderCustom ? (s.html(n.renderCustom(t, a + 1, o)),
                            t.emit("paginationRender", t, s[0])) : t.emit("paginationUpdate", t, s[0]),
                            s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](n.lockClass)
                    }
                },
                render: function () {
                    var t = this
                        , e = t.params.pagination;
                    if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
                            , s = t.pagination.$el
                            , n = "";
                        if ("bullets" === e.type) {
                            for (var a = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, o = 0; o < a; o += 1)
                                e.renderBullet ? n += e.renderBullet.call(t, o, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            s.html(n),
                                t.pagination.bullets = s.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                            s.html(n)),
                            "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                                s.html(n)),
                            "custom" !== e.type && t.emit("paginationRender", t.pagination.$el[0])
                    }
                },
                init: function () {
                    var i = this
                        , t = i.params.pagination;
                    if (t.el) {
                        var e = I(t.el);
                        0 !== e.length && (i.params.uniqueNavElements && "string" == typeof t.el && 1 < e.length && 1 === i.$el.find(t.el).length && (e = i.$el.find(t.el)),
                            "bullets" === t.type && t.clickable && e.addClass(t.clickableClass),
                            e.addClass(t.modifierClass + t.type),
                            "bullets" === t.type && t.dynamicBullets && (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                                i.pagination.dynamicBulletIndex = 0,
                                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                            "progressbar" === t.type && t.progressbarOpposite && e.addClass(t.progressbarOppositeClass),
                            t.clickable && e.on("click", "." + t.bulletClass, function (t) {
                                t.preventDefault();
                                var e = I(this).index() * i.params.slidesPerGroup;
                                i.params.loop && (e += i.loopedSlides),
                                    i.slideTo(e)
                            }),
                            tt.extend(i.pagination, {
                                $el: e,
                                el: e[0]
                            }))
                    }
                },
                destroy: function () {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.pagination.$el;
                        e.removeClass(t.hiddenClass),
                            e.removeClass(t.modifierClass + t.type),
                            this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass),
                            t.clickable && e.off("click", "." + t.bulletClass)
                    }
                }
            }
            , $ = {
                setTranslate: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar
                            , e = this.rtlTranslate
                            , i = this.progress
                            , s = t.dragSize
                            , n = t.trackSize
                            , a = t.$dragEl
                            , o = t.$el
                            , r = this.params.scrollbar
                            , l = s
                            , h = (n - s) * i;
                        e ? 0 < (h = -h) ? (l = s - h,
                            h = 0) : n < -h + s && (l = n + h) : h < 0 ? (l = s + h,
                                h = 0) : n < h + s && (l = n - h),
                            this.isHorizontal() ? (et.transforms3d ? a.transform("translate3d(" + h + "px, 0, 0)") : a.transform("translateX(" + h + "px)"),
                                a[0].style.width = l + "px") : (et.transforms3d ? a.transform("translate3d(0px, " + h + "px, 0)") : a.transform("translateY(" + h + "px)"),
                                    a[0].style.height = l + "px"),
                            r.hide && (clearTimeout(this.scrollbar.timeout),
                                o[0].style.opacity = 1,
                                this.scrollbar.timeout = setTimeout(function () {
                                    o[0].style.opacity = 0,
                                        o.transition(400)
                                }, 1e3))
                    }
                },
                setTransition: function (t) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
                },
                updateSize: function () {
                    var t = this;
                    if (t.params.scrollbar.el && t.scrollbar.el) {
                        var e = t.scrollbar
                            , i = e.$dragEl
                            , s = e.$el;
                        i[0].style.width = "",
                            i[0].style.height = "";
                        var n, a = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight, o = t.size / t.virtualSize, r = o * (a / t.size);
                        n = "auto" === t.params.scrollbar.dragSize ? a * o : parseInt(t.params.scrollbar.dragSize, 10),
                            t.isHorizontal() ? i[0].style.width = n + "px" : i[0].style.height = n + "px",
                            s[0].style.display = 1 <= o ? "none" : "",
                            t.params.scrollbar.hide && (s[0].style.opacity = 0),
                            tt.extend(e, {
                                trackSize: a,
                                divider: o,
                                moveDivider: r,
                                dragSize: n
                            }),
                            e.$el[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function (t) {
                    var e, i = this, s = i.scrollbar, n = i.rtlTranslate, a = s.$el, o = s.dragSize, r = s.trackSize;
                    e = ((i.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - a.offset()[i.isHorizontal() ? "left" : "top"] - o / 2) / (r - o),
                        e = Math.max(Math.min(e, 1), 0),
                        n && (e = 1 - e);
                    var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * e;
                    i.updateProgress(l),
                        i.setTranslate(l),
                        i.updateActiveIndex(),
                        i.updateSlidesClasses()
                },
                onDragStart: function (t) {
                    var e = this.params.scrollbar
                        , i = this.scrollbar
                        , s = this.$wrapperEl
                        , n = i.$el
                        , a = i.$dragEl;
                    this.scrollbar.isTouched = !0,
                        t.preventDefault(),
                        t.stopPropagation(),
                        s.transition(100),
                        a.transition(100),
                        i.setDragPosition(t),
                        clearTimeout(this.scrollbar.dragTimeout),
                        n.transition(0),
                        e.hide && n.css("opacity", 1),
                        this.emit("scrollbarDragStart", t)
                },
                onDragMove: function (t) {
                    var e = this.scrollbar
                        , i = this.$wrapperEl
                        , s = e.$el
                        , n = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        e.setDragPosition(t),
                        i.transition(0),
                        s.transition(0),
                        n.transition(0),
                        this.emit("scrollbarDragMove", t))
                },
                onDragEnd: function (t) {
                    var e = this.params.scrollbar
                        , i = this.scrollbar.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
                        e.hide && (clearTimeout(this.scrollbar.dragTimeout),
                            this.scrollbar.dragTimeout = tt.nextTick(function () {
                                i.css("opacity", 0),
                                    i.transition(400)
                            }, 1e3)),
                        this.emit("scrollbarDragEnd", t),
                        e.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function () {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var e = t.scrollbar
                            , i = t.touchEventsTouch
                            , s = t.touchEventsDesktop
                            , n = t.params
                            , a = e.$el[0]
                            , o = !(!et.passiveListener || !n.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            }
                            , r = !(!et.passiveListener || !n.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        et.touch ? (a.addEventListener(i.start, t.scrollbar.onDragStart, o),
                            a.addEventListener(i.move, t.scrollbar.onDragMove, o),
                            a.addEventListener(i.end, t.scrollbar.onDragEnd, r)) : (a.addEventListener(s.start, t.scrollbar.onDragStart, o),
                                m.addEventListener(s.move, t.scrollbar.onDragMove, o),
                                m.addEventListener(s.end, t.scrollbar.onDragEnd, r))
                    }
                },
                disableDraggable: function () {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var e = t.scrollbar
                            , i = t.touchEventsTouch
                            , s = t.touchEventsDesktop
                            , n = t.params
                            , a = e.$el[0]
                            , o = !(!et.passiveListener || !n.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            }
                            , r = !(!et.passiveListener || !n.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        et.touch ? (a.removeEventListener(i.start, t.scrollbar.onDragStart, o),
                            a.removeEventListener(i.move, t.scrollbar.onDragMove, o),
                            a.removeEventListener(i.end, t.scrollbar.onDragEnd, r)) : (a.removeEventListener(s.start, t.scrollbar.onDragStart, o),
                                m.removeEventListener(s.move, t.scrollbar.onDragMove, o),
                                m.removeEventListener(s.end, t.scrollbar.onDragEnd, r))
                    }
                },
                init: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar
                            , e = this.$el
                            , i = this.params.scrollbar
                            , s = I(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === e.find(i.el).length && (s = e.find(i.el));
                        var n = s.find("." + this.params.scrollbar.dragClass);
                        0 === n.length && (n = I('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                            s.append(n)),
                            tt.extend(t, {
                                $el: s,
                                el: s[0],
                                $dragEl: n,
                                dragEl: n[0]
                            }),
                            i.draggable && t.enableDraggable()
                    }
                },
                destroy: function () {
                    this.scrollbar.disableDraggable()
                }
            }
            , N = {
                setTransform: function (t, e) {
                    var i = this.rtl
                        , s = I(t)
                        , n = i ? -1 : 1
                        , a = s.attr("data-swiper-parallax") || "0"
                        , o = s.attr("data-swiper-parallax-x")
                        , r = s.attr("data-swiper-parallax-y")
                        , l = s.attr("data-swiper-parallax-scale")
                        , h = s.attr("data-swiper-parallax-opacity");
                    if (o || r ? (o = o || "0",
                        r = r || "0") : this.isHorizontal() ? (o = a,
                            r = "0") : (r = a,
                                o = "0"),
                        o = 0 <= o.indexOf("%") ? parseInt(o, 10) * e * n + "%" : o * e * n + "px",
                        r = 0 <= r.indexOf("%") ? parseInt(r, 10) * e + "%" : r * e + "px",
                        null != h) {
                        var c = h - (h - 1) * (1 - Math.abs(e));
                        s[0].style.opacity = c
                    }
                    if (null == l)
                        s.transform("translate3d(" + o + ", " + r + ", 0px)");
                    else {
                        var d = l - (l - 1) * (1 - Math.abs(e));
                        s.transform("translate3d(" + o + ", " + r + ", 0px) scale(" + d + ")")
                    }
                },
                setTranslate: function () {
                    var s = this
                        , t = s.$el
                        , e = s.slides
                        , n = s.progress
                        , a = s.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, e) {
                        s.parallax.setTransform(e, n)
                    }),
                        e.each(function (t, e) {
                            var i = e.progress;
                            1 < s.params.slidesPerGroup && "auto" !== s.params.slidesPerView && (i += Math.ceil(t / 2) - n * (a.length - 1)),
                                i = Math.min(Math.max(i, -1), 1),
                                I(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, e) {
                                    s.parallax.setTransform(e, i)
                                })
                        })
                },
                setTransition: function (n) {
                    void 0 === n && (n = this.params.speed),
                        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, e) {
                            var i = I(e)
                                , s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || n;
                            0 === n && (s = 0),
                                i.transition(s)
                        })
                }
            }
            , B = {
                getDistanceBetweenTouches: function (t) {
                    if (t.targetTouches.length < 2)
                        return 1;
                    var e = t.targetTouches[0].pageX
                        , i = t.targetTouches[0].pageY
                        , s = t.targetTouches[1].pageX
                        , n = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - e, 2) + Math.pow(n - i, 2))
                },
                onGestureStart: function (t) {
                    var e = this.params.zoom
                        , i = this.zoom
                        , s = i.gesture;
                    if (i.fakeGestureTouched = !1,
                        i.fakeGestureMoved = !1,
                        !et.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        i.fakeGestureTouched = !0,
                            s.scaleStart = B.getDistanceBetweenTouches(t)
                    }
                    s.$slideEl && s.$slideEl.length || (s.$slideEl = I(t.target).closest(".swiper-slide"),
                        0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
                        s.$imageEl = s.$slideEl.find("img, svg, canvas"),
                        s.$imageWrapEl = s.$imageEl.parent("." + e.containerClass),
                        s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio,
                        0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0),
                            this.zoom.isScaling = !0) : s.$imageEl = void 0
                },
                onGestureChange: function (t) {
                    var e = this.params.zoom
                        , i = this.zoom
                        , s = i.gesture;
                    if (!et.gestures) {
                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                            return;
                        i.fakeGestureMoved = !0,
                            s.scaleMove = B.getDistanceBetweenTouches(t)
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = et.gestures ? t.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale,
                        i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
                        i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)),
                        s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function (t) {
                    var e = this.params.zoom
                        , i = this.zoom
                        , s = i.gesture;
                    if (!et.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                            return;
                        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !g.android)
                            return;
                        i.fakeGestureTouched = !1,
                            i.fakeGestureMoved = !1
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), e.minRatio),
                        s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                        i.currentScale = i.scale,
                        i.isScaling = !1,
                        1 === i.scale && (s.$slideEl = void 0))
                },
                onTouchStart: function (t) {
                    var e = this.zoom
                        , i = e.gesture
                        , s = e.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (g.android && t.preventDefault(),
                        s.isTouched = !0,
                        s.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        s.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function (t) {
                    var e = this.zoom
                        , i = e.gesture
                        , s = e.image
                        , n = e.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
                        s.isTouched && i.$slideEl)) {
                        s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                            s.height = i.$imageEl[0].offsetHeight,
                            s.startX = tt.getTranslate(i.$imageWrapEl[0], "x") || 0,
                            s.startY = tt.getTranslate(i.$imageWrapEl[0], "y") || 0,
                            i.slideWidth = i.$slideEl[0].offsetWidth,
                            i.slideHeight = i.$slideEl[0].offsetHeight,
                            i.$imageWrapEl.transition(0),
                            this.rtl && (s.startX = -s.startX,
                                s.startY = -s.startY));
                        var a = s.width * e.scale
                            , o = s.height * e.scale;
                        if (!(a < i.slideWidth && o < i.slideHeight)) {
                            if (s.minX = Math.min(i.slideWidth / 2 - a / 2, 0),
                                s.maxX = -s.minX,
                                s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                                s.maxY = -s.minY,
                                s.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                s.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                                !s.isMoved && !e.isScaling) {
                                if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                                    return void (s.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                                    return void (s.isTouched = !1)
                            }
                            t.preventDefault(),
                                t.stopPropagation(),
                                s.isMoved = !0,
                                s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                                s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                                s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                                s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                                s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                                s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                                n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x),
                                n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y),
                                n.prevTime || (n.prevTime = Date.now()),
                                n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2,
                                n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2,
                                Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                                Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                                n.prevPositionX = s.touchesCurrent.x,
                                n.prevPositionY = s.touchesCurrent.y,
                                n.prevTime = Date.now(),
                                i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function () {
                    var t = this.zoom
                        , e = t.gesture
                        , i = t.image
                        , s = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved)
                            return i.isTouched = !1,
                                void (i.isMoved = !1);
                        i.isTouched = !1,
                            i.isMoved = !1;
                        var n = 300
                            , a = 300
                            , o = s.x * n
                            , r = i.currentX + o
                            , l = s.y * a
                            , h = i.currentY + l;
                        0 !== s.x && (n = Math.abs((r - i.currentX) / s.x)),
                            0 !== s.y && (a = Math.abs((h - i.currentY) / s.y));
                        var c = Math.max(n, a);
                        i.currentX = r,
                            i.currentY = h;
                        var d = i.width * t.scale
                            , u = i.height * t.scale;
                        i.minX = Math.min(e.slideWidth / 2 - d / 2, 0),
                            i.maxX = -i.minX,
                            i.minY = Math.min(e.slideHeight / 2 - u / 2, 0),
                            i.maxY = -i.minY,
                            i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                            i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                            e.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function () {
                    var t = this.zoom
                        , e = t.gesture;
                    e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        e.$imageWrapEl.transform("translate3d(0,0,0)"),
                        t.scale = 1,
                        t.currentScale = 1,
                        e.$slideEl = void 0,
                        e.$imageEl = void 0,
                        e.$imageWrapEl = void 0)
                },
                toggle: function (t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e.in(t)
                },
                in: function (t) {
                    var e, i, s, n, a, o, r, l, h, c, d, u, p, f, m, g, v = this.zoom, b = this.params.zoom, w = v.gesture, y = v.image;
                    w.$slideEl || (w.$slideEl = this.clickedSlide ? I(this.clickedSlide) : this.slides.eq(this.activeIndex),
                        w.$imageEl = w.$slideEl.find("img, svg, canvas"),
                        w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)),
                        w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass),
                            i = void 0 === y.touchesStart.x && t ? (e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                                "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (e = y.touchesStart.x,
                                    y.touchesStart.y),
                            v.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
                            v.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
                            t ? (m = w.$slideEl[0].offsetWidth,
                                g = w.$slideEl[0].offsetHeight,
                                s = w.$slideEl.offset().left + m / 2 - e,
                                n = w.$slideEl.offset().top + g / 2 - i,
                                r = w.$imageEl[0].offsetWidth,
                                l = w.$imageEl[0].offsetHeight,
                                h = r * v.scale,
                                c = l * v.scale,
                                p = -(d = Math.min(m / 2 - h / 2, 0)),
                                f = -(u = Math.min(g / 2 - c / 2, 0)),
                                (a = s * v.scale) < d && (a = d),
                                p < a && (a = p),
                                (o = n * v.scale) < u && (o = u),
                                f < o && (o = f)) : o = a = 0,
                            w.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + o + "px,0)"),
                            w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")"))
                },
                out: function () {
                    var t = this.zoom
                        , e = this.params.zoom
                        , i = t.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? I(this.clickedSlide) : this.slides.eq(this.activeIndex),
                        i.$imageEl = i.$slideEl.find("img, svg, canvas"),
                        i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)),
                        i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
                            t.currentScale = 1,
                            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            i.$slideEl.removeClass("" + e.zoomedSlideClass),
                            i.$slideEl = void 0)
                },
                enable: function () {
                    var t = this
                        , e = t.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var i = !("touchstart" !== t.touchEvents.start || !et.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        et.gestures ? (t.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, i),
                            t.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, i),
                            t.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, ".swiper-slide", e.onGestureStart, i),
                                t.$wrapperEl.on(t.touchEvents.move, ".swiper-slide", e.onGestureChange, i),
                                t.$wrapperEl.on(t.touchEvents.end, ".swiper-slide", e.onGestureEnd, i)),
                            t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove)
                    }
                },
                disable: function () {
                    var t = this
                        , e = t.zoom;
                    if (e.enabled) {
                        t.zoom.enabled = !1;
                        var i = !("touchstart" !== t.touchEvents.start || !et.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        et.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, i),
                            t.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, i),
                            t.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", e.onGestureStart, i),
                                t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", e.onGestureChange, i),
                                t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", e.onGestureEnd, i)),
                            t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove)
                    }
                }
            }
            , W = {
                loadInSlide: function (t, l) {
                    void 0 === l && (l = !0);
                    var h = this
                        , c = h.params.lazy;
                    if (void 0 !== t && 0 !== h.slides.length) {
                        var d = h.virtual && h.params.virtual.enabled ? h.$wrapperEl.children("." + h.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : h.slides.eq(t)
                            , e = d.find("." + c.elementClass + ":not(." + c.loadedClass + "):not(." + c.loadingClass + ")");
                        !d.hasClass(c.elementClass) || d.hasClass(c.loadedClass) || d.hasClass(c.loadingClass) || (e = e.add(d[0])),
                            0 !== e.length && e.each(function (t, e) {
                                var s = I(e);
                                s.addClass(c.loadingClass);
                                var n = s.attr("data-background")
                                    , a = s.attr("data-src")
                                    , o = s.attr("data-srcset")
                                    , r = s.attr("data-sizes");
                                h.loadImage(s[0], a || n, o, r, !1, function () {
                                    if (null != h && h && (!h || h.params) && !h.destroyed) {
                                        if (n ? (s.css("background-image", 'url("' + n + '")'),
                                            s.removeAttr("data-background")) : (o && (s.attr("srcset", o),
                                                s.removeAttr("data-srcset")),
                                                r && (s.attr("sizes", r),
                                                    s.removeAttr("data-sizes")),
                                                a && (s.attr("src", a),
                                                    s.removeAttr("data-src"))),
                                            s.addClass(c.loadedClass).removeClass(c.loadingClass),
                                            d.find("." + c.preloaderClass).remove(),
                                            h.params.loop && l) {
                                            var t = d.attr("data-swiper-slide-index");
                                            if (d.hasClass(h.params.slideDuplicateClass)) {
                                                var e = h.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + h.params.slideDuplicateClass + ")");
                                                h.lazy.loadInSlide(e.index(), !1)
                                            } else {
                                                var i = h.$wrapperEl.children("." + h.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                h.lazy.loadInSlide(i.index(), !1)
                                            }
                                        }
                                        h.emit("lazyImageReady", d[0], s[0])
                                    }
                                }),
                                    h.emit("lazyImageLoad", d[0], s[0])
                            })
                    }
                },
                load: function () {
                    var s = this
                        , e = s.$wrapperEl
                        , i = s.params
                        , n = s.slides
                        , t = s.activeIndex
                        , a = s.virtual && i.virtual.enabled
                        , o = i.lazy
                        , r = i.slidesPerView;
                    function l(t) {
                        if (a) {
                            if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length)
                                return !0
                        } else if (n[t])
                            return !0;
                        return !1
                    }
                    function h(t) {
                        return a ? I(t).attr("data-swiper-slide-index") : I(t).index()
                    }
                    if ("auto" === r && (r = 0),
                        s.lazy.initialImageLoaded || (s.lazy.initialImageLoaded = !0),
                        s.params.watchSlidesVisibility)
                        e.children("." + i.slideVisibleClass).each(function (t, e) {
                            var i = a ? I(e).attr("data-swiper-slide-index") : I(e).index();
                            s.lazy.loadInSlide(i)
                        });
                    else if (1 < r)
                        for (var c = t; c < t + r; c += 1)
                            l(c) && s.lazy.loadInSlide(c);
                    else
                        s.lazy.loadInSlide(t);
                    if (o.loadPrevNext)
                        if (1 < r || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                            for (var d = o.loadPrevNextAmount, u = r, p = Math.min(t + u + Math.max(d, u), n.length), f = Math.max(t - Math.max(u, d), 0), m = t + r; m < p; m += 1)
                                l(m) && s.lazy.loadInSlide(m);
                            for (var g = f; g < t; g += 1)
                                l(g) && s.lazy.loadInSlide(g)
                        } else {
                            var v = e.children("." + i.slideNextClass);
                            0 < v.length && s.lazy.loadInSlide(h(v));
                            var b = e.children("." + i.slidePrevClass);
                            0 < b.length && s.lazy.loadInSlide(h(b))
                        }
                }
            }
            , F = {
                LinearSpline: function (t, e) {
                    var i, s, n, a, o;
                    return this.x = t,
                        this.y = e,
                        this.lastIndex = t.length - 1,
                        this.interpolate = function (t) {
                            return t ? (o = function (t, e) {
                                for (s = -1,
                                    i = t.length; 1 < i - s;)
                                    t[n = i + s >> 1] <= e ? s = n : i = n;
                                return i
                            }(this.x, t),
                                a = o - 1,
                                (t - this.x[a]) * (this.y[o] - this.y[a]) / (this.x[o] - this.x[a]) + this.y[a]) : 0
                        }
                        ,
                        this
                },
                getInterpolateFunction: function (t) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new F.LinearSpline(this.slidesGrid, t.slidesGrid) : new F.LinearSpline(this.snapGrid, t.snapGrid))
                },
                setTranslate: function (t, e) {
                    var i, s, n = this, a = n.controller.control;
                    function o(t) {
                        var e = n.rtlTranslate ? -n.translate : n.translate;
                        "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(t),
                            s = -n.controller.spline.interpolate(-e)),
                            s && "container" !== n.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (n.maxTranslate() - n.minTranslate()),
                                s = (e - n.minTranslate()) * i + t.minTranslate()),
                            n.params.controller.inverse && (s = t.maxTranslate() - s),
                            t.updateProgress(s),
                            t.setTranslate(s, n),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                    }
                    if (Array.isArray(a))
                        for (var r = 0; r < a.length; r += 1)
                            a[r] !== e && a[r] instanceof _ && o(a[r]);
                    else
                        a instanceof _ && e !== a && o(a)
                },
                setTransition: function (e, t) {
                    var i, s = this, n = s.controller.control;
                    function a(t) {
                        t.setTransition(e, s),
                            0 !== e && (t.transitionStart(),
                                t.params.autoHeight && tt.nextTick(function () {
                                    t.updateAutoHeight()
                                }),
                                t.$wrapperEl.transitionEnd(function () {
                                    n && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                                        t.transitionEnd())
                                }))
                    }
                    if (Array.isArray(n))
                        for (i = 0; i < n.length; i += 1)
                            n[i] !== t && n[i] instanceof _ && a(n[i]);
                    else
                        n instanceof _ && t !== n && a(n)
                }
            }
            , R = {
                makeElFocusable: function (t) {
                    return t.attr("tabIndex", "0"),
                        t
                },
                addElRole: function (t, e) {
                    return t.attr("role", e),
                        t
                },
                addElLabel: function (t, e) {
                    return t.attr("aria-label", e),
                        t
                },
                disableEl: function (t) {
                    return t.attr("aria-disabled", !0),
                        t
                },
                enableEl: function (t) {
                    return t.attr("aria-disabled", !1),
                        t
                },
                onEnterKey: function (t) {
                    var e = this
                        , i = e.params.a11y;
                    if (13 === t.keyCode) {
                        var s = I(t.target);
                        e.navigation && e.navigation.$nextEl && s.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(),
                            e.isEnd ? e.a11y.notify(i.lastSlideMessage) : e.a11y.notify(i.nextSlideMessage)),
                            e.navigation && e.navigation.$prevEl && s.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(),
                                e.isBeginning ? e.a11y.notify(i.firstSlideMessage) : e.a11y.notify(i.prevSlideMessage)),
                            e.pagination && s.is("." + e.params.pagination.bulletClass) && s[0].click()
                    }
                },
                notify: function (t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""),
                        e.html(t))
                },
                updateNavigation: function () {
                    if (!this.params.loop) {
                        var t = this.navigation
                            , e = t.$nextEl
                            , i = t.$prevEl;
                        i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                            e && 0 < e.length && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
                    }
                },
                updatePagination: function () {
                    var s = this
                        , n = s.params.a11y;
                    s.pagination && s.params.pagination.clickable && s.pagination.bullets && s.pagination.bullets.length && s.pagination.bullets.each(function (t, e) {
                        var i = I(e);
                        s.a11y.makeElFocusable(i),
                            s.a11y.addElRole(i, "button"),
                            s.a11y.addElLabel(i, n.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
                    })
                },
                init: function () {
                    var t = this;
                    t.$el.append(t.a11y.liveRegion);
                    var e, i, s = t.params.a11y;
                    t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                        t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl),
                        e && (t.a11y.makeElFocusable(e),
                            t.a11y.addElRole(e, "button"),
                            t.a11y.addElLabel(e, s.nextSlideMessage),
                            e.on("keydown", t.a11y.onEnterKey)),
                        i && (t.a11y.makeElFocusable(i),
                            t.a11y.addElRole(i, "button"),
                            t.a11y.addElLabel(i, s.prevSlideMessage),
                            i.on("keydown", t.a11y.onEnterKey)),
                        t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.on("keydown", "." + t.params.pagination.bulletClass, t.a11y.onEnterKey)
                },
                destroy: function () {
                    var t, e, i = this;
                    i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(),
                        i.navigation && i.navigation.$nextEl && (t = i.navigation.$nextEl),
                        i.navigation && i.navigation.$prevEl && (e = i.navigation.$prevEl),
                        t && t.off("keydown", i.a11y.onEnterKey),
                        e && e.off("keydown", i.a11y.onEnterKey),
                        i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
                }
            }
            , Y = {
                init: function () {
                    if (this.params.history) {
                        if (!J.history || !J.history.pushState)
                            return this.params.history.enabled = !1,
                                void (this.params.hashNavigation.enabled = !0);
                        var t = this.history;
                        t.initialized = !0,
                            t.paths = Y.getPathValues(),
                            (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit),
                                this.params.history.replaceState || J.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function () {
                    this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function () {
                    this.history.paths = Y.getPathValues(),
                        this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function () {
                    var t = J.location.pathname.slice(1).split("/").filter(function (t) {
                        return "" !== t
                    })
                        , e = t.length;
                    return {
                        key: t[e - 2],
                        value: t[e - 1]
                    }
                },
                setHistory: function (t, e) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var i = this.slides.eq(e)
                            , s = Y.slugify(i.attr("data-history"));
                        J.location.pathname.includes(t) || (s = t + "/" + s);
                        var n = J.history.state;
                        n && n.value === s || (this.params.history.replaceState ? J.history.replaceState({
                            value: s
                        }, null, s) : J.history.pushState({
                            value: s
                        }, null, s))
                    }
                },
                slugify: function (t) {
                    return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function (t, e, i) {
                    if (e)
                        for (var s = 0, n = this.slides.length; s < n; s += 1) {
                            var a = this.slides.eq(s);
                            if (Y.slugify(a.attr("data-history")) === e && !a.hasClass(this.params.slideDuplicateClass)) {
                                var o = a.index();
                                this.slideTo(o, t, i)
                            }
                        }
                    else
                        this.slideTo(0, t, i)
                }
            }
            , V = {
                onHashCange: function () {
                    var t = m.location.hash.replace("#", "");
                    if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                        var e = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                        if (void 0 === e)
                            return;
                        this.slideTo(e)
                    }
                },
                setHash: function () {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && J.history && J.history.replaceState)
                            J.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var t = this.slides.eq(this.activeIndex)
                                , e = t.attr("data-hash") || t.attr("data-history");
                            m.location.hash = e || ""
                        }
                },
                init: function () {
                    var t = this;
                    if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                        t.hashNavigation.initialized = !0;
                        var e = m.location.hash.replace("#", "");
                        if (e)
                            for (var i = 0, s = t.slides.length; i < s; i += 1) {
                                var n = t.slides.eq(i);
                                if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(t.params.slideDuplicateClass)) {
                                    var a = n.index();
                                    t.slideTo(a, 0, t.params.runCallbacksOnInit, !0)
                                }
                            }
                        t.params.hashNavigation.watchState && I(J).on("hashchange", t.hashNavigation.onHashCange)
                    }
                },
                destroy: function () {
                    this.params.hashNavigation.watchState && I(J).off("hashchange", this.hashNavigation.onHashCange)
                }
            }
            , j = {
                run: function () {
                    var t = this
                        , e = t.slides.eq(t.activeIndex)
                        , i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
                        t.autoplay.timeout = tt.nextTick(function () {
                            t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(),
                                t.slidePrev(t.params.speed, !0, !0),
                                t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                                    t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0),
                                        t.emit("autoplay")) : t.params.loop ? (t.loopFix(),
                                            t.slideNext(t.params.speed, !0, !0),
                                            t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0),
                                                t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0),
                                                    t.emit("autoplay"))
                        }, i)
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0,
                        this.emit("autoplayStart"),
                        this.autoplay.run(),
                        !0)
                },
                stop: function () {
                    return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
                        this.autoplay.timeout = void 0),
                        this.autoplay.running = !1,
                        this.emit("autoplayStop"),
                        !0)
                },
                pause: function (t) {
                    var e = this;
                    e.autoplay.running && (e.autoplay.paused || (e.autoplay.timeout && clearTimeout(e.autoplay.timeout),
                        e.autoplay.paused = !0,
                        0 !== t && e.params.autoplay.waitForTransition ? (e.$wrapperEl[0].addEventListener("transitionend", e.autoplay.onTransitionEnd),
                            e.$wrapperEl[0].addEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd)) : (e.autoplay.paused = !1,
                                e.autoplay.run())))
                }
            }
            , q = {
                setTranslate: function () {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) {
                        var i = this.slides.eq(e)
                            , s = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (s -= this.translate);
                        var n = 0;
                        this.isHorizontal() || (n = s,
                            s = 0);
                        var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: a
                        }).transform("translate3d(" + s + "px, " + n + "px, 0px)")
                    }
                },
                setTransition: function (t) {
                    var i = this
                        , e = i.slides
                        , s = i.$wrapperEl;
                    if (e.transition(t),
                        i.params.virtualTranslate && 0 !== t) {
                        var n = !1;
                        e.transitionEnd(function () {
                            if (!n && i && !i.destroyed) {
                                n = !0,
                                    i.animating = !1;
                                for (var t = ["webkitTransitionEnd", "transitionend"], e = 0; e < t.length; e += 1)
                                    s.trigger(t[e])
                            }
                        })
                    }
                }
            }
            , X = {
                setTranslate: function () {
                    var t, e = this, i = e.$el, s = e.$wrapperEl, n = e.slides, a = e.width, o = e.height, r = e.rtlTranslate, l = e.size, h = e.params.cubeEffect, c = e.isHorizontal(), d = e.virtual && e.params.virtual.enabled, u = 0;
                    h.shadow && (c ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = I('<div class="swiper-cube-shadow"></div>'),
                        s.append(t)),
                        t.css({
                            height: a + "px"
                        })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = I('<div class="swiper-cube-shadow"></div>'),
                            i.append(t)));
                    for (var p = 0; p < n.length; p += 1) {
                        var f = n.eq(p)
                            , m = p;
                        d && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                        var g = 90 * m
                            , v = Math.floor(g / 360);
                        r && (g = -g,
                            v = Math.floor(-g / 360));
                        var b = Math.max(Math.min(f[0].progress, 1), -1)
                            , w = 0
                            , y = 0
                            , _ = 0;
                        m % 4 == 0 ? (w = 4 * -v * l,
                            _ = 0) : (m - 1) % 4 == 0 ? (w = 0,
                                _ = 4 * -v * l) : (m - 2) % 4 == 0 ? (w = l + 4 * v * l,
                                    _ = l) : (m - 3) % 4 == 0 && (w = -l,
                                        _ = 3 * l + 4 * l * v),
                            r && (w = -w),
                            c || (y = w,
                                w = 0);
                        var x = "rotateX(" + (c ? 0 : -g) + "deg) rotateY(" + (c ? g : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + _ + "px)";
                        if (b <= 1 && -1 < b && (u = 90 * m + 90 * b,
                            r && (u = 90 * -m - 90 * b)),
                            f.transform(x),
                            h.slideShadows) {
                            var k = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                                , C = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                            0 === k.length && (k = I('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                                f.append(k)),
                                0 === C.length && (C = I('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                                    f.append(C)),
                                k.length && (k[0].style.opacity = Math.max(-b, 0)),
                                C.length && (C[0].style.opacity = Math.max(b, 0))
                        }
                    }
                    if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }),
                        h.shadow)
                        if (c)
                            t.transform("translate3d(0px, " + (a / 2 + h.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.shadowScale + ")");
                        else {
                            var T = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                                , S = 1.5 - (Math.sin(2 * T * Math.PI / 360) / 2 + Math.cos(2 * T * Math.PI / 360) / 2)
                                , E = h.shadowScale
                                , D = h.shadowScale / S
                                , P = h.shadowOffset;
                            t.transform("scale3d(" + E + ", 1, " + D + ") translate3d(0px, " + (o / 2 + P) + "px, " + -o / 2 / D + "px) rotateX(-90deg)")
                        }
                    var M = z.isSafari || z.isUiWebView ? -l / 2 : 0;
                    s.transform("translate3d(0px,0," + M + "px) rotateX(" + (e.isHorizontal() ? 0 : u) + "deg) rotateY(" + (e.isHorizontal() ? -u : 0) + "deg)")
                },
                setTransition: function (t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
                }
            }
            , G = {
                setTranslate: function () {
                    for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var s = t.eq(i)
                            , n = s[0].progress;
                        this.params.flipEffect.limitRotation && (n = Math.max(Math.min(s[0].progress, 1), -1));
                        var a = -180 * n
                            , o = 0
                            , r = -s[0].swiperSlideOffset
                            , l = 0;
                        if (this.isHorizontal() ? e && (a = -a) : (l = r,
                            o = -a,
                            a = r = 0),
                            s[0].style.zIndex = -Math.abs(Math.round(n)) + t.length,
                            this.params.flipEffect.slideShadows) {
                            var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                                , c = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                            0 === h.length && (h = I('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                                s.append(h)),
                                0 === c.length && (c = I('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    s.append(c)),
                                h.length && (h[0].style.opacity = Math.max(-n, 0)),
                                c.length && (c[0].style.opacity = Math.max(n, 0))
                        }
                        s.transform("translate3d(" + r + "px, " + l + "px, 0px) rotateX(" + o + "deg) rotateY(" + a + "deg)")
                    }
                },
                setTransition: function (t) {
                    var i = this
                        , e = i.slides
                        , s = i.activeIndex
                        , n = i.$wrapperEl;
                    if (e.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        i.params.virtualTranslate && 0 !== t) {
                        var a = !1;
                        e.eq(s).transitionEnd(function () {
                            if (!a && i && !i.destroyed) {
                                a = !0,
                                    i.animating = !1;
                                for (var t = ["webkitTransitionEnd", "transitionend"], e = 0; e < t.length; e += 1)
                                    n.trigger(t[e])
                            }
                        })
                    }
                }
            }
            , U = {
                setTranslate: function () {
                    for (var t = this.width, e = this.height, i = this.slides, s = this.$wrapperEl, n = this.slidesSizesGrid, a = this.params.coverflowEffect, o = this.isHorizontal(), r = this.translate, l = o ? t / 2 - r : e / 2 - r, h = o ? a.rotate : -a.rotate, c = a.depth, d = 0, u = i.length; d < u; d += 1) {
                        var p = i.eq(d)
                            , f = n[d]
                            , m = (l - p[0].swiperSlideOffset - f / 2) / f * a.modifier
                            , g = o ? h * m : 0
                            , v = o ? 0 : h * m
                            , b = -c * Math.abs(m)
                            , w = o ? 0 : a.stretch * m
                            , y = o ? a.stretch * m : 0;
                        Math.abs(y) < .001 && (y = 0),
                            Math.abs(w) < .001 && (w = 0),
                            Math.abs(b) < .001 && (b = 0),
                            Math.abs(g) < .001 && (g = 0),
                            Math.abs(v) < .001 && (v = 0);
                        var _ = "translate3d(" + y + "px," + w + "px," + b + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg)";
                        if (p.transform(_),
                            p[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                            a.slideShadows) {
                            var x = o ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top")
                                , k = o ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = I('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                                p.append(x)),
                                0 === k.length && (k = I('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                                    p.append(k)),
                                x.length && (x[0].style.opacity = 0 < m ? m : 0),
                                k.length && (k[0].style.opacity = 0 < -m ? -m : 0)
                        }
                    }
                    (et.pointerEvents || et.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = l + "px 50%")
                },
                setTransition: function (t) {
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                }
            }
            , K = {
                init: function () {
                    var t = this
                        , e = t.params.thumbs
                        , i = t.constructor;
                    e.swiper instanceof i ? (t.thumbs.swiper = e.swiper,
                        tt.extend(t.thumbs.swiper.originalParams, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }),
                        tt.extend(t.thumbs.swiper.params, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })) : tt.isObject(e.swiper) && (t.thumbs.swiper = new i(tt.extend({}, e.swiper, {
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })),
                            t.thumbs.swiperCreated = !0),
                        t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
                        t.thumbs.swiper.on("tap", t.thumbs.onThumbClick)
                },
                onThumbClick: function () {
                    var t = this
                        , e = t.thumbs.swiper;
                    if (e) {
                        var i = e.clickedIndex
                            , s = e.clickedSlide;
                        if (!(s && I(s).hasClass(t.params.thumbs.slideThumbActiveClass) || null == i)) {
                            var n;
                            if (n = e.params.loop ? parseInt(I(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i,
                                t.params.loop) {
                                var a = t.activeIndex;
                                t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                                    t._clientLeft = t.$wrapperEl[0].clientLeft,
                                    a = t.activeIndex);
                                var o = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index()
                                    , r = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
                                n = void 0 === o ? r : void 0 === r ? o : r - a < a - o ? r : o
                            }
                            t.slideTo(n)
                        }
                    }
                },
                update: function (t) {
                    var e = this
                        , i = e.thumbs.swiper;
                    if (i) {
                        var s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                        if (e.realIndex !== i.realIndex) {
                            var n, a = i.activeIndex;
                            if (i.params.loop) {
                                i.slides.eq(a).hasClass(i.params.slideDuplicateClass) && (i.loopFix(),
                                    i._clientLeft = i.$wrapperEl[0].clientLeft,
                                    a = i.activeIndex);
                                var o = i.slides.eq(a).prevAll('[data-swiper-slide-index="' + e.realIndex + '"]').eq(0).index()
                                    , r = i.slides.eq(a).nextAll('[data-swiper-slide-index="' + e.realIndex + '"]').eq(0).index();
                                n = void 0 === o ? r : void 0 === r ? o : r - a == a - o ? a : r - a < a - o ? r : o
                            } else
                                n = e.realIndex;
                            i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = a < n ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : a < n && (n = n - s + 1),
                                i.slideTo(n, t ? 0 : void 0))
                        }
                        var l = 1
                            , h = e.params.thumbs.slideThumbActiveClass;
                        if (1 < e.params.slidesPerView && !e.params.centeredSlides && (l = e.params.slidesPerView),
                            i.slides.removeClass(h),
                            i.params.loop)
                            for (var c = 0; c < l; c += 1)
                                i.$wrapperEl.children('[data-swiper-slide-index="' + (e.realIndex + c) + '"]').addClass(h);
                        else
                            for (var d = 0; d < l; d += 1)
                                i.slides.eq(e.realIndex + d).addClass(h)
                    }
                }
            }
            , Z = [x, k, C, T, E, P, O, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function () {
                    tt.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: A.enable.bind(this),
                            disable: A.disable.bind(this),
                            handle: A.handle.bind(this),
                            handleMouseEnter: A.handleMouseEnter.bind(this),
                            handleMouseLeave: A.handleMouseLeave.bind(this),
                            lastScrollTime: tt.now()
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function () {
                        this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            navigation: {
                                init: H.init.bind(this),
                                update: H.update.bind(this),
                                destroy: H.destroy.bind(this),
                                onNextClick: H.onNextClick.bind(this),
                                onPrevClick: H.onPrevClick.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.navigation.init(),
                                this.navigation.update()
                        },
                        toEdge: function () {
                            this.navigation.update()
                        },
                        fromEdge: function () {
                            this.navigation.update()
                        },
                        destroy: function () {
                            this.navigation.destroy()
                        },
                        click: function (t) {
                            var e, i = this, s = i.navigation, n = s.$nextEl, a = s.$prevEl;
                            !i.params.navigation.hideOnClick || I(t.target).is(a) || I(t.target).is(n) || (n ? e = n.hasClass(i.params.navigation.hiddenClass) : a && (e = a.hasClass(i.params.navigation.hiddenClass)),
                                !0 === e ? i.emit("navigationShow", i) : i.emit("navigationHide", i),
                                n && n.toggleClass(i.params.navigation.hiddenClass),
                                a && a.toggleClass(i.params.navigation.hiddenClass))
                        }
                    }
                }, {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (t) {
                                return t
                            },
                            formatFractionTotal: function (t) {
                                return t
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock"
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            pagination: {
                                init: L.init.bind(this),
                                render: L.render.bind(this),
                                update: L.update.bind(this),
                                destroy: L.destroy.bind(this),
                                dynamicBulletIndex: 0
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.pagination.init(),
                                this.pagination.render(),
                                this.pagination.update()
                        },
                        activeIndexChange: function () {
                            this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                        },
                        snapIndexChange: function () {
                            this.params.loop || this.pagination.update()
                        },
                        slidesLengthChange: function () {
                            this.params.loop && (this.pagination.render(),
                                this.pagination.update())
                        },
                        snapGridLengthChange: function () {
                            this.params.loop || (this.pagination.render(),
                                this.pagination.update())
                        },
                        destroy: function () {
                            this.pagination.destroy()
                        },
                        click: function (t) {
                            var e = this;
                            e.params.pagination.el && e.params.pagination.hideOnClick && 0 < e.pagination.$el.length && !I(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow", e) : e.emit("paginationHide", e),
                                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))
                        }
                    }
                }, {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create: function () {
                        var t = this;
                        tt.extend(t, {
                            scrollbar: {
                                init: $.init.bind(t),
                                destroy: $.destroy.bind(t),
                                updateSize: $.updateSize.bind(t),
                                setTranslate: $.setTranslate.bind(t),
                                setTransition: $.setTransition.bind(t),
                                enableDraggable: $.enableDraggable.bind(t),
                                disableDraggable: $.disableDraggable.bind(t),
                                setDragPosition: $.setDragPosition.bind(t),
                                onDragStart: $.onDragStart.bind(t),
                                onDragMove: $.onDragMove.bind(t),
                                onDragEnd: $.onDragEnd.bind(t),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.scrollbar.init(),
                                this.scrollbar.updateSize(),
                                this.scrollbar.setTranslate()
                        },
                        update: function () {
                            this.scrollbar.updateSize()
                        },
                        resize: function () {
                            this.scrollbar.updateSize()
                        },
                        observerUpdate: function () {
                            this.scrollbar.updateSize()
                        },
                        setTranslate: function () {
                            this.scrollbar.setTranslate()
                        },
                        setTransition: function (t) {
                            this.scrollbar.setTransition(t)
                        },
                        destroy: function () {
                            this.scrollbar.destroy()
                        }
                    }
                }, {
                    name: "parallax",
                    params: {
                        parallax: {
                            enabled: !1
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            parallax: {
                                setTransform: N.setTransform.bind(this),
                                setTranslate: N.setTranslate.bind(this),
                                setTransition: N.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                                this.originalParams.watchSlidesProgress = !0)
                        },
                        init: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTranslate: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTransition: function (t) {
                            this.params.parallax.enabled && this.parallax.setTransition(t)
                        }
                    }
                }, {
                    name: "zoom",
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed"
                        }
                    },
                    create: function () {
                        var s = this
                            , e = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    $imageEl: void 0,
                                    $imageWrapEl: void 0,
                                    maxRatio: 3
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {}
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0
                                }
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (t) {
                            e[t] = B[t].bind(s)
                        }),
                            tt.extend(s, {
                                zoom: e
                            });
                        var n = 1;
                        Object.defineProperty(s.zoom, "scale", {
                            get: function () {
                                return n
                            },
                            set: function (t) {
                                if (n !== t) {
                                    var e = s.zoom.gesture.$imageEl ? s.zoom.gesture.$imageEl[0] : void 0
                                        , i = s.zoom.gesture.$slideEl ? s.zoom.gesture.$slideEl[0] : void 0;
                                    s.emit("zoomChange", t, e, i)
                                }
                                n = t
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.zoom.enabled && this.zoom.enable()
                        },
                        destroy: function () {
                            this.zoom.disable()
                        },
                        touchStart: function (t) {
                            this.zoom.enabled && this.zoom.onTouchStart(t)
                        },
                        touchEnd: function (t) {
                            this.zoom.enabled && this.zoom.onTouchEnd(t)
                        },
                        doubleTap: function (t) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
                        },
                        transitionEnd: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                        }
                    }
                }, {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader"
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            lazy: {
                                initialImageLoaded: !1,
                                load: W.load.bind(this),
                                loadInSlide: W.loadInSlide.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                        },
                        init: function () {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                        },
                        scroll: function () {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                        },
                        resize: function () {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        scrollbarDragMove: function () {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        transitionStart: function () {
                            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                        },
                        transitionEnd: function () {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                        }
                    }
                }, {
                    name: "controller",
                    params: {
                        controller: {
                            control: void 0,
                            inverse: !1,
                            by: "slide"
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            controller: {
                                control: this.params.controller.control,
                                getInterpolateFunction: F.getInterpolateFunction.bind(this),
                                setTranslate: F.setTranslate.bind(this),
                                setTransition: F.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        update: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                                delete this.controller.spline)
                        },
                        resize: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                                delete this.controller.spline)
                        },
                        observerUpdate: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                                delete this.controller.spline)
                        },
                        setTranslate: function (t, e) {
                            this.controller.control && this.controller.setTranslate(t, e)
                        },
                        setTransition: function (t, e) {
                            this.controller.control && this.controller.setTransition(t, e)
                        }
                    }
                }, {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}"
                        }
                    },
                    create: function () {
                        var e = this;
                        tt.extend(e, {
                            a11y: {
                                liveRegion: I('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                            }
                        }),
                            Object.keys(R).forEach(function (t) {
                                e.a11y[t] = R[t].bind(e)
                            })
                    },
                    on: {
                        init: function () {
                            this.params.a11y.enabled && (this.a11y.init(),
                                this.a11y.updateNavigation())
                        },
                        toEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        fromEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        paginationUpdate: function () {
                            this.params.a11y.enabled && this.a11y.updatePagination()
                        },
                        destroy: function () {
                            this.params.a11y.enabled && this.a11y.destroy()
                        }
                    }
                }, {
                    name: "history",
                    params: {
                        history: {
                            enabled: !1,
                            replaceState: !1,
                            key: "slides"
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            history: {
                                init: Y.init.bind(this),
                                setHistory: Y.setHistory.bind(this),
                                setHistoryPopState: Y.setHistoryPopState.bind(this),
                                scrollToSlide: Y.scrollToSlide.bind(this),
                                destroy: Y.destroy.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.history.enabled && this.history.init()
                        },
                        destroy: function () {
                            this.params.history.enabled && this.history.destroy()
                        },
                        transitionEnd: function () {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                        }
                    }
                }, {
                    name: "hash-navigation",
                    params: {
                        hashNavigation: {
                            enabled: !1,
                            replaceState: !1,
                            watchState: !1
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            hashNavigation: {
                                initialized: !1,
                                init: V.init.bind(this),
                                destroy: V.destroy.bind(this),
                                setHash: V.setHash.bind(this),
                                onHashCange: V.onHashCange.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.init()
                        },
                        destroy: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                        },
                        transitionEnd: function () {
                            this.hashNavigation.initialized && this.hashNavigation.setHash()
                        }
                    }
                }, {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create: function () {
                        var e = this;
                        tt.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: j.run.bind(e),
                                start: j.start.bind(e),
                                stop: j.stop.bind(e),
                                pause: j.pause.bind(e),
                                onTransitionEnd: function (t) {
                                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                        e.autoplay.paused = !1,
                                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.autoplay.enabled && this.autoplay.start()
                        },
                        beforeTransitionStart: function (t, e) {
                            this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
                        },
                        sliderFirstMove: function () {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                        },
                        destroy: function () {
                            this.autoplay.running && this.autoplay.stop()
                        }
                    }
                }, {
                    name: "effect-fade",
                    params: {
                        fadeEffect: {
                            crossFade: !1
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            fadeEffect: {
                                setTranslate: q.setTranslate.bind(this),
                                setTransition: q.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("fade" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "fade");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                tt.extend(this.params, t),
                                    tt.extend(this.originalParams, t)
                            }
                        },
                        setTranslate: function () {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate()
                        },
                        setTransition: function (t) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "effect-cube",
                    params: {
                        cubeEffect: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            cubeEffect: {
                                setTranslate: X.setTranslate.bind(this),
                                setTransition: X.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("cube" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "cube"),
                                    this.classNames.push(this.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0
                                };
                                tt.extend(this.params, t),
                                    tt.extend(this.originalParams, t)
                            }
                        },
                        setTranslate: function () {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate()
                        },
                        setTransition: function (t) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "effect-flip",
                    params: {
                        flipEffect: {
                            slideShadows: !0,
                            limitRotation: !0
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            flipEffect: {
                                setTranslate: G.setTranslate.bind(this),
                                setTransition: G.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("flip" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "flip"),
                                    this.classNames.push(this.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                tt.extend(this.params, t),
                                    tt.extend(this.originalParams, t)
                            }
                        },
                        setTranslate: function () {
                            "flip" === this.params.effect && this.flipEffect.setTranslate()
                        },
                        setTransition: function (t) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "effect-coverflow",
                    params: {
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            coverflowEffect: {
                                setTranslate: U.setTranslate.bind(this),
                                setTransition: U.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                this.params.watchSlidesProgress = !0,
                                this.originalParams.watchSlidesProgress = !0)
                        },
                        setTranslate: function () {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                        },
                        setTransition: function (t) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "thumbs",
                    params: {
                        thumbs: {
                            swiper: null,
                            slideThumbActiveClass: "swiper-slide-thumb-active",
                            thumbsContainerClass: "swiper-container-thumbs"
                        }
                    },
                    create: function () {
                        tt.extend(this, {
                            thumbs: {
                                swiper: null,
                                init: K.init.bind(this),
                                update: K.update.bind(this),
                                onThumbClick: K.onThumbClick.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            var t = this.params.thumbs;
                            t && t.swiper && (this.thumbs.init(),
                                this.thumbs.update(!0))
                        },
                        slideChange: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        update: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        resize: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        observerUpdate: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        setTransition: function (t) {
                            var e = this.thumbs.swiper;
                            e && e.setTransition(t)
                        },
                        beforeDestroy: function () {
                            var t = this.thumbs.swiper;
                            t && this.thumbs.swiperCreated && t && t.destroy()
                        }
                    }
                }];
        return void 0 === _.use && (_.use = _.Class.use,
            _.installModule = _.Class.installModule),
            _.use(Z),
            _
    }),
    $(document).ready(function () {
        $(window).width() < 1229 && $(".dropmenu").click(function () {
            $(this).toggleClass("opened")
        }),
            "closed" == localStorage.getItem("campaignBarClose") && $(".campaign-bar").remove(),
            "closed" == localStorage.getItem("cookieBarClose") ? $(".cookie-policy").remove() : $(".cookie-policy").addClass("open"),
            $("#nav-icon2").click(function () {
                $(this).toggleClass("open"),
                    $("body").toggleClass("menu-open"),
                    $(".black-layer").toggleClass("active")
            }),
            $(".black-layer").click(function () {
                $("#nav-icon2").removeClass("open"),
                    $("body").removeClass("menu-open"),
                    $(".black-layer").removeClass("active"),
                    popupClose()
            }),
            768 < $(window).width() && ($(".main-nav>ul>li.dropmenu").mouseover(function () {
                $(".main-header").addClass("menu-open")
            }),
                $(".main-nav>ul>li.dropmenu").mouseout(function () {
                    $(".main-header").removeClass("menu-open")
                })),
            flag = !0,
            $(".checkbox-group .other-button").click(function () {
                $(".checkbox-group .toggle-animate").toggleClass("active"),
                    flag ? ($(this).text("daha az uzantı >>"),
                        flag = !1) : ($(this).text("daha fazla uzantı >>"),
                            flag = !0)
            }),
            flag = !0,
            $(".footer-text .button-toggle").click(function () {
                $(".footer-text .toggle-animation").toggleClass("active"),
                    flag ? ($(this).text("kapat"),
                        flag = !1) : ($(this).text("daha fazla oku >>"),
                            flag = !0)
            });
        new Swiper("#domain-brand .swiper-container", {
            slidesPerView: "auto",
            loop: !0,
            speed: 300,
            autoplay: {
                delay: 3e3
            }
        });
        var e = new Swiper("#home-slider-1 .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 300,
            autoplay: {
                delay: 4e3
            },
            on: {
                slideChangeTransitionEnd: function (t) {
                    var e = $("#home-slider-1 .swiper-slide-active").index();
                    $("#home-slider-1 .slider-pagination li").removeClass("active"),
                        $("#home-slider-1 .slider-pagination li").eq(e).addClass("active")
                }
            }
        });
        $("#home-slider-1 .slider-pagination li").hover(function () {
            var t = $(this).index();
            $("#home-slider-1 .slider-pagination li").removeClass("active"),
                $(this).addClass("active"),
                e.slideTo(t)
        });
        var i = new Swiper("#campaign-slider-1 .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            on: {
                slideChangeTransitionEnd: function (t) {
                    var e = $("#campaign-slider-1 .swiper-slide-active").index();
                    $("#campaign-slider-1 .slider-pagination li").removeClass("active"),
                        $("#campaign-slider-1 .slider-pagination li").eq(e).addClass("active")
                }
            }
        });
        $("#campaign-slider-1 .slider-pagination li").hover(function () {
            var t = $(this).index();
            $("#campaign-slider-1 .slider-pagination li").removeClass("active"),
                $(this).addClass("active"),
                i.slideTo(t)
        });
        var s, n;
        new Swiper(".blog-area .swiper-container", {
            slidesPerView: 1,
            direction: "vertical",
            height: 47,
            slidesPerColumn: 1,
            spaceBetween: 0,
            loop: !0,
            autoplay: {
                delay: 6e3
            },
            navigation: {
                nextEl: ".blog-area .next-button",
                prevEl: ".blog-area .prev-button"
            }
        });
        function t() {
            var t = window.location.href
                , e = [];
            -1 != t.search("#tab-") && (e = t.split("#")[1].split("-"),
                $(".tab-view .tab").removeClass("active"),
                $(".tab-view .tab[data-tab=" + e[1] + "]").addClass("active"),
                $(".tab-view .content").removeClass("active"),
                $(".tab-view .content-" + e[1]).addClass("active"))
        }
        $("body").on("click", ".tab-view .tab", function (t) {
            s = $(this).data("tab"),
                n = $(this).parents(".tab-view"),
                $(this).parents(".tab-view > .tab"),
                $(this).parent(".tabs").children(".tab").each(function (t) {
                    $(this).removeClass("active")
                }),
                $(this).addClass("active"),
                n.children(".contents").children(".content").each(function (t) {
                    $(this).removeClass("active")
                }),
                n.children(".contents").children(".content-" + s).addClass("active")
        }),
            t(),
            window.onhashchange = function () {
                t()
            }
            ;
        var a;
        new Swiper("#slider-1 .swiper-container", {
            slidesPerView: 3,
            speed: 300,
            spaceBetween: 14,
            observer: !0,
            observeParents: !0,
            followFinger: !1,
            navigation: {
                nextEl: "#slider-1  .next-button",
                prevEl: "#slider-1  .prev-button"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                700: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                1e3: {
                    slidesPerView: 2
                }
            }
        }),
            new Swiper("#slider-2 .swiper-container", {
                slidesPerView: 3,
                speed: 300,
                spaceBetween: 14,
                observer: !0,
                observeParents: !0,
                followFinger: !1,
                navigation: {
                    nextEl: "#slider-2  .next-button",
                    prevEl: "#slider-2  .prev-button"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1e3: {
                        slidesPerView: 2
                    }
                }
            }),
            new Swiper("#slider-3 .swiper-container", {
                slidesPerView: 3,
                speed: 300,
                spaceBetween: 14,
                observer: !0,
                observeParents: !0,
                followFinger: !1,
                navigation: {
                    nextEl: "#slider-3  .next-button",
                    prevEl: "#slider-3  .prev-button"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1e3: {
                        slidesPerView: 2
                    }
                }
            }),
            new Swiper("#slider-4 .swiper-container", {
                slidesPerView: 3,
                speed: 300,
                spaceBetween: 14,
                observer: !0,
                observeParents: !0,
                followFinger: !1,
                navigation: {
                    nextEl: "#slider-4  .next-button",
                    prevEl: "#slider-4  .prev-button"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1e3: {
                        slidesPerView: 2
                    }
                }
            });
        $(".filters-param li").click(function () {
            a = $(this).data("filters"),
                $(".filters-param li").each(function () {
                    $(this).removeClass("current")
                }),
                $(this).addClass("current"),
                $(".filters .domain-item").each(function (t, e) {
                    $(this).hide(),
                        !$(this).hasClass(a) && "all" != a || $(this).show()
                })
        }),
            flag = !0,
            $(".other-detail-wrapper .other-button").click(function () {
                $(".other-detail-wrapper .toggle-animate").toggleClass("active"),
                    flag ? ($(this).text("daha az detay"),
                        flag = !1) : ($(this).text("detaylı whois bilgisi"),
                            flag = !0)
            }),
            $(".password .pass-eye").click(function () {
                $(".password .pass-eye .eye").toggleClass("icon-eye icon-eye-closed");
                var t = $(".password input");
                "password" == t.attr("type") ? t.attr("type", "text") : t.attr("type", "password")
            }),
            $(".alert .close").click(function () {
                $(this).parent(".alert").addClass("passive")
            });
        var o = new Swiper("#comments-slider-1 .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            autoplay: {
                delay: 4e3
            },
            on: {
                slideChangeTransitionEnd: function (t) {
                    var e = $("#comments-slider-1 .swiper-slide-active").index();
                    $("#comments-slider-1 .slider-pagination li").removeClass("active"),
                        $("#comments-slider-1 .slider-pagination li").eq(e).addClass("active")
                }
            }
        });
        $("#comments-slider-1 .slider-pagination li").hover(function () {
            var t = $(this).index();
            $("#comments-slider-1 .slider-pagination li").removeClass("active"),
                $(this).addClass("active"),
                o.slideTo(t)
        }),
            $(".platform a").click(function () {
                var t = $(this).parent().attr("id");
                $("#" + t + ' input[type="hidden"]').val($(this).data("name")),
                    $("#" + t).children().each(function (t) {
                        $(this).removeClass("active")
                    }),
                    $(this).addClass("active")
            }),
            $(".other-property-title").click(function () {
                $(this).next(".property-list").toggleClass("active")
            }),
            $(".address-item .address-area").click(function () {
                $(".address-item").removeClass("current"),
                    $(this).parent(".address-item").addClass("current")
            }),
            $("body").on("click", ".accordion .item .title", function () {
                $(this).parents(".item").hasClass("active") ? $(this).parents(".item").removeClass("active") : ($(".accordion .item").removeClass("active"),
                    $(this).parents(".item").addClass("active"))
            }),
            $(".installment-wrapper .installment-item").click(function () {
                $(".installment-item").removeClass("current"),
                    $(this).addClass("current")
            }),
            $(".show-other-list").click(function () {
                $(this).next(".other-content").toggleClass("active")
            }),
            flag = !0,
            $(".button-other-text").click(function () {
                $(".other-text").toggleClass("active"),
                    flag ? ($(this).text("kapat"),
                        flag = !1) : ($(this).text("daha fazla oku >>"),
                            flag = !0)
            }),
            $("#sticky-header").sticky({
                topSpacing: 0
            }),
            $("#sticky-header").on("sticky-end", function () {
                $("#sticky-header").parent().css("height", $(".header-center").height())
            });
        $(document).click(function () {
            $(".subdropmenu").removeClass("active")
        }),
            $("body").on("click", ".subdropmenu-wrapper", function (t) {
                t.stopPropagation();
                var e = $(this).children(".subdropmenu");
                $(".subdropmenu-wrapper .subdropmenu").not(e).each(function () {
                    $(this).hasClass("active") && $(this).removeClass("active")
                }),
                    e.toggleClass("active")
            }),
            $(".balloon-trigger").click(function () {
                $(this).parents(".help-balloon").toggleClass("active")
            }),
            $(".help-balloon .close-button").click(function () {
                $(this).parents(".help-balloon").removeClass("active")
            })
    });

document.addEventListener("DOMContentLoaded", function () {
    var labelElement = document.querySelector('label[for="909"]');

    if (labelElement) {
        labelElement.remove();
    }
});
