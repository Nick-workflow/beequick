<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx28279e9ac8eda27e", "bd4e2877e5d1cfb50af3f50529b2c76b");
$signPackage = $jssdk->GetSignPackage();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>爱鲜蜂</title>
    <link rel="stylesheet" type="text/css" href="public/css/reset.css">
    <link rel="stylesheet" type="text/css" href="./public/css/index.css" />
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <!--<script type="text/javascript" src="https://apis.map.qq.com/tools/geolocation/min?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"></script>-->
    <!--(失败，需要 https)-->
</head>
<body>
    <div id="content">

    </div>

    <footer>
        <div>
            <a href="#home">
                <dl>
                    <dt>
                        <img src="./img/home2.png" alt="">
                    </dt>
                    <dd>首页</dd>
                </dl>
            </a>
        </div>
        <div>
            <a href="#superM">
                <dl>
                    <dt>
                        <img src="./img/superM.png" alt="">
                    </dt>
                    <dd>闪送超市</dd>
                </dl>
            </a>
        </div>
        <div>
            <a href="#freshBook">
                <dl>
                    <dt>
                        <img src="./img/freshBook.png" alt="">
                    </dt>
                    <dd>新鲜预订</dd>
                </dl>
            </a>
        </div>
        <div>
            <a href="#car">
                <dl>
                    <dt id="end">
                        <img src="./img/car.png" alt="">       
                    </dt>
                    <dd>购物车</dd>
                </dl>
            </a>
        </div>
        <div>
            <a href="#my">
                <dl>
                    <dt>
                        <img src="./img/my.png" alt="">
                    </dt>
                    <dd>我的</dd>
                </dl>
            </a>
        </div>
    </footer>
</body>
    <script src="lib/require.js" data-main="main"></script>
    <script type="text/javascript">
			wx.config({
				debug: true, // 用于调试，如果为true每进行一次操作都会弹出
				appId: '<?php echo $signPackage["appId"];?>', // 必填，公众号的唯一标识
				timestamp: <?php echo $signPackage["timestamp"];?>, // 必填，生成签名的时间戳，数字格式，无需单引号
				nonceStr: '<?php echo $signPackage["nonceStr"];?>', // 必填，生成签名的随机串
				signature: '<?php echo $signPackage["signature"];?>',// 必填，签名，见附录1
				jsApiList:[
					'checkJsApi',
			        'onMenuShareTimeline',
			        'onMenuShareAppMessage',
			        'onMenuShareQQ',
			        'onMenuShareWeibo',
			        'onMenuShareQZone',
			        'hideMenuItems',
			        'showMenuItems',
			        'hideAllNonBaseMenuItem',
			        'showAllNonBaseMenuItem',
			        'translateVoice',
			        'startRecord',
			        'stopRecord',
			        'onVoiceRecordEnd',
			        'playVoice',
			        'onVoicePlayEnd',
			        'pauseVoice',
			        'stopVoice',
			        'uploadVoice',
			        'downloadVoice',
			        'chooseImage',
			        'previewImage',
			        'uploadImage',
			        'downloadImage',
			        'getNetworkType',
			        'openLocation',
			        'getLocation',
			        'hideOptionMenu',
			        'showOptionMenu',
			        'closeWindow',
			        'scanQRCode',
			        'chooseWXPay',
			        'openProductSpecificView',
			        'addCard',
			        'chooseCard',
			        'openCard'
				] //必填，需使用的js借口列表，所有的js借口列表见附录2
			});	
			
			// 获取定位数据并打开地图
			function local(){
				wx.getLocation({
				    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				    success: function (res) {
				        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				        var speed = res.speed; // 速度，以米/每秒计
				        var accuracy = res.accuracy; // 位置精度
				        
				        wx.openLocation({
						    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
						    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
						    name: '深圳宝安', // 位置名
						    address: '育知同创', // 地址详情说明
						    scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
						    infoUrl: 'https://www.baidu.com' // 在查看位置界面底部显示的超链接,可点击跳转
						});
				    }
				});
			}

			
			function scanner(){
				wx.scanQRCode({
				    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
				    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
				    success: function (res) {
					    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
					}
				});
			}
			
			function wxPay(){
				wx.chooseWXPay({
				    timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				    nonceStr: '', // 支付签名随机串，不长于 32 位
				    package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
				    signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				    paySign: '', // 支付签名
				    success: function (res) {
				        // 支付成功后的回调函数
				    }
				});
			}
		</script>
</html>