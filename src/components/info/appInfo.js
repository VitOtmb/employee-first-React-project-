import './info.scss';

function Info({ employees, prizeEmployees }) {
	return (
		<div className="info">
			<h1>Учёт сотрудников компании N</h1>
			<h2>Общее число сотрудников: {employees}</h2>
			<h2>Премию получат: {prizeEmployees}</h2>
		</div>
	);
}

export default Info;
