$(window).load(function(){
(function(){

	var $lis = $('.qcFilterableWrapper > li.qcFilterableItem');
	index = $lis.length - 2;
     
	start();
	
	// Item Next
	function nextproject(){
		lastIndex = index;
		if(++index == $lis.length) index = 0;
		$lis.eq(index).addClass('active');
       
       	// fire functions on clikcing next
		$lis.eq(lastIndex).removeClass('active');
		$('.qcAjaxLoader').fadeIn();
       	$('#qcAjaxData').css('visibility', 'hidden');
       	var data = $lis.eq(index).find('.qcItemData').html();
		$('#qcAjaxData').html(data);
		$('#qcAjaxData article a').attr('rel', 'prettyPhoto[pp_gal1]');
		$('.slider-gallery').wmuSlider({slideshow: false});
		$("a[rel^='prettyPhoto']").prettyPhoto();
		$(".qcQuickView").click(function(){ $('#qcAjaxData .qcAjaxPortfolioImageWrapper a:first').trigger('click')});
		$('#qcProjectDoor').slideUp(1000, function(){$('#qcAjaxData').css('visibility', 'visible')}).delay(800).slideDown(1000, function(){$('.qcAjaxLoader').fadeOut()});
		
		return false;
	}
	// Item Prev
	function prevproject(){
		lastIndex = index;
		if(--index < 0) index = ($lis.length - 1);
		$lis.eq(index).addClass('active');
        
    		// fire functions on clikcing Prev  
		$lis.eq(lastIndex).removeClass('active');
		$('.qcAjaxLoader').fadeIn();
       	$('#qcAjaxData').css('visibility', 'hidden');
       	var data = $lis.eq(index).find('.qcItemData').html();
		$('#qcAjaxData').html(data);
		$('#qcAjaxData article a').attr('rel', 'prettyPhoto[pp_gal1]');
		$('.slider-gallery').wmuSlider({slideshow: false});
		$("a[rel^='prettyPhoto']").prettyPhoto();
		$(".qcQuickView").click(function(){ $('#qcAjaxData .qcAjaxPortfolioImageWrapper a:first').trigger('click')});
		$('#qcProjectDoor').slideUp(1000, function(){$('#qcAjaxData').css('visibility', 'visible')}).delay(800).slideDown(1000, function(){$('.qcAjaxLoader').fadeOut()});
	
		return false;
	}
	// Item Click
	function li_click(){
	
		if ($(this).hasClass('active')){
		// Do nothing
		} else {
		
     		$('html,body').animate({scrollTop: $("#qcProjectDoor").parent().offset().top}, 1000);
     		
			lastIndex = index;
			index = $(this).index();
			
         		// fire functions on clikcing Portfolio Item
			$(this).addClass('active');
			$lis.eq(lastIndex).removeClass('active');	
		
			$('.qcAjaxLoader').fadeIn();
       		$('#qcAjaxData').css('visibility', 'hidden');
       		var data = $lis.eq(index).find('.qcItemData').html();
			$('#qcAjaxData').html(data);
			$('#qcAjaxData article a').attr('rel', 'prettyPhoto[pp_gal1]');
			$('.slider-gallery').wmuSlider({slideshow: false});
			$("a[rel^='prettyPhoto']").prettyPhoto();
			$(".qcQuickView").click(function(){ $('#qcAjaxData .qcAjaxPortfolioImageWrapper a:first').trigger('click')});
			$('#qcProjectDoor').slideUp(1000, function(){$('#qcAjaxData').css('visibility', 'visible')}).slideDown(1000, function(){$('.qcAjaxLoader').fadeOut()});
			
		}

		return false;   
	}
	
	// Item Close
	function closeproject(){
		$('.qcAjaxLoader').fadeIn();
		$('#qcAjaxData').css('visibility', 'hidden');
		$('#qcProjectDoor').slideUp(1000, function(){$('.qcAjaxLoader').fadeOut()});
		$lis.removeClass('active');
		return false;
	}
	
	function start(){
		$('#qcAjaxNext').click(nextproject);
		$('#qcAjaxPrev').click(prevproject);
		$('#qcAjaxClose').click(closeproject);
		$lis.click(li_click);			       
	}
	
	})();
	
});