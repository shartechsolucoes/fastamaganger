import './styles.css';
import DynamicTable from "../../../components/List";
import { Link } from 'react-router';
import {useState} from "react";
import BadgePriority from "../../../components/Badge/Priority/Index.tsx"

type ProtocolsGroup = {
	number: number;
	date: string;
	adress: string;
	neighborhood: string;
	serviceType: string;
	idPriority: number;
	status: number;
};

const initialClasses: ProtocolsGroup[] = [
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Limpeza',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Iluminação',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Zeladoria',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 2,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 3,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
	{
		number: 1202507100001,
		date: '21/06/2025',
		serviceType: 'Poda de Arvore',
		adress: 'Rua Arnaldo Gusi 44',
		neighborhood: 'Xaxim',
		idPriority: 1,
		status: 1,
	},
];

export default function ClassListPage() {
	const [classes] = useState<ProtocolsGroup[]>(initialClasses);

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
			header: 'Solicitação',
			accessor: (item: ProtocolsGroup) => item.date,
			sortable: true,
		},
		{
			header: 'Finalização',
			accessor: (item: ProtocolsGroup) => item.date,
			sortable: true,
		},
		{
			header: 'Tempo Medio',
			accessor: (item: ProtocolsGroup) => item.date,
			sortable: true,
		},
		{
			header: 'Serviço',
			accessor: (item: ProtocolsGroup) => item.serviceType,
			sortable: true,
		},
		{
			header: 'Solicitantes',
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
			accessor: (item: ProtocolsGroup) => <BadgePriority idPriority={item.idPriority} />,
			sortable: true
		},
	];


	return (
		<div>
			<div className="header-page row">
				<div className='col-3'>
					<h2 className='title-page'>Relátorio</h2>
					<p className='url-page'>Dashboard / Protocolos / Relátorios</p>
				</div>
				<div className='col-9 d-flex justify-content-end'>
					<button className="btn btn-primary btn-md">
						Exportar
					</button>
				</div>
			</div>

			<div className="col-12">
				<div className='card'>
					<div className='card-body'>
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Data Inicial</label>
								<input type="date" className="form-control" />
								<small className="text-muted"></small>
							</div>
							<div className="col-md-3">
								<label className="form-label">Data Final</label>
								<input type="date" className="form-control" />
								<small className="text-muted"></small>
							</div>
						</div>

						Protocolos<br/>
						<div className="row">
							<div className="col-md-3">
								<h1>25</h1>
								Quantidade protocolos abertos
							</div>
							<div className="col-md-3">
								<h1>25</h1>
								Quantidade protocolos Finalizados
							</div>
							<div className="col-md-3">
								<h1>25</h1>
								Quantidade protocolos Pendentes
							</div>
							<div className="col-md-3">
								<h1>25</h1>
								Quantidade protocolos Pendentes
							</div>
							<div>

							</div>

							<div className="col-12">
								<DynamicTable data={classes} columns={columns} />
							</div>
						</div>

						Solicitantes<br/>
						Lista e mapa mostrando<br/><br/>

						Materiais Utilizados<br/>
						Utilizados (data, quantidade, NP) <br/><br/>

						Materiais Em Estoque<br/>
						Utilizados (data, quantidade, NP) <br/><br/>

						Colaboradores<br/>
						Utilizados (data, quantidade, NP) <br/><br/>

					</div>
				</div>
			</div>

		</div>
	);
}
