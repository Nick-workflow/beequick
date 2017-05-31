/**
 * Created by Auser on 2017/2/27.
 */

define(["jquery","underscore","backbone","flexible","fly"],function ($,_,backbone,flexible,fly) {
   var w =backbone.Router.extend({
       routes:{
           "home":"home",
           "search":"search",
           "miaosha":"miaosha",
           "superM":"superM",
           "freshBook":"freshBook",
           "car":"car",
           "my":"my",
           "pointsMall":"pointsMall",
           "myOrder":"myOrder"
       },
       home:function () {
           require(["text!./home/home.html","./home/js/home"],function (tpl,banner) {
               $("#content").html(tpl);
               banner.request();
           });
       },
       search:function () {
           require(["text!./search/search.html","./search/js/search"],function (tpl,clr) {
               $("#content").html(tpl);
               clr.clear();
           });
       },
       miaosha:function () {
           require(["text!./miaosha/miaosha.html","./miaosha/js/miaosha"],function (tpl,list) {
               $("#content").html(tpl);
               list.request();
           });
       },
       superM:function () {
           require(["text!./superM/superM.html","./superM/js/superM"],function (tpl,list) {
               $("#content").html(tpl);
               list.request();
           });
       },
       freshBook:function () {
           require(["text!./freshBook/freshBook.html","./freshBook/js/freshBook"],function (tpl,list) {
               $("#content").html(tpl);
               list.request();
           });
       },
       car:function () {
           require(["text!./car/car.html"],function (tpl) {
               $("#content").html(tpl);
           });
       },
       my:function () {
           require(["text!./my/my.html"],function (tpl) {
               $("#content").html(tpl);
           });
       },
       pointsMall:function () {
           require(["text!./pointsMall/pointsMall.html"],function (tpl) {
               $("#content").html(tpl);
           });
       },
       myOrder:function () {
           require(["text!./myOrder/myOrder.html"],function (tpl) {
               $("#content").html(tpl);
           });
       },
       initialize:function () {
           window.location.hash = "home";
       }
   });

   var router = new w();

   router.on("route",function (s) {
       console.log(s);

       $("footer a[href='#home'] img").attr("src","./img/home.png");
       $("footer a[href='#superM'] img").attr("src","./img/superM.png");
       $("footer a[href='#freshBook'] img").attr("src","./img/freshBook.png");
       $("footer a[href='#car'] img").attr("src","./img/car.png");
       $("footer a[href='#my'] img").attr("src","./img/my.png");

       $("footer a[href='#"+ s +"'] img").attr("src","./img/"+ s +"2.png");
   });

   backbone.history.start();
});