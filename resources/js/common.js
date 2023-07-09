$(function(){
	$(".category-menu li").each(function(e){
		$(this).off("click").on("click" , function(e){
			if(!$(this).hasClass("active")){
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
			};
		});
	});
	var embed;
	//팝업 공통 열기
	function openpop(obj){
		var pops = $(obj).attr("data-link");
		//$(pops).addClass("is-opened");
		$(pops).fadeIn(500);
		$("html").addClass("is-opened");
		var embed = $(obj).attr("data-url");
		var frame = $(pops).find(".vd-wrap");
		frame.html('<iframe src="' + embed +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	};
	//팝업 공통닫기
	function closepop(obj){
		var pops = $(obj).closest(".layerpop");
		//$(pops).removeClass("is-opened");
		$(pops).delay(500).fadeOut(500);
		$("html").removeClass("is-opened");
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
			embed = $(this).attr("data-link");
			$(this).next(".vd-wrap").html("");
		});
	});
	//토글버튼
	if($(".btn-toggle").length){
		$(".btn-toggle").off("click").on("click" , function(e){
			$(this).toggleClass("on");
		});
	};
});