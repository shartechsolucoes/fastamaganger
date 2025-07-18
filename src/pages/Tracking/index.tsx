import React from 'react';
import { StepProgress } from '../../components/StepProgress';
import { MdOutlineSearch } from 'react-icons/md';

const STEPS = ['Iniciado', 'Em progresso', 'Finalizado'];

export default function Traking() {
	return (
		<div className="card">
			<div className="card-body">
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
				<StepProgress currentStep={2} steps={STEPS} />

				<div className="mb-3 col-12">
					<label htmlFor="serviceType" className="form-label">
						Detalhes
					</label>
				</div>
				<hr />
			</div>
		</div>
	);
}
