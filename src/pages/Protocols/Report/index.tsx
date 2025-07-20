import './styles.css';

export default function ClassListPage() {

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
						Quantidade protocolos abertos | Quantidade protocolos Finalizados | Quantidade protocolos Pendentes <br/>
						Lista(NP, Endereço, Data Solicitação, data Execução, Solicitante Inicial, Responsavel, Tipo ) e mapa mostrando<br/>
						<br/>
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
