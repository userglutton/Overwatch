window.onload=function(){
	var oCenter=document.getElementById('center');
	var oVideoTitle=document.createElement('ul');
	oCenter.appendChild( oVideoTitle);
	 oVideoTitle.id="title";
	 oVideoTitle.innerHTML="视频";
	var oVideoBig=document.createElement('ul');
	oCenter.appendChild(oVideoBig);
	oVideoBig.id="big";

	var oPicBig=['2%2Fmedia%2Fgameplay%2Fcinematic-trailer.32Pn2','2%2Fmedia%2Fvideos%2Fgameplay'];
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
		oVideobigPic2.src="images/1%2Fassets%2Fimg%2Ficons%2Fyoutube-btn-ylw.png";

		var avideo=document.getElementsByTagName('p');
		avideo[i].onmouseover=function(){
			oVideobigPic2.src="images/1%2Fassets%2Fimg%2Ficons%2Fyoutube-btn-wh.png";
		}
		avideo[i].onmouseout=function(){
			oVideobigPic2.src="images/1%2Fassets%2Fimg%2Ficons%2Fyoutube-btn-ylw.png";
		}
	}
	var oVideoSmall=document.createElement('ul');
	oCenter.appendChild(oVideoSmall);
	oVideoSmall.id="small";
	var oPicSmall=['2%2Fmedia%2Fgameplay%2Fzenyatta-preview.0WJ2y','2%2Fmedia%2Fgameplay%2Fzenyatta-gameplay.0johk','2%2Fmedia%2Fgameplay%2Fzarya-preview.0FnY9','2%2Fmedia%2Fgameplay%2Fzarya-gameplay.0S6Ke','2%2Fmedia%2Fvideos%2Fwintro-cinematic-trailer','2%2Fmedia%2Fgameplay%2Fwinston-preview.3DkAe','2%2Fmedia%2Fgameplay%2Fwinston-gameplay.3cKYf','2%2Fmedia%2Fgameplay%2Fwinston-animated-short','2%2Fmedia%2Fgameplay%2Fwidowmaker-preview.364gD','2%2Fmedia%2Fgameplay%2Fwidowmaker-gameplay.0Qu4D','2%2Fmedia%2Fvideos%2Fwidowmaker-animated-short','1%2Fassets%2Fimg%2Fpages%2Fmedia%2Fbackgrounds%2Fvideos','2%2Fmedia%2Fgameplay%2Ftracer-preview.3vrGl','2%2Fmedia%2Fgameplay%2Ftracer-gameplay.07Mui','2%2Fmedia%2Fgameplay%2Ftorbjorn-preview.0IeXs','2%2Fmedia%2Fgameplay%2Ftorbjorn-gameplay.0f91I','2%2Fmedia%2Fvideos%2Ftheatrical-teaser.2xgWi','2%2Fmedia%2Fgameplay%2Fsymmetra-preview.3qgRu','a%2Fimages%2F2016%2F11%2F14%2Fsombra-origins-video-b7bbc4ee1d373eaa85ca3328ed0847fb3841e060395f9f0c09814de896eae1764b46957af83ba19249ebb1969a85b641c5dfa3428605334d68d8b0e15d89dc2c','2%2Fmedia%2Fgameplay%2Fsoldier-76-preview.0QqG7','2%2Fmedia%2Fgameplay%2Fsoldier-76-gameplay.07JJN','2%2Fmedia%2Fgameplay%2Froadhog-gameplay','2%2Fmedia%2Fgameplay%2Freinhardt-preview.24Txj','2%2Fmedia%2Fgameplay%2Freinhardt-gameplay.4UkSR','1%2Fassets%2Fimg%2Fpages%2Fmedia%2Fbackgrounds%2Freference','2%2Fmedia%2Fgameplay%2Freaper-preview.1atCx','2%2Fmedia%2Fgameplay%2Freaper-gameplay.0esOe','2%2Fmedia%2Fgameplay%2Fpharah-preview.1ntOO','2%2Fmedia%2Fgameplay%2Fpharah-gameplay.4fwzw','a%2Fimages%2F2017%2F3%2F23%2Forisa-sizzle-video','2%2Fmedia%2Fgameplay%2Fmercy-preview.4e9AH','2%2Fmedia%2Fgameplay%2Fmercy-gameplay.4c7X9','2%2Fmedia%2Fvideos%2Fmei-animated-short','2%2Fmedia%2Fgameplay%2Fmccree-preview.0nR3h','2%2Fmedia%2Fgameplay%2Fmccree-gameplay.3nQqu','2%2Fheroes%2Flucio%2Flucio-preview.2aGz2','2%2Fmedia%2Fgameplay%2Fjunkrat-gameplay','2%2Fmedia%2Fgameplay%2Fhanzo-preview.0N1xN','2%2Fmedia%2Fgameplay%2Fhanzo-gameplay.2oi3P','2%2Fmedia%2Fvideos%2Fgenji-ability','2%2Fmedia%2Fvideos%2Fgameplay','2%2Fmedia%2Fgameplay%2Fgameplay-trailer.32G0v','2%2Fmedia%2Fvideos%2Fdva-ability','2%2Fmedia%2Fvideos%2Fdragons-animated-short','2%2Fmedia%2Fvideos%2Fdoomfist-sizzle','2%2Fmedia%2Fvideos%2Fdoomfist-origins-video','2%2Fmedia%2Fgameplay%2Fbastion-preview.2sKxS','2%2Fmedia%2Fgameplay%2Fbastion-gameplay.3Wotx','2%2Fzz%2F201611%2F05sbskill700x396','a%2Fimages%2F2016%2F11%2F14%2Fana-sizzle-reel'];
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
		oVideosmallPic2.src="images/1%2Fassets%2Fimg%2Ficons%2Fyoutube-btn-ylw.png";

		var avideo=document.getElementsByTagName('dl');
		avideo[j].onmouseover=function(){
			oVideobigPic2.src="images/1%2Fassets%2Fimg%2Ficons%2Fyoutube-btn-wh.png";
		}
		avideo[j].onmouseout=function(){
			oVideobigPic2.src="images/1%2Fassets%2Fimg%2Ficons%2Fyoutube-btn-ylw.png";
		}
	}
}