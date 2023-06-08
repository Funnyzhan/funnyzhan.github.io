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
    var essayTittle=new Array("《最终幻想14：重生之境》这是我最爱的mmorpg")
    var essayPara=new Array(
        "《最终幻想14》作为该系列最成功的MMORPG作品，故事主要为路易索瓦把光之战士传送至5年后的未来故事。在全球最大的MMO媒体MMOsite上，《最终幻想14》获得了“最佳新作MMO游戏奖”、“最受欢迎MMORPG奖”、“最佳画面奖”、“最佳音效奖”殊荣，以及在M!Games Magazine上获得了“必玩游戏”奖项。 2022年10月，SE 宣布《最终幻想 14》玩家数现已突破 2700 万。",
        "<p>>>宏大而沉重的故事 永无止境的战斗物语</p>",
        "<img src='../images/ffxiv/banner1.jpg'>",
        "第七次到来的衰亡时代，世界正面临着“第七灵灾”。从东面而来的加雷马帝国，由蛮族召唤而至的“蛮神”...成为拯救艾欧泽亚的英雄吧",
        "<p>>>水晶的召唤</p>",
        "<img src='../images/ffxiv/ffxiv1.jpg'>",
        "海德林——一颗被水晶之光赐福，充满活力的星球。在蔚蓝大海的围绕下，三大洲的最西端环抱着被众神所祝福，由英雄所缔造的国度。她的名字是艾欧泽亚。",
        "你的故事就将在这里展开。在所有生命的来源——母水晶的召唤下，你将踏上探险之路，将这个国度从永恒黑暗的威胁下解救出来。",
        "<p>>>海德林</p>",
        "<img src='../images/ffxiv/ffxiv2.jpg'>",
        "自古以来，这颗翠绿的星球上已经诞生了无数的生命。但如今丑恶的伤疤已显露，大地将陷入死亡和黑暗的无底深渊中。",
        "你就是将希望之光带到海德林星球上的人……你就是将听从以太之光的轻声细语，将承担“冒险者”之责任的人。这就是你的旅程——一段将长久传唱的故事。",
        "<p>>>艾欧泽亚</p>",
        "<img src='../images/ffxiv/ffxiv3.jpg'>",
        "艾欧泽亚由三大洲最西端的阿尔迪纳德大陆和周围的岛屿所组成，在历史上曾是好几个独特文明的起源地。",
        "艾欧泽亚的北部是高耸入云的群山，峰顶寒风呼啸，南部则是一大片炽热无情的沙漠。但是这些荒凉的土地对人和怪兽却有巨大的吸引力，因为这里有宽广深厚的以太洪流，还有充满能量水晶的丰富矿脉。",
        "在这片严酷而充满活力的大地上，艾欧泽亚的人民们创造了自己的历史——欣欣向荣的星历和灾难性的灵灾交替循环的历史。",
        "第一灵灾终结了众神的时代，而在第一星历开启了凡人的时代之后，又发生了六次毁灭性的灵灾。这六次灵灾都各自带有六种元素中某一种元素的特点。因为每一种元素特点都已在过去的灾难中出现过，所以众人认为星历将永久持续下去。但是在神历记第七节预言中，梅萨亚预测了不幸的未来。“第六之阳”，或者说第六星历将要结束，而“第七之月”——第七灵灾的阴影将降临在这片大陆上。",
        "<p>>>海德林</p>",
        "<img src='../images/ffxiv/光之神海德林.png'>",
        "<p>>>佐迪亚克</p>",
        "<img src='../images/ffxiv/暗之神_佐迪亚克.png'>",
        "<p>>>美神</p>",
        "<img src='../images/ffxiv/美神6.jpg'>",
        "<p>>>大地与丰饶之神诺菲卡</p>",
        "<img src='../images/ffxiv/丰饶神诺菲卡.png'>",
        "<p>>>太阳与司理之神阿泽玛</p>",
        "<img src='../images/ffxiv/Azeyma.png'>",
        "还有许多......"
    )
    //开场效果
    $("#topLabel").css("transition","all 0s");
    $("#container").css("transition","all 0s");
    if(href.lastIndexOf("about.html")>=0){
        $("#bar").css("background-color","white");
        $("body").css("background-color","black")
        $("#bar").css("animation",'openScene2 0.8s ease 0s 1');
        setTimeout(function(){
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
