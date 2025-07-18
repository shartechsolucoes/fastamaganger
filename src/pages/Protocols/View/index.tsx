import { useNavigate } from 'react-router-dom';
import './styles.css';
import {IoIosArrowBack} from "react-icons/io";

export default function ServiceProtocolPage() {
	const navigate = useNavigate();

	const protocoloId = '12';

	return (
		<div className="service-page container-fluid">
			<div className="row header-page align-items-center mb-4">
				<div className='col-md-6 d-flex align-items-center gap-2'>
					<div>
						<h2 className='title-page'>Protocolo Nº {protocoloId}</h2>
						<p className='url-page'>Dashboard / Protocolos / Detalhes</p>
					</div>
				</div>

				<div className='col-md-6 text-end d-flex justify-content-end gap-2'>
					<button className="btn btn-outline-primary btn-md"
							onClick={() => navigate(`/protocols/${protocoloId}`)}>
						<IoIosArrowBack />
					</button>
					<button className="btn btn-outline-primary btn-md"
							onClick={() => navigate(`/protocols/${protocoloId}`)}>
						Editar
					</button>
					<button className="btn btn-primary btn-md">
						Salvar
					</button>
				</div>
			</div>

			<div className="card">
				<div className="card-body">
					<h5 className="card-title mb-4">Dados do Protocolo</h5>

					<div className="row mb-3">
						<div className="col-md-4">
							<label className="form-label">Número do Protocolo</label>
							<input type="text" className="form-control" defaultValue="01 20250710 0001" />
						</div>
						<div className="col-md-8">
							<label className="form-label">Endereço</label>
							<input type="text" className="form-control" placeholder="Rua, número..." />
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-md-4">
							<label className="form-label">Bairro</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label className="form-label">Cidade</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label className="form-label">Estado</label>
							<input type="text" className="form-control" maxLength={2} />
						</div>
					</div>

					<hr />

					<h5 className="card-title mb-3">Responsável & Execução</h5>

					<div className="row mb-3">
						<div className="col-md-6">
							<label className="form-label">Responsável</label>
							<input type="text" className="form-control" />
							<small className="text-muted">Listar responsável por cada tipo de serviço</small>
						</div>
						<div className="col-md-3">
							<label className="form-label">Data de Abertura</label>
							<input type="date" className="form-control" />
						</div>
						<div className="col-md-3">
							<label className="form-label">Data de Execução</label>
							<input type="date" className="form-control" />
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-md-4">
							<label className="form-label">Tempo de Duração</label>
							<input type="text" className="form-control" placeholder="Ex: 2h30min" />
						</div>
						<div className="col-md-8">
							<label className="form-label">Materiais Usados</label>
							<textarea className="form-control" rows={2}></textarea>
						</div>
					</div>

					<div className="row mb-4">
						<div className="col-md-4">
							<label className="form-label">Status</label>
							<select className="form-select">
								<option>Aberto</option>
								<option>Em andamento</option>
								<option>Concluído</option>
								<option>Cancelado</option>
							</select>
						</div>
					</div>

					<hr />

					<h5 className="card-title mb-3">Solicitantes (Reclamantes)</h5>
					<div className="row mb-3">
						<div className="col-md-12">
							<textarea className="form-control" rows={3} placeholder="Nome, CPF, telefone, etc."></textarea>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
