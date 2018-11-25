window.onload = function () {
    run();
    function run() {
        // 获取元素
        var box = document.getElementById('box');
        var pics = document.querySelectorAll('.pic');
        var divs = document.querySelectorAll('.div');
        // 获取pic的宽度
        var pics_width = pics[0].offsetWidth;
        // console.log(pics_width);
        // 获取div的宽度
        var divs_width = divs[0].offsetWidth;
        // console.log(divs_width);
        // 获取可视区域的宽度
        var client_width = document.documentElement.clientWidth;
        // 求列数
        var col = parseInt(client_width / divs_width);
        // console.log(col);
        //求父盒子的宽度
        var box_width = col * divs_width;
        // 父盒子居中
        box.style.width = box_width + 'px'
        box.style.margin = '0 auto';
        // box.style.
        // 创建新数组
        var heightArr = [];
        // 子盒子定位
        for (var i = 0; i < divs.length; i++) {
            // 获得box的高度
            var div_height = divs[i].offsetHeight;
            // 把第一行盒子的高度放入数组中
            if (i < col) {
                heightArr.push(div_height)
            } else {
                //剩余行
                //取最矮盒子的高度
                var minheight = _.min(heightArr);
                // 求出最矮盒子对应的索引
                minboxindex = index(heightArr, minheight)
                // 给盒子加定位
                divs[i].style.position = 'absolute';
                divs[i].style.left = minboxindex * divs_width + 'px';
                divs[i].style.top = minheight + 'px';
                // 更新数组中的高度
                heightArr[minboxindex] += div_height;
            }

        }
        // 获取数组下标
        function index(arr, boxheight) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == boxheight) {
                    return i;
                }
            }
        }
    }

    // 判断是否具备加载图片的条件
    function getimgs() {
        // 获取元素
        var divs = document.querySelectorAll('.div');
        // 获取最后一个box
        for (var i = 0; i < divs.length; i++) {
            var lastimg = divs[divs.length - 1]
        }
        // 求出最后一个盒子自身高度的一半+offsetTop
        var last_heihgt = parseInt(lastimg.offsetHeight) * .5 + lastimg.offsetTop;
        // 获取可视区域的宽度
        var client_width = document.documentElement.clientWidth;
        // 获得滚动的高度
        var scrollheight = scroll().top;
        // 返回最后一个盒子<=可视高度+滚动高度
        return last_heihgt <= client_width + scrollheight

        // console.log(last_heihgt)

    }
    var timer;
    // 动态加载图片
    window.onscroll = function () {
        // 清理定时器
        clearInterval(timer);

        // 设定定时器
        timer = setInterval(function () {
            var box = document.getElementById('box');
            // 创建数据
            if (getimgs()) {
                var img_src = [
                    { 'src': 'img11.jpg' },
                    { 'src': 'img10.jpg' },
                    { 'src': 'img12.jpg' },
                    { 'src': 'img01.jpg' },
                    { 'src': 'img13.jpg' },
                    { 'src': 'img14.jpg' },
                    { 'src': 'img15.jpg' },
                    { 'src': 'img16.jpg' },
                    { 'src': 'img17.jpg' },
                    { 'src': 'img18.jpg' },
                    { 'src': 'img02.jpg' },
                    { 'src': 'img03.jpg' },
                    { 'src': 'img04.jpg' },
                    { 'src': 'img05.jpg' },
                    { 'src': 'img06.jpg' },
                    { 'src': 'img07.jpg' },
                    { 'src': 'img08.jpg' },
                    { 'src': 'img09.jpg' },
                    { 'src': 'img19.jpg' },
                    { 'src': 'img20.jpg' },
                    { 'src': 'img21.jpg' },
                    { 'src': 'img22.jpg' },
                    { 'src': 'img23.jpg' },
                    { 'src': 'img24.jpg' },
                    { 'src': 'img25.jpg' }
                ];
                // 动态创建div pic img元素并追加到页面中
                for (var i = 0; i < img_src.length; i++) {
                    var div_div = document.createElement('div');
                    var img = document.createElement('img');
                    var div_pic = document.createElement('div');
                    div_div.className = 'div';
                    img.src = "./imgs/" + img_src[i].src;
                    div_pic.className = 'pic';
                    box.appendChild(div_div);
                    div_div.appendChild(div_pic);
                    div_pic.appendChild(img);
                }

                run()
            }
        }, 100)


    }



























}