import React from 'react';

export default function Applicant() {
	return (
		<>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Nome
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					CPF
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Telefone/Celular
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-12">
				<label htmlFor="name" className="form-label">
					Solicitação
				</label>
				<textarea className="form-control" id="name" required />
			</div>
		</>
	);
}
