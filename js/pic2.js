$(function(){
    //获取当前的页面数
    var href=self.location.href;
    var adress=href.lastIndexOf("pic");
    var pageNum=href[adress+3];
    var tittleColor=new Array("","rgb(202,45,42)","rgb(219,203,180)","rgb(96,159,160)","rgb(255,245,15)","rgb(62,162,13)")
    for(var i=60;i<=90;i++){
        // console.log(i,i/(i+100))
    }
    //文章内容
    var essayTittle=new Array("《刀剑神域》我的入坑番")
    var essayPara=new Array(
        "本作原是作者于2002年11月～2008年7月在其个人网站“WordGear”上连载的网络小说（共连载了“艾恩葛朗特”篇、“妖精之舞”篇、“死枪”篇、“Alicization”篇）。在决定出版文库本后，作者停止了网络版连载。",
        "“这虽然是游戏，但可不是闹着玩的。”",
        "        ——“SAO 刀剑神域”设计者·茅场晶彦——",
        "2022年，人类的科技力终于得以将完全的网络虚拟空间实际制造出来。大厂牌电子机械制造商“ARGUS”开发出了名为“NERvGear”的新世代民用终端，使得完全网络虚拟空间潜行能够被利用到了一般的网游之中，而《SAO》——刀剑神域便是首个利用该先进技术的大型VRMMO。",
        "桐谷和人，一名年轻的网游玩家，便是使用NERvGear玩《SAO》的先行者玩家之一。他很幸运——抑或说不幸地获得了参与封闭测试的资格，并在游戏正式上线营运之日就迫不及待地戴上头盔造型的“NERvGear”，以“完全潜行”的状态和其他9500名玩家一起，开始享受起了正式版的SAO世界。",
        "但很快，新鲜感带来的愉悦就变成了未知的不安。SAO正式上线4小时后，正和好友组队的和人发现封测时确实存在的“退出”指令竟然从指令控制面板上消失了。虽然和人以为这只是暂时的系统BUG而未加在意，但很快，他就和其他全部玩家一道被传送到了游戏的开始之地——起始广场。\
        而在广场上等待着他们的，是自称SAO游戏设计者的科学天才——“茅场晶彦”的死亡游戏说明：不能退出是游戏的正常现象，只有打倒位于“艾恩葛朗特”顶楼100层的魔王——即达成“完全攻略”——才是离开这个世界唯一的方法。\
        并且，在游戏内Game Over或是尝试脱下NERvGear，现实中的玩家也会立刻被NERvGear发出的高出力微波破坏脑部而死亡。\
        突如其来的恐惧，导致最初的一个月内死亡人数就突破了2000，然而渐渐地，玩家们开始习惯了这个“真实的虚拟世界”，两年之后，尚有6000名玩家存活，最前线已推进到第74层\
        ……而桐谷和人，则化身成名为“桐人”的黑衣剑士，开始谱写他作为一名独行玩家的冒险篇章。",
        "<img src='../images/SAO/sao1.jpg'>",
        "<img src='../images/SAO/sao2.jpg'>",
        "<img src='../images/SAO/sao3.jpg'>",
        "<img src='../images/SAO/sao4.jpg'>",
        "<img src='../images/SAO/sao5.jpg'>",
        "<img src='../images/SAO/sao6.jpg'>",
        "<div style='font-weight:bold'>所以都2023年了，我的SAO什么时候能玩<div>",
    )
    //开场效果
    $("#topLabel").css("transition","all 0s");
    $("#container").css("transition","all 0s");
    if(href.lastIndexOf("about.html")>=0){
        $("#bar").css("background-color","white");
        $("body").css("background-color","black")
        $("#bar").css("animation",'openScene2 0.8s ease 0s 1');
        setTimeout(function(){
            "<img src='../images/SAO/sao1.jpg'>",
            $("body").css("background-color","white")
        },600)
    }
    else{
        $("#bar").css("background-color",tittleColor[pageNum]);
        $("#bar").css("animation",'openScene 1.5s ease 0s 1');
    }
    $("#topLabel").css("opacity","0");
    $("#container").css("opacity","0");
    setTimeout(function(){
        $("#bar").css("display", "none");
        //提前做好善后工作，为退出动画做准备
        $("#bar").css("left","100%");
        $("#bar").css("width","0%");
        $("#bar").css("background-color","black");
    },1500)
    setTimeout(function(){
        $("#topLabel").css("transition","all 0.6s");
        $("#container").css("transition","all 0.6s");
        $("#topLabel").css("opacity","1");
        $("#container").css("opacity","1");
    },1000)
    //页面顶部标签
    $("#leftCaption").hover(function () {
    $("#arrow").css("transition", "all 0.3s");
    $("#arrow").css("margin-right", "5px");
        $("#arrow").css("margin-left", "0px");
    }, function () {
        $("#arrow").css("margin-right", "0px");
        $("#arrow").css("margin-left", "5px");
        $("#arrow").css("transition", "all 0.6s");
    });
    //绑定跳转页面  
    $("#leftCaption").click(function(){
        $("body").css("overflow","hidden");
        $("#bar").css("display", "block");
        $('#bar').height($(document).height()); 
        $("#bar").css("animation",'endScene 0.8s ease 0s 1');
        setTimeout(function(){
            location.replace("../index.html")
        },600)
    })  
    $("#rightCaption").click(function(){
        $("#rightBar").css("animation",'endScene 0.8s ease 0s 1');
        setTimeout(function(){
            location.replace("about.html?lastWebsite=pic"+pageNum+".html")
        },600)
    })
    //添加文章主体部分内容
    $("#essay").append($("<div id='tittle'>"+essayTittle[0]+"</div>"));
    for(var i=0;i<essayPara.length;i++){
        // console.log((essayPara[i].search("<p>")))
        if((essayPara[i].search("<img"))>=0){
            $("#essay").append($("<div class='imgDiv'>"+essayPara[i]+"</div>"));
        }
        else if((essayPara[i].search("<p>"))>=0){
            $("#essay").append($("<div class='pDiv'>"+essayPara[i]+"</div>"));
        }
        else
            $("#essay").append($("<div class='paraDiv'>"+essayPara[i]+"</div>"));
    }
    
    //或许是由于$()是在界面界面中的DOM结构完成时候执行,因此马上执行会出错
    setTimeout(function(){
        //设置右边的bar
        $('#rightBar').height($(document).height()); 
        $("#rightCaption").hover(function(){
            $("#rightBar").css("left","99%");
            $("#rightBar").css("width","1%");
        },function(){
            $("#rightBar").css("width","0%");
            $("#rightBar").css("left","100%");
        })
        $("#leftCaption").hover(function(){
            $("#rightBar").css("left","99%");
            $("#rightBar").css("width","1%");
        },function(){
            $("#rightBar").css("width","0%");
            $("#rightBar").css("left","100%");
        })
    
    },100)

    //设置字体变色
    $("#rightCaption").hover(function(){
        // console.log($(this).css("color"))
        if($(this).css("color")=="rgb(0, 0, 0)")
            $(this).addClass("blackChangeColorWords");
        else
            $(this).addClass("whiteChangeColorWords");
    },function(){
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

    //实现线程休眠,等到指定时间在重新唤起（ms）
    function sleep(delay) {
        var start = (new Date()).getTime();
        while ((new Date()).getTime() - start < delay) {
          continue;
        }
    }    

})
