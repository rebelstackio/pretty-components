import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class CollapseItem extends MetaComponent {
	constructor() {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps ();
		return `
			<div class="collapse-item">
				<div class="collapse-header">
					<i class="fas fa-chevron-down"></i>
					<h3>${ props.title }</h3>
				</div>
				<div class="collapse-content">
					<div>
						${ this.getBody() }
					</div>
				<div>
			</div>
		`
	}
	/**
	 * get component body
	 */
	getBody() {
		const b = this.innerHTML;
		this.innerHTML = '';
		return b;
	}
	/**
	 * get component properties
	 */
	getProps() {
		const title = this.getAttribute('title') !== null
			? this.getAttribute('title')
			: 'Title';
		const expanded = this.getAttribute('expanded') !== null;
		return {
			title, expanded
		}
	}
	/**
	 * add DOM listeners
	 */
	addListeners() {
		this.querySelector('.collapse-header').addEventListener('click', () => {
			if (this.getProps().expanded) {
				this.removeAttribute("expanded");
			} else {
				this.setAttribute('expanded','');
			}
		})
	}
}

window.customElements.define('pretty-collapse-item', CollapseItem)