/**
 * Created by yangt on 2017/3/2.
 */

define(['jquery'],function ($) {
    var obj = {};
    obj.request = function () {
        $.get("http://h5.yztctech.net/api/axf/apimiaosha.php",
            function(req){
                // console.log(req);
                var data = JSON.parse(req);
                var product = data.product;
                var html = '';
                for(var i in product){
                        html += `
                        <li>
                            <a href="javascript:;">
                                <img src="${product[i].img}" alt="">
                            </a>
                            <div class="info">
                                <div class="name">${product[i].name}</div>
                                <div class="specifics">${product[i].specifics}</div>
                                <div class="price">
                                    <div class="priceLeft">
                                        <span>¥</span>${product[i].price}
                                    </div>
                                    <div class="priceRight">
                                        &nbsp;/&nbsp;原价:${product[i].market_price}元
                                    </div>    
                                </div>
                                <div class="btn">
                                        ${product[i].btnText}
                                    </div>
                            </div>
                        </li>
                    `;

                }
                $('.wrapper .msList').html(html);

            });

    }

    return obj;
});