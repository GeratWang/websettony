;$(function (){
	'use strict';
	var sidebar = $('#sidebar'),
	// var sidebar = document.getElementById('sidebar')
		mask = $('.mask');

	// var sidebar_trigger = $('#sidebartrigger')
	var sidebar_trigger = document.getElementById('sidebartrigger')


	function showSideBar(){
		console.log('12312')
		mask.fadeIn();
		sidebar.css({'right':0})
	}
	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width())

	}

	sidebar_trigger.addEventListener('click',showSideBar,false);
	mask.on	('click',hideSideBar)
})