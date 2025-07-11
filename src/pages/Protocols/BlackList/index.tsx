import './styles.css';
import DynamicTable from '../../../components/List/index.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type BlackListGroup = {
	name: string;
	cpf: string;
	date: string;
	requests: number;
	status: string;
};

const initialClasses: BlackListGroup[] = [
	{ name: 'Edson Rodrigues', date:'21/06/2025', cpf: '999.999.999-00', requests: 20,  status: 'Bloqueado' },
	{ name: 'Luciano Silva', date:'12/06/2025', cpf: '999.999.999-00', requests: 5,  status: 'Liberado' },
	{ name: 'Alexandre ', date:'08/06/2025', cpf: '999.999.999-00',  requests: 9, status: 'Liberado' },
	{ name: 'Wagner Oliveira Prestes', date:'02/06/2025',cpf: '999.999.999-00', requests: 25,  status: 'Bloqueado' },
];

type ActionsMenuProps = {
	onEdit: () => void;
	onDelete: () => void;
};

function ActionsMenu({ onEdit, onDelete }: ActionsMenuProps) {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => setOpen(prev => !prev);
	const handleAction = (action: () => void) => {
		action();
		setOpen(false);
	};

	return (
		<div className="dropdown-wrapper">
			<button className="action-button" onClick={toggleMenu}>⋮</button>
			{open && (
				<div className="dropdown-menu-list">
					<div onClick={() => handleAction(onEdit)}>Editar</div>
					<div onClick={() => handleAction(onDelete)} style={{ color: 'red' }}>Excluir</div>
				</div>
			)}
		</div>
	);
}

export default function ClassListPage() {
	const [classes, setClasses] = useState<BlackListGroup[]>(initialClasses);

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};

	// Colunas com Ações mapeadas fora
	const columns = [
		{
			header: 'Nome',
			accessor: (item: BlackListGroup) => (
				<Link to={`/protocols/12`} style={{ textDecoration: 'none', color: '#1976d2' }}>
					{item.name}
				</Link>
			),
			sortable: true,
		},
		{ header: 'CPF', accessor: (item: BlackListGroup) => item.cpf, sortable: true },
		{ header: 'Data', accessor: (item: BlackListGroup) => item.date, sortable: true },
		{ header: 'Solicitações', accessor: (item: BlackListGroup) => item.requests, sortable: true },
		{ header: 'Status', accessor: (item: BlackListGroup) => item.status, sortable: true },

		{
			header: 'Ações',
			accessor: (item: BlackListGroup) => {
				const index = classes.findIndex(i => i.name === item.name);
				return (
					<ActionsMenu
						onEdit={() => ''}
						onDelete={() => handleDelete(index)}
					/>
				);
			},
		},
	];

	return (
		<div>
			<div className="header-page row">
				<div className='col-3'>
					<h2 className='title-page'>Turmas</h2>
					<p className='url-page'>Dashboard / Turmas</p>
				</div>
				<div className='col-9 d-flex justify-content-end'>
					<button className="btn btn-primary btn-md" onClick={() => ''}>
						+ Adicionar
					</button>
				</div>
			</div>

			<div className="col-12">
				<div className='card'>
					<DynamicTable data={classes} columns={columns} />
				</div>
			</div>
		</div>
	);
}
