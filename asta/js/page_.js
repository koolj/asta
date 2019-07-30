
//(c) Copyright 2018 by TesterPRO. All rights reserved.
//Created by KoolJ/Pham Tuan Anh.

//commont var
var host = `https://vote.TesterPRO.org:8078/DeepData.html`;
var hostip = `https://vote.TesterPRO.org`;
var hostlogin = `https://vote.TesterPRO.org`;
var hostport = `3000`;
var hostportjwt = `8078`;
var accesstoken = ``;
var tokenKey = ``;
var access_tokenX ="";
var urltoken = ``;

$("#termpart").hide();
$("#leftpart").hide();
$("#rightpart").hide();

var currentuid = null;

//progress bar
$('.js-loading-bar').modal({
  backdrop: 'static',
  show: false
});

function progressbar() {
  var $modal = $('.js-loading-bar'),
  $bar = $modal.find('.progress-bar');

  $modal.modal('show');
  $bar.addClass('animate');

  setTimeout(function() {
    $bar.removeClass('animate');
    $modal.modal('hide');
  }, 1500);
};
var urltoken ='';

function postviewerlogin(url, data){
  fetch(url, {
    //mode: 'cors',
    method: 'POST', // or 'PUT'
    body: data, // data can be `string` or {object}!
    headers:{
      'Content-Type':'application/json',
      'credentials': 'include'
    }
  }).then(res => res.json())
  .then(response => {
    //console.log(response);
    tokenKey = response.tokenKey;
    //getC();
    localStorage.setItem("tokenold", response.tokenKey);
    urltoken =  hostip + ":" + hostport + `/auth/jwt/callback?token=`+tokenKey;
    //console.log("new----------" +urltoken);

  })
}



/*
function dialogueConfirm(message, funcname) {
    var txt;
    var r = confirm(message);
    if (r == true) {
        if(funcname == "demo1")
			confirmClearAll();
		if(funcname == "demo1")
			loadFriendsProfiles();
		if(funcname == "loadFRequestsProfiles")
			loadFRequestsProfiles();
		if(funcname == "initData")
			initData();
    } else {
        //txt = "You pressed Cancel!";
    }
}
*/
$(".loading").hide();
function viewlistdata(){
    //aadd friend
    //addfriend();

     $("#dr1").click(function(){
     //addme();
     });
     $("#dr2").click(function(){
     //addfriend();
     });
     $("#dr3").click(function(){
     //addfrequest();
     });
}

var jsonsamp = "";

//checking facebook login
var globaluid = currentuid;
var friendlist = [];
var frequestlist = [];
var domainlist = [];
var accesstoken = `?access_token=7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL`;


$(".loading").hide();
$("#apppart").hide();
$("#termpart").hide();
$("#leftpart").hide();
$("#rightpart").hide();
function mainpage(){
  $("#termpart").hide();
  $("#leftpart").show();
  $("#rightpart").show();
  $("#apppart").hide();
  //var urlcard = `https://vote.TesterPRO.org:3000/api/wallet`;
  //var accesstoken = `7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL`;
  //s%3A7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL.ULjv1jaKXJ7vnDZIQj7tWkxKTRnddPKeYKs2UIP%2BxDc
  var urlngduocbau = `https://vote.TesterPRO.org:3000/api/DeepDatavote.Nguoiduocbau`+accesstoken;
  //https://vote.TesterPRO.org/rest/auth/callback?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTc1NzA1MjcxYWFkNGViMTAyZDVkOCIsImlhdCI6MTU0NTAzNTQzMCwiZXhwIjoxNTQ1MDM1NTUwfQ.9s3pBnUQlheIGHwqgcMJ2nD780620iYqzqt1Nt1l3oQ
  //var urlngduocbau = `https://vote.TesterPRO.org/rest/api/DeepDatavote.Nguoiduocbau?access_token=7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL`;
  //var urlngduocbau = `http://45.32.115.35:3000/api/DeepDatavote.Nguoiduocbau?access_token=7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL`;
  //s%3A7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL.ULjv1jaKXJ7vnDZIQj7tWkxKTRnddPKeYKs2UIP%2BxDc
  //get list sukienvote
  //getaccessDeepData(urltoken);
  getDeepData(urlngduocbau);

  viewlistdata();

}

