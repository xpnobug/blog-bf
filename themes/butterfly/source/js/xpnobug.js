if(aidaori()){
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)"
    });
}

//在特定日期变灰
function aidaori() {
    var aidaoriarr = new Array(
        // "0403",
        // "0404",
        // "0405",
        // "0406",
        "0414",
        "0512",
        "0807",
        "0909",
        "1213",
        "1130"
    );
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //2010年8月7日，甘肃舟曲特大泥石流
    //1976年9月9日，毛泽东逝世
    //1937年12月13日，南京大屠杀
    //2022年11月30日，江泽民逝世
    var mydate = new Date();
    var str = ""; // + mydate.getFullYear();
    var mm = mydate.getMonth() + 1;
    if (mydate.getMonth() > 9) {
        str += mm;
    } else {
        str += "0" + mm;
    }
    if (mydate.getDate() > 9) {
        str += mydate.getDate();
    } else {
        str += "0" + mydate.getDate();
    }
    if (aidaoriarr.indexOf(str) > -1) {
        return 1;
    } else {
        return 0;
    }
}

// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b =
            Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
        result = Math.round((a / b) * 100), // 计算百分比
        btn = document.querySelector('#percent'); // 获取图标

    result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById('page-name').innerText = document.title.split(' | error 404')[0];

//检测IE内核跳转
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var IEVersion;
        IEVersion = parseFloat(RegExp["$1"]);
        if (IEVersion == 7) {
            return 7;
        } else if(IEVersion == 8) {
            return 8;
        } else if(IEVersion == 9) {
            return 9;
        } else if(IEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11
    }else{
        return -1;//不是ie浏览器
    }
}
var isIE = IEVersion();
if (isIE == "6" || isIE == "7" || isIE == "8" || isIE == "9" || isIE == "10" || isIE == "11" ){//判断当前是否是IE浏览器
    window.location = "/other/calender.html";//如果是IE内核跳转至kernel.html
}
/*
var httpRequest = new XMLHttpRequest();
httpRequest.open('post','https://api.vvhan.com/api/ian',true);
httpRequest.send();
var json = null;
httpRequest.onreadystatechange = function(){
    //readyState的不同值，代表了不同的状态：
    //0：尚未初始化
    //1：正在加载
    //2：加载完毕
    //3：正在处理
    //4：处理完毕
    if (httpRequest.readyState==4 && httpRequest.status==200)
    {
        // console.log(httpRequest.responseText)
        document.getElementById('page-name').innerText =httpRequest.responseText;
        // document.getElementById('article-title1').innerText =httpRequest.responseText;
        // document.getElementById('article-title2').innerText =httpRequest.responseText;
        // document.getElementById('article-title3').innerText =httpRequest.responseText;
    }
}*/

