$(function(){
	var $ten1RightContent=$(".ten1RightContent");
	var $ten1RightItem=$(".ten1RightItem");
	var $ten1RightItemHeight=$(".ten1RightItem").height();
	var $ten1RightItemLength=$ten1RightItem.length;
	//console.log($ten1RightItemLength);
	var index=0;
	setInterval(function(){
		index++;
		if(index==$ten1RightItemLength-1){
			index=0;
		}
		var h=-index*$ten1RightItemHeight;
		$ten1RightContent.animate({marginTop:h})
	},1000)



	var $top=$(".top");
	$(window).scroll(function(){//有问题300的动画没有完全完成，在次拖动滚动条会卡
		if($(window).scrollTop()>30){
			//console.log(1)
			$top.fadeIn();
			//$top.css({"display":"block"})
		}else{
			$top.fadeOut();
		}
		
	})
	$top.click(function(){
		$("html,body").animate({"scrollTop":0},250)

	})


	





	
})