function gotoapp(){

  $("#termpart").hide();
  $("#leftpart").hide();
  $("#rightpart").hide();
  $("#apppart").show();

  document.getElementById("app2").onclick = function(){
    console.log(urltoken);
    mainpage();
  };

}


function postDeepData(url, data){

  fetch(url, {
    mode: 'no-cors',
    method: 'POST', // or 'PUT'
    body: data, // data can be `string` or {object}!
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  }).then(function(res){
    //console.log(res);
  })
}
function getaccessDeepData(url){
  fetch(url, {
    mode: 'no-cors',
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': 'true'
    }
  })
  .then(function(response){
       //var urlngduocbau = `https://45.32.115.35:3000/api/DeepDatavote.Nguoiduocbau`;

       //console.log(response);
  })
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    //console.log(ca);
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            //console.log(c.substring(name.length, c.length));
            //console.log(c.substring(name.length, c.length));
            return c.substring(name.length, c.length);

        }
    }
    return "";
}
function getCookie2(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  //console.log(ca);
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function addfriend(urlimg, tensukien, mota){
  //$(".scrollbar-inner.scroll-content.scroll-scrolly_visible").empty();
  //for (var i =0; i < jsonsamp.friends.length; i++){
    html_value_f = '<table class="tableelement" id="itemmem" name="'+tensukien+'"><tr><th style="width:70px"><img src="'+ urlimg +'" class="img-responsive img-circle" style="width:100%" alt="avatar"></th><th><h6 style="padding-left:25px; padding-top: 5px;">'+ mota +'</h6></tr></table>';

    $(".scrollbar-inner").append(html_value_f);
  //}
  $('.scrollbar-inner').scrollbar();

  $(".tableelement").click(function(e){
    alert(e.currentTarget.attributes.name.value);
  });

}


function getDeepData(url){
  $(".loading").show();
  $(".scrollbar-inner.scroll-content.scroll-scrolly_visible").empty();
  fetch(url, {
    method: 'GET', // or 'PUT'
    headers:{
      'Content-Type': 'application/json',
      'credentials': 'include'
    }
  }).then(res =>res.json())
  .then(response => {
    //console.log('Success:', JSON.stringify(response));
    var Arrurlimg = [];
    var Arrmota = [];
    var ArrTensukienvote = [];

    for (var i = 0; i < response.length; i++) {
      var sukienid  = response[i].Sukienid;
      var sukienidsub = sukienid.substring(sukienid.indexOf("#")+1,sukienid.length);
      var manguoiduocbau = response[i].Manguoiduocbau;
      var manguoiduocbausub = manguoiduocbau.substring(manguoiduocbau.indexOf("#")+1,manguoiduocbau.length);

      if (sukienidsub.length >= 5)
      {

        var urlimg = response[i].Urlimg;
        var mota = response[i].Mota;
        Arrurlimg.push(urlimg);
        Arrmota.push(mota);
        var Tensukienvote ="";

        var urlsukien = `http://45.32.115.35:3000/api/DeepDatavote.Sukienvote`+accesstoken+`&filter=%7B%22where%22%3A%20%7B%22Sukienid%22%3A%20%22`+sukienidsub+`%22%7D%7D`;
        var urlngduocbau = `http://45.32.115.35:3000/api/DeepDatavote.Congdanthamgia`+accesstoken+`&filter=%7B%22where%22%3A%20%7B%22Mathamgiaid%22%3A%20%22`+manguoiduocbausub+`%22%7D%7D`;

        //get sukien
        fetch(urlsukien, {
          method: 'GET', // or 'PUT'
          headers:{
            'Content-Type': 'application/json',
            'credentials': 'include'
          }
        }).then(res2 =>res2.json())
          .then(response2 => {
            Tensukienvote = response2[0].Tensukienvote;
            ArrTensukienvote.push(Tensukienvote);

          }).then(res3 =>{
            if (ArrTensukienvote.length >6)
            {
              for (var j = 0; j < Arrurlimg.length; j++) {
                //console.log("-------------"+j);
                //console.log(Arrurlimg[j]);
                //console.log(Arrmota[j]);
                //console.log(ArrTensukienvote[j]);
                addfriend(Arrurlimg[j],Arrmota[j],ArrTensukienvote[j]);
              }
              chart1();
              //chart2();
              chart3();
              $(".loading").hide();
            }
          })

      }

    }
  })
  .catch(error => console.log('Error:', error));
}


//WordCloud

//chartings
function chart3() {

var chart = new CanvasJS.Chart("chartContainer3", {
  theme: "light2",
	animationEnabled: true,
	title:{
		text: "Phân loại",
    horizontalAlign: "left",
        padding:{
           bottom: 30,
        },
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 26, name: "Giầy, quần áo", exploded: true },
			{ y: 20, name: "Du lịch" },
			{ y: 5, name: "Gái" },
			{ y: 3, name: "Ăn vặt" },
			{ y: 7, name: "Xe" },
			{ y: 17, name: "Đồ công nghệ" },
			{ y: 22, name: "Mỹ phẩm"}
		]
	}]
});
chart.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}

