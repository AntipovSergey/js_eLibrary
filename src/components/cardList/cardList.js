import { DivComponent } from '../../common/div-component.js';
import { Card } from '../card/card.js';
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
		for (const card of this.parentState.list) {
			this.el.append(new Card(card, this.appState).render());
		}
		return this.el;
	}
}
