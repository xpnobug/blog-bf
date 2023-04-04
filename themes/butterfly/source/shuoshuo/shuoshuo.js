var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
var storage = window.localStorage;

var lazyLoadInstance = new LazyLoad({

});
//ajax 分类筛选 moment
//readmore_data =[];//定义数组
$(document).on('click','.moment_cat_nav ul li a',function(){
    var t = $('.moment_cat_nav ul li a');
    if(t.hasClass('disabled')){
        return false;
    }
    $('.moment_cat_nav ul li a').addClass('disabled');

    //readmore_data.splice(0,readmore_data.length);//清空数组
    //5.22增加 移动回复表单
    var temp = $("#comment_form_reset");
    var form = $(".respond_box");
    var form = $("#t_commentform").prop('outerHTML');
    temp.html(form );

    $(".moment_list").empty();
    $('#t_pagination a').hide();
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    var cat = $(this).attr('data');
    var name = $(this).find('span').html();


    $.ajax({
        type: "get",
        url:"/db.json",
        dataType:  'json',
        data: {
            'action':'moment_cat_filter',
            cat:cat,
        },

        beforeSend: function () {
            $('.moment_list').html('<div class="loading_box"><div uk-spinner></div></div>');
        },
        success: function(data){
            $('.moment_list .loading_box').remove();
            $('#t_pagination a').text( 'LOAD MORE' );
            for (let a = 0; a < data.models.Data.length; a++) {
                var dataList = data.models.Data[a];
                if (dataList._id === "shuoshuo") {
                    var datas = dataList.data[0];
                    var comentList = dataList.data[0].post_list;
                    let list = [];
                    for (let i = 0; i < comentList.length; i++) {
                        var images = comentList[i].img_list;
                        let imgs = [];
                        var result = $("" +
                            "<div class=\"loop_content p_item moment_item uk-animation-slide-bottom-small type-moment status-publish hentry moments-4 post-'"+comentList[i].pid+"'\"\n" +
                            "     id='"+comentList[i].pid+"'>\n" +
                            "    <div class=\"p_item_inner\">\n" +
                            "        <div class=\"list_user_meta\">\n" +
                            "            <div class=\"avatar\"><img class=\"avatar avatar-100 photo\"\n" +
                            "                                     decoding=\"async\" height=\"100\"\n" +
                            "                                     loading=\"lazy\" src='"+datas.user_avatar+"' width=\"100\"></div>\n" +
                            "            <div class=\"name\">知记\n" +
                            "                <time class=\"time\" datetime=\"2022/01/05 19:01:11\" itemprop=\"datePublished\">"+comentList[i].time+"</time>\n" +
                            "            </div>\n" +
                            "        </div>\n" +
                            "<div class=\"blog_content\">\n" +
                            "    <div class=\"entry-content\">\n" +
                            "        <div class=\"p_title\"><a href=\"https://sady0.com/moment/1018.html\"></a></div>\n" +
                            "        <div class=\"t_content\"><p>"+ comentList[i].content +"</p></div>\n" +"" +
                            "          <div class=\"video_list\">" +

                            "           </div>" +
                            "        <div class=\"img_list\">\n" +
                            "            <div class=\"list_inner\"> </div>\n" +
                            "        </div>\t\t\t</div><!-- .entry-content -->\n" +

                            "    <span class=\"ip_loca\"><i class=\"ri-map-pin-2-line\"></i>中国大陆</span>\n" +

                            "    <div class=\"entry-footer\">\n" +
                            "        <div class=\"post_footer_meta\">\n" +
                            "            <div class=\"left\">\n" +
                            "                <a class=\"up_like \" data-action=\"up\" data-id=\"1018\">\n" +
                            "                    <i class=\"ri-heart-2-line\"></i>\n" +
                            "                    <span>1</span>\n" +
                            "                </a>\t\t\t\t\t\t<div class=\"pix_share_btn\">\n" +
                            "                <a class=\"pix_icon share_btn_icon cr_poster\" poster-data="+ comentList[i].pid +" uk-toggle=\"target: #share_modal_"+ comentList[i].pid +"\" uk-tooltip=\"title: 生成海报分享; pos: top;\"><i class=\"ri-share-forward-box-line\"></i></a>\n" +
                            "                <div id=\"share_modal_"+ comentList[i].pid +"\" class=\"uk-flex-top poster_modal\" uk-modal>\n" +
                            "                    <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n" +
                            "                        <button class=\"uk-modal-close-outside\" type=\"button\" uk-close></button>\n" +
                            "                        <div class=\"poster_box_ap\"></div>\n" +
                            "                        <div class=\"post_share_box hide\">\n" +
                            "                            <a class=\"poster_download\" uk-tooltip=\"title: 下载海报; pos: top;\"><i class=\"ri-download-line\"></i></a>\n" +
                            "                        </div>\n" +
                            "                    </div>\n" +
                            "                </div>\n" +
                            "            </div>" +
                            "         </div>\n" +
                            "        </div>\n" +
                            "    </div>\n" +
                            " </div>");
                        list.push(result[0].outerHTML)
                        if (comentList[i].cat === cat){
                            $(".moment_list").append(list);
                        }else if (cat === "0"){
                            $(".moment_list").append(list);
                        }
                        list.length = 0;
                        let listinner = document.getElementsByClassName("list_inner")
                        let outerHTML ;
                        let a = listinner>0 ?listinner.length:listinner.length-1;
                        if (images[0].photo !== null){
                            for (let j = 0; j <images.length; j++) {
                                imgs.push(images[j].photo);
                                let mo_img = $("<a class=\"fancybox mo_img\" href='"+ imgs[j] +"' data-fancybox=\"post-images-1018\"><img class=\"lazy\" src='"+ imgs[j] +"' data-src='"+ imgs[j] +"'></a>");
                                outerHTML = mo_img[0].outerHTML;
                                if (comentList[i].cat === cat){
                                    if (a >= 0){
                                        $(listinner[a]).append(outerHTML);
                                    }
                                }
                                if(cat === "0"){
                                    $(listinner[i]).append(outerHTML);
                                }
                            }
                        }
                        let vlogs = document.getElementsByClassName("video_list")
                        if (comentList[i].cat === "vlog"){
                            let video = $("<div class=\"list_inner\">" +
                                "<div class=\"pix_local_player\">" +
                                "<video src="+ comentList[i].video +" id=\"pix_video_player\" objectfit=\"cover\" x5-video-player-type=\"h5\" onplay=\"stopOtherMedia(this)\" controls=\"controls\"></video>" +
                                "</div>" +
                                "</div>");
                            outerHTML = video[0].outerHTML;
                            $(vlogs[i]).append(outerHTML);
                        }
                    }
                }
            }
            if ( comentList.length < 2 ) {
                $('#t_pagination a').hide();
            } else {
                $('#t_pagination a').show();
            }

            lazyLoadInstance.update();
            $('.moment_cat_nav ul li a').removeClass('disabled');

        }
    });
});

