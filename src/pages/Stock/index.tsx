import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import Card from '../../components/Cards/Basic';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type StockGroup = {
	name: string;
	photo: string;
	qtd: string;
	lastInsert: string;
	status: number;
};

const initialClasses: StockGroup[] = [
	{ name: 'Pneu', photo: 'https://i.pravatar.cc/50?u=1' , qtd: '44', lastInsert: "10/10/2024", status: 1 },
	{ name: 'Lampada LED 80W', photo: 'https://i.pravatar.cc/50?u=1', qtd: '65', lastInsert: "02/06/2025", status: 1 },
	{ name: 'Lampada LED 50W', photo: 'https://i.pravatar.cc/50?u=1', qtd: '655', lastInsert: "02/06/2025", status: 1 },
	{ name: 'Parafuso', photo: 'https://i.pravatar.cc/50?u=1', qtd: '85', lastInsert: "17/07/2025", status: 1 },
	{ name: 'Conector', photo: 'https://i.pravatar.cc/50?u=1', qtd: '256', lastInsert: "06/06/2025", status: 1 },
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
	const [classes, setClasses] = useState<StockGroup[]>(initialClasses);

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};

	// Colunas com Ações mapeadas fora
	const columns = [
		
		{
			header: 'Item',
			accessor: (item: StockGroup) => (
				<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
					<div className="avatar avatar-s">
						<img
							src={item.photo || 'https://via.placeholder.com/40'}
							alt={item.name}
							className=""
						/>
					</div>
					<Link to={`/student/${encodeURIComponent(item.name)}`} className=" ">
						{item.name}
					</Link>
				</div>
			),
		},
		{ header: 'QTD', accessor: (item: StockGroup) => item.qtd, sortable: true },
		{ header: 'Ultima Inclusão', accessor: (item: StockGroup) => item.lastInsert, sortable: true },
		{ header: 'Status', accessor: (item: StockGroup) => item.status, sortable: true },

		{
			header: 'Ações',
			accessor: (item: StockGroup) => {
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
		<div className="row">
			<div className="header-page row">
				<div className='col-3'>
					<h2 className='title-page'>Estoque</h2>
					<p className='url-page'>Dashboard / Estoque</p>
				</div>
				<div className='col-9 d-flex justify-content-end'>
					<button className="btn btn-primary btn-md" onClick={() => ''}>
						+ Adicionar
					</button>
				</div>
			</div>
			<div className="col-3 mt-4">
				<Card title='Produtos' info='estoque' content='58' footer='12 esgotando'/>
			</div>
			<div className="col-3 mt-4">
				<Card title='Usados essa Semana' info='estoque' content='20' footer='12 esgotando'/>
			</div>
			<div className="col-3 mt-4">
				<Card title='Kits' info='estoque' content='58' footer='12 esgotando'/>
			</div>
			<div className="col-3 mt-4">
				<Card title='Produtos' info='estoque' content='58' footer='12 esgotando'/>
			</div>

			<div className="col-12 mt-4">
				<div className='card'>
					<DynamicTable data={classes} columns={columns} />
				</div>
			</div>
		</div>
	);
}
