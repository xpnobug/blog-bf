/*!
 * 壁纸湖www.bizihu.com专属图片d点击下载JS
 * 来源 网络
 * 感谢好哥们 子琦大佬 帮忙修正
 */

function download(url, name) {
    // 发送http请求，将文件链接转换成文件流
    fileAjax(url, function(xhr) {
        downloadFile(xhr.response, name)
    }, {
        responseType: 'blob'
    })
}

function fileAjax(url, callback, options) {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    if (options.responseType) {
        xhr.responseType = options.responseType
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr)
        }
    }
    xhr.send()
}

function downloadFile(content, filename) {
    window.URL = window.URL || window.webkitURL
    let a = document.createElement('a')
    let blob = new Blob([content], {
        type: 'image/jpg'
    });
    // 通过二进制文件创建url
    let url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename
    a.click()
    // 销毁创建的url
    window.URL.revokeObjectURL(url)
}