//js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素
document.getElementById("page-name").setAttribute("style","display:none");

var scrollFunc = function (e) {
    var e = e || window.event;
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
            document.getElementsByClassName("menus_items")[1].setAttribute("style","");
            document.getElementById("page-name").setAttribute("style","display:none");
        }
        if (e.wheelDelta < 0) {
            document.getElementById("page-name").setAttribute("style","");
            document.getElementsByClassName("menus_items")[1].setAttribute("style","display:none!important");
        }
    } else if (e.detail) {
        if (e.detail < 0) {
            document.getElementsByClassName("menus_items")[1].setAttribute("style","");
            document.getElementById("page-name").setAttribute("style","display:none");
        }
        if (e.detail > 0) {
            document.getElementById("page-name").setAttribute("style","");
            document.getElementsByClassName("menus_items")[1].setAttribute("style","display:none!important");
        }
    }
}
window.addEventListener("DOMMouseScroll", scrollFunc)
window.addEventListener("wheel", scrollFunc)

document.getElementById("page-name").innerText=document.title

/*这里是去掉你的网站全局名称的设置，如果你不需要去掉，你可以写成：

或者把你的网站的分隔符和全局网站名称加上去*/