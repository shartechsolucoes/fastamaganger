import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

type ProtocolsGroup = {
	number: number;
	date: string;
	adress: string;
	neighborhood: string;
	serviceType: string;
	priority: string;
	status: number;
};

const initialClasses: ProtocolsGroup[] = [
	{
		number: 65828,
		date: '21/06/2025',
		serviceType: 'Limpeza',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		priority: 'Urgente',
		status: 1,
	},
	{
		number: 65859,
		date: '21/06/2025',
		serviceType: 'Iluminação',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		priority: 'Urgente',
		status: 1,
	},
	{
		number: 65867,
		date: '21/06/2025',
		serviceType: 'Zeladoria',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		priority: 'Urgente',
		status: 1,
	},
	{
		number: 65888,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		priority: 'Urgente',
		status: 1,
	},
];

type ActionsMenuProps = {
	onEdit: () => void;
	onDelete: () => void;
};

function ActionsMenu({ onEdit, onDelete }: ActionsMenuProps) {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => setOpen((prev) => !prev);
	const handleAction = (action: () => void) => {
		action();
		setOpen(false);
	};

	return (
		<div className="dropdown-wrapper">
			<button className="action-button" onClick={toggleMenu}>
				⋮
			</button>
			{open && (
				<div className="dropdown-menu-list">
					<div onClick={() => handleAction(onEdit)}>Editar</div>
					<div onClick={() => handleAction(onDelete)} style={{ color: 'red' }}>
						Excluir
					</div>
				</div>
			)}
		</div>
	);
}

export default function ClassListPage() {
	const [classes, setClasses] = useState<ProtocolsGroup[]>(initialClasses);

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};

	// Colunas com Ações mapeadas fora
	const columns = [
		{
			header: 'Protocolo',
			accessor: (item: ProtocolsGroup) => (
				<Link
					to={`/protocols/12`}
					style={{ textDecoration: 'none', color: '#1976d2' }}
				>
					{item.number}
				</Link>
			),
			sortable: true,
		},
		{
			header: 'Data',
			accessor: (item: ProtocolsGroup) => item.date,
			sortable: true,
		},
		{
			header: 'Serviço',
			accessor: (item: ProtocolsGroup) => item.serviceType,
			sortable: true,
		},
		{
			header: 'Endereço',
			accessor: (item: ProtocolsGroup) => item.adress,
			sortable: true,
		},
		{
			header: 'Bairro',
			accessor: (item: ProtocolsGroup) => item.neighborhood,
			sortable: true,
		},
		{
			header: 'Status',
			accessor: (item: ProtocolsGroup) => item.status,
			sortable: true,
		},
		{
			header: 'Prioridade',
			accessor: (item: ProtocolsGroup) => item.priority,
			sortable: true,
		},

		{
			header: 'Ações',
			accessor: (item: ProtocolsGroup) => {
				const index = classes.findIndex((i) => i.number === item.number);
				return (
					<ActionsMenu onEdit={() => ''} onDelete={() => handleDelete(index)} />
				);
			},
		},
	];

	return (
		<div>
			<div className="header-page row">
				<div className="col-3">
					<h2 className="title-page">Protocolos</h2>
					<p className="url-page">Dashboard / Protocolo</p>
				</div>
				<div className="col-9 d-flex justify-content-end">
					<NavLink
						to={'/protocols/form'}
						className="btn btn-primary btn-md"
						onClick={() => ''}
					>
						+ Adicionar
					</NavLink>
				</div>
			</div>

			<div className="col-12">
				<div className="card">
					<DynamicTable data={classes} columns={columns} />
				</div>
			</div>
		</div>
	);
}
