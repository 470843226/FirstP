//创建轮播图
createBanner({
	element : "banner",
	data : bannerData
});
//车展览
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>"
				+ "<p>" + option.label + "</p>"
				+ "<img src=\"" + option.smallUrl + "\" />";
	return a;
}
var exhibitionData = [
	{
		href : "/a",
		bigUrl : "./image/exhibition.jpg",
		smallUrl : "http://img.souche.com/files/default/650DBD6CB57B8F25F3841226B07001FC_160x105.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦"
	},
	{
		href : "/a",
		bigUrl : "http://img.souche.com/files/default/FE79D6B98A482CE3DDE0B02C13C196DA_285x240.jpg",
		smallUrl : "http://img.souche.com/files/default/748EA19E6AF75B18307CE6B78AE8708F_160x105.png",
		title : "百年大厂杰作",
		label : "时间在流逝，品质永流传！"
	},
	{
		href : "/a",
		bigUrl : "http://img.souche.com/files/default/84145234D6D86B139759C93EF5F8E576_285x240.jpg",
		smallUrl : "http://img.souche.com/files/default/F0587A654F8B0FF2A66757BC4D2F750A_180x86.png",
		title : "便宜才是王道",
		label : "谁说便宜没好车？"
	},
	{
		href : "/a",
		bigUrl : "http://img.souche.com/files/default/1A40C6F3727FA37B99F7EE63877E4FC8_285x240.jpg",
		smallUrl : "http://img.souche.com/files/default/B1C0FBAE06D1FED840C31D3C55651191_160x105.png",
		title : "明星也抠门",
		label : "明星都买二手车了你还等什么"
	},
	{
		href : "/a",
		bigUrl : "http://img.souche.com/files/default/45AE476B64C2523866F6C3C641D6695F_285x240.jpg",
		smallUrl : "http://img.souche.com/files/default/2BF2D677D519CBAE0D9F8F64FA3F0F5F_160x95.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦"
	},
	{
		href : "/a",
		bigUrl : "http://img.souche.com/files/default/FD800BB8930B88059E25CD5E0C387F1A_285x240.jpg",
		smallUrl : "http://img.souche.com/files/default/E4D855E0EAA81F2209A68519220C702A_240x174.png",
		title : "全能的大玩具",
		label : "越野帮手、四驱利器"
	}
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
onscroll = function(){
	topNav.className = topNavClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : " normal");
};