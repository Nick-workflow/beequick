/**
 * Created by Auser on 2017/2/27.
 */
define(['jquery','swiper'],function ($,swiper) {
    var obj = {};
    obj.request = function () {
        $.ajax({
            type:"get",
            url:"http://h5.yztctech.net/api/axf/apihome.php",
            async:true,
            success:function (req) {
                var result = JSON.parse(req);
                var slide = result.data.slide;
                var menu = result.data.menu;
                for(var i = 0; i < slide.length; i++){
                    var $slide = $("<div class='swiper-slide'></div>");
                    var $imgs = $("<img>");
                    $imgs.attr("src",slide[i].activity.img);
                    $slide.append($imgs);
                    $(".swiper-wrapper").append($slide);
                }
                swipe();

                for(var j = 0; j < menu.length; j++){
                    var $li = $("<li></li>");
                    if(menu[j].activity.name == "疯狂秒杀"){
                        var $a = $("<a href='#miaosha'>");
                    }else{
                        var $a = $("<a href='javascript:;'>");
                    }
                    var $imgUrl = $("<img>");
                    var $p = $("<p></p>");
                    $imgUrl.attr("src",menu[j].activity.img);
                    $p.html(menu[j].activity.name);
                    $a.append($imgUrl).append($p);
                    $li.append($a);
                    $(".menu ul").append($li);
                }
            }
        });
    }

    function swipe(){
        var banner = new Swiper(".swiper-container",{
            direction: "horizontal",
            autoplay: 3000,
            //当点击切换之后，再次启动自动轮播
            autoplayDisableOnInteraction : false,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true
        });
    }
    return obj;
    
    
    
    // 微信调用腾讯地图获取位置信息(失败，需要 https)
//  var geolocation = new qq.maps.Geolocation("W6BBZ-BQ3KF-PGOJB-JVSR2-N532H-C3B6X","wechat_H5");
//  
//	var options = {timeout: 9000};
//
//  function getCurLocation() {
//      geolocation.getLocation(showPosition, showErr, options);
//  }
//  function showPosition(position) {
//      document.getElementById("location").innerHTML = position.addr;
//  };
//
//  function showErr() {
//	    document.getElementById("location").innerHTML = "定位失败！";
//  };
	      
});