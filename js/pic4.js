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
    var essayTittle=new Array("音乐对于我们来说是什么")
    var essayPara=new Array(
        "古代音、乐有别。《礼记·乐记》：“凡音之起，由人心生也。人心之动，物使之然也，感於物而动，故形於声。声相应，故生变，变成方，谓之音。比音而乐之，及干戚、羽旄，谓之乐”。后称“音乐”，指用有组织的乐音表达人们的思想感情、反映社会生活的一种艺术。《三国·吴志·周瑜传》：“ 瑜少精意於音乐，虽三爵之后，其有阙误， 瑜必知之，知之必顾”。\
        《前汉书平话》卷下：“帝至棘门 ，左翼将徐迈以音乐迎之，送帝至霸陵桥上”。 温承训 《动人的音乐》诗：“真的，音乐是人们感情的语言”。",
        "<img src='../images/music/music1.jpg'>",
        "从古至今，音乐的形式、乐器的种类也在不停的发生着变化。现今又能古今中外结合起来，实在是一个难得的时代。我们知道音乐还有一个本质就是“和”，我们用“琴瑟和鸣”来形容夫妇情笃和好。因为很多或宏阔或悦耳的音乐都来自于不同声音的“和”。主旋律与和音你来我往、缠绵交织，打击乐与管乐、弦乐此呼彼应，我们听到的时候身体也会不自觉的一起律动。\
        我们听精彩的演唱会或安静的听一段优秀音乐的时候，有三种好玩的听音乐的方法：一种是脑海中追着其中一个乐器的声音走，可以是节奏的鼓，也可以是神出鬼没的主音吉他、键盘，也可以是和声的节奏吉他或钢琴，或担当不同角色的其他乐器。都可以有不同的感受，就像玩 moba 游戏时，玩着 或敦厚或跳脱的角色。第二种是，脑海中跟着主旋律走。如一开始跟\
        着破门而入或缓缓登场的前奏乐器或人声，慢慢的又一乐器大摇大摆的的上场，我们便跟着它走，在之后有些调皮的声音跳出来，可能很短暂，但我们也随着它走，直到一曲结束，跟到最后退场的声音。这又会有另一种乐趣。还有就是我们通常的听法，把整首音乐作为一个整体来听，不想那么多。\
        前面聊得都是声，包括器乐和人声。人声的内容很多时候是和词分不开的。如唐诗宋词元曲，还有现代的歌词。既然是诱导和媒介，文字显然比声音直接很多，它可以清楚的给我们一种意向或一个故事，也有文字故意没有很具体的着力点，增添一份神秘。\
        我们常说“读万卷书，行万里路”，结合大部分人来说，少年时期喜欢读书的并不多，行万里路又未必有那个条件。而我们平时听的歌，也是可以略微填补其中的不足的，因为对大部分来说歌有一部分娱乐性质，更容易被接受。而好的歌词作为一种文字形式，也可以像书一样，或带来共鸣，或带来安慰、或告诉你远方、或分享智慧。这些是歌词带来的意义，书能给的它也能给一部分。\
        音乐对我们来说意味着什么？工作、生活任何一件实质性的事情都可以理所当然的打断我们听音乐，因为不可否认现实需求是优先级更高的需求。",
        "<img src='../images/music/music2.jpg'>",
        "但也有很多时候音乐无可替代。"
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
        // var barH=$("#essay").css("height");
        $('#rightBar').height($(document).height()); 
        // console.log(barH)
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