//片刻点赞
$(document).on('click','.up_like ',function(){
    if ($(this).hasClass('done')) {
        cocoMessage.info("您已经点过赞了");
        return false;
    } else {
        $(this).addClass('done');

        var pid = $(this).data("id");
        var like_action = $(this).data('action'),
            rateHolder = $(this).children('span');
        iconHolder = $(this).children('i');
        $(iconHolder).removeAttr('class');
        $(iconHolder).toggleClass('ri-heart-2-fill');
        // $(rateHolder).html(data);
        cocoMessage.success("感谢您的支持");
        // $.ajax({
        //     type: "POST",
        //     url: site.data.shuoshuo,
        //     data: {
        //         action: 'pix_ajax_like',
        //         like_action:like_action,
        //         pid:pid
        //     },
        //     success: function(data) {
        //
        //     }
        // }); // end ajax

    }
});


/**
 * @Memo 时间工具类
 *
 * @Author songyf
 * @Date Aug 22,2019
 *
 * @Readme 调用方式：eg: $("#id").html(plugin.convertTime("2019-08-23 15:00:00"));
 $("#id").html(plugin.convertTime(new Date()));
 $("#id").html(plugin.convertTime(new Date("2019-08-21")));
 ......
 */
;(function(win,undefined) {
    "use strict"
    var _win;
    var plugin = {
        /**
         * 功能一：转换某个时间距离当前时间的间隔 【刚刚、1分钟前、半个小时前...】
         * @param e
         * @param t
         * @returns
         */
        convertTime: function(e , t) {
            var i = this,
                o = [[], []],
                a = (new Date).getTime() - new Date(e).getTime();
            return a > 6912e5 ? (a = new Date(e), o[0][0] = i.digit(a.getFullYear(), 4), o[0][1] = i.digit(a.getMonth() + 1), o[0][2] = i.digit(a.getDate()), t || (o[1][0] = i.digit(a.getHours()), o[1][1] = i.digit(a.getMinutes()), o[1][2] = i.digit(a.getSeconds())), o[0].join("-") + " " + o[1].join(":")) : a >= 864e5 ? (a / 1e3 / 60 / 60 / 24 | 0) + "天前": a >= 36e5 ? (a / 1e3 / 60 / 60 | 0) + "小时前": a >= 12e4 ? (a / 1e3 / 60 | 0) + "分钟前": a < 0 ? "未来": "刚刚"
        },
        digit: function(e, t) {
            var i = "";
            e = String(e),
                t = t || 2;
            for (var o = e.length; o < t; o++) i += "0";
            return e < Math.pow(10, t) ? i + (0 | e) : e
        },
    }
    //将插件对象暴露给全局对象
    _win = (function(){ return this || (0, eval)('this'); }());
    !('plugin' in _win) && (_win.plugin = plugin);
}());

var divs = document.querySelectorAll('time');
var dates ;
[].forEach.call(divs, function(div) {
    // do whatever
    dates = div.dateTime;
    // console.log(dates);

});
var a = $(".time");
for (let i = 0; i <divs.length ; i++) {
    $(a[i]).html(plugin.convertTime(a[i].dateTime));
    // console.log(a[i]);
    // console.log(dates[i]);
}

