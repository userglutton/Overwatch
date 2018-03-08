window.onload=function(){
	var Pic=['a%2Fimages%2F2017%2F8%2F24%2FMeiShort_OW_Panel-L_JP_696x306','a%2Fimages%2F2017%2F8%2F23%2FJunkertown-ThePlan_OW_Panel-L_RM-JP_696x306']
	var Wd=['《守望先锋》动画短片|《我们出发吧》','《守望先锋》新地图:渣客镇'];
	var newsCon=document.getElementById('newsCon');
		//两个新闻
	for(var i=0;i<Pic.length;i++){
		//创建id为pic的li
		var oNewsLi=document.createElement('li');
		oNewsLi.id="pic";
		newsCon.appendChild(oNewsLi);
		//创建li中的img
		var oImg=document.createElement('img');
		oImg.src="images/"+Pic[i]+".jpg";
		oNewsLi.appendChild(oImg);
		//创建li中的a img+a
		var oI=document.createElement("i");
		oNewsLi.appendChild(oI);
		oI.innerHTML=Wd[i];
	}
	//hero
	var oHero=document.getElementById('hero');
	//创建一个ul 
	var oHeroWd=document.createElement('ul');
	oHeroWd.id='heroWd';
	oHero.appendChild(oHeroWd);
	//创建ul里的标题 标签是i
	var oHeroI=document.createElement('i');
	oHeroI.id="heroi";
	oHeroI.innerHTML="各具特色的英雄";
	oHeroWd.appendChild(oHeroI);

	//创建一个li 作为标题的内容
	var oHeroCon=document.createElement('li');
	oHeroCon.id="heroCon";
	oHeroCon.innerHTML="不论喜欢哪种游戏方式,你总能找到适合自己玩法的英雄。<br>掌握他们独特的技能玩法，享受《守望先锋》的无穷乐趣！";
	oHeroWd.appendChild(oHeroCon);

	//创建一个滑过换英雄的特效ul
	var oHeroShow=document.createElement('ul');
	oHeroShow.id="heroShow";
	oHero.appendChild(oHeroShow);
	//创建英雄名称以及简介的两个数组
	var oHeroCalled=['末日铁拳','源氏','麦克雷','法老之鹰','死神','士兵：76','黑影','猎空','堡垒','半藏','狂鼠','美','托比昂','黑百合','D.Va','奥丽莎','莱因哈特','路霸','温斯顿','查莉娅','安娜','卢西奥','天使','秩序之光','禅雅塔'];
	var oHeroIntroduction=['一位利用个人头脑、魅力和蛮力来创建一个更强大世界的战术家。','一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。','一名亡命天涯的神枪手，以自己的方式伸张正义。','一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。','一名无情的杀手，一直在追杀前守望先锋的特工们。','一名试图自己将守望先锋敌人绳之于法的独行侠。','臭名昭著的黑客，沉迷于揭秘——及其带来的权力。','一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。','一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。','一名强大而致命的弓箭大师。','一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。','一名能够操控天气，为了保护环境而选择战斗的科学家。','一名天才工程师，可以在战场上打造武器系统。','一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。','一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。','维护努巴尼秩序并保护努巴尼人民的维和机器人。','一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。','一名残暴的杀手，因残忍和肆意破坏而臭名昭著。','一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。','世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。','守望先锋的创始成员之一，“起死回生”重返战场保护亲人和朋友。','一位国际名人，通过音乐和巡演激发社会正能量。','一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。','一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。','一位游走于世界寻找灵魂升华之道的机械僧侣。'];
	//创建li中的图片
	var oHeroPic=['1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fdoomfist','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fgenji','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fmccree','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fpharah','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Freaper','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fsoldier-76','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fsombra','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Ftracer','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fbastion','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fhanzo','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fjunkrat','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fmei','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Ftorbjorn','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fwidowmaker','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fdva','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Forisa','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Freinhardt','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Froadhog','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fwinston','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fzarya','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fana','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Flucio','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fmercy','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fsymmetra','1%2Fimages%2Fv2%2Fhome%2Foverlay%2Fzenyatta'];
	var oHeroHead=['38BBgCBLTSWoMh5twAAAABJRU5ErkJggg==','vcAAAAASUVORK5CYII=','QT7RrITiQIDkEw22z2wiMYLQMapE4tIl7Bd3bZEtnTr3iP3X8JMABy+024tD7zswAAAABJRU5ErkJggg==','AaMvdUt8jaUqAAAAAElFTkSuQmCC','3Wh4zqWk7wAAAABJRU5ErkJggg==','1+AAQCZz5maRnTlzAAAAABJRU5ErkJggg==','dAZydOwSv3fzZ7eXMir1QdivpKtZj8GvLckzSRLo4DV6cRYJlU8mhAn+NmR37yE8nYhECi36XKaolQ7Q8Z18q1+izOfhfAQYAwm0XAu+WifQAAAAASUVORK5CYII=','QAAAAASUVORK5CYII=','vF7MDRZxf8PljfF+Z0MulEAAAAASUVORK5CYII=','A4wPLZoZPhDkAAAAAElFTkSuQmCC','hytIZAVBrU5RoVkJaN1QD6XVQzEEX1OPdzyua79gVFdhs3cDlroeSRaFOOl6+ApfjitkYJZaxs8d+o4TvOzNBB9NxCUFQpZrDKOtxJNHz5yjN7tMkHdLP6XAAMABoriVCcsO4IAAAAASUVORK5CYII=','78AAwAfG9xlE+SgLwAAAABJRU5ErkJggg==','tPnUo7xzy+rwSG8CwP8PCXyS+RTGbI4AAAAASUVORK5CYII=','wGvOB5EKcF28QAAAABJRU5ErkJggg==','yvAAMAleAs1hVFWy8AAAAASUVORK5CYII=','++jdoTE7SyNoMRxbnJbj40nbPZR9qLHr9jXWV9cFAI4jai+J21ypSSBINW4OCG5d37P8BROHwcGEnRDEAAAAASUVORK5CYII=','x+R5ibvYQ+MSAAAAABJRU5ErkJggg==','E1ExItIgeLDr6rwADAPYKK0PkG5EmAAAAAElFTkSuQmCC','wdJrW5+lk7TdgAAAABJRU5ErkJggg==','BBgAOK31xbwdx1kAAAAASUVORK5CYII=','HfsoJEFAAAAAElFTkSuQmCC','RMf1WhrH+FE4jXfK3aBarjhUSx0UFEPt2GJgeFNMKGnnRKH05ZtWl5i9MseCYsQ3OIBp1Uj9I8AAwAss9sWbUp+PQAAAABJRU5ErkJggg==','wOIyFO27HIfaAAAAABJRU5ErkJggg==','umjv3O+zVhv8Pn9+t1ZhL4okAAAAASUVORK5CYII=','kXm5yGDSTG0AAAAASUVORK5CYII='];
	//创建渐变色背景的li
	var oHeroPicIntro=document.createElement('li');
	oHeroPicIntro.id="heroPicIntro"
	oHeroShow.appendChild(oHeroPicIntro);

	var oHeroLook=document.createElement("img");
	oHeroLook.src="images/"+oHeroPic[0]+".png";
	oHeroLook.id="changePic";
	oHeroPicIntro.appendChild(oHeroLook);

	var oHeroDesignation=document.createElement('i');
	oHeroDesignation.innerHTML=oHeroCalled[0];
	oHeroDesignation.id="heroDes";
	oHeroPicIntro.appendChild(oHeroDesignation);

	var oHeroIntro=document.createElement('span');
	oHeroIntro.innerHTML=oHeroIntroduction[0];
	oHeroIntro.id="heroIntro";
	oHeroPicIntro.appendChild(oHeroIntro);

	var oHeroHeadPor=document.createElement('li');
	oHeroHeadPor.id="heroPor";
	oHeroShow.appendChild(oHeroHeadPor);

	for(var i = 0; i<oHeroHead.length; i++){
		var oHerohead=document.createElement('dl');
		oHerohead.id="herohead";
		oHeroHeadPor.appendChild(oHerohead);
		var oHeroheadPic=document.createElement('dt');
		oHeroheadPic.className="heroheadPic";
		oHerohead.appendChild(oHeroheadPic);

		var oHeroheadpic=document.createElement('img');
		oHeroheadpic.src="images/"+oHeroHead[i]+".png";
		oHeroheadPic.appendChild(oHeroheadpic);

		var oHeroheadwd=document.createElement('dd');
		oHeroheadwd.className="heroheadwd";
		oHeroheadwd.innerHTML=oHeroCalled[i];
		oHerohead.appendChild(oHeroheadwd);

		var oHErohead=document.getElementsByTagName("dl");
		
	}
	var aHeroheadPic=document.getElementsByClassName('heroheadPic');
	var aHeroheadwd=document.getElementsByClassName('heroheadwd');
	for(var j = 0; j<oHeroHead.length; j++){
		oHErohead[j].key=j;
		oHErohead[j].onmouseover=function(){
				oHeroLook.src="images/"+oHeroPic[this.key]+".png";
				oHeroDesignation.innerHTML=oHeroCalled[this.key];
				oHeroIntro.innerHTML=oHeroIntroduction[this.key];

				aHeroheadPic[this.key].style.height="90px";
				aHeroheadPic[this.key].style.background="#F7931E";
				aHeroheadPic[this.key].style.top="-10px";
				aHeroheadwd[this.key].style.top="70px";
				aHeroheadwd[this.key].style.background="#ccc";
			}
		oHErohead[j].onmouseout=function(){
				oHeroLook.src="images/"+oHeroPic[this.key]+".png";
				oHeroDesignation.innerHTML=oHeroCalled[this.key];
				oHeroIntro.innerHTML=oHeroIntroduction[this.key];
				
				aHeroheadPic[this.key].style.height="80px";
				aHeroheadPic[this.key].style.background="#474747";
				aHeroheadPic[this.key].style.top="0px";
				aHeroheadwd[this.key].style.top="80px";
				aHeroheadwd[this.key].style.background="#fff";
			}
	}
	
//视频js
  $('.section-second').vidbg({
      'mp4': 'media/mp4_video.mp4',
      'poster': 'media/fallback.jpg',
  }, {
    // Options
    muted: true,
    loop: true,
	overlay: true,
  });
      
}