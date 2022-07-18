import './appFilter.scss';

function AppFilter(props) {
	const buttonsData = [
		{ name: 'all', lable: 'Все сотрудники' },
		{ name: 'like', lable: 'На повышение' },
		{ name: 'moreThan1000', lable: 'Зарплата более 1000$' },
	];
	const buttons = buttonsData.map(({ name, lable }) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button
				className={`btn ${clazz}`}
				type="button"
				key={name}
				onClick={() => props.onFilterSelect(name)}
			>
				{lable}
			</button>
		);
	});
	return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