function chart1() {
var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	theme: "light2",
	title:{
        text: "Quan điểm",
       padding:{
           bottom: 30,
        },
    horizontalAlign: "left",
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Tích cực",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 650 },
			{ x: new Date(2017, 0, 4), y: 700 },
			{ x: new Date(2017, 0, 5), y: 710 },
			{ x: new Date(2017, 0, 6), y: 658 },
			{ x: new Date(2017, 0, 7), y: 734 },
			{ x: new Date(2017, 0, 8), y: 963 },
			{ x: new Date(2017, 0, 9), y: 847 },
			{ x: new Date(2017, 0, 10), y: 853 },
			{ x: new Date(2017, 0, 11), y: 869 },
			{ x: new Date(2017, 0, 12), y: 943 },
			{ x: new Date(2017, 0, 13), y: 970 },
			{ x: new Date(2017, 0, 14), y: 869 },
			{ x: new Date(2017, 0, 15), y: 890 },
			{ x: new Date(2017, 0, 16), y: 930 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Tiêu cực",
		lineDashType: "dash",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 510 },
			{ x: new Date(2017, 0, 4), y: 560 },
			{ x: new Date(2017, 0, 5), y: 540 },
			{ x: new Date(2017, 0, 6), y: 558 },
			{ x: new Date(2017, 0, 7), y: 544 },
			{ x: new Date(2017, 0, 8), y: 693 },
			{ x: new Date(2017, 0, 9), y: 657 },
			{ x: new Date(2017, 0, 10), y: 663 },
			{ x: new Date(2017, 0, 11), y: 639 },
			{ x: new Date(2017, 0, 12), y: 673 },
			{ x: new Date(2017, 0, 13), y: 660 },
			{ x: new Date(2017, 0, 14), y: 562 },
			{ x: new Date(2017, 0, 15), y: 643 },
			{ x: new Date(2017, 0, 16), y: 570 }
		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
//term and condition area
function disclaimerFunction() {
    $("#termpart").show();
    //term content


    // Set sự event cho sự kiện scroll
    var checkBoxX = document.getElementById("AcknowledgeCheckBoxC");
    $(".AcknowledgeInnerDiv").scroll(function () {
        $("#btnInit").attr("disabled", "disable");
        $("#btnInit").prop("disabled", true);
        var outerDiv = $(this);
        var innerDiv =  $(this).children('.content');
        var ScrollMod = 1;
        if (outerDiv.offset().top < innerDiv.outerHeight()) {
            ScrollMod = -1;
        }
        if (Math.round((ScrollMod * innerDiv.offset().top) + outerDiv.height() + outerDiv.offset().top) >= innerDiv.outerHeight() && Math.abs(innerDiv.offset().top) != 0) {
            $(".AcknowledgeCheckBox input").attr("disabled", false);
            $("#AcknowledgeCheckBoxC").attr("checked", true);
            $("#AcknowledgeCheckBoxC").attr("disabled", true);
            $("#btnInit").attr("disabled", false);
            $(this).unbind("scroll");
        } else {
            $(".AcknowledgeCheckBox input").attr("disabled", true);
            $("#btnInit").attr("disabled", true);
        }

    });
}

function importviewercard(){
  var form = new FormData();
  form.append("card", "/home/jay/30000000002@DeepDatavote.card");

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://139.180.208.227:3000/api/wallet/import?name=viewer1&access_token=MwNYhRdoyfksAH4vs4Fh26k3MHtSE1JDoIxP26yUDQIYmywRFXWFBxxldupnpU6z",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "Postman-Token": "8efec27f-ce60-49fa-bd24-c575edf41568"
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
  }

  $.ajax(settings).done(function (response) {
    //console.log(response);
  });
}

disclaimerFunction();
$("#btnInit").attr("disabled", "disable");
$("#btnInit").prop("disabled", true);

//add testdata
$(document).ready(function () {
  var urltoken =  hostip + ":" + hostport + `/auth/jwt/callback?token=`+tokenKey;
  var hostlogin = `https://vote.TesterPRO.org`;
  var urllogin = hostlogin + ":" + "8078" + "/users/loginUser"
  var datalogin = JSON.stringify({
                            "email": "a@1.com",
                            "password": "1"
                          });
  //window.open(urltoken, '_blank');
//var urltoken = 'http://vote.TesterPRO.org/rest/auth/jwt/callback?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTc1NzA1MjcxYWFkNGViMTAyZDVkOCIsImlhdCI6MTU0NTAzMzQ4MywiZXhwIjoxNTQ1MDMzNjAzfQ.MAWhLEo925_AkUQCN32uA2vBHIMyX0Hf2ZWJ-89dXqo'


  progressbar();
  $("#termpart").show();
  $(".AcknowledgeInnerDiv").append(TERMS_AND_CONDITIONS);
  $("#leftpart").hide();
  $("#rightpart").hide();
  $("#apppart").hide();
  postviewerlogin(urllogin, datalogin);

  document.getElementById("btnInit").onclick = function(){

    //gotoapp();
    console.log(urltoken);
    var myWindow1 = window.open(urltoken, '_self');
    //var myWindow2 = window.open(urltoken, '_self');
    //console.log(urltoken);
  };

});

//terms & condition
const TERMS_AND_CONDITIONS = "<div class='content'><p><h6>DNet - Hệ thống điều khiển trung tâm dữ liệu chuỗi khối </h6> \
\
(DeepData Crytodata Management System).<p>\n\
<p>\n\
<i>Sửa đổi lần cuối: ngày 8 tháng 2 năm 2019.</i><p>\n\
<p>Vui lòng đọc chính sách này một cách cẩn thận để hiểu các chính sách và qui định khi sử dụng sản phẩm của chúng tôi\n\
<p>----------------------------------------------------------------------------------\n\
<p>Đồng ý với văn bản này, điều đó có nghĩa: bạn <b>CHO PHÉP chúng tôi thu thập</b> các thông tin trên mạng xã hội mà bạn hay xem, lướt web; <b>sử dụng lưu trữ dữ liệu trên cookie</b> từ trình duyệt web bạn đang dùng; <b>sử dụng vị trí địa lý</b> - cần bạn cấp quyền.\n\
<p>----------------------------------------------------------------------------------\n\
<p>\n\
Chúng tôi xây dựng một giải pháp mã hoá và xử lý dữ liệu lớn (bigdata) theo nền tảng chuỗi khối (blockchain) dựa trên dữ liệu thu thập từ mạng xã hội, internet, các bài viết blog, các giao dịch thanh toán từ ngân hàng khi tổ chức tài chính, ngân hàng cho phép.<p>\n\
<p>\n\
Khi sử dụng dịch vụ này, người dùng sẽ có một công cụ toàn diện cho phép các bài toán: Đánh giá tín nhiệm tổ chức, tín nhiệm điểm số thi cử trong giáo dục, đánh giá tín dụng cá nhân, dự báo thông tin xấu về kinh doanh cho doanh nghiệp, dự báo cảnh báo tai nạn giao thông, và hỗ trợ Chính phủ xếp hạng công dân Việt Nam.<p>\n\
<p>\n\
Một trong các chức năng chính của DeepData - DNet, là: thu thập dữ liệu cá nhân qua các trang thông tin Internet.\n\
DeepData không thu thập dư liệu nhạy cảm cá nhân (ngày sinh, nội dung chat riêng tư...). Chúng tôi chỉ thu thập các dữ liệu thống kê được người dùng chia sẻ rộng rãi trên internet, thông tin cho phép từ tổ chức tín dụng, ngân hàng... để cho phép đánh giá tổng quát của cá nhân đó (các khoản chi tiêu, thu nhập, mức độ ảnh hưởng, tỷ lệ tín nhiệm yêu thích...).<p>\n\
<p>\n\
<h6> Giới thiệu</h6><p>\n\
<p>\n\
Tổ chức TesterPRO (\"Công ty\" hoặc là \"Chúng tôi\") Tôn trọng sự riêng tư và cam kết bảo vệ nó thông qua việc tuân thủ chính sách này.<p>\n\
<p>\n\
Chính sách này mô tả các loại thông tin chúng tôi có thể thu thập của bạn khi bạn truy cập vào trang web TesterPRO/Sản phẩm DeepData (của chúng tôi \"Trang mạng\") và sử dụng các sản phẩm của chúng tôi. Chúng tôi cam kết bảo vệ và không tiết lộ thông tin đó.<p>\n\
<p>\n\
<h6> Chính sách này áp dụng đối với những thông tin chúng tôi thu thập:</h6><p>\n\
<p>\n\
•    Trên Website/sản phẩm này. <p>\n\
•    Trong email, văn bản, và các thông điệp điện tử khác giữa bạn và Website này. <p>\n\
•    Thông qua ứng dụng di động và máy tính để bàn bạn tải về từ trang Web này.<p>\n\
<p>\n\
Nó không áp dụng đối với các thông tin được thu thập bởi: <p>\n\
<p>\n\
•    thông qua bất kỳ phương tiện khác, trong đó có trên bất kỳ trang web khác được điều hành bởi Công ty hoặc bất kỳ bên thứ ba; hoặc là <p>\n\
•    bất kỳ bên thứ ba, bao gồm thông qua bất kỳ ứng dụng hoặc nội dung (bao gồm cả quảng cáo) mà có thể liên kết đến hoặc có thể truy cập từ các trang web khác.<p>\n\
<p>\n\
Vui lòng đọc chính sách này một cách cẩn thận để hiểu các chính sách và qui định của chúng tôi liên quan đến thông tin của bạn. Nếu bạn không đồng ý với các chính sách và thực hành của chúng tôi, sự lựa chọn của bạn là không sử dụng trang web/sản phẩm của chúng tôi. Bằng việc truy cập hoặc sử dụng trang web/sản phẩm này, bạn đồng ý với chính sách bảo mật này. Chính sách này có thể thay đổi theo từng thời điểm (xem Những thay đổi chính sách bảo mật của chúng tôi). Tiếp tục sử dụng trang web này sau khi chúng tôi thực hiện thay đổi được coi là chấp nhận những thay đổi đó, vì vậy hãy kiểm tra chính sách định kỳ để cập nhật.<p>\n\
<p>\n\
<h6>Trẻ em, thiếu niên ở độ tuổi dưới 18</h6><p>\n\
<p>\n\
<p>\n\
Website/sản phẩm của chúng tôi không dành cho trẻ em dưới 18 tuổi. Nếu bạn dưới 18 tuổi, xin vui lòng không đăng ký và sử dụng sản phẩm trên trang web; không sử dụng bất kỳ tính năng bình luận tương tác hoặc của cộng đồng của trang Web này hay cung cấp bất kỳ thông tin về bản thân cho chúng tôi, bao gồm tên, địa chỉ, số điện thoại, địa chỉ email, hoặc bất kỳ tên màn hình hoặc tên người dùng mà bạn có thể sử dụng. Nếu chúng tôi biết đã thu thập được hoặc nhận được thông tin cá nhân từ một đứa trẻ dưới 18 tuổi mà không xác minh được sự đồng ý của cha mẹ, chúng tôi sẽ xóa thông tin đó. Nếu bạn tin rằng chúng tôi có thể có bất kỳ thông tin từ tương đương khoảng một đứa trẻ dưới 18 tuổi, vui lòng liên hệ với chúng tôi tại koolj@TesterPRO.org.<p>\n\
<p>\n\
<h6>Thông tin chúng tôi thu thập về bạn gồm những gì</h6><p>\n\
<p>\n\
Chúng tôi thu thập thông tin về người dùng của Website/sản phẩm của chúng tôi, bao gồm thông tin: <p>\n\
<p>\n\
•    thông tin bạn chia sẻ rộng rãi trên mạng xã hội Facebook (bài viết, nhận xét, chia sẻ, album ảnh, ...); <p>\n\
<p>\n\
•    thông tin bạn và những người bạn thích, chia sẻ và nhận xét trên những thông tin chia sẻ của bạn trên mạng xã hội Facebook;<p>\n\
<p>\n\
Khi bạn điều hướng thông qua và tương tác với trang web của chúng tôi, chúng tôi có thể sử dụng công nghệ thu thập dữ liệu tự động để thu thập một số thông tin về thiết bị của bạn, những hành động duyệt web, và các mẫu, bao gồm: <p>\n\
<p>\n\
•    Chi tiết các chuyến thăm của bạn đến với Website của chúng tôi, bao gồm dữ liệu giao thông, dữ liệu vị trí, các bản ghi, và dữ liệu thông tin liên lạc khác và các nguồn lực mà bạn truy cập và sử dụng trên Website.  <p>\n\
<p>\n\
•    Nhận ra bạn khi bạn quay trở lại đến với Website của chúng tôi. <p>\n\
<p>\n\
Các công nghệ chúng tôi sử dụng để thu thập dữ liệu tự động này có thể bao gồm: <p>\n\
<p>\n\
•    Cookie (hoặc cookie của trình duyệt).Một cookie là một tập tin nhỏ được đặt trên ổ cứng của máy tính. Bạn có thể từ chối chấp nhận cookie của trình duyệt bằng cách kích hoạt các thiết lập thích hợp trên trình duyệt của bạn. Tuy nhiên, nếu bạn chọn thiết lập này, bạn có thể không thể truy cập vào một số phần của trang web của chúng tôi. Trừ khi bạn đã điều chỉnh thiết lập trình duyệt của bạn để nó sẽ từ chối cookie, hệ thống của chúng tôi sẽ phát hành cookie khi bạn trực tiếp trình duyệt của bạn đến với Website của chúng tôi. <p>\n\
<p>\n\
Chúng tôi không kiểm soát công nghệ theo dõi các bên thứ ba hoặc làm thế nào họ có thể được sử dụng. Nếu bạn có thắc mắc về một quảng cáo hay những nội dung nhắm mục tiêu khác, bạn nên liên hệ trực tiếp nhà cung cấp có trách nhiệm. Để biết thông tin về làm thế nào bạn có thể chọn không tham gia nhận nhắm mục tiêtu quảng cáo từ nhiều nhà cung cấp, xem Lựa chọn về cách chúng tôi sử dụng và tiết lộ thông tin của bạn.<p>\n\
<p>\n\
<p>\n\
<h6>Công bố thông tin</h6><p>\n\
<p>\n\
Chúng tôi có thể tiết lộ thông tin tổng hợp về người dùng của chúng tôi, và thông tin không xác định bất kỳ cá nhân, không hạn chế. <p>\n\
<p>\n\
Chúng tôi có thể tiết lộ thông tin cá nhân mà chúng tôi thu thập hoặc bạn cung cấp như mô tả trong chính sách bảo mật này: <p>\n\
<p>\n\
•    Các công ty con và chi nhánh của chúng tôi. <p>\n\
<p>\n\
•    Cho các nhà thầu, nhà cung cấp dịch vụ, và các bên thứ ba khác mà chúng tôi sử dụng để hỗ trợ kinh doanh của chúng tôi. <p>\n\
<p>\n\
•    Để một người mua hoặc người thừa kế khác trong trường hợp sáp nhập, lấy đi, chuyển dịch cơ cấu, tổ chức lại, giải thể, hoặc bán khác hoặc chuyển nhượng một phần hoặc toàn bộ tài sản của Công ty, cho dù là một hoạt động liên tục hoặc là một phần của tình trạng phá sản, thanh lý, hoặc tương tự tiếp tục, trong đó thông tin cá nhân do Công ty tổ chức về người dùng website của chúng tôi là một trong những tài sản được chuyển giao. <p>\n\
<p>\n\
•    Với sự đồng ý của bạn.<p>\n\
<p>\n\
Chúng tôi cũng có thể tiết lộ thông tin cá nhân của bạn: <p>\n\
<p>\n\
•    Để tuân thủ bất kỳ lệnh của tòa án, pháp luật, hoặc quá trình hợp pháp, trong đó có để đáp ứng với bất kỳ chính phủ hoặc yêu cầu quy định. <p>\n\
<p>\n\
•    Triển khai thực hiện hoặc áp dụng các điều khoản của chúng tôi TesterPRO/terms-of-use sử dụng và các thoả thuận khác, kể cả cho mục đích thanh toán và bộ sưu tập. <p>\n\
<p>\n\
•    Nếu chúng tôi tin rằng việc tiết lộ là cần thiết hoặc thích hợp để bảo vệ quyền lợi, tài sản, hoặc sự an toàn của Công ty, khách hàng của chúng tôi, hoặc những người khác. Điều này bao gồm trao đổi thông tin với các công ty và các tổ chức khác nhằm mục đích bảo vệ gian lận và giảm thiểu rủi ro tín dụng.<p>\n\
<p>\n\
<p>\n\
Lựa chọn về cách chúng tôi sử dụng và Tiết lộ thông tin của bạn<p>\n\
<p>\n\
Chúng tôi cố gắng cung cấp cho bạn những lựa chọn liên quan đến thông tin cá nhân mà bạn cung cấp cho chúng tôi. Chúng tôi đã tạo ra cơ chế để cung cấp cho bạn sự kiểm soát sau đối với thông tin của bạn: <p>\n\
<p>\n\
•    các công nghệ giám sát và quảng cáo. Bạn có thể thiết lập trình duyệt của bạn để từ chối tất cả hoặc một số cookie của trình duyệt, hay thông báo với bạn khi cookie được gửi. Để tìm hiểu làm thế nào bạn có thể quản lý cài đặt cookie Flash, hãy truy cập trang cài đặt Flash player trên trang web của Adobe. Nếu bạn vô hiệu hóa hoặc từ chối cookie, xin lưu ý rằng một số phần của trang web này sau đó có thể không truy cập được hoặc không hoạt động đúng. <p>\n\
<p>\n\
•    Công bố thông tin của bạn cho quảng cáo của bên thứ ba. Nếu bạn không muốn chúng tôi chia sẻ thông tin cá nhân của bạn với bên thứ ba không liên kết hoặc không đại lý cho mục đích quảng cáo, bạn không nên sử dụng trang web của chúng tôi như thông tin của bạn sẽ khác được thu thập, sử dụng và tiết lộ như mô tả trong Chính sách bảo mật này. <p>\n\
<p>\n\
•    Quảng cáo nhắm mục tiêu. Nếu bạn không muốn chúng tôi sử dụng thông tin mà chúng tôi thu thập hoặc mà bạn cung cấp cho chúng tôi để cung cấp quảng cáo theo sở thích của đối tượng-khán giả nhà quảng cáo của chúng tôi, bạn không nên sử dụng trang web của chúng tôi như thông tin của bạn sẽ khác được thu thập, sử dụng và tiết lộ như được mô tả trong Chính sách bảo mật này.<p>\n\
<p>\n\
Chúng tôi không kiểm soát được thu thập hoặc sử dụng thông tin của bạn bên thứ ba để phục vụ quảng cáo dựa trên sở thích. Tuy nhiên, các bên thứ ba có thể cung cấp cho bạn cách để chọn không có thông tin của bạn thu thập hoặc sử dụng theo cách này. Bạn có thể chọn không tham gia nhận quảng cáo nhắm mục tiêu từ các thành viên của Network Advertising Initiative (\"NAI\") Trên trang web của NAI.<p>\n\
<p>\n\
<p>\n\
<h6>Bảo mật dữ liệu</h6><p>\n\
<p>\n\
Chúng tôi đã thực hiện các biện pháp được thiết kế để bảo vệ thông tin cá nhân của bạn khỏi mất mát do tai nạn và truy cập trái phép, sử dụng, thay đổi, và tiết lộ. <p>\n\
<p>\n\
Sự an toàn và bảo mật thông tin của bạn cũng phụ thuộc vào bạn. Trong trường hợp chúng tôi đã đưa cho bạn (hoặc nơi bạn đã chọn) một mật khẩu để truy cập vào một số phần của trang web của chúng tôi, bạn có trách nhiệm giữ bí mật mật khẩu này. Chúng tôi yêu cầu bạn không chia sẻ mật khẩu của bạn với bất cứ ai. Chúng tôi khuyến khích bạn phải cẩn thận về đưa ra thông tin trong khu vực chung của website như bảng tin. Những thông tin bạn chia sẻ trong khu vực công cộng có thể được xem bởi bất kỳ người sử dụng của trang web.<p>\n\
<p>\n\
Thật không may, việc truyền tải thông tin qua internet là không hoàn toàn an toàn. Mặc dù chúng tôi cố gắng hết sức để bảo vệ thông tin cá nhân của bạn, chúng tôi không thể đảm bảo sự an toàn của thông tin cá nhân của bạn được truyền đến với Website của chúng tôi. Bất kỳ truyền tải thông tin cá nhân có nguy cơ của riêng bạn. Chúng tôi không chịu trách nhiệm về gian lận của bất kỳ cài đặt bảo mật hoặc các biện pháp an ninh chứa trên trang web.<p>\n\
<p>\n\
Những thay đổi chính sách bảo mật của chúng tôi<p>\n\
<p>\n\
Chính sách này có thể đựoc thay đổi bất kỳ lúc nào và khi thay đổi chúng tôi sẽ thông báo cho các khách hàng qua địa chỉ email đã đăng ký.<p>\n\
<p>\n\
<h6>Thông tin liên lạc </h6><p>\n\
<p>\n\
Để đặt câu hỏi hoặc nhận xét về chính sách bảo mật này và thực tiễn bảo mật của chúng tôi, hãy liên hệ với chúng tôi tại: <a  style='color:Tomato;'>koolj</a>@TesterPRO.org</div>"
