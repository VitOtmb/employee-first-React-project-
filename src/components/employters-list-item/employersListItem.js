// Плагин для соединения классов
import classNames from 'classnames';

import './employers-list-item.scss';

const EmployersListItem = (props) => {
	const { name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like } = props;

	let addClasses = classNames(
		'list-group-item d-flex justify-content-between',
		increase ? 'increase' : null,
		like ? 'like' : null
	);

	return (
		<li className={addClasses}>
			<span className="list-group-item-label" onClick={onToggleLike}>
				{name}
			</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
			<div className="d-flex justify-content-center align-items-center">
				<button type="button" className="btn-cookie btn-sm " onClick={onToggleIncrease}>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button" className="btn-trash btn-sm" onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};

export default EmployersListItem;
