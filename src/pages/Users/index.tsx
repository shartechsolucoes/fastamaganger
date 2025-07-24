import ListItemUsers from '../../components/ListItem/Users';
import { NavLink } from 'react-router';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import './index.css';

export default function Users() {
	const [users, setUsers] = useState<
		Array<{
			name: string;
			id: string;
			company: string;
			login: string;
			access_level: number;
			email: string;
			status: boolean;
			picture: string;
		}>
	>([]);

	const getUsers = async () => {
		try {
			const response = await api.get('/users');
			setUsers(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div>

			<div className="header-page row">
				<div className="col-3">
					<h2 className="title-page">Usuários</h2>
					<p className="url-page">Dashboard / Usuários</p>
				</div>
				<div className="col-9 d-flex justify-content-end">
					<NavLink
						to="form"
						className="btn btn-info"
						style={{ height: 'fit-content' }}
					>
						Adicionar
					</NavLink>
					<NavLink
						to="form"
						className="btn btn-info"
						style={{ height: 'fit-content' }}
					>
						Buscar
					</NavLink>
				</div>
			</div>
			<div className="card list-height pb-0 mb-5 overflow-x-hidden overflow-y-scroll">
				{users.map((item, index) => (
					<>
						<ListItemUsers
							key={index}
							title={item.name}
							empresa={'Empresa'}
							id={item.id}
							login={item.login}
							email={item.email}
							access_level={item.access_level}
							status={item.status}
							picture={item.picture}
							name={item.name}
						/>
						{users.length - 1 !== index}
					</>
				))}
			</div>
		</div>
	);
}
