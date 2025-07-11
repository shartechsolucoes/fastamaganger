import './landing.css';
function Landing() {
	return (
		<>
			<div className='container landingPage'>
				<nav className="navbar navbar-expand-lg">
					<a className="navbar-brand" href="#">
						<div className="app-brand d-block">
							<a href="#" className="d-block">
								<p>Fast</p>
								<p className='induca'>Mananger</p>
							</a>
						</div>
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse"
							data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse d-flex justify-content-end gap-3" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Sobre</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Planos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Modulos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Clientes</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Protocolos</a>
							</li>
							<li className="nav-item">
								<a className="btn  my-2 my-sm-0" href='register'>Cadastrar</a>
							</li>
							<li className="nav-item">
								<a className="btn btn-info my-2 my-sm-0" href='login'>Login</a>
							</li>
						</ul>
					</div>
				</nav>
				<section className="mt-4 destaque d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
					<div className="row w-100 justify-content-center">
						<div className="col-8 text-center">
							<h1 className="text-white">Gestão Inteligente para Serviços Urbanos</h1>
							<p>O Sistema de Gerenciamento de Ordens de Serviço tem como objetivo principal modernizar e otimizar a gestão de serviços públicos como poda de árvores, iluminação pública, esgoto e limpeza urbana.

								A proposta é garantir agilidade, rastreabilidade, organização e transparência em todo o processo — desde o recebimento da solicitação até a conclusão do serviço.</p>

						</div>
					</div>
				</section>

				<div className="row mt-4">
					<div className="col-3 text-center">
						Iluminação Pública<br/>
						Esgoto e Drenagem
					</div>
					<div className="col-6 text-center ">
						Imagem do APP
					</div>
					<div className="col-3 text-center">
						Coleta e limpeza urbana<br/>
						Poda de arvore
					</div>
				</div>
				<div className="row mt-4">
					<h1 className='title'>Planos</h1>
					<div className="col-3">
						<div className="card">
							<div className="card-header"><h3>Plano I</h3></div>
							<div className="card-body">
								<ul>
									<li>💡 Iluminação Pública</li>
									<li>💧 Esgoto e Drenagem</li>
									<li>🗑️ Coleta e Limpeza Urbana</li>
									<li>🌳 Poda de Árvores</li>
									<li>Estoque</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card">
							<div className="card-header"><h3>Plano II</h3></div>
							<div className="card-body">
								<ul>
									<li>💡 Iluminação Pública</li>
									<li>💧 Esgoto e Drenagem</li>
									<li>🗑️ Coleta e Limpeza Urbana</li>
									<li>🌳 Poda de Árvores</li>
									<li>Estoque</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card">
							<div className="card-header"><h3>Plano III</h3></div>
							<div className="card-body">
								<ul>
									<li>💡 Iluminação Pública</li>
									<li>💧 Esgoto e Drenagem</li>
									<li>🗑️ Coleta e Limpeza Urbana</li>
									<li>🌳 Poda de Árvores</li>
									<li>Estoque</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card">
							<div className="card-header"><h3>Plano IIII</h3></div>
							<div className="card-body">
								<ul>
									<li>💡 Iluminação Pública</li>
									<li>💧 Esgoto e Drenagem</li>
									<li>🗑️ Coleta e Limpeza Urbana</li>
									<li>🌳 Poda de Árvores</li>
									<li>Estoque</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<h1 className='title'>Clientes</h1>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
					<div className="col-1 text-center">Prefeitura</div>
				</div>

				<div className="row mt-4 d-flex justify-content-center">
					<div className="col-12 text-center">
						<h1>Consultar Protocolos</h1>
						<form>
							<div className="form-group">
								<input type="email" className="form-control" id="input"
									   aria-describedby="emailHelp" placeholder="N° do protocolo"/>
								<small id="emailHelp" className="form-text text-muted">Informe o numero de protocolo que iremos mostrar os dados da solicitação</small>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Landing;
