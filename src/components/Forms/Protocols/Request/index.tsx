export default function Request() {
	return (
		<>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Tipo de serviço
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Equipe
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Status
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-6">
				<label htmlFor="name" className="form-label">
					Materiais
				</label>
				<input type="text" className="form-control" id="name" required />
			</div>
			<div className="mb-3 col-12 col-md-12">
				<label htmlFor="name" className="form-label">
					Observações
				</label>
				<textarea className="form-control" id="name" required />
			</div>
		</>
	);
}
