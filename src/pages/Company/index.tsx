import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type CompanyGroup = {
	id: number;
	name: string;
	phone: string;
	logo: string;
	adress: string;
	neighborhood: string;
	status: number;
};

const initialClasses: CompanyGroup[] = [
	{ id: 1, name: 'Shartech Soluções', phone:'(41) 99541-9995',logo: 'https://i.pravatar.cc/50?u=1' , adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 1 },
	{ id: 2, name: 'Prefeitura de Registro', phone:'(41) 99541-9995', logo: 'https://i.pravatar.cc/50?u=1', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 1 },
	{ id: 3, name: 'Prefeitura de Cajati', phone:'(41) 99541-9995', logo: 'https://i.pravatar.cc/50?u=1', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 1 },
	{ id: 4, name: 'Prefeitura de Ibaiti', phone:'(41) 99541-9995', logo: 'https://i.pravatar.cc/50?u=1', adress: 'Rua Arnaldo Gusi 44', neighborhood: "Xaxim", status: 1 },
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
	const [classes, setClasses] = useState<CompanyGroup[]>(initialClasses);

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};

	// Colunas com Ações mapeadas fora
	const columns = [

		{
			header: 'Empresa',
			accessor: (item: CompanyGroup) => (
				<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
					<div className="avatar avatar-s">
						<img
							src={item.logo || 'https://via.placeholder.com/40'}
							alt={item.name}
							className=""
						/>
					</div>
					<Link to={`/company/${encodeURIComponent(item.id)}`} className=" ">
						{item.name}
					</Link>
				</div>
			),
		},
		{ header: 'Endereço', accessor: (item: CompanyGroup) => item.adress, sortable: true },
		{ header: 'Bairro', accessor: (item: CompanyGroup) => item.neighborhood, sortable: true },
		{ header: 'Status', accessor: (item: CompanyGroup) => item.status, sortable: true },

		{
			header: 'Ações',
			accessor: (item: CompanyGroup) => {
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

	function handleOpenModal() {

	}

	return (
		<>
			<div className="header-page row">
				<div className='col-3'>
					<h2 className='title-page'>Turmas</h2>
					<p className='url-page'>Dashboard / Turmas</p>
				</div>
				<div className='col-9 d-flex justify-content-end'>
					<button className="btn btn-primary btn-md" onClick={() => handleOpenModal()}>
						+ Adicionar
					</button>
				</div>
			</div>

			<div className="col-12">
				<div className='card'>
					<DynamicTable data={classes} columns={columns} />
				</div>
			</div>
		</>
	);
}
