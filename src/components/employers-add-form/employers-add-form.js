import { Component } from 'react';

import './employers-add-form.scss';

class EmployersAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			validClass: false,
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			validClass: false,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.name === '' || this.state.salary === '') {
			this.setState({
				validClass: true,
			});
		} else {
			this.props.onAddItem(this.state.name, this.state.salary);
			this.setState({
				validClass: false,
			});
		}
		this.setState({
			name: '',
			salary: '',
		});
	};
	render() {
		const { name, salary, validClass } = this.state;
		let inputClass = 'form-control new-post-label';
		if (validClass) {
			inputClass += ' empty';
		}
		return (
			<div className="app-add-form" onSubmit={this.onSubmit}>
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex">
					<input
						type="text"
						className={inputClass}
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						className={inputClass}
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}
					/>

					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployersAddForm;
