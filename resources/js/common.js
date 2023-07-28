$(function(){
	$(".category-menu li").each(function(e){
		$(this).off("click").on("click" , function(e){
			if(!$(this).hasClass("active")){
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
				//$(".stand-swiper").removeClass("activated");
			};
		});
	});
	var $src;
	//팝업 공통 열기
	function openpop(obj){
		var pops = $(obj).attr("data-link");
		$(pops).fadeIn(500);
		$("html").addClass("is-opened");
		var $src = $(obj).attr("data-url");
		var frame = $(pops).find(".vd-wrap");
		frame.html('<video><source src="../resources/videos/' + $src +'" type="video/mp4"></video>');
		$(pops).find("video").get(0).play();
	};
	//팝업 공통닫기
	function closepop(obj){
		var pops = $(obj).closest(".layerpop");
		$(pops).delay(500).fadeOut(500);
		$("html").removeClass("is-opened");
		//$(pops).find("video").get(0).pause();
	};
	
	//팝업 열기 버튼 공통
	$(".btn-layer").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			openpop(this);
		});
	});
	//팝업 닫기 버튼 공통
	$(".layer-close").each(function(){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			closepop(this);
			$src = $(this).attr("data-url");
			$(this).next(".vd-wrap").html("");
		});
	});
	//토글버튼
	if($(".btn-toggle").length){
		$(".btn-toggle").off("click").on("click" , function(e){
			$(this).toggleClass("on");
		});
	};
	document.addEventListener('ended', function(e){
		if($(e.target).is('video')){
			closepop(e.target);
		}
	}, true);
});
