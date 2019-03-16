
//header输入框
function search(){    
    var oSearch = document.getElementById("search");
    oSearch.value = "请输入搜索关键词";
    var reg = /\s+/g;
    oSearch.onfocus = function () {
        if (oSearch.value == "请输入搜索关键词") {
            oSearch.value = "";
        } else {
            oSearch.value = oSearch.value;
        };
    };
    oSearch.onblur = function () {
        var newSearch = oSearch.value.replace(reg, "");
        if (newSearch.length == 0) {
            oSearch.value = "请输入搜索关键词";
        } else {
            oSearch.value = newSearch;
        };
    };
};

//选项卡
    function changeTab(tab, card,tbTag,cardTage) {
        var oTab = document.getElementById(tab);
       var oCard = document.getElementById(card);
       var oTabli = oTab.getElementsByTagName(tbTag);
       var oAllcard = oCard.getElementsByTagName(cardTage);
           for (var i = 0; i < oTabli.length; i++) {
               oTabli[i].index = i;
               oTabli[i].onclick = function () {
                   for (var j = 0; j < oTabli.length; j++) {
                       oTabli[j].className = "";
                       oAllcard[j].className = "clearfix card";
                   };
                   this.className = "active";
                   oAllcard[this.index].className = "clearfix active";
                   console.log(this.index);
               };
           };
       };

//移动
       function annimate(obj, speed, long) {
        var timer1 = setInterval(function () {
            var LR = speed > 0 ? true : false;
            if (LR) {
                if (obj.offsetLeft >= long) {
                    obj.style.left = long + "px"
                    speed = 0;
                    clearInterval(timer1);
                };
            } else {
                if (obj.offsetLeft <= long) {
                    obj.style.left = long + "px"
                    speed = 0;
                    clearInterval(timer1);
                };
            };
            obj.style.left = obj.offsetLeft + speed + "px";
        }, 10);
};