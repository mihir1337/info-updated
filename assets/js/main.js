(function ($) {
    'use strict';

    $(window).on("load", function() {
		background();
		galleryMasonary();
	    //preloader
	    $("#preloader").delay(300).animate({
	    "opacity" : "0"
	    }, 500, function() {
	    	$("#preloader").css("display","none");
		});
	});


    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	jQuery('.dot-menu-nav ul').each(function (i, liList) {
		var $liList = $(liList);
		$liList.on('click', 'li a', function (event) {
			var $anchor = $(this);
			jQuery('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 70
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// menu spy
	jQuery('section')
		.scrollWatchMapTo('.dot-menu-nav ul li', null, {
			resolutionMode: 'focus-line',
			viewMarginTop: 0
		});

	// debug focus line checkbox
	jQuery('#toggleDebugFocusLine').change(function () {
		var watcher = $(window).data('shira.scrollwatch');
		watcher.options.debugFocusLine = this.checked;
		watcher.pulse();
	});

	// Nice select
	$('select').niceSelect();

	// gallery Page Masonary
	function galleryMasonary() {
		$('.recent-works').isotope({
			itemSelector: '.single-work',
			masonry: {
				columnWidth: 0,
				// horizontalOrder: true,
			}
		});
	}

	// hamburger menu active 
	$(".hamburger-menu-trigger").on("click", function () {
		$(".overlay, .hamburger-menu-list").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".hamburger-menu-list, .overlay").removeClass("active");
	});

	// Activate lightcase
	$('a[data-rel^=lightcase]').lightcase();

	// menu options custom affix
	var fixed_top = $(".header-top-area");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 70) {
			fixed_top.addClass("animated fadeInDown sticky");
		} else {
			fixed_top.removeClass("animated fadeInDown sticky");
		}
	});
	
	// menu options custom affix
	var dark_bg = $(".dot-menu-nav, .dot-menu");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 550) {
			dark_bg.addClass("black");
		} else {
			dark_bg.removeClass("black");
		}
	});

	var white_bg = $(".dot-menu-nav");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 3550) {
			white_bg.addClass("white");
		} else {
			white_bg.removeClass("white");
		}
	});

	var dark_bg = $(".dot-menu-nav");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 6300) {
			dark_bg.addClass("dark");
		} else {
			dark_bg.removeClass("dark");
		}
	});

	// scroll down js
	var scrollDark = $("body");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 350) {
			scrollDark.addClass("scroll-dark");
		} else {
			scrollDark.removeClass("scroll-dark");
		}
	});

	var scrollWhite = $("body");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 3400) {
			scrollWhite.addClass("scroll-white");
		} else {
			scrollWhite.removeClass("scroll-white");
		}
	});

	var scrollDarkk = $("body");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 6300) {
			scrollDarkk.addClass("dark");
		} else {
			scrollDarkk.removeClass("dark");
		}
	});

	// Smooth scrolling
	$('.slow-down a, .hamburger-menu-list li a').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target ||
				$('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body')
					.animate({
						scrollTop: targetOffset
					}, 2000);
				return false;
			}
		}
	});

	var $grid = $(".portfolio-lists")

	// filter functions
	var filterFns = {};
	// bind filter button click
	$('.portfolio-nav ul').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({
			filter: filterValue
		});
	});

	// change is-checked class on buttons
	$('.portfolio-nav ul').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'li', function () {
			$buttonGroup.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});



})(jQuery);