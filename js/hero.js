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

			var oHeroListPic=['1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fdoomfist','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fgenji','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fmccree','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fpharah','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Freaper','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fsoldier-76','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fsombra','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Ftracer','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fbastion','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fhanzo','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fjunkrat','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fmei','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Ftorbjorn','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fwidowmaker','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fdva','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Forisa','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Freinhardt','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Froadhog','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fwinston','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fzarya','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fana','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Flucio','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fmercy','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fsymmetra','1%2Fassets%2Fimg%2Fpages%2Fheroes%2Flist%2Fzenyatta'];
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