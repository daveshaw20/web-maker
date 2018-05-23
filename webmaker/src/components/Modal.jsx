import { h, Component } from 'preact';

export default class Modal extends Component {
	render() {
		if (!this.props.show) return null;

		return (
			<div class="modal is-modal-visible">
				<div class="modal__content t">
					<button
						onClick={this.props.closeHandler}
						aria-label="Close modal"
						title="Close"
						class="js-modal__close-btn  modal__close-btn"
					>
						Close
					</button>
					{this.props.children}
				</div>
			</div>
		);
	}
}
