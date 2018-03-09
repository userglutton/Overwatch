window.onload=function(){
	var oCenter=document.getElementById('center');
			var oTitle=document.createElement("ul");
			oTitle.id="title";
			oCenter.appendChild(oTitle);
			oTitle.innerHTML="寻找英雄角色吗?";

			var otitle=document.createElement('ul');
			otitle.id="title2";
			oCenter.appendChild(otitle);
			otitle.innerHTML="在尝试各个英雄之前，先了解他们在团队中的角色。";

			var oHeroKind=['所有','突击','防御','重装','支援'];

			var oHerokind=document.createElement('ul');
			oHerokind.id="kind";
			oCenter.appendChild(oHerokind);


			for(var i=0;i<oHeroKind.length;i++){
				var oHerokindList=document.createElement('li');
				oHerokindList.className="HerokindList";
				oHerokind.appendChild(oHerokindList);
				oHerokindList.innerHTML=oHeroKind[i];
			}
			var oherokindlist=oHerokind.getElementsByTagName('li');
			oherokindlist[0].id="kind1";

			var oHeroList=document.createElement('ul');
			oCenter.appendChild(oHeroList);
			oHeroList.id="herolist";

			var oHeroListPic=['2Fdoomfist','2Fgenji','2Fmccree','2Fpharah','2Freaper','2Fsoldier-76','2Fsombra','2Ftracer','2Fbastion','2Fhanzo','2Fjunkrat','2Fmei','2Ftorbjorn','2Fwidowmaker','2Fdva','2Forisa','2Freinhardt','2Froadhog','2Fwinston','2Fzarya','2Fana','2Flucio','2Fmercy','2Fsymmetra','2Fzenyatta'];
			var oHeroListWd=['末日铁拳','源氏','麦克雷','法老之鹰','死神','士兵：76','黑影','猎空','堡垒','半藏','狂鼠','美','托比昂','黑百合','D.Va','奥丽莎','莱因哈特','路霸','温斯顿','查莉娅','安娜','卢西奥','天使','秩序之光','禅雅塔'];
			for(var j=0;j<oHeroListPic.length;j++){
				var oHeroListCon=document.createElement('li');
				oHeroList.appendChild(oHeroListCon);
				oHeroListCon.className="herolistcon";

				var oHerolistpic=document.createElement('img');
				oHeroListCon.appendChild(oHerolistpic);
				oHerolistpic.className="herolistpic";
				oHerolistpic.src="images/"+oHeroListPic[j]+".png";

				var oHerolistWd=document.createElement("a");
				oHeroListCon.appendChild(oHerolistWd);
				oHerolistWd.className="herolistwd";
				oHerolistWd.innerHTML=oHeroListWd[j];

				}
}