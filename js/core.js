document.getElementById("top").onclick = function(){
	scrollTo(0, 0);
};
var divMain = document.createElement("div");
var bottomNav = document.getElementById("bottomNav");
divMain.className = "divmain";
function createAnchor(name, href){
	var a = document.createElement("a");
		a.appendChild(document.createTextNode(name));
		a.href = href;
		return a;
}
var settings1 = [
	{
			name : "导购大全",
			href : ""
	},
	{
			name : "城市大全",
			href : ""
	},
	{
			name : "品牌大全",
			href : ""
	},
	{
			name : "车系大全",
			href : ""
	}
];
var settings2 = [
	{
			name : "购车指南",
			href : ""
	},
	{
			name : "如何挑选二手车",
			href : ""
	},
	{
			name : "如何判断事故火烧水浸车",
			href : ""
	},
	{
			name : "二手车指标说明",
			href : ""
	}
];
var settings3 = [
	{
			name : "关于我们",
			href : ""
	},
	{
			name : "卖车理念",
			href : ""
	},
	{
			name : "车牛",
			href : ""
	},
	{
			name : "风车",
			href : ""
	},
	{
			name : "手机版",
			href : ""
	}
];
var settings4 = [
	{
			name : "联系我们",
			href : ""
	},
	{
			name : "联系电话",
			href : ""
	}
];
var liSettings = [settings1, settings2, settings3, settings4];
function createoLi(option, num){
	var a = 0;
	var ul = document.createElement("ul");
	while(a < num){
		var oLi = document.createElement("li");

			option[a].forEach(function(item){
				oLi.appendChild(createAnchor(item.name, item.href));
			});
			ul.appendChild(oLi);
			a++;
			
	}
	return ul;
}
divMain.appendChild(createoLi(liSettings, liSettings.length));
document.getElementById("bottomNav").appendChild(divMain);

var divpic = document.createElement("div"),
	img =  document.createElement("img"),
	span = document.createElement("span");
	divpic.className = "pic";
	img.src = "http://f.souche.com/FmfYeUMp-9vVovUzD9LZ3lX8hfos";
	img.className = "sys";
	span.innerText = "扫一扫，关注微信公众号";
	divpic.appendChild(img);
	divpic.appendChild(span);
	divMain.appendChild(divpic);
var div = document.createElement("div"),
	span = document.createElement("span"),
	data = ["厦门", "北京", "南宁", "杭州", "郑州", "漳州", "长沙", "合肥", "西安", "上海", "宁波", "温州", "太原",  "青岛", "南京", "武汉", "沈阳", "成都", "石家庄", '重庆', "台州", "大连", "福州", "佛山", "临沂", "济南", "苏州", "贵阳", "泉州", "南昌", "天津", "东莞", "深圳", "昆明", "广州", "包头", "鞍山", "淮南", "长春", "金华", "乌鲁木齐", "无锡", "柳州", "潍坊", "荆州", "保定", "枣庄", "洛阳", "常州", "沧州", "更多城市"];

span.innerText = "热门城市：";
div.appendChild(span);
function createA(element, data){
	data.forEach(function(item){
		element.appendChild(createAnchor(item, ""));
	});
}
createA(div, data);
bottomNav.appendChild(div);

var divF = document.createElement("div");
	divF.className = "divF";
	dataF = ["车险信息网", "中山二手车", "车易拍", "海南二手车", "汽车点评网", "杭州二手车","2014汽车报价","北京汽车网","汽车配件","二手车评估","湖北专用车","中国汽车网","大浙汽车","搜狐二手车","车300估价","58二手车","二手车评估"];
	createA(divF, dataF);
	bottomNav.appendChild(divF);

var p = document.createElement("p");
	p.innerText = "Copyright © 2016 SouChe All Rights Reserved 杭州大搜车汽车服务有限公司 版权所有 京 ICP备 13012136号 京公网安备 11010802013095号";
	bottomNav.appendChild(p);

