import './styles.css';
import UserPermissionsList from '../../../components/List/Permission';
import {useState} from "react";
import {Link} from "react-router-dom";
import DynamicTable from '../../../components/List/index.tsx';
import {MdDeleteOutline, MdModeEditOutline} from "react-icons/md";
import BadgeStatus from "../../../components/Badge/Status";
type CompanyUsers = {
	id: number;
	name: string;
	photo: string;
	phone: string;
	email: string;
	position: string;
	status: number;
};

const initialClasses: CompanyUsers[] = [
	{ id: 1, name: 'Edson Rodrigues', phone:'(41) 99541-9995', photo: 'https://i.pravatar.cc/50?u=1' , email: 'edson@shartech.com.br', position: "Administrador", status: 1 },
];
export default function ClassListPage() {
	const [classes, setClasses] = useState<CompanyUsers[]>(initialClasses);

	const handleDelete = (index: number) => {
		const updated = classes.filter((_, i) => i !== index);
		setClasses(updated);
	};
	const columns = [

		{
			header: 'Colaborador',
			accessor: (item: CompanyUsers) => (
				<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
					<div className="avatar avatar-s">
						<img
							src={item.photo || 'https://via.placeholder.com/40'}
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
		{ header: 'email', accessor: (item: CompanyUsers) => item.email, sortable: true },
		{ header: 'Cargo', accessor: (item: CompanyUsers) => item.position, sortable: true },
		{
			header: 'Status',
			accessor: (item: CompanyUsers) => <BadgeStatus status={item.status} />,
			sortable: true
		},
		{ header: 'Poda', accessor: () => 'SIM', sortable: true },
		{ header: 'Iluminação', accessor: () => 'SIM', sortable: true },
		{ header: 'Financeiro', accessor: () => 'SIM', sortable: true },
		{ header: 'Estoque', accessor: () => 'SIM', sortable: true },
		{
			header: 'Ações',
			accessor: (item: CompanyUsers) => {
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
		<div>
			<div className="service-page container-fluid">
				<div className="header-page row">
					<div className='col-3'>
						<h2 className='title-page'>Empresa</h2>
						<p className='url-page'>Dashboard / Empresa</p>
					</div>
					<div className='col-9 d-flex justify-content-end'>
						<button className="btn btn-primary btn-md">
							Editar
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-2">
						<div className="card">
							<div className="card-body">

							</div>
						</div>
					</div>
					<div className="col-10">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title mb-4">Empresa</h5>

								<div className="row mb-3">
									<div className="col-md-4">
										<label className="form-label">Razão social</label>
										<p>Shartech Soluções LTDA</p>
									</div>
									<div className="col-md-8">
										<label className="form-label">Nome Fantasia</label>
										<p>Shartech Soluções LTDA</p>
									</div>
								</div>

								<div className="row mb-3">
									<div className="col-md-4">
										<label className="form-label">CNPJ</label>
										<p>48.444.444/0011-95</p>
									</div>
									<div className="col-md-4">
										<label className="form-label">Indcrição Estadual</label>
										<p></p>
									</div>
									<div className="col-md-4">
										<label className="form-label">Tipo</label>
										<p>GOV</p>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-3">
										<label className="form-label">Responsavel</label>
										<p>Edson Rodrigues</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">CPF</label>
										<p>Edson Rodrigues</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">E-mail</label>
										<p>email@email.com.br</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">Telefone</label>
										<p>(41) 99541-9995</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">Site</label>
										<p>www.shartech.com.br</p>
									</div>
								</div>

								<hr />

								<h5 className="card-title mb-3">Endereço</h5>

								<div className="row mb-3">
									<div className="col-md-6">
										<label className="form-label">Rua</label>
										<p>R. Arnaldo Gusi</p>
										<small className="text-muted"></small>
									</div>
									<div className="col-md-3">
										<label className="form-label">N°</label>
										<p>44</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">Complemento</label>
										<p>01</p>
									</div>
								</div>

								<div className="row mb-3">
									<div className="col-md-3">
										<label className="form-label">Bairro</label>
										<p>Xaxim</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">CEP</label>
										<p>88870-450</p>
										<small className="text-muted"></small>
									</div>
									<div className="col-md-3">
										<label className="form-label">Cidade</label>
										<p>Curitiba</p>
									</div>
									<div className="col-md-3">
										<label className="form-label">Estado</label>
										<p>PR</p>
									</div>
								</div>

								<hr />

								<h5 className="card-title mb-3">Modulos</h5>
								Modulos Liberados<br/>
								Modulo  Poda<br/>
								Modulo  Iluminação<br/>
								Modulo  Estoque<br/>
								<hr />

								<h5 className="card-title mb-3">Estilo</h5>
								Logo da Empresa !colocara no sidebar<br/>
								<div className="row mb-3">
									<div className="col-md-3">
										<label className="form-label">Cor Primaria</label>
										<input type="color" id="head" name="head" value="#134bcd" />
									</div>

									<div className="col-md-3">
										<label className="form-label">Cor Secundaria</label>
										<input type="color" id="head" name="head" value="#ffffff" />
									</div>
									<div className="col-md-3">
										<label className="form-label">Background</label>
										<input type="color" id="head" name="head" value="#c3c3c3" />
									</div>
									<div className="col-md-3">
										<label className="form-label">Cor Texto</label>
										<input type="color" id="head" name="head" value="#1c1c1" />
									</div>
								</div>
								<hr />

								<h5 className="card-title mb-3">Colaboradores</h5>

								<div className="row mb-3">
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="email@email.com" />
									</div>
									<div className="col-md-4">
										<select
											className="form-select"
											name="Responsável"
											required
										>
											<option value="">Selecione uma opção</option>
											<option value="google">Administrador</option>
											<option value="indicacao">Financeiro</option>
											<option value="instagram">Coordenador</option>
											<option value="instagram">Colaborador</option>
										</select>
									</div>
									<div className="col-md-4">
										<button type="button" className="btn btn-primary">Enviar convite</button>
									</div>
								</div>

								<DynamicTable data={classes} columns={columns} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
