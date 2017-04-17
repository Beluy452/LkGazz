$(function() {
	/*FIXED MENU ---------------------------------->*/
	$('.show-fixed-menu').click(function (e) {
		e.preventDefault();
		var thisButton = $(this).toggleClass('active');
		var fixedMenu = $('.fixed-menu').toggleClass('active');

        var closeFixedMenu = $(this).addClass('hidden-fixed-menu');

		if($(fixedMenu).hasClass('active')) {
			$(document).mouseup(function (e){
				var div = $(".fixed-menu");

				if (!div.is(e.target) || closeFixedMenu ) {
					div.removeClass('active');
					thisButton.removeClass('active');
				}
			});
		}
	});
	/*FIXED MENU ---------------------------------->*/

	/*MOBILE MENU ---------------------------------->*/

	$('.toggle-menu').click(function (e) {
		e.preventDefault();
		var mobileMenu = 	$('.mobile-menu').toggleClass('active');
		var toggleMenu = $(this).toggleClass('active');

		if($(mobileMenu).hasClass('active')) {
			$(document).mouseup(function (e){
				var div = $(".mobile-menu");
				if (!div.is(e.target) && div.has(e.target).length === 0) {
					div.removeClass('active');
					toggleMenu.removeClass('active');
				}
			});
		}
	});

	$('.mobile-menu a').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().find('.sub-menu').toggleClass('active');
	});

	/*MOBILE MENU ---------------------------------->*/

	$('.message').click(function (e) {
		e.preventDefault();
		$(this).addClass('active');
	});

	$('#message').on('hidden.bs.modal', function() {
		$('.message').removeClass('active');
	});

	$('.show-Que a:first-child').click(function () {

		$('.show-Que').addClass('active');
	});

	$('#que').on('hidden.bs.modal', function() {
		$('.show-Que').removeClass('active');
	});

	$('.show-admin-popup').on('click',function (e) {
		e.preventDefault();
		var admin = $('.admin').toggleClass('active');
		var adminPopup =  $('.admin-popup').toggleClass('active');
		if($(adminPopup).hasClass('active')) {
			$(document).mouseup(function (e){ // событие клика по веб-документу
				var div = $(".admin-popup"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					div.removeClass('active'); // скрываем его
					admin.removeClass('active');
				}
			});
		}
	});

	$('.arrow-down-list').click(function (e) {
		e.preventDefault();
		$(this).parent().find('.reports-list').toggleClass('active');
	});

	$('.show-popup-debt').on('click',function (e) {
		e.preventDefault();
		var popupDeb = $('.popup-debt').toggleClass('active');
		if($(popupDeb).hasClass('active')) {
			$(document).mouseup(function (e){ // событие клика по веб-документу
				var div = $(".popup-debt"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					div.removeClass('active'); // скрываем его
				}
			});
		}
	});

	$('.show-popup').on('click',function (e) {
		e.preventDefault();
		var popup = $(".all-site-popup");

		popup.toggleClass('active');

		if($(popup).hasClass('active')) {
			$(document).mouseup(function (e){ // событие клика по веб-документу
				var div = $(".all-site-popup"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					div.removeClass('active'); // скрываем его
				}
			});
		}

	});
	
	$('.add-oil-input').on('click',function (e) {

		e.preventDefault();

        var removeInput = $('.remove-input');

		var bottomOil = $('.bottom-oil-product');

        bottomOil.clone(true).addClass('newElem-oil').removeClass('bottom-oil-product').appendTo('.add-container');

        $('.newElem-oil input').val('');

    });


	$('.add-input').on('click',function (e) {

        e.preventDefault();

        var removeInput = $('.remove-input');

        var addNafta = $('.add-nafta');

        addNafta.clone(true).addClass('newElem-nafta').removeClass('add-nafta').appendTo('.nafta-container');

        $('.newElem-nafta input').val('');

    });

    $('.remove-input').on('click',function (e) {

        e.preventDefault();

        $(this).closest('.newElem-oil').remove();

        $(this).closest('.newElem-nafta').remove()

    });

    //
    // $('.show-popup-debt').on('click',function (e) {
		//
		// var list = $('.sites__item');
		// $(this)
		//
    // })

});