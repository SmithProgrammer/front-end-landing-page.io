import './scss/app.scss'
import lazyLoading from './modules/lazy-loading'
import {openNav, mob_dropdown} from './modules/main-nav'
// import mob_dropdown from './modules/main-nav'
import dropdown_menu from './modules/main-nav-dropdown-nav'



document.addEventListener('DOMContentLoaded', () => {
	lazyLoading();
	openNav();
	dropdown_menu();
	mob_dropdown();
});