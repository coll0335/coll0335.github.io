var hamburgerToggle = $('.hb-logo');
var sideNav = $ ('.side-nav');
var sideNavHome = $('.sn-home');
var sideNavWork = $('.sn-work');
var sideNavAbout = $('.sn-about');
var sideNavContact = $('.sn-contact');

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


var sideNavItemClick = function () {
	var isActive = sideNav.attr('data-state');

	if (isActive == 'active') {
		sideNav.attr('data-state','inactive');
	} else {
		sideNav.attr('data-state','active');
	}
};

sideNavHome.on('click', sideNavItemClick);
sideNavWork.on('click', sideNavItemClick);
sideNavAbout.on('click', sideNavItemClick);
sideNavContact.on('click', sideNavItemClick);

