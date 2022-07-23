import EmployersListItem from '../employters-list-item/employersListItem';

import './employers-list.scss';

function EmployersList({ data, onDelete, onToggleIncrease, onToggleLike }) {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployersListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleIncrease={() => {
					onToggleIncrease(id);
				}}
				onToggleLike={() => {
					onToggleLike(id);
				}}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
}

export default EmployersList;
