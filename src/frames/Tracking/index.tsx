import React from 'react';
import { StepProgress } from '../../components/StepProgress';
import { MdOutlineSearch } from 'react-icons/md';

const STEPS = ['Iniciado', 'Em progresso', 'Finalizado'];

export default function Traking() {
	return (
		<div className="card">
			<div className="card-body">
				<div className="row">
					<div className="mb-3 col-12">
						<label htmlFor="serviceType" className="form-label">
							Pesquisar protocolo
						</label>
						<div className="d-flex gap-2">
							<input
								type="text"
								id="serviceType"
								className="form-control"
								// value={serviceType}
								required
								// onChange={(e) => onChange('serviceType', e.target.value)}
							/>
							<button type="button" className="btn btn-primary">
								<MdOutlineSearch />
							</button>
						</div>
					</div>
					<div className="mb-3 col-12">
						<StepProgress currentStep={4} steps={STEPS} />
					</div>

					<div className="mb-3 col-12 ">
						<p className="form-label fs-3">Detalhes</p>
					</div>
					<hr />
					<div className="mb-3 col-12 fs-4">
						<p className="form-label fs-4">Local</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">CEP</label>
						<p>12345-678</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Endereço</label>
						<p>Rua das Flores</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Número</label>
						<p>987</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Bairro</label>
						<p>Jardim Primavera</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Cidade</label>
						<p>São Paulo</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Estado</label>
						<p>SP</p>
					</div>
					<div className="mb-3 col-12 fs-4">
						<p className="form-label fs-4">Serviço prestado</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Tipo de Serviço</label>
						<p>Troca de Lâmpada</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Status</label>
						<p>Finalizado</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Data Início</label>
						<p>16/07/2025 08:30</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Data Finalizado</label>
						<p>16/07/2025 09:15</p>
					</div>
					<div className="mb-3 col-12 col-md-6">
						<label className="form-label">Tempo (h)</label>
						<p>0.75</p>
					</div>
				</div>
			</div>
		</div>
	);
}
