import './styles.css';
import DynamicTable from '../../components/List/index.tsx';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import BadgeStatus from "../../components/Badge/Status";
import BadgePriority from "../../components/Badge/Priority";
import {MdDeleteOutline, MdModeEditOutline} from "react-icons/md";

type ProtocolsGroup = {
	number: number;
	date: string;
	adress: string;
	neighborhood: string;
	serviceType: string;
	priority: number;
	status: number;
};

const initialClasses: ProtocolsGroup[] = [
	{
		number: 65828,
		date: "21/06/2025",
		adress: "Rua Arnaldo Gusi 44",
		neighborhood: "Xaxim",
		serviceType: "Limpeza",
		priority: 2,
		status: 5,
	},
	{
		number: 65829,
		date: "21/06/2025",
		adress: "Rua Carlos Gomes 100",
		neighborhood: "Centro",
		serviceType: "Poda",
		priority: 3,
		status: 1,
	},
	{
		number: 65829,
		date: "21/06/2025",
		adress: "Rua Carlos Gomes 100",
		neighborhood: "Centro",
		serviceType: "Poda",
		priority: 1,
		status: 2,
	},
	{
		number: 65829,
		date: "21/06/2025",
		adress: "Rua Carlos Gomes 100",
		neighborhood: "Centro",
		serviceType: "Poda",
		priority: 2,
		status: 1,
	},
];
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
			accessor: (item: ProtocolsGroup) => <BadgeStatus status={item.status} />,
			sortable: true
		},
		{
			header: 'Prioridade',
			accessor: (item: ProtocolsGroup) => <BadgePriority idPriority={item.priority} />,
			sortable: true
		},

		{
			header: 'Ações',
			accessor: (item: ProtocolsGroup) => {
				const index = classes.findIndex((i) => i.number === item.number);
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
