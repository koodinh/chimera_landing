$(document).ready(function() {

	$('.navbar-nav a').click(function() {
		$('.navbar-nav a').removeClass('active');
		$(this).addClass('active');
	});

	var x = null;
	var y = $('#menu').innerHeight();

	$('body > div:nth-child(4)').css({
		'padding-top': y
	});

	$(window).scroll(function(){
		if($(this).scrollTop() < x && $(this).scrollTop() > y){
			$('#menu').removeClass('hide-fixed');
			$('#menu').addClass('fixed');
			$('#menu').css({
				'animation-name': 'show_menu',
				'background': '#fff'
			});
			$('.dark #menu').css({
				'background': '#000'
			});
		}if($(this).scrollTop() > x && $(this).scrollTop() > y){
			$('#menu').css({
				'animation-name': 'hide_menu',
				'background': '#fff'
			});
			$('.dark #menu').css({
				'background': '#000'
			});
			$('#menu').addClass('hide-fixed');
		}
		if($(this).scrollTop() == 0){
			$('#menu').removeClass('fixed');
			$('#menu').removeClass('hide-fixed');
		}

		x = $(this).scrollTop();

		if($(this).scrollTop()>100){
			$('.nav-more ul li').css({
				'opacity': '1',
				'visibility': 'visible'
			});
			$('.nav-more.left ul li').css({
				'animation-name': 'show_nav_more_l'
			});
			$('.nav-more.right ul li').css({
				'animation-name': 'show_nav_more_r'
			});
			$('.dark').addClass('bg-surface');
			$('.light').addClass('bg-surface');
		}else{
			$('#menu').css({
				'background': 'transparent'
			});
			$('.nav-more ul li').css({
				'opacity': '0',
				'visibility': 'hidden'
			});
			$('.nav-more.left ul li').css({
				'animation-name': 'hide_nav_more_l'
			});
			$('.nav-more.right ul li').css({
				'animation-name': 'hide_nav_more_r'
			});
			$('.search-modal').removeClass('active');
			$('body').css({
				'overflow': 'auto'
			});
			$('.dark').removeClass('bg-surface');
			$('.light').removeClass('bg-surface');
		}
		// if($(this).scrollTop() <= 0){
		// 	$('.nav-more ul li').css({
		// 		'opacity': '0',
		// 		'visibility': 'hidden'
		// 	});
		// 	$('.nav-more.left ul li').css({
		// 		'animation-name': 'hide_nav_more_l'
		// 	});
		// 	$('.nav-more.right ul li').css({
		// 		'animation-name': 'hide_nav_more_r'
		// 	});
		// 	$('.search-modal').removeClass('active');
		// 	$('body').css({
		// 		'overflow': 'auto'
		// 	});
		// }
	});

	$('.cat-menu-btn').click(function() {
		if($('.cat-menu').hasClass('active')){
			$('.cat-menu').removeClass('active');
			$('body').css({
				'overflow': 'auto'
			});
		}else{
			$('.cat-menu').addClass('active');
			$('body').css({
				'overflow': 'hidden'
			});
		}
	});

	$('.search-btn').click(function() {
		if($('.search-modal').hasClass('active')){
			$('.search-modal').removeClass('active');
			$('body').css({
				'overflow': 'auto'
			});
		}else{
			$('.search-modal').addClass('active');
			$('body').css({
				'overflow': 'hidden'
			});
		}
	});

	$('#backtop').click(function(){
		scrollTo(document.body, 0, 600);

		function scrollTo(element, to, duration) {
			if (duration <= 0) return;
			var difference = to - element.scrollTop;
			var perTick = difference / duration * 10;

			setTimeout(function() {
				element.scrollTop = element.scrollTop + perTick;
				if (element.scrollTop == to) return;
				scrollTo(element, to, duration - 10);
			}, 10);
		}
	    // document.body.scrollTop = 0;
	})


	var owl = $("#banner #owl-slider");

    owl.owlCarousel({
       loop:true,
       items : 1,
       itemsDesktop : [1199,1],
       itemsDesktopSmall : [768,1],
       itemsTablet: [600,1],
    });


    var owl_latest = $("#home-latest.latest #owl-slider");

    owl_latest.owlCarousel({
       loop:true,
       items : 1,
       itemsDesktop : [1199,1],
       itemsDesktopSmall : [768,1],
       itemsTablet: [600,1],
    });

    
    var owl_partner = $("#client.partner #owl-slider");

    owl_partner.owlCarousel({
       loop:true,
       responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:4
	        },
	        768:{
	            items:6
	        },
	        1199:{
	            items:6
	        }
	    }
    });


    var banner_blog = $("#banner-blog #owl-slider");

    banner_blog.owlCarousel({
       center: true,
       loop:true,
       items : 3,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [768,3],
       itemsTablet: [600,1],
    });


    var cart_step = $("#owl-cart .owl-steps");

    cart_step.owlCarousel({
       autoHeight:true,
       loop:true,
       items : 1,
       itemsDesktop : [1199,1],
       itemsDesktopSmall : [768,1],
       itemsTablet: [600,1],
    });


    var spins = document.getElementsByClassName("spin");
    for (var i = 0, len = spins.length; i < len; i++) {
    	var spin = spins[i],
    	span = spin.getElementsByTagName("span"),
    	input = spin.getElementsByTagName("input")[0];

    	input.onchange = function() { input.value = +input.value || 1; };
    	span[0].onclick = function() { input.value = Math.max(1, input.value - 1); };
    	span[1].onclick = function() { input.value -= -1; };
    }


    $('#owl-detail-product').owlCarousel({
        items:1,
        loop:false,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

    $('.view-map').click(function() {
    	if($('#map').hasClass('active')){
    		$('#map').removeClass('active');
    		$('body').removeClass('surface').css({
	    		'margin-left': '0%',
	    		'overflow': 'auto',
	    		'position': 'relative',
	    		'z-index': '-1'
	    	});
    	}else{
	    	$('#map').addClass('active');
	    	$('body').addClass('surface').css({
	    		'margin-left': '60%',
	    		'overflow': 'hidden',
	    		'position': 'relative',
	    		'z-index': '-1'
	    	});
	    }
    });

    $('.btn-cmt').click(function() {
    	if($('.btn-cmt').hasClass('active')){
    		$('.btn-cmt').removeClass('active');
    	}
    	else{
    		$('.btn-cmt').addClass('active');
    	}
    	if($('.total-cmt').hasClass('show-cmt')){
    		$('.total-cmt').removeClass('show-cmt');
    	}else{
    		$('.total-cmt').addClass('show-cmt');
    	}
    });

});