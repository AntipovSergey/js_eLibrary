import { DivComponent } from '../../common/div-component.js';
import './cardList.css';

export class CardList extends DivComponent {
	constructor(parentState, appState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.innerHTML = `<div class='card_list__loader'>Загрузка...</div>`;
			return this.el;
		}
		this.el.classList.add('card_list');
		this.el.innerHTML = `
			<h1 class='card_list__title'>Найдено книг – ${this.parentState.list.length}</h1>
		`;

		return this.el;
	}
}
