window.onload = function () {

    search();

//留学申请选项卡
    changeTab("tab","card1","li","li");
//课程培训选项卡
    changeTab("tab2","card2","li","li");

// 主页banner轮播
    var oBbox = document.getElementById("banner");
    var oUl = oBbox.getElementsByTagName("ul")[0];
    var oLi = oUl.children;
    var oBleft = document.getElementById("pre");
    var oBright = document.getElementById("next");
    var oBnum = document.getElementById("banner_num");
    var oIndex = oBnum.getElementsByTagName("span")[0];
    var oLen = oBnum.getElementsByTagName("b")[0];
    var newLi = oUl.children[0].cloneNode(true);
    oUl.appendChild(newLi);
    var index = 0;
    var num = 1;
    oIndex.innerHTML = num;
    oLen.innerHTML = oLi.length - 1;
    
    var timer = setInterval(function () { move(); }, 3000);
    oBbox.onmouseover = function () { clearInterval(timer); }
    oBbox.onmouseout = function () { timer = setInterval(function () { move(); }, 3000); }
    function move() {
        index++;
        num++
        if (index > oLi.length - 1) {
            index = 1;
            oUl.style.left = 0 + "px";
        }
        if (num > oLi.length - 1) {
            num = 1;
        }
        oIndex.innerHTML = num;
        annimate(oUl, -15, -index * oLi[0].offsetWidth);
    };

    oBleft.onclick = function () {
        clearInterval(timer);
        num--;
        if (num < 1) {
            num = oLi.length - 1;
        }
        oIndex.innerHTML = num;
        index--;
        if (index < 0) {
            index = oLi.length - 2;
            oUl.style.left = (-index - 1) * oLi[0].offsetWidth + "px";
        }
        annimate(oUl, 15, -index * oLi[0].offsetWidth);
    };
    oBright.onclick = function () {
        clearInterval(timer);
        move();
    };

// 推荐院校轮播
    var oBox2 = document.getElementById("banner2");
    var oUl2 = oBox2.getElementsByTagName("ul")[0];
    var oLi2 = oUl2.children;
    var oBleft2 = document.getElementById("recommend-left");
    var oBright2 = document.getElementById("recommend-right");
    for(var a=0;a<oLi2.length;a++){
        oUl2.appendChild(oLi2[a].cloneNode(true));
        if(a==5){
            break;
        };
    };
    var index2 = 0;
    var timer2 = setInterval(function () { move2(); }, 2500);
    oBox2.onmouseover = function () { clearInterval(timer2); }
    oBox2.onmouseout = function () { timer2 = setInterval(function () { move2(); }, 2500); }
    function move2() {
        index2++;
        if (index2 > oLi.length) {
            index2 = 1;
            oUl2.style.left = 0 + "px";
        };
        annimate(oUl2, -5, -index2 * oLi2[0].offsetWidth);
    };
    oBright2.onclick = function () {
        clearInterval(timer2);
        move2();
    };
    oBleft2.onclick = function () {
        clearInterval(timer2);
        index2--;
        if (index2 < 0) {
            index2 = oLi2.length - 7;
            oUl2.style.left = (-index2 - 1) * oLi2[0].offsetWidth + "px";
        }
        annimate(oUl2, 5, -index2 * oLi2[0].offsetWidth);
    };


// 课程培训轮播
    var oBox3 = document.getElementById("banner3");
    var oUl3 = oBox3.getElementsByTagName("dl")[0];
    var oLi3 = oUl3.children;
    var oBleft3 = document.getElementById("banner3_left");
    var oBright3 = document.getElementById("banner3_right");
    var newLi3 = oUl3.children[0].cloneNode(true);
    oUl3.appendChild(newLi3);
    var index3 = 0;
    var timer3 = setInterval(function () { move3(); }, 4000);
    oBox3.onmouseover = function () { clearInterval(timer3); }
    oBox3.onmouseout = function () { timer3 = setInterval(function () { move3(); }, 4000); }
    function move3() {
        index3++;
        if (index3 > oLi3.length - 1) {
            index3 = 1;
            oUl3.style.left = 0 + "px";
        }
        annimate(oUl3, -15, -index3 * oLi3[0].offsetWidth);
    };
    oBright3.onclick = function () {
        clearInterval(timer3);
        move3();
    };
    oBleft3.onclick = function () {
        clearInterval(timer3);
        index3--;
        if (index3 < 0) {
            index3 = oLi3.length - 2;
            oUl3.style.left = (-index3 - 1) * oLi3[0].offsetWidth + "px";
        };
        annimate(oUl3, 10, -index3 * oLi3[0].offsetWidth);
    };


 // 成功案例轮播图
     var oBox4 = document.getElementById("banner4");
     var oUl4 = oBox4.getElementsByTagName("ul")[0];
     var oLi4 = oUl4.children;
     var oBleft4 = document.getElementById("case_left");
     var oBright4 = document.getElementById("case_right");
     var index4=0;
     var timer4 = setInterval(function () { move4(); }, 3000);
     oBox4.onmouseover = function () { clearInterval(timer4); }
     oBox4.onmouseout = function () { timer4 = setInterval(function () { move4(); }, 3000); }
     
     function move4(){
        index4++;
        if (index4 > oLi4.length - 4) {
            index4 = 1;
            oUl4.style.left = 0 + "px";
        }
        annimate(oUl4, -15, -index4 * oLi4[0].offsetWidth);
     }
     for(var a=0;a<oLi4.length;a++){
        oUl4.appendChild(oLi4[a].cloneNode(true));
        if(a==3){
            break;
        };
    };
     oBright4.onclick = function () {
        clearInterval(timer4);
        move4();
    };
    oBleft4.onclick = function () {
        clearInterval(timer4);
        index4--;
        if (index4 < 0) {
            index4 = oLi4.length - 5;
            oUl4.style.left = (-index4 - 1) * oLi4[0].offsetWidth + "px";
        }
        annimate(oUl4, 10, -index4 * oLi4[0].offsetWidth);
    };
  oBright4.onmouseover = function () {clearInterval(timer4);}
  oBleft4.onmouseover = function () {clearInterval(timer4);}

};