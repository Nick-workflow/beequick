/**
 * Created by yangt on 2017/3/1.
 */

define(['jquery'],function ($) {
    var obj = {};
    obj.request = function () {
        $.get("http://h5.yztctech.net/api/axf/apicategory.php",{category:"热销榜"},
            function(req){
                // console.log(req);
                var datas = JSON.parse(req);
                var superList = datas.data;
                var html = '';
                for(var i in superList){
                	
                	if(superList[i].pm_desc == ""){
                		html += `
                        <li>
                            <a href="javascript:;">
                                <img src="${superList[i].img}" alt="">
                            </a>
                            <div class="info">
                                <div class="name">${superList[i].name}</div>
                                <div class="tag">
                                    <div class="tagLeft">&nbsp;精选&nbsp;</div>
                                    <div class="tagRight"></div>
                                </div>
                                <div class="weight">${superList[i].specifics}</div>
                                <div class="price">
                                    <div class="priceLeft">
                                        <span>¥</span>${superList[i].price}
                                    </div>
                                    <div class="priceRight">
                                        <span>¥</span>${superList[i].market_price}
                                    </div>
                                    <div class="add">
                                        <a href="javascript:;"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="addOrSubstruct">
		                        <div class="substruct hide"></div>
		                        <span class="number hide"></span>
		                        <div class="add"></div>
		                    </div>
                        </li>
                    `;
                	}else{
                		html += `
                        <li>
                            <a href="javascript:;">
                                <img src="${superList[i].img}" alt="">
                            </a>
                            <div class="info">
                                <div class="name">${superList[i].name}</div>
                                <div class="tag">
                                    <div class="tagLeft">&nbsp;精选&nbsp;</div>
                                    <div class="tagRight">&nbsp;${superList[i].pm_desc}&nbsp;</div>
                                </div>
                                <div class="weight">${superList[i].specifics}</div>
                                <div class="price">
                                    <div class="priceLeft">
                                        <span>¥</span>${superList[i].price}
                                    </div>
                                    <div class="priceRight">
                                        <span>¥</span>${superList[i].market_price}
                                    </div>
                                    <div class="add">
                                        <a href="javascript:;"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="addOrSubstruct">
		                        <div class="substruct hide"></div>
		                        <span class="number hide"></span>
		                        <div class="add"></div>
		                    </div>
                        </li>
                    `;
                	}

                }
                $('.wrapper .right .superList').html(html);
                
                
				obj.addOrSubstruct();
				
            });

    }
	
	obj.addOrSubstruct = function(){

		var $substruct = $(".addOrSubstruct .substruct");
		var $add = $(".addOrSubstruct .add");
		
		$add.click(function(){
			if($(this).parent().children(".number").html() == ''){
				$(this).parent().children(".substruct").removeClass("hide");
				$(this).parent().children(".number").removeClass("hide");
				$(this).parent().children(".number").html('1');
				$(this).parent().children("div").css("border-color","#ffbe89");
			}else{
				var plus = $(this).parent().children(".number").html();
				$(this).parent().children(".number").html(++plus);
			}
			

			var offset = $("footer #end").offset(); 
	        var img = $(this).parent().parent().children("a").children('img').attr('src'); 
	        var flyer = $('<img class="u-flyer" src="'+img+'">'); 
	        flyer.fly({ 
				start: { 
					left: event.pageX-700,//抛物体起点横坐标 
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
		})
		
		$substruct.click(function(){
			if($(this).parent().children(".number").html() == '1'){
				$(this).addClass("hide");
				$(this).parent().children(".number").html('');
				$(this).parent().children(".number").addClass("hide");
				$(this).parent().children("div").css("border-color","#e0e0e0");
			}else{
				var sub = $(this).parent().children(".number").html();
				$(this).parent().children(".number").html(--sub);
			}
		});
	}

	
    return obj;
});