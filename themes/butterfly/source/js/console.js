// 控制台打印自定义内容
if (window.console) {
    var getTimeState_console = function () {
        var t = (new Date).getHours(), e = "";
        return 4 >= t || t > 22 ? e = "Good Night 🛌<br>" : 4 < t && t <= 10 ? e = "Good Morning 🌮" : 10 < t && t <= 12 ? e = "Good Noon 🍱" : 12 < t && t <= 17 ? e = "Good Afternoon ☕" : 17 < t && t <= 22 && (e = "Good Evening 🍇"),
            e
    };
    Function.prototype.makeMulti = function(){
        let l = new String(this)
        l = l.substring(l.indexOf("/*")+3,l.lastIndexOf("*/"))
        return l
    }

    window.onkeydown = (t) => { 123 === t.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议") };
    document.body.addEventListener('copy', (e) => {
        if (e.target.tagName == 'TEXTAREA' && e.target.className == '') return
        btf.snackbarShow("复制成功~")
    });
    document.body.addEventListener('paste', (e) => {
        btf.snackbarShow("粘贴成功~")
    });

    let string = function(){/*----------------------------------------*/ }
    console.log(string.makeMulti());
    console.log(getTimeState_console());
    console.log("欢迎访问%cerror 404", "color:#81D8CF;font-weight:bold");
    console.log("遇到你很幸运💜");
    console.log("----------------------------------------");
}

