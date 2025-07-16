import React from 'react';

export default function Address() {
	return (
		<>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					CEP
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Endereço
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Número
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Bairro
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Cidade
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Estado
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
		</>
	);
}
