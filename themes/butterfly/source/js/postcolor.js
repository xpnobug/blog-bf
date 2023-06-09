if (document.getElementById("post-cover")) {
    const t = document.getElementById("post-cover")
        , e = t.getAttribute("data-lazy-src") || t.getAttribute("src");
    RGBaster.colors(e, {
        paletteSize: 30,
        exclude: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(254,254,254)"],
        success: function(t) {
            if ("rgb()" != t.dominant) {
                const e = t.dominant.match(/\d+/g);
                e[0] > 210 && e[1] > 210 && e[2] > 210 && (e[0] = 210,
                    e[1] = 210,
                    e[2] = 210);
                const o = `rgba(${e[0]},${e[1]},${e[2]})`;
                let l;
                .213 * e[0] + .715 * e[1] + .072 * e[2] >= 127.5 ? (l = "#000",
                    metaColor = "#1C1C1C") : (l = "#fff",
                    metaColor = "#eee"),
                    document.styleSheets[0].addRule(":root", "--mj-main:" + o + "!important"),
                    document.styleSheets[0].addRule(":root", "--mj-titlecolor:" + l + "!important"),
                    document.styleSheets[0].addRule(":root", "--mj-metacolor:" + metaColor + "!important")
            } else
                document.styleSheets[0].addRule(":root", "--mj-main: rgba(210,210,210) !important"),
                    document.styleSheets[0].addRule(":root", "--mj-titlecolor: #000 !important"),
                    document.styleSheets[0].addRule(":root", "--mj-metacolor: #1C1C1C !important")
        },
        error: function() {
            document.styleSheets[0].addRule(":root", "--mj-main: rgba(210,210,210) !important"),
                document.styleSheets[0].addRule(":root", "--mj-titlecolor: #000 !important"),
                document.styleSheets[0].addRule(":root", "--mj-metacolor: #1C1C1C !important")
        }
    })
} else
    document.styleSheets[0].addRule(":root", "--mj-titlecolor: var(--mj-fontcolor) !important");
function switchDarkMode() {
    "light" === ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(),
        saveToLocal.set("theme", "dark", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(),
        saveToLocal.set("theme", "light", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
    "function" == typeof utterancesTheme && utterancesTheme(),
    "object" == typeof FB && window.loadFBComment(),
    window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout((()=>window.disqusReset()), 200)
}
function scrollToTop() {
    btf.scrollToDest(0, 500)
}
function switchPostChart() {
    let t = "light" === document.documentElement.getAttribute("data-theme") ? "#4c4948" : "rgba(255,255,255,0.7)";
    if (document.getElementById("posts-chart")) {
        let e = postsOption;
        e.textStyle.color = t,
            e.title.textStyle.color = t,
            e.xAxis.axisLine.lineStyle.color = t,
            e.yAxis.axisLine.lineStyle.color = t,
            postsChart.setOption(e)
    }
    if (document.getElementById("tags-chart")) {
        let e = tagsOption;
        e.textStyle.color = t,
            e.title.textStyle.color = t,
            e.xAxis.axisLine.lineStyle.color = t,
            e.yAxis.axisLine.lineStyle.color = t,
            tagsChart.setOption(e)
    }
    if (document.getElementById("categories-chart")) {
        let e = categoriesOption;
        e.textStyle.color = t,
            e.title.textStyle.color = t,
            e.legend.textStyle.color = t,
            categoriesChart.setOption(e)
    }
}
function switchVisitChart() {
    let t = "light" === document.documentElement.getAttribute("data-theme") ? "#4c4948" : "rgba(255,255,255,0.7)";
    if (document.getElementById("map-chart")) {
        let e = mapOption;
        e.title.textStyle.color = t,
            e.visualMap.textStyle.color = t,
            mapChart.setOption(e)
    }
    if (document.getElementById("trends-chart")) {
        let e = trendsOption;
        e.title.textStyle.color = t,
            e.xAxis.axisLine.lineStyle.color = t,
            e.yAxis.axisLine.lineStyle.color = t,
            e.textStyle.color = t,
            trendsChart.setOption(e)
    }
    if (document.getElementById("sources-chart")) {
        let e = sourcesOption;
        e.title.textStyle.color = t,
            e.legend.textStyle.color = t,
            e.textStyle.color = t,
            sourcesChart.setOption(e)
    }
}
function categoriesBarActive() {
    var t = window.location.pathname;
    if ("/" == (t = decodeURIComponent(t)))
        document.querySelector("#category-bar") && document.getElementById("首页").classList.add("select");
    else {
        if (/\/categories\/.*?\//.test(t)) {
            var e = t.split("/")[2];
            document.querySelector("#category-bar") && document.getElementById(e).classList.add("select")
        }
    }
}
function tagsBarActive() {
    var t = window.location.pathname;
    if ("/" == (t = decodeURIComponent(t)))
        document.querySelector("#tags-bar") && document.getElementById("首页").classList.add("select");
    else {
        if (/\/tags\/.*?\//.test(t)) {
            var e = t.split("/")[2];
            document.querySelector("#category-bar") && document.getElementById(e).classList.add("select")
        }
    }
}
function topCategoriesBarScroll() {
    if (document.getElementById("category-bar-items")) {
        let t = document.getElementById("category-bar-items");
        t.addEventListener("mousewheel", (function(e) {
                let o = -e.wheelDelta / 2;
                t.scrollLeft += o,
                    e.preventDefault()
            }
        ), !1)
    }
}
function topPostsBarScroll() {
    if (document.body.clientWidth <= 768 && document.getElementById("homeTopGroup")) {
        let t = document.getElementById("homeTopGroup");
        t.addEventListener("mousewheel", (function(e) {
                let o = -e.wheelDelta / 2;
                t.scrollLeft += o,
                    e.preventDefault()
            }
        ), !1)
    }
}
// document.getElementById("menu-darkmode").addEventListener("click", (function() {
//         setTimeout(switchPostChart, 100),
//             setTimeout(switchVisitChart, 100)
//     }
// )),
//     document.getElementById("darkmode_navswitch").addEventListener("click", (function() {
//             setTimeout(switchPostChart, 100),
//                 setTimeout(switchVisitChart, 100)
//         }
//     )),
    categoriesBarActive(),
    tagsBarActive(),
    topCategoriesBarScroll(),
    topPostsBarScroll();
