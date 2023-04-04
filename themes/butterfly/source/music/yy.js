var anzhiyu_musicPlaying = false;
var anzhiyu_musicStretch = false;
var anzhiyu_musicFirst = false;
var anzhiyu = {
    //切换音乐播放状态
    musicToggle: function() {
        anzhiyu_musicFirst || (musicBindEvent(),
            anzhiyu_musicFirst = !0);
        anzhiyu_musicStretch = anzhiyu_musicPlaying ? (document.querySelector("#nav-music").classList.remove("playing"),
            // document.getElementById("menu-music-toggle").innerHTML = '<i class="fa-solid fa-play"></i><span>播放音乐</span>',
            document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停"//, document.querySelector("#consoleMusic").classList.remove("on")
            ,
            anzhiyu_musicPlaying = !1,
            document.querySelector("#nav-music").classList.remove("stretch"),
            !1) : (document.querySelector("#nav-music").classList.add("playing"),
            // document.getElementById("menu-music-toggle").innerHTML = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'// , document.querySelector("#consoleMusic").classList.add("on")
            // ,
            anzhiyu_musicPlaying = !0,
            document.querySelector("#nav-music").classList.add("stretch"),
            !0),
            document.querySelector("meting-js").aplayer.toggle()
    },
    // 音乐伸缩
    musicTelescopic: function() {
        if (anzhiyu_musicStretch) {
            document.querySelector("#nav-music").classList.remove("stretch");
            anzhiyu_musicStretch = false;
        } else {
            document.querySelector("#nav-music").classList.add("stretch");
            anzhiyu_musicStretch = true;
        }
    },

    //音乐上一曲
    musicSkipBack: function() {
        document.querySelector("meting-js").aplayer.skipBack();
    },

    //音乐下一曲
    musicSkipForward: function() {
        document.querySelector("meting-js").aplayer.skipForward();
    },

    //获取音乐中的名称
    musicGetName: function() {
        var x = $(".aplayer-title");
        var arr = [];
        for (var i = x.length - 1; i >= 0; i--) {
            arr[i] = x[i].innerText;
        }
        return arr[0];
    },
};

// addRightMenuClickEvent();
