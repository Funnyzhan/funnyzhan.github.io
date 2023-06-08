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
    var essayTittle=new Array("人们读书的意义何在，为什么要读书？")
    var essayPara=new Array(
        "一本书读完可能很快就忘干净了，好比竹篮打水，是一场空，但是竹篮经过一次次水的洗礼，会一次比一次干净。一个人每天看书，可能记不住什么，\
        但是在潜意识里会明自，什么是对，什么是错。有一些意识正通过读书融进你的血液里，灵魂里，不断揉捏出一个新的自己。",
        "读一本书，可以帮到我们的点太多。",
        "读书的重要性自古便有迹可循“中华先哲格言”第一块字板上着：“不登峻岭，何知天高；不履深渊，罔识地厚；不读圣经贤传，莫明事物之理。”",
        "<img src='../images/book/book1.jpg'>",
        "腹有诗书气自华",
        "央视著名主持人撒贝宁曾在《经典永流传》中有这样一段畅谈人生的话：“人生如一场修行。得意时，一日看尽长安花；艰难时，潦倒新停浊酒杯；但生命的跋涉不能回头，哪怕畏途巉岩不可攀，也要会当凌绝顶，哪怕无人会登临意，也要猛志固常在，从经典中，汲取九万里风鹏正举的力量，历练也无风雨也无晴的豁然，待到重阳日，我们还来就菊花！”",
        "<img src='../images/book/book2.jpg'>",
        "在书中，有一个更大的世界“读书真的能解答我的困惑吗？”这个诉求一开始便是错误的，书籍不能告诉我们答案，而是告诉我们思考的方式。在义务教育阶段，我们的课本由专业的教师撰写，内容扎实，语言简单易懂。有人说，上学时期是人生最容易的一个阶段，因为总有人告诉你要学什么、看什么、获得什么，只需要坐在那里，有人把果子摘好洗净放到你面前供你享用。\
        但一旦进入社会，课本以外的知识包罗万象，复杂神秘又可怕，想在这样的野生环境中生存，一定要学会自我思考，自我总结，建立一个能看到知识的“入口”。然而，这样的能力只能通过阅读、学习来培养。一起探寻读书的意义每个人看到世界的样子不同、经历的人生亦不相同，书籍共享了更多有效的观点和思考方向。有时，我们没有时间感受的，没有时间等待的经验，\
        书籍会让我们更早认清自己。我们是谁？真正需要的东西是什么？最好的选择是什么？或许书籍能带给你解决一切的启发。真正改变你的命运是知识背后的习惯，它决定你行为的思维方式。读书，虽然大部分都忘记了，但你内心的修为、习惯、眼界却根深蒂固的影响着你，让你更清醒，不至于狂妄，最后成为你想成为的人。正如莎士比亚所说：“生活里没有书籍，就好像没有阳光；智慧里没有书籍，就好像鸟儿没有翅膀。",

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