var data = [
	{
		name : "热门"  
	},
	{
		name :"北京",
		href :""
	},
	{
		name :"宁波",
		href :""
	},
	{
		name : "深圳",
		href :""
	},
	{
		name :"厦门",
		href :""
	},
	{
		name :"成都",
		href :""
	}
];
var data2 = [
	{
		name : "华北" 
	},
	{
		name :"北京",
		href :""
	},
	{
		name :"天津",
		href :""
	},
	{
		name : "河北",
		href :""
	},
	{
		name :"山西",
		href :""
	},
	{
		name :"内蒙古",
		href :""
	}
];
var data3 = [
	{
		name : "东北"
	},
	{
		name :"辽宁",
		href :""
	},
	{
		name :"吉林",
		href :""
	},
	{
		name : "黑龙江",
		href :""
	}
];
var data4 = [
	{
		name :"华东"
	},
	{
		name :"上海",
		href :""
	},
	{
		name :"江苏",
		href :""
	},
	{
		name : "浙江",
		href :""
	},
	{
		name :"安徽",
		href :""
	},
	{
		name :"福建",
		href :""
	},
	{
		name : "江西",
		href :""
	},
	{
		name : "山东",
		href :""
	}
];
var data5 = [
	{
		name : "华中"
	},
	{
		name :"河南",
		href :""
	},
	{
		name :"湖北",
		href :""
	},
	{
		name : "湖南",
		href :""
	}
];
var data6 = [
	{
		name : "华南"
	},
	{
		name :"广东",
		href :""
	},
	{
		name :"广西",
		href :""
	}
];
var data7 = [
	{
		name : "西南"
	},
	{
		name :"重庆",
		href :""
	},
	{
		name :"四川",
		href :""
	},
	{
		name : "云南",
		href :""
	},
	{
		name : "贵州",
		href :""
	}
];
var data8 = [
	{
		name : "西北"
	},
	{
		name :"陕西",
		href :""
	},
	{
		name :"宁夏",
		href :""
	},
	{
		name : "新疆",
		href :""
	}
];
function createTStrip(data){
	var div = document.createElement("div"),
		span = document.createElement("span");
		div.className="title";
		span.innerText = data[0].name;
		div.appendChild(span);
		data.slice(1).forEach(function(item){
			var a = document.createElement("a");
				a.innerText = item.name;
				a.href = item.href;
			div.appendChild(a);
		});
		return div;
}
function createCStrip(data){
	var div = document.createElement("div"),
		span = document.createElement("span"),
		divbd = document.createElement("div");
		div.className = "line";
		divbd.className = "Cline";
		span.innerText = data[0].name;
		div.appendChild(span);	
		data.slice(1).forEach(function(item){
			var a = document.createElement("a");
				a.innerText = item.name;
				a.href = item.href;
			divbd.appendChild(a);
		});
		div.appendChild(divbd);
		return div;
}
var city = document.getElementById("city");
city.appendChild(createTStrip(data));
city.appendChild(createCStrip(data2));
city.appendChild(createCStrip(data3));
city.appendChild(createCStrip(data4));
city.appendChild(createCStrip(data5));
city.appendChild(createCStrip(data6));
city.appendChild(createCStrip(data7));
city.appendChild(createCStrip(data8));

var	signIn = document.getElementById("signIn"),
	signUp = document.getElementById("signUp");

	signIn.onclick = function(){
		var login = document.getElementById("login"),
			left = document.getElementById("left"),
			btnSubmit = document.getElementById("btnSubmit");
			login.className = null;
			left.innerText = "登录";
			btnSubmit.value = "登录";
		var close = document.getElementById("close");
		close.onclick = function(){
			login.className = "hid";
		}
	}
	signUp.onclick = function(){
		var login = document.getElementById("login"),
			left = document.getElementById("left"),
			btnSubmit = document.getElementById("btnSubmit");
			login.className = null;
			left.innerText = "注册";
			btnSubmit.value = "注册";
		var close = document.getElementById("close");
		close.onclick = function(){
			login.className = "hid";
		}
	}
	
