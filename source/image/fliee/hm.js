(function() {
    var h = {},
        mt = {},
        c = {
            id: "78098ace9b5a133287a06dbad7b1322f",
            dm: ["meiye.art"],
            js: "tongji.baidu.com/hm-web/js/",
            etrk: [],
            cetrk: [],
            cptrk: [],
            icon: '',
            ctrk: ["%5b%22https%3a%5c%2f%5c%2fmeiye.art%22%2c%22https%3a%5c%2f%5c%2fmeiye.art%5c%2fweb%5c%2fcanvas%3fid%3d*%26pn%3d*%22%2c%22https%3a%5c%2f%5c%2fmeiye.art%5c%2fweb%5c%2fdetail%3fid%3d*%22%5d"],
            nv: -1,
            vdur: 1800000,
            age: 31536000000,
            rec: 0,
            rp: [],
            trust: 0,
            vcard: 0,
            qiao: 0,
            lxb: 0,
            kbtrk: 0,
            pt: 0,
            spa: 0,
            oc: 0,
            aet: '',
            hca: 'AE53906A91EE8914',
            conv: 0,
            med: 0,
            cvcc: '',
            cvcf: [],
            apps: ''
        };
    var t = void 0,
        v = !0,
        w = null,
        x = !1;
    mt.cookie = {};
    mt.cookie.set = function(a, b, d) {
        var e;
        d.N && (e = new Date, e.setTime(e.getTime() + d.N));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.Nc ? "; secure" : "")
    };
    mt.cookie.get = function(a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : w
    };
    mt.cookie.kc = function(a, b) {
        try {
            var d = "Hm_ck_" + +new Date;
            mt.cookie.set(d, "is-cookie-enabled", {
                domain: a,
                path: b,
                N: t
            });
            var e = "is-cookie-enabled" === mt.cookie.get(d) ? "1" : "0";
            mt.cookie.set(d, "", {
                domain: a,
                path: b,
                N: -1
            });
            return e
        } catch (f) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function(a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.Xa = function(a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.F = function(a) {
        return mt.lang.d(a, "String")
    };
    mt.lang.isArray = function(a) {
        return mt.lang.d(a, "Array")
    };
    mt.lang.h = function(a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.lang.trim = function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.D = function(a, b) {
        var d = x;
        if (a == w || !mt.lang.d(a, "Array") || b === t) return d;
        if (Array.prototype.indexOf) d = -1 !== a.indexOf(b);
        else
            for (var e = 0; e < a.length; e++)
                if (a[e] === b) {
                    d = v;
                    break
                } return d
    };
    mt.url = {};
    mt.url.j = function(a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : w
    };
    mt.url.Ic = function(a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : w
    };
    mt.url.Pb = function(a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : w
    };
    mt.url.R = function(a) {
        return (a = mt.url.Pb(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.ya = function(a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : w
    };
    mt.url.Ya = function(a, b) {
        a = a.replace(/^https?:\/\//, "");
        return 0 === a.indexOf(b)
    };
    mt.url.Ea = function(a, b) {
        a = "." + a.replace(/:\d+/, "");
        b = "." + b.replace(/:\d+/, "");
        var d = a.indexOf(b);
        return -1 < d && d + b.length === a.length
    };
    (function() {
        var a = mt.lang,
            b = mt.url;
        mt.g = {};
        mt.g.Hb = function(a) {
            return document.getElementById(a)
        };
        mt.g.wa = function(a) {
            if (!a) return w;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCQ!")) return a;
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var e = a.split(">"), b = document.body, n = e.length - 1; 0 <= n; n--)
                    if (-1 < e[n].indexOf("#")) {
                        var g = e[n].split("#")[1];
                        (b = document.getElementById(g)) || (b = document.getElementById(decodeURIComponent(g)));
                        e = e.splice(n + 1, e.length - (n + 1));
                        break
                    }
                for (a =
                    0; b && a < e.length;) {
                    var l = String(e[a]).toLowerCase();
                    if (!("html" === l || "body" === l)) {
                        var n = 0,
                            q = e[a].match(/\[(\d+)\]/i),
                            g = [];
                        if (q) n = q[1] - 1, l = l.split("[")[0];
                        else if (1 !== b.childNodes.length) {
                            for (var r = 0, u = 0, m = b.childNodes.length; u < m; u++) {
                                var s = b.childNodes[u];
                                1 === s.nodeType && s.nodeName.toLowerCase() === l && r++;
                                if (1 < r) return w
                            }
                            if (1 !== r) return w
                        }
                        for (r = 0; r < b.childNodes.length; r++) 1 === b.childNodes[r].nodeType && b.childNodes[r].nodeName.toLowerCase() === l && g.push(b.childNodes[r]);
                        if (!g[n]) return w;
                        b = g[n]
                    }
                    a++
                }
                return b
            } catch (k) {
                return w
            }
        };
        mt.g.ya = function(a, e) {
            var b = [],
                n = [];
            if (!a) return n;
            for (; a.parentNode != w;) {
                for (var g = 0, l = 0, q = a.parentNode.childNodes.length, r = 0; r < q; r++) {
                    var u = a.parentNode.childNodes[r];
                    if (u.nodeName === a.nodeName && (g++, u === a && (l = g), 0 < l && 1 < g)) break
                }
                if ((q = "" !== a.id) && e) {
                    b.unshift("#" + encodeURIComponent(a.id));
                    break
                } else q && (q = "#" + encodeURIComponent(a.id), q = 0 < b.length ? q + ">" + b.join(">") : q, n.push(q)), b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + l + "]" : ""));
                a = a.parentNode
            }
            n.push(b.join(">"));
            return n
        };
        mt.g.ha = function(a) {
            return (a = mt.g.ya(a, v)) && a.length ? String(a[0]) : ""
        };
        mt.g.Sb = function(a) {
            return mt.g.ya(a, x)
        };
        mt.g.Qa = function(a) {
            var e;
            for (e = "A";
                (a = a.parentNode) && 1 == a.nodeType;)
                if (a.tagName == e) return a;
            return w
        };
        mt.g.Lb = function(a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.g.Ra = function(a) {
            var e = {
                top: 0,
                left: 0
            };
            if (!a) return e;
            var b = mt.g.Lb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (e = a.getBoundingClientRect());
            return {
                top: e.top + (window.pageYOffset || b.scrollTop) -
                    (b.clientTop || 0),
                left: e.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }
        };
        mt.g.getAttribute = function(a, e) {
            var b = a.getAttribute && a.getAttribute(e) || w;
            if (!b && a.attributes && a.attributes.length)
                for (var n = a.attributes, g = n.length, l = 0; l < g; l++) n[l].nodeName === e && (b = n[l].nodeValue);
            return b
        };
        mt.g.Q = function(a) {
            var b = "document";
            a.tagName !== t && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.g.Wb = function(b) {
            var e = "";
            b.textContent ? e = a.trim(b.textContent) : b.innerText && (e = a.trim(b.innerText));
            e && (e = e.replace(/\s+/g,
                " ").substring(0, 255));
            return e
        };
        mt.g.P = function(d, e) {
            var f;
            a.F(d) && 0 === String(d).indexOf("!HMCQ!") ? (f = String(d), f = b.j(document.location.href, f.substring(6, f.length))) : a.F(d) || (f = mt.g.Q(d), "input" === f && e && ("button" === d.type || "submit" === d.type) ? f = a.trim(d.value) || "" : "input" === f && !e && "password" !== d.type ? f = a.trim(d.value) || "" : "img" === f ? (f = mt.g.getAttribute, f = f(d, "alt") || f(d, "title") || f(d, "src")) : f = "body" === f || "html" === f ? ["(hm-default-content-for-", f, ")"].join("") : mt.g.Wb(d));
            return String(f || "").substring(0,
                255)
        };
        (function() {
            (mt.g.qc = function() {
                function a() {
                    if (!a.ka) {
                        a.ka = v;
                        for (var b = 0, e = n.length; b < e; b++) n[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (f) {
                        setTimeout(b, 1);
                        return
                    }
                    a()
                }
                var f = x,
                    n = [],
                    g;
                document.addEventListener ? g = function() {
                    document.removeEventListener("DOMContentLoaded", g, x);
                    a()
                } : document.attachEvent && (g = function() {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
                });
                (function() {
                    if (!f)
                        if (f = v, "complete" === document.readyState) a.ka = v;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", g, x), window.addEventListener("load", a, x);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", g);
                        window.attachEvent("onload", a);
                        var l = x;
                        try {
                            l = window.frameElement == w
                        } catch (q) {}
                        document.documentElement.doScroll && l && b()
                    }
                })();
                return function(b) {
                    a.ka ? b() : n.push(b)
                }
            }()).ka = x
        })();
        return mt.g
    })();
    mt.event = {};
    mt.event.e = function(a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function(b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, x)
    };
    mt.event.preventDefault = function(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = x
    };
    (function() {
        var a = mt.event;
        mt.f = {};
        mt.f.Ca = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.f.Hc = function() {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.f.Kc = function() {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (a) {
                return x
            }
        };
        mt.f.cookieEnabled = navigator.cookieEnabled;
        mt.f.javaEnabled = navigator.javaEnabled();
        mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.f.sc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.f.colorDepth = window.screen.colorDepth || 0;
        mt.f.Ub = function() {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.f.Ua = function() {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.f.C =
            function() {
                return mt.f.Ub() + mt.f.Ua()
            };
        mt.f.nb = 0;
        mt.f.Yb = function() {
            var a = document;
            return parseInt(window.innerWidth || a.documentElement.clientWidth || a.body.offsetWidth || 0, 10)
        };
        mt.f.orientation = 0;
        (function() {
            function b() {
                var a = 0;
                window.orientation !== t && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== t) && (a = screen.orientation.angle);
                mt.f.orientation = a;
                mt.f.nb = mt.f.Yb()
            }
            b();
            a.e(window, "orientationchange", b)
        })();
        return mt.f
    })();
    mt.G = {};
    mt.G.parse = function(a) {
        return (new Function("return (" + a + ")"))()
    };
    mt.G.stringify = function() {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
                var b = d[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }
        var d = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(e) {
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return a(e);
                case "boolean":
                    return String(e);
                default:
                    if (e === w) return "null";
                    if (e instanceof Array) {
                        var f = ["["],
                            d = e.length,
                            g, l, q;
                        for (l = 0; l < d; l++) switch (q = e[l], typeof q) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                g && f.push(","), f.push(mt.G.stringify(q)), g = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (e instanceof Date) return '"' + e.getFullYear() + "-" + b(e.getMonth() + 1) + "-" + b(e.getDate()) + "T" + b(e.getHours()) + ":" + b(e.getMinutes()) + ":" + b(e.getSeconds()) + '"';
                    g = ["{"];
                    l = mt.G.stringify;
                    for (d in e)
                        if (Object.prototype.hasOwnProperty.call(e, d)) switch (q =
                            e[d], typeof q) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                f && g.push(","), f = 1, g.push(l(d) + ":" + l(q))
                        }
                    g.push("}");
                    return g.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.ra = function() {
        if (!mt.localStorage.m) try {
            mt.localStorage.m = document.createElement("input"), mt.localStorage.m.type = "hidden", mt.localStorage.m.style.display = "none", mt.localStorage.m.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.m)
        } catch (a) {
            return x
        }
        return v
    };
    mt.localStorage.set = function(a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.ra() && (mt.localStorage.m.expires = e.toUTCString(), mt.localStorage.m.load(document.location.hostname), mt.localStorage.m.setAttribute(a, b), mt.localStorage.m.save(document.location.hostname))
        } catch (f) {}
    };
    mt.localStorage.get = function(a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"),
                    d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.ra()) try {
            return mt.localStorage.m.load(document.location.hostname), mt.localStorage.m.getAttribute(a)
        } catch (e) {}
        return w
    };
    mt.localStorage.remove = function(a) {
        if (window.localStorage) window.localStorage.removeItem(a);
        else if (mt.localStorage.ra()) try {
            mt.localStorage.m.load(document.location.hostname), mt.localStorage.m.removeAttribute(a), mt.localStorage.m.save(document.location.hostname)
        } catch (b) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function(a, b) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(a, b)
        } catch (d) {}
    };
    mt.sessionStorage.get = function(a) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(a) : w
        } catch (b) {
            return w
        }
    };
    mt.sessionStorage.remove = function(a) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(a)
        } catch (b) {}
    };
    mt.jb = {};
    mt.jb.log = function(a, b) {
        var d = new Image,
            e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = function() {
            d.onload = w;
            d = window[e] = w;
            b && b(a)
        };
        d.src = a
    };
    mt.lb = {};
    mt.lb.Xb = function() {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {}
        return a
    };
    h.w = {
        Jc: "http://tongji.baidu.com/hm-web/welcome/ico",
        Ha: "hm.baidu.com/hm.gif",
        tb: /^(tongji|hmcdn).baidu.com$/,
        Bc: "tongji.baidu.com",
        bc: "hmmd",
        dc: "hmpl",
        Ec: "utm_medium",
        ac: "hmkw",
        Gc: "utm_term",
        Zb: "hmci",
        Dc: "utm_content",
        ec: "hmsr",
        Fc: "utm_source",
        $b: "hmcu",
        Cc: "utm_campaign",
        M: 0,
        J: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        la: "https:",
        Lc: 0,
        yb: 6E5,
        Mc: 6E5,
        tc: 5E3,
        zb: 5,
        ca: 1024,
        xb: 1,
        X: 2147483647,
        mb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
        T: v,
        Na: ["a", "input", "button"],
        Ka: {
            id: "data-hm-id",
            ba: "data-hm-class",
            aa: "data-hm-xpath",
            content: "data-hm-content",
            oa: "data-hm-tag",
            link: "data-hm-link"
        },
        Ma: "data-hm-enabled",
        La: "data-hm-disabled",
        nc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        eb: ["UrlChangeTracker", "OcpcCbHm"]
    };
    (function() {
        var a = {
            B: {},
            e: function(a, d) {
                this.B[a] = this.B[a] || [];
                this.B[a].push(d)
            },
            K: function(a, d) {
                this.B[a] = this.B[a] || [];
                for (var e = this.B[a].length, f = 0; f < e; f++) this.B[a][f](d)
            }
        };
        return h.s = a
    })();
    (function() {
        var a = mt.lang,
            b = /^https?:\/\//,
            d = {
                Kb: function(a) {
                    var b;
                    try {
                        b = JSON.parse(decodeURIComponent(a[0]))
                    } catch (d) {}
                    return b
                },
                Za: function(a, b) {
                    return d.$a(h.c && h.c.b && h.c.b.u, a, b) || d.$a(document.location.href, a, b)
                },
                $a: function(a, f, d) {
                    if (a === t) return x;
                    b.test(f) || (a = a.replace(b, ""));
                    f = f.replace(/\/$/, "");
                    a = a.replace(/\/$/, "");
                    d && (a = a.replace(/^(https?:\/\/)?www\./, "$1"));
                    return RegExp("^" + f.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(a)
                },
                O: function(b, f) {
                    var n = d.Kb(b);
                    if (!a.d(n,
                            "Undefined")) {
                        if (a.d(n, "Array")) {
                            for (var g = 0; g < n.length; g++)
                                if (d.Za(n[g], f)) return v;
                            return x
                        }
                        if (a.d(n, "Object")) {
                            var g = [],
                                l;
                            for (l in n) n.hasOwnProperty(l) && d.Za(l, f) && (g = g.concat(n[l]));
                            return g
                        }
                    }
                }
            };
        return h.ea = d
    })();
    (function() {
        function a(a, e) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            b.d(e, "Function") && (f.readyState ? f.onreadystatechange = function() {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = w, e()
            } : f.onload = function() {
                e()
            });
            f.src = a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(f, n)
        }
        var b = mt.lang;
        return h.load = a
    })();
    (function() {
        var a = mt.url,
            b = mt.cookie,
            d = mt.localStorage,
            e = mt.sessionStorage,
            f = {
                getData: function(a) {
                    try {
                        return b.get(a) || e.get(a) || d.get(a)
                    } catch (g) {}
                },
                setData: function(a, g, l) {
                    try {
                        b.set(a, g, {
                            domain: f.ga(),
                            path: f.va(),
                            N: l
                        }), l ? d.set(a, g, l) : e.set(a, g)
                    } catch (q) {}
                },
                removeData: function(a) {
                    try {
                        b.set(a, "", {
                            domain: f.ga(),
                            path: f.va(),
                            N: -1
                        }), e.remove(a), d.remove(a)
                    } catch (g) {}
                },
                ga: function() {
                    for (var b = document.location.hostname, e = 0, f = c.dm.length; e < f; e++)
                        if (a.Ea(b, c.dm[e])) return c.dm[e].replace(/(:\d+)?[/?#].*/,
                            "");
                    return b
                },
                va: function() {
                    for (var b = 0, e = c.dm.length; b < e; b++) {
                        var f = c.dm[b];
                        if (-1 < f.indexOf("/") && a.Ya(document.location.href, f)) return f.replace(/^[^/]+(\/.*)/, "$1") + "/"
                    }
                    return "/"
                }
            };
        return h.da = f
    })();
    (function() {
        var a = mt.lang,
            b = mt.G,
            d = h.da,
            e = {
                pageview: {},
                session: {},
                autoEventTracking: {},
                customEvent: {},
                user: {}
            },
            f = {
                user: 1,
                session: 2,
                pageview: 3,
                autoEventTracking: 3,
                customEvent: 3,
                others: 3
            },
            n = ["session", "user"],
            g = "Hm_up_" + c.id,
            l = {
                init: function() {
                    l.hc()
                },
                hc: function() {
                    try {
                        var q = b.parse(decodeURIComponent(d.getData(g)));
                        a.d(q, "Object") && (e.user = q)
                    } catch (r) {}
                },
                t: function(a) {
                    var b = {};
                    e[a] !== t && (b = e[a]);
                    a = this.za();
                    for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f]);
                    return a
                },
                za: function() {
                    for (var a = {}, b, f = n.length -
                            1; 0 <= f; f--) {
                        b = e[n[f]];
                        for (var m in b) b.hasOwnProperty(m) && (a[m] = b[m])
                    }
                    return a
                },
                setProperty: function(f, r, g) {
                    var m = e[f];
                    if (a.d(m, "Object") && a.d(r, "Object")) {
                        for (var s in r)
                            if (r.hasOwnProperty(s)) {
                                var k = a.h(String(s));
                                if (g || !/^_/.test(k) && !/_$/.test(k) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)) {
                                    var p = r[s];
                                    if (p == w) delete m[k];
                                    else {
                                        if (a.d(p, "Object") || a.d(p, "Array")) p = b.stringify(p);
                                        p = a.h(String(p));
                                        l.jc(f, k, p) && (m[k] = {
                                            value: p,
                                            scope: l.Ta(f)
                                        })
                                    }
                                }
                            }
                        "user" === f && l.Fa()
                    }
                },
                n: function(b) {
                    b !== t && ("userId" ===
                        b && a.d(e.user, "Object") ? (delete e.user.uid_, l.Fa()) : "user" === b && a.d(e.user, "Object") ? (b = e.user.uid_, e.user = b === t ? {} : {
                            uid_: b
                        }, l.Fa()) : e[b] !== t && (e[b] = {}))
                },
                Fa: function() {
                    try {
                        d.setData(g, encodeURIComponent(b.stringify(e.user)), c.age)
                    } catch (a) {}
                },
                jc: function(a, b, f) {
                    var m = v,
                        s = e[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(f)).length) m = x;
                    else {
                        var k = s[b];
                        s[b] = {
                            value: f,
                            scope: l.Ta(a)
                        };
                        a = l.I(l.t(a));
                        2048 < encodeURIComponent(a).length && (k !== t ? s[b] = k : delete s[b], m = x)
                    }
                    return m
                },
                I: function(a) {
                    var b = [],
                        e, m;
                    for (m in a) a.hasOwnProperty(m) && (e = [m, a[m].value], (1 === a[m].scope || 2 === a[m].scope) && e.push(a[m].scope), b.push(e.join("*")));
                    return b.join("!")
                },
                Ta: function(a) {
                    a = f[a];
                    return a !== t ? a : f.others
                }
            };
        return h.L = l
    })();
    (function() {
        var a = mt.g,
            b = mt.lang,
            d = h.s,
            e = h.ea,
            f = h.L,
            n = f.I;
        if (b.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var g = {
                cb: {},
                pa: {},
                init: function() {
                    for (var a, f = e.O(c.cptrk) || [], r = 0; r < f.length; r++)
                        if (a = f[r], a.a !== t && b.d(a.a, "Object")) {
                            a = a.a;
                            for (var d in a) a.hasOwnProperty(d) && (g.pa[d] = String(a[d]))
                        }
                },
                bb: function() {
                    var b, e, f;
                    for (f in g.pa)
                        if (g.pa.hasOwnProperty(f) && g.cb[f] === t && (b = g.pa[f], b = a.wa(b))) e = e === t ? {} : e, e[f] = a.P(b, x), g.cb[f] = v;
                    return e
                },
                Aa: function() {
                    var a = g.bb();
                    a && g.vc(a)
                },
                gc: function() {
                    "MutationObserver" in
                    window && document.body ? (new MutationObserver(g.Aa)).observe(document.body, {
                        childList: v,
                        subtree: v
                    }) : window.setInterval(g.Aa, 15E3)
                },
                vc: function(a) {
                    if (b.d(a, "Object")) {
                        f.setProperty("pageview", a);
                        a = h.c.b.p;
                        var e = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = n(f.t("pageview"));
                        h.c.l();
                        h.c.b.p = a;
                        h.c.b.ep = e;
                        f.n("pageview")
                    }
                }
            };
            g.init();
            d.e("pv-b", function() {
                var a = g.bb();
                a && f.setProperty("pageview", a)
            });
            g.gc();
            a.qc(g.Aa)
        }
    })();
    (function() {
        var a = mt.lang,
            b = mt.g,
            d = h.ea,
            e = {
                fa: function(a, n) {
                    return function(g) {
                        var l = g.target || g.srcElement;
                        if (l) {
                            var q = d.O(n) || [],
                                r = l.getAttribute(a.qa);
                            g = g.clientX + ":" + g.clientY;
                            if (r && r === g) l.removeAttribute(a.qa);
                            else if (0 < q.length && (l = b.Sb(l)) && l.length)
                                if (q = l.length, r = l[l.length - 1], 1E4 > q * r.split(">").length)
                                    for (r = 0; r < q; r++) e.ib(a, l[r]);
                                else e.ib(a, r)
                        }
                    }
                },
                ib: function(b, e) {
                    for (var g = {}, d = String(e).split(">").length, q = 0; q < d; q++) g[e] = "", e = e.substring(0, e.lastIndexOf(">"));
                    b && (a.d(b, "Object") && b.Oa) &&
                        b.Oa(g)
                },
                rc: function(a, b) {
                    return function(e) {
                        (e.target || e.srcElement).setAttribute(a.qa, e.clientX + ":" + e.clientY);
                        a && a.o && (b ? a.o(b) : a.o("#" + encodeURIComponent(this.id), e.type))
                    }
                }
            };
        return h.Db = e
    })();
    (function() {
        var a = mt.g,
            b = mt.event,
            d = mt.lang,
            e = h.w,
            f = h.ea,
            n = h.Db,
            g = h.L,
            l = g.I,
            q = {
                qa: "HM_ce",
                pb: function() {
                    if (c.cetrk && 0 < c.cetrk.length) {
                        b.e(document, "click", n.fa(q, c.cetrk));
                        for (var e = f.O(c.cetrk) || [], d = 0, m = e.length; d < m; d++) {
                            var s = e[d],
                                k = s.p || ""; - 1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.Hb(k)) && b.e(k, "click", n.rc(q, s)))
                        }
                    }
                },
                Oa: function(a) {
                    for (var b = f.O(c.cetrk) || [], e = 0; e < b.length; e++) {
                        var s = b[e],
                            k = q.Nb(s.p, a);
                        k && q.o(s, k)
                    }
                },
                Nb: function(a, b) {
                    a = String(a);
                    if (0 < a.indexOf("*")) {
                        var e =
                            RegExp("^" + a.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"),
                            f;
                        for (f in b)
                            if (b.hasOwnProperty(f) && e.test(f)) return f;
                        return w
                    }
                    return b.hasOwnProperty(a) ? a : w
                },
                o: function(b, e) {
                    h.c.b.et = 7;
                    var m = b && b.k || "",
                        m = d.h(m),
                        f = {};
                    if (b && b.a && d.d(b.a, "Object")) {
                        var k = b.a,
                            p;
                        for (p in k)
                            if (k.hasOwnProperty(p)) {
                                var y = q.Tb(k[p] || "", e),
                                    y = y ? a.P(y, x) : "";
                                f[p] = y
                            }
                    }
                    f = q.Ib(f, e || b && b.p);
                    f._iden = m;
                    g.setProperty("customEvent", f);
                    h.c.b.ep = "";
                    h.c.b.p = l(g.t("customEvent"));
                    h.c.l();
                    h.c.b.p = "";
                    g.n("customEvent")
                },
                Ib: function(b, f) {
                    var m = a.wa(f),
                        d = e.Ka;
                    m && (c.aet && c.aet.length ? (b.ei_ = a.getAttribute(m, d.id) || a.getAttribute(m, "id") || "", b.ec_ = a.getAttribute(m, d.ba) || a.getAttribute(m, "class") || "", b.ex_ = a.getAttribute(m, d.aa) || a.ha(m), b.en_ = a.getAttribute(m, d.content) || a.P(m, v), b.et_ = a.getAttribute(m, d.oa) || a.Q(m), b.el_ = a.getAttribute(m, d.link) || a.getAttribute(m, "href") || "") : (b.ex_ = a.getAttribute(m, d.aa) || a.ha(m), b.en_ = a.getAttribute(m, d.content) || a.P(m, v)));
                    return b
                },
                Tb: function(b, e) {
                    b = String(b);
                    e = String(e);
                    if (0 <
                        b.indexOf("*")) {
                        var f = /.*\[(\d+)\]$/.exec(e);
                        b = b.replace("*", f ? f[1] : "1")
                    }
                    return a.wa(b)
                }
            };
        h.s.e("pv-b", q.pb);
        return q
    })();
    (function() {
        var a = mt.g,
            b = mt.lang,
            d = mt.event,
            e = mt.f,
            f = h.w,
            n = h.ea,
            g = [],
            l = {
                ob: function() {
                    c.ctrk && 0 < c.ctrk.length && (d.e(document, "mouseup", l.wb()), d.e(window, "unload", function() {
                        l.ma()
                    }), setInterval(function() {
                        l.ma()
                    }, f.yb))
                },
                wb: function() {
                    return function(a) {
                        if (n.O(c.ctrk, v) && (a = l.Jb(a), "" !== a)) {
                            var b = (f.la + "//" + f.Ha + "?" + h.c.hb().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                            b + (f.X + "").length > f.ca || (b + encodeURIComponent(g.join("!") + (g.length ? "!" : "")).length + (f.X + "").length > f.ca && l.ma(), g.push(a),
                                (g.length >= f.zb || /\*a\*/.test(a)) && l.ma())
                        }
                    }
                },
                Jb: function(d) {
                    var g = d.target || d.srcElement;
                    if (0 === f.xb) {
                        var n = (g.tagName || "").toLowerCase();
                        if ("embed" == n || "object" == n) return ""
                    }
                    var m;
                    e.Ca ? (m = Math.max(document.documentElement.scrollTop, document.body.scrollTop), n = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), n = d.clientX + n, m = d.clientY + m) : (n = d.pageX, m = d.pageY);
                    d = l.Qb(d, g, n, m);
                    var s = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                    switch (c.align) {
                        case 1:
                            n -=
                                s / 2;
                            break;
                        case 2:
                            n -= s
                    }
                    s = [];
                    s.push(n);
                    s.push(m);
                    s.push(d.W);
                    s.push(d.Y);
                    s.push(d.pc);
                    s.push(b.h(d.mc));
                    s.push(d.$);
                    s.push(d.S);
                    (g = "a" === (g.tagName || "").toLowerCase() ? g : a.Qa(g)) ? (s.push("a"), s.push(b.h(encodeURIComponent(g.href)))) : s.push("b");
                    return s.join("*")
                },
                Qb: function(f, d, g, m) {
                    f = a.ha(d);
                    var s = 0,
                        k = 0,
                        p = 0,
                        y = 0;
                    if (d && (s = d.offsetWidth || d.clientWidth, k = d.offsetHeight || d.clientHeight, y = a.Ra(d), p = y.left, y = y.top, b.d(d.getBBox, "Function") && (k = d.getBBox(), s = k.width, k = k.height), "html" === (d.tagName || "").toLowerCase())) s =
                        Math.max(s, d.clientWidth), k = Math.max(k, d.clientHeight);
                    return {
                        W: Math.round(100 * ((g - p) / s)),
                        Y: Math.round(100 * ((m - y) / k)),
                        pc: e.orientation,
                        mc: f,
                        $: s,
                        S: k
                    }
                },
                ma: function() {
                    0 !== g.length && (h.c.b.et = 2, h.c.b.ep = g.join("!"), h.c.l(), g = [])
                }
            };
        h.s.e("pv-b", l.ob);
        return l
    })();
    (function() {
        var a = mt.lang,
            b = mt.g,
            d = mt.event,
            e = mt.f,
            f = h.w,
            n = h.s,
            g = h.L,
            l = g.I,
            q = +new Date,
            r = [],
            u = {
                fa: function() {
                    return function(e) {
                        if (h.c && h.c.T && c.aet && c.aet.length) {
                            var d = e.target || e.srcElement;
                            if (d) {
                                var k = h.c.Na,
                                    p = b.getAttribute(d, f.Ma) != w ? v : x;
                                if (b.getAttribute(d, f.La) == w)
                                    if (p) u.sa(u.xa(d, e));
                                    else {
                                        var g = b.Q(d);
                                        if (a.D(k, "*") || a.D(k, g)) u.sa(u.xa(d, e));
                                        else
                                            for (; d.parentNode != w;) {
                                                var p = d.parentNode,
                                                    g = b.Q(p),
                                                    z = "a" === g && a.D(k, "a") ? v : x,
                                                    g = "button" === g && a.D(k, "button") ? v : x,
                                                    A = b.getAttribute(p, f.Ma) != w ? v : x;
                                                if (b.getAttribute(p, f.La) == w && (z || g || A)) {
                                                    u.sa(u.xa(p, e));
                                                    break
                                                }
                                                d = d.parentNode
                                            }
                                    }
                            }
                        }
                    }
                },
                xa: function(d, g) {
                    var k = {},
                        p = f.Ka;
                    k.id = b.getAttribute(d, p.id) || b.getAttribute(d, "id") || "";
                    k.ba = b.getAttribute(d, p.ba) || b.getAttribute(d, "class") || "";
                    k.aa = b.getAttribute(d, p.aa) || b.ha(d);
                    k.content = b.getAttribute(d, p.content) || b.P(d, v);
                    k.oa = b.getAttribute(d, p.oa) || b.Q(d);
                    k.link = b.getAttribute(d, p.link) || b.getAttribute(d, "href") || "";
                    k.type = g.type || "click";
                    p = a.Xa(d.offsetTop) ? d.offsetTop : 0;
                    "click" === g.type ? p = e.Ca ? g.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.ab && g.ab.changedTouches) && (p = g.ab.changedTouches[0].pageY);
                    k.Ac = p;
                    p = this.Mb(g);
                    k.W = p.W || 0;
                    k.Y = p.Y || 0;
                    k.$ = p.$ || 0;
                    k.S = p.S || 0;
                    k.Ia = p.Ia || "b";
                    return k
                },
                Mb: function(d) {
                    var f = d.target || d.srcElement,
                        k;
                    if (e.Ca) {
                        var p = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                        k = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                        k = d.clientX + k;
                        d = d.clientY + p
                    } else k = d.pageX, d = d.pageY;
                    var g = p = 0,
                        z = 0,
                        A = 0;
                    if (f && (p = f.offsetWidth || f.clientWidth, g = f.offsetHeight || f.clientHeight, A = b.Ra(f), z = A.left, A = A.top, a.d(f.getBBox, "Function") && (g = f.getBBox(), p = g.width, g = g.height), "html" === (f.tagName || "").toLowerCase())) p = Math.max(p, f.clientWidth), g = Math.max(g, f.clientHeight);
                    return {
                        W: Math.round(100 * ((k - z) / p)),
                        Y: Math.round(100 * ((d - A) / g)),
                        $: p,
                        S: g,
                        Ia: ("a" === (f.tagName || "").toLowerCase() ? f : b.Qa(f)) ? "a" : "b"
                    }
                },
                sa: function(b) {
                    var e = a.h;
                    b = [+new Date - (h.c.U !== t ? h.c.U : q), e(b.id), e(b.ba), e(b.oa), e(b.aa), e(b.link),
                        e(b.content), b.type, b.Ac, b.W, b.Y, b.$, b.S, b.Ia
                    ].join("*");
                    u.ta(b);
                    a.d(this.Z(), "Function") && this.Z()()
                },
                ta: function(a) {
                    var b = f.ca;
                    a.length > b || (encodeURIComponent(r.join("!") + a).length > b && 0 < r.length && (u.o(r.join("!")), r = []), r.push(a))
                },
                o: function(a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    g.setProperty("autoEventTracking", {
                        view_h_: e.C()
                    }, v);
                    h.c.b.p = l(g.t("autoEventTracking"));
                    h.c.l();
                    h.c.b.p = "";
                    g.setProperty("autoEventTracking", {
                        view_h_: w
                    }, v)
                },
                Z: function() {
                    return function() {
                        r && r.length && (u.o(r.join("!")), r = [])
                    }
                }
            };
        a.F(c.aet) &&
            "" !== c.aet && n.e("pv-b", function() {
                d.e(document, "click", u.fa());
                "ontouchend" in document && d.e(window, "touchend", u.fa());
                d.e(window, "unload", u.Z())
            });
        return u
    })();
    (function() {
        var a = mt.lang,
            b = mt.event,
            d = mt.f,
            e = h.w,
            f = h.s,
            n = h.L,
            g = n.I,
            l = +new Date,
            q = [],
            r = w,
            u = {
                rb: function() {
                    a.F(c.aet) && "" !== c.aet && setInterval(u.gb, e.tc)
                },
                gb: function() {
                    var a = d.C();
                    0 < a - h.c.b.vl && (h.c.b.vl = a)
                }
            },
            m = {
                Cb: function() {
                    return function() {
                        h.c && (h.c.T && c.aet && c.aet.length) && (window.clearTimeout(r), r = window.setTimeout(function() {
                            m.qb(d.C())
                        }, 150))
                    }
                },
                qb: function(a) {
                    m.ta([+new Date - (h.c.U !== t ? h.c.U : l), a].join("*"))
                },
                ta: function(a) {
                    if (encodeURIComponent(q.join("!") + a).length > e.ca || 3 < q.length) m.o(q.join("!")),
                        q = [];
                    q.push(a)
                },
                o: function(a) {
                    u.gb();
                    h.c.b.et = 6;
                    h.c.b.vh = d.Ua();
                    h.c.b.ep = a;
                    n.setProperty("autoEventTracking", {
                        view_h_: d.C()
                    }, v);
                    h.c.b.p = g(n.t("autoEventTracking"));
                    h.c.l();
                    h.c.b.p = "";
                    n.setProperty("autoEventTracking", {
                        view_h_: w
                    }, v)
                },
                Z: function() {
                    return function() {
                        q && q.length && (m.o(q.join("!")), q = [])
                    }
                }
            };
        a.F(c.aet) && "" !== c.aet && f.e("pv-b", function() {
            b.e(window, "scroll", m.Cb());
            b.e(window, "unload", m.Z());
            u.rb()
        });
        return m
    })();
    (function() {
        function a() {
            return function() {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.ua.Rb() + "," + h.ua.Ob();
                h.c.b.hca = c.hca;
                h.c.l()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            p && (a = "visible" == document[p]);
            y && (a = !document[y]);
            l = "undefined" == typeof a ? v : a;
            if ((!g || !q) && l && r) k = v, m = +new Date;
            else if (g && q && (!l || !r)) k = x, s += +new Date - m;
            g = l;
            q = r;
            z = setTimeout(b, 100)
        }

        function d(a) {
            var b = document,
                p = "";
            if (a in b) p = a;
            else
                for (var e = ["webkit", "ms", "moz", "o"], d = 0; d < e.length; d++) {
                    var f = e[d] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (f in b) {
                        p = f;
                        break
                    }
                }
            return p
        }

        function e(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) r = "focus" == a.type || "focusin" == a.type ? v : x, b()
        }
        var f = mt.event,
            n = h.s,
            g = v,
            l = v,
            q = v,
            r = v,
            u = +new Date,
            m = u,
            s = 0,
            k = v,
            p = d("visibilityState"),
            y = d("hidden"),
            z;
        b();
        (function() {
            var a = p.replace(/[vV]isibilityState/, "visibilitychange");
            f.e(document, a, b);
            f.e(window, "pageshow", b);
            f.e(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (f.e(document, "focusin", e), f.e(document, "focusout", e)) : (f.e(window,
                "focus", e), f.e(window, "blur", e))
        })();
        h.ua = {
            Rb: function() {
                return +new Date - u
            },
            Ob: function() {
                return k ? +new Date - m + s : s
            }
        };
        n.e("pv-b", function() {
            f.e(window, "unload", a())
        });
        n.e("duration-send", a());
        n.e("duration-done", function() {
            m = u = +new Date;
            s = 0
        });
        return h.ua
    })();
    (function() {
        var a = mt.lang,
            b = h.w,
            d = h.load,
            e = h.da,
            f = {
                fc: function(f) {
                    if ((window._dxt === t || a.d(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                        var g = e.ga();
                        d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(g)].join(""), f)
                    }
                },
                zc: function(b) {
                    if (a.d(b, "String") || a.d(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
                }
            };
        return h.Ab = f
    })();
    (function() {
        function a(a, b, e, d) {
            if (!(a === t || b === t || d === t)) {
                if ("" === a) return [b, e, d].join("*");
                a = String(a).split("!");
                for (var f, g = x, k = 0; k < a.length; k++)
                    if (f = a[k].split("*"), String(b) === f[0]) {
                        f[1] = e;
                        f[2] = d;
                        a[k] = f.join("*");
                        g = v;
                        break
                    }
                g || a.push([b, e, d].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var d in a)
                if ({}.hasOwnProperty.call(a, d)) {
                    var f = a[d];
                    e.d(f, "Object") || e.d(f, "Array") ? b(f) : a[d] = String(f)
                }
        }
        var d = mt.url,
            e = mt.lang,
            f = mt.G,
            n = mt.f,
            g = h.w,
            l = h.s,
            q = h.Ab,
            r = h.load,
            u = h.da,
            m = h.L,
            s = m.I,
            k = {
                V: [],
                na: 0,
                Da: x,
                A: {
                    Ja: "",
                    page: ""
                },
                init: function() {
                    k.i = 0;
                    m.init();
                    l.e("pv-b", function() {
                        k.Bb();
                        k.Eb()
                    });
                    l.e("pv-d", function() {
                        k.Fb();
                        k.A.page = ""
                    });
                    l.e("stag-b", function() {
                        h.c.b.api = k.i || k.na ? k.i + "_" + k.na : "";
                        h.c.b.ct = [decodeURIComponent(u.getData("Hm_ct_" + c.id) || ""), k.A.Ja, k.A.page].join("!")
                    });
                    l.e("stag-d", function() {
                        h.c.b.api = 0;
                        k.i = 0;
                        k.na = 0
                    })
                },
                Bb: function() {
                    var a = window._hmt || [];
                    if (!a || e.d(a, "Array")) window._hmt = {
                        id: c.id,
                        cmd: {},
                        push: function() {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var p = arguments[b];
                                e.d(p, "Array") && (a.cmd[a.id].push(p), "_setAccount" === p[0] && (1 < p.length && /^[0-9a-f]{31,32}$/.test(p[1])) && (p = p[1], a.id = p, a.cmd[p] = a.cmd[p] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                },
                Eb: function() {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id])
                        for (var b = a.cmd[c.id], e = /^_track(Event|MobConv|Order)$/, d = 0, f = b.length; d < f; d++) {
                            var g = b[d];
                            e.test(g[0]) ? k.V.push(g) : k.Ga(g)
                        }
                    a.cmd[c.id] = {
                        push: k.Ga
                    }
                },
                Fb: function() {
                    if (0 < k.V.length)
                        for (var a = 0, b = k.V.length; a < b; a++) k.Ga(k.V[a]);
                    k.V = w
                },
                Ga: function(a) {
                    var b =
                        a[0];
                    if (k.hasOwnProperty(b) && e.d(k[b], "Function")) k[b](a)
                },
                _setAccount: function(a) {
                    1 < a.length && /^[0-9a-f]{31,32}$/.test(a[1]) && (k.i |= 1)
                },
                _setAutoPageview: function(a) {
                    if (1 < a.length && (a = a[1], x === a || v === a)) k.i |= 2, h.c.Va = a
                },
                _trackPageview: function(a) {
                    1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (k.i |= 4, h.c.b.sn = h.c.Sa(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = n.C(), h.c.b.kb = 0, h.c.Ba ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.Ba = v, k.Da || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = g.protocol + "//" + document.location.host +
                        a[1], h.c.b.p = s(m.t("pageview")), h.c.l(), h.c.b.p = "", h.c.U = +new Date, m.n("pageview"))
                },
                _trackEvent: function(a) {
                    2 < a.length && (k.i |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = e.h(a[1]) + "*" + e.h(a[2]) + (a[3] ? "*" + e.h(a[3]) : "") + (a[4] ? "*" + e.h(a[4]) : ""), h.c.b.p = s(m.za()), h.c.l(), h.c.b.p = "")
                },
                _setCustomVar: function(a) {
                    if (!(4 > a.length)) {
                        var b = a[1],
                            d = a[4] || 3;
                        if (0 < b && 6 > b && 0 < d && 4 > d) {
                            k.na++;
                            for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < b - 1; g++) f.push("*");
                            f[b - 1] = d + "*" + e.h(a[2]) + "*" + e.h(a[3]);
                            h.c.b.cv = f.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? u.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : u.removeData("Hm_cv_" + c.id)
                        }
                    }
                },
                _setUserTag: function(b) {
                    if (!(3 > b.length)) {
                        var d = e.h(b[1]);
                        b = e.h(b[2]);
                        if (d !== t && b !== t) {
                            var f = decodeURIComponent(u.getData("Hm_ct_" + c.id) || ""),
                                f = a(f, d, 1, b);
                            u.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                        }
                    }
                },
                _setVisitTag: function(b) {
                    if (!(3 > b.length)) {
                        var d = e.h(b[1]);
                        b = e.h(b[2]);
                        if (d !== t && b !== t) {
                            var f = k.A.Ja,
                                f = a(f, d, 2, b);
                            k.A.Ja = f
                        }
                    }
                },
                _setPageTag: function(b) {
                    if (!(3 >
                            b.length)) {
                        var d = e.h(b[1]);
                        b = e.h(b[2]);
                        if (d !== t && b !== t) {
                            var f = k.A.page,
                                f = a(f, d, 3, b);
                            k.A.page = f
                        }
                    }
                },
                _setReferrerOverride: function(a) {
                    1 < a.length && (a = a[1], e.d(a, "String") ? (h.c.b.su = "/" === a.charAt(0) ? g.protocol + "//" + window.location.host + a : a, k.Da = v) : k.Da = x)
                },
                _trackOrder: function(a) {
                    a = a[1];
                    e.d(a, "Object") && (b(a), k.i |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = f.stringify(a), h.c.b.p = s(m.za()), h.c.l(), h.c.b.p = "")
                },
                _trackMobConv: function(a) {
                    if (a = {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        }[a[1]]) k.i |=
                        32, h.c.b.et = 93, h.c.b.ep = a, h.c.l()
                },
                _setDataxId: function(a) {
                    a = a[1];
                    q.fc();
                    q.zc(a)
                },
                _setUserId: function(a) {
                    a = a[1];
                    if (a !== t && (e.F(a) || e.Xa(a))) {
                        var b = m.t("user").uid_;
                        if (!(b && b.value === e.h(String(a)))) {
                            var b = h.c.b.p,
                                d = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + e.h(String(a));
                            h.c.l();
                            var f = {};
                            f.uid_ = a;
                            m.setProperty("user", f, v);
                            h.c.b.p = b;
                            h.c.b.ep = d
                        }
                    }
                },
                _clearUserId: function(a) {
                    1 < a.length && v === a[1] && m.n("userId")
                },
                _setUserProperty: function(a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("user", a)
                },
                _clearUserProperty: function(a) {
                    1 <
                        a.length && v === a[1] && m.n("user")
                },
                _setSessionProperty: function(a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("session", a)
                },
                _clearSessionProperty: function(a) {
                    1 < a.length && v === a[1] && m.n("session")
                },
                _setPageviewProperty: function(a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("pageview", a)
                },
                _clearPageviewProperty: function(a) {
                    1 < a.length && v === a[1] && m.n("pageview")
                },
                _setAutoEventTrackingProperty: function(a) {
                    a = a[1];
                    e.d(a, "Object") && m.setProperty("autoEventTracking", a)
                },
                _clearAutoEventTrackingProperty: function(a) {
                    1 < a.length &&
                        v === a[1] && m.n("autoEventTracking")
                },
                _setAutoTracking: function(a) {
                    if (1 < a.length && (a = a[1], x === a || v === a)) h.c.Wa = a
                },
                _setAutoEventTracking: function(a) {
                    if (1 < a.length && (a = a[1], x === a || v === a)) h.c.T = a
                },
                _trackPageDuration: function(a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.l())) : l.K("duration-send");
                    l.K("duration-done")
                },
                _require: function(a) {
                    1 < a.length && (a = a[1], g.tb.test(d.R(a)) && r(a))
                },
                _providePlugin: function(a) {
                    if (1 < a.length) {
                        var b = window._hmt,
                            d = a[1];
                        a = a[2];
                        if (e.D(g.eb,
                                d) && e.d(a, "Function") && (b.plugins = b.plugins || {}, b.H = b.H || {}, b.plugins[d] = a, b.z = b.z || [], a = b.z.slice(), d && a.length && a[0][1] === d))
                            for (var f = 0, k = a.length; f < k; f++) {
                                var l = a[f][2] || {};
                                if (b.plugins[d] && !b.H[d]) b.H[d] = new b.plugins[d](l), b.z.shift();
                                else break
                            }
                    }
                },
                _requirePlugin: function(a) {
                    if (1 < a.length) {
                        var b = window._hmt,
                            d = a[1],
                            f = a[2] || {};
                        if (e.D(g.eb, d))
                            if (b.plugins = b.plugins || {}, b.H = b.H || {}, b.plugins[d] && !b.H[d]) b.H[d] = new b.plugins[d](f);
                            else {
                                b.z = b.z || [];
                                for (var f = 0, l = b.z.length; f < l; f++)
                                    if (b.z[f][1] ===
                                        d) return;
                                b.z.push(a);
                                k._require([w, g.nc + d + ".js"])
                            }
                    }
                },
                _trackCustomEvent: function(a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        e.d(a, "Object") || (a = {});
                        a._iden = b;
                        m.setProperty("customEvent", a);
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = s(m.t("customEvent"));
                        h.c.l();
                        h.c.b.p = "";
                        m.n("customEvent")
                    }
                }
            };
        k.init();
        h.ub = k;
        return h.ub
    })();
    (function() {
        var a = h.s;
        c.spa !== t && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), a.e("pv-b", function() {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function() {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = v, this.b = {}, this.Wa = this.Va = v, this.T = k.T, this.Na = f.F(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.Ba = x, this.init())
        }
        var b = mt.url,
            d = mt.jb,
            e = mt.lb,
            f = mt.lang,
            n = mt.cookie,
            g = mt.f,
            l = mt.sessionStorage,
            q = mt.G,
            r = mt.event,
            u = h.da,
            m = h.L,
            s = m.I,
            k = h.w,
            p = h.load,
            y = h.s;
        a.prototype = {
            ia: function(a) {
                for (var d = 0; d < c.dm.length; d++)
                    if (-1 < c.dm[d].indexOf("/")) {
                        if (b.Ya(a, c.dm[d])) return v
                    } else {
                        var e = b.R(a);
                        if (e && b.Ea(e,
                                c.dm[d])) return v
                    }
                return x
            },
            Vb: function() {
                if (!document.referrer) return k.J - k.M > c.vdur ? 1 : 4;
                var a = x;
                this.ia(document.referrer) && this.ia(document.location.href) ? a = v : (a = b.R(document.referrer), a = b.Ea(a || "", document.location.hostname));
                return a ? k.J - k.M > c.vdur ? 1 : 4 : 3
            },
            xc: function() {
                var a, b, d, e, f, g;
                k.M = u.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.M.length && (k.M = Math.round(k.M / 1E3));
                b = this.Vb();
                a = 4 !== b ? 1 : 0;
                if (g = u.getData("Hm_lvt_" + c.id)) {
                    e = g.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] /
                        1E3));
                    for (; 2592E3 < k.J - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.J); 4 < e.length;) e.shift();
                    g = e.join(",");
                    e = e[e.length - 1]
                } else g = k.J, e = "", f = 1;
                this.ic() ? (u.setData("Hm_lvt_" + c.id, g, c.age), u.setData("Hm_lpvt_" + c.id, k.J), d = n.kc(u.ga(), u.va())) : this.Gb();
                if (0 === c.nv && this.ia(document.location.href) && ("" === document.referrer || this.ia(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            },
            ic: function() {
                var a = b.R(document.location.href);
                return !f.D("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
                    a)
            },
            Gb: function() {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && u.removeData(d[0]);
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && u.removeData(d[0])
                }
            },
            hb: function() {
                for (var a = [], b = this.b.et, d = 0, e = k.mb.length; d < e; d++) {
                    var f = k.mb[d],
                        g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            },
            yc: function() {
                this.xc();
                this.b.si = c.id;
                this.b.sn = this.Sa();
                this.b.su = document.referrer;
                this.b.ds = g.sc;
                this.b.cl = g.colorDepth + "-bit";
                this.b.ln = String(g.language).toLowerCase();
                this.b.ja = g.javaEnabled ? 1 : 0;
                this.b.ck = g.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = e.Xb();
                this.b.v = "1.2.89";
                this.b.cv = decodeURIComponent(u.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = g.C();
                var a = document.location.href;
                this.b.cm = b.j(a, k.bc) || "";
                this.b.cp = b.j(a, k.dc) || b.j(a, k.Ec) || "";
                this.b.cw = b.j(a, k.ac) ||
                    b.j(a, k.Gc) || "";
                this.b.ci = b.j(a, k.Zb) || b.j(a, k.Dc) || "";
                this.b.cf = b.j(a, k.ec) || b.j(a, k.Fc) || "";
                this.b.cu = b.j(a, k.$b) || b.j(a, k.Cc) || "";
                /https?:/.test(document.location.protocol) && (this.b.u = a)
            },
            init: function() {
                try {
                    this.yc(), 0 === this.b.nv ? this.wc() : this.Pa(), h.c = this, this.vb(), this.lc(), y.K("pv-b"), this.uc()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(k.la + "//" + k.Ha + "?" +
                        b.join("&"))
                }
            },
            uc: function() {
                function a() {
                    y.K("pv-d")
                }
                this.Va ? (this.Ba = v, this.b.et = 0, this.b.ep = "", this.b.p = s(m.t("pageview")), this.b.vl = g.C(), this.l(a), this.b.p = "") : a();
                this.U = +new Date;
                m.n("pageview")
            },
            l: function(a) {
                if (this.Wa) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.X);
                    b.b.r = g.orientation;
                    b.b.ww = g.nb;
                    y.K("stag-b");
                    var e = k.la + "//" + k.Ha + "?" + b.hb();
                    y.K("stag-d");
                    b.sb(e);
                    d.log(e, function(d) {
                        b.fb(d);
                        f.d(a, "Function") && a.call(b)
                    })
                }
            },
            vb: function() {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a =
                            this;
                        r.e(window, "message", function(d) {
                            if (b.R(d.origin) === k.Bc) {
                                d = d.data || {};
                                var e = d.jn || "",
                                    f = /^customevent$|^heatmap$|^pageclick$|^select$/.test(e);
                                if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * k.X), p(k.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                            }
                        });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (d) {}
            },
            lc: function() {
                try {
                    if (window.self === window.parent) {
                        var a = document.location.href,
                            d = b.j(a, "baidu-analytics-token"),
                            e = b.j(a, "baidu-analytics-jn");
                        /^[a-f0-9]{32}\/?$/.test(d) && /^overlay\/?$/.test(e) && p(k.protocol + "//" + c.js + e + ".js?" + Math.round(Math.random() * k.X))
                    }
                } catch (f) {}
            },
            sb: function(a) {
                var b;
                try {
                    b = q.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                l.set("Hm_unsent_" + c.id, q.stringify(b))
            },
            fb: function(a) {
                var b;
                try {
                    b = q.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++)
                        if (a.replace(/&u=[^&]*/,
                                "") === b[e].replace(/&u=[^&]*/, "")) {
                            b.splice(e, 1);
                            break
                        }
                    b.length ? l.set("Hm_unsent_" + c.id, q.stringify(b)) : this.Pa()
                }
            },
            Pa: function() {
                l.remove("Hm_unsent_" + c.id)
            },
            wc: function() {
                var a = this,
                    b;
                try {
                    b = q.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    b = []
                }
                if (b.length)
                    for (var f = function(b) {
                            d.log(k.la + "//" + b, function(b) {
                                a.fb(b)
                            })
                        }, g = 0; g < b.length; g++) f(b[g])
            },
            Sa: function() {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new a
    })();
    var B = h.w,
        C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
})();