$(function(){
	$(".title__btn").on('click', function () {
		$("body").attr('data-state', 'active')
		setTimeout(function() { 
			$("body").attr('data-phase1', 'true')
			setTimeout(function() { 
				window.location.href = '../index/index.html';
			}, 5000);
		}, 5000);
	});
});

