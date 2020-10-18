$('.js--mulher').waypoint(function(direction) {
		$('.js--mulher').addClass('animated fadeInRight'); 
	}, 
	{offset: '30%' }
);

$('.js--hero-animacao').waypoint(function(direction) {
		$('.js--hero-animacao').addClass('animated fadeInLeft');
    }, 
	{offset: '100%'}
);

$('.js--saiba').waypoint(function(direction) {
		$('.js--saiba').addClass('animated fadeInUp');
    }, 
	{offset: '100%'}
);
