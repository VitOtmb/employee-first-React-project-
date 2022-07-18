import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputField: '',
		};
	}

	onUpdateSearch = (e) => {
		const inputField = e.target.value;
		this.setState({
			inputField: inputField,
		});
		this.props.onUpdateSearch(inputField);
	};

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={this.state.inputField}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

export default SearchPanel;
