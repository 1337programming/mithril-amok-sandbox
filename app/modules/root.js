'use strict';

routes['/'] = (function root() {
	var root = {};
	root.controller = function() {
		var vm = this;
		vm.name = m.prop('a');
	};
	root.view = function(vm) {
		var items = vm.name().split('');
		return [
			navbar(),
			m('.container', [
				m('h1.text-center', 'Mithril with Amok!'),
				m('img.img-responsive.center-block', {src: 'images/homer-woohoo.jpg'}),
				m('input.form-control', binds(vm.name)),
				
				m('br'),
				m('.row', [
					m('.col-xs-12', [
						m('p', vm.name())
					])
				]),
				m("ul", [
				    items.map(function(item) {
				        return m("li", [
				            m("p", item)
				        ]);
				    })
				])
			])
		];
	};
	return root;
})();