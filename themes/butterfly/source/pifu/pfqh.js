
// 更换背景插件
// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    // 导航栏变色
    // document.querySelectorAll('#nav .back-home-button').forEach((item) => { item.style.color = 'white'; });
    // document.querySelectorAll('#nav a').forEach((item) => { item.style.color = 'white'; });
    // document.querySelectorAll('.not-top-img .menus_item>a').forEach((item) => { item.style.color = 'white'; });
    // document.querySelectorAll('.not-top-img #buttons a').forEach((item) => { item.style.color = 'white'; });
    // document.querySelectorAll('#page-header #post-info').forEach((item) => { item.style.color = 'white'; });
    document.querySelectorAll('#aside-content .card-widget').forEach((item) => { item.style.background = 'rgba(255, 255, 255, .7)'; });
    document.querySelectorAll('#recent-posts>.recent-post-item,.layout_page>div:first-child:not(.recent-posts),.layout_post>#page,.layout_post>#post,.read-mode .layout_post>#post').forEach((item) => { item.style.background = 'rgba(255, 255, 255, .7)'; });
    document.querySelectorAll('.layout > div:first-child:not(.recent-posts)').forEach((item) => { item.style.background = 'rgba(255, 255, 255, .7)'; });
    if (!flag) {
        btf.snackbarShow("壁纸切换成功，将于一天后到期~");
        saveData('blogbg', s) }
}
// 以下为2.0新增内容
// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 9999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#5fcdff',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)
    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    <div class="note info flat"><p>点击对应样式即可切换背景。<br>相册图片也可以当作壁纸哦~ <a href="/wallpaper/">前往相册</a></p></div>
    <div class="note pink icon-padding flat"><i class="note-icon fa-solid fa-image"></i><p>有效期为一天，到期切回默认壁纸。</p></div>

    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    
        <div class="site-content container">
            <div class="row">
                <div class="col-lg-img">
                    <div class="wallpaper-tags">
                        <ul>
                            <li data-id="36" onclick="loadData(36, true);changeTitle(this)">4K专区</li>
                            <li data-id="6" onclick="loadData(6, true);changeTitle(this)">美女模特</li>
                            <li data-id="30" onclick="loadData(30, true);changeTitle(this)">爱情美图</li>
                            <li data-id="9" onclick="loadData(9, true);changeTitle(this)">风景大片</li>
                            <li data-id="15" onclick="loadData(15, true);changeTitle(this)">小清新</li>
                            <li data-id="26" onclick="loadData(26, true);changeTitle(this)">动漫卡通</li>
                            <li data-id="11" onclick="loadData(11, true);changeTitle(this)">明星风尚</li>
                            <li data-id="14" onclick="loadData(14, true);changeTitle(this)">萌宠动物</li>
                            <li data-id="5" onclick="loadData(5, true);changeTitle(this)">游戏壁纸</li>
                            <li data-id="12" onclick="loadData(12, true);changeTitle(this)">汽车天下</li>
                            <li data-id="10" onclick="loadData(10, true);changeTitle(this)">炫酷时尚</li>
                            <li data-id="29" onclick="loadData(29, true);changeTitle(this)">月历壁纸</li>
                            <li data-id="7" onclick="loadData(7, true);changeTitle(this)">影视剧照</li>
                            <li data-id="13" onclick="loadData(13, true);changeTitle(this)">节日美图</li>
                            <li data-id="22" onclick="loadData(22, true);changeTitle(this)">军事天地</li>
                            <li data-id="16" onclick="loadData(16, true);changeTitle(this)">劲爆体育</li>
                            <li data-id="18" onclick="loadData(18, true);changeTitle(this)">BABY秀</li>
                            <li data-id="35" onclick="loadData(35, true);changeTitle(this)">文字控</li>
                        </ul>
                    </div>
                    <div class="content-area">
                        <main class="site-main">
                            <article class="type-post post-wallpaper">
                                <div class="container-wallpaper">
                                    <div class="jigsaw" id="walBox"></div>
                                    <div id="loadmore">壁纸加载中……</div>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    <div class="gotop"> <a id="goTopBtn" href="javascript:;"><i class="iconfont icon-shang"></i><em>返回顶部</em></a></div>
`;
}
// // 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}
// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
