'use strict';

function navbar() {
	return m("nav.navbar.navbar-default", [
		m(".container-fluid", [
			m(".navbar-header", [
				m("a.navbar-brand[href='#']", [
					m('p', 'Mithril using Amok')
				])
			]),
			m('ul.nav.navbar-nav', [
				m('li', m('a', {href: '/', config:m.route}, 'Root')),
				m('li', m('a', {href: '/datepicker', config:m.route}, 'Datepicker'))
			])
		])
	]);
}