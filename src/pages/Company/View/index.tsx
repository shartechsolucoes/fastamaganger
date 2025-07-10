import './styles.css';
import DynamicTable from '../../../components/List';

export default function ClassListPage() {

	return (
		<div>
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

			<div className="col-12">
				<div className='card'>
					<div className='card-body'>
						Nome <br/>
						Razão Social <br/>
						CNPJ <br/>
						Endereço (Rua, n°, baixo, cep, cidade, estado, complemento) !mostrar no mapa<br/>
						Responsavel<br/>
						CPF<br/>
						Telefone<br/>
						Email<br/>
						Logo da Empresa !colocara no sidebar<br/>
						Tipo de empresa(Privada|GOV)<br/>
						<br/>

						Modulos Liberados<br/>
						Modulo  Poda<br/>
						Modulo  Iluminação<br/>
						Modulo  Estoque<br/>

						<br/><br/>

						Lista com Equipe<br/>
						Nome | usuáro | Cargo | Telefone | Acessos
						<br/><br/>


					</div>
				</div>
			</div>

		</div>
	);
}
