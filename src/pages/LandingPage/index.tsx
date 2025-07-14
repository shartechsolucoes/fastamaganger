import './landing.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from "react";

function Landing() {
	useEffect(() => {
		AOS.init({})
	})
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
				<section className="mt-4 destaque d-flex justify-content-center align-items-center"
						 style={{minHeight: '50vh'}}>
					<div className="row w-100 justify-content-center">
						<div className="col-8 text-center">
							<h1 className="text-white">Gestão Inteligente para Serviços Urbanos</h1>
							<p>O Sistema de Gerenciamento de Ordens de Serviço tem como objetivo principal modernizar e
								otimizar a gestão de serviços públicos como poda de árvores, iluminação pública, esgoto
								e limpeza urbana.

								A proposta é garantir agilidade, rastreabilidade, organização e transparência em todo o
								processo — desde o recebimento da solicitação até a conclusão do serviço.</p>

						</div>
					</div>
				</section>
				<section id="pricing" className="pricing section d-none">


					<div className="container section-title aos-init aos-animate" data-aos="fade-up">
						<h2>Planos</h2>
						<p>Adequado as suas Necessidades... </p>
					</div>

					<div className="container">

						<div className="row g-4 g-lg-0">

							<div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
								<div className="pricing-item luciano">
									<h3>📦Plano I – Essencial</h3>
									<h4><sup>R$</sup>399<span> / Mês</span></h4>
									<ul>
										<li><i className="bi bi-check"></i> <span> Público-alvo: Prefeituras de pequeno porte ou distritos.</span>
										</li>
										<li><i className="bi bi-check"></i> <span>🔹App com logo (marca própria)</span>
										</li>
										<li><i className="bi bi-check"></i>
											<span>🔹Acesso ao app mobile para equipes</span></li>
										<li><i className="bi bi-check"></i> <span>🔹Controle de estoque com alertas de reposição</span>
										</li>
										<li><i className="bi bi-check"></i>
											<span>🔹Relatórios automáticos por módulo</span>
										</li>
										<li><i className="bi bi-check"></i> <span>🔹Suporte por e-mail e chat</span>
										</li>
									</ul>
									<div className="text-center"><a href="#" className="buy-btn">Click Aqui</a></div>
								</div>
							</div>

							<div className="col-lg-4 featured aos-init aos-animate" data-aos="zoom-in"
								 data-aos-delay="100">
								<div className="pricing-item">
									<h3>📦 Plano II – Premium</h3>
									<h4><sup>R$</sup>1.499<span> / mês</span></h4>
									<ul>
										<li><i className="bi bi-check"></i> <span> Público-alvo: Grandes prefeituras, consórcios regionais ou empresas terceirizadas.</span>
										</li>
										<li><i className="bi bi-check"></i> <span>🔹App com logo (marca própria)</span>
										</li>
										<li><i className="bi bi-check"></i> <span>🔹Integração com sistemas externos via API</span>
										</li>
										<li><i className="bi bi-check"></i>
											<span>🔹SLA de atendimento prioritário (24h)</span>

										</li>
										<li><i className="bi bi-check"></i>
											<span>🔹Relatórios personalizados sob demanda</span></li>
										<li><i className="bi bi-check"></i>
											<span>🔹Módulo de auditoria e histórico completo</span></li>
									</ul>
									<div className="text-center"><a href="#" className="buy-btn">Click Aqui</a></div>
								</div>
							</div>


							<div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
								<div className="pricing-item">
									<h3>Developer Plan</h3>
									<h4><sup>$</sup>49<span> / month</span></h4>
									<ul>
										<li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span>
										</li>
										<li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
										<li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span>
										</li>
										<li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span>
										</li>
										<li><i className="bi bi-check"></i>
											<span>Massa ultricies mi quis hendrerit</span></li>
									</ul>
									<div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
								</div>
							</div>

						</div>

					</div>

				</section>

				<section className="section features mt-5" id="features">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="d-lg-flex p-5 rounded-4 content aos-init aos-animate" data-aos="fade-in"
									 data-aos-delay="0">
									<div className="row">
										<div className="col-lg-5 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up"
											 data-aos-delay="0">
											<div className="row">
												<div className="col-lg-11">
													<div className="h-100 flex-column justify-content-between d-flex">
														<div>
															<h2 className="mb-4">Why Choose us</h2>
															<p className="mb-5">Experience the future of finance with
																our secure, efficient, and user-friendly financial
																services. Our cutting-edge platform ensures your
																transactions are safe, streamlined, and easy to manage,
																empowering you to take control of your financial journey
																with confidence and convenience."</p>
														</div>
														<div className="align-self-start"><a
															className="glightbox btn btn-play d-inline-flex align-items-center gap-2"
															href="https://www.youtube.com/watch?v=DQx96G4yHd8"
															data-gallery="video"><i
															className="bi bi-play-fill"></i> Watch the Video</a></div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-7">
											<div className="row justify-content-end">
												<div className="col-lg-11">
													<div className="row">
														<div className="col-sm-6 aos-init aos-animate"
															 data-aos="fade-up" data-aos-delay="0">
															<div className="icon text-center mb-4"><i
																className="bi bi-person-check fs-4"></i></div>
															<h3 className="fs-6 fw-bold mb-3">Interface de facil
																interação</h3>
															<p>Easy navigation with responsive design for various
																devices.</p>
														</div>
														<div className="col-sm-6 aos-init aos-animate"
															 data-aos="fade-up" data-aos-delay="100">
															<div className="icon text-center mb-4"><i
																className="bi bi-graph-up fs-4"></i></div>
															<h3 className="fs-6 fw-bold mb-3">Suporte 24H</h3>
															<p>24/7 service via chat, email, phone, and a detailed help
																center.</p>
														</div>
														<div className="col-sm-6 aos-init aos-animate"
															 data-aos="fade-up" data-aos-delay="200">
															<div className="icon text-center mb-4"><i
																className="bi bi-headset fs-4"></i></div>
															<h3 className="fs-6 fw-bold mb-3">Customização do
																Dashboard</h3>
															<p>24/7 service via chat, email, phone, and a detailed help
																center.</p>
														</div>
														<div className="col-sm-6 aos-init aos-animate"
															 data-aos="fade-up" data-aos-delay="300">
															<div className="icon text-center mb-4"><i
																className="bi bi-shield-lock fs-4"></i></div>
															<h3 className="fs-6 fw-bold mb-3">Segurança</h3>
															<p>Data encryption, fraud detection, and prevention
																mechanisms.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section pricing-v2  mt-5" id="pricing">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-5 mx-auto text-center"><span
								className="subtitle text-uppercase mb-3 aos-init aos-animate" data-aos="fade-up"
								data-aos-delay="0">Preços</span>
								<h2 className="mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Plan
									for every budget</h2>
								<p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">Experience
									the future of finance with our secure, efficient, and user-friendly financial
									services</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 mb-4 mb-md-0 aos-init aos-animate" data-aos="fade-up"
								 data-aos-delay="300">
								<div className="p-5 rounded-4 price-table h-100">
									<h3>Pequenas empresas</h3>
									<p>Choose a plan that fits your personal financial needs and start managing your
										finances more effectively.</p>
									<div className="price mb-4"><strong>Free</strong><span></span></div>
									<div><a className="btn" href="#">Cadastrar</a></div>
								</div>
							</div>
							<div className="col-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
								<div className="p-5 rounded-4 price-table company h-100">
									<div className="row">
										<div className="col-md-6 text-white">
											<h3 className="mb-3 text-white">Personalizado</h3>
											<p className="text-white">Optimize your business financial operations with
												our tailored business
												plans.</p>
											<div className="price mb-4"><strong className="me-1 text-white">$29</strong><span>/ month</span>
											</div>
											<div><a className="btn btn-white hover-outline bg-white" href="#">Entre em
												contato</a>
											</div>
										</div>
										<div className="col-md-6 pricing-features text-white">
											<h4 className="text-uppercase fw-bold mb-3 text-white">Módulos</h4>
											<ul className="list-unstyled d-flex flex-column gap-3">
												<li className="d-flex gap-2 align-items-start mb-0"><span
													className="icon rounded-circle position-relative mt-1"><i
													className="bi bi-check"></i></span><span>App com logo (marca própria)</span>
												</li>
												<li className="d-flex gap-2 align-items-start mb-0"><span
													className="icon rounded-circle position-relative mt-1"><i
													className="bi bi-check"></i></span><span>Integração com sistemas externos via API</span>
												</li>
												<li className="d-flex gap-2 align-items-start mb-0"><span
													className="icon rounded-circle position-relative mt-1"><i
													className="bi bi-check"></i></span><span>Relatórios personalizados sob demanda</span>
												</li>
												<li className="d-flex gap-2 align-items-start mb-0"><span
													className="icon rounded-circle position-relative mt-1"><i
													className="bi bi-check"></i></span><span>Módulo de auditoria e histórico completo</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="row mt-4 mt-5">
					<div className="row mb-5">
						<div className="col-md-5 mx-auto text-center"><span
							className="subtitle text-uppercase mb-3 aos-init aos-animate" data-aos="fade-up"
							data-aos-delay="0">Preços</span>
							<h2 className="mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Plan
								for every budget</h2>
							<p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">Experience
								the future of finance with our secure, efficient, and user-friendly financial
								services</p>
						</div>
					</div>
					<div className="col-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
						<div className="box-client">
							<img
								src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
								className='img-fluid'/>
						</div>
					</div>
					<div className="col-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
						<div className="box-client">
							<img
								src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
								className='img-fluid'/>
						</div>
					</div>
					<div className="col-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
						<div className="box-client">
							<img
								src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
								className='img-fluid'/>
						</div>
					</div>
					<div className="col-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
						<div className="box-client">
							<img
								src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
								className='img-fluid'/>
						</div>
					</div>
					<div className="col-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
						<div className="box-client">
							<img
								src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
								className='img-fluid'/>
						</div>
					</div>
					<div className="col-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
						<div className="box-client">
							<img
								src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
								className='img-fluid'/>
						</div>
					</div>
				</div>

				<section className="section contact__v2" id="contact">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-6 col-lg-7 mx-auto text-center"><span
								className="subtitle text-uppercase mb-3 aos-init aos-animate" data-aos="fade-up"
								data-aos-delay="0">Contato</span>
								<h2 className="h2 fw-bold mb-3 aos-init aos-animate" data-aos="fade-up"
									data-aos-delay="0">Ficou com duvida?</h2>
								<p data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">Entre em contato e ...</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="d-flex gap-5 flex-column">
									<div className="d-flex align-items-start gap-3 aos-init aos-animate"
										 data-aos="fade-up" data-aos-delay="0">
										<div className="icon d-block"><i className="bi bi-telephone"></i></div>
										<span> <span className="d-block">Phone</span><strong>(41) 99541-9995</strong></span>
									</div>
									<div className="d-flex align-items-start gap-3 aos-init aos-animate"
										 data-aos="fade-up" data-aos-delay="100">
										<div className="icon d-block"><i className="bi bi-send"></i></div>
										<span> <span className="d-block">Email</span><strong>info@shartech.com.br</strong></span>
									</div>
									<div className="d-flex align-items-start gap-3 aos-init aos-animate"
										 data-aos="fade-up" data-aos-delay="200">
										<div className="icon d-block"><i className="bi bi-geo-alt"></i></div>
										<span> <span className="d-block">Address</span>
                      <address
						  className="fw-bold">Rua Arnaldo Gusi 44, <br/> Xaxim Curitib/PR</address></span>
									</div>
								</div>
							</div>
							<div className="col-md-6">
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
										<button className="btn btn-primary fw-semibold" type="submit">Send Message
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
