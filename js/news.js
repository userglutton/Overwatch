window.onload=function(){
	var Pic=['2FMeiShort_OW_Panel-L_JP_696x306','2FJunkertown-ThePlan_OW_Panel-L_RM-JP_696x306']
				var Wd=['《守望先锋》动画短片|《我们出发吧》','《守望先锋》新地图:渣客镇']

				var newsCon=document.getElementById('center');
				//两个新闻
			for(var i=0;i<Pic.length;i++){
				//创建id为pic的li
				var oNewsLi=document.createElement('ul');
				oNewsLi.className="pic";
				newsCon.appendChild(oNewsLi);
				//创建li中的img
				var oImg=document.createElement('img');
				oImg.src="images/"+Pic[i]+".jpg";
				oNewsLi.appendChild(oImg);
				//创建li中的a img+a
				/*var oI=document.createElement("i");
				oNewsLi.appendChild(oI);
				oI.innerHTML=Wd[i];*/
			}


				var opic=['2FDevUpdate23-PlayNicePlayFair_OW_Panel-L_260x','2FVirtualTicketNowLive_Blizzard_Thumb_MB_600x300','2FPhysicalGoodies_BA_Thumb_600x300','2FJunkertownBTS_OW_260','2FJunkertownComic_OW_Thumb_JP','2FMei-BTS_OW_VidThumb_JP_No260x130'];
				var otitle=['开发者访谈：诚信为本','购买属于你的2017暴雪嘉年华虚拟门票','2017暴雪嘉年华大礼包 现已开售','新地图前瞻：渣客镇','《守望先锋》数字漫画：《废土》','幕后花絮：我们出发吧'];
				var otime=['发布日期：2017-09-14','发布日期：2017-09-14','发布日期：2017-09-14','发布日期：2017-09-13','发布日期：2017-09-07','发布日期：2017-09-06'];
				var ocon=['Jeff Kaplan 讨论了游戏中的负面行为和开发组解决这一问题的决心，并呼吁玩家们从我做起，共建良好的游戏环境。','零距离体验暴雪嘉年华，全方位舞台直播、虚拟游戏物品和精彩预热视频——一切从今天开始！','2017暴雪嘉年华大礼包来啦，礼包内装满了精美的暴雪收藏品，快把他们带回家吧。','和我们一起来探寻《守望先锋》新地图渣客镇的故事。','智械危机让澳大利亚中部化作了一片废墟。“路霸”比大多数人都知道事情的来龙去脉，他亲眼看着这片土地变成末世之后的废土。','一起来了解动画短片幕后的故事。'];
			for(var j=0;j<opic.length;j++){
				var oCon=document.createElement('dl');
				oCon.className='con';
				newsCon.appendChild(oCon);

				var oDt=document.createElement('dt');
				oDt.className='conDt';
				oCon.appendChild(oDt);

				var oimg=document.createElement('img');
				oimg.className='img';
				oimg.src="images/"+opic[j]+".jpg"
				oDt.appendChild(oimg);

				var oDd1=document.createElement('dd');
				oDd1.innerHTML=otitle[j];
				oDd1.className='conDd1';
				oCon.appendChild(oDd1);

				var oDd2=document.createElement('dd');
				oDd2.className='conDd2';
				oDd2.innerHTML=otime[j];
				oCon.appendChild(oDd2);

				var oDd3=document.createElement('dd');
				oDd3.className='conDd3';
				oDd3.innerHTML=ocon[j];
				oCon.appendChild(oDd3);

			}
			var odl=document.getElementsByTagName('dl');
			odl[0].style.borderTop="3px solid #6E6363";
			odl[0].style.marginTop='30px';

			var oMore=document.createElement('ul');
			oMore.id="more";
			oMore.innerHTML='加载更多';
			newsCon.appendChild(oMore);	
}