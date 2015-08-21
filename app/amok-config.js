'use strict';

window.addEventListener('patch', function () {
	setupRoutes();
	m.redraw();
});

window.addEventListener('add', function(event) {
  console.log('add', event);
});

window.addEventListener('change', function(event) {
  console.log('change', event);
});

window.addEventListener('unlink', function(event) {
  console.log('unlink', event);
});