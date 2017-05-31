/**
 * Created by yangt on 2017/3/2.
 */


define(['jquery'],function ($) {
    var obj = {};
    obj.request = function () {
        $.get("http://h5.yztctech.net/api/axf/apiyuding.php",
            function(req){
                // console.log(req);
                var data = JSON.parse(req);
                var product = data.product;
                for(var i in product){
                    var $li = $("<li></li>");
                    var $div1 = $("<div class='left'><img src="+ product[i].img +" /></div>");
                    var $div2 = $("<div class='right'></div>");
                    var $p = $("<p>"+ product[i].name +"</p>");
                    var $div3 = $("<div></div>");
                    var $span1 = $("<span class='price'><i>¥</i>"+ product[i].price +"</span>");
                    var $span2 = $("<span class='priced'>¥"+ product[i].market_price +"</span>");
                    var $span3 = $("<span class='addCar'><img src='./img/shoping.png' /></span>");
                    $div3.append($span1).append($span2).append($span3);
                    $div2.append($p).append($div3);
                    $li.append($div1).append($div2);
                    $('.bookDetails .bookList').append($li);
                }
                
                obj.addCar();
            });
    }
    
    obj.addCar = function(){
    	var $addCar = $(".bookList .right .addCar");
    	$addCar.click(function(){
    		var offset = $("footer #end").offset(); 
	        var img = $(this).parent().parent().parent().children(".left").children('img').attr('src'); 
	        var flyer = $('<img class="u-flyer" src="'+img+'">'); 
	        flyer.fly({ 
				start: { 
					left: event.pageX-900,//抛物体起点横坐标 
					top: event.pageY-200 //抛物体起点纵坐标 
				}, 
				end: { 
					left: offset.left + 90,//抛物体终点横坐标 
					top: offset.top + 10, //抛物体终点纵坐标 
				}, 
				onEnd: function() { 
					this.destroy(); //销毁抛物体 
				} 
			}); 
    	});
    }

    return obj;
});