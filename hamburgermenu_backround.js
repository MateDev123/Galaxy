// Вызов модального окна
$('.button52').click( function() {
	$('.overlay52').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay52').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup52');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay52').fadeOut();
	}
});

// Вызов модального окна
$('.button53').click( function() {
	$('.overlay53').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay53').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup53');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay53').fadeOut();
	}
});

$(document).ready(function() {
    $('.open-gpopu2-button').click(function() {
      $('.gpopu2-container').toggleClass('active');
    });
  })