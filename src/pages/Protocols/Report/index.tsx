import './styles.css';
import DynamicTable from '../../../components/List';

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


						Dados do protocolo <br/>
						Numero<br/>
						Ex: 01 20250710 0001 <br/><br/>
						Endereço<br/>
						Bairro<br/>
						Cidade<br/>
						Estado<br/>
						Reponsavel <br/>
						Listar responsavel por cada tipo de serviço<br/><br/>
						Data de abertura <br/>
						Data de execução <br/>
						Tempo de duração <br/>
						Materiais usados <br/>
						Status<br/>
						<br/>

						Lista de solitantes (reclamantes)

					</div>
				</div>
			</div>

		</div>
	);
}
