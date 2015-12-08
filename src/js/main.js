// 屏幕旋转检测============================================

function mkup() {
    var up = document.createElement("div");
    up.setAttribute("class", "up fa fa-2x fa-chevron-circle-down");
    $(".section").append(up);
}
mkup();



var orientLayer = document.getElementById("vertical");
//判断横屏竖屏
function checkDirect() {
    if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
        return "portrait";
    } else {
        return "landscape";
    }
};
//显示屏幕方向提示浮层
function orientNotice() {
    var orient = checkDirect();
    if (orient == "portrait") {
        $(".vertical").css("display", "none");
    } else {
        $(".vertical").css("display", "block");
    }
};

function init() {
    orientNotice();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        setTimeout(orientNotice, 200);
    })
};
init();



// 屏幕旋转检测结束===============================================================


// fullpage  代码 ==================
$(document).ready(function() {
    $('#py').fullpage({
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8'],
        verticalCentered: false,
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        slidesNavigation: true,
        slidesNavPosition: 'top',
        easing: 'easeIn',
        easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5


    });



});
