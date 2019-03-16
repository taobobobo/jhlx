window.onload = function () {

    search();

    // 选项卡
    changeTab("tab","card","dd","li");
    changeTab("tab2","card2","dd","li");
    changeTab("tab3","card3","dd","li");
    changeTab("tab4","card4","dd","li");
    changeTab("tab5","card5","dd","li");
    

    var oBtn = document.getElementById("btn");
    var oBtnli = oBtn.children;
    var oBox = document.getElementById("banner");
    var oUl = oBox.getElementsByTagName("ul")[0];
    var oLi = oUl.children;
    var newLi = oUl.children[0].cloneNode(true);
    oUl.appendChild(newLi);
    var str="";
    for(var x=0;x<oLi.length-1;x++){
        str+="<li></li>"
    };
    oBtn.innerHTML=str;
    oBtnli[0].className="active";
    var index=0;
    var num=0;

    var timer=setInterval(function(){move();},3000);
    oBox.onmouseover=function(){clearInterval(timer)};
    oBox.onmouseout=function(){timer=setInterval(function(){move();},3000)};
    function move(){
        index++;
        num++;
        if (index> oLi.length - 1) {
            index= 1;
            oUl.style.left = 0 + "px";
        };
        if (num> oBtnli.length - 1) {
            num= 0;
        };
        for(var i=0;i<oBtnli.length;i++){
            oBtnli[i].className="";
        };
        oBtnli[num].className="active";
        annimate(oUl, -15, -index * oLi[0].offsetWidth);
    };

    for(var j=0;j<oBtnli.length;j++){
        oBtnli[j].index=j;
        oBtnli[j].onmouseover=function(){
            clearInterval(timer);
             for(var i=0;i<oBtnli.length;i++){
                oBtnli[i].className="";
             };
             oBtnli[this.index].className="active";
             index=this.index;
             annimate(oUl, -15, -index * oLi[0].offsetWidth);
        };
    };

};

