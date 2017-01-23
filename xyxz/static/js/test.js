a = 1;
console.log(a)

// a = "https://s.taobao.com/search?data-key=s&data-value=44&ajax=true&_ksTS=1485056321102_837&callback=jsonp838&initiative_id=tbindexz_20170122&ie=utf8&spm=a21bo.50862.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=tds%E6%B0%B4%E8%B4%A8%E6%B5%8B%E8%AF%95%E7%AC%94&suggest=history_1&_input_charset=utf-8&wq=&suggest_query=&source=suggest&bcoffset=3&ntoffset=0&p4ppushleft=1%2C48"

// var xhr = new XMLHttpRequest();
// xhr.onload = function(){
// 	console.log(xhr.responseText);
// };
// xhr.open('POST', a , true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.send("f=json");

try {
  $.ajax({  
	// 
    // url:"https://suggest.taobao.com/sug?code=utf-8&q=d&_ksTS=1485056683327_802&callback=jsonp803&area=b2c&code=utf-8&k=1&bucketid=2&src=tmall_pc&isg=AgAA9qFyTEcc9j9o4DRr_FSo0Y5zM2BdA3wRKHqT-puu9aMfJ5sL44WDa-rP&isg2=Av%2F%2FkrbhWylbMkI7qINT2s97D9mL0lOG",  
    // url:"https://s.taobao.com/search?data-key=s&data-value=44&ajax=true&_ksTS=1485056321102_837&callback=?&initiative_id=tbindexz_20170122&ie=utf8&spm=a21bo.50862.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=tds%E6%B0%B4%E8%B4%A8%E6%B5%8B%E8%AF%95%E7%AC%94&suggest=history_1&_input_charset=utf-8&wq=&suggest_query=&source=suggest&bcoffset=3&ntoffset=0&p4ppushleft=1%2C48",  
    url:"https://s.m.tmall.com/m/search_items.htm?page_size=100&page_no=1&q=%D2%FB%D3%C3%CB%AE&type=p&tmhkh5=&from=mallfp..m_1_searchbutton&sort=s&sarea_code=340100",  
    dataType:'json',
    data:'',  
   	jsonCallback: "json",
    // jsonpCallback: 'jsonCallback',
    contentType: 'application/json;charset=UTF-8',
    xhr:function(a){
    	console.log(a)
    },
    success:function(result) {  
    	console.log(result)
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
    	console.log(XMLHttpRequest)
    	console.log(errorThrown)
    	console.log(textStatus)
		// alert(XMLHttpRequest.status + " " + textStatus + " " + errorThrown);
	},
    timeout:3000  
});  
}
// var xmlhttp;
// if (window.XMLHttpRequest)
//   {// code for IE7+, Firefox, Chrome, Opera, Safari
//   xmlhttp=new XMLHttpRequest();
//   }
// else
//   {// code for IE6, IE5
//   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   xmlhttp.open("GET","https://list.tmall.com/search_product.htm?spm=a220m.1000858.1000724.11.T7VmQl&callback=?&s=120&q=%BC%E1%B9%FB%C0%F1%BA%D0&sort=s&style=g&from=mallfp..pc_1.1_hq&active=1&smAreaId=320500&type=pc",false);
// xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");


// xmlhttp.send();
// console.log(xmlhttp)
// }
catch (e) {
   // statements to handle any exceptions
   // logMyErrors(e); // pass exception object to error handler
   console.log(e)
}



// var createAjax = function() {
//     var xhr = null;
//     try {
//         //IE系列浏览器
//         xhr = new ActiveXObject("microsoft.xmlhttp");
//     } catch (e1) {
//         try {
//             //非IE浏览器
//             xhr = new XMLHttpRequest();
//         } catch (e2) {
//             window.alert("您的浏览器不支持ajax，请更换！");
//         }
//     }
//     return xhr;
// };


// var ajax = function(conf) {
//     // 初始化
//     //type参数,可选
//     var type = conf.type;
//     //url参数，必填 
//     var url = conf.url;
//     //data参数可选，只有在post请求时需要
//     var data = conf.data;
//     //datatype参数可选    
//     var dataType = conf.dataType;
//     //回调函数可选
//     var success = conf.success;

//     if (type == null){
//         //type参数可选，默认为get
//         type = "get";
//     }
//     if (dataType == null){
//         //dataType参数可选，默认为text
//         dataType = "text";
//     }
//     // 创建ajax引擎对象
//     var xhr = createAjax();
//     // 打开
//     xhr.open(type, url, true);
//     // 发送
//     if (type == "GET" || type == "get") {
//         xhr.send(null);
//     } else if (type == "POST" || type == "post") {
//         xhr.setRequestHeader("content-type",
//                     "application/x-www-form-urlencoded");
//         xhr.send(data);
//     }
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             if(dataType == "text"||dataType=="TEXT") {
//                 if (success != null){
//                     //普通文本
//                     success(xhr.responseText);
//                 }
//             }else if(dataType=="xml"||dataType=="XML") {
//                 if (success != null){
//                     //接收xml文档    
//                     success(xhr.responseXML);
//                 }  
//             }else if(dataType=="json"||dataType=="JSON") {
//                 if (success != null){
//                     //将json字符串转换为js对象  
//                     success(eval("("+xhr.responseText+")"));
//                 }
//             }
//         }
//     };
// };

// ajax({
//     url:"https://list.tmall.com/search_product.htm?spm=a220m.1000858.1000724.11.T7VmQl&callback=?&s=120&q=%BC%E1%B9%FB%C0%F1%BA%D0&sort=s&style=g&from=mallfp..pc_1.1_hq&active=1&smAreaId=320500&type=pc",
//     data:"name=dipoo&info=good",
//     dataType:"jsonp",
//     success:function(data){
//         alert(data.name);
//     }
// });

// var requestJsonp = function (opt) {
// 	var funName, script;
// /*
// * step1 创建_callback方法
// */
// //_callback函数名
// funName = '_cb' + (Math.random() * 1000000);
// //创建_callback方法
// window[funName] = function (data) {
// 	if (typeof opt.success == 'function') {
// 		opt.success(data);
// 	}
// 	window[funName] = null;
// 	delete window[funName];
// 	document.body.removeChild(script);
// 	script = null;
// };
// /*
// * step2 插入script标签
// */
// script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = opt.url + (opt.url.indexOf('?') > -1 ? '&' : '?') + '_callback=' + funName;
// // console.log(script)
// document.body.appendChild(script);

// * step3 服务器输出js
// * 服务器应接受url参数中_callback的值,作为函数名执行输出js
// * 类似输出
// * _callback({"name":"jsonp","description":"jsonp test"});

// /*
// * 处理error
// */
// script.addEventListener('error', function () {
// 	console.log("error")
// 	window[funName] = null;
// 	delete window[funName];
// 	if (typeof opt.error == 'function') {
// 		opt.error();
// 	}
// 	document.body.removeChild(script);
// 	script = null;
// });
// };
// requestJsonp({
// 	url: 'https://s.m.tmall.com/m/search_items.htm?page_size=100&page_no=1&q=%D2%FB%D3%C3%CB%AE&type=p&tmhkh5=&from=mallfp..m_1_searchbutton&sort=s&sarea_code=340100',
// 	success: function (data) {
// 		console.log(data);
// 	},
// 	error: function () {
// 		console.log('request error!');
// 	}
// });



