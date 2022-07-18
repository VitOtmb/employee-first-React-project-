import { Component } from 'react';
// плагин для создания рандомного Id
import { v4 as uuidv4 } from 'uuid';

import Info from '../info/appInfo';
import SearchPanel from '../search-panel/searchPanel';
import AppFilter from '../filter/appFilter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from './../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Виктор Мещеряков', salary: 950, increase: false, like: false, id: 1 },
				{ name: 'Сергей Захаров', salary: 2000, increase: false, like: false, id: 2 },
				{ name: 'Юлия Ветрова', salary: 900, increase: false, like: false, id: 3 },
			],
			inputField: '',
			filter: 'all',
		};
	}

	onDeleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	AddItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: uuidv4(),
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleIncrease = (id) => {
		// this.setState(({ data }) => {
		// 	const index = data.findIndex((elem) => elem.id === id);
		// 	const oldArr = data[index];
		// 	const newItem = { ...oldArr, increase: !oldArr.increase };
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
		// 	return {
		// 		data: newArr,
		// 	};
		// });
		this.setState(({ data }) => {
			return {
				data: data.map((item) => {
					if (item.id === id) {
						return { ...item, like: !item.like };
					}
					return item;
				}),
			};
		});
	};

	onToggleLike = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.map((item) => {
					if (item.id === id) {
						return { ...item, increase: !item.increase };
					}
					return item;
				}),
			};
		});
	};

	searchEmpoees = (items, inputField) => {
		if (inputField.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.name.indexOf(inputField) > -1;
		});
	};

	onUpdateSearch = (inputField) => {
		this.setState({ inputField: inputField });
	};

	filterEmployees = (items, filter) => {
		if (filter === 'like') {
			return items.filter((item) => item.like);
		} else if (filter === 'moreThan1000') {
			return items.filter((item) => item.salary > 1000);
		} else {
			return items;
		}
	};

	onFilterSelect = (filter) => {
		this.setState({
			filter,
		});
	};

	render() {
		const { data, inputField, filter } = this.state;
		const employees = data.length;
		const prizeEmployees = data.filter((item) => item.like).length;
		const visibleData = this.filterEmployees(this.searchEmpoees(data, inputField), filter);
		return (
			<div className="app">
				<Info employees={employees} prizeEmployees={prizeEmployees} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmployersList
					data={visibleData}
					onDelete={this.onDeleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleLike={this.onToggleLike}
				/>

				<EmployersAddForm onAddItem={this.AddItem} />
			</div>
		);
	}
}

export default App;
