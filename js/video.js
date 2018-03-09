window.onload=function(){
	var oCenter=document.getElementById('center');
	var oVideoTitle=document.createElement('ul');
	oCenter.appendChild( oVideoTitle);
	 oVideoTitle.id="title";
	 oVideoTitle.innerHTML="视频";
	var oVideoBig=document.createElement('ul');
	oCenter.appendChild(oVideoBig);
	oVideoBig.id="big";

	var oPicBig=['2Fcinematic-trailer.32Pn2','2Fgameplay'];
	var oBigWd=['动画视频','游戏视频2']
	for(var i=0; i<oBigWd.length; i++){
		var oVideobig1=document.createElement("p");
		oVideoBig.appendChild(oVideobig1);
		oVideobig1.className="ovideobig1";


		var oVideobig=document.createElement("li");
		oVideobig1.appendChild(oVideobig);
		oVideobig.className="ovideobig";

		var oVideobigPic=document.createElement('img');
		oVideobig.appendChild(oVideobigPic);
		oVideobigPic.className="bigpic";
		oVideobigPic.src="images/"+oPicBig[i]+".jpg";

		var oVideobigA=document.createElement('a');
		oVideobigA.className="biga";
		oVideobig.appendChild(oVideobigA);
		oVideobigA.innerHTML=oBigWd[i];

		var oVideobigPic2=document.createElement('img');
		oVideobig.appendChild(oVideobigPic2);
		oVideobigPic2.className="bigpic2";
		oVideobigPic2.src="images/2Fyoutube-btn-ylw.png";

		var avideo=document.getElementsByTagName('p');
		avideo[i].onmouseover=function(){
			oVideobigPic2.src="images/2Fyoutube-btn-wh.png";
		}
		avideo[i].onmouseout=function(){
			oVideobigPic2.src="images/2Fyoutube-btn-ylw.png";
		}
	}
	var oVideoSmall=document.createElement('ul');
	oCenter.appendChild(oVideoSmall);
	oVideoSmall.id="small";
	var oPicSmall=['2Fzenyatta-preview.0WJ2y','2Fzenyatta-gameplay.0johk','2Fzarya-preview.0FnY9','2Fzarya-gameplay.0S6Ke','2Fwintro-cinematic-trailer','2Fwinston-preview.3DkAe','2Fwinston-gameplay.3cKYf','2Fwinston-animated-short','2Fwidowmaker-preview.364gD','2Fwidowmaker-gameplay.0Qu4D','2Fwidowmaker-animated-short','2Fvideos','2Ftracer-preview.3vrGl','2Ftracer-gameplay.07Mui','2Ftorbjorn-preview.0IeXs','2Ftorbjorn-gameplay.0f91I','2Ftheatrical-teaser.2xgWi','2Fsymmetra-preview.3qgRu','2Fsombra-origins-video','2Fsoldier-76-preview.0QqG7','2Fsoldier-76-gameplay.07JJN','2Froadhog-gameplay','2Freinhardt-preview.24Txj','2Freinhardt-gameplay.4UkSR','2Freference','2Freaper-preview.1atCx','2Freaper-gameplay.0esOe','2Fpharah-preview.1ntOO','2Fpharah-gameplay.4fwzw','2Forisa-sizzle-video','2Fmercy-preview.4e9AH','2Fmercy-gameplay.4c7X9','2Fmei-animated-short','2Fmccree-preview.0nR3h','2Fmccree-gameplay.3nQqu','2Flucio-preview.2aGz2','2Fjunkrat-gameplay','2Fhanzo-preview.0N1xN','2Fhanzo-gameplay.2oi3P','2Fgenji-ability','2Fgameplay','2Fgameplay-trailer.32G0v','2Fdva-ability','2Fdragons-animated-short','2Fdoomfist-sizzle','2Fdoomfist-origins-video','2Fbastion-preview.2sKxS','2Fbastion-gameplay.3Wotx','2F05sbskill700x396','2Fana-sizzle-reel'];
	var oSmallWd=['动画短片《我们出发吧》','动画短片《渗透》','动画短片《最后的堡垒》','动画短片《英雄》','动画短片《双龙》','动画短片《新生》','动画短片《归来》','游戏视频1','剧场版视频宣传','动画视频:\"守望动员令\"','英雄故事:末日铁拳','英雄故事:奥丽莎','英雄故事:黑影','英雄故事:安娜','末日铁拳技能简介','奥丽莎技能简介','黑影技能简介','安娜技能简介','卢西奥游戏预览','士兵:76游戏预览','查理亚游戏预览','麦克雷游戏预览','堡垒游戏预览','半藏游戏预览','天使游戏预览','法老之鹰游戏预览','死神游戏预览','莱因哈特游戏预览','秩序之光游戏预览','托比昂游戏预览','猎空游戏预览','黑百合游戏预览','温斯顿游戏预览','禅雅塔游戏预览','源氏游戏预览','美技能简介','路霸技能简介','狂鼠技能简介','D.Va技能简介','卢西奥技能简介','士兵:76技能简介','查理亚技能简介','麦克雷技能简介','堡垒技能简介','半藏技能技能简介','托比昂技能简介','猎空技能简介','黑百合技能简介','温斯顿技能简介','禅雅塔技能简介'];
	for(var j=0;j<oPicSmall.length;j++){
		var oVideosmall1=document.createElement("dl");
		oVideoSmall.appendChild(oVideosmall1);
		oVideosmall1.className="ovideosmall1";


		var oVideosmall=document.createElement("li");
		oVideosmall1.appendChild(oVideosmall);
		oVideosmall.className="ovideosmall";

		var oVideosmallPic=document.createElement('img');
		oVideosmall.appendChild(oVideosmallPic);
		oVideosmallPic.className="smallpic";
		oVideosmallPic.src="images/"+oPicSmall[j]+".jpg";

		var oVideosmallA=document.createElement('a');
		oVideosmallA.className="smalla";
		oVideosmall.appendChild(oVideosmallA);
		oVideosmallA.innerHTML=oSmallWd[j];

		var oVideosmallPic2=document.createElement('img');
		oVideosmall.appendChild(oVideosmallPic2);
		oVideosmallPic2.className="smallpic2";
		oVideosmallPic2.src="images/2Fyoutube-btn-ylw.png";

		var avideo=document.getElementsByTagName('dl');
		avideo[j].onmouseover=function(){
			oVideobigPic2.src="images/2Fyoutube-btn-wh.png";
		}
		avideo[j].onmouseout=function(){
			oVideobigPic2.src="images/2Fyoutube-btn-ylw.png";
		}
	}
}