var hamburgerToggle = $('.hb-logo');
var sideNav = $ ('.side-nav');

var sideNavClickHandler = function (e) {
	var isActive = sideNav.attr('data-state');
	e.preventDefault ();

	if (isActive == 'active') {
		sideNav.attr('data-state','inactive');
	} else {
		sideNav.attr('data-state','active');
	}
};

hamburgerToggle.on('click', sideNavClickHandler);
