import { DivComponent } from '../../common/div-component.js';
import './header.css';

export class Header extends DivComponent {
	constructor(appState) {
		super();
		this.appState = appState;
	}

	render() {
		this.el.innerHTML = '';
		this.el.classList.add('header');
		this.el.innerHTML = `
			<div>
				<img src='/static/logo.svg' alt='Логотип' />
			</div>
			<div class='menu'>
				<a class='menu__item' href='#'>
					<img src='/static/search.svg' alt='Поиск'/>
					<span>Поиск книг</span>
				</a>
				<a class='menu__item' href='#'>
					<img src='/static/favorites.svg' alt='Избранное'/>
					<span>Избранное</span>
					<div class='menu__counter'>
						${this.appState.favorites.length}
					</div>
				</a>
			</div>
		`;
		return this.el;
	}
}
