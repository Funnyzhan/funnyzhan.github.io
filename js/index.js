$(function () {
    var nowSel = 0, oldSel = 0;
    var bgColor = new Array("", "white", "rgb(25,106,195)", "rgb(252,249,222)", "rgb(238,70,83)", "rgb(154,208,239)")
    var tittleColor = new Array("", "rgb(202,45,42)", "rgb(219,203,180)", "rgb(96,159,160)", "rgb(255,245,15)", "rgb(62,162,13)")
    var sentencesColor = new Array("", "black", "white", "black", "white", "black")
    var tittle = new Array("", "最终幻想14", "刀剑神域", "中华传统节日端午节", "一起听听歌", "你的书呢让我看看")
    var sentences = new Array("", "《最终幻想14：重生之境》（原版名称：ファイナルファンタジーXIV:新生エオルゼア/FINAL FANTASY XIV:A Realm Reborn、简称：FF14）是由日本游戏开发商史克威尔艾尼克斯（Square Enix）开发的3D大型多人在线角色扮演游戏，是最终幻想系列的第十四部游戏作品。",
        "《刀剑神域》是川原砾著作、abec负责插画、电击文库所属的轻小说，也是作者继《加速世界》后又一文库化的小说。",
        "农历五月初五，俗称“端午节”是中国民间的传统节日。初五可以称为端五。从史籍上看，“端午”二字最早见于晋人周处《风土记》：“仲夏端午，烹鹜角黍”。端午节是我国汉族人民的传统节日。",
        "人类社会究竟从什么时候开始有了音乐，已经无法考察。但是早在人类还没有产生语言时，就已经知道利用声音的强弱等来表达自己的意思和感情。随着人类劳动的发展，逐渐产生了统一劳动节奏的号子和相互间传递信息的呼喊，这便是最原始的音乐雏形：当人们庆贺收获和分享劳动成果时，往往敲打石器、木器以表达喜悦、欢乐之情。",
        "书本是指装订成册的著作，包括纸质书、绢、竹简、羊皮卷等。语出《后汉书》：“酷吏樊晔为天水郡守，凉州为之歌曰：‘宁见乳虎穴，不入冀府寺’”。而江南书本“穴”皆误作“六”。")
    
    
    //第一部分————加载页面
    //将图像移至页面上方
    var picNum = 5;   //图片数量
    var picHei = $("#pic1").height()
    var picTop = $("#pic1").offset().top
    var movEnd = ($(window).height() * 1.1 - picHei) / 2 - picTop;
    var movStart = -picTop - $("#move").height() - movEnd * 0.2;
    var space = movEnd - movStart;
    //设置幕布及进度条
    var interval = 15;
    var process = 0;
    //幕布大小，亦即汉字大小（px）
    var curtainHeight = 118;
    var tmp
    // $("#move").css("top",-$("#pic1").offset().top-movEnd*0.15+"px")
    $("#curtain").css("display", "block")
    $("#curtain").css("bottom", $(window).height() - $(".caption1").offset().top - $(".caption1").height());
    //递归调用实现速度变化效果
    recursion();
    function recursion() {
        setTimeout(() => {
            process += 0.4;
            $(".bar").height(process + "%")
            $("#curtain").height(curtainHeight * process / 100 + "px")
            $("#move").css("top", movStart + space * process / 100 + "px")
            if (process <= 100) {
                interval = 15 - 10 * Math.sin(Math.PI * process / 100);
                // console.log(interval);
                recursion();
            }
            else {
                partTwo();
            }
        }, interval);
    }
    //partTwo();


    //第二部分
    //picSpace为移动图像时的间距 
    function partTwo() {
        $(".pics").css("transform", "rotate(7deg) rotateX(12deg) rotateY(-40deg)")
        $("#secContainer").css("perspective", "1500px")
        $(".bar").animate({
            width: '200%'
        }, 600, function () {
            //重置页面，删除原先内容
            $("body").css("background-color", "white");
            setTimeout(function () {
                $("body").css("transition", "all 0.6s");
            }, 600)
            $("#firstToDel").remove();
            $("#firstToAppear").css("opacity", "1");
            $("#topLabel").css("opacity", "1");
            $("#newBar").css("width", "1.2%");
        })
        selectOneMove(0)
        //使用闭包将变量i的值保护起来
        for (var i = 1; i <= picNum; i++)
            (function (arg) {
                $("#pic" + arg).click(function () {
                    selectOneMove(arg)
                })
            })(i)
        //鼠标滚轮控制图片滚动 注意这里引入了jquery.mousewheel.js插件才能实现
        var stop = 0;
        $("#move").hover(function (e) {
            // over
            $("#move").on("mousewheel", function (e) {
                if (!stop) {
                    if (e.deltaY > 0) {
                        if (nowSel > 1) {
                            selectOneMove(nowSel - 1)
                        }
                    }
                    else {
                        if (e.deltaY < 0) {
                            if (nowSel < picNum) {
                                selectOneMove(nowSel + 1)
                            }
                        }
                    }
                    stop = 1;
                    setTimeout(() => {
                        stop = 0;
                    }, 550);
                }
            })
        }, function (e) {
            // out
            $("#move").off("mousewheel")
        }
        );
        $("#startBut").hover(function () {
            $("#arrow").css("transition", "all 0.3s");
            $("#arrow").css("margin-left", "5px");
            $("#newBar").css("transition", "all 0.3s");
            $("#newBar").css("width", "2%");
        }, function () {
            $("#arrow").css("margin-left", "0px");
            $("#arrow").css("transition", "all 0.6s");
            $("#newBar").css("width", "1.2%");
            $("#newBar").css("transition", "all 0.6s");
        }
        );
        //绑定跳转页面
        for (var i = 1; i <= picNum; i++) {
            (function (arg) {
                $("#pic" + arg).click(function () {
                    //console.log(arg,oldSel)
                    if (arg == oldSel) location.replace("html/pic" + arg + ".html")
                })
                $("#pic" + arg).hover(function () {
                    if (nowSel == arg) {
                        $("#newBar").css("transition", "all 0.3s");
                        $("#newBar").css("width", "2%");
                    }
                }, function () {
                    if (nowSel == arg) {
                        $("#newBar").css("width", "1.2%");
                        $("#newBar").css("transition", "all 0.6s");
                    }
                })
            })(i)
        }
        $("#more").click(function () {
            location.replace("html/pic" + nowSel + ".html")
        })
        $("#rightCaption").click(function () {
            $("#rightBar").css("animation",'endScene 0.8s ease 0s 1');
            
            setTimeout(function(){
                location.replace("html/about.html?lastWebsite=index.html")
            },600)
        })
        $("#leftCaption").click(function () {
            window.open("html/intro.html")
        })

        //设置右边的bar
        $('#rightBar').height($(document).height()); 
        $("#rightCaption").hover(function(){
            $("#rightBar").css("left","99%");
            $("#rightBar").css("width","1%");
        },function(){
            $("#rightBar").css("width","0%");
            $("#rightBar").css("left","100%");
        })

        //设置字体变色
        $("#rightCaption").hover(function(){
            if($(this).css("color")=="rgb(0, 0, 0)")
                $(this).addClass("blackChangeColorWords");
            else
                $(this).addClass("whiteChangeColorWords");
        },function(){
            if($(this).css("color"))
                $(this).removeClass("blackChangeColorWords");
                $(this).removeClass("whiteChangeColorWords");
        })
        $("#leftCaption").hover(function(){
            if($(this).css("color")=="rgb(0, 0, 0)")
                $(this).addClass("blackChangeColorWords");
            else
                $(this).addClass("whiteChangeColorWords");
        },function(){
            $(this).removeClass("blackChangeColorWords");
            $(this).removeClass("whiteChangeColorWords");
        })

        //浮动的幅度
        process = 0.4
        //浮动的速度
        interval = 10
        //临时控制变量
        tmp = 75
        reFloatUD()
    }
    
    //当选中第i幅图像,移动图像位置
    function selectOneMove(i) {
        if (!i) i = 1;
        else {
            //首次不需要执行的代码
            $("body").css("background-color", bgColor[i]);
        }
        //首次需要执行的代码
        oldSel = nowSel, nowSel = i; //储存当前的图片
        // if(oldSel&&nowSel){
        //     //console.log(parseInt(oldSel),parseInt(nowSel))
        //     if(parseInt(oldSel)-parseInt(nowSel)<0){
        //         var tmpArray=Array("#newTittle","#newShow","#startBut")
        //         for(var i;i<tmpArray.length;i++){
        //             (function(arg){                         
        //                 $(tmpArray[arg]).animate({
        //                     marginBottom:'+=20px',
        //                     opacity:'0'
        //                 },200,function(){
        //                     $(tmpArray[arg]).css("margin-bottom",parseFloat($(tmpArray[arg]).css("margin-bottom"))-20+"px")
        //                     $(tmpArray[arg]).css("opacity","1");
        //                 })
        //             })(i)
        //         }
        //     }
        // }
        var newTop = ($(window).height() * 1.4 - 1.6 * i * picHei) / 2 - picTop + 'px'
        $("#move").animate({
            top: newTop
        }, 600)
        i = parseInt(i)
        $("#pic" + (i)).css("width", "80%")
        $("#pic" + (i)).css("margin-left", "0%")
        $("#pic" + (i)).css("filter", "grayscale(0%)")
        if (i - 1 >= 1) {
            $("#pic" + (i - 1)).css("width", "60%")
            $("#pic" + (i - 1)).css("margin-left", "10%")
            $("#pic" + (i - 1)).css("filter", "grayscale(100%)")
        }
        if (i + 1 <= picNum) {
            $("#pic" + (i + 1)).css("width", "60%")
            $("#pic" + (i + 1)).css("margin-left", "10%")
            $("#pic" + (i + 1)).css("filter", "grayscale(100%)")
        }
        //添加文字
        $("#newTittle").html(tittle[i]);
        $("#newTittle").css("color", tittleColor[i]);
        $("#newShow").html(sentences[i]);
        $("#newShow").css("color", sentencesColor[i]);
        $("#more").css("color", sentencesColor[i]);
        $("#arrow").css("border-color", tittleColor[i]);
        $("#topLabel").css("color", sentencesColor[i]);
        $("#newBar").css("background-color", tittleColor[i])

    }
    //图像上下浮动，体现动感
    function reFloatUD() {
        setTimeout(() => {
            tmp += 0.4;
            var newTop = parseFloat($("#move").css("top")) + process * Math.sign(Math.sin(2 * Math.PI * tmp / 100))
            $("#move").css("top", newTop + "px")
            if (tmp > 100) tmp = 0.4;
            interval = 30 - 10 * Math.abs(Math.sin(2 * Math.PI * tmp / 100));
            //console.log(interval)
            reFloatUD();
        }, interval);
    }
})

//实现线程休眠,等到指定时间在重新唤起（ms）
function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}    