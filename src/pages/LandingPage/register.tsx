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

					<div className="collapse navbar-collapse d-flex justify-content-end gap-3"
						 id="navbarSupportedContent">
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

				<section className="section contact__v2" id="contact">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-6 col-lg-7 mx-auto text-center"><span
								className="subtitle text-uppercase mb-3 aos-init aos-animate" data-aos="fade-up"
								data-aos-delay="0">Cadastro</span>
								<h2 className="h2 fw-bold mb-3 aos-init aos-animate" data-aos="fade-up"
									data-aos-delay="0">Faça seu cadastro</h2>
								<p data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate"></p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="d-flex gap-5 flex-column">

								</div>
							</div>
							<div className="col-md-8">
								<div className="form-wrapper aos-init aos-animate" data-aos="fade-up"
									 data-aos-delay="300">
									<form id="contactForm">
										<div className="row gap-3 mb-3">
											<div className="col-md-12">
												<label className="mb-2" htmlFor="name">Name</label>
												<input className="form-control" id="name" type="text" name="name"
													   required=""/>
											</div>
											<div className="col-md-12">
												<label className="mb-2" htmlFor="email">Email</label>
												<input className="form-control" id="email" type="email" name="email"
													   required=""/>
											</div>
										</div>
										<div className="row gap-3 mb-3">
											<div className="col-md-12">
												<label className="mb-2" htmlFor="subject">Subject</label>
												<input className="form-control" id="subject" type="text"
													   name="subject"/>
											</div>
										</div>
										<div className="row gap-3 gap-md-0 mb-3">
											<div className="col-md-12">
												<label className="mb-2" htmlFor="message">Message</label>
												<textarea className="form-control" id="message" name="message" rows="5"
														  required=""></textarea>
											</div>
										</div>
										<button className="btn btn-primary fw-semibold" type="submit">Cadastrar
										</button>
									</form>
									<div className="mt-3 d-none alert alert-success" id="successMessage">Message sent
										successfully!
									</div>
									<div className="mt-3 d-none alert alert-danger" id="errorMessage">Message sending
										failed. Please try again later.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Landing;
