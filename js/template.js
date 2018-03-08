$(window).bind("scroll", function(){ 
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        if(top>=60){
        	$('.mainNav').css({'margin':'0','width':'100%','top':'0','position':'fixed'})	
        }else{
        	$('.mainNav').css({'width':'96%','position':'relative','margin':'20px auto 0'})
        }
  	});