import './styles.css';
import UserPermissionsList from '../../../components/List/Permission';
import {useState} from "react";
const allPermissions = [
	{ id: 'read', name: 'Leituraaa' },
	{ id: 'write', name: 'Escrita' },
	{ id: 'edit', name: 'Edição' },
	{ id: 'delete', name: 'Exclusão' },
	{ id: 'admin', name: 'Administrador' },
];
export default function ClassListPage() {
	const [selected, setSelected] = useState<string[]>(['read']);

	const handleToggle = (permissionId: string) => {
		setSelected((prev) =>
			prev.includes(permissionId)
				? prev.filter((id) => id !== permissionId)
				: [...prev, permissionId]
		);
	};
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
						Cor Primaria<br/>
						Cor Secundaria<br/>
						Background<br/>
						<br/>

						<hr />

						<h5 className="card-title mb-3">Colaboradores</h5>
						Lista com Equipe<br/>
						Nome | usuáro | Cargo | Telefone | Acessos<br/>
						<UserPermissionsList
							permissions={allPermissions}
							selected={selected}
							onToggle={handleToggle}
						/>
						Enviar Convite (Email)

					</div>
				</div>
			</div>
		</div>
	);
}
