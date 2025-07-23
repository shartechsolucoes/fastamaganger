import { useState } from 'react';
import './landing.css';

function Landing() {
	const [formData, setFormData] = useState({
		nome: '',
		empresa: '',
		telefone: '',
		email: '',
		senha: '',
		confirmarSenha: '',
		comoConheceu: '',
		typeCompany: '',
		numberEmployees: '',
		companyProfile: '', // Novo campo
	});

	const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formData.senha !== formData.confirmarSenha) {
			setMensagem({ tipo: 'erro', texto: 'As senhas não coincidem.' });
			return;
		}

		// Aqui você pode enviar os dados para a API
		console.log('Dados de cadastro:', formData);

		setMensagem({ tipo: 'sucesso', texto: 'Cadastro realizado com sucesso!' });
	};

	return (
		<section className="section contact__v2" id="contact">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6 col-lg-7 mx-auto text-center">
						<span className="subtitle text-uppercase mb-3">Cadastro</span>
						<h2 className="h2 fw-bold mb-3">Faça seu cadastro</h2>
						<p>Comece agora mesmo a usar a plataforma gratuitamente!</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="form-wrapper">
							<form onSubmit={handleSubmit}>
								<div className="row mb-3">
									{/* DADOS PESSOAIS */}
									<div className="col-12 mb-3">
										<h5>Dados Pessoais</h5>
										<hr />
									</div>

									<div className="col-md-6 mb-3">
										<label className="form-label">Nome completo</label>
										<input
											type="text"
											className="form-control"
											name="nome"
											value={formData.nome}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="form-label">Telefone</label>
										<input
											type="tel"
											className="form-control"
											name="telefone"
											value={formData.telefone}
											onChange={handleChange}
											placeholder="(99) 99999-9999"
											required
										/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="form-label">E-mail</label>
										<input
											type="email"
											className="form-control"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="form-label">Senha</label>
										<input
											type="password"
											className="form-control"
											name="senha"
											value={formData.senha}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="form-label">Confirme a senha</label>
										<input
											type="password"
											className="form-control"
											name="confirmarSenha"
											value={formData.confirmarSenha}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="col-12 mb-4">
										<label className="form-label">
											Como conheceu a plataforma?
										</label>
										<select
											className="form-select"
											name="comoConheceu"
											value={formData.comoConheceu}
											onChange={handleChange}
											required
										>
											<option value="">Selecione uma opção</option>
											<option value="google">Pesquisa no Google</option>
											<option value="instagram">Instagram</option>
											<option value="indicacao">Indicação</option>
											<option value="outro">Outro</option>
										</select>
									</div>

									{/* DADOS DA EMPRESA */}
									<div className="col-12 mb-3 mt-3">
										<h5>
											Dados da Empresa{' '}
											<span className="text-muted">(opcional)</span>
										</h5>
										<hr />
									</div>

									<div className="col-md-6 mb-3">
										<label className="form-label">Nome da empresa</label>
										<input
											type="text"
											className="form-control"
											name="empresa"
											value={formData.empresa}
											onChange={handleChange}
										/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="form-label">Perfil da empresa</label>
										<input
											type="text"
											className="form-control"
											name="companyProfile"
											value={formData.companyProfile}
											onChange={handleChange}
											placeholder="Ex: Construção civil, Energia, etc."
										/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="form-label">Tipo de empresa</label>
										<select
											className="form-select"
											name="typeCompany"
											value={formData.typeCompany}
											onChange={handleChange}
										>
											<option value="">Selecione uma opção</option>
											<option value="private">Privada</option>
											<option value="public">Pública</option>
										</select>
									</div>
									<div className="col-md-6 mb-4">
										<label className="form-label">
											Quantidade de funcionários
										</label>
										<select
											className="form-select"
											name="numberEmployees"
											value={formData.numberEmployees}
											onChange={handleChange}
										>
											<option value="">Selecione uma opção</option>
											<option value="1-5">1 a 5</option>
											<option value="6-10">6 a 10</option>
											<option value="11-20">11 a 20</option>
											<option value="20+">Mais de 20</option>
										</select>
									</div>

									<div className="col-12 d-grid">
										<button
											type="submit"
											className="btn btn-primary fw-semibold"
										>
											Cadastrar
										</button>
									</div>
								</div>
							</form>

							{mensagem.texto && (
								<div
									className={`mt-3 alert alert-${
										mensagem.tipo === 'sucesso' ? 'success' : 'danger'
									}`}
								>
									{mensagem.texto}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Landing;
