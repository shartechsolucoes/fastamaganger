import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import Card from '../../components/Cards/Basic';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BadgeStatus from "../../components/Badge/Status";
import BadgePriority from "../../components/Badge/Priority";
import {MdDeleteOutline, MdModeEditOutline} from "react-icons/md";

type StockGroup = {
	id: number;
	name: string;
	photo: string;
	qtd: string;
	lastInsert: string;
	status: number;
};

const initialClasses: StockGroup[] = [
	{ id: 1, name: 'Pneu', photo: 'https://i.pravatar.cc/50?u=1' , qtd: '44', lastInsert: "10/10/2024", status: 1 },
	{ id: 2, name: 'Lampada LED 80W', photo: 'https://i.pravatar.cc/50?u=1', qtd: '65', lastInsert: "02/06/2025", status: 1 },
	{ id: 3, name: 'Lampada LED 50W', photo: 'https://i.pravatar.cc/50?u=1', qtd: '655', lastInsert: "02/06/2025", status: 1 },
	{ id: 4, name: 'Parafuso', photo: 'https://i.pravatar.cc/50?u=1', qtd: '85', lastInsert: "17/07/2025", status: 1 },
	{ id: 5, name: 'Conector', photo: 'https://i.pravatar.cc/50?u=1', qtd: '256', lastInsert: "06/06/2025", status: 1 },
];

type ActionsMenuProps = {
	onEdit: () => void;
	onDelete: () => void;
};
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
		{
			header: 'Status',
			accessor: (item: StockGroup) => <BadgeStatus status={item.status} />,
			sortable: true
		},
		{
			header: 'Ações',
			accessor: (item: StockGroup) => {
				const index = classes.findIndex((i) => i.id === item.id);
				return (
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						<button
							className="btn btn-sm btn-primary"
							onClick={() => handleEdit(index)}
						>
							<MdModeEditOutline />
						</button>
						<button
							className="btn btn-sm btn-danger"
							onClick={() => handleDelete(index)}
						>
							<MdDeleteOutline />
						</button>
					</div>
				);
			},
		}
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
