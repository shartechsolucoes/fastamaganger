import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type ServicesGroup = {
	id: number;
	numberProtocol: number;
	date: string;
	idResponsible: string;
	adress: string;
	neighborhood: string;
	serviceType: string;
	status: string;
};

const initialClasses: ServicesGroup[] = [
	{ id:1, numberProtocol: 65828, date: "21/06/2025", serviceType: 'Limpeza', idResponsible:'Luciano', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Pendente' },
	{ id:1, numberProtocol: 65859, date: "21/06/2025", serviceType: 'Iluminação', idResponsible:'Luciano', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Finalizado' },
	{ id:1, numberProtocol: 65867, date: "21/06/2025", serviceType: 'Zeladoria', idResponsible:'Luciano', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Pendente' },
	{ id:1, numberProtocol: 65888, date: "21/06/2025", serviceType: 'Poda de Arvore', idResponsible:'Luciano', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 'Em trabalho' },
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
	const [classes, setClasses] = useState<ServicesGroup[]>(initialClasses);

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};

	// Colunas com Ações mapeadas fora
	const columns = [
		{
			header: 'Protocolo',
			accessor: (item: ServicesGroup) => (
				<Link to={`/protocols/12`} style={{ textDecoration: 'none', color: '#1976d2' }}>
					{item.numberProtocol}
				</Link>
			),
			sortable: true,
		},
		{ header: 'Data', accessor: (item: ServicesGroup) => item.date, sortable: true },
		{ header: 'Serviço', accessor: (item: ServicesGroup) => item.serviceType, sortable: true },
		{ header: 'Responsável', accessor: (item: ServicesGroup) => item.idResponsible, sortable: true },
		{ header: 'Endereço', accessor: (item: ServicesGroup) => item.adress, sortable: true },
		{ header: 'Bairro', accessor: (item: ServicesGroup) => item.neighborhood, sortable: true },
		{ header: 'Status', accessor: (item: ServicesGroup) => item.status, sortable: true },

		{
			header: 'Ações',
			accessor: (item: ServicesGroup) => {
				const index = classes.findIndex(i => i.id === item.id);
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
					<h2 className='title-page'>Serviços</h2>
					<p className='url-page'>Dashboard / Serviços</p>
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
