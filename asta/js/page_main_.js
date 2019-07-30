
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
var jsonsamp = "";

//checking facebook login
var globaluid = currentuid;
var friendlist = [];
var frequestlist = [];
var domainlist = [];
var accesstoken = `?access_token=7dQHydxfjMCl0Ja0qGnuDeOCEGknzJZi6MvN2vhDVnQ3AQmuIx67rqWwCRYAtaUL`;
var currentuid = null;

var jsonsamp = {
friends:[
  {
    avatar:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/53172808_10155919787130079_4606537224517844992_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=46e24f488af14594b7f82c5da77969d5&oe=5D5C71DD",
    dname:"John Pham 1",
    domains:[],
    uid:"11110013580560577",
    uname:""
  },
  {
    avatar:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/53172808_10155919787130079_4606537224517844992_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=46e24f488af14594b7f82c5da77969d5&oe=5D5C71DD",
    dname:"John Pham 2",
    domains:[],
    uid:"3330013580560577",
    uname:""
  },
  {
    avatar:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/53172808_10155919787130079_4606537224517844992_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=46e24f488af14594b7f82c5da77969d5&oe=5D5C71DD",
    dname:"John Pham 3",
    domains:[],
    uid:"22220013580560577",
    uname:""
  },
  {
    avatar:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/53172808_10155919787130079_4606537224517844992_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=46e24f488af14594b7f82c5da77969d5&oe=5D5C71DD",
    dname:"John Pham",
    domains:[],
    uid:"44440013580560577",
    uname:""
  },
  {
    avatar:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/53172808_10155919787130079_4606537224517844992_n.jpg?_nc_cat=109&_nc_ht=scontent.fhan2-3.fna&oh=46e24f488af14594b7f82c5da77969d5&oe=5D5C71DD",
    dname:"John Pham",
    domains:[],
    uid:"55550013580560577",
    uname:""
  }
]
};

function addfriend(){
  $(".scrollbar-inner.scroll-content.scroll-scrolly_visible").empty();
  for (var i =0; i < jsonsamp.friends.length; i++){
    html_value_f = '<table class="tableelement" id="itemmem" name="'
    +jsonsamp.friends[i].uid+'"><tr><th style="width:70px"><img src="'
    + jsonsamp.friends[i].avatar +'" class="img-responsive img-circle" style="width:100%" alt="avatar"></th><th><h6 style="padding-left:25px; padding-top: 5px;">'
    + jsonsamp.friends[i].dname +'</h6><p style="padding-left:25px"> <a class = "footersub1"> Domain gợi ý: <a  style="color:Tomato;">Tài chính&nbsp;</a><a  style="color:MediumSeaGreen;">Data mining&nbsp;</a><a  style="color:SlateBlue;">Địa ốc&nbsp;</a><a  style="color:Violet;">Gái xinh</a></a></p></th><th ><p style="padding-right:20px"><input class="checkbox" type="checkbox"></p></th><tr></table>';

    $(".scrollbar-inner").append(html_value_f);
    console.log("add------------------"+jsonsamp.friends[i].uid);
  }
  $('.scrollbar-inner').scrollbar();

  $(".tableelement").click(function(e){
    alert(e.currentTarget.attributes.name.value);
  });

}


//progress bar
/*
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
*/

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



//add testdata
$(document).ready(function () {
    
  $("#mappart").hide();
  $("#termpart").hide();
  $(".AcknowledgeInnerDiv").hide();
  $("#leftpart").show();
  $("#rightpart").show();
  $("#apppart").hide();  
  addfriend();
  /*
  var urltoken =  "/main.html";//hostip + ":" + hostport + `/auth/jwt/callback?token=`+tokenKey;
  var hostlogin = `https://vote.TesterPRO.org`;
  var urllogin = hostlogin + ":" + "8078" + "/users/loginUser"
  var datalogin = JSON.stringify({
                            "email": "a@1.com",
                            "password": "1"
                          });
  //window.open(urltoken, '_blank');
//var urltoken = 'http://vote.TesterPRO.org/rest/auth/jwt/callback?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTc1NzA1MjcxYWFkNGViMTAyZDVkOCIsImlhdCI6MTU0NTAzMzQ4MywiZXhwIjoxNTQ1MDMzNjAzfQ.MAWhLEo925_AkUQCN32uA2vBHIMyX0Hf2ZWJ-89dXqo'


  //progressbar();


  postviewerlogin(urllogin, datalogin);

  document.getElementById("btnInit").onclick = function(){

    //gotoapp();
    console.log(urltoken);
    var myWindow1 = window.open(urltoken, '_self');
    //var myWindow2 = window.open(urltoken, '_self');
    //console.log(urltoken);
  };
  */
});
