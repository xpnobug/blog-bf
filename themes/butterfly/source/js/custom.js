"use strict";
var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", function() {
    document.hidden ? (document.title = "error",
        clearTimeout(titleTime)) : (document.title = "404",
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        }, 2e3))
});

var getTimeState = function() {
    var t = (new Date).getHours()
        , e = "";
    return t <= 4 || 22 < t ? e = "晚安  !<br>" : 4 < t && t <= 10 ? e = "早上好  !<br>" : 10 < t && t <= 12 ? e = "中午好  !<br>" : 12 < t && t <= 17 ? e = "下午好  !<br>" : 17 < t && t <= 22 && (e = "晚上好  !<br>"),
        e
};
document.querySelector("#author-info__sayhi") && (document.getElementById("author-info__sayhi").innerHTML = getTimeState())

showTime()
function showTime() {
    var t = new Date
        , e = "AM"
        , o = t.getHours()
        , t = t.getMinutes();
    0 <= o && o <= 12 ? e = "AM" : 12 < o && (o -= 12,
        e = "PM"),
        o = o < 10 ? "0" + o : o,
        t = t < 10 ? "0" + t : t,
        // document.querySelector(".status-bar_clock").textContent = "".concat(o, ":").concat(t, " ").concat(e),
        setTimeout(showTime, 1e3)
}