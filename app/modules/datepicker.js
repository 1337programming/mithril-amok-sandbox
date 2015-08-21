'use strict';

routes['/datepicker'] = (function() {
	var datepicker = {};
	datepicker.controller = function() {
		var vm = this;
		vm.date = m.prop(new Date());
		vm.datepicker = m.u.init(m.ui.datepicker({
			date: vm.date,
			type: 'inline'
		}));
	};

	datepicker.view = function(vm) {
		return [
			navbar(),
			m('.container', [
				m('h1', 'Datepicker'),
				m("div", { style: "display:inline-block"}, [vm.datepicker.$view()]),
				m('p', 'Date: ' + vm.date())
			])
		];
	};
	return datepicker;
})();