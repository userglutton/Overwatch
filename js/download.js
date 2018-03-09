window.onload=function(){
	var oCenter=document.getElementById('center');
			var oCon=document.createElement('div');
			oCenter.appendChild(oCon);
			oCon.id="con";


			var oTitle=document.createElement('ul');
			oCon.appendChild(oTitle);
			oTitle.id="title";
			oTitle.innerHTML="《守望先锋》客户端下载";

			var oTime=document.createElement('ul');
			oCon.appendChild(oTime);
			oTime.id="time";
			oTime.innerHTML="发布日期：2016-05-03";

			var oWelcome=document.createElement('ul');
			oCon.appendChild(oWelcome);
			oWelcome.id="welcome";

		    var oWelcomePic=document.createElement('img');
			oWelcome.appendChild(oWelcomePic);
			oWelcomePic.id="welcomePic";
			oWelcomePic.src='images/2FB0J1AZ5JXQBC1460168438221.jpg';

			var oWelcomewd=document.createElement('p');
			oCon.appendChild(oWelcomewd);
			oWelcomewd.id="welcomewd";
			oWelcomewd.innerHTML="英雄们，欢迎来到未来战场！";

			var oWelcomewd2=document.createElement('ul');
			oCon.appendChild(oWelcomewd2);
			oWelcomewd2.id="welcomewd2";
			oWelcomewd2.innerHTML="游戏安装提醒：<span class='enter'>安装游戏需要64位的 Windows® 7/Windows® 8/Windows® 10操作系统 (不支持Mac系统)</span>";

			var oBuy=document.createElement('ul');
			oCon.appendChild(oBuy);
			oBuy.id="buy";

			var oBuy2=document.createElement('li');
			oBuy.appendChild(oBuy2);
			oBuy2.id="buy2";
			oBuy2.innerHTML="立即购买";

			var oshang=document.createElement('ul');
			oCon.appendChild(oshang);
			oshang.id="shang";

			var oshang1=document.createElement('a');
			oshang.appendChild(oshang1);
			oshang1.id="shang1";
			oshang1.innerHTML="注册暴雪游戏通行证";

			var oshang2=document.createElement('a');
			oshang.appendChild(oshang2);
			oshang2.id="shang2";
			oshang2.innerHTML=" 下载暴雪游戏平台";

			var otitlewd=document.createElement('ul');
			oCon.appendChild(otitlewd);
			otitlewd.id="titlewd";
			otitlewd.innerHTML="快速指引：";

			var oconwd=document.createElement('ul');
			oCon.appendChild(oconwd);
			oconwd.id="conwd";
			oconwd.innerHTML="问：如何进入《守望先锋》进行游戏？<br>答：如果你是首次接触暴雪游戏，只需花费几分钟时间注册一个“暴雪游戏通行证”，并下载暴雪游戏平台。<br>　　问：如何注册“暴雪游戏通行证”？<br>答：点击进入创建账号页面。 输入你的个人资料以及邮箱，即可免费注册“暴雪游戏通行证”。<br>　　（请务必确认你的注册身份证及个人邮箱信息准确无误，因为这些信息将一直伴随你畅游暴雪游戏世界。）";


			var ochuang=document.createElement('ul');
			oCon.appendChild(ochuang);
			ochuang.id="chuang";

			var opic1=document.createElement('img');
			ochuang.appendChild(opic1);
			opic1.id="pic1";
			opic1.src="images/2F1.jpg";

			var oconwd=document.createElement('ul');
			oCon.appendChild(oconwd);
			oconwd.id="conwd";
			oconwd.innerHTML="问：如何下载《守望先锋》游戏？<br>答：首先下载暴雪游戏平台并进行安装。然后打开暴雪游戏平台，选择位于暴雪游戏平台左侧的《守望先锋》图标。点击“安装”按钮开始安装游戏。";


			var ochuang1=document.createElement('ul');
			oCon.appendChild(ochuang1);
			ochuang1.id="chuang1";

			var opic2=document.createElement('img');
			ochuang1.appendChild(opic2);
			opic2.id="pic2";
			opic2.src="images/2F2.jpg";

			var oconwd=document.createElement('ul');
			oCon.appendChild(oconwd);
			oconwd.id="conwd";
			oconwd.innerHTML="问：如何进入《守望先锋》游戏？<br>答：当暴雪游戏平台中的《守望先锋》游戏下载并成功安装完成之后，点击“进入游戏”开始你的守望吧！";

			var ochuang2=document.createElement('ul');
			oCon.appendChild(ochuang2);
			ochuang2.id="chuang2";

			var opic3=document.createElement('img');
			ochuang2.appendChild(opic3);
			opic3.id="pic3";
			opic3.src="images/2F2.jpg";

			var otitlewd=document.createElement('ul');
			oCon.appendChild(otitlewd);
			otitlewd.id="titlewd";
			otitlewd.innerHTML="硬件推荐配置信息：";

			var ochuang3=document.createElement('ul');
			oCon.appendChild(ochuang3);
			ochuang3.id="chuang3";

			var opic4=document.createElement('img');
			ochuang3.appendChild(opic4);
			opic4.id="pic4";
			opic4.src="images/2FOW_U543_03202017.png";

			var otitlewd=document.createElement('ul');
			oCon.appendChild(otitlewd);
			otitlewd.id="titlewd";
			otitlewd.innerHTML="网络优化工具推荐：";

			var oconwd=document.createElement('ul');
			oCon.appendChild(oconwd);
			oconwd.id="conwd";
			oconwd.innerHTML="若您在游戏时存在高延迟、频繁掉线等网络问题，可以尝试下载网易UU网游加速器使用。";

			var ochuang3=document.createElement('ul');
			oCon.appendChild(ochuang3);
			ochuang3.id="chuang3";

			var opic4=document.createElement('img');
			ochuang3.appendChild(opic4);
			opic4.id="pic4";
			opic4.src="images/2FUUlogo-OWsmall.jpg";




			var oSitebar=document.createElement('div');
			oCenter.appendChild(oSitebar);
			oSitebar.id="sitebar";

			var apic=['2FDevUpdate23-PlayNicePlayFair_OW_Panel-L_260x','2FVirtualTicketNowLive_Blizzard_Thumb_MB_600x300','2FPhysicalGoodies_BA_Thumb_600x300','2FJunkertownBTS_OW_260'];
				var atitle=['开发者访谈：诚信为本','购买属于你的2017暴雪嘉年华虚拟门票','2017暴雪嘉年华大礼包 现已开售','新地图前瞻：渣客镇'];
				var atime=['发布日期：2017-09-14','发布日期：2017-09-14','发布日期：2017-09-14','发布日期：2017-09-13'];
			

			var oNews=document.createElement('ul');
			oSitebar.appendChild(oNews);
			oNews.id="news";
			oNews.innerHTML="最新新闻";
			

			for(var j=0;j<apic.length;j++){
				var oDl=document.createElement('dl');
				oDl.className='bcon';
				oSitebar.appendChild(oDl);

				var oDt=document.createElement('dt');
				oDt.className='bconDt';
				oDl.appendChild(oDt);

				var oimg=document.createElement('img');
				oimg.className='img';
				oimg.src="images/"+apic[j]+".jpg"
				oDt.appendChild(oimg);

				var oDd1=document.createElement('dd');
				oDd1.innerHTML=atitle[j];
				oDd1.className='bconDd1';
				oDl.appendChild(oDd1);

				var oDd2=document.createElement('dd');
				oDd2.className='bconDd2';
				oDd2.innerHTML=atime[j];
				oDl.appendChild(oDd2);

			}

}