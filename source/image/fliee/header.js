// "linear-gradient(to right, #00b09b, #96c93d)",
// "linear-gradient(to right, #ff5f6d, #ffc371)",
$(function() {
    var Header = {
        init: function() {
            this.initEvent();
        },
        initEvent: function() {
            $('.header-input').on('keypress', function(event) {
                if (event.keyCode == "13") {
                    _hmt.push(['_trackEvent', 'search', 'click', $(this).val()]);
                    location.href = '/web/search?keyword=' + $(this).val() + '&pn=1';
                }
            });

            $('.meiye-tuijian-btn').on('click', function() {
                if ($('.no-login').length > 0) {
                    location.href = "/web/login";
                } else {
                    location.href = "/web/recommend/canvas";
                }
            });

            // 为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））
            $(window).scroll(function() {
                // 创建一个变量存储当前窗口下移的高度
                var scroTop = $(window).scrollTop();
                //判断当前窗口滚动高度
                //如果大于100，则显示顶部元素，否则隐藏顶部元素
                if (scroTop > 100) {
                    $('.go-top-container').fadeIn(500);
                } else {
                    $('.go-top-container').fadeOut(500);
                }
            });

            //为返回顶部元素添加点击事件
            $('.go-top').click(function() {
                //将当前窗口的内容区滚动高度改为0，即顶部
                $("html,body").animate({
                    scrollTop: 0
                }, "fast");
            });

            $('#has-login').hover(function() {
                $('#has-login .dropdown-menu').fadeIn();
                $('#has-login .user-arrow').addClass('up');
            }, function() {
                $('#has-login .dropdown-menu').fadeOut();
                $('#has-login .user-arrow').removeClass('up');
            });

            $('.dropdown-app').hover(function() {
                $('.dropdown-app .dropdown-menu').fadeIn();
                $('.dropdown-app .user-arrow').addClass('up');
            }, function() {
                $('.dropdown-app .dropdown-menu').fadeOut();
                $('.dropdown-app .user-arrow').removeClass('up');
            });
        }
    }
    Header.init();

    var Collection = {
        imageId: 0,
        folderId: 0,
        addObj: null,
        init: function() {
            this.initEvent();
            this.initFolder();
        },
        initFolder: function() {
            var self = this;
            $.ajax({
                type: "get",
                url: "/web/getFolder",
                dataType: 'json',
                data: {},
                success: function(result) {
                    var list = result.result;
                    nunjucks.configure('/public/view/home', {
                        autoescape: true
                    });
                    var str = nunjucks.render('folder.html', {
                        list: list
                    });
                    $('#click-collection-dialog .modal-body-container ul').append(str);
                    self.initScroll();
                },
                error: function(e) {
                    console.log(e.status);
                    console.log(e.responseText);
                }
            });
        },
        initScroll: function() {
            $('#click-collection-dialog .modal-body-container ul').mCustomScrollbar({
                theme: 'dark',
                scrollbarPosition: "outside"
            });
        },
        deleteCollection: function(imageId, _this) {
            var self = this;
            // 取消收藏
            $.ajax({
                type: "post",
                url: "/web/deleteCollection",
                dataType: 'json',
                data: {
                    image_id: imageId
                },
                success: function(result) {
                    spop({
                        template: '取消收藏成功',
                        style: 'success',
                        autoclose: 2000,
                        position: 'top-center'
                    });
                    $(self.addObj).addClass('animated');
                },
                error: function(e) {
                    console.log(e.status);
                    console.log(e.responseText);
                }
            });
        },
        initEvent: function() {
            var self = this;

            $('#click-collection-dialog').on('click', 'ul li', function() {
                $('#click-collection-dialog ul li.active').removeClass('active');
                $(this).addClass('active');
            })

            $('#save-collection-nav').click(function() {
                var folderId = $('#click-collection-dialog ul li.active').attr('folder-id');
                $.ajax({
                    type: "post",
                    url: "/web/addCollection",
                    dataType: 'json',
                    data: {
                        image_id: self.imageId,
                        folder_id: folderId
                    },
                    success: function(result) {
                        if (result.errno == 0) {
                            $('#click-collection-dialog').modal('hide');
                            spop({
                                template: '收藏成功',
                                style: 'success',
                                autoclose: 2000,
                                position: 'top-center'
                            });
                            $(self.addObj).removeClass('animated');
                        } else {
                            spop({
                                template: result.errmsg,
                                style: 'warning',
                                autoclose: 2000,
                                position: 'top-center'
                            });
                        }

                    },
                    error: function(e) {
                        console.log(e.status);
                        console.log(e.responseText);
                    }
                });
            })

            // $("#user-collection-wrapper").mCustomScrollbar({
            //     autoHideScrollbar: false
            // });


            $('#image-list').on('click', '.box-collection-icon', function() {
                if ($('.no-login').length > 0) {
                    $('.no-login').click();
                    return false;
                }
                self.imageId = $(this).attr('image-id');
                self.addObj = this;
                if ($(this).hasClass('animated')) {
                    $('#click-collection-dialog').modal('show');
                } else {
                    self.deleteCollection(self.imageId, this);
                }
            });

            $(window).on('add-collection', function(event, obj) {
                if ($('.no-login').length > 0) {
                    $('.no-login').click();
                    return false;
                }
                self.imageId = obj.imageId;
                self.addObj = obj._this;
                $('#click-collection-dialog').modal('show');
            });

            $(window).on('delete-collection', function(event, obj) {
                self.addObj = obj._this;
                self.deleteCollection(obj.imageId, obj._this);
            });

            $('#header .header-user .user-more').click(function() {
                $('#header .header-user .more-wrapper-dev').css({
                    right: '0px'
                });
            });

            $('#header .header-user .more-wrapper-title .close_fixed').click(function() {
                $('#header .header-user .more-wrapper-dev').css({
                    right: '-444px'
                });
            });

            $('#header .feedback-wrapper-tip, .client-connection').click(function() {
                var feed = document.querySelector('.crisp-kquevr');
                if (feed) {
                    feed.click();
                }
                $('.close_fixed').click();
            })
        }
    }
    Collection.init();


    var VIP = {
        timer: null,
        orderId: 0,
        init: function() {
            this.initEvent();
        },
        getStatus: function() {
            // 创建订单
            $.ajax({
                //请求方式
                type: "POST",
                //请求地址
                url: "/web/getOrderStatus",
                //数据，json字符串
                data: {
                    order_id: VIP.orderId
                },
                dataType: 'json',
                //请求成功
                success: function(res) {
                    if (res.errno === 0) {
                        $('.vip-pay-qrcode').addClass('hide');
                        $('.pay-success-message').removeClass('hide');
                        setTimeout(function() {
                            location.reload();
                        }, 3000);
                        clearTimeout(VIP.timer);
                    } else {
                        VIP.timer = setTimeout(function() {
                            VIP.getStatus();
                        }, 1000);
                    }
                },
                //请求失败，包含具体的错误信息
                error: function(e) {
                    console.log(e.status);
                    console.log(e.responseText);
                }
            });
        },
        initEvent: function() {
            $('.open-pro-btn').on('click', function() {
                $('#pay-vip-dialog').modal('show');
                $('.vip-open-title').html('开通Pro会员');
                $('.vip-weixin-wrapper').addClass('hide');
                $('.vip-open-rule-wrapper').show();
                $('.vip-open-back').addClass('hide');
                $('.vip-pay-select').addClass('hide');
                $('.vip-pay-qrcode').removeClass('hide');
                $('.vip-open-title').html('开通Pro会员');
            });
            $('.continue-pro-btn').on('click', function() {
                $('#pay-vip-dialog').modal('show');
                $('.vip-weixin-wrapper').removeClass('hide');
                $('.vip-open-rule-wrapper').hide();
                $('.vip-open-back').addClass('hide');
                $('.vip-pay-select').removeClass('hide');
                $('.vip-pay-qrcode').addClass('hide');
                $('.vip-open-title').html('续费Pro会员');
            });
            $('.vip-open-close').on('click', function() {
                $('#pay-vip-dialog').modal('hide');
            });
            // 打开vip支付
            $('.vip-open-btn').on('click', function() {
                $('.vip-weixin-wrapper').removeClass('hide');
                $('.vip-open-rule-wrapper').hide();
                $('.vip-open-back').removeClass('hide');
                $('.vip-pay-select').removeClass('hide');
                $('.vip-pay-qrcode').addClass('hide');
            });
            // 按钮切换
            $('.vip-tab-ul li').on('click', function() {
                $('.vip-tab-ul li.active').removeClass('active');
                $(this).addClass('active');
            });
            // 点击微信支付，是生成二维码
            $('.vip-one-btn').on('click', function() {
                $('.vip-pay-select').addClass('hide');
                $('.vip-pay-qrcode').removeClass('hide');
                var product_id = $('.vip-tab-ul li.active').attr('value');
                // 创建订单
                $.ajax({
                    //请求方式
                    type: "POST",
                    //请求地址
                    url: "/web/createOrder",
                    //数据，json字符串
                    data: {
                        product_id: product_id
                    },
                    dataType: 'json',
                    //请求成功
                    success: function(res) {
                        if (res.errno === 0) {
                            $('.vip-pay-qrcode img').attr('src', '/web/qrcode?url=' + res.result.code_url);
                            VIP.orderId = res.result.order_id;
                            $('.vip-result-msg .price').html(res.result.total_fee);
                            $('.vip-result-msg .time').html(res.result.vip_expiered);
                            VIP.getStatus();
                        }
                    },
                    //请求失败，包含具体的错误信息
                    error: function(e) {
                        console.log(e.status);
                        console.log(e.responseText);
                    }
                })
            });
            // 返回
            $('.vip-open-back').on('click', function() {
                $('.vip-weixin-wrapper').addClass('hide');
                $('.vip-open-rule-wrapper').show();
                $('.vip-open-back').addClass('hide');
            });
        }
    }
    VIP.init();
})