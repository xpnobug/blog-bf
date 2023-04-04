def by_parsel_replace(link):
    '''
    方案叁：利用parsel库，img标签中 src和data-lazy-src替换： <img src="懒加载编码" data-lazy-src="实际地址" alt="" style="">
    :param link: 文章链接
    :return:
    '''
    # 1、爬取html代码
    request = requests.get ( link )
    html = request.content.decode ( 'utf-8' )
    select = parsel.Selector ( html )

    # 2、获取文章标题和内容
    post_title = select.css ( '.post-title::text' ).get ()
    post_content = select.css ( '.post-content' ).get ()

    # 3、处理懒加载图片
    post_content = post_content.replace ( 'src', 'lazy' ).replace ( 'data-lazy-lazy', 'src' )  # 处理图片

    # 4、处理多余的标签
    # 蝴蝶主题代码框用table绘制分为行号（.gutter）和代码区域（.code） table标签转md会生成 '---'，解决： 用replace去除table，遍历去除<td class="gutter">xxx</td>
    # 去<table>
    post_content = post_content.replace ( '<table><tr><td class="gutter">',
                                          '<tr><td class="gutter">' )  # 主题配置代码不换行情况匹配规则 code_word_wrap: false
    post_content = post_content.replace ( '<table><tr><td class="code">',
                                          '<tr><td class="code">' )  # 主题配置代码不换行情况匹配规则 code_word_wrap: true

    # 去行号 当蝴蝶主题使用代码框换行时，代码框是单独的一个td标签，用replace处理掉
    code_span = select.css ( '.gutter' ).getall ()
    for i in code_span:
        post_content = post_content.replace ( i, '' )

    # 5、转md
    markdown = html2text.html2text ( post_content )
    # with open ( f'by_parsel_replace/{post_title}.md', 'w', encoding='utf-8' ) as file:
    #     file.writelines ( markdown )

    # 6、去代码框前多余的换行
    markdown = markdown.split ( '\n' )
    file_content = [ ]
    for i in range ( len ( markdown ) ):
        if (markdown[ i ].__eq__ ( '    ' ) or markdown[ i ].__eq__ ( '      ' )):
            continue
        else:
            file_content.append ( markdown[ i ] + '\n' )
    # 7、保存文件
    path = os.path.dirname ( __file__ )
    path = path + '/by_parsel_replace'
    if not os.path.exists ( path ):
        os.mkdir ( path )
    print ( file_content )
    with open ( f'{path}/{post_title}.md', 'w', encoding='utf-8' ) as file:
        for i in file_content:
            file.write ( i )
    return post_content

if __name__ == '__main__':
    url = 'https://zhangshier.vip/posts/7884/'
    # url = 'https://zhangshier.vip/posts/53805/'

    # print ( 'by_parsel_replace运行时长：' )
    # start = time.time ()
    # by_parsel_replace ( url )
    # print ( time.time () - start )
