import Address from './Addsress';
import Request from './Request';
import Applicant from './Applicant';
import { StepProgress } from './StepProgress';
import { useState } from 'react';
import Confirm from './Confirm';

const stepList = ['Endereço', 'Solicitante', 'Execução', 'Confirmação'];
export default function ProtocolForm() {
	const [steps, setStep] = useState(1);

	const stepRender = () => {
		switch (steps) {
			case 2:
				return <Request />;
			case 3:
				return <Applicant />;
			case 4:
				return <Confirm />;

			default:
				return <Address />;
		}
	};

	return (
		<>
			<div className="header-page row">
				<div className="col-4">
					<h2 className="title-page">Criar Protocolo</h2>
					<p className="url-page">Dashboard / Protocolo</p>
				</div>
				<div className="col-9 d-flex justify-content-end"></div>
			</div>
			<div className="col-12">
				<div className="card">
					<div className="card-body">
						<StepProgress currentStep={steps} steps={stepList} />
						<form className="row">{stepRender()}</form>

						<button
							type="button"
							className="btn"
							disabled={steps <= 1}
							onClick={() => setStep(steps - 1)}
						>
							Voltar
						</button>
						{steps === stepList.length ? (
							<button
								type="button"
								className="btn"
								onClick={() => console.log('enviado')}
							>
								Enviar
							</button>
						) : (
							<button
								type="button"
								className="btn"
								disabled={steps === stepList.length}
								onClick={() => setStep(steps + 1)}
							>
								Proximo
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
