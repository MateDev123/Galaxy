// Вызов модального окна
$('.button51').click( function() {
	$('.overlay51').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay51').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup51');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay51').fadeOut();
	}
});
