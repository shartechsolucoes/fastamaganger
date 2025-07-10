import './styles.css';
import DynamicTable from '../../../components/List';

export default function ClassListPage() {

	return (
		<div>
			<div className="header-page row">
				<div className='col-3'>
					<h2 className='title-page'>Turmas</h2>
					<p className='url-page'>Dashboard / Turmas</p>
				</div>
				<div className='col-9 d-flex justify-content-end'>
					<button className="btn btn-primary btn-md">
						Salvar
					</button>
				</div>
			</div>

			<div className="col-12">
				<div className='card'>
					<div className='card-body'>
						Dados do protocolo |
						Numero |
						Endereço |
						Bairro |
						Cidade |
						Estado |
						Reponsavel |
						Data de abertura |
						Data de execução |
						Tempo de duração |
						Materiais usados |
						Status |

						Lista de solitantes (reclamantes)

					</div>
				</div>
			</div>

		</div>
	);
}